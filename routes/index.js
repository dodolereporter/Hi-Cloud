const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World");
    console.log("Page Index chargée avec succès")
})
module.exports = router;