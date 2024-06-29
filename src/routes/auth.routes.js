const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const express = require('express');
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

module.exports = router;
