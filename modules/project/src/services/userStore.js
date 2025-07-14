import UserService from "../api/userApi.js"

const userModel = new UserService();

export const userManager = () => {
    const userAdded = userModel.addUser("hasan", "hasan@gmail.com");
    console.log(userAdded);

    const singleUser = userModel.getUser(1);
    console.log('single user = ', singleUser);

    const allUser = userModel.getAllUsers();
    console.log('all users = ', allUser)

}



