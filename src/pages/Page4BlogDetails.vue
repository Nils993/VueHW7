<template>
  <div>
    <HeaderPage />
    <section class="details-banner"></section>
    <section class="details-contant center">
      <article class="article center">
        <component :is="changeTabs"></component>
        <ChangeKitchen v-if="currentTab === 'kitchen'" />
        <ChangeArchitecture v-if="currentTab === 'bedroom'" />
        <ChangeBedroom v-if="currentTab === 'building'" />
        <ChangeBuilding v-if="currentTab === 'architecture'" />
        <ChangeKitchenPlanning v-if="currentTab === 'kitchen planning'" />
        <ChangeLiving v-if="currentTab === 'living'" />
        <div class="quotes">
          <p>
            <svg
              width="74"
              height="56"
              viewBox="0 0 74 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                fill="#CDA274"
              />
            </svg>
          </p>
          <p>The details are not the details. They make the design.</p>
        </div>
        <div class="article-content">
          <h3 class="article-content__heading">Design sprints are great</h3>
          <div class="article-content__text">
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.
            </p>
            <ol class="article-list">
              <li class="article-list__item">
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </li>
              <li class="article-list__item">
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </li>
              <li class="article-list__item">
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </li>
            </ol>
          </div>
        </div>
        <div class="article-subContent">
          <img
            height="370"
            width="800"
            class="article-subContent__banner"
            src="../assets/img/detailsImg.png"
            alt=""
          />
          <p class="article-subContent__text article-subContent__text_last">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered.
          </p>
        </div>
      </article>
      <div class="details-tags">
        <h4 class="details-tags__title">Tags</h4>
        <div class="details-tags-wrap">
          <p
            @click="currentTab = nameButton"
            v-for="nameButton in nameButtons"
            :key="nameButton"
            class="details__tag"
          >
            {{ nameButton }}
          </p>
        </div>
      </div>
    </section>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import ChangeKitchen from "../components/ChangeKitchen.vue";
import ChangeArchitecture from "../components/ChangeArchitecture.vue";
import ChangeBedroom from "../components/ChangeBedroom.vue";
import ChangeBuilding from "../components/ChangeBuilding.vue";
import ChangeKitchenPlanning from "../components/ChangeKitchenPlanning.vue";
import ChangeLiving from "../components/ChangeLiving.vue";

export default {
  name: "Hw7Page3Project",
  components: {
    HeaderPage,
    FooterPage,
    ChangeKitchen,
    ChangeArchitecture,
    ChangeBedroom,
    ChangeBuilding,
    ChangeKitchenPlanning,
    ChangeLiving,
  },

  data() {
    return {
      nameButtons: [
        "kitchen",
        "bedroom",
        "building",
        "architecture",
        "kitchen planning",
        "living",
      ],
      currentTab: "kitchen",
    };
  },

  mounted() {},

  methods: {},
};
</script>
