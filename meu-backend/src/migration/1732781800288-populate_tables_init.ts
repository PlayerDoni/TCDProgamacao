import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateTablesInit1732781800288 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO public."TCD-factory"(name) VALUES
                ('Samsung'),
                ('Apple'),
                ('Xiaomi'),
                ('Motorola'),
                ('Nokia'),
                ('Huawei'),
                ('Sony'),
                ('LG'),
                ('Asus'),
                ('OnePlus'),
                ('Realme');
                
            INSERT INTO public."TCD-type"(name) VALUES
                ('Smartphone'),
                ('CelularBasico'),
                ('Tablet');
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DELETE FROM public."TCD-type";
            DELETE FROM public."TCD-factory";
            `);
  }
}
