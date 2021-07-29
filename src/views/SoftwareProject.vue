<template>
  <div class="software-project">
    <div class="close-btn">
      <i class="fas fa-times" onclick="closeModal()"></i>
    </div>
    <div class="asset-gallery">
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
          <img :src="getImgURL(image)" v-bind:alt="image" />
        </splide-slide>
      </splide>
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
              Aenean nec tincidunt lacus. Aenean facilisis condimentum tellus a
              maximus. Morbi leo eros, aliquam at tincidunt vitae, dictum quis
              lacus. Morbi cursus et metus eget gravida. Sed sit amet efficitur
              turpis. Phasellus suscipit elit sed orci tempus, a interdum sem
              blandit. Quisque porta quam vitae pulvinar hendrerit. Vivamus
              aliquet, diam in convallis iaculis, sem lectus fringilla lacus,
              molestie maximus dui libero ut mi. Interdum et malesuada fames ac
              ante ipsum primis in faucibus.
            </p>
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

let projects = {
  resimplifi: {
    name: "Resimplifi",
    images: [
      "resimp-search-1.png",
      "resimp-search-2.png",
      "resimp-search-3.png",
    ],
  },
};

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
    name: { type: String },
  },
  components: { Splide, SplideSlide },
  data() {
    return {
      splideOptions,
    };
  },
  computed: {
    project: function () {
      let name = this.name;
      return projects[name];
    },
  },
  methods: {
    getImgURL: function (pic) {
        return require('../assets/'+pic)
    }
  }
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
  position: relative;
}

.software-project .close-btn {
  position: absolute;
  right: 8px;
  top: 5px;
  cursor: pointer;
  z-index: 100;
}

@media (min-width: 768px) {
  .software-project .close-btn {
    display: none;
  }
}

.software-project .close-btn i {
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

/* I'm going to have to target these to screen shot styles */
.asset-gallery img {
  max-width: 80vw;
  width: 700px;
}

.project-details {
  padding: 30px;
}

.project-details h1 {
  text-align: center;
}
</style>

