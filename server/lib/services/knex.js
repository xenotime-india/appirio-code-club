import pg from 'pg';
import config from 'config';
import knexConfig from './../../../knex/knexConfig';

const databaseUrl = config.DATABASE_URL;
pg.defaults.ssl = databaseUrl.indexOf('127.0.0.1') < 0;

export default require('knex')(knexConfig);