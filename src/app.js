const express = require('express');
const parcelsRoutes = require('./routes/parcelsRoutes');
const db = require('./data/db');
const cors = require('cors');

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

app.use('/api/parcels/', parcelsRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
