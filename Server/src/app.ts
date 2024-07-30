import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import friendsRoutes from './routes/friends-routes';
import userRoutes from "./routes/user-routes";
import morgan from 'morgan';
import createHttpError, { isHttpError } from 'http-errors';
import session from 'express-session';
import env from "./util/validateEnv";
import MongoStore from 'connect-mongo';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
        mongoUrl: env.MONGO_CONNECTION_STRING,
    }),
}));

app.use('/api/users', userRoutes);
app.use('/api/friends', friendsRoutes);

app.use((req, res, next) => {
    next(createHttpError(404, 'Endpoint not found'));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    let errorMessage = 'Unknown error';
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
});

export default app;
