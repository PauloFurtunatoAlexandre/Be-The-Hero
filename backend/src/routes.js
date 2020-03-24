const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        event: 'Be The Hero',
        name: 'Elosiel Guedes'
    });
});

module.exports = routes;