const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema(
  {
    image: String,
    name: String,
    description: String,
    issuesNumber: String,
<<<<<<< HEAD
    resourceTypes: ["issues", "volume"],
=======
    resourceTypes: ["character", "issues", "volume"],
>>>>>>> e1c36bff4f02069657191feba24e59fb60513e91
    volumen: String,
    publisherName: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Comic = mongoose.model("Comic", comicSchema);
module.exports = Comic;
