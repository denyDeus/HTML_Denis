let user = {
    name: "Denis",
    surname: "Luanda",

    // Getter applied as to get fullName property
    get fullName () {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// set fullName is executed with the given value
user.fullName = "Stella Deus";

console.log(user.name);
console.log(user.surname);