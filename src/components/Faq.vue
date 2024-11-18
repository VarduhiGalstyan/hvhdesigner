<template>
    <div class="max">
        <h1>Frequently Asked Questions</h1>
        
        <div class="class">
            <div class="class1">
                <button @click="toggle(1)" class="card">
                    How to request a custom 3D Model
                    <span style="color: red; font-weight: 900;">{{ isRotated[1] ? '&#708;' : '&#709;' }}</span>
                </button>
                <p v-if="isRotated[1]" class="extra-text">
                    Custom 3D models are available only for our HVH Designer users. Just simply Contact US via the contact form, or write us on live chat.
                </p>
            </div>
        </div>

        <div class="class">
            <div class="class1">
                <button @click="toggle(2)" class="card">
                    How to download the 3D models?
                    <span style="color: red; font-weight: 900;">{{ isRotated[2] ? '&#708;' : '&#709;' }}</span>
                </button>
                <p v-if="isRotated[2]" class="extra-text">
                    Once you register you will have access to all our 3D models. It is free !!!
                </p>
            </div>
        </div>

        <div class="class">
            <div class="class1">
                <button @click="toggle(3)" class="card">
                    What is HVH Designer?
                    <span style="color: red; font-weight: 900;">{{ isRotated[3] ? '&#708;' : '&#709;' }}</span>
                </button>
                <p v-if="isRotated[3]" class="extra-text">
                    HVH Designer is a web-based, affordable 3D CAD modeling software that has a large library of standard 3D models by our partner manufacturers.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
    text-transform: capitalize;
}

.class {
    gap: 10px;
}

.max {
    padding: 40px 20% 16% 22%;
    font-family: Arial, Helvetica, sans-serif;
}

.card {
    background: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 20px;
    height: 60px;
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
    border-top: 1px solid rgba(0, 0, 0, .125);
    border-bottom: 1px solid rgba(0, 0, 0, .125);
    color: #494848;
}

.extra-text {
    margin-top: 10px;
    font-size: 16px;
    color: #555;
}
@media only screen and (max-width: 1757px){
  .max{
    padding: 40px 10% 10% 15%;
  }
}

@media only screen and (max-width: 1370px){
  .max{
    padding: 40px 10% 10% 5%;
  }
  
}
@media only screen and (max-width: 1280px){
  .max{
    padding-left: 10px;
  }
}

@media only screen and (max-width: 611px){

  .resources-top-left img{
    margin-left: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isRotated: {
        1: false,
        2: false,
        3: false
      }
    };
  },
  methods: {
    toggle(question) {
      this.isRotated[question] = !this.isRotated[question];
    }
  }
};
</script>
