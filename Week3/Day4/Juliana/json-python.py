import json

#converting a python dict into json file

my_family = {
    'parents':['Beth', 'James'],
    'children': ['Summer', 'Mark']
}

json_file = 'family.json'

with open(json_file, 'w') as file_obj:
   json.dump(my_family, file_obj)

#retrieve json data

json_file = 'family.json'

with open(json_file, 'r') as file_obj:
   my_family2 = json.load(file_obj)

print(my_family2)
