<template>
    <div class="max">
        <div class="login">
            <h1>Login</h1>
            <table>Email or Login</table>
            <input type="text">
            <p></p>
            <table>Password</table>
            <input type="text">
            <p></p>
            <div class="remember-me">
              <div>nishilu texy</div>
              <span>Remember Me</span>
            </div>
            <div class="end">
                <a href="#" style="color: red;">Forgot Your Password?</a>
                <button class="button2">Login</button>
            </div>
        </div>
        <div class="vidio">
            vidiooooooo
        </div>
    </div>
</template>
<style scoped>
.max{
    padding: 10px 20% 10% 22%;
    text-align: justify;
    display: flex;
}
.login{
    width: 50%;
}
h1{
    text-align: center;
    color: red;
    font-weight: 500;
    text-transform: capitalize;
}
table, span{
    font-size: 16px;
}
input{
    border-top: 1px solid #000000;
    border-right: 1px solid #000000;
    border-bottom: 1px solid #b8b6b6;
    border-left: 1px solid #6c6c6c;
    width: 100%;
    height: 25px;
}
.remember-me, .end{
    display: flex;
}

.button2 span {
  position: relative;
  z-index: 1; 
}

.button2 {
  margin-left: 58%;
  /* height: 50px; */
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