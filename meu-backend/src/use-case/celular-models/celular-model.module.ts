import { Module } from '@nestjs/common';
import { CelularModel } from './celular-model.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularModelService } from './celular-model.service';
import { CelularModelController } from './celular-model.controller';
import { CelularFactory } from '../celular-factories/celular-factory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CelularFactory, CelularModel])],
  providers: [CelularModelService],
  controllers: [CelularModelController],
})
export class CelularModelModule {}
