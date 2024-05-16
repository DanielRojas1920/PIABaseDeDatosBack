import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";


export class SucursalesDto {
    @IsNotEmpty()
    @IsNumberString()
    Numero: number;

    @IsNotEmpty()
    Calle: string;

    @IsNotEmpty()
    @IsNumberString()
    Telefono: string;

    @IsNotEmpty()
    IDPais: number;

    @IsNotEmpty()
    IDEstado: number;
    
    @IsNotEmpty()
    IDCP: number;
}