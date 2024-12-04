<template>
  <div class="max">
   <div class="login">
     <h1>Login</h1>
     
       <div>
         <label for="Email-or-Login">Email or Login:</label>
         <p></p>
         <input type="text"  id="Email-or-Login" v-model="email"  required />
         <p v-if="emailError" class="error-message">{{ emailError }}</p>
         <p></p>
       </div>

       <div>
         <label for="password">Password:</label>
         <p></p>
         <input type="password"  id="password" v-model="password"  required />
         <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
         <p></p>
        </div>

       <div style="display: flex; ">
         <input type="checkbox" v-model="rememberMe" style="width: 5% !important;"/>
         <div style="margin-top: 10px;"  > Remember Me</div>
       </div>

       <div class="end">
         <a href="#" style="color: red; font-weight: 700;     width: 400px;">Forgot Your Password?</a>
         <button type="submit" class="button2" @click="login">Login</button>
       </div>
   </div>
   <div class="vidio">
     <video width="500" height="240" controls>
       <source :src="videoUrl"  type="video/mp4">
       <source src="movie.ogg" type="video/ogg">
     </video>
   </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      emailError: '',
      passwordError: '',
       videoUrl: '', 
    };
  },
  mounted()  {
    this.$store.dispatch('fetchToken');

    setTimeout(()=>
      this.fetchSettings()
    , 1000); 
  },
  methods: {
    validateForm() {
      this.emailError = '';
      this.passwordError = '';
      
      // Ստուգում ենք, եթեlogin/email չկա
      if (!this.email) {
        this.emailError = 'The email field is required.';
      }

      // Ստուգում ենք, եթե passvord բացակայում է
      if (!this.password) {
        this.passwordError = 'The password field is required.';
      }

      return !this.emailError && !this.passwordError;
    },

    async login() {
      if (this.validateForm()) {
        try {
          // Notework kատարում ենք POST հարցում API-ին
          const response = await axios.post('https://webapi.hvhdesigner.com/api/login', {
            email: this.email,
            password: this.password
          },  {headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          }});

          if (response.data.status) {
            // Եթե մուտքը հաջող է, ստանում ենք token-ը և պահում այն localStorage-ում
            const token = response.data.user.auth_token;
            localStorage.setItem('authToken', token);

            console.log('Successfully logged in', response.data);

            // Ստացված ուղղությունը օգտագործող redirect
            window.location.href = response.data.redirect;
          } else {
            console.error('Login failed', response.data.message);
          }
        } catch (error) {
          console.error('Error during login', error);
        }
      }
    },



    // Օրինակ API հարցում, որտեղ token-ը ուղարկվում է header-ով
    async fetchData() {
      try {
  

        // Հնարավոր API հարցում՝ token-ով
        const response = await axios.get('https://webapi.hvhdesigner.com/api/data', {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          }
        });

        console.log('Data fetched:', response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    },

    async fetchSettings() {
      try {
        const response = await axios.post('https://webapi.hvhdesigner.com/api/get-settings', {}, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` }
        });


        if (response.data.status) {
          const settings = response.data.settings;
          
          if (settings.login_video) {
            this.videoUrl = `https://webapi.hvhdesigner.com/assets/${settings.login_video}`;
          
          } else {
            console.error('Login video not found in settings.');
            this.videoUrl = '';  
          }
        } else {
          console.error('Settings not found or empty.');
          this.videoUrl = ''; 
        }
      } catch (error) {
        console.error('Error fetching settings', error);
      } 
      
    },

    
    // Դուրս գալy (logout)
    logout() {
      // Հանում ենք token-ը localStorage-ից

      localStorage.removeItem('authToken');
      window.location.href = '/login'; // Փոխում ենք էջը դեպի մուտքի էջ
    }
  }
};
</script>


<style scoped>
.error-message{
  color: red;
}
.max{
  padding: 50px 8% 10% 18%;
  width: 1150px;
  text-align: justify;
  display: flex;
  gap: 50px;
}
.login{
   width: 40%;
   margin-left: 10%;
}
h1{
   text-align: center;
   color: red;
   font-weight: 700;
   text-transform: capitalize;
}
label, span{
   font-weight: 700;
   display: block;
   text-align: start;
}
input{
   border: 1px solid #000000;
   border-radius: 5px;
   width: 100%;
   height: 40px;
}
.remember-me, .end{
   display: flex;
}

 .button2 {
   /* width: 600px; */
   margin-left: 80%;
 height: 50px;
 background-color: white; 
 border: 1px solid red; 
 color: #000; 
 font-weight: 550;
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

.button2:hover {
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

@media only screen and (max-width: 1669px){
.max{
 padding: 50px 8% 10% 10%;
 height: 377px;
}
}
@media only screen and (max-width: 1362px){
.max{
 padding: 50px 4% 10% 8%;
}
.login{
  margin-left: 5%;
}
}
@media only screen and (max-width: 1300px){
.max{
 padding: 50px 4% 10% 2%;
}
}

@media only screen and (max-width: 1239px){
.max{
 padding: 50px 1% 10% 5%;
}
}
@media only screen and (max-width: 1200px){
.max{
 width: 950px;
}
.button2{
  margin-left: 55%;
}

}
@media only screen and (max-width: 1135px){
.max{
 padding: 50px 1% 10% 5%;
}
}
@media only screen and (max-width: 1053px){
.max{
 padding: 50px 1% 10% 4%;
}
}
@media only screen and (max-width: 1053px){
.max{
 padding: 50px 1% 10% 4%;
}
}
@media only screen and (max-width: 991px){
.max{
 width: 620px;

}
.button2{
 margin-left: 45%;
 width: 100px;
}
}
@media only screen and (max-width: 991px){
 .max{
   padding: 50px 1% 10% 4%;

 }
}
@media only screen and (max-width: 793px){
.max{
 padding: 50px 1% 10% 1%;
}
}
@media only screen and (max-width: 884px){
.login{
  margin-left: 0.5%;
}
.max{
 padding: 50px 1% 10% 1%;
}
}
@media only screen and (max-width: 828px){
.max{
 padding: 50px 1% 10% 1%;
 gap: 11px !important;
}
}
@media only screen and (max-width: 809px){
.max{
 padding: 50px 1% 10% 1%;

}
}
@media only screen and (max-width: 768px){
.max{
 padding: 50px 0 10% 0;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
}
.max{
 padding: 50px 1% 28% 0.5%;
}
.login{
 padding-left: 10%;
 width: 71%;
}
.button2{
 margin-left: 80%;
}
input{
 height: 35px;
}
.end a{
 width: 2500px !important;
}
.vidio{
 padding-left: 10%;
 width: 70%;
}
}
@media only screen and (max-width: 732px){
 .end a{
 width: 3500px !important;
}
}
@media only screen and (max-width: 747px){
 .end a{
 width: 3500px !important;
}
}
@media only screen and (max-width: 717px){
 .end a{
 width: 3500px !important;
}
}
@media only screen and (max-width: 691px){
 .end a{
 width: 3740px !important;
}
}

@media only screen and (max-width: 651px){
  .button2{
 margin-left: 75%;
}
.end a{
 width: 4000px !important;
}
}
@media only screen and (max-width: 550px){
 .end a{
 width: 2000px !important;
}
}
</style>