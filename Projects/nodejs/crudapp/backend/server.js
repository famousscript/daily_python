import 'dotenv/config'
import express from "express";
const app = express();
const port = process.env.PORT || 3000
app.use(express.static('dist'))

// app.get("/", (req,res)=> {
//    res.send("<h1>Hello world</h1>")
// })

app.get("/api/userInfo", (req,res)=>{
   const userData = [
      { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
      { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
      { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
      { id: 4, name: "Diana", age: 22, email: "diana@example.com" },
      { id: 5, name: "Ethan", age: 35, email: "ethan@example.com" }
    ];
    res.send(userData)
})

app.get("/login", (req,res)=> {
 res.send("<h1>This is login route</h1>")
})

app.listen(port, ()=>{
 console.log(`Server is listning ${port}`);
})

   