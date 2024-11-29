import { Module } from '@nestjs/common';
import { Celular } from './celular.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularService } from './celular.service';
import { CelularController } from './celular.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Celular])],
  providers: [CelularService],
  controllers: [CelularController],
})
export class CelularModule {}
