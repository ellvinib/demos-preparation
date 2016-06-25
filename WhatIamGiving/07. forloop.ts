//WAt gebeurd er hier als je dit zou doen

var anArray = [9, 2, 5];
for (var data in anArray) {
    console.log(data); // 0,1,2
}

//Dit komt omdat in javascript we niet over de items ittereren maar over de keys

//Daarom bestaat er in typescript en ES6 de for..of

for (var item of anArray) {
    console.log(item); // 9,2,5
}

//ook handig is dat de for..of elk caracter in een string afloopt 

var tekstje = "Hello, its me..";
for (var char of tekstje) {
    console.log(char); // Hello, its me..
}

//op dit moment is dit enkel gesuporteerd voor array  en strings.