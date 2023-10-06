<template>
    <div class="btn-group btn-group-xs">


<!--        <button-->
<!--            @click="update_name(row.id)"-->
<!--            class="btn">-->
<!--            <i class="fa fa-pencil-square-o  button_style"   title="Form Edit" aria-hidden="true"></i>-->

<!--        </button>-->
        <router-link

            :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
            class="btn">
            <i class="fa fa-pencil-square-o  button_style"  alt="Edit" title="Edit" aria-hidden="true"></i>

        </router-link>



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
