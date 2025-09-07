import mongoose, { Schema } from "mongoose";
import { TodoItemStatus } from "../enum/enum";

export interface ITodoItem extends Document {
    to_do_group_id:  Schema.Types.ObjectId;
    name: string;
    des: string;
    due_at: Date;
    status: TodoItemStatus;
    createAt: Date;
}

const TodoItemSchema = new Schema<ITodoItem>(
    {
        to_do_group_id: { type: Schema.Types.ObjectId, ref: "TodoList", required: true },
        name: {type: String, required: true},
        des: {type: String},
        due_at: {type: Date},
        status: {type: String, enum: Object.values(TodoItemStatus), default: TodoItemStatus.Todo},
    },
    {timestamps: true}
);

export const TodoItem = mongoose.model<ITodoItem>("TodolistItem", TodoItemSchema)