const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require("../queries/snacks");
const { checkName, checkHealth } = require('../validations/checkSnacks.js')
const confirmHealth = require('../confirmHealth.js')


snacks.get("/", async (req, res)=>{
    try{
        const allSnacks = await getAllSnacks();
        if(allSnacks[0]){
            res.status(200).json({
                sucesss: true,
                payload: allSnacks
            });
        } else {
            res.status(404).json({
                success: false,
                payload: '/not found/'
        });
        }    
      } catch(err){
        console.log(err);
    }
});

snacks.get("/:id", async(req,res)=>{
    const { id } = req.params;
    try{
        const snack = await getSnack(id);
        if(snack.id){
        res.status(200).json({success: true, payload: snack});
    } else { 
        res.status(404).json({
            success: false,
            payload: '/not found/'
    });
    }
    } catch(err){
        console.log(err)
    }
})

snacks.post("/", checkName, async(req,res)=>{
    const { body } = req;
    try{
        const createdSnack = await createSnack(body);
        confirmHealth(createdSnack);

        if(!createdSnack.image){
            createdSnack.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
        }
        if(createdSnack.id){
        res.status(200).json({ sucesss: true,
            payload: createdSnack});
    } else { 
        res.status(404).json({ sucesss: false,
            payload: "snack cannot be added" });
    }
    } catch(error){
        console.log(error);
    }
});

snacks.delete("/:id", async (req, res) => {
        const { id } = req.params;
        const deletedSnack = await deleteSnack(id);
        if(deletedSnack.id) {
            res.status(200).json({
                success: true,
                payload: deletedSnack
            });
        } else {
            res.status(404).json({
                success: false,
                payload: "Snack not found" 
                });
        }    
      })

      snacks.put("/:id", checkName, async (req, res)=> {
        const { id } = req.params;
        const { body } = req;
        const updatedSnack = await updateSnack(id, body);
        confirmHealth(updatedSnack);

        if(updatedSnack.id) {
            res.status(200).json({
                success: true,
                payload: updatedSnack
            });
        } else {
            res.status(404).json({
                 success: false,
                 payload:"Snack not found"
                });
        }    
      })

module.exports = snacks;