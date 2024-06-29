const db = require('../data/db')
const User = db.Users;
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
    signUp: async (req, res) => {
        // Save User to Database
        try {
            const user = await User.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                bar_code: req.body.bar_code,
                password: bcrypt.hashSync(req.body.password, 8),
            });

            res.status(201).send({ message: "User registered successfully!" });
        } catch (error) {
            console.log(error)

            res.status(500).send({
                message: error.message,
                errors: error.errors
            });
        }
    },
    signIn: async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    bar_code: req.body.bar_code,
                },
            });

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    message: "Invalid Password!",
                });
            }

            req.session.token = jwt.sign({id: user.id}, config.secret, {
                expiresIn: 86400, // 24 hours
            });

            return res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
            });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    },
    signOut: async (req, res) => {
        try {
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).send({ message: "Unable to logout" });
                }

                return res.status(200).send({
                    message: "You've been signed out!"
                });
            });
        } catch (err) {
            this.next(err);
        }
    }
}

