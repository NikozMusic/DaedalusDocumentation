# ItemAPI

The `item` API lets you create and inspect item stacks.

| Function                           | Description                                                                                 |
|------------------------------------|---------------------------------------------------------------------------------------------|
| item.createItem(itemId, count)     | Creates a new ItemStack. Errors if `itemId` is invalid or unknown                           |
| item.getId(stack)                  | Returns the item id of the stack (e.g. `"minecraft:diamond_sword"`)                         |
| item.isEmpty(stack)                | Returns whether the stack is empty                                                          |
| item.getCount(stack)               | Returns the stack's current count                                                           |
| item.setCount(stack, count)        | Sets the stack's count                                                                      |
| item.getMaxStackSize(stack)        | Returns the maximum stack size for this item                                                |
| item.copy(stack)                   | Returns a new, independent copy of the stack                                                |
| item.isDamageable(stack)           | Returns whether the item can take durability damage                                         |
| item.getDamage(stack)              | Returns the current damage value of the stack                                               |
| item.setDamage(stack, damage)      | Sets the current damage value of the stack                                                  |
| item.getMaxDamage(stack)           | Returns the maximum durability of the stack                                                 |
| item.matches(stackA, stackB)       | Returns whether both stacks are the same item type with the same components, ignoring count |