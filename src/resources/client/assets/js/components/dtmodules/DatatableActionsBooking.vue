<template>
    <div class="btn-group btn-group-xs">
        <!--        <router-link-->
        <!--                v-if="$can(xprops.permission_prefix + 'view')"-->
        <!--                :to="{ name: xprops.route + '.show', params: { id: row.id } }"-->
        <!--                class="btn btn-primary"-->
        <!--                >-->
        <!--            View-->
        <!--        </router-link>-->

        <router-link
            v-if="$can(xprops.permission_prefix + 'edit')"
            :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
            class="btn">
            <i class="fa fa-pencil-square-o  button_style"  alt="Edit" title="Edit" aria-hidden="true"></i>

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
                hub_list:[],
            }
        },
        created() {
            // axios.get('/api/v1/hub_booking')
            //     .then(response => {
            //         this.bookings=response.data.data;
            //         // console.log(this.bookings);
            //         for(var j=0;j<this.bookings.length;j++){
            //             this.hub_list.push(this.bookings[j]['group_id']);
            //
            //         }
            //
            //         this.hub_list = [ ...new Set(this.hub_list) ]
            //
            //         var return_arr=[];
            //         for(var k=0;k<this.hub_list.length;k++){
            //             if(this.hub_list[k]===this.row.booking_id){
            //                 this.show=true;
            //             }
            //             return_arr.push({
            //                 'hub' : this.hub_list[k]
            //             });
            //         }
            //         this.hub_list=return_arr;
            //         // console.log(this.hub_list);
            //     });
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
                            axios.get('api/webservices/remove_form?id='+this.row.id);
                        })
                    }
                })
            },

        }
    }
</script>


<style scoped>

</style>
