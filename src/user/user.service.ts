import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.prismaService.user.findUnique({
        where: {
            email: dto.email,
        }
    });

    if(!user) throw new ConflictException('Email duplicated');

    const newUser = await this.prismaService.user.create({
        data: {
            ...dto
        }
    })
  }
}
