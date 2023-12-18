# import random
# # Exercise 1
#
#
# def display_message():
#     print("I am learning how to program in Python, HTML, CSS, JS and so on")
#
#
# display_message()
#
#
# # Exercise 2
#
#
# def favorite_book(title):
#     print(f"\nOne of my favorite books is {title}.")
#
#
# favorite_book("Harry Potter")
#
#
# # Exercise 3
#
#
# def describe_city(city, country="iceland"):
#     print(f"\n{city.capitalize()} is in {country.capitalize()}")
#
#
# describe_city('reykjavik')
# describe_city('moscow', 'russia')
#
#
# # Exercise 4
# # Regular Version
#
#
# def random_number_check(user_number):
#     if 0 <= user_number <= 100:
#         random_number = random.randint(1, 100)
#         if user_number == random_number:
#             print("\nSuccess! Both numbers are the same.\n")
#         else:
#             print(f"\nFail! Your number was {user_number}, but the random number was {random_number}.\n")
#     else:
#         print("\nThe number must be between 0 and 100.\n")
#
#
# random_number_check(25)
#
#
# # Exercise 4
# # Fun Version
#
#
# def random_number_until_success(number):
#     if not (0 <= number <= 100):
#         print("\nThe number must be between 0 and 100.")
#         return
#
#     attempts = 0
#     while True:
#         attempts += 1
#         random_number = random.randint(1, 100)
#         if number == random_number:
#             print(f"\nSuccess! Both numbers are the same after {attempts} attempts.")
#             break
#         else:
#             print(f"Attempt {attempts}: Your number was {number}, but the random number was {random_number}.")
#
#
# random_number_until_success(25)
#
#
# # Exercise 5
# # Part 2
#
#
# def make_shirt(size, text):
#     print(f"\nThe size of the shirt is {size} and the text is {text}")
#
#
# make_shirt('S', 'We will make America Great Again!!!')
#
#
# # Exercise 5
# # Part 2
#
#
# def make_shirt(size="L", text="I Love Python"):
#     print(f"\nThe size of the shirt is {size} and the text is {text}")
#
#
# make_shirt()
# make_shirt('M')
# make_shirt("XS", "I Love Tel-Aviv")
# make_shirt(text='Python is Amazing!\n', size='XL')
#
# Exercise 6
# Part 1
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


def show_magicians():
    for magician in magician_names:
        print(f"\n{magician}")

show_magicians()


# Exercise 6
# Part 2
# uses the index i to iterate over and modify each element of the magician_names list.


def make_great():
    for i, name in enumerate(magician_names):
        magician_names[i] = magician_names[i] + " the Great"


# make_great(magician_names)
# show_magicians(magician_names)
make_great()
show_magicians()

