import { Meteor } from 'meteor/meteor';
import Education from '../collections/Education.js';

Meteor.publish('education', function () {
  return Education.find();
});