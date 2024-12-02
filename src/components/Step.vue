<template>
    <div class="max">
        <h1>What is a STEP File Format</h1>
        <div v-if="resource" class="resource-content">
            <h2 >{{ resource.title_en }}</h2>
            <img :src="'https://webapi.hvhdesigner.com/uploads/images/photo-1651197310.jpg'" 
                alt="step-img" 
                style="height: 80% !important; width: 80% !important; margin-top: 30px; margin-left: 10%;"
            />
            <div v-html="resource.desc_en" style="color: #77787b;"></div>            
        </div>


        <div class="social-container">
            <div class="social-item">
                <a href="https://www.facebook.com/" @click.prevent="shareOnFacebook">
                    <img src="../assets/Facebook_logo.png" alt="FB" class="social-icon" />
                </a>
            </div>
            <div class="social-item">
                <a href="https://am.linkedin.com/" @click.prevent="shareOnLinkdin">
                    <img src="../assets/download.png" alt="LinkedIn" class="social-icon" />
                </a>
            </div>
            <div class="social-item">
                <a href="https://x.com/?lang=en" @click.prevent="shareOnTwiiter">
                    <img src="../assets/download-t.png" alt="Twitter" class="social-icon"/>
                </a>
            </div>
        </div>
       
        <div style="padding-bottom: 30px;
           border-bottom: 1px solid rgb(221, 221, 221);">
        </div>
        <div class="left-right">
            <div class="VladImg">
                <img class="imgVlad" src="../assets/image-1645767480.png
                " alt="">
            </div>
            <div class="VladInfo">
                <p class="name">Vladimir Harutyunyan</p>
                <span>Vladimir Harutyunyan is the founder of HVH Industrial. He has masters degree in mechanical engineering and over 10 years of experience in mechanical power transmission field. </span>
                <p></p>
                <span>Feel free to connect with Vlad on Linkedin: <a href="https://www.linkedin.com/in/vladharut" style="color: #2980b9;">https://www.linkedin.com/in/vladharut</a></span>
                <p></p>
            </div>
        </div>
        <div style="padding-bottom: 30px;
           border-bottom: 1px solid rgb(221, 221, 221);">
        </div>
        <h2>The Latest</h2>
    </div>
</template>

<script>
export default {
  data() {
    return {
      token: this.$store.state.token, 
      resource: null, 
    };
  },
  methods: {
    shareOnFacebook() {
      const shareURL = "https://www.facebook.com/";
      window.open(shareURL, "_blank", "width=600,height=400");
    },
    shareOnLinkdin() {
      const shareURL = "https://www.linkedin.com/in/vladharut/";
      window.open(shareURL, "_blank", "width=600,height=400");
    },
    shareOnTwiiter() {
      const shareURL = "https://x.com/?lang=en";
      window.open(shareURL, "_blank", "width=600,height=400");
    },
    async fetchResourceByUrl(url) {
      const apiUrl = 'https://webapi.hvhdesigner.com/api/get-resources-by-url';
      
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.token}`, 
          },
          body: JSON.stringify({
            url: url, 
          }),
        });
        
        const data = await response.json();
        
        if (data.status === 'true') {
          this.resource = data.resource; 
        } else {
          console.error('Failed to fetch resource:', data);
        }
      } catch (error) {
        console.error('Error fetching resource:', error);
      }
    },
  },
  mounted() {
    this.fetchResourceByUrl('freewheels-design-and-applications'); 
  },
};
</script>

<style scoped>
.social-container div a img{
    border-radius: 5px;
}
.social-container div a img:hover{
    opacity: 0.5;
}

.social-container {
  margin-left: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: fixed;
}

.social-item {
  width: 30px;
  height: 30px;
}
.social-item img {
  object-fit: contain;
}
.social-icon {
  width: 100%;
  height: auto;
}
h2{
    color: rgb(122, 115, 115);
    font-size: 25px;
    margin-top: 25px;
    margin-bottom: -20px;
    font-weight: 500;
    line-height: 1.2;
    text-align: left;

}
.name{
    margin-top: -5px;
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: .5rem;    
}
.VladInfo{
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
    font-size: 1rem;
}
.left-right{
    display: flex;
    gap: 20px;
    padding-top: 20px;
    padding-top: 40px;

}
.VladImg{
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%;
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
}
.imgVlad{
    border-radius: 50%;
    height: 160px;
    object-fit: cover;
    width: 160px;
    border-style: none;
    max-width: 100%;
    vertical-align: middle;

}
.max{
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 96px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

h1{
    font-size: 2.25rem;
    font-weight: 500;
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
    text-transform: capitalize;
}
.stepimgdiv{
    box-sizing: border-box;
    height: 400px;
    margin: auto;
    padding-bottom: 30px;
    width: -moz-fit-content;
    width: fit-content;
}
.stepimg{
    object-fit: contain;
    border-style: none;
    max-width: 100%;
    vertical-align: middle;
    height: 100%;
}
span{
    color: #77787b;
    font-weight: 500;
    line-height: 1.6;
    text-align: left;
}
p{
    color: #77787b;
    font-weight: 500;
    line-height: 1.6;
    text-align: left;
    font-size: 18px;
}
.p{
    color: #7f8c8d;
    font-size: 25px;
    font-weight: 900;
    padding-top: 50px;
    padding-bottom: 50px;
}
strong{
    font-size: 18px;
    font-weight: bolder;
    color: #77787b;
}
@media only screen and (min-width: 1112px){
    .max{
        max-width: 993px;
    }
}
@media only screen and (max-width: 1112px){
    .max{
        max-width: 900px;
    }
}
@media only screen and (max-width: 1007px){
    .max{
        max-width: 850px;
    }
}
@media only screen and (max-width: 950px){
    .max{
        max-width: 700px;
    }
}
@media only screen and (max-width: 800px){
    .max{
        max-width: 650px;
    }
}
@media only screen and (max-width: 765px){
    .max{
        max-width: 605px;
    }
}
@media only screen and (max-width: 708px){
    .max{
        max-width: 559px;
    }
}
@media only screen and (max-width: 656px){
    .max{
        max-width: 520px;
    }
}
@media only screen and (max-width: 619px){
    .max{
        max-width: 457px;
        
    }
}
@media only screen and (max-width: 570px){
    .left-right{
        flex-direction: column;
    }
    .VladImg{
        max-width: 45%;
    }
}
@media only screen and (max-width: 560px){
    .max{
        max-width: 450px;
        
    }
    
}
@media only screen and (max-width: 537px){
    .max{
        max-width: 404px;        
    }
}






</style>