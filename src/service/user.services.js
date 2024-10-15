import userRepository from "../repositories/user.repositories.js";
import { genereteJWT } from "./auth.service.js";
import bcrypt from "bcrypt";

async function createUserService(newUser) {
  const foundUser = await userRepository.findUserByEmailRepository(
    newUser.email
  );
  if (foundUser) throw new Error("User already exists!");

  const passHash = await bcrypt.hash(newUser.password, 10);
  const user = await userRepository.createUserReposiory({
    ...newUser,
    password: passHash,
  });
  if (!user) throw new Error("Error Creating User");
  const token = genereteJWT(user.id)
  return token;
}

async function findAllUsersService() {
  const users = await userRepository.findAllUserRepository();
  return users;
}

async function findUserByIdService(id) {
  const user = await userRepository.findUserByIdRepository(id);
  if (!user) throw new Error("User not found");
  return user;
}

async function upadateUserService(newUser, userId) {
  const user = await userRepository.findUserByIdRepository(userId);
  if (!user) throw new Error("User not found");
  if (newUser.password) {
    newUser.password = await bcrypt.hash(newUser.password, 10);
  }

  const userUpadete = userRepository.updateUserRepository(userId, newUser);
  return userUpadete;
}

async function deleteUserService(userId) {
  const user = await userRepository.findUserByIdRepository(userId);
  if (!user) throw new Error("User not found");
  const { message } = await userRepository.deleteUserRepository(userId);
  return message;
}

export default {
  createUserService,
  findAllUsersService,
  findUserByIdService,
  upadateUserService,
  deleteUserService,
};
