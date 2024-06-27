import { RequestHandler } from "express";
import FriendModel from "../models/friend";
import createHttpError from "http-errors";

//Load Friends
export const getFriends: RequestHandler = async (req,res, next) => {
    try{
        const friends = await FriendModel.find().exec()
        res.status(200).json(friends);
    } catch(error){
        next(error)
    }
}

//get specific friend
export const getFriend: RequestHandler = async (req, res, next) => {
    const friendId = req.params.friendId

    try {
        const friend = await FriendModel.findById(friendId).exec()
        res.status(200).json(friend)
    } catch (error) {
        next(error)
    }
}

interface CreateFriendBody {
    name?: string,
    age?: number,
    gender?: string,
    description?: string,
    picture?: string,
}

//create Friend function
export const createFriend: RequestHandler< unknown, unknown, CreateFriendBody, unknown > = async (req, res, next) => {
    const name = req.body.name
    const age = req.body.age
    const gender = req.body.gender
    const description = req.body.description
    const picture = req.body.picture

    try {
        if(!name){
            throw createHttpError(400,"Friend must have a Name!!")
        }

        const newFriend = await FriendModel.create({
            name: name,
            age: age,
            gender: gender,
            description: description,
            picture : picture
        })

        res.status(201).json(newFriend)
    } catch (error) {
        next(error)
    }
}

//delete Friend function
export const deleteFriend: RequestHandler = async (req, res, next )=> {
    const friendId = req.params.friendId

    try {
        const friend = await FriendModel.findByIdAndDelete(friendId).exec()
        res.status(200).json(friend)
    } catch (error) {
        next(error)
    }
}