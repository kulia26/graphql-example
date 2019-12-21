import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
  // populate user table with dummy data
  db.user.bulkCreate(
    times(10, () => ({
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber(),
      password: faker.name.lastName()+faker.name.jobTitle(),
    }))
  );
  // populate product table with dummy data
  db.product.bulkCreate(
    times(10, () => ({
      name: faker.commerce.productName(),
      description: faker.commerce.product(),
      cost: random(59, 2799)
    }))
  );
  // populate orderItems table with dummy data
  db.orderItem.bulkCreate(
    times(10, () => ({
      userId: random(1, 9),
      productId: random(1, 9),
    }))
  );

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});