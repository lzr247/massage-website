<template>
    <div id="kontakt">
        <div class="kontaktForma mx-auto">

            <b-row>
                <b-col><h1>Kontakt</h1></b-col>
            </b-row>

            <b-row class="mb-1">
                <b-col>
                    <h2>Milutinović Nenad</h2>
                    <h3>Strukovni fizioterapeut, ulica i broj</h3>
                </b-col>
            </b-row>

            <b-row>

                <b-col cols="12">
                    <i class="fas fa-envelope ikona"></i>
                </b-col>

                <b-col cols="12"><p class="text-center tekst">Email:<br>dasda@yahoo.com</p></b-col>

                <b-col cols="12" class="d-flex justify-content-center">
                    <a href="https://www.facebook.com/" target="blank"><i class="fab fa-facebook-square ikona"></i></a>
                    <a href="https://www.instagram.com/masaze_i_terapija_smederevo/" target="blank"><i class="fab fa-instagram ikona"></i></a>
                </b-col>

                <b-col cols="12"><p class="text-center tekst">Pozovite nas<br>051/141-141-41</p></b-col>
                <b-col cols="12" class="d-flex justify-content-center" >
                    <i class="fas fa-phone-square-alt ikona"></i>
                    <i class="fab fa-whatsapp whatsapp"></i>
                    <i class="fab fa-viber viber"></i>
                </b-col>

               

                
                

                

            </b-row>
        </div>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"></script>
<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
export default {
    name:"Kontakt",
    mounted(){
        const {cenovnik} = this.$refs

        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:cenovnik,
                start:"top top"
            }
        })
        tl.from(".kontaktForma",1, {opacity:0})
    },
}
</script>
<style lang="scss" scoped>
    #kontakt{
        background: linear-gradient(120deg,#1D9FA2 50%, #1C979A 40%);
        margin-top: -16px;
        padding-top: 20px;
        padding-bottom: 30px;
        scroll-margin-top: 80px;
        min-height: 500px;
        display: flex;
        align-items: center;
    }
    .kontaktForma{
        width: 70%;
        color: white;
    }
    h2,h1{
        color: white;
        font-size: 30px;
        padding-bottom: 5px;
        transition: all .5s;
        letter-spacing: 2px;
    }
    h3{
        font-size:22px;
        letter-spacing: 1px;
    }
    p{
        font-size: 20px;
    }
    #kontakt > div > div> div > i{
        margin: 10px 20px;
    }
    #kontakt > div > div > div > a> i{
        margin: 10px 20px;
    }
    .ikona{
        font-size: 50px;
        color: white;
    }    
    #kontakt > div > div:nth-child(3){
        transition: all 0.5s;
    }
    .whatsapp{
        font-size: 50px;
        color: #00E676;
    }
    .viber{
        font-size: 50px;
        color: #7B519C;
    }
    
    @media screen and (max-width:576px){
        .tekst{
            text-align: center;
        }
    }
</style>