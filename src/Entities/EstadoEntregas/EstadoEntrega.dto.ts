import { IsNotEmpty } from "class-validator";


export class EstadoEntregaDto {
    @IsNotEmpty()
    estadoEntrega: string;
}