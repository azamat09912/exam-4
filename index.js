//A
let month = prompt("1 ден 12 ге дейінгі санды енгізіңіз:");
if (month <=3 || month<=4 || month<=5 ){
    alert("Spring")
}
else if(month<=6 || month<=7 || month<=8){
    alert("Summer")
}
else if(month<=9 || month<=10 || month<=11){
    alert("Autumn")
}
else if(month<=12 || month<=1 || month<=2){
    alert("Winter")
}
else{
    alert( "1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз")
}


//B
let number1 = Number(prompt("Бірінші санды енгізіңіз:"));
let number2 = Number(prompt("Екінші санды енгізіңіз:"));


switch (true) {
    case (number1 >= number2 ):
        alert("A sani B saninan ulken " );
        break;

    case (number2 >= number1 ):
        alert("A sani B saninan kishi  " );
        break;

        case (number2 == number1 ):
        alert("Sandar ten " );
        break;

    default:
        alert("Мәндерді дұрыс енгізіңіз.");
}

//C
let number1q = Number(prompt("Бірінші санды енгізіңіз:"));
let number2w = Number(prompt("Екінші санды енгізіңіз:"));
let number3e = Number(prompt("Үшінші санды енгізіңіз:"));

switch (true) {
    case (number1q - number2w  + number3e):
        alert("ен улкен жане ен киши саннын айырмасы " + number3e );
        break;
 
     case (number2w >= number1q && number2w >= number3e):3
        alert("Ең үлкен сан: " + number2w);
        break;

    case (number3e >= number1q && number3e >= number2w):3
        alert("Ең үлкен сан: " + number3e);
        break;   

    default:
        alert("Мәндерді дұрыс енгізіңіз.");
}


 