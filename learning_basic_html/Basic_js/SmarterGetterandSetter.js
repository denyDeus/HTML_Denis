// If we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name
let user = {
    get name() {
        return this._name;
    },

    set name(value) {

        if (value.length < 4) {

            console.log("Nmae is too short, need at least 4 characters");
            return;

        }

        this._name = value;
    }
};

user.name = "Denis";
console.log(user.name);

user.name = "";