<template>
  <footer class="footer center">
    <div class="Interno">
      <logoComponent />
      <p class="Interno-text">
        It is a long established fact that a reader will be distracted lookings.
      </p>
      <div class="Interno-icon">
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6367 4.59375C16.6367 4.76953 16.6367 4.91016 16.6367 5.08594C16.6367 9.97266 12.9453 15.5625 6.16016 15.5625C4.05078 15.5625 2.11719 14.9648 0.5 13.9102C0.78125 13.9453 1.0625 13.9805 1.37891 13.9805C3.10156 13.9805 4.68359 13.3828 5.94922 12.3984C4.33203 12.3633 2.96094 11.3086 2.50391 9.83203C2.75 9.86719 2.96094 9.90234 3.20703 9.90234C3.52344 9.90234 3.875 9.83203 4.15625 9.76172C2.46875 9.41016 1.20312 7.93359 1.20312 6.14062V6.10547C1.69531 6.38672 2.29297 6.52734 2.89062 6.5625C1.87109 5.89453 1.23828 4.76953 1.23828 3.50391C1.23828 2.80078 1.41406 2.16797 1.73047 1.64062C3.55859 3.85547 6.30078 5.33203 9.35938 5.50781C9.28906 5.22656 9.25391 4.94531 9.25391 4.66406C9.25391 2.625 10.9062 0.972656 12.9453 0.972656C14 0.972656 14.9492 1.39453 15.6523 2.13281C16.4609 1.95703 17.2695 1.64062 17.9727 1.21875C17.6914 2.09766 17.1289 2.80078 16.3555 3.25781C17.0938 3.1875 17.832 2.97656 18.4648 2.69531C17.9727 3.43359 17.3398 4.06641 16.6367 4.59375Z"
            fill="#292F36"
          />
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.14062 16H0.871094V5.48828H4.14062V16ZM2.48828 4.08203C1.46875 4.08203 0.625 3.20312 0.625 2.14844C0.625 1.12891 1.46875 0.285156 2.48828 0.285156C3.54297 0.285156 4.38672 1.12891 4.38672 2.14844C4.38672 3.20312 3.54297 4.08203 2.48828 4.08203ZM16.3398 16H13.1055V10.9023C13.1055 9.67188 13.0703 8.125 11.3828 8.125C9.69531 8.125 9.44922 9.42578 9.44922 10.7969V16H6.17969V5.48828H9.30859V6.92969H9.34375C9.80078 6.12109 10.8555 5.24219 12.4375 5.24219C15.7422 5.24219 16.375 7.42188 16.375 10.2344V16H16.3398Z"
            fill="#292F36"
          />
        </svg>
      </div>
    </div>
    <nav class="nav nav_footer">
      <ul class="nav-list nav-list_footer">
        <h4 class="nav-footer__title">Pages</h4>
        <li class="nav-list__item">
          <a href="#">Home</a>
        </li>
        <li class="nav-list__item">
          <a href="#">Project</a>
        </li>
        <li class="nav-list__item">
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
    <div class="contact">
      <h4 class="contact__title">Contact</h4>
      <div class="contact-info">
        <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p>contact@interno.co</p>
        <p>(123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>

<script>
import logoComponent from "./logoComponent.vue";
export default {
  name: "FooterPage",
  components: {
    logoComponent,
  },

  data() {},

  mounted() {},

  methods: {},
};
</script>
<slyle lang="css" scoped>
.footer {
  display: flex;
  padding-top: 96px;
  padding-bottom: 130px;
  justify-content: space-between;
}

.Interno {
  width: 390px;
}
.Interno-text {
  margin-top: 18px;
  margin-bottom: 20px;
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.Interno-icon {
  display: flex;
  gap: 50px;
}

.nav_footer {
  margin-right: 230px;
}

.nav-list_footer {
  display: flex;
  flex-direction: column;
}

.nav-footer__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
}

.contact__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
}
.contact-info {
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
</slyle>
