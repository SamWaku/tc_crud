import { Request, Response } from "express";
import { ServiceContainer } from "../services/Index";

const UserController = (ServiceContainer: ServiceContainer) => {
  const CreateUser = async (req: Request, res: Response) => {
    try {
      let data = req.body;

      const newuser = await ServiceContainer.userservice.CreateUser(data);
      return res.status(201).json({
        success: true,
        message: `User successfully Registered`,
        data: newuser,
      });
    } catch (error) {
      return res.status(201).json({
        success: false,
        message: `User Registeration Failed`,
        error: error,
      });
    }
  };

  return { CreateUser };
};

export default UserController;
