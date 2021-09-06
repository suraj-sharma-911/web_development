const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator",function(req,res){
    res.sendfile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req, res){
    var w= parseFloat(req.body.weight);
    var h= parseFloat(req.body.height);
    h= h/100;
    var result= w / (Math.pow(h, 2));
    res.send("Your BMI is : "+ result.toFixed(2));
});

app.listen(3000, function(){
    console.log("server running at port 3000");
})