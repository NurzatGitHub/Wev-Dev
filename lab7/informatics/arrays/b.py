n = int(input())
s = input()
l = []

l = s.split(' ')

res = ''
for i in range(0, n):
    # print(int(i))
    if int(l[i]) % 2 == 0:
        res += l[i] + " "
print(res) 