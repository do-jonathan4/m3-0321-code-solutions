require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  const sql = `
    insert into "users" ("username", "hashedPassword")
    values ($1, $2)
    returning *
  `;

  argon2
    .hash(password)
    .then(hashedPw => {
      const params = [username, hashedPw];
      db.query(sql, params)
        .then(result => {
          const userdata = {
            userId: result.rows[0].userId,
            username: result.rows[0].username,
            createdAt: result.rows[0].createdAt
          };
          res.status(201).json(userdata);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));

  /**
   * Then, 😉
   *   Insert the user's "username" and "hashedPassword" into the "users" table.
   *   Then, 😉
   *     Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
   */

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
