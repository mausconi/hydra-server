console.log("Start");

const Koa = require("koa");
var bodyParser = require("koa-bodyparser");
var app = new Koa();
app.use(bodyParser());

require("axios").defaults.baseURL = "https://localhost:4444";

const router = require("./routes");

app.use(router.routes());

app.listen(9020);