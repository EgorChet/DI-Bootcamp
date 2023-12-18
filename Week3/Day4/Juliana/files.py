

#opening a file
#old fashion way

# f = open('example.txt')
# f.readlines()
# f.close()

# with open('example.txt', encoding = 'utf-8', mode='r') as f:
#     original_text = f.read()
#     print(original_text)

#writing in the file
# with open('example.txt', encoding = 'utf-8', mode='r+') as f:
#     # f.write(my_line) #overwrite
#     original_text = f.read()
#     print(original_text)
#     my_line = '\nHELLO TESTING'    
#     f.write(my_line)


def read_file(file_name):
    with open(file_name, encoding = 'utf-8', mode='r') as f:
        file_text = f.readlines() #to get a list of the lines as output
        return file_text

def read_and_write(file_name, text_add):
    with open(file_name, encoding = 'utf-8', mode='r+') as f:
        f.read()
        f.write(f'\n{text_add}')
        # print(f.readlines())
    
read_and_write('example.txt', 'adding from function')
print(read_file('example.txt'))





