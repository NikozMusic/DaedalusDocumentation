# EventsAPI

The `events` API allows users to bind Lua functions to in-game events.

## Functions

| Function                                     | Description                                                              |
|----------------------------------------------|--------------------------------------------------------------------------|
| events.bindGlobal(eventId, callback)         | Binds a server-wide listener for the given event                         |
| events.bindEntity(entity, eventId, callback) | Binds a listener scoped to a single entity instance                      |
| events.unbindGlobal(eventId)                 | Removes this module's global listener(s) for the given event             |
| events.unbindEntity(entity, eventId)         | Removes this module's listener(s) for the given event on this entity     |
| events.once(eventId, callback)               | Binds a global listener that automatically unbinds itself after it fires |


# Events

EventsAPI exposes the Events enum `events.Events`, full of every event that you can bind your functions to, as seen below. Anything marked as Cancellable can be canceled by returning `false` in the function.

| Enum                    | Description                                                                    | Global / Entity  | Cancellable? |
|-------------------------|--------------------------------------------------------------------------------|------------------|--------------|
| TICK                    | Fires every server tick                                                        | Global           | false        |
| PLAYER_JOIN             | Fires when a player joins the server, returns `player`                         | Global           | false        |
| PLAYER_LEAVE            | Fires when a player leaves the server, returns `player`                        | Global           | false        |
| PLAYER_DEATH            | Fires when a player dies, returns `player`                                     | Global           | false        |
| PLAYER_RESPAWN          | Fires when a player respawns, returns `player`                                 | Global           | false        |
| PLAYER_CHAT             | Fires when a player sends a chat message, returns `player`, `message`          | Global           | false        |
| PLAYER_ATTACK_ENTITY    | Fires when a player attacks something, returns `player`, `targetEntity`        | Global           | false        |
| PLAYER_INTERACT_ENTITY  | Fires when a player interacts with an entity, returns `player`, `targetEntity` | Global           | false        |
| SERVER_START            | Fires when the server starts                                                   | Global           | false        |
| SERVER_STOP             | Fires when the server stops                                                    | Global           | false        |
| ENTITY_JUMP             | Fires when an entity jumps, returns `entity`                                   | Both             | false        |
| ENTITY_DAMAGE           | Fires after damage has been applied, returns `entity`, `amount`                | Both             | false        |
| ENTITY_DEATH            | Fires when an entity dies, returns `entity`                                    | Both             | false        |
| ENTITY_HURT             | Fires before damage is applied, returns `entity`, `amount`                     | Both             | true         |
| ENTITY_HEAL             | Fires when an entity is healed, returns `entity`, `amount`                     | Both             | false        |
| ENTITY_MOVE             | Fires on player movement past a threshold, returns `entity`, `x`, `y`, `z`     | Both             | false        |
| ENTITY_LOAD             | Fires on spawn and on chunk load - not spawn-exclusive, returns `entity`       | Global           | false        |
| BLOCK_BREAK             | Fires when a block is broken, returns `player`, `x`, `y`, `z`, `blockId`       | Global           | false        |
| BLOCK_PLACE             | Fires when a block is placed, returns `player`, `x`, `y`, `z`, `blockId`       | Global           | false        |
| BLOCK_INTERACT          | Fires when a player right-clicks a block, returns `player`, `x`, `y`, `z`      | Global           | false        |
| ITEM_USE                | Fires when a player uses an item, returns `player`, `stack`                    | Global           | false        |
| ITEM_PICKUP             | Fires when a player picks up an item, returns `player`, `stack`                | Global           | false        |
| ITEM_DROP               | Fires when a player drops an item, returns `player`, `stack`                   | Global           | false        |

Note: `BLOCK_INTERACT` may fire twice per click (once for the main hand, once for the off hand).