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
const accountDataLayer = {
    getUserbyEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `select * from Persons`;
            const conn = yield (0, mySql_1.Connect)();
            if (!conn) {
                throw new Error("could not connect to db");
            }
            return (0, mySql_1.Query)(conn, query)
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
exports.default = accountDataLayer;
