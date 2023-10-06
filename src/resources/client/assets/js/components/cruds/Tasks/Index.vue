<template>
    <section class="content-wrapper"  style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Task List</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">
<!--                        <div class="box-header ">-->
<!--                            <h3 class="box-title"></h3>-->
<!--                        </div>-->
                        <div class="col-md-12 container-fluid" >
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="box-body">
                                        <div class="btn-group">
                                            <!--                                <router-link-->
                                            <!--                                        v-if="$can(xprops.permission_prefix + 'create')"-->
                                            <!--                                        :to="{ name: xprops.route + '.create' }"-->
                                            <!--                                        class="btn btn-success btn-sm"-->
                                            <!--                                        >-->
                                            <!--                                    <i class="fa fa-plus"></i> Add new-->
                                            <!--                                </router-link>-->

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

                                    <div class="col-sm">
                                        <download-excel
                                            class   = "btn btn-default"
                                            :data   = "json_data"
                                            :fields = "json_fields"
                                            worksheet = "My Worksheet"
                                            name    = "tasks.xls"
                                        >
                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>
                                        </download-excel>

                                        <download-excel
                                            class   = "btn btn-default"
                                            :data   = "json_data"
                                            :fields = "json_fields"
                                            type    = "csv"
                                            name    = "tasks.csv"
                                        >
                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="CSV"  ><br>
                                            <p class="extension_title">CSV</p>

                                        </download-excel>
                                    </div>
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
import taskref from "../../dtmodules/taskref";
import statustask from "../../dtmodules/statustask";
import remark from "../../dtmodules/remark";
import dateformatT from "../../dtmodules/DatatabledateformatTask"


export default {
    data() {
        return {
            columns: [
                // { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                { title: 'Assign date', field: 'assign_date', sortable: true,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 12%;' },
                { title: 'Due date', field: 'due_date', sortable: true ,tdComp:dateformatT,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 12%;'},
                { title: 'Ref id', field: 'ref_id', sortable: true , tdComp: taskref,tdClass: 'font_style',thClass: 'font_style2' ,colStyle: 'width: 40%;'},

                {title: 'Remark', field: 'remark', tdComp: remark, sortable: true,tdClass: 'font_style',thClass: 'font_style2'},
                { title: 'Status', field: 'status', sortable: true, tdComp:statustask,tdClass: 'font_style',thClass: 'font_style2' },
                { title: 'Actions', tdComp: DatatableActions, visible: true, thClass: 'text-right font_style2', tdClass: 'text-right font_style', colStyle: 'width: 130px;' }
            ],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'TasksIndex',
                route: 'tasks',
                permission_prefix: 'task_'
            },
            json_fields: {
                'Assign Date': 'assign_date',
                'Due Date':'due_date',
                'Ref Id':'ref_id',
                'Remark':'remark',
                },
            clear:false,
            json_data:[],
            search:true,
            localsearch:'',
        }
    },
    mounted(){
        this.setcolumn(['assign_date',
            'due_date',
            'ref_id',
            'remark']);
    },
    created() {
        this.$root.relationships = this.relationships
        this.fetchData()
        console.log(this.item.remark);
    },
    destroyed() {
        this.resetState()
    },
    computed: {
        ...mapGetters('TasksIndex', ['data', 'total', 'loading', 'relationships']),
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
        ...mapActions('TasksIndex', ['fetchData', 'setQuery', 'resetState','setsearch' , 'setcolumn']),
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
