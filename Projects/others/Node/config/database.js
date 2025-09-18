// getting-started.js
const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect(
        "mongodb://127.0.0.1:27017/mynewDb"
    )
}

connectDB.then(() => {
    console.log("Database connected");
})
    .catch(err => {
    console.log("Database not");
})

