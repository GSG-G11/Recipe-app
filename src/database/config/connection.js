/* eslint-disable linebreak-style */
require('env2')('config.env');
const { Pool } = require('pg');

let DB_URL = '';
if (process.env.NODE_ENV === 'production') {
  DB_URL = process.env.DATABASE_URL;
} else if (process.env.NODE_ENV === 'development') {
  DB_URL = process.env.DB_URL;
} else if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.DB_TESTING_URL;
} else {
  throw new Error('DB_URL NOT FOUND!');
}

const connection = new Pool({
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false },
});

module.exports = connection;
