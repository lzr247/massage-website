<template>
    <div id="cene" ref="cenovnik">
        <div class="mx-auto cenovnik">
            <h1>Cenovnik</h1>
            <b-table striped hover :items="items"></b-table>
        </div>
    </div>
</template>
<script>
export default {
    name:"Cene",
    data:function(){
        return{
            items:[
                { nazivMasaže: "Relax", "Trajanje (min)": 30, "Cena (din)": 700 },
                { nazivMasaže: "Relax", "Trajanje (min)": 30, "Cena (din)": 700 },
                { nazivMasaže: "Relax", "Trajanje (min)": 30, "Cena (din)": 700 },
                { nazivMasaže: "Relax", "Trajanje (min)": 30, "Cena (din)": 700 },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    #cene{
        background-color: #3FABAD;
        padding-bottom:20px;
        scroll-margin-top: 70px;
        min-height: 450px;
        display: flex;
        align-items: center;
    }
    .cenovnik{
        width: 70%;
    }
    h1{
        color: white;
        font-size: 30px;
        padding: 20px 0;
    }
</style>