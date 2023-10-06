<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Query List</h1>
        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">

                        <div class="col-md-12 container-fluid" >
                            <div class="row">
                                <div class="col-md-2">
                                    <div v-if="showtoagency" class="box-body">
                                    <div class="btn-group">
                                        <router-link
                                            v-if="$can(xprops.permission_prefix + 'create')"
                                            :to="{ name: xprops.route + '.create' }"
                                            class="btn btn-success btn-sm"
                                            style="font-size: 15px"
                                        >
                                            <i class="fa fa-plus"></i> Add new
                                        </router-link>

                                        <button type="button" style="font-size: 15px;margin-left: 5px;background-color: #ffc107 !important;" class="btn btn-default btn-sm" @click="fetchData">
                                            <i class="fa fa-refresh" :class="{'fa-spin': loading}"></i> Refresh
                                        </button>
                                    </div>
                                </div>

                                </div>
                                <div class="col-md-2">
                                    <div class="input-group" style="margin-top: 10px;">
                                        <p class="extension_title">Filter :</p>
                                        <label class="switch">
                                            <input type="checkbox" class="switch-input"  v-model="filtertoggle">
                                            <span class="switch-label" data-on="ON" data-off="OFF"></span>
                                            <span class="switch-handle"></span>
                                        </label>

                                        <i style="z-index:2;padding: 3px;padding-left:10px;" class="fa fa-eye" aria-hidden="true" v-if="filter_obj.status" @click="filtermodel=true"></i>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group" style="margin-top: 10px;">
                                        <input type="text" v-model="localsearch"  class="filter_bar2" placeholder="Search" style="height: 35px;">



                                        <div class="input-group-append">
                                            <button @click="updatesearch" class="btn btn-secondary filter_button2" v-if="search"  type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                            <button @click="clearsearch" class="btn btn-secondary filter_button2" v-if="clear" type="button">
                                                <i class="fa fa-times-circle"></i>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="col-sm">
                                        <download-excel
                                            class   = "btn btn-default"
                                            :data   = "json_data"
                                            :fields = "json_fields"
                                            worksheet = "My Worksheet"
                                            name    = "query.xls"
                                        >
                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>
                                        </download-excel>

                                        <download-excel
                                            class   = "btn btn-default"
                                            :data   = "json_data"
                                            :fields = "json_fields"
                                            type    = "csv"
                                            name    = "query.csv"
                                        >
                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="CSV"  ><br>
                                            <p class="extension_title">CSV</p>

                                        </download-excel>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div class="box-body">
