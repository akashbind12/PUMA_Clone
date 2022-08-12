
const mongoose=require("mongoose")

const MensSchema= new mongoose.Schema({
    "img": {type:String,required:true},
    "img1": {type:String,required:true},
    "img2": {type:String,required:true},
    "title": {type:String,required:true},
    "price": {type:Number,required:true},
    "Category": {type:String,required:true},
    "ProductType": {type:String,required:true},
    "Price": {type:String,required:true},
    "Gender": {type:String,required:true},
    "Size": {type:String,required:true},
    "Color": {type:String,required:true}
  },{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("Men",MensSchema)

