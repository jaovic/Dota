import { Request, Response } from "express";

import ApiDotaService from "./apiDotaService";

export default class ApidotaController {
  public apiDotaService: ApiDotaService;

  constructor(apiDotaService: ApiDotaService) {
    this.apiDotaService = apiDotaService;
  }
  async searchRankingPlayer(req: Request, res: Response): Promise<any> {
    const { steam32ID } = req.body;
    const data = await this.apiDotaService.searchRankingPlayer(steam32ID);
    res.status(201).json(data);
  }
}
