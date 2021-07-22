const redisClient = require('./../config/redis');

exports.getOfflineUserInfo = (key, subKey, callBack) => {
    redisClient.HGET(key, subKey, (err, res) => {
        callBack(err, res);
    });
};