<!--                            <div class="row" v-if="loading">-->
<!--                                <div class="col-xs-4 col-xs-offset-4">-->
<!--                                    <div class="alert text-center">-->
<!--                                        <i class="fa fa-spin fa-refresh"></i> Loading-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                            <div v-if="filtermodel">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" @click="filtermodel=false">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>

                                                    </div>
                                                    <div class="modal-body">

                                                        <div class="row">

                                                        <div class="col-12 model_div">
                                                        <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                          <span class="input-group-text" id="inputGroup-sizing-default">Sector</span>
                                                        </div>

                                                        <input type="text" class="form-control"  v-model="filter_obj.filter_sector">
                                                        </div>
                                                        </div>



                                                            <div class="col-12 mt-2 model_div" >

                                                                <div class="form-check form-check-inline">
                                                                    <h3> Query : </h3>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" class="form-check-input" v-model="filter_obj.queryfilter" value="4">
                                                                    <label class="form-check-label" for="materialInline1">All</label>
                                                                </div>


                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" class="form-check-input" v-model="filter_obj.queryfilter" value="1">
                                                                    <label class="form-check-label" for="materialInline2">Open</label>
                                                                </div>


                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" class="form-check-input" v-model="filter_obj.queryfilter" value="2">
                                                                    <label class="form-check-label" for="materialInline3">Query To Itinerary</label>
                                                                </div>

                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" class="form-check-input" v-model="filter_obj.queryfilter" value="3">
                                                                    <label class="form-check-label" for="materialInline4">Lost</label>
                                                                </div>


                                                            </div>

                                                            <div class="col-12 model_div">
                                                            <div class="input-group">
                                                          <div class="input-group-prepend">
                                                            <span class="input-group-text" id=""> Travel Date</span>
                                                          </div>
                                                          <date-picker
                                                          v-model="filter_obj.filter_datefrom"
                                                          :config="$root.dpconfigDate"
                                                          name="driver_pickup_date_time"
                                                          placeholder="From"
                                                        >
                                                        </date-picker>
                                                           <date-picker
                                                          v-model="filter_obj.filter_dateto"
                                                          :config="$root.dpconfigDate"

                                                          name="driver_pickup_date_time"
                                                          placeholder="To"
                                                        >
                                                        </date-picker>
                                                        </div>
                                                            </div>

                                                          <div class="col-12 model_div">
                                                          <div class="input-group">
                                                        <div class="input-group-prepend">
                                                          <span class="input-group-text" >Since Last Quote</span>
                                                        </div>
                                                        <select  class="form-control"  v-model="filter_obj.relation">

                                                        <option value="=">=</option>
                                                        <option value=">">></option>
                                                        <option value="<">></option>
                                                        <option value=">=">>=</option>
                                                        <option value="<=">>=</option>

                                                    </select>
                                                              <label class="switch">
                                                                  <input type="checkbox" class="switch-input"  v-model="dayfilter">
                                                                  <span class="switch-label" data-on="" data-off=""></span>
                                                                  <span class="switch-handle"></span>

                                                              </label>
                                                              <input type="number" v-if="dayfilter" class="form-control" placeholder="Days"  v-model="filter_obj.sincelastdays">
                                                    <input type="number" v-else class="form-control" placeholder="Hours"  v-model="filter_obj.sincelast">

                                                      </div>
                                                          </div>


                                                            <div class="col-12 model_div" >
                                                            <div class="row" >
                                                              <div class="col-6 " >
                                                                <div class="form-check form-check-inline"><h3>Score :</h3></div>
                                                                  <div class="form-check form-check-inline" style="margin-left: 1px">

                                                                      <div class="bg-danger" @click="filter_obj.score=5" style="width:30px;height: 18px;text-align:center;cursor: pointer;">
                                                                          <div style="font-size: 12px;color: white;font-weight: 600;">5</div>
                                                                          <i class="fas fa-caret-up" style="margin-top: 0px" v-if="filter_obj.score==5"></i></div>


                                                                      <div class=" bg-warning" @click="filter_obj.score=4" style="width:30px;height: 18px;text-align:center;cursor: pointer;">
                                                                          <div style="font-size: 12px;color: white;font-weight: 600;">4</div>
                                                                          <i class="fas fa-caret-up" style="margin-top: 0px" v-if="filter_obj.score==4"></i></div>
                                                                      <div class="bg-primary" @click="filter_obj.score=3"  style="width:30px;height: 18px;text-align:center;cursor: pointer;">
                                                                          <div style="font-size: 12px;color: white;font-weight: 600;">3</div>
                                                                          <i class="fas fa-caret-up" style="color:black;margin-top:0px"
                                                                        v-if="filter_obj.score==3"></i></div>
                                                                      <div class=" bg-success" @click="filter_obj.score=2" style="width:30px;height: 18px;text-align:center;cursor: pointer;">
                                                                          <div style="font-size: 12px;color: white;font-weight: 600;">2</div>
                                                                          <i class="fas fa-caret-up" style="margin-top: 0px" v-if="filter_obj.score==2"></i></div>
                                                                      <div class=" bg-dark"  @click="filter_obj.score=1" style="width:35px;height: 18px;text-align:center;cursor: pointer;">
                                                                          <div style="font-size: 12px;color: white;font-weight: 600;">1</div>
                                                                          <i class="fas fa-caret-up" style="margin-top: 0px" v-if="filter_obj.score==1" ></i></div>


                                                                  </div>
                                                                </div>
                                                                <div class="col-6 " >
                                                                    <div class="form-check form-check-inline"><h3>Feel :</h3></div>
                                                                    <div class="form-check form-check-inline" style="margin-left: 1px">

                                                                        <div class="bg-danger" @click="filter_obj.feel=5" style="width:30px;height: 18px;text-align:center;cursor: pointer;">
                                                                            <div style="font-size: 12px;color: white;font-weight: 600;">5</div>
                                                                            <i class="fas fa-caret-up" style="margin-top: 0px" v-if="filter_obj.feel==5"></i></div>


                                                                        <div class=" bg-warning" @click="filter_obj.feel=4" style="width:30px;height: 18px;text-align:center;cursor: pointer;">
                                                                            <div style="font-size: 12px;color: white;font-weight: 600;">4</div>
                                                                            <i class="fas fa-caret-up" style="margin-top: 0px" v-if="filter_obj.feel==4"></i></div>
                                                                        <div class="bg-primary" @click="filter_obj.feel=3"  style="width:30px;height: 18px;text-align:center;cursor: pointer;">
                                                                            <div style="font-size: 12px;color: white;font-weight: 600;">3</div>
                                                                            <i class="fas fa-caret-up" style="color:black;margin-top:0px"
                                                                          v-if="filter_obj.feel==3"></i></div>
                                                                        <div class=" bg-success" @click="filter_obj.feel=2" style="width:30px;height: 18px;text-align:center;cursor: pointer;">
                                                                            <div style="font-size: 12px;color: white;font-weight: 600;">2</div>
                                                                            <i class="fas fa-caret-up" style="margin-top: 0px" v-if="filter_obj.feel==2"></i></div>
                                                                        <div class=" bg-dark"  @click="filter_obj.feel=1" style="width:35px;height: 18px;text-align:center;cursor: pointer;">
                                                                            <div style="font-size: 12px;color: white;font-weight: 600;">1</div>
                                                                            <i class="fas fa-caret-up" style="margin-top: 0px" v-if="filter_obj.feel==1" ></i></div>


                                                                    </div>

                                                                    </div>

                                                              </div>
                                                            </div>


                                                            <!-- <div class="col-2 mt-3"><p style="opacity:0">-</p> </div>
                                                            <div class="col-5  mt-2"> Score: <input min="1" max="5" type="number" class="form-control"  v-model="filter_obj.score">  </div>

                                                            <div class="col-5  mt-2">Feel: <input min="1" max="5" type="number" class="form-control"  v-model="filter_obj.feel"> </div> -->

                                                        </div>
                                                            <div class="col-12 model_div" style="text-align:center;margin-top: 30px;">
                                                        <button  class="btn btn-danger btn-lg" @click="clearfilter()">Clear</button>
                                                        <button class="btn btn-success btn-lg" @click="applyfilter()">Apply</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <!-- Search form -->
