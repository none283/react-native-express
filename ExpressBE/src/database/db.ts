import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "new_user",
  password: "password",
  database: "testdbschema",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

interface Database {
  all: any;
}

export const mydb: Database = {
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
