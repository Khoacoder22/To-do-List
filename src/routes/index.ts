import { Router } from "express";
import ToList from "./to-list.router";
import ToDoListItems from "./to-list-Items.router";
import User from "./user.router";

const index = Router();

// To do list routes
index.use("/ToDoList", ToList);

// To do list items routes
index.use("/ToDoListItems", ToDoListItems);

// User routes
index.use("/users", User);

export default index;