import { Connect, InsertQuery, Query } from "../database/mySql";
const userRegisterDataLayer = {
  async registerUser(insertValues: any) {
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
