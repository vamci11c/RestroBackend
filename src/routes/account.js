"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accountController_1 = __importDefault(require("../controller/accountController"));
const loginController_1 = __importDefault(require("../controller/loginController"));
const userRegisterController_1 = __importDefault(require("../controller/userRegisterController"));
const router = express_1.default.Router();
router.get("/login", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const loginData = req.body;
        loginController_1.default
            .login(loginData)
            .then((result) => {
            res.status(200).send(result);
        })
            .catch((err) => res.status(404).json({
            message: err.message,
            err,
        }));
    });
});
router.get("/account", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.query.email;
        accountController_1.default
            .accounts(email)
            .then((result) => {
            res.status(200).send(result);
        })
            .catch((err) => res.status(404).json({
            message: err.message,
            err,
        }));
    });
});
router.post("/userRegister", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.body;
        console.log("data", email[0]);
        userRegisterController_1.default
            .userRegister(email[0])
            .then((result) => {
            res.status(200).send(result);
        })
            .catch((err) => res.status(404).json({
            message: err.message,
            err,
        }));
    });
});
exports.default = router;
