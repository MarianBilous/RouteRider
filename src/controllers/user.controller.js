const db = require('../data/db')

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await db.Users.findAll();
            res.json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await db.Users.findOne({
                where: {
                    id: req.body.id
                }
            });

            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    },
    getUserByEmail: async (req, res) => {
        try {
            const user = await db.Users.findOne({
                where: {
                    email: req.body.email
                }
            });

            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    },
    getUserByCode: async (req, res) => {
        try {
            const user = await db.Users.findOne({
                where: {
                    bar_code: req.body.bar_code
                }
            });

            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
}
