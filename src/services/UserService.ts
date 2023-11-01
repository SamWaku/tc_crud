import UserModel from "../models/User";
import UserRepository, { UserData } from "../repositories/UserRepository";

const UserService = () => {
  const CreateUser = async (data: UserData): Promise<Response> => {
    let { email } = data;

    const alreadyexists = await UserModel.findUnique({
      where: {
        email,
      },
    });

    if (alreadyexists) {
      throw new Error("User already Exists");
    }

    const newuser = await UserRepository.CreateUser(data);

    const payload = {
      userid: newuser.id,
      name: newuser.name,
      email: newuser.email,
    };

    const response = new Response(JSON.stringify(payload));
    return response;
  };

  return { CreateUser };
};

export default UserService();
