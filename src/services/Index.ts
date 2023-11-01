import { UserData } from "../repositories/UserRepository";
import UserService from "./UserService";

export interface ServiceContainer {
  userservice: {
    CreateUser: (data: UserData) => void;
  };
}

const ServiceContainer = () => {
  return {
    userservice: UserService,
  };
};

export default ServiceContainer();
