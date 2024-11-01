<template>
  <main>
    <div class="start">
        <div class="start-text">
          <div>
            <p>
              <h1>Engineering Design Software with a Library of Industrial 3D Models</h1>  
            </p>
            <p>
              <span>
                Designing equipment has never been easier. HVH Designer is a web-based, affordable 3D CAD modeling software that has a large library of standard 3D models by our partner manufacturers.
              </span>
            </p>
            <p>
              <span>
                Engineers spend hours to find the right component for their project, then they spend hours to get the 3D model to use in their 3D assembly, then purchasing department spends hours looking for suppliers for those components. 
              </span>
            </p>
            <p>
              <span>
                We have solved all those issues for you. HVH created powerful search tools to make the search process easier. For every component you use from our liberty, HVH is an authorized distributor of the manufacturer of that component. We will have the best price and lead time for you.             
              </span>
            </p>
            <p>
              <span>
                HVH Designer is created by engineers for engineers, so you can spend your time on innovation and creativity, not searching for components and suppliers.              </span>
            </p>
          </div>
          <div class="buttons">
            <div>
              <button class="button1">REQUEST FREE TRIAL</button>
            </div>
            <div>
              <button class="button2">REQUEST A DWMO</button>
            </div>
          </div> 
        </div>
        <div class="start-img">
          <img src="../assets/photo-1650836908.png" alt="photo-1650836908.png">
        </div>
    </div>
    <div>
      fdgvh
    </div>
  </main>
</template>
  
  <script>
  export default {};
  </script>
  
  <style>
  main {
    padding: 10px 20% 10% 22%;
    text-align: justify;
    display: flex;
    flex-direction: column; 
    font-family: Arial, Helvetica, sans-serif;
  }
  .start{
    display: flex;/**մեինները կողք կողքի */
  }
  .start-text{
    max-width: 65%;
    justify-content: space-between;
    display: flex;
    flex-direction: column; 
  }
  h1{
    font-size: 24px;
  }
  span{
    font-size: 16px;
    font-weight: 500;
    color: #000000;
  }
  .start-img img{
    max-height: 500px;
    max-width: 100%;
    margin-top: 25%;
    margin-left: 35%;  
  }
  
  .buttons {
    display: flex;
    gap: 10px; /* Space between buttons */
  }

.button1 {
  background-color: #828282; 
  border: none;
  color: #fff; 
  padding: 10px 20px; 
  cursor: pointer;
  position: relative; 
  overflow: hidden; 
}


.button1::after {
  content: '';
  position: absolute;
  top: 0;
  right: -100%; 
  width: 100%; 
  height: 100%; 
  background-color: #424442; 
  transition: right 0.4s ease; 
  color: #fff !important;

}

.button1:hover::after {
  right: 0; 
    color: #fff ;
}

.button2 {
  background-color: white; 
  border: 2px solid red; 
  color: red; 
  padding: 10px 20px; 
  cursor: pointer;
  position: relative; 
  overflow: hidden;
}

.button2:hover {
  /* background-color: red;  */
  color: white; 
}

.button2::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: red; 
  transform: translate(-50%, -50%) scale(0); 
  transition: transform 0.4s ease; 
  z-index: 0;
}
.button2:hover::before {
  transform: translate(-50%, -50%) scale(1); 
}

.button2 span {
  position: relative;
  z-index: 1; 
}
  
  </style>
  