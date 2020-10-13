import express, { request, response } from 'express';

import './database/connection';

const app = express();

app.use(express.json());


//parei aqui - 51:12
//https://www.youtube.com/watch?v=QArToKrgBNs&feature=emb_logo
app.get('/orphanages', (request, response) => {
  return response.json({message: 'Hello World!'});
});

app.listen(3333);