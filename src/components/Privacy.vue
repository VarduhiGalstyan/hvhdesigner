<template>
    <div class="max">
        <div v-if="privacyPolicyContent" v-html="privacyPolicyContent"></div>
        <div v-else>
            <span>[object Object]</span>
        </div>
    </div>
     
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            privacyPolicyContent: '', 
        };
    },
    
    mounted() {
        this.$store.dispatch('fetchToken');

        setTimeout(()=>
            this.fetchPrivacyPolicy()
        , 1000); 
    },
    methods: {
        async fetchPrivacyPolicy() {
            try {

                const config = {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`,
                    },
                };

                // Make the POST request to fetch the privacy policy
                const response = await axios.post(
                    'https://webapi.hvhdesigner.com/api/get-privacy-policy',
                    {},
                    config
                );

                if (response.data.status === "true") {
                    // Store the content in a variable
                    this.privacyPolicyContent = response.data.info.content;
                } else {
                    console.error("Failed to load privacy policy");
                }
            } catch (error) {
                console.error("Error fetching privacy policy:", error);
            }
        },
    },
};
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
a{
    color: #3498db;
    text-decoration: none;
}
h1{
    color: red;
    font-size: 34px;
    font-weight: 300;
    text-align: center;
}
h2{
    font-size: 20px;
    color: #77787b;
}
span{
    color: #77787b;
    display: block;
    line-height: 25px;
}
li{
    color: #77787b;
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