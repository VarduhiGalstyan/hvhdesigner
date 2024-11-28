<template>
    <div class="top">
      <div v-html="brandInfo.content"></div>

    </div>
  
    <div class="max">
      <div v-for="brand in brands" :key="brand.id" class="cell">
        <img :src="`https://hvhindustrial.com/images/frontend_images/brands/${brand.filename}`" :alt="brand.alt" />
      </div>
    </div>
</template>

<script>
import axios from 'axios'; 

export default {
    data() {
        return {
            brands: [], 
            brandInfo: { content: '' },
        };
    },
  
  computed: {
    token() {
      return this.$store.state.token; 
    },
  },
   
  mounted() {
    this.fetchBrandsInfo();
    this.fetchBrands();
  },

  methods: {
    async fetchBrandsInfo() {
      try {
        const response = await axios.post('https://webapi.hvhdesigner.com/api/get-brand-info', {}, {
          headers: {
            'Authorization': `Bearer ${this.token}`,
          },
        });

        if (response.data.status === "true") {
          this.brandInfo = response.data.info; // Storing brand info (content)
        }
      } catch (error) {
        console.error('Error fetching brand information:', error);
      }
    },
    
    async fetchBrands() {
      try {
        const response = await axios.post('https://webapi.hvhdesigner.com/api/get-brands', {}, {
          headers: {
            'Authorization': `Bearer ${this.token}`, 
          },
        });

        if (response.data.status === "true") {
          this.brands = response.data.brands; 
        }
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
  },
}
</script>

<style scoped>
.top{
  padding: 40px 20% 4% 22%;
  text-align: center;
  display: flex;
  flex-direction: column ;
  /* gap:10px; */
  font-family: Arial, Helvetica, sans-serif;
  /* flex-wrap: wrap;
  width: 70%; */
}
.max{
    
  padding: 10px 10% 4% 20%;
  text-align: justify;
  display: flex;
  gap:25px;
  font-family: Arial, Helvetica, sans-serif;
  flex-wrap: wrap;
  width: 100%;
}
.cell{
  width: 15%;
  height: 130px;
}
span{
  margin-top: 40px;
  display: block;
  text-align: center;
  font-size: 16px;
  height: 1px;
}
img{
  width: 100%;
  height: 75px;
  object-fit: contain;
}

@media only screen and (max-width: 1650px){
  .max{
    padding-left: 19%;
  }
}


@media only screen and (max-width: 1444px){
  .cell{
    width: 15%;
  }
  .max{
    padding-left: 20%;
  }
}
@media only screen and (min-width: 1279px){
    .max{
        width: 70%;
    }
}
@media only screen and (max-width: 1279px){
.max{
  padding: 10px 0% 4% 5%;
  width: 95%;
}
.cell{
    width: 20%;
  }
}

@media only screen and (max-width: 1060px){
  .cell{
    width: 22%;
  }
}
@media only screen and (max-width: 834px){
  .cell{
    width: 31%;
  }
  .max{
    padding-top: 40px;
  }
}
@media only screen and (max-width: 698px){
  .cell{
    width: 45%;
  }
}

</style>
