import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};
