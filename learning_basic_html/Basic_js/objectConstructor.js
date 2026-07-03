function Player(name, marker) {
    if(!new.target) {
        throw Error("You must use the 'new' keyword to call the constructor");
    }
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name);
    };
}

const player1 = new Player("Denis", "X");
const player2 = new Player("David", "O");
player1.sayName();
player2.sayName();