<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Create Education</div>
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="form-group mb-3">
                <label for="title">Awards</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="form-control"
                  placeholder="Title Awards"
                  v-model="form.title"
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
        awards: '',
      }
    }
  },
  methods: {
    handleSubmit() {
      Meteor.call('createAwards', this.form, (error) => {
        if(error) console.log(error)
        else this.$router.push('/');
      });
    }
  }
};
</script>

<style>
</style>