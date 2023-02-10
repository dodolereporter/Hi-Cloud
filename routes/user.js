const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const connection = require("../config/database")
const {getUserFromId, getUserFromUsername, createUser, getUserFromUsernamePass} = require("../services/userService");
const {isCorrect} = require("../dao/userDAO");


router.get("/:username/:password",  async (req, res) => {
    router.use(express.json());
    res.json(await getUserFromUsernamePass(req.params.username, req.params.password));
})

router.get("/:username",  async (req, res) => {
    router.use(express.json());
    res.json(await getUserFromUsername(req.params.username));
})

router.get("/:id",  async (req, res) => {
    router.use(express.json());
    res.json(await getUserFromId(req.params.id));
})

router.get("/isCorrect/:username/:password",  async (req, res) => {
    router.use(express.json());
    res.json(await isCorrect(req.params.username, req.params.password));
})

router.post("/",  async (req, res) => {
    const newUser = req.body;
    res.json(await createUser(newUser.username, newUser.email, newUser.password));
})
module.exports = router;
