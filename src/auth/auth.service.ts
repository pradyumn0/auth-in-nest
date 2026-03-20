import { Injectable } from '@nestjs/common';
import { RegisterDTO } from './dto/registerUser.dto';
import bcrypt from 'bcrypt'
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService){}
 async registerUser(registerUserDTO:RegisterDTO){
    console.log(registerUserDTO)
    const saltRounds = 10
    const hash = await bcrypt.hash(registerUserDTO.password, saltRounds)

    return this.userService.createUser({...registerUserDTO, password:hash})
  }
}
