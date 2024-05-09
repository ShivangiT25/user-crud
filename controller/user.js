const {User} = require('../models/user')

async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find()
    return res.json(allDbUsers)
}
async function handleDeleteById(req, res){
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({status : "deleted successfully"})
}
async function handleUpdateById(req, res){
    await User.findByIdAndUpdate(req.params.id, {last_name: 'changed'})
    return res.status(200).send({status : "updated"});
}
async function handleCreateNewUser(req, res){
    const body = req.body;
try{
    const result = await User.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title
    })
    console.log("Results", result);
    return res.status(201).json({msg : "User created successfully"})
}
catch(error){
    console.log("Error while creating user!", error);
    return res.status(500).json({msg : "Internal server error"})
}
}
async function handleGetUserById(req, res){
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        return res.status(200).json(user);
    }catch(error){
        console.log("Error while creating user!", error);
        return res.status(500).json({msg : "Internal server error"})
    }
}

module.exports = {
    handleGetAllUsers,
    handleDeleteById,
    handleUpdateById,
    handleCreateNewUser,
    handleGetUserById
}