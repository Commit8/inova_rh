import { Colaborador } from '../entities/colaborador.entity';
import { ColaboradorService } from './../service/colaborador.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/colaboradores')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Colaborador[]> {
    return this.colaboradorService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findId(@Param('id', ParseIntPipe) id: number): Promise<Colaborador> {
    return this.colaboradorService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() colaborador: Colaborador): Promise<Colaborador> {
    return this.colaboradorService.create(colaborador);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() colaborador: Colaborador): Promise<Colaborador> {
    return this.colaboradorService.update(colaborador);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.colaboradorService.delete(id);
  }
}
