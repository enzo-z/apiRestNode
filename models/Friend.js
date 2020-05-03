const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoLocationSchema = new Schema({

});

const FriendSchema = new Schema({
    name:{
        type: String,
        required:[true,"You need a name, boi"]
    },
    age:{
        type: Number
    },
    memory:{
        type:String,
        default: "Who the fuck am I?"
    }
});

const FriendModel = mongoose.model('friends', FriendSchema);

module.exports = FriendModel;