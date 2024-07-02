const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema({
        name: {
            type: String, 
            required: true,
        },
        image:{
            type: String, 
            required: true
        },
        cost:{
            type: String, 
            required: true
        },
        costCrypto:{
            type: String, 
            required: true
        }
        
},
{timestamps: true}
)

module.exports = mongoose.model("NFT" , NFTSchema )