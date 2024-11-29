import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CelularFactory } from './celular-factory.entity';

@Injectable()
export class CelularFactoryService {
  constructor(
    @InjectRepository(CelularFactory)
    private repository: Repository<CelularFactory>,
  ) {}

  findAll(): Promise<CelularFactory[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<CelularFactory> {
    return this.repository.findOneBy({ id: id });
  }

  save(celularFactory: CelularFactory): Promise<CelularFactory> {
    return this.repository.save(celularFactory);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
