import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { LoginDTO } from 'src/dto/login.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
import { User } from 'src/entities/user.entity';
import {IProducts, IUser} from 'src/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    remove(id: number) {
        throw new Error('Method not implemented.');
    }
    update(arg0: number, body: UpdateUserDTO) {
        throw new Error('Method not implemented.');
    }
    login(data: LoginDTO) {
        throw new Error('Method not implemented.');
    }

    constructor(
        @InjectRepository(User)
        private usersRepo: Repository<User>
    ) {}

    findAll(){
        return this.usersRepo.find();
    }

   async findOne(id: number) {
        const userFind = await this.usersRepo.findOne({ where: { id } });
        if (!userFind) throw new NotFoundException('usuario no encontrado')
        return userFind
    }

     create(newUser: CreateUserDTO){
        const userCreated = this.usersRepo.create(newUser);
        return this.usersRepo.save(userCreated);
     }

    async update(id: number, updateUser: UpdateUserDTO) {
        await this.usersRepo.update(id, UpdateUse);
        return this.findOne(id);
    }

    // remove(id: number){
    //     const user = this.users.findIndex((user) => user.id === id);
    //     this.users.splice(user, 1);
    //     return { delete: true } 
    // }
}