<template>
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container-fluid">
        
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <span class="navbar-brand">
            <img alt="Paul Schneider" src="../assets/logo-nav.png">
          </span>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/web">Web</router-link></li>
            <li><router-link to="/design">Graphic Design</router-link></li>
            <li><router-link to="/vr">VR + AR</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Navigation"
});
</script>

<style scoped>
.navbar {
    margin: 0 0 0 0;
}
</style>