<!--                            <input class="form-control" :value="search" @keydown="updatesearch" type="text" placeholder="Search" aria-label="Search">-->


                            <!-- <div class="input-group w-50">
                            Filter :






                                <download-excel
                                    class   = "btn btn-default"
                                    :data   = "json_data"
                                    :fields = "json_fields"
                                    worksheet = "My Worksheet"
                                    name    = "query.xls"
                                    >Excel
                                    <i class="fa fa-table"></i>
                                </download-excel>
                                <download-excel
                                    class   = "btn btn-default"
                                    :data   = "json_data"
                                    :fields = "json_fields"
                                    type    = "csv"
                                    name    = "query.csv"
                                >CSV
                                    <i class="fa fa-table"></i>
                                </download-excel>

                            </div> -->



                            <datatable
                                    v-if="!loading"
                                    :columns="columns"
                                    :data="data"
                                    :total="total"
                                    :query="query"
                                    :xprops="xprops"
                                    />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableActionsq from '../../dtmodules/DatatableActionsq'
import DatatableSingle from '../../dtmodules/DatatableSingle'
import DatatableList from '../../dtmodules/DatatableList'
import DatatableCheckbox from '../../dtmodules/DatatableCheckbox'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Totalpax from "../../dtmodules/Totalpax";
import sincelast from "../../dtmodules/sincelast";
import statusdata from "../../dtmodules/statusdata";
import scorefeel from "../../dtmodules/scorefeel";
import dateonly from "../../dtmodules/dateonly";



