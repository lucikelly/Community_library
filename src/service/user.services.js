import userRepository from "../repositories/user.repositories.js";
import bcrypt from 'bcrypt'

async function createUserService(newUser) {
  const foundUser = await userRepository.findUserByEmailRepository(newUser.email)
  if(foundUser) throw new Error("User already exists!")

  const passHash = await bcrypt.hash(newUser.password, 10)
  const user = await userRepository.createUserReposiory({...newUser, password: passHash})
  if(!user) throw new Error("Error Creating User")
  return user

}

export default {
  createUserService
}