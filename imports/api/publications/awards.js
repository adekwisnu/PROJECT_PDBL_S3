import { Meteor } from 'meteor/meteor';
import Awards from '../collections/Awards.js';

Meteor.publish('awards', function () {
  return Awards.find();
});