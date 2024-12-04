<template>
  <main>
    <div class="start">
        <div class="start-text">
          <div>
            <p v-if="homeInfo">
              <span v-html="homeInfo.desc_en"></span>
            </p>
        </div>
          <div class="buttons">
            <div>
              <button class="button1" @click="openRegisterModal" ><span>REQUEST FREE TRIAL</span></button>
            </div>
            <div>
              <button class="button2" @click="openRegisterModal" ><span>REQUEST A DWMO</span></button>
            </div>
          </div> 
        </div>
        <div class="start-img">
          <img v-if="homeInfo" :src="`https://webapi.hvhdesigner.com/uploads/images/${homeInfo.photo}`" alt="Start Image">
          
        </div>
    </div>
    <div class="pricing">
      <div class="procong-name">Pricing</div>
      <div class="windows wss">
        <div v-for="pricing in pricingData" :key="pricing.id" class="window">
          <span class="name">{{ pricing.price }}</span>
          <span class="mounth-year" v-if="pricing.duration_en">/{{ pricing.duration_en }}</span>
          <p></p>
          <span class="about">{{ pricing.title_en }}</span>
          <p></p>
          <button class="button2" @click="openRegisterModal"><span>Buy now</span></button>
        </div>
      </div>
      <div class="windows ws">
        <div v-if="homeInfo"> 
              <div v-html="homeInfo.text_en"></div>
        </div>
        <!-- <div class="windows-img"> 
          <img src="../assets/1593812195566_1651022973.jpg" alt="image" style="float: left; height: 423px; max-width: 500px; ">
        </div>
        <div class="windows-information1">
          <h1>What is HVH Desingner?</h1>
          <p>
            <span >HVH Designer is a web-based computer-aided design (CAD) software, developed by HVH Industrial Solutions. HVH Industrial is an industrial distributor focused on power transmission, motion control, and automation. We worked with our manufacturers to craft a comprehensive database of the 3D models of standard components of the offered products. </span>
          </p>
          <p><h2 style="font-size: 20px; line-height: 1.5; font-weight: bolder;">Time is valuable, so our focus is to save you time.</h2></p>
          <ul>
            <li>Easy to use CAD software, saves you time in the design process</li>
            <li>Powerful search tools save time when it comes to searching standard 3D models for your project</li>
            <li>Help with finding and selecting the right components</li>
            <li>Custom solutions tailored to your specific requirements</li>
            <li>With one click you can submit your bill of material for quotation</li>
            <li>Individual approach to every customer of every size. There are no small or big customers for us </li>
          </ul>
        </div> -->
      </div>
      <!-- <div class="windows ws">
        <div class="windows-information1">
          <h1 >What you can do with HVH Designer</h1>
          <ul>
            <li>HVH Designer is a fully online design solution you can access from any web browser. No download is required. </li>     
            <li>Design with mathematical precision. HVH Designer is powered by Siemens® Parasolid®, the same engine that drives SOLIDWORKS, Solid Edge, Onshapem, Siemens NX, MasterCAM, and more.</li>
            <li>Our powerful search tools will enable you to find the required standard component for your project fast and easily. </li>
            <li>If you can not find a model or need a customized solution, we've got your back. Our support team is just a click away.</li>
            <li>At HVH, we work closely with the engineering teams of our manufacturers to provide superior customer service and engineering support.</li>
          </ul>
        </div>
        <div class="windows-img2"> 
          <img src="../assets/Untitled.png" alt="image2" style="float: right; height: 400px;margin: 30px; width: 400px;">
        </div> 
      </div> -->
      <div>
        <p><hr class="hr"></p>
        <div class="end-max">
          <div class="end">
            <div class="step-img" style="margin-left: 20px;" >
              <img src="../assets/photo-1651197310.jpg" 
              style="    
                height: 80% !important;
                width: 80% !important;
                margin-top: 30px;
                margin-left: 10%;
                object-fit: cover;" 
              alt="step-img">
            </div>
            <div class="end-information" style="padding: 20px; height: 510px;  overflow: hidden; text-align: center;">
                <a  @click.prevent="goToStep" class="blog" >
                  <span style="color: red !important;">
                    What is a STEP File Format
                  </span>
                  <p></p>
                  <span style="color: #6c757d !important;">
                    STEP files, also known as ISO 10303, are an ISO standard exchange format. The letters "STEP" stands for “Standard for the Exchange of Product Data
                  </span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal ref="registerModal" />
  </main>
