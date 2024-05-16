import { IsNotEmpty} from "class-validator";

export class TipoDto {
    @IsNotEmpty({message: "El tipo nuevo insertado no puede ir vacio"})
    tipo: string;
}