import express from "express";
import request from "request";

const app = express();

app.all("*", (req, res) => {
  console.log("R");
  // const url = "http://localhost:8000/#/";
  const url = process.env.REDIRECT_URL!;
  return req
    .pipe(
      request(url, { qs: req.query }).on("error", function (err) {
        console.info(err);
        return res.sendStatus(400);
      })
    )
    .pipe(res);
});

app.listen(process.env.PORT, function () {
  console.log("Example app listening on port 80!");
});
