<template>
    <div  :alt="row.email" :title="row.email" :class="row.cancelled_status?'cancelled_pax text-secondary':''">
        <sup class="fa fa-star text-warning f-1-2 cursor" title="VIP/CIP Member" aria-hidden="true" v-if="row.meta_vip"></sup>

        {{row.name}}

    </div>
</template>


<script>
    export default {
        props: ['row', 'field'],
        data() {
            return {

            }
        },



    }
</script>


<style scoped>

</style>

