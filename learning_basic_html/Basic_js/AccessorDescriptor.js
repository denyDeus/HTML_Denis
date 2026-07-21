// To create an accessor fullName with defineProperty, we can pass a descriptor with get and set.
let user = {
    name: "Denis",
    surname: "Luanda"
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(user.fullName);

for(let key in user) console.log(key);