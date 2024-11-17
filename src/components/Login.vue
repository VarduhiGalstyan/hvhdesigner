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
          <a href="#" style="color: red; font-weight: 700;     width: 500px;">Forgot Your Password?</a>
          <button type="submit" class="button2">Login</button>
        </div>
      <!-- </form> -->
    </div>
    <div class="vidio">
      vidiooooooo
    </div>
   </div>
</template>

<style scoped>
.max{
    padding: 10px 20% 10% 22%;
    width: 1150px;
    text-align: justify;
    display: flex;
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

.button2 span {
  position: relative;
  z-index: 1; 
}

.button2 {
  margin-left: 46%;
  background-color: white; 
  border: 1px solid red; 
  color: #000; 
  font-weight: 550;
  font-size: 14px;
  padding: 14px 35px; 
  cursor: pointer;
  position: relative; 
  overflow: hidden;
  width: 180px;
}

.button2:hover {
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
  margin-left: 25%;
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
  margin-left: 30%;
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
}
}
</style>