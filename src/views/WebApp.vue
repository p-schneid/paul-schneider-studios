
<script setup>

import Content from "../components/Content.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import projects from "../data/projects.json";
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';

const initialSplideOptions = {
  type: "loop",
  autoWidth: true,
  focus: "center",
  pagination: false,
  autoplay: true,
  interval: 4000,
  pauseOnFocus: false,
  pauseOnHover: false,
};

  const router = useRouter();
  const route = useRoute();

  const id = ref(route.params.id);
  
  const project = computed(() => {
    let project = projects.find((p) => {
      return id.value === p.id;
    });
    return project;
  })

  const assets = computed(() => {
    const p = project.value;
    if (p) {
      const assets = [p.logo, ...p.images];
      return assets;
    }
    return [];
  })

  const paragraphs = computed(() => {
    const p = project.value;
    if (p) {
      const paragraphs = p.summary.split('{/n}')
      console.log('paragraphs: ', paragraphs);
      return paragraphs;
    }
    return [];
  })

  const splideOptions = computed(() => {
    let options = {...initialSplideOptions};
      if (assets.value.length < 2) {
        options.type = "slide";
      }
      return options;
  })
  
  function getImgURL(pic) {
    return new URL(`../assets/${pic}`, import.meta.url).href
  }

  function close() {
    router.push("/web");
  }
    
  function onPanelClick(event) {
    event.stopPropagation();
  }


</script>


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
            <h1>{{ project?.name }}</h1>
          </div>
          <div class="row">
            <Content>
              <p v-for="paragraph in paragraphs">
                {{ paragraph }}
              </p>
            </Content>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

