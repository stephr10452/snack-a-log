const checkName = (req, res, next) => {
    let nameStr = req.body.name;
    let nameStrSpl = nameStr.split(' ').map((word) => {
        if(word.length > 2) {
            word = word.chatAt(0).toUpperCase() + word.slice(1).toLowerCase()
        } else if (word.length < 3) {
            word = word.toLowerCase(0);
        }
           return word;
    })
       req.body.name = nameStrSpl.join(' ')

    next()

    }

module.exports = {checkName}