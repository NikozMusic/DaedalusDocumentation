# CommandAPI

The `command` API lets you execute and get the return values of commands. This API is particularly useful when migrating from ordinary datapack development as it lets you utilize the methods you are already accustomed to in Lua.

All executions return two values, a `result` and an `output`. Result will be the literal return result (0 indicating failiure) of the command, where as output will be the literal string the command returns to the server.



this API does not relate to `Custom Commands`. For this see `module` in `core`.

|                                       |                                                                              |
|---------------------------------------|------------------------------------------------------------------------------|
| command.execute(command)              | Executes the provided string as a comand on the server                       |
| command.executeAs(entity, command)    | Executes the provided string as a command in the name of the provided entity |
| command.executeAt(x, y, z, command)   | Executes the provided string as a command at the given coordinates           |
| command.executeIn(levelName, command) | Executes the provided string as a command in the given level                 |
