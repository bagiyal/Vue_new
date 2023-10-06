<template>

    <div>

        <form-wizard @on-complete="onCompletehotel" color="rgb(23, 80, 125)" title=""  subtitle="" finish-button-text="Day Plan">
            <tab-content v-for="(loc,index) in location" :id="'hotel' + index" :key="'hotel' + index" :title="loc.name" icon="fa fa-check">
                <!-- Modal -->

                <div v-if="addhotelmodal===true">
                    <transition name="modal">
                        <div class="modal-mask">
                            <div class="modal-wrapper">
                                <div class="modal-dialog add_width">
                                    <div class="modal-content">
                                        <div class="modal-header border-0 border-dotted">
                                            <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                                <div class="row">
                                                    <div class="col-10">

                                                        <h1><span ><img src="./dashboard_resources/add-1.png" class="hw-2 mr-1rem"></span>Add Hotel</h1>
                                                    </div>
                                                    <div class="col-2 text-right">
                                                        <button type="button" class="close" @click="removehotelmodal()">

                                                            <span aria-hidden="true" class="f-2">&times;</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="modal-body" style="">
                                            <div class="container-fluid c-grey">
                                                <div class="row no-gutters">
                                                    <h3>Disclaimer : Hotel data is taken through public sources.</h3>
                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <div class="col-md-6"> <div class="input-group">
                                                                <input type="text" class="form-control pl-5 f-1-6"
                                                                       v-model="new_hotel_add"
                                                                       name="new_hotel"
                                                                       placeholder="Enter Hotel Name"


                                                                />
                                                                <div class="input-group-append">
                                                                    <button class="btn btn-secondary" type="button" @click="update_and_save()" >
                                                                        <i class="fa fa-search" ></i>
                                                                    </button>
                                                                </div>
                                                            </div ></div>
                                                            <div class="col-md-6" v-if="show_image==true">

                                                                <div class="col-md-12">

                                                                    <div class="row">

                                                                        <div class="col-md-12 text-center f-1-6" v-if="custom_hotel_image==''">

                                                                            <label class="file_hidden f-1-6">
                                                                                Click To Add Custom Image
                                                                                <input type="file" size="20"  @change="upload_img($event,'hotel_img',1)">
                                                                            </label>
                                                                        </div>
                                                                        <div class="col-12 text-center f-1-6" v-if="custom_hotel_image!=''">
                                                                            <!--                                                            <p class="fw-6">Uploaded</p>-->
                                                                            <div class="row">
                                                                                <div class="col-md-8 offset-1">
                                                                                    <a class="download_button f-1-6" target= "_blank" href="#">Uploaded</a>
                                                                                </div>
                                                                                <div class="col-md-2">
                                                                                    <img  @click="deletefetureimage" src="./dashboard_resources/trash.png" class="hw-3 ">
                                                                                </div>

                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>

                                                        <div v-if="show_image==true" class="col-md-12 mt-5 text-left">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <p v-if="image_not_found==true">Image Not Found</p>
                                                                    <img :src="hotel_image_link" style="height: 200px;width: 100%;">


                                                                </div>


                                                                <div class="col-md-6" v-if="custom_hotel_image!=''">

                                                                    <img :src="custom_hotel_image" style="height: 200px;width: 100%;">
                                                                </div>
                                                                <div v-if="hotel_info!=''" class="mt-2 col-md-12 text-dark">
                                                                    <span>Rating : {{hotel_info.rating}}</span><br>
                                                                    <span>Address : {{hotel_info.address}}</span><br>
                                                                    <span>Phone : {{hotel_info.number}}</span><br>
                                                                </div>
                                                            </div>





                                                        </div>



                                                    </div>
                                                </div>

                                                <div class="row mt-3">
                                                    <div class="col text-right" v-if="new_hotel==true ">
                                                        <input type="button" class="bg-success pl-5 border-0 text-white pr-5 b-1-5" value="Save Hotel"  @click="save_hotel(loc.id)">
                                                    </div>
                                                </div>
                                            </div>



                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>


                <div class="text-left ml-n4">
                    <p class="f-1-5 ml-n2"><span class="bg-color p-2 text-white pl-3 pr-4">{{loc.date_from }}- {{loc.date_to }}</span></p>
                </div>
                <div class="text-right ml-n4">
                    <p class="f-1-5 ml-n2"><button @click="addtohotel3(index,loc.id,loc.name)" class="btn-primary pl-4 pr-4 mb-2" style="background-color: #1E51A4; border-color:#1E51A4; color: white;border-radius: 10px;">Add Hotel</button></p>
                </div>
                <fieldset>
                    <div class="fluid-container">

                        <div class="row">
                            <div class="col-5 offset-1">
                                <div class="row">
                                    <div class="col-12 text-right"><span>OPTION</span></div>
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="fluid-container pl-2 ">
                                                <div data-v-cfd77f34="" style="height: 50px;text-align: right;">
                                                    <img src="./dashboard_resources/12_icon.png" class="hotel_option_img">

                                                </div>
                                                <p class="num">1</p>
                                                <div class="row pr-3 pl-2">
                                                    <div class="col-12 text-left text-muted"><span><img src="./dashboard_resources/hotel name_icon.png" class="hw-3"></span>Hotel Name</div>
                                                    <div class="col-12">
                                                        {{callhotel()}}
                                                        <!--                                {{loc.id}}-->
                                                        <!--                                <input type="text" style="width: 95%;margin-left:10px;margin-right: 10px;border:0px;border:solid gainsboro 1px;border-radius: 2px;" value="The Musica by Ziﬀy Homes">-->
                                                        <v-select  :clearable="false" v-model="hotelselect[loc.id]"
                                                                   name="addhotel"
                                                                   label="title"
                                                                   @input="addtohotel(index,loc.id)"
                                                                   :value="non"
                                                                   :options=hoteloptions[loc.id]

                                                        />
                                                    </div>
                                                </div>
                                                <div class="row mt-5">
                                                    <div class="col text-center">
                                                        <img v-if="imgrefresh" v-bind:src="hotelselect[loc.id]['featured_image_link']?hotelselect[loc.id]['featured_image_link']:'./dashboard_resources/hotel_default.png'"
                                                             class="hotel-img">
                                                    </div>
                                                </div>
                                                <div class="row mt-5 ml-2 pt-4 pb-4 mr-3" style="border-top: dotted darkgrey 2px;border-bottom: dotted darkgrey 2px">
                                                    <div class="text-right col-3 f-1-8 text-success"><span><i class="fa fa-circle"></i></span></div>
                                                    <div class="col-6 mt-3 sq-dot-line">
                                                    </div>
                                                    <div class="text-left col-3 f-1-8 text-danger"><span><i class="fa fa-circle"></i></span></div>
                                                    <div class="col-6">
                                                        <div class="row">
                                                            <div class="col-12 text-left">
                                                                <span class="text-muted">Check-in</span>
                                                            </div>
                                                            <div class="col-10">
                                                                <date-picker v-if="hotelselect[loc.id]"
                                                                             v-model="local_tour[index]['hotel']['hotel_data']['check_in_time']"
                                                                             :config="$root.dpconfigTimeshort"
                                                                             name="driver_pickup_date_time"
                                                                             class="form-control"
                                                                ></date-picker>
                                                                <span class="check-in-img p-a"><img src="./dashboard_resources/edit.png" class="h-2 w-3"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="row">
                                                            <div class="col-12 text-">
                                                                <span class="text-muted">Check-out</span>
                                                            </div>
                                                            <div class="col-10 offset-2">
                                                                <date-picker v-if="hotelselect[loc.id]"
                                                                             v-model="local_tour[index]['hotel']['hotel_data']['check_out_time']"
                                                                             :config="$root.dpconfigTimeshort"
                                                                             name="driver_pickup_date_time"
                                                                             class="form-control"
                                                                >
                                                                </date-picker>
                                                                <span class="check-in-img p-a">
                                                                    <img src="./dashboard_resources/edit.png" class="h-2 w-3">
                                                                </span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <!--                                {{hoteloptions}}-->
                                                <!--                                <img src="./dashboard_resources/edit.png" style="left: 290px; position: absolute; top: 58px; color: darkgrey; height: 18px; width: 30px;">-->

                                                <div class="row mt-4 mb-4">
                                                    <div class="col-12 text-center"><p class="text-dark">Room Type</p></div>
                                                    <div class="col-4 offset-4 mt-n3">
                                                        <input v-if="hotelselect[loc.id]" v-model="local_tour[index]['hotel']['roomtype']" class="text-center form-control">
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-5" v-if="!$route.path.includes('booking')" >
                                <div class="row">
                                    <div class="col-12 text-right"><span>OPTION</span></div>
                                    <div class="col-12">
                                        <div class="card">
                                            <!-- src="./dashboard_resources/hotel name_icon.png" -->
                                            <div class="fluid-container pl-2" >
                                                <div data-v-cfd77f34="" style="height: 50px;text-align: right;">
                                                    <img src="./dashboard_resources/12_icon.png" class="hotel_option_img">

                                                </div>
                                                <p class="num">2</p>
                                                <div class="row">
                                                    <div class="col-12 text-left text-muted"><span><img src="./dashboard_resources/hotel name_icon.png" class="hw-3"></span>Hotel Name</div>
                                                    <div class="col-12">
                                                        <v-select   class="pr-3 pl-2" :clearable="false" v-model="hotelselect2[loc.id]"
                                                                    name="addhotel"
                                                                    label="title"
                                                                    @input="addtohotel2(index,loc.id)"
                                                                    :value="non"
                                                                    :options=hoteloptions[loc.id]

                                                        />
                                                        <!--                                {{loc.id}}-->
                                                        <!--                                <input type="text" style="width: 95%;margin-left:10px;margin-right: 10px;border:0px;border:solid gainsboro 1px;border-radius: 2px;" value="The Musica by Ziﬀy Homes">-->
                                                    </div>
                                                </div>
                                                <div class="row mt-5">
                                                    <div class="col text-center">
                                                        <img v-bind:src="hotelselect2[loc.id]['featured_image_link']?hotelselect2[loc.id]['featured_image_link']:'./dashboard_resources/hotel_default.png'"
                                                             class="hotel-img">
                                                    </div>
                                                </div>
                                                <div class="row mt-5 ml-2 pt-4 pb-4 mr-3" style="border-top: dotted darkgrey 2px;border-bottom: dotted darkgrey 2px">
                                                    <div class="text-right col-3 f-1-8 text-success"><span><i class="fa fa-circle"></i></span></div>
                                                    <div class="col-6 mt-3 sq-dot-line">
                                                    </div>
                                                    <div class="text-left col-3 f-1-8 text-danger"><span><i class="fa fa-circle"></i></span></div>
                                                    <div class="col-6">
                                                        <div class="row">
                                                            <div class="col-12 text-left">
                                                                <span class="text-muted">Check-in</span>
                                                            </div>
                                                            <div class="col-10">
                                                                <date-picker v-if="hotelselect2[loc.id]"
                                                                             v-model="local_tour[index]['hotel2']['hotel_data']['check_in_time']"
                                                                             :config="$root.dpconfigTimeshort"
                                                                             name="driver_pickup_date_time"
                                                                             class="form-control"
                                                                ></date-picker>
                                                                <span class="check-in-img p-a"><img src="./dashboard_resources/edit.png" class="h-2 w-3"></span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-6">
                                                        <div class="row">
                                                            <div class="col-12 text-center">
                                                                <span class="text-muted">Check-out</span>
                                                            </div>
                                                            <div class="col-10 offset-2">
                                                                <date-picker v-if="hotelselect2[loc.id]"
                                                                             v-model="local_tour[index]['hotel2']['hotel_data']['check_out_time']"
                                                                             :config="$root.dpconfigTimeshort"
                                                                             name="driver_pickup_date_time"
                                                                             class="form-control"
                                                                >
                                                                </date-picker>
                                                                <span class="check-in-img p-a">
                                                                    <img src="./dashboard_resources/edit.png" class="h-2 w-3">
                                                                </span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <!--                                {{hoteloptions}}-->
                                                <!--                                <img src="./dashboard_resources/edit.png" style="left: 290px; position: absolute; top: 58px; color: darkgrey; height: 18px; width: 30px;">-->

                                                <div class="row mt-4 mb-4">
                                                    <div class="col-12 text-center"><p class="text-dark">Room Type</p></div>
                                                    <div class="col-4 offset-4 mt-n3">
                                                        <input v-if="hotelselect2[loc.id]" v-model="local_tour[index]['hotel2']['roomtype']" class="text-center form-control">
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-10 offset-1 text-left mt-5">Special Instruction</div>
                            <div class="col-10 text-left offset-1">
                                <textarea
                                    rows="3"
                                    v-model="local_tour[index]['specinst']"
                                    type="text"
                                    class="form-control">

                                </textarea>
                            </div>

                            <div class="col-10 offset-1 text-left mt-5">Meal Plan</div>
                            <div class="col-10 text-left offset-1">
                                <select v-model="local_tour[index]['mealplan']" class="form-control">
                                    <option value="MAP">MAP(with BF & D)</option>
                                    <option value="CP">CP(with BF)</option>
                                    <option value="AP">AP(All Meal)</option>
                                    <option value="EP">EP(No Meal)</option>
                                </select>
                            </div>


                        </div>
                    </div>

                </fieldset>
            </tab-content>
        </form-wizard>
        <div v-if="place_added_model===true">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-header border-0 border-dotted">
                                    <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                        <div class="row">
                                            <div class="col-10 text-left">
                                                <h1>Custom Hotel Added</h1>
                                            </div>
                                            <div class="col-2 text-right">
                                                <button type="button" class="close f-2-5"  @click="place_added_model=false">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div class="modal-body" >
                                    <div :style="{ 'background-image': 'url('+tick_url+')'}" style="height: 100px; width: 100%; background-size: contain; background-repeat: no-repeat; background-position: center; "></div>
                                    <div style="text-align: center;" ><h1 >
                                        New Hotel added to {{hotel_loc_name}}
                                    </h1></div>
                                    <div class="col text-right" >
                                        <input type="button" class="bg-success pl-5 border-0 text-white pr-5 b-1-5"
                                               value="Continue" @click="place_added_model=false">
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>


