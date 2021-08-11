
<template>
  <div class="web">
    <Navigation />
    <div class="container-fluid intro">
      <div class="container">
        <div class="row title">
          <h1>Web Application Development</h1>
          <i class="fas fa-angle-left large-caret"></i>
        </div>
        <div class="row summary">
          <div class="col-md-8 col-md-offset-2">
            <Content
              >{{
                `I make responsive web pages using modern technologies. I have 
                been writing websites for over 10 years. In that time, I’ve 
                been involved in dozens of projects, big and small. I’ve worked 
                on complex enterprise platforms with large, agile teams. 
                I’ve also built my own sites from scratch, 
                owning the entire application lifecycle. I can coordinate 
                effectively with all project stakeholders: product managers, 
                designers, business analysts, architects, QAs, and clients. I am 
                adept at translating requirements into quality features and products. 
                I excel at building and managing client relationships. 
                And I love solving problems! Explore some of my projects below.`
              }}
            </Content>
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
            <i class="fas fa-angle-right large-caret"></i>
            <i class="fas fa-angle-right large-caret"></i>
            <i class="fas fa-angle-right large-caret"></i>
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