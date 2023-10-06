<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 1000px;font-family: Open Sans">

        <section class="content-header">
            <task-maker class="arrange_edit-add-task"></task-maker>
            <vue-progress-bar></vue-progress-bar>


            <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>
<!--            <h1>Group: {{item.booking_id}}</h1>-->
            <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>

            <div class="row">

                <div class="col-4"><h1>Group: {{item.booking_id}}</h1></div>
                <div class="col">
                    <div class="row float-right pr-4">

                        <div class="bg-white ml-2 shadow width rounded color_sky pb-2 cursor float-right"  v-if="createfull">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-file-excel-o" aria-hidden="true"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown" id="dropdown2">
                                    <span class="f-1-4" data-toggle="dropdown" @click="remove_class(2)">Templates</span>
                                    <span class="dropdown-toggle f-1-7 color_sky " data-toggle="dropdown" @click="remove_class(2)"></span>

                                    <ul class="dropdown-menu f-1-4 p-2 mt-3 border-0" style="position: absolute; transform: translate3d(-110px, 25px, 0px) !important; top: 0px; left: 0px; will-change: transform;" x-placement="bottom-start">

                                        <li>
                                            <a class="color_sky" href="#" @click="downloadgroupcsv('/csv/member_pre_list.xlsx','xlsx')" >Approved Member Sheet</a>
                                        </li>
                                        <li  class="divider"></li>
                                        <li>
                                            <a class="color_sky" href="#" @click="downloadgroupcsv('/csv/demo_Group.xlsx','xlsx')" >Regular Member Sheet</a>
                                        </li>

                                        <li  class="divider"></li>
                                        <li >

                                            <a class="color_sky" href="#" @click="downloadgroupcsv1('/csv/exhibitor_demo.xlsx','xlsx')">NON Member Sample File</a>
                                        </li>
                                        <li  class="divider"></li>
                                        <li >

                                            <a class="color_sky" href="#" @click="downloadgroupcsv('/csv/tour_support.xlsx','xlsx')">Tour Support Sample File</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor mr-3rem"  @click="submitForm" v-if="createfull" >
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <span class="f-1-7"><i class="fa fa-check" aria-hidden="true"></i>
                                        </span>
                                </div>
                                <div class="col-12 text-center">

                                    <span class="f-1-4">Save & Exit</span>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>

        <div class="activedev mt-n5" :class="[create ? 'activedev' : 'hidedev' ]" id="msform" style="width: 80%;height:auto">
            <!-- progressbar -->
            <div>
                <form-wizard @on-complete="onCompletecreate" color="rgb(23, 80, 125)" title=""  subtitle="">
                    <tab-content title="Tour Creation" icon="fa fa-check">
                        <fieldset>
                            <div  class="container-fluid">
                                <div  class="row mb-3">
                                    <div class="col-lg-8 border border-light">
                                        <div  class="row">
                                            <div  class="col-lg-6 text-left">
                                                <label class="labelstyle">Date</label>
                                                <date-picker
                                                    :value="item.driver_pick_up_time"
                                                    :config="$root.dpconfigDate_disable_dates"
                                                    name="driver_pickup_date_time"

                                                    @dp-change="updatedriver_pick_up_time"

                                                >
                                                </date-picker>
                                            </div>
                                            <div  class="col-lg-6 text-left">
                                                <div  class="row ml-5">
                                                    <div  class="col-12">
                                                        <label class="text-muted h2 fw-4">Meal Plan</label>
                                                    </div>
                                                    <div  class="col-12">
                                                        <div class="row">
                                                            <div  class="col-3 ">
                                                                <img v-if="item.meals_supplement['bf']" @click="item.meals_supplement['bf']=false"  class="hw-3 ml-1" src="./../dashboard_resources/bfdown.png" alt="task">
                                                                <img v-if="!item.meals_supplement['bf']" @click="item.meals_supplement['bf']=true"  class="hw-3 ml-1" src="./../dashboard_resources/bfup.png" alt="task">
                                                                <span class="f-1-2 fw-2 text-muted ml-3">BF</span>
                                                            </div>
                                                            <div  class="col-3">
                                                                <img  v-if="item.meals_supplement['l']" @click="item.meals_supplement['l']=false" class="hw-3 ml-1" src="./../dashboard_resources/lunchdown.png" alt="task">
                                                                <img v-if="!item.meals_supplement['l']" @click="item.meals_supplement['l']=true" class="hw-3 ml-1" src="./../dashboard_resources/lunch.png" alt="task">
                                                                <span class="f-1-2 fw-2 text-muted ml-4">L</span>
                                                            </div>
                                                            <div  class="col-3">
                                                                <img v-if="item.meals_supplement['d']" @click="item.meals_supplement['d']=false"  class="hw-3 ml-1" src="./../dashboard_resources/dinnerdown.png" alt="task" >
                                                                <img v-if="!item.meals_supplement['d']" @click="item.meals_supplement['d']=true" class="hw-3 ml-1" src="./../dashboard_resources/dinner.png" alt="task">
                                                                <span class="f-1-2 fw-2 text-muted ml-4">D</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 text-left f-2 ml-n4 mt-5 text-muted">
                                        Create Own Tour
                                        <label class="switch">
                                            <input type="checkbox" v-model="checked">
                                            <span class="slider round"></span>
                                        </label>
                                        Select Tour

                                        <span class="ml-3" v-if="!checked">
                                            &nbsp;&nbsp; <span style="    font-size: 12px;"> Save Tour <input type="checkbox" v-model="save_tour"></span>
                   <span v-if="save_tour" class="">Tour Name: <input type="text" v-model="tour_name" style="width:20%;font-size: 14px "></span>
                                        </span>
                                    </div>
                                </div>
                            </div>



                            <div :class="[checked ? 'activedev' : 'hidedev' ]">
                                <div class="row">
                                    <div class="col-lg-6 text-left"><p class="text-muted f-2">Select Tour<i class="fas fa-calendar-alt ml-3"></i></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-8">
                                        <v-select :clearable="false" placeholder="Select"
                                                  name="addtours"
                                                  label="title"
                                                  @input="inmodal"
                                                  :value="tour_ob"
                                                  :options="tourAll"
                                                  v-model="tour_ob"
                                                  class="bg-light h3 fw-4 mt-n1"

                                        />
                                    </div>
                                </div>
                            </div>


                            <ul v-if="checked" id="sortable" class="text-left ml-n5 mt-3">
                                <location-place-component v-for="(location,index ) in item.tour_location"  :key="location.id" :location="location" :index="index" :hotels="hotels[(location.id).split('-')[0]]" :place="places.places_city_id[location.id.split('-')[0]]" :tour_location="item.tour_location"   @delete="alert('Can\'t Delete')"></location-place-component>

                            </ul>
                            <ul v-else id="sortable" class="text-left ml-n5 mt-3">
                                <draggable v-model="item.tour_location" group="people" @start="drag=true" @end="drag=false">
                                    <location-place-component v-for="(location,index ) in item.tour_location"  :key="location.id" :location="location" :index="index" :hotels="hotels[(location.id).split('-')[0]]" :place="places.places_city_id[location.id.split('-')[0]]" :tour_location="item.tour_location"   @delete="remove"></location-place-component>
                                </draggable>

                            </ul>

                            <div :class="[checked ? 'hidedev' : 'activedev' ]">
                                <div class="row">
                                    <div class="col-lg-12 text-muted f-2 text-left"><p>Add Location<i class="fas fa-calendar-alt ml-3"></i>
                                        <!--                                        <span>Save Tour <input type="checkbox" v-model="save_tour"></span>-->
                                        <!--                                        <span v-if="save_tour" class="ml-3">Tour Name: <input type="text" v-model="tour_name" ></span>-->
                                    </p></div>
                                </div>
                                <div class="row">
                                    <div class="col-8 text-left" >
                                        <v-select :clearable="false" placeholder="Select"
                                                  name="addlocations"
                                                  label="title"
                                                  @input="inmodalL"
                                                  :options="cityAll"
                                                  class="bg-light h4 fw-4 mt-n1"

                                        />
                                    </div>
                                </div>
                                <!--                                <button @click="savetour">save tour</button>-->
                            </div>




                            <!--                            <input  type="button" name="next" value="Next" class="next action-button" style="margin-left: 140px">-->
                        </fieldset>
                    </tab-content>

                    <div id="app">
                        <div v-if="showModal">
                            <transition name="modal">
                                <div class="modal-mask">
                                    <div class="modal-wrapper">
                                        <div class="modal-dialog">
                                            <div class="modal-content background-color-all">
                                                <div class="modal-body">
                                                    <button type="button" class="close" @click="showModal=false">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <div class="container mt-5 text-left">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <div class="row">
                                                                    <div class="col-12">
                                                                        <h3 class="text-secondary">Location</h3>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <input type="text" class="form-control" v-model="locationd.name"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="row">
                                                                    <div class="col-12"><h3 class="text-secondary">Nights</h3></div>
                                                                    <div class="col-12"><input type="text" class="form-control" placeholder="Days" v-model="days"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 text-center mt-3">
                                                                <button class="btn btn-success pl-3 pr-3" @click="updateCity(days)"><span class="h3">Save</span></button>
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


                    </div>

                    <template slot="footer" slot-scope="props">
                        <div class="wizard-footer-left">
                            <wizard-button v-if="props.activeTabIndex > 0 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Previous</wizard-button>
                        </div>
                        <div class="wizard-footer-right">
                            <wizard-button v-if="props.isLastStep" @click.native="changemenucontinue(), setmeta_mail_format()" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Continue' : 'Next'}}</wizard-button>
                        </div>
                    </template>

                </form-wizard>



            </div>
        </div>
        <section v-if="createfull" class="content" :class="[createfull ? 'activedev' : 'hidedev' ]">

            <div class="row">
                <div class="col-lg-2">
                    <ul class="sidenav">
                        <a href="#"  :class="summ==true?'sidenavactive':''"> <li @click="changeview('summ')" > Summary</li></a>
                        <a href="#" :class="hotel==true?'sidenavactive':''"><li  @click="changeview('hotel')" >Hotels</li></a>
                        <a href="#" :class="day==true?'sidenavactive':''"> <li @click="changeview('day')" >Day Plan</li></a>
<!--                        <a href="#" :class="mail==true?'sidenavactive':''"><li @click="changeview('mail')" >Mail Format</li></a>-->
                        <a href="#" :class="trav==true?'sidenavactive':''"><li @click="changeview('trav')" >Personalise App</li></a>
                        <a href="#" :class="exe==true?'sidenavactive':''"> <li @click="changeview('exe')" >Group Activation</li></a>
                        <a href="#" :class="createlist==true?'sidenavactive':''"><li  @click="changeview('createlist')">Non Member List</li></a>
                        <a href="#" :class="embed==true?'sidenavactive':''"><li @click="changeview('embed')">Embed Button</li></a>
<!--                        <a href="#" :class="live==true?'sidenavactive':''"><li @click="changeview('live')">Live Expense Tracking</li></a>-->
<!--                        <a href="#" :class="up==true?'sidenavactive':''"><li @click="changeview('up')">Upload</li></a>-->
<!--                        <a href="#" :class="visa==true?'sidenavactive':''"><li @click="changeview('visa')">Visa</li></a>-->
                        <!--                        <a href="#" :class="train==true?'sidenavactive':''"><li  @click="changeview('train')" >Train/Flight</li></a>-->
                        <!--                        <a href="#" :class="train==true?'sidenavactive':''"><li  @click="changeview('train')" >Train/Flight</li></a>-->


                        <!--                        <a href="#" :class="up==true?'sidenavactive':''"><li @click="changeview('up')" >Upload</li></a>-->
                        <!--                        <a href="#" :class="cost==true?'sidenavactive':''"><li @click="changeview('cost')" >Cost</li></a>-->
                        <!--                        <a href="#" :class="intraction==true?'sidenavactive':''"><li @click="changeview('intraction')" >Interaction History</li></a>-->
                    </ul>
                </div>
                <div class="col-lg-10">

                    <!--                summary-->
                    <div :class="[summ ? 'activedev' : 'hidedev' ]" class="query-content">

                        <div class="row mt-4 mb-5">
                            <!--            First section-->
                            <div class="col-lg-6">

                                <div class="row">
                                    <div class="col-12 mb-n2"><p class="text-muted">Tour Date<i class="fas fa-calendar-alt ml-3 icon-color"></i></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-11">
                                        <date-picker
                                            id="date_style"
                                            :value="item.driver_pick_up_time"
                                            :config="$root.dpconfigDate"
                                            name="driver_pick_up_time"
                                            class="text-muted summary-in-w"
                                            @dp-change="updatedriver_pick_up_time"
                                        >
                                        </date-picker>
                                    </div>
                                </div>


                                <draggable v-model="item.tour_location" group="people" @start="drag=true" @end="drag=false">

                                    <div v-for="(tour,index) in item.tour_location ">
                                        <div class="row mt-4">
                                            <div class="col-12 mb-n2"><p class="text-muted">Location {{index+1}} <img src="./../dashboard_resources/loction.png" class="imgsize ml-2"></p></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-9 mr-2"><input disabled type="text" class="form-control" v-model="tour.name"></div>
                                            <div class="col-2 ml-3"><input type="text" class="ml-3 form-control" v-model="tour.days"></div>
                                        </div>

                                    </div>

                                </draggable>


                                <div class="row mt-3">
                                    <div class="col-12 mb-n3"><p class="text-muted">Duration</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-6"><input disabled type="text" class="in-put-7" value="Nights"><input disabled type="text" class="in-put-25" :value="days_count"> </div>
                                    <div class="col-6 ml-n2"><input disabled type="text" class="in-put-7" value="Day"><input disabled type="text" class="in-put-25" :value="days_count+1"> </div>
                                </div>
                                <div class="row  mt-3">
                                    <div class="col-6" ><p class="text-muted">Pickup Location<span><img src="./../dashboard_resources/location.png" class="hw-i ml-2"></span></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-12 mt-n2"><input type="text"
                                                                     class="form-control text-muted fw-4"
                                                                     name="pickup_location"
                                                                     placeholder="Enter Pickup location"
                                                                     :value="item.pickup_location"
                                                                     @input="updatePickup_location"><img src="./../dashboard_resources/edit.png" class="pa-img hw-i">
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-6" ><p class="text-muted">Pickup Date/Time</p></div>
                                </div>
                               <div class="row">
                                    <div class="col-12 mt-n2">
                                        <date-picker
                                            class="text-dark"
                                            :value="meta.meta_pickup_date"
                                            :config="$root.dpconfigDatetime_disable_dates"
                                            name="driver_pick_up_time"

                                            @dp-change="updatemeta_pickup_date"
                                        ></date-picker>
                                        <img src="./../dashboard_resources/edit.png" class="pa-img hw-i"></div>
                                </div>

<!--                                Hide Code and put on hold for furthur discussion-->
<!--                                <div class="row mt-3">-->
<!--                                    <div class="col-12 mb-n3"><p class="text-muted">Travelers</p></div>-->
<!--                                </div>-->
<!--                                <div class="row">-->
<!--                                    <div class="col-lg-4 mr-3 ml-4 div-back">-->
<!--                                        <div class="row text-center pt-2 pb-2" style="">-->
<!--                                            <div class="col-lg-6">-->
<!--                                                <div class="row">-->
<!--                                                    <div class="col-12">-->
<!--                                                        <p class="f-1-4 fw-4 text-muted">Adults</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="col-lg-12 col-md-12 col-xl-12" style="">-->
<!--                                                        <p class="fw-4 text-muted f-09">(12+ yrs)</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="col-lg-12">-->
<!--                                                        <vue-numeric-input v-model="item.no_of_adults"-->
<!--                                                                           :min="1"-->
<!--                                                                           :step="1"></vue-numeric-input>-->
<!--                                                        &lt;!&ndash;                                                                                        <input type="number" id="adult" class="form-control" min="1"&ndash;&gt;-->
<!--                                                        &lt;!&ndash;                                                                                              &ndash;&gt;-->
<!--                                                        &lt;!&ndash;                                                                                        >&ndash;&gt;-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="col-lg-6">-->
<!--                                                <div class="row">-->
<!--                                                    <div class="col-12">-->
<!--                                                        <p class="f-1-4 fw-4 text-muted">Children</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="col-12" style="">-->
<!--                                                        <p class="fw-4 text-muted f-09">(2-12y)</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="col-12" style="">-->
<!--                                                        <vue-numeric-input v-model="item.no_of_children"-->

<!--                                                                           :min="0"-->
<!--                                                                           :step="1"></vue-numeric-input>-->
<!--                                                        &lt;!&ndash;                                                                                        <input type="number" id="child" min="0" style="width: 50px;height: 25px;border: 1px solid darkgrey;border-radius: 3px;" value="0"  placeholder="0"&ndash;&gt;-->
<!--                                                        &lt;!&ndash;                                                                                               &ndash;&gt;-->
<!--                                                        &lt;!&ndash;                                                                                        >&ndash;&gt;-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->

<!--                                        </div>-->

<!--                                    </div>-->
<!--                                    <div class="col-lg-6 div-back ml-5">-->
<!--                                        <div class="row text-center pt-2 pb-2">-->
<!--                                            <div class="col-12">-->
<!--                                                <p class="f-1-4 fw-4 text-muted">Rooming</p>-->
<!--                                            </div>-->
<!--                                            <div class="col-lg-4">-->
<!--                                                <div class="row">-->

<!--                                                    <div class="col-lg-12 col-md-12 col-xl-12" style="">-->
<!--                                                        <p class="fw-4 text-muted f-09">Single</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="col-lg-12 ">-->
<!--                                                        <vue-numeric-input v-model="item.total_room.single"-->

<!--                                                                           :min="0"-->
<!--                                                                           :step="1"></vue-numeric-input>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="col-lg-4">-->
<!--                                                <div class="row">-->

<!--                                                    <div class="col-lg-12 col-md-12 col-xl-12" style="">-->
<!--                                                        <p class="fw-4 text-muted f-09">Double</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="col-lg-12 ">-->
<!--                                                        <vue-numeric-input v-model="item.total_room.double"-->

<!--                                                                           :min="0"-->
<!--                                                                           :step="1"></vue-numeric-input>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="col-lg-4">-->
<!--                                                <div class="row">-->

<!--                                                    <div class="col-lg-12 col-md-12 col-xl-12" style="">-->
<!--                                                        <p class="fw-4 text-muted f-09">Triple</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="col-lg-12">-->
<!--                                                        <vue-numeric-input v-model="item.total_room.triple"-->

<!--                                                                           :min="0"-->
<!--                                                                           :step="1"></vue-numeric-input>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->


<!--                                </div>-->

                            </div>
                            <!--            second section-->
                            <div class="col-lg-6 pl-5" style="border-left: solid white 2px">



                                <div class="row mt-3">
                                    <div class="col-12"><p class="fw-4 h2 text-muted">Group Name</p></div>
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 mt-n2">
                                                <input type="text"  v-model="item.group_name" class="form-control">
                                                <img src="./../dashboard_resources/edit.png" class="pa-img hw-i"></div>
                                        </div>
                                    </div>

                                </div>
                                <div class="row mt-3">
                                    <div class="col-12"><p class="fw-4 h2 text-muted">Group Logo</p></div>
                                    <div class="col-4 text-center f-1-6" v-if="!item.group_logo">
                                        <p></p>
                                        <label class="file_hidden  mt-n2 f-1-6">
                                            Choose File
                                            <input type="file" size="20"  @change="updatelogo($event,'group_logo')">
                                        </label>
                                    </div></div>
                                <div class="col-4" v-if="item.group_logo!==''">
                                    <i style="float: right" class="fa fa-times" aria-hidden="true" v-if="item.group_logo!==''" @click="item.group_logo=''"></i>

                                    <img :src="item.group_logo" width="100" height="100">

                                </div>
                                <div class="row mt-3">
                                    <div class="col-12"><p class="fw-4 h2 text-muted">Handler Name</p></div>

                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 mt-n2">
                                                <input type="text" :value="item.handler_name" @change="updateHandler_name" class="form-control">
                                                <img src="./../dashboard_resources/edit.png" class="pa-img hw-i"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-12"><p class="fw-4 h2 text-muted">Handler Mobile no</p></div>


                                    <div  class="col-12 input-group ml-4">
                                        <span class="input-group-prepend"><i class="fas fa-phone-alt input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                        <vue-tel-input  v-model="item.handler_no" v-bind="bindProps" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone" @input="updateHandler_no"></vue-tel-input>
                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                    </div>


                                </div>



<!--                                <div class="row mt-3">-->
<!--                                    <div class="col-12"><p class="fw-4 h2 text-muted">Tour Manager Name</p></div>-->
<!--                                <div class="col-12">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-12 mt-n2">-->
<!--                                                <input type="text"  :value="meta.meta_driver_name" @change="updatemeta_driver_name" class="form-control">-->
<!--                                            <img src="./../dashboard_resources/edit.png" class="pa-img hw-i"></div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                </div>  -->
<!--                                <div class="row mt-3">-->

<!--                                <div class="col-12"><p class="fw-4 h2 text-muted">Tour Manager no.</p></div>-->

<!--                                <div  class="col-12 input-group ml-4">-->
<!--                                    <span class="input-group-prepend"><i class="fas fa-phone-alt input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>-->
<!--                                    <vue-tel-input  v-model="meta.meta_driver_no" v-bind="bindProps" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone" @input="updatemeta_driver_no"></vue-tel-input>-->
<!--                                    <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>-->
<!--                                </div>-->


