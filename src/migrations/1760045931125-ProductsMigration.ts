import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductsMigration1760045931125 implements MigrationInterface {
    name = 'ProductsMigration1760045931125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`size\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`stock\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
