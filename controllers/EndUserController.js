//import { create, findAll, findByPk, update, destroy, EndUser } from '../models/EndUser.js';
import EndUser from '../models/EndUser.js';
import { Op } from 'sequelize';

export async function registerEndUser(req, res) {
    try {
        const endUser = await EndUser.create(req.body);
        res.status(201).json(endUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function listEndUsers(req, res) {
    try {
        const endUsers = await EndUser.findAll();
        res.status(200).json(endUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function retrieveEndUser(req, res) {
    try {
        const endUser = await EndUser.findByPk(req.params.endUserId);
        if (endUser) {
            res.status(200).json(endUser);
        } else {
            res.status(404).json({ error: 'EndUser not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateEndUser(req, res) {
    try {
        const [updated] = await EndUser.update(req.body, {
            where: { id: req.params.endUserId }
        });
        if (updated) {
            const updatedEndUser = await EndUser.findByPk(req.params.endUserId);
            res.status(200).json(updatedEndUser);
        } else {
            res.status(404).json({ error: 'EndUser not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteEndUser(req, res) {
    try {
        const deleted = await EndUser.destroy({
            where: { id: req.params.endUserId }
        });
        if (deleted) {
            res.status(204).send("EndUser deleted");
        } else {
            res.status(404).json({ error: 'EndUser not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const searchEndUsers = async (req, res) => {
    try {
        const query = req.query.q;
        const endUsers = await EndUser.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${query}%` } },
                    { email: { [Op.like]: `%${query}%` } }
                ]
            }
        });
        res.status(200).json(endUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};