<!--                            </div>-->

                                <!--                                <div class="row mt-5">-->
                                <!--                                    <div class="col-12"><p class="text-muted">Past Interactions</p></div>-->
                                <!--                                    <div v-for="(rem,index) in meta.remarks " v-if="index==(meta.remarks.length)-1" class="past-i ml-4 row mt-n3 pb-2">-->
                                <!--                                        &lt;!&ndash;                                                   {{rem,index}}&ndash;&gt;-->
                                <!--                                        <div class="col-6 ml-2 mt-2 mr-3 clock">-->
                                <!--                                            <span class="text-black pr-2"><i class="far fa-clock"></i></span>{{ rem['time'] | moment}}</div>-->
                                <!--                                        <div class="text-right col-5 ml-4"><img  src="./../dashboard_resources/dropdown.png" data-toggle="modal" data-target="#myModal1" class="hw-2"></div>-->
                                <!--                                        <div class="col-12 ml-4 pl-2 border-left-3">{{rem['remark']}}</div>-->

                                <!--                                    </div>-->
                                <!--                                    <div class="container">-->
                                <!--                                        <div class="modal" id="myModal1">-->
                                <!--                                            <div class="modal-dialog">-->
                                <!--                                                <div class="modal-content">-->
                                <!--                                                    <div class="modal-body">-->
                                <!--                                                        <button type="button" class="close" data-dismiss="modal">&times;</button><br>-->
                                <!--                                                        <div class="container">-->
                                <!--                                                            <div v-for="rem in meta.remarks " class="text-success">-->
                                <!--                                                                <i class="far fa-clock mr-3"></i>{{ rem['time'] | moment}}-->
                                <!--                                                                <span style="">|    Agent: {{rem['agent']}}</span>-->
                                <!--                                                                <p class="border-left-3 pl-2 ml-2 text-dark">{{rem['remark']}}</p>-->
                                <!--                                                            </div>-->
                                <!--                                                        </div>-->
                                <!--                                                    </div>-->
                                <!--                                                </div>-->
                                <!--                                            </div>-->
                                <!--                                        </div>-->
                                <!--                                    </div>-->
                                <!--                                </div>-->

                                <!--                                <div class="row pt-2">-->
                                <!--                                    <div class="col-lg-12"><p class="text-muted">Remark</p></div>-->
                                <!--                                    <div class="col-lg-10"><span class="p-a icon-color ml-2"><i class="fa fa-pencil-square-o"></i></span>-->
                                <!--                                        <input type="text" class="form-control pl-5"-->
                                <!--                                               name="remark"-->
                                <!--                                               placeholder="Enter Remark"-->
                                <!--                                               v-model="newremark">-->
                                <!--                                    </div>-->
                                <!--                                    <div class="col-lg-2">-->

                                <!--                                        <input type="button" value="Add" @click="updateRemark(newremark)" class="vue-btn btn btn-lg btn-primary text-light">-->
                                <!--                                        &lt;!&ndash;                                                        <i aria-hidden="true" class="fa fa-paper-plane"></i>&ndash;&gt;-->
                                <!--                                    </div>-->
                                <!--                                </div>-->


                                <div class="row">
                                    <div class="col"><button class="button-css" @click="changeview('hotel')">Hotels</button></div>
                                </div>
                            </div>

                            <!--                                    <div class="row">-->
                            <!--                                        <div class="col-12" style="margin-bottom: -15px;margin-top: 15px"><p style="color:grey;">Add Remark: </p></div>-->
                            <!--                                        <div class="col-12">-->
                            <!--                                            <textarea-->
                            <!--                                            rows="3"-->

                            <!--                                            :value="meta.remarks.remark" @input="updateRemarks"-->
                            <!--                                            style="width: 80%;height: 100px;border:0;border:solid gainsboro 1px;border-radius: 3px">-->

                            <!--                                </textarea>-->
                            <!--&lt;!&ndash;                                            <input :value="meta.remarks.remark" @input="updateRemarks" type="text" style="width: 80%;height: 100px;border:0;border:solid gainsboro 1px;border-radius: 3px">&ndash;&gt;-->
                            <!--                                    </div>-->
                            <!--                                    </div>-->




                        </div>

                    </div>

                    <!--                    hotel-->
                    <div :class="[hotel ? 'activedev' : 'hidedev' ]" class="f-2 text-center query-content">

                        <hotel-component v-if="hotel" :day="day" @refresh="refeshhotel"  :location="item.tour_location"  :hotels="hotels"   @addplace="addplace" :tour_location="item.tour_location" @showday="changeview('day')" @fetch_new_hotel="update_hotel()" @delete="remove"></hotel-component>

                    </div>

                    <!--                    Day Plan-->
                    <div :class="[day ? 'activedev' : 'hidedev' ]" class="query-content f-2" >

                        <dayplan-component :license="license"   :datestart="item.driver_pick_up_time"  :place="places.places_city_id"  :tour_location="item.tour_location" :meal="item.meals_supplement" @addplace="addplace"  @delete="remove" @showtrav="changeview('trav')"></dayplan-component>

                    </div>


                    <!--                    train/flight-->
                    <div :class="[train ? 'activedev' : 'hidedev' ]" class="query-content mb-5 mt-3 mr-5 ml-3">
                        <div class="row">
                            <div class="col-lg-12">
                                <span class="f-2 c-grey">Ticket Details(Dept. City code Ex: “DEL” for Delhi)</span>
                            </div>
                        </div>
                        <div class="row mt-3 mb-3">
                            <div class="col-lg-12 mt-2 mb-2">
                                <span class="text-primary f-1-4">(Size: 2MB, Format: DOC/DOCX/PDF/JPEG/PNG/TIFF/ALSX)</span>

                            </div>
                        </div>

                        <div class="row bg-white border font ml-0 mr-5 mb-5" v-for="(flight,index) in meta.meta_flight">

                            <div class="col-lg-2 mt-2 mb-2 border-right">
                                <p class="mb-4">Date</p>
                                <date-picker
                                    v-model="flight['date']"
                                    :config="$root.dpconfigDate"
                                    name="driver_pick_up_time"
                                    class="form-control"
                                    placeholder="Enter Date"
                                    @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])"
                                    :disabled="flight['url']!=''">
                                </date-picker>

                                <!--                                <input  type="text" v-model="flight['date']" class="fsize mt-3" placeholder="12/02/2020">-->
                            </div>
                            <div class="col-lg-2 mt-2 mb-2 border-right">
                                <p class="mb-4">Dept Code</p>
                                <!--                                <input :disabled="flight['url']!=''" type="text" v-model="flight['dep_code']" @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="DEL">-->

                                <div v-if="flight['url']!=''">
                                    <input :disabled="flight['url']!=''" type="text" v-model="flight['dep_code']" @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="DEL">
                                </div>
                                <div v-else>
                                    <vue-bootstrap-typeahead
                                        :disabled="flight['url']!=''"
                                        :data="airport_codes"
                                        size="sm"

                                        placeholder="DEL"

                                        v-model="flight['dep_code']"

                                        :serializer="s => s.name"


                                        @hit="flight['dep_code']=$event.code,flight['dep_name']=$event.name"
                                    />

                                </div>

                            </div>
                            <div class="col-lg-3 mt-2 mb-2 border-right">
                                <p class="mb-4">Arr Airport Code</p>
                                <!--                                <input :disabled="flight['url']!=''" type="text" v-model="flight['arr_code']"  @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="BOM">-->
                                <div v-if="flight['url']!=''">
                                    <input :disabled="flight['url']!=''" type="text" v-model="flight['arr_code']"  @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="BOM">
                                </div>
                                <div v-else>
                                    <vue-bootstrap-typeahead
                                        :disabled="flight['url']!=''"
                                        :data="airport_codes"
                                        size="sm"

                                        placeholder="BOM"

                                        v-model="flight['arr_code']"

                                        :serializer="s => s.name"


                                        @hit="flight['arr_code']=$event.code,flight['arr_name']=$event.name"
                                    />

                                </div>




                            </div>
                            <div class="col-lg-2 mt-2 mb-2 border-right">
                                <p class="mb-4">Flight no</p>
                                <input :disabled="flight['url']!=''" type="text" v-model="flight['ticket']"  @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="123546">
                            </div>
                            <div class="col-lg-3 mt-2 mb-2 text-center" >
                                <div class="row">
                                    <div class="col-12 text-center f-1-2" v-if="flight['url']!=''">
                                        <p >{{flight['url']}}</p>
                                        <a class="download_button mt-n2 offset-2" target= "_blank" v-bind:href="flight['url'] ">Download</a>
                                        <img  @click="deleteflightfile(index) " src="./../dashboard_resources/trash.png" class="hw-2 mt-1">
                                    </div>
                                    <div class="col-12 text-center f-1-2" v-else :disabled="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])">
                                        <p>No file Choosen</p>
                                        <label class="file_hidden offset-2 mt-n2">
                                            Choose File
                                            <input type="file" size="20"  @change="updatemeta_flight($event,'meta_flight',index)">
                                        </label>
                                    </div>
                                </div>
                                <!--                                <p class="imgsize mb-1">Del2bam_img.png</p>-->
                                <!--                                <button class="btn-warning pl-5 pr-5 imgsize" style="color:white">Download</button><br>-->
                                <!--                                <img class="imgmes" src="./../dashboard_resources/trash.png">-->
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-lg-3 text-center offset-4 mt-5">
                                <button @click='meta.meta_flight.push({"date":"","dep_code":"","arr_code":"","ticket":"","url":"","dep_name":"","arr_name":""})' class="mt-5 f-2 btn text-light spec-padding button_color">Add New Sector</button>
                            </div>
                        </div>
                        <button @click="changeview('trav')" class="button-css">Personalise App</button>
                    </div>
                    <!--                    mail format-->
                    <div :class="[mail ? 'activedev' : 'hidedev' ]" class="container" style="height: 100%">
                        <div class="row">
                            <div class="col-12">
                                <form-wizard @on-complete="changeview('trav')" color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Personalise App">


                                    <tab-content title="Welcome Notes" icon="fa fa-check">
                                        <fieldset>
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col"><span class="f-2">Welcome</span></div>
                                                    <div class="col text-right"><p style="color:royalblue" class="f-1-4"></p></div>
                                                    <div class="col-12">
                                                        <vue-ckeditor
                                                            :value="meta.meta_welcome_mail"
                                                            @input="updatemeta_welcome_mail"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </tab-content>
                                    <tab-content title="Registration Mail" icon="fa fa-check">
                                        <fieldset>
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col"><span class="f-2">Registration Mail</span></div>
                                                    <div class="col text-right"><p style="color:royalblue" class="f-1-4"></p></div>
                                                    <div class="col-12">
                                                        <vue-ckeditor
                                                            :value="meta.meta_registration_mail"
                                                            @input="updatemeta_registration_mail"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </tab-content>

                                    <tab-content title="Tour Details" icon="fa fa-check">
                                        <fieldset>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-9"><span class="f-2">Tour details inclusions, exclusions notes and other T&C :</span></div>
                                                    <div class="col-3 text-right"><p style="color:royalblue" class="f-1-4"></p></div>
                                                    <div class="col-12">
                                                        <vue-ckeditor
                                                            :value="meta.meta_incl_ex"
                                                            @input="updatemeta_incl_ex"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </tab-content>

                                    <tab-content title=" Closure Notes" icon="fa fa-check">
                                        <fieldset>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col"><span class="f-2">Closure Notes:</span></div>
                                                    <div class="col text-right"><p style="color:royalblue" class="f-1-4"></p></div>
                                                    <div class="col-12">
                                                        <vue-ckeditor
                                                            :value="meta.meta_closuer"
                                                            @input="updatemeta_closuer"
                                                        /></div>

                                                </div>
                                            </div>
                                        </fieldset>
                                    </tab-content>
                                </form-wizard>
                            </div>
                        </div>
                    </div>

                    <!--                    App -->
                    <div :class="[trav ? 'activedev' : 'hidedev' ]" class="container pl-5">

                        <div class="row m_t5">
                            <personalise-app
                                v-if="trav"
                                :logo="item.group_logo?item.group_logo:agency_logo"
                                :bgimage="meta.meta_group_bg_image!=''? meta.meta_group_bg_image : '/images/staticHome.png'"
                                :dynamicColor="meta.meta_group_bg_color"
                                @coloradd="updateColor"
                                @dynamicBg="uploadbg"
                            />

                        </div>


                        <div >
                            <button @click="changeview('exe')" class="button-css">Group Activation</button></div>
                    </div>
                    <!--                    Group Activation-->
                    <div :class="[exe ? 'activedev' : 'hidedev' ]" class="query-content">

                        <div>
                            <form-wizard @on-complete="onCompletecreate" color="rgb(23, 80, 125)" title=""  subtitle="">
                                <tab-content title="Define Documents" icon="fa fa-check">
                                    <fieldset>
                                        <div  class="container-fluid">
                                            <button class="accordiona" @click="accordion2=!accordion2"><i class="fa fa-info-circle" aria-hidden="true"></i>
                                                <b class="f-1-8">How it works?</b>


                                                <i class="fa fa-times" aria-hidden="true" v-if="accordion2" style="float: right"></i>
                                                <i class="fa fa-angle-down" aria-hidden="true" v-else style="float: right"></i>

                                            </button>
                                            <div class="panela" v-if="accordion2">
                                    <span class="f-1-6">
                                        <p>NB : Any if you do not see a master set of documents
                                                    then ask your agency admin to create the same. You can also add custom documents
                                                    here in the list then drag them to right hand side to make them available for the tour.</p></span>
                                            </div>
                                            <div class="col-lg-6">
                                                <b class="mb-3">Drag Document you will like to collect</b>
                                                <div style="min-height: 200px;background-color: rgba(0, 83, 159, 0.04);">
                                                    <draggable v-model="doc_req_list" group="people" @start="drag=true" @end="drag=false">
                                                        <div v-for="(name,index) in doc_req_list " >

                                                            <div class="col-md-11 panel panel-default" style="margin-bottom: unset !important">
                                                                <div style="padding: 5px;font-size: 15px">{{name}} <i style="float: right;padding: 2px;font-size: 18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                            <i class="col-md-1 fa fa-arrow-right" aria-hidden="true" @click="meta.meta_doc_req.push(doc_req_list[index]), doc_req_list.splice([index],1)"></i>
                                                        </div>

                                                    </draggable>
                                                </div>
                                                <div class="panel panel-default mt-3">
                                                    <div style="padding: 5px;font-size: 15px">
                                                        <input type="text" v-model="add_doc_tag" placeholder="Define document name" style="border: unset; height: 20px; font-size: 14px;width: 90%;">
                                                        <i style="float: right;padding: 2px;font-size: 18px;" v-if="add_doc_tag.length>0" class="fa fa-plus" aria-hidden="true" @click="doc_req_list.push(add_doc_tag),add_doc_tag=''"></i>
                                                        <i style="float: right;padding: 2px;font-size: 18px;" v-else class="fa fa-plus cursor" aria-hidden="true" @click="alertt()"></i>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <b class="mb-3">Documents Required</b>
                                                <div style="min-height: 32px;background-color: rgba(0, 83, 159, 0.04);">
                                                    <draggable v-model="meta.meta_doc_req" group="people" @start="drag=true" @end="drag=false">
                                                        <div v-for="(name,index) in meta.meta_doc_req " >

                                                            <i class="col-md-1 fa fa-arrow-left" aria-hidden="true" @click="doc_req_list.push(meta.meta_doc_req[index]), meta.meta_doc_req.splice([index],1)" ></i>

                                                            <div class="col-md-11 panel panel-default" style="margin-bottom: unset !important">
                                                                <div style="padding: 5px;font-size: 15px">{{name}} <i style="float: right;padding: 2px;font-size: 18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </draggable></div></div>
                                        </div>
                                    </fieldset>
                                </tab-content>
<!--                                <tab-content title="KYC" icon="fa fa-check">-->
<!--                                    <fieldset>-->
<!--                                        <div  class="container-fluid">-->
<!--                                            <div class="col-lg-12">-->
<!--                                                <div class="col-md-8" >-->
<!--                                                    <div  class="col-md-1" style="margin-top: 3px;">-->
<!--                                                        <label class="container_input">-->
<!--                                                            <input v-model="meta.kyc_check"  type="checkbox" id="interview" >-->
<!--                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>-->
<!--                                                        </label></div>-->

<!--                                                    <div  class="col-md-6" style="font-size: 21px;margin-top: -2px;color: black;">Collect KYC Documents?</div>-->
<!--                                                </div>-->


<!--                                            </div>-->
<!--                                            <div class="col-lg-6">-->

<!--                                                <b class="mb-3">Drag Document you will like to collect</b>-->
<!--                                                <div style="min-height: 200px;background-color: rgba(0, 83, 159, 0.04);">-->
<!--                                                    <draggable v-model="doc_kyc_list" group="people" @start="drag=true" @end="drag=false">-->
<!--                                                        <div v-for="(name,index) in doc_kyc_list " >-->

<!--                                                            <div class="panel panel-default" style="margin-bottom: unset !important">-->
<!--                                                                <div style="padding: 5px;font-size: 15px">{{name}} <i style="float: right;padding: 2px;font-size: 18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                        </div>-->

<!--                                                    </draggable>-->
<!--                                                </div>-->
<!--                                                <div class="panel panel-default mt-3">-->
<!--                                                    <div style="padding: 5px;font-size: 15px">-->
<!--                                                        <input type="text" v-model="add_kyc_tag" placeholder="Add New Tag" style="border: unset;height: 20px;font-size: 14px">-->
<!--                                                        <i style="float: right;padding: 2px;font-size: 18px;" v-if="add_kyc_tag.length>0" class="fa fa-plus" aria-hidden="true" @click="doc_kyc_list.push(add_kyc_tag),add_kyc_tag=''"></i>-->
<!--                                                        <i style="float: right;padding: 2px;font-size: 18px;" v-else class="fa fa-plus" aria-hidden="true" @click="alert('Empty Field')"></i>-->

<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="col-lg-6">-->
<!--                                                <b class="mb-3">Documents Required</b>-->
<!--                                                <div style="min-height: 32px;background-color: rgba(0, 83, 159, 0.04);">-->
<!--                                                    <draggable v-model="meta.meta_kyc_req" group="people" @start="drag=true" @end="drag=false">-->
<!--                                                        <div v-for="(name,index) in meta.meta_kyc_req " >-->

<!--                                                            <div class="panel panel-default" style="margin-bottom: unset !important">-->
<!--                                                                <div style="padding: 5px;font-size: 15px">{{name}} <i style="float: right;padding: 2px;font-size: 18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                        </div>-->

<!--                                                    </draggable></div></div>-->
<!--                                        </div>-->
<!--                                    </fieldset>-->
<!--                                </tab-content>-->


<!--                                <tab-content title="Create Form" icon="fa fa-check">-->
<!--                                    <fieldset>-->
<!--                                        <div  class="container-fluid row">-->
<!--                                            <div class="col-6 " >-->
<!--                                                <div class="row">-->
<!--                                                <div class="col-11 ">-->
<!--                                                    <b class="mb-3">Select Form Name From Dropdown</b>-->
<!--                                                    <div class="form-group" style="background-color: #fff">-->
<!--                                                        <v-select v-model="forms_data_modal"-->
<!--                                                                  name="forms"-->
<!--                                                                  label="form_name"-->
<!--                                                                  :options="forms_data"-->
<!--                                                                  @input="inmodal_form"-->


<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="col-1 ">-->
<!--                                                    <i class="fa fa-refresh m-t4"  @click="fetch_forms" title="Refresh Forms"></i>-->
<!--                                                </div>-->
<!--                                                </div>-->

<!--                                            </div>-->

<!--                                            <div class="col-3 " >-->
<!--                                                <a href="/forms" target="_blank" class="custom_button_design" style="margin-top: 35px !important; float: right;font-size: 18px;color: white;" @click="">Clone From List</a>-->

<!--                                            </div>-->

<!--                                        </div>-->

<!--                                        <iframe :src="form_url"  style="width:100%;height:100vh;border: none;" class="scrollbar" id="ex3">-->
<!--                                        </iframe>-->
<!--                                    </fieldset>-->
<!--                                </tab-content>-->

                                <tab-content title="Upload Member List" icon="fa fa-check">
                                    <fieldset>
                                        <div  class="container-fluid row">
                                            <div class="col-lg-12 mb-2">
                                                <button class="accordiona" @click="accordion3=!accordion3"><i class="fa fa-info-circle" aria-hidden="true"></i>
                                                    <b class="f-1-8">How it works?</b>


                                                    <i class="fa fa-times" aria-hidden="true" v-if="accordion3" style="float: right"></i>
                                                    <i class="fa fa-angle-down" aria-hidden="true" v-else style="float: right"></i>

                                                </button>
                                                <div class="panela" v-if="accordion3">
                                    <span class="f-1-6">
                                        - Use this section to upload member lists for registration and document collection.
                                        <br>
                                        <b>Approved list</b> : Used to upload a list of pre-approved members.
                                        <br>
                                        <b>Regular list</b> : Used when you need to manage the entire workflow on the system including registration and nominee approval.
                                        <br>
                                        <b> Please note </b>:
                                        <br>
                                        - Remember to download member template from the 'Template section' before uploading the member list.
                                        <br>
                                        - Member list shall be verified to ensure all individual data entries are valid before we proceed with the upload.
                                        <br>
                                        - Check the remarks column in the invalid list to know possible errors with data entry.
                                        <br>
                                        - The first row includes dummy data and will not be included in your upload. However, it is mandatory and should not be DELETED.

                                    </span>
                                                </div>
                                            </div>

                                            <div class="col-6 text-center f-1-2" >
                                                <p>Choose Excel File</p>
                                                <label class="file_hidden mt-n2">
                                                    Approved Member Sheet
                                                    <input type="file" size="20"  @change="uploadcsvregistrationpre($event)" accept=".xls,.xlsx">
                                                </label>
                                            </div>
                                            <div class="col-6 text-center f-1-2" >
                                                <p>Choose Excel File</p>
                                                <label class="file_hidden mt-n2">
                                                    Regular Member Sheet
                                                    <input type="file" size="20"  @change="uploadcsvregistration($event)" accept=".xls,.xlsx">
                                                </label>
                                            </div>
<!--                                            <div class="col-6 text-center f-1-2" >-->

<!--                                                <p>Choose Excel File</p>-->
<!--                                                <label class="file_hidden mt-n2">-->
<!--                                                    <span @click="csvmodal=true"> Upload & Confirm via Registration.</span>-->

<!--                                                    &lt;!&ndash;                                                    <input type="file" size="20"  @change="uploadcsv($event)">&ndash;&gt;-->
<!--                                                </label>-->

<!--                                            </div>-->
                                            <input type="hidden" id="jsonData" class="col-md-12"  >
                                            <div class="col-md-12 text-center">
<!--                                            <button v-if="csv_active_option==1 && !prog" class="btn btn-lg btn-success" @click="upload_confirm_all_with_reg">Click To Proceed</button>-->
                                                <button v-if="csv_active_option==1 && !prog" class="btn btn-lg btn-success" id="proceed_button" style="visibility: hidden;" @click="upload_confirm_all_with_reg">Click To Proceed</button>

                                                <button v-if="csv_active_option==2 && !prog" class="btn btn-lg btn-success" id="proceed_button2" style="visibility: hidden;" @click="upload_confirm_all_with_reg_pre">Click To Proceed</button>
                                                <button v-if="csv_active_option==5 && !prog" class="btn btn-lg btn-success" id="proceed_button5" style="visibility: hidden;" @click="varify_excel_file_reg">Click To Verify</button>
                                                <button v-if="csv_active_option==6 && !prog" class="btn btn-lg btn-success" id="proceed_button6" style="visibility: hidden;" @click="varify_excel_file_pre">Click To Verify</button>
                                                <div class="loadnew" v-if="prog">

                                                    <vue-ellipse-progress :progress="transitionDuration"
                                                                          :animation="animateDuration"


                                                    >

                                                        <template v-slot:legend-value>
                                                            <span slot="legend-value">/{{transitionDuration}}</span>
                                                        </template>
                                                        <template v-slot:legend-caption>
                                                            <p slot="legend-caption">Members Done</p>
                                                        </template>

                                                    </vue-ellipse-progress>

<!--                                                    <Progress-->
<!--                                                        :transitionDuration="transitionDuration"-->
<!--                                                        :radius="50"-->
<!--                                                        :strokeWidth="20"-->
<!--                                                        value="95"-->
<!--                                                    >-->
<!--                                                    </Progress>-->
                                                </div>
                                            </div>
                                            <div v-if="csvmodal">
                                                <transition name="modal">
                                                    <div class="modal-mask">
                                                        <div class="modal-wrapper">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <button type="button" class="close" @click="csvmodal=false">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>

                                                                    </div>
                                                                    <div class="modal-body text-center">
                                                                        <h4 class="modal-title text-left">Choose Registration Form For Attachment</h4>
                                                                        <div class="row">
                                                                            <div class="container m-t5">
                                                                                <v-select v-model="forms_data_modal"
                                                                                    :clearable="false"
                                                                                    name="forms"
                                                                                    label="form_name"
                                                                                    :options="forms_data"
                                                                                    @input="inmodal_form1"
                                                                                    style="width: 470px;margin-left: -16px"



                                                                                /><br/>
                                                                            </div>
                                                                        </div>
                                                                        <label class="file_hidden mt-n2">
                                                                            Upload
                                                                            <input type="file" size="20"  @change="uploadcsvregistration($event)" accept=".xls,.xlsx">

                                                                        </label>
                                                                        <button v-if="csv_active_option==2 && !prog" class="btn btn-lg btn-success" @click="upload_confirm_all_with_reg">Click To Proceed</button>

                                                                        <div class="loadnew" v-if="prog">

                                                                            <vue-ellipse-progress :progress="transitionDuration"
                                                                                                  :animation="animateDuration"

                                                                            >

                                                                                <template v-slot:legend-value>
                                                                                    <span slot="legend-value">/{{transitionDuration}}</span>
                                                                                </template>
                                                                                <template v-slot:legend-caption>
                                                                                    <p slot="legend-caption">Members Done</p>
                                                                                </template>

                                                                            </vue-ellipse-progress>

<!--                                                                            <Progress-->
<!--                                                                                :transitionDuration="transitionDuration"-->
<!--                                                                                :radius="50"-->
<!--                                                                                :strokeWidth="20"-->
<!--                                                                                value="95"-->
<!--                                                                            >-->
<!--                                                                            </Progress>-->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>


                                        </div>
                                    </fieldset>
                                </tab-content>



                                <template slot="footer" slot-scope="props">
                                    <div class="wizard-footer-left">
                                        <wizard-button v-if="props.activeTabIndex > 0 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Previous</wizard-button>
                                    </div>
                                    <div class="wizard-footer-right">
                                        <wizard-button v-if="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next</wizard-button>
                                        <wizard-button v-if="props.isLastStep" @click.native="changeview('createlist')" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Non-Member List' : 'Next'}}</wizard-button>
                                    </div>
                                </template>

                            </form-wizard>



                        </div>


                        <!--                        <button  class="button-css" @click="changeview('trav')" >Traveller</button>-->

                    </div>

                    <!--                    Create List-->
                    <div :class="[createlist ? 'activedev' : 'hidedev' ]" class="query-content mb-5 mt-3 mr-5 ml-3">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="col-lg-10 m_t2">
                                <button class="accordiona" @click="accordion=!accordion"><i class="fa fa-info-circle" aria-hidden="true"></i>
                                    <b class="f-1-8">How it works?</b>


                                    <i class="fa fa-times" aria-hidden="true" v-if="accordion" style="float: right"></i>
                                    <i class="fa fa-angle-down" aria-hidden="true" v-else style="float: right"></i>

                                </button>
                                <div class="panela" v-if="accordion">
                                    <span class="f-1-6">
                                        - This feature lets you share lists with the group members. For example: You may
                                        want to share a list of Non Members, product listings, sponsor listings or maybe a list
                                        of emergency numbers.
                                        <br>
                                        - To define a specific list, please define the list type and then use sample template
                                        to upload the list.
                                       <br>
                                        - For Emergency numbers, you may check " Click to Add Tour Support " and
                                        manually enter the name and number</span>
                                </div>
                                </div>
                                <div class="col-lg-12">
                                    Upload Non Members
                                    <div class="row">
                                        <div class="col-6 text-center f-1-2 mt-4">
                                        <h3> Button Title</h3>
                                            <input  type="text" class="form-control" v-model="meta.meta_non_member_list.button_title">
                                            <div class="row mt-5" >
                                                <div  class="col-md-1" >
                                                    <label class="container_input">
                                                        <input type="checkbox" v-model="meta.meta_non_member_list.share"  value="Share Contacts">
                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                    </label></div>
                                                <div  class="col-md-3" style="font-size: 15px;color: black; margin-left: -20px;">Share Contacts</div>
                                            </div>
                                        </div>
                                        <div class="col-3 text-center f-1-2" >
                                            <div class="col-12 text-center f-1-2" >
