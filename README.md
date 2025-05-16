<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 🧱 NestJS User API – Practice Project

This is a backend API built with NestJS, designed as a practice project to implement authentication, role-based access control, PostgreSQL integration, and modular architecture.

## 🚀 Current Features
- ✅ User registration and login
- ✅ JWT-based authentication
- ✅ Role-based access (`USER`, `ADMIN`)
- ✅ Global JWT guard (`APP_GUARD`)
- ✅ Password hashing with bcrypt
- ✅ PostgreSQL integration via TypeORM
- ✅ Configuration management with `@nestjs/config`
- ✅ Global `.env` support for secrets and DB credentials
- ✅ Modular architecture (Auth, Users)
- ✅ Logger middleware (basic)
- ✅ Fully functional with Docker PostgreSQL container

## 🧰 Technologies Used
- [NestJS](https://nestjs.com/) – Framework for scalable server-side apps
- [TypeORM](https://typeorm.io/) – ORM for database connection
- [PostgreSQL](https://www.postgresql.org/) – Relational DB
- [Docker](https://www.docker.com/) – Local DB container
- [Passport.js](http://www.passportjs.org/) – Auth middleware
- [JWT](https://jwt.io/) – Token-based authentication
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) – Password hashing

## ⚙️ How to Run Locally
1. Clone this repository.
2. Install dependencies with `npm install`.
3. Create a `.env` file in the project root with the following content:
  ```DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=admin123
DB_NAME=crud_tareas
JWT_SECRET=jwt_super_secret
JWT_EXPIRES_IN=1d
```

