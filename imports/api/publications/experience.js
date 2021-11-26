import { Meteor } from 'meteor/meteor';
import Experience from '../collections/Experience.js';

Meteor.publish('experience', function () {
  return Experience.find();
});
