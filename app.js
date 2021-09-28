const express = require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app= express();
var items=["Buy food","Cook food","Eat food"];
var newWork=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.get("/",function(req,res){
    
    var day=date.getDate();
    res.render("list",{listTitle:day,newListitem:items });
})
app.post("/",function(req,res){
    var item =req.body.newItem;
     if(req.body.list==="Work")
     {
        newWork.push(item);
        res.redirect("/work");
     }
     else
     {
        items.push(item);
        res.redirect("/");
     }
})
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListitem:newWork});
})
app.post("/work",function(req,res){
    var work=req.body.newItem;
    newWork.push(work);
    res.redirect("/work");
})
app.get("/about",function(req,res){
    res.render("about");
})
app.listen(process.env.PORT || 3000,function(){
    console.log("Server is on port 3000");
})