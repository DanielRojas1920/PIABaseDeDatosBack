import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GeneralService } from './general.service';
import { TipoDto } from 'src/Entities/tipos/Tipo.dto';
import { ClientesDto } from 'src/Entities/clientes/Cliente.dto';
import { EstadoPaqueteDto } from 'src/Entities/estado-paquete/estado-paquete.dto';
import { DetallesPaqueteDto } from 'src/Entities/DetallesPaquete/DetallesPaquete.dto';
import { Sucursales } from 'src/Entities/Sucursales/Sucursales.entity';
import { SucursalesDto } from 'src/Entities/Sucursales/Sucursales.dto';
import { PaisesDto } from 'src/Entities/paises/paises.dto';
import { EstadosDto } from 'src/Entities/estados/estados.dto';
import { CPDto } from 'src/Entities/CP/CP.dto';
import { EstadoEntregaDto } from 'src/Entities/EstadoEntregas/EstadoEntrega.dto';

@Controller('general')
export class GeneralController {

    constructor(private readonly generalService: GeneralService) {}

    @Get('/:entity')
    getTipos(@Param('entity') entity:string): Promise <any[]> {
        return this.generalService.fetchAll(entity);
    }

    @Post('/:entity')
    createTipo(@Param('entity') entity:string, @Body() row: any) {
        return this.generalService.add(row, entity);
    }

    @Get('/:entity/:id')
    getTipoById (@Param('id') id: number, @Param('entity') entity: string): Promise <any> {
        console.log(id);
        return this.generalService.fetchById(id, entity);
    }

    @Delete('/:entity/:id')
    delete(@Param('id') id: number, @Param('entity') entity: string) {
        return this.generalService.remove(id, entity);
    }

    @Put('/:entity/:id')
    async updateTipo(@Param('entity') entity: string, @Param('id') id:number, @Body() 
    data: (TipoDto 
        | ClientesDto 
        | EstadoPaqueteDto 
        | DetallesPaqueteDto
        | SucursalesDto
        | PaisesDto
        | EstadosDto
        | CPDto
        | EstadoEntregaDto

    )) {
        await this.generalService.update(id,entity ,data);
        return {message: 'información del Tipo actualizada'}
    }

}
