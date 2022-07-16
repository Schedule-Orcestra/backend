import {Schema, model} from "mongoose"

const ContactSchema = new Schema({
    name:{
        type: String,
        required:true,
    },

    lastname:{
        type:String,
        required: true,
    },

    phone: {
        type:String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    //createdAt: {
    //    type: Date,
    //    default:Date.now,
    //},

    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

})

const Contact = model("Contact", ContactSchema)
export default  Contact