<!--                                                <a href="#" @click="downloadgroupcsv('/csv/exhibitor_demo.xlsx','xlsx')">Download Sample CSV</a>-->
                                            </div>
                                            <h3 class="m_t1" style="margin-bottom: 15px;">Choose Excel File</h3>
                                            <label class="file_hidden mt-n2">
                                                Upload Non Members
                                                <input type="file" size="20"  @change="uploadexhi($event)" accept=".xls,.xlsx">
                                            </label>
                                        </div>
                                        <div class="col-3 text-left f-1-2" >
                                            <button v-if="csv_active_option==3 " class="btn btn-lg btn-success" id="proceed_button3" style="visibility: visible;margin-top: 38px;" @click="upload_confirm_exhi">Click To Proceed</button>
                                        </div>
                                        <input type="hidden" id="jsonData2" class="col-md-12"  />
                                        <div class="mt-5" v-if="meta.meta_non_member_list.exhibitor.length>0" style="background-color: white;border:1px solid gainsboro">


                                                <div class="col-12 ml-1 mt-3"> Non Members List</div>

                                                <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                                    <p class="f-1-8 c-grey">Name</p></div>
                                                    <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                                        <p class="f-1-8 c-grey">Description</p></div>
                                                        <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                                            <p class="f-1-8 c-grey">Contact</p></div>
                                                            <div class="col-lg-2 pt-4 pb-4 mt-2 border-right" >
                                                                <p class="f-1-8 c-grey">Address</p></div>
                                                                <div class="col-lg-1 pt-4 pb-4 mt-2 border-right" >
                                                                    <p class="f-1-8 c-grey">Website</p></div>
                                                                    <div class="col-lg-1 pt-4 pb-4 mt-2 border-right" >
                                                                        <p class="f-1-8 c-grey">Logo</p></div>
                                                                        <div class="col-lg-2 pt-4 pb-4 mt-2 border-right" >
                                                                            <p class="f-1-8 c-grey">Category</p></div>

                                                <div  v-for="(exhi,index) in meta.meta_non_member_list.exhibitor" >

                                                    <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">

                                                         <input disabled type="text"   class="form-control" :value="exhi.Name">
                                                    </div>
                                                    <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">

                                                        <input disabled type="text"   class="form-control" :value="exhi.Description">
                                                          </div>
                                                    <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">

                                                        <input disabled type="text"   class="form-control" :value="exhi.Contact">
                                                        </div>
                                                    <div class="col-lg-2 pt-4 pb-4 mt-2 border-right" >

                                                        <input disabled type="text"   class="form-control" :value="exhi.Address">

                                                        </div>
                                                    <div class="col-lg-1 pt-4 pb-4 mt-2 border-right" >

                                                        <input disabled type="text"   class="form-control" :value="exhi.Website">

                                                    </div>
                                                    <div class="col-lg-1 pt-4 pb-4 mt-2 border-right" >

                                                        <input disabled type="text"   class="form-control" :value="exhi.Logo">

                                                    </div>
                                                    <div class="col-lg-1 pt-4 pb-4 mt-2 border-right" >

                                                        <input disabled type="text"   class="form-control" :value="exhi.Category">
                                                        </div>
                                                    <div class="col-lg-1 pt-4 pb-4 mt-2 border-right" >

                                                        <img  @click="meta.meta_non_member_list.exhibitor.splice(index, 1)" src="./../dashboard_resources/trash.png"  class="hw-2 mt-1">

                                                    </div>



                                                </div>



                                        </div>

                                    </div>

                                </div>


                            </div>
                            <div class="col-12 ml-1 mt-5"> Tour Support Contacts</div>

                            <div class="col-3  text-center f-1-2" >

                                <p>Choose Excel File</p>
                                <label class="file_hidden mt-n2">
                                    Upload Tour Support
                                    <input type="file" size="20"  @change="uploadsupport($event)" accept=".xls,.xlsx">
                                </label>
                            </div>
                            <div class="col-3 text-left f-1-2" >
                                <button v-if="csv_active_option==4 " class="btn btn-lg btn-success" id="proceed_button4" style="visibility: visible;margin-top: 20px;" @click="upload_confirm_tour">Click To Proceed</button>
                            </div>
                            <input type="hidden" id="jsonData3" class="col-md-12"  />
                            <div class="col-4  text-center f-1-2" ></div>
                            <div class="col-3  mt-3"><h3>Support Name</h3></div>
                            <div class="col-3  mt-3"><h3>Support Mobile no</h3></div>
                            <div class="col-3  mt-3"></div>
                            <div class="col-3  mt-3"></div>
                            <div class="row ml-2" style="width: 100%"  v-for="(support,index) in meta.meta_non_member_list.support" >
                                <div class="col-3  mt-3">
                                    <span class="p-a"><i class="fas fa-user pl-3 c-grey pt-2 f-1-8"></i></span>
                                    <input  type="text" class="form-control pl-5 fw-4 pl-5"
                                            v-model="support.Name"


                                          name="name">
                                </div>
                                <div class="col-4  mt-3">
                                    <span class="p-a pl-2"><img src="./../dashboard_resources/contact.png"></span>
                                    <vue-tel-input v-model="support.Phone"   v-bind="bindProps" name="phone"  class="form-control pl-5 pr-5 f-1-5 vue-tel-input fw-3"></vue-tel-input>


                                </div>
<!--                                category-->

                                <div class="col-3  mt-3">

<!--                                    <div class="col-1 offset-11">-->

                                        <img v-if="meta.meta_non_member_list.support.length>1" @click="meta.meta_non_member_list.support.splice(index, 1) " src="./../dashboard_resources/minus.png" class="hw-3">
                                        <img v-else @click="meta.meta_non_member_list.support.splice(index, 1),meta.meta_non_member_list.support.push({'name':'','mobile':''}) " src="./../dashboard_resources/minus.png" class="hw-3 ">
                                        <img  @click="meta.meta_non_member_list.support.push({'name':'','mobile':''})" class="hw-3 " src="./../dashboard_resources/plus.png">
<!--                                    </div>-->


                                </div>

                                <div class="col-2  mt-3">

                                </div>

                            </div>

                        </div>

                        <button @click="submitForm" class="button-css">Save & Exit</button>
                    </div>

                    <!--                    Embed Button-->
                    <div  :class="[embed ? 'activedev' : 'hidedev' ]" class="query-content f-2">

                        <div class="row">
                            <div class="col-lg-10 m_t2">
                                <button class="accordiona" @click="accordion=!accordion"><i class="fa fa-info-circle" aria-hidden="true"></i>
                                    <b class="f-1-8">How it works?</b>


                                    <i class="fa fa-times" aria-hidden="true" v-if="accordion" style="float: right"></i>
                                    <i class="fa fa-angle-down" aria-hidden="true" v-else style="float: right"></i>

                                </button>
                                <div class="panela" v-if="accordion">
                                    <span class="f-1-6">
                                        - This feature lets you share lists with the group members. For example: You may
                                        want to share a list of Non Members, product listings, sponsor listings or maybe a list
                                        of emergency numbers.
                                        <br>
                                        - To define a specific list, please define the list type and then use sample template
                                        to upload the list.
                                       <br>
                                        - For Emergency numbers, you may check " Click to Add Tour Support " and
                                        manually enter the name and number</span>
                                </div>
                            </div>
                            <div class="col-lg-11 m_t2">


                            <p class="f-2 fw-5 text-muted">Instruction Text</p>
                            <input type="text"  v-model="meta.meta_embed_button.instruction"  class="form-control pl-5 f-1-4 fw-4">

                            <p class="f-2 fw-5 text-muted">Button Text</p>
                            <input type="text"  v-model="meta.meta_embed_button.title"  class="form-control pl-5 f-1-4 fw-4">

                            <p class="f-2 fw-5 text-muted">Paste Link</p>
                            <input type="text"  v-model="meta.meta_embed_button.link"  class="form-control pl-5 f-1-4 fw-4">
                            </div>

                        </div>

<!--                        <button @click="changeview('live')" class="button-css">Live Expense Tracking</button>-->
                    </div>
<!--                    <div  :class="[live ? 'activedev' : 'hidedev' ]" class="query-content f-2">-->

<!--                        <div class="row">-->
<!--                            <div class="col-3">-->
<!--                                <div class="input-group">-->
<!--                                    <input type="text" v-model="localsearch" class="filter_bar" placeholder="Search" style="margin: unset;width: unset">-->
<!--                                    <div class="input-group-append" style="height: 53px">-->
<!--                                        <button @click="updatesearch" class="btn btn-secondary filter_button" v-if="search"  type="button">-->
<!--                                            <i class="fa fa-search"></i>-->
<!--                                        </button>-->
<!--                                        <button @click="clearsearch" class="btn btn-secondary filter_button" v-if="clear"  type="button">-->
<!--                                            <i class="fa fa-times-circle"></i>-->
<!--                                        </button>-->
<!--                                    </div>-->
<!--                                </div>-->




<!--                            </div>-->
<!--                            <div class="col-6">-->
<!--                          <span style="border-radius: 17px; background-color: white;padding: 9px;font-size: 13px;">-->
<!--                           Total Expense: {{currency}}-->

<!--                          </span>-->


<!--                            </div>-->
<!--                            <div class="col-3">-->
<!--                                <div class="col-sm">-->
<!--                                    <download-excel-->
<!--                                        class   = "btn btn-default"-->
<!--                                        :data   = "json_data"-->
<!--                                        :fields = "json_fields"-->
<!--                                        worksheet = "My Worksheet"-->
<!--                                        name    = "itinerary.xls"-->
<!--                                    >-->
<!--                                        <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>-->
<!--                                    </download-excel>-->

<!--                                    <download-excel-->
<!--                                        class   = "btn btn-default"-->
<!--                                        :data   = "json_data"-->
<!--                                        :fields = "json_fields"-->
<!--                                        type    = "csv"-->
<!--                                        name    = "itinerary.csv"-->
<!--                                    >-->
<!--                                        <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="CSV"  ><br>-->
<!--                                        <p class="extension_title">CSV</p>-->

<!--                                    </download-excel>-->
<!--                                </div>-->

<!--                            </div>-->
<!--                            <div class="col-lg-12">-->


<!--                                <datatable-->

<!--                                    :columns="columns"-->
<!--                                    :data="meta.meta_live_expense"-->
<!--                                    :total="meta.meta_live_expense.length"-->

<!--                                />-->

<!--                            </div>-->
<!--                        </div>-->

