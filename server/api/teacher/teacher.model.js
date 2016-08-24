'use strict';

import mongoose from 'mongoose';

var TeacherSchema = new mongoose.Schema({
  name: String,
  pin: Number,
  students: {type: mongoose.Schema.Types.ObjectId, ref: "Student"},
  active: Boolean
});

export default mongoose.model('Teacher', TeacherSchema);
