//Als je in typescript een leeg object zou gaan aanmaken
// en hier een attribute iets wilt toewijzen zal de 
// editor u dit niet toe laten omdat hij hier niets vana af weet
// en omdat het object geen properties heeft
var leegObject = {};

leegObject.nr = 123;
leegObject.tekst = 'hello';

// de opllosing is type assertion !

interface demotype {
    nr: number;
    tekst: string;
}

var leegObjectA = {} as demotype;

leegObjectA.nr = 123;
leegObjectA.tekst = 'hello';

// opgepast dit brengt gevaren met zich mee ! 
// de compiler gaat u geen error geven mocht je nu de properties niet toe kennen aan het object

var leegObjectB = {} as demotype;

//EUUUH ??? geen properties maar wel autocompletion

