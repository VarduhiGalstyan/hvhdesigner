<template>
    <div class="max">
        <h1>What is a STEP File Format</h1>
        <div class="stepimgdiv">
            <img class="stepimg" src="../assets/photo-1651197310.jpg" alt="imgStep">
        </div>
        <div class="social-container">
            <div class="social-item">
                <a href="https://www.facebook.com/" @click.prevent="shareOnFacebook">
                    <img src="../assets/Facebook_logo.png" alt="FB" class="social-icon" />
                </a>
            </div>
            <div class="social-item">
                <a href="https://am.linkedin.com/" @click.prevent="shareOnLinkdin">
                    <img src="../assets/download.png" alt="LinkedIn" class="social-icon" />
                </a>
            </div>
            <div class="social-item">
                <a href="https://x.com/?lang=en" @click.prevent="shareOnTwiiter">
                    <img src="../assets/download-t.png" alt="Twitter" class="social-icon"/>
                </a>
            </div>
        </div>
        <span style="font-size: 18px;">There are so many CAD software and each has its own file extensions, but many times engineers have to exchange CAD files from company to company and use CAD models that were created in one software in another. When each software has its own file extension and can be used only by that software then we have a problem.  </span>
        <p class="p">What could be a solution to this? </p>
        <p>A universal file extension that can be used to exchange data from one software to another. </p>
        <p>STEP files, also known as ISO 10303, are an ISO standard exchange format. The letters "STEP" stands for “Standard for the Exchange of Product Data”.  The file extensions used for STEP-files are .step and .stp.</p>
        <p>The ISO (International Organization for Standardization) committee first developed the STEP format in the mid-1980s as a universal file format to exchange data between different software programs and enable the exchange of 3D models and designs. </p>
        <p>Besides cross-platform compatibility, a STEP file maintains a high level of accuracy, especially compared to STL files. A STEP file reads and saves the entire body of a 3D model, rather than just basic geometries, with a high level of precision. This is why STEP files are so popular when detailed 3D models are required, such as for machining or 3D printing.</p>
        <p class="p">STEP vs STL</p>
        <p>If we compare STEP files and STL files, STL files only describe the exterior geometry of a model as a mesh, a STEP file saves the entire body of a 3D model. Meshes are a compilation of small figures and geometries that make up the outline of a part. This is why they don't provide as high accuracy as the STEP files. </p>
        <p>Since STEP file saves the entire body of a 3D model, they can be customized up to an extent. For example, someone can design gear with a pilot bore in AutoCAD save it as STEP file, and send it to a SolidWorks user. The SolidWorks user can open the file draw a bore and keyway and use it for machining, in 3D assembly, save it as STL or other formats.  </p>
        <p>&nbsp;</p>
        <p>In summary, there are two main advantages that contributed to the STEP file format’s success: compatibility and accuracy.</p>
        <p>&nbsp;</p>
        <p>HVH Designer has a large selection of standard power transmission, motion control, and automation components in STEP format. You can use our liberty when designing equipment with HVH Designer or download and use it with other software. </p>
        <p>&nbsp;</p>
        <p>The library is <strong>FREE</strong>. </p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div style="padding-bottom: 30px;
           border-bottom: 1px solid rgb(221, 221, 221);">
        </div>
        <div class="left-right">
            <div class="VladImg">
                <img class="imgVlad" src="../assets/image-1645767480.png
                " alt="">
            </div>
            <div class="VladInfo">
                <p class="name">Vladimir Harutyunyan</p>
                <span>Vladimir Harutyunyan is the founder of HVH Industrial. He has masters degree in mechanical engineering and over 10 years of experience in mechanical power transmission field. </span>
                <p></p>
                <span>Feel free to connect with Vlad on Linkedin: <a href="https://www.linkedin.com/in/vladharut" style="color: #2980b9;">https://www.linkedin.com/in/vladharut</a></span>
                <p></p>
            </div>
        </div>
        <div style="padding-bottom: 30px;
           border-bottom: 1px solid rgb(221, 221, 221);">
        </div>
        <h2>The Latest</h2>
    </div>
