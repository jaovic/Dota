import { Router } from "express";
import { celebrate, Segments } from "celebrate";

import ApidotaController from "./apiDotaController";
import ApiDotaService from "./apiDotaService";

import validation from "../../validation";

const apiDotaService = new ApiDotaService();
const apidotaController = new ApidotaController(apiDotaService);

const apiRoute = Router();

apiRoute.post(
  "/ranking",
  // celebrate({ [Segments.BODY]: validation.apiDotaSchema }),
  (req, res) => apidotaController.searchRankingPlayer(req, res)
);

export default apiRoute;
