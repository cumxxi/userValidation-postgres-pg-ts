import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from "./module/user/register";
import { createConnection } from "typeorm";

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  });

  const app = Express();
  const apolloServer = new ApolloServer({ schema });
  await apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`Server çalıştı http://localhost:4000/graphql`);
  });
};

main();
