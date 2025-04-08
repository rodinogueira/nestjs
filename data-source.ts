// data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Recado } from './src/entities/recado.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '456123',
  database: 'postgres',
  schema: 'public',
  entities: [Recado],
  migrations: ['migrations/*.ts'],
  synchronize: false,
});
