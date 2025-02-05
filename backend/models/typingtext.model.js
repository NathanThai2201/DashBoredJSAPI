import mongoose from 'mongoose'

const typingtextSchema = new mongoose.Schema({
    text: {
        type:String,
        required: true
    }
},{
    timestamps: false 
});

const TypingText = mongoose.model('TypingText', typingtextSchema);

export default TypingText;