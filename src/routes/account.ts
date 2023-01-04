import express, { Request, Response } from "express";
import accountController from "../controller/accountController";
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
export default router;
