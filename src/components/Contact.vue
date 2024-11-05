<template>
    <div class="max">
        <div class="left">
            <div class="contact">
                <h1>Contact HVH Team</h1>
                <hr>
                <p>Phone: 1(866)577-4040</p>
                <p>email: info@hvhindustrial.com</p>
            </div>
            <div class="imgs1">
                img1
            </div>
            <div class="imgs2">
                img2
            </div>
        </div>

        <div class="right">
            <div class="submit">
                <table>Your Name <span>*</span></table>
                <input type="text" >
                <p></p>
                <table>E-Mail <span>*</span></table>
                <input type="text" >
                <p></p>
                <table>Company</table>
                <input type="text"  placeholder="(optional)">
                <p></p>
                <table>Address</table>
                <input type="text"  placeholder="(optional)">
                <p></p>
                <table>City</table>
                <input type="text"  placeholder="(optional)">
                <p></p>
                <table>State</table>
                <input type="text"  placeholder="(optional)">
                <p></p>
                <table>Postal Code</table>
                <input type="text"  placeholder="(optional)">
                <p></p>
                <table>Phone</table>
                <input type="text"  placeholder="(optional)">
                <p></p>
                <table>Fex</table>
                <input type="text"  placeholder="(optional)">
                <p></p>
                <table>Comments <span>*</span></table>
                <input type="text"   style="height: 100px !important;">
                <p></p>
                <div class="recaptcha">
                    cfgvhb
                </div>
                <p></p>
                <div class="buttons">
                    <button class="button1"><span>Clear From</span></button>
                    <button class="button2"><span>Submit</span></button>
                </div>

            </div>
            <div class="img">
                img-right
            </div>
        </div>
    </div>
</template>
<style scoped>
.max{
    padding-left: 5%;
    padding-right: 4%;
}
.max, .right{
    display: flex;
    /* flex-direction: column; */
    font-family: Arial, Helvetica, sans-serif;  
}
.left{
    display: flex;
    flex-direction: column;
    /* max-width: 50%; */
}
.contact{
    text-align: left;
    justify-content: end;
}
.imgs1, .imgs2{
    padding-left: 5%;
}
h1{
    color: red;
    font-weight: 300;
}
hr{
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgb(0 0 0 / 28%);
}
.submit{
    display: flex;
    flex-direction: column;
}
p{
    font-weight: 200;
    color: #6c6c6c;
}
span{
    color: red;
}
input{
    border-right: none;
    border-left: 1px solid #000000;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #000000;  
    height: 30px;
}
.recaptcha{
    justify-content: end;
    height: 60px;
    background-color: #eceaea;
    border: 1px solid #828282;
}

.buttons {
    display: flex;
    gap: 10px; /* Space between buttons */
  }

  .buttons button{
    height: 50px;
  }

.button1 {
  background-color: #828282; 
  border: none;
  padding: 10px 20px; 
  cursor: pointer;
  position: relative; 
  overflow: hidden; 
  z-index: 1;

}
.button1 span{
  color: #fff !important;
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
  color: #000 !important;
}
.button1 span, .button2 span {
  position: relative;
  z-index: 1; 
}

.button1:hover::after {
  right: 0; 
    color: #fff ;
}
.button2 span{
    color: #000 ; 
}
.button2 {
  background-color: white; 
  border: 1px solid red; 
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


</style>