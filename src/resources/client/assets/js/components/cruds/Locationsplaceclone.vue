<template>
    <li style=" list-style-type: none;" class="ml-n3">


        <div  class="row text-left mt-4" :id="location.id">

            <div  class="col-lg-3">
                <div  class="row">
                    <div  class="col-12">
                        <label  class="fw-4 h2 text-muted">Location {{Number(index)+Number(1)}}
                            <img  src="./dashboard_resources/loction.png" class="hw-i">
                        </label>
                    </div>
                    <div  class="col-12">
                        <label class="fw-4 h2 text-muted"> {{location.name}}</label>
                    </div>
                </div>
            </div>

            <div  class="col-lg-4 pl-5">
                <div  class="row">
                    <div  class="col-12">
                        <label  class="fw-4 h2 text-muted">Hotel
                            <img  src="./dashboard_resources/hotel.png" class="hw-i">
                        </label>
                    </div>
                    <div  class="col-12">
                        {{persisthotel1(index,location.id)}}
<!--                        <button @click="refresh?refresh=false:refresh=true">Refresh</button>-->
                        <v-select v-if="refresh" :clearable="false" :taggable="true" v-model="hotelselect[location.id]"
                                   :name="index"
                                   label="title"
                                   @input="addtohotel(index,location.id,location.name)"
                                   :value="non"
                                   :options=hoteloptions[location.id]
                                   :create-option="hotel => ({ title: hotel,id:'',check_in_time:'', check_out_time:'', featured_image_link:'',new:'yes' })"
                                   class="bg-light dropdown-menu-cust"  />

                        <v-select  v-if="!$route.path.includes('booking') && refresh" :clearable="false" :taggable="true" v-model="hotelselect2[location.id]"
                                  :name="location.id"
                                  label="title"
                                  @input="addtohotel2(index,location.id,location.name)"
                                  :value="non2"
                                  :options=hoteloptions[location.id]
                                  :create-option="hotel => ({ title: hotel,id:'',check_in_time:'', check_out_time:'', featured_image_link:'',new:'yes' })"
                                  class="bg-light mt-2 dropdown-menu-cust"/>

                    </div>
                </div>
            </div>

            <div  class="col-lg-4">
                <div  class="row">
                    <div  class="col-lg-12">
                        <label  class="fw-4 h2 text-muted">Nights
                            <img  src="./dashboard_resources/night.png" class="hw-i">
                        </label>
                    </div>
                    <div  class="col-lg-12">
                        <div  class="row">
                            <div class="col-lg-10">
                                <img src="./dashboard_resources/minus.png" @click="location.days>1?location.days-- :''" class="mt-n2 hw-img">
                                <input type="number" min="1" id="myNumber" v-model="location.days" style="width: 28%">

                                <img src="./dashboard_resources/plus.png" @click="location.days++" class="hw-img mt-n2">

                            </div>
                            <div class="col-lg-2">
                                <img @click="remove" src="./dashboard_resources/minus.png" class="hw-img">
                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>


    </li>

    <!--@click="remove"-->
</template>


