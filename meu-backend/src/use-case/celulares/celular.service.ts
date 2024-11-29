import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Celular } from './celular.entity';

@Injectable()
export class CelularService {
  constructor(
    @InjectRepository(Celular)
    private repository: Repository<Celular>,
  ) {}

  findAll(): Promise<Celular[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Celular> {
    return this.repository.findOneBy({ id: id });
  }

  save(celular: Celular): Promise<Celular> {
    return this.repository.save(celular);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
