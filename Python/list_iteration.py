import sys
listArguments = sys.argv
listArguments.pop(0)
for index, item in enumerate(listArguments,start=1):
    print(f"{index}. {item}")