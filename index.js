"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./src/routes/index"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", (_req, res) => {
    res.send("<h1>Hellsdfdsdo from the restro Report NodeJS Team!</h1> ");
});
app.use("/v1", index_1.default);
app.listen(port, () => console.log(`Running on ${port} ⚡`));
