import sys

arg1 = float(sys.argv[1])
arg2 = float(sys.argv[2])

if (arg1 + arg2) <= 0:
    print("You have chosen the path of destitution.")

if (arg1 + arg2) > 1 and (arg1 + arg2) <= 100:
    print("You have chosen the path of plenty.")


if (arg1 + arg2) > 100:
    print("You have chosen the path of excess.")