const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoLocationSchema = new Schema({
    type:{
        type:String,
        default:"Point",
    },
    coordinates: {
        type: [Number],
        required:[true, "Need coordinate!"]
    }
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
    },
    geometry:GeoLocationSchema
});

const FriendModel = mongoose.model('friends', FriendSchema);
module.exports = FriendModel;