import User from '../models/user.model.js'
import bcrptjs from 'bcrptjs';

export const signup =async(req,res)=>{
    const {username, email, password}=req.body;
    const hashedPassword=bcrptjs.hashSync(password,10);
    const newUser=new User({username, email, password:hashedPassword});
    try{
        await newUser.save();
        res.status(201).json('User created succesffully')
    }catch(error){
        res.status(500).json(error.message);
    }
};