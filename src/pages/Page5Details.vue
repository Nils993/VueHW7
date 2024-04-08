<template>
  <div>
    <HeaderPage />
    <section class="details-banner"></section>
    <div class="details center">
      <div class="details-info-wrap">
        <div class="details-info">
          <h3 class="details-info__title">Minimal Look Bedrooms</h3>
          <p class="details-info__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
            vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa,
            vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent
            at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in
            the ipsum vel lectus bibendum commodo. In nec sem suscipit,
            convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus
            ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a
            pellentesque Cras erat enim, gravida non ante vitae,elequis
            convallis elit, in viverra felis. Donec ultrices tellus vitae
            iaculisvd porta. Proin tincidunt ligula id purus porttitor.
          </p>
        </div>
      </div>
      <div class="slider">
        <div class="slides">
          <div
            class="slide"
            v-for="(slide, index) in slides"
            :key="index"
            v-show="index === currentSlide"
          >
            <img :src="slide.imgSrc" alt="Slide Image" />
          </div>
        </div>
        <div class="pagination">
          <span
            v-for="(slide, index) in slides"
            :key="index"
            @click="changeSlide(index)"
            :class="{ active: index === currentSlide }"
          ></span>
        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import { mapState } from "vuex";
export default {
  name: "Hw7Page5Details",
  components: {
    HeaderPage,
    FooterPage,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    ...mapState(["slides"]), // Подключение состояния из хранилища
  },
  methods: {
    changeSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style lang="css" scoped>
.details-banner {
  background-image: url(../assets/img/DetailsBaner2.png);
  height: 350px;
  background-repeat: no-repeat;
  background-position: center;
}

.details {
  margin-top: 100px;
}
.details-info-wrap {
  display: flex;
  justify-content: center;
}
.details-info {
  text-align: center;
  max-width: 660px;
}
.details-info__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
}
.etails-info__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.slider {
  position: relative;
}

.slides {
  display: flex;
}

.slide {
}

.slide img {
  width: 1200px;
  height: 1000px;
  border-radius: 76px;
}

.pagination {
  display: flex;
  justify-content: center;
}

.pagination span {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}

.pagination span.active {
  background-color: #000;
}
</style>
