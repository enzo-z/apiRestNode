/**Dependencies */
const express = require('express');
const mongoose = require("mongoose");

/**Express and Port */
const app = express();
const port = process.env.port || 3000;

/**Mongoose connection */
mongoose.connect('mongodb://localhost:27017/restApi', {
    useNewUrlParser: true, 
    useUnifiedTopology:true,
    useFindAndModify: false
}).catch((error)=>{
    console.log('Error on connecting to database: '+error);
    mongoose.disconnect();
});

mongoose.connection.on("open", ()=>{
    console.log("Connected to Database");
});

mongoose.connection.on("error", (error)=>{
    console.log('ERROR DATABASE: '+ error);
});

/**Express application */

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/", require("./routes/api"));



app.set("port", port);
app.listen(port, ()=>{
    console.log("Running on: "+port);
});

