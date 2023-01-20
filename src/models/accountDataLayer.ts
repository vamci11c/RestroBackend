import { Connect, Query } from "../database/mySql";

const data = [{ fName: "vamsi", lName: "varma", Mobile: "1234567890" }];
const accountDataLayer = {
  async getUserbyEmail(email: string) {
    const query = `select * from Persons`;
    const conn = await Connect();
    if (!conn) {
      throw new Error("could not connect to db");
    }
    return Query(conn, query)
      .then((res) => {
        return data;
      })
      .catch((err) => {
        return err;
      })
      .finally(() => {
        conn.end();
      });
  },
};

export default accountDataLayer;
