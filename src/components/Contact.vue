<template>
  <div class="img" :style="backgroundStyle">
    <div class="max">
      <div class="left">
        <h1 v-html="contactInfo.title"></h1>
        <hr>
        <p v-html="contactInfo.contact"></p>
      </div>

      <div class="right">
        <div class="submit">
          <form @submit.prevent="submitForm">
            <!-- Form fields remain the same -->
            <div class="inputs">
              <table>Your Name <span>*</span></table>
              <input type="text" v-model="form.name" :class="{'input-error': errors.name}">
              <p v-if="errors.name" class="error-text">Your Name is required.</p>
              
              <table>E-Mail <span>*</span></table>
              <input type="email" v-model="form.email" :class="{'input-error': errors.email}">
              <p v-if="errors.email" class="error-text">Email is required or must be valid.</p>

              <!-- Other form fields remain the same -->
              <div class="buttons">
                <button type="button" class="button1" @click="clearForm"><span>Clear Form</span></button>
                <button type="submit" class="button2"><span>Submit</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        phone: '',
        fax: '',
        comments: '',
      },
      errors: {
        name: false,
        email: false,
        comments: false,
      },
      recaptchaError: false,
      contactInfo: {
        title: '',
        contact: '',
        bgImage: '',
      },
      backgroundStyle: {},
    };
  },
  computed: {
    ...mapGetters(['getToken']),
  },
  mounted() {
    console.log(this.getToken);
    
    if (this.getToken) {
      this.fetchContactInfo();
    }
  },
  methods: {
    async fetchContactInfo() {
      try {
        const response = await axios.post('https://webapi.hvhdesigner.com/api/get-contact-info', {}, {
          headers: {
            Authorization: `Bearer ${this.getToken}`,
          },
        });

        if (response.data.status === 'true') {
          const info = response.data.info;
          console.log(info);
          
          this.contactInfo.title = info.meta_title || 'Contact HVH Team';
          this.contactInfo.contact = info.content;
          this.contactInfo.bgImage = info.bg_image;

          // Dynamically update the background image
          this.backgroundStyle = {
            backgroundImage: `url('https://webapi.hvhdesigner.com/storage/${this.contactInfo.bgImage}')`,
          };
        } else {
          console.error('Failed to fetch contact info');
        }
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    },

    submitForm() {
      this.errors.name = false;
      this.errors.email = false;
      this.errors.comments = false;
      this.recaptchaError = false; 

      let formIsValid = true;

      if (!this.form.name) {
        this.errors.name = true;
        formIsValid = false;
      }

      if (!this.form.email || !this.isValidEmail(this.form.email)) {
        this.errors.email = true;
        formIsValid = false;
      }

      if (!this.form.comments) {
        this.errors.comments = true;
        formIsValid = false;
      }

      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        this.recaptchaError = true; 
        formIsValid = false;
      }

      if (!formIsValid) {
        return;
      }

      console.log('Form successfully submitted:', this.form);
    },

    isValidEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
    
    clearForm() {
      this.form = {
        name: '',
        email: '',
        company: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        phone: '',
        fax: '',
        comments: '',
      };
      this.errors = {
        name: false,
        email: false,
        comments: false,
      };
      grecaptcha.reset();
    },
  },
};
</script>

<style scoped>
.img{
  background-image: url('@/assets/background.png');


}
.input-error {
  border-color: red !important;
}

.error-text {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.max {
  
  padding: 10px 5% 10% 22%;
  text-align: justify;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  gap: 30px;
}

.left {
    width: 700px;  
    display: flex;
    flex-direction: column;
}

.right {
    width: 100%;  
    display: flex;
    gap: 10px;
}


h1 {
    color: red;
    font-weight: 300;
}

hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    border: 0;
    border-top: 1px solid rgba(182, 180, 180, 0.28);
}

.submit {
    display: flex;
    flex-direction: column;
    width: 550px;
    border: 1px solid #e0dbdb;
}
.inputs{
    padding: 20px;
}

p {
    font-weight: 200;
    color: #6c6c6c;
}



input {
    border-right: none;
    border: 1px solid #000000;
    height: 30px;
    width: 100%;
}

.recaptcha {
    justify-content: end;
    height: 60px;
    padding-left: 42%;
    padding-bottom: 10px;
}
.g-recaptcha{
  width: 100%;
  height: 60px;
  background-color: #eceaea;
  border: 1px solid #828282;
}
.buttons {
    display: flex;
    gap: 10px; 
    padding-left: 56%;
  }

  .buttons button{
    height: 50px;
  }