export default {
    data() {
        return {
            columns: [
                // { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                ],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'QueriesIndex',
                route: 'queries',
                permission_prefix: 'query_'
            },
            localsearch:'',
            json_fields: {
                'Sector': 'tour_name',
                'Query No.':'booking_id',
                    'Travel Date':'driver_pickup_date_time',
        'Traveler name':'traveler_name',
        'Status':'status',
        'Phone':'phone'
    },
            json_data:[],
            filtermodel:false,
            filtertoggle:false,
            dayfilter:true,
            license:{},
        showtoagency:true,
            clear:false,
            search:true,
        }
    },
    mounted(){
       this.setcolumn(['tour_name',
           'booking_id',
           'driver_pickup_date_time',
           'traveler_name',
           'status',
           'phone']);
    },
    created() {
        if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency"){
            this.showtoagency=false
        }
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

        if(this.license.tech_aug){
            this.columns=[ { title: 'Sector', field: 'tour_name', sortable: true ,colStyle: 'width: 15%;',tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Query No.', field: 'booking_id', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Travel Date', field: 'driver_pickup_date_time', sortable: true, tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Budget', field: 'budget', sortable: true ,tdClass: 'font_style' ,thClass: 'font_style2'},
                { title: 'Traveler name', field: 'traveler_name', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},

                { title: 'Phone', field: 'phone', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},

                { title: 'PAX', field: 'created_by_team', tdComp: Totalpax ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: ' Since Last Quote', field: 'created_by_team', tdComp: sincelast ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: ' Status', field: 'created_by_team', tdComp: statusdata ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: ' Score/Feel', field: 'created_by_team', tdComp: scorefeel ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Actions', tdComp: DatatableActionsq, visible: true, thClass: 'text-right font_style2', tdClass: 'text-right font_style', colStyle: 'width: 130px;' }
            ];
        }
else{
            this.columns=[ { title: 'Sector', field: 'tour_name', sortable: true ,colStyle: 'width: 15%;',tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Query No.', field: 'booking_id', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Travel Date', field: 'driver_pickup_date_time', sortable: true,tdComp:dateonly ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Budget', field: 'budget', sortable: true,tdClass: 'font_style' ,thClass: 'font_style2'},
                { title: 'Traveler name', field: 'traveler_name', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},

                { title: 'Phone', field: 'phone', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},

                { title: 'PAX', field: 'created_by_team', tdComp: Totalpax ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: ' Since Last Quote', field: 'created_by_team', tdComp: sincelast ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: ' Status', field: 'created_by_team', tdComp: statusdata ,tdClass: 'font_style',thClass: 'font_style2'},
                // { title: ' Score/Feel', field: 'created_by_team', tdComp: scorefeel },
                { title: 'Actions', tdComp: DatatableActionsq, visible: true, thClass: 'text-right font_style2', tdClass: 'text-right font_style', colStyle: 'width: 130px;' }
            ];
        }
            })
        this.$root.relationships = this.relationships
        this.fetchData()
    },
    destroyed() {
        this.resetState()
    },
    computed: {
        ...mapGetters('QueriesIndex', ['search','data','column', 'total', 'loading', 'relationships','filter_obj']),
    },
    watch: {
        dayfilter:function(){
            this.filter_obj.sincelastdays=''
            this.filter_obj.sincelast=''

        },

        filtertoggle:function (){
            if(this.filtertoggle){
                this.filtermodel=true;
            }
            else {

                this.clearfilter();
                this.clearsearch();
            }

        },
        query: {
            handler(query) {
                this.setQuery(query)
            },
            deep: true
        },
        data:function () {

                   this.json_data=this.data;
        }
    },
    methods: {
        ...mapActions('QueriesIndex', ['fetchData', 'setQuery', 'resetState' ,'setsearch' , 'setcolumn','setfilter']),

        updatesearch() {
            this.setsearch(this.localsearch)
            if(this.localsearch!=''){
                this.search=false;
                this.clear=true;
            }
        },
        clearsearch() {
            this.localsearch=""
            this.setsearch(this.localsearch)
            this.search=true;
            this.clear=false;

        },
        applyfilter(){
            this.clearsearch();
            this.filter_obj.status=true
            this.setfilter();
            this.filtermodel=false
            this.filtertoggle=true
        },
        clearfilter(){
            this.clearsearch();
            this.filter_obj.filter_sector='';
            this.filter_obj.queryfilter='4';
            this.filter_obj.filter_datefrom='';
            this.filter_obj.filter_dateto='';
            this.filter_obj.score='';
            this.filter_obj.feel='';
            this.filter_obj.status=false
            this.filtertoggle=false
            this.filter_obj.relation=''
            this.filter_obj.sincelast=''
            this.filter_obj.sincelastdays=''

        }

    },
    components:
        {

        },
}
</script>


