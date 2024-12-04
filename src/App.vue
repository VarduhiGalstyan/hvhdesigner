<template>
  <div id="app">
    <Header ></Header>
    <router-view ></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useStore } from 'vuex';

import { computed, onMounted } from 'vue';
import { useHead } from '@vueuse/head';

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      if (store.state.token) {
        store.dispatch('fetchSettings');
      }
    });

    const siteData = computed(() => store.getters.getSettings || {});

    useHead({
      title: computed(() => siteData.value.meta_title || 'huhbhjhb'),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.value.meta_description || 'vgvjhg'),
          name: `keywords`,
          content: computed(() => siteData.value.meta_keywords || 'rsyerdhg'),
        },
      ],
    });
    return{
      siteData
    };
  },
};
</script>

<style>
img{
  vertical-align: middle;
}
</style>
