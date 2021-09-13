import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.users.save(this.users.create(createUserDto));
  }

  async findAll() {
    return await this.users.find();
  }

  async findOne(id: number) {
    return await this.users.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.users.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.users.delete(id);
  }
  async findOneByEmail(email: string) {
    const user = await this.users.findOne({ where: { email: email } });
    return user;
  }
}
