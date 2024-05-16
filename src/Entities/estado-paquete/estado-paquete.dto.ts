import { IsNotEmpty } from "class-validator";



export class EstadoPaqueteDto {

    @IsNotEmpty()
    estadoPaqValue: string
}