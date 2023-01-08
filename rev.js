n=6
a =[]

counter =0
num =2
    
while (counter < n):
    flag = True 
    for i in range (2,n,1):
        if (n % i ==0):
            flag = False 
            break
    if flag: 
        a.append(i)
        counter = counter +1
    n= n+1 
for i in range (len(a)):
    print (a[i])