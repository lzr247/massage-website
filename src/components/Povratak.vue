<template>
    <div id="navigacija">
        
        <b-navbar>
            <b-navbar-brand id="navLevi" to="/" class="mx-auto">Milutinović Nenad</b-navbar-brand>


            <!-- Elementi menija gurnuti u desno, nestaju na md velicinu -->
            <b-navbar-nav  id="navDesni" class="mx-auto">
                    <b-nav-item to="/"><a><i class="fas fa-arrow-left"></i>  Povratak na početnu stranu</a></b-nav-item>
            </b-navbar-nav>

        </b-navbar> 
        
    </div>
</template>

<script>
export default {
    name:"Navigacija",
    data:function(){
        return{

        }
    },

}
</script>

<style lang="scss" scoped>
#navigacija{
    border-top: 10px solid #10696F;
    border-bottom: 1px solid gray;
    width: 100%;
    background: white;
    padding: 20px 0px;
    transition: all 0.4s;
}
#navLevi{
    color: #10696F;
    font-size: 25px;
    font-family: Courier;
    font-weight: bold;
    cursor: pointer;
}
#navDesni > li > a > a{
    font-size: 20px;
}
.fas{
    font-size: 20px;
}



</style>