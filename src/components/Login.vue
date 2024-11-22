<template>
   <div class="max">
    <div class="login">
      <h1>Login</h1>
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
  
    padding: 10px 8% 10% 22%;
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
.max{
  padding: 10px 8% 10% 7%;
  height: 377px;
}
}
@media only screen and (max-width: 1362px){
.max{
  padding: 10px 4% 10% 8%;
}
@media only screen and (max-width: 1300px){
.max{
  padding: 10px 4% 10% 2%;
}
}
}
@media only screen and (max-width: 1239px){
.max{
  padding: 10px 1% 10% 5%;
}
}
@media only screen and (max-width: 1200px){
.max{
  width: 950px;
}

}
@media only screen and (max-width: 1135px){
.max{
  padding: 10px 1% 10% 5%;
}
}
@media only screen and (max-width: 1053px){
.max{
  padding: 10px 1% 10% 4%;
}
}
@media only screen and (max-width: 1053px){
.max{
  padding: 10px 1% 10% 4%;
}
}
@media only screen and (max-width: 991px){
.max{
  width: 620px;

}
.button2{
  margin-left: 15%;
  width: 1600px;
}
}
@media only screen and (max-width: 991px){
  .max{
    padding: 10px 1% 10% 4%;

  }
}
@media only screen and (max-width: 793px){
.max{
  padding: 10px 1% 10% 3%;

}
}
@media only screen and (max-width: 809px){
.max{
  padding: 10px 1% 10% 5%;

}
}
@media only screen and (max-width: 768px){
.max{
  padding: 10px 0 10% 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.max{
  padding: 10px 1% 28% 0.5%;
}
.login{
  padding-left: 10%;
  width: 71%;
}
.button2{
  margin-left: 50%;
}
input{
  height: 35px;
}
.end a{
  width: 2500px !important;
}
.vidio{
  padding-left: 10%;
  width: 70%;
}
}
@media only screen and (max-width: 732px){
  .end a{
  width: 3500px !important;
}
}
@media only screen and (max-width: 747px){
  .end a{
  width: 3500px !important;
}
}
@media only screen and (max-width: 717px){
  .end a{
  width: 3500px !important;
}
}
@media only screen and (max-width: 691px){
  .end a{
  width: 3740px !important;
}
}

@media only screen and (max-width: 651px){

.end a{
  width: 4000px !important;
}
}
@media only screen and (max-width: 550px){
  .end a{
  width: 2000px !important;
}
}
</style>