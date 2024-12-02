<template>
  <div class="max">
    <h1>Frequently Asked Questions</h1>

    <div v-for="faq in faqs" :key="faq.id" class="class">
      <div class="class1">
        <button @click="toggle(faq.id)" class="card">
          {{ faq.question }}
          <span style="color: red; font-weight: 900;">
            {{ isRotated[faq.id] ? '&#708;' : '&#709;' }}
          </span>
        </button>
        <p v-if="isRotated[faq.id]" class="extra-text" v-html="faq.answer"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      faqs: [],
      isRotated: {},
    };
  },
  mounted() {
    this.$store.dispatch('fetchToken');

    setTimeout(()=>
      this.fetchFAQs()
    , 1000); 
  },
  
  methods: {
    async fetchFAQs() {
      try {

        const response = await axios.post('https://webapi.hvhdesigner.com/api/get-faqs', {}, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });

        if (response.data.status === "true") {
          this.faqs = response.data.faqs;
          this.isRotated = this.faqs.reduce((acc, faq) => {
            acc[faq.id] = false;
            return acc;
          }, {});
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    },
    toggle(faqId) {
      this.isRotated[faqId] = !this.isRotated[faqId];
    },
  },
};
</script>

<style scoped>
h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
    text-transform: capitalize;
}

.class {
    gap: 10px;
}

.max {
    padding: 40px 20% 16% 22%;
    font-family: Arial, Helvetica, sans-serif;
}

.card {
    background: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 20px;
    height: 60px;
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
    border-top: 1px solid rgba(0, 0, 0, .125);
    border-bottom: 1px solid rgba(0, 0, 0, .125);
    color: #494848;
}

.extra-text {
    margin-top: 10px;
    font-size: 16px;
    color: #555;
}
@media only screen and (max-width: 1757px){
  .max{
    padding: 40px 10% 10% 15%;
  }
}

@media only screen and (max-width: 1370px){
  .max{
    padding: 40px 10% 10% 5%;
  }
  
}
@media only screen and (max-width: 1280px){
  .max{
    padding-left: 10px;
  }
}

@media only screen and (max-width: 611px){

  .resources-top-left img{
    margin-left: 0;
  }
}
</style>

