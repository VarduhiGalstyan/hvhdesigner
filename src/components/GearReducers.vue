<template>
  <div class="max">
    <div v-for="part in parts" :key="part.id" class="cell">
      <img :src="part.imgUrl" :alt="part.title">
      <span>{{ part.title }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; 

export default {
  name: 'App',
  data() {
    return {
      parts: [], 
    };
  },
  
  methods: {
    async fetchParts() {
      try {
          const response = await axios.post(
            'https://webapi.hvhdesigner.com/api/get-3d-parts',
            {},
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.token}`,
              },
            }
          );
          if (response.data.status === 'true') {
            this.parts = response.data.parts.map((part) => ({
              id: part.id,
              title: part.title,
              imgUrl: `https://hvhindustrial.com/images/frontend_images/categories/${part.filename}`, 
            }));
          } else {
            console.error('Failed to fetch parts');
          }
        
      } catch (error) {
        console.error('Error fetching parts:', error);
      }
    },
  },
  mounted() {
    this.$store.dispatch('fetchToken');

    setTimeout(()=>
      this.fetchParts()
        , 1000); 
  },
};
</script>

<style scoped>
.max{
  max-width: 1220px;
  padding: 54px 0 10% 17.5%;
  text-align: justify;
  width: 100%;

  display: flex;
  gap:10px;
  font-family: Arial, Helvetica, sans-serif;
  flex-wrap: wrap;
  width: 100%;
}
.cell{
  width: 15%;
  height: 290px;
}
span{
  margin-top: 40px;
  display: block;
  text-align: center;
  font-size: 22px;
}
img{
  width: 100%;
  height: 150px;
  object-fit: contain;
}
@media only screen and (max-width: 1650px){
  .max{
    padding: 54px 0 10% 17.5%;  }
}
@media only screen and (max-width: 1477px){
  .max{
    padding: 54px 0 10% 11.5%;  }
}
@media only screen and (max-width: 1444px){
  .cell{
    width: 15%;
  }
  
}
@media only screen and (max-width: 1375px){
  .cell{
    width: 15%;
  }
  .max{
    padding: 54px 0 10% 6.5%;  }
}
@media only screen and (max-width: 1477px){
  .cell{
    width: 24%;
  }
}
@media only screen and (max-width: 1301px){
.max{
  padding: 54px 0 10% 2.5%;
}
}
@media only screen and (max-width: 1247px){
.max{
  padding: 54px 0 10% 0;
}
}


@media only screen and (max-width: 1060px){
  .max{
    width: 100%;
  }
  .cell{
    width: 24%;
  }
}
@media only screen and (max-width: 834px){
  .cell{
    width: 31%;
  }
}
@media only screen and (max-width: 698px){
  .cell{
    width: 45%;
  }
}

</style>


  