/*
Met typescript kan je niet alleen type safty gebruiken maar ook classes
Handig voor als we grote applicaties willen schrijven en OO gebruiken
*/

/* MANIER 1 om met properties te werken */
class Animal_A {
   private naam: string;

    constructor(naam:string){
        this.naam = naam;
    }

    loop(){
        //Gebruik van ${} template strings 
        console.log(`Het dier met de naam ${this.naam} loopt`)
    }

}
/* MANIER 2 om met properties te werken */
class Animal_B {
    constructor(private naam:string){
        this.naam = naam;
    }

    loop(){
        console.log(`Het dier met de naam ${this.naam} loopt`)
    }

}
/* MANIER 3 om met properties te werken */
class Animal_C {
    constructor(private naam:string){
    }

    loop(){
        console.log(`Het dier met de naam ${this.naam} loopt`)
    }

}

var animalA = new Animal_A("beertje");
animalA.loop();

var animalB = new Animal_B("kat");
animalB.loop();

var animalC = new Animal_C("giraf");
animalC.loop();

/*
Dit was al cool nee ? we hebben in typescript zelfs INHERITHENCEEE WHOOHOO party ?

Als je een constructor hebt in je parent class moet je deze constructor ook aan roepen in je child constructor !
om er voor te zorgen dat alles wat gezet moet worden on de THIS ook gezet wordt
 */

class katA extends Animal_A {

    private type:string;

    constructor(naam:string,type:string){
        super(naam);
    }

    loop(){
        console.log(`miauw miauw ik ben een ${this.type}`);
        super.loop();
    }
}

var katje = new katA('poesje','zoogdier');
katje.loop();

/* STatics */

class katB extends Animal_A {

    private type:string;
    static loopjes = 0;

    constructor(naam:string,type:string){
        super(naam);
    }

    loop(){
        console.log(`miauw miauw ik ben een ${this.type}`);
        super.loop();
       katB.loopjes++;
    }
}

var katje = new katA('poesje','zoogdier');
katje.loop();
katje.loop();
console.log(katB.loopjes);


/*
abstraction
*/