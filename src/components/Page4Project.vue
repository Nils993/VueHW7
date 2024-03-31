<template>
  <div>
    <HeaderPage />
    <section class="intro">
      <div class="intro-info">
        <h2 class="intro__title">Our Project</h2>
        <p class="intro__text">Home / Projec</p>
      </div>
    </section>
    <section class="categoreis center">
      <div class="categoreis-buttons">
        <button
          class="categoreis__but"
          v-for="button in buttons"
          :key="button"
          @click="filterCards(button)"
        >
          {{ button }}
        </button>
      </div>
      <div class="categoreis-carts">
        <div
          v-for="card in filteredCards"
          :key="card.id"
          class="categoreis-cart"
        >
          <img class="img" :src="card.image" alt="" />

          <div class="categoreis-cart__info">
            <div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.text }}</p>
            </div>
            <button class="projects-item__but projects-item__but_blog">
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
      </div>

      <PaginationPage />
    </section>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import FooterPage from "./FooterPage.vue";
import PaginationPage from "./PaginationPage.vue";

export default {
  name: "Hw7Page4Project",
  components: {
    HeaderPage,
    FooterPage,
    PaginationPage,
  },

  data() {
    return {
      cards: [
        {
          image: require("../assets/img/Bedroom1.png"),
          title: "Modern Bathroom",
          text: "Decor / Artchitecture",
          category: "Bathroom",
        },
        {
          image: require("../assets/img/Bedroom3.png"),
          title: "Modern Bathroom",
          text: "Decor / Artchitecture",
          category: "Bathroom",
        },
        {
          image: require("../assets/img/Bedroom4.png"),
          title: "Modern BedRoom",
          text: "Decor / Artchitecture",
          category: "Bed Room",
        },
        {
          image: require("../assets/img/Bedroom5.png"),
          title: "Modern Bed Room",
          text: "Decor / Artchitecture",
          category: "Bed Room",
        },
        {
          image: require("../assets/img/Bedroom6.png"),
          title: "Modern Kitchan",
          text: "Decor / Artchitecture",
          category: "Kitchan",
        },
        {
          image: require("../assets/img/Bedroom7.png"),
          title: "Modern Kitchan",
          text: "Decor / Artchitecture",
          category: "Kitchan",
        },
        {
          image: require("../assets/img/Bedroom8.png"),
          title: "Modern Living Area",
          text: "Decor / Artchitecture",
          category: "Living Area",
        },
        {
          image: require("../assets/img/Bedroom3.png"),
          title: "Modern Living Area",
          text: "Decor / Artchitecture",
          category: "Living Area",
        },
      ],
      buttons: ["Bathroom", "Bed Room", "Kitchan", "Living Area"],
      filteredCards: [],
      selectedCategory: "All",
    };
  },
  computed: {},
  mounted() {},
  created() {
    this.filteredCards = this.cards;
  },

  methods: {
    filterCards(category) {
      this.filteredCards = this.cards.filter(
        (card) => card.category === category
      );
    },
  },
};
</script>
<style scoped>
.intro {
  display: flex;
  background-image: url(../assets/img/Photo111.png);
  background-repeat: no-repeat;
  background-position: center;
  height: 356px;
  align-items: flex-end;
  justify-content: center;
}
.intro-info {
  background-color: #fff;
  padding: 41px 78px;
  border-radius: 37px 37px 0px 0px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.intro__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
}
.intro__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.categoreis-buttons {
  display: flex;
  justify-content: center;

  align-items: center;
  margin-top: 100px;
}
.categoreis__but:last-child {
  border-right: rgb(205, 162, 116) 1px solid;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
.categoreis__but:first-child {
  border-left: rgb(205, 162, 116) 1px solid;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}
.categoreis__but {
  border: rgb(205, 162, 116) 1px solid;
  border-right: none;
  border-left: #fff;

  padding: 26px 66px;
  color: rgb(41, 47, 54);
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  background: #fff;
}

.categoreis__but:hover {
  border-radius: 18px;
  background: rgb(205, 162, 116);
  color: rgb(255, 255, 255);
}
.categoreis-cart__info {
  display: flex;
  justify-content: space-between;
}
.categoreis-carts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.categoreis-cart {
  max-width: 585px;
}
.img {
  max-width: 585px;
}
</style>
