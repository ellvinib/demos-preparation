/*
* de VAR variable zijn function scoped
javascript is function scoped
c# block scoped
*/

var a  = 5;
if(true){
    var a = 6;
}
console.log(a) //6

var a  = 5;
function abc(){
    var a = 6;
}
abc()
console.log(a) //5

/*
OPLOSSING is keyword LET zorgt er voor dat je block scoped kan werken binnen javscript
 */

let foo = 123;
if (true) {
    let foo = 456;
}
console.log(foo); // 123

var index = 0;
var arr: number[] = [1, 2, 3];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
console.log(index);


