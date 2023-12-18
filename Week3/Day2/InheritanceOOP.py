# Try to recreate the class explained below:
#
# We have a class called Door that has an attribute of is_opened declared when an instance is initiated.
#
# We can create a class called BlockedDoor that inherits from the base class Door.
#
# We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.


class Door:

    def __init__(self, is_opened):
        self.is_opened = is_opened

    def open_door(self, is_opened):
        if not self.is_opened:
            self.is_opened = True
            print("Door opened.")
        else:
            print("Door is already open.")
    def close_door(self, is_opened):
        if self.is_opened:
            self.is_opened = False
            print("Door closed.")
        else:
            print('Door is already closed.')
 class BlockedDoor(Door):
     def open_door(self):
         raise Exception("BlockedDoor cannot be opened.")

     def close_door(self):
         raise Exception("BlockedDoor cannot be closed.")

 # Example usage
 normal_door = Door(is_opened=False)
 normal_door.open_door()  # Should work normally

 blocked_door = BlockedDoor(is_opened=False)
 blocked_door.open_door()  # Should raise an exception