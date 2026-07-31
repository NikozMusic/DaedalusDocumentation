# PlayersAPI

The `players` API provides lookup and management functions for connected players.

| Function                             | Description                                                                                   |
|--------------------------------------|-----------------------------------------------------------------------------------------------|
| players.getUUIDByName(name)          | Returns the UUID string of an online player by name, or `nil` if not online                   |
| players.getByName(name)              | Returns the ServerPlayer entity by username, or `nil` if not online                           |
| players.isOnline(name)               | Returns whether a player with the given name is currently online                              |
| players.getName(player)              | Returns the player's username                                                                 |
| players.kick(player, reason)         | Disconnects a player from the server. `reason` defaults to `"Kicked by an operator."`         |
| players.sendMessage(player, message) | Sends a plain-text system message to the player's chat. For rich text use `text.send` instead |
| players.getPing(player)              | Returns the player's current ping, in milliseconds                                            |
| players.getGameMode(player)          | Returns the player's game mode as `"survival"`, `"creative"`, `"adventure"`, or `"spectator"` |
| players.setGameMode(player, mode)    | Sets the player's game mode                                                                   |