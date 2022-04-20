class Object {
    constructor(name) {
        this.name = name;
    }
    
    foo() {
        console.log(this.name + '!');
    }

    static withoutInstance() {
        console.log('This method can be called without an instance');
    }
}

Object.withoutInstance();

let instance = new Object('Hello');
instance.foo();