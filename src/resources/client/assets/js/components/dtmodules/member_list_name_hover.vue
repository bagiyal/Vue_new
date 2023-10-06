<template>
    <div  :alt="row.email" :title="row.email" :class="row.cancel_status?'cancelled_pax text-secondary':''">
        <sup class="fa fa-star text-warning f-1-2 cursor" title="VIP/CIP Member" aria-hidden="true" v-if="row.meta_vip"></sup>

        {{row.full_name}} <i class="fa fa-passport cursor text-danger f-1-8 " :title="row.pass_details" v-if="row.pass_details!=''"></i>

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
    sup{
        background: #1e51a4;
        padding: 3px;
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
    }
</style>

