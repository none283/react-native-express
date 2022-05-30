"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mydb = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const pool = mysql2_1.default.createPool({
    host: "localhost",
    port: 3306,
    user: "new_user",
    password: "password",
    database: "testdbschema",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
exports.mydb = {
    all: () => {
        return new Promise((res, rej) => {
            pool.query(`SELECT * FROM table_test_word`, (err, results) => {
                if (err) {
                    return rej(err);
                }
                return res(results);
            });
        });
    },
};
