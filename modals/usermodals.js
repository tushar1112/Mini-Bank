const mongoose=require('mongoose')

const dataTemplate=new mongoose.Schema({
    fullname:{
        type:String,
        default:''
    },
    accountNo:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    amount:{
        type:Number,
        require:true
    },
    sender:{
        type:String,
        default:''
    },
    receiver:{
        type:String,
        default:''
    },
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports=mongoose.model("mytable",dataTemplate)

