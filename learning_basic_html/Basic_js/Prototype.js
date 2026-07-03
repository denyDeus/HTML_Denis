function Player(name, marker) {
    if(!new.target) {
        throw Error("You must use the 'new' keyword to call the constructor");
    }
    this.name = name;
    this.marker = marker;
    Player.prototype.sayHello = function() {
        console.log("Hello, I'm a player!");
    };
}

const player1 = new Player("Denis", "X");
const player2 = new Player("David", "O");

player1.sayHello();
player2.sayHello();

console.log(Object.getPrototypeOf(player1) === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);