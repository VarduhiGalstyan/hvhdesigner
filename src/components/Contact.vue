<template >
  <div class="img">

    <div class="max">
      <div class="left">
        <!-- <div class="imgs12">
          <div class="imgs1">
            img1
          </div>
          <div class="imgs2">
            img2
          </div>
        </div> -->
        <!-- <div> -->
          <h1>Contact HVH Team</h1>
          <hr>
          <p>Phone: 1(866)577-4040</p>
          <p>email: info@hvhindustrial.com</p>
        <!-- </div> -->
      </div>

      <div class="right">
        <div class="submit">
          <form @submit.prevent="submitForm">
            <div class="inputs">
              <table>Your Name <span>*</span></table>
              <input type="text" v-model="form.name" :class="{'input-error': errors.name}">
              <p v-if="errors.name" class="error-text">Your Name is required.</p>
              
              <table>E-Mail <span>*</span></table>
              <input type="email" v-model="form.email" :class="{'input-error': errors.email}">
              <p v-if="errors.email" class="error-text">Email is required or must be valid.</p>

              <table>Company</table>
              <input type="text" v-model="form.company" placeholder="(optional)">
              <p></p>
              <table>Address</table>
              <input type="text" v-model="form.address" placeholder="(optional)">
              <p></p>
              <table>City</table>
              <input type="text" v-model="form.city" placeholder="(optional)">
              <p></p>
              <table>State</table>
              <input type="text" v-model="form.state" placeholder="(optional)">
              <p></p>
              <table>Postal Code</table>
              <input type="text" v-model="form.postalCode" placeholder="(optional)">
              <p></p>
              <table>Phone</table>
              <input type="text" v-model="form.phone" placeholder="(optional)">
              <p></p>
              <table>Fax</table>
              <input type="text" v-model="form.fax" placeholder="(optional)">
              <p></p>

              <table>Comments <span>*</span></table>
              <input type="text" v-model="form.comments" style="height: 100px !important;">
              <p v-if="errors.comments" class="error-text">Comments are required.</p>
              <p></p>
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
              <div class="buttons">
                <button type="button" class="button1" @click="clearForm"><span>Clear Form</span></button>
                <button type="submit" class="button2"><span>Submit</span></button>
              </div>
            </div>
          </form>
        </div>
        <!-- <div class="img">
          img-right
        </div> -->
      </div>
    </div>
    </div>
</template>

<script>
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
      key: '6LeM93UqAAAAANmkFsRO3_-8A75F5CiR4TrmOqtY',
      reCaptchaLoaded: false,
    };
  },
  mounted() {
    this.loadRecaptcha();
  },
  methods: {
    loadRecaptcha() {
      if (typeof grecaptcha !== 'undefined') {
        grecaptcha.ready(() => {
          grecaptcha.render(this.$refs.recaptcha, {
            sitekey: this.key,
          });
          this.reCaptchaLoaded = true;
        });
      } else {
        console.error('reCAPTCHA script not loaded.');
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
    /* flex-direction: column;  */
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
/* .imgs12{
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-top: 35%;
} */

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

span {
    /* color: red; */
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
    padding-left: 38%;
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
  /* padding: 14px;  */
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
  /* top: 50%; */
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
    padding-left: 57%;
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
    padding-left: 23%;
  }
  .buttons{
    padding-left: 48%;
  }
}
@media only screen and (max-width: 570px){
  .recaptcha{
    padding-left: 20%;
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
    padding-left: 18%;
  }
  .buttons{
    padding-left: 44%;
  }
}
@media only screen and (max-width: 538px){
  .recaptcha{
    padding-left: 14%;
  }
  .buttons{
    padding-left: 40%;
  }
}
@media only screen and (max-width: 519px){
  .recaptcha{
    padding-left: 11%;
  }
  .buttons{
    padding-left: 40%;
  }
}
@media only screen and (max-width: 506px){
  .recaptcha{
    padding-left: 7%;
  }
  .buttons{
    padding-left: 40%;
  }
}









</style>