import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(registerUserDTO: RegisterDTO) {
    try{
      return await this.userModel.create({
        fname: registerUserDTO.fname,
        lname: registerUserDTO.lname,
        email: registerUserDTO.email,
        password: registerUserDTO.password,
      });

    }catch(error){
      if(error.code === 11000 && error.keyValue.email){
        throw new ConflictException("Email is already registered")
      }else{
      throw error
      }
    }
  }
}
