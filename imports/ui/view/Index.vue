<template>
  <div id="page-top">
    <!-- Navigation-->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none"></span>
        <span class="d-none d-lg-block"
          ><img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="img/profile.jpg"
            alt="..."
        /></span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience"
              >Experience</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education"
              >Education</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests"
              >Interests</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Page Content-->
    <div class="container-fluid p-0">
      <!-- About-->
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0 text-dark">
            Adek 
            <span class="text-primary">Wisnu</span>
            <span class="text-dark">Winata</span>
          </h1>
          <div class="subheading mb-5">
            Mahasiswa Politeknik Elektronika Negeri Surabaya
            <br>
            <a>Cp (08777-2488-666)</a>
            <br>
            <a href="mailto:adekwisnu666@gmail.com">adekwisnu666@gmail.com</a>
          </div>
          <div class="social-icons">
            <a class="social-icon" href="https://www.instagram.com/"
              ><i class="fab fa-instagram"></i
            ></a>
            <a class="social-icon" href="https://www.tiktok.com/"><i class="fab fa-tiktok"></i></a>
            <a class="social-icon" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
            <a class="social-icon" href="https://www.facebook.com/"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Experience-->
      <section class="resume-section" id="experience">
        <div class="resume-section-content">
          <div class="d-flex align-items-center mb-5">
            <h2>Experience</h2>
            <router-link
              :to="{ name: 'experience.create' }"
              class="btn btn-secondary text-white ms-3"
              >Tambah Experience</router-link
            >
          </div>
          <div
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
            v-for="item in experience"
            :key="item._id"
          >
            <div class="flex-grow-1">
              <div class="d-flex">
                <h3 class="mb-0 me-3">{{ item.judul }}</h3>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        @click="handleExperienceEdit(item._id)"
                      >
                        Edit Data
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        @click="handleExperienceRemove(item._id)"
                      >
                        Delete Data
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="subheading mb-3">{{ item.perusahaan }}</div>
              <p>{{ item.deskripsi }}</p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary"
                >{{ item.mulaiBekerja | moment }} -
                {{ item.akhirBekerja | moment }}</span
              >
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Education-->
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <div class="d-flex align-items-center mb-5">
            <h2>Education</h2>
            <router-link
              :to="{ name: 'education.create' }"
              class="btn btn-secondary text-white ms-3"
              >Tambah Education</router-link
            >
          </div>
          <div
            v-for="item in education"
            :key="item._id"
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div class="flex-grow-1">
              <div class="d-flex">
                <h3 class="mb-0 me-3">{{ item.asalsekolah }}</h3>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        @click="handleEducationEdit(item._id)"
                      >
                        Edit Data
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        @click="handleEducationRemove(item._id)"
                      >
                        Delete Data
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="subheading mb-3">{{ item.alamat }}</div>
              <div>{{ item.kota }}</div>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary"
                >{{ item.awalmasuk | moment }} -
                {{ item.akhirmasuk | moment }}</span
              >
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Skills-->
      <section class="resume-section" id="skills">
        <div class="resume-section-content">
          <h2 class="mb-5">Skills</h2>
          <div class="subheading mb-3">Programming Languages & Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item"><i class="fab fa-html5"></i></li>
            <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
            <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
            <li class="list-inline-item"><i class="fab fa-angular"></i></li>
            <li class="list-inline-item"><i class="fab fa-react"></i></li>
            <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
            <li class="list-inline-item"><i class="fab fa-sass"></i></li>
            <li class="list-inline-item"><i class="fab fa-less"></i></li>
            <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
            <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
            <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
            <li class="list-inline-item"><i class="fab fa-npm"></i></li>
          </ul>
          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Cross Browser Testing & Debugging
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Cross Functional Teams
            </li>
            <li>
              <span class="fa-li"><i class="fas fa-check"></i></span>
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Interests-->
      <section class="resume-section" id="interests">
        <div class="resume-section-content">
          <h2 class="mb-5">Interests</h2>
          <p>
            Minat pada bidang olahraga demi kesehatan tubuh dan menjadikan diri lebih sehat.
          </p>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Awards-->
      <section class="resume-section" id="awards">
        <div class="resume-section-content">
          
          <div class="d-flex align-items-center mb-5">
            <h2>Awards</h2>
            <router-link
              :to="{ name: 'awards.create' }"
              class="btn btn-secondary text-white ms-3"
              >Tambah Awards</router-link
            >
          </div>
          <ul class="fa-ul mb-0">
            <li class="d-flex" v-for="item in awards" :key="item._id">
              <span class="fa-li"
                ><i class="fas fa-trophy text-warning"></i
              ></span>
              {{item.title}}
              <div class="dropdown ms-3">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        @click="handleAwardsEdit(item._id)"
                      >
                        Edit Data
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        @click="handleAwardsRemove(item._id)"
                      >
                        Delete Data
                      </button>
                    </li>
                  </ul>
                </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Experience from "../../api/collections/Experience";
import Education from "../../api/collections/Education";
import Awards from "../../api/collections/Awards";
import moment from "moment";

export default {
  methods: {
    handleExperienceRemove(id) {
      Meteor.call("deleteExperience", id);
    },
    handleExperienceEdit(id) {
      this.$router.push({ name: "experience.edit", params: { id } });
    },
    handleEducationRemove(id) {
      Meteor.call("deleteEducation", id);
    },
    handleEducationEdit(id) {
      this.$router.push({ name: "education.edit", params: { id } });
    },
    handleAwardsRemove(id) {
      Meteor.call("deleteAwards", id);
    },
    handleAwardsEdit(id) {
      this.$router.push({ name: "awards.edit", params: { id } });
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format("MMMM YYYY");
    },
  },
  meteor: {
    $subscribe: {
      experience: [],
      education: [],
      awards: [],
    },
    experience() {
      return Experience.find({}).fetch();
    },
    education() {
      return Education.find({}).fetch();
    },
    awards() {
      return Awards.find({}).fetch();
    },
  },
};
</script>

<style>
</style>