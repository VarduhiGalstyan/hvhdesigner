<template>
    <footer>
      <div class="footer-left">
        <!-- <img :src="require('../assets/footer-image.png')" alt="Footer Image" /> -->
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
  