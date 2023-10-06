<template>
    <div class="btn-group btn-group-xs">
<!--        <div class="container"  v-if="show_modal">-->
<!--            <div class="modal show in" id="myModal1" style="display: block;">-->
<!--                <div class="modal-dialog">-->
<!--                    <div class="modal-content">-->
<!--                        <div class="modal-body" >-->
<!--                            <button type="button" class="close" data-dismiss="modal" @click="show_modal=false">&times;</button><br>-->
<!--                            <div class="container-fluid" style="text-align: left">-->
<!--                                <h2 style="text-align: left">{{row.form_name}}</h2>-->
<!--                                <hr>-->
<!--                                <b>Change Form Name :</b>-->
<!--                                <input-->
<!--                                    type="text"-->
<!--                                    class="form_control"-->
<!--                                    style="width: 60%;border-radius: 10px;height: 30px;"-->
<!--                                    name="form_name"-->
<!--                                    placeholder="Enter Form name"-->
<!--                                    id="new_name"-->

<!--                                >-->
<!--                            </div>-->
<!--                            <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125)" @click="update_name(row.id)">Save</button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->



<!--              <button-->

<!--                  type="button"-->
<!--                  class="btn ">-->
<!--            <i class="fa fa-pencil-square-o  button_style" @click="show_modal=true"   title="Form Name Edit" aria-hidden="true"></i>-->

<!--        </button>-->




                    <button
                        @click="update_name(row.id)"
                        class="btn">
            <i class="fa fa-pencil-square-o  button_style"   title="Form Edit" aria-hidden="true"></i>

        </button>




              <button

                  @click="destroyData(row.id)"
                  type="button"
                  class="btn ">
            <i class="fa fa-trash button_style"  title="Form Delete" aria-hidden="true"></i>

        </button>




    </div>
</template>


<script>
    export default {
        props: ['row','xprops'],
        data() {
            return {
                form_user:'',
                user_role:'',
                show_modal:false,

            }
        },
        created() {
            var user_id=document.querySelector("meta[name='user-id']").getAttribute('content');
            var role=document.querySelector("meta[name='user-role']").getAttribute('content');


        },
        methods: {

            destroyData(id) {
                this.$swal({
                    title: 'Are you sure?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    confirmButtonColor: '#dd4b39',
                    focusCancel: true,
                    reverseButtons: true
                }).then(result => {
                    if (result.value) {
                        this.$store.dispatch(
                            this.xprops.module + '/destroyData',
                            id
                        ).then(result => {
                            this.$eventHub.$emit('delete-success')
                        })
                    }
                })
            },

            update_name(id){

                this.xprops.update_id=this.row.id;

            },

        }
    }
</script>


<style scoped>

</style>
