const Redis = require('ioredis');
const config = require('../config/config');
let redis;

let classRedis = {
    init: () => {
        if(!redis){
            redis = new Redis(config.REDIS);
        }
    },
    get: (token) => {
        classRedis.init();
        return redis.get(token);
    },
    set: (token, value)=>{
        classRedis.init();
        return new Promise((resolve, reject) => {
            if(typeof(value) == 'object'){
                value = JSON.stringify(value);
            }
            redis.set(token, value, 'EX', 86400, (err, data) =>{
                (err) ? reject(err) : resolve(data);
            });
        })
    }

}

module.exports = classRedis;