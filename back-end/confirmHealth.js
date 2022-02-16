const { is } = require("express/lib/request");

const confirmHealth = (snack) => {
let {fiber, protein, added_sugar} = snack;

if (fiber >= 5 && added_sugar < 5){
   return true
};
if (protein > 5 && added_sugar < 5){
   return  true
};
if (protein > 5 || fiber > 5 && added_sugar < 5){
    return  false
};
if (fiber > 5 && added_sugar > 5){
    return  false
};
if (protein > 5 && added_sugar > 5){
    return false
};
if(protein >= 5 && fiber >= 5 && added_sugar > 5){
    return false
};
if(protein < 5 && fiber < 5  && added_sugar > 5){
    return false
};
if(protein < 5 && fiber < 5  && added_sugar < 5){
    return false
};
if(typeof protein !== "number" || typeof fiber !== "number" || typeof added_sugar !== "number"){
   return   null
}
console.log("Sr")
};


module.exports = confirmHealth;
