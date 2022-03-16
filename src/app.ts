import express from "express";
import "express-async-errors";

import mainRouter from "./routes/routes";
import errorHandler from "./middlewares/errorHandler";
import joiErrorHandler from "./middlewares/joiErrorHandler";
import path from "path";

const app = express();

app.use(express.json());

app.use(mainRouter);

app.use(joiErrorHandler);
app.use(errorHandler);

app.use("/", express.static(path.join(__dirname, "../public")));

export { app };
