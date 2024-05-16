import { IsNotEmpty } from "class-validator";


export class EstadosDto {
    @IsNotEmpty()
    Estado: string;
}