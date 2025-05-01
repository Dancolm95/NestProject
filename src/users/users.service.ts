import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './Entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  create(user: CreateUserDto): User {
    const newUser = { id: this.idCounter++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return user;
  }

  update(id: number, updatedData: Partial<User>): User {
    const user = this.findOne(id);
    const updatedUser = { ...user, ...updatedData };
    const index = this.users.findIndex((u) => u.id === id);
    this.users[index] = updatedUser;
    return updatedUser;
  }

  remove(id: number): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    this.users.splice(index, 1);
  }
}
