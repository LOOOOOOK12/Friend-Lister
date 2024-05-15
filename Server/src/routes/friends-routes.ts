import express from "express"
import * as FriendsController from "../controllers/friends-controllers"

const router = express.Router()

router.get("/" , FriendsController.getFriends)

router.get("/:friendId", FriendsController.getFriend)

router.post("/", FriendsController.createFriend)

export default router;
