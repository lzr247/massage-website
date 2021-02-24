<template>
    <div id="forma">
        <div id="divForme" class="mx-auto py-5">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-1"
                    label="Vaša email adresa:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Unesite email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Vaše ime:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Unesite vaše ime"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Naslov poruke:" label-for="input-3">
                    <b-form-input
                    id="input-3"
                    v-model="form.naslov"
                    required
                    placeholder="Unesite naslov poruke"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="Tekst poruke:" label-for="input-4">
                    <b-form-input
                    id="input-4"
                    v-model="form.tekst"
                    required
                    placeholder="Unesite tekst poruke"
                    ></b-form-input>
                </b-form-group>
                
                <b-button type="submit" variant="primary">Pošalji poruku</b-button>

            </b-form>
        </div>
    </div>
</template>
<script>
  export default {
    name:"Forma",
    data() {
      return {
        form: {
          email: '',
          name: '',
          naslov: '',
          tekst: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        //ovde sendgrid
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>

<style lang="scss">
    #forma{
        background: linear-gradient(20deg,#3FABAD 60%, #1DA3A6 40%);
        position: absolute;
        left: 0;
        width: 100%;
        top: 100px;
        bottom: 50px;
        overflow: visible;

    }
    #forma > div > form{
        margin-top:100px;
    }
    #divForme{
        width: 50%;
        min-height: 100%;
    }
    #input-group-1,#input-group-2,#input-group-3,#input-group-4{
        color:white;
    }
    #divForme > form > button{
        color: white;
        border: 1px solid white;
        background: inherit;
    }
    #divForme > form > button:hover{
        color: #369799;
        border: 1px solid white;
        background: white;
    }
    @media screen and (max-width:425px) {
        #divForme{
            width: 80%;
        }
        #forma > div > form{
            margin-top:10px;
        }
    }
    @media screen and (max-height:660px) and (max-width:420px) {
        #forma{
            min-height: 90%!important;
        }   
    }

</style>