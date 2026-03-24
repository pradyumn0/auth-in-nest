import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {  loginDTO, RegisterDTO } from './dto/registerUser.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly userService: UserService
  ){}
  @Post('register')
  register(@Body() registerUserDTO: RegisterDTO) {
    const result = this.authService.registerUser(registerUserDTO)
    return result
  }

  @Post('login')
  login(@Body() loginUserDto: loginDTO ) {
    const user = this.authService.loginUser(loginUserDto)
    return { message: 'User loged in successfully' };
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req){
    const userId = req.user.sub

    const user = await this.userService.getUser(userId)
  }
}
