<template>
  <div class="logo">
    <a href="index.html">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
          fill="#CDA274"
        />
      </svg>
    </a>
    <span class="logo-text">Interno</span>
  </div>
</template>

<script>
export default {
  name: "LogoComponent",

  data() {},

  mounted() {},

  methods: {},
};
</script>
<slyle lang="css" scoped>
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
</slyle>
