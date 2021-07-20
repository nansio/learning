# 流程控制语句

a, b = 0, 1

if a < b:
  print('a less than b')
elif a > b:
  print('a greater than b')
else:
  print('a equal to b')


print(a if a>b else b)

i = 0

while i < 3:
  print('i = %d' %i)
  i += 1

for char in 'python':
  print(char)

for i in range(0,5,2):
  print(i, end=',')

print('')
sum = 0
for i in range(101):
  sum+=i
print(sum)
