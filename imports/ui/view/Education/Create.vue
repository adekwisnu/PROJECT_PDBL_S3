<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Create Education</div>
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="form-group mb-3">
                <label for="asalsekolah">Asal Sekolah</label>
                <input
                  type="text"
                  name="asalsekolah"
                  id="asalsekolah"
                  class="form-control"
                  placeholder="Asalsekolah Education"
                  v-model="form.asalsekolah"
                />
              </div>
              <div class="form-group mb-3">
                <label for="alamat">Alamat</label>
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  class="form-control"
                  placeholder="alamat"
                  v-model="form.alamat"
                />
              </div>
              <div class="form-group mb-3">
                <label for="kota">kota</label>
                <input
                  type="text"
                  name="kota"
                  id="kota"
                  class="form-control"
                  placeholder="kota"
                  v-model="form.kota"
                />
              </div>
              <div class="form-group mb-3">
                <label for="awalmasuk">Tanggal Awal Masuk</label>
                <input
                  type="month"
                  name="awalmasuk"
                  id="awalmasuk"
                  class="form-control"
                  placeholder="awalmasuk"
                  v-model="form.awalmasuk"
                />
              </div>
              <div class="form-group mb-3">
                <label for="akhirmasuk">Tanggal Akhir Masuk</label>
                <input
                  type="month"
                  name="akhirmasuk"
                  id="akhirmasuk"
                  class="form-control"
                  placeholder="akhirmasuk"
                  v-model="form.akhirmasuk"
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
        asalsekolah: '',
        alamat: '',
        kota: '',
        awalmasuk: '',
        akhirmasuk: '',
      }
    }
  },
  methods: {
    handleSubmit() {
      Meteor.call('createEducation', this.form, (error) => {
        if(error) console.log(error)
        else this.$router.push('/');
      });
    }
  }
};
</script>

<style>
</style>