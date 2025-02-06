import CardArray from '../models/cardarray.model.js';
import mongoose from 'mongoose';

export const getCardArrays = async (req,res) => {
    try {
        const cardarrays = await CardArray.find({});
        res.status(200).json({ success:true, data: cardarrays });
    } catch (error) {
        console.log("error in fetching card arrays", error.message)
        res.status(500).json({ success: false, message: "Server Error"});
    }
}
export const getCardArray = async (req, res) => {
    const { uid } = req.params;
    try {
        const cardArray = await CardArray.findOne({ uid });
        if (!cardArray) {
            return res.status(404).json({ success: false, message: "Card array not found" });
        }
        res.status(200).json({ success: true, data: cardArray });
    } catch (error) {
        console.log("Error in fetching card array", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createCardArray = async (req,res) => {
    const cardarray = req.body;

    if (!cardarray.uid){
        return res.status(400).json({ success:false, message: "Missing fields" });
    }

    const newCardArray = new CardArray(cardarray);
    try{
        await newCardArray.save();
        res.status(200).json({ success:true, data: newCardArray});
    } catch (error) {
        console.error("Error in creating card array", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}
export const updateCardArray = async (req,res) => {
    const { id } = req.params;

    const cardarray = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Card Array Id"});
    }
    try { 
       const updatedCardArray = await CardArray.findByIdAndUpdate(id, cardarray,{new:true});
       res.status(200).json({ success:true, data: updatedCardArray});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    } 
}
export const deleteCardArray = async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid Card Array Id"});
    }

    try {
        await CardArray.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Card array deleted"});
    } catch (error) {
        console.error("Error deleting card array", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
}