import axios from "axios";
import https from "https";

import AppError from "../../error/appError";
import { BASE_URL } from "../../utils/endpoints";
import config from "../../config/index";
import { DATA_IS_NULL, UNEXPECTED_ERROR } from "../../error/error";
import { INTERNAL_SERVER_ERROR, OK } from "../../error/statusCodes";

const requester = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default class ApiDotaService {
  async searchRankingPlayer(steam32ID: string) {
    try {
      console.log(config.KEY);
      const searchRanking_URL = `${BASE_URL}${steam32ID}?api_key=${config.KEY}`;
      const { data } = await requester.get(searchRanking_URL);
      console.log(data);
      const rank = data.competitive_rank;
      console.log(rank);
      if (rank <= 616) {
        return "Arauto";
      }
      if (rank <= 1386) {
        return "Guardian";
      }
      if (rank <= 2156) {
        return "Cruzado";
      }
      if (rank <= 2926) {
        return "Ancorte";
      }
      if (rank <= 3696) {
        return "Lenda";
      }
      if (rank <= 4466) {
        return "Anciente";
      }
      if (rank <= 5420) {
        return "Divine";
      }
      if (rank > 5420) {
        return "Immortal";
      }
    } catch (error) {
      throw new AppError(UNEXPECTED_ERROR, INTERNAL_SERVER_ERROR);
    }
  }
}
