import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  type: 'postgres',
  name: 'my-connetcion',
  synchronize: true,
  host: process.env['DB_HOST'],
  port: process.env['DB_PORT'],
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_NAME'],
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
} as ConnectionOptions;
