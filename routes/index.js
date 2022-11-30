const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    router.use(express.static)
    res.send("Hello World");
    console.log("Page Index chargée avec succès")
})
module.exports = router;