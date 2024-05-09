//! importing mongoose
const mongoose = require ("mongoose");

//! connect to MongoDB
async function connectMongoDB(url){
    return mongoose.connect(url)
}

module.exports = {
    connectMongoDB
}