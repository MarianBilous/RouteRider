const bodyParser = require('body-parser');
const express = require('express');
const parcelsRoutes = require('./routes/parcelsRoutes');
const authRoutes = require('./routes/auth.routes');
const db = require('./data/db');
const cors = require('cors');
const session = require("express-session");
const config = require("./config/auth.config");

const app = express();
const port = 4000;

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: config.secret, // Use your secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Adjust this based on your deployment environment
}));

app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
    );
    next();
});

app.use('/api/parcels/', parcelsRoutes);
app.use('/api/', authRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
