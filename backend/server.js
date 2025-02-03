import express, { application } from 'express'; 
import cors from 'cors';
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
import postRoutes from "./routes/post.route.js";
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

const __dirname = path.resolve();
app.use(express.json()); // allow JSON data in req.body

app.use(cors({ origin: ['http://localhost:5173','https://nathanthai2201.github.io/portfolio/'],
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
 }));

app.use("/api/posts",postRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
}); 
