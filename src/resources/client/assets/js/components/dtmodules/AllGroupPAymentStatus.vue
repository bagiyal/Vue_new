<template>
    <div>

       <span v-if="row.paid==='Paid'" >
           <i class="fa fa-money text-success" alt="Paid" title="Paid" aria-hidden="true"></i>

        </span>
        <span v-if="row.paid==='Not Paid'" >
           <i  class="fa fa-money text-danger" alt="Not Paid" title="Not Paid" aria-hidden="true"></i>

        </span>
    </div>


</template>


<script>

    export default {

        props: ['row', 'field'],
        data() {
            return {

            }
        },
        computed:{

        },
        watch:{


        },
        created() {


        },
        methods: {
            // Code...
        },
        filters:{

        },
    }
</script>


<style scoped>


</style>