<script>
    import DaysPlaceComponent from '../cruds/daysplaces'

    export default{

        data(){
            return{
                // redeleteflag:false,
                tour:[],
                days:[],
                objj:{},
                temp:{},
                defaultt:[],
                localplace:{},
                hotelselect:{},
                hotelselect2:{},
                hoteloptions:{},
                non:[],
                non2:[],
                local_tour:{},
                refresh:false
                // tt:[{"id":1,"title":"ffhjhj"}]
            }

        },


        mounted(){

            if(this.redeleteflag){
                this.local_tour=this.tour_location;

                for (var key in this.local_tour) {

                    this.local_tour[key]['hotel'] ={'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                    this.local_tour[key]['hotel2'] = {'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                    this.local_tour[key]['specinst'] ='';
                    this.local_tour[key]['mealplan'] ='';



                }
            }
            else {

                this.local_tour=this.tour_location;

                for (var key in this.local_tour) {


                    this.hotelselect[this.local_tour[key]['id']]={};

                    if(typeof this.local_tour[key]['hotel']!=="undefined"){
                        Object.assign(this.hotelselect[this.local_tour[key]['id']], this.local_tour[key]['hotel']['hotel_data']);
                    }
                    else{

                        this.local_tour[key]['hotel'] ={'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                        this.local_tour[key]['hotel2'] = {'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                        this.local_tour[key]['specinst'] ='';
                        this.local_tour[key]['mealplan'] ='';
                        this.local_tour[key]['voucher_number'] ='';
                        this.local_tour[key]['hotel_email'] ='';
                        this.local_tour[key]['hotel_amount'] ='';
                        Object.assign(this.hotelselect[this.local_tour[key]['id']], this.local_tour[key]['hotel']['hotel_data']);
                    }

                    this.hotelselect2[this.local_tour[key]['id']]={};
                    if(typeof this.local_tour[key]['hotel']!=="undefined"){

                        Object.assign(this.hotelselect2[this.local_tour[key]['id']], this.local_tour[key]['hotel2']['hotel_data']);
                    }
                    else {
                        this.local_tour[key]['hotel'] ={'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                        this.local_tour[key]['hotel2'] = {'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                        this.local_tour[key]['specinst'] ='';
                        this.local_tour[key]['mealplan'] ='';
                        this.local_tour[key]['voucher_number'] ='';
                        this.local_tour[key]['hotel_email'] ='';
                        this.local_tour[key]['hotel_amount'] ='';
                        Object.assign(this.hotelselect2[this.local_tour[key]['id']], this.local_tour[key]['hotel2']['hotel_data']);

                    }









                }
            }






            this.defaultt.push({"id":1,
                "title":"Day at Leisure",
                "to_time":"",
                "from_time":"",
                "remark":""

            });




        },
        watch: {
            'hotels': function(newVal, oldVal) {
                // console.log("watch");
                // console.log('value changed from ' + oldVal + ' to ' + newVal);
                this.hotelset(this.location.id,this.hotels);

            },
            'tour_location': function(newVal, oldVal) {


                if(this.redeleteflag){
                    this.local_tour=this.tour_location;

                    for (var key in this.local_tour) {

                        this.local_tour[key]['hotel'] ={'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                        this.local_tour[key]['hotel2'] = {'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                        this.local_tour[key]['specinst'] ='';
                        this.local_tour[key]['mealplan'] ='';



                    }
                }else {
                    this.local_tour=newVal;
                    for (var key in this.local_tour) {

                        if(typeof this.local_tour[key]['hotel']!=="undefined"){
                            Object.assign(this.hotelselect[this.local_tour[key]['id']], this.local_tour[key]['hotel']['hotel_data']);
                        }
                        else{

                            this.local_tour[key]['hotel'] ={'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                            this.local_tour[key]['hotel2'] = {'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                            this.local_tour[key]['specinst'] ='';
                            this.local_tour[key]['mealplan'] ='';
                            this.local_tour[key]['voucher_number'] ='';
                            this.local_tour[key]['hotel_email'] ='';
                            this.local_tour[key]['hotel_amount'] ='';
                            Object.assign(this.hotelselect[this.local_tour[key]['id']], this.local_tour[key]['hotel']['hotel_data']);
                        }

                        this.hotelselect2[this.local_tour[key]['id']]={};
                        if(typeof this.local_tour[key]['hotel']!=="undefined"){

                            Object.assign(this.hotelselect2[this.local_tour[key]['id']], this.local_tour[key]['hotel2']['hotel_data']);
                        }
                        else {
                            this.local_tour[key]['hotel'] ={'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                            this.local_tour[key]['hotel2'] = {'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                            this.local_tour[key]['specinst'] ='';
                            this.local_tour[key]['mealplan'] ='';
                            this.local_tour[key]['voucher_number'] ='';
                            this.local_tour[key]['hotel_email'] ='';
                            this.local_tour[key]['hotel_amount'] ='';
                            Object.assign(this.hotelselect2[this.local_tour[key]['id']], this.local_tour[key]['hotel2']['hotel_data']);

                        }




                    }

                }


            },
            'location.days': function(newVal, oldVal) {
                // console.log("watch");
                // console.log('value changed from ' + oldVal + ' to ' + newVal);
                this.location.daynights=parseInt(this.location.days) +1
            },

        },
        created(){


        },

        methods: {
            run(){

                // console.log(this.objj)
            },
            hotelset(locationid,hotels){

                // alert("hotel set");
                // console.log(locationid);
                // console.log(hotels);
                if(this.hotelselect.hasOwnProperty(locationid)){

                }
                else{
                    // this.hotelselect[locationid]={};
                    Object.assign( this.hotelselect, {[locationid]: {}})

                }
                if(this.hotelselect2.hasOwnProperty(locationid)){

                }
                else{

                    Object.assign( this.hotelselect2, {[locationid]: {}})

                }



                if (!_.isEmpty(hotels) && typeof hotels !== 'undefined') {

                    // console.log(hotels);
                    // console.log("jjjj2");
                    var hot = _.cloneDeep(hotels);
                    //  this.hoteloptions={[locationid]:hot};
                     console.log("hot");

                    if(this.hoteloptions.hasOwnProperty(locationid)){

                        this.hoteloptions[locationid]=hot
                        this.refresh=true
                    }
                    else {
                        // this.hoteloptions[locationid]=hotels;
                        Object.assign( this.hoteloptions, {[locationid]: hot})
                        this.refresh=true
                    }



                }


            },

            remove(){
                // alert('hello');

                this.$emit('delete', this.location.id)


            },

            persisthotel1(index,location){
                if(this.hotel1_in){

                    this.local_tour[index]["hotel"]['hotel_data']=this.hotelselect[location];
                    Object.assign(this.tour_location[index],this.local_tour[index]);
                }

                if(this.hotel2_in){
                    this.local_tour[index]["hotel2"]['hotel_data'] = this.hotelselect2[location];
                    Object.assign(this.tour_location[index], this.local_tour[index]);
                }

            },
            addtohotel(index,location,locname){

                if(this.hotelselect[location].new=='yes'){
                    var googleurl='';

                    axios.get('/api/webservices/fetch_image/?title='+ this.hotelselect[location].title+','+locname)
                        .then(response => {
                            googleurl=response.data;

                            let params = new FormData();
//
                            if(googleurl.length>20){
                                params.set('featured_image_url', googleurl)
                            }

                            params.set('city_id', location.split('-')[0])
                            params.set('title', this.hotelselect[location].title)
                            params.set('new', 'yes')
                            axios.post('/api/v1/accommodations', params)
                                .then(response => {
                                    // alert("yo")
                                    // console.log(JSON.stringify(response.data.data));
                                    this.hotelselect[location].id=response.data.data.id
                                })
                        });
                    this.local_tour[index]["hotel"]['hotel_data']=this.hotelselect[location];
                }
                else {
                    this.local_tour[index]["hotel"]['hotel_data']=this.hotelselect[location];
                }

                Object.assign(this.tour_location[index],this.local_tour[index]);


            },
            addtohotel2(index,location,locname){

                if(this.hotelselect2[location].new=='yes'){

                    var googleurl='';

                    axios.get('/api/webservices/fetch_image/?title='+ this.hotelselect2[location].title+','+locname)
                        .then(response => {
                            googleurl=response.data;

                            let params = new FormData();
//
                            if(googleurl.length>20){
                                params.set('featured_image_url', googleurl)
                            }

                            params.set('city_id', location.split('-')[0])
                            params.set('title', this.hotelselect2[location].title)
                            params.set('new', 'yes')
                            axios.post('/api/v1/accommodations', params)
                                .then(response => {
                                    // alert("yo")
                                    // console.log(JSON.stringify(response.data.data));
                                    this.hotelselect2[location].id=response.data.data.id
                                })
                        });
                    this.local_tour[index]["hotel2"]['hotel_data']=this.hotelselect2[location];
                }
                else {
                    this.local_tour[index]["hotel2"]['hotel_data'] = this.hotelselect2[location];
                }
                Object.assign(this.tour_location[index], this.local_tour[index]);


            },
            addtoplaces(day,locationid){

                if( this.objj.hasOwnProperty(locationid)){
                    // alert("up");
                    console.log(this.objj);
                    if(this.objj[locationid].hasOwnProperty('day-'+day)){

                        this.objj[locationid]['day-'+day].place=_.clone(this.days[day])

                        console.log(this.objj);
                    }
                    else{


                        Object.assign( this.objj[locationid], {['day-'+day]: {'place':_.clone(this.days[day])}})

                    }


                    // this.objj[locationid].push(obj)

                }
                else {

                    this.temp[locationid]={};

                    //  this.objj[locationid].push([day]);
                    this.temp[locationid]['day-'+day]={'place':_.clone(this.days[day])};


                    this.objj = Object.assign(this.objj, this.temp);
                    //this.objj[locationid][day]=[];
                    //   this.objj[locationid][day].place.push(this.days[day])
                    console.log(this.objj)


                }

                //      console.log(this.objj)
                this.$emit('addplace',this.objj)
            }

        },
        // components: {DaysPlaceComponent},

        props: ['location','place','hotels','index','tour_location','redeleteflag']

    }


</script>

<style>
  .dropdown-menu-cust .dropdown-menu{
      max-height:200px !important;
      position: relative;
  }

    .dropdown-menu-cust .vs__search::placeholder,
    .dropdown-menu-cust .vs__dropdown-toggle,
    .dropdown-menu-cust .vs__dropdown-menu {
        background: #dfe5fb;
        border: none;
        color: #394066;
        text-transform: lowercase;
        font-variant: small-caps;
    }


    input[type=number] {
        -moz-appearance:textfield;
    }
    .hw-img{
        height: 37px;
        width: 35px;
    }
</style>
