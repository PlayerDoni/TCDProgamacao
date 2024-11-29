import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CelularModel } from './celular-model.entity';

@Injectable()
export class CelularModelService {
  constructor(
    @InjectRepository(CelularModel)
    private repository: Repository<CelularModel>,
  ) {}

  findAll(): Promise<CelularModel[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<CelularModel> {
    return this.repository.findOneBy({ id: id });
  }

  save(celularModel: CelularModel): Promise<CelularModel> {
    return this.repository.save(celularModel);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
