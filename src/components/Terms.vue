<template>
    <div class="max">
      <div v-if="termsContent">
        <div v-html="termsContent.content"></div>
      </div>
      <div v-else>
        <h2>[object Object]</h2>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
      termsContent: null,  
    };
  },

  mounted() {
    this.$store.dispatch('fetchToken');

    setTimeout(()=>
    this.fetchTermsAndConditions()
        , 1000); 
  },
  methods: {
    fetchTermsAndConditions() { axios.post('https://webapi.hvhdesigner.com/api/get-terms-and-conditions',{},{
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        )
        .then((response) => {
          if (response.data.status === 'true') {
            this.termsContent = response.data.info;  
          } else {
            console.error('Failed to load terms and conditions');
          }
        })
        .catch((error) => {
          console.error('Error fetching terms and conditions:', error);
        });
    },
  },
}
</script>

<style scoped>
.max{
    padding: 10px 20% 4% 22%;
    width: 60%;
    text-align: justify;
    display: flex;
    flex-direction: column; 
    font-family: Arial, Helvetica, sans-serif;
}
div{
    margin-bottom: 40px;
}
h1{
    color: red;
    font-size: 34px;
    font-weight: 200;
    text-align: center;
}
h2 ,div{
    font-size: 20px;
    color: #77787b;
}
span ,div{
    color: #77787b;
    display: block;
    line-height: 25px;
}
@media only screen and (max-width: 1650px){
  .max{
    padding: 10px 0 4% 15%;
    width: 75%;
  }
}
@media only screen and (max-width: 1200px){
  .max{
    padding: 10px 0 4% 7%;
    width: 85%;
  }
}


@media only screen and (max-width: 1060px){
  .max{
    padding: 10px 0 4% 0;
    width: 97%;
  }
}

</style>