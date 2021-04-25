'use strict';

const personModel = require('./schema.js');

exports.handler = async (event) => {

  console.log(JSON.stringify(event, undefined, 2));

  try {
    console.log('Path Parameters', event.pathParameters);
    const id = event.pathParameters.id;

    const person = await personModel.delete(id);

    let result = JSON.stringify(person);

    return {
      statusCode: 200,
      body: result,
    };

  } catch (e) {
    return{
      statusCode: 500,
      body: e.message
    }
  }

}