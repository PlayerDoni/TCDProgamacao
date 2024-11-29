import { Module } from '@nestjs/common';
import { CelularType } from './celular-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularTypeService } from './celular-type.service';
import { CelularTypeController } from './celular-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CelularType])],
  providers: [CelularTypeService],
  controllers: [CelularTypeController],
})
export class CelularTypeModule {}
