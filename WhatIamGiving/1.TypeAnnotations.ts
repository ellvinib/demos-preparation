/*
Type annotations:
Ik ga beginnen met het belangrijkste wat typescript bied nmlk types ! het noemt ook niets voor niets TYPEscript
dus nu kunnen we gebruik maken van  type safety in javascript.

- wat wel eens voorvalt is dat je een numer invult terwijl je een string moest invullen
het is dus beter dat we die fouten tijdens compile time kunnen catchen dan tijdens de runtime.

- het is makelijker voor te refactoren

*/

//1eerst dees
var num: number = 123;

//
var num: number = "FOUTJE !";

//
function identity(num: number): number {
    return num;
}