<style scoped>
   

    .extension_title{
        font-size: 17px !important;
    }
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


    .switch {
        position: relative;
        display: inline-block;
        vertical-align: top;
        width: 55px;
        height: 20px;
        padding: 3px;
        border-radius: 18px;
        cursor: pointer;
    }

    .switch-input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    .switch-label {
        position: relative;
        display: block;
        height: inherit;
        font-family: 'Source Sans Pro',sans-serif;
        font-size: 12px;
        text-transform: uppercase;
        background: #cccccc;
        border-radius: inherit;
        -moz-box-shadow: #bebebe 0 0 2px 1px inset;
        -webkit-box-shadow: #bebebe 0 0 2px 1px inset;
        box-shadow: #bebebe 0 0 2px 1px inset;
        -moz-transition: ease-out 0.15s;
        -o-transition: ease-out 0.15s;
        -webkit-transition: ease-out 0.15s;
        transition: ease-out 0.15s;
        -moz-transition-property: opacity, background;
        -o-transition-property: opacity, background;
        -webkit-transition-property: opacity, background;
        transition-property: opacity background;
    }
    .switch-label:before, .switch-label:after {
        position: absolute;
        top: 50%;
        margin-top: -.5em;
        line-height: 1;
        -moz-transition: inherit;
        -o-transition: inherit;
        -webkit-transition: inherit;
        transition: inherit;
    }
    .switch-label:before {
        content: attr(data-off);
        right: 6px;
        color: #6d6d6d;
        text-shadow: 0 1px rgba(255, 255, 255, 0.5);
    }
    .switch-label:after {
        content: attr(data-on);
        left: 4px;
        color: white;
        text-shadow: 0 1px rgba(0, 0, 0, 0.2);
        opacity: 0;
    }
    .switch-input:checked ~ .switch-label {
        background: #0eabf4;
        -moz-box-shadow: #119af0 0 0 2px 1px inset;
        -webkit-box-shadow: #119af0 0 0 2px 1px inset;
        box-shadow: #119af0 0 0 2px 1px inset;
    }
    .switch-input:checked ~ .switch-label:before {
        opacity: 0;
    }
    .switch-input:checked ~ .switch-label:after {
        opacity: 1;
    }

    .switch-handle {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 18px;
        height: 18px;
        background: white;
        border-radius: 10px;
        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y3ZjdmNyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
        background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f7f7f7), color-stop(100%, #ffffff));
        background: -moz-linear-gradient(top, #f7f7f7, #ffffff);
        background: -webkit-linear-gradient(top, #f7f7f7, #ffffff);
        background: linear-gradient(to bottom, #f7f7f7, #ffffff);
        -moz-transition: left 0.15s ease-out;
        -o-transition: left 0.15s ease-out;
        -webkit-transition: left 0.15s ease-out;
        transition: left 0.15s ease-out;
    }
    .switch-input:checked ~ .switch-handle {
        left: 32px;
    }

</style>
