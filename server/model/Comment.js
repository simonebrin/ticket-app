const { Schema, model } = require("mongoose");


const commentSchema = new Schema(
  {
    comment_text: {
      type: String,
      required: "Show us what you think!",
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
