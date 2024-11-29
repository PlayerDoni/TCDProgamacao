import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CelularType } from './celular-type.entity';

@Injectable()
export class CelularTypeService {
  constructor(
    @InjectRepository(CelularType)
    private repository: Repository<CelularType>,
  ) {}

  findAll(): Promise<CelularType[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<CelularType> {
    return this.repository.findOneBy({ id: id });
  }

  save(celularType: CelularType): Promise<CelularType> {
    return this.repository.save(celularType);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
