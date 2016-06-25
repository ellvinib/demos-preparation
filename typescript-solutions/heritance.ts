class Dier{
    private name;

    constructor(name:string){
        this.name = name;
    }

    loop (meters:number) {
        console.log(`${this.name} liep ${meters} meter(s)`);
    }

}


class Kat extends Dier{

    constructor(name:string){
       super(name);
    }

    loop (meters:number) {
        console.log('Miauw Miauw');
        super.loop(meters)
    }

}

let kat = new Kat("kat");
kat.loop(2);
