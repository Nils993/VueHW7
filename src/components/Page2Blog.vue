<template>
  <div id="app">
    <HeaderPage />
    <section class="intro">
      <div class="intro-info">
        <h2 class="intro__title">Articles & News</h2>
        <p class="intro__text">Home / Blog</p>
      </div>
    </section>
    <section class="latestPost center">
      <h2 class="latestPost__heading">Latest Post</h2>
      <div class="latestPost-wrap">
        <div class="latestPost__img"></div>
        <div class="latestPost-info">
          <h3 class="latestPost__title">
            Low Cost Latest Invented Interior Designing Ideas
          </h3>
          <div class="latestPost__text">
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.
            </p>
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
          </div>

          <div class="latestPost-wrap__btn">
            <p class="latestPost__data">26 December,2022</p>
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
    </section>
    <section class="blog center">
      <h3 class="blog-heading__title">Articles & News</h3>
      <div class="blog-cards_page2">
        <div
          v-for="article in articles"
          :key="article.id"
          class="blog-card blog-card_page2"
        >
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
      <PaginationPage/>
    
    </section>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import FooterPage from "./FooterPage.vue";
import PaginationPage from './PaginationPage.vue'; 



export default {
  name: "Page2Blog",
  components: {
    HeaderPage,
    FooterPage,
    PaginationPage
  },
  data() {
    return {
      articles: [
        {
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          image: "../assets/img/cart1.png",
        },
        {
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          image: "../assets/img/cart2.png",
        },
        {
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          image: "../assets/img/cart3.png",
        },
        {
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          image: "../assets/img/cart1.png",
        },
        {
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          image: "../assets/img/cart2.png",
        },
        {
          tag: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          image: "../assets/img/cart3.png",
        },
      ],
    };
  },
};
</script>

<style>
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
</style>
