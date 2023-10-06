<template>
    <div class="btn-group btn-group-xs">
        <i class="fa fa-circle text-success" v-if="row.status=='true'" aria-hidden="true"></i>
        <i class="fa fa-circle text-danger" v-if="row.status=='false'" aria-hidden="true"></i>




    </div>
</template>


<script>
    export default {
        props: ['row','xprops'],
        data() {
            return {

            }
        },
        created() {



        },
        methods: {



        }
    }
</script>


<style scoped>

</style>
