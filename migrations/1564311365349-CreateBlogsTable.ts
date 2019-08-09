import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateBlogsTable1564311365349 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'blogs',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true
        },
        {
          name: 'name',
          type: 'varchar(50)'
        },
        {
          name: 'owner',
          type: 'int',
          isNullable: false
        }
      ]
    }));

    await queryRunner.createIndex('blogs', new TableIndex({
      columnNames: ['owner']
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('blogs', true, true, true);
  }
}