<script>
    import DaysPlaceComponent from '../cruds/daysplaces'
    //
    import {FormWizard, TabContent,WizardButton,WizardStep} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import uploadfile from "../../mixins/uploadfile";
    export default{

        data(){
            return{
                tour:[],
                days:[],
                objj:{},
                temp:{},
                defaultt:[],
                localplace:{},
                hotelselect:{},
                hotelselect2:{},
                new_hotel_add:'',
                hoteloptions:{},
                non:[],
                non2:[],
                fs:false,
                fs1:true,
                flag:0,
                local_tour:{},
                hotelli:true,
                imgrefresh:true,
                addhotelmodal:false,
                show_image:false,
                image_not_found:false,
                new_hotel:false,
                hotel_loc_id:'',
                hotel_loc_name:'',
                hotel_image_link:'',
                custom_hotel_image:'',
                hotel_info:'',
                place_added_model:false,
                background_url:'',
                tick_url:'',


                // tt:[{"id":1,"title":"ffhjhj"}]
            }

        },

        mounted(){

            this.local_tour=this.tour_location;
            for (var key in this.local_tour) {
                // this.local_tour[key]['hotel'] =this.local_tour[key]['hotel'];
                // this.local_tour[key]['hotel2']=this.local_tour[key]['hotel2'];

                // this.hotelselect[this.local_tour[key]['id']]=this.local_tour[key]['hotel']['hotel_data'];
                Object.assign(this.hotelselect[this.local_tour[key]['id']],this.local_tour[key]['hotel']['hotel_data']);
                // this.hotelselect[this.local_tour[key]['id']]={};
                // Object.assign(this.hotelselect[this.local_tour[key]['id']],{"hello":""});

                // this.hotelselect2[this.local_tour[key]['id']]=this.local_tour[key]['hotel2']['hotel_data'];
                Object.assign(this.hotelselect2[this.local_tour[key]['id']],this.local_tour[key]['hotel2']['hotel_data']);




            }



        },
        watch: {

            tour_location: {

                handler(newval, oldVal){
                    console.log("deepwatch");
                    console.log(newval);
                    this.local_tour=newval;
                    // console.log(this.local_tour);

                    for (var key in newval) {

                        Object.assign(this.hotelselect[this.local_tour[key]['id']],this.local_tour[key]['hotel']['hotel_data']);


                        Object.assign(this.hotelselect2[this.local_tour[key]['id']],this.local_tour[key]['hotel2']['hotel_data']);


                        if(this.local_tour[key]['specinst']=='' || typeof (this.local_tour[key]['specinst'])=="undefined"){
                            this.local_tour[key]['specinst'] ='';


                        }

                        if(this.local_tour[key]['mealplan']=='' || typeof (this.local_tour[key]['mealplan'])=="undefined"){
                            this.local_tour[key]['mealplan'] ='';


                        }



                    }



                },
                deep: true


            },




            'hotels': function(newVal, oldVal) {
                // alert("f");
                console.log("watch");
                console.log('value changed from ' + oldVal + ' to ' + newVal);

                this.callhotel();



            },
            'location': function(newVal, oldVal) {
                // alert("f");
                console.log("watch");
                console.log('value changed from ' + oldVal + ' to ' + newVal);

                this.callhotel();
                this.hotelli='hotelli0';


            }




        },
        created(){
            var base_url = window.location.origin;
            this.background_url=base_url+'/dashboard_resources/background_doc.png';
            this.tick_url=base_url+'/dashboard_resources/green-tick.png';

        },
        methods: {
            onCompletehotel(){
                this.$emit('showday')
            },

            changeview(index){

                var id=Number(index)+Number(1);

                $( "#hotel"+id ).show();
                this.hotelli="hotelli"+id;


                for( var i=0 ;i<this.location.length; i++){
                    if(i!==id){

                        $( "#hotel"+i ).hide();

                    }
                }
            },
            changeviewback(index){
                var id=Number(index)-Number(1);

                $( "#hotel"+id ).show();
                this.hotelli="hotelli"+id;

                for( var i=0 ;i<this.location.length; i++){
                    if(i!==id){

                        $( "#hotel"+i ).hide();

                    }
                }

            },
            changelevel(){

                this.$emit('showday');
            },
            run(){

                console.log(this.objj)
            },
            callhotel(){


                // alert("callhotel");
                if(!_.isEmpty(this.location) && !_.isEmpty(this.hotels)){
                    // alert("callhotel");
                    this.location.forEach( (dataObj) => {

                        // [(dataObj.id).split('-')[0]]
                        this.hotelset(dataObj.id,this.hotels[(dataObj.id.split('-')[0])]);
                    });
                    this.flag=1;
                }


            },
            hotelset(locationid,hotels){

                // alert("hotel set");
                console.log(locationid);
                console.log(hotels);


                if(this.hotelselect.hasOwnProperty(locationid)){

                }
                else{
                    // this.hotelselect[locationid]={};
                    Object.assign( this.hotelselect, {[locationid]: {title:''}})

                }
                if(this.hotelselect2.hasOwnProperty(locationid)){

                }
                else{

                    Object.assign( this.hotelselect2, {[locationid]: {title:''}})

                }



                if (!_.isEmpty(hotels) && typeof hotels !== 'undefined') {

                    console.log(hotels);
                    console.log("jjjj2");
                    var hot = _.cloneDeep(hotels);
                    //  this.hoteloptions={[locationid]:hot};
                    console.log(hot);

                    if(this.hoteloptions.hasOwnProperty(locationid)){

                        this.hoteloptions[locationid]=hot
                    }
                    else {
                        // this.hoteloptions[locationid]=hotels;
                        Object.assign( this.hoteloptions, {[locationid]: hot})
                    }



                }


                console.log(this.hoteloptions);
                console.log("iii2");
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
                else if(typeof place !== 'undefined' &&  _.isEmpty(this.localplace[locationid][a])){

                    var pla= _.cloneDeep(place);
                    this.localplace[locationid]={[a]:pla};
                }


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
                //  alert('hello');
                this.$emit('delete', this.location.id)

            },

            addtohotel(index,location){

                this.imgrefresh=false;


                //     if(this.hotelselect[location].new=='yes'){
                //         let params = new FormData();
                //
                //             params.set('city_id', location.split('-')[0])
                //         params.set('title', this.hotelselect[location].title)
                //         params.set('new', 'yes')
                //         axios.post('/api/v1/accommodations', params)
                //             .then(response => {
                //                 // alert("yo")
                //                 // console.log(JSON.stringify(response.data.data));
                //                 this.hotelselect[location].id=response.data.data.id
                //             })
                //
                //         this.local_tour[index]["hotel"]['hotel_data']=this.hotelselect[location];
                // }
                //     else {
                this.local_tour[index]["hotel"]['hotel_data']=this.hotelselect[location];
                // }
                // this.$emit('refresh')
                this.imgrefresh=true;
            },
            addtohotel2(index,location){
                this.imgrefresh=false;


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
                this.local_tour[index]["hotel2"]['hotel_data'] = this.hotelselect2[location];
                // }
                // this.$emit('refresh')
                this.imgrefresh=true;
            },
            addtohotel3(index,location,loc_name){

                this.addhotelmodal=true;
                this.hotel_loc_id=location;
                this.hotel_loc_name=loc_name;

                // alert(this.hotel_loc_name);

            },
            update_and_save(){
                // alert(this.new_hotel_add.length);

                if(this.new_hotel_add.length>0){
                    this.$emit('fetch_new_hotel');
                    var new_hotel=this.new_hotel_add;
                    var hotel_counter=0;
                    var loc_id=this.hotel_loc_id.split('-')[0];
                    var hotel_length=this.hotels[loc_id].length;
                    for(var k=0;k<hotel_length;k++){
                        // console.log(this.hotels[loc_id][k]['title'])
                        var hotel_title=this.hotels[loc_id][k]['title'];
                        if(new_hotel.toLowerCase()===hotel_title.toLowerCase()){
                            hotel_counter++;
                        }
                    }
                    if(hotel_counter===0){
                        this.new_hotel=true;
                        // console.log(this.hotels[loc_id]);

                        var googleurl='';
                        axios.get('/api/webservices/fetch_image/?title='+ this.new_hotel_add+','+this.hotel_loc_name)
                            .then(response => {


                                // let params = new FormData();

                                if(response.data=='No data found'){
                                    this.show_image=true;
                                    this.image_not_found=true;
                                }
                                else{
                                    googleurl=response.data.url;
                                    if(googleurl.length>20){

                                        this.show_image=true;
                                        this.hotel_image_link=googleurl;
                                        this.image_not_found=false;
                                        this.hotel_info=response.data;
                                        console.log(googleurl);
                                        console.log(this.hotel_info);
                                    }

                                    else {
                                        this.show_image=true;
                                        this.image_not_found=true;



                                    }

                                }





                            });
                        // alert('new hotel');

                    }
                    else{
                        alert('This hotel is already exist');
                    }



                }
                else{
                    alert("Please Enter Hotel Name");
                }

            },
            removehotelmodal(){
                this.addhotelmodal=false;
                this.show_image=false;
                this.new_hotel_add='';
                this.hotel_image_link='';
                this.new_hotel=false;

            },

            deletefetureimage() {
                this.custom_hotel_image='';

            },
            upload_img(value, type, index) {
                uploadfile("hotel", type, value.target.files[0], this.booking_id).then(response => {
                    this.custom_hotel_image=response.data;

                })
            },
            save_hotel(locid){
                // alert(locid)

                // console.log(this.hoteloptions[locid])

                if(this.hotel_image_link!='' || this.custom_hotel_image!='' ){
                    var base_url = window.location.origin;
                    var image_url=this.hotel_image_link;
                    if(this.custom_hotel_image!=''){
                        image_url=base_url+this.custom_hotel_image;
                    }

                    let params = new FormData();

                    params.set('featured_image_url', image_url)
                    params.set('city_id', this.hotel_loc_id.split('-')[0])
                    params.set('title', this.new_hotel_add)
                    params.set('check_in_time', "14:00")
                    params.set('check_out_time', "12:00")
                    params.set('new', 'yes')
                    axios.post('/api/v1/accommodations', params)
                        .then(response => {


                            // this.newhoteloption=_.cloneDeep(this.hoteloptions)
                            // this.newhoteloption[locid].push(response.data.data)
                            if(Object.keys(this.hoteloptions).length>0){
                                // console.log(this.hoteloptions);
                                // this.newhoteloption=_.cloneDeep(this.hoteloptions);
                                this.hoteloptions[locid].push(response.data.data)

                            }
                            else{
                                // console.log('here');
                                Object.assign( this.hoteloptions, {[locid]: [response.data.data]})
                                console.log(this.hoteloptions);

                            }
                            // console.log("2");
                            this.newhotelflag=true
                            // console.log(this.hoteloptions[locid])
                            this.$emit('fetch_new_hotel');
                            this.addhotelmodal=false;
                            this.place_added_model=true;
                            this.show_image=false;
                            this.new_hotel_add='';
                            this.hotel_image_link='';
                            this.new_hotel=false;
                            // alert("h")
                            this.flag=true
                            this.custom_hotel_image='';
                            this.callhotel()
                        })
                        .catch((error) => {
                            console.log(error);
                            alert('Please Try Again');
                        })
                }
                else{
                    alert("Please Add Hotel Image");
                    return false;
                }

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
                        // alert("in else");

                        Object.assign( this.objj[locationid], {['day-'+day]: {'place':_.clone(this.days[day])}})

                    }



                }
                else {

                    this.temp[locationid]={};

                    //  this.objj[locationid].push([day]);
                    this.temp[locationid]['day-'+day]={'place':_.clone(this.days[day])};


                    this.objj = Object.assign(this.objj, this.temp);

                    console.log(this.objj)


                }

                this.$emit('addplace',this.objj)
            }


        },
        components: {FormWizard,
            TabContent ,WizardButton,WizardStep},

        props: ['location','hotels','tour_location','day']

    }


