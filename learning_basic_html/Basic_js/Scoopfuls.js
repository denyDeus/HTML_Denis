// This is a global variable
let globalAge = 23;

// This is a function - and hey, a curly brace indicating a block
function printAge(age) {
    // This is a function scoped variable
    var varAge = 34;

    // This is yet another curly brace, and thus a block
    if (age > 0) {
        // This is a block-scoped variable that exists
        // within it's nearest enclosing block: the if's block
        const constAge = age * 2;
        console.log(constAge);
    }

    // ERROR! We tried to access a block scoped variable
    // outside its scope
    console.log(constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
console.log(varAge);

