import accountDataLayer from "../models/accountDataLayer";

const accountController = {
  async accounts(email: any) {
    const emailData: any = await accountDataLayer.getUserbyEmail(email);
    console.log("email", emailData);
    return emailData;
  },
};
export default accountController;
