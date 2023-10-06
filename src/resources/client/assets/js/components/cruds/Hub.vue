<template>

    <section class="content-wrapper"  style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker class="arrange_edit-add-task"></task-maker>
            <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>

            <div class="container"  v-if="show_modal">
                <div class="modal show in"  style="display: block;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body" >
                                <button classs="f-2" type="button" class="close" data-dismiss="modal" @click="show_modal=false">&times;</button><br>
                                <div class="container-fluid" style="text-align: left">
                                    <h2 style="text-align: left"></h2>
                                    <hr>
                                    <label for="message" class="f-1-7">Create Sub-Group Of Selected Members</label><br>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <input type="text" v-model="sub_group_name" placeholder="Enter Sub Group Name" class="form-control">
                                        </div>

                                    </div>


                                </div>
                                <button type="button" class="btn btn-success f-1-5" style="background: rgb(34, 80, 125);float: right;" @click="update_sub_group" v-if="sub_group_name!=''">Save</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-10 query-content offset-1">

                    <form-wizard  color="rgb(23, 80, 125)" title=""  subtitle="" ref="wizard"   >
                        <tab-content title="Select Hub" icon="fa fa-check" >
                            <fieldset>

                                <div  class="container-fluid">

                                    <div class="row">

                                    <div class="col-md-5" >
                                        <label  class="custom_label m_t2" >Select Group</label><br>
                                        <v-select v-model="hub_list_modal"
                                                  :clearable="false"
                                                  name="hub"
                                                  label="hub"
                                                  :options="hub_list"
                                                  style="background:#fff"
                                                  @input="in_hub_modal"



                                        />
                                    </div>
                                        <div class="col-md-3">
                                            <label  class="custom_label m_t2" >Airport Hub</label><br>
                                            <v-select v-model="airport_list_modal"
                                                      :clearable="false"
                                                      name="hub"
                                                      label="hub"
                                                      :options="airport_list"
                                                      style="background:#fff"
                                                      @input="in_hub_modal3"





                                            />
                                        </div>
                                    <div class="col-md-4" >
                                        <label  class="custom_label m_t2" >Sub Group</label><br>
                                        <v-select v-model="sub_group_modal"
                                                  :clearable="false"
                                                  name="hub"
                                                  label="hub"
                                                  :options="sub_group"
                                                  style="background:#fff"
                                                  @input="in_hub_modal2"




                                        />
                                    </div>




                                    </div>
                                    <div class="col-md-12  m_t2" >
                                        <div class="row">
                                            <div class="col-md-6 offset-6">
                                                <div class="input-group">

                                                    <input type="text" v-model="localsearch" class="filter_bar2" placeholder="Search" style="height: 35px;">
                                                    <div class="input-group-append">
                                                        <button @click="updatesearch" class="btn btn-secondary filter_button2"  type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                        <button @click="clearsearch" class="btn btn-secondary filter_button2"  type="button">
                                                            <i class="fa fa-times-circle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <table class="table mt-5" style="background-color: white;text-align: center">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col" style="width: 30px;">Select</th>
                                                <th scope="col">Booking Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col">Tour</th>
                                                <th scope="col" >Action</th>


                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(book,index) in SearchArr" :key="book.id" :class="[book.param==1 ? 'text-dark' : 'text-secondary' ]" v-if="SearchArr.length >0 " >
                                                <td >{{index+1}}</td>
                                                <td style="margin-top: 3px; width: 30px">
                                                    <label class="container_input" v-if="book.cancel_status.length==0">
                                                        <input  type="checkbox" v-if="book.param==1" v-model="book.flag" checked  :id="book.id">
                                                        <input  type="checkbox" v-else v-model="book.flag"  :id="book.id">
                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                    </label>
                                                </td>

                                                <td  :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.booking_id}}</td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">
                                                    <sup class="fa fa-star text-warning f-1-2 cursor" title="VIP/CIP Member" aria-hidden="true" v-if="JSON.stringify(book.get_vip).includes('VIP')"></sup>
                                                    <!--                                                    {{book.get_vip.includes('VIP/CIP')}}-->
                                                    {{book.full_name}}
                                                </td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.phone}}</td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.tour_name}}</td>
                                                <td>

                                                    <router-link :to="{ name: 'bookings.edit',params:{id:book.id} }" v-if="book.id" >
                                                        <i class="fa fa-pencil-square-o  button_style"  alt="Edit" title="Edit" aria-hidden="true"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr v-for="(book,index) in SubGroupList" :key="book.id" :class="[book.param==1 ? 'text-dark' : 'text-secondary' ]"  v-if="book.param==1 && SearchArr.length <=0 " >
                                                <td >{{index+1}}</td>
                                                <td style="margin-top: 3px; width: 30px">
                                                    <label class="container_input" v-if="book.cancel_status.length==0">
                                                        <input  type="checkbox" v-if="book.param==1" v-model="book.flag" checked  :id="book.id">
                                                        <input  type="checkbox" v-else v-model="book.flag"  :id="book.id">
                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                    </label>
                                                </td>

                                                <td  :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.booking_id}}</td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">
                                                    <sup class="fa fa-star text-warning f-1-2 cursor" title="VIP/CIP Member" aria-hidden="true" v-if="JSON.stringify(book.get_vip).includes('VIP')"></sup>
