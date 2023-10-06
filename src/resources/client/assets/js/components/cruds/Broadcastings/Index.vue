<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
<!--            <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>-->
            <h1>Broadcasting List</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">
                        <div class="col-md-12 container-fluid" >
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="box-body">
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

                                </div>
                                <div class="col-md-6">

                                    <div class="input-group" style="margin-top: 10px;">


                                        <input type="text" v-model="localsearch" class="filter_bar2" placeholder="Search" style="height: 35px;">

                                        <div class="input-group-append">
                                            <button @click="updatesearch" class="btn btn-secondary filter_button2" v-if="search"  type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                            <button @click="clearsearch" class="btn btn-secondary filter_button2" v-if="clear"  type="button">
                                                <i class="fa fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">

<!--                                    <div class="col-sm">-->
<!--                                        <download-excel-->
<!--                                            class   = "btn btn-default"-->
<!--                                            :data   = "json_data"-->
<!--                                            :fields = "json_fields"-->
<!--                                            worksheet = "My Worksheet"-->
<!--                                            name    = "travellers.xls"-->
<!--                                        >-->
<!--                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>-->
<!--                                        </download-excel>-->

<!--                                        <download-excel-->
<!--                                            class   = "btn btn-default"-->
<!--                                            :data   = "json_data"-->
<!--                                            :fields = "json_fields"-->
<!--                                            type    = "csv"-->
<!--                                            name    = "travellers.csv"-->
<!--                                        >-->
<!--                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="CSV"  ><br>-->
<!--                                            <p class="extension_title">CSV</p>-->

<!--                                        </download-excel>-->
<!--                                    </div>-->
                                </div>

                            </div>
                        </div>



                        <div class="box-body">
                            <div class="row" v-if="loading">
                                <div class="col-xs-4 col-xs-offset-4">
                                    <div class="alert text-center">
                                        <i class="fa fa-spin fa-refresh"></i> Loading
                                    </div>
                                </div>
                            </div>
                            <div class="input-group w-100" >
                                <div class="input-group w-50">


                                    <div class="input-group">



                                    </div>

                                </div>
                                <div class="input-group w-25"></div>
                                <div class="input-group w-25"></div>
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
import broadcasting_status from "../../dtmodules/broadcasting_status";
// import DatatableActions_broadcast from '../../dtmodules/DatatableActions_broadcast'



export default {
    data() {
        return {
            columns: [
                // { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;',tdClass: 'font_style',thClass: 'font_style2' },
                { title: 'Category', field: 'category', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Message', field: 'message', sortable: true ,tdClass: 'font_style',thClass: 'font_style2', colStyle: 'width: 30%;'},



                { title: 'Type', field: 'type', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Schedule date', field: 'schedule_date', sortable: true ,tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Status', field: 'status', tdComp: broadcasting_status ,tdClass: 'font_style',thClass: 'font_style2'},

                // { title: 'Created by', field: 'created_by', tdComp: DatatableSingle },
                // { title: 'Created by Team', field: 'created_by_team', tdComp: DatatableSingle },
                // { title: 'Actions', tdComp: DatatableActions, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }
            ],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'BroadcastingsIndex',
                route: 'broadcastings',
                permission_prefix: 'broadcasting_'
            },
            user_role:'',
            clear:false,
            search:true,
            localsearch:'',
            json_data:[],
            // json_fields: {
            //     'Category': 'category',
            //     'Message':'message',
            //     'Travel Date':'driver_pick_up_time',
            //     'Traveller Name':'full_name',
            //     'Mobile No.':'phone',
            //
            //
            // },

        }
    },
    mounted(){
        this.setcolumn(['category',
            'message',
            'type',
            'schedule_date']);
    },
    created() {
        this.$root.relationships = this.relationships
        this.fetchData()
        var role=document.querySelector("meta[name='user-role']").getAttribute('content');
        this.user_role=role;
        if(this.user_role=='Administrator (can create other users)'){
            this.columns.push({ title: 'Actions', tdComp: DatatableActions_broadcast, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' });
        }
    },
    destroyed() {
        this.resetState()
    },
    computed: {
        ...mapGetters('BroadcastingsIndex', ['data', 'total', 'loading', 'relationships']),
    },
    watch: {
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
            ...mapActions('BroadcastingsIndex', ['fetchData', 'setQuery', 'resetState','setsearch' , 'setcolumn']),
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
    }
}
</script>


<style scoped>

</style>
