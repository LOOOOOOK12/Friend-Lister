import { RequestHandler } from "express";
import FriendModel from "../models/friend";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { assertIsDefined } from "../util/assertIsDefined";

//Load Friends
export const getFriends: RequestHandler = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;
    
    try{
        assertIsDefined(authenticatedUserId);

        const friends = await FriendModel.find({userId: authenticatedUserId}).exec()
        res.status(200).json(friends);
    } catch(error){
        next(error)
    }
}

//get specific friend
export const getFriend: RequestHandler = async (req, res, next) => {
    const friendId = req.params.friendId
    const authenticatedUserId = req.session.userId;

    try {
        assertIsDefined(authenticatedUserId);

        if(!mongoose.isValidObjectId(friendId)){
            throw createHttpError(400, "Invalid Friend ID")
        }

        const friend = await FriendModel.findById(friendId).exec()

        if(!friend){
            throw createHttpError(404,"Friend Not Found")
        }

        if(!friend.userId.equals(authenticatedUserId)){
            throw createHttpError(401, "You cannot access this friend")
        }

        res.status(200).json(friend)
    } catch (error) {
        next(error)
    }
}

//create Friend function
export const createFriend: RequestHandler = async (req, res, next) => {
    const { name, age, gender, description, picture } = req.body;
    const authenticatedUserId = req.session.userId;

    try {
        assertIsDefined(authenticatedUserId);
        if (!name) {
            throw createHttpError(400, "Friend must have a Name!!");
        }

        const newFriend = await FriendModel.create({
            userId: authenticatedUserId,
            name,
            age,
            gender,
            description,
            picture,
        });

        res.status(201).json(newFriend);
    } catch (error) {
        next(error);
    }
};

//check friend
export const checkFriends: RequestHandler = async (req, res, next) => {
    const { name } = req.query;

    try {
        if (!name) {
            return next(createHttpError(400, "Friend must have a name!"));
        }

        const friend = await FriendModel.findOne({ name: name.toString() });

        if (friend) {
            return res.status(200).json({ exists: true, friend });
        } else {
            return res.status(200).json({ exists: false });
        }
    } catch (error) {
        next(error);
    }
};

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

//update friend
export const updateFriend: RequestHandler <UpdateFriendParams, unknown, UpdateFriendBody, unknown> = async (req, res, next ) => {
    const friendId = req.params.friendId
    const newName = req.body.name
    const newAge = req.body.age
    const newGender = req.body.gender
    const newDescription = req.body.description
    const newPicture = req.body.picture
    const authenticatedUserId = req.session.userId;

    try {
        assertIsDefined(authenticatedUserId)

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

        if(!friend.userId.equals(authenticatedUserId)){
            throw createHttpError(401, "You cannot access this friend")
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
    const authenticatedUserId = req.session.userId;

    try {
        assertIsDefined(authenticatedUserId)

        if(!mongoose.isValidObjectId(friendId)){
            throw createHttpError(400, "Invalid Friend ID")
        }
        const friend = await FriendModel.findByIdAndDelete(friendId).exec()

        if(!friend){
            throw createHttpError(404, "Friend not found")
        }

        if(!friend.userId.equals(authenticatedUserId)){
            throw createHttpError(401, "You cannot access this friend")
        }
        
        res.sendStatus(204)

    } catch (error) {
        next(error)
    }
}

//search friend by id
export const findFriendById: RequestHandler = async (req, res, next) => {
    const friendId = req.params.friendId;

    try {
        if (!mongoose.isValidObjectId(friendId)) {
            throw createHttpError(400, "Invalid Friend ID");
        }

        const friend = await FriendModel.findById(friendId).exec();
        if (!friend) {
            throw createHttpError(404, "Friend not found");
        }

        res.status(200).json(friend);
    } catch (error) {
        next(error);
    }
};

// Search friends by name
export const findFriendsByName: RequestHandler = async (req, res, next) => {
    const { name, userId } = req.body;

    try {
        if (!mongoose.isValidObjectId(userId)) {
            throw createHttpError(400, "Invalid User ID");
        }

        const friends = await FriendModel.find({ 
            name: { $regex: name, $options: "i" },
            userId
        }).exec();
        
        res.status(200).json(friends);
    } catch (error) {
        next(error);
    }
};

export const checkFriendExists: RequestHandler = async (req, res, next) => {
    const { name } = req.query;
    const authenticatedUserId = req.session.userId;

    try {
        if (!name) {
            throw createHttpError(400, "Friend must have a name!");
        }

        if (!authenticatedUserId) {
            throw createHttpError(401, "User not authenticated");
        }

        const friend = await FriendModel.findOne({ name: name.toString(), userId: authenticatedUserId }).exec();

        if (friend) {
            res.status(200).json({ exists: true });
        } else {
            res.status(200).json({ exists: false });
        }
    } catch (error) {
        next(error);
    }
};