const uuidv1 = require('uuid/v1');
const redisRepository = require('../repository/redisRepository');

module.exports = {
    generateCache: async (req, res, next) =>{
        let token = uuidv1();
        await redisRepository.set(token, req.body.values);
        obj = { token };
        res.send(obj);
        next();
    },
    getUser: function(req, res, next){
        redisRepository.get(req.params.p1).then((result) =>{
            if(result){
                res.set('Content-Type', 'application/json');
                res.send(result);
                next();
            }
            else{
                res.send('Token não encontrado');
                next();
            }
        });
    }
}