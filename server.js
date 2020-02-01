"use strict";
const express = require('express');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');

//GraphQL Schema : schema di validazione della richiesta
// ` --> ALT-96 
var schema = buildSchema(` 
    type Query {
        message:String
    }
`); 

//GraphQL resolver : funzione eseguita quando viene fatta una query con un certo schema
var root = {

    message: () => 'Hello World GraphQL !'

}

//express server e GraphQL endpoint

var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true 
}));

app.listen(4000, () => console.log('Express-graphQL running on http://localhost:4000/graphql'));
