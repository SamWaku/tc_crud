import UserModel from "../models/User";
export interface UserData {
  email: string;
  password: string;
  name: string;
}
// Repository functions
const UserRepository = () => {
  // create user
  const CreateUser = async (data: UserData) => {
    const newuser = await UserModel.create({
      data,
    });

    return newuser;
  };
  // get users
  const GetAllUsers = async () => {
    const users = await UserModel.findMany();
    return users;
  };

  // get user by email
  const GetUserByID = async (id: number) => {
    const user = await UserModel.findUnique({
      where: {
        id,
      },
    });
    return user;
  };

  // delete by id
  const DeleteUserByID = async (id: number) => {
    await UserModel.delete({
      where: {
        id,
      },
    });
  };

  // update by id
  const UpdateUserByID = async (
    data: { name: string; email: string },
    id: number
  ) => {
    let updateuser = await UserModel.update({
      where: {
        id,
      },
      data,
    });
    return updateuser;
  };
  return {
    CreateUser,
    GetAllUsers,
    GetUserByID,
    UpdateUserByID,
    DeleteUserByID,
  };
};

export default UserRepository();