</script>

<style scoped>
    #hotel_msform{
        width: 100px;
        margin: 50px auto;
        text-align: center;
        position: relative;
    }
    #hotel_msform fieldset {
        font-size: 16px;
        border: 0 none;
        border-radius: 3px;
        /*box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);*/
        padding: 20px 30px;
        /*box-sizing: border-box;*/
        width: 80%;
        margin: 0 10%;
        /*stacking fieldsets above each other*/
        position: absolute;
    }
    #hotel_msform fieldset:not(:first-of-type) {
        display: none;
    }
    #hotel_msform .action-button {
        width: 100px;
        background: #27AE60;
        font-weight: bold;
        color: white;
        border: 0 none;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px 5px;
        margin: 10px 5px;
    }
    #hotel_progressbar {
        margin-bottom: 30px;
        overflow: hidden;
        /*CSS counters to number the steps*/
        counter-reset: step;
    }
    #hotel_progressbar li {
        list-style-type: block;
        color: white;
        text-transform: uppercase;
        font-size: 9px;
        width: 20.0%;
        float: left;
        position: relative;
    }
    #hotel_progressbar li:before {
        content: counter(step);
        counter-increment: step;
        width: 20px;
        line-height: 20px;
        display: block;
        font-size: 10px;
        color: #333;
        background: white;
        border-radius: 3px;
        margin: 0 auto 5px auto;
    }
    #hotel_progressbar li:after {
        content: '';
        width: 100%;
        height: 2px;
        background: white;
        position: absolute;
        left: -50%;
        top: 9px;
        color:black;
        z-index: -1; /*put it behind the numbers*/
    }
    #hotel_progressbar li:first-child:after {
        /*connector not needed before the first step*/
        content: none;
    }
    #hotel_progressbar li.active:before, #progressbar li.active:after {
        background: #27AE60;
        color: white;
    }
    #box {

        border-style: solid;
        border-width: 0 50px 50px 0;
        border-color: transparent #007bff transparent transparent;
    }
    #box2 {
        border-style: solid;
        border-width: 0 50px 50px 0;
        border-color: transparent #007bff transparent transparent;
    }

    .activedev{
        display: block !important;
    }
    .hidedev{
        display: none;
    }
</style>
<style>
    .wizard-card-footer.clearfix {
        top: 500px;
        position: fixed;
    }
    .vue-form-wizard.md .wizard-icon-circle {

        width: 30px;
        height: 30px;
        font-size: 14px;
        margin-top: 20px;

    }
    .bg-color{background-color: #1E51A4;
        border-radius: 0px 15px 15px 0px;}
</style>
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
        /*vertical-align: middle;*/
    }
    .activedev{
        display: block !important;
    }
    .hidedev{
        display: none;
    }
    textarea{height: 100% !important;resize: none;}
</style>
