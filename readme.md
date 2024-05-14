Simple e-commerce backend api with nest js

## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/) such as 20.x and NPM

### 1.2 Project configuration

Start by cloning this project on your workstation in Github.

```sh
git clone https://github.com/RLIN2001/cart-backend-nest.git my-project
```

The next thing will be to install all the dependencies of the project.

```sh
cd ./my-project
npm install
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing the environment variables used for development.

```
.env
```

File .env for run the project:

```
NODE_ENV=dev
PORT_DEV=3000
PORT_PROD=80
DOMAIN=example.com
MONGO_URI=mongodb+srv://chenweiriccardolin:8mjLDz9xq89CwYuu@cluster0.fstl1n3.mongodb.net/freshMarket?retryWrites=true&w=majority&appName=Cluster0

```

## 2. Project structure

This template was made with a well-defined directory structure.

```sh
├── app.module.ts
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.controller.spec.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── auth.service.spec.ts
│   │   ├── dtos/
│   │   │   ├── create-user.dto.ts
│   │   │   └── user.dto.ts
│   │   └── jwt.strategy.ts
│   ├── cart/
│   │   ├── cart.controller.ts
│   │   ├── cart.controller.spec.ts
│   │   ├── cart.module.ts
│   │   ├── cart.service.ts
│   │   ├── cart.service.spec.ts
│   │   ├── dtos/
│   │   │   ├── create-cart.dto.ts
│   │   │   └── cart.dto.ts
│   │   └── functions/
│   │       └── index.ts
│   ├── categories/
│   │   ├── categories.controller.ts
│   │   ├── categories.controller.spec.ts
│   │   ├── categories.module.ts
│   │   ├── categories.service.ts
│   │   ├── categories.service.spec.ts
│   │   ├── dtos/
│   │   │   ├── create-category.dto.ts
│   │   │   └── category.dto.ts
│   ├── common/
│   │   ├── constants.ts
│   │   └── utils.ts
│   ├── orders/
│   │   ├── dtos/
│   │   │   ├── create-order.dto.ts
│   │   │   └── order.dto.ts
│   │   ├── functions/
│   │   │   └── index.ts
│   │   ├── orders.controller.spec.ts
│   │   ├── orders.controller.ts
│   │   ├── orders.module.ts
│   │   ├── orders.service.spec.ts
│   │   └── orders.service.ts
│   ├── users/
│   │   ├── dtos/
│   │   │   ├── create-user.dto.ts
│   │   │   └── user.dto.ts
│   │   ├── functions/
│   │   │   └── index.ts
│   │   ├── interfaces/
│   │   │   └── user.interface.ts
│   │   ├── users.controller.spec.ts
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   ├── users.service.spec.ts
│   │   └── users.service.ts
├── package.json
├── README.md
└── tsconfig.json
```

## 3. How to run

### Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### Test mode

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```


## 4. Postman API Documentation

You can explore and test our API endpoints using Postman. Click [here](https://elements.getpostman.com/redirect?entityId=30123063-5adba42c-fc3c-4c84-a224-2eb6d17010e2&entityType=collection) to view the Postman API documentation.

## 5. Built with 🛠️

This project is build with:

- [NestJS](https://nestjs.com/) - Backend framework used
- [MongoDB](https://www.mongodb.com/it-it) - Used as my database
- [Postman](https://www.postman.com/) - Used to test and document my endpoints
- [NPM](https://www.npmjs.com/) - Dependency manager
