//jshint esversion:6

const express = require("express");
const bodyparser = require ("body-parser");
const PORT = 3000;
const app = express();

app.get("/" , function(req, res){
    res.send("hello");
});

app.listen(PORT, function(){
    console.log("Listening on "+ PORT );
});