<template>
    <div class="btn-group btn-group-xs">
      <div class="container"  v-if="show_modal">
            <div class="modal show in" id="myModal1" style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close f-2" data-dismiss="modal" @click="show_modal=false">&times;</button><br>
                            <div class="container-fluid">
                                <table class="table "  style="text-align: center;">
                                    <thead>
                                    <tr>
                                        <th>Quote</th>
                                        <th>Delievery Status</th>

                                    </tr>
                                    </thead >
                                    <!-- <tbody v-for="(qut,index) in (sns_arr)" v-for="qut in this.sns_arr" >
                                   <td>Q: {{ index+1 }}</td>
                                    <td> {{ qut }}</td>


                                  </tbody> -->
                                    <tbody   id='body_sec'>

                                    <tr v-for="(qut,index) in sns_data" style="background: white !important;">
                                        <td>Q: {{ index+1 }}</td>
                                        <td> {{ qut }}</td>
                                    </tr>

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button
            @click="get_sns_data"
            type="button"
            class="btn "  style="">
            <i class="fa fa-envelope button_style" aria-hidden="true" alt="Mail Status" title="Mail Status" data-toggle="modal" data-target="#myModal1"></i>


        </button>

        <button
            @click="clone"
            type="button"
            class="btn "  style="">
            <i class="fa fa-clone button_style" alt="Clone To New" title="Clone To New" aria-hidden="true"></i>

        </button>

        <router-link
            v-if="$can(xprops.permission_prefix + 'edit')"
            :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
            class="btn ">
            <i class="fa fa-pencil-square-o button_style" alt="Edit" title="Edit" aria-hidden="true"></i>

        </router-link>

        <button
            v-if="$can(xprops.permission_prefix + 'delete')"
            @click="destroyData(row.id)"
            type="button"
            class="btn">
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
                meta:{},
                meta_data:[],
                sns_data:[],
                show_modal:false,
                row1:{}

            }
        },
        created() {


        },
        methods: {
            clone(){

                axios.get('/api/v1/queries/' + this.row.id,{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        this.row1=response.data.data



                this.meta_data = this.row1.get_meta;
                this.row1.itinerary_places=JSON.parse(this.row1.itinerary_places);
                this.row1.tour_location=JSON.parse(this.row1.tour_location);


                this.row1.meals_supplement=JSON.parse(this.row1.meals_supplement);
                this.row1.tour_cost=JSON.parse(this.row1.tour_cost);
                this.row1.remarks=JSON.parse(this.row1.remarks);

                for(let i=0;i<this.row1.get_meta.length;i++){

                    if( this.row1.get_meta[i].meta_key=='meta_infant'){

                        this.meta.meta_infant=this.row1.get_meta[i].meta_value;
                    }

                    if( this.row1.get_meta[i].meta_key=='meta_extra_bed'){

                        this.meta.meta_extra_bed=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_transport'){

                        this.meta.meta_transport=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_source'){


                        this.meta.meta_source=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_flightprice'){

                        this.meta.meta_flightprice=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_flight'){

                        this.meta.meta_flight=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_welcome_mail'){

                        this.meta.meta_welcome_mail=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_incl_ex'){

                        this.meta.meta_incl_ex=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_closuer'){

                        this.meta.meta_closuer=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_exp_cost'){

                        this.meta.meta_exp_cost=JSON.parse(this.row1.get_meta[i].meta_value);
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_exp_costflight'){

                        this.meta.meta_exp_costflight=JSON.parse(this.row1.get_meta[i].meta_value);
                    }
                    if( this.row1.get_meta[i].meta_key=='markup1'){

                        this.meta.markup1=JSON.parse(this.row1.get_meta[i].meta_value);
                    }
                    if( this.row1.get_meta[i].meta_key=='markup2'){

                        this.meta.markup2=JSON.parse(this.row1.get_meta[i].meta_value);
                    }
                    if( this.row1.get_meta[i].meta_key=='sellingprice1'){

                        this.meta.sellingprice1=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='sellingprice2'){

                        this.meta.sellingprice2=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='interactions'){

                        this.meta.interactions=JSON.parse(this.row1.get_meta[i].meta_value);
                    }
                    if( this.row1.get_meta[i].meta_key=='lost'){

                        this.meta.lost=JSON.parse(this.row1.get_meta[i].meta_value);
                    }
                    if( this.row1.get_meta[i].meta_key=='by_lead'){

                        this.meta.by_lead=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='last_quote_no'){

                        this.meta.last_quote_no=this.row1.get_meta[i].meta_value;
                    }


                    if( this.row1.get_meta[i].meta_key=='meta_executive_name'){

                        this.meta.meta_executive_name=this.row1.get_meta[i].meta_value;
                    }
                    if( this.row1.get_meta[i].meta_key=='meta_executive_no'){

                        this.meta.meta_executive_no=this.row1.get_meta[i].meta_value;
                    }

                }
                this.$router.push({ name: 'queries.clone', params:{'clone_data':this.row1 ,'clone_meta':this.meta,'itiplace':JSON.stringify(this.row1.itinerary_places),'tour_loc':JSON.stringify(this.row1.tour_location),'newlead':true }})
                    })
            },
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
            get_sns_data(){
                let form = new FormData();
                form.set('book_id',this.row.booking_id);
                axios.post('/api/webservices/fetch_sns_logs' , form)
                    .then(response => {this.sns_data=response.data
                        console.log('------------------');
                        console.log(this.sns_data);
                        this.show_modal=true;

                    })
                // alert(this.row.booking_id);
            }
        }
    }
</script>


<style scoped>

</style>