<!--                                                    {{book.get_vip.includes('VIP/CIP')}}-->
                                                    {{book.full_name}}
                                                </td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.phone}}</td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.tour_name}}</td>
                                                <td>

                                                    <router-link :to="{ name: 'bookings.edit',params:{id:book.id} }" v-if="book.id" >
                                                        <i class="fa fa-pencil-square-o  button_style"  alt="Edit" title="Edit" aria-hidden="true"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr v-for="(book,index) in displayedRecords" :key="book.id" :class="[book.param==1 ? 'text-dark' : 'text-secondary' ]" v-if="data_show && Disp_Sub.length<=0 && SearchArr.length<=0 ">
                                                <td >{{index+1}}</td>
                                                <td style="margin-top: 3px; width: 30px">
                                                    <label class="container_input" v-if="book.cancel_status.length==0">
                                                        <input  type="checkbox" v-if="book.param==1" v-model="book.flag" checked  :id="book.id">
                                                        <input  type="checkbox" v-else v-model="book.flag"  :id="book.id">
                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                    </label>
                                                </td>

                                                <td  :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.booking_id}}</td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">
                                                    <sup class="fa fa-star text-warning f-1-2 cursor" title="VIP/CIP Member" aria-hidden="true" v-if="JSON.stringify(book.get_vip).includes('VIP')"></sup>
<!--                                                    {{book.get_vip.includes('VIP/CIP')}}-->
                                                    {{book.full_name}}
                                                </td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.phone}}</td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.tour_name}}</td>
                                                <td>

                                                    <router-link :to="{ name: 'bookings.edit',params:{id:book.id} }" v-if="book.id" >
                                                        <i class="fa fa-pencil-square-o  button_style"  alt="Edit" title="Edit" aria-hidden="true"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr v-for="(book,index) in displayedRecords" :class="[book.param==1 ? 'text-dark' : 'text-secondary' ]" v-if="data_show_hub && SearchArr.length<=0">
                                                <td >{{index+1}}</td>
                                                <td style="margin-top: 3px; width: 30px">
                                                    <label class="container_input" v-if="book.cancel_status.length==0">
                                                        <input  type="checkbox" v-if="book.param==1" v-model="book.flag" checked  :id="book.id">
                                                        <input  type="checkbox" v-else v-model="book.flag" :id="book.id">
                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                    </label>
                                                </td>

                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.booking_id}}</td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">
                                                    <sup class="fa fa-star text-warning f-1-2 cursor" title="VIP/CIP Member" aria-hidden="true" v-if="JSON.stringify(book.get_vip).includes('VIP')"></sup>
                                                    {{book.full_name}}
                                                </td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.phone}}</td>
                                                <td :class="book.cancel_status.length>0?'cancelled_pax text-secondary':''">{{book.tour_name}}</td>
                                                <td >

                                                    <router-link :to="{ name: 'bookings.edit',params:{id:book.id} }" v-if="book.id" >
                                                        <i class="fa fa-pencil-square-o  button_style"  alt="Edit" title="Edit" aria-hidden="true"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div style="text-align: center;padding: 2rem;">
                                            <div id="app" v-cloak>
