<template>
    <div class="btn-group btn-group-xs">
        <router-link
            v-if="row.members.length>0"
            :to="{ name: 'groups.allmembers', params: { id: row.id ,group_id:row.booking_id} }"
            class="btn">
            <i class="fa fa-eye "  title="Members" aria-hidden="true" style="color:darkgray;font-size: 15px"></i>


        </router-link></div>
</template>


<script>
    export default {
        props: ['row', 'field'],
        data() {
            return {

            }
        },
        computed:{


        }


    }
</script>


<style scoped>

</style>

