'use strict';

import mongoose from 'mongoose';

var StudentSchema = new mongoose.Schema({
  name: String,
  pin: Number,
  class: String,
  grades: [],
  active: Boolean
});

export default mongoose.model('Student', StudentSchema);
