import { Request, Response } from "express";

import AppError from "../../error/appError";
import ApiDotaService from "./apiDotaService";
import { INTERNAL_SERVER_ERROR } from "../../error/statusCodes";
import { TOKEN_NOT_EXIST } from "../../error/error";

export default class ApidotaController {
  public apiDotaService: ApiDotaService;

  constructor(apiDotaService: ApiDotaService) {
    this.apiDotaService = apiDotaService;
  }
  async searchRankingPlayer(req: Request, res: Response): Promise<any> {
    const { steam32ID } = req.body;
    const data = await this.apiDotaService.searchRankingPlayer(steam32ID);
    res.send(data);
  }
}
