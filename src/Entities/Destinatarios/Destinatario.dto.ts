import { IsNotEmpty, IsNumber, IsNumberString,  } from "class-validator";



export class DestinatariosDto {
    
    @IsNotEmpty()
    @IsNumber()
    Numero: number;

    @IsNotEmpty()
    Calle: string;

    @IsNotEmpty()
    @IsNumberString()
    Telefono: string;

    @IsNotEmpty()
    @IsNumber()
    IDPais: number;

    @IsNotEmpty()
    @IsNumber()
    IDEstado: number;

    @IsNotEmpty()
    @IsNumber()
    IDCP: number;
}