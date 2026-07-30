# Modules

Modules are what Daedalus calls the bundles of Lua files it loads and runs into a server environment. Modules are composed of one JSON file and 1 Lua file minimum. This bundle can be a regular directory or a ZIP archive.

## `module.json`
this is required for your module to be recognized and loaded by Daedalus, and it is important to get this file above all else correct.

A module consists of a `data` section and an `info` section with the former dictating the actual data and parameters of the module and the latter acting as optional cosmetic information, though we do at least recommend having a `name`.
```json
{
  "data": {
    "id": "example_module"
  },
  "info": {
    "name": "Example Module",
    "description": "Daedalus template module",
    "author" : "NikozMusic"
  }
}
```

## `commands.json`
This optional file lets developers create their own custom commands that are loaded at runtime. Every custom command accepts any number of arguments as strings, and it is up to the bound Lua file to make sense of them.

In this case `name` is not optional and is the literal name of the command they will type, in this example it would be "/ExampleCommand".

Filepath is the file representation of where that file is located, all modules start searching from the module directory itself.
```json
{
  "commands": {
    "example_command": {
      "name": "ExampleCommand",
      "filepath": "exampleCommand.lua"
    },
    "command2": {
      "name": "myCommand",
      "filepath": "commands/abc.lua"
    }
  }
}
```

## main.lua
Your main Lua file can contain any code and is executed immediately upon the server loading the world. To execute other files you must use `require("filepath")`
```lua
minecraft.log("Hello World!")

//Any code here is complely up to you!

events.bindGlobal(events.Events.PLAYER_JOIN, function(player)
    command.execute("say Welcome "..players.getName(player).."!")
end)
```
