<template>
    <div class="maxs">
        <div class="max">
            <div class="max-left">
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam.\Maecenas metus.</span>
                <span>Vivamus diam purus, cursus a, commodo non, facilisis vi</span>
            </div>
            <div>
                <img src="" alt="img-top" style="width: 600px;height: 450px;">
            </div>
        </div>
        <div class="max">
            <div class="max-left-img">
                <img src="" alt="img-top" style="width: 600px;height: 450px;">   
            </div>
            <div class="max-right">
                <span style="padding-bottom: 5px !important;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
                <span> Maecenas feugiat consequat diam.\Maecenas metus.</span>
                <span> Vivamus diam purus, cursus a, commodo non, facilisis vi</span>
            </div>
        </div>
        <hr>
        <div class="end-max">
          <div class="end">
            <h3 style="color: #77787b; font-size: 25px;margin-left: 20px; font-weight: 540; ">Learn more about AutoCad</h3>
            <div class="step-img" style="margin-left: 20px;" >
              <img src="../assets/photo-1651197310.jpg" 
              style="height: 150px !important; width: 300px !important; margin-top: 22%;" 
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
        </div>
    </div>
</template>

<style scoped>
.maxs{
    margin-top: 30px;
    padding: 10px 20% 4% 22%;
    text-align: justify;
    display: flex;
    flex-direction: column; 
    font-family: Arial, Helvetica, sans-serif;
}
.max{
    width: 100%;
    display: flex;
    gap: 15px;
    
}
.max-left{
    padding-top: 10%;
    width: 50%;
    height: 500px;
}
.max-left-img{
    width: 50%;
    height: 500px;
}

span{
    color: #77787b;
    display: block;
    line-height: 20px;
    padding-bottom: 13px;
}
.max-right{
    display: block;
    text-align: end;
    margin-top: 7%;
}
hr{
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgb(0 0 0 / 28%);

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
  max-width: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.6;
}
.blog:hover{
  text-decoration: ;
}
.blog{
  columns: #77787b;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  
}
.end-information:hover{
  text-decoration: underline;
}
.end{
width: 360px;
  display: flex;
  flex-direction: column; 
  justify-content: center;
}
.step-img{
  justify-content: center;
    border: 1px solid #eee;
    height: 280px;
    /* width: 250px; */
    object-fit: cover;
    margin-bottom: 15px;
}
.start-img img{
    width: 100%;
    height: 100% ;
    object-fit: contain !important;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
}

</style>