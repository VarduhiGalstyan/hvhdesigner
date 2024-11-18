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
                <ul v-show="!menuVisible">
                    <li :class="{ active: activeLink === '3dParts' }" @click="setActive('3dParts')"  style="width: max-content;">3D Parts</li>
                    <li :class="{ active: activeLink === 'brands' }" @click="setActive('brands')">brands</li>
                    <li :class="{ active: activeLink === 'resources' }" @click="setActive('resources')">resources</li>
                    <li :class="{ active: activeLink === 'faq' }" @click="setActive('faq')">faq</li>
                    <li :class="{ active: activeLink === 'contact' }" @click="setActive('contact')">contact</li>
                </ul>

                <div class="hamburger" @click="toggleMenu">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </div>

              <ul v-show="menuVisible" class="mobile-menu">
                <li :class="{ active: activeLink === '3dParts' }" @click="setActive('3dParts')" style=" border-bottom: 1px solid #7973731f; margin-left: 0;">3D Parts</li>
                <li :class="{ active: activeLink === 'brands' }" @click="setActive('brands')" style=" border-bottom: 1px solid #7973731f; margin-left: 0;">brands</li>
                <li :class="{ active: activeLink === 'resources' }" @click="setActive('resources')" style=" border-bottom: 1px solid #7973731f; margin-left: 0;">resources</li>
                <li :class="{ active: activeLink === 'faq' }" @click="setActive('faq')" style=" border-bottom: 1px solid #7973731f; margin-left: 0;">faq</li>
                <li :class="{ active: activeLink === 'contact' }" @click="setActive('contact')" style=" border-bottom: 1px solid #7973731f; margin-left: 0;">contact</li>
                <li :class="{ active: activeLink === 'login' }" @click="setActive('login')" style=" border-bottom: 1px solid #7973731f; margin-left: 0;">Login</li>
                <li :class="{ active: activeLink === 'register' }" @click="openRegisterModal" >Register</li>
              </ul>
            </nav>
            <div class="log-reg" >
                <nav class="LoginRegister" >
                  <ul>
                    <li  class="login" 
                      :class="{ active: activeLink === 'login' }" 
                      @click="setActive('login')" >Login
                    </li>
                    <li class="register" 
                      :class="{ active: activeLink === 'register' }" @click="openRegisterModal">
                        Register
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
        <Modal ref="registerModal" />
    </header>
  </template>
  
  <script >
  import Modal from './Modal.vue';
  export default {
    components:{
      Modal,
    },
    data() {
      return {
        activeLink: '',
        menuVisible: false,
      };
    },
    methods: {
      setActive(link) {
        this.activeLink = link;
        this.menuVisible = false;
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
      toggleMenu(){
        this.menuVisible = !this.menuVisible;
      },
      openRegisterModal() {
        this.$refs.registerModal.openRegisterModal();  // Կանչել Modal-ի openRegisterModal մեթոդը
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
    box-shadow: 1px 1px 8px #afa7a7e0, 0 6px 20px #8c85851f !important;
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
    /* flex-grow: 1; */
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
    font-size: 1.15em;
    line-height: 1em;
    color: #333;
    text-transform: uppercase;
    padding: 2% 10px 2% 0;
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
    padding-left: 13%;
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
  .hamburger {
    background-color: #333;
    border: 1px solid transparent;
    border-radius: 4px;
    float: right;
    padding: 7px 10px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    margin-top: -20px;
    margin-left: 80%;
    cursor: pointer;  
    justify-content: space-between;
    position: absolute;
}

.icon-bar {
  background-color: #fff;
    border-radius: 1px;
    display: block;
    height: 2px;
    margin: 3px 0;
    width: 22px;
}

.mobile-menu {
  align-items: start;
    display: flex;
    height: 100%;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    position: absolute;
    width: 100%;
    z-index: 9;
    
    background: #fff;
    box-shadow: 1px 1px 8px #afa7a7e0, 0 6px 20px #8d86861f;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 10%;
    height: max-content;
    width: 60%;

    margin-top: -25px;
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
  .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-clip: padding-box;
    background-color: #fefefe;
    background-color: #fff;
    border: 1px solid #888;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    outline: 0;
    padding: 20px;
    pointer-events: auto;
    position: relative !important;
    width: 30%;

}
.close-btn{
  color: #636161;
    display: flex;
    float: right !important;
    font-size: 1.35rem;
    font-weight: 700;
    justify-content: end;
    line-height: 1;
    opacity: .5;
    text-shadow: 0 1px 0 #fff;
}

.modal-text {
  line-height: 1.2;
  color: red;
  font-size: 32px;
    font-weight: 700;
    padding: 1rem !important;
    text-align: center !important;
}


.close-btn:hover {
  color: #000000;;
  cursor: pointer;
  text-decoration: none;
}
  @media only screen and (max-width: 1111px){
    .log-reg{
      padding-left: 5% !important;
    }
  }
  @media only screen and (max-width: 980px){
  nav li{
    font-size: 1em;
    font-weight: 500;
    margin-left: 10px;
  }
  .log-reg
  {
    padding-left: 5%;
  }
  .LoginRegister{
    height: 60px;
    font-size: 1.2em;
  }
  nav ul{
    padding-left: 1px;
  }
  }
  @media only screen and (min-width: 768px){
    .hamburger{
      display: none;
    }
  }

  @media only screen and (max-width: 768px){
    .hamburger {
    display: flex;
  }

  nav ul {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .log-reg {
    padding-left: 5%;
  }

  .LoginRegister {
    height: 60px;
    font-size: 1.2em;
  }
  .header-image{
    height: 50px;
    
  }
  } 

</style>
  