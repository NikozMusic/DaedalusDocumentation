# Your First Module

This guide walks you through making a small Daedalus module. By the end, it will introduce itself in the module list and send a message to chat when it loads.

Before you begin, make sure Daedalus is installed and has been started at least once.

## Create the module folder

Create a directory for your module. The directory name does not affect how Daedalus identifies the module, but it is recommended to name it the same or similar to the module id.

Inside that directory, create a file named `module.json`. This file tells Daedalus the module's ID and its basic information.

## `module.json`

Module IDs may contain lowercase letters and underscores only. Let's start with the following:

```json
{
  "data": {
    "id": "mymodule"
  }
}
```

This is enough for Daedalus to register the module, but it will look rather bare in-game. Let's add an `info` section to give it a proper name, description, and author:

```json
{
  "data": {
    "id": "mymodule"
  },
  "info": {
    "name": "My First Module",
    "description": "The first module I created in Daedalus!",
    "author": "Me"
  }
}
```

Daedalus reads this information when it loads the module, so players and server administrators can see what the module is and who made it.

Now we want to actually use Daedalus and not just have some fancy text appear on a list so let's get into the coding part.

## `main.lua`

Create a file named `main.lua` in the same directory. Daedalus loads `main.lua` by default and does not look for a different entry file so this name matters.

Add the following code:

```lua
command.execute("say Hello World!")
```

When the module loads, this runs Minecraft's `say` command and writes `Hello World!` to the game chat. You now have a working Daedalus module. but let's say we want to do something a bit more advanced, like detecting when a something jumps.
We can do this using Daedalus' EventAPI by binding `events.Event.ENTITY_JUMP` to a function.

We will seperate the function and the event call in this example for simplicitie's sake, and we will be using `events.bindGlobal()` to complete this as `ENTITY_JUMP` listens to all jump events, and we want to select only players.

```lua
local function jumpFunction(ent) --We name this "ent" to not collide with the API by the name "entity"
    if entity.isPlayer(ent) then --This checks if our entity is a player or not
       command.execute("say "..entity.getName(ent).." Jumped!") --
    end
end

events.bindGlobal(events.Event.ENTITY_JUMP, jumpFunction) --ENTITY_JUMP passes what entity jumped to the function it calls as its first argument.
```
This code should print the name of any player that jumps.

And that's it! we recommend you take a look through the API documentation on this site for further information on what Daedalus can do, we also recommend installing the LuaLS from Daedalus' GitHub if you want autofill or syntax checking in your IDE.

