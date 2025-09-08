import { Request, Response } from "express";
import * as UserService from "../services/User.Service";
import {Gender} from "../enum/enum";

//Tao User
export const createUser = async(req: Request, res: Response) => {
    try{
        const {name, gender, dob} = req.body;
        if(gender && !Object.values(Gender).includes(gender)){
            res.status(400).json({
                message: "Invalid Gender"
            });
        }
        const newUser = await UserService.createUser(name, gender, dob);
        return res.status(201).json(newUser);
    } catch(error: any){
        res.json({ message: error});
    }
}

// Lấy User 
export const getAllUser = async(req: Request, res: Response) => {
    try{
        const userList = await UserService.getAllUser();
        res.status(200).json(userList);
    }
    catch( error : any){
        res.status(500).json({message: error.message});
    }
}

//Delete User
export const deleteUser = async(req: Request, res: Response) => {
    try{
        const deleted = await UserService.deleteUser(req.params.id);
        if(!deleted){
            res.status(404).json({message: "User not found"});
        }
        res.json({message: "User deleted", deleted});
    } catch (error: any){
        res.json({message : error});
    }
}

//Update User
export const updateUser = async(req: Request, res: Response) => {
    try{

        const {gender} = req.body;

        if(gender && !Object.values(Gender).includes(gender)){
            res.status(400).json({ message: `Invalid gender: ${gender}`});
        }

        const updated = await UserService.updateUser(req.params.id, req.body);
        
        if (!updated) {
            res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updated);
    } catch(error: any){
        res.json({ message: error.message });
    }
}