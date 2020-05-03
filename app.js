const express = require('express');
const app = express();
const port = process.env.port || 3000;


app.use("/api/", require("./routes/api"));



app.set("port", port);

app.listen(port, ()=>{
    console.log("Running on: "+port);
});

