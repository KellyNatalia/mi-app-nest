import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false }) 
    name: string;

    @Column({ nullable: false }) 
    description: string;

    @Column({ nullable: false }) 
    price: number;

    @Column({ nullable: false }) 
    size: string;

    @Column({ nullable: false, default: true }) 
    status: boolean;

    @Column({ nullable: false }) 
    stock: number;    
}