<!--                                                <h2><a target="_blank" href="https://www.npmjs.com/package/vue-pagination-2">Vue Pagination 2</a></h2>-->
<!--                                                <p>Selected page: {{page}}</p>-->
<!--                                                <ul>-->
<!--                                                    <li v-for="(record, index) of displayedRecords" :key="index">{{record.tour_name}}</li>-->
<!--                                                </ul>-->
                                                <pagination v-if="SearchArr.length==0 && Disp_Sub.length === 0  " :records="filtered_bookings.length" v-model="page" :per-page="perPage" @paginate="callback">
                                                </pagination>
                                                <pagination v-if="Disp_Sub.length >1 " :records="Disp_Sub.length" v-model="page" :per-page="perPage" @paginate="callback">
                                                </pagination>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </fieldset>
                        </tab-content>

                        <tab-content title="Hotel" icon="fa fa-check" >

                            <hotel-component :day="day" v-if="hotel_flag && tour_location.length>0" :location="tour_location"  :hotels="hotels"   :tour_location="tour_location" @fetch_new_hotel="update_hotel()"  @showday="on_change()"></hotel-component>


                        </tab-content>

                        <tab-content title="DayPlan" icon="fa fa-check">
                            <dayplan-component  v-if="dayplan_flag" :license="license" :itiplaces="itinerary_places"  :datestart="driver_pick_up_time"  :place="places.places_city_id"  :tour_location="tour_location" :meal="meals_supplement" :button_text="button_text"></dayplan-component>
                        </tab-content>

                        <tab-content title="Documents" icon="fa fa-check">

                            <div  class="container-fluid">
                                <button class="accordiona" @click="accordion2=!accordion2"><i class="fa fa-info-circle" aria-hidden="true"></i>
                                    <b class="f-1-8">How it works?</b>


                                    <i class="fa fa-times" aria-hidden="true" v-if="accordion2" style="float: right"></i>
                                    <i class="fa fa-angle-down" aria-hidden="true" v-else style="float: right"></i>

                                </button>
                                <div class="panela" v-if="accordion2">
                                    <span class="f-1-6">
                                        <p>NB : Any if you do not see a master set of documents
                                                    then ask your agency admin to create the same. You can also add custom documents
                                                    here in the list then drag them to right hand side to make them available for the tour.</p></span>
                                </div>
                                <div class="col-lg-6">
                                    <b class="mb-3">Drag Document you will like to collect</b>

                                    <div style="min-height: 200px;background-color: rgba(0, 83, 159, 0.04);">
                                        <draggable v-model="doc_req_list" group="people" @start="drag=true" @end="drag=false">
                                            <div v-for="(name,index) in doc_req_list " >

                                                <div class="col-md-11 panel panel-default" style="margin-bottom: unset !important">
                                                    <div style="padding: 5px;font-size: 15px">{{name}} <i style="float: right;padding: 2px;font-size: 18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <i class="col-md-1 fa fa-arrow-right" aria-hidden="true" @click="meta_doc_req.push(doc_req_list[index]), doc_req_list.splice([index],1)"></i>
                                            </div>

                                        </draggable>
                                    </div>
                                    <div class="panel panel-default mt-3">
                                        <div style="padding: 5px;font-size: 15px">
                                            <input type="text" v-model="add_doc_tag" placeholder="Define document name" style="border: unset; height: 20px; font-size: 14px;width: 90%;">
                                            <i style="float: right;padding: 2px;font-size: 18px;" v-if="add_doc_tag.length>0" class="fa fa-plus" aria-hidden="true" @click="doc_req_list.push(add_doc_tag),add_doc_tag=''"></i>
                                            <i style="float: right;padding: 2px;font-size: 18px;" v-else class="fa fa-plus cursor" aria-hidden="true" @click="alertt()"></i>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <b class="mb-3">Documents Required</b>
                                    <div style="min-height: 32px;background-color: rgba(0, 83, 159, 0.04);">

                                        <div v-for="(name,index) in meta_doc_req " >

                                            <div class="panel panel-default" style="margin-bottom: unset !important">
                                                <div style="padding: 5px;font-size: 15px">{{name}} <i style="float: right;padding: 2px;font-size:
                                                            18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <draggable v-model="local_meta_doc_req" group="people" @start="drag=true" @end="drag=false">
                                            <div v-for="(name,index) in local_meta_doc_req " >
                                                <i class="col-md-1 fa fa-arrow-left" aria-hidden="true" @click="doc_req_list.push(meta_doc_req[index]), local_meta_doc_req.splice([index],1)" ></i>
                                                <div class="col-md-11 panel panel-default" style="margin-bottom: unset !important">
                                                    <div style="padding: 5px;font-size: 15px">
                                                        {{name}}
                                                         <i style="float: right;padding: 2px;font-size: 18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>

                                        </draggable>

                                    </div></div>

                            </div>

                        </tab-content>

                        <template slot="footer" slot-scope="props">
                            <div class="wizard-footer-left">
                                <wizard-button class="button_left" v-if="props.activeTabIndex > 0 && props.activeTabIndex <=1 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Select Hub</wizard-button>
                                <wizard-button class="button_left" v-if="props.activeTabIndex > 1 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Select Hotel</wizard-button>
                                <wizard-button class="button_left" v-if="props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Select DayPlan</wizard-button>
                            </div>
                            <div class="wizard-footer-right">
                                <wizard-button v-if="props.activeTabIndex == 0" @click.native="props.nextTab(),hotel_flag=true,dayplan_flag=true" class="wizard-footer-right" :style="props.fillButtonStyle">Hotel</wizard-button>
