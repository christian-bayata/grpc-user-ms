import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    await this.userRepository.createUser(createUserDto);

    return 'user created ';
  }
}
