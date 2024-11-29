import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreationTablesInit1732780190792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE "public"."TCD-type" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" varchar NOT NULL,
                "created-at" timestamp NOT NULL DEFAULT now(),
                "updated-at" timestamp NOT NULL DEFAULT now(),
                PRIMARY KEY ("id")
            );

            CREATE TABLE "public"."TCD-factory" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" varchar NOT NULL,
                "created-at" timestamp NOT NULL DEFAULT now(),
                "updated-at" timestamp NOT NULL DEFAULT now(),
                PRIMARY KEY ("id")
            );

            CREATE TABLE "public"."TCD-model" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" varchar NOT NULL,
                "factory-id" uuid NOT NULL,
                "created-at" timestamp NOT NULL DEFAULT now(),
                "updated-at" timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "FK_FACTORY" FOREIGN KEY ("factory-id") REFERENCES "public"."TCD-factory"("id"),
                PRIMARY KEY ("id")
            );

            CREATE TABLE "public"."TCD-celular" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "description" text NOT NULL,
                "year-Factory" integer NOT NULL,
                "year-Model" integer NOT NULL,
                "type-id" uuid NOT NULL,
                "model-id" uuid NOT NULL,
                "price" numeric NOT NULL,
                "photo" varchar NOT NULL,
                "created-at" timestamp NOT NULL DEFAULT now(),
                "updated-at" timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "FK_TYPE" FOREIGN KEY ("type-id") REFERENCES "public"."TCD-type"("id"),
                CONSTRAINT "FK_MODEL" FOREIGN KEY ("model-id") REFERENCES "public"."TCD-model"("id"),
                PRIMARY KEY ("id")
            );
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE "public"."TCD-celular";
            DROP TABLE "public"."TCD-type";
            DROP TABLE "public"."TCD-model";
            DROP TABLE "public"."TCD-factory";
            `);
  }
}
