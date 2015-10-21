var loggerFactory = require('./logger-factory');

var logger = loggerFactory();

console.log(`Running in ${process.env.NODE_ENV} environment`);

logger.error('Error');
logger.debug('Debug');
logger.info('Info');

