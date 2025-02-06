import mongoose from 'mongoose'

const CardSchema = new mongoose.Schema({
    src: { type: String, required: true },
    count: { type: Number, required: true, default: 1 }
});

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    cardArray: {
        type: [CardSchema],
         default: []
    },
});

const User = mongoose.model('User', userSchema);

export default User;