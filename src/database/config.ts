import dotenv from "dotenv";

dotenv.config();

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

export default config;
