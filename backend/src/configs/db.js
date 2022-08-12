
const moongose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()

const connect=() =>{
    return moongose.connect(
        "mongodb://akashbind12:akbind123@ac-7frl2xo-shard-00-00.rzyimmy.mongodb.net:27017,ac-7frl2xo-shard-00-01.rzyimmy.mongodb.net:27017,ac-7frl2xo-shard-00-02.rzyimmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-qbkj0m-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
}


module.exports = connect;

//  mongoimport --uri mongodb+srv://akashbind12:akbind123@cluster0.rzyimmy.mongodb.net/test --collection mens --type json --file C:\Users\HP\Documents\jsondata\puma-mens --jsonArray