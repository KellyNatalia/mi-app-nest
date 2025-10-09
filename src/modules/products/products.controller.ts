import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Pijama } from 'src/models/pijama.model';
import { ProductsService } from './products.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import {  ParseUpperTrimPipe } from 'src/common/pipes/parse-uppertrim.pipe';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getAllProducts() {
        return this.productsService.findAll();
    }

    @Get(':id')
    getOneProductId(@Param('id') id: string) {
        return this.productsService.findOne(Number(id));
    }

    @Get('by-name/:name') //La ruta es http://localhost:3000/products/by-name/perro
    findByName(@Param('name', ParseUpperTrimPipe) name: string) {
        return this.productsService.findByName(name);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createProduct(@Body() body: CreateProductDTO) {
        return this.productsService.create(body);
    }

    @Get('mi-tienda/productos')
    getProducts() {
        const pijamaShort: Pijama = {
            id: 1,
            name: 'Pijama Short',
            price: 100000,
            description: 'Pijama corto',
            size: 'M'
        }

        const pijamaPantalon: Pijama = {
            id: 2,
            name: 'Pijama Pantalón',
            price: 200000,
            description: 'Pijama largo',
            size: 'L'
        }

        const pijamaVestido: Pijama = {
            id: 3,
            name: 'Pijama Vestido',
            price: 300000,
            description: 'Pijama largo',
            size: 'L'
        }


        const products = [pijamaShort, pijamaPantalon, pijamaVestido];
        return products;


    }

    
    @Get('mi-tienda/precios')
    getPrices() {
        return 'Mi tienda';
    }




   
 
}

