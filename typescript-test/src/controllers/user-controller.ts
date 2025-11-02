import UserModel from "../models/user-model";
import express from "express";

// create a new user
const createUser = async (req: express.Request, res: express.Response) => {
    const createdUser = await UserModel.create({
        name: 'john',
        email: 'wick@gmail.com',
        username: 'wickJ',
        comments: [
            { body: 'This is a comment', date: new Date() },
            { body: 'This is a comment2', date: new Date() }
        ],
        data: {
            active: true,
            typeValue: "test",
        },
        cuisines: [
            "1",
            "2",
        ]
    });

    res.send(createdUser);
}

// update user data
const updateUser = async (req: express.Request, res: express.Response) => {
    const updatedUser = await UserModel.findOneAndUpdate(
        { name: 'jamal' }, { name: 'khubaib' }, { new: true }
    );
    res.send(updatedUser);
}

// read all users
const readAllUsers = async (req: express.Request, res: express.Response) => {
    const allUsers = await UserModel.find();
    res.send(allUsers);
}

// delete user
const deleteUser = async (req: express.Request, res: express.Response) => {
    const deletedUser = await UserModel.findOneAndDelete({ name: 'khubaib' });
    res.send(deletedUser);
}

// delete all user
const deleteAllUsers = async (req: express.Request, res: express.Response) => {
    const deletedUsers = await UserModel.deleteMany();
    res.send(deletedUsers);
}

export { createUser, updateUser, readAllUsers, deleteUser, deleteAllUsers };