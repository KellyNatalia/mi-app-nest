import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUsers1759954217000 implements MigrationInterface {
    name = 'SeedUsers1759954217000';
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO \`user\` (\`id\`, \`name\`, \`email\`, \`password\`, \`age\`) VALUES 
            (1, 'John Doe', 'EYQ8g@example.com', 'password123', 25)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM \`user\``);
    }

}
   