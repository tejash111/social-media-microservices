const winston = require('winston')

const logger = winston.createLogger({
    level : process.env.NODE_ENV === 'production' ? "info" : "debug",
    format : winston.format.combine(
        winston.format.timestamp,
        winston.format.errors({stack : true}),
        winston.format.splat(),
        winston.format.json(),
    ),
    defaultMeta,
    transports
})