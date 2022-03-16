import { Router } from "express";
import apiRoute from "../modules/apiDota";
const mainRouter = Router();

mainRouter.use("/dota", apiRoute);

export default mainRouter;
