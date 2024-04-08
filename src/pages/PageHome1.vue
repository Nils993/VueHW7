<template>
  <div id="app">
    <HeaderPage />
    <main>
      <section class="banner center">
        <div class="banner-info">
          <h1 class="banner-title">Let Your Home Be Unique</h1>
          <p class="banner-text">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <button class="banner-btn">
            Get Started
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
      <section class="projects center">
        <div class="projects-heading">
          <h2 class="projects-heading__title">Follow Our Projects</h2>
          <p class="projects-heading__text">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div class="projects-container">
          <div class="projects-item">
            <div class="projects-item__back projects-item__back_left1"></div>
            <div class="projects-item__info">
              <div>
                <h3 class="projects-item__title">Modern Kitchan</h3>
                <p class="projects-item__text">Decor / Artchitecture</p>
              </div>

              <button class="projects-item__but">
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
          <div class="projects-item">
            <div class="projects-item__back projects-item__back_right1"></div>
            <div class="projects-item__info">
              <div>
                <h3 class="projects-item__title">Modern Kitchan</h3>
                <p class="projects-item__text">Decor / Artchitecture</p>
              </div>

              <button class="projects-item__but">
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
          <div class="projects-item">
            <div class="projects-item__back projects-item__back_left2"></div>
            <div class="projects-item__info">
              <div>
                <h3 class="projects-item__title">Modern Kitchan</h3>
                <p class="projects-item__text">Decor / Artchitecture</p>
              </div>

              <button class="projects-item__but">
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
          <div class="projects-item">
            <div class="projects-item__back projects-item__back_right2"></div>
            <div class="projects-item__info">
              <div>
                <h3 class="projects-item__title">Modern Kitchan</h3>
                <p class="projects-item__text">Decor / Artchitecture</p>
              </div>

              <button class="projects-item__but">
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
      </section>
      <section class="counter center">
        <div class="counter-item">
          <p class="counter-item__num">12</p>
          <p class="counter-item__text">Years Of Experiance</p>
        </div>
        <div class="counter-item">
          <p class="counter-item__num">85</p>
          <p class="counter-item__text">Success Project</p>
        </div>
        <div class="counter-item">
          <p class="counter-item__num">15</p>
          <p class="counter-item__text">Active Project</p>
        </div>
        <div class="counter-item">
          <p class="counter-item__num">95</p>
          <p class="counter-item__text">Happy CUstomers</p>
        </div>
      </section>
      <section class="blog center">
        <div class="blog-heading">
          <h3 class="blog-heading__title">Articles & News</h3>
          <p class="blog-heading__text">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <div class="blog-cards">
          <div v-for="article in articles" :key="article.id" class="blog-card">
            <img
              class="blog-card__back"
              width="380"
              :src="article.image"
              alt=""
            />
            <p class="blog-card__tag">{{ article.tag }}</p>

            <div class="blog-card-info">
              <h3 class="blog-card__title">{{ article.title }}</h3>
              <div class="blog-card-wraper-but">
                <p class="blog-card__date">{{ article.date }}</p>
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
        </div>
      </section>
    </main>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";

import FooterPage from "../components/FooterPage.vue";

