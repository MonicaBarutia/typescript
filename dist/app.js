"use strict";
class Person {
    constructor(n) {
        this.age = 27;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Josh');
user1.greet('Hi there - I am');
console.log(user1);
