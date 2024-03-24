a = int(input())
s = ""
for x in range(1, a + 1):
    if a % x == 0:
        s += str(x) + " "
print(s)