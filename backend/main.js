const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const passport = require("passport");
const helmet = require("helmet");
const helmetCsp = require("helmet-csp");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 8080);

//추가 보안
app.use(helmet());
app.use(
    helmetCsp({
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "unpkg.com"],
            imgSrc: ["'self'", "lh3.googleusercontent.com"],
        },
    })
);

//서버 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(methodOverride("_method"));
// app.use(cors(corsOptions));

// 세션 설정
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
            Secure: false,
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
});

//라우터 설정
const router = require("./routes/index");
app.use("/", router);
// app.use(express.static(path.join(__dirname, 'uploads')));

//에러 처리
app.use("/", (req, res, next) => {
    let err = new Error(res.__("notFoundError"));
    err.status = 404;
    next(err);
});

// 오류 처리
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    res.status(err.status);
    res.locals.err = err;

    if(res.statusCode != 500) {
        console.log(err);
        err.message = res.__("serverError");
    }
    res.status(500).send("error");
});

//서버 실행
app.listen(app.get("port"), function() {
    console.log(`localhost:${app.get("port")}`);
});