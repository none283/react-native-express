"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// get the client
const mysql2_1 = __importDefault(require("mysql2"));
// create the connection to database
const connection = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdbschema",
});
// simple query
connection.query("SELECT * FROM table_test_word", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
});
