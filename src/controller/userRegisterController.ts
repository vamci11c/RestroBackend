import userRegisterDataLayer from "../models/userRegisterDataLayer";

const userRegisterController = {
  async userRegister(data: any) {
    console.log("console call");
    const userData: any = await userRegisterDataLayer.registerUser(data);
    console.log("userData", userData);
    return userData;
  },
};

export default userRegisterController;
