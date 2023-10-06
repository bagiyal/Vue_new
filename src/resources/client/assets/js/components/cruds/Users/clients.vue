<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Clients</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">


                        <div class="col-md-12 container-fluid" >
                            <div class="row">
                                <div class="col-md-2">
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
    import DatatableLogoField from './dtmodules/DatatableLogoField'
    import company from "../../dtmodules/company";

    export default {
        data() {
            return {
                columns: [
                    { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                    { title: 'Name', field: 'name', sortable: true },
                    { title: 'Email', field: 'email', sortable: true },
                    { title: 'Role', field: 'role', tdComp: DatatableList },
                    { title: 'Approved', field: 'approved', tdComp: DatatableCheckbox, colStyle: 'width: 50px;' },
                    // { title: 'Team', field: 'team', tdComp: DatatableSingle },
                    // { title: 'Account manager', field: 'account_manager', sortable: true },
                    // { title: 'Agree', field: 'agree', sortable: true },
                    // { title: 'Banner color', field: 'banner_color', sortable: true },
                    // { title: 'Address', field: 'address', sortable: true },
                    // { title: 'City', field: 'city', tdComp: DatatableSingle },
                    // { title: 'State', field: 'state', tdComp: DatatableSingle },
                    // { title: 'Country', field: 'country', tdComp: DatatableSingle },
                    { title: 'Phone', field: 'phone', sortable: true },
                    // { title: 'Postcode', field: 'postcode', sortable: true },
                    { title: 'Company', field: 'company', sortable: true,  tdComp:company },
                    // { title: 'Device', field: 'device', sortable: true },
                    // { title: 'Locale', field: 'locale', sortable: true },
                    // { title: 'Login', field: 'login', sortable: true },
                    // { title: 'Login date time', field: 'login_date_time', sortable: true },
                    // { title: 'Login status', field: 'login_status', sortable: true },
                    // { title: 'Logo', tdComp: DatatableLogoField, sortable: false },
                    // { title: 'Mycred default', field: 'mycred_default', sortable: true },
                    // { title: 'Mycred default total', field: 'mycred_default_total', sortable: true },
                    // { title: 'Mycred epp mycred', field: 'mycred_epp_mycred', sortable: true },
                    // { title: 'Owners email', field: 'owners_email', sortable: true },
                    { title: 'Actions', tdComp: DatatableActions, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }
                ],
                query: { sort: 'id', order: 'asc' },
                xprops: {
                    module: 'UsersIndex',
                    route: 'users',
                    permission_prefix: 'user_',

                },
                clear:false,
                search:true,
                localsearch:'',
            }
        },
        created() {
            if(document.querySelector("meta[name='user-role']").getAttribute('content')!=='Administrator (can create other users)'){
                this.$router.push({name: 'dashboard.index'})
            }

            this.$root.relationships = this.relationships
            this.fetchData()
        },
        destroyed() {
            this.resetState()
        },
        computed: {
            ...mapGetters('UserClient', ['data', 'total', 'loading', 'relationships']),
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
            ...mapActions('UserClient', ['fetchData', 'setQuery', 'resetState','setsearch']),
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
