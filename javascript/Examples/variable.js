function foo () {
    for (let i = 0; i < 4; i++) { // let has block scope
        console.log('Hello World');
    }
    console.log(i); //i is not defined
}
foo();

function foo2 () {
    for (var i = 0; i < 4; i++) { //var has function scope
        console.log('Hello World');
    }
    console.log(i); //i is defined
}
foo2();