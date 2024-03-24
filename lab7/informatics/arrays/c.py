n = int(input())
s = input()
l = []

l = s.split(' ')

res = 0
for i in range(0, n):
    if int(l[i]) > 0:
        res += 1
print(res) 