import express from "express";

import routes from "./routes";

const port = process.env.PORT || 5000;
const app = express();

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
