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
    <div class="pricing">
      <div class="procong-name">Procong</div>
      <div class="windows">
        <div class="window">
          <span class="name">Free</span>
          <p></p>
          <span class="about">3D parts library</span>
          <p></p>
          <button class="button2">Buy now</button>
        </div>
        <div class="window">
          <span class="name">$29</span>
          <span class="mounth-year">/mouth</span>
          <p></p>
          <span class="about">Single user Cad software with our 3D parts library</span>
          <p></p>
          <button class="button2">Buy now</button>
        </div>
        <div class="window">
          <span class="name">$299</span>
          <span class="mounth-year">/year</span>
          <p></p>
          <span class="about">Single user Cad software with our 3D parts library</span>
          <p></p>
          <button class="button2">Buy now</button>
        </div>
      </div>
      <div class="windows">
        <div class="windows-img"> 
          <img src="../assets/1593812195566_1651022973.jpg" alt="image" style="float: left; height: 423px; max-width: 500px;">
        </div>
        <div class="windows-information1">
          <h1>What is HVH Desingner?</h1>
          <p>
            <span >HVH Designer is a web-based computer-aided design (CAD) software, developed by HVH Industrial Solutions. HVH Industrial is an industrial distributor focused on power transmission, motion control, and automation. We worked with our manufacturers to craft a comprehensive database of the 3D models of standard components of the offered products. </span>
          </p>
          <p><h2 style="font-size: 20px; line-height: 1.5; font-weight: bolder;">Time is valuable, so our focus is to save you time.</h2></p>
          <ul>
            <li>Easy to use CAD software, saves you time in the design process</li>
            <li>Powerful search tools save time when it comes to searching standard 3D models for your project</li>
            <li>Help with finding and selecting the right components</li>
            <li>Custom solutions tailored to your specific requirements</li>
            <li>With one click you can submit your bill of material for quotation</li>
            <li>Individual approach to every customer of every size. There are no small or big customers for us </li>
          </ul>
        </div>
      </div>
      <div class="windows">
        <div class="windows-information1">
          <h1 >What you can do with HVH Designer</h1>
          <ul>
            <li>HVH Designer is a fully online design solution you can access from any web browser. No download is required. </li>     
            <li>Design with mathematical precision. HVH Designer is powered by Siemens® Parasolid®, the same engine that drives SOLIDWORKS, Solid Edge, Onshapem, Siemens NX, MasterCAM, and more.</li>
            <li>Our powerful search tools will enable you to find the required standard component for your project fast and easily. </li>
            <li>If you can not find a model or need a customized solution, we've got your back. Our support team is just a click away.</li>
            <li>At HVH, we work closely with the engineering teams of our manufacturers to provide superior customer service and engineering support.</li>
          </ul>
        </div>
        <div class="windows-img2"> 
          <img src="../assets/Untitled.png" alt="image2" style="float: right; height: 400px;margin: 30px; width: 400px;">
        </div>
      </div>
      <div>
        <hr>
        <div class="end-max">
          <div class="end">
            <div class="step-img" style="margin-left: 20px;" >
              <img src="../assets/photo-1651197310.jpg" 
              style="height: 150px !important; width: 230px !important; margin-top: 22%;" 
              alt="step-img">
            </div>
            <div class="end-information" style="padding: 20px; height: 510px;  overflow: hidden; text-align: center;">
                <a class="blog" href="https://hvhdesigner.com/resource/tech-tips/step-file-format">
                  <span style="color: red !important;">
                    What is a STEP File Format
                  </span>
                  <p></p>
                  <span style="color: #6c757d !important;">
                    STEP files, also known as ISO 10303, are an ISO standard exchange format. The letters "STEP" stands for “Standard for the Exchange of Product Data
                  </span>
                </a>
            </div>
          </div>
            <div></div>
        </div>
      </div>
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
  font-weight: 550;
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
  border: 1px solid red; 
  color: #000; 
  font-weight: 550;
  font-size: 14px;
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

.pricing{
  display: flex;
  flex-direction: column; 
  justify-content: center;
}
.procong-name{
  text-align: center;
  color: #6c757d;
  padding-top: 100px ;
  padding-bottom: 5px;
  font-size: 26px;
  font-weight: 700;
  margin-left: 12%;
}
.windows{
  display: flex;
  padding: 1%;
}
.window{
  max-width: 35%; 
  /* padding-right: 10px; */
  padding:5%;
  cursor: pointer;
  box-shadow: 1px 1px 8px 0 rgb(175 167 167 / 88%),
              0 6px 20px 0 rgb(140 133 133 / 12%);
  flex: 0 0 33.3333333333%;
  box-sizing: border-box;
  position: relative;
  width: 100%;

  margin: 1.5rem !important;
  text-align: center;
}
.name{
  font-weight: bold;
  color: #f52c2f;
  font-size: 35px !important;
  text-align: center;
  box-sizing: border-box;
  line-height: 1.5;
}
.about{
  text-align: center;
  justify-content: center;
  color: #6c757d;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
}
.mounth-year{
  color: #000;
  font-weight: 500;
}
.windows-img{
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-top: 6%;
  /* padding-left: 15px; */
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: left;
}
.windows-img img{
  float: left;
  height: 423px;
  width: 100% !important;
  margin: 0 !important;
  max-width: 100%;
  object-fit: contain;
  vertical-align: middle;
  border-style: none;
}
.windows-img2{
  width: 100%;

}
.windows-information1 {
  padding-top: 1%;
  padding: 5% 5% 0 5%;
  flex: 0 0 80.6666666667%;
  max-width: 70.6666666667%;

}
.windows-information1 h1{
  padding-bottom: 5%;
}
.windows-information1 p span{
  color: #000000;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 10px !important;
  font-size: 1rem;
}
li{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}
hr{
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 1);
}
.end-max{
  display: flex;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  
}
.end-information{
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
  position: relative;
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.6;
}
.blog{
  columns: #77787b;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  
}
.blog:hover{
  
}
.end{
  display: flex;
  flex-direction: column; 
  justify-content: center;
}
.step-img{
  justify-content: center;
    border: 1px solid #eee;
    height: 250px;
    width: 250px;
    object-fit: cover;
    margin-bottom: 15px;
}
.start-img img{
  width: 100%;
    height: 100%;
    object-fit: contain !important;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
}

</style>
  