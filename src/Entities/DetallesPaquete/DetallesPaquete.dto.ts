import { IsNotEmpty, IsNumber } from "class-validator";

export class DetallesPaqueteDto {

    @IsNotEmpty()
    @IsNumber()
    Ancho:number;

    @IsNotEmpty()
    @IsNumber()
    Largo: number;

    @IsNotEmpty()
    @IsNumber()
    Alto: number;

    @IsNotEmpty()
    @IsNumber()
    Peso: number;

    @IsNotEmpty()
    EsFragil: boolean;
}
