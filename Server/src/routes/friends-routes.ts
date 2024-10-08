import express from "express";
import * as FriendsController from "../controllers/friends-controllers";

const router = express.Router();

router.get("/check-friend", FriendsController.checkFriendExists); 

router.get("/", FriendsController.getFriends); 

router.get("/:friendId", FriendsController.getFriend); 

router.post("/", FriendsController.createFriend);

router.patch("/:friendId", FriendsController.updateFriend); 

router.delete("/:friendId", FriendsController.deleteFriend); 

router.post("/find", FriendsController.findFriendsByName); 

router.get("/:friendId", FriendsController.findFriendById);

export default router;
