const myObject = {
    property: "Value",
    otherProperty: 77,
    "obnoxiousn property": function() {
        // do stuff
    },
};

// There are two ways to access properties of an object: dot notation and bracket notation.

// 1. Dot notation
console.log(myObject.property); // Output: Value
console.log(myObject.otherProperty); // Output: 77

// 2. Bracket notation
console.log(myObject["obnoxiousn property"]); // Output: [Function: obnoxiousn property]

/* Which method you use will depend on context. 
Dot notation is cleaner and is usually preferred, 
but there are plenty of circumstances when it is not possible to use it. 
For example, myObject."obnoxious property" won’t work because that property is a string with a space in it. 
Likewise, you cannot use variables in dot notation
*/

const variable = "property";

//"undefined" because it's looking for a property named "variable"
console.log(myObject.variable);

// this is equivalent to myObject["property"] and returns "Value"
console.log(myObject[variable]);