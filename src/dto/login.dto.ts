import { IsEmail, MaxLength, MinLength } from "class-validator";

export class LoginDTO {
    @IsEmail()
    email: string;

    @MinLength(6,{ message: "La contraseña debe tener una longitud de minimo 6 caracteres y maximo 10" })
    @MaxLength(10,{ message: "La contraseña debe tener una longitud de minimo 6 caracteres y maximo 10" })
    password: string;
}