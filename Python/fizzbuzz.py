import sys

listArgument = sys.argv
listArgument.pop(0)

for item in listArgument:
    if int(item)%3 == 0 and int(item)%5 == 0:
        print("fizzbuzz")
    
    if int(item)%3 == 0 and int(item) % 5 != 0:
        print("fizz")
    
    if int(item)%5 == 0 and int(item) % 3 != 0:
        print("buzz")
    
    if int(item)%5 != 0 and int(item) %3 != 0:
        print(item)