<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Tour</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Edit</h3>
                            </div>

                            <div class="box-body">
                                <back-buttton></back-buttton>
                            </div>

                            <bootstrap-alert />

                            <div class="box-body">
                                <div class="form-group">
                                    <label for="title">Title *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="title"
                                            placeholder="Enter Title *"
                                            :value="item.title"
                                            @input="updateTitle"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="locations">Locations :</label>
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="locations"-->
<!--                                            placeholder="Enter Locations *"-->
<!--                                            :value="item.locations"-->
<!--                                            @input="updateLocations"-->
<!--                                            >-->
                                </div>

                                <div class="form-group">
                                    <ul id="sortable">

                                        <draggable v-model="item.locations" group="people" @start="drag=true" @end="drag=false">
                                            <location-component v-for="location in item.locations"  :key="location.id" :location="location"  @delete="remove"></location-component>
                                        </draggable>

                                    </ul>
                                </div>

                                <div class="form-group">
                                    <label for="addlocations">Add Locations</label>
                                    <v-select
                                            name="addlocations"
                                            label="title"
                                            @input="inmodal"
                                            :value="item.state"
                                            :options="cityAll"

                                    />
                                </div>

                                <div class="form-group">
                                    <label for="total_tour_days">Total tour days *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="total_tour_days"
                                            placeholder="Enter Total tour days *"
                                            :value="item.total_tour_days"
                                            @input="updateTotal_tour_days"
                                            >
                                </div>
                            </div>

                            <div class="box-footer">
                                <vue-button-spinner
                                        class="btn btn-primary btn-sm"
                                        :isLoading="loading"
                                        :disabled="loading"
                                        >
                                    Save
                                </vue-button-spinner>
                            </div>
                        </div>
                    </form>
                </div>

                <!-- Modal -->
                <div id="app">
                    <div v-if="showModal">
                        <transition name="modal">
                            <div class="modal-mask">
                                <div class="modal-wrapper">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" @click="showModal=false">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h4 class="modal-title">{{locationd.name}}</h4>
                                            </div>
                                            <div class="modal-body">
                                                Days: <input type="text" placeholder="Days" v-model="days">
                                                <button class="btn btn-primary btn-sm" @click="updateCity(days)">Save</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>


                </div>

            </div>
        </section>
    </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import LocationComponent from '../Locations.vue';
import draggable from 'vuedraggable'

export default {
    data() {
        return {
            days:1,
            showModal:false,
            locations: [],
            locationd: { id:'', name: '', days: '',daynights:''},
        }
    },
    computed: {
        ...mapGetters('ToursSingle', ['item', 'loading','cityAll']),
        // getloc(){
        //     this.locations=JSON.parse(this.item.locations);
        //     console.log(this.locations);
        //     return this.locations;
        // },

    },
    created() {
        this.fetchData(this.$route.params.id)
        this.fetchCityAll();
       // this.getloc();
    },

    destroyed() {
        this.resetState()
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)

        },
        // item(newval,oldval){
        //     console.log(oldval);
        // }
           },
    methods: {
        ...mapActions('ToursSingle', ['fetchData', 'updateData', 'resetState', 'setTitle', 'setLocations', 'addLocationss','setTotal_tour_days','fetchCityAll']),
        remove(id){
            //   alert(id);
            let index = this.item.locations.findIndex(location => location.id === id);
            this.item.locations.splice(index, 1);
        },
        updateTitle(e) {
            this.setTitle(e.target.value)
        },
        updateLocations(e) {
            this.setLocations(e.target.value)
        },

        updateTotal_tour_days(e) {
            this.setTotal_tour_days(e.target.value)
        },
        inmodal(value){
            this.locationd.id=value.id+'-'+Math.floor((Math.random()* 500) + 1);
            this.locationd.name=value.title;
            this.showModal=true;
//console.log(this.locationd);
        },
        updateCity(day) {
            //    alert(day);

            this.showModal=false;
            this.locationd.days=day;
       //     console.log(this.locationd);
           // this.updateaddLocations(this.locationd)
            this.addLocationss({...this.locationd})
           // this.item.locations.push({...this.locationd});


        //    this.locationd.name="";
            this.count++;
            //     this.setCity(value)
         //   this.days=1;

          //  this.setLocations(this.item.locations);
        },

        submitForm() {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'tours.index' })
                    this.$eventHub.$emit('update-success')
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    },
    components: {LocationComponent,draggable}
}
</script>


<style scoped>
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
</style>
