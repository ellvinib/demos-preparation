/*
De fat arrow function ofwel ook lambda function genoemd bied een aantal voordelen
- je hoeft geen function meer te schrijven
- het captrued u this inside de function
- het zelfde ook voor u argumenten


je moet veel function schrijven dus wat je nu kan doen is simpel

*/

var inc = (x)=>x+1;

//Wat gebeurd er hier ?

function PersonA(age) {
    this.age = age
    this.growOld = function() {
        this.age++;
    }
}
var person = new PersonA(1);
setTimeout(person.growOld,1000);

setTimeout(function() { console.log(person.age); },2000); // wat is deze output ?

//Je krijgt hier 1 inplaats van 2 hoe komt dit ?
//Window gaat hier u functie uitvoeren en dus this gaat verwijzen naar window
// dit kunnen we oplossen met lambda


function PersonB(age) {
    this.age = age
    this.growOld = () => {
        this.age++;
    }
}
var person = new PersonB(1);
setTimeout(person.growOld,1000);

setTimeout(function() { console.log(person.age); },2000); // wat is deze output ?

//De reden dat dit werkt is omdat this wordt opgevangen van buiten de functie laten we eens kijken naar de javascript code
// dit zou je normaal zelf schrijven 
function PersonC(age) {
    this.age = age
    var _this = this;  // capture this
    this.growOld = function() {
        _this.age++;   // use the captured this
    }
}
var person = new PersonC(1);
setTimeout(person.growOld,1000);

setTimeout(function() { console.log(person.age); },2000); // 2
