//namespaces in javascript
(function(voorbeeld) {

   voorbeeld.test = 10;

})(voorbeeld || voorbeeld = {})


//
namespace voorbeeld {
    export function helloWorld(msg) {
        console.log(msg);
    }
    
}

voorbeeld.helloWorld('hello there !')