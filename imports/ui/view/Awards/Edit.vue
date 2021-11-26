<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Edit Awards</div>
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
import Awards from '../../../api/collections/Awards';

export default {
  props: ['id'],
  data() {
    return {
      form: {
        id: this.id,
        title: '',
      }
    }
  },
  meteor: {
    $subscribe: {
      awards: []
    },
    awards() {
      return Awards.find(this.id).fetch();
    }
  },
  methods: {
    handleSubmit() {
      Meteor.call('editAwards', this.form.id, this.form.title, (error) => {
        if(error) console.log(error)
        else this.$router.push('/');
      });
    },
    async getData() {
      this.form.title = await this.awards[0].title;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>