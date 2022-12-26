const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'test test comment here!',
    user_id: 1,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;