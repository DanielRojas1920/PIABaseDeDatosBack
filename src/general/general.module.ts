import { Module } from '@nestjs/common';
import { GeneralService } from './general.service';
import { GeneralController } from './general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from 'src/Entities/clientes/clientes.entity';
import { EstadoPaquete } from 'src/Entities/estado-paquete/estado-paquete.entity';
import { Tipos } from 'src/Entities/tipos/tipos.entity';
import { DetallesPaquete } from 'src/Entities/DetallesPaquete/DetallesPaquete.entity';
import { Sucursales } from 'src/Entities/Sucursales/Sucursales.entity';
import { Paises } from 'src/Entities/paises/paises.entity';
import { Estados } from 'src/Entities/estados/estados.entity';
import { cp } from 'fs';
import { CP } from 'src/Entities/CP/CP.entity';
import { EstadoEntrega } from 'src/Entities/EstadoEntregas/EstadoEntrega.identity';
import { Entregas } from 'src/Entities/Entregas/Entregas.entity';
import { TransporteEstado } from 'src/Entities/TransporteEstadp/TransporteEstado.entity';
import { Transportes } from 'src/Entities/Transportes/Transportes.entity';
import { Empleados } from 'src/Entities/Empleados/Empleados.entity';
import { Departamentos } from 'src/Entities/Departamentos/Departamentos.entity';
import { Modelos } from 'src/Entities/Modelos/Modelos.entity';
import { TipoDeVehiculo } from 'src/Entities/TipoDeVehiculo/TipoDeVehiculo.entity';
import { Paquetes } from 'src/Entities/Paquetes/Paquetes.entity';
import { Destinatarios } from 'src/Entities/Destinatarios/Destintario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Tipos, 
    Clientes, 
    EstadoPaquete,
    DetallesPaquete,
    Sucursales,
    Paises,
    Estados,
    CP,
    EstadoEntrega,
    Entregas,
    TransporteEstado,
    Transportes,
    Empleados,
    Departamentos,
    Modelos,
    TipoDeVehiculo,
    Paquetes,
    Destinatarios,
  ])],
  providers: [GeneralService],
  controllers: [GeneralController]
})
export class GeneralModule {}
