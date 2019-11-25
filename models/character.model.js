const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  image: String,
  name: String,
  deck: String,
  publisherName: String,
  realName: String,
  firstAppearedInIssue: { name, issue_number },
  comic: { type: Schema.Types.ObjectId, ref: "Comic" }

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;


