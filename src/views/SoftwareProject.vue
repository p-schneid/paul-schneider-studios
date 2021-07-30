<template>
  <div class="software-project" @click="close">
    <div class="content-panel container" @click="onPanelClick">
      <div class="close-btn">
        <i class="fas fa-times" @click="close"></i>
      </div>
      <div class="asset-gallery">
        <div v-if="project.images">
          <splide :options="splideOptions" :slides="project.images">
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
            <splide-slide v-for="image in project.images" :key="image">
              <img
                class="screen-shot"
                :src="getImgURL(image)"
                v-bind:alt="image"
              />
            </splide-slide>
          </splide>
        </div>
        <div v-else>
          <img
            class="logo"
            :src="getImgURL(project.logo)"
            v-bind:alt="project.logo"
          />
        </div>
      </div>
      <div class="project-details">
        <div class="container-fluid">
          <div class="row">
            <h1>{{ project.name }}</h1>
          </div>
          <div class="row">
            <div class="text">
              <i class="fas fa-chevron-right small-caret"></i>
              <p>
                Aenean nec tincidunt lacus. Aenean facilisis condimentum tellus
                a maximus. Morbi leo eros, aliquam at tincidunt vitae, dictum
                quis lacus. Morbi cursus et metus eget gravida. Sed sit amet
                efficitur turpis. Phasellus suscipit elit sed orci tempus, a
                interdum sem blandit. Quisque porta quam vitae pulvinar
                hendrerit. Vivamus aliquet, diam in convallis iaculis, sem
                lectus fringilla lacus, molestie maximus dui libero ut mi.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
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
  name: "SoftwareProject",
  props: {
    id: { type: String },
  },
  components: { Splide, SplideSlide },
  data() {
    return {
      splideOptions,
    };
  },
  computed: {
    project: function () {
      let id = this.id;
      let project = projects.find((p) => {
        return id == p.id;
      });
      return project;
    },
  },
  methods: {
    getImgURL: function (pic) {
      return require("../assets/" + pic);
    },
    close: function () {
      this.$router.push("/software");
    },
    onPanelClick: function (event) {
      event.stopPropagation();
    },
  },
});
</script>

<style scoped>
body {
  font-family: "Quicksand", sans-serif;
  color: #120f0f;
}

.row {
  margin-top: 30px;
  margin-bottom: 30px;
}

.small-caret {
  font-size: 28px;
  height: 26px;
  color: #ffff09;
}

.medium-caret {
  font-size: 50px;
  color: #ffff09;
}

.large-caret {
  font-size: 112px;
  color: #ffff09;
}

.splide__arrow {
  background: none;
}

.text {
  display: flex;
  align-items: center;
}

.text p {
  margin: 0 0 0 15px;
}

.software-project {
  background: #8d8c8c;
  padding: 50px 0;
  cursor: pointer;
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
}

.asset-gallery .screen-shot {
  max-width: 80vw;
  width: 700px;
}

.asset-gallery .logo {
  display: block;
  height: 300px;
  padding: 50px 0;
  margin: 0 auto;
}

.project-details {
  padding: 30px;
}

.project-details h1 {
  text-align: center;
}
</style>

