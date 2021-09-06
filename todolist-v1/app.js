//jshint esversion:6

const express = require("express");

const bodyParser = require ("body-parser");

const date = require(__dirname + "/date");

const PORT = 3010;

const app = express();

let items=["Wakeup Early", "Do Exercise"];
let workItems = ["coding"];

//tell app to use ejs as view engine
app.set('view engine', 'ejs');

//set up body-parser
app.use(bodyParser.urlencoded({extended:true}));

//to use static files in the site like css, images, etc
app.use(express.static("public"));

app.get("/" , function(req, res){

    res.render("list", {listTitle:day, newListItems:items}); //list.ejs should be in views folder otherwise this line wont work

});

app.post("/", function(req, res){
    console.log(req.body);
    let addtask = req.body.newItem;
    if(req.body.list === "Work List"){
        workItems.push(addtask);
        res.redirect("/work");
    }else{
        items.push(addtask);
        res.redirect("/");
    }
    
});

/* work list */
app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about",function(req, res){
    res.render("about");
});

app.listen(PORT, function(){
    
    console.log("Listening on "+ PORT );

});