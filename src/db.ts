import { createConnection, Connection, EntitySchema } from 'typeorm';
import * as Models from './models';

let db: Connection;

// tslint:disable-next-line:ban-types
const modelList = Object.values(Models) as (string | Function | EntitySchema<any>)[];

export const getDB = async () => {
  if (db) {
    return db;
  }
  const { PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD } = process.env;
  db = await createConnection({
    type: 'postgres',
    host: PGHOST,
    port: Number(PGPORT),
    username: PGUSER,
    password: PGPASSWORD,
    entities: modelList,
    synchronize: true,
    logging: false,
  });
  return db;
}