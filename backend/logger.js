const winston = require("winston");
const winstonDaily = require("winston-daily-rotate-file");
const { printf } = winston.format;

const logDir = 'logs';
const fs = require("fs");

if(!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
};

const logFormat = printf(info => {
    let mt = require("moment");
    return `${mt().format('YY-MM-DD HH:mm:ss')} ${info.level} ${info.message}`;
});

const logger = winston.createLogger({
    format: logFormat,
    transports: [
        //info
        new winstonDaily({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: '%DATE%_log.txt',
            maxFiles: 30,
            zippedArchive: false,
        }),

        //error
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: '%DATE%_error.txt',
            maxFiles: 30,
            zippedArchive: false,
        }),
    ]
});

const stream = {
    write: message => {
        logger.info(message);
    }
};

module.exports = { logger, stream };