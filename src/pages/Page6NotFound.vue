<template>
  <section class="page6">
    <h1>404</h1>
    <h2>We are sorry, but the page you requested was not found</h2>
    <router-link class="header__link" to="/home"> Home </router-link>
  </section>
</template>

<script>
export default {
  name: "Page6NotFound",
  components: {},
};
</script>

<style>
.page6 {
  margin: 0 auto 60px;
  max-width: 1200px;
}
</style>
