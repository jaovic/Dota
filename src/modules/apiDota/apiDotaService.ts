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

        return arauto;
      }
      if (rank <= 1386) {
        const guardian = "Guardin";

        return guardian;
      }
      if (rank <= 2156) {
        const cruzado = "Cruzado";

        return cruzado;
      }
      if (rank <= 2926) {
        const arconte = "Ancorte";

        return arconte;
      }
      if (rank <= 3696) {
        const lenda = "Lenda";

        return lenda;
      }
      if (rank <= 4466) {
        const anciente = "Anciente";

        return anciente;
      }
    } catch (error) {
      throw new AppError(UNEXPECTED_ERROR, INTERNAL_SERVER_ERROR);
    }
  }
}
