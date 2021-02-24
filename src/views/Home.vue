<template>
  <div class="home">
    <Navigacija/>
    <DugmeTop/>
    <Carousel/>
    <Jumbotron/>
    <Masaze/>
    <Paralax/>
    <Cene/>
    <Kontakt/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigacija from "@/components/Navigacija.vue";
import Carousel from "@/components/Carousel.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Masaze from "@/components/Masaze.vue";
import Paralax from "@/components/Paralax.vue";
import Cene from "@/components/Cene.vue";
import Kontakt from "@/components/Kontakt.vue";
import Footer from "@/components/Footer.vue";
import DugmeTop from "@/components/DugmeTop.vue";

export default {
  name: 'Home',
  components: {
    Navigacija,
    Carousel,
    Jumbotron,
    Masaze,
    Paralax,
    Cene,
    Kontakt,
    Footer,
    DugmeTop
  }
}
</script>
