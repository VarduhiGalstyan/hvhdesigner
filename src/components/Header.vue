<template>
    <header >
        <div class="header">
            <div class="img">
                <img 
                    :src="require('../assets/logo-1644232788.jpeg')" 
                    alt="Header Image" 
                    class="header-image" 
                    @click="setActive('main')" 
                />   
            </div>
            
            <nav class="nav">
                <ul>
                  
                    <li :class="{ active: activeLink === '3dParts' }" @click="setActive('3dParts')"  >3D Parts</li>
                    <li :class="{ active: activeLink === 'brands' }" @click="setActive('brands')">brands</li>
                    <li :class="{ active: activeLink === 'resources' }" @click="setActive('resources')">resources</li>
                    <li :class="{ active: activeLink === 'faq' }" @click="setActive('faq')">faq</li>
                    <li :class="{ active: activeLink === 'contact' }" @click="setActive('contact')">contact</li>
                </ul>
            </nav>
            <div class="log-reg">
                <nav class="LoginRegister">
                  <!-- <ul> -->
                    <li class="login" 
                      :class="{ active: activeLink === 'login' }" 
                      @click="setActive('login')">Login
                    </li>
                    <li class="register" 
                      :class="{ active: activeLink === 'register' }">
                        Register
                    </li>
                  <!-- </ul> -->
                </nav>
            </div>
            
        </div>
    </header>
  </template>
  
  <script >
  export default {
    data() {
      return {
        activeLink: '',
      };
    },
    methods: {
      setActive(link) {
        this.activeLink = link;
      },
      setActive(link) {
        if (link === '3dParts') {
          this.activeLink = '3dParts';
          this.$router.push('/gear-reducers'); 
        } else if (link === 'main') {
          this.activeLink = 'main';
          this.$router.push('/'); 
        } else if (link == 'brands'){
          this.activeLink = 'brands';
          this.$router.push('/brands');
        } else if (link == 'resources'){
          this.activeLink = 'resources';
          this.$router.push('/resources');
        } else if (link == 'faq'){
          this.activeLink = 'faq';
          this.$router.push('/faq');
        } else if (link == 'contact'){
          this.activeLink = 'contact';
          this.$router.push('/contact');
        } else if (link == 'login'){
          this.activeLink = 'login';
          this.$router.push('/login');
        } 
      },
    },
  };
  </script>
  
  <style scoped>
  
  header {
    padding: 0;
    background-color: #fff !important;
    width: 100%;
    background: #fff;
    z-index: 9;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    display: flex;
    /* display: flex;
    align-items: center; */
    /* padding-left: 20px; */
  }
  .header{
    width: 100%;
    background: #fff;
    z-index: 9;
    display: flex !important;
    width: 100%;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    padding: 0;
  }
  .img{
    width: 10%;
  }
  .header-image {
    height: 100px;
    cursor:pointer;
    width: 80px;
    height: 100px;
    object-fit: contain;
    margin: 0;
  }
  
  nav {
    flex-grow: 1; /* Allow nav to take the remaining space */
    justify-content: space-between;
  }
  
  nav ul {

    flex-direction: row;
    justify-content: space-between;
    display: flex;
    list-style: none;
    /* padding: 0;
    margin: 0; */
  }
  

  nav li {
    border-right: 1px solid #ccc;
    color: #333;
    font-size: 1.2em;
    line-height: 1em;
    color: #333;
    text-transform: uppercase;
    padding: 2% 10px 2% 1px;
    display: block;
    float: none;
    height: auto !important;   
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
    margin-left: 20px; /* Space between nav items */
    cursor: pointer;
  }
  
  nav li.active {
    color: red; 
}
  
  .log-reg{
    padding-left: 6%;
  }
  .LoginRegister{
    margin-left: 20px;
    align-items: center;
    background-color: #f9f9f9;
    /* padding-right: 30px; */
    padding-left: 0px;
    height: 50px;
    display: flex !important;
  }
  .login{
    list-style: none;
    text-transform: none  !important;
    /* background-color: #f9f9f9; */
    /* padding-left: px; */
    padding-right: 20px;
    border-right: 1px solid #ccc;
    color: #333;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
  }
  .register{
    list-style: none;
    border-right: 0px solid #ccc !important;
    text-transform: none  !important;
    /* background-color: #f9f9f9; */
    /* padding-left: 15px; */
    /* padding-right: 15px; */
    /* border-right: 1px solid #ccc; */
    color: #333;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
  }
  a{
    text-decoration: none;
  }

  li:hover {
    color: red;
  } 
  
</style>
  