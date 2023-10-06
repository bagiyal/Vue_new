<template>
    <div class="btn-group btn-group-xs">
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>

        <router-link
            v-if="row.refId==null"
            :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
            class="btn">
            <i class="fa fa-pencil-square-o  button_style"  alt="Edit" title="Edit" aria-hidden="true"></i>

        </router-link>


        <button
            v-if="row.refId==null"
            @click="Link(row.id)"
            type="button"
            class="btn ">
            <i class="fa fa-link button_style" alt="Link To Handler" title="Link To Handler" aria-hidden="true"></i>

        </button>

        <button
            @click="unLink(row.id)"
            type="button"
            class="btn ">
            <i class="fa fa-trash button_style" alt="Remove Tour Manager Role" title="Remove Tour Manager Role" aria-hidden="true"></i>

        </button>





    </div>
</template>


<script>
    export default {
        name: "DatatableActionsTourManager",
        props: ['row', 'xprops'],
        data() {
            return {
                hub_list:[],
                show:false,
                assign_model:false,
                assign_task_model:false,
                agency_users:[],
                temp_user:[],
                group_users:[],
                group_users_model:[],
                remark:'',
                task:'',
                end_time:'',
                assigend_list:[],
                loading:false,
                role:'',
                created_by_agent:''

            }
        },
        created() {
            this.role=  document.querySelector("meta[name='user-role']").getAttribute('content');


        },
        methods: {
            unLink(id){
                let msg='Are you sure?';
                let button1='Unlink';

                if(this.row.status){
                    button1='Confirm';

                     msg=this.row.name+' is assigned as a tour manager. Removing him will remove all past data associated with him.';

                }

                this.$swal({
                    title: msg,
                    text: msg=='Are you sure?'?'You won\'t be able to revert this!':'',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: button1,
                    confirmButtonColor: '#dd4b39',
                    focusCancel: true,
                    reverseButtons: true
                }).then(result => {
                    if (result.value) {
                        axios.post('/api/v1/AlterTmRole',{
                            'id':this.row.id,
                            'name':this.row.name,
                            'email':this.row.email,
                            'phone':this.row.phone,
                            'type':false,
                        })
                            .then(response => {
                                this.$store.dispatch(
                                    this.xprops.module + '/destroyData',
                                    id
                                ).then(result => {

                                    this.$eventHub.$emit('delete-success')

                                })
                            })
                            .catch(error => {

                            })
                            .finally(() => {

                            })


                    }
                })
            },
            Link(id){
                try{

                    axios.post('/api/v1/AlterTmRole',{
                        'id':this.row.id,
                        'name':this.row.name,
                        'email':this.row.email,
                        'phone':this.row.phone,
                        'type':true,
                    })
                        .then(response => {

                            if(response.data.status){
                                this.row.refId=response.data.refId;
                                this.$eventHub.$emit('update-success');
                            }
                            else{
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Some Error Occured. Please Try Again Later !',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                            }



                        })
                        .catch(error => {
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Some Error Occured. Please Try Again Later !',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                        })
                        .finally(() => {

                        })
                }
                catch(error){

                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            }
        }
    }
</script>


<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
</style>

