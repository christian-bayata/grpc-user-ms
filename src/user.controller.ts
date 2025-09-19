import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import * as microservices from '@nestjs/microservices';
import { CreateUserDto } from './dto/user.dto';

interface UserService {
  createUser(createUserDto: CreateUserDto): any;
}

@Controller('users')
export class UserController implements OnModuleInit {
  private userService: UserService;

  constructor(
    @Inject('USER_PACKAGE') private client: microservices.ClientGrpc,
  ) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
