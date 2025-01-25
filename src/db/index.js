import mongoose from 'mongoose';
import dotenv from 'dotenv';
import DB_NAME from '../constants.js';
dotenv.config()
const MONGO_URL=process.env.MONGO_URL

const connectDB = async ()=>{
    try{
        await mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
        console.log('db connected good job :] ')
    } 
    catch(error){
        console.error(`you stupid this thing is wrong, look -> ${error}`);
        process.exit(1)
    }
}
export default connectDB