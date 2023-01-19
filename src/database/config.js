"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MYSQL_HOST = process.env.HOST || "localhost";
const MYSQL_DATABASE = process.env.DATABASE || "db";
const MYSQL_USER = "vamsi"; //process.env.USERNAME || 'user'
const MYSQL_PASS = process.env.PASSWORD || "password";
const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    pass: MYSQL_PASS,
};
const config = {
    mysql: MYSQL,
};
exports.default = config;
