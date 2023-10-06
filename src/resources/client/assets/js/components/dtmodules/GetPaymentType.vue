<template>
    <div >

        <p :class="row.transaction_type!=1?'text-success':'text-danger'">{{row.transaction_type!=1?'Credit':'Debit'}}</p>

    </div>
</template>


<script>
    export default {
        props: ['row', 'field'],
        data() {
            return {


                // Code...
            }
        },
        computed:{

        },
        watch:{
            // "row": function() {
            //
            //
            // }
        },
        created() {



// console.log(this.row);
//         this.meta_data=this.row.get_meta;



            // Code...
        },
        methods: {
            // Code...
        }
    }
</script>


<style scoped>

</style>
