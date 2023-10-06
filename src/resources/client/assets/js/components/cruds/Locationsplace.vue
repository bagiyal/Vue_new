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

            <div  class="col-lg-4 pl-5" v-if="platform=='travelexic'">
                <div  class="row">
                    <div  class="col-12">
                        <label  class="fw-4 h2 text-muted">Hotel
                            <img  src="./dashboard_resources/hotel.png" class="hw-i">
                        </label>
                    </div>
                    <div  class="col-12">
                        {{persisthotel1(index,location.id)}}


                        <v-select  :clearable="false" v-model="hotelselect[location.id]"
                                  name="addhotel"
                                  label="title"
                                  @input="addtohotel(index,location.id)"
                                  :value="non"
                                  :options=hoteloptions[location.id]

                                  class="bg-light" />

                        <v-select v-if="!($route.path.includes('booking') || $route.path.includes('groups')) "  :clearable="false"  v-model="hotelselect2[location.id]"
                                  name="addhotel"
                                  label="title"
                                  @input="addtohotel2(index,location.id)"
                                  :value="non2"
                                  :options=hoteloptions[location.id]

                                  class="bg-light mt-2"  />

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
                platform:'travelexic',
                tour:[],
                days:[],
                objj:{},
                temp:{},
                defaultt:[],
                localplace:{},
                hotelselect:[],
                hotelselect2:[],
                hoteloptions:{},
                non:[],
                non2:[],
                local_tour:{},
                hotel1_in:false,
                hotel2_in:false,
                // tt:[{"id":1,"title":"ffhjhj"}]
            }

        },


        mounted(){

            this.local_tour=this.tour_location;

            for (var key in this.local_tour) {

                this.local_tour[key]['hotel'] ={'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                this.local_tour[key]['hotel2'] = {'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                this.local_tour[key]['specinst'] ='';
                this.local_tour[key]['mealplan'] ='';
                this.local_tour[key]['voucher_number'] ='';
                this.local_tour[key]['hotel_email'] ='';
                this.local_tour[key]['hotel_amount'] ='';



                this.platform= document.querySelector("meta[name='platform']").getAttribute('content')




            }
// alert("mounted");
// console.log(this.$props);
//     this.$nextTick(function () {
//             this.hotelset(this.$props.location.id,this.$props.hotels);
//         }),

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

                this.local_tour=this.tour_location;

                for (var key in this.local_tour) {

                    this.local_tour[key]['hotel'] ={'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                    this.local_tour[key]['hotel2'] = {'hotel_data':'','checkin':'','checkout':'','roomtype':''};
                    this.local_tour[key]['specinst'] ='';
                    this.local_tour[key]['mealplan'] ='';



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

                console.log(this.objj)
            },
            hotelset(locationid,hotels){

                // alert("hotel set");
                console.log(locationid);
                console.log(hotels);

                if (!this.hotelselect.hasOwnProperty(locationid)){
                    this.hotelselect = {[locationid]: {}};

                }
                if (!this.hotelselect2.hasOwnProperty(locationid)){
                    this.hotelselect2 = {[locationid]: {}};

                }


                if (!_.isEmpty(hotels) && typeof hotels !== 'undefined') {

                    console.log(hotels);
                    console.log("jjjj");
                    var hot = _.cloneDeep(hotels);
                    //  this.hoteloptions={[locationid]:hot};
                    console.log(hot);
                    //
                    this.hoteloptions = {[locationid]: hot};
                    // this.hoteloptions=Object.assign(this.hoteloptions,{[locationid]:hot});
                    // this.hoteloptions=Object.assign({},this.hoteloptions);


                }
                else if (typeof hotels !== 'undefined' && _.isEmpty(this.hoteloptions[locationid])) {
                    console.log("kkkk");
                    var hot = _.cloneDeep(hotels);
                    this.hoteloptions = {[locationid]: hot};
                }
                console.log(this.hoteloptions);
                console.log("iii");
            },
            preselect(a,b,locationid,place){


                //         console.log(place);
                if(_.isEmpty(this.localplace) && typeof place !== 'undefined'){
                    // alert("test");
                    var pla=_.cloneDeep(place);
                    this.localplace[locationid]={[a]:pla};
                    //var arr=_.clone(place);
                    // this.localplace[locationid][a]=place;
                    console.log("cloned");
                    console.log(this.localplace);
                }
                else if(typeof place !== 'undefined' && _.isEmpty(this.localplace[locationid][a])){

                    var pla=_.cloneDeep(place);
                    this.localplace[locationid]={[a]:pla};
                }





                //     Object.freeze(this.defaultt);
                console.log("before me"+this.temp);
                console.log(this.temp);
//alert("me");

                if(_.isEmpty(this.objj)){
                    // alert("me empty");

                    this.days[a]=[{"id":1,
                        "title":"Day at Leisure",
                        "to_time":"",
                        "from_time":"",
                        "remark":""

                    }];
                    var day=a;

                    this.temp[locationid]={};

                    this.temp[locationid]['day-'+day]={'place':this.days[day]};
                    this.objj = Object.assign(this.objj, this.temp);
                    this.temp = Object.assign({}, {});
                    //this.days=[];
                    this.$emit('addplace',this.objj)
                }
                else {

                    var day=a;
//    alert("me empty2 ");
                    //   console.log(this.objj[locationid]);
                    if(_.isEmpty(this.objj[locationid]['day-'+day])){
                        this.days[a]=[{"id":1,
                            "title":"Day at Leisure",
                            "to_time":"",
                            "from_time":"",
                            "remark":""

                        }];
                        // alert("me not else in");
                        this.temp=Object.assign(this.temp,this.objj);
                        this.temp[locationid]['day-'+day]={'place':this.days[day]};
                        this.objj = Object.assign(this.objj, this.temp);
                        this.temp = Object.assign({}, {});
                        // this.days=[];
                        this.$emit('addplace',this.objj)
                    }
                    else {


                    }
                    console.log("else me"+this.temp);
                    console.log(this.temp);
                }

                return null;

            },
            remove(){
                // alert('hello');
                this.$emit('delete', this.location.id)


            },
            // setday(day)
            // {
            //     this.days=day
            //     console.log(this.days)
            // },
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

            addtohotel(index,location){
                this.hotel1_in=true;

                // if(this.hotelselect[location].new=='yes'){
                //     let params = new FormData();
                //
                //     params.set('city_id', location.split('-')[0])
                //     params.set('title', this.hotelselect[location].title)
                //     params.set('new', 'yes')
                //     axios.post('/api/v1/accommodations', params)
                //         .then(response => {
                //             // alert("yo")
                //             // console.log(JSON.stringify(response.data.data));
                //             this.hotelselect[location].id=response.data.data.id
                //         })
                //
                //     this.local_tour[index]["hotel"]['hotel_data']=this.hotelselect[location];
                // }
                // else {
                this.local_tour[index]["hotel"]['hotel_data']=this.hotelselect[location];
                // }
                // // this.$emit('refresh')

            },

            addtohotel2(index,location){
                this.hotel2_in=true;

                // if(this.hotelselect2[location].new=='yes'){
                //     let params = new FormData();
                //
                //     params.set('city_id', location.split('-')[0])
                //     params.set('title', this.hotelselect2[location].title)
                //     params.set('new', 'yes')
                //     axios.post('/api/v1/accommodations', params)
                //         .then(response => {
                //             // alert("yo")
                //             // console.log(JSON.stringify(response.data.data));
                //             this.hotelselect2[location].id=response.data.data.id
                //         })
                //
                //     this.local_tour[index]["hotel2"]['hotel_data']=this.hotelselect2[location];
                // }
                // else {
                this.local_tour[index]["hotel2"]['hotel_data']=this.hotelselect2[location];
                // }
                // Object.assign(this.tour_location[index], this.local_tour[index]);


            },
            addtoplaces(day,locationid){
                //      console.log(this.days[day]);
                //    console.log(day);

                //   var obj={'place': this.days[day]};
// alert("dddddd");

                if( this.objj.hasOwnProperty(locationid)){
                    // alert("up");
                    console.log(this.objj);
                    if(this.objj[locationid].hasOwnProperty('day-'+day)){

                        this.objj[locationid]['day-'+day].place=_.clone(this.days[day])

                        //   console.log(this.days[day]);
                        //      this.objj[locationid][day].place=[];
                        //
                        //        this.$set(this.objj[locationid][day], 'place', this.days[day]);
                        console.log(this.objj);
                    }
                    else{
                        // alert("in else");

                        Object.assign( this.objj[locationid], {['day-'+day]: {'place':_.clone(this.days[day])}})
                        // this.objj[locationid]={
                        //     [day]: {'place':this.days[day]}
                        // }
                        // this.objj[locationid][day].place=[];
                        // this.objj[locationid][day].place=this.days[day]
                    }


                    // this.objj[locationid].push(obj)

                }
                else {
                    // alert("down");
                    //    console.log(obj)

                    // console.log({ [locationid]:obj })
                    //      console.log(newob);
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
//             updatedays(){
// //alert('hello');
//                     this.$root.$emit(' dayupdate', this.location.id)
//             },

        },
        // components: {DaysPlaceComponent},

        props: ['location','place','hotels','index','tour_location']

    }


</script>

<style>
    input[type=number] {
        -moz-appearance:textfield;
    }
    .hw-img{
        height: 37px;
        width: 35px;
    }
</style>
