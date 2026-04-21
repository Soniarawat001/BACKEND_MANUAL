const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/api/users', userController.getAllUsers);
router.get('/usersname', userController.getUserNames);
router.get('/api/users/:id', userController.getUserById);
router.post('/userdata', userController.createUser);
router.delete('/api/users/:id', userController.deleteUser);
router.patch('/api/users/:id', userController.updateUser);

module.exports = router;