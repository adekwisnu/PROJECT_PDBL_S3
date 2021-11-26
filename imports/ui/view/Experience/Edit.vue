<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Edit Experience</div>
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="form-group mb-3">
                <label for="judul">Judul</label>
                <input
                  type="text"
                  name="judul"
                  id="judul"
                  class="form-control"
                  placeholder="Judul Experience"
                  v-model="form.judul"
                />
              </div>
              <div class="form-group mb-3">
                <label for="perusahaan">Perusahaan</label>
                <input
                  type="text"
                  name="perusahaan"
                  id="perusahaan"
                  class="form-control"
                  placeholder="perusahaan"
                  v-model="form.perusahaan"
                />
              </div>
              <div class="form-group mb-3">
                <label for="Deskripsi">Deskripsi</label>
                <input
                  type="text"
                  name="Deskripsi"
                  id="Deskripsi"
                  class="form-control"
                  placeholder="Deskripsi"
                  v-model="form.deskripsi"
                />
              </div>
              <div class="form-group mb-3">
                <label for="mulaiBekerja">Tanggal Mulai Bekerja</label>
                <input
                  type="month"
                  name="mulaiBekerja"
                  id="mulaiBekerja"
                  class="form-control"
                  placeholder="mulaiBekerja"
                  v-model="form.mulaiBekerja"
                />
              </div>
              <div class="form-group mb-3">
                <label for="akhirBekerja">Tanggal Akhir Bekerja</label>
                <input
                  type="month"
                  name="akhirBekerja"
                  id="akhirBekerja"
                  class="form-control"
                  placeholder="akhirBekerja"
                  v-model="form.akhirBekerja"
                />
              </div>
              <button type="submit" class="btn btn-primary">Simpan Data</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Experience from '../../../api/collections/Experience';

export default {
  props: ['id'],
  data() {
    return {
      form: {
        id: this.id,
        judul: '',
        perusahaan: '',
        deskripsi: '',
        mulaiBekerja: '',
        akhirBekerja: '',
      }
    }
  },
  meteor: {
    $subscribe: {
      experience: []
    },
    experience() {
      return Experience.find(this.id).fetch();
    }
  },
  methods: {
    handleSubmit() {
      Meteor.call('editExperience', this.form.id, this.form.judul, this.form.perusahaan, this.form.deskripsi, this.form.mulaiBekerja, this.form.akhirBekerja, (error) => {
        if(error) console.log(error)
        else this.$router.push('/');
      });
    },
    async getData() {
      this.form.judul = await this.experience[0].judul;
      this.form.perusahaan = await this.experience[0].perusahaan;
      this.form.deskripsi = await this.experience[0].deskripsi;
      this.form.mulaiBekerja = await this.experience[0].mulaiBekerja;
      this.form.akhirBekerja = await this.experience[0].akhirBekerja;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>