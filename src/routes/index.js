"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const account_1 = __importDefault(require("../routes/account"));
const router = express_1.default.Router();
router.use("/restro", account_1.default);
//export { router as health } from "./healthy";
exports.default = router;
