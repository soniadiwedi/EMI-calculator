const express = require("express")

const cors = require("cors")

require('dotenv').config()
const connection = require("./db")
const userRouter = require("./routes/user.routes")
const profileRoutes = require("./routes/profile")
const emiRoutes = require("./routes/emi.routes")



const app = express()
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => res.send(`<h1 style="text-align:center; color:purple">Welcome To Backend</h1>`))
app.use("/auth",userRouter)
app.use("/profile", profileRoutes);
app.use('/emi', emiRoutes)




app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Server mongoose started");
    }catch(err){
        console.log(err);
    }
    console.log("Server is Running at 9009");
})