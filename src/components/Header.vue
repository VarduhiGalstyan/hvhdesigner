<template>
    <header >
        <div class="header">
            <div class="img">
                <img 
                    :src="require('../assets/logo-1644232788.jpeg')" 
                    alt="Header Image" 
                    class="header-image" 
                    @click="navigateTo('main')" 
                />   
            </div>
            
            <nav class="nav">
                <ul>
                    <li @mouseover="setActive('3dParts')" @mouseleave="setActive('')" :class="{ active: activeLink === '3dParts' }" @click="navigateTo('3dParts')">3D Parts</li>
                    <li @mouseover="setActive('brands')" @mouseleave="setActive('')" :class="{ active: activeLink === 'brands' }">brands</li>
                    <li @mouseover="setActive('resources')" @mouseleave="setActive('')" :class="{ active: activeLink === 'resources' }">resources</li>
                    <li @mouseover="setActive('faq')" @mouseleave="setActive('')" :class="{ active: activeLink === 'faq' }">faq</li>
                    <li @mouseover="setActive('contact')" @mouseleave="setActive('')" :class="{ active: activeLink === 'contact' }">contact</li>
                </ul>
            </nav>
            <div class="log-reg">
                <div class="LoginRegister">
                <li class="login">
                    <a href="#" class="login-link">Login</a>
                </li>
                <li class="register">
                    <a href="#" class="login-link" style="cursor:pointer;">Register</a>
                   </li>
                </div>
            </div>
            
        </div>
    </header>
  </template>
  
  <script>
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
      navigateTo(link) {
        if (link === '3dParts') {
          this.$router.push('/gear-reducers'); // Navigating to Gear Reducers
        } else if (link === 'main') {
          this.$router.push('/'); // Navigating to the main page
        }
      },
    },
  };
  </script>
  
  <style>
  
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
    line-height: 1.5em;
    color: #333;
    text-transform: uppercase;
    padding: 14px 10px;
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
    color: red; /* Active link color */
  }
  .log-reg{
    padding-left: 5%;
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
    background-color: #f9f9f9;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 1px solid #ccc;
    color: #333;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
  }
  .register{
    list-style: none;
    background-color: #f9f9f9;
    padding-left: 15px;
    padding-right: 15px;
    /* border-right: 1px solid #ccc; */
    color: #333;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
  }
  a{
    display: none;
  }
  .login-link{
    display: block;
    float: none;
    height: auto !important;
    line-height: 1.5em;
    color: #333;
    font-size: 1em !important;
    padding: 14px 5px !important;
  }
  </style>
  