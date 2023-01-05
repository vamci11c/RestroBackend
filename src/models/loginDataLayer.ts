import { Connect, GetQuery, InsertQuery } from "../database/mySql";

const loginDataLayer = {
  async verifyUser(userData: any) {
    console.log("test", userData);
    const values = [userData.userName, userData.password];
    const query = `select * from tbl_users where username= ? and password = ?`;
    const conn = await Connect();
    if (!conn) {
      throw new Error("could not connect to db");
    }
    return GetQuery(conn, query, values)
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
export default loginDataLayer;
