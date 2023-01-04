import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./src/routes/index";
import bodyParser from "body-parser";

dotenv.config();
const port = process.env.PORT;
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send("<h1>Hellsdfdsdo from the restro Report NodeJS Team!</h1> ");
});

app.use("/v1", router);
app.listen(port, () => console.log(`Running on ${port} ⚡`));
