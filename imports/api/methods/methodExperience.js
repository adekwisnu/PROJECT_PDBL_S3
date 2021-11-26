import { Meteor } from 'meteor/meteor';
import Experience from '../collections/Experience.js';

Meteor.methods({
  'createExperience'({judul, perusahaan, deskripsi, mulaiBekerja, akhirBekerja}) {
    return Experience.insert({
        judul,
        perusahaan,
        deskripsi,
        mulaiBekerja,
        akhirBekerja,
      createdAt: new Date(),
    });
  },

  'deleteExperience'(id) {
    return Experience.remove(id);
  },

  'editExperience'(id, judul, perusahaan, deskripsi, mulaiBekerja, akhirBekerja) {
    return Experience.update(id, {
      $set: {judul, perusahaan, deskripsi, mulaiBekerja, akhirBekerja, createdAt: new Date()}
    })
  },
});
