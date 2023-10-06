<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>
            <h1>Broadcasting Create</h1>
            <rotate-square2 v-if="loading"  background="#007bff" :color="'#007bff'"></rotate-square2>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box box_design">
                            <div class="box-header ">
<!--                                <h3 class="box-title"></h3>-->
                            </div>

                            <div class="box-body">
<!--                                <back-buttton></back-buttton>-->
                            </div>

                            <bootstrap-alert />
                            <div class="container">



                                <!-- v-if="role=='agency'"   this condition is for TC/SOTC-->
                                <ul class="nav nav-tabs col-md-12" role="tablist" v-if="role=='agency'">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"  @click="update_cat('Broadcast All')">Broadcast All</a>
                                    </li>
                                    <li class="nav-item" >
                                        <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab" @input="updateCategory" @click="update_cat('Broadcast Live Itinerary')">Broadcast Live Itinerary</a>
                                    </li>

                                </ul>
                                <ul class="nav nav-tabs col-md-12" role="tablist" v-else>
                                    <!-- v-show="platform!='sotc'"   this condition is for TC/SOTC-->
                                    <li class="nav-item" v-show="platform!='sotc'">
                                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"  @click="update_cat('Broadcast All')">Broadcast All</a>
                                    </li>
                                    <!-- v-show="platform!='sotc'"  this condition is for TC/SOTC-->
                                    <li class="nav-item" v-show="platform!='sotc'">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab" @input="updateCategory" @click="update_cat('Broadcast Live Itinerary')">Broadcast Live Itinerary</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab" @click="update_cat('Direct One to One')">Direct One to One</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab" @click="update_cat('Notification')">Notification</a>
                                    </li>
                                    <li class="nav-item" >
                                        <a class="nav-link" data-toggle="tab" href="#tabs-5" role="tab" @click="update_cat('Group Member Notification')">Group Member Notification</a>
                                    </li>
                                </ul>

                                <!-- Tab panes -->
                                <div class="tab-content">
<!--                                    Broadcast All-->
                                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div  class="col-md-6" style="margin-top: 30px;">
                                            <label for="message">Your Message</label><br>
                                            <textarea  rows="6" cols="100"
                                                       class="form-control"
                                                       name="message"
                                                       placeholder="Enter Message"
                                                       :value="item.message"
                                                       @input="updateMessage"

                                            >

                                                    </textarea>
                                        </div>
                                    </div>
<!--                                    Broadcast Live Itinerary-->
                                    <div class="tab-pane" id="tabs-2" role="tabpanel">
                                        <div  class="col-md-12" style="margin-top: 30px;">
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="city">Select By City</label>

                                                        <vue-bootstrap-typeahead

                                                            :data="cities"
                                                            size="sm"

                                                            placeholder="Enter City Name"

                                                            v-model="item.traveller_id"

                                                            :serializer="s => s.title"
                                                            @input="updateTraveller_id"
                                                            @hit="item.traveller_id=$event.id"
                                                        />
                                                    </div>
                                                    <label for="message">Your Message</label><br>

                                                    <textarea  rows="6" cols="100"
                                                               class="form-control"
                                                               name="message"
                                                               placeholder="Enter Message"
                                                               :value="item.message"
                                                               @input="updateMessage"

                                                    >

                                                    </textarea>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