</template>
  
  <script>
    import Modal from './Modal.vue';
    import axios from 'axios';
    
    export default {
      components: {
        Modal,
      },
      computed: {
    
      },
      data() {
        return {
          homeInfo: null,  
          pricingData: [], 
        };
      },
      methods: {
        openRegisterModal() {
          this.$refs.registerModal.openRegisterModal();  
        }, 
        goToStep() {
          this.$router.push('/step');
        },
        async fetchHomeInfo() {
          try {
            const response = await axios.post('https://webapi.hvhdesigner.com/api/get-home-info', {}, {
           
              headers: {
                Authorization: `Bearer ${this.$store.state.token}`,
              },
            });
            console.log(this);


            if (response.data.status === 'true') {
              this.homeInfo = response.data.info[0]; 
              
              const concatenatedData = {
                text_es: this.homeInfo.text_es || '',
                photo: `../assets/${this.homeInfo.photo}`, 
                seo_img: this.homeInfo.seo_img || '',
                updated_by: this.homeInfo.updated_by || '',
              };

          console.log(concatenatedData);
            }
          } catch (error) {
            console.error('Error fetching home info:', error);
          }
        },
        async fetchPricingData() {
          try {
            const response = await axios.post('https://webapi.hvhdesigner.com/api/get-pricing', {}, {
              headers: {
                Authorization: `Bearer ${this.$store.state.token}`,
              },
            });

            if (response.data.status === 'true') {
              this.pricingData = response.data.pricing;
            }
          } catch (error) {
            console.error('Error fetching pricing data:', error);
          }
        },
      },
      
      mounted() {
        this.$store.dispatch('fetchToken');

        setTimeout(()=>{
          this.fetchPricingData();
          this.fetchHomeInfo();
        }, 1000);

      },
    };
  </script>
  
  <style >
 .ws img{
  width: 451px;
 }
  main {
    background-color: #f9f9f9;
    padding: 40px 22% 10% 22%;
    text-align: justify;
    display: flex;
    flex-direction: column; 
    font-family: Arial, Helvetica, sans-serif;
  }
  .start{
    display: flex;
  }
  .start-text{
    max-width: 65%;
    justify-content: space-between;
    display: flex;
    flex-direction: column; 
  }
  h1{
    font-size: 24px;
  }
  span{
    font-size: 16px;
    font-weight: 500;
    color: #000000;
  }
  .start-img img{
    max-height: 500px;
    max-width: 100%;
    margin-top: 5%;
    margin-left: 35%;  
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
  width: 205px;
  border: none;
  padding: 14px; 
  cursor: pointer;
  position: relative; 
  overflow: hidden; 
  z-index: 1;
  font-size: 15px;
  font-weight: 600;


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
.button1 span, .button2 span {
  position: relative;
  z-index: 1; 
}

.button1:hover::after {
  right: 0; 
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
  
.pricing{
  display: flex;
  flex-direction: column; 
  justify-content: center;
}
.procong-name{
  text-align: center;
  color: #6c757d;
  padding-top: 100px ;
  padding-bottom: 5px;
  font-size: 26px;
  font-weight: 700;
  margin-left: 150px;
}
.windows{
  display: flex;
  padding: 1%;
}
.window{
  width: 35%;
  padding:5%;
  cursor: pointer;
  box-shadow: 1px 1px 8px 0 rgb(175 167 167 / 88%),
              0 6px 20px 0 rgb(140 133 133 / 12%);
  flex: 0 0 33.3333333333%;
  box-sizing: border-box;
  position: relative;
  width: 100%;

  margin: 1.5rem !important;
  text-align: center;
}
.name{
  font-weight: bold;
  color: #f52c2f;
  font-size: 35px !important;
  text-align: center;
  box-sizing: border-box;
  line-height: 1.5;
}
.about{
  text-align: center;
  justify-content: center;
  color: #6c757d;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
}
.mounth-year{
  color: #000;
  font-weight: 500;
}
.windows-img{
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-top: 6%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: left;
}
.windows-img img{
  float: left;
  height: 423px;
  width: 100% !important;
  margin: 0 !important;
  max-width: 100%;
  object-fit: contain;
  vertical-align: middle;
  border-style: none;
}
.windows-img2{
  width: 100%;

}
.windows-information1 {
  padding-top: 1%;
  padding: 5% 5% 0 5%;
  flex: 0 0 80.6666666667%;
  max-width: 70.6666666667%;

}
.windows-information1 h1{
  padding-bottom: 5%;
}
.windows-information1 p span{
  color: #000000;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 10px !important;
  font-size: 1rem;
}
li{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}
hr{
  margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgb(0 0 0 / 28%);
}
.end-max{
  display: flex;
  height: auto;
  display: flex;
  flex-wrap: wrap;
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
/* .blog:hover{
  text-decoration: ;
} */
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

@media only screen and (max-width: 1340px){
  .procong-name{
    margin-left: 220px;
  }
}

@media only screen and (max-width: 1200px){
  main{
    padding: 0;
  }

  .start{
    padding: 40px 22% 10% 22%;

  }
  

  .ws{
    padding: 40px 22% 10% 22%;

  }
  .wss{
    padding: 0 150px 0 10px;
  }
  .procong-name{
    padding-top: 0;
  }
  
  .hr{
    margin:  0 0 20px 22%;

  }
  hr{
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgb(0 0 0 / 28%);
  }
  .end-max{
    margin-left: 20%;
  }
  .procong-name{
    margin-left: 0;
  }
}

@media only screen and (max-width: 877px){
  .wss{
    display: flex;
    flex-direction: column;
    padding: 40px 22% 10% 22%;
  }
  .end-max{
    padding-top: 30px;
  }
  .step-img{
    width: 93%;
  }
  .procong-name{
    margin-left: 50px;
  }
  .end-max{
    margin-left: 5%;
  }
  .end{
    width: 100%;
  }
}
@media only screen and (max-width: 1406px){
  .windows-img2 img{
    float: right;
    height: 362px !important;
    margin: 30px;
    width: 325px !important;
  }
}
@media only screen and (max-width: 1190px){
  .windows-img2 img{
    float: right;
    height: 344px !important;
    margin-left: 30px;
    padding-top: 40px;
    width: 291px !important;
  }
}
@media only screen and (max-width: 1190px){
  .windows-img2 img{
    float: right;
    height: 300px !important;
    margin-left: 30px;
    padding-top: 40px;
    width: 260px !important;
  }
}
@media only screen and (max-width: 953px){
  .windows-img2 img{
    float: right;
    height: 250px !important;
    margin-left: 30px;
    padding-top: 40px;
    width: 230px !important;
  }
}

@media only screen and (max-width: 767px){
  .start{
    display: flex;
    flex-direction: column-reverse;
  }
  .start{
    padding: 0 0 5px 10%;
  }
  .start-text{
     max-width: 90%; 
 }
  .start-img img{
    margin-left: 0 !important;
    width: 80%;
    padding: 0 20px;
  }
  .wss{
    margin: 0 20px;
  }
  .procong-name{
    margin-top: 7%;
  }
  .ws{
    padding: 0;
    margin-left: 0;
  }
  .windows-information1{
    max-width: 45%;
  }
  .windows-img2 img{
    width: 250px !important;
    height: 250px !important;
    padding-top: 50px;
  }
}
  @media only screen and (max-width: 575px){
  .ws{
    display: flex;
    flex-direction: column;
  }
  .windows-img, .windows-information1{
    max-width: 900px;
  }
  .windows-img2 img{
    float: left !important;
    height: 350px !important;
    width: 350px !important;
    padding-left: 20px !important;
  }
  
}

</style>
  