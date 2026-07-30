import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

console.log("Script loaded");

async function loadPage(page) {
    console.log("Loading page:", page);

    const response = await fetch(encodeURI("docs/" + page));
    console.log("Response:", response.status);

    if (!response.ok) {
        throw new Error(`Could not load ${page} (${response.status}) Likely Pages.json has not been updated, please inform maintainers.`);

    }

    const md = await response.text();

    document.getElementById("content").innerHTML =
        marked.parse(md);
}

async function init() {
    console.log("Loading config...");

    const config = await fetch("pages.json")
        .then(r => r.json());

    console.log(config);

    const sidebar = document.getElementById("sidebar");
    const groups = new Map();
    const homePage = { file: "index.md", name: "About Daedalus" };
    const pageStorageKey = "daedalus.documentation.currentPage";
    const pageLinks = new Map();
    let activeLink;

    async function openPage(page, link) {
        try {
            await loadPage(page.file);
            activeLink?.classList.remove("is-active");
            link?.classList.add("is-active");
            activeLink = link;
            localStorage.setItem(pageStorageKey, page.file);
            document.title = `${page.name} | Daedalus Documentation`;
        } catch (error) {
            document.getElementById("content").textContent = error.message;
            console.error(error);
        }
    }

    const pages = [...config.pages].sort((first, second) =>
        (Number(second.priority) || 0) - (Number(first.priority) || 0)
        || first.name.localeCompare(second.name));
    const pagesByFile = new Map([
        [homePage.file, homePage],
        ...pages.map(page => [page.file, page])
    ]);

    pages.forEach(page => {
        const pathParts = page.file.split("/");
        const folder = pathParts.length > 1 ? pathParts[0] : "Documentation";

        if (!groups.has(folder)) {
            const section = document.createElement("details");
            const heading = document.createElement("summary");
            const list = document.createElement("div");

            section.className = "nav-section";
            section.open = true;
            heading.textContent = folder;
            list.className = "nav-list";

            section.append(heading, list);
            sidebar.appendChild(section);
            groups.set(folder, list);
        }

        const link = document.createElement("a");

        link.href = `#${encodeURIComponent(page.file)}`;
        link.textContent = page.name;

        link.onclick = event => {
            event.preventDefault();
            navigateTo(page);
        };

        pageLinks.set(page.file, link);
        groups.get(folder).appendChild(link);
    });

    function getPageFromHash() {
        try {
            return pagesByFile.get(decodeURIComponent(window.location.hash.slice(1)));
        } catch {
            return undefined;
        }
    }

    function navigateTo(page) {
        const hash = `#${encodeURIComponent(page.file)}`;

        if (window.location.hash === hash) {
            openPage(page, pageLinks.get(page.file));
        } else {
            window.location.hash = hash;
        }
    }

    sidebar.querySelector(".brand").addEventListener("click", event => {
        event.preventDefault();
        navigateTo(homePage);
    });

    window.addEventListener("hashchange", () => {
        const page = getPageFromHash();

        if (page) {
            openPage(page, pageLinks.get(page.file));
        }
    });

    const savedPage = pagesByFile.get(localStorage.getItem(pageStorageKey));
    const initialPage = getPageFromHash() ?? savedPage ?? homePage;

    openPage(initialPage, pageLinks.get(initialPage.file));
}

init().catch(console.error);
