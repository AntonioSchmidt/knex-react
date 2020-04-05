require('./db.config')
const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const { Types, Mutation, MutationResolvers } = require('./product')

const typeDefs = gql`
        ${Types}
        
        type Query {
          _ : Boolean
        }
        
        type Mutation {
          ${Mutation}
        }
`
const resolvers = {
        Mutation: {
          ...MutationResolvers,
        }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(
    { port: 3005 },
)

module.exports = server
