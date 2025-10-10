import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { UpdateProductDTO } from 'src/dto/update-product.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ParseUpperTrimPipe } from 'src/common/pipes/parse-uppertrim.pipe';
import { RolesGuard } from '../auth/roles.guard';
import { RolesEnum } from 'src/entities/user.entity';
import { Roles } from '../auth/roles.decorator';

@Controller('products')
@UseGuards(RolesGuard)
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    @Roles(RolesEnum.ADMIN, RolesEnum.USER)
    encontrarTodos() {
        return this.productsService.findAll();
    }

    @Get(':id')
    @Roles(RolesEnum.ADMIN, RolesEnum.USER)
    encontrarUnoPorId(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Get('by-name/:name') 
    @Roles(RolesEnum.ADMIN, RolesEnum.USER)
    findByName(@Param('name', ParseUpperTrimPipe) name: string) {
        return this.productsService.findByName(name);
    }


    @UseGuards(JwtAuthGuard)
    @Post()
    @Roles(RolesEnum.ADMIN)
    crear(@Body() body: CreateProductDTO) {
        return this.productsService.create(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    @Roles(RolesEnum.ADMIN)
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateProductDTO) {
        return this.productsService.update(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @Roles(RolesEnum.ADMIN)
    borrar(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.disabled(id);
    }
}
