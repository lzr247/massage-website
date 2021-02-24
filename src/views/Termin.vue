<template>
    <div id="termin">
        <Povratak/>
        <Forma/>
        <Footer2/>
    </div>
</template>
<script>
import Povratak from '@/components/Povratak.vue';
import Footer2 from '@/components/Footer2.vue';
import Forma from "@/components/Forma.vue";
export default {
    name:"Termin",
    components:{
        Povratak,
        Footer2,
        Forma
    }
}
</script>
<style lang="scss" scoped>

</style>