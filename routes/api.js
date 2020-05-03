const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const FriendModel = require("../models/Friend");

/**Get data from DB */
router.get("/fears", (req, res)=> { 
    try {
        res.status(200).send({"hello":"my fears"});
    } catch (error) {
        console.log(error);
        res.status(500).send("<h1>ERROR</h1>");
    }
    
});

/**Create a new fear */
router.post("/friends", async (req, res)=> { 
    try {
        const friendCreated = await FriendModel.create(req.body);
        console.log(req.body);
        res.status(200).send(friendCreated);
    } catch (error) { 
        res.status(400).send({"status":'Bad fucking request', "msg": error.message});
    }
    
});

/**Edit a specific fear */
router.put("/friends/:id", async (req, res)=> { 
    try {
        const {id} = req.params;
        const newFriend = await FriendModel.findOneAndUpdate({_id:id}, req.body);
        res.status(200).send(await FriendModel.findById(newFriend._id));
    } catch (error) {
        res.status(400).send({"status":'Bad fucking request', "msg": error.message});
    }
    
});

/**Delete a fear */
router.delete("/friends/:id", async (req, res)=> { 
    try {
        const {id} = req.params;
        await FriendModel.findOneAndDelete({_id:id});
        res.status(200).send({"status":"success", "msg":"Usuário deletado com sucesso"});
    } catch (error) {
        res.status(400).send({"status":"Bad fucking request", "msg":"Erro na deleção do user"});
    }
    
});

module.exports = router;