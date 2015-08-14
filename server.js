import express from "express";
import React from "react";
import Router from "react-router";
import Location from 'react-router/lib/Location';
import routes from "./src/routes";

const app = express();

app.use(express.static('content'));

app.get('/*', function (req, res) {
  const location = new Location(req.path, req.query);

  Router.run(routes, location, (err, routeState) => {
    if(err) return console.error(err);

    if(!routeState) return res.status(404).end('404');

    function renderView() {
      const InitialView = (
        <Router {...routeState} />
      );

      const componentHTML = React.renderToString(InitialView);

      const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>bio.</title>
          <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
          <link href='app.css' rel='stylesheet' type='text/css'>
        </head>
        <body>
          <div id="react-view">${componentHTML}</div>
        </body>
      </html>
      `;

      return HTML;
    }

    res.end(renderView());
  });
});

app.listen(3000, function () {
  console.log(`Example app listening at http://localhost:3000`);
});
