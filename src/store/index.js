import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      token: null,  
      settings: null, //API 17
    };
  },
  getters: {
    getToken: (state) => state.token,  
    getSettings: (state) => state.settings,
    getLogo: (state) => state.settings?.logo, // Get the logo URL
  },
  mutations: {
    setToken(state, token) {
      state.token = token; 
    },
    setSettings(state, settings) {
      state.settings = settings;  
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

  async fetchSettings({ commit, state }) {
    try {
      if (!state.token) {
        console.error("No token available, cannot fetch settings");
        return;
      }
      
      const response = await axios.post(
        'https://webapi.hvhdesigner.com/api/get-settings',
        {},
        {
          headers: {
            Authorization: `Bearer ${state.token}`, 
          }
        }
      );

      if (response.data.status) {
        commit('setSettings', response.data.settings);  
        console.log('Settings fetched successfully:', response.data.settings);
      } else {
        console.log('Failed to fetch settings');
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  },
});

export default store;
