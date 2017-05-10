const skills = require('../skillz');
var secrets = require('../secrets.js');


module.exports = {

    addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },

generateId: function(req, res, next){
    const id = skillz.length + 1;
    req.body.id = id;

    next();
},

verifyUser: function(request, response, next){
    if(request.params.username === 'jessica' && request.params.password === 'ilovecats'){
        next();
    } else {
        response(403).send("wrong username or password")
    }

    next();
}


}

