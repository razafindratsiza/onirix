const { predilections } = require("../models")
const Sequelize = require('sequelize');
const resolvers = {
    Query: {
        RunPredilect: async () => {
            try {
                let response = "";
                await predilections.findAll({ order: Sequelize.literal('rand()'), limit: 1 })
                .then((encounters) => {
                    encounters.forEach(element => {
                        response = element.dataValues.responses
                    });
                }); 
                return {
                    responses : response
                }
                
            } catch (error) {
                console.log(error)
            }
        }, 
    },
    Mutation:{
        newPredilection: async()=>{
            try {
                
            } catch (error) {
                
            }
        }
    }
};

module.exports = resolvers