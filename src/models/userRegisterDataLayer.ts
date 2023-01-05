import { Connect, InsertQuery, Query } from "../database/mySql";
const userRegisterDataLayer = {
  async registerUser(insertValues: any) {
    const values = [
      insertValues.firstname || null,
      insertValues.lastname || null,
      insertValues.address || null,
      insertValues.city || null,
      insertValues.emailId || null,
      insertValues.phoneNumber || null,
      insertValues.userName || null,
      insertValues.password || null,
    ];
    console.log("values to inser", values);
    const query = `insert into resto.tbl_users (firstname,lastname,address,city,emailId,phoneNumber,userName,password) values (?,?,?,?,?,?,?,?)`;
    const conn = await Connect();
    if (!conn) {
      throw new Error("could not connect to db");
    }
    return InsertQuery(conn, query, values)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        conn.end();
      });
  },
};

export default userRegisterDataLayer;
