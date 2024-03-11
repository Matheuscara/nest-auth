import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.createUser(dto);
  }
}
