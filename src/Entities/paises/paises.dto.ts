import { IsNotEmpty} from "class-validator"


export class PaisesDto {

    @IsNotEmpty()
    Pais: string
}