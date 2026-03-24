import { Injectable, UnauthorizedException } from '@nestjs/common';
import {  loginDTO, RegisterDTO } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { log } from 'console';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async registerUser(registerUserDTO: RegisterDTO) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(registerUserDTO.password, salt);

    const user = await this.userService.createUser({
      ...registerUserDTO,
      password: hash,
    });
    const payload = { sub: user._id };
    const token = await this.jwtService.signAsync(payload);
    // log(user, 'user');
    return { access_token: token };
  }

  async loginUser(loginUserDto: loginDTO) {
    const user = await this.userService.findUser(loginUserDto);
    const decodePass = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if(!decodePass){
      throw new UnauthorizedException("Invalid Credentials")
    }
    const payload = { sub: user._id , email: user.email,role: user.role};
    const token = await this.jwtService.signAsync(payload);

     return {
      message: 'Login successful',
      access_token: token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
}