</template>

<script>
export default {
  methods: {
    shareOnFacebook() {
      const shareURL = "https://www.facebook.com/";
      window.open(shareURL, "_blank", "width=600,height=400");
    },
    shareOnLinkdin() {
      const shareURL = "https://www.linkedin.com/in/vladharut/";
      window.open(shareURL, "_blank", "width=600,height=400");
    },
    shareOnTwiiter() {
      const shareURL = "https://x.com/?lang=en";
      window.open(shareURL, "_blank", "width=600,height=400");
    },
  },
};
</script>

<style scoped>
.social-container div a img{
    border-radius: 5px;
}
.social-container div a img:hover{
    opacity: 0.5;
}

.social-container {
  margin-left: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: fixed;
}

.social-item {
  width: 30px;
  height: 30px;
}
.social-item img {
  object-fit: contain;
}
.social-icon {
  width: 100%;
  height: auto;
}
h2{
    color: rgb(122, 115, 115);
    font-size: 25px;
    margin-top: 25px;
    margin-bottom: -20px;
    font-weight: 500;
    line-height: 1.2;
    text-align: left;

}
.name{
    margin-top: -5px;
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: .5rem;    
}
.VladInfo{
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
    font-size: 1rem;
}
.left-right{
    display: flex;
    gap: 20px;
    padding-top: 20px;
    padding-top: 40px;

}
.VladImg{
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%;
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
}
.imgVlad{
    border-radius: 50%;
    height: 160px;
    object-fit: cover;
    width: 160px;
    border-style: none;
    max-width: 100%;
    vertical-align: middle;

}
.max{
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 96px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

h1{
    font-size: 2.25rem;
    font-weight: 500;
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
    text-transform: capitalize;
}
.stepimgdiv{
    box-sizing: border-box;
    height: 400px;
    margin: auto;
    padding-bottom: 30px;
    width: -moz-fit-content;
    width: fit-content;
}
.stepimg{
    object-fit: contain;
    border-style: none;
    max-width: 100%;
    vertical-align: middle;
    height: 100%;
}
span{
    color: #77787b;
    font-weight: 500;
    line-height: 1.6;
    text-align: left;
}
p{
    color: #77787b;
    font-weight: 500;
    line-height: 1.6;
    text-align: left;
    font-size: 18px;
}
.p{
    color: #7f8c8d;
    font-size: 25px;
    font-weight: 900;
    padding-top: 50px;
    padding-bottom: 50px;
}
strong{
    font-size: 18px;
    font-weight: bolder;
    color: #77787b;
}
@media only screen and (min-width: 1112px){
    .max{
        max-width: 993px;
    }
}
@media only screen and (max-width: 1112px){
    .max{
        max-width: 900px;
    }
}
@media only screen and (max-width: 1007px){
    .max{
        max-width: 850px;
    }
}
@media only screen and (max-width: 950px){
    .max{
        max-width: 700px;
    }
}
@media only screen and (max-width: 800px){
    .max{
        max-width: 650px;
    }
}
@media only screen and (max-width: 765px){
    .max{
        max-width: 605px;
    }
}
@media only screen and (max-width: 708px){
    .max{
        max-width: 559px;
    }
}
@media only screen and (max-width: 656px){
    .max{
        max-width: 520px;
    }
}
@media only screen and (max-width: 619px){
    .max{
        max-width: 457px;
        
    }
}
@media only screen and (max-width: 570px){
    .left-right{
        flex-direction: column;
    }
    .VladImg{
        max-width: 45%;
    }
}
@media only screen and (max-width: 560px){
    .max{
        max-width: 450px;
        
    }
    
}
@media only screen and (max-width: 537px){
    .max{
        max-width: 404px;        
    }
}






</style>