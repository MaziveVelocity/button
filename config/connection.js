const mongoose = require('mongoose');

// sets up connection to mongoose db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/button', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;