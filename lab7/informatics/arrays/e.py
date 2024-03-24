n = int(input())
s = input()
l = []

l = s.split(' ')

res = 0
for i in range(1, n):
    if (int(l[i]) > 0 and int(l[i-1]) > 0) or (int(l[i]) < 0 and int(l[i-1]) < 0):
        res += 1
print(res) 