import "dotenv/config"
import express, { Request, Response, NextFunction } from 'express'
import friendsRoutes from "./routes/friends-routes"

const app = express()

app.use(express.json())

app.use("/api/friends", friendsRoutes)

app.use((req, res, next) => {
    next(Error("Endpoint not found"))
})

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    let errorMessage ="Unkown error"
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({error: errorMessage})
})

export default app;