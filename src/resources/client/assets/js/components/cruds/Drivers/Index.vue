<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Tour Manager</h1>
        </section>

        <div class="container"  v-if="show_modal">
            <div class="modal show in" id="myModal1" style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body" >
                            <button type="button" class="close" data-dismiss="modal" @click="show_modal=false">&times;</button><br>
                            <div class="container-fluid" style="text-align: left">
                                <h2 style="text-align: left">List Of Agents</h2>
                                <hr>
                                <v-select
                                           v-model="selectedUsers"
                                          :clearable="false"
                                          name="name"
                                          label="name"
                                          :options="usersData"
                                          style="background:#fff;"
                                          multiple

                                />
<!--                                @input="filterhub"-->
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success f-1-4 " :disabled="selectedUsers==0" @click="assignRole" >Assign Role</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">


                        <div class="col-md-12 container-fluid" >
                            <div class="row">
                                <div class="col-md-4">
                                    <div   class="box-body">
                                        <div class="btn-group">
                                            <router-link
                                                v-if="$can(xprops.permission_prefix + 'create')"
                                                :to="{ name: xprops.route + '.create' }"
                                                class="btn btn-success btn-sm"
                                                style="font-size: 15px"
                                            >
                                                <i class="fa fa-plus"></i> Add new
                                            </router-link>

                                            <button type="button" style="font-size: 15px;margin-left: 5px;" class="btn btn-success btn-sm" @click="show_modal=true">
                                                <i class="fa fa-plus"></i>  Create From Existing Agent
                                            </button>

                                            <button type="button" style="font-size: 15px;margin-left: 5px;background-color: #ffc107 !important;" class="btn btn-default btn-sm" @click="fetchData">
                                                <i class="fa fa-refresh" :class="{'fa-spin': loading}"></i> Refresh
                                            </button>
                                        </div>
                                    </div>
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
import DatatableActionsTourManager from '../../dtmodules/DatatableActionsTourManager'


export default {
    data() {
        return {
            columns: [
                { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                { title: 'Name', field: 'name', sortable: true },
                { title: 'Phone', field: 'phone', sortable: true },
                { title: 'Email', field: 'email', sortable: true },
                { title: 'Actions', tdComp: DatatableActionsTourManager, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }
            ],
            query: { sort: 'id', order: 'asc' },
            xprops: {
                module: 'DriversIndex',
                route: 'drivers',
                permission_prefix: 'driver_'
            },
            clear:false,
            search:true,
            localsearch:'',
            show_modal:false,
            selectedUsers:[],
            usersData:[],
        }
    },
    created() {
        this.$root.relationships = this.relationships
        this.fetchData()

    },
    mounted() {

        axios.get('/api/v1/AllAgentsData')
            .then(response => {

                this.usersData=_.cloneDeep(response.data.data);

            })
            .catch(error => {

            })
            .finally(() => {

            })

    },
    destroyed() {
        this.resetState()
    },
    computed: {
        ...mapGetters('DriversIndex', ['data', 'total', 'loading', 'relationships']),
    },
    watch: {
        query: {
            handler(query) {
                this.setQuery(query)
            },
            deep: true
        }
    },
    methods: {
        ...mapActions('DriversIndex', ['fetchData', 'setQuery', 'resetState','setsearch']),
        assignRole(){
            try{

                axios.post('/api/v1/UpdateRole',{
                    'data':JSON.stringify(this.selectedUsers)
                })
                    .then(response => {
                          if(response.data.status){
                              this.fetchData();
                              this.show_modal=false;
                              this.selectedUsers=[];
                              axios.get('/api/v1/AllAgentsData')
                                  .then(response => {

                                      this.usersData=_.cloneDeep(response.data.data);

                                  })
                          }
                          else{
                              this.$swal.fire({
                                  type: 'error',
                                  icon: 'error',
                                  title: 'Some Error Occured. Please Try Again Later !',
                                  showCloseButton:true,
                                  showConfirmButton: true,
                                  timer: 3500
                              })
                          }


                    })
                    .catch(error => {

                    })
                    .finally(() => {

                    })
            }
            catch(error){
                this.$swal.fire({
                    type: 'error',
                    icon: 'error',
                    title: 'Some Error Occured. Please Try Again Later !',
                    showCloseButton:true,
                    showConfirmButton: true,
                    timer: 3500
                })
            }
        },
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
