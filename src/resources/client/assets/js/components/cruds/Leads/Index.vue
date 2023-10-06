<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Leads List</h1>
        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">
<!--                        <div class="box-header ">-->
<!--&lt;!&ndash;                            <h3 class="box-title"></h3>&ndash;&gt;-->
<!--                        </div>-->
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
                                    <input type="checkbox" class="switch-input" id="filter_search"  v-model="filtertoggle">
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
                                    <button @click="updatesearch" class="btn btn-secondary filter_button2" v-if="search"   type="button">
                                        <i class="fa fa-search"></i>
                                    </button>


                                    <button @click="clearsearch" class="btn btn-secondary filter_button2" v-if="clear"   type="button">
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
                                    name    = "myleads.xls"
                                >
                                    <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>
                                </download-excel>

                                <download-excel
                                    class   = "btn btn-default"
                                    :data   = "json_data"
                                    :fields = "json_fields"
                                    type    = "csv"
                                    name    = "myleads.csv"
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
                            <!-- Search form -->
                            <!--                            <input class="form-control" :value="search" @keydown="updatesearch" type="text" placeholder="Search" aria-label="Search">-->

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
                                                            <!-- <div class="col-1 mt-3"> Sector:</div>
                                                            <div class="col-11"><input type="text" class="form-control"  v-model="filter_obj.filter_sector"></div> -->
                                                            <div class="col-12 model_div">
                                                            <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                              <span class="input-group-text" id="inputGroup-sizing-default">Sector</span>
                                                            </div>
                                                            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="" v-model="filter_obj.filter_sector">
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
                                                                <label class="form-check-label" for="materialInline3">Lead To Query</label>
                                                            </div>

                                                            <div class="form-check form-check-inline">
                                                                <input type="radio" class="form-check-input" v-model="filter_obj.queryfilter" value="3">
                                                                <label class="form-check-label" for="materialInline4">Lost</label>
                                                            </div>
                                                        </div>


                                                      <!-- <div class="col-1 mt-3"> Travel Date</div>

                                                            <div class="col-5 mt-2">
                                                            From:   <date-picker
                                                                v-model="filter_obj.filter_datefrom"
                                                                :config="$root.dpconfigDate"
                                                                name="driver_pickup_date_time"
                                                            >
                                                            </date-picker>


                                                            </div>
                                                            <div class="col-5 mt-2">
                                                            To: <date-picker
                                                                v-model="filter_obj.filter_dateto"
                                                                :config="$root.dpconfigDate"
                                                                name="driver_pickup_date_time"
                                                            >
                                                            </date-picker>

                                                            </div> -->
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

                                                        </div>
                                                          <div class="col-12 model_div" style="text-align:center;">
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
import DatatableActions from '../../dtmodules/DatatableActions'
import DatatableSingle from '../../dtmodules/DatatableSingle'
import DatatableList from '../../dtmodules/DatatableList'
import DatatableCheckbox from '../../dtmodules/DatatableCheckbox'
import lastremark from "../../dtmodules/lastremark";
import sincelast from "../../dtmodules/sincelast";
import statusdata from "../../dtmodules/statusdata";
import customerretention from "../../dtmodules/customerretention";
import pendingsince from "../../dtmodules/pendingsince";
import queryref from "../../dtmodules/queryref";
import scorefeellead from "../../dtmodules/scorefeellead";
import createleaddate from "../../dtmodules/createleaddate";
import dateformat from "../../dtmodules/Datatabledateformat"
export default {
    data() {
        return {
            columns: [
                     ],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'LeadsIndex',
                route: 'leads',
                permission_prefix: 'lead_'
            },


            localsearch:'',

            json_fields: {
                'Lead Id': 'lead_id',
                'Created Date.':'created_at',
                'Travel Date':'date',
                'Traveler name':'name',
                'Sector':'package_type',
                'Status':'lead_status',

            },
            json_data:[],
            filtermodel:false,
            filtertoggle:false,
            showtoagency:true,
            license:{},
            clear:false,
            search:true,

        }
    },
    created() {



        this.$root.relationships = this.relationships
        this.fetchData()

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
                this.license = JSON.parse(response.data.data[0].meta_value);

                if (this.license.tech_aug) {

                    this.columns = [
                        // { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                        {title: 'Lead id', field: 'lead_id', sortable: true, colStyle: 'width: 10%;',tdClass: 'font_style',thClass: 'font_style2'},
                        // {title: 'Created Date', field: 'created_at', sortable: true, tdComp: createleaddate},
                        {title: 'Travel Date', field: 'date', sortable: true,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Traveller Name', field: 'name', sortable: true,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Sector', field: 'package_type', sortable: true,tdClass: 'font_style',thClass: 'font_style2'},
                        // { title: 'Since Last Gen', field: 'created_by_team', tdComp: sincelast },
                        {title: 'Remark', field: 'created_by_team', tdComp: lastremark, sortable: true,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Status', field: 'lead_status', sortable: true, tdComp: statusdata,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Pending Since', field: 'lead_status', sortable: true, tdComp: pendingsince,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Query Ref.', field: 'lead_status', sortable: true, tdComp: queryref,tdClass: 'font_style',thClass: 'font_style2'},
                        {
                            title: 'Cust. Status',
                            field: 'lead_status',
                            sortable: true,
                            tdComp: customerretention,
                            colStyle: 'width: 8%;'
                            ,tdClass: 'font_style'
                            ,thClass: 'font_style2'
                        },

                        { title: ' Score/Feel', field: 'created_by_team', tdComp: scorefeellead,thClass: 'font_style2' },

                        {
                            title: 'Actions',
                            tdComp: DatatableActions,
                            visible: true,
                            thClass: 'text-right',
                            tdClass: 'text-right font_style',
                            colStyle: 'width: 80px;'
                            ,thClass: 'font_style2'
                        }
                    ]
                }
                else {
                    this.columns = [
                        // { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                        {title: 'Lead id', field: 'lead_id', sortable: true, colStyle: 'width: 15%;',tdClass: 'font_style',thClass: 'font_style2'},
                        // {title: 'Created Date', field: 'created_at', sortable: true},
                        {title: 'Travel Date', field: 'date', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Traveller Name', field: 'name', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Sector', field: 'package_type', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},
                        // { title: 'Since Last Gen', field: 'created_by_team', tdComp: sincelast },
                        {title: 'Remark', field: 'created_by_team', tdComp: lastremark, sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Status', field: 'lead_status', sortable: true, tdComp: statusdata ,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Pending Since', field: 'lead_status', sortable: true, tdComp: pendingsince ,tdClass: 'font_style',thClass: 'font_style2'},
                        {title: 'Query Ref.', field: 'lead_status', sortable: true, tdComp: queryref,tdClass: 'font_style',thClass: 'font_style2'},
                        {
                            title: 'Cust. Status',
                            field: 'lead_status',
                            sortable: true,
                            tdComp: customerretention,
                            colStyle: 'width: 8%;'
                            ,tdClass: 'font_style'
                            ,thClass: 'font_style2'
                        },

                        {
                            title: 'Actions',
                            tdComp: DatatableActions,
                            visible: true,
                            thClass: 'text-right',
                            tdClass: 'text-right',
                            colStyle: 'width: 80px;'
                            ,thClass: 'font_style2'
                        }
                    ]

                }

            })

    },
    destroyed() {
        this.resetState()
    },
    computed: {
        ...mapGetters('LeadsIndex', ['search','data','column', 'total', 'loading', 'relationships','filter_obj']),
    },
    watch: {
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
            var button = document.getElementsByName("HeaderSettings").style.display = "none";
        }
    },
    mounted(){
        this.setcolumn(['lead_id',
            'created_at',
            'date',
            'name',
            'lead_status',
            'package_type'
            ]);
    },
    methods: {
        ...mapActions('LeadsIndex', ['fetchData', 'setQuery', 'resetState' ,'setsearch' , 'setcolumn','setfilter']),
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
            this.filter_obj.status=false
            this.filtertoggle=false
        }

    }
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
    .switch-input:checked ~ .switch-handle[data-v-3e0bb47d] {
        left: 32px !important;
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


</style>
