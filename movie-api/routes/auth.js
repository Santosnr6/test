import { Router } from "express";
import { users } from "../config/data.js";
import userSchema from "../models/userModel.js";

const router = Router();

router.post('/login', (req, res) => {
    const {error} = userSchema.validate(req.body);
    console.log(error);

    if(error) {
        return res.status(400).json({message: error.details[0].message});
    }

    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        global.currentUser = user;
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

router.post('/logout', (req, res) => {
    global.currentUser = null;
    res.json({ message: 'Logout successful' });
});

router.post('/register', (req, res) => {
    const {error} = userSchema.validate(req.body);

    if(error) {
        return res.status(400).json({message: error.details[0].message});
    }
    
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (user) {
        res.status(400).json({ message: 'User already exists' });
    } else {
        users.push({ id: users.length + 1, username, password });
        res.json({ message: 'User created' });
    }
});

export default router;