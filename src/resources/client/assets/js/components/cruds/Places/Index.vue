<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <section class="content-header">
            <h1>Place</h1>
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
                           Next 10000: <pagination :data="pagedata" @pagination-change-page="getResults"></pagination>
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
import DatatableFeaturedImageField from './dtmodules/DatatableFeaturedImageField'
import DatatableGalleryField from './dtmodules/DatatableGalleryField'

export default {
    data() {
        return {
            columns: [
                 { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                { title: 'Title', field: 'title', sortable: true },

                // { title: 'Contact no', field: 'contact_no', sortable: true },
                // { title: 'Timing', field: 'timing', sortable: true },
                // { title: 'Closed day', field: 'closed_day', sortable: true },
                // { title: 'Time required to visit', field: 'time_required_to_visit', sortable: true },
                // { title: 'Categories', field: 'categories', sortable: true },
                // { title: 'Esb visiblity', field: 'esb_visiblity', sortable: true },
                // { title: 'Address', field: 'address', sortable: true },
                // { title: 'Place longitude', field: 'place_longitude', sortable: true },
                // { title: 'Place latitude', field: 'place_latitude', sortable: true },
                // { title: 'City', field: 'city', tdComp: DatatableList },
                // { title: 'Featured image', tdComp: DatatableFeaturedImageField, sortable: false },
                // { title: 'Gallery', tdComp: DatatableGalleryField, sortable: false },
                // { title: 'Cuisine', field: 'cuisine', sortable: true },
                // { title: 'recommended', field: 'recommended', sortable: true },
                // { title: 'Partner', field: 'partner', sortable: true },
                // { title: 'Place tripadvisor id', field: 'place_tripadvisor_id', sortable: true },
                // { title: 'City id', field: 'city_id', sortable: true },
                // { title: 'Created by team', field: 'created_by_team', tdComp: DatatableSingle },
                // { title: 'Created by', field: 'created_by', tdComp: DatatableSingle },
                 { title: 'Actions', tdComp: DatatableActions, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }
            ],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'PlacesIndex',
                route: 'places',
                permission_prefix: 'place_'
            },
            laravelData:{},
            clear:false,
            search:true,
            localsearch:'',
        }
    },
    created() {
        this.$root.relationships = this.relationships
        // this.fetchData(),
            this.getResults();

    },
    destroyed() {
        this.resetState()
    },
    computed: {
        ...mapGetters('PlacesIndex', ['data', 'total', 'loading', 'relationships','pagedata']),
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
        ...mapActions('PlacesIndex', ['fetchData', 'setQuery', 'resetState','setsearch']),
        getResults(page = 1) {
            // axios.get('/api/v1/places?page=' + page)
            //     .then(response => {
            //         this.laravelData = response.data;
            //     });
            this.fetchData(page);
            this.laravelData=this.pagedata;
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
