import  express  from "express";
import * as UserController from "../controllers/users-controllers"

const router = express.Router();

router.get("/", UserController.getAuthenticatedUser)

router.post("/signup", UserController.signUp);

router.post("/login", UserController.login);

router.post("/logout", UserController.logout);

export default router;