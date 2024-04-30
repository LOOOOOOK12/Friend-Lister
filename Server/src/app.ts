import "dotenv/config"
import express from 'express'
import FriendModel from './models/friend'

const app = express()

app.get("/" , async (req,res) => {
    const friends = await FriendModel.find().exec()
    res.status(200).json(friends);
})

export default app;