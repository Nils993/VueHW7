<template>
  <div>
    <div class="blog-page">
      <button class="projects-item__but blog-page__but">01</button>
      <button class="projects-item__but blog-page__but">02</button>
      <button class="projects-item__but blog-page__but">03</button>

      <button class="projects-item__but blog-page__but">
        <svg
          width="10"
          height="20"
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 19L9 10L1 1"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationPage",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
