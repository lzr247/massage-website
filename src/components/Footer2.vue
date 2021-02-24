<template>
    <div id="footer">
        <div id="futer" class="mx-auto">
            <b-row>
                <b-col sm="12" md="6">
                    <span class="text-center">Copyright &copy;  2020 | Milutinović Nenad</span>
                </b-col>
                <b-col sm="12" md="6">
                    <span class="text-center">Website made by Lazar Conic</span>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
export default {
    name:"Footer",

}
</script>
<style lang="scss" scoped>
    #footer{
        background-color: #10696F;
        padding: 20px 0;
        position:absolute;
        left:0;
        width: 100%;
        overflow: hidden;
        bottom: 0;
    }
    #futer{
        width: 70%;
    }
    #futer > div > div > span{
        color: white;
    }
    @media screen and (max-width:576px) {
        #futer > div > div > span{
            float: none;
            margin:auto;
        }
    }
    @media screen and (max-height:660px) {
        #footer{
            position: relative;
            margin-top: 536px;
        }
    }
</style>