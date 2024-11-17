<template>
    <div class="resources-max">
        <div class="resources-top">
          <div class="resources-top-left">
             <img src="../assets/photo-1651197310.jpg"  
              alt="step-img">      
            <div class="center">
                <h1>What is a STEP File Format</h1>
                <span>
                    STEP files, also known as ISO 10303, are an ISO standard exchange format. The letters "STEP" stands for “Standard for the Exchange of Product Data
                </span>
            </div>
          </div>
           
            <div  class="resources-top-right">
                <span>Get the latest news delivered to your inbox</span>
                <p></p>
                <span style="color: #000000 !important; ">Insights twice a month</span>
                <p></p>
                <table>Email</table>
                <input type="text" placeholder="Enter ypur email address" style="height: 25px; width: 85%;">
                <button class="button2"><span>Subscibe</span></button>
            </div>
        </div>

        <nav class="nav">
            <div class="span">Filter by:</div>
            <ul>   
                <li :class="{ active: activeLink === 'all' }" @click="setActive('all')"  >All</li>
                <li :class="{ active: activeLink === 'tutorials' }" @click="setActive('tutorials')">Tutorials</li>
                <li :class="{ active: activeLink === 'techtips' }" @click="setActive('techtips')">Tech Tips</li>
                <li :class="{ active: activeLink === 'designtips' }" @click="setActive('designtips')">Design Tips</li>
                <li :class="{ active: activeLink === 'onlinecourses' }" @click="setActive('onlinecourses')">Online Courses</li>
                <li :class="{ active: activeLink === 'products' }" @click="setActive('products')">Products</li>
            </ul>
        </nav>

        <!-- <nav class="nav">
            <div class="span">Filter by:</div>
            <div>
                <button
                    v-for="(entry, index) in filterList"
                    :item="entry"
                    :key="index"
                    @click="filter = entry; active = index;"
                    :class="{ active: entry == filter }"
                >
                    {{ entry }}
                </button>
            </div> 
            < <ul class="userwrap">   
                <li
                    v-for="(entry, index) in users"
                    v-if="entry[fkey] === filter || filter === 'All'"
                    :item="entry"
                    :key="index"
                    class="user"
                >
                    <h2 class="title">{{ entry.name }}</h2>
                    <span class="language">
                        Primary Language: <strong>{{ entry.mainLanguage }}</strong>
                    </span>
                </li>
            </ul>
        </nav> -->
        <div class="end-max">
          <div class="end">
            <div class="step-img" style="margin-left: 20px;" >
              <img src="../assets/photo-1651197310.jpg" 
              style="
                height: 80% !important;
                width: 80% !important;
                margin-top: 30px;
                margin-left: 10%;" 
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
            <!-- <div></div> -->
        </div>
    </div>
</template>

<!-- <script>
export default {
  name: "DataDisplay",
  data: function() {
    return {
      fkey: "mainLanguage",
      filterList: [ "All", "Tutorials", "Tech Tips", "Design Tips", "Online Courses", "Products"],
      filter: "All",
      users: []
    };
  },
  created() {
    var apiURL = "https://next.json-generator.com/api/json/get/4JCnNiTCr";
    fetch(apiURL)
      .then(res => res.json())
      .then(res => (this.users = res))
      .catch(error => console.log(error));
  }
};
</script> -->

<style scoped>

.resources-top-left img{
  height: 200px !important;
  width: 330px !important; 
  padding-left: 5%; 
  padding-top: 10px;
}

.resources-top-left{
  display: flex;
}
button{
    background-color: #fff;
}
.max-center{
    display: flex;
}
.resources-max{
    display: flex;
    flex-direction: column; 
    padding: 10px 10% 10% 22%;
    text-align: justify;
    font-family: Arial, Helvetica, sans-serif;    
}
.resources-top{
    display: flex;
}
.center{
    width: 340px;
    padding-left: 7%;
}
.center h1{
    font-size: 24px;
    font-weight: 700;
    color: #000000;
    line-height: 1.6;
}
span, .span{
    font-size: 16px;
    font-weight: 500;
    color: #6c757d;
    line-height: 1.6;
}
.resources-top-right{
    padding-left: 7%;
    
}
nav {
    flex-grow: 1; /* Allow nav to take the remaining space */
    justify-content: space-between;
    /* display: flex !important; */
  }
  
  nav ul {

    flex-direction: row;
    /* justify-content: space-between; */
    display: flex;
    list-style: none;
  }
  li:hover {
    color: red;
  } 

  nav li {

    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;  
    color: #333;
    font-size: 0.9em;
    color: #6c757d;
    text-transform: capitalize;
    margin-right: 1%;
    padding-left: 4px;
    padding-right: 4px;
    display: block;
    float: none;
    height: auto !important;   
    display: list-item;
    /* text-align: -webkit-match-parent; */
    unicode-bidi: isolate;
    cursor: pointer;
  }
  
  nav li.active {
    color: red; 
}










.button2 {
  background-color: white; 
  margin-top: 10px;
  border: 1px solid red; 
  color: #000; 
  font-weight: 550;
  font-size: 14px;
  padding: 10px 20px; 
  cursor: pointer;
  position: relative; 
  overflow: hidden;
  z-index: 1;
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
  color: #000;
  z-index: 1; 
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
@media only screen and (max-width: 1757px){
  .resources-max{
    display: flex;
    flex-direction: column; 
    padding: 10px 10% 10% 15%;
    text-align: justify;
    font-family: Arial, Helvetica, sans-serif;    
  }
}
@media only screen and (max-width: 1650px){
  .center{
    padding-left: 0;
    width: 370px;
  }

}
@media only screen and (max-width: 1600px){
  .resources-top img{
    padding-left: 0 !important;
  }
  .resources-top-right{
    padding-left: 4%;
  }
  .center{
    width: 340px;
  }
}

@media only screen and (max-width: 1553px){
  .resources-top-right{
    padding-left: 3%;
  }
}

@media only screen and (max-width: 1370px){
  .resources-max{
    padding: 10px 10% 10% 5%;
  }
  
}
@media only screen and (max-width: 1280px){
  .resources-max{
    padding-left: 0;
  }
.resources-top-left{
  display:  flex;
  flex-direction: column;
  padding: 40px 25px 40px 0;
  width: 65%;
}
.center{
  width: 100%;
  display: block;
  text-align: center;
}
.resources-top-left img{
  height: 250px !important;
  width: 500px !important;
    margin-left: 17%;
}
.resources-top-right{
  padding-top: 60px;

}
.resources-top-right span{
  font-size: 18px;
}
.nav, .end-max{
  padding-left: 5%;

}
}
@media only screen and (max-width: 1280px){
.resources-top-left img{
  margin-left: 12%;
}
}
@media only screen and (max-width: 888px){
  .resources-top-left img{
    margin-left: 5%;
  }
}
@media only screen and (max-width: 767px){
  .resources-top{
    display: flex;
    flex-direction: column;
  }
  .resources-top-left{
    width: 100%;
  }
  .resources-top-left img{
    margin-left: 15%;
  }
  .nav{
    padding-top: 30px;
  }
}
@media only screen and (max-width: 611px){

  .resources-top-left img{
    margin-left: 0;
  }
}
@media only screen and (max-width: 877px){
  .end-max{
    padding-top: 30px;
  }
  .step-img{
    width: 93%;
  }
  .end-max{
    margin-left: 5%;
  }
  .end{
    width: 100%;
  }
}



</style>