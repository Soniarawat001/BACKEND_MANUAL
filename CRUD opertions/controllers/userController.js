const { getUsers, saveUsers } = require('../models/userModel');

// GET all users
exports.getAllUsers = (req, res) => {
    const users = getUsers();
    res.json(users);
};

// GET only names
exports.getUserNames = (req, res) => {
    const users = getUsers();
    const html = `<ul>
        ${users.map(user => `<li>${user.name}</li>`).join(' ')}
    </ul>`;
    res.send(html);
};

// GET user by ID
exports.getUserById = (req, res) => {
    const id = Number(req.params.id);
    const users = getUsers();
    const user = users.find(u => u.id === id);
    res.json(user);
};

// ADD user
exports.createUser = (req, res) => {
    const users = getUsers();
    const newUser = req.body;

    users.push(newUser);
    saveUsers(users);

    res.json({ msg: "User added successfully" });
};

// DELETE user
exports.deleteUser = (req, res) => {
    const id = Number(req.params.id);
    let users = getUsers();

    users = users.filter(u => u.id !== id);
    saveUsers(users);

    res.json({ msg: "User deleted" });
};

// UPDATE user
exports.updateUser = (req, res) => {
    const id = Number(req.params.id);
    const updates = req.body;
    let users = getUsers();

    users = users.map(u =>
        u.id === id ? { ...u, ...updates } : u
    );

    saveUsers(users);

    res.json({ msg: "User updated" });
};