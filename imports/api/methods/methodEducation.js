import { Meteor } from 'meteor/meteor';
import Education from '../collections/Education.js';

Meteor.methods({
  'createEducation'({asalsekolah, alamat, kota, awalmasuk, akhirmasuk}) {
    return Education.insert({
        asalsekolah,
        alamat,
        kota,
        awalmasuk,
        akhirmasuk,
      createdAt: new Date(),
    });
  },

  'deleteEducation'(id) {
    return Education.remove(id);
  },

  'editEducation'(id, asalsekolah, alamat, kota, awalmasuk, akhirmasuk) {
    return Education.update(id, {
      $set: {asalsekolah, alamat, kota, awalmasuk, akhirmasuk, createdAt: new Date()}
    })
  },
});
