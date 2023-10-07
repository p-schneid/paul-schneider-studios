<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

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
            <img alt="Paul Schneider" src="./assets/logo-nav.png">
          </span>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <!-- <li><RouterLink to="/web">Web</RouterLink></li> -->
            <li><RouterLink to="/design">Graphic Design</RouterLink></li>
            <li><RouterLink to="/design">Graphic Design</RouterLink></li>
            <!-- <li><RouterLink to="/vr">VR + AR</RouterLink></li> -->
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>


  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style scoped>

.navbar {
    margin: 0 0 0 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
}

.small-caret {
  font-size: 2rem;
  color: #ffff09;
}

.medium-caret {
  font-size: 3.25rem;
  color: #ffff09;
}

.large-caret {
  font-size: 6.25rem;
  color: #ffff09;
}

nav a:hover {
  background-color: transparent;
}

nav a {
  color: var(--color-text);
  display: inline-block;
  padding: 0.5rem 0 0.5rem 1rem;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  nav a {
    padding: 0.85rem 1rem 0 0;
  }
}
</style>
