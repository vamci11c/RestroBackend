import express, { Request, Response } from "express";
import userRegisterController from "../controller/userRegisterController";

const router = express.Router();
router.get("/userRegister", async function (req: Request, res: Response) {
  const email = req.query.email;
  userRegisterController
    .userRegister(email)
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
