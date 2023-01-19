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
Object.defineProperty(exports, "__esModule", { value: true });
const mySql_1 = require("../database/mySql");
const userRegisterDataLayer = {
    registerUser(insertValues) {
        return __awaiter(this, void 0, void 0, function* () {
            const values = [
                insertValues.firstName || null,
                insertValues.lastName || null,
                insertValues.address || null,
                insertValues.city || null,
                insertValues.emailId || null,
                insertValues.phoneNumber || null,
                insertValues.altPhone || null,
                insertValues.userName || null,
                insertValues.password || null,
                insertValues.billingPeriod || null,
                insertValues.billingPrice || null,
                insertValues.role || null,
                insertValues.createdBy || null,
            ];
            const query = `insert into resto.tbl_users (firstname,lastname,address,city,emailId,phoneNumber,altPhone,userName,password,billingPeriod,billingPrice,role,createdBy) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            const conn = yield (0, mySql_1.Connect)();
            if (!conn) {
                throw new Error("could not connect to db");
            }
            return (0, mySql_1.InsertQuery)(conn, query, values)
                .then((res) => {
                return res;
            })
                .catch((err) => {
                return err;
            })
                .finally(() => {
                conn.end();
            });
        });
    },
};
exports.default = userRegisterDataLayer;
