const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        event: 'Be The Hero',
        name: 'Elosiel Guedes'
    });
});

app.listen(3333);