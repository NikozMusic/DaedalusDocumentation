# Core API

The `minecraft` API provides server information and logging helpers.

|                                 |                                                       |
|---------------------------------|-------------------------------------------------------|
| minecraft.log()                 | Logs the provided string to the console               |
| minecraft.warn()                | Sends the provided string as a warning to the console |
| minecraft.error()               | Sends the provided string as an error to the console  |
| minecraft.getMinecraftVersion() | Returns the current version of Minecraft as a string  |
| minecraft.getDaedalusVersion()  | Returns the current version of Daedalus as a string   |
| minecraft.sleep(time)           | Waits the amount set in `time` in seconds             |

`log` writes to the server console with a `[Lua]` prefix. `warn` and `error` log at their respective levels.
