const express = require("express");
const { all } = require("express/lib/application");
const snacks = express.Router();
const{getAllSnacks} = require("../queries/snacks");

snacks.get("/",async(req,res)=>{
    try{
        const allSnacks = await getAllSnacks();
        if(allSnacks[0]){
        res.status(200).json(allSnacks);
    } else { 
        res.status(500).json({error:"server error"});
    }
    } catch(err){
        console.log(err)
    }
});
// snacks.get("/", async (req, res) => {
//     const allSnacks = await getAllSnacks();
//     if (allSnacks[0]) {
//       res.status(200).json(allSnacks);
//     } else {
//       res.status(500).json({ error: "server error" });
//     }
//   });
module.exports = snacks;
