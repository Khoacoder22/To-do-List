import { Request, Response } from "express";
import * as UserService from "../services/user.service";
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
        return res.status(500).json({
            message: error.message || "System error"
        });
    }
}

// Lấy User 
export const getAllUser = async(req: Request, res: Response) => {

    try{
        const userList = await UserService.getAllUser();
        res.status(200).json(userList);
    }
    
    catch( error : any){
        return res.status(500).json({
            message: error.message || "System error"
        });
    }

}

//Delete User
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const deleted = await UserService.deleteUser(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json({
            message: "User deleted",
            deleted
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message || "System error"
        });
    }
};


//Update User
export const updateUser = async(req: Request, res: Response) => {
    try{

        const {gender} = req.body;

        if(gender && !Object.values(Gender).includes(gender)){
            res.status(400).json({ message: `Invalid gender: ${gender}`});
        }

        const updated = await UserService.updateUser(req.params.id, req.body);
        
        if (!updated) {
            return res.status(404).json({ message: "User not found" });
        } else {
            return res.status(200).json(updated);
        }

    } catch(error: any){
        return res.status(500).json({
            message: error.message || "System error"
        });
    }
}