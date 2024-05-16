import { IsNotEmpty, IsNumberString } from "class-validator";



export class CPDto {

    @IsNotEmpty()
    @IsNumberString()
    cp: string;

    @IsNotEmpty()
    Municipio: string;

    @IsNotEmpty()
    Colonia: string
}