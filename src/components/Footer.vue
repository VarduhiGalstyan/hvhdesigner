<template>
  <footer>
    <!-- <div class="footer"> -->
      <div class="add2div">

        <div class="top">

          <div class="top-left">
            <img 
              :src="require('../assets/siteseal_gd_3_h_l_m.gif')" 
              style="cursor: pointer; cursor: hand"
              alt="SIS site seal" 
              class="footer-image" 
             /> 
          </div>

          <div class="center-right">
            <div class="top-center">  
              <div class="top-center-LeftTop">
                <ul>  
                  <li :class="{ active: activeLink === 'termsAndConditions' }" @click="setActive('terms')"  >Terms And Conditions</li>
                  <p></p>
                  <li :class="{ active: activeLink === 'privacyPolicy' }" @click="setActive('privacy')">Privacy Policy</li>
                </ul>
              </div>
              <div class="top-center-RigthDown">
                <ul>
                  <li :class="{ active: activeLink === 'about' }" @click="setActive('about')"  >About</li>
                </ul>  
              </div>
            </div>
            <div class="top-right">
              <a href="https://www.facebook.com/HVHindustrial">
                <img 
             ա     :src="require('../assets/fb.png')" 
                  style="cursor: pointer; cursor: hand"
                  alt="fb.png" 
                /> 
              </a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEd8W0HQZX4dQAAAZLho-5wBKrKX5xeSV5oWGXNfkxJJFAszaYDOVNc0oi0sCYHmCfq8kL15q6Qk_YUmzXwoqO3A9R97lxJXfZF8BtlTXiLuP_lIZMZeTB6wEeCdGrJveRggQU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhvh-industrial-solutions">
                <img 
                  :src="require('../assets/in.png')" 
                  style="cursor: pointer; cursor: hand"
                  alt="in.png" 
                /> 
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FHvhIndustrial">
                <img 
                  :src="require('../assets/tw.png')" 
                  style="cursor: pointer; cursor: hand"
                  alt="tw.png" 
                /> 
              </a>
              <a href="https://www.youtube.com/channel/UC9s1K1ULL4jEcg4WcWSGyiw">
                <img 
                  :src="require('../assets/y.png')" 
                  style="cursor: pointer; cursor: hand"
                  alt="y.png" 
                /> 
              </a>
            </div>
          </div>
        </div>

        <div class="down">
          <div class="down-left">
            <img 
              :src="require('../assets/amex.png')" 
              style="cursor: pointer; cursor: hand"
              alt="amex.png" 
              class="card1"
             /> 
             <img 
              :src="require('../assets/discover.png')" 
              style="cursor: pointer; cursor: hand"
              alt="discover.png" 
             /> 
             <img 
              :src="require('../assets/mastercard.jpg')" 
              style="cursor: pointer; cursor: hand"
              alt="mastercard.jpg" 
             /> 
             <img 
              :src="require('../assets/visa.png')" 
              style="cursor: pointer; cursor: hand"
              alt="visa.png" 
             /> 
          </div>
          
          <div class="down-center">
            © 1994 - 2024, HVH Industrial. All Rights Reserved
          </div>
          <div class="down-right">
            Design & Development- <a href="http://ww1.vectre.co/">Vectre CJSC</a>
          </div>
        </div>
      </div> 
    <!-- </div> -->
  </footer>
</template>

<script>
export default {
  data() {
    return {
      activeLink: '',
    };
  },
  methods: {
    setActive(link) {
      this.activeLink = link;
      if (link === 'terms') {
        this.$router.push('/terms');
      } else if (link === 'privacy') {
        this.$router.push('/privacy');
      } else if (link === 'about') {
        this.$router.push('/about');
      }
    },
  },
};
</script>

<style scoped>
footer {
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px ;
  padding-right: 30px !important;
  
}

.add2div {
  display: flex;
  flex-direction: column; 
}

.top {
  /* align-items: center; */
  margin-top: 30px;
  display: flex; /* down div-ի մեջ div-երը կողք կողքի */
  justify-content: space-between; /* div-երի միջև տարածություն */
  /* align-items: center;  */
}
.down{
  /* align-items: center; */
  margin-top: 10px;
  display: flex; /* down div-ի մեջ div-երը կողք կողքի */
  justify-content: space-between; /* div-երի միջև տարածություն */
  /* align-items: center;  */
}

.top-left, .down-left {
  flex: 0 0 25% ;
  max-width: 25%;  
}

.footer-image{
  height: 100px;
  cursor:pointer;
  max-width: 130px;
  margin-left: 30px;
  height: 100px;
  object-fit: contain;
}
.top-center{
  cursor:pointer;
}

.center-right {
  align-items: center;
  height: 70px;
  flex: 2; 
  display: flex;
  /* top-center div-ը՝ վերևում, top-right div-ը՝ ներքևում */
}
.top-center, .down-centen{
  max-width: 50%;  
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%;
  display: flex;
  justify-content: center;
}
.top-center-LeftTop{
  margin-right: 5%;
  height: 70px;
  font-weight: 500;
}
ul{
  list-style: none;
  font-size: 1rem;

}
p{
  margin-bottom: 10px !important;
  margin-top: 0;
}
.top-right{
  max-width: 25%;  
  display: flex;
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
  margin-left: auto;
}
.down-right{
  max-width: 25%;  
  display: flex;
  /* flex: 0 0 16.6666666667%; */
  max-width: 16.6666666667%;
  margin-left: auto;
  font-size: 14px;
}
.top-right a img{
  width: 100%;
  height: 70px;
}

/* down */
.down-left{
  display: flex;
  padding-left: 30px;
}
.down-left img{
  width: 15%;
  height: 70%;
  max-width: 100%;
  padding-right: 5px;
  margin-top: 9px;
}
.card1{
  margin-top: 0px !important;

  height: 100% !important;
  max-width: 100%;
}

.down-center {
  flex: 1.7;
  /* text-align: center; */
  margin-left: 14%;
}

.down-right a{
  color: #fff;
  font-weight: 600;  
}
.down-right {
  text-align: auto;
}
/* .top-center-LeftTop li:hover {
    text-decoration: underline;
} */



</style>
