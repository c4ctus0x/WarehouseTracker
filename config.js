require('dotenv').config();
const config = {
    dbUri: process.env.DB_URI,
    appPort: process.env.APP_PORT || 3000,
    apikey: process.env.API_KEY,
    tokenSecret: process.env.TOKEN_SECRET,
};
module.exports = config;