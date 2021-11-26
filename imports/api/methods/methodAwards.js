import { Meteor } from 'meteor/meteor';
import Awards from '../collections/Awards.js';

Meteor.methods({
  'createAwards'({title}) {
    return Awards.insert({
        title,
      createdAt: new Date(),
    });
  },

  'deleteAwards'(id) {
    return Awards.remove(id);
  },

  'editAwards'(id, title) {
    return Awards.update(id, {
      $set: {title, createdAt: new Date()}
    })
  },
});
