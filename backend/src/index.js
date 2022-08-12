
const express=require("express")
const cors=require("cors")
const app=express()

require('dotenv').config()
app.use(express.json())

const MensController = require("./controllers/mens.controller")
const WomensController = require("./controllers/womens.controller")
const CartController = require("./controllers/cart.controller")

app.use(cors());



app.get("/",(req,res)=>{
    return res.status(200).json("Hello world")
})

app.use("/Mens", MensController)
app.use("/Womens", WomensController)
app.use("/cart", CartController)

const connect=require("./configs/db")



const port=process.env.PORT || 5000
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log({"error":error.message})
    }
});