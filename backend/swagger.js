const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: "Hanui AI Project API 문서",
        description: "Hanulai_1.0",
    },
    host: "localhost:8080", //host 주소 수정 필요
    schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
    "./routes/api/main_login.js",
    "./routes/api/main_password.js",
    "./routes/api/main_register.js",
    "./routes/api/upload.js"
];
//node swagger.js 로 반영하기

swaggerAutogen(outputFile, endpointsFiles, doc);