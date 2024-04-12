import Vue from "vue";
import Router from "vue-router";
import PageHome1 from "@/pages/PageHome1.vue";
import Page2Blog from "@/pages/Page2Blog.vue";
import Page3Project from "@/pages/Page3Project.vue";
import Page4BlogDetails from "@/pages/Page4BlogDetails.vue";
import Page6NotFound from "@/pages/Page6NotFound.vue";
import Page5Details from "@/pages/Page5Details.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: PageHome1,
    },
    {
      path: "/blog",
      component: Page2Blog,
    },
    {
      path: "/project",
      component: Page3Project,
    },
    {
      path: "/blog-details",
      component: Page4BlogDetails,
    },
    {
      path: "/project/-1",
      component: Page5Details,
    },

    {
      path: "*",
      redirect: "/404",
    },
    {
      path: "/404",
      component: Page6NotFound,
    },
  ],
});
