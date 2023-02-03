
const express=require("express")
const cors=require("cors")
const app=express()

require('dotenv').config()
app.use(express.json())

const MensController = require("./src/controllers/mens.controller")
const WomensController = require("./src/controllers/womens.controller")
const CartController = require("./src/controllers/cart.controller")

app.use(cors());



app.get("/",(req,res)=>{
    return res.status(200).json("Hello world")
})

app.use("/Mens", MensController)
app.use("/Womens", WomensController)
app.use("/cart", CartController)

const connect=require("./src/configs/db")



const port=process.env.PORT || 5000
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log({"error":error.message})
    }
});

module.exports = app;