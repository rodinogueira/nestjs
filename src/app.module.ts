// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadoModule } from './recado/recado.module';
import { Client } from 'pg';
import { Recado } from './entities/recado.entity';

@Module({
  imports: [
    // IMPORT DINÂMICO com criação do schema antes
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const client = new Client({
          host: 'localhost',
          port: 5432,
          user: 'postgres',
          password: '456123',
          database: 'postgres',
          entities: [Recado],
          synchronize: true,
        });

        await client.connect();

        const schemaName = 'public';

        console.log(`[Init] Verificando/criando schema "${schemaName}"...`);
        await client.query(`CREATE SCHEMA IF NOT EXISTS ${schemaName}`);
        await client.end();
        console.log(`[Init] Schema "${schemaName}" pronto.`);

        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '456123',
          database: 'postgres',
          schema: schemaName,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    RecadoModule,
  ],
})
export class AppModule {}
