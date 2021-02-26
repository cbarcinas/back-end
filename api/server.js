const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const plantsRouter = require("./plants/router");
const usersRouter = require("./users/router");
const authRouter = require("./auth/router");
const restrictedMiddleware = require('./auth/restricted-middleware.js');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/plants", plantsRouter);
server.use("/users", restrictedMiddleware, usersRouter);
server.use("/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "server up" });
});

module.exports = server;
