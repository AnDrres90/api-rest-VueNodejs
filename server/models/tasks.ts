import {Schema, model} from "mongoose";

const tasksSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
    
},
{
    versionKey: false
})

export default model('Task', tasksSchema);
