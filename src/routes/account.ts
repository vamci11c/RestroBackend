import express, { Request, Response } from "express";
import accountController from "../controller/accountController";
import userRegisterController from "../controller/userRegisterController";
const router = express.Router();

router.get("/account", async function (req: Request, res: Response) {
  const email = req.query.email;
  accountController
    .accounts(email)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) =>
      res.status(404).json({
        message: err.message,
        err,
      })
    );
});

router.post("/userRegister", async function (req: Request, res: Response) {
  const email = req.body;
  console.log("data", email[0]);
  userRegisterController
    .userRegister(email[0])
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) =>
      res.status(404).json({
        message: err.message,
        err,
      })
    );
});
export default router;
