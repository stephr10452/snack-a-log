const checkName = (req, res, next) => {
    if (req.body.name) {
        next();
    } else {
        res.status(400).json({ error: 'Name is required'});
    }
};

const checkHealthy = (req, res, next) => {
   if(typeof req.body.is_healthy === 'boolean') {
       next();
     } else {
         res.status(400).json({ error: 'is_healthy must be a boolean value'});
     }
}
module.exports = {checkName, checkHealthy};