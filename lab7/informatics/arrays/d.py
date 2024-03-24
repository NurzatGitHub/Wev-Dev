n = int(input())
s = input()
l = []

l = s.split(' ')

res = 0
for i in range(1, n):
    if int(l[i]) > int(l[i-1]):
        res += 1
print(res) 