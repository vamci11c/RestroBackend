import express from "express";
import account from "../routes/account";
const router = express.Router();

router.use("/restro", account);
//export { router as health } from "./healthy";

export default router;
