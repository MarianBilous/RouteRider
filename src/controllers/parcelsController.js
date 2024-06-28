const db = require('../data/db')

module.exports = {
    getParcels: async (req, res) => {
        try {
            const parcels = await db.Parcel.findAll({logging: console.log });
            res.json(parcels);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
}
