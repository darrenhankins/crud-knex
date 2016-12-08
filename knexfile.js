// Update with your config settings.

require("dotenv").load();

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/beer_inventory'
    // connection: {
    //   database: 'beer_inventory',
    //   user:     process.env.DB_USER,
    //   password: process.env.DB_PASSWORD
    // }
  },

  production: {
   client: 'pg',
   connection: process.env.DATABASE_URL + '?ssl=true'
 }
};
