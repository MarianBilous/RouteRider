const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const express = require('express');
const verifyToken = require("../middleware/authJwt");
const router = express.Router();


router.post(
    "/auth/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    controller.signUp
);

router.post("/auth/signin", controller.signIn);
router.post("/auth/signout", controller.signOut);

router.get('/auth/verifyToken', verifyToken, (req, res) => {
    res.status(200).send({ valid: req.isLoggedIn });
});

module.exports = router;
