import TypingText from '../models/typingtext.model.js';
import mongoose from 'mongoose';

export const getTypingTexts = async (req,res) => {
    try {
        const typingtexts = await TypingText.find({});
        res.status(200).json({ success:true, data: typingtexts });
    } catch (error) {
        console.log("error in fetching texts", error.message)
        res.status(500).json({ success: false, message: "Server Error"});
    }
}
export const createTypingText = async (req,res) => {
    const typingtext = req.body;

    if (!typingtext.text || !typingtext.text){
        return res.status(400).json({ success:false, message: "Missing fields" });
    }

    const newTypingText = new TypingText(typingtext);
    try{
        await newTypingText.save();
        res.status(200).json({ success:true, data: newTypingText});
    } catch (error) {
        console.error("Error in creating typingtext", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}
export const updateTypingText = async (req,res) => {
    const { id } = req.params;

    const typingtext = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Typing Text Id"});
    }
    try { 
       const updatedTypingText = await TypingText.findByIdAndUpdate(id, typingtext,{new:true});
       res.status(200).json({ success:true, data: updatedTypingText});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    } 
}
export const deleteTypingText = async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Typing Text Id"});
    }

    try {
        await TypingText.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Typing Text deleted"});
    } catch (error) {
        console.error("Error deleting typing text", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}