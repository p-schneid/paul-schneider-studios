
<template>
  <div class="software">
    <div class="container-fluid intro">
      <div class="container">
        <div class="row title">
          <h1>Web Application Development</h1>
          <i class="fas fa-chevron-left large-caret"></i>
        </div>
        <div class="row summary">
          <div class="col-md-10 col-md-offset-1">
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

    <div class="container-fluid project-gallery">
      <div class="container">
        <splide :options="splideOptions">
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
          <splide-slide>
            <img src="../assets/logo-resimp.png" />
          </splide-slide>
          <splide-slide>
            <img src="../assets/logo-rcn.png" />
          </splide-slide>
          <splide-slide>
            <img src="../assets/logo-mjp.png" />
          </splide-slide>
          <splide-slide>
            <img src="../assets/logo-myfoodstand.png" />
          </splide-slide>
          <splide-slide>
            <img src="../assets/logo-mti.png" />
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
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

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
  name: "Software",
  components: { Splide, SplideSlide },
  data() {
    return {
      splideOptions,
    };
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

/* .software {

} */

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

.text {
  display: flex;
  align-items: center;
}

.text p {
  margin: 0 0 0 15px;
}

.project-gallery {
  background-color: #120f0f;
  height: 320px;
  padding: 100px 0;
}

.project-gallery img {
  height: 120px;
}

</style>