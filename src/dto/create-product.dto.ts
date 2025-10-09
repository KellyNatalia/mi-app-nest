import { IsInt, IsNotEmpty, IsPositive } from "class-validator";

export class CreateProductDTO {
    @IsNotEmpty()
     name: string; 

     @IsNotEmpty()
     description: string;

     @IsNotEmpty()
     @IsInt()
     @IsPositive()
     price: number;

     @IsNotEmpty()
     size: string;

     @IsNotEmpty()
     status: boolean;

     @IsNotEmpty()
     stock: number;


}