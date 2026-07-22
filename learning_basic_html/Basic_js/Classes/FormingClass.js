class User{

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}

// Usage
let user = new User("Denis");
user.sayHi();