# # Exercise 7
# # Part1
#
# def get_random_temp():
#     print()
#     temp = str(random.randint(-10, 40)) + " degrees Celsius."
#     return temp
#
#
# print(get_random_temp())
#
#
# # Exercise 7
# # Part2
#
#
# def main():
#
#     variable = get_random_temp()
#     print(f"The temperature right now is {variable}\n")
#
#
# main()
#
# # Exercise 7
# # Part3
#
#
# def get_random_temp():
#     temp = random.randint(-10, 40)
#     return temp
#
#
# def main():
#     temperature = get_random_temp()
#     advice = ""
#
#     if temperature < 0:
#         advice = "Brrr, that’s freezing! Wear some extra layers today."
#     elif 0 <= temperature <= 16:
#         advice = "Quite chilly! Don’t forget your coat."
#     elif 17 <= temperature <= 23:
#         advice = "It's a bit cool. A light jacket would be a good choice."
#     elif 24 <= temperature <= 32:
#         advice = "Warm weather! Perfect for a day out in the sun."
#     elif 33 <= temperature <= 40:
#         advice = "It's really hot! Stay hydrated and avoid the midday sun."
#
#     print(f"The temperature right now is {temperature} degrees Celsius. {advice}")
#
#
# main()
# print()
#
#
# # Exercise 7
# # Part4
#
#
# def get_random_temp(season):
#     if season.lower() == 'winter':
#         temp = random.randint(-10, 16)
#     elif season.lower() == 'spring':
#         temp = random.randint(12, 25)
#     elif season.lower() == 'summer':
#         temp = random.randint(20, 40)
#     elif season.lower() == 'fall':
#         temp = random.randint(10, 25)
#     else:
#         temp = random.randint(-10, 40)
#     return temp
#
#
# def main():
#     season = input("Please enter a season: ")
#     temperature = get_random_temp(season)
#     advice = ""
#
#     if temperature < 0:
#         advice = "Brrr, that’s freezing! Wear some extra layers today."
#     elif 0 <= temperature <= 16:
#         advice = "Quite chilly! Don’t forget your coat."
#     elif 17 <= temperature <= 23:
#         advice = "It's a bit cool. A light jacket would be a good choice."
#     elif 24 <= temperature <= 32:
#         advice = "Warm weather! Perfect for a day out in the sun."
#     elif 28 <= temperature <= 40:
#         advice = "It's really hot! Stay hydrated and avoid the midday sun."
#     print(f"The temperature right now is {temperature} degrees Celsius. {advice}")
#
#
# main()
#
# # Exercise 7
# # Bonuses
#
#
# def get_season(month):
#     if month == 3 or month == 4 or month == 5:
#         return 'spring'
#     elif month == 6 or month == 7 or month == 8:
#         return 'summer'
#     elif month == 9 or month == 10 or month == 11:
#         return 'fall'
#     else:
#         return 'winter'
#
#
# def get_random_temp(season):
#     if season == 'winter':
#         temp = random.uniform(-10, 16)
#     elif season == 'spring':
#         temp = random.uniform(0, 25)
#     elif season == 'summer':
#         temp = random.uniform(20, 40)
#     elif season == 'fall':
#         temp = random.uniform(10, 25)
#     else:
#         temp = random.uniform(-10, 40)  # Default case
#     return temp
#
#
# def main():
#     month_names = {
#         1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May',
#         6: 'June', 7: 'July', 8: 'August', 9: 'September',
#         10: 'October', 11: 'November', 12: 'December'
#     }
#
#     month = int(input("Please enter the number of the month (1-12): "))
#     month_name = month_names.get(month, "Unknown Month")
#     season = get_season(month)
#     temperature = get_random_temp(season)
#     advice = ""
#
#     if temperature < 0:
#         advice = "Brrr, that’s freezing! Wear some extra layers today."
#     elif 0 <= temperature <= 16:
#         advice = "Quite chilly! Don’t forget your coat."
#     elif 17 <= temperature <= 23:
#         advice = "It's a bit cool. A light jacket would be a good choice."
#     elif 24 <= temperature <= 32:
#         advice = "Warm weather! Perfect for a day out in the sun."
#     elif 33 <= temperature <= 40:
#         advice = "It's really hot! Stay hydrated and avoid the midday sun."
#
#     print(f"The temperature on a random day in {month_name} can be {temperature:.2f} degrees Celsius. {advice}")
#
#
# main()


# Exercise 8
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]


def ask_questions(data: list) -> tuple:
    """
    This function asks the questions to the user, and check his answers.
    It counts correct, incorrect answers and creates a list of wrong_answers.
    """
    incorrect_count = 0
    correct_count = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ")
        if user_answer.strip().lower() in item["answer"].lower():
            correct_count += 1
        else:
            incorrect_count += 1
            wrong_answers.append((item["question"], user_answer, item["answer"]))

    return correct_count, wrong_answers, incorrect_count


def display_results(correct_count: int, wrong_answers: list, incorrect_count: int, data: list) -> None:
    """
    This function prepares and displays the result of the quiz.
    It also offers a chance to replay the quiz.
    """
    total_questions = correct_count + incorrect_count
    print(f"\nYou scored {correct_count} out of {total_questions}.\n")

    if incorrect_count > 0:
        print("\nQuestions you answered incorrectly:\n")
        for question, user_response, correct_answer in wrong_answers:
            print(f"Question: {question}\nYour answer: {user_response}\nCorrect answer: {correct_answer}\n")

    # Custom messages based on performance
    if incorrect_count == 6:
        print("Let me guess... You've never watched Star Wars??? Please come back after watching the movies.")
    elif incorrect_count == 0:
        print("You are a Star Wars Guru! Congrats!")
    elif incorrect_count == 1:
        print("You are almost there! Congrats!")
    elif incorrect_count > 3:
        print("You had more than 3 incorrect answers. Would you like to play again? (yes/no)")
        play_again = input().lower()
        if play_again == "yes":
            correct_count, wrong_answers, incorrect_count = ask_questions(data)
            display_results(correct_count, wrong_answers, incorrect_count, data)  # Recursive call with new results
    else:
        print("Thank you for playing! We would love for you to come back and play our quiz again!!!")

correct_count, wrong_answers, incorrect_count = ask_questions(data)
display_results(correct_count, wrong_answers, incorrect_count, data)