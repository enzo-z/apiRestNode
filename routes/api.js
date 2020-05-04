const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const FriendModel = require("../models/Friend");

/**Get data from DB */
router.get("/friends", async (req, res)=> { 
    try {
        const {long, lat} = req.query;
        await mongoose.connection.collection('friends').createIndex({geometry:"2dsphere"})
        const data = await FriendModel.aggregate([
        {
                $geoNear: {
                    near: { type: "Point", coordinates: [parseFloat(long), parseFloat(lat)] },
                    distanceField: "dist.calculated",
                    maxDistance: 100000,
                    spherical: true
                }, 
                
            }, 
        ]);
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(400).send({"status":'Bad fucking request', "msg": error.message});
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