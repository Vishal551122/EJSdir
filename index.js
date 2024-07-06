const express = require("express");
const app = express();
const port =8000;
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"/public")));
app.set("views",path.join(__dirname,"/views"));


app.get("/",(req,res)=>{
    res.render("home.ejs");
    
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;//This set of code is used for instagram
    const instaData=require("./data.json");
    const data=instaData[username];
    res.render("instagram.ejs",{data});
});

app.use(express.static("public"));

app.get("/hello",(req,res)=>{
    res.send("Hello");
});

app.get("/rolldice",(req,res)=>{
    let diceVal= Math.floor(Math.random()*6);
    res.render("rolldice.ejs",{diceVal});
});
//INSTAGRAM ACTIVIY
// app.get("/ig/:username",(req,res)=>{
//     let{username}=req.params;
//     res.render("instagram.ejs",{username});
// });  


// app.get("/ig/:username",(req,res)=>{
//     const followers=["vishal","bob","vinay"];
//     let{username}=req.params;
//     res.render("instagram.ejs",{username,followers});
// })

// yahi tak h activity ka code
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});