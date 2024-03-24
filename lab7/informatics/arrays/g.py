n = int(input())
s = input()
l = s.split(' ')

res = ''
for i in range(n - 1, -1, -1):
    res += l[i] + ' '

print(res)
