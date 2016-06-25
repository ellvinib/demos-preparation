/*
constant variable
block scoped !!
 */

const fooVar = 123;
if (true) {
    const fooVar = 456; // A toegestaan omdat het een nnieuwe variable is binnen de if
}


//OPGEPAST !!!!!

const fooObject = { bar: 123 };

//NIET TOEGESTAAN
fooObject = {bar: 66}


//Wel toegestaan !
fooObject.bar = 54;