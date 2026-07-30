# Modules

A module is a bundle of Lua code that Daedalus loads into a Minecraft server. You can distribute a module as a folder or a ZIP archive.

At minimum, every module needs:

```text
example_module/
    module.json  - Module metadata
    main.lua     - Main code
```

You can also add `commands.json` when your module provides custom commands.

## `module.json`

`module.json` tells Daedalus how to identify your module. The `data` field is required where as the `info` section is optional, but highly recommended.

```json
{
  "data": {
    "id": "example_module"
  },
  "info": {
    "name": "Example Module",
    "description": "Daedalus template module",
    "author": "NikozMusic"
  }
}
```

| Field         | Purpose                            |
|---------------|------------------------------------|
| `id`          | Required unique ID for the module. |
| `name`        | Human readable name.               |
| `description` | Short description of your module.  |
| `author`      | Name of the author or authors.     |

## `commands.json`

Use `commands.json` to register custom commands. The command's Lua file receives the arguments as strings and decides how to handle them.

`name` is the command players type in the command bar, without the leading `/`. `filepath` is the Lua handler path relative to the module folder.

```json
{
  "commands": {
    "example_command": {
      "name": "ExampleCommand",
      "filepath": "exampleCommand.lua"
    },
    "second_command": {
      "name": "myCommand",
      "filepath": "commands/abc.lua"
    }
  }
}
```

This example registers `/ExampleCommand` and `/myCommand` binding the former to `exampleCommand.lua` and the latter to a subfolder called `commands` as `abc.lua`.

## `main.lua`

`main.lua` runs when the server loads the world. Use it to set up your module, register events, and load helper files.

To load another Lua file from your module, call `require` with its extension-less relative path. All Daedalus APIs and base Lua APIs are exposed to all module files at all times making importing them unnecessary.

```lua
minecraft.log("Example Module loaded")

events.bindGlobal(events.Events.PLAYER_JOIN, function(player)
    command.execute("say Welcome " .. players.getName(player) .. "!")
end)
```
