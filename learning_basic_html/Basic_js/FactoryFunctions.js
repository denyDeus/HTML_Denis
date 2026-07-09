function User(name) {
    this.name = name;
    this.discordName = "@" + name;   
}

function createUser(name) {
    const discordName = "@" + name;
    return { name, discordName };
}