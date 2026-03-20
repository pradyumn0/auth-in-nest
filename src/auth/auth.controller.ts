import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/registerUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}
  @Post('register')
  register(@Body() registerUserDTO: RegisterDTO) {
    const result = this.authService.registerUser(registerUserDTO)
    return result
  }

  @Post('login')
  login() {
    return { message: 'User loged in successfully' };
  }
}
