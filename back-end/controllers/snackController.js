const express = require("express");
const snacks = express.Router();
const { getAllSnacks } = require("../queries/snacks");

snacks.get("/", async (req, res)=>{
    try{
        const allSnacks = await getAllSnacks();
        if(allSnacks[0]){
            res.status(200).json(allSnacks);
        } else {
            res.status(500).json({ error: "server error" });
        }    
      } catch(err){
        console.log(err);
    }
})

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















snacks.delete("/;id", async (req, res)=> {
        const { id } = req.params;
        const deletedSnack = await deletedSnack(id);
        if(deletedSnack.id) {
            res.status(200).json(deletedSnack);
        } else {
            res.status(404).json({ error: "Snack not found" });
        }    
      })

      snacks.delete("/;id", async (req, res)=> {
        const { id } = req.params;
        const { body } = req;
        const updatedSnack = await updatedSnack(id);
        if(updatedSnack.id) {
            res.status(200).json(updatedSnack);
        } else {
            res.status(404).json({ error: "Snack not found" });
        }    
      })

module.exports = snacks;