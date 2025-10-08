import { IsEmail, IsInt, IsNotEmpty, IsPositive, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
     name: string; 

     @IsNotEmpty()
     @IsEmail()
     email: string;

     @IsNotEmpty()
     @MinLength(6)
     @MaxLength(10)
     password: string;

     @IsNotEmpty()
     @IsInt()
     @Min(18)
     @Max(110)
     age: number

}