import loginDataLayer from "../models/loginDataLayer";

const loginController = {
  async login(userData: any) {
    const logindata: any = await loginDataLayer.verifyUser(userData);
    console.log("email", logindata);
    return logindata;
  },
};
export default loginController;
