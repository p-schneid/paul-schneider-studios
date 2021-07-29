
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
            <img src="../assets/logo-rcn.png" />
          </splide-slide>
          <splide-slide>
            <img src="../assets/logo-rcn.png" />
          </splide-slide>
          <splide-slide>
            <img src="../assets/logo-rcn.png" />
          </splide-slide>
        </splide>
      </div>
    </div>

    <!-- <div class="container-fluid project-gallery">
        <div class="container">
            <div id='ProjectGallery' class="splide">
              <div class="splide__arrows">
                <div class="splide__arrow splide__arrow--prev">
                  <i class="fas fa-caret-left medium-caret"></i>
                </div>
                <div class="splide__arrow splide__arrow--next">
                  <i class="fas fa-caret-right medium-caret"></i>
                </div>
              </div>
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide"><img src="/public/img/logo-resimp.png" class="img-responsive" /></li>
                  <li class="splide__slide"><img src="/public/img/logo-rcn.png" class="img-responsive"/></li>
                  <li class="splide__slide"><img src="/public/img/logo-mjp.png" class="img-responsive"/></li>
                  <li class="splide__slide"><img src="/public/img/logo-myfoodstand.png" class="img-responsive"/></li>
                  <li class="splide__slide"><img src="/public/img/logo-mti.png" class="img-responsive"/></li>
                </ul>
              </div>
            </div>
        </div>
      </div> -->

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
  },
  mounted() {
    this.$modal.show("example");
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

@media (min-width: 768px) {
  .modal-dialog {
    width: 85%;
  }
}

.modal-body {
  padding: 0;
}

.modal-content {
  border: 5px solid #ffff09;
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

.project-modal {
  position: relative;
}

.project-modal .close-btn {
  position: absolute;
  right: 8px;
  top: 5px;
  cursor: pointer;
  z-index: 100;
}

@media (min-width: 768px) {
  .project-modal .close-btn {
    display: none;
  }
}

.project-modal .close-btn i {
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