import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRecado1744107621100 implements MigrationInterface {
    name = 'CreateRecado1744107621100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recado" ADD "testeTemporario" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recado" DROP COLUMN "testeTemporario"`);
    }

}
