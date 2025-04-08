import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadoService } from './recado.service';
import { RecadoController } from './recado.controller';
import { Recado } from '../entities/recado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recado])],
  controllers: [RecadoController],
  providers: [RecadoService],
  exports: [TypeOrmModule],
})
export class RecadoModule {}
