import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { LoginDTO } from 'src/dto/login.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
import { User } from 'src/entities/user.entity';
import { IProducts, IUser } from 'src/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    login(data: LoginDTO) {
        throw new Error('Method not implemented.');
    }

    constructor(
        @InjectRepository(User)
        private usersRepo: Repository<User>
    ) { }

    findAll() {
        return this.usersRepo.find();
    }

    async findOne(id: number) {
        const userFind = await this.usersRepo.findOne({ where: { id } });
        if (!userFind) throw new NotFoundException('usuario no encontrado')
        return userFind
    }

    create(newUser: CreateUserDTO) {
        const userCreated = this.usersRepo.create(newUser);
        return this.usersRepo.save(userCreated);
    }

    async update(id: number, updateUser: UpdateUserDTO) {
        await this.usersRepo.update(id, updateUser);
        return this.findOne(id);
    }

    async remove(id: number) {
        const result = await this.usersRepo.delete(id)
        if (result.affected === 0) throw new NotFoundException(`Usuario con id ${id} no encontrado`)
        return { message: `El usuario con id ${id} fue eliminado correctamente` }
    }
}