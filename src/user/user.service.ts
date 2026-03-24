import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { loginDTO, RegisterDTO } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(registerUserDTO: RegisterDTO) {
    try {
      return await this.userModel.create({
        fname: registerUserDTO.fname,
        lname: registerUserDTO.lname,
        email: registerUserDTO.email,
        password: registerUserDTO.password,
      });
    } catch (error) {
      if (error.code === 11000 && error.keyValue.email) {
        throw new ConflictException('Email is already registered');
      } else {
        throw error;
      }
    }
  }

  async findUser(loginUser: loginDTO) {
    try {
      const user =  await this.userModel.findOne({
        email: loginUser.email,
      });
      if(!user){
        throw new UnauthorizedException('Invalid  Credentials')
      }
      return user
    } catch (error) {
      throw error;
    }
  }

  async getUser(userId: string){
    const user = await this.userModel.findById(userId).select("-password")
    if(!user){
      throw new UnauthorizedException("User not founs")
    }
    return user
  }
}