<!--                                <wizard-button v-if="props.activeTabIndex > 0 && !props.isLastStep " @click.native="props.nextTab(),hotel_flag=false,dayplan_flag=true" class="wizard-footer-right" :style="props.fillButtonStyle">Day Plan</wizard-button>-->
<!--                                <wizard-button v-if="props.isLastStep" @click.native="props.prevTab()" class="wizard-footer-left finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Previous' : 'Next'}}</wizard-button>-->
<!--                                <wizard-button v-if="props.isLastStep" @click.native="save_data(2)" class="wizard-footer-right finish-button" :style="props.fillButtonStyle" id="fixed">Update DayPlan</wizard-button>-->
                                <wizard-button v-if="props.activeTabIndex == 1  &&  !props.isLastStep" @click.native="save_data(1)" class="wizard-footer-right" :style="props.fillButtonStyle" id="" style="margin-left: -200px;">Update Hotel</wizard-button>

                                <wizard-button v-if="props.activeTabIndex > 1  && !props.isLastStep" @click.native="save_data(2)" class="wizard-footer-right" :style="props.fillButtonStyle"   style="margin-left: -200px;">Update DayPlan</wizard-button>
                                <wizard-button v-if="props.activeTabIndex > 1  && !props.isLastStep" @click.native="props.nextTab(),hotel_flag=true,dayplan_flag=true,document_flag=true" class="wizard-footer-right" :style="props.fillButtonStyle"  >Documents</wizard-button>
                                <wizard-button v-if=" props.isLastStep" @click.native="save_data(3)" class="wizard-footer-right" :style="props.fillButtonStyle"  >Update Documents</wizard-button>
                                <wizard-button v-if="props.activeTabIndex == 0 && filtered_bookings.length>0" @click.native="show_modal=true" class="wizard-footer-right btn btn-success" :style="props.fillButtonStyle"  style="margin-left: -200px;">Create Sub-Group</wizard-button>
