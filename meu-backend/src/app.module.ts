import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularFactoryModule } from './use-case/celular-factories/celular-factory.module';
import { CelularModelModule } from './use-case/celular-models/celular-model.module';
import { CelularTypeModule } from './use-case/celular-types/celular-type.module';
import { CelularModule } from './use-case/celulares/celular.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      autoLoadEntities: true,
      migrations: [`${__dirname}/migration/*.{ts,js}`],
      migrationsRun: true,
      migrationsTableName: 'TCD-migration',
    }),
    CelularFactoryModule,
    CelularModelModule,
    CelularTypeModule,
    CelularModule,
  ],
})
export class AppModule {}
