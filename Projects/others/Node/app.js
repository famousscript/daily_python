const express = require('express');

require('./config/database.js')

// const { adminAuth, userAuth } = require('./middleware/auth')

// const app = express();

// app.use('/admin', adminAuth);

// app.get('/admin/getAllData', (req, res) => {
//     res.send("All data sent");
// })

// app.get('/user', userAuth, (req, res) => {
//     res.send("All user sent");
// })
// app.get('/admin/deleteUser', (req, res) => {
//     res.send('delete user')
// })


// app.use("/", (err, req, res, next) => {
//     if (err) {
//         res.status(500).send("Somting wrong");
//     }
// })

// app.get("/getUserData", (req, res) => {

//     try {
//         throw new Error("user error coming");
//     } catch (err) {
//         res.status(500).send("Somthing new error");
//     }
    
    
    
//     // res.send("user data sent");
// });



// app.listen(4444, () => {
//     console.log('server connected with port 4444');
    
// })



