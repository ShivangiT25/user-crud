const express = require('express');
const {connectMongoDB} = require('./connection.js')
const bodyParser = require('body-parser')
// const users = require("./MOCK_DATA.json");
// const fs = require("fs");
const app = express();
app.use(bodyParser.json());
const userRoutes = require('./routes/user')
app.use('/api/users', userRoutes);


const mongoose = require ("mongoose"); //! importing mongoose





const User = require('./models/user');
const { logReqRes } = require('./middlewares/index.js');

connectMongoDB('mongodb://localhost:27017/User-App').then(() => {
    console.log("Successfully connected to MongoDB!");
}).catch((error)=>{
    console.log("Error while connecting!", error);
})

//! Middleware --> Plugin --> Function
app.use(express.urlencoded({extended : false}));
app.use(logReqRes("logger.txt"));


//! Middleware 1
// app.use((req, res, next)=>{
//     console.log("middleware 1");
//     res.send({msg : "Middleware 1 executed"})
//     next();
// })

//! Middleware 2
// app.use((req, res, next)=>{
//     console.log("middleware 2");
//     res.send({msg : "Middleware 2 executed"})
//     next();
// })



const port  = 6000;
 app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
 })
