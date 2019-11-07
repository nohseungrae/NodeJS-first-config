import express from "express";
import { urlRoute } from "../routes";
import { homeController } from "../controllers/videoController";

export const globalRouter = express.Router();

globalRouter.get(urlRoute.home, homeController);
