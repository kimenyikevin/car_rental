# Click Bar Invetory Back-end

This File will help you get started with the Click Bar Invetory API.

## Getting Started

### dependency-installation

### Install postgres in your local pc

```bash
sudo apt install wget ca-certificates
```

```bash
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```

```bash
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
```

```bash
sudo apt update
```

```bash
apt install postgresql postgresql-contrib
```

```bash
sudo -u postgres psql
```

### Create database in postgres

```bash
sudo -u postgres psql
```

```bash
postgres=# create database click_bar_db;

```

```bash
postgres=# create user postgres with encrypted password 'kevin';
```

```bash
postgres=# grant all privileges on database click_bar_db to postgres;
```

### dependency-installation

```bash
npm install  or yarn install
```

## Environment Variables

> Create a .env in the root directory and paste all the environment variables values as you see them in .env

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`=development

`PORT`=8000

`DATABASE_URL`=postgres://postgres:kevin@localhost:5432/click_bar_db

### scripts

```bash
starting server: npm run start:dev or yarn run start:dev
```

### Development GuideLine and

*We will be using ES6 syntax for the development.
*Each feature or bug fix shpuld be created in a new branch.
*Main branch should never be pushed into directly.
*Add a label stating if your PR is either a bug fix or a feature.
*You will need to ask for review before your codes get merged to master branch.
*We will be using mongoose for the development, no core mongodb will be used.
*Every Independent Entity should have it's own model,service,controller and route. ex:users,transactions,etc.
*You can't push codes with eslint errors and warning
*You can't push codes without updating swagger file with your new route or feature where necessary.
*In case you add new environment variables, you need to add it's name to .env.example file and send it in collaborating group chat.
*Use comments where you think your codes intent is not very clear.
*You can use the swagger.example.json file as an example for catching up purpose.

## Authors

- [@nkusikevin](https://github.com/nkusikevin)

## Tech Stack

**Server:** Node, Express, postgresql
