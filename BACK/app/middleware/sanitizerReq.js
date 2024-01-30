const sanitizer = require('sanitizer');

const sanitizerR = (req,_,next) => {
    if(req.body) {
        for(let property in req.body){
            console.log('Je suis la');
            req.body[property] = sanitizer.escape(req.body[property]);
        }
    }
    next()
}



module.exports = sanitizerR;
