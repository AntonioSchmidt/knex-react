const { Product } = require('./model')
const { Types, Mutation } = require('./schema')
const { MutationResolvers } = require('./resolver')

module.exports = {
    Product,
    Mutation,
    Types,
    MutationResolvers
}
