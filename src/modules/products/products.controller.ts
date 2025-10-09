import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { UpdateProductDTO } from 'src/dto/update-product.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ParseUpperTrimPipe } from 'src/common/pipes/parse-uppertrim.pipe';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    encontrarTodos() {
        return this.productsService.findAll();
    }

    @Get(':id')
    encontrarUnoPorId(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Get('by-name/:name') 
    findByName(@Param('name', ParseUpperTrimPipe) name: string) {
        return this.productsService.findByName(name);
    }


    @UseGuards(JwtAuthGuard)
    @Post()
    crear(@Body() body: CreateProductDTO) {
        return this.productsService.create(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateProductDTO) {
        return this.productsService.update(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    borrar(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.disabled(id);
    }
}
