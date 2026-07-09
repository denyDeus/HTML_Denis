function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveRepuatation = () => { reputation++; };


    return { name, discordName, getReputation, giveRepuatation };
}

const josh = createUser("Josh");
josh.giveRepuatation();
josh.giveRepuatation();

// logs { discordName: "@josh", repuation: 2 }
console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
});