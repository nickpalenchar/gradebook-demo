/**
 * Teacher model events
 */

'use strict';

import {EventEmitter} from 'events';
import Teacher from './teacher.model';
var TeacherEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TeacherEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Teacher.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TeacherEvents.emit(event + ':' + doc._id, doc);
    TeacherEvents.emit(event, doc);
  }
}

export default TeacherEvents;
