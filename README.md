# Project: Mini Message Board

[More detail information here](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) and [here](https://www.theodinproject.com/lessons/nodejs-using-postgresql#assignment).

https://github.com/user-attachments/assets/8d0ddf1f-ccb9-4962-bbea-431a28f9b675

|                                                                      Tech stack                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![tech stack](https://go-skill-icons.vercel.app/api/icons?i=postgres,nodejs,express,ts,html,css,picocss)](https://github.com/LelouchFR/skill-icons) |

...and **[EJS](https://ejs.co)**.

## Getting started

First you need to set up PostgreSQL, using Docker (recommended) or download it (soy Windows users). And then change these values to [`.env.production`](./.env.production) or `.env.development.local`. For example:

```text
PGHOST=localhost
PGPORT=5432
PGUSER=example
PGPASSWORD=example
PGDATABASE=example
```

Start your Postgres first. Then you need to re-create the needed table by using one of these following commands:

```bash
# Make sure you've created .env.development.local and changed the defaults
npm run populate-db:dev

# Make sure you've changed the defaults inside .env.production
npm run populate-db:prod
```

The [`./src`](./src/) folder contains the source code. The `./dist` folder contains the bundled source code and it'll be created when you run this command:

```bash
npm run build
```

Use the following command to run and watch for any changes in the source code:

```bash
npm run dev
```

And use the following command to run the bundled code:

```bash
npm run start
```

For linting:

```bash
npm run lint
```
