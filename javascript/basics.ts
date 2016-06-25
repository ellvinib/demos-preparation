//In javascript kan je variable geen type mee geven.

var stringExample = "string";
var numberExample = 0;
var booleanExample = true;

// In typescript is dit wel mogelijk je hebt 3 basic typescript

var name: string = "Anders";
var lines: number = 42; //floating point.
var isDone: boolean = false;

var anyType : any = "";

var unionType: string | number;
unionType = "";
unionType = 0;



//ARRAYS in javascript

var array = ["",0];

//Arrays in typescript

var numberArray : number[] =  [1,2,3,3.55];
var stringArray : string[] = ["",""];

//generieke array type
var arrayString : Array<string> = ["perfect"];


//Enums
enum Color {Red, Green, Blue};
var c: Color = Color.Green;