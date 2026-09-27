const express = require ("express")
const cors = require ("cors") 
const helmet = require ("helmet")

const env = require("./src/config/env.js");

const routes = require ("./src/routes/index.routes.js")
const PageNotFound = require ("../backend/src/core/middleware/NotFound.middleware.js")
const handleError = require("../backend/src/core/errors/ErrorHandler.js")


const app = express ();
app.use(helmet());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use(env.API_PREFIX, routes);

//middlewares
app.use(PageNotFound);
app.use(handleError);


module.exports = app;