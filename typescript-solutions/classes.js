var Person = (function () {
    function Person(firstname, name, age) {
        this.firstname = firstname;
        this.name = name;
        if (age) {
            this.age = age;
        }
        else {
            this.age = -1;
        }
    }
    Person.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    Person.prototype.setLastname = function (name) {
        this.name = name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getFirstname = function () {
        return this.firstname;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var greeter = new Person("Vincent", "bouillart");
