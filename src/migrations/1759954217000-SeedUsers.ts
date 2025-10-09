import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUsers1759954217000 implements MigrationInterface {
    name = 'SeedUsers1759954217000';
   
    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`
        INSERT INTO user (name, email, password, age) VALUES 
        ('John Doe', 'EYQ8g@example.com', 'password123', 25);
        ('Jane Doe', 'X4V2J@example.com', 'password456', 30);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
             DELETE FROM user WHERE email IN ('EYQ8g@example.com', 'X4V2J@example.com')
            `)
    }
}
   