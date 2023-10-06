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
                                <h3 class="box-title">Create</h3>
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
<!--                                    >-->
                                </div>


                                <div class="form-group">
                                    <ul id="sortable">
                                        <draggable v-model="locations" group="people" @start="drag=true" @end="drag=false">
                                            <location-component v-for="location in locations"  :key="location.id" :location="location"  @delete="remove"></location-component>
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
    //import LocationComponent from '../Locations.vue';
    import LocationComponent from '../../cruds/Locations'
    import draggable from 'vuedraggable'


    export default {
        data() {
            return {
                days:1,
                showModal:false,
                locations: [],
                locationd: {id:'',name: '', days: '',daynights:''},

            }
        },
        computed: {
            ...mapGetters('ToursSingle', ['item', 'loading','cityAll'])
        },
        created() {
            this.fetchCityAll();

            // this.$root.$on('dayupdate',id)
            // {
            //  //   console.log("hello2")
            //     console.log(id);
            // }
//             this.$root.$on('dayupdate',(id)=>{
// alert('yo');
//             } )
        },
        destroyed() {
            this.resetState()
        },
        mounted(){


        },
        methods: {
            ...mapActions('ToursSingle', ['storeData', 'resetState', 'setTitle', 'setLocations', 'setTotal_tour_days','fetchCityAll','updateCity']),
            remove(id){
             //   alert(id);
                let index = this.locations.findIndex(location => location.id === id);
                     this.locations.splice(index, 1);
            },
            // dayupdate(){
            //    // console.log(id);
            //     alert('hello 1');
            //     // let index = this.locations.findIndex(location => location.id === id);
            //     // alert(this.locations[index]);
            //    // this.setLocations(this.locations);
            //
            // },

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

            },

            updateCity(day) {
            //    alert(day);
           this.showModal=false;
           this.locationd.days=day;
                this.locationd.daynights=parseInt(day)+1;
           this.locations.push({...this.locationd});

                this.locationd.name="";
                this.count++;
                //     this.setCity(value)
                this.days=1;

                this.setLocations(this.locations);
            },
            submitForm() {
                this.storeData()
                    .then(() => {
                        this.$router.push({ name: 'tours.index' })
                        this.$eventHub.$emit('create-success')
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
