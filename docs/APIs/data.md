# DataAPI

The `data` API provides persistent, per-module-namespaced key/value storage attached to entities and items.

Paths are dot-separated (e.g. `"stats.strength"`) and are automatically namespaced under the calling module's id, so two modules can use the same path without colliding.

## Entity data

| Function                               | Description                                                               |
|----------------------------------------|---------------------------------------------------------------------------|
| data.entitySet(entity, path, value)    | Sets a value at the given path on the entity                              |
| data.entityGet(entity, path)           | Gets the value at the given path on the entity                            |
| data.entityHas(entity, path)           | Returns whether a value exists at the given path                          |
| data.entityRemove(entity, path)        | Removes the value at the given path                                       |
| data.entityList(entity)                | Lists the top-level keys stored for this module's namespace on the entity |
| data.entityClear(entity)               | Clears all data this module has stored on the entity                      |

## Item data

| Function                          | Description                                                             |
|-----------------------------------|-------------------------------------------------------------------------|
| data.itemSet(stack, path, value)  | Sets a value at the given path on the item stack                        |
| data.itemGet(stack, path)         | Gets the value at the given path on the item stack                      |
| data.itemHas(stack, path)         | Returns whether a value exists at the given path                        |
| data.itemRemove(stack, path)      | Removes the value at the given path                                     |
| data.itemList(stack)              | Lists the top-level keys stored for this module's namespace on the item |
| data.itemClear(stack)             | Clears all data this module has stored on the item                      |