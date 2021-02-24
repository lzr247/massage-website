<template>
    <div id="dugmeTop">
        <b-button @click="topFunction" id="myBtn" :style="{opacity:prikaz}"><i class="fas fa-arrow-up"></i></b-button>
    </div>
</template>
<script>
export default {
    name:"DugmeTop",
    data:function(){
        return{
            prikaz:"0",
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            if(document.body.scrollTop>40 || document.documentElement.scrollTop>40){
                this.prikaz="1";
            }
            else{
                this.prikaz="0";
            }
        },
        topFunction(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>
<style lang="scss" scoped>
    #myBtn {
        display: block;
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        font-size: 18px;
        border: none;
        outline: none;
        background-color: rgb(25, 163, 145);
        background-color: rgba(19, 112, 100, 0.7);
        color: white;
        cursor: pointer;
        padding: 15px;
        border-radius: 4px;
        transition: all 0.5s;
    }
    #myBtn:hover {
        background-color: rgba(19, 112, 100, 0.9);
    }
</style>