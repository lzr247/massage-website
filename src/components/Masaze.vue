<template>
    <div id="masaze">
        <b-card-group deck class="m-auto py-5" >
            <b-card title="Title" img-src="@/assets/card1.png" img-alt="Image" img-top class="kartica">
            <b-card-text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores sunt culpa quidem molestias? Tempora quo reprehenderit nemo, dolor quam quaerat at assumenda iusto, ducimus inventore sequi ab illum neque saepe.
            </b-card-text>
            </b-card>

            <b-card title="Title" img-src="@/assets/card2.png" img-alt="Image" img-top class="kartica">
            <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni obcaecati quisquam at eaque ab amet perferendis repudiandae doloribus vitae itaque, suscipit incidunt nobis. Adipisci, doloremque. Quos esse laudantium fugit?
            </b-card-text>
            </b-card>

            <b-card title="Title" img-src="@/assets/card3.png" img-alt="Image" img-top class="kartica">
            <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ad qui dolore veniam harum quam facilis recusandae temporibus excepturi odit sit obcaecati esse, iste maxime explicabo at consectetur aspernatur vel!
            </b-card-text>
            </b-card>
        </b-card-group>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"></script>

<script>
export default {
    name:"Masaze",
    mounted(){
        const {jumbotron} = this.$refs

        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:jumbotron,
                start: "top top"
            }
        })
        tl.from(".kartica",1,{ opacity:0,stagger:.4})



        // const timeline = new TimelineLite()

        // timeline.to(box1, 1, {x:200, rotate:90})
    }
}
</script>
<style lang="scss">
.card-deck{
    width: 70%;
}
#masaze{
    background: linear-gradient(120deg,#d7e7e7 44%, #ffffff 40%);
    scroll-margin-top: 60px;
}
@media screen and (max-width:820px){
    .card-deck{
        width: 90%;
    }
}
</style>