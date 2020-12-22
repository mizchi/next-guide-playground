import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App, { getServerSideProps } from "./App";

const app = express();
app.use(express.static("dist"));

app.get("/", (_req, res) => {
  const props = getServerSideProps();
  const content = ReactDOMServer.renderToString(<App {...props} />);
  res.send(`
  <html>
    <body>
      <script>window.__initialProps = ${JSON.stringify(props)}</script>
      <div id="root">${content}</div>
      <script src="/main.js"></script>
    </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("server strated!");
});
