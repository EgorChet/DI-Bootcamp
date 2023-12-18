data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]


def run_star_wars_quiz(quiz_info: list) -> None:
    correct_count = 0
    incorrect_count = 0
    wrong_answers = []

    for item in quiz_info:
        user_response = input(item["question"] + " ")
        if user_response.lower() in item["answer"].lower():
            correct_count += 1
        else:
            incorrect_count += 1
            wrong_answers.append((item["question"], user_response, item["answer"]))
    result_quiz(correct_count, incorrect_count, wrong_answers)


def result_quiz(correct_count: int, incorrect_count: int, wrong_answers: list) -> None:
    total_questions = correct_count + incorrect_count
    print(f"\nYou scored {correct_count} out of {total_questions}.\n")

    if incorrect_count == 0:
        print("You are Star Wars Guru! Congrats!")

    elif incorrect_count > 0:
        print("\nQuestions you answered incorrectly:\n")
        for question, user_response, correct_answer in wrong_answers:
            print(f"Question: {question}\nYour answer: {user_response}\nCorrect answer: {correct_answer}\n")

    elif incorrect_count == 1:
        print("You are almost there! Congrats!")

    elif incorrect_count > 3:
        print("You had more than 3 incorrect answers. Would you like to play again? (yes/no)")
        play_again = input().lower()
        if play_again == "yes":
            run_star_wars_quiz(data)
    elif correct_count == 0:
        print(f"Let me guess... You Never Watched Star Wars??? Please come back after watching the movies")
    else:
        print("Thank you for playing we would love you to comeback and play our quiz again!!!")


run_star_wars_quiz(data)
