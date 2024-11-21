import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import GearReducers from '../components/GearReducers.vue';
import Brands from '@/components/Brands.vue';
import Resources from '@/components/Resources.vue';
import Faq from '@/components/Faq.vue';
import Contact from '@/components/Contact.vue';
import Login from '@/components/Login.vue';
import Terms from '@/components/Terms.vue';
import Privacy from '@/components/Privacy.vue';
import About from '@/components/About.vue';
import Step from '@/components/Step.vue'; 

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/gear-reducers',
    name: 'GearReducers',
    component: GearReducers,
  },
  {
    path: '/brands',
    name: 'Brands',
    component: Brands,
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/step',
    name: 'Step',
    component: Step,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
