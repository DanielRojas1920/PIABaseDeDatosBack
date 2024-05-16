import { IsEmail, IsNotEmpty, IsNumber, IsNumberString} from "class-validator";

export class ClientesDto {
    @IsNotEmpty()
    nombre: string;


    @IsNotEmpty()
    ApellidoP: string;

    @IsNotEmpty()
    ApellidoM: string;

    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsNotEmpty()
    @IsNumberString()
    telefono: string;
}