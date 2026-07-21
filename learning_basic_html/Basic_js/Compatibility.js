function User(name, birthday) {

    this.name = name;
    this.birthday = birthday;

    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {

        get() {

            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();

        }

    });

}

let denis = new User("Denis", new Date(2003, 11, 15));

console.log(denis.birthday);
console.log(denis.age)