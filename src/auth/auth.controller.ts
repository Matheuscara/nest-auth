import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.createUser(dto);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }
}
