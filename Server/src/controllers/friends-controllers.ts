import { RequestHandler } from "express";
import FriendModel from "../models/friend";

export const getFriends: RequestHandler = async (req,res, next) => {
    try{
        const friends = await FriendModel.find().exec()
        res.status(200).json(friends);
    } catch(error){
        next(error)
    }
}

export const getFriend: RequestHandler = async (req, res, next) => {
    const friendId = req.params.friendId

    try {
        const friend = await FriendModel.findById(friendId).exec()
        res.status(200).json(friend)
    } catch (error) {
        next(error)
    }
}

export const createFriend: RequestHandler = async (req, res, next) => {
    const name = req.body.name
    const age = req.body.age
    const gender = req.body.gender
    const description = req.body.description
    
    try {
        const newFriend = await FriendModel.create({
            name: name,
            age: age,
            gender: gender,
            description: description,
        })

        res.status(201).json(newFriend)
    } catch (error) {
        next(error)
    }
}