export default {
  name: "PageHome",
  components: {
    HeaderPage,
    FooterPage,
  },
  data() {
    return {
      articles: [
        {
          tag: "Kitchan Design",
          title: "t’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          image: require("../assets/img/cart1.png"),
        },
        {
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          image: require("../assets/img/cart2.png"),
        },
        {
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          image: require("../assets/img/cart3.png"),
        },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Jost", sans-serif;
  font-family: "DM Serif Display", serif;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

a {
  text-decoration: none;
}
.banner {
  position: relative;
  background-image: url(../assets/img/banner.png);
  background-size: cover;
  background-position: 0% 42%;
  border-radius: 50px;
  margin-left: calc(50% - 600px);
  margin-right: calc(50% - 600px);
  height: 680px;
}
.banner-info {
  width: 430px;
  position: absolute;
  top: 145px;
  left: 125px;
}
.banner-title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 65px;
  font-weight: 400;
}
.banner-text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  margin-top: 18px;
  margin-bottom: 18px;
}
.banner-btn {
  display: flex;
  gap: 10px;
  align-items: center;
  color: rgb(255, 255, 255);
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  padding: 26px 48px;
  border-radius: 18px;
  background: rgb(41, 47, 54);
}

.projects {
  padding-top: 20px;
  padding-bottom: 30px;
}
.projects-heading {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.projects-heading__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
}
.projects-heading__text {
  width: 720px;
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.projects-container {
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  justify-content: space-between;
}
.projects-item {
  max-width: 525px;
}
.projects-item__back {
  background-position: center;
  width: 525px;
  height: 545px;
}
.projects-item__back_left1 {
  background-image: url(../assets/img/Kitchan.png);
  border-top-right-radius: 15%;
}
.projects-item__back_left2 {
  background-image: url(../assets/img/Kitchan2.png);
  border-bottom-right-radius: 15%;
}
.projects-item__back_right1 {
  background-image: url(../assets/img/Kitchan1.png);
  border-top-left-radius: 15%;
}
.projects-item__back_right2 {
  background-image: url(../assets/img/Kitchan3.png);
  border-bottom-left-radius: 15%;
}
.projects-item__info {
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
}
.projects-item__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
}
.projects-item__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.projects-item__but {
  background: rgb(244, 240, 236);
  border: none;
  width: 70px;
  border-radius: 50%;
}
.projects-item__but_blog {
  width: 52px;
  height: 52px;
}

.counter {
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: rgb(244, 240, 236);
  display: flex;
  justify-content: space-around;
  margin-bottom: 96px;
}
.counter-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.counter-item__num {
  color: rgb(205, 162, 116);
  font-family: DM Serif Display;
  font-size: 85px;
  font-weight: 400;
}
.counter-item__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}

.blog-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.blog-heading__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
}
.blog-heading__text {
  width: 800px;
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.blog-cards {
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  justify-content: space-between;
}
.blog-cards_page2 {
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  justify-content: space-between;
}
.blog-card {
  padding: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 62px;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  width: 380px;
}
.blog-card:hover {
  background: rgb(244, 240, 236);
}
.blog-card:hover .projects-item__but_blog {
  background: rgb(255, 255, 255);
}
.blog-card__tag {
  position: relative;
  top: -65px;
  left: -85px;
  width: 118px;
  height: 29px;
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blog-card_page2 {
  margin-bottom: 30px;
}
.blog-card__back {
  width: 340px;
  height: 290px;
}
.blog-card__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  margin-top: 10px;
}
.blog-card__date {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
}
.blog-card__back {
  border-top-right-radius: 62px;
  border-top-left-radius: 62px;
}
.blog-card-wraper-but {
  padding-top: 40px;
  padding-bottom: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog-page {
  margin-top: 20px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.blog-page__but {
  border-radius: 50%;
  width: 52px;
  height: 52px;
  color: rgb(41, 47, 54);
  font-family: Jost;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  border: 1px solid rgb(205, 162, 116);
  background-color: #fff;
  align-items: center;
  text-align: center;
}
.blog-page__but:hover {
  background: rgb(244, 240, 236);
  border: none;
}

.intro {
  display: flex;
  background-image: url(../assets/img/Photo.png);
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

.latestPost {
  margin-top: 200px;
  margin-bottom: 150px;
}
.latestPost-wrap {
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 22px;
  box-sizing: border-box;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 62px;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}
.latestPost__heading {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 27px;
}
.latestPost__img {
  background-image: url(../assets/img/lastPastImg.png);
  border-radius: 37px;
  width: 765px;
  height: 510px;
}
.latestPost-info {
  width: 463px;
  display: flex;
  flex-direction: column;
}
.latestPost__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
}
.latestPost__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 22px;
  margin-bottom: 25px;
}
.latestPost__data {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
}
.latestPost-wrap__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.details-banner {
  background-image: url(../assets/img/DetailsBaner.png);
  height: 350px;
  background-repeat: no-repeat;
  background-position: center;
}

.article {
  width: 800px;
}
.article-subContent-data {
  display: flex;
  justify-content: space-between;
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 40px;
}
.article-subContent__banner {
  border-radius: 65px;
}
.article-subContent__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
}
.article-subContent__text_last {
  margin-top: 20px;
}
.article-content__heading {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 20px;
}
.article-content__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.article-list {
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

ol {
  list-style: color red;
}

.quotes {
  margin-top: 30px;
  margin-bottom: 30px;
  color: rgb(205, 162, 116);
  font-family: DM Serif Display;
  font-style: italic;
  font-size: 25px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  padding: 53px 227px;
  border-radius: 50px;
  background: rgb(244, 240, 236);
  align-items: center;
  text-align: center;
}

.details-contant {
  display: flex;
  margin-top: 150px;
  gap: 57px;
}

.details-tags__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 24px;
}
.details-tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.details-tags .details__tag {
  padding: 9px 30px;
  font-family: Jost;
  text-transform: capitalize;
  border-radius: 10px;
  background: rgb(244, 240, 236);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(41, 47, 54);
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}
.details-tags .details__tag:hover {
  background: rgb(41, 47, 54);
  color: rgb(255, 255, 255);
}
</style>
