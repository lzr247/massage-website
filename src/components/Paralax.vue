<template>
    <div id="paralax">
        <b-button class="parallax-btn m-auto" style="background-color:pozadina;color:boja;" to="/termin">Zakažite vaš termin</b-button>
        <parallax :speed-factor="1" fixed breakpoint="(min-width: 80px)">
            <img src="@/assets/paralax.jpg" alt="very cool bg">
        </parallax>
    </div>
</template>
<script>
import Parallax from 'vue-parallaxy';
export default {
    name:"Paralax",
    components:{
        Parallax
    },
    data:function(){
        return{
            pozadina:"rgba(255, 255, 255, 0.1)",
            boja:"white"
        }
    },
}
</script>
<style lang="scss" scoped>
    #paralax{
        background-color: rgb(54, 151, 155);
        background-color: rgba(29, 141, 141, 0.4);
        height: 500px;
        position: relative;
    }
    .parallax-btn {
        position: absolute;
        top:40%;
        left: 0;
        right: 0;
        padding: 10px;
        letter-spacing: 2px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid white;
        font-size: 25px;
        width:30%;
    }
    #paralax > div > div > img{
        margin-top: 0px;
        z-index: -100;
        position: relative;
        height: 100vh;
    }
    #paralax > a:hover{
        background-color: white;
        color: #369799;
    }
    @media screen and(max-width:375px) {
        #paralax > a{
            font-size: 18px;
            text-align: center;
        }
    }
    
</style>