//THESE ROUTES DISPLAY ONLY THE HTML PAGES
const router = require('express').Router();
const path = require('path');



// THESE ROUTES RENDERS HOME PAGE 

router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))
});

router.get("/exercise", (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
});

router.get("/stats", (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/stats.html"))
});




module.exports = router;