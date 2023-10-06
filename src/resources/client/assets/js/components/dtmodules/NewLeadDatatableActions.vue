<template>
    <div class="btn-group btn-group-xs">

        <button
                v-if="$can(xprops.permission_prefix + 'edit')"
                @click="assign(row.id)"
                type="button"
                class="btn  ">
            <i class="fa fa-user-plus button_style" alt="Assign" title="Assign" aria-hidden="true"></i>

        </button>

        <router-link
            v-if="$can(xprops.permission_prefix + 'edit')"
            :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
            class="btn ">
            <i class="fa fa-pencil-square-o button_style" alt="Edit" title="Edit"  aria-hidden="true"></i>

        </router-link>


        <button
            v-if="$can(xprops.permission_prefix + 'delete')"
            @click="destroyData(row.id)"
            type="button"
            class="btn ">
            <i class="fa fa-trash button_style" alt="Delete" title="Delete" aria-hidden="true"></i>

        </button>
   </div>
</template>


<script>
export default {
    props: ['row', 'xprops'],
    data() {
        return {
            // Code...
        }
    },
    created() {
        // Code...

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
        assign(id){


                let params = new FormData();
                params.set('_method', 'PUT')

               var agent_id=document.querySelector("meta[name='user-id']").getAttribute('content');

                params.set('agent_id',agent_id )
                    params.set('created_by_id', 1)

                    params.set('created_by_team_id', '')
            params.set('meta', JSON.stringify({}));

                axios.post('/api/v1/leads/' + id, params)
            // axios.post('/api/v1/leads/assign/' + id, params)
                    .then(response => {

                        location.reload();
                        // commit('setItem', response.data.data)

                    })
                    .catch(error => {
                        let message = error.response.data.message || error.message
                        let errors  = error.response.data.errors

                        // dispatch(
                        //     'Alert/setAlert',
                        //     { message: message, errors: errors, color: 'danger' },
                        //     { root: true })


                    })
                    .finally(() => {
                        // commit('setLoading', false)
                    })



        },


    }
}
</script>


<style scoped>

</style>
