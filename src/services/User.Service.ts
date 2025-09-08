import {User, IUser} from "../models/User";

//Lay User 
const getAllUser = async () : Promise<IUser[]> => {
    return await User.find();
}

//Create User 
const createUser = async (name: String, gender: String, dob: Date) : Promise<IUser | null> => {
    const createuser = new User({name, gender, dob});
    return await createuser.save();
}

//delete User
const deleteUser = async (id: String) : Promise<IUser | null> =>{
    const userExisting = await User.findById(id);
    if(!userExisting){
        throw new Error("User is not found");
    }
    return await User.findByIdAndDelete(id);
}

//Update User
const updateUser = async (id: String, data: Partial<IUser>) : Promise<IUser | null> => {
    const userExisting = await User.findById(id);
    if(!userExisting){
        throw new Error("User is not found");
    }
    return await User.findByIdAndUpdate(id, data, { new: true });
}

export {getAllUser, createUser, deleteUser, updateUser}