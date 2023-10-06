<template>
    <div class="text-center">

       <span v-if="row.show_status==='No Show'" >
           <i class="fa fa-circle text-danger" alt="No Show" title="No Show" aria-hidden="true"></i>

        </span>
        <span v-if="row.show_status==='Show'" >
           <i  class="fa fa-circle text-success" alt="Show" title="Show" aria-hidden="true"></i>

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

