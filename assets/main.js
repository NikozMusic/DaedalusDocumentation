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
    let activeLink;

    const pages = [...config.pages].sort((first, second) =>
        (Number(second.priority) || 0) - (Number(first.priority) || 0)
        || first.name.localeCompare(second.name));

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

        link.onclick = async event => {
            event.preventDefault();

            try {
                await loadPage(page.file);
                activeLink?.classList.remove("is-active");
                link.classList.add("is-active");
                activeLink = link;
            } catch (error) {
                document.getElementById("content").textContent = error.message;
                console.error(error);
            }
        };

        groups.get(folder).appendChild(link);
    });

    sidebar.querySelector("a")?.click();
}

init().catch(console.error);
