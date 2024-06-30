const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

// const verifyToken = (req, res, next) => {
//     let token = req.session.token;
//
//     if (!token) {
//         return res.status(403).send({
//             message: "No token provided!",
//             valid: false,
//         });
//     }
//
//     jwt.verify(token, config.secret, (err, decoded) => {
//         if (err) {
//             return res.status(401).send({
//                 message: "Unauthorized!",
//                 valid: false,
//             });
//         }
//
//         req.userId = decoded.id;
//         next();
//     });
// };

const verifyToken = (req, res, next) => {
    let token = req.session.token;

    if (!token) {
        req.isLoggedIn = false; // Додали нове поле req.isLoggedIn
        return next(); // Продовжуємо обробку запиту
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            req.isLoggedIn = false; // Токен невалідний
        } else {
            req.isLoggedIn = true; // Токен валідний
            req.userId = decoded.id;
        }
        next(); // Продовжуємо обробку запиту
    });
};

module.exports = verifyToken;
