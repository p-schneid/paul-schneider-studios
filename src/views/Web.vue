
<template>
  <div class="web">
    <Navigation />
    <div class="container-fluid intro">
      <div class="container">
        <div class="row title">
          <h1>Web Application Development</h1>
          <i class="fas fa-chevron-left large-caret"></i>
        </div>
        <div class="row summary">
          <div class="col-md-8 col-md-offset-2">
            <Content>{{"I love to code! Though I specialize in Web and Windows development, my interests encompass mobile, VR, AR, simulation, gaming, IoT, UI, UX, and graphic design. I have 7+ years of professional software development experience. I am proficient in several .NET and JavaScript application frameworks, object oriented programming, agile development, version control, application analysis, testing, technical writing, and relational database systems. I also have 2+ years of graphic and UI design experience."}}</Content>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid project-gallery">
      <div class="container">
        <splide :options="splideOptions" :slides="projects">
          <template v-slot:controls>
            <div class="splide__arrows">
              <div class="splide__arrow splide__arrow--prev">
                <i class="fas fa-caret-left medium-caret"></i>
              </div>
              <div class="splide__arrow splide__arrow--next">
                <i class="fas fa-caret-right medium-caret"></i>
              </div>
            </div>
          </template>
          <splide-slide v-for="project in projects" :key="project.name">
            <img
              :src="getImgURL(project.logo)"
              v-bind:alt="project.logo"
              @click="showProject(project.id)"
            />
          </splide-slide>
        </splide>
      </div>
    </div>

    <div class="container-fluid credits">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-lg-offset-2">
            <i class="fas fa-chevron-right large-caret"></i>
            <i class="fas fa-chevron-right large-caret"></i>
            <i class="fas fa-chevron-right large-caret"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Navigation from "../components/Navigation.vue";
import Content from "../components/Content.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import projects from "../data/projects.json";

let splideOptions = {
  type: "loop",
  gap: "100px",
  autoWidth: true,
  focus: "center",
  pagination: false,
  autoplay: true,
  interval: 4000,
  pauseOnFocus: false,
  pauseOnHover: false,
};

export default Vue.extend({
  name: "Web",
  components: { Splide, SplideSlide, Navigation, Content },
  data() {
    return {
      splideOptions,
      projects,
    };
  },
  methods: {
    getImgURL: function (pic) {
      return require("../assets/" + pic);
    },
    showProject: function (projectID) {
      this.$router.push("/web-app/" + projectID);
    },
  },
});
</script>

<style scoped>


.row {
  margin-top: 150px;
  margin-bottom: 150px;
}

.splide__arrow {
  background: none;
}

.web {
  font-family: "Quicksand", sans-serif;
  color: #120f0f;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}

.title h1 {
  max-width: 300px;
}

/* .summary {

} */

.project-gallery {
  background-color: #120f0f;
  height: 320px;
  padding: 100px 0;
}

.project-gallery img {
  height: 120px;
  cursor: pointer;
  filter: grayscale(100%);
}


</style>