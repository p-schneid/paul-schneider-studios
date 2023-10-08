<script setup>
</script>

<template>
  <div class="text">
    <img src="../assets/caret.png" />
    <p>
      <slot>...</slot>
    </p>
  </div>
</template>

<style scoped>
.text p {
  margin: 10px auto 0;
}

img {
  transform: rotate(-90deg);
  height: 50px;
  display: block;
  margin: 0px auto;
}
</style>