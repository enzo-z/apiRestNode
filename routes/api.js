const express = require("express");
const router = express.Router();

/**Get data from DB */
router.get("/fears", (req, res)=> { 
    try {
        res.status(200).send("<h1>Sharks</h1>");
    } catch (error) {
        res.status(500).send("<h1>ERROR</h1>");
    }
    
});

/**Create a new fear */
router.post("/fears", (req, res)=> { 
    try {
        res.status(200).send("<h1>Sharks</h1>");
    } catch (error) {
        res.status(500).send("<h1>ERROR</h1>");
    }
    
});

/**Edit a specific fear */
router.put("/fears/:id", (req, res)=> { 
    try {
        res.status(200).send("<h1>Sharks</h1>");
    } catch (error) {
        res.status(500).send("<h1>ERROR</h1>");
    }
    
});

/**Delete a fear */
router.get("/fears/:id", (req, res)=> { 
    try {
        res.status(200).send("<h1>Sharks</h1>");
    } catch (error) {
        res.status(500).send("<h1>ERROR</h1>");
    }
    
});

module.exports = router;