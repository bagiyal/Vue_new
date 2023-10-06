<template>
    <div v-if="row.visa_status!=''">
        <b>{{row.visa_status}} <i style="font-size: 14px" aria-hidden="true" class="fa fa-info-circle" :title="row.visa_remark"></i></b>
    </div>
</template>


<script>

    export default {
        name: "visastatus",
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
