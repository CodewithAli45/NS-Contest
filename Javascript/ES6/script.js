class Person {
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello, my is ${this.name}`);
    }
}

class Students extends Person {
    constructor(name, major){
        super(name);
        this.major = major;

    }

    study(){
        console.log(`${this.name} is studying in ${this.major}`);
    }
}

const s1 = new Students("Sarah", "Computer Science");
// const p1 = new Person('Harry');

s1.study();