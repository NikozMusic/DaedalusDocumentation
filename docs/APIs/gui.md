# GuiAPI

The `gui` API lets you open custom chest GUIs for players. Vanilla item transfer, pickup, and drag are suppressed entirely in Daedalus-created menus - use `gui.onClick` to implement your own click behavior.

| Function                         | Description                                                                           |
|----------------------------------|---------------------------------------------------------------------------------------|
| gui.open(player, title, rows)    | Opens a Daedalus-controlled chest GUI for a player. `rows` must be 1-6                |
| gui.getOpen(player)              | Returns the menu the player currently has open, or `nil` if it's just their inventory |
| gui.getTitle(player)             | Returns the title of the player's currently open menu, or `nil`                       |
| gui.close(player)                | Closes whatever container the player currently has open                               |
| gui.setItem(menu, slot, stack)   | Sets the item in a slot (0-indexed)                                                   |
| gui.getItem(menu, slot)          | Returns the item in a slot (0-indexed), or `nil` if empty                             |
| gui.clearItem(menu, slot)        | Clears a slot (0-indexed)                                                             |
| gui.getSlotCount(menu)           | Returns the total number of slots in the menu                                         |
| gui.onClick(menu, callback)      | Registers a click handler for a menu created via `gui.open`                           |

`clickType` is a string that can be one of the following: 

`"left"`, `"right"`, `"shift_left"`, `"shift_right"`, `"hotbar_swap"`, `"middle"`, `"drop"`, `"drop_all"`, `"drag"`, `"double_click"`, or `"other"`.


