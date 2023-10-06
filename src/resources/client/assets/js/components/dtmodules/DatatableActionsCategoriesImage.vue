<template>
    <div class="btn-group btn-group-xs" v-if="row.image_url.length>0">

        <a :href="row.image_url" target="_blank" class="btn-sm btn-success">View Image</a>
    </div>
    <div class="btn-group btn-group-xs" v-else>
        <p>No Image</p>
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
