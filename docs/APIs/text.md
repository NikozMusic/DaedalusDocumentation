# TextAPI

The `text` API provides MiniMessage-based rich text. See the [MiniMessage documentation](https://docs.advntr.dev/minimessage/) for tag syntax (e.g. `"<red>Hello</red>"`, `"<gradient:red:blue>Hi!</gradient>"`).

| Function                 | Description                                                                                   |
|--------------------------|-----------------------------------------------------------------------------------------------|
| text.strip(input)        | Deserializes a MiniMessage string and returns its plain text with all formatting tags removed |
| text.send(player, input) | Deserializes a MiniMessage string and sends it to the player as a formatted system message    |
| text.parse(input)        | Parses a MiniMessage string into a Minecraft-compatible text component                        |