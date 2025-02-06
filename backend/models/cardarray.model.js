import mongoose from 'mongoose'

const CardSchema = new mongoose.Schema({
    src: { 
        type: String, 
        required: true 
    }, 
    count: { 
        type: Number, 
        required: true, default: 1 
    }
});

const cardArraySchema = new mongoose.Schema({
    uid: {
        type: String, 
        required: true
    },
    cardArray: { 
        type: [CardSchema], 
        default: [] 
    } 
});

const CardArray = mongoose.model('CardArray', cardArraySchema);

export default CardArray;