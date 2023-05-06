const predilectionResolver = require('./predilection')
module.exports = {
    Query: {
        ...predilectionResolver.Query
    },
    Mutation:{
        ...predilectionResolver.Mutation
    }
}