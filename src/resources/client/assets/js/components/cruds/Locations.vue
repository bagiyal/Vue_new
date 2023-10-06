<template>

    <li class="col-xs-12"  :id="location.id" >

        <p class="col-xs-3">{{location.name}} - Days :  </p>
       <div class="col-xs-2"><input type="text" v-model="location.days"></div>
<!--       <input type="hidden" v-model="location.daynights">-->
        <div class="col-xs-1"></div>

        <button @click="remove"  class="col-xs-1 btn btn-danger">Remove</button><div class="col-xs-5"></div></li>

<!--@click="remove"-->
</template>


<script>


    export default{

        data(){
            return{
            }

        },
        watch:{
            'location.days': function(newVal, oldVal) {
                // console.log("watch");
                // console.log('value changed from ' + oldVal + ' to ' + newVal);
                this.location.daynights=parseInt(this.location.days) +1
            },

        },

        methods: {
            updatenight(){

                this.location.daynights=parseInt(this.location.days) +1
            },

            remove(){
              //  alert('hello');
                this.$emit('delete', this.location.id)

            },
//             updatedays(){
// //alert('hello');
//                     this.$root.$emit(' dayupdate', this.location.id)
//             },




        },

        props: ['location','day']

    }


</script>

<style>
</style>
