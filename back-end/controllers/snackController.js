const express = require("express");
const { all } = require("express/lib/application");
const snacks = express.Router();
const{getAllSnacks,getSnack,createSnack} = require("../queries/snacks");

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

snacks.get("/:id",async(req,res)=>{
    const { id } = req.params;
    try{
        const snack = await getSnack(id);
        if(snack.id){
        res.status(200).json(snack);
    } else { 
        res.status(500).json({error:"Snack not found"});
    }
    } catch(err){
        console.log(err)
    }
});

// snacks.post("/",checkName,checkFavorite,async(req,res)=>{
//     const { body } = req.params;
//     try{
//         const createdSnack = await createSnack(body);
//         if(snack.id){
//         res.status(200).json(createdSnack);
//     } else { 
//         res.status(500).json({error:"Snack not found"});
//     }
//     } catch(err){
//         console.log(err)
//     }
// });
// snacks.get("/", async (req, res) => {
//     const allSnacks = await getAllSnacks();
//     if (allSnacks[0]) {
//       res.status(200).json(allSnacks);
//     } else {
//       res.status(500).json({ error: "server error" });
//     }
//   });
 
module.exports = snacks;
