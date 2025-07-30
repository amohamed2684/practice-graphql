import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from '../graphql/schema.js';
import { resolvers } from '../graphql/resolvers.js';

const server = new ApolloServer({
  // typedefs
  typeDefs,

  // resolvers
  resolvers,
});

const { url } =  await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log('Server ready at', url)