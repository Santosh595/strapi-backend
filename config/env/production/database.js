module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DB_PASSWORD'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL') // For self-signed certificates
        },
      },
      debug: false,
    },
  });