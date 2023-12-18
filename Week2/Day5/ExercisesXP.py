# Tic-Tac-Toe Game
# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.

# Define a board as a list of 9 spaces
board = [' ' for _ in range(9)]


def display_board(board: list) -> None:
    """
    Display the current state of the Tic-Tac-Toe board.

    Args:
    board (list): A list representing the current state of the game board.
    """
    print('*************')
    print('* ' + board[0] + ' | ' + board[1] + ' | ' + board[2] + ' *')
    print('* ' + '--+---+--' + ' *')
    print('* ' + board[3] + ' | ' + board[4] + ' | ' + board[5] + ' *')
    print('* ' + '--+---+--' + ' *')
    print('* ' + board[6] + ' | ' + board[7] + ' | ' + board[8] + ' *')
    print('*************')


def player_input(player: str) -> int:
    """
    Get input from the player for their move, ensuring it's a valid board position.

    Args:
    player (str): The current player ('X' or 'O').

    Returns:
    int: The position on the board where the player wants to place their mark, adjusted for list indexing.
    """
    while True:
        try:
            position = int(input(f"Player {player}, choose your cell (1-9): "))
            if 1 <= position <= 9:
                return position - 1  # Adjusting for list index which starts at 0
            else:
                print("Invalid input. Please enter a number between 1 and 9.")
        except ValueError:
            print("Invalid input. Please enter a number.")


def check_win(board: list, mark: str) -> bool:
    """
    Check if the current player has won the game.

    Args:
    board (list): The game board.
    mark (str): The mark of the current player ('X' or 'O').

    Returns:
    bool: True if the player has won, False otherwise.
    """
    # Define all possible win conditions
    win_conditions = [(0, 1, 2), (3, 4, 5), (6, 7, 8),  # rows
                      (0, 3, 6), (1, 4, 7), (2, 5, 8),  # columns
                      (0, 4, 8), (2, 4, 6)]  # diagonals
    # Check if any win condition is met
    for condition in win_conditions:
        if all(board[i] == mark for i in condition):
            return True
    return False


def play() -> None:
    """
    Control the flow of the Tic-Tac-Toe game.
    """
    current_player = 'X'  # Starting player

    # Continue the game until the board is full
    while ' ' in board:
        display_board(board)
        position = player_input(current_player)

        # Check if the chosen position is available
        if board[position] == ' ':
            board[position] = current_player
        else:
            print("That position is already taken. Choose another.")
            continue

        # Check if the current move wins the game
        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            return

        # Switch players
        if current_player == 'X':
            current_player = 'O'
        else:
            current_player = 'X'

    print("It's a tie!")


# # Start the game
# play()
if __name__ == "__main__":
    play()

