import { Meteor } from 'meteor/meteor';
import Education from './collections/Education.js';
import Experience from './collections/Experience.js';
import Awards from './collections/Awards.js';

const insertExperience = (judul, perusahaan, deskripsi, mulaiBekerja, akhirBekerja) => Experience.insert({judul: judul, perusahaan: perusahaan, deskripsi: deskripsi, mulaiBekerja: mulaiBekerja, akhirBekerja: akhirBekerja})
const insertEducation  = (asalsekolah, alamat, kota, awalmasuk, akhirmasuk) => Education.insert({asalsekolah: asalsekolah, alamat: alamat, kota: kota, awalmasuk: awalmasuk, akhirmasuk: akhirmasuk})
const insertAwards  = (title) => Awards.insert({title: title})
Meteor.startup(() => {
  // if the Links collection is empty
  if (Experience.find().count() === 0) {
    insertExperience('Badan Pengurus Harian', 'HIMIT PENS', 'Memajukan HIMIT', 2021, 2022);
  }
  if (Education.find().count() === 0) {
    insertEducation('Kebonsari', 'HIMIT PENS', 'Memajukan HIMIT', 2021, 2022);
  }
  if (Awards.find().count() === 0) {
    insertAwards('JUARA 3 MOBILE LAGENDS PENSCOMP');
  }
});
