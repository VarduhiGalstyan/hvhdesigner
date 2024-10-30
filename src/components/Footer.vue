<template>
    <footer>
      <div class="footer-left">
        <div class="2divMejin">

          <div class="top">

            <div class="top-left">
              <img 
                :src="require('../assets/siteseal_gd_3_h_l_m.gif')" 
                style="cursor: pointer; cursor: hand"
                alt="SIS site seal" 
                class="header-image" 
               /> 
            </div>
            <div class="top-center">

            </div>
            <div class="top-right">

            </div>

          </div>
          <div class="down">
            <div class="down-left"></div>
            <div class="down-center"></div>
            <div class="down-right"></div>
          </div>
        </div> 
      </div>
      <div class="footer-center">
        © 1994 - 2024, HVH Industrial. All Rights Reserved
      </div>
      <div class="footer-right">
        Design & Development
      </div>
    </footer>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .footer-left {
    flex: 1;
  }
  .footer-center {
    flex: 2;
    text-align: center;
  }
  .footer-right {
    flex: 1;
    text-align: right;
  }
  </style>
  