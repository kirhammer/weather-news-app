import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

export default new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: Number(configService.get('DB_PORT')),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  connectTimeoutMS: Number(configService.get('DB_TIMEOUT')),
  synchronize: false,
  logging: true,
  extra: { charset: 'utf8mb4_unicode_ci' },
  migrations: ['src/commons/migrations/*.ts'],
  entities: ['src/**/entities/**.entity.ts'],
});
