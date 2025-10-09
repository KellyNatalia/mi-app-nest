import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { UpdateProductDTO } from 'src/dto/update-product.dto';
import { Product } from 'src/entities/product.entity';
import { IProducts } from 'src/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
     constructor(@InjectRepository(Product)
        private productsRepository: Repository<Product>) { 


    }
    
    private products: IProducts[] = [
        { id: 1, name: 'Pijama Short', description: 'Pijama corto', price: 100000, size: 'M', status: true, stock: 10 },
        { id: 2, name: 'Pijama Pantalón', description: 'Pijama largo', price: 200000, size: 'L', status: true, stock: 10 },
        { id: 3, name: 'Pijama Vestido', description: 'Pijama largo', price: 300000, size: 'L', status: true, stock: 10 },
    ]

    findAll() {
        return this.productsRepository.find({where: {status: true}});
    }

   async findOne(id: number) {
        const productFind = await this.productsRepository.findOne({ where: { id, status: true } });
        if (!productFind) throw new NotFoundException('Producto no encontrado')
        return productFind
    }


    async findByName(name: string) {
        const productFind = await this.productsRepository.findOne({ where: { name } });
        if (!productFind) throw new NotFoundException('Producto no encontrado');
        return productFind;
    }

    create(newProduct: CreateProductDTO) {
        const productCreated = this.productsRepository.create(newProduct);
        return this.productsRepository.save(productCreated);
    }

    async update(id: number, updateProduct: UpdateProductDTO) {
        await this.productsRepository.update(id, updateProduct);
        return this.findOne(id);
    }


    async disabled(id: number) {
       const product = await this.findOne(id);
        if(!product) throw new NotFoundException('Producto no encontrado');

       product.status = false;
       await this.productsRepository.save(product);
         return { message: 'Producto deshabilitado' };
    }

}