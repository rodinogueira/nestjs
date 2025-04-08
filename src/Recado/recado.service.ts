import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recado } from '../entities/recado.entity';

@Injectable()
export class RecadoService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,
  ) {}

  async createRecado(
    id:number,
    texto:string,
    de:string,
    para:boolean,
    lido:boolean,
    data:Date ): Promise<Recado> {
    const recado = this.recadoRepository.create({ 
      id,
      texto,
      de,
      para,
      lido,
      data,
     });
    return this.recadoRepository.save(recado);
  }

  async findAll(): Promise<Recado[]> {
    return this.recadoRepository.find();
  }
}
