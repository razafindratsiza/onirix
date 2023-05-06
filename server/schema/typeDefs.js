const typeDefs = `#graphql
  type Predilection {
    responses: String
}
  type Query {
    RunPredilect: Predilection
  }
  type Mutation{
    newPredilection: Predilection!
  }
 
`;
module.exports = typeDefs