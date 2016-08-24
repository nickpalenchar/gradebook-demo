'use strict';

import mongoose from 'mongoose';

var LoginSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Login', LoginSchema);
