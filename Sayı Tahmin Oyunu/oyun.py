import random

sayi = random.randint(1,20)
hakkimiz = 3

while hakkimiz > 0:
    hakkimiz -= 1
    tahmin = int(input('tahmininiz: '))
    if(tahmin == sayi):
        print('tahmininiz doğru')
        break
    elif hakkimiz == 0 :
        print('doğru sayı:')
        print(sayi) 
    elif tahmin>sayi :
        print('aşağ in')
        continue
    elif tahmin<sayi :
        print('yukarı çık')
        continue
    