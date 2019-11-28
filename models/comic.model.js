const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema(
  {
    name: String,
    description: String,
    issuesNumber: String,
    resourceTypes: ["issues", "volume"],
    volume: String,
    publisherName: String,
    imgName: String,
    imgPath: String,
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
