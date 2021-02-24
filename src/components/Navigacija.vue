<template>
    <div id="navigacija" :class="{oboji:isOboji}">
        
        <b-navbar toggleable="md" >
            <b-navbar-brand id="navLevi" to="/" @click="vratiGore" class="mx-auto" :style="{color:bojaTekstaLevo}">Milutinović Nenad</b-navbar-brand>

            <!-- Kada predje u toggleable mode onda se pojavi button za prosirivi meni -->
            <b-navbar-toggle target="nav-collapse" @click="prikaziOverlay"></b-navbar-toggle>

            <!-- Elementi menija gurnuti u desno, nestaju na md velicinu -->
            <b-navbar-nav  id="navDesni" class="mx-auto">
                    <b-nav-item to="/" @click="vratiGore"><a :style="{color:bojaTekstaDesno}">Početna</a></b-nav-item>
                    <b-nav-item href="#masaze"><a :style="{color:bojaTekstaDesno}">Masaže</a></b-nav-item>
                    <b-nav-item href="#cene"><a :style="{color:bojaTekstaDesno}">Cene</a></b-nav-item>
                    <b-nav-item href="#kontakt"><a :style="{color:bojaTekstaDesno}">Kontakt</a></b-nav-item>
            </b-navbar-nav>

        </b-navbar> 
        <!-- Klik na dugme otvara meni na dole -->
            <b-collapse id="nav-collapse" is-nav>

                <div id="overlay" v-bind:style="{width: overlayWidth + '%' }">
                    <b-button @click="closeOverlay()" class="closeBtn">&times;</b-button>
                    <div class="overlay-content">
                        <a to="/" @click="vratiGore">Početna</a>
                        <a href="#masaze" @click="closeOverlay">Masaže</a>
                        <a href="#cene" @click="closeOverlay">Cene</a>
                        <a href="#kontakt" @click="closeOverlay">Kontakt</a>
                    </div>
                </div>
            </b-collapse>          
    </div>
</template>

<script>
export default {
    name:"Navigacija",
    data:function(){
        return{
            overlayWidth:0,
            prevScrollpos:window.pageYOffset,
            isOboji:false,
            bojaTekstaLevo:"#10696F",
            bojaTekstaDesno:"#000",
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        prikaziOverlay(){
            this.overlayWidth=100;

        },
        closeOverlay(){
            this.overlayWidth=0;

        },
        handleScroll(){
            var currectScrollPos = window.pageYOffset;
            if(this.prevScrollpos<currectScrollPos){
                this.isOboji=true;
                this.bojaTekstaLevo="white";
                this.bojaTekstaDesno="white";
            }
            else{
                this.isOboji=false;
                this.bojaTekstaLevo="#10696F";
                this.bojaTekstaDesno="#2e2e2e";
            }
        },
        vratiGore(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            this.closeOverlay();
        }
    },
}
</script>

<style lang="scss">
.oboji{
    background-color: #3FABAD!important;
    padding: 0px 0px!important;
    transition: all 0.4s;
}
#nav-collapse{
    display:block!important;
}
#navigacija{
    border-top: 10px solid #10696F;
    border-bottom: 1px solid gray;
    position: fixed;
    width: 100%;
    top: 0;
    overflow: hidden;
    z-index: 100;
    background: white;
    padding: 20px 0px;
    transition: all 0.4s;
}
#navLevi{
    font-size: 25px;
    font-family: Courier;
    font-weight: bold;
    cursor: pointer;
}
.navbar-light .navbar-nav .nav-link{
    padding: 0 20px;
    text-transform: uppercase;
    letter-spacing: 1px;

}
.navbar-light .navbar-nav .nav-link:hover{
    color: #1C979A;
}
#navDesni > li > a > a:hover{
    color: #1C979A!important;
}
#overlay > div > a:nth-child(1):hover{
    color:#1C979A;
    cursor: pointer;
}

#navDesni > li:nth-child(1) > a > a{
    cursor: pointer;
}
//OVERLAY
#overlay{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.95);
    transition: all 0.5s ease;
    overflow-x: hidden;
}
.overlay-content{
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}
.overlay-content a{
    display: block;
    text-decoration: none;
    color: #555555;
    font-size: 36px;
    padding: 8px;
    transition: 0.3s;
}
.overlay-content a:hover{
    color: #1C979A;
}
.closeBtn{
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 60px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    color: #555555;
    cursor: pointer;
}
.closeBtn:hover{
   color: #1C979A;
   background-color: rgba(255, 255, 255, 0);
}
//MEDIA QR
@media screen and (max-width:767px){
    #navDesni{
        display: none;
    }
}
@media screen and (max-width:337px){
    .navbar-light .navbar-toggler{
        margin:auto;
    }
}


</style>