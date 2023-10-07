<script setup>
</script>

<template>
  <div class="text">
    <i class="fas fa-angle-down medium-caret"></i>
    <p>
      <slot>...</slot>
    </p>
  </div>
</template>

<style scoped>
.text p {
  margin: 10px auto 0;
}

.text i {
  display: block;
  margin: 0px auto;
  width: 2.8rem;
  font-size: 3.25rem;
}
</style>