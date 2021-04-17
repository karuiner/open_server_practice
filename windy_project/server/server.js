const express = require("express");
const cors = require("cors");
const session = require("express-session");
const logger = require("morgan");
const fs = require("fs");
const https = require("https");

const app = express();

//const FILL_ME_IN = "FILL_ME_IN";
const port = process.env.PORT || 4000;

// TODO: express-session 라이브러리를 이용해 쿠키 설정을 해줄 수 있습니다.
app.use(
  session({
    secret: "@windyproject",
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: "localhost",
      path: "/",
      maxAge: 60 * 60,
      sameSite: "none",
      httpOnly: true,
      secure: true,
    },
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: CORS 설정이 필요합니다. 클라이언트가 어떤 origin인지에 따라 달리 설정할 수 있습니다.
// 메서드는 GET, POST, OPTIONS를 허용합니다.
//app.use(cors());

app.use(
  cors({
    origin: "https://localhost:3000",
    methods: "GET, POST, OPTIONS",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  console.log(req.body);
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
let server;

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + "key.pem", "utf-8"),
        cert: fs.readFileSync(__dirname + `/` + "cert.pem", "utf-8"),
      },
      app
    )
    .listen(port);
} else {
  server = app.listen(port);
}
module.exports = server;
