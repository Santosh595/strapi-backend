// path: ./config/env/production/database.js

module.exports = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
          client: 'mysql',
          host: env('DATABASE_HOST'),
          port: env.int('DATABASE_PORT'),
          database: env('DATABASE_NAME'),
          username: env('DATABASE_USERNAME'),
          password: env('DATABASE_PASSWORD'),
          ssl: env.bool('DATABASE_SSL'),
        },
        debug: false,
      },
  });