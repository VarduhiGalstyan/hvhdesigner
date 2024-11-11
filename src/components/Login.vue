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
          <a href="#" style="color: red; font-weight: 700;">Forgot Your Password?</a>
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
    width: 60%;
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
  padding: 10px 20px; 
  cursor: pointer;
  position: relative; 
  overflow: hidden;
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

</style>