.button1 {
  background-color: #828282; 
  border: none;
  padding: 10px 20px; 
  cursor: pointer;
  width: 200px;
  position: relative; 
  overflow: hidden; 
  z-index: 1;

}
.button1 span{
  color: #fff !important;
}


.button1::after {
  content: '';
  position: absolute;
  top: 0;
  font-weight: 550;
  right: -100%; 
  width: 100%; 
  height: 100%; 
  background-color: #424442; 
  transition: right 0.4s ease; 
  color: #000 !important;
}
.button1 span {
  position: relative;
  z-index: 1; 
}

.button1:hover::after {
  right: 0; 
    color: #fff ;
}

.button2 {
  background-color: white; 
  border: 1px solid red; 
  color: #000; 
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
  
@media only screen and (max-width: 1788px){
.max{
  padding-left: 15%;
}
}
@media only screen and (max-width: 1459px){
  .max{
    padding-left: 10%;

  }
}
@media only screen and (max-width: 1200px){
  .img{
    background: none !important;
  }
  .max{
    padding-left: 5% ;
  }
}
@media only screen and (max-width: 991px){
  .max{
    display: flex;
    flex-direction: column;
  }
  .left{
    padding-left: 12%;
    width: 75%;
  }
  .right{
    padding-left: 7%;
    
  }
  .submit{
    width: 85%;
  }
  .recaptcha{
    padding-left: 58%;
  }
  .buttons{
    padding-left: 71%;
  }
  
}
@media only screen and (max-width: 967px){
  .recaptcha{
    padding-left: 56%;
  }
}
@media only screen and (max-width: 942px){
  .recaptcha{
    padding-left: 55%;
  }
  .buttons{
    padding-left: 66%;
  }
}

@media only screen and (max-width: 924px){
  .recaptcha{
    padding-left: 54%;
  }
  .buttons{
    padding-left: 68%;
  }
}
@media only screen and (max-width: 903px){
  .recaptcha{
    padding-left: 53%;
  }
}
@media only screen and (max-width: 876px){
  .recaptcha{
    padding-left: 51%;
  }
}
@media only screen and (max-width: 846px){
  .recaptcha{
    padding-left: 49%;
  }
}
@media only screen and (max-width: 811px){
  .recaptcha{
    padding-left: 47%;
  }

  .buttons{
    padding-left: 64%;
  }
}
@media only screen and (max-width: 785px){
  .recaptcha{
    padding-left: 44%;
  }
  .buttons{
    padding-left: 62%;
  }
}
@media only screen and (max-width: 750px){
  .recaptcha{
    padding-left: 42%;
  }
  .buttons{
    padding-left: 60%;
  }
}
@media only screen and (max-width: 725px){
  .recaptcha{
    padding-left: 40%;
  }
}
@media only screen and (max-width: 708px){
  .recaptcha{
    padding-left: 38%;
  }
  .buttons{
    padding-left: 56%;
  }
}
@media only screen and (max-width: 682px){
  .recaptcha{
    padding-left: 36%;
  }
  .buttons{
    padding-left: 55%;
  }
}
@media only screen and (max-width: 665px){
  .recaptcha{
    padding-left: 34%;
  }
  .buttons{
    padding-left: 53%;
  }
}
@media only screen and (max-width: 648px){
  .recaptcha{
    padding-left: 32%;
  }
  .buttons{
    padding-left: 53%;
  }
}
@media only screen and (max-width: 632px){
  .recaptcha{
    padding-left: 30%
  }
  .buttons{
    padding-left: 51%;
  }
}
@media only screen and (max-width: 615px){
  .recaptcha{
    padding-left: 27%
  }
  .buttons{
    padding-left: 48%;
  }
}
@media only screen and (max-width: 594px){
  .recaptcha{
    padding-left: 25%;
  }
  .buttons{
    padding-left: 48%;
  }
}
@media only screen and (max-width: 570px){
  .recaptcha{
    padding-left: 34%;
  }
  .buttons{
    padding-left: 44%;
  }
  .submit{
    width: 100%;
  }
  .right{
    width: 100%;
    padding-left: 0;
  }
}
@media only screen and (max-width: 553px){
  .recaptcha{
    padding-left: 32%;
  }
  .buttons{
    padding-left: 44%;
  }
}
@media only screen and (max-width: 538px){
  .recaptcha{
    padding-left: 31%;
  }
  .buttons{
    padding-left: 40%;
  }
}
@media only screen and (max-width: 519px){
  .recaptcha{
    padding-left: 27%;
  }
  .buttons{
    padding-left: 40%;
  }
}
@media only screen and (max-width: 506px){
  .recaptcha{
    padding-left: 25%;
  }
  .buttons{
    padding-left: 40%;
  }
}
</style>