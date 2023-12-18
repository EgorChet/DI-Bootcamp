# Function to read the file line by line and print each line
def read_line_by_line(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            print(line.strip())

# Function to read a specific line (e.g., line 5) from the file and print it
def read_specific_line(file_path, line_number):
    with open(file_path, 'r') as file:
        for i, line in enumerate(file, 1):
            if i == line_number:
                print(line.strip())
                return

# Function to read the first n characters from the file and print them
def read_first_n_characters(file_path, n):
    with open(file_path, 'r') as file:
        print(file.read(n))

# Function to read the entire file and return it as a list of strings, then print the list
def read_file_to_list(file_path):
    with open(file_path, 'r') as file:
        lines = [line.strip() for line in file]
        print(lines)
        return lines

# Function to split each word in a list of strings and print the result
def split_words(lines):
    words = []
    for line in lines:
        words.extend(line.split())
    print(words)
    return words

# Function to count the occurrences of specific names in a list of strings and print the counts
def count_names_occurrences(names, lines):
    name_counts = {name: 0 for name in names}
    for line in lines:
        for name in names:
            name_counts[name] += line.count(name)
    print(name_counts)
    return name_counts

# Function to append a name at the end of the file only if it's not already there
def append_name(file_path, name):
    with open(file_path, 'r') as file:
        lines = file.readlines()
        if lines and lines[-1].strip() == name:
            print(f"'{name}' is already at the end of the file")
            return

    with open(file_path, 'a') as file:
        file.write("\n" + name)
    print(f"Appended '{name}' at the end of the file")

# Function to append "SkyWalker" next to each occurrence of "Luke"
def append_skywalker_to_luke(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    updated_lines = []
    for line in lines:
        if "LukeSkyWalker" in line:
            updated_lines.append(line)
        else:
            updated_lines.append(line.replace("Luke", "LukeSkyWalker"))

    with open(file_path, 'w') as file:
        file.writelines(updated_lines)
    print("Appended 'SkyWalker' next to each occurrence of 'Luke'")

# Main execution
file_path = '/Users/egorchetverikov/Desktop/DI-Bootcamp/Week3/Day4/nameslist.txt'

# Execute each function
print("Step 1: Reading the file line by line")
read_line_by_line(file_path)

line_number = 5
print(f"\nStep 2: Reading line {line_number}")
read_specific_line(file_path, line_number)

n = 5
print(f"\nStep 3: Reading the first {n} characters")
read_first_n_characters(file_path, n)

print("\nStep 4: Reading the entire file into a list of strings")
file_lines = read_file_to_list(file_path)

print("\nStep 5: Splitting each word in the list of strings")
split_words(file_lines)

names_to_count = ["Darth", "Luke", "Lea"]
print("\nStep 6: Counting specific names")
count_names_occurrences(names_to_count, file_lines)

your_first_name = "Egor"
print(f"\nStep 7: Appending '{your_first_name}' at the end of the file")
append_name(file_path, your_first_name)

print("\nStep 8: Appending 'SkyWalker' next to each occurrence of 'Luke'")
append_skywalker_to_luke(file_path)
