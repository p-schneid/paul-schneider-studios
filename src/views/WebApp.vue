<template>
  <div class="web-app" @click="close">
    <div class="content-panel container" @click="onPanelClick">
      <div class="close-btn">
        <i class="fas fa-times" @click="close"></i>
      </div>
      <div class="asset-gallery">
          <splide :options="splideOptions">
            <template v-slot:controls>
              <div class="splide__arrows" :style="assets.length < 2 && {display: 'none'}" >
                <div class="splide__arrow splide__arrow--prev">
                  <i class="fas fa-caret-left medium-caret"></i>
                </div>
                <div class="splide__arrow splide__arrow--next">
                  <i class="fas fa-caret-right medium-caret"></i>
                </div>
              </div>
            </template>
            <splide-slide v-for="asset in assets" :key="asset">
              <div class="app-asset">
                <img
                  class="img-responsive"
                  :src="getImgURL(asset)"
                  :alt="asset"
                />
              </div>
            </splide-slide>
          </splide>
      </div>
      <div class="project-details">
        <div class="container-fluid">
          <div class="row">
            <h1>{{ project.name }}</h1>
          </div>
          <div class="row">
            <Content>{{ project.summary }}</Content>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Content from "../components/Content.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import projects from "../data/projects.json";

let splideOptions = {
  type: "loop",
  autoWidth: true,
  focus: "center",
  pagination: false,
  autoplay: true,
  interval: 4000,
  pauseOnFocus: false,
  pauseOnHover: false,
};

export default Vue.extend({
  name: "WebApp",
  props: {
    id: { type: String },
  },
  components: { Splide, SplideSlide, Content },
  computed: {
    project: function () {
      let id = this.id;
      let project = projects.find((p) => {
        return id == p.id;
      });
      return project;
    },
    assets: function () {
      let assets = [this.project.logo, ...this.project.images];
      return assets;
    },
    splideOptions: function () {
      let options = {...splideOptions};
      if (this.assets.length < 2) {
        options.type = "slide";
      }
      return options;
    },
    
  },
  methods: {
    getImgURL: function (pic) {
      return require("../assets/" + pic);
    },
    close: function () {
      this.$router.push("/web");
    },
    onPanelClick: function (event) {
      event.stopPropagation();
    },
  },
});
</script>

<style scoped>

.row {
  margin-top: 30px;
  margin-bottom: 30px;
}

.splide__arrow {
  background: none;
}

.web-app {
  background: #8d8c8c;
  padding: 50px 0;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  color: #120f0f;
}

.content-panel {
  position: relative;
  background: white;
  border: 5px solid #ffff09;
  padding: 0;
  cursor: auto;
}

.content-panel .close-btn {
  position: absolute;
  right: 15px;
  top: 12px;
  cursor: pointer;
  z-index: 100;
}

.content-panel .close-btn i {
  color: #ffff09;
  font-size: 24px;
}

.asset-gallery {
  background-color: #120f0f;
}

/* smartphones, touchscreens */
@media (hover: none) and (pointer: coarse) {
  .splide__arrow {
    display: none;
  }
}

.asset-gallery li {
  padding: 50px 25px;
  display: flex;
}

.asset-gallery .app-asset {
  max-width: 80vw;
  width: 700px;
  display: flex;
  justify-content: center;
  margin: auto;
}

.project-details {
  padding: 30px;
}

.project-details h1 {
  text-align: center;
}
</style>

