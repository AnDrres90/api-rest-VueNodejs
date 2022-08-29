import mongoose from "mongoose";

export const dbConnetion = async() =>{
    try {
        await mongoose.connect('mongodb+srv://marlongomez:marlon123456789@cluster0.2omfwjt.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to Database');    
    } catch (error) {
        console.log('Connection failed', error)
    }
}    