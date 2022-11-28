const express = require("express");
const router = express.Router();
const connection = require("../config/database")

router.get("/", (req, res, next) => {
    router.use(express.json())
    connection.query('SELECT *  FROM weather', function (error, results, fields) {
        if (error) {throw error} else {
            res.status(200).json(results)
            next();
            console.log("Page API chargée avec succès")
        };
    });

})

router.get("/:id", (req, res) => {
    router.use(express.json())
    connection.query('SELECT *  FROM weather WHERE id = ' + req.params.id, function (error, results, fields) {
        if (error) {throw error} else {
            let i = 0
            while (results.length >= i) {
                res.json(results[i])
                i++
            }
            console.log("Page API chargée avec succès")
        };
    });

})
module.exports = router;