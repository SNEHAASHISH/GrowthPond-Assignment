//import { create, findAll, findByPk, update, destroy } from '../models/User.js';
import User from '../models/User.js';
import bcryptjs from 'bcryptjs';

const { hash } = bcryptjs;

export async function createUser(req, res) {
    try {
        const hashedPassword = await hash(req.body.password, 10); // 10 is the number of salt rounds
        const user = await User.create({ ...req.body, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function listUsers(req, res) {
    try {
        const users = await User.findAll();  // Implement pagination here
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function retrieveUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateUser(req, res) {
    try {
        const [updated] = await User.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedUser = await User.findByPk(req.params.id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteUser(req, res) {
    try {
        const deleted = await User.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send("User deleted");
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
