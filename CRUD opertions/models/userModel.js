const fs = require('fs');

const getUsers = () => {
    return JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
};

const saveUsers = (users) => {
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
};

module.exports = {
    getUsers,
    saveUsers
};