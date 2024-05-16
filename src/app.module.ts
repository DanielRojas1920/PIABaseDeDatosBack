import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipos } from './Entities/tipos/tipos.entity';
import { Clientes } from './Entities/clientes/clientes.entity';
import { GeneralModule } from './general/general.module';
import { EstadoPaquete } from './Entities/estado-paquete/estado-paquete.entity';
import { DetallesPaquete } from './Entities/DetallesPaquete/DetallesPaquete.entity';
import { Sucursales } from './Entities/Sucursales/Sucursales.entity';
import { Paises } from './Entities/paises/paises.entity';
import { Estados } from './Entities/estados/estados.entity';
import { CP } from './Entities/CP/CP.entity';
import { EstadoEntrega } from './Entities/EstadoEntregas/EstadoEntrega.identity';
import { Entregas } from './Entities/Entregas/Entregas.entity';
import { TransporteEstado } from './Entities/TransporteEstadp/TransporteEstado.entity';
import { Transportes } from './Entities/Transportes/Transportes.entity';
import { Empleados } from './Entities/Empleados/Empleados.entity';
import { Departamentos } from './Entities/Departamentos/Departamentos.entity';
import { Modelos } from './Entities/Modelos/Modelos.entity';
import { TipoDeVehiculo } from './Entities/TipoDeVehiculo/TipoDeVehiculo.entity';
import { Paquetes } from './Entities/Paquetes/Paquetes.entity';
import { Destinatarios } from './Entities/Destinatarios/Destintario.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mssql',
    host: 'localhost',
    port: 1433,
    username: 'PIABaseDeDatos',
    password: 'PIA2024',
    database: 'E3BDD',
    options:{
      encrypt: false,
    },
    synchronize: true,
    entities: [
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

    ],
  }),
    GeneralModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
