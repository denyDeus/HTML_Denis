function createUser(name, level) {
    const { getReputation, giveReputation } = createUser(name);

    const getLevel = () => level;
    const increaseLevel = () => { level++; };

    return {
        getReputation,
        giveReputation,
        getLevel,
        increaseLevel
    };
}