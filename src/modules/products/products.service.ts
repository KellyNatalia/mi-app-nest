import { Injectable, NotFoundException } from '@nestjs/common';
import { IProducts } from 'src/interfaces';

@Injectable()
export class ProductsService {
    private products: IProducts [] = [
        { id: 1, name: 'PIJAMA SHORT', description: 'Pijama corto', price: 100000 },
        { id: 2, name: 'PIJAMA PANTALON', description: 'Pijama largo', price: 200000 },
        { id: 3, name: 'PIJAMA VESTIDO', description: 'Pijama vestido', price: 300000 },

    ]

    findAll() {
        return this.productsRepo.findBy({ status: true });
    }

    async findOne(id: number):{
        const productFind = await this.productsRepo.findOne((where: { id }};
        if (!productFind) throw new NotFoundException('producto no encontrado');
        return productFind  
    }

//Me devuelve un producto por su nombre
    findByName(name: string): IProducts { 
        const productFind = this.products.find(
        (product) =>
            product.name === name,
        );
        if (!productFind) throw new NotFoundException('Producto no encontrado');
        return productFind;
    }

    create(product: CreateProductDTO) {
        const ProductCreated = this.productsRepo.create(newProduct);
        return this.productsRepo.save(ProductCreated);
           
    }

    update(id:number, newProduct: Omit<IProducts, 'id'>): IProducts {
        const product = this.findOne(id);
        Object.assign(product, newProduct);
        return product;
    }

    async disabled(id: number){
        const product = this.findOne(id);

        if (!product) {
            throw new NotFoundException('producto no encontrado');
        product.status = false;
        return this.productsRepo.save(product); 
    }

    productFind.status = false;
    await this.productsRepo.save(productFind);
    return { message : 'producto desactivado'};
}
