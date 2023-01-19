import { log } from "console";
import mysql from "mysql";
import config from "./config";

const params = {
  user: config.mysql.user,
  password: config.mysql.pass,
  host: config.mysql.host,
  database: config.mysql.database,
};

const Connect = async () =>
  new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params);
    console.log("connection", connection);
    connection.connect((error: any) => {
      if (error) {
        reject(error);

        return;
      }

      resolve(connection);
    });
  });

const Query = async (connection: mysql.Connection, query: string) =>
  new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });

const GetQuery = async (
  connection: mysql.Connection,
  query: string,
  values: Array<string | number>
) =>
  new Promise((resolve, reject) => {
    connection.query(query, values, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });

const InsertQuery = async (
  connection: mysql.Connection,
  query: string,
  values: Array<string | number>
) =>
  new Promise((resolve, reject) => {
    connection.query(query, values, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });

const UpdateQuery = async (
  connection: mysql.Connection,
  query: string,
  values: Array<string | number>
) =>
  new Promise((resolve, reject) => {
    connection.query(query, values, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });

export { Connect, Query, InsertQuery, UpdateQuery, GetQuery };