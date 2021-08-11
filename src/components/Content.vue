<template>
  <div class="text">
    <i class="fas fa-angle-down medium-caret"></i>
    <p>
      <slot>...</slot>
    </p>
  </div>
</template>

<script>

import Vue from "vue";

export default Vue.extend({
    name: "Content"
});

</script>

<style scoped>
.text p {
  margin: 10px auto 0;
  white-space: pre-wrap;
}

.text i {
  display: block;
  margin: 0px auto;
  width: 2.8rem;
  font-size: 3.25rem;
}
</style>