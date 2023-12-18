my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
your_list = [2, 3, 1, 2, 42, 1, 5, 3,]

def sum_list(some_list):
    try:
        result = sum(some_list)

    except TypeError:
        print("mixed values in the list")
        raise
    else:
        print(result)

sum_list(your_list)
print()
print("2nd result:")
sum_list(my_list)



    
