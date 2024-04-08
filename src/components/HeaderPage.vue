<template>
  <header class="header center">
    <logoComponent />
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list__item">
          <router-link class="nav-list__item" to="/home"> Home </router-link>
        </li>
        <li class="nav-list__item">
          <router-link class="header__link" to="/project">
            Project
          </router-link>
        </li>
        <li class="nav-list__item">
          <router-link class="header__link" to="/blog"> Blog </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import logoComponent from "./logoComponent.vue";
export default {
  name: "HeaderPage",
  components: {
    logoComponent,
  },

  data() {},

  mounted() {},

  methods: {},
};
</script>
<slyle lang="css" scoped>
.header {
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  gap: 10px;
  align-items: center;
}
.logo-text {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 40px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0%;
  text-align: left;
}

.nav-list {
  display: flex;
  gap: 20px;
  list-style-type: none;
}
.nav-list__item a {
  color: rgb(41, 47, 54);
  font-family: Jost;
  font-size: 20px;
  font-weight: 400;
}
</slyle>
