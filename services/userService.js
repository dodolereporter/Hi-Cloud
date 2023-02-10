const {connection} = require("../config/database");
const {getById, getByUsername, create, isCorrect} = require("../dao/userDAO")
async function getUserFromId(id) {
    return await getById(id);
}

async function getUserFromUsernamePass(username, password) {
    return await getByUsernamePass(username, password);
}

async function getUserFromUsername(username) {
    return await getByUsername(username);
}

async function createUser(username,email, password) {
    return await create(username,email, password);
}

async function isUserCorrect(username,email, password) {
    return await isCorrect(username,email, password);
}

module.exports = {
    getUserFromId,
    getUserFromUsername,
    getUserFromUsernamePass,
    createUser,
    isUserCorrect
}
