<template>
   <div class="max">
    <div class="login">
      <h1>Login</h1>

      <!-- <form @submit.prevent="login"> -->
        <div>
          <label for="Email-or-Login">Email or Login:</label>
          <input type="text"  id="Email-or-Login" required />
          <p></p>
        </div>

        <div>
          <label for="password">Password:</label>
          <input type="password"  id="password" required />
        </div>

        <div style="display: flex; ">
          <input type="checkbox" style="width: 5% !important;"/>
          <div style="margin-top: 10px;"> Remember Me</div>
        </div>

        <div class="end">
          <a href="#" style="color: red; font-weight: 700;     width: 2000px;">Forgot Your Password?</a>
          <button type="submit" class="button2">Login</button>
        </div>
      <!-- </form> -->
    </div>
    <div class="vidio">
      <video width="100%" height="240" controls>
        <source src="@/assets/CoolCountdown10,9,8,7,6,5,4,3,2,1.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
      </video>
    </div>
   </div>
</template>

<style scoped>
.max{
  
    padding: 10px 20% 10% 22%;
    width: 1150px;
    text-align: justify;
    display: flex;
    gap: 50px;
}
.login{
    width: 40%;
}
h1{
    text-align: center;
    color: red;
    font-weight: 700;
    text-transform: capitalize;
}
label, span{
    /* font-size: 16px; */
    font-weight: 700;
    display: block;
    text-align: start;
}
input{
    border: 1px solid #000000;
    border-radius: 5px;
    width: 100%;
    height: 30px;
}
.remember-me, .end{
    display: flex;
}

  .button2 {
    width: 600px;
  height: 50px;
  background-color: white; 
  border: 1px solid red; 
  color: #000; 
  font-weight: 550;
  font-size: 14px;
  /* padding: 14px;  */
  padding: 5px 0;
  cursor: pointer;
  position: relative; 
  overflow: hidden;
  display: inline-block;
  text-decoration: none;
  z-index: 1;
  transition: color 0.4s;


}

.button2:hover {
    color: white;
  }

.button2::before , .button2::after{
  content: '';
  
  position: absolute;
  /* top: 50%; */
  left: 0;
  width: 100%;
  height: 0;
  background-color: red; 
  transition: height 0.9s ease;
    z-index: -1;
}
.button2::before{
  top: 50%;
}
.button2::after{
  bottom: 50%;
}
.button2:hover::before,
  .button2:hover::after {
    height: 100%;
  }
  
@media only screen and (max-width: 1669px){


}
@media only screen and (max-width: 1669px){
.max{
  padding: 10px 20% 10% 18%;
}
}
@media only screen and (max-width: 1362px){
.max{
  padding: 10px 20% 10% 14%;
}
}
@media only screen and (max-width: 1239px){
.max{
  padding: 10px 20% 10% 8%;
}
}
@media only screen and (max-width: 1200px){
.max{
  padding: 10px 20% 10% 14%;
  width: 950px;
}
.button2{
  /* margin-left: 25%; */
}
}
@media only screen and (max-width: 1135px){
.max{
  padding: 10px 20% 10% 10%;
}
}
@media only screen and (max-width: 1053px){
.max{
  padding: 10px 20% 10% 4%;
}
}
@media only screen and (max-width: 1053px){
.max{
  padding: 10px 20% 10% 4%;
}
}
@media only screen and (max-width: 991px){
.max{
  padding: 10px 20% 10% 14%;
  width: 620px;

}
.button2{
  margin-left: 15%;
  width: 1600px;
}
}
@media only screen and (max-width: 793px){
.max{
  padding: 10px 20% 10% 10%;

}
}
@media only screen and (max-width: 768px){
.max{
  padding: 10px 20% 10% 10%;
  width: 1350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button2{
  margin-left: 50%;
}
}
@media only screen and (max-width: 651px){
.max{
  padding-left: 10px;
  width: 1150px;
}
.button2{
  margin-left: 10px;
  width: 600px;
}
}
</style>