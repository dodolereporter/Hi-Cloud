const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("API chargée");
    console.log("Page API chargée avec succès")
})
module.exports = router;