import express,{Request,Response} from "express"
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute"


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection error:', err));
const app=express()
app.use(express.json())
app.use(cors())
app.get("/health",async (req:Request,res:Response)=>{
  res.send({messgae:"health ok!"})
})
app.use("/api/my/user", myUserRoute)
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

