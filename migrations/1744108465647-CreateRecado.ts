import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRecado1744108465647 implements MigrationInterface {
    name = 'CreateRecado1744108465647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recado" ADD "testeTemporario" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recado" DROP COLUMN "testeTemporario"`);
    }

}