<!--                                    Direct One to One-->
                                    <div class="tab-pane" id="tabs-3" role="tabpanel">
                                        <div  class="col-md-12" style="margin-top: 30px;">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="message">Your Message</label><br>
                                                    <textarea  rows="6" cols="100"
                                                               class="form-control"
                                                               name="message"
                                                               placeholder="Enter Message"
                                                               :value="item.message"
                                                               @input="updateMessage"

                                                    >

                                                    </textarea>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="message">Select By Name</label><br>
                                                    <div class="form-group">

                                                        <vue-bootstrap-typeahead

                                                            :data="travellers"
                                                            size="sm"
                                                             id
                                                            placeholder="Enter Name/Phone Number"

                                                            v-model="direct_1"

                                                            :serializer="s => s.name"
                                                            @hit="direct_1=$event.trav_id"
                                                        />
                                                    </div>
                                                    <label for="message">Or By Active Itinerary</label><br>
                                                    <div class="form-group">
                                                        <vue-bootstrap-typeahead

                                                            :data="booking"
                                                            size="sm"

                                                            placeholder="Enter Booking-id/Name/Tour Name"

                                                            v-model="direct_2"

                                                            :serializer="s => s.name"

                                                            @hit="direct_2=$event.trav_id"
                                                        />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
<!--                                    Notification-->
                                    <div class="tab-pane" id="tabs-4" role="tabpanel">
                                        <div  class="col-md-12" style="margin-top: 30px;">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="message">Active Itinerary</label><br>
                                                    <div class="form-group">

                                                        <vue-bootstrap-typeahead

                                                            :data="booking"
                                                            size="sm"

                                                            placeholder="Enter Group/Booking-id/Name/Tour Name"

                                                            v-model="item.traveller_id"

                                                            :serializer="s => s.name"
                                                            @input="updateTraveller_id"
                                                            @hit="item.traveller_id.includes('GRP')?item.traveller_id=$event.trav_id:item.traveller_id=$event.trav_id+'-'+$event.id"
                                                        />
                                                    </div>
                                                    <label for="schedule_date">Schedule date & time</label><br>
                                                    <date-picker
                                                        :value="item.schedule_date"
                                                        :config="$root.dpconfigDatetime_disable_dates"
                                                        name="schedule_date"
                                                        placeholder="Enter Schedule date"
                                                        @dp-change="updateSchedule_date"
                                                    >
                                                    </date-picker>

                                                    <br><label for="message">Select Timezone</label><br>
                                                    <div class="form-group">

                                                        <vue-bootstrap-typeahead

                                                            :data="timezone"
                                                            size="sm"

                                                            placeholder="Timezone"

                                                            v-model="item.time_zone"

                                                            :serializer="s => s.name"

                                                            @hit="item.time_zone=$event.name"
                                                        />
                                                    </div>

                                                </div>
                                                <div class="col-md-6">
                                                    <label for="message">Notification Type</label><br>
                                                    <div class="form-group">
                                                        <v-select
                                                            name="noti-type"
                                                            label="name"
                                                            :options="noti_type"
                                                            @input="inmodal"
                                                            style="background-color: #fff;"


                                                        />
                                                    </div>
                                                    <label for="message">Your Message</label><br>
                                                    <textarea  rows="6" cols="100"
                                                              class="form-control"
                                                               name="message"
                                                               placeholder="Enter Message"
                                                               :value="item.message"
                                                               @input="updateMessage"

                                                    >

                                                    </textarea>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <!--group-->
                                    <div class="tab-pane" id="tabs-5" role="tabpanel">
                                        <div  class="col-md-12" style="margin-top: 30px;">
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="id">Select Group Id</label>
                                                        <v-select

                                                            :clearable="false"
                                                            name="group_id"
                                                            label="book_id"
                                                            :options="group"
                                                            @input="inmodal_group"
                                                            style="background-color: #fff;"


                                                        />

                                                    </div>
                                                    <div class="form-group">
                                                        <label for="id">Choose Hub</label>
                                                        <v-select v-model="hub_modal"
                                                                  :clearable="false"
                                                                  :options="hubs"
                                                                  style="background-color: #fff;"
                                                                  @input="inmodal_hub"


                                                        />

                                                    </div>
                                                    <label for="message">Your Message</label><br>

                                                    <textarea  rows="6" cols="100"
                                                               class="form-control"
                                                               name="message"
                                                               placeholder="Enter Message"
                                                               :value="item.message"
                                                               @input="updateMessage"
                                                               :disabled="hub_modal==''"

                                                    >

                                                    </textarea>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="box-footer" style="background: transparent;">
                                <vue-button-spinner
                                        class=" button-css"
                                        :isLoading="loading"
                                        :disabled="loading"
                                        >
                                    Save & Send
                                </vue-button-spinner>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            // Code...
            direct_1:"",
            direct_2:"",
            cities:'',
            booking:[],
            travellers:[],
            noti_type:[{name:'Video'},{name:'Day wise Agenda'},{name:'Dos and Donts'},{name: 'Weather Forecast'},{name:'Flight Tickets'},{name:'Eat'},{name: 'Buy'},{name: 'See'},{name:'About'},{name: 'Information'},{name:'Currency converter'},{name: 'Feedback'},{ name:'Share Experience'},{name: 'Important Contact'},{name: 'Other document'}],
            timezone:[],
            group:'',
            group_modal:[],
            role:'',
            platform:'',
            hubs:[],
            hub_modal:'',

        }
    },
    computed: {
        ...mapGetters('BroadcastingsSingle', ['item', 'loading'])
    },
    created() {
        // Code ...
        this.update_cat('Broadcast All');
        this.fetch_timezones();
        this.item.status=0;
        // fetch agent_id
        var agent_id=document.querySelector("meta[name='user-id']").getAttribute('content');
        this.item.agent_id=agent_id;
        var agency_id=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'));
        this.item.agency_id=agency_id['id'];
        this.item.status=1


        // fetch cities

        axios.get('/api/v1/cities')
            .then(response => {this.cities=response.data.data

            })
        // fetch itinerary
        axios.get('/api/v1/dashboard_booking')
            .then(response => {response.data.data
               var trav=[];
                for (var i = 0; i <response.data.data.length ; i++) {

                if(response.data.data[i]['activated']=="1"){
                    this.booking.push({name:response.data.data[i]['booking_id']+'-('+response.data.data[i]['full_name']+')-'+response.data.data[i]['tour_name'] ,
                        id:response.data.data[i]['id'], trav_id:response.data.data[i]['traveller_id']
                    });
                    this.travellers.push({name:response.data.data[i]['full_name']+'-('+response.data.data[i]['phone']+')',
                        id:response.data.data[i]['id'], trav_id:response.data.data[i]['traveller_id']
                    });
                }
                    if(response.data.data[i]['activated']=="grp"){
                        this.booking.push({name:response.data.data[i]['booking_id']+'-('+response.data.data[i]['group_name']+')'+'-'+response.data.data[i]['tour_name'] ,
                            id:response.data.data[i]['id'], trav_id:response.data.data[i]['traveller_id']
                        });
                    }

                }



            })

        axios.get('/api/v1/broadcast_groups/'+document.querySelector("meta[name='user-id']").getAttribute('content'))
            .then(response => {
                this.group=response.data;



            })
            .catch(error => {
                alert("Error in fetching group data")
                console.log(error)
            })

    },
    mounted() {
        this.role=document.querySelector("meta[name='user-role']").getAttribute('content');
        this.platform= document.querySelector("meta[name='platform']").getAttribute('content')

    },
destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('BroadcastingsSingle', ['storeData', 'resetState', 'setSchedule_date', 'setAgency_id', 'setAgent_id', 'setTraveller_id', 'setStatus', 'setMessage', 'setType', 'setCategory', 'setTime_zone']),
        updateSchedule_date(e) {
            this.setSchedule_date(e.target.value)
        },
        updateAgency_id(e) {
            this.setAgency_id(e.target.value)
        },
        updateAgent_id(e) {
            this.setAgent_id(e.target.value)
        },
        updateTraveller_id(e) {
            this.setTraveller_id(e.target.value)
        },
        updateStatus(e) {
            this.setStatus(e.target.value)
        },
        updateMessage(e) {
            this.setMessage(e.target.value)
        },
        updateType(e) {
            this.setType(e.target.value)
        },
        updateCategory(e) {
            this.setCategory(e.target.value)
        },
        updateTime_zone(e) {
            this.setTime_zone(e.target.value)
        },
        submitForm() {
            var success=0;
            if(this.item.category=='Broadcast All'){
                if(this.item.message===null || this.item.message===""  ){

                    success=1;
                }


            }
            else if(this.item.category=='Broadcast Live Itinerary'){
                if(this.item.message===null || this.item.message==="" || this.item.traveller_id===null || this.item.traveller_id===""  ){

                    success=1;
                }

            }
            else if(this.item.category=='Direct One to One'){
                // console.log(this.direct_1);
                // console.log("-------");
                // console.log(this.direct_2);
                if(this.direct_2!==""){
                    this.item.traveller_id=this.direct_2;
                }
                else if(this.direct_1!==""){
                    this.item.traveller_id=this.direct_1;
                }
                else if(this.direct_1==="" && this.direct_2==="" ){
                    success=1;
                    this.item.traveller_id="";
                }

                if(this.item.traveller_id==="" ||  this.item.message==="" ){
                    success=1;
                }


            }
            else if(this.item.category=='Notification'){
                if( this.item.message==="" || this.item.traveller_id==="" || this.item.time_zone==="" || this.item.type==="" || this.item.schedule_date==="" ){
                    success=1;
                }
            }
            else if(this.item.category=='Group Member Notification'){
                if( this.item.message==="" || this.item.traveller_id==="" ){
                    success=1;
                }
            }


            if(success==1){
                alert('please fill in all mandatory fields');
            }
            else{
                if(this.item.category=='Broadcast All'){
                    axios.get('/api/webservices/debit_point', {
                        params: {
                            agency_id:this.item.agency_id,
                            agent_id:this.item.agent_id,
                            type:'broadcast_to_all',
                            remark:'Sending Broadcast To All'

                        }
                    })
                        .then(response => {

                            if(response.data.includes("Success")){
                                this.storeData()
                                    .then(response => () => {
                                        this.$router.push({ name: 'broadcastings.index' })
                                         this.$eventHub.$emit('create-success')

                                    })
                                    .catch((error) => {
                                        console.error(error)
                                    })

                            }
                            else {
                              alert(response.data);
                            }
                        })
                        .catch(error => {
                            alert("Error in debit points");
                            console.log(error);
                        })
                }
                else{

                    this.storeData()
                        .then(() => {
                            this.$router.push({ name: 'broadcastings.index' })
                            this.$eventHub.$emit('create-success')
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }

            }


        },
        inmodal(value){
            if(value=='' || value==null){
                this.item.type="";
            }
            else{
                var type=Object.entries(value);
                this.item.type=type[0][1];
                }
            // console.log( this.item.type);

        },
        inmodal_city(value){
            console.log(value);
        },
        update_cat(cat){

            if(cat=='Broadcast All'){

                this.item.category=cat;
                this.item.message="";
                this.item.traveller_id="";
                this.item.schedule_date="";
                this.item.type="";
                this.item.time_zone="";

            }
            else if(cat=='Broadcast Live Itinerary'){
                this.item.category=cat;
                this.item.message="";
                this.item.traveller_id="";
                this.item.schedule_date="";
                this.item.type="";
                this.item.time_zone="";

            }
            else if(cat=='Direct One to One'){
                this.item.category=cat;
                this.item.message="";
                this.item.traveller_id="";
                this.item.schedule_date="";
                this.item.type="";
                this.item.time_zone="";

            }
            else if(cat=='Notification'){
                this.item.category=cat;
                this.item.message="";
                this.item.traveller_id="";
                this.item.schedule_date="";
                this.item.type="";
                this.item.time_zone="";

            }
            else if(cat=='Group Member Notification'){
                this.item.category=cat;
                this.item.message="";
                this.item.traveller_id="";
                this.item.schedule_date="";
                this.item.type="";
                this.item.time_zone="";

            }
            // else if(cat=='Group Member Notification'){
            //     this.item.category=cat;
            //     this.item.message="";
            // }
        },
        fetch_timezones(){
            var data=[{"name":"Europe\/Andorra"},{"name":"Asia\/Dubai"},{"name":"Asia\/Kabul"},{"name":"Europe\/Tirane"},{"name":"Asia\/Yerevan"},{"name":"Antarctica\/Casey"},{"name":"Antarctica\/Davis"},{"name":"Antarctica\/DumontDUrville"},{"name":"Antarctica\/Mawson"},{"name":"Antarctica\/Palmer"},{"name":"Antarctica\/Rothera"},{"name":"Antarctica\/Syowa"},{"name":"Antarctica\/Troll"},{"name":"Antarctica\/Vostok"},{"name":"America\/Argentina\/Buenos_Aires"},{"name":"America\/Argentina\/Cordoba"},{"name":"America\/Argentina\/Salta"},{"name":"America\/Argentina\/Jujuy"},{"name":"America\/Argentina\/Tucuman"},{"name":"America\/Argentina\/Catamarca"},{"name":"America\/Argentina\/La_Rioja"},{"name":"America\/Argentina\/San_Juan"},{"name":"America\/Argentina\/Mendoza"},{"name":"America\/Argentina\/San_Luis"},{"name":"America\/Argentina\/Rio_Gallegos"},{"name":"America\/Argentina\/Ushuaia"},{"name":"Pacific\/Pago_Pago"},{"name":"Europe\/Vienna"},{"name":"Australia\/Lord_Howe"},{"name":"Antarctica\/Macquarie"},{"name":"Australia\/Hobart"},{"name":"Australia\/Currie"},{"name":"Australia\/Melbourne"},{"name":"Australia\/Sydney"},{"name":"Australia\/Broken_Hill"},{"name":"Australia\/Brisbane"},{"name":"Australia\/Lindeman"},{"name":"Australia\/Adelaide"},{"name":"Australia\/Darwin"},{"name":"Australia\/Perth"},{"name":"Australia\/Eucla"},{"name":"Asia\/Baku"},{"name":"America\/Barbados"},{"name":"Asia\/Dhaka"},{"name":"Europe\/Brussels"},{"name":"Europe\/Sofia"},{"name":"Atlantic\/Bermuda"},{"name":"Asia\/Brunei"},{"name":"America\/La_Paz"},{"name":"America\/Noronha"},{"name":"America\/Belem"},{"name":"America\/Fortaleza"},{"name":"America\/Recife"},{"name":"America\/Araguaina"},{"name":"America\/Maceio"},{"name":"America\/Bahia"},{"name":"America\/Sao_Paulo"},{"name":"America\/Campo_Grande"},{"name":"America\/Cuiaba"},{"name":"America\/Santarem"},{"name":"America\/Porto_Velho"},{"name":"America\/Boa_Vista"},{"name":"America\/Manaus"},{"name":"America\/Eirunepe"},{"name":"America\/Rio_Branco"},{"name":"America\/Nassau"},{"name":"Asia\/Thimphu"},{"name":"Europe\/Minsk"},{"name":"America\/Belize"},{"name":"America\/St_Johns"},{"name":"America\/Halifax"},{"name":"America\/Glace_Bay"},{"name":"America\/Moncton"},{"name":"America\/Goose_Bay"},{"name":"America\/Blanc-Sablon"},{"name":"America\/Toronto"},{"name":"America\/Nipigon"},{"name":"America\/Thunder_Bay"},{"name":"America\/Iqaluit"},{"name":"America\/Pangnirtung"},{"name":"America\/Atikokan"},{"name":"America\/Winnipeg"},{"name":"America\/Rainy_River"},{"name":"America\/Resolute"},{"name":"America\/Rankin_Inlet"},{"name":"America\/Regina"},{"name":"America\/Swift_Current"},{"name":"America\/Edmonton"},{"name":"America\/Cambridge_Bay"},{"name":"America\/Yellowknife"},{"name":"America\/Inuvik"},{"name":"America\/Creston"},{"name":"America\/Dawson_Creek"},{"name":"America\/Fort_Nelson"},{"name":"America\/Vancouver"},{"name":"America\/Whitehorse"},{"name":"America\/Dawson"},{"name":"Indian\/Cocos"},{"name":"Europe\/Zurich"},{"name":"Africa\/Abidjan"},{"name":"Pacific\/Rarotonga"},{"name":"America\/Santiago"},{"name":"America\/Punta_Arenas"},{"name":"Pacific\/Easter"},{"name":"Asia\/Shanghai"},{"name":"Asia\/Urumqi"},{"name":"America\/Bogota"},{"name":"America\/Costa_Rica"},{"name":"America\/Havana"},{"name":"Atlantic\/Cape_Verde"},{"name":"America\/Curacao"},{"name":"Indian\/Christmas"},{"name":"Asia\/Nicosia"},{"name":"Asia\/Famagusta"},{"name":"Europe\/Prague"},{"name":"Europe\/Berlin"},{"name":"Europe\/Copenhagen"},{"name":"America\/Santo_Domingo"},{"name":"Africa\/Algiers"},{"name":"America\/Guayaquil"},{"name":"Pacific\/Galapagos"},{"name":"Europe\/Tallinn"},{"name":"Africa\/Cairo"},{"name":"Africa\/El_Aaiun"},{"name":"Europe\/Madrid"},{"name":"Africa\/Ceuta"},{"name":"Atlantic\/Canary"},{"name":"Europe\/Helsinki"},{"name":"Pacific\/Fiji"},{"name":"Atlantic\/Stanley"},{"name":"Pacific\/Chuuk"},{"name":"Pacific\/Pohnpei"},{"name":"Pacific\/Kosrae"},{"name":"Atlantic\/Faroe"},{"name":"Europe\/Paris"},{"name":"Europe\/London"},{"name":"Asia\/Tbilisi"},{"name":"America\/Cayenne"},{"name":"Africa\/Accra"},{"name":"Europe\/Gibraltar"},{"name":"America\/Godthab"},{"name":"America\/Danmarkshavn"},{"name":"America\/Scoresbysund"},{"name":"America\/Thule"},{"name":"Europe\/Athens"},{"name":"Atlantic\/South_Georgia"},{"name":"America\/Guatemala"},{"name":"Pacific\/Guam"},{"name":"Africa\/Bissau"},{"name":"America\/Guyana"},{"name":"Asia\/Hong_Kong"},{"name":"America\/Tegucigalpa"},{"name":"America\/Port-au-Prince"},{"name":"Europe\/Budapest"},{"name":"Asia\/Jakarta"},{"name":"Asia\/Pontianak"},{"name":"Asia\/Makassar"},{"name":"Asia\/Jayapura"},{"name":"Europe\/Dublin"},{"name":"Asia\/Jerusalem"},{"name":"Asia\/Kolkata"},{"name":"Indian\/Chagos"},{"name":"Asia\/Baghdad"},{"name":"Asia\/Tehran"},{"name":"Atlantic\/Reykjavik"},{"name":"Europe\/Rome"},{"name":"America\/Jamaica"},{"name":"Asia\/Amman"},{"name":"Asia\/Tokyo"},{"name":"Africa\/Nairobi"},{"name":"Asia\/Bishkek"},{"name":"Pacific\/Tarawa"},{"name":"Pacific\/Enderbury"},{"name":"Pacific\/Kiritimati"},{"name":"Asia\/Pyongyang"},{"name":"Asia\/Seoul"},{"name":"Asia\/Almaty"},{"name":"Asia\/Qyzylorda"},{"name":"Asia\/Qostanay"},{"name":"Asia\/Aqtobe"},{"name":"Asia\/Aqtau"},{"name":"Asia\/Atyrau"},{"name":"Asia\/Oral"},{"name":"Asia\/Beirut"},{"name":"Asia\/Colombo"},{"name":"Africa\/Monrovia"},{"name":"Europe\/Vilnius"},{"name":"Europe\/Luxembourg"},{"name":"Europe\/Riga"},{"name":"Africa\/Tripoli"},{"name":"Africa\/Casablanca"},{"name":"Europe\/Monaco"},{"name":"Europe\/Chisinau"},{"name":"Pacific\/Majuro"},{"name":"Pacific\/Kwajalein"},{"name":"Asia\/Yangon"},{"name":"Asia\/Ulaanbaatar"},{"name":"Asia\/Hovd"},{"name":"Asia\/Choibalsan"},{"name":"Asia\/Macau"},{"name":"America\/Martinique"},{"name":"Europe\/Malta"},{"name":"Indian\/Mauritius"},{"name":"Indian\/Maldives"},{"name":"America\/Mexico_City"},{"name":"America\/Cancun"},{"name":"America\/Merida"},{"name":"America\/Monterrey"},{"name":"America\/Matamoros"},{"name":"America\/Mazatlan"},{"name":"America\/Chihuahua"},{"name":"America\/Ojinaga"},{"name":"America\/Hermosillo"},{"name":"America\/Tijuana"},{"name":"America\/Bahia_Banderas"},{"name":"Asia\/Kuala_Lumpur"},{"name":"Asia\/Kuching"},{"name":"Africa\/Maputo"},{"name":"Africa\/Windhoek"},{"name":"Pacific\/Noumea"},{"name":"Pacific\/Norfolk"},{"name":"Africa\/Lagos"},{"name":"America\/Managua"},{"name":"Europe\/Amsterdam"},{"name":"Europe\/Oslo"},{"name":"Asia\/Kathmandu"},{"name":"Pacific\/Nauru"},{"name":"Pacific\/Niue"},{"name":"Pacific\/Auckland"},{"name":"Pacific\/Chatham"},{"name":"America\/Panama"},{"name":"America\/Lima"},{"name":"Pacific\/Tahiti"},{"name":"Pacific\/Marquesas"},{"name":"Pacific\/Gambier"},{"name":"Pacific\/Port_Moresby"},{"name":"Pacific\/Bougainville"},{"name":"Asia\/Manila"},{"name":"Asia\/Karachi"},{"name":"Europe\/Warsaw"},{"name":"America\/Miquelon"},{"name":"Pacific\/Pitcairn"},{"name":"America\/Puerto_Rico"},{"name":"Asia\/Gaza"},{"name":"Asia\/Hebron"},{"name":"Europe\/Lisbon"},{"name":"Atlantic\/Madeira"},{"name":"Atlantic\/Azores"},{"name":"Pacific\/Palau"},{"name":"America\/Asuncion"},{"name":"Asia\/Qatar"},{"name":"Indian\/Reunion"},{"name":"Europe\/Bucharest"},{"name":"Europe\/Belgrade"},{"name":"Europe\/Kaliningrad"},{"name":"Europe\/Moscow"},{"name":"Europe\/Simferopol"},{"name":"Europe\/Kirov"},{"name":"Europe\/Astrakhan"},{"name":"Europe\/Volgograd"},{"name":"Europe\/Saratov"},{"name":"Europe\/Ulyanovsk"},{"name":"Europe\/Samara"},{"name":"Asia\/Yekaterinburg"},{"name":"Asia\/Omsk"},{"name":"Asia\/Novosibirsk"},{"name":"Asia\/Barnaul"},{"name":"Asia\/Tomsk"},{"name":"Asia\/Novokuznetsk"},{"name":"Asia\/Krasnoyarsk"},{"name":"Asia\/Irkutsk"},{"name":"Asia\/Chita"},{"name":"Asia\/Yakutsk"},{"name":"Asia\/Khandyga"},{"name":"Asia\/Vladivostok"},{"name":"Asia\/Ust-Nera"},{"name":"Asia\/Magadan"},{"name":"Asia\/Sakhalin"},{"name":"Asia\/Srednekolymsk"},{"name":"Asia\/Kamchatka"},{"name":"Asia\/Anadyr"},{"name":"Asia\/Riyadh"},{"name":"Pacific\/Guadalcanal"},{"name":"Indian\/Mahe"},{"name":"Africa\/Khartoum"},{"name":"Europe\/Stockholm"},{"name":"Asia\/Singapore"},{"name":"America\/Paramaribo"},{"name":"Africa\/Juba"},{"name":"Africa\/Sao_Tome"},{"name":"America\/El_Salvador"},{"name":"Asia\/Damascus"},{"name":"America\/Grand_Turk"},{"name":"Africa\/Ndjamena"},{"name":"Indian\/Kerguelen"},{"name":"Asia\/Bangkok"},{"name":"Asia\/Dushanbe"},{"name":"Pacific\/Fakaofo"},{"name":"Asia\/Dili"},{"name":"Asia\/Ashgabat"},{"name":"Africa\/Tunis"},{"name":"Pacific\/Tongatapu"},{"name":"Europe\/Istanbul"},{"name":"America\/Port_of_Spain"},{"name":"Pacific\/Funafuti"},{"name":"Asia\/Taipei"},{"name":"Europe\/Kiev"},{"name":"Europe\/Uzhgorod"},{"name":"Europe\/Zaporozhye"},{"name":"Pacific\/Wake"},{"name":"America\/New_York"},{"name":"America\/Detroit"},{"name":"America\/Kentucky\/Louisville"},{"name":"America\/Kentucky\/Monticello"},{"name":"America\/Indiana\/Indianapolis"},{"name":"America\/Indiana\/Vincennes"},{"name":"America\/Indiana\/Winamac"},{"name":"America\/Indiana\/Marengo"},{"name":"America\/Indiana\/Petersburg"},{"name":"America\/Indiana\/Vevay"},{"name":"America\/Chicago"},{"name":"America\/Indiana\/Tell_City"},{"name":"America\/Indiana\/Knox"},{"name":"America\/Menominee"},{"name":"America\/North_Dakota\/Center"},{"name":"America\/North_Dakota\/New_Salem"},{"name":"America\/North_Dakota\/Beulah"},{"name":"America\/Denver"},{"name":"America\/Boise"},{"name":"America\/Phoenix"},{"name":"America\/Los_Angeles"},{"name":"America\/Anchorage"},{"name":"America\/Juneau"},{"name":"America\/Sitka"},{"name":"America\/Metlakatla"},{"name":"America\/Yakutat"},{"name":"America\/Nome"},{"name":"America\/Adak"},{"name":"Pacific\/Honolulu"},{"name":"America\/Montevideo"},{"name":"Asia\/Samarkand"},{"name":"Asia\/Tashkent"},{"name":"America\/Caracas"},{"name":"Asia\/Ho_Chi_Minh"},{"name":"Pacific\/Efate"},{"name":"Pacific\/Wallis"},{"name":"Pacific\/Apia"},{"name":"Africa\/Johannesburg"}];
            this.timezone=data;
            },
        inmodal_group(e){

            axios.get('/api/v1/GetHubs/'+e.id)
                .then(response => {
                    this.hubs = [ ...new Set(JSON.parse(response.data.data)) ]
                    this.item.traveller_id=e.id;

                })
                .catch(error => {
                    alert("Error in fetching hub")

                })

        },
        inmodal_hub(e){
            this.item.type=e;
        }
    }
}
</script>


<style scoped>

    .nav-tabs .nav-link{
        font-size: 20px !important;
    }
    label{
        font-size: 15px !important;
    }


</style>