<!--                        <button @click="changeview('up')" class="button-css">Upload</button>-->
<!--                    </div>-->

                    <!--                    upload-->
                    <div  v-if="up" :class="[up ? 'activedev' : 'hidedev' ]" class="query-content" style="">
                        <form-wizard @on-complete="changeview('visa')"  color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Cost">


                            <tab-content title="E_visa" icon="fa fa-check">
                                <fieldset>
                                    <div class="row">
                                        <div class="col-5 mr-5 mt-3  border" v-for="(visa,index) in meta.meta_visa">
                                            <div class="row p-2">
                                                <div class="col-3 border bg-w text-center rounded">
                                                    <img class="mt-4" src="./../dashboard_resources/E_Visa.png" height="60px" width="45px">
                                                    <p class="f-1-6 mt-3">E-visa</p>
                                                </div>
                                                <div class="col-9">
                                                    <div class="row mt-3">
                                                        <div class="col-12 text-center f-1-6" v-if="visa['url']==''">
                                                            <p>No file Choosen</p>
                                                            <label class="file_hidden offset-2 mt-n2 f-1-6">
                                                                Choose File
                                                                <input type="file" size="20"  @change="updatemeta_visa($event,'meta_visa',index)">
                                                            </label>
                                                        </div>
                                                        <div class="col-12 text-center f-1-6" v-if="visa['url']!=''">
                                                            <p>{{visa['url']}}</p>
                                                            <a class="download_button mt-n2 offset-2 f-1-6" target= "_blank" v-bind:href="visa['url'] ">Download</a>
                                                            <img  @click="meta.meta_visa.splice(index, 1) " src="./../dashboard_resources/trash.png" class="hw-3 mt-3">
                                                        </div>
                                                    </div>
                                                    <!--                                                        <div class="row ml-1">-->
                                                    <!--                                                            <div class="col-5 text-center mt-5">-->
                                                    <!--                                                        <input v-if="visa['url']==''" type="file" @change="updatemeta_visa($event,'meta_visa',index)" />-->
                                                    <!--                                                        <p v-else>File Uploaded</p>-->
                                                    <!--                                                        <img  @click="meta.meta_visa.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;">-->

                                                    <!--                                                    </div>-->

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-lg-10 text-center">
                                            <button @click='meta.meta_visa.push({"url":""})' class="btn btn-primary pl-5 pr-5 f-2">Add New Visa</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </tab-content>
                            <tab-content title="Passport" icon="fa fa-check">
                                <fieldset>
                                    <div class="row">
                                        <div class="col-12 ml-1 mt-3" v-for="(passport,index) in meta.meta_passport" style="background-color: white;border:1px solid gainsboro">

                                            <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                                <!--                                                <img class="mt-4 ml-3" src="./../dashboard_resources/passport.png" height="60px" width="45px">-->
                                                <!--                                                Passport-->
                                                <p class="f-1-8 c-grey">Exp. Date</p>
                                                <date-picker

                                                    v-model="passport['exp_date']"

                                                    name="exp_date"
                                                    placeholder="12/02/2020"
                                                    @change="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])"
                                                    @input="err_passport=[]"
                                                    :config="$root.dpconfigDate_disable_dates"
                                                    :disabled="passport['url']!=''">
                                                </date-picker> </div>
                                            <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                                <p class="f-1-8 c-grey">Given Name</p>
                                                <input :disabled="passport['url']!=''"  @input="validate_passport(index)" type="text" v-model="passport['name_first']" @change="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])" class="form-control" placeholder="Visharth">
                                            </div>
                                            <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                                <p class="f-1-8 c-grey">Sur Name</p>
                                                <input :disabled="passport['url']!=''" type="text" v-model="passport['name_last']" @change="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])" class="form-control" placeholder="Sharma">
                                            </div>
                                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right">
                                                <p class="f-1-8 c-grey">Passport No.</p>
                                                <input :disabled="passport['url']!=''" type="text" v-model="passport['passportno']" @change="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])" class="form-control" placeholder="123546">
                                            </div>
                                            <div class="col-lg-3 mt-2 mb-2 text-center" >
                                                <!--                                    <label class="la"> Choose File-->
                                                <!--                                        <input type="file" size="10">-->
                                                <!--                                    </label>-->
                                                <div class="row mt-3">
                                                    <div class="col-12 text-center f-1-6" v-if="passport['url']==''">
                                                        <p>No file Choosen</p>
                                                        <label class="file_hidden offset-1 mt-n2 f-1-6">
                                                            Choose File
                                                            <input type="file" size="20" :disabled="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])"  @change="updatemeta_passport($event,'meta_passport',index)" >
                                                        </label>

                                                    </div>
                                                    <div class="col-12 text-center f-1-2" v-if="passport['url']!=''">
                                                        <p>{{passport['url']}}</p>
                                                        <a class="download_button mt-n2 offset-2" target= "_blank" v-bind:href="passport['url'] ">Download</a>
                                                        <img  @click="meta.meta_passport.splice(index, 1)" src="./../dashboard_resources/trash.png" class="hw-2 mt-1">
                                                    </div>
                                                </div>
                                                <!--                                <p class="imgsize mb-1">Del2bam_img.png</p>-->
                                                <!--                                <button class="btn-warning pl-5 pr-5 imgsize" style="color:white">Download</button><br>-->
                                                <!--                                <img class="imgmes" src="./../dashboard_resources/trash.png">-->
                                            </div>
                                            <!--                                                <p v-if="passport['url']!=''">File Uploaded</p>-->
                                            <!--                                                <input v-else-->
                                            <!--                                                       class="form-control"-->
                                            <!--                                                       :disabled="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])"-->
                                            <!--                                                       type="file" @change="updatemeta_passport($event,'meta_passport',index)">-->
                                            <!-- <p class="imgsize mb-1">Del2bam_img.png</p>-->
                                            <!-- <button class="btn-warning pl-5 pr-5 imgsize" style="color:white">Download</button><br>-->
                                            <!-- <img class="imgmes" src="./../dashboard_resources/trash.png">-->

                                            <!--                                            <div class="col-lg-1 text-right mt-4"><img @click="meta.meta_passport.splice(index, 1)" src="./../dashboard_resources/trash.png" style="width: 27px; height: 27px;"></div>-->

                                        </div>
                                    </div>


                                    <div class="row mt-3 mb-3">

                                        <div class="col-lg-3">

                                        </div>
                                        <div class="col-lg-3">

                                        </div>
                                        <div class="col-lg-2">

                                        </div>
                                        <div class="col-lg-4 mt-2 mb-2">


                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-lg-10 text-center">
                                            <button @click='meta.meta_passport.push({"exp_date":"","name_first":"","name_last":"","passportno":"","url":""})' class="btn btn-primary pl-5 pr-5 f-2">Add New Passport</button>
                                        </div>
                                    </div>


                                </fieldset>
                            </tab-content>
                            <tab-content title="Vouchers" icon="fa fa-check">
                                <fieldset>
                                    <div class="row">
                                        <div class="col-5 mr-5 mt-3  border" v-for="(voucher,index) in meta.meta_voucher">
                                            <div class="row p-2">
                                                <div class="col-3 border bg-w text-center rounded">
                                                    <img class="mt-4" src="./../dashboard_resources/voucher.png" height="60px" width="45px">
                                                    <p class="f-1-6 mt-3">Voucher</p>
                                                </div>
                                                <div class="col-9">
                                                    <div class="row mt-3">
                                                        <div class="col-12 text-center f-1-6" v-if="voucher['url']==''">
                                                            <p>No file Choosen</p>
                                                            <label class="file_hidden offset-2 mt-n2 f-1-6">
                                                                Choose File
                                                                <input type="file" size="20" @change="updatemeta_voucher($event,'meta_voucher',index)" />
                                                            </label>

                                                        </div>
                                                        <div class="col-12 text-center f-1-6" v-if="voucher['url']!=''">
                                                            <p>{{voucher['url']}}</p>
                                                            <a class="download_button mt-n2 offset-2 f-1-6" target= "_blank" v-bind:href="voucher['url'] ">Download</a>
                                                            <img  @click="meta.meta_voucher.splice(index, 1) " src="./../dashboard_resources/trash.png" class="hw-3 mt-3">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--                                        <div v-for="(voucher,index) in meta.meta_voucher">-->
                                        <!--                                            <div class="col-12 upload">-->
                                        <!--                                                <div class="row mt-2 mb-2">-->
                                        <!--                                                    <div class="col-4 uploadvisa text-center ml-2">-->
                                        <!--                                                        <img class="mt-4" src="./../dashboard_resources/voucher.png" height="60px" width="45px">-->
                                        <!--                                                        <p class="f-1-6 mt-3">Voucher</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                    <div class="col-7"><div class="row"><div class="col-5 text-center mt-5">-->
                                        <!--                                                        <input v-if="voucher['url']==''" type="file" @change="updatemeta_voucher($event,'meta_voucher',index)" />-->
                                        <!--                                                        <p v-else>File Uploaded</p>-->
                                        <!--                                                        <img  @click="meta.meta_voucher.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;">-->

                                        <!--                                                    </div>-->

                                        <!--                                                    </div></div>-->
                                        <!--                                                </div>-->
                                        <!--                                            </div>-->


                                        <!--                                        </div>-->
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-lg-10 text-center">
                                            <button @click='meta.meta_voucher.push({"url":""})' class="btn btn-primary pl-5 pr-5 f-2">Add New Voucher</button>
                                        </div>
                                    </div>



                                </fieldset>
                            </tab-content>




                            <tab-content title="Insurance" icon="fa fa-check">
                                <fieldset>
                                    <div class="row">
                                        <div class="col-5 mr-5 mt-3  border" v-for="(insurance,index) in meta.meta_insurance">
                                            <div class="row p-2">
                                                <div class="col-3 border bg-w text-center rounded">
                                                    <img class="mt-4" src="./../dashboard_resources/Insurance.png" height="60px" width="45px">
                                                    <p class="f-1-6 mt-3">Insurance</p>
                                                </div>
                                                <div class="col-9">
                                                    <div class="row mt-3">
                                                        <div class="col-12 text-center f-1-6" v-if="insurance['url']==''">
                                                            <p>No file Choosen</p>
                                                            <label class="file_hidden offset-2 mt-n2 f-1-6">
                                                                Choose File
                                                                <input size="20" type="file" @change="updatemeta_insurance($event,'meta_insurance',index)" />
                                                            </label>
                                                        </div>
                                                        <div class="col-12 text-center f-1-6" v-if="insurance['url']!=''">
                                                            <p>{{insurance['url']}}</p>
                                                            <a class="download_button mt-n2 offset-2 f-1-6" target= "_blank" v-bind:href="insurance['url'] ">Download</a>
                                                            <img  @click="meta.meta_insurance.splice(index, 1) " src="./../dashboard_resources/trash.png" class="hw-3 mt-3">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--                                    <div class="row">-->
                                    <!--                                        <div v-for="(insurance,index) in meta.meta_insurance">-->
                                    <!--                                            <div class="col-12 upload">-->
                                    <!--                                                <div class="row mt-2 mb-2">-->
                                    <!--                                                    <div class="col-4 uploadvisa text-center ml-2">-->
                                    <!--                                                        <img class="mt-4" src="./../dashboard_resources/Insurance.png" height="60px" width="45px">-->
                                    <!--                                                        <p class="f-1-6 mt-3">Insurance</p>-->
                                    <!--                                                    </div>-->
                                    <!--                                                    <div class="col-7"><div class="row"><div class="col-5 text-center mt-5">-->
                                    <!--                                                        <input v-if="insurance['url']==''" type="file" @change="updatemeta_insurance($event,'meta_insurance',index)" />-->
                                    <!--                                                        <p v-else>File Uploaded</p>-->
                                    <!--                                                        <img  @click="meta.meta_insurance.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;">-->

                                    <!--                                                    </div>-->

                                    <!--                                                    </div></div>-->
                                    <!--                                                </div>-->
                                    <!--                                            </div>-->


                                    <!--                                        </div>-->
                                    <!--                                    </div>-->
                                    <div class="row mt-5">
                                        <div class="col-lg-10 text-center">
                                            <button @click='meta.meta_insurance.push({"url":""})' class="btn btn-primary pl-5 pr-5 f-2">Add New Insurance</button>
                                        </div>
                                    </div>


                                </fieldset>
                            </tab-content>
                            <tab-content title="Others" icon="fa fa-check">
                                <fieldset>

                                    <div class="row">
                                        <div class="col-5 mr-5 mt-3  border" v-for="(other,index) in meta.meta_other">
                                            <div class="row p-2">
                                                <div class="col-3 border bg-w text-center rounded">
                                                    <img class="mt-4" src="./../dashboard_resources/Other.png" height="60px" width="45px">
                                                    <p class="f-1-6 mt-3">Other</p>
                                                </div>
                                                <div class="col-9">
                                                    <div class="row mt-3">
                                                        <div class="col-12 text-center f-1-6" v-if="other['url']==''">
                                                            <p>No file Choosen</p>
                                                            <label class="file_hidden offset-2 mt-n2 f-1-6">
                                                                Choose File
                                                                <input size="20" type="file" @change="updatemeta_other($event,'meta_other',index)" />
                                                            </label>
                                                        </div>
                                                        <div class="col-12 text-center f-1-4" v-if="other['url']!=''">
                                                            <p>{{other['url']}}</p>
                                                            <a class="download_button mt-n2 offset-2 f-1-4" target= "_blank" v-bind:href="other['url'] ">Download</a>
                                                            <img  @click="meta.meta_other.splice(index, 1) " src="./../dashboard_resources/trash.png" class="hw-3 mt-3">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-5">
                                        <div class="col-lg-10 text-center">
                                            <button @click='meta.meta_other.push({"url":""})' class="btn btn-primary pl-5 pr-5 f-2">Add New Other</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </tab-content>
                        </form-wizard>
                        <!--                        <div class="row" v-if="license.cost_sheet">-->
                        <!--                            <div class="col-1 offset-10"><button v-if="submit" class="button-css" @click="submitForm" style="margin-left: -28%;">Submit</button></div>-->
                        <!--                            <div class="col-1"><button v-if="submit && item.activated!=='1' && license.post_booking_app" class="button-css" @click="submitForm3" >Submit & Activate</button></div>-->
                        <!--                        </div>-->
                    </div>
                    <div  :class="[visa ? 'activedev' : 'hidedev' ]" class="query-content f-2">

                        <div class="row">
                            <div class="col-lg-12">

                            </div>
                        </div>

                        <button @click="changeview('up')" class="button-css">Visa</button>
                    </div>

                    <!--                    cost-->
                    <div  v-if="cost && license.cost_sheet" :class="[cost ? 'activedev' : 'hidedev' ]" class="query-content f-2">
                        <div class="row">
                            <div class="row">
                                <div class="  text-success" @click="cost=false,refresh_cost=true"><i style="cursor: pointer"  class="fa fa-refresh f-2" aria-hidden="true"></i></div>
                                <span style="font-size: 13px;line-height: 33px;"> Update Hotels</span>
                                <div class=" ml-3 text-success" @click="cost=false,refresh_cost=true"><i style="cursor: pointer"  class="fa fa-calculator f-2" aria-hidden="true"></i></div>
                                <span style="font-size: 13px;line-height: 33px;">Recalculate</span>

                            </div>
                        </div>


                        <div  class="row mt-3" v-for="(hotelarr,index) in meta.meta_exp_cost">
                            <div class="col-5">
                                <p class="text-muted">{{hotelarr.type.toUpperCase()}}: </p>
                                <input type="text" :disabled="hotelarr.type!='transport'&& hotelarr.type!='hotel'"  :value="hotelarr.title" disabled class="form-control mt-n3">
                            </div>
                            <div class="col-2">
                                <p v-if="index==0" class="text-muted">Rate</p>
                                <p v-else><br></p>
                                <input type="text"  v-model="hotelarr.rate" class="form-control mt-n3">
                            </div>
                            <div class="col-1">
                                <p v-if="index==0" class="text-muted">Qty.</p>
                                <p v-else><br></p>
                                <input type="text" v-model="hotelarr.qty" class="form-control mt-n3">
                            </div>
                            <div class="col-1">
                                <p v-if="index==0" class="text-muted">Unit</p>
                                <p v-else><br></p>
                                <input type="text" v-model="hotelarr.unit" class="form-control mt-n3">
                            </div>
                            <div class="col-2">
                                <p v-if="index==0" class="text-muted">Price</p>
                                <p v-else><br></p>
                                <input type="text" disabled="disabled" :value="hotelarr.price=totalprice(hotelarr.rate,hotelarr.qty)" class="form-control mt-n3">
                            </div>
                            <div class="col-1">
                                <img v-if="hotelarr.type!='transport'&& hotelarr.type!='hotel'"  @click="meta.meta_exp_cost.splice(index, 1) " src="./../dashboard_resources/minus.png" class="hw-3 mt-5">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-1 offset-11"><img @click="showModalcost=true,addlevel1=true,addlevel2=false" class="hw-4 mr-3" src="./../dashboard_resources/plus.png"></div>

                        </div>

                        <div >
                            <div v-if="showModalcost">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-dialog">
                                                <div class="modal-content background-color-all">
                                                    <div class="modal-header border-0" @click="showModalcost=false">
                                                        <button type="button" class="close" @click="showModalcost=false">
                                                            <span aria-hidden="true" @click="showModalcost=false">x</span>
                                                        </button>

                                                    </div>
                                                    <div class="modal-body">

                                                        <h1 class="modal-title text-center mt-n5 text-muted">Add Custom Field</h1>
                                                        <div class="container">
                                                            <div class="row mt-3">
                                                                <div class="col-1 h2"> Type</div>
                                                                <div class="col-11"><input type="text" class="form-control ml-3" v-model="temp_cost.type"></div>
                                                            </div>
                                                            <div class="row mt-3">
                                                                <div class="col-1 h2"> Title</div>
                                                                <div class="col-11"> <input type="text" class="form-control ml-3" v-model="temp_cost.title"></div>
                                                            </div>
                                                            <div class="row mt-3">
                                                                <div class="col-1 h2"> Rate</div>
                                                                <div class="col-11"> <input type="text" class="form-control ml-3" v-model="temp_cost.rate"></div>
                                                            </div>
                                                            <div class="row mt-3">
                                                                <div class="col-1 h2"> Qty</div>
                                                                <div class="col-11">  <input type="text" class="form-control ml-3" v-model="temp_cost.qty"></div>
                                                            </div>
                                                            <div class="row mt-3">
                                                                <div class="col-1 h2"> Unit</div>
                                                                <div class="col-11"><input  type="text" class="form-control ml-3"  v-model="temp_cost.unit"></div></div>
                                                        </div>
                                                        <div class="col-12 text-center mt-3">
                                                            <button v-if="addlevel1" class="btn btn-success" @click="addnewcost()"><span class="h2">Add</span></button>
                                                            <button v-if="addlevel2" class="btn btn-success" @click="addnewcostflight()"><span class="h2">Add</span></button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>



                        <div class="row mt-5">
                            <div class="col-2 offset-9">
                                <p class="text-muted">Total</p>
                                <input type="text" disabled :value="total_lev1" class="form-control">
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-4 offset-5">
                                <div class="row">
                                    <div class="col-12">
                                        <p class="text-muted">
                                            Fixed
                                            <label class="switch">
                                                <input type="checkbox" v-model="meta.markup1.percent">
                                                <span class="slider round"></span>
                                            </label>
                                            Percent
                                            (Markup)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <p class="text-muted">Selling Price</p>
                            </div>
                        </div>
                        <div class="row">
                            <div v-if="meta.markup1.percent" class="col-2 offset-5">
                                <input min="0" @keypress="isNumberpercent($event)" v-model="meta.markup1.value" type="number" class="form-control"><span class="p-a per">%</span>
                            </div>
                            <div class="col-2 offset-5" v-else><input  @keypress="isNumber($event)" v-model="meta.markup1.value" type="number" class="form-control"></div>




                            <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" class="form-control"></div>-->
                            <div class="col-2 offset-2">
                                <input :value="total_sp1" disabled type="text" class="form-control">

                            </div>

                        </div>


                        <br>
                        <div class="row" v-for="(hotelarr2,index) in meta.meta_exp_costflight" >
                            <div class="col-5">
                                <p v-if="index==0" class="text-muted">Flight: </p>
                                <p v-else><br></p>
                                <input type="text"  v-model="hotelarr2.title" class="form-control mt-n3">
                            </div>
                            <div class="col-2">
                                <p v-if="index==0" class="text-muted">Rate</p>
                                <p v-else><br></p>
                                <input type="text" v-model="hotelarr2.rate" class="form-control mt-n3">
                            </div>
                            <div class="col-1">
                                <p v-if="index==0" class="text-muted">Qty.</p>
                                <p v-else><br></p>
                                <input type="text" v-model="hotelarr2.qty" class="form-control mt-n3">
                            </div>
                            <div class="col-1">
                                <p v-if="index==0" class="text-muted">Unit</p>
                                <p v-else><br></p>
                                <input type="text" v-model="hotelarr2.unit" class="form-control mt-n3">
                            </div>
                            <div class="col-2">
                                <p v-if="index==0" class="text-muted">Price</p>
                                <p v-else><br></p>
                                <input type="text" disabled="disabled" :value="hotelarr2.price=totalprice(hotelarr2.rate,hotelarr2.qty)" class="form-control mt-n3">
                            </div>
                            <div class="col-1">
                                <img   @click="meta.meta_exp_costflight.splice(index, 1) " src="./../dashboard_resources/minus.png"  class="hw-3 mt-5">
                            </div>
                        </div>
                        <!--                        <div class="row" v-for="(hotelarr2,index) in meta.meta_exp_costflight" >-->
                        <!--                            <div class="col-5"><input :disabled="hotelarr2.fix!=='no'" type="text"  v-model="hotelarr2.title"  style="border: 1px solid gainsboro; border-radius: 3px; width: 85%; height: 40px; margin-left: 25.5%;"></div>-->

                        <!--                            <div class="col-2" style="margin-left: 3.3%;"><input type="text" v-model="hotelarr2.rate" style="border: 1px solid gainsboro; border-radius: 3px; width: 90%; height: 40px;"></div>-->
                        <!--                            <div class="col-1" style="margin-left: -2%;"><input type="text" v-model="hotelarr2.qty" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>-->
                        <!--                            <div class="col-1" style="margin-left: -2%;"><input type="text" v-model="hotelarr2.unit" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>-->
                        <!--                            <div class="col-2" style="margin-left: -1%;"><input type="text" disabled="disabled" :value="hotelarr2.price=totalprice(hotelarr2.rate,hotelarr2.qty)" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>-->
                        <!--                            <div class="col-1"> <img v-if="hotelarr2.fix==='no'"   @click="meta.meta_exp_costflight.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;margin-left: -14px">-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                        <!--                        <div class="row">-->
                        <!--                            <div class="col-11"></div><div class="col-1"><img @click="showModalcost=true,addlevel2=true" style="height: 37px" src="./../dashboard_resources/plus.png"></div>-->

                        <!--                        </div>-->
                        <div class="row mt-2">
                            <div class="col-1 offset-11"><img @click="showModalcost=true,addlevel2=true,addlevel1=false" class="hw-4 mr-3" src="./../dashboard_resources/plus.png"></div>
                        </div>
                        <div class="row mt-5 f-2">

                            <div class="col-2 offset-9">
                                <p class="text-muted">Total</p>
                                <input type="text" disabled :value="total_lev2" class="form-control">
                            </div>


                        </div>
                        <!--                        <div class="row mt-5" style="font-size: 20px">-->
                        <!--                            <div class="col-4" style="margin-left:10%;">-->
                        <!--                            </div>-->
                        <!--                            <div class="col-2"></div>-->
                        <!--                            <div class="col-1"></div>-->
                        <!--                            <div class="col-1"></div>-->
                        <!--                            <div class="col-2"> <p style="color: grey;margin-left: -10%;">Total</p></div>-->


                        <!--                        </div>-->

                        <!--                        <div class="row">-->
                        <!--                            <div class="col-5"></div>-->

                        <!--                            <div class="col-2 " style="margin-left: 3.3%;"></div>-->
                        <!--                            <div class="col-1" style="margin-left: -2%;"></div>-->
                        <!--                            <div class="col-1" style="margin-left: -2%;"></div>-->
                        <!--                            <div class="col-2" style="margin-left: -1%;">-->
                        <!--                                <input type="text" disabled :value="total_lev2" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>-->

                        <!--                        </div>-->
                        <div class="row mt-5">
                            <div class="col-4 offset-5">
                                <div class="row">
                                    <div class="col-12">
                                        <p class="text-muted">
                                            Fixed
                                            <label class="switch">
                                                <input type="checkbox" v-model="meta.markup2.percent">
                                                <span class="slider round"></span>
                                            </label>
                                            Percent
                                            (Markup)
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div class="col-2">
                                <p class="text-muted">Selling Price</p>

                            </div>


                        </div>
                        <div class="row">

                            <div v-if="meta.markup2.percent" class="col-2 offset-5">
                                <input min="0" @keypress="isNumberpercent($event)" v-model="meta.markup2.value" type="number" class="form-control"><span class="p-a per">%</span>
                            </div>
                            <div class="col-2 offset-5" v-else><input  @keypress="isNumber($event)" v-model="meta.markup2.value" type="number" class="form-control"></div>




                            <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" class="form-control"></div>-->
                            <div class="col-2 offset-2">
                                <input :value="total_sp2" disabled type="text" class="form-control">

                            </div>

                        </div>
                        <!--                        <div class="row mt-5" style="font-size: 20px">-->
                        <!--                            <div class="col-5" style="margin-left:10%;">-->
                        <!--                            </div>-->


                        <!--                            <div class="col-3"><p style="color: grey;margin-left: -2%;">-->
                        <!--                                Fixed-->
                        <!--                                <label class="switch">-->
                        <!--                                    <input type="checkbox" v-model="meta.markup2.percent">-->
                        <!--                                    <span class="slider round"></span>-->
                        <!--                                </label>-->
                        <!--                                Percent-->
                        <!--                                (Markup)</p></div>-->
                        <!--                            <div class="col-2"> <p style="color: grey;margin-left: -10%;">Selling Price</p></div>-->


                        <!--                        </div>-->

                        <!--                        <div class="row">-->
                        <!--                            <div class="col-6"></div>-->

                        <!--                            <div class="col-1 " style="margin-left: 1.3%;"></div>-->


                        <!--                            <div v-if="meta.markup2.percent" class="col-2" style="margin-left: -2%;"><input  @keypress="isNumberpercent($event)" v-model="meta.markup2.value" type="number" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:80%;height:40px;">%</div>-->
                        <!--                            <div v-else class="col-2" style="margin-left: -2%;"><input  @keypress="isNumber($event)" v-model="meta.markup2.value" type="number" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>-->

                        <!--                            <div class="col-2" style="margin-left: -1%;">-->
                        <!--                                <input disabled type="text" :value="total_sp2" disabled style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>-->

                        <!--                        </div>-->



                        <div class="row" v-if="license.cost_sheet">
                            <div class="col-1 offset-10"><button v-if="submit" class="button-css" @click="submitForm" style="margin-left: -11%;">Submit</button></div>
                            <div class="col-1"><button v-if="submit && license.post_booking_app" class="button-css" @click="submitForm3" >Submit & Activate</button></div>
                        </div>
                    </div>

                    <!--                    Interaction History-->
                    <div v-show="intraction" class="query-content f-2"  :class="[ intraction ? 'activedev' : 'hidedev' ]">

                        <badger-accordion ref="myAccordion">
                            <badger-accordion-item v-for="(interact,name) in meta.interactions">


                                <template slot="header"><button class="btn btn-light b-1-5 f-1-8" >{{ name }}</button></template>
                                <template slot="content">
                                    <div v-for="int in interact ">
                                        <div class=" fluid-container">
                                            <div class="row badger-div pl-5">
                                                <div class="col-9 offset-2"><p class="f-2 ml-n4">{{int['title']}}</p></div>
                                                <div class="col-2 text-center"><img id="hw-5-5" src="./../dashboard_resources/quotation.png" class="mt-3"></div>
                                                <div class="col-8 border bg-white f-1-8">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <p>{{int['time'] | timeonly }}</p>
                                                            <p>{{int['remark']}} by {{int['agent']}}</p>
                                                        </div>
                                                        <div class="col-lg-6 text-right mt-4 text-success">
                                                            <p class="mt-2">{{int['status']}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </template>
                            </badger-accordion-item>


                        </badger-accordion>
                    </div>



                </div>

            </div>

        </section>

        <div v-if="errormodal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" @click="errormodal=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="modal-body">
                                    <h2>Kindly fill following Fields with the valid data</h2>
                                    <div v-for="error in errors" class="alert alert-danger">
                                        <strong>{{error}}</strong>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div v-if="preview===true">
            <transition name="modal">
                <div class="modal-mask modal_preview">
                    <div class="modal-wrapper">
                        <div class="modal-dialog " style="max-width: 95% !important">
                            <div class="modal-content" style="height: 600px;overflow-x: hidden;overflow-y: scroll">
                                <div class="modal-header border-0 border-dotted">
                                    <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                        <div class="row">
                                            <div class="col-10">
                                                <h1>Preview</h1>
                                            </div>
                                            <div class="col-2 text-right">
                                                <button type="button" class="close f-2-5"  @click="preview=false">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div class="modal-body" style="">
                                    <div class="container-fluid c-grey">
                                        <div class="row no-gutters">



                                            <div  class="container-fluid"  :style="{ 'background-image': 'url('+background_url+')'}" style="background-repeat: no-repeat;background-size: 100% 100%;padding: 20px;background-size: cover;">

                                                <div class="col-md-12 form-group" style="">

                                                    <div v-if="form_preview.banner" class="container-fluid" :style="{ 'background-image': 'url('+form_preview.banner+')'}" style=" background-repeat: no-repeat;background-size: 100% 100%; height: 200px;">

                                                    </div>

                                                    <div class="col-md-12 form-group header_footer" style="">


                                                        <h2 class="header_footer">{{  form_preview.header}}</h2>
                                                    </div>

                                                    <div   v-for="(tag,index) in form_preview.form_html" style="pointer-events: none"

                                                           :class="(
                                                    tag.key==='dob'
                                                    || tag.key==='foodpref'
                                                    || tag.key==='marriage_anni'
                                                    || tag.key==='allergy'
                                                    || tag.key==='pass_photo'
                                                    || tag.key==='visa'
                                                    || tag.key==='vouc'
                                                    || tag.key==='insu'
                                                    || tag.key==='other'
                                                    || tag.key==='text' && tag.custom==1
                                                    || tag.key==='date' && tag.custom==1
                                                    || tag.key==='options' && tag.custom==1
                                                    || tag.key==='file' && tag.custom==1
                                                    )?'col-md-6':'col-md-12'"
                                                    >


                                                        <!--                                 {type:'DOB',code:' -->
                                                        <div class="col-md-12 bg-white content_div all-scroll" v-if="tag.key==='dob'" >

                                                            <label for="passport_image">Date Of Birth</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>

                                                            <div class="row" style="margin-top: 10px;margin-bottom: 5px;">
                                                                <div class="col-md-5 no_event" >
                                                                    <input style="pointer-events:none" type="date" class="form-control input_field_design" v-model="tag.value" id="dob" name="DOB" placeholder="Enter DOB" />
                                                                </div>
                                                                <div class="col-md-1 " >

                                                                </div>
                                                                <div class="col-md-6 ">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>




                                                        </div>
                                                        <!--                                 {type:'Food Prefrences',code:'-->
                                                        <div class="col-md-12 bg-white content_div all-scroll" v-if="tag.key==='foodpref'"  >

                                                            <label for="schedule_date">Food Prefrences</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>



                                                            <div class="row" style="margin-top: 10px;margin-bottom: 5px;">
                                                                <div class="col-md-5 no_event" >
                                                                    <input style="pointer-events:none" type="text" class="form-control input_field_design" id="food_pref" name="food_pref" v-model="tag.value"  placeholder="Enter Your Food Prefrences" >
                                                                </div>
                                                                <div class="col-md-1 " >

                                                                </div>
                                                                <div class="col-md-6 ">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>



                                                        </div>
                                                        <!--                                 {type:'Marriage Anniversary',code:'-->
                                                        <div class="col-md-12 bg-white content_div all-scroll" v-if="tag.key==='marriage_anni'"  >


                                                            <label for="schedule_date">Marriage Anniversary</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>



                                                            <div class="row" style="margin-top: 10px;margin-bottom: 5px;">
                                                                <div class="col-md-5 no_event">
                                                                    <input  style="pointer-events:none" type="date" class="form-control input_field_design" id="anniversary" v-model="tag.value"  name="anniversary" placeholder="Enter Your Anniversary Date" >
                                                                </div>
                                                                <div class="col-md-1 " >

                                                                </div>
                                                                <div class="col-md-6 ">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>
                                                        </div>
                                                        <!--                                 {type:'Allergies',code:'-->
                                                        <div class="col-md-12 bg-white content_div all-scroll" v-if="tag.key==='allergy'"  >
                                                            <label for="schedule_date">Food Allergies</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>

                                                            <div class="row" style="margin-top: 10px;margin-bottom: 5px;">
                                                                <div class="col-md-5 no_event" >
                                                                    <input  type="text" class="form-control input_field_design" v-model="tag.value"  id="food_allergies" name="food_allergies" style="pointer-events:none"  placeholder="Your Food Allergies" >
                                                                </div>
                                                                <div class="col-md-1 " >

                                                                </div>
                                                                <div class="col-md-6 ">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>

                                                        </div>
                                                        <!--custom-->
                                                        <div  v-if="tag.key==='text' && tag.custom==1" class="col-md-12 bg-white all-scroll content_div" >
                                                            <label for="custom_filed">{{tag.ques}}</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>


                                                            <div class="row content_row">
                                                                <div class="col-md-5 no_event">
                                                                    <input type="text" class="form-control input_field_design" v-model="tag.value"  placeholder="Enter Text"
                                                                    >
                                                                </div>
                                                                <div class="col-md-1 " >

                                                                </div>
                                                                <div class="col-md-6 ">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>



                                                        </div>

                                                        <div  v-if="tag.key==='date' && tag.custom==1" class="col-md-12 bg-white all-scroll content_div" >
                                                            <label for="custom_filed">{{tag.ques}}</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>

                                                            <div class="row content_row">
                                                                <div class="col-md-5 no_event">
                                                                    <date-picker
                                                                        v-model="tag.value"
                                                                        :config="$root.dpconfigDate"
                                                                        name="date"
                                                                        class="form-control input_field_design"
                                                                        style="pointer-events:none"
                                                                        placeholder="dd/mm/yyyy"
                                                                    >
                                                                    </date-picker>
                                                                </div>
                                                                <div class="col-md-1 " >

                                                                </div>
                                                                <div class="col-md-6 ">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div   v-if="tag.key==='options' && tag.custom==1" class="col-md-12 bg-white all-scroll content_div" >
                                                            <label for="options" >{{tag.ques}}</label><label v-if="tag.require" class="text-danger">*</label><br>


                                                            <div class="row content_row">
                                                                <div class="col-md-5 no_event">
                                                                    <select class="form-control" v-model="tag.value" style="pointer-events:none">
                                                                        <option v-for="op in tag.option" :value="op.key">{{op.key}}</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-1 " >

                                                                </div>
                                                                <div class="col-md-6 ">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>



                                                        </div>

                                                        <!--                                 {type:'Passport Size Image',code:'-->
                                                        <div class="col-md-12 bg-white all-scroll content_div" v-if="tag.key==='pass_photo'"  >
                                                            <label for="passport_image">Passport Size Image</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>

                                                            <div class="col-md-12 " v-if="tag.value===''" >

                                                                <div class="row">
                                                                    <div class="col-md-5 no_event" >
                                                                        <label class="file_hidden text-black cursor mt-3 f-1-6" style="background:#ecf0f5 !important; ">
                                                                            <i class="fa fa-upload">  Upload</i>
                                                                            <input type="file" @change="uploadfileform($event,'pass_photo_form',index)"
                                                                                   class="form-control input_field_design2" id="passport_img" name="passport_img"
                                                                                   style=" display:none !important;">
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-1 m_t1" >

                                                                    </div>
                                                                    <div class="col-md-6 m_t1">
                                                                        <div class="row">
                                                                            <div class="col-md-7 fields_div">| Mandatory</div>

                                                                            <div class="col-md-4" >

                                                                                <label class="container_box">
                                                                                    <input type="checkbox" v-model="tag.require">
                                                                                    <span class="checkmark_box"></span>
                                                                                </label>

                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 " v-else>
                                                                <a target="_blank" :href="tag.value">File Uploaded</a>
                                                            </div>




                                                        </div>
                                                        <!--                                 {type:'Visa',code:'-->
                                                        <div class="col-md-12 bg-white all-scroll content_div" v-if="tag.key==='visa'"  >
                                                            <label for="visa_image">Visa Doc</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>

                                                            <div class="col-md-12 " v-if="tag.value===''" >

                                                                <div class="row">
                                                                    <div class="col-md-5 no_event" >
                                                                        <label class="file_hidden text-black cursor mt-3 f-1-6" style="background:#ecf0f5 !important; ">
                                                                            <i class="fa fa-upload">  Upload</i>
                                                                            <input type="file" @change="uploadfileform($event,'visa_form',index)"
                                                                                   class="form-control input_field_design2" id="visa_img" name="visa_img"
                                                                                   style=" display:none !important;">
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-1 m_t1" >

                                                                    </div>
                                                                    <div class="col-md-6 m_t1">
                                                                        <div class="row">
                                                                            <div class="col-md-7 fields_div">| Mandatory</div>

                                                                            <div class="col-md-4" >

                                                                                <label class="container_box">
                                                                                    <input type="checkbox" v-model="tag.require">
                                                                                    <span class="checkmark_box"></span>
                                                                                </label>

                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 " v-else>
                                                                <a target="_blank" :href="tag.value">File Uploaded</a>
                                                            </div>

                                                        </div>
                                                        <!--                                 {type:'Voucher',code:'-->
                                                        <div class="col-md-12 bg-white all-scroll content_div" v-if="tag.key==='vouc'"  >
                                                            <label for="voucher_image">Voucher Doc</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>

                                                            <div class="col-md-12 " v-if="tag.value===''" >

                                                                <div class="row">
                                                                    <div class="col-md-5 no_event">
                                                                        <label class="file_hidden text-black cursor mt-3 f-1-6" style="background:#ecf0f5 !important; ">
                                                                            <i class="fa fa-upload">  Upload</i>
                                                                            <input type="file" @change="uploadfileform($event,'voucher_form',index)"
                                                                                   class="form-control input_field_design2" id="voucher_img" name="voucher_img"
                                                                                   style="display:none !important;">
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-1 m_t1" >

                                                                    </div>
                                                                    <div class="col-md-6 m_t1">
                                                                        <div class="row">
                                                                            <div class="col-md-7 fields_div">| Mandatory</div>

                                                                            <div class="col-md-4" >

                                                                                <label class="container_box">
                                                                                    <input type="checkbox" v-model="tag.require">
                                                                                    <span class="checkmark_box"></span>
                                                                                </label>

                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 " v-else>
                                                                <a target="_blank" :href="tag.value">File Uploaded</a>
                                                            </div>

                                                        </div>
                                                        <!--                                 {type:'Insurance',code:'-->
                                                        <div class="col-md-12 bg-white all-scroll content_div" v-if="tag.key==='insu'"  >
                                                            <label for="insurance_image">Insurance Doc</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>


                                                            <div class="col-md-12 " v-if="tag.value===''" >

                                                                <div class="row">
                                                                    <div class="col-md-5 no_event" >
                                                                        <label class="file_hidden text-black cursor mt-3 f-1-6" style="background:#ecf0f5 !important; ">
                                                                            <i class="fa fa-upload">  Upload</i>
                                                                            <input type="file" @change="uploadfileform($event,'insu_form',index)"
                                                                                   class="form-control input_field_design2" id="insurance_img" name="insurance_img"
                                                                                   style=" display:none !important;">
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-1 m_t1" >

                                                                    </div>
                                                                    <div class="col-md-6 m_t1">
                                                                        <div class="row">
                                                                            <div class="col-md-7 fields_div">| Mandatory</div>

                                                                            <div class="col-md-4" >

                                                                                <label class="container_box">
                                                                                    <input type="checkbox" v-model="tag.require">
                                                                                    <span class="checkmark_box"></span>
                                                                                </label>

                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 " v-else>
                                                                <a target="_blank" :href="tag.value">File Uploaded</a>
                                                            </div>

                                                        </div>
                                                        <!--                                 {type:'Other',code:'-->
                                                        <div class="col-md-12 bg-white all-scroll content_div" v-if="tag.key==='other'"  >
                                                            <label for="other_image">Other Doc</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>


                                                            <div class="col-md-12 " v-if="tag.value===''" >

                                                                <div class="row">
                                                                    <div class="col-md-5 no_event" >
                                                                        <label class="file_hidden text-black cursor mt-3 f-1-6" style="background:#ecf0f5 !important; ">
                                                                            <i class="fa fa-upload">  Upload</i>
                                                                            <input type="file" @change="uploadfileform($event,'other_form',index)"
                                                                                   class="form-control input_field_design2" id="other_img" name="other_img"
                                                                                   style=" display:none !important;">
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-1 m_t1" >

                                                                    </div>
                                                                    <div class="col-md-6 m_t1">
                                                                        <div class="row">
                                                                            <div class="col-md-7 fields_div">| Mandatory</div>

                                                                            <div class="col-md-4" >

                                                                                <label class="container_box">
                                                                                    <input type="checkbox" v-model="tag.require">
                                                                                    <span class="checkmark_box"></span>
                                                                                </label>

                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 " v-else>
                                                                <a target="_blank" :href="tag.value">File Uploaded</a>
                                                            </div>


                                                        </div>

                                                        <!--custom-->

                                                        <div v-if="tag.key==='file' && tag.custom==1" class="col-md-12 bg-white all-scroll content_div" >
                                                            <label for="custom_filed" >{{tag.ques}}</label><label v-if="tag.require" class="text-danger">*</label><br>

                                                            <div class="col-md-12 " v-if="tag.value===''" >

                                                                <div class="row">
                                                                    <div class="col-md-5 no_event">
                                                                        <label class="file_hidden text-black cursor mt-3 f-1-6" style="background:#ecf0f5 !important; ">
                                                                            <i class="fa fa-upload">  Upload</i>
                                                                            <input type="file" @change="uploadfileform($event,'file_form',index)"
                                                                                   class="form-control input_field_design2" style=" display:none !important;">
                                                                        </label>
                                                                    </div>
                                                                    <div class="col-md-1 m_t1" >

                                                                    </div>
                                                                    <div class="col-md-6 m_t1">
                                                                        <div class="row">
                                                                            <div class="col-md-7 fields_div">| Mandatory</div>

                                                                            <div class="col-md-4" >

                                                                                <label class="container_box">
                                                                                    <input type="checkbox" v-model="tag.require">
                                                                                    <span class="checkmark_box"></span>
                                                                                </label>

                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 " v-else>
                                                                <a target="_blank" :href="tag.value">File Uploaded</a>
                                                            </div>


                                                        </div>

                                                        <!--                                 {type:'checkboxcustom',code:'-->
                                                        <div  v-if="tag.key==='checkbox' && tag.custom==1" class="col-md-12 bg-white all-scroll content_div" >
                                                            <label for="custom_filed">{{tag.ques}}</label><label v-if="tag.require" class="text-danger">*</label><br>


                                                            <div class="row content_row">
                                                                <div class="col-md-12 no_event">
                                                                    <div class="row">
                                                                        <div class="col-md-4" v-for="op in tag.option">
                                                                            <label class="container_box">{{op.key}}
                                                                                <input type="checkbox" v-model="tag.value" :value="op.key"   style="pointer-events:none" >
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-2 offset-7" >

                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>


                                                        </div>

                                                        <div v-if="tag.key==='radio' && tag.custom==1"  class="col-md-12 bg-white all-scroll content_div" >
                                                            <label for="radio" >{{tag.ques}}</label><label v-if="tag.require" class="text-danger">*</label><br>

                                                            <div class="row content_row">
                                                                <div class="col-md-12 no_event">
                                                                    <div class="row">
                                                                        <div class="col-md-4" v-for="op in tag.option">
                                                                            <label class="container_box">{{op.key}}
                                                                                <input type="radio" v-model="tag.value" :value="op.key"   style="pointer-events:none" >
                                                                                <span class="checkmark_box" style="border-radius:50px;"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-2 offset-7" >

                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>


                                                        </div>
                                                        <!--                                 {type:'textarea custom',code:'-->
                                                        <div v-if="tag.key==='textarea' && tag.custom==1" class="col-md-12 bg-white all-scroll content_div" >
                                                            <label for="custom_filed">{{tag.ques}}</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>

                                                            <textarea class="field_class" v-model="tag.value" cols="100" rows="3" style="pointer-events: none; width: 100%; font-size: 16px;background: #ecf0f5;"></textarea>
                                                            <div class="row">
                                                                <div class="col-md-2 offset-7" >

                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>





                                                        </div>
                                                        <!--                                 {type:'Passport',code:'-->
                                                        <div class="col-md-12 bg-white content_div all-scroll"  v-if="tag.key==='pass'"  >
                                                            <label for="passport">Passport</label>
                                                            <label v-if="tag.require" class="text-danger">*</label><br>

                                                            <div class="row" style="padding:20px;background-color:#fff;"><div class="col-md-2 " ><label for="passport">Exp. Date</label>
                                                                <br><input v-model="tag.value.exp_date" type="date" class="form-control input_field_design" id="passport_date" name="passport_date" placeholder="Exp. Date" style="pointer-events:none"  ></div><div class="col-md-3 "><label for="passport">First Name</label>
                                                                <br><input v-model="tag.value.name_first"  type="text" class="form-control input_field_design" id="passport_first_name" name="passport_first_name" placeholder="Given Name" style="pointer-events:none"  ></div><div class="col-md-3 "><label for="passport">Last Name</label>
                                                                <br><input v-model="tag.value.name_last"  type="text" class="form-control input_field_design" id="passport_last_name" name="passport_last_name" placeholder="Sur Name" style="pointer-events:none"  ></div><div class="col-md-2 "><label for="passport">Passport No.</label>
                                                                <br><input v-model="tag.value.passportno"  type="text" class="form-control input_field_design" id="passport_no" name="passport_no" placeholder="Passport No." style="pointer-events:none"  ></div>
                                                                <div class="col-md-2 " v-if="tag.value.url===''" style="pointer-events:none"><label for="passport"></label>

                                                                    <label class="file_hidden text-white mt-3 f-1-6">
                                                                        <i class="fa fa-upload">  Upload</i>
                                                                        <input type="file" @change="uploadfileformpass($event,'pass',index)" class="form-control no_event input_field_design2" id="passport_image" name="passport_image" style="display:none !important;"  placeholder="Passport Image">
                                                                    </label>


                                                                </div>
                                                                <div class="col-md-2 "  v-else><label for="passport">Passport File</label><br>

                                                                    <a :href="tag.value.url" target="_blank">File Uploaded</a>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-2 offset-7" >

                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div v-if="tag.key==='passport' && tag.custom==1" class="col-md-12 bg-white all-scroll content_div" >
                                                            <label   >{{tag.ques}} Passport Details</label><label v-if="tag.require" class="text-danger">*</label>

                                                            <br>
                                                            <div class="row" style="padding:20px;background-color:#fff;">
                                                                <div class="col-md-2 " ><label for="exp">Exp. Date</label>
                                                                    <br><input v-model="tag.value.exp_date" style="pointer-events:none"  type="date" class="form-control input_field_design" placeholder="Exp. Date" ></div>
                                                                <div class="col-md-3 "><label for="fn">First Name</label><br>
                                                                    <input v-model="tag.value.name_first" style="pointer-events:none"  type="text" class="form-control input_field_design" placeholder="Given Name" ></div>
                                                                <div class="col-md-3 "><label for="ln">Last Name</label><br>
                                                                    <input v-model="tag.value.name_last" style="pointer-events:none"  type="text" class="form-control input_field_design"  placeholder="Sur Name" ></div>
                                                                <div class="col-md-2 "><label for="no">Passport No.</label><br>
                                                                    <input  v-model="tag.value.passportno" style="pointer-events:none" type="text" class="form-control input_field_design"  placeholder="Passport No." ></div>
                                                                <div class="col-md-2 " v-if="tag.value.url===''" style="pointer-events:none"><label for="passport"></label>

                                                                    <label class="file_hidden text-white mt-3 f-1-6">
                                                                        <i class="fa fa-upload">  Upload</i>
                                                                        <input type="file" @change="uploadfileformpass($event,'pass',index)" class="form-control no_event input_field_design2" id="passport_image" name="passport_image" style="display:none !important;"  placeholder="Passport Image">
                                                                    </label>


                                                                </div>
                                                                <div class="col-md-2 "  v-else><label for="passport">Passport File</label><br>

                                                                    <a :href="tag.value.url" target="_blank">File Uploaded</a>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-md-2 offset-7" >

                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="row">
                                                                        <div class="col-md-7 fields_div">| Mandatory</div>

                                                                        <div class="col-md-4" >

                                                                            <label class="container_box">
                                                                                <input type="checkbox" v-model="tag.require">
                                                                                <span class="checkmark_box"></span>
                                                                            </label>

                                                                        </div>
                                                                    </div>


                                                                </div>

                                                            </div>

                                                        </div>



                                                    </div>

                                                    <div class="col-md-12 form-group header_footer" style="">


                                                        <h2 class="header_footer">{{  form_preview.footer}}</h2>
                                                    </div>

                                                    <div class="col-md-12 form-group text-center mt-5" style="">
                                                        <button disabled class="btn btn-lg btn-success f-1-8">Submit</button>
                                                    </div>
                                                </div>

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
        <div v-if="invalid_mem_modal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" >
                            <div class="modal-content">
                                <div class="modal-header">

                                    <h2 v-if="show_excel_button" class="modal-title">Invalid Members</h2>
                                    <h2 v-else class="modal-title">Something Went Wrong</h2>
                                    <button type="button" class="close f-2-5" @click="invalid_mem_modal=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="modal-body">

                                    <div class="row" style="padding: 20px">

                                        <div class="col-md text-center">
                                            <download-excel
                                                class   = "btn btn-default"
                                                v-if="show_excel_button"
                                                :data   = "invalid_member_data"
                                                :fields = "json_fields2"
                                                worksheet = "My Worksheet"
                                                name    = "invalid_members.xls"

                                            >
                                                <i class="fa fa-download f-2" alt="Excel" ></i>
                                                <br><p class="extension_title">Download Excel Dump</p>
                                            </download-excel>


                                        </div>


                                        <p>Note: {{upload_member_status}}</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </section>
</template>


<script>
    // import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    import { mapGetters, mapActions } from 'vuex'
    import LocationPlaceComponent from '../../cruds/Locationsplace'
    import LocationComponent from '../../cruds/Locations'
    import HotelComponent from '../../cruds/hotelcompbooking'
    import DayplanComponent from '../../cruds/dayplancompgroup'
    import draggable from 'vuedraggable'
    import {FormWizard, TabContent,WizardButton,WizardStep} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    import { VueTelInput } from 'vue-tel-input'
    import uploadfile from '../../../mixins/uploadfile'
    import built_interaction from '../../../mixins/builtinteraction'
    import ColorPicker from 'vue-color-picker-wheel';


    import moment from 'moment-timezone'
    import PersonaliseApp from "./Components/PersonaliseApp";
   


    export default {
        data() {
            return {
                prog:false,
                transitionDuration:100,
                animateDuration:"loop 17000 100",
                preview:false,
                form_preview:[],
                background_url:'',
                errors:[],
                errormodal:false,
                submit:true,
                tour_ob: '',
                tourlocation: [],
                days: 1,
                showModal: false,
                locations: [],
                locationd: {id: '', name: '', days: ''},
                make_tour: 1,
                select_tour: 1,

                meta_extra_bed: '',
                meta_transport: '',
                meta_source: '',
                meta_flightprice: '',
                meta_flight: '',
                meta_welcome_mail: '',
                meta_incl_ex: '',
                meta_closuer: '',
                meta_exp_cost: [],
                showModalcost: false,
                addlevel1: false,
                addlevel2: false,
                temp_cost: {
                    "type": "",
                    "title": "",
                    "qty": "",
                    "unit": "",
                    "price": "",
                    "ref": ""
                },
                total1: '',
                total2: '',
                bindProps: {
                    mode: "international",
                    defaultCountry: "INR",
                    disabledFetchingCountry: false,
                    disabled: false,
                    disabledFormatting: false,
                    placeholder: "Enter a phone number",
                    required: false,
                    enabledCountryCode: true,
                    enabledFlags: true,
                    preferredCountries: ["AU", "BR"],
                    onlyCountries: [],
                    ignoredCountries: [],
                    autocomplete: "off",
                    name: "telephone",
                    maxLen: 25,
                    wrapperClasses: "",
                    inputClasses: "",
                    dropdownOptions: {
                        disabledDialCode: false
                    },
                },

                summ: true,
                hotel: false,
                day: false,
                exe: false,
                intraction: false,
                cost: false,
                up: false,
                trav: false,
                train: false,
                mail: false,
                createlist:false,
                embed:false,
                live:false,
                visa:false,

                accordion:false,
                accordion2:false,
                accordion3:true,


                remarkk: false,
                newremark1: '',
                newremark: '',
                create: true,
                createfull: false,

                checked: true,
                days_count: 0,
                showerror: false,
                refresh_cost: true,
                save_tour: false,
                tour_name: '',
                localtourdata: {},
                tourlocalarray: [],
                airport_codes:'',
                interaction_visit:0,
                license:{},
                doc_req_list:[],
                add_doc_tag:'',
                agency_logo:'',
                csvmodal:false,
                forms_data:[],
                forms_data_modal:[],
                selected_form:null,
                form_url:'',
                loading2:false,
                form_id:'',
                all_member_upload_sheet2:[],
                json_data:'',
                csv_active_option:0,
                excel_file:'',
                err_passport:[],
                invalid_member_data:[],
                json_fields2: {
                    'Traveller_name': 'Traveller_name',
                    'Email':'Email',
                    'Phone':'Phone',
                    'Remark':'remark',

                },
                invalid_mem_modal:false,
                show_excel_button:false,
                file_upload_status:0,
                upload_member_status:'',



                // Code...

             }
        },
        // filters: {
        //
        // }

        filters: {

            moment: function (value) {
                if (value) {
                    return moment.unix(value).format("MM-DD-YYYY / h:mm a")
                }
            },
            dateonly: function (value) {
                if (value) {
                    return moment.unix(value).format("MM-DD-YYYY")
                }
            },
            timeonly: function (value) {
                if (value) {
                    return moment.unix(value).format("h:mm a")
                }
            },
        }
        ,
        computed: {
            ...mapGetters('GroupsSingle', ['all_member_upload_sheet','csvupload_reg','csvupload','item', 'loading', 'tourAll', 'places', 'cityid', 'hotels', 'cityAll', 'meta', 'tourdata','meta_form_id']),


            totalcost() {

                if (Number(this.meta.sellingprice1) > 0) {
                    if (Number(this.meta.sellingprice2) > 0) {

                        return Number(this.meta.sellingprice1) + Number(this.meta.sellingprice2);
                    } else {
                        return Number(this.meta.sellingprice1)
                    }


                } else if (Number(this.meta.sellingprice2) > 0) {
                    return Number(this.meta.sellingprice2)
                } else {
                    return "Incomplete data"
                }

            },

            total_lev1() {
                this.total1 =0;
                if(!_.isEmpty(this.meta.meta_exp_cost)){
                    this.meta.meta_exp_cost.forEach( (dataObj) => {
                        this.total1 =this.total1+dataObj.price
                    })
                }

                if(isNaN(parseFloat(this.total1))){
                    return this.total1='';
                }
                else {
                    return this.total1;
                }
            },
            total_lev2() {
                this.total2 =0;
                if(!_.isEmpty(this.meta.meta_exp_cost)){
                    this.meta.meta_exp_costflight.forEach( (dataObj) => {
                        this.total2 =this.total2+dataObj.price
                    })
                }
                if(isNaN(parseFloat(this.total2))){
                    return this.total2='';
                }
                else {

                    return this.total2;
                }

            },
            total_sp1() {
                if (this.meta.markup1.value=='' || this.meta.markup1.value==null) {
                    return    '';
                }
                else if(!isNaN(parseFloat(this.total1)) && this.total1>0){
                    if(this.meta.markup1.value){

                        if(this.meta.markup1.percent ){
                            this.meta.sellingprice1=((this.total1*this.meta.markup1.value)/100)+this.total1
                        }
                        else {
                            this.meta.sellingprice1=parseInt(this.meta.markup1.value)+parseInt(this.total1)

                        }

                    }
                    return    this.meta.sellingprice1
                }
                else {

                    return '';
                }


            },
            total_sp2() {
                if (this.meta.markup2.value=='' || this.meta.markup2.value==null) {
                    return    '';
                }
                else if(!isNaN(parseFloat(this.total2)) && this.total2>0){
                    if(this.meta.markup2.value){

                        if(this.meta.markup2.percent ){
                            this.meta.sellingprice2=((this.total2*this.meta.markup2.value)/100)+this.total2
                        }
                        else {
                            this.meta.sellingprice2=parseInt(this.meta.markup2.value)+parseInt(this.total2)

                        }

                    }
                    return    this.meta.sellingprice2
                }
                else {
                    return '';
                }


            }
        },
        mounted() {


            this.currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '');
            // this.item.meals_supplement="test";
            this.item.booking_id = 'GRP-' + document.querySelector("meta[name='user-id']").getAttribute('content') + '-' + this.currentDate + '-' + Math.floor((Math.random() * (999 - 100 + 1) + 100))
            this.item.status = 1;
            // this.meta.remarks.time=
            if (_.isEmpty(this.meta.meta_exp_costflight)) {

                this.meta.meta_exp_costflight.push({
                    "type": "flight",
                    "title": "",
                    "qty": "",
                    "unit": "",
                    "price": "",
                    "ref": "flt",
                    "fix": "no"
                });

            }


        },
        created() {
            var base_url = window.location.origin;
            this.background_url=base_url+'/dashboard_resources/background_doc.png';

            this.fetchCityAll();
            this.fetchTourAll();
            axios.get('/api/v1/form_ids')
                .then(response =>{
                    this.forms_data=response.data.data;
                    // console.log(this.forms_data);
                });

            axios.get('/api/v1/forms')
                .then(response =>{
                    this.forms_data=response.data.data;
                    // console.log(this.forms_data);
                });
            this.agency_logo=document.querySelector("meta[name='agency-logo']").getAttribute('content');
            let form = new FormData();
            var agency_id=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'))
            form.set('agency_id', agency_id.id);
            axios.post('/api/webservices/document_tags', form)
                .then(response => {
                    response.data.forEach((dataObj) => {

                        this.doc_req_list.push(dataObj.value)
                    });
                });

            this.meta.query_feel=3

            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="lms_agent"){
                var agency_id= JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id
            }
            else if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency" ||
                document.querySelector("meta[name='user-role']").getAttribute('content')==="Administrator (can create other users)" ){

                var agency_id= JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content'))

            }
            axios.get('/api/v1/user/license/' + agency_id)
                .then(response => {
                    this.license=JSON.parse(response.data.data[0].meta_value);
                })
            this.setmeta_interactions(built_interaction("Itinerary Created","Click Action","Done","Self"))



        },
        watch: {
            "item.phone": function(newVal, oldVal) {

                if(typeof this.item.email !== "undefined" && this.item.email.length>10 ){
                    this.get_trav();
                }
            },
            "item.email": function(newVal, oldVal) {

                if(typeof this.item.phone !== "undefined" && this.item.phone.length>10 ){
                    this.get_trav();
                }

            },
            "item.full_name": function(newVal, oldVal) {

                if ((typeof this.item.phone !== "undefined" && this.item.phone.length > 10) || (typeof this.item.email !== "undefined" && this.item.email.length > 10)) {
                    this.get_trav();
                }



            },
            "errormodal": function() {
                if(!this.errormodal){
                    this.errors=[];
                }

            },
            "locations": function () {
                this.inmodalnew();

            },
            "meta.meta_flight": function () {
                if (this.meta.meta_flight.length < 1) {

                    this.meta.meta_flight = [{"date": "", "dep_code": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":""}]
                }

            },
            "meta.meta_passport": function () {
                if (this.meta.meta_passport.length < 1) {

                    this.meta.meta_passport = [{"exp_date": "", "name_first": "", "name_last": "", "passportno": "", "url": ""}]
                }

            },


            "meta.meta_visa": function () {
                if (this.meta.meta_visa.length < 1) {

                    this.meta.meta_visa = [{"url": ""}]
                }

            },
            "meta.meta_voucher": function () {
                if (this.meta.meta_voucher.length < 1) {

                    this.meta.meta_voucher = [{"url": ""}]
                }

            },
            "meta.meta_insurance": function () {
                if (this.meta.meta_insurance.length < 1) {

                    this.meta.meta_insurance = [{"url": ""}]
                }

            },
            "meta.meta_other": function () {
                if (this.meta.meta_other.length < 1) {

                    this.meta.meta_other = [{"url": ""}]
                }

            },


            "item.tour_location": {

                handler(newval, oldVal) {
                    this.tourlocalarray=this.item.tour_location;
                    this.setdriver_pickup_date_time(this.item.driver_pick_up_time);
                    this.days_count = 0;

                    newval.forEach((dataObj) => {

                        // item.tour_location[index]['daynights']=parent(dataObj.days)+1
                        //     alert(dataObj.days);
                        this.days_count = Number(this.days_count) + Number(dataObj.days);
                        //  alert(this.days_count);
                    });
                    if (this.item.tour_cost.length < 1) {

                        this.item.tour_cost = [{'cost': '', 'type': ''}]
                    }


                },
                deep: true


            },
            "checked":function () {
                //   alert("in")
                this.item.tour_location.splice(0,this.item.tour_location.length)


            },
            "item.tour_cost": function () {

                if (this.item.tour_cost.length < 1) {

                    this.item.tour_cost = [{'cost': '', 'type': ''}]
                }
            },

            cost: function () {
                // console.log("cost");
                // console.log(this.item.tour_location);

                if (this.refresh_cost == true) {
                    // this.meta.meta_exp_cost=[]
                    this.item.tour_location.forEach((dataObj) => {
                        // console.log("hotel----");
                        console.log(dataObj);
                        if (dataObj.hotel.hotel_data !== null) {
                            if (typeof (dataObj.hotel.hotel_data.title) !== "undefined") {

                                console.log(dataObj.hotel.hotel_data.title);
                                this.meta.meta_exp_cost.push({
                                    "type": "hotel",
                                    "title": dataObj.hotel.hotel_data.title,
                                    "qty": "",
                                    "unit": "",
                                    "price": "",
                                    "ref": dataObj.id
                                });

                            }

                        }

                    });
                    if (this.meta.meta_transport) {

                        this.meta.meta_exp_cost.push({
                            "type": "transport",
                            "title": this.meta.meta_transport,
                            "qty": "",
                            "unit": "",
                            "price": "",
                            "ref": "transport",
                        });
                    }


                    var arr_cost = _.cloneDeep(this.meta.meta_exp_cost);

                    for (var j = 0, len = arr_cost.length; j < len; j++) {

                        for (var k = j + 1, lenn = arr_cost.length; k < lenn; k++) {

                            if (arr_cost[j]['ref'] == arr_cost[k]['ref'] && typeof (arr_cost[j]['ref']) !== "undefined" && typeof (arr_cost[k]['ref']) !== "undefined") {

                                arr_cost[j]['title'] = arr_cost[k]['title']
                                arr_cost[k] = {}
                            }

                        }

                    }


                    var newArray = arr_cost.filter(value => Object.keys(value).length !== 0);


                    this.meta.meta_exp_cost = newArray;


                    this.refresh_cost = false;
                    this.cost = true;
                }

                if(!_.isEmpty(this.meta.meta_flight) && this.meta.meta_flight[0].ticket!==""){

                    // alert("in")

                    this.meta.meta_flight.forEach( (dataObj1) => {
                        // alert("2")
                        var found="empty";
                        this.meta.meta_exp_costflight.forEach( (dataObj2) => {

                            if(dataObj2.fix===dataObj1.url){
                                //    alert("3")
                                found="found";
                            }

                        })

                        if(found!=="found"){
                            //  alert("in3")
                            if(!_.isEmpty(this.meta.meta_exp_costflight) && this.meta.meta_exp_costflight[0].title!==""){
                                this.meta.meta_exp_costflight.push({
                                    "type": "flight",
                                    "title": dataObj1.ticket,
                                    "qty": 1,
                                    "unit": "",
                                    "price": "",
                                    "rate": 1,
                                    "ref": "flt",
                                    "fix":dataObj1.url
                                })


                            }
                            else {
                                if(dataObj1.ticket!=='' && typeof dataObj1.ticket!=="undefined"){

                                    this.meta.meta_exp_costflight=[{
                                        "type": "flight",
                                        "title": dataObj1.ticket,
                                        "qty": 1,
                                        "unit": "",
                                        "price": "",
                                        "rate": 1,
                                        "ref": "flt",
                                        "fix":dataObj1.url
                                    }];
                                }


                            }

                        }
                        found="empty";
                    })


                }
            },
        },
        destroyed() {
            this.resetState()
        },
        methods: {
            ...mapActions('GroupsSingle', ['setmeta_interactionsfull','storeData', 'uploadFile', 'resetState', 'setBooking_id', 'setplaces', 'setFull_name', 'setEmail', 'setEmail2', 'setPhone', 'setActivated', 'setScore', 'setNo_of_adults', 'setNo_of_children', 'setAgency_id', 'setAgent_id', 'setMeal_day', 'setBill_pay', 'setBudget', 'setdriver_pickup_date_time', 'setdriver_pickup_date_time_updated', 'setDrop_address', 'setHandler_name', 'setHandler_no', 'setMeals_supplement', 'setMember_of_iti', 'setPackage_category', 'setPickup_address', 'setTotal_price', 'setPickup_location', 'setTour_cost', 'setSelected_car', 'setStatus', 'setSupplier_id', 'setTotal_room', 'setTraveller_id', 'setItinerary_places', 'setItinerary_places_time', 'setTour_id', 'setTour_name', 'setTour_location', 'fetchTourAll', 'fetchplace', 'fetchhotel', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setTotal_tour_days', 'fetchTourAll', 'fetchplace', 'fetchhotel', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setmeta_infant', 'setmeta_transport'
                , 'setmeta_source'
                , 'setmeta_flightprice'
                , 'setmeta_flight'
                , 'setmeta_welcome_mail','setmeta_registration_mail'
                , 'setmeta_incl_ex'
                , 'setmeta_closuer'
                , 'setTraveler_name',
                'setmeta_pickup_date',
                'setmeta_pickup_time',
                'setmeta_driver_name',
                'setmeta_driver_no',
                'setmoneycollect',
                'setmeta_transport_no',
                'setmeta_meta_visa',
                'setmeta_meta_passport',
                'setmeta_meta_voucher',
                'setmeta_meta_insurance',
                'setmeta_meta_other',
                'setmeta_interactions',
                'setcsvupload','setcsvupload_reg','setall_member_upload_sheet',
                'setmeta_exp_cost',
                'setmeta_exp_costflight',
                'setRemarkedit',
                'addnewtour', 'setRemarks', 'setRemark', 'setEmail_second', 'setNote', 'setMessageidd', 'setQuery_feel', 'setScore_new', 'setTour_cost_tax','setmeta_mail_format','setmeta_form_id']),
            validate_passport(index){


                if(this.meta.meta_passport[index].exp_date==''){
                    alert("Kindly Entre Expiry Date First")
                }
                else{

                    var datew=  this.meta.meta_passport[index].exp_date.split('-');
                    const      date1=   new Date(datew[1]+'/'+datew[0]+'/'+datew[2]);
                    //alert(date1)
                    // const date1 = new Date('7/13/2010');
                    var today = new Date();
                    var dd = String(today.getDate()).padStart(2, '0');
                    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                    var yyyy = today.getFullYear();

                    today = mm + '/' + dd + '/' + yyyy;
                    const date2 = new Date(today);

                    // alert(date2)
                    const diffTime = date1 - date2;
                    console.log(date1 ,date2)
                    console.log(diffTime)
                    if(diffTime){
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        console.log(diffTime + " milliseconds");
                        console.log(diffDays + " days");
                        if(diffDays<180 && diffDays >1){
                            if(!this.err_passport.includes(this.meta.meta_passport[index].exp_date)){
                                alert("Your Passport will expire in less then 6 months")
                                this.err_passport.push(this.meta.meta_passport[index].exp_date);
                            }

                        }
                        else if(diffDays<=1) {
                            alert("Your Passport is expired")
                            this.meta.meta_passport[index].exp_date='';
                            this.meta.meta_passport[index].name_first='';
                            // name_first
                            // name_last
                            // passportno
                            // url
                        }



                    }
                    else {
                        alert("Your Passport is expired")
                        this.meta.meta_passport[index].exp_date='';
                        this.meta.meta_passport[index].name_first='';
                    }
                }

            },
            updateColor(colorData) {
                this.meta.meta_group_bg_color = colorData;
            },
            alertt(){
                alert('Please define document name');
            },
            forceFileDownload(response,type){
                const url = window.URL.createObjectURL(new Blob([response.data], {
                    type: 'application/vnd.ms-excel'
                }))
                const link = document.createElement('a')
                link.href = url
                if(type=='csv'){
                    link.setAttribute('download', 'sample_group.csv')
                }
                if(type=='xlsx'){
                    link.setAttribute('download', 'sample_member.xlsx')
                }
                if(type=='support'){
                    link.setAttribute('download', 'sample_toursupport.csv')
                }
                document.body.appendChild(link)
                link.click()
            },

            downloadgroupcsv(url,type) {

                this.$http({
                    method: 'get',
                    url: url,
                    responseType: 'blob'
                })
                    .then(response => {
                        this.forceFileDownload(response,type)
                    })
                    .catch(() => console.log('error occured'))

            },
            downloadgroupcsv1(url,type) {

                this.$http({
                    method: 'get',
                    url: url,
                    responseType: 'arraybuffer'
                })
                    .then(response => {
                        console.log(response);
                        this.forceFileDownload(response,type)
                    })
                    .catch(() => console.log('error occured'))

            },
            resettrav(){
                this.setPhone('')
                this.setEmail('')
                this.setTraveler_name('')
            },
            get_trav(){
                // alert("g")
                let trav = new FormData();

                trav.set("phone_number",this.item.phone)
                trav.set("email",this.item.email)
                axios.post('/api/webservices/trav_auth',trav)
                    .then(response=>{
                        console.log(response.data)
                        if(response.data==="No Data"){

                        }else{
                            this.traveller_array=response.data
                            this.setPhone(this.traveller_array.phone)
                            this.setEmail(this.traveller_array.email)
                            this.setTraveler_name(this.traveller_array.name)
                        }


                    })
            },
            deleteflightfile(index){

                var url=this.meta.meta_flight[index];
                var i=0;
                this.meta.meta_exp_costflight.forEach( (dataObj3) => {
                    if(dataObj3.fix===url.url){

                        this.meta.meta_exp_costflight.splice(i, 1);
                    }

                    i++;
                })
                this.meta.meta_flight.splice(index, 1);

            },
            onCompletecreate() {

            },
            checkemptyflight(date, arr, dep, tic) {
                if (arr == '' || dep == '' || tic == '' || date == '') {

                    return true
                } else {
                    return false
                }

            },
            alert(msg){
                alert(msg);
            },
            checkemptypassport(date, name_f,name_l, pasno) {
                if (name_f == '' ||name_l == '' || pasno == '' || date == '') {

                    return true
                } else {
                    return false
                }

            },


            updatemeta_exp_costflight(e) {
                this.setmeta_exp_costflight(e.target.value)
            },
            updatemeta_exp_cost(e) {
                this.setmeta_exp_cost(e.target.value)
            },

            updatemarkup1(e) {
                this.setmarkup1(e.target.value)
            },
            updatemarkup2(e) {
                this.setmarkup2(e.target.value)
            },
            updatesellingprice1(e) {
                this.setsellingprice1(e.target.value)
            },
            updatesellingprice2(e) {
                this.setsellingprice2(e.target.value)
            },


            changeview(item) {
                //   alert(item);
                this.summ = false;
                this.intraction = false;
                this.up = false;
                this.hotel = false;
                this.day = false;
                this.trav = false;
                this.train = false;
                this.mail = false;
                this.cost = false;
                this.exe = false;
                this.up = false;
                this.createlist= false;
                this.embed= false;
                this.live= false;
                this.visa= false;

                this[item] = true;
                if (this.createfull) {
// alert("inn");
                    if (this.newremark1 != '') {
                        this.setRemarkedit(this.newremark1)
                        this.newremark1 = '';
                    }

                    if (item == 'day' || item=='hotel') {
// console.log('daysdone');
                        this.setdriver_pickup_date_time(this.item.driver_pick_up_time);
                    }
                    if(item=='intraction'){

                        this.setmeta_interactionsfull(this.meta.remarks);
                        this.interaction_visit++
                        if(this.interaction_visit===1){
                            var countlen=0;
                            for(var prop in this.meta.interactions) {
                                if(this.meta.interactions.hasOwnProperty(prop))
                                    ++countlen;
                            }

                            this.$refs.myAccordion.open(countlen-1);
                        }
                    }
                    if(item=='train'){
                        // fetch airport codes
                        axios.post('/api/webservices/airport_codes' )
                            .then(response => {this.airport_codes=response.data
                                //
                                console.log(this.airport_codes)
                            })
                    }
                }
            },
            isNumber: function (evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();
                    ;
                } else {
                    return true;
                }
            },
            isNumberpercent: function (evt) {
                console.log(evt)
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                var valr = Number(evt.target.value + evt.key)
                // alert(typeof(valr))
                if (valr > 100) {
                    evt.preventDefault();
                }

                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    // alert("value")
                    evt.preventDefault();
                    ;
                } else {
                    return true;
                }
            },
            refeshhotel() {
                this.changeview('summ')
                setTimeout(() => this.changeview('hotel'), 1);

                // this.summ=true;
                // this.hotel=false;
                // this.summ=false;
                // this.hotel=true;
            },
            addnewcost() {
                if (!_.isEmpty(this.temp_cost.type) && !_.isEmpty(this.temp_cost.title) && !_.isEmpty(this.temp_cost.qty) && !_.isEmpty(this.temp_cost.rate)) {


                    var price = this.temp_cost.qty * this.temp_cost.rate;
                    this.meta.meta_exp_cost.push({
                        "type": this.temp_cost.type,
                        "title": this.temp_cost.title,
                        "qty": this.temp_cost.qty,
                        "unit": this.temp_cost.unit,
                        "rate": this.temp_cost.rate,
                        "price": price,
                        "ref": this.temp_cost.type + Math.floor((Math.random() * (999 - 100 + 1) + 100))
                    });
                    this.addlevel1 = false;
                    this.addlevel2 = false;
                    this.temp_cost = {"type": "", "title": "", "qty": "", "unit": "", "price": "", "ref": ""},
                        this.showModalcost = false
                }
            },
            addnewcostflight() {
                if (!_.isEmpty(this.temp_cost.title) && !_.isEmpty(this.temp_cost.qty) && !_.isEmpty(this.temp_cost.rate)) {
                    var price = this.temp_cost.qty * this.temp_cost.rate;


                    this.meta.meta_exp_costflight.push({
                        "type": this.temp_cost.type,
                        "title": this.temp_cost.title,
                        "qty": this.temp_cost.qty,
                        "unit": this.temp_cost.unit,
                        "rate": this.temp_cost.rate,
                        "price": price,
                        "ref": this.temp_cost.type + Math.floor((Math.random() * (999 - 100 + 1) + 100)),
                        "fix":"no"
                    });
                    this.addlevel1 = false;
                    this.addlevel2 = false;
                    this.temp_cost = {"type": "", "title": "", "qty": "", "unit": "", "price": "", "ref": ""},
                        this.showModalcost = false
                }
            },
            totalprice(a, b) {
                if (a > 0 && b > 0) {
                    return a * b;
                }else {
                    return 0
                }

            },
            changemenu(item) {
                //    alert(item);
                this.create = false;
                this.createfull = false;
                this[item] = true;
                if (item == 'createfull') {
// alert("inn");
                    if (this.newremark1 != '') {
                        this.setRemarkedit(this.newremark1)
                        this.newremark1 = '';
                    }

                }

            },


            updateRemarksedit(e) {
                this.setRemarkedit(e.target.value)
            },

            updatemeta_infant(e) {
                this.setmeta_infant(e.target.value)
            },


            updatemeta_transport_no(e) {
                this.setmeta_transport_no(e.target.value)
            },
            updatemeta_transport(e) {
                this.setmeta_transport(e.target.value)
            }, updateRemarks(e) {
                this.setRemarks(e.target.value)
            },

            removeE(id) {
                //   alert(id);
                let index = this.locations.findIndex(location => location.id === id);
                this.locations.splice(index, 1);
            },
            inmodal(value) {
                //   console.log(value);



                this.item.tour_location = JSON.parse(value.locations);

                this.item.tour_name = value.title;
                this.item.tour_id = value.id;
                this.places.cites = this.item.tour_location;


                this.places.cites.forEach((val) => {

                    console.log(val.id);
                    var gg = val.id;


                    this.fetchplace(gg.split('-')[0]);
                    this.fetchhotel(gg.split('-')[0])
                });


            },
            inmodalnew() {
                // alert("inmodalnew");
                console.log(this.locations);
                this.item.tour_location = this.locations;
                // this.item.tour_name=value.title;
                // this.item.tour_id=value.id;
                this.places.cites = this.item.tour_location;


                this.places.cites.forEach((val) => {

                    console.log(val.id);
                    var gg = val.id;


                    this.fetchplace(gg.split('-')[0]);
                    this.fetchhotel(gg.split('-')[0])
                });


            },
            updateRemark(e) {
                if (this.newremark != '') {
                    var any = _.cloneDeep(this.newremark);
                    this.setRemark(any)
                    this.newremark = ''
                }
            },
            call_place(id) {
                console.log(id);
            },
            remove(id) {
// alert(id);
                let index = this.item.tour_location.findIndex(location => location.id === id);
                this.item.tour_location.splice(index, 1);
            },
            removeloc(id) {
                // alert("removeloc");
                let index = this.item.tour_location.findIndex(location => location.id === id);
                this.item.tour_location.splice(index, 1);
            },

            addplace(id) {
                console.log(id);
                this.setItinerary_places(id)
            },
            addhotel(e) {
                this.setTour_location(e.target.value)
            },
            updatedriver_pick_up_time(e) {

                this.setdriver_pickup_date_time(e.target.value)
            },
            updateTraveler_name(e) {
                this.setTraveler_name(e.target.value)
            },
            updatemeta_pickup_date(e) {
                this.setmeta_pickup_date(e.target.value)
            },
            updatemeta_pickup_time(e) {
                this.setmeta_pickup_time(e.target.value)
            },


            updateBooking_id(e) {
                this.setBooking_id(e.target.value)
            },
            updatemeta_executive_name(e) {
                this.setmeta_executive_name(e.target.value)
            },
            updatemeta_executive_no(e) {
                this.setmeta_executive_no(e.target.value)
            },
            updateFull_name(e) {
                this.setFull_name(e.target.value)
            },
            updateEmail(e) {
                this.setEmail(e.target.value)
            },
            updateEmail2(e) {
                this.setEmail2(e.target.value)
            },
            updatePhone(e) {
                this.setPhone(e.target.value)
            },
            updateActivated(e) {
                this.setActivated(e.target.value)
            },
            updateScore(e) {
                this.setScore(e.target.value)
            },
            updateNo_of_adults(e) {
                this.setNo_of_adults(e.target.value)
            },
            updateNo_of_children(e) {
                this.setNo_of_children(e.target.value)
            },
            updateAgency_id(e) {
                this.setAgency_id(e.target.value)
            },
            updateAgent_id(e) {
                this.setAgent_id(e.target.value)
            },
            updateMeal_day(e) {
                this.setMeal_day(e.target.value)
            },
            updateBill_pay(e) {
                this.setBill_pay(e.target.value)
            },
            updateBudget(e) {
                this.setBudget(e.target.value)
            },

            // updateDriver_pick_up_time(e) {
            //     this.setdriver_pickup_date_time(e.target.value)
            // },
            updateDriver_pick_up_time_updated(e) {
                this.setdriver_pickup_date_time_updated(e.target.value)
            },
            updateDrop_address(e) {
                this.setDrop_address(e.target.value)
            },
            updateHandler_name(e) {
                this.setHandler_name(e.target.value)
            },
            updateHandler_no(e) {
                var res = this.item.handler_no.replace(/\(/g, "");
                res = res.replace(/\)/g, "");
                res = res.replace(/-/g, "");
                res = res.replace(/ /g, "");
                this.setHandler_no(res)
            },
            updateMeals_supplement(e) {
                this.setMeals_supplement(e.target.value)
            },
            updateMember_of_iti(e) {
                this.setMember_of_iti(e.target.value)
            },
            updatePackage_category(e) {
                this.setPackage_category(e.target.value)
            },
            updatePickup_address(e) {
                this.setPickup_address(e.target.value)
            },

            updateTotal_price(e) {
                this.setTotal_price(e.target.value)
            },
            updatePickup_location(e) {
                this.setPickup_location(e.target.value)
            },
            updateTour_cost(e) {
                this.setTour_cost(e.target.value)
            },
            updateSelected_car(e) {
                this.setSelected_car(e.target.value)
            },
            updateStatus(e) {
                this.setStatus(e.target.value)
            },
            updateSupplier_id(e) {
                this.setSupplier_id(e.target.value)
            },
            updateTotal_room(e) {
                this.setTotal_room(e.target.value)
            },
            updateTotal_tour_days(e) {
                this.setTotal_tour_days(e.target.value)
            },
            updatemeta_source(e) {
                this.setmeta_source(e.target.value)
            },
            updateTraveller_id(e) {
                this.setTraveller_id(e.target.value)
            },
            updateItinerary_places(e) {
                // this.setItinerary_places(e.target.value)
            },
            updateItinerary_places_time(e) {
                this.setItinerary_places_time(e.target.value)
            },
            updateTour_id(e) {
                this.setTour_id(e.target.value)
            },
            updateTour_name(e) {
                this.setTour_name(e.target.value)
            },
            updateTour_location(e) {
                this.setTour_location(e.target.value)
            },
            updateTitle(e) {
                this.setTitle(e.target.value)
            },
            updateLocations(e) {
                // this.setLocations(e.target.value)
            },
            updateTotal_tour_days(e) {
                this.setTotal_tour_days(e.target.value)
            },
            inmodalL(value) {

                // alert("modal-mask");
                this.locationd.id = value.id + '-' + Math.floor((Math.random() * 500) + 1);
                this.locationd.name = value.title;
                this.showModal = true;
                //  this.inmodalnew();modal-mask

            },
            updateCity(day) {
                //    alert(day);
                this.showModal = false;
                this.locationd.days = day;
                // this.tourlocalarray.push({...this.locationd});
                this.locations.push({...this.locationd});

                this.locationd.name = "";
                this.count++;
                //     this.setCity(value)
                this.days = 1;

                // this.setLocations(this.locations);
            },
            updatemeta_driver_name(e) {
                this.setmeta_driver_name(e.target.value)
            },
            updatemeta_driver_no(e) {
                var res = this.meta.meta_driver_no.replace(/\(/g, "");
                res = res.replace(/\)/g, "");
                res = res.replace(/-/g, "");
                res = res.replace(/ /g, "");
                this.setmeta_driver_no(res)
            },


            updatemeta_flight(value, meta_flight, index) {
                // itinerary_places_time

                this.setItinerary_places_time(value.target.files[0]);
                // this.uploadfile("",value.target.files[0]);


                if (!_.isEmpty(this.meta[meta_flight][index]['date']) && !_.isEmpty(this.meta[meta_flight][index]['dep_code']) && !_.isEmpty(this.meta[meta_flight][index]['arr_code']) && !_.isEmpty(this.meta[meta_flight][index]['ticket'])) {
                    uploadfile("flight", this.meta[meta_flight][index]['ticket'], this.item.itinerary_places_time, this.item.booking_id).then(response => {
                        this.meta[meta_flight][index]['url'] = response.data;

                    })


                } else {

                    alert("Kindly fill all fields");
                }

            },

            updatemeta_passport(value, meta_passport, index) {

                if (!_.isEmpty(this.meta[meta_passport][index]['exp_date']) && !_.isEmpty(this.meta[meta_passport][index]['name_first']) && !_.isEmpty(this.meta[meta_passport][index]['name_last']) && !_.isEmpty(this.meta[meta_passport][index]['passportno'])) {
                    uploadfile("passport", this.meta[meta_passport][index]['name_first']+this.meta[meta_passport][index]['name_last'], value.target.files[0], this.item.booking_id).then(response => {
                        this.meta[meta_passport][index]['url'] = response.data;

                    })


                } else {

                    alert("Kindly fill all fields");
                }

            },
            updatelogo(value, type) {
                uploadfile("grouplogo", type, value.target.files[0], this.item.booking_id).then(response => {

                    this.item.group_logo = response.data;

                })
            },

            uploadbg(value, type) {
                uploadfile("groupbackgroud", 'backgroudapp', value.target.files[0], this.item.booking_id).then(response => {

                    this.meta.meta_group_bg_image = response.data;

                })
            },
            uploadexhi(event) {
                this.csv_active_option=3;
                var return_arr=[];
                var selectedFile;
                var json=[];
                let jsonObject=[];
                selectedFile = event.target.files[0];
                this.excel_file = event.target.files[0];

                var fileRead = new FileReader();

                fileRead.onload = function(event,json) {

                    var data = event.target.result;
                    var workbook = XLSX.read(data, {

                        type: "binary"
                    });
                    let rowObject = XLSX.utils.sheet_to_row_object_array(
                        workbook.Sheets[workbook.SheetNames[0]]
                    );
                    let jsonObject = JSON.stringify(rowObject);
                    document.getElementById("jsonData2").innerHTML = jsonObject;
                    var counter=0;
                    rowObject.forEach((data)=>{
                        // Name	Description	Contact	Address	Website	Logo	Category

                        var flag=0;
                        if (
                            'Name' in rowObject[counter] === true &&
                            'Description' in rowObject[counter] === true &&
                            'Contact' in rowObject[counter] === true &&
                            'Address' in rowObject[counter] === true &&
                            'Website' in rowObject[counter] === true &&
                            'Logo' in rowObject[counter] === true &&
                            'Category' in rowObject[counter] === true
                        ){
                            data.Name=data.Name.trim();
                            data.Description=data.Description.trim();
                            data.Contact=data.Contact.toString().replace(/\s+/g, '');
                            data.Address=data.Address.trim();
                            data.Website=data.Website.trim();
                            data.Logo=data.Logo.trim();
                            data.Category=data.Category.trim();
                            data.id= Math.floor(Math.random() * 1000) + 1

                            return_arr.push(data)

                        }
                        counter++;
                    });
                    // console.log(JSON.stringify(return_arr));
                    document.getElementById("jsonData2").value = JSON.stringify(return_arr);
                    document.getElementById("proceed_button3").style.visibility = "visible";

                }
                fileRead.readAsBinaryString(selectedFile);
                return false;



            },
            upload_confirm_exhi(){
                let data=document.getElementById("jsonData2").value;
                let flag=0;
                let exhi_data=[];
                if( data !== null){
                    JSON.parse(data).forEach((exhi)=> {
                        if (flag==0) {
                            if (exhi.Logo != '') {

                                // if (exhi.Logo.indexOf('http:') > -1) {
                                //
                                //     alert('Please add logo with https only.');
                                //     flag = 1;
                                //     return false;
                                //
                                //
                                // }

                            }
                            if (exhi.Contact.toString().length == 12 && exhi.Contact.toString().charAt(0) == 9) {
                                exhi.Contact = '+' + exhi.Contact;
                                flag = 0
                            }
                            if (exhi.Contact.toString().length == 13 && exhi.Contact.toString().charAt(0) == '+') {
                                flag = 0
                            }
                            else if (exhi.Contact.toString().length == 10) {
                                exhi.Contact = '+91' + exhi.Contact;
                                flag = 0
                            }
                            else if (exhi.Contact.toString().length < 10) {
                                flag = 2
                                alert('Please use correct contact number.');
                                return false;
                            }
                            else {
                                flag = 2
                                alert('Please use correct contact number.');
                                return false;
                            }

                            exhi_data.push(exhi);

                        }

                    })

                    if(flag==0 && exhi_data.length>0) {
                    uploadfile("groupexhibitors",'exhibitor' ,  JSON.stringify(exhi_data) , this.item.booking_id,data.length).then(response => {

                        if(response.data!=='Insufficient Balance'){
                            // console.log(data);

                            // this.meta.meta_non_member_list.exhibitor.push(JSON.parse(data));
                            this.meta.meta_non_member_list.exhibitor = this.meta.meta_non_member_list.exhibitor.concat(exhi_data);
                            this.csv_active_option=0;
                            document.getElementById("proceed_button3").style.visibility = "hidden";
                            this.$eventHub.$emit('create-success')

                        }
                        else {
                            alert(response.data);
                        }

                    })
                    }
                    else{



                    }

                }
                else{
                    alert('Empty Data');
                }

                return false;

            },


            uploadsupport(event) {
                this.csv_active_option=4;
                var return_arr=[];
                var selectedFile;
                var json=[];
                let jsonObject=[];
                selectedFile = event.target.files[0];
                this.excel_file = event.target.files[0];

                var fileRead = new FileReader();

                fileRead.onload = function(event,json) {

                    var data = event.target.result;
                    var workbook = XLSX.read(data, {

                        type: "binary"
                    });
                    let rowObject = XLSX.utils.sheet_to_row_object_array(
                        workbook.Sheets[workbook.SheetNames[0]]
                    );
                    let jsonObject = JSON.stringify(rowObject);
                    document.getElementById("jsonData3").innerHTML = jsonObject;
                    var counter=0;
                    // console.log(jsonObject);
                    rowObject.forEach((data)=>{
                        // Name	Phone

                        var flag=0;
                        if (
                            'Name' in rowObject[counter] === true &&
                            'Phone' in rowObject[counter] === true
                        ){
                            data.Name=data.Name.trim();
                            // data.Phone=data.Phone;
                            data.Phone=data.Phone.toString().replace(/\s+/g, '');
                            return_arr.push(data)

                        }
                        counter++;
                    });

                    document.getElementById("jsonData3").value = JSON.stringify(return_arr);
                    document.getElementById("proceed_button4").style.visibility = "visible";

                }
                fileRead.readAsBinaryString(selectedFile);
                return false;



//                 uploadfile("groupsupport",'toursupport' , value.target.files[0], this.item.booking_id).then(response => {
// if( this.meta.meta_non_member_list.support[0].mobile!=''){
//     this.meta.meta_non_member_list.support = this.meta.meta_non_member_list.support.concat(response.data);
// }
// else{
//     this.meta.meta_non_member_list.support =response.data;
// }
//
//
//
//
//                 })
            },
            upload_confirm_tour(){
                let data=document.getElementById("jsonData3").value
                if( data !== null){
                    let non_mem=[];
                    let flag=0;
                    JSON.parse(data).forEach((mem)=>{
                        if(flag==0){

                            if(mem.Phone.toString().length==12 && mem.Phone.toString().charAt(0)==9){
                                mem.Phone='+'+mem.Phone;
                                flag=0

                            }
                            if(mem.Phone.toString().length==13 && mem.Phone.toString().charAt(0)=='+'){
                                flag=0
                            }
                            else if (mem.Phone.toString().length == 10) {
                                mem.Phone='+91'+mem.Phone;
                                flag=0

                            }
                            else if (mem.Phone.toString().length < 10) {
                                flag=1
                                alert('Please use correct contact number.');
                                return false;
                            }
                            else {
                                flag=1
                                alert('Please use correct contact number.');
                                return false;
                            }
                            non_mem.push(mem);
                        }


                    })

                    if(flag==0 && non_mem.length>0) {

                        uploadfile("groupsupport", 'toursupport', this.excel_file, this.item.booking_id).then(response => {

                            if (this.meta.meta_non_member_list.support[0].mobile != '') {
                                console.log(data);

                                // this.meta.meta_non_member_list.exhibitor.push(JSON.parse(data));
                                this.meta.meta_non_member_list.support = this.meta.meta_non_member_list.support.concat(non_mem);


                            } else {
                                this.meta.meta_non_member_list.support = non_mem;
                            }
                            this.csv_active_option = 0;
                            document.getElementById("proceed_button4").style.visibility = "hidden";
                            this.$eventHub.$emit('create-success')


                        })

                    }

                }
                else{
                    alert('Empty Data');
                }

                return false;

            },
            // uploadcsvregistration(value){
            //     this.csv_active_option=2;
            //     if(this.selected_form!=null){
            //
            //         if(this.selected_form.id!="") {
            //             this.$Progress.start()
            //             this.setmeta_form_id(this.forms_data_modal.id)
            //             this.setcsvupload(value.target.files[0])
            //             this.setcsvupload_reg(true)
            //             uploadfile("uploadcsv_pre_creating_group", Math.floor(Math.random() * 1000), this.csvupload, Math.floor(Math.random() * 1000))
            //                 .then(response2 =>{
            //                     if(response2.data.includes("success")){
            //                         this.storeData()
            //                             .then((response) => {
            //                                 this.$Progress.finish()
            //                                 this.csvmodal = false
            //                                 this.$router.push({path: '/groups/' + response.id + '/edit'})
            //                                 if(response.msg=='success'){
            //                                     this.$eventHub.$emit('create-success')
            //                                 }
            //                             })
            //                             .catch((error) => {
            //                                 this.$Progress.fail()
            //                                 this.setcsvupload_reg(false)
            //                                 this.setcsvupload(true)
            //                                 this.submit = true;
            //                                 alert(error)
            //                                 console.log(error)
            //                             })
            //                     }
            //                     else if(response2.data.includes("Invalid")){
            //                         this.$Progress.finish()
            //                         alert(response2.data);
            //                     }
            //                     else if(response2.data.includes("empty")){
            //                         this.$Progress.finish()
            //                         alert(response2.data);
            //                     }
            //
            //
            //
            //                 })
            //
            //
            //
            //
            //
            //         }
            //         else{
            //             alert('Choose Registration Form For Attachment');
            //         }
            //     }
            //     else{
            //         alert('Choose Registration Form For Attachment');
            //     }
            //     return false;
            //
            //
            //
            //
            // },
            uploadcsvregistrationpre(event){


                this.csv_active_option=6;
                var return_arr=[];
                var selectedFile;
                var json=[];
                let jsonObject=[];
                selectedFile = event.target.files[0];
                this.excel_file = event.target.files[0];
                var fileReader = new FileReader();
                fileReader.onload = function(event,json) {
                    var data = event.target.result;

                    var workbook = XLSX.read(data, {
                        type: "binary"
                    });

                    let rowObject = XLSX.utils.sheet_to_row_object_array(
                        workbook.Sheets[workbook.SheetNames[0]]
                    );
                    let jsonObject = JSON.stringify(rowObject);
                    document.getElementById("jsonData").innerHTML = jsonObject;
                    // console.log(jsonObject);
                    var valid_members=[];
                    var invalid_members=[];
                    var invalid_memb_emails=[];
                    var valid_memb_emails=[];
                    var valid_memb_no=[];
                    return_arr=[]
                    var flag=0;
                    var counter=0;

                    if(rowObject.length<=501){

                        var arr1 =['Traveller_name','Email','Phone','Gender','DOB','Airport_Hub','Visa_Hub','Dealership','Type','Relation','Payment'];

                        var arr2 =Object.keys(rowObject[0]);

                        var found = arr2.every(r=> arr1.includes(r))
                        // if(found && arr2.length>=8){
                        if(found && arr2.length>=10 ){


                        rowObject.forEach((data)=>{
                            if(counter>0){
                                var flag=0;
                                if (
                                    // 'Traveller_name' in rowObject[counter] === true &&
                                    'Email' in rowObject[counter] === true
                                    && 'Phone' in rowObject[counter] === true
                                    // && 'Dealership' in rowObject[counter] === true
                                    // && 'Type' in rowObject[counter] === true
                                    // && 'Relation' in rowObject[counter] === true
                                ) {
                                    if('Type' in rowObject[counter] !== true){
                                        data.Type='';
                                    }
                                    if('Traveller_name' in rowObject[counter] === true){
                                        data.Traveller_name=data.Traveller_name.trim();
                                    }
                                    else{
                                        data.Traveller_name='';
                                    }
                                    if('Dealership' in rowObject[counter] !== true){
                                        data.Dealership='';
                                    }
                                    data.Email=data.Email.trim();
                                    // data.Airport_Hub=data.Airport_Hub.trim();
                                    // data.Visa_Hub=data.Visa_Hub.trim();
                                    // data.Members_Allowed=data.Members_Allowed.toString().trim();
                                    data.Phone=data.Phone.toString().replace(/\s+/g, '');

                                    // console.log(data);




                                    if(data.Phone.toString().length==12 && data.Phone.toString().charAt(0)==9){
                                        data.Phone='+'+data.Phone;
                                        flag=0

                                    }
                                    if(data.Phone.toString().length==13 && data.Phone.toString().charAt(0)=='+'){
                                        flag=0
                                    }
                                    else if(data.Phone.toString().length==10){
                                        data.Phone='+91'+data.Phone;
                                        flag=0

                                    }
                                    else if(data.Phone.toString().length<10){
                                        flag=1
                                    }
                                    else{
                                        flag=1
                                    }
                                    if(flag==0){
                                        // console.log("12");
                                        if(typeof data.Type =="undefined"){
                                            data.Type='Primary';
                                            //  valid_members.push(data);
                                        }

                                        else{
                                            // console.log("15");
                                            valid_members.push(data);
                                            valid_memb_emails.push(data.Email)
                                            valid_memb_no.push(data.Phone)
                                        }

                                    }
                                    else if(flag==1){
                                        data.remark='Phone Number Error';
                                        invalid_members.push(data);
                                        invalid_memb_emails.push(data.Email)
                                    }
                                }
                                else if('Traveller_name' in rowObject[counter] === false){
                                    // data.remark='Traveller Name Error / Traveller Name is empty';
                                    invalid_members.push(data);
                                    invalid_memb_emails.push(data.Email)
                                }
                                else if('Email' in rowObject[counter] === false){
                                    // data.remark='Email Error / Email is empty';
                                    invalid_members.push(data);
                                    invalid_memb_emails.push(data.Email)
                                }
                                else if('Phone' in rowObject[counter] === false){
                                    data.remark='Phone Number Error / Phone is empty';
                                    invalid_members.push(data);
                                    invalid_memb_emails.push(data.Email)
                                }
                                else if('Dealership' in rowObject[counter] === false){
                                    // data.remark='Dealership Error / Dealership is empty';
                                    invalid_members.push(data);
                                    invalid_memb_emails.push(data.Email)
                                }

                                else if('Type' in rowObject[counter] === false){
                                    // data.Type='Primary';
                                    invalid_members.push(data);
                                }
                                else if('Type' in rowObject[counter] === true && ( data.type== 'Secondry' ||  data.type== 'Secondary')){
                                    if('Relation' in rowObject[counter] === false){
                                        data.remark='Relation Error / Relation is empty';
                                        invalid_members.push(data);
                                    }
                                    if('Payment' in rowObject[counter] === false){
                                        data.remark='Payment Error / Payment is empty';
                                        invalid_members.push(data);
                                    }
                                }
                                else{
                                    data.remark='Please Check Data';
                                    invalid_members.push(data);
                                    invalid_memb_emails.push(data.Email)
                                }
                            }

                            counter++;
                        })
                        return_arr.push({
                            'valid':valid_members,
                            'invalid':invalid_members,
                            'status':'true'
                        })
                        // console.log(JSON.stringify(return_arr));
                        document.getElementById("jsonData").value = JSON.stringify(return_arr);
                        document.getElementById("proceed_button6").style.visibility = "visible";
}
                    else{
   alert("File with wrong headers")

}



                    }
                    else{
                        alert('You Cannot Upload Members More Than 500 !');


                    }




                };
                fileReader.readAsBinaryString(selectedFile);




                return false;




            },

            uploadcsvregistration(event){


                this.csv_active_option=5;
                var return_arr=[];
                var selectedFile;
                var json=[];
                let jsonObject=[];
                selectedFile = event.target.files[0];
                this.excel_file = event.target.files[0];
                var fileReader = new FileReader();
                fileReader.onload = function(event,json) {
                    var data = event.target.result;

                    var workbook = XLSX.read(data, {
                        type: "binary"
                    });
                    // console.log(workbook);

                    // console.log(workbook.SheetNames[0]);

                    let rowObject = XLSX.utils.sheet_to_row_object_array(
                        workbook.Sheets[workbook.SheetNames[0]]
                    );
                    // console.log(JSON.stringify(rowObject));

                    let jsonObject = JSON.stringify(rowObject);
                    document.getElementById("jsonData").innerHTML = jsonObject;

                    var valid_members=[];
                    var invalid_members=[];
                    return_arr=[]
                    var flag=0;
                    var counter=0;

                    // console.log(rowObject);
                    // return false;
                    if(rowObject.length<=501){

                        var arr1 =['Traveller_name','Email','Phone','Gender','DOB','Airport_Hub','Visa_Hub','Members_Allowed','Dealership'];


                        var arr2 =Object.keys(rowObject[0]);


                        var found = arr2.every(r=> arr1.includes(r))
                        if(found) {

                        rowObject.forEach((data)=>{
                            if(counter>0){
                                var flag=0;
                                if (
                                    // 'Traveller_name' in rowObject[counter] === true &&
                                    'Email' in rowObject[counter] === true
                                    && 'Phone' in rowObject[counter] === true
                                    // && 'Airport_Hub' in rowObject[counter] === true
                                    // && 'Visa_Hub' in rowObject[counter] === true

                                    // && 'Dealership' in rowObject[counter] === true
                                ) {

                                    if('Traveller_name' in rowObject[counter] === true){
                                        data.Traveller_name=data.Traveller_name.trim();
                                    }
                                    else{
                                        data.Traveller_name='';
                                    }
                                    if('Airport_Hub' in rowObject[counter] === true){
                                        data.Airport_Hub=data.Airport_Hub.trim();
                                    }
                                    else{
                                        data.Airport_Hub='';
                                    }
                                    if('Visa_Hub' in rowObject[counter] === true){
                                        data.Visa_Hub=data.Visa_Hub.trim();
                                    }
                                    else{
                                        data.Visa_Hub='';
                                    }

                                    data.Email=data.Email.trim();


                                    if('Members_Allowed' in rowObject[counter] === true){
                                        data.Members_Allowed=data.Members_Allowed.toString().trim();
                                    }
                                    else{
                                        data.Members_Allowed=1;
                                    }
                                    if('Dealership' in rowObject[counter] !== true){
                                        data.Dealership='';
                                    }

                                    data.Phone=data.Phone.toString().replace(/\s+/g, '');

                                    // console.log(data);




                                    if(data.Phone.toString().length==12 && data.Phone.toString().charAt(0)==9){
                                        data.Phone='+'+data.Phone;
                                        flag=0

                                    }
                                    if(data.Phone.toString().length==13 && data.Phone.toString().charAt(0)=='+'){
                                        flag=0
                                    } else if (data.Phone.toString().length == 10) {
                                        data.Phone='+91'+data.Phone;
                                        flag=0

                                    } else if (data.Phone.toString().length < 10) {
                                        flag=1
                                    } else {
                                        flag=1
                                    }

                                    if(flag==0){
                                        valid_members.push(data);
                                    } else if (flag == 1) {
                                        data.remark='Phone Number Error';
                                        invalid_members.push(data);
                                    }
                                } else if ('Traveller_name' in rowObject[counter] === false) {
                                    // data.remark='Traveller Name Error / Traveller Name is empty';
                                    invalid_members.push(data);
                                } else if ('Email' in rowObject[counter] === false) {
                                    // data.remark='Email Error / Email is empty';
                                    invalid_members.push(data);
                                } else if ('Phone' in rowObject[counter] === false) {
                                    data.remark='Phone Number Error / Phone is empty';
                                    invalid_members.push(data);
                                } else if ('Airport_Hub' in rowObject[counter] === false) {
                                    // data.remark='Airport Hub Error / Airport Hub is empty';
                                    invalid_members.push(data);
                                } else if ('Visa_Hub' in rowObject[counter] === false) {
                                    // data.remark='Visa Hub Error / Visa Hub is empty';
                                    invalid_members.push(data);
                                } else if ('Dealership' in rowObject[counter] === false) {
                                    // data.remark='Dealership is empty';
                                    invalid_members.push(data);
                                } else if ('Members_Allowed' in rowObject[counter] === false) {
                                    data.Members_Allowed=0;
                                    valid_members.push(data);
                                } else {
                                    data.remark='Please Check Data';
                                    invalid_members.push(data);
                                }
                            }

                            counter++;
                        })
                        return_arr.push({
                            'valid':valid_members,
                            'invalid':invalid_members,
                            'status':'true'
                        })
                        // console.log(JSON.stringify(return_arr));
                        document.getElementById("jsonData").value = JSON.stringify(return_arr);
                        document.getElementById("proceed_button5").style.visibility = "visible";
                        }
                        else{
                            alert("File with wrong headers")

                        }

                    }
                    else{

                        alert('You Cannot Upload Members More Than 500 !');
                    }









                };
                fileReader.readAsBinaryString(selectedFile);




                return false;




            },
            varify_excel_file_reg(){
                if( document.getElementById("jsonData") !== null) {
                    this.json_data = document.getElementById("jsonData").value;
                    if (JSON.parse(this.json_data)[0].status == 'true') {
                        this.loading2=true;
                        let form=new FormData();
                        form.set('counter','1');
                        form.set('type','reg');
                        form.set('json',this.json_data);

                        axios.post('/api/v1/verify_member_sheet' , form)
                            .then(response => {
                                this.loading2=false;
                                if(response.data.status=='error'){

                                    this.json_fields2= {
                                        'Traveller_name': 'Traveller_name',
                                        'Email':'Email',
                                        'Phone':'Phone',
                                        'Gender':'Gender',
                                        'DOB':'DOB',
                                        'Airport_Hub':'Airport_Hub',
                                        'Visa_Hub':'Visa_Hub',
                                        'Members_Allowed':'Members_Allowed',
                                        'Dealership':'Dealership',
                                        'Remark':'remark',

                                    };
                                    this.upload_member_status='There is some error in your excel member file please correct and re-upload the file. Above excel file is just for refrence do not upload this file.';
                                    this.invalid_member_data=response.data.data.invalid;
                                    this.invalid_mem_modal=true;
                                    this.file_upload_status=1;
                                    this.show_excel_button=true;
                                    this.csv_active_option=0;
                                }
                                else if(response.data.status=='success'){
                                    this.csv_active_option=1;
                                    document.getElementById("jsonData").value = JSON.stringify(response.data.data);

                                }
                                else if( response.data.status=='no_data_available'){

                                    if(response.data.data.length>0){
                                        this.json_fields2= {
                                            'Traveller_name': 'Traveller_name',
                                            'Email':'Email',
                                            'Phone':'Phone',
                                            'Gender':'Gender',
                                            'DOB':'DOB',
                                            'Airport_Hub':'Airport_Hub',
                                            'Members_Allowed':'Members_Allowed',
                                            'Dealership':'Dealership',
                                            'Remark':'remark',

                                        };
                                        this.upload_member_status='There is some error in your excel member file please correct and re-upload the file. Above excel file is just for refrence do not upload this file.';
                                        this.invalid_member_data=response.data.data;
                                        this.invalid_mem_modal=true;
                                        this.file_upload_status=1;
                                        this.show_excel_button=true;
                                    }


                                    this.csv_active_option=0;

                                }
                            })
                    }
                    else if(JSON.parse(this.json_data)[0].status=='false'){
                        alert('Please Upload Valid Excel Sheet');
                        return false;
                    }
                    else{
                        alert('Please Upload Valid Excel Sheet');
                        return false;
                    }
                }

            },
            varify_excel_file_pre(){
                if( document.getElementById("jsonData") !== null) {
                    this.json_data = document.getElementById("jsonData").value;
                    if (JSON.parse(this.json_data)[0].status == 'true') {
                        this.loading2=true;
                        let form=new FormData();
                        form.set('counter','1');
                        form.set('type','pre');
                        form.set('json',this.json_data);

                        axios.post('/api/v1/verify_member_sheet' , form)
                            .then(response => {
                                this.loading2=false;

                                if(response.data.status=='error'){

                                    this.json_fields2= {
                                        'Traveller_name': 'Traveller_name',
                                        'Email':'Email',
                                        'Phone':'Phone',
                                        'Gender':'Gender',
                                        'DOB':'DOB',
                                        'Airport_Hub':'Airport_Hub',
                                        'Visa_Hub':'Visa_Hub',
                                        'Dealership':'Dealership',
                                        'Type':'Type',
                                        'Relation':'Relation',
                                        'Payment':'Payment',
                                        'Remark':'remark',

                                    };
                                    this.upload_member_status='There is some error in your excel member file please correct and re-upload the file. Above excel file is just for refrence do not upload this file.';
                                    this.invalid_member_data=response.data.data.invalid;
                                    this.invalid_mem_modal=true;
                                    this.file_upload_status=1;
                                    this.show_excel_button=true;
                                    this.csv_active_option=0;
                                }
                                else if(response.data.status=='success'){
                                    this.csv_active_option=2;
                                    document.getElementById("jsonData").value = JSON.stringify(response.data.data);

                                }
                                else if( response.data.status=='no_data_available'){

                                    if(response.data.data.length>0){
                                        this.json_fields2= {
                                            'Traveller_name': 'Traveller_name',
                                            'Email':'Email',
                                            'Phone':'Phone',
                                            'Gender':'Gender',
                                            'DOB':'DOB',
                                            'Airport_Hub':'Airport_Hub',
                                            'Visa_Hub':'Visa_Hub',
                                            'Dealership':'Dealership',
                                            'Type':'Type',
                                            'Relation':'Relation',
                                            'Payment':'Payment',
                                            'Remark':'remark',

                                        };
                                        this.upload_member_status='There is some error in your excel member file please correct and re-upload the file. Above excel file is just for refrence do not upload this file.';
                                        this.invalid_member_data=response.data.data;
                                        this.invalid_mem_modal=true;
                                        this.file_upload_status=1;
                                        this.show_excel_button=true;
                                    }


                                    this.csv_active_option=0;

                                }

                            })
                    }
                    else if(JSON.parse(this.json_data)[0].status=='false'){
                        alert('Please Upload Valid Excel Sheet');
                        return false;
                    }
                    else{
                        alert('Please Upload Valid Excel Sheet');
                        return false;
                    }
                }

            },

            uploadcsv(event){
                this.csv_active_option=1;
                var return_arr=[];
                var selectedFile;
                var json=[];
                let jsonObject=[];
                selectedFile = event.target.files[0];
                this.excel_file = event.target.files[0];
                var fileReader = new FileReader();
                fileReader.onload = function(event,json) {
                    var data = event.target.result;

                    var workbook = XLSX.read(data, {
                        type: "binary"
                    });

                    workbook.SheetNames.forEach(sheet => {
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[sheet]
                        );
                        let jsonObject = JSON.stringify(rowObject);
                        document.getElementById("jsonData").innerHTML = jsonObject;

                        var valid_members=[];
                        var invalid_members=[];
                        return_arr=[]
                        var flag=0;
                        var counter=0;


                        rowObject.forEach((data)=>{
                            var flag=0;
                            if ('Traveller_name' in rowObject[counter] === true
                                && 'Email' in rowObject[counter] === true
                                && 'Phone' in rowObject[counter] === true
                                && 'Airport_Hub' in rowObject[counter] === true
                                && 'Visa_Hub' in rowObject[counter] === true
                                && 'Members_Allowed' in rowObject[counter] === true) {

                                data.Traveller_name=data.Traveller_name.trim();
                                data.Email=data.Email.trim();
                                data.Airport_Hub=data.Airport_Hub.trim();
                                data.Visa_Hub=data.Visa_Hub.trim();
                                data.Members_Allowed=data.Members_Allowed.toString().trim();
                                data.Phone=data.Phone.toString().replace(/\s+/g, '');


                                if(data.Phone.toString().length==12 && data.Phone.toString().charAt(0)==9){
                                    data.Phone='+'+data.Phone;
                                    flag=0

                                }
                                if(data.Phone.toString().length==13 && data.Phone.toString().charAt(0)=='+'){
                                    flag=0
                                }
                                else if(data.Phone.toString().length==10){
                                    data.Phone='+91'+data.Phone;
                                    flag=0

                                }
                                else if(data.Phone.toString().length<10){
                                    flag=1
                                }
                                else{
                                    flag=1
                                }

                                if(flag==0){
                                    valid_members.push(data);
                                }
                                else if(flag==1){
                                    data.remark='Phone Number Error';
                                    invalid_members.push(data);
                                }
                            }
                            else if('Traveller_name' in rowObject[counter] === false){
                                data.remark='Traveller Name Error / Traveller Name is empty';
                                invalid_members.push(data);
                            }
                            else if('Email' in rowObject[counter] === false){
                                data.remark='Email Error / Email is empty';
                                invalid_members.push(data);
                            }
                            else if('Phone' in rowObject[counter] === false){
                                data.remark='Phone Error / Phone is empty';
                                invalid_members.push(data);
                            }
                            else if('Airport_Hub' in rowObject[counter] === false){
                                data.remark='Airport Hub Error / Airport Hub is empty';
                                invalid_members.push(data);
                            }
                            else if('Visa_Hub' in rowObject[counter] === false){
                                data.remark='Visa Hub Error / Visa Hub is empty';
                                invalid_members.push(data);
                            }
                            else if('Members_Allowed' in rowObject[counter] === false){
                                data.Members_Allowed=0;
                                valid_members.push(data);
                            }
                            else{
                                data.remark='Please Check Data';
                                invalid_members.push(data);
                            }
                            counter++;
                        })
                        return_arr.push({
                            'valid':valid_members,
                            'invalid':invalid_members,
                            'status':'true'
                        })
                        // console.log(JSON.stringify(return_arr));
                        document.getElementById("jsonData").value = JSON.stringify(return_arr);








                    });


                };
                fileReader.readAsBinaryString(selectedFile);



            },

            upload_confirm_all_with_reg_pre(){


                if( document.getElementById("jsonData") !== null){
                    this.json_data=document.getElementById("jsonData").value;



                    if(JSON.parse(this.json_data).filtered.length > 0){
                        this.setall_member_upload_sheet(this.json_data);
                        this.setmeta_form_id(this.forms_data_modal.id)
                        this.transitionDuration=JSON.parse(this.json_data).filtered.length


                        this.animateDuration="loop "+ 100*JSON.parse(this.json_data).filtered.length +" 100"
                        console.log( this.animateDuration);
                        console.log(  JSON.parse(this.json_data));
                        console.log( JSON.parse(this.json_data).filtered.length);
                        this.prog=true;
                        // this.$Progress.start()
                        this.setcsvupload_reg('pre')
                        this.setcsvupload(this.excel_file)
                        if((this.tour_name ==null || this.tour_name =='') && this.checked ===false){
                            var namet='';
                            this.tourlocalarray.forEach((callback)=>{
                                console.log(callback.name);
                                namet+= callback.name + "|";
                            })

                            namet = namet.substring(0, namet.length - 1);
                            // console.log("custom name"+namet);
                            this.setTour_name(namet)
                            this.localtourdata['title']=namet;
                        }
                        else {
                            if(this.tour_name ==null || this.tour_name ==''){

                                this.setTour_name(this.item.tour_name)
                                this.localtourdata['title']=this.item.tour_name;
                            }
                            else{
                                this.localtourdata['title']=this.tour_name;
                                this.setTour_name(this.tour_name)
                            }
                        }
                        this.storeData()
                            .then((response) => {
                                // console.log("---------");
                                // console.log(response);
                                // console.log("---------");
                                this.prog=false;
                                this.$Progress.finish()
                                this.csvmodal = false
                                // this.$router.push({ path: '/groups/'+response.id+'/edit', params:{'invalid_mem':response.invalid_mem ,'invalid_mem_status':response.invalid_mem_status}})

                                this.$router.push({ name: 'groups.edit', params: {'invalid_mem': response.invalid_mem,'invalid_mem_status':response.invalid_mem_status,'id':response.id ,'upload_status':response.upload_status,'error_section':response.error_section}})
                                if(response.msg=='success'){
                                    this.$eventHub.$emit('create-success')
                                }
                                if(this.save_tour=== true && this.checked ===false){

                                    // tourdata:{'titel':'','locations':'','total_tour_days':''}
                                    this.localtourdata['locations']=JSON.stringify(this.tourlocalarray)
                                    this.localtourdata['total_tour_days']=1

                                    this.addnewtour(this.localtourdata,document.querySelector("meta[name='user-id']").getAttribute('content'));




                                }
                            })
                            .catch((error) => {
                                this.$Progress.fail()
                                this.setcsvupload_reg(false)
                                this.setcsvupload(true)
                                this.submit = true;
                                //  alert(error)
                                window.location.reload();
                                console.log(error)
                            })
                    }
                    else{
                        alert('Please Upload Valid Excel Sheet');
                        return false;
                    }





                }
                else{
                    alert('Empty Data');
                }

                return false;






            },

            upload_confirm_all_with_reg(){


                        if( document.getElementById("jsonData") !== null){
                            this.json_data=document.getElementById("jsonData").value;
                            if(JSON.parse(this.json_data).filtered.length>0){
                                this.setall_member_upload_sheet(this.json_data);
                                this.setmeta_form_id(this.forms_data_modal.id)
                                this.transitionDuration=JSON.parse(this.json_data).filtered.length


                                this.animateDuration="loop "+ 100*JSON.parse(this.json_data).filtered.length +" 100"
                                console.log( this.animateDuration);
                                console.log(  JSON.parse(this.json_data));
                                console.log( JSON.parse(this.json_data).filtered.length);
                                this.prog=true;
                               // this.$Progress.start()
                                this.setcsvupload_reg('reg')
                                this.setcsvupload(this.excel_file)
                                if((this.tour_name ==null || this.tour_name =='') && this.checked ===false){
                                    var namet='';
                                    this.tourlocalarray.forEach((callback)=>{
                                        console.log(callback.name);
                                        namet+= callback.name + "|";
                                    })

                                    namet = namet.substring(0, namet.length - 1);
                                    // console.log("custom name"+namet);
                                    this.setTour_name(namet)
                                    this.localtourdata['title']=namet;
                                }
                                else {
                                    if(this.tour_name ==null || this.tour_name ==''){

                                        this.setTour_name(this.item.tour_name)
                                        this.localtourdata['title']=this.item.tour_name;
                                    }
                                    else{
                                        this.localtourdata['title']=this.tour_name;
                                        this.setTour_name(this.tour_name)
                                    }
                                }

                                this.storeData()
                                    .then((response) => {
                                        // console.log("---------");
                                        // console.log(response);
                                        // console.log("---------");
                                        this.prog=false;
                                        this.$Progress.finish()
                                        this.csvmodal = false
                                        // this.$router.push({ path: '/groups/'+response.id+'/edit', params:{'invalid_mem':response.invalid_mem ,'invalid_mem_status':response.invalid_mem_status}})

                                        this.$router.push({ name: 'groups.edit', params: {'invalid_mem': response.invalid_mem,'invalid_mem_status':response.invalid_mem_status,'id':response.id ,'upload_status':response.upload_status,'error_section':response.error_section}})
                                        if(response.msg=='success'){
                                            this.$eventHub.$emit('create-success')
                                        }
                                        if(this.save_tour=== true && this.checked ===false){

                                            // tourdata:{'titel':'','locations':'','total_tour_days':''}
                                            this.localtourdata['locations']=JSON.stringify(this.tourlocalarray)
                                            this.localtourdata['total_tour_days']=1

                                            this.addnewtour(this.localtourdata,document.querySelector("meta[name='user-id']").getAttribute('content'));




                                        }
                                    })
                                    .catch((error) => {
                                        this.$Progress.fail()
                                        this.setcsvupload_reg(false)
                                        this.setcsvupload(true)
                                        this.submit = true;
                                       // alert(error)
                                        window.location.reload();
                                        console.log(error)
                                    })
                            }

                            else{
                                alert('Please Upload Valid Excel Sheet');
                                return false;
                            }



                        }
                        else{
                            alert('Empty Data');
                        }

                return false;






            },
            upload_confirm_all(){

                if( document.getElementById("jsonData") !== null){
                    this.json_data=document.getElementById("jsonData").value;
                    if(JSON.parse(this.json_data)[0].status=='true'){
                        this.setall_member_upload_sheet(this.json_data);

                        this.transitionDuration=JSON.parse(this.json_data)[0].valid.length


                        this.animateDuration="loop "+ 100*JSON.parse(this.json_data)[0].valid.length +" 100"
                        console.log( this.animateDuration);
                        console.log(  JSON.parse(this.json_data));
                        console.log( JSON.parse(this.json_data)[0].valid.length);
                        this.prog=true;
                       // this.$Progress.start()
                        this.setcsvupload_reg(false)
                        this.setcsvupload(this.excel_file)
                        if((this.tour_name ==null || this.tour_name =='') && this.checked ===false){
                            var namet='';
                            this.tourlocalarray.forEach((callback)=>{
                                console.log(callback.name);
                                namet+= callback.name + "|";
                            })

                            namet = namet.substring(0, namet.length - 1);
                            // console.log("custom name"+namet);
                            this.setTour_name(namet)
                            this.localtourdata['title']=namet;
                        }
                        else {
                            if(this.tour_name ==null || this.tour_name ==''){

                                this.setTour_name(this.item.tour_name)
                                this.localtourdata['title']=this.item.tour_name;
                            }
                            else{
                                this.localtourdata['title']=this.tour_name;
                                this.setTour_name(this.tour_name)
                            }
                        }
                        this.storeData()
                            .then((response) => {
                                this.prog=false;
                                this.$Progress.finish()
                                this.$router.push({ name: 'groups.edit', params:{'invalid_mem':response.invalid_mem ,'invalid_mem_status':response.invalid_mem_status,'id':response.id ,'upload_status':response.upload_status}})
                                // this.$router.push({ path: '/groups/'+response.id+'/edit', params:{'invalid_mem':response.invalid_mem ,'invalid_mem_status':response.invalid_mem_status}})

                                if(response.msg=='success'){
                                    this.$eventHub.$emit('create-success')
                                }
                                if(this.save_tour=== true && this.checked ===false){

                                    // tourdata:{'titel':'','locations':'','total_tour_days':''}
                                    this.localtourdata['locations']=JSON.stringify(this.tourlocalarray)
                                    this.localtourdata['total_tour_days']=1

                                    this.addnewtour(this.localtourdata,document.querySelector("meta[name='user-id']").getAttribute('content'));




                                }

                            })
                            .catch((error) => {
                                this.$Progress.fail()
                                this.setcsvupload_reg(true)
                                this.setcsvupload(false)
                                this.submit=true;
                                // alert(error)
                                window.location.reload();
                                console.log(error)
                            })
                    }
                    else if(JSON.parse(this.json_data)[0].status=='false'){
                        alert('Please Upload Valid Excel Sheet');
                        return false;
                    }
                    else{
                        alert('Please Upload Valid Excel Sheet');
                        return false;
                    }




                }
                else{
                    alert('Empty Data');
                }





            },

            updatemeta_visa(value, type, index) {
                uploadfile("visa", type, value.target.files[0], this.item.booking_id).then(response => {

                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_voucher(value, type, index) {
                uploadfile("voucher", type, value.target.files[0], this.item.booking_id).then(response => {

                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_insurance(value, type, index) {
                uploadfile("insurance", type, value.target.files[0], this.item.booking_id).then(response => {

                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_other(value, type, index) {
                uploadfile("other", type, value.target.files[0], this.item.booking_id).then(response => {

                    this.meta[type][index]['url'] = response.data;

                })
            },


            updatemeta_welcome_mail(value) {
                this.setmeta_welcome_mail(value)
            },
            updatemeta_registration_mail(value) {
                this.setmeta_registration_mail(value)
            },


            updatemeta_incl_ex(value) {
                this.setmeta_incl_ex(value)
            }, updatemeta_closuer(value) {
                this.setmeta_closuer(value)
            }, updateNote(e) {
                this.setNote(e.target.value)
            }, updateEmail_second(e) {
                this.setEmail_second(e.target.value)
            }, updateMessageidd(e) {
                this.setMessageidd(e.target.value)
            }, updateQuery_feel(e) {
                this.setQuery_feel(e.target.value)
            }, updateScore_new(e) {
                this.setScore_new(e.target.value)
            }, updateTour_cost_tax(e) {
                this.setTour_cost_tax(e.target.value)
            },
            submitTour() {
                this.storeTour()
                    .then(() => {
                        // this.$router.push({ name: 'tours.index' })
                        // this.$eventHub.$emit('create-success')
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            },

            changemenucontinue(){
                if(this.item.tour_location){

                    this.changemenu('createfull')



                }
                else {
                    this.errors.push("Select Tour")

                }



                if(!_.isEmpty(this.errors)){
                    this.errormodal=true

                }
            },
            submitForm1() {
                this.setmeta_mail_format();
                this.setmeta_interactionsfull(this.meta.remarks);
                this.submit=false;
                if(this.item.tour_location){

                    var re = /\S+@\S+\.\S+/;
                    var  email_v= re.test(this.item.email);

                    if(this.item.full_name && this.item.email && email_v &&  this.item.phone){

                        var res = this.item.phone.replace(/\(/g, "");
                        res = res.replace(/\)/g, "");
                        res = res.replace(/-/g, "");
                        res = res.replace(/ /g, "");
                        this.setPhone(res);

                        let trav = new FormData();

                        trav.set("name",this.item.full_name)
                        trav.set("email",this.item.email)
                        trav.set("phone",this.item.phone)
                        trav.set("type","group")
                        axios.post('/api/v1/travellers', trav)
                            .then(response => {
                                console.log(response)
                                console.log(response.data.status)
                                this.setTraveller_id(response.data.id)
                                if(response.data.status=='error'){
                                    this.submit=true;
                                    alert(response.data.type);
                                }

                                else {



                                    if(this.newremark1!=''){

                                        this.setRemarkedit(this.newremark1)

                                    }



                                    if((this.tour_name ==null || this.tour_name =='') && this.checked ===false){
                                        var namet='';
                                        this.tourlocalarray.forEach((callback)=>{
                                            console.log(callback.name);
                                            namet+= callback.name + "|";
                                        })

                                        namet = namet.substring(0, namet.length - 1);
                                        // console.log("custom name"+namet);
                                        this.setTour_name(namet)
                                        this.localtourdata['title']=namet;
                                    }
                                    else {
                                        if(this.tour_name ==null || this.tour_name ==''){

                                            this.setTour_name(this.item.tour_name)
                                            this.localtourdata['title']=this.item.tour_name;
                                        }
                                        else{
                                            this.localtourdata['title']=this.tour_name;
                                            this.setTour_name(this.tour_name)
                                        }
                                    }



                                    this.showerror=true;
                                    this.storeData()
                                        .then(() => {

                                            if(this.save_tour=== true && this.checked ===false){

                                                // tourdata:{'titel':'','locations':'','total_tour_days':''}
                                                this.localtourdata['locations']=JSON.stringify(this.tourlocalarray)
                                                this.localtourdata['total_tour_days']=1

                                                this.addnewtour(this.localtourdata,document.querySelector("meta[name='user-id']").getAttribute('content'));




                                            }
                                            this.$router.push({ name: 'groups.index' })
                                            this.$eventHub.$emit('create-success')
                                        })
                                        .catch((error) => {
                                            this.submit=true;
                                            console.error(error)
                                            window.location.reload();
                                        })

                                }

                            })
                            .catch(error => {
                                this.submit=true;
                                alert("error");
                                console.log(error)
                            })

                    }
                    else {
                        this.submit=true;
                        this.errors.push("All Contact Details")


                    }

                }
                else {
                    this.submit=true;
                    this.errors.push("Select Tour")

                }
                if(!_.isEmpty(this.errors)){
                    this.errormodal=true

                }
            },
            submitForm() {
                //       this.setmeta_interactionsfull(this.meta.remarks);
                this.submit = false;
                // if(this.tour_name ==''){
                //     this.setTour_name(this.item.tour_name)
                // }
                // else{
                //     this.setTour_name(this.tour_name)
                // }


                if((this.tour_name ==null || this.tour_name =='') && this.checked ===false){
                    var namet='';
                    this.tourlocalarray.forEach((callback)=>{
                        console.log(callback.name);
                        namet+= callback.name + "|";
                    })

                    namet = namet.substring(0, namet.length - 1);
                    // console.log("custom name"+namet);
                    this.setTour_name(namet)
                    this.localtourdata['title']=namet;
                }
                else {
                    if(this.tour_name ==null || this.tour_name ==''){

                        this.setTour_name(this.item.tour_name)
                        this.localtourdata['title']=this.item.tour_name;
                    }
                    else{
                        this.localtourdata['title']=this.tour_name;
                        this.setTour_name(this.tour_name)
                    }
                }


                this.showerror = true;
                this.storeData()
                    .then(() => {
// alert("in")


                        if(this.save_tour=== true && this.checked ===false){

                            // tourdata:{'titel':'','locations':'','total_tour_days':''}
                            this.localtourdata['locations']=JSON.stringify(this.tourlocalarray)
                            this.localtourdata['total_tour_days']=1

                            this.addnewtour(this.localtourdata,document.querySelector("meta[name='user-id']").getAttribute('content'));




                        }



                        this.$router.push({name: 'groups.index'})
                        this.$eventHub.$emit('create-success')
                    })
                    .catch((error) => {
                        this.submit = true;
                        console.error(error)
                        window.location.reload();
                    })

            },




            submitForm3() {
                this.setmeta_interactionsfull(this.meta.remarks);
                this.submit = false;
                //validations
                if (!this.item.driver_pick_up_time) {
                    this.errors.push("Date")
                }
                // if(!this.item.budget){this.errors.push("Budget")}
                if (!this.item.full_name) {
                    this.errors.push("Traveler Name")
                }
                if (!this.item.no_of_adults) {
                    this.errors.push("No. of Adult")
                }
                if (this.item.no_of_children==='') {
                    this.errors.push("No. of Child")
                }
                if (!this.item.phone) {
                    this.errors.push("Phone")
                }
                var re = /\S+@\S+\.\S+/;
                var  email_v= re.test(this.item.email);
                if (!this.item.email && !email_v) {
                    this.errors.push("Email")
                }
                //    if(!this.item.pickup_address){this.errors.push("Pickup Address")}
                if (!this.item.pickup_location) {
                    this.errors.push("Pickup Location")
                }
                if (!this.item.total_room) {
                    this.errors.push("No. of Rooms")
                }
                if (!this.meta.meta_transport) {
                    this.errors.push("Transport")
                }

                if (!_.isEmpty(this.errors)) {
                    this.errormodal = true
                    this.submit = true;
                } else {

                    var res = this.item.phone.replace(/\(/g, "");
                    res = res.replace(/\)/g, "");
                    res = res.replace(/-/g, "");
                    res = res.replace(/ /g, "");
                    this.setPhone(res);

                    let trav = new FormData();

                    trav.set("name", this.item.full_name)
                    trav.set("email", this.item.email)
                    trav.set("phone", this.item.phone)
                    trav.set("type", "group")
                    axios.post('/api/v1/travellers', trav)
                        .then(response => {
                            console.log(response)
                            console.log(response.data.status)
                            this.setTraveller_id(response.data.id);
                            if (response.data.status == 'error') {
                                this.submit = true;
                                alert(response.data.type);
                            } else {

                                if (this.newremark1 != '') {

                                    this.setRemarkedit(this.newremark1)

                                }


                                if((this.tour_name ==null || this.tour_name =='') && this.checked ===false){
                                    var namet='';
                                    this.tourlocalarray.forEach((callback)=>{
                                        console.log(callback.name);
                                        namet+= callback.name + "|";
                                    })

                                    namet = namet.substring(0, namet.length - 1);
                                    // console.log("custom name"+namet);
                                    this.setTour_name(namet)
                                    this.localtourdata['title']=namet;
                                }
                                else {
                                    if(this.tour_name ==null || this.tour_name ==''){

                                        this.setTour_name(this.item.tour_name)
                                        this.localtourdata['title']=this.item.tour_name;
                                    }
                                    else{
                                        this.localtourdata['title']=this.tour_name;
                                        this.setTour_name(this.tour_name)
                                    }
                                }
                                this.showerror = true;

                                if(this.item.bill_pay){
                                    this.setActivated(1);
                                    this.setStatus(2);
                                    this.storeData()
                                        .then(() => {
                                            if(this.save_tour=== true && this.checked ===false){

                                                // tourdata:{'titel':'','locations':'','total_tour_days':''}
                                                this.localtourdata['locations']=JSON.stringify(this.tourlocalarray)
                                                this.localtourdata['total_tour_days']=1

                                                this.addnewtour(this.localtourdata,document.querySelector("meta[name='user-id']").getAttribute('content'));




                                            }
                                            this.$router.push({name: 'groups.index'})
                                            this.$eventHub.$emit('create-success')
                                        })
                                        .catch((error) => {
                                            this.submit = true;
                                            this.setActivated("");
                                            this.setStatus(1);
                                            console.error(error)
                                            window.location.reload();
                                        })
                                }
                                else{
                                    var agency_id=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'))
                                    axios.get('/api/webservices/debit_point', {
                                        params: {
                                            agency_id:agency_id.id,
                                            agent_id:document.querySelector("meta[name='user-id']").getAttribute('content'),
                                            type:'itinerary',
                                            remark:'Activating Itinerary from : '+this.item.booking_id

                                        }
                                    })

                                        .then(response => {

                                            console.log(response.data)
                                            if(response.data.includes("Success")){
                                                this.setBill_pay(1)
                                                this.setActivated(1);
                                                this.setStatus(2);
                                                if((this.tour_name ==null || this.tour_name =='') && this.checked ===false){
                                                    var namet='';
                                                    this.tourlocalarray.forEach((callback)=>{
                                                        console.log(callback.name);
                                                        namet+= callback.name + "|";
                                                    })

                                                    namet = namet.substring(0, namet.length - 1);
                                                    // console.log("custom name"+namet);
                                                    this.setTour_name(namet)
                                                    this.localtourdata['title']=namet;
                                                }
                                                else {
                                                    if(this.tour_name ==null || this.tour_name ==''){

                                                        this.setTour_name(this.item.tour_name)
                                                        this.localtourdata['title']=this.item.tour_name;
                                                    }
                                                    else{
                                                        this.localtourdata['title']=this.tour_name;
                                                        this.setTour_name(this.tour_name)
                                                    }
                                                }
                                                this.storeData()
                                                    .then(() => {
                                                        if(this.save_tour=== true && this.checked ===false){

                                                            // tourdata:{'titel':'','locations':'','total_tour_days':''}
                                                            this.localtourdata['locations']=JSON.stringify(this.tourlocalarray)
                                                            this.localtourdata['total_tour_days']=1

                                                            this.addnewtour(this.localtourdata,document.querySelector("meta[name='user-id']").getAttribute('content'));




                                                        }
                                                        this.$router.push({name: 'groups.index'})
                                                        this.$eventHub.$emit('create-success')
                                                    })
                                                    .catch((error) => {
                                                        this.submit = true;
                                                        this.setActivated("");
                                                        this.setStatus(1);
                                                        console.error(error)
                                                        window.location.reload();
                                                    })
                                            }
                                            else {
                                                alert(response.data);
                                            }
                                        })
                                        .catch(error => {
                                            alert("Error in debit points ");
                                            console.log(error)
                                        })
                                }



                            }

                        })
                        .catch(error => {
                            this.submit = true;
                            alert("error");
                            console.log(error)
                        })
                }
            },
            update_hotel(){
                this.places.cites.forEach((val) => {

                    console.log(val.id);
                    var gg=val.id;

                    this.fetchhotel(gg.split('-')[0])
                });
            },
            inmodal_form1(e){
                this.selected_form=e;
               // console.log(JSON.parse(e.form_html))
               // this.preview=true;
               //  this.form_preview=_.cloneDeep(e)
               //  this.form_preview.form_html=_.cloneDeep(JSON.parse(e.form_html))
            },
            inmodal_form(e){
                this.selected_form=e;
                this.preview=true;
                this.form_preview=_.cloneDeep(e)
                this.form_preview.form_html=_.cloneDeep(JSON.parse(e.form_html))
            },
            hide_form(){
                this.preview=false;
                this.form_preview=_.cloneDeep([]);
            },
            fetch_forms(){
                this.loading2=true;
                this.forms_data_modal=[];
                this.form_preview=[];

                axios.get('/api/v1/form_ids')
                    .then(response =>{
                        this.forms_data=response.data.data;
                        // console.log(this.forms_data);
                        this.loading2=false;
                    });
            },
            remove_class(e){
                if(e===1){
                    this.update_status();
                }
                var element = document.getElementById("dropdown"+e);
                element.classList.remove("open");
            },
        },


        components: {
            PersonaliseApp,
            LocationPlaceComponent, LocationComponent, HotelComponent, DayplanComponent, draggable, FormWizard,
            TabContent, WizardButton, WizardStep, BadgerAccordion, BadgerAccordionItem, VueTelInput,ColorPicker
        }
    }
</script>

<style scoped>
    .header_footer{

        padding:10px 0px 10px 0px;
        color:black;

    }
    .field_class{
        border: none !important;
        border-radius: 5px !important;
        padding:10px;
    }
    .dim{min-height: 960px;}
    .sameclass{font-size: 20px; width: 100%; height: 100%;color:grey}
    input[type=number] {
        -moz-appearance:textfield;
    }
    /*form styles*/
    #msform {
        width: 80%;
        margin: 50px auto;
        text-align: center;
        position: relative;
    }

    #msform fieldset {
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

    /*Hide all except first fieldset*/
    #msform fieldset:not(:first-of-type) {
        display: none;
    }


    #msform .action-button {
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


    /*headings*/


    /*progressbar*/
    #progressbar {
        margin-bottom: 30px;
        overflow: hidden;
        /*CSS counters to number the steps*/
        counter-reset: step;
        width:100%;
    }

    #progressbar li {
        list-style-type: block;
        color: white;
        text-transform: uppercase;
        font-size: 9px;
        width: 33.33%;
        margin-left:-10px;
        float: left;
        position: relative;
    }

    #progressbar li:before {
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

    /*progressbar connectors*/
    #progressbar li:after {
        content: '';
        width: 100%;
        height: 2px;
        background: white;
        position: absolute;
        left: -50%;
        top: 9px;
        z-index: -1; /*put it behind the numbers*/
    }

    #progressbar li:first-child:after {
        /*connector not needed before the first step*/
        content: none;
    }

    /*marking active/completed steps green*/
    /*The number of the step and the connector before it = green*/
    #progressbar li.active:before, #progressbar li.active:after {
        background: #27AE60;
        color: white;
    }


    .activedev{
        display: block;
    }
    .hidedev{
        display: none;
    }
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

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    input[type="file"] {
        display: none;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #4a9999;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #17507d;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
    .add_style{background-color: white}
    #continue_button{position:fixed;margin-left: -50.5%}
    #fixed{position:fixed}
    #handle-input{border:1px solid gainsboro;width:100%;border-radius:3px}


</style>
<style>
    .accordiona {
        background-color: #D1ECF1;
        color: #0C5477;
        cursor: pointer;
        padding: 6px;
        border-radius: 4px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
    }



    .panela {
        padding: 18px;
        color: #0C5477;
        border-radius: 3px;
        border: 2px solid #D1ECF1;
        border-top: unset;
        font-size: 14px;
        background-color: white;
        overflow: hidden;
    }


    .badger-toggle-indicator{font-size:25px;}
    .wizard-card-footer.clearfix {

        top: 90%;
        position: fixed;

    }
    .wizard-footer-left {

        position:fixed;left: 22%

    }
    .wizard-footer-right {

        position:fixed;left:72.5%

    }
    .vue-form-wizard.md .wizard-icon-circle {

        width: 30px;
        height: 30px;
        font-size: 14px;
        margin-top: 20px;

    }
    .bootstrap-datetimepicker-widget{
        z-index:3;
    }


    input{
        font-size: 20px;
        padding-left: 10px;
    }
    .vue-form-wizard * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .rowstyle{border: 1px solid white;width: 68%;color: gray;}
    .labelstyle{font-weight: normal;font-size: 20px;color:gray}
    .labelmar{margin-left: -18%}
    .sizeshort{font-size:14px}
    .inputfield{width:122%;

        margin-left: -18%;

        color:
            darkgrey;

        border: 1px solid
        gainsboro;

        border-radius: 5px;

        background-color:
            white;}
    .datestyle{width: 111.8%;border-radius: 3px;}
    .inputfield1{width:122%;



        color:
            darkgrey;

        border: 1px solid
        gainsboro;

        border-radius: 5px;

        background-color:
            white;}
    select{border: 0;width: 116%}
    .costinput{padding-left: 35px; color: grey; width: 132%; border: 1px solid gainsboro;padding-right: 35px;}
    .typeinput{padding-left:20px;color:grey;width: 100%;border:0;border: solid gainsboro 1px}
    .imgsize{width: 27px;height: 27px;}
    /*.prog{width: 80%}*/
    .query{margin-left: 5% !important;min-height: 1000px;font-family: Open Sans}
    .dateinput{width: 136%;color:grey;}
    .mealimg{width: 30px}
    .marcrete{margin-left: -2%}
    .adultrow{background-color: white; border: 1px solid gainsboro; width: 184%; margin-left: -50%; border-radius: 5px;}
    .mar{margin-left: -25%}
    .font{font-size: 15px; color: grey;}
    #room{margin-left:-20%}
    #extra{margin-left:-50%}
    #adult{font-size: 10px;
        color:
            darkgray;
        margin-top: -32%;
        width: 169%;
        margin-left: -20%;}
    #child{font-size: 10px;
        color:
            darkgray;
        margin-top: -40%;
        width: 217%;
        margin-left: -7%;}
    #infant{font-size: 10px;
        color:
            darkgray;
        margin-top: -95%;
        width: 643%;
        margin-left: -135%;}
    #roomp{font-size: 10px;
        margin-top: -25%;
        color:
            darkgrey;
        width: 119%;
        margin-left: -20%;
    }
    #extrap{font-size: 10px;
        color:
            darkgrey;
        margin-top: -9px;
        margin-left: -20%;
    }
    #adultinput{font-size: 16px; color: grey; width: 55px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px;margin-left: -12%;}
    #childinput{font-size: 16px; color: grey; width: 59px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px;}
    #ininput{font-size: 16px; color: grey; width: 59px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px;margin-left: -58%;}
    #childrow{margin-left: -73%}
    #adultcol{margin-top:-10%}
    #childcol{margin-top: -12%;}
    #incol{margin-top: -19%;}
    #roomcol{
        width: 164px;
        z-index: 1;
        background-color: white;
        border: 1px solid gainsboro;
        border-radius: 5px;
        margin-left: 16%;
    }
    #inputcol{margin-bottom: 6%;margin-left: -13%;margin-top: -13%;}
    #roominput{font-size: 16px; color: grey; width: 59px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px;}
    #ext{margin-left: 12%;}
    #extrow{margin-left: -103%;}
    #extp{margin-left:25%}
    #extin{margin-top:-9%}
    #extinput{font-size: 16px;
        color:
            grey;
        width: 59px;
        border: 1px solid
        gainsboro;
        padding: 0px 0px 0px 4px;}
    .transinput{border: 0px none; width: 115%;}
    .imgdem{height:25px;width:25px;margin-left: -150%}
    #remarktxt{overflow: hidden;border:0;width:114%}
    .drop{width: 121%;
        background-color:
            white;}
    .durationcol{border: 1px solid gainsboro; border-radius: 3px; background-color: white;}
    .firstin{background-color: white;color:grey;padding-left:15px;width: 70%;border:0;border-right: solid gainsboro 1px;}
    .secondin{background-color: white;padding-left: 15%;color:grey;width: 25%;border:0}
    #tra1{background-color: white;
        border: 1px solid gainsboro;
        width: 100%;
        margin-left: 0px;
        border-radius: 5px;}
    #adultyr{font-size: 10px; color: darkgray; margin-top: -15%; width: 85%;}
    #admar{margin-left: -40%}
    #adin{font-size: 16px; color: grey; width: 55px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px;}
    #aduin{margin-top: -11%;}
    .typemar{margin-right: 11.5%;}
    #cost_input{ color: grey; width: 132%; border: 1px solid gainsboro;padding-right: 35px;}
    #type_input{color:grey;width: 100%;border: solid gainsboro 1px}
    .img_margin{margin-left: -3%}
    .mar_bottom{margin-bottom: -2%}
    #date_style{width: 126.8%;border-radius: 3px;}
    .location_bottom{margin-bottom: -10px}
    #location_in1{background-color: white;border:0;border:solid gainsboro 1px;width: 66.8%;color:grey;padding-left: 20px}
    #location_in2{border:0;border:solid gainsboro 1px;width:7%;padding-left: 10px;color:grey}
    .in_width{width: 126.8%;}
    #dur_row{margin-left: -1.8%;}
    .dur_in{border: 1px solid gainsboro; border-radius: 3px; background-color: white;}
    .dura_in{background-color: white;color:grey;padding-left:15px;width: 70%;border:0;border-right: solid gainsboro 1px;}
    .durat_in{background-color: white;padding-left: 15px;color:grey;width: 25%;border:0}
    #tra_row{background-color: white; border: 1px solid gainsboro; width: 95%; margin-left: 0px; border-radius: 5px;}
    #tra_ml{margin-left: -50%;}
    #adu-yr{font-size: 10px; color: darkgray; margin-top: -14%; width: 43px;}
    #ad-mt{margin-top: -16%;}
    #ad-in{font-size: 16px; color: grey; width: 55px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px;}
    #sc{border-left: solid white 2px;margin-left: -7%;padding-left:3%}
    #pc-mb{margin-bottom: -10px}
    .scrollbar{

        overflow-y:scroll;
        float:left;
    }



    /* width */
    #ex3::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    #ex3::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    #ex3::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    #ex3::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .modal_preview input[type="file"] {
        display: block !important;
    }
    .arrange_edit-add-task{
        position: relative;
        top: -122px;
        right: -4px;
    }
    @media screen and (min-width: 1200px) and (max-width: 1300px){
        .arrange_edit-add-task{
            position: relative;

            right: -13px;
        }
    }
    @media screen and (min-width: 1900px){
        .arrange_edit-add-task{
            position: relative;

            right: -20px;
        }
    }
</style>
<style scoped>
    /* The container */
    .container_box {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container_box input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark_box {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius:5px;
    }

    /* On mouse-over, add a grey background color */
    .container_box:hover input ~ .checkmark_box {
        background-color: #ccc;
    }


    /* When the checkbox is checked, add a blue background */
    .container_box input:checked ~ .checkmark_box {
        background-color: #2196F3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark_box:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container_box input:checked ~ .checkmark_box:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container_box .checkmark_box:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .fields_div{
        font-size: 18px; color: grey; font-weight: 525; margin-left: -20px;text-align: right;
    }
    /*.loadnew {*/
    /*    font-family: "Avenir", Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    text-align: center;*/
    /*    height: 40vh;*/
    /*    color: #fff;*/
    /*    background: #3e423a;*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*}*/
</style>
<style>
    .content_div{

        padding: 15px !important;
        border-radius: 5px !important;
        margin-top: 20px;
    }
    .content_row{
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .no_event{
        pointer-events:none;
    }
</style>
