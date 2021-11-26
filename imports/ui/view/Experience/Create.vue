<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Create Experience</div>
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
export default {
  data() {
    return {
      form: {
        judul: '',
        perusahaan: '',
        deskripsi: '',
        mulaiBekerja: '',
        akhirBekerja: '',
      }
    }
  },
  methods: {
    handleSubmit() {
      Meteor.call('createExperience', this.form, (error) => {
        if(error) console.log(error)
        else this.$router.push('/');
      });
    }
  }
};
</script>

<style>
</style>