<!--                                <button v-if="filtered_bookings.length>0" type="button" class="btn btn-success" style="font-size: 15px;border-radius: 5px;" @click="show_modal=true">Create Sub-Group</button>-->
                            </div>
                        </template>
                    </form-wizard>









                </div>
            </div>
        </section>
    </section>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'
    import {FormWizard, TabContent,WizardButton,WizardStep} from 'vue-form-wizard'
    import HotelComponent from "./hotelcompbooking";
    import DayplanComponent from "./dayplancompgroupedit";
    import BookingsSingle from "../../store/modules/Bookings/single.js";
    import GroupsSingle from "../../store/modules/Groups/single.js";
    import draggable from 'vuedraggable'

    export default {
        data() {
            return {
                countElement:0,
                page: 1,
                perPage: 30,
                records: [],
                recordsLength: 0,
                hub_list:[],
                bookings:[],
                hub_list_modal:{"hub":"","id":"","meta":""},
                SearchArr:[],
                filtered_bookings:[],
                day: false,
                tour_location:[],
                itinerary_places:[],
                hotel_flag:false,
                dayplan_flag:false,
                document_flag:false,
                next_button:false,
                loading2:false,
                license:{},
                meals_supplement:'',
                driver_pick_up_time:'',
                button_text:false,
                show_modal:false,
                sub_group:[],
                sub_group_modal:'',
                sub_group_name:'',
                airport_list:[],
                airport_list_modal:'',
                data_show:true,
                data_show_hub:false,
                booking_data:[],
                accordion2:false,
                doc_req_list:[],
                add_doc_tag:'',
                local_meta_doc_req:[],
                meta_doc_req:[],
                localsearch:'',
                actualdata:[],
                Disp_Sub:[],





            }
        },
        computed: {
            displayedRecords() {
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.filtered_bookings.slice(startIndex, endIndex);
             
            },
            SubGroupList() {

                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.Disp_Sub.slice(startIndex, endIndex);
              
            },
            ...mapGetters('GroupsSingle', ['loading',  'places', 'cityid', 'hotels',]),
        },

        created() {
            axios.get('/api/v1/hub_booking')
                .then(response => {
                    this.bookings=response.data.data;
                    // console.log(this.bookings);
                    for(var j=0;j<response.data.data.length;j++){
                        let mt='[]';
                        let mg='-';
                       if(typeof this.bookings[j].get_meta[0] !="undefined"){
                           mt=JSON.parse(this.bookings[j].get_meta[0]['meta_value'])
                       }
                        if( this.bookings[j]['group_name'] !=null && this.bookings[j]['group_name'] !=''){
                            mg=this.bookings[j]['group_name']
                        }
                        else{
                            mg=this.bookings[j]['tour_name'];
                        }

                        this.hub_list.push(
                            {'hub':this.bookings[j]['booking_id'] +" || "+ mg,
                            'id':this.bookings[j].id,

                             meta:mt
                            });
                        // this.airport_list.push(this.bookings[j]['Airport_Hub']);

                    }



                    if(this.$route.params.hub_data){

                        if(typeof (this.$route.params.hub_data)!=="undefined"){
                            this.hub_list_modal=this.$route.params.hub_data;
                            this.in_hub_modal(this.$route.params.hub_data);

                        }
                    }
                });
            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="lms_agent"){
                var agency_id= JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id
            }
            else if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency" ||
                document.querySelector("meta[name='user-role']").getAttribute('content')==="Administrator (can create other users)" ){

                var agency_id= JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content'))

            }
            axios.get('/api/v1/user/license/' + agency_id)
                .then(response => {
                    this.license=JSON.parse(response.data.data[0].meta_value);
                })




        },

        destroyed() {

        },
        watch:{
            "tour_location": function() {

                this.tour_location.forEach( (dataObj) => {
                    // console.log(dataObj.id);
                    this.fetchplace(dataObj.id.split('-')[0]);
                        this.fetchhotel(dataObj.id.split('-')[0])
                })



            },
            "hub_list_modal":function () {

                this.meta_doc_req=_.cloneDeep(this.hub_list_modal.meta);

            },
            "document_flag":function () {
                let form = new FormData();
                var agency_id=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'))
                form.set('agency_id', agency_id.id);
                axios.post('/api/webservices/document_tags', form)
                    .then(response => {
                        response.data.forEach((dataObj) => {

                            this.doc_req_list.push(dataObj.value)
                        });
                    });
            }


        },
        methods: {
            callback: function(page) {
                // no need for callback here since you have all your data loaded already
            },
            ...mapActions('GroupsSingle', ['fetchplace', 'fetchhotel']),
            updatesearch() {
                if(this.localsearch!="" && this.filtered_bookings.length>0) {

                    this.setsearch(this.localsearch)
                }
            },
            getPage: function(page) {
                // we simulate an api call that fetch the records from a backend
                this.records = [];
                const startIndex = this.perPage * (page - 1) + 1;
                const endIndex = startIndex + this.perPage - 1;
                for (let i = startIndex; i <= endIndex; i++) {
                    this.records.push(`Item ${i}`);
                }
            },

            clearsearch() {

                this.SearchArr=[];
                if(this.localsearch!=""){

                    this.localsearch=""
                    this.setsearch(this.localsearch)
                }

            },
            setsearch(search){
                let arr=[];
                if(search!==''){
                    if(_.isEmpty(this.actualdata)){
                        this.actualdata=_.cloneDeep(this.filtered_bookings)
                    }

                    this.actualdata.forEach(post => {
                        console.log(post.full_name+"-"+post.flag)
                        let f="empty";
                        if (f === "empty" ) {
                            if((post.full_name.toLowerCase().includes(search.toLowerCase())) || (post.phone.includes(search.toLowerCase()))){

                                f="found";
                                arr.push(post);

                            }
                        }
                    });



                    this.SearchArr=_.cloneDeep(arr);

                  




                }
                else {
                    if(this.actualdata.length>0){
                        this.actualdata.forEach((post) =>{

                            this.filtered_bookings.forEach((data)=>{
                                if(post.id==data.id){
                                    if(data.flag==true){
                                        post.flag=true;
                                    }
                                }
                            })
                        })
                        this.filtered_bookings=_.cloneDeep(this.actualdata);
                        this.actualdata=_.cloneDeep([]);
                    }


                }
            },

            async in_hub_modal(e){
                this.SearchArr=[];
                this.Disp_Sub=[];
                this.sub_group_modal="";
                this.airport_list_modal='';
                this.data_show=false;
                this.data_show_hub=false;
                this.records=[];
                if(e!=null){
                    console.log(e);
                    await axios.get('/api/v1/get_booking_hub', {
                        params: {
                            id: +e.id,
                        }
                    })
                        .then(response => {

                            this.booking_data = response.data.data

                    this.filtered_bookings=[];
                    this.sub_group=[];
                    this.airport_list=[];
                            if (this.booking_data.length > 0) {
                                for (var j = 0; j < this.booking_data.length; j++) {

                                    this.booking_data[j].param = 1;
                                    this.booking_data[j].flag = true;

                                    this.filtered_bookings.push(this.booking_data[j]);
                                    if (this.booking_data[j]['get_meta'][1]['meta_value'] !== null && this.booking_data[j]['get_meta'][1]['meta_value']!== "") {
                                        this.sub_group.push(this.booking_data[j]['get_meta'][1]['meta_value']);
                                }
                                    if (this.booking_data[j]['get_meta'][0]['meta_value'] !== null && this.booking_data[j]['get_meta'][0]['meta_value']!== "") {
                                        this.airport_list.push(this.booking_data[j]['get_meta'][0]['meta_value']);
                                }



                            }
                        }

                    this.sub_group = [ ...new Set(this.sub_group)]
                    this.airport_list = [ ...new Set(this.airport_list)]
                    this.tour_location=_.cloneDeep(JSON.parse(this.filtered_bookings[0].tour_location));
                    this.itinerary_places=_.cloneDeep(JSON.parse(this.filtered_bookings[0].itinerary_places));
                    this.meals_supplement=this.filtered_bookings[0].meals_supplement;
                    this.driver_pick_up_time=this.filtered_bookings[0].driver_pick_up_time;
                    this.next_button=true;


                    // console.log(this.filtered_bookings);


                this.data_show=true;


                        })

                }


            },
            update_hotel(){
                this.places.cites.forEach((val) => {

                    console.log(val.id);
                    var gg=val.id;

                    this.fetchhotel(gg.split('-')[0])

                });
            },
            save_data(loc){

                var member_arr=[];

                for(var j=0;j<this.filtered_bookings.length;j++){

                    if(this.filtered_bookings[j].param==1){
                        var chcekbox=document.getElementById(this.filtered_bookings[j].id).checked;
                        if(chcekbox==true){
                            member_arr.push({

                                'id' : this.filtered_bookings[j].id
                            });
                        }


                    }
                }

                // alert(loc);
                if(member_arr.length>0 && loc!==3){
                    this.loading2=true;
                    let form = new FormData();
                    form.set('book_ids',JSON.stringify(member_arr));
                    form.set('hotel_data', JSON.stringify(this.tour_location));
                    form.set('dayplan_data', JSON.stringify(this.itinerary_places));
                    form.set('source', loc);
                    axios.post('/api/webservices/update_tour', form)
                        .then(response => {
                            this.loading2=false;
                            if(response.data=='success'){
                                this.$eventHub.$emit('update-success')
                            }
                            else if(response.data=='no_data'){
                                alert('No Data Available');
                            }
                        });
                }
                else if(member_arr.length>0 && loc==3){
                    this.loading2=true;

                        if(this.hub_list_modal.id!=""){

                            let form = new FormData();

                            form.set("group_id",this.hub_list_modal.id)
                            form.set("members",JSON.stringify(member_arr))
                            form.set("source",5)
                            form.set("docs",JSON.stringify(this.meta_doc_req))


                            axios.post('/api/webservices/request_doc_group',form)
                                .then(response => {
                                    this.loading2=false;
                                    if(response.data=='success'){
                                        this.$eventHub.$emit('update-success')
                                    }

                                })
                                .catch(error => {
                                    this.loading2=false;
                                    alert("Error while sending ");

                                })


                        }
                        else{
                            alert('Please Select Group');
                        }



                }

                else{
                    alert('Please Select Members');
                }
            },
            update_sub_group(){
                var member_arr=[];




                this.filtered_bookings.forEach((itm)=>{
                    console.log("yaahu",itm.id)
                    if(itm.flag==true){
                            member_arr.push({

                            'id' : itm.id,
                            });
                        }

                } )

                // for(var j=0;j<this.filtered_bookings.length;j++){
                //
                //     console.log(this.filtered_bookings.length)
                //         var chcekbox=document.getElementById(this.filtered_bookings[j].id).checked;
                //         if(chcekbox==true){
                //             member_arr.push({
                //
                //                 'id' : this.filtered_bookings[j].id
                //             });
                //         }
                //
                //
                //
                // }
                // console.log("1");
                // console.log(member_arr);
                if(member_arr.length>0){
                    // console.log(member_arr);
                    this.loading2=true;
                    let form = new FormData();
                    form.set('book_ids',JSON.stringify(member_arr));
                    form.set('sub_group',this.sub_group_name);

                    axios.post('/api/webservices/update_sub_group', form)
                        .then(response => {

                            if(response.data=='success'){

                                this.show_modal=false;

                                this.sub_group=[];
                                this.$eventHub.$emit('update-success')
                                member_arr=[];
                                this.filtered_bookings.forEach((itm1)=>{
                                    console.log("yaahu",itm1.id)
                                    if(itm1.flag==true){
                                        itm1.get_meta[1].meta_value = this.sub_group_name;
                                    }
                                    member_arr.push(itm1);

                                } )
                                // for(var k=0;k<this.filtered_bookings.length;k++){
                                //
                                //         var chcekbox = document.getElementById(this.filtered_bookings[k].id).checked;
                                //         if (chcekbox == true) {
                                //             this.filtered_bookings[k].get_meta[1].meta_value = this.sub_group_name;
                                //
                                //
                                //         }
                                //         member_arr.push(this.filtered_bookings[k]);
                                //
                                // }



                                // this.filtered_bookings=member_arr;
                                // console.log("2");
                                // console.log(member_arr);
                                member_arr=[];
                                for(var l=0;l<this.booking_data.length;l++){

                                    for(var m=0;m<this.filtered_bookings.length;m++){


                                        if(this.booking_data[l].id==this.filtered_bookings[m].id) {
                                            // this.bookings[l].sub_group=this.sub_group_name;

                                                this.sub_group.push(this.filtered_bookings[m].get_meta[1].meta_value);

                                                var chcekbox = document.getElementById(this.filtered_bookings[m].flag);
                                                if (chcekbox == true) {
                                                    this.booking_data[l].get_meta[1].meta_value = this.sub_group_name;

                                                }


                                        }

                                    }

                                    member_arr.push(this.booking_data[l]);

                                }

                                this.sub_group = [ ...new Set(this.sub_group)]
                                // this.sub_group_modal='';
                                this.sub_group_modal=this.sub_group_name;
                                    this.in_hub_modal2(this.sub_group_name);
                                this.booking_data=member_arr;
                                this.loading2=false;
                                this.sub_group_name='';
                                // console.log("3");
                                // console.log(member_arr);
                            }

                        });
                }
                else{
                    alert('Please Select Members');
                }

            },
            in_hub_modal2(e){
                // alert(e);
                this.Disp_Sub=[];
                this.SearchArr=[];
                this.page=1
                this.airport_list_modal='';
                this.data_show=false;
                this.data_show_hub=false;
                if(e!==null || e!="All"){
                    var return_arr1=[];
                    var return_arr2=[];
                    var final_arr=[];
                    var i = '';


                    for(var j=0;j<this.filtered_bookings.length;j++){

                        if(e===this.filtered_bookings[j].get_meta[1].meta_value){
                            this.filtered_bookings[j].param=1;
                            this.filtered_bookings[j].flag=true;
                            console.log("hhh",this.filtered_bookings[j]);



                            final_arr.push(this.filtered_bookings[j]);





                        }
                        else{
                            this.filtered_bookings[j].param=0;
                            final_arr.push(this.filtered_bookings[j]);
                        }

                    }
                    final_arr.forEach((data)=>{
                        if(data.param==1){
                            this.Disp_Sub.push(data);
                        }



                    })

                    // for(i=0;i<=final_arr.length;i++){
                    //     console.log(final_arr[i])
                    //     if(final_arr[i].param===1){
                    //         this.Disp_Sub.push(final_arr[i])
                    //     }
                    //
                    // }
                    // this.Disp_Sub = _.cloneDeep(final_arr);
                    // console.log("disp_sub",this.Disp_Sub )
                    // this.filtered_bookings=_.cloneDeep(final_arr);


                }

                else{

                    var return_arr=[];
                    for(var j=0;j<this.filtered_bookings.length;j++){
                        // document.getElementById(this.filtered_bookings[j].id).checked = false;
                        this.filtered_bookings[j].param=0;
                        return_arr.push(this.filtered_bookings[j]);

                    }
                    this.filtered_bookings=_.cloneDeep(return_arr);
                }
                this.data_show=true;

            },
            in_hub_modal3(e){

                this.page=1

                this.SearchArr=[];
                console.log(this.page)
                this.Disp_Sub=[];

                this.sub_group_modal="";
                this.data_show=false;
                this.data_show_hub=false;
                if(e!==null || e!="All"){
                    var return_arr1=[];
                    var return_arr2=[];
                    var final_arr=[];


                    for(var j=0;j<this.filtered_bookings.length;j++){

                        if(e===this.filtered_bookings[j].get_meta[0].meta_value){
                            return_arr1.push(this.filtered_bookings[j]);
                        }else{
                            return_arr2.push(this.filtered_bookings[j]);
                        }

                    }
                    for(var l=0;l<return_arr1.length;l++){
                        return_arr1[l].param=1;
                        return_arr1[l].flag=true;
                        final_arr.push(return_arr1[l]);

                    }
                    if(return_arr2.length>0){
                        for(var k=0;k<return_arr2.length;k++){
                            return_arr2[k].param=0;
                            return_arr2[k].flag=false;
                            final_arr.push(return_arr2[k]);
                        }
                    }
                    this.filtered_bookings=_.cloneDeep(final_arr);

                }
                else{
                    // this.sub_group_modal=[];
                    var return_arr=[];
                    for(var j=0;j<this.filtered_bookings.length;j++){
                        // document.getElementById(this.filtered_bookings[j].id).checked = false;
                        this.filtered_bookings[j].param=0;
                        return_arr.push(this.filtered_bookings[j]);

                    }
                    this.filtered_bookings=_.cloneDeep(return_arr);
                }

                this.data_show_hub=true;
            },
            on_change(){
                this.$refs.wizard.nextTab();
            },
            alertt(){
                alert('Please define document name');
            },




        },
        components: { HotelComponent, DayplanComponent,  FormWizard,TabContent, WizardButton, WizardStep,draggable,Pagination}
    }
</script>


<style scoped>
    #app {
        text-align: center;
    }

    [v-cloak] {
        display: none;
    }
    .arrange_edit-add-task{
        position: relative;
        top: -122px;
        right: -4px;
    }
    @media screen and (min-width: 1200px) and (max-width: 1300px){
        .arrange_edit-add-task{
            position: relative;

            right: -13px;
        }
    }
    @media screen and (min-width: 1900px){
        .arrange_edit-add-task{
            position: relative;

            right: -20px;
        }
    }
    .custom_label{
        font-size: 17px;
        color: gray;
        font-weight: bolder;
    }
    .custom_label2{
        font-size: 15px;
        color: gray;
        font-weight: 400;
        -webkit-margin-bottom:10px !important;
    }
    th{
        font-size: 15px;
    }
    .button_left{
        margin-left:-200px !important;
    }


    .field_class{
        border: none !important;
        border-radius: 5px !important;
        padding:10px;
    }
    .accordiona {
        background-color: #D1ECF1;
        color: #0C5477;
        cursor: pointer;
        padding: 6px;
        border-radius: 4px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
    }

</style>
