import { Module } from '@nestjs/common';
import { Celular } from './celular.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularService } from './celular.service';
import { CelularController } from './celular.controller';
import { SupabaseModule } from 'src/@libs/supabase/supabase.module';
@Module({
  imports: [TypeOrmModule.forFeature([Celular]), SupabaseModule],
  providers: [CelularService],
  controllers: [CelularController],
})
export class CelularModule {}
