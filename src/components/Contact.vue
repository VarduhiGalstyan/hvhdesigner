<template>
    <div class="max">
        <div class="left">
            <div class="imgs12">
                <div class="imgs1">
                   img1
                </div>
                <div class="imgs2">
                   img2
                </div>
            </div>
            <div class="contact">
                <h1>Contact HVH Team</h1>
                <hr>
                <p>Phone: 1(866)577-4040</p>
                <p>email: info@hvhindustrial.com</p>
            </div>
        </div>

        <div class="right">
            <div class="submit">
                <div class="inputs">
                    <table>Your Name <span>*</span></table>
                    <input type="text" >
                    <p v-if="errors.name" class="error-text">Your Name is required.</p>
                    
                    <table>E-Mail <span>*</span></table>
                    <input type="email" v-model="form.email" :class="{'input-error': errors.email}">
                    <p v-if="errors.email" class="error-text">Email is required or must be valid.</p>

                    <table>Company</table>
                    <input type="text" v-model="form.company"  placeholder="(optional)">
                    <p></p>
                    <table>Address</table>
                    <input type="text" v-model="form.address"  placeholder="(optional)">
                    <p></p>
                    <table>City</table>
                    <input type="text" v-model="form.city" placeholder="(optional)">
                    <p></p>
                    <table>State</table>
                    <input type="text" v-model="form.state" placeholder="(optional)">
                    <p></p>
                    <table>Postal Code</table>
                    <input type="text" v-model="form.postalCode"  placeholder="(optional)">
                    <p></p>
                    <table>Phone</table>
                    <input type="text" v-model="form.phone" placeholder="(optional)">
                    <p></p>
                    <table>Fex</table>
                    <input type="text" v-model="form.fax" placeholder="(optional)">
                    <p></p>

                    <table>Comments <span>*</span></table>
                    <input type="text" v-model="form.comments" style="height: 100px !important;">
                    <p v-if="errors.comments" class="error-text">Comments are required.</p>

                    <div class="recaptcha">
                        <div class="g-recaptcha" 
                            :data-sitekey="siteKey" 
                            @change="onRecaptchaChange">
                        </div>
                        <p v-if="errors.recaptcha" class="error-text">Please verify that you are not a robot.</p>
                    </div>
                    <p></p>
                    <div class="buttons">
                        <button class="button1" @click="clearForm"><span>Clear From</span></button>
                        <button class="button2" @click="submitForm"><span>Submit</span></button>
                    </div>
                </div>
            </div>
            <div class="img">
                img-right
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
    };
  },
  methods: {
    submitForm(event) {
      this.errors.name = false;
      this.errors.email = false;
      this.errors.comments = false;

      let formIsValid = true;

      if (!this.form.name) {
        this.errors.name = true;
      }

      if (!this.form.email || !this.isValidEmail(this.form.email)) {
        this.errors.email = true;
      }

      if (!this.form.comments) {
        this.errors.comments = true;
      }

      if (!formIsValid) {
        event.preventDefault(); // Ուղարկումը չեղարկում ենք
        return;
      }

      // Եթե ամեն ինչ կարգին է, ֆորման ուղարկվում է
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
    }
  }
};
</script>


<style scoped>
.input-error {
  border-color: red !important;
}

.error-text {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.max {
    padding-left: 5%;
    padding-right: 4%;
    display: flex;
    justify-content: space-between;
}

.left {
    width: 50%;  
    display: flex;
}

.right {
    width: 50%;  
    display: flex;
    gap: 10px;
}
.imgs12{
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-top: 35%;
}

h1 {
    color: red;
    font-weight: 300;
}

hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(182, 180, 180, 0.28);
}

.submit {
    display: flex;
    flex-direction: column;
    width: 60%;
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
    color: red;
}

input {
    border-right: none;
    border-left: 1px solid #000000;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #000000;  
    height: 30px;
    width: 100%;
}

.recaptcha {
    justify-content: end;
    height: 60px;
    background-color: #eceaea;
    border: 1px solid #828282;
}

.buttons {
    display: flex;
    gap: 10px; 
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
  font-size: 14px;
  padding: 10px 20px; 
  cursor: pointer;
  position: relative; 
  overflow: hidden;
  z-index: 1;
}
.button2:hover {
  /* background-color: red;  */
  color: white; 
}

.button2::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: red; 
  transform: translate(-50%, -50%) scale(0); 
  transition: transform 0.4s ease; 
  z-index: 0;
}
.button2:hover::before {
  transform: translate(-50%, -50%) scale(1); 
}

.button2 span {
  position: relative;
  color: #000;
  z-index: 1; 
}
</style>