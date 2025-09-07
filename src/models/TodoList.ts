import mongoose, { Schema, Types } from "mongoose";
import {Gender, TodoListStatus} from "../enum/enum";

export interface ITodoList extends Document {
    name: string;
    user_id: Types.ObjectId;
    status: TodoListStatus;
    createAt: Date;
    updateAt: Date;
}

const TodolistSchema = new Schema<ITodoList>(
    {
        name: {type: String, required: true},
        user_id: {type: Schema.Types.ObjectId, ref:"User", required: true},
        status: { type: String, enum: Object.values(TodoListStatus), default: TodoListStatus.Unfinished }
    },{
        timestamps: true
    }
);

export const TodoList = mongoose.model<ITodoList>("TodoList", TodolistSchema);