
class Skirt{
    constructor(OB, OT, VB, DI) {
        this.OB = OB;
        this.OT = OT;
        this.VB = VB;
        this.DI = DI;
    }
}

new Skirt()
function choose_size(){
    if (document.getElementById("Size_40"))
        alert("yes");
}

/*
height = DI+10
width = OB+11
A = (0;10)
AA1 = 0.5*OB +1 //ширина полотна сверху
HH1 = AA1 // ширина полотна снизу
AH = DI //длина изделия
A1H1 = DI //длина изделия
// должен получиться квадрат
A2 = 0.5*AA1 //центральная вертикальная линия
//провести перпендикулярную линию от А2 до линии НН1. На линии H поставить точку H2

AB = VB //высота бедер
// провести горизонтальную линию. Поставить точки B1, B2

A2C = 1 //провести перпендикуляр от точки А2 до С. значение может варьироваться от 0.5 до 1.5 см


//рассчет вытачек
full_additions = (OB - OT)/2
side_additions = full_additions/2
CC1 = A2C+side_additions/2
CC2 = A2C-side_additions/2
//провести плавные линии C1B2 и C2B2
//провести плавные линии AC1 и A1C2

//добавить подписи задняя и передняя половина юбки, боковой шов
backward_addition = side_additions*0.6
forward_addition = side_additions-backward_addition


//Задняя талевая вытачка
BM = BB2/2

//от точки M поднять перпендикуляр до линии M1... сделать M1 вспомогательной точки для кривой Безье
M1M2 = M  - backward_addition/2
M1M3 = M + backward_addition/2 //найти данную точку на кривой

M1M4 = 14 //13-14 см глубина вытачки на задней половине.
// сделать скругленные линии M2M4 и M3M4


//передняя талевая вытачка
C2K = 8
//от точки K провести перпендикуляр к линии BB1, поставить точку K1
KK4 = 2.5
KK2 = K - forward_addition/2
KK3 = K + forward_addition/2

K4K5 = K4 - 0.5
// провести прямые линии K2K5 и K3K5

*/

