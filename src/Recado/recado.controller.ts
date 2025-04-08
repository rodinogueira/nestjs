import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecadoService } from './recado.service';

@Controller('Recado')
export class RecadoController {
  constructor(private readonly recadoService: RecadoService) {}

  @Post()
  async create(@Body() body: {   
    id:number;
    texto:string;
    de:string;
    para:boolean;
    lido:boolean;
    data:Date }) {
    return this.recadoService.createRecado(
      body.id,
      body.texto,
      body.de,
      body.para,
      body.lido,
      body.data,
    );
  }

  @Get()
  async findAll() {
    return this.recadoService.findAll();
  }
}
