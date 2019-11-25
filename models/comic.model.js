const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema({
    image: String,
    name: String,
    description: String,
    issuesNumber: String,
    resourceTypes: String,
    volumen: String,
    publisherName: String

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Comic = mongoose.model("Comic", comicSchema);
module.exports = Comic;