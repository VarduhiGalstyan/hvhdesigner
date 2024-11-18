<template>
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <div>
                <span @click="closeModal" class="close-btn">×</span>
            </div>
            <div>
                <p class="modal-text">Something cool is coming soon!!!</p>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    data() {
      return {
        showModal:false,
      };
    },
    methods: {
        openRegisterModal() {
            this.showModal = true;
        },
        closeModal(){
            this.showModal = false;
        }
    }
}
</script>
<style>
 .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-clip: padding-box;
    background-color: #fefefe;
    background-color: #fff;
    border: 1px solid #888;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    outline: 0;
    padding: 20px;
    pointer-events: auto;
    position: relative !important;
    width: 30%;

}
.close-btn{
  color: #636161;
    display: flex;
    float: right !important;
    font-size: 1.35rem;
    font-weight: 700;
    justify-content: end;
    line-height: 1;
    opacity: .5;
    text-shadow: 0 1px 0 #fff;
}

.modal-text {
  line-height: 1.2;
  color: red;
  font-size: 32px;
    font-weight: 700;
    padding: 1rem !important;
    text-align: center !important;
}


.close-btn:hover {
  color: #000000;;
  cursor: pointer;
  text-decoration: none;
}

</style>