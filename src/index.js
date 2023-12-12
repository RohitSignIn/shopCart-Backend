const express = require("express");
const app = express();
const { PORT } = require("./config/serverConfig");
const pingRouter = require("./Router/pingRouter");

app.use("/api/v1/ping", pingRouter);

app.listen(PORT, () => "ShopCart Server is UP");
