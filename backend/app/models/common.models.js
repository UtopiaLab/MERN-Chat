const {MONGODB, M_CONNECT} = require('./../config/mongoDB');

exports.userLogin = async (payload) => {
    const db = (await M_CONNECT).db(process.env.MONGODB_NAME);
    let collection = await db.collection(process.env.MONGODB_USERS_COLLECTION);
    let res = await collection.insertOne(payload);
    return res.insertedId;
};

exports.getUsersList = async (sessionId) => {
    const db = (await M_CONNECT).db(process.env.MONGODB_NAME);
    let collection = await db.collection(process.env.MONGODB_USERS_COLLECTION);
    let res = await collection.find({sessionId: {$ne: sessionId}}).toArray();
    return res;
};

exports.getUserInfo = async (sessionId) => {
    const db = (await M_CONNECT).db(process.env.MONGODB_NAME);
    let collection = await db.collection(process.env.MONGODB_USERS_COLLECTION);
    let res = await collection.findOne({sessionId: sessionId});
    return res;
};

exports.getUserChats = async (senderId, receiverId) => {
    const db = (await M_CONNECT).db(process.env.MONGODB_NAME);
    let collection = await db.collection(process.env.MONGODB_CHATS_COLLECTION);
    let res = await collection.find({room: {$all: [senderId, receiverId]}}).toArray();
    return res;
}