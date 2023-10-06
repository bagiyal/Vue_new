<template>
<div>
    Day {{day}}-
    <v-select
            name="addplaceloc"
            label="title"
            @input="addtoplaces(day)"
            :value="tour"
            :options="place"


    />
</div>
<!--@click="remove"-->
</template>


<script>


    export default{

        data(){
            return{ tour:[]
            }

        },

        methods: {

            remove(){
              //  alert('hello');
                this.$emit('delete', this.location.id)

            },
            addtoplaces(){
              //  console.log("hi");
                console.log(this.place);
                this.$emit('addplace', this.place.id)
            }
//             updatedays(){
// //alert('hello');
//                     this.$root.$emit(' dayupdate', this.location.id)
//             },




        },

        props: ['day','place']

    }


</script>

<style>
</style>