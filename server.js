const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Campaign show
    server.get('/campaign/:id', (req, res) => {
      const actualPage = '/campaign';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    // // New Campaign
    // server.get('/newCampaign/:type', (req, res) => {
    //   const actualPage = '/newCampaign';
    //   const queryParams = { type: req.params.type };
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
