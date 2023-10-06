<template>
    <div class="btn-group btn-group-xs">
        <div class="container"  v-if="show_modal">
            <div class="modal show in" id="myModal1" style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body" >
                            <button type="button" class="close" data-dismiss="modal" @click="show_modal=false">&times;</button><br>
                            <div class="container-fluid" style="text-align: left">
                            <h2 style="text-align: left">{{row.form_name}}</h2>
                            <hr>
                                <b>Change Form Name :</b>
                                <input
                                    type="text"
                                    class="form_control"
                                    style="width: 60%;border-radius: 10px;height: 30px;"
                                    name="form_name"
                                    placeholder="Enter Form name"
                                    id="new_name"

                            >
                            </div>
                            <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125)" @click="update_name(row.id)">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--        <button-->
<!--            @click="preview(row.id)"-->
<!--            type="button"-->
<!--            class="btn ">-->
<!--            <i class="fa fa-eye button_style"  title="Form Preview" aria-hidden="true"></i>-->

<!--        </button>-->
        <button
            @click="clone"
            type="button"
            class="btn "  style="">
            <i class="fa fa-clone button_style" alt="Clone To New" title="Clone To New" aria-hidden="true"></i>

        </button>

        <span v-if="user_role=='agent'">
              <button
                  v-if="form_user=='show'"

                  type="button"
                  class="btn ">
            <i class="fa fa-pencil-square-o  button_style" @click="show_modal=true"   title="Form Name Edit" aria-hidden="true"></i>

        </button>
        </span>
        <span v-else-if="user_role=='agency'">
                    <router-link
                        v-if="$can(xprops.permission_prefix + 'edit') && form_user=='show'"
                        :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
                        class="btn">
            <i class="fa fa-pencil-square-o  button_style"   title="Form Edit" aria-hidden="true"></i>

        </router-link>
        </span>
        <span v-else>
                    <router-link
                        v-if="$can(xprops.permission_prefix + 'edit') && form_user=='show'"
                        :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
                        class="btn">
            <i class="fa fa-pencil-square-o  button_style"   title="Form Edit" aria-hidden="true"></i>

        </router-link>
        </span>


        <span v-if="user_role=='agent'">
              <button
                  v-if="$can(xprops.permission_prefix + 'delete') && form_user=='show'"
                  @click="destroyData(row.id)"
                  type="button"
                  class="btn ">
            <i class="fa fa-trash button_style"  title="Form Delete" aria-hidden="true"></i>

        </button>
        </span>
        <span v-else>
             <button
                 v-if="$can(xprops.permission_prefix + 'delete')"
                 @click="destroyData(row.id)"
                 type="button"
                 class="btn ">
            <i class="fa fa-trash button_style"  title="Form Delete" aria-hidden="true"></i>

        </button>
        </span>




    </div>
</template>


<script>
    export default {
        props: ['row', 'xprops'],
        data() {
            return {
                form_user:'',
                user_role:'',
                show_modal:false,
                row1:{}

            }
        },
        created() {
            var user_id=document.querySelector("meta[name='user-id']").getAttribute('content');
            var role=document.querySelector("meta[name='user-role']").getAttribute('content');
            // console.log(this.row.id);
            if(role=='agency'){
                // this.item.agency_id=user_id;
                // this.item.agent_id='';
                this.form_user='show';
                this.user_role='agency';
            }
            else if(role=='lms_agent'){
                var user_id=document.querySelector("meta[name='user-id']").getAttribute('content');
                if(this.row.agent_id!==null || this.row.agent_id!==''){

                    if(this.row.agent_id===user_id){
                        this.form_user='show';
                    }
                    else{
                        this.form_user='hide';
                    }
                }
                else{
                    this.form_user='show';
                }
                 this.user_role='agent';
                }



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
            preview(id){
                // alert(id);
                window.open('/api/webservices/form_preview/?form_id=' + btoa(id) , "_blank");

            },
            update_name(id){
                    var name=document.getElementById('new_name').value;
                    if(name.length>0){
                        let params=new FormData();
                        params.set('id',id);
                        params.set('form_name',name);
                        axios.post('/api/v1/update_name',params  )
                            .then(response => {
                                // console.log(response.data)
                                if(response.data==='success'){
                                    this.show_modal=false;
                                    this.row.form_name=name;
                                }
                            });
                    }
                    else{
                        alert('Name field cannot be empty');
                    }

            },
            clone(){
                axios.get('/api/v1/forms/' + this.row.id,{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        this.row1=response.data.data
                        this.$router.push({ name: 'forms.clone', params:{'clone_data':this.row1 ,'newform':true }})


                    })
            }
        }
    }
</script>


<style scoped>

</style>
