import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradorService } from './service/colaborador.service';
import { Colaborador } from './entities/colaborador.entity';
import { ColaboradorController } from './controllers/colaborador.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  providers: [ColaboradorService],
  controllers: [ColaboradorController],
  exports: [],
})
export class ColaboradorModule {}
