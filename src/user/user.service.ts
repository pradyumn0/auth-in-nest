import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel:Model<User>){}
 async createUser(registerUserDTO: RegisterDTO){
   return  await this.userModel.create({
    fname:registerUserDTO.fname,
    lname:registerUserDTO.lname,
    email: registerUserDTO.email,
    password:registerUserDTO.password
   })
  }
}
