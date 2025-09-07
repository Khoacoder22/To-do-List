import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        const dbUrl = process.env.DB;

        //lỗi khi kết nối không được 
        if (!dbUrl) {
            throw new Error("Database connection string (DB) is not defined in .env");
        }
        
        await mongoose.connect(dbUrl);
        console.log('Mongo connected');
        
    } catch(error){
        console.log('Connection fail', error);
        process.exit(1);
    }
}