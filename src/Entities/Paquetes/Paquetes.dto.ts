import { IsNotEmpty, IsNumber } from "class-validator";



export class PaquetesDto {
    @IsNotEmpty()
    Clave: string;

    @IsNotEmpty()
    Desc: string;

    @IsNotEmpty()
    @IsNumber()
    IDTipo: number;

    @IsNotEmpty()
    @IsNumber()
    IDEstadoPaquete: number;

    @IsNotEmpty()
    @IsNumber()
    IDDetallesPaquete: number;

    @IsNotEmpty()
    @IsNumber()
    IDCliente: number;

    @IsNotEmpty()
    @IsNumber()
    IDDestinatarios: number;
    
    @IsNotEmpty()
    @IsNumber()
    IDSucursales: number;
}