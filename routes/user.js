const express = require('express');
const {handleGetAllUsers, handleDeleteById, handleUpdateById, handleCreateNewUser, handleGetUserById} = require('../controller/user');
const bodyParser = require('body-parser');
const router = express.Router();


//! Routes 

// app.use("/api/users")
// router.get('/users', async(req,res)=>{
//     const allDbUsers = await User.find()
//     const html = `
//     <ul>
//     ${allDbUsers.map(user => `<li>${user.first_name}---${user.job_title}</li>`).join('')}
//     </ul>
//     `
//     res.send(html);
// })

router.get('/', handleGetAllUsers);


// router.post('/api/users', (req,res) => {
//     const body = req.body;
//     users.push({...body, id: users.length + 1});
//     fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>{
//         return res.json({status : "success", id : users.length})
//     });
//     console.log(body);
// })

// router.patch('/api/users/:id', (req, res)=>{
//     res.send({status : "pending"})
// })

router.post('/', handleCreateNewUser)

// router.route('/api/users/:id').get((req,res) =>{
//     const id = req.params.id;
//     const user = users.find((user) => user.id == id);
//     return res.json(user);
// }).patch((req,res)=>{
//     res.send({status : "Patch is still pending!"})
// }).delete((req,res)=>{
//     res.send({status : 'pending'})
// })

router
    .route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateById)
    .delete(handleDeleteById)

module.exports = router;