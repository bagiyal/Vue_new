<template>
    <div class="btn-group btn-group-xs">



        <button
            v-if="user_role=='Administrator (can create other users)'"
                @click="send_noti(row.id)"
                type="button"
                class="btn ">

            <i class="fa fa-thumbs-up" alt="Approve" title="Approve" aria-hidden="true"></i>


        </button>
        <button
            v-if="user_role=='Administrator (can create other users)'"
            @click="reject_noti(row.id)"
            type="button"
            class="btn ">

        <i class="fa fa-ban" alt="Dis-approve" title="Dis-approve" aria-hidden="true"></i>

        </button>
    </div>
</template>


<script>
    export default {
        props: ['row', 'xprops'],
        data() {
            return {
                // Code...

                user_role:'',
            }
        },
        created() {

            var role=document.querySelector("meta[name='user-role']").getAttribute('content');
            this.user_role=role;

            //
        },
        methods: {
            send_noti(e){
                let params = new FormData();
                params.set('agent_id',this.row.agent_id);
                params.set('id',e);
                axios.post('/api/webservices/broadcast' , params);

            },
            reject_noti(e){
                let params = new FormData();
                params.set('id',e);
                axios.post('api/webservices/broadcast_status' , params);
            }
            // broadcast_status

        }
    }
</script>


<style scoped>

</style>
