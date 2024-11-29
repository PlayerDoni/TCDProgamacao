import { Module } from '@nestjs/common';
import { CelularFactory } from './celular-factory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularFactoryService } from './celular-factory.service';
import { CelularFactoryController } from './celular-factory.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CelularFactory])],
  providers: [CelularFactoryService],
  controllers: [CelularFactoryController],
})
export class CelularFactoryModule {}
