import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 50 
    },
    email: {
        type: String,
        required: true,
        min: 4,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 50
    }
})

const UserModels = mongoose.model('Users', schema);

export default UserModels;