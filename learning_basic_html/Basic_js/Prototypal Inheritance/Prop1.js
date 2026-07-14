function Hero(name, level) {
    this.name = name;
    this.level = level;
};

let hero1 = new Hero('Bjorn', 1);


console.log(Object.getPrototypeOf(hero1));