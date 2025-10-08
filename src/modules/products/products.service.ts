import { Injectable, NotFoundException } from '@nestjs/common';
import { IProducts } from 'src/interfaces';

@Injectable()
export class ProductsService {
    private products: IProducts [] = [
        { id: 1, name: 'Pijama Corto', description: 'Pijama corto', price: 100000 },
        { id: 2, name: 'Pijama Largo', description: 'Pijama largo', price: 200000 },
        { id: 3, name: 'Pijama Vestido', description: 'Pijama largo', price: 300000 },

    ]

    findAll(): IProducts[] {
        return this.products;
    }

    findOne(id: number): IProducts {
        const productFind = this.products.find((product) => product.id === id);
        if (!productFind) throw new NotFoundException('producto no encontrado');
        return productFind  
    }

    create(product: Omit<IProducts, 'id'>): IProducts {
        const newId = this.products.length > 0 
            ? this.products[this.products.length - 1].id + 1
            : 1;
        const newProduct: IProducts = { id: newId, ...product };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id:number, newProduct: Omit<IProducts, 'id'>): IProducts {
        const product = this.findOne(id);
        Object.assign(product, newProduct);
        return product;
    }

    remove(id: number): void {
        const product = this.products.findIndex((product) => product.id === id);
        this.products.splice(product, 1); 
    }
}
