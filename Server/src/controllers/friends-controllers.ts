import { RequestHandler } from "express";
import FriendModel from "../models/friend";
import createHttpError from "http-errors";
import mongoose from "mongoose";

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
        if(!mongoose.isValidObjectId(friendId)){
            throw createHttpError(400, "Invalid Friend ID")
        }

        const friend = await FriendModel.findById(friendId).exec()

        if(!friend){
            throw createHttpError(404,"Friend Not Found")
        }
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

interface UpdateFriendParams {
    friendId: string,
}

interface UpdateFriendBody {
    name?: string,
    age?: number,
    gender?: string,
    description?: string,
    picture?: string,
}

export const updateFriend: RequestHandler <UpdateFriendParams, unknown, UpdateFriendBody, unknown> = async (req, res, next ) => {
    const friendId = req.params.friendId
    const newName = req.body.name
    const newAge = req.body.age
    const newGender = req.body.gender
    const newDescription = req.body.description
    const newPicture = req.body.picture
    
    try {
        if(!mongoose.isValidObjectId(friendId)){
            throw createHttpError(400, "Invalid Friend ID")
        }

        if(!newName){
            throw createHttpError(400,"Friend must have a Name!!")
        }

        const friend = await FriendModel.findById(friendId).exec();

        if(!friend){
            throw createHttpError(404, "Friend not found")
        }

        friend.name = newName
        friend.age = newAge
        friend.gender = newGender
        friend.description = newDescription
        friend.picture = newPicture

        const updatedFriend = await friend.save()

        res.status(200).json(updatedFriend)

    } catch (error) {
        next(error)
    }
}

//delete Friend function
export const deleteFriend: RequestHandler = async ( req, res, next )=> {
    const friendId = req.params.friendId

    try {

        if(!mongoose.isValidObjectId(friendId)){
            throw createHttpError(400, "Invalid Friend ID")
        }

        const friend = await FriendModel.findById(friendId).exec()

        if(!friend){
            throw createHttpError(404, "Friend not found")
        }
        
        res.sendStatus(204)

    } catch (error) {
        next(error)
    }
}