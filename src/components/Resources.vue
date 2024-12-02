<template>
  <div class="resources-max">
    <div class="resources-top">
      <div v-for="resource in resources" :key="resource.id"  class="resources-top-left">
        <img :src="`https://webapi.hvhdesigner.com/uploads/images/${resource.photo}`" alt="step-img" />
        <div class="center">
          <h1>{{ resource.title_en }}</h1>
          <span v-html="resource.short_desc_en"></span>
        </div>
      </div>

      <div class="resources-top-right">
        <div style="display: flex; margin-bottom: 15px;">
          <span class="class1"></span>
          <span class="class2"></span>
        </div>
        <span>Get the latest news delivered to your inbox</span>
        <p></p>
        <span style="color: #000000 !important;">Insights twice a month</span>
        <p></p>
        <table>Email</table>
        <input
          v-model="email" 
          type="text"
          placeholder="Enter your email address"
          style="height: 25px; width: 85%;"
        />
        <p v-if="errorMessage" style="color: #a94442 !important; line-height: normal; height: 1px;;">
          {{ errorMessage }}
        </p>
        <p></p>
        <button class="button2" @click="openModal">
          <span>Subscribe</span>
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="modalVisible" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-close" @click="closeModal">&times;</span>
        </div>
        <div class="modal-body">
          <!-- reCAPTCHA widget -->
          <div class="recaptcha" ref="recaptcha">
          </div>
          <p v-if="recaptchaError" class="error-text recaptcha" 
              style="
                height: 5px !important;
                color: #a94442 !important;
                font-weight: bolder;
                line-height: normal;
              ">Please ensure that you are a human!</p>
          <p></p>
          <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

          <button @click="handleSubscribe" class="confirm-btn">Save</button>
        </div>
      </div>
    </div>

    <nav class="nav">
      <div class="span">Filter by:</div>
      <ul>
        <li 
        :class="{ active: activeLink === 'all' }" 
        @click="setActive('all')">
        <i style="font-size:14px; margin-right: 5px;" class="fa">&#xf0c9;</i>
        All
      </li>
        <li 
          v-for="category in categories" 
          :key="category.id" 
          :class="{ active: activeLink === category.title_en.toLowerCase() }" 
          @click="setActive(category.title_en.toLowerCase())">
          {{ category.title_en }}
        </li>
      </ul>
    </nav>

    <div class="end-max">
      <div v-for="resource in resources" :key="resource.id" class="end">
        <div class="step-img"   style="margin-left: 20px;">
          <img :src="'https://webapi.hvhdesigner.com/uploads/images/' + resource.photo" alt="step-img" 
          style="height: 80% !important; width: 80% !important; margin-top: 30px; margin-left: 10%;"
          />
        </div>
        <div class="end-information"  style="padding: 20px; height: 510px; overflow: hidden; text-align: center;">
          <a @click.prevent="goToStep"  class="blog" :href="'https://hvhdesigner.com/resource/' + resource.url"
          >
            <span style="color: red !important;">{{ resource.title_en }}</span>
            <p></p>
            <span style="color: #6c757d !important;">{{ resource.short_desc_en }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "", 
      errorMessage: "", 
      activeLink: "all",
      resources: [],  
      categories: [], 
      modalVisible: false,
      recaptchaResponse: "", 
      reCaptchaKey: '6LeM93UqAAAAANmkFsRO3_-8A75F5CiR4TrmOqtY', 
      loading: false, 
    };
  },

  methods: {
    goToStep() {
      this.$router.push('/step');
    },

    openModal() {
      if (!this.email) {
        this.errorMessage = "The email field is required."; 
        return;
      } 
      if (!this.validateEmail(this.email)) {
        this.errorMessage = "Please enter a valid email address.";
        return;
      }
      this.errorMessage = ""; 
      this.modalVisible = true;  
    },

    closeModal() {
      this.modalVisible = false; 
    },

    handleRecaptchaResponse(response) {
      this.recaptchaResponse = response;
    },

    async handleSubscribe() {
      if (!this.recaptchaResponse) {
        this.errorMessage = "Please complete the reCAPTCHA."; 
        return;
      }

      try {
        this.loading = true; 
        const response = await axios.post(
          'https://webapi.hvhdesigner.com/api/email-validate', 
          { email: this.email, recaptchaResponse: this.recaptchaResponse },
          { 
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            }
          }
        );

        this.loading = false; 

        if (response.data.success) {
          this.errorMessage = "";  
          this.closeModal();  
          alert(response.data.message);  
        } else {
          this.errorMessage = "Please click to confirm.";  
        }
      } catch (error) {
        this.loading = false; 
        console.error("Subscription failed:", error);
        this.errorMessage = "An error occurred. Please try again.";  
      }
    },

    async fetchCategories() {
      try {
        const response = await axios.post('https://webapi.hvhdesigner.com/api/get-resources-category', {}, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          }
        });

        if (response.data.status === 'true') {
          this.categories = response.data.resources_category;
          console.log('Fetched categories:', this.categories);
        } else {
          console.error('Failed to fetch categories.');
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },

    async fetchResources() {
      try {
        const response = await axios.post('https://webapi.hvhdesigner.com/api/get-resources', {}, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          }
        });

        if (response.data.status === 'true') {
          this.resources = response.data.resources;  
        } else {
          console.error('Failed to fetch resources.');
        }
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    },

    async fetchResourcesByCategory(catId) {
      try {
        const response = await axios.post('https://webapi.hvhdesigner.com/api/get-resources-by-category', {
          cat_id: catId
        }, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          }
        });

        if (response.data.status === 'true') {
          this.resources = response.data.resources;  
        } else {
          console.error('Failed to fetch resources for category.');
        }
      } catch (error) {
        console.error("Error fetching resources by category:", error);
      }
    },

    setActive(link) {
      this.activeLink = link;

      if (link === "all") {
        this.fetchResources();  
      } else {
        const category = this.categories.find(cat => cat.title_en.toLowerCase() === link);
        if (category) {
          this.fetchResourcesByCategory(category.id); 
        }
      }
    },

    validateEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    }
  },

  mounted() {
    this.$store.dispatch('fetchToken');
    setTimeout(() => {
      this.fetchCategories();
      this.fetchResources();
    }, 1000);

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.reCaptchaKey}`;
    script.async = true;
    script.onload = () => {
      console.log('reCAPTCHA script loaded successfully');
      grecaptcha.ready(() => {
        grecaptcha.execute(this.reCaptchaKey, { action: 'subscribe' })
          .then((token) => {
            this.recaptchaResponse = token;
          });
      });
    };
    document.head.appendChild(script);
  },
};
</script>




<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  text-align: center;
}

.modal-header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.g-recaptcha {
  margin: 20px 0;
  max-width: 100%;
}

.confirm-btn {
  background-color: red;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.class1{
  background: #f9f9f9;
    border-radius: 8px;
    height: 7px;
    margin-left: 15px;
    width: 40%;
}
.class2{
  background: red;
    border-radius: 50%;
    height: 7px;
    margin-left: 11px;
    width: 7px;
}
img{
  object-fit: cover;
}
.resources-top-left img{
  height: 200px !important;
  width: 330px !important; 
  padding-left: 5%; 
  padding-top: 10px;
}

.resources-top-left{
  display: flex;
}
button{
    background-color: #fff;
}
.max-center{
    display: flex;
}
.resources-max{
  
    display: flex;
    flex-direction: column; 
    padding: 80px 10% 10% 22%;
    text-align: justify;
    font-family: Arial, Helvetica, sans-serif;    
}
.resources-top{
    display: flex;
}
.center{
    width: 340px;
    padding-left: 7%;
}
.center h1{
    font-size: 24px;
    font-weight: 700;
    color: #000000;
    line-height: 1.6;
}
span, .span{
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
    
}
.span{
  padding-top: 24px;
}
.resources-top-right{
    padding-left: 7%;
    
}
nav {
    flex-grow: 1; 
    display: flex;
  }
  
  nav ul {
    flex-direction: row;
    display: flex;
    list-style: none;
    margin-left: -36px;
  }
  li:hover {
    color: red;
  } 

  nav li {
    align-items: center;
    border: 1px solid #eee;
    color: #6c757d;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    margin: 5px;
    padding: 8px;
  }
  
  nav li.active {
    color: red; 
}

.button2 {
  background-color: white; 
  border: 1px solid red; 
  color: #000 ; 
  font-weight: 550;
  width: 180px;
  font-size: 14px;
  padding: 5px 0;
  cursor: pointer;
  position: relative; 
  overflow: hidden;
  display: inline-block;
  text-decoration: none;
  z-index: 1;
  transition: color 0.4s;
}

.button2 span:hover {
    color: white;
  }

.button2::before , .button2::after{
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 0;
  background-color: red; 
  transition: height 0.9s ease;
    z-index: -1;
}
.button2::before{
  top: 50%;
}
.button2::after{
  bottom: 50%;
}
.button2:hover::before,
  .button2:hover::after {
    height: 100%;
  }
.end-max{
  display: flex;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  
}
.end-information{
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
  position: relative;
  max-width: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.6;
}
.blog:hover{
  text-decoration: ;
}
.blog{
  columns: #77787b;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  
}
.end-information:hover{
  text-decoration: underline;
}
.end{
width: 360px;
  display: flex;
  flex-direction: column; 
  justify-content: center;
}
.step-img{
  justify-content: center;
    border: 1px solid #eee;
    height: 280px;
    object-fit: cover;
    margin-bottom: 15px;
}
.start-img img{
    width: 100%;
    height: 100% ;
    object-fit: contain !important;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
}
@media only screen and (max-width: 1757px){
  .resources-max{
    display: flex;
    flex-direction: column; 
    padding: 80px 10% 10% 15%;
    text-align: justify;
    font-family: Arial, Helvetica, sans-serif;    
  }
}
@media only screen and (max-width: 1650px){
  .center{
    padding-left: 0;
    width: 370px;
  }

}
@media only screen and (max-width: 1600px){
  .resources-top img{
    padding-left: 0 !important;
  }
  .resources-top-right{
    padding-left: 4%;
  }
  .center{
    width: 340px;
  }
}

@media only screen and (max-width: 1553px){
  .resources-top-right{
    padding-left: 3%;
  }
}

@media only screen and (max-width: 1370px){
  .resources-max{
    padding: 80px 10% 10% 5%;
  }
  
}
@media only screen and (max-width: 1280px){
  .resources-max{
    padding-left: 0;
  }
.resources-top-left{
  display:  flex;
  flex-direction: column;
  padding: 40px 25px 40px 0;
  width: 65%;
}
.center{
  width: 100%;
  display: block;
  text-align: center;
}
.resources-top-left img{
  height: 250px !important;
  width: 500px !important;
    margin-left: 17%;
}
.resources-top-right{
  padding-top: 60px;

}
.resources-top-right span{
  font-size: 18px;
}
.nav, .end-max{
  padding-left: 5%;

}
}
@media only screen and (max-width: 1280px){
.resources-top-left img{
  margin-left: 12%;
}
}
@media only screen and (max-width: 888px){
  .resources-top-left img{
    margin-left: 5%;
  }
}
@media only screen and (max-width: 767px){
  .resources-top{
    display: flex;
    flex-direction: column;
  }
  .resources-top-left{
    width: 100%;
  }
  .resources-top-left img{
    margin-left: 15%;
  }
  .nav{
    padding-top: 30px;
  }
}
@media only screen and (max-width: 611px){

  .resources-top-left img{
    margin-left: 0;
  }
}
@media only screen and (max-width: 877px){
  .end-max{
    padding-top: 30px;
  }
  .step-img{
    width: 93%;
  }
  .end-max{
    margin-left: 5%;
  }
  .end{
    width: 100%;
  }
}



</style>