import axios from "axios";
import https from "https";

import AppError from "../../error/appError";
import { BASE_URL } from "../../utils/endpoints";
import config from "../../config/index";
import { DATA_IS_NULL, UNEXPECTED_ERROR } from "../../error/error";
import { INTERNAL_SERVER_ERROR, OK } from "../../error/statusCodes";
import { resolve } from "path";

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
      const rank = data.competitive_rank;
      console.log(rank);
      if (rank <= 616) {
        const arauto = "Arauto";

        return JSON.stringify(arauto);
      }
      if (rank <= 1386) {
        const guardian = "Guardin";

        return JSON.stringify(guardian);
      }
      if (rank <= 2156) {
        const cruzado = "Cruzado";

        return JSON.stringify(cruzado);
      }
      if (rank <= 2926) {
        const arconte = "Ancorte";

        return JSON.stringify(arconte);
      }
      if (rank <= 3696) {
        const lenda = "Lenda";

        return JSON.stringify(lenda);
      }
      if (rank <= 4466) {
        const anciente = "Anciente";

        return JSON.stringify(anciente);
      }
      if (rank <= 5420) {
        const divine = "Divine";

        return JSON.stringify(divine);
      }
      if (rank > 5420) {
        const immortal = "Immortal";

        return JSON.stringify(immortal);
      }
    } catch (error) {
      throw new AppError(UNEXPECTED_ERROR, INTERNAL_SERVER_ERROR);
    }
  }
}
