<template>
    <div id="carousel">
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="5000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            >
            <!-- Text slides with image -->
            <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
                <template #img>
                <img
                    class="img-fluid w-100 slika"
                    src="@/assets/msg1.jpg"
                    alt="image slot"
                    style="object-fit: cover;height:600px;width:100%;"
                >
                </template>
            </b-carousel-slide>
            <!-- Text slides with image -->
            <b-carousel-slide>
                <template #img>
                <img
                    class=" img-fluid w-100 slika"
                    src="@/assets/msg2.jpeg"
                    alt="image slot"
                    style="object-fit: cover; height:600px;"
                >
                </template>
            </b-carousel-slide>
            <!-- Text slides with image -->
            <b-carousel-slide>
                <template #img>
                <img
                    class=" img-fluid w-100 slika"
                    src="@/assets/msg3.jpg"
                    alt="image slot"
                    style="object-fit: cover; height:600px;"
                >
                </template>
            </b-carousel-slide>
    
            </b-carousel>
    </div>
</template>
<script>
export default {
    name:"carousel",
    data:function(){
        return{
            slide: 0,
            sliding: null
        }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>
<style lang="scss" scoped>
#carousel{
    margin-top: 110px;
    z-index: -1;
}
.carousel-inner{
    max-height: 500px;
}
.carousel-caption{
    z-index: 0;
}
@media screen and (max-width:426px){
    #__BVID__20,#__BVID__18,#__BVID__19{
        object-fit: cover;
        height:400px;
    }

}
</style>