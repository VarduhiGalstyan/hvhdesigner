import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      token: null,  
    };
  },
  getters: {
    getToken: (state) => state.token,  
  },
  mutations: {
    setToken(state, token) {
      state.token = token; 
    },
  },
  actions: {
    async fetchToken({ commit }) {
      try {
        const loginData = {
          email: 'apihvh@designer.com',
          password: ')jM2nh;8XMeg3w&7%xWX7ek2;Uw,robUKzfS4oLb}\'H1j.;bt)',
        };
        
        const response = await axios.post('https://webapi.hvhdesigner.com/api/get-token', loginData);
        
        if (response.data.status) {
          commit('setToken', response.data.token);
          console.log('Successfully logged in:', response.data.token);
        } else {
          console.log('Login failed');
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  },
});

export default store;
