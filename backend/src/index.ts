import http from "http";
import fs from "fs";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import app from "./app";
import connectDb from "./database";
import routes from "./routes";
import resolvers from "./resolvers";
// import { context } from './utils/contextApollo';

dotenv.config();

const typeDefs = fs.readFileSync(
  path.join(__dirname, "../graphql/typeDefs.graphql"),
  "utf8"
);
const PORT = process.env.PORT;

async function startApolloServer(typeDefs: any, resolvers: any) {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context,
    csrfPrevention: true,
    cache: "bounded",
  });
  routes(app);
  await server.start();
  server.applyMiddleware({ app });
  await httpServer.listen(PORT);
  try {
    await connectDb();
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  } catch (e) {
    console.log(e);
    console.log("Server crashed");
  }
}

(async () => {
  await startApolloServer(typeDefs, resolvers);
})();
