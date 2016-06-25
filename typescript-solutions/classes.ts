class Person {
    private firstname: string;
    private name: string;
    private age:number;
    constructor(firstname:string,name:string,age?:number) {
        this.firstname = firstname;
        this.name = name;

        if(age){
            this.age = age;
        }else{
            this.age = -1;
        }
    }
    public setFirstname(firstname:string) {
        this.firstname = firstname;
    }
    public setLastname(name:string) {
        this.name = name;
    }
    public setAge(age:number) {
        this.age = age;
    }
    public getFirstname():string{
        return this.firstname;
    }
    public getName():string{
        return this.name;
    }
    public getAge():number{
        return this.age;
    }
}

let greeter = new Person("Vincent","bouillart");

