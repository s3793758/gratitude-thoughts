const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopolgy: true,
});

module.exports = mongoose.connection;
