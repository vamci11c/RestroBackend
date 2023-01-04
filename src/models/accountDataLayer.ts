import { Connect, Query } from "../database/mySql";

const accountDataLayer = {
  async getUserbyEmail(email: string) {
    const query = `select * from Persons`;
    const conn = await Connect();
    if (!conn) {
      throw new Error("could not connect to db");
    }
    return Query(conn, query)
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

export default accountDataLayer;
