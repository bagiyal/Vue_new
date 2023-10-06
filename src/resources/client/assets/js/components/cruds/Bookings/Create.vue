<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 1000px;font-family: Open Sans">

        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>
            <h1 class="ml-3">Booking: {{item.booking_id}}</h1>
            <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        </section>

        <div class="activedev mt-n5" :class="[create ? 'activedev' : 'hidedev' ]" id="msform" style="width: 80%;height:auto">
            <!-- progressbar -->
            <div>
                <form-wizard class="f-1-4" @on-complete="onCompletecreate" color="rgb(23, 80, 125)" title=""  subtitle="">
                    <tab-content title="Tour Creation" icon="fa fa-check">
                        <fieldset>
                            <div  class="container-fluid mt-5">
                                <div  class="row mb-3">
                                    <div class="col-lg-8 border border-light">
                                        <div  class="row">

                                            <div  class="col-lg-6 text-left">
                                                <div  class="row">
                                                    <div  class="col-12">

                                                        <label  class="h2 fw-4 text-muted">Date</label>
                                                        <date-picker
                                                            :value="item.driver_pick_up_time"
                                                            :config="$root.dpconfigDate_disable_dates"
                                                            name="driver_pickup_date_time"
                                                            @dp-change="updatedriver_pick_up_time"
                                                            class="text-dark f-1-4 fw-4"

                                                        >
                                                        </date-picker>
                                                    </div>
                                               </div>

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
                                            &nbsp;&nbsp; <span style="    font-size: 12px;">Save Tour <input type="checkbox" v-model="save_tour"></span>
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
                    <tab-content title="Tour Details" icon="fa fa-check">
                        <fieldset class="pl-0">
                            <div class="container-fluid mt-5">
                                <!--first row-->
                                <div  class="row">
                                    <div  class="col-lg-6 pl-0">
                                        <div  class="row">
                                            <div  class="col-lg-12 col-md-12 col-xl-12 text-left">
                                                <p class="f-2 fw-5 text-muted ml-n4">Travelers</p>
                                            </div>
                                        </div>
                                        <div class="row mt-n3">
                                            <div class="col-lg-7 bg-w border rounded">
                                                <div class="row text-center pt-2 pb-2" style="">
                                                    <div class="col-lg-4 pl-3">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="f-1-5 fw-4 text-muted">Adults</p>
                                                            </div>
<!--                                                            <div class="col-lg-12 col-md-12 col-xl-12" style="">-->
<!--                                                                <p class="fw-4 text-muted f-09">(12+ yrs)</p>-->
<!--                                                            </div>-->
                                                            <div class="col-lg-12">
                                                                <vue-numeric-input v-model="item.no_of_adults"

                                                                                   :min="1"
                                                                                   :step="1"></vue-numeric-input>
                                                                <!--                                                                                        <input type="number" id="adult" class="form-control" min="1"-->
                                                                <!--                                                                                              -->
                                                                <!--                                                                                        >-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 pl-3">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="f-1-5 fw-4 text-muted">Children</p>
                                                            </div>
<!--                                                            <div class="col-12" style="">-->
<!--                                                                <p class="fw-4 text-muted f-09">(2-12 yrs)</p>-->
<!--                                                            </div>-->
                                                            <div class="col-12" style="">
                                                                <vue-numeric-input v-model="item.no_of_children"

                                                                                   :min="0"
                                                                                   :step="1"></vue-numeric-input>
                                                                <!--                                                                                        <input type="number" id="child" min="0" style="width: 50px;height: 25px;border: 1px solid darkgrey;border-radius: 3px;" value="0"  placeholder="0"-->
                                                                <!--                                                                                               -->
                                                                <!--                                                                                        >-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 pl-3">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="f-1-5 fw-4 text-muted">Infant</p>
                                                            </div>
<!--                                                            <div class="col-12" style="">-->
<!--                                                                <p class="fw-4 text-muted f-09">(below 2yrs)</p>-->
<!--                                                            </div>-->
                                                            <div class="col-12" style="">
                                                                <vue-numeric-input v-model="meta.meta_infant"

                                                                                   :min="0"
                                                                                   :step="1"></vue-numeric-input>
                                                                <!--                                                                                        <input type="number" id="infant" min="0" style="width: 50px;height: 25px;border: 1px solid darkgrey;border-radius: 3px;" placeholder="0"-->
                                                                <!--                                                                                               -->
                                                                <!--                                                                                        >-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-lg-5 bg-w border rounded">
                                                <div class="row text-center pt-2 pb-2">
                                                    <div class="col-lg-6">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="f-1-5 fw-4 text-muted">Rooms</p>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <vue-numeric-input v-model="item.total_room"

                                                                                   :min="1"
                                                                                   :step="1"></vue-numeric-input>
                                                                <!--                                                                                        <input type="number" id="adult" class="form-control" min="1"-->
                                                                <!--                                                                                              -->
                                                                <!--                                                                                        >-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="f-1-5 fw-4 text-muted">E.Beds</p>
                                                            </div>
                                                            <div class="col-12 m-t1">
                                                                <vue-numeric-input v-model="meta.meta_extra_bed"

                                                                                   :min="0"
                                                                                   :step="1"></vue-numeric-input>
                                                                <!--                                                                                        <input type="number" id="child" min="0" style="width: 50px;height: 25px;border: 1px solid darkgrey;border-radius: 3px;" value="0"  placeholder="0"-->
                                                                <!--                                                                                               -->
                                                                <!--                                                                                        >-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="row pt-3">
                                            <div  class="col-12 text-left pl-0">
                                                <p class="f-2 fw-5 text-muted">Transport</p>
                                            </div>
                                        </div>
                                        <div  class="row mt-n3">
                                            <div  class="col-12 pl-0 text-left pr-0">
                                                <img src="./../dashboard_resources/transport.png" class="hw-i p-a mt-1 ml-2">
                                                <input type="text" :value="meta.meta_transport" @input="updatemeta_transport" class="form-control pl-5 f-1-4 fw-4"/>
                                            </div>
                                        </div>
                                        <div  class="row pt-3">
                                            <div  class="col-12 text-left pl-0">
                                                <p class="f-2 fw-5 text-muted">Pickup Location</p>
                                            </div>
                                        </div>

                                        <div  class="row mt-n3">
                                            <div  class="col-12 pl-0 text-left pr-0">
                                                <img  src="./../dashboard_resources/location.png" class="hw-i p-a mt-1 ml-2">
                                                <input type="text"  :value="item.pickup_location"
                                                       @input="updatePickup_location"  class="form-control pl-5 f-1-4 fw-4">
                                            </div>
                                        </div>
                                    </div>
                                    <div  class="col-lg-5 offset-1 pr-0 pl-0">
                                        <!--                                        <div  class="row ml-1">-->
                                        <!--                                            <div  class="col-12 text-left">-->
                                        <!--                                            <p class="labelstyle">Budget</p>-->
                                        <!--                                        </div>-->
                                        <!--                                        </div>-->
                                        <!--                                        <div  class="row inputfield1 ml-4">-->
                                        <!--                                            <div  class="col-1">-->
                                        <!--                                                <img src="./../dashboard_resources/currency.png" class="imgdem">-->
                                        <!--                                            </div>-->
                                        <!--                                            <div class="col-9">-->
                                        <!--                                                <input  type="text" :value="item.budget"  @input="updateBudget" class="transinput">-->
                                        <!--                                            </div>-->
                                        <!--                                            <div class="col-1 ml-5"><img  src="./../dashboard_resources/edit.png" class="imgdem">-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->
                                        <div  class="row pt-3"><div  class="col-12 text-left">
                                            <p class="f-2 fw-5 text-muted">Remark</p></div>
                                        </div>

                                        <div  class="row mt-n3">
                                            <div  class="col-12 pr-0 text-left">
                                                <img src="./../dashboard_resources/remark_gray.png" class="hw-i p-a mt-1 ml-2">
                                                <textarea   rows="3" class="form-control pl-5 f-1-4 fw-4" style="overflow:hidden"
                                                            v-model="newremark1" >
                                                        </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--                            <input type="button" name="previous" class="previous action-button" value="Previous" style="margin-left: 140px" />-->
                            <!--                            <input type="button" name="next" class="next action-button" value="Next" />-->
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
                    <tab-content title="Contacts Details" icon="fa fa-check">

                        <fieldset>
                            <div class="container-fluid mt-5">
                                <div  class="row">
                                    <div  class="col-lg-6 text-left ml-n5">
                                        <div  class="row">
                                            <div  class="col-12">
                                                <p class="fw-4 h2 text-muted">Mobile</p>
                                            </div>
                                        </div>
                                        <div  class="row">
                                            <div  class="col-12">
                                                <span class="p-a pl-2"><img src="./../dashboard_resources/contact.png"></span>
                                                <vue-tel-input  v-model="item.phone"  @input="updatePhone" v-bind="bindProps" name="phone" placeholder="Enter Phone No." class="form-control pl-5 pr-5 f-1-5 vue-tel-input fw-3"></vue-tel-input>

                                                <!--                                                <input placeholder="888888888"   :value="item.phone"-->
                                                <!--                                                       @input="updatePhone" type="text" name="name" style="padding-left: 40px; border: 1px solid gainsboro; border-radius: 5px; width: 315px;">-->

                                                <span class="edit_form_img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i">
                                    </span>
                                            </div>
                                        </div>


                                        <div  class="row mt-5">
                                            <div  class="col-12">
                                                <p  class="fw-4 h2 text-muted">E-mail ID</p>
                                            </div>
                                        </div>
                                        <div  class="row">
                                            <div  class="col-12">
                                                <span class="p-a"><i class="fas fa-envelope c-grey pl-3 f-1-8 pt-2 "></i></span>
                                                <input  type="email" name="name"  :value="item.email"
                                                        @input="updateEmail" placeholder="adb@gmail.com" class="form-control fw-4 pl-5"><span class="edit_form_img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i">
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  class="col-6 text-left">
                                        <div  class="row">
                                            <div  class="col-12">
                                                <p class="fw-4 h2 text-muted">Name</p>
                                            </div>
                                        </div>
                                        <div  class="row">
                                            <div  class="col-12">
                                                <span class="p-a"><i class="fas fa-user pl-3 c-grey pt-2 f-1-8"></i></span>
                                                <input  type="text" class="form-control pl-5 fw-4 pl-5" placeholder="Enter Traveler name"
                                                        :value="item.full_name"
                                                        @input="updateTraveler_name" name="name"><span class="edit_form_img">

                                        <img src="./../dashboard_resources/edit.png" class="hw-i">
                                                <button @click="resettrav" title="Rest Traveller Details" type="button" style="font-size: 15px;margin-left: 150px;margin-top:15px;background-color: #ffc107 !important;" class="btn btn-default btn-sm" >
                                                <i class="fa fa-refresh" :class="{'fa-spin': loading}"></i> Refresh
                                            </button>
                                    </span>

                                            </div>

                                        </div>
                                        <div  class="row mt-5">
                                            <div  class="col-12">
                                                <p class="fw-4 h2 text-muted">Query Source</p>
                                            </div>
                                        </div>
                                        <div  class="row">
                                            <div  class="col-12">
                                                <span class="p-a"><img src="./../dashboard_resources/Querysource.png" class="pl-1 "></span>
                                                <select :value="meta.meta_source" @change="updatemeta_source" type="text" name="name" placeholder="Social Media" class="form-control fw-4 pl-5">
                                                    <option value="Adwords">Adwords</option>
                                                    <option  value="Social Media">Social Media</option>

                                                    <option value="Offline Purchase">Offline Purchase</option>
                                                    <option value="Repeat">Repeat</option>
                                                    <option value="Referred">Referred</option>
                                                    <option value="Website">Website</option>
                                                    <option selected value="Walk In">Walk In</option>
                                                    <option value="Phone Call">Phone Call</option>
                                                    <option value="Corporate">Corporate</option>
                                                    <option value="Sales Team">Sales Team</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--                            <input type="button" name="previous" class="previous action-button" value="Previous" style="margin-left: 140px"/>-->
                            <!--                                            <input @click="submitForm" name="submit" class="submit action-button" value="Save & Exit" />-->
                            <!--                                            <input type="button" @click="changemenu('createfull')"  name="continue" class="submit action-button" value="Continue" />-->
                        </fieldset>
                    </tab-content>


                    <template slot="footer" slot-scope="props">
                        <div class="wizard-footer-left">
                            <wizard-button v-if="props.activeTabIndex > 0 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Previous</wizard-button>
                        </div>
                        <div class="wizard-footer-right">
                            <wizard-button v-if="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next</wizard-button>
                            <wizard-button v-if="props.isLastStep" @click.native="changemenucontinue(), setmeta_mail_format()" class="wizard-footer-left finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Continue' : 'Next'}}</wizard-button>
                            <wizard-button v-if="props.isLastStep && submit" @click.native="submitForm1" class="wizard-footer-right finish-button" :style="props.fillButtonStyle" id="fixed">{{props.isLastStep ? 'Save & Exit' : 'Next'}}</wizard-button>
                        </div>
                    </template>

                </form-wizard>



            </div>
        </div>
        <section v-if="createfull" class="content m-t2px" :class="[createfull ? 'activedev' : 'hidedev' ]">
            <div class="row">
                <div class="col-lg-2">
                    <ul class="sidenav">
                        <a href="#"  :class="summ==true?'sidenavactive':''"> <li @click="changeview('summ')" > Summary</li></a>
                        <a href="#" :class="hotel==true?'sidenavactive':''"><li  @click="changeview('hotel')" >Hotels</li></a>
                        <a href="#" :class="day==true?'sidenavactive':''"> <li @click="changeview('day')" >Day Plan</li></a>
                        <a href="#" :class="exe==true?'sidenavactive':''"> <li @click="changeview('exe')" >Executive & Transport</li></a>
                        <a href="#" :class="trav==true?'sidenavactive':''"><li @click="changeview('trav')" >Traveller</li></a>
<!--                        <a href="#" :class="train==true?'sidenavactive':''"><li  @click="changeview('train')" >Train/Flight</li></a>-->
                        <a href="#" :class="mail==true?'sidenavactive':''"><li @click="changeview('mail')" >Mail Format</li></a>

<!--                        <a href="#" :class="up==true?'sidenavactive':''"><li @click="changeview('up')" >Upload</li></a>-->
                        <a href="#" :class="cost==true?'sidenavactive':''"><li @click="changeview('cost')" >Cost</li></a>
                        <a href="#" :class="intraction==true?'sidenavactive':''"><li @click="changeview('intraction')" >Interaction History</li></a>
                    </ul>
                </div>
                <div class="col-lg-10">
                    <!--                    Executive and handler-->
                    <div :class="[exe ? 'activedev' : 'hidedev' ]" class="query-content">
                        <div class="row">
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-12"><p class="fw-4 h2 text-muted">Handler Name</p></div>
                                    <div class="col-12"><input type="text" :value="item.handler_name" @change="updateHandler_name" class="form-control"></div>
                                </div>
                                <div class="row pt-5">
                                    <div class="col-12"><p class="fw-4 h2 text-muted">Driver Name</p></div>
                                    <div class="col-12"><input type="text"  :value="meta.meta_driver_name" @change="updatemeta_driver_name" class="form-control"></div>
                                </div>
                                <div class="row pt-5">
                                    <div class="col-12"><p class="fw-4 h2 text-muted">Transport Type</p></div>
                                    <div class="col-12"><input type="text" :value="meta.meta_transport" @input="updatemeta_transport" class="form-control"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <span class="c-grey f-2">Handler Mobile no</span>
                                    </div>
                                    <div  class="col-12 input-group ml-4">
                                        <span class="input-group-prepend"><i class="fas fa-phone-alt input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                        <vue-tel-input  v-model="item.handler_no" v-bind="bindProps" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone" @input="updateHandler_no"></vue-tel-input>
                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                    </div>


                                </div>

                                <div class="row pt-5">
                                    <div class="col-lg-12">
                                        <span class="c-grey f-2">Driver Mobile no</span>
                                    </div>
                                    <div  class="col-12 input-group ml-4">
                                        <span class="input-group-prepend"><i class="fas fa-phone-alt input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                        <vue-tel-input  v-model="meta.meta_driver_no" v-bind="bindProps" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone" @input="updatemeta_driver_no"></vue-tel-input>
                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                    </div>


                                </div>
                                <div class="row pt-5">
                                    <div class="col-12"><p class="fw-4 h2 text-muted">Transport Number</p></div>
                                    <div class="col-12"><input type="text" :value="meta.meta_transport_no" @input="updatemeta_transport_no" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                        <button  class="button-css" @click="changeview('trav')" >Traveller</button>

                    </div>
                    <!--                summary-->
                    <div :class="[summ ? 'activedev' : 'hidedev' ]" class="query-content">

                        <div class="row mt-4 mb-5">
                            <!--            First section-->
                            <div class="col-lg-6">
                                <!--                                    <div class="row">-->
                                <!--                                        <div class="col-12"><p >Cost Amount</p></div>-->
                                <!--                                    </div>-->
                                <!--                                    <div class="row">-->
                                <!--                                        <div class="col-3 typemar"><label >Price</label></div>-->
                                <!--                                        <div class="col-4"><label >Type</label>-->
                                <!--                                        </div></div>-->

                                <!--                                    <div class="row" v-for="(cost,index) in item.tour_cost">-->
                                <!--                                        <div class="col-3 typemar"><input type="number" pattern="Cost" id="cost_input" v-model="cost.cost"></div>-->
                                <!--                                        <div class="col-4" ><input type="text" pattern="Type" id="type_input" v-model="cost.type"></div>-->
                                <!--                                        <div class="col-1 img_margin"><img  @click="item.tour_cost.splice(index, 1) " src="./../dashboard_resources/minus.png" class="imgsize"></div>-->
                                <!--                                        <div class="col-1 img_margin"><img @click="item.tour_cost.push({'cost':'','type':''})" src="./../dashboard_resources/plus.png" class="imgsize"></div>-->

                                <!--                                    </div>-->


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
                                <!--                                    Create Own Tour  <label class="switch">-->
                                <!--                                    <input type="checkbox" v-model="checked">-->
                                <!--                                    <span class="slider round"></span>-->
                                <!--                                </label>-->
                                <!--                                    Select Tour-->
                                <!--                                    <div :class="[checked ? 'hidedev' : 'activedev' ]">-->
                                <!--                                        <div class="row mt-4">-->
                                <!--                                            <div class="col-12 location_bottom"><p >Add Location<i class="fas fa-calendar-alt ml-2"></i></p></div>-->
                                <!--                                        </div>-->
                                <!--                                        <div class="row">-->
                                <!--                                            <div class="col-8">-->
                                <!--                                                <v-select :clearable="false" placeholder="Select"-->
                                <!--                                                          name="addlocations"-->
                                <!--                                                          class="in_width"-->
                                <!--                                                          label="title"-->
                                <!--                                                          @input="inmodalL"-->

                                <!--                                                          :options="cityAll"-->

                                <!--                                                />-->
                                <!--                                            </div>-->
                                <!--                                        </div>-->
                                <!--                                    </div>-->

                                <!--                                    <div :class="[checked ? 'activedev' : 'hidedev' ]">-->
                                <!--                                        <div class="row mt-4">-->
                                <!--                                            <div class="col-12 location_bottom"><p >Select Tour<i class="fas fa-calendar-alt ml-2"></i></p></div>-->
                                <!--                                        </div>-->
                                <!--                                        <div class="row">-->
                                <!--                                            <div class="col-8">-->
                                <!--                                                <v-select :clearable="false" placeholder="Select"-->
                                <!--                                                          name="addtours"-->
                                <!--                                                          label="title"-->
                                <!--                                                          @input="inmodal"-->
                                <!--                                                          class="in_width"-->
                                <!--                                                          :value="tour_ob"-->
                                <!--                                                          :options="tourAll"-->
                                <!--                                                          v-model="tour_ob"-->

                                <!--                                                />-->
                                <!--                                            </div>-->
                                <!--                                        </div>-->
                                <!--                                    </div>-->

                                <div class="row mt-3">
                                    <div class="col-12 mb-n3"><p class="text-muted">Duration</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-6"><input disabled type="text" class="in-put-7" value="Nights"><input disabled type="text" class="in-put-25" :value="days_count"> </div>
                                    <div class="col-6 ml-n2"><input disabled type="text" class="in-put-7" value="Day"><input disabled type="text" class="in-put-25" :value="days_count+1"> </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 mb-n3"><p class="text-muted">Travelers</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 mr-3 ml-4 div-back">
                                        <div class="row text-center pt-2 pb-2" style="">
                                            <div class="col-lg-4">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="f-1-4 fw-4 text-muted">Adults</p>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12 col-xl-12" style="">
                                                        <p class="fw-4 text-muted f-09">(12+ yrs)</p>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <vue-numeric-input v-model="item.no_of_adults"
                                                                           :min="1"
                                                                           :step="1"></vue-numeric-input>
                                                        <!--                                                                                        <input type="number" id="adult" class="form-control" min="1"-->
                                                        <!--                                                                                              -->
                                                        <!--                                                                                        >-->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="f-1-4 fw-4 text-muted">Children</p>
                                                    </div>
                                                    <div class="col-12" style="">
                                                        <p class="fw-4 text-muted f-09">(2-12 yrs)</p>
                                                    </div>
                                                    <div class="col-12" style="">
                                                        <vue-numeric-input v-model="item.no_of_children"

                                                                           :min="0"
                                                                           :step="1"></vue-numeric-input>
                                                        <!--                                                                                        <input type="number" id="child" min="0" style="width: 50px;height: 25px;border: 1px solid darkgrey;border-radius: 3px;" value="0"  placeholder="0"-->
                                                        <!--                                                                                               -->
                                                        <!--                                                                                        >-->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="f-1-4 fw-4 text-muted">Infant</p>
                                                    </div>
                                                    <div class="col-12" style="">
                                                        <p class="fw-4 text-muted f-09">(below 2yrs)</p>
                                                    </div>
                                                    <div class="col-12" style="">
                                                        <vue-numeric-input v-model="meta.meta_infant"

                                                                           :min="0"
                                                                           :step="1"></vue-numeric-input>
                                                        <!--                                                                                        <input type="number" id="infant" min="0" style="width: 50px;height: 25px;border: 1px solid darkgrey;border-radius: 3px;" placeholder="0"-->

                                                        <!--                                                                                        >-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-lg-4 div-back ml-5">
                                        <div class="row text-center pt-2 pb-2">
                                            <div class="col-lg-6">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="f-1-4 fw-4 text-muted">Rooms</p>
                                                    </div>
                                                    <div class="col-lg-12 m-t2">
                                                        <vue-numeric-input v-model="item.total_room"

                                                                           :min="1"
                                                                           :step="1"></vue-numeric-input>
                                                        <!--                                                                                        <input type="number" id="adult" class="form-control" min="1"-->
                                                        <!--                                                                                              -->
                                                        <!--                                                                                        >-->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="f-1-4 fw-4 text-muted">E.Beds</p>
                                                    </div>
                                                    <div class="col-12 m-t2">
                                                        <vue-numeric-input v-model="meta.meta_extra_bed"

                                                                           :min="0"
                                                                           :step="1"></vue-numeric-input>
                                                        <!--                                                                                        <input type="number" id="child" min="0" style="width: 50px;height: 25px;border: 1px solid darkgrey;border-radius: 3px;" value="0"  placeholder="0"-->
                                                        <!--                                                                                               -->
                                                        <!--                                                                                        >-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--            second section-->
                            <div class="col-lg-6 pl-5" style="border-left: solid white 2px">
                                <div class="row">
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
                                        >
                                        </date-picker>
                                    </div>

                                    <!--                                            <input type="text"-->
                                    <!--                                                                                                        class="form-control"-->
                                    <!--                                                                                                        name="pickup_location"-->
                                    <!--                                                                                                        placeholder="Enter Pickup location"-->
                                    <!--                                                                                                        :value="meta.meta_pickup_date"-->
                                    <!--                                                                                                              -->
                                    <!--                                                                                                              -->

                                    <!--                                                                                                        @input="updatemeta_pickup_date" style="padding-left: 20px; color: grey; /*! width: 100%; */ border: 1px solid gainsboro;margin-top: -5%;">-->
                                    <!--                                        <div class="col-5" style="margin-left: -15px"><p style="color:grey;">Time</p><input type="text"-->
                                    <!--                                                                                                                            class="form-control"-->
                                    <!--                                                                                                                            name="pickup_location"-->
                                    <!--                                                                                                                            placeholder="Enter Pickup location"-->
                                    <!--                                                                                                                            :value="meta.meta_pickup_time"-->
                                    <!--                                                                                                                            @input="updatemeta_pickup_time" style="padding-left: 20px; color: grey; /*! width: 100%; */ border: 1px solid gainsboro;margin-top: -5%;"></div>-->
                                </div>

                                <div class="row mt-3" >
                                    <div class="col-12" ><p class="text-muted">Query Feel Rating:</p></div>
                                    <div class="col-12 mt-n3">
                                        <div class="row ml-2">

                                            <div class="bg-danger rating-5 text-center" @click="meta.query_feel=5">
                                                <div class="f-1-4 text-light fw-4">5</div>
                                                <i class="fas fa-caret-up mt-0" v-if="meta.query_feel==5"></i></div>
                                            <div class=" bg-warning rating-w-all text-center" @click="meta.query_feel=4">
                                                <div class="f-1-4 text-light fw-4">4</div>
                                                <i class="fas fa-caret-up mt-0" v-if="meta.query_feel==4"></i></div>
                                            <div class="bg-primary rating-w-all text-center" @click="meta.query_feel=3">
                                                <div class="f-1-4 text-light fw-4">3</div>
                                                <i class="fas fa-caret-up mt-0 text-dark" v-if="meta.query_feel==3"></i></div>
                                            <div class=" bg-success rating-w-all text-center" @click="meta.query_feel=2">
                                                <div class="f-1-4 text-light fw-4">2</div>
                                                <i class="fas fa-caret-up mt-0" v-if="meta.query_feel==2"></i></div>
                                            <div class=" bg-dark rating-w-all text-center" @click="meta.query_feel=1">
                                                <div class="f-1-4 text-light fw-4">1</div>
                                                <i class="fas fa-caret-up mt-0" v-if="meta.query_feel==1"></i></div>
                                        </div>

                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-12"><p class="text-muted">Past Interactions</p></div>
                                    <div v-for="(rem,index) in meta.remarks " v-if="index==(meta.remarks.length)-1" class="past-i ml-4 row mt-n3 pb-2">
                                        <!--                                                   {{rem,index}}-->
                                        <div class="col-6 ml-2 mt-2 mr-3 clock">
                                            <span class="text-black pr-2"><i class="far fa-clock"></i></span>{{ rem['time'] | moment}}</div>
                                        <div class="text-right col-5 ml-4"><img  src="./../dashboard_resources/dropdown.png" data-toggle="modal" data-target="#myModal1" class="hw-2"></div>
                                        <div class="col-12 ml-4 pl-2 border-left-3 remark_design">{{rem['remark']}}</div>

                                    </div>
                                    <div class="container">
                                        <div class="modal" id="myModal1">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <button type="button" class="close" data-dismiss="modal">&times;</button><br>
                                                        <div class="container">
                                                            <div v-for="rem in meta.remarks " class="text-success">
                                                                <i class="far fa-clock mr-3"></i>{{ rem['time'] | moment}}
                                                                <span style="">|    Agent: {{rem['agent']}}</span>
                                                                <p class="border-left-3 pl-2 ml-2 text-dark">{{rem['remark']}}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row pt-2">
                                    <div class="col-lg-12"><p class="text-muted">Remark</p></div>
                                    <div class="col-lg-10"><span class="p-a icon-color ml-2"><i class="fa fa-pencil-square-o"></i></span>
                                        <input type="text" class="form-control pl-5"
                                               name="remark"
                                               placeholder="Enter Remark"
                                               v-model="newremark">
                                    </div>
                                    <div class="col-lg-2">

                                        <input type="button" value="Add" @click="updateRemark(newremark)" class="vue-btn btn btn-lg btn-primary text-light">
                                        <!--                                                        <i aria-hidden="true" class="fa fa-paper-plane"></i>-->
                                    </div>
                                </div>
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

                        <dayplan-component :license="license"   :datestart="item.driver_pick_up_time"  :place="places.places_city_id"  :tour_location="item.tour_location" :meal="item.meals_supplement" @addplace="addplace"  @delete="remove" @showtrav="changeview('exe')"></dayplan-component>

                    </div>


                    <!--                    travellers -->
                    <div :class="[trav ? 'activedev' : 'hidedev' ]" class="container pl-5">

                        <div class="row">
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <span class="c-grey f-2">Traveller Name</span>
                                    </div>
                                    <div  class="col-10 input-group ml-4">
                                        <span class="input-group-prepend"><i class="fas fa-user input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                        <input  :value="item.full_name" @input="updateTraveler_name" type="text" class="form-control border-left-0 border-right-0">
                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 ml-n4">
                                <div class="row">
                                    <div class="col-lg-12"><span class="c-grey f-2">Traveller Mobile no</span></div>
                                </div>
                                <div  class="col-10 input-group ml-4">
                                    <span class="input-group-prepend"><i class="fas fa-phone-alt input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                    <vue-tel-input v-model="item.phone" v-bind="bindProps" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone"></vue-tel-input>
                                    <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-12"><span class="c-grey f-2">Email ID</span></div>
                            <div class="col-11"><span><img src="./../dashboard_resources/email.png" class="imgsize mt-1 p-a pl-3"></span><input type="email" class="form-control pl-5 text-muted"  :value="item.email"    @input="updateEmail" placeholder="asd@mail.com"></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-12"><span class="c-grey f-2">Pickup Address</span></div>
                            <div class="col-lg-11">
                                <textarea rows="3" :value="item.pickup_address" @input="updatePickup_address" style="resize:none" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-12"><span class="c-grey f-2">Drop Address</span></div>
                            <div class="col-lg-11">
                                <textarea rows="3" :value="item.drop_address" @change="updateDrop_address" style="resize:none" class="form-control"></textarea>
                            </div>
                            <div style="display:none" class="col-lg-12 mt-3"><input type="checkbox" v-model="meta.moneycollect" class="large"><span class="c-grey f-2">Money Collected</span></div>
                        </div>
                        <!--                        <div class="row mt-4 ml-5">-->
                        <!--                            <div class="col-1"></div>-->
                        <!--                            <div class="col-lg-3"><button class="btn btn-success pl-5 pr-5"><span style="font-size: 20px">Save Traveler Info</span></button></div>-->
                        <!--                            &lt;!&ndash;                            <div class="col-lg-1"></div>&ndash;&gt;-->
                        <!--                            <div class="col-lg-3"><button class="btn btn-warning pl-5 pr-5"><span style="font-size: 20px">Click To Reactivate</span></button></div>-->
                        <!--                            &lt;!&ndash;                            <div class="col-lg-1"></div>&ndash;&gt;-->
                        <!--                            <div class="col-lg-3"><button class="btn btn-primary pl-5 pr-5"><span style="font-size: 20px">Activate Itinerary</span></button></div>-->
                        <!--                        </div>-->
                        <div >
                            <button @click="changeview('mail')" class="button-css">Mail</button></div>
                    </div>

                    <!--                    mail format-->
                    <div :class="[mail ? 'activedev' : 'hidedev' ]" class="container" style="height: 100%">
                        <div class="row">
                            <div class="col-12">
                                <form-wizard @on-complete="changeview('cost')" color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Cost">


                                    <tab-content title="Mail Formats" icon="fa fa-check">
                                        <fieldset>




                                            <div class="row">
                                                <div class="col-12">
                                                    <p class="f-1-8">Itinerary Notes</p>
                                                    <vue-ckeditor class="c-grey"

                                                                  :value="meta.meta_welcome_mail"
                                                                  @input="updatemeta_welcome_mail"
                                                    />
                                                </div>
                                            </div>
                                            <div class="row mt-5">
                                                <div class="col-12">
                                                    <p class="f-1-8">Itinerary Closure Notes: </p>
                                                    <vue-ckeditor class="c-grey"

                                                                  :value="meta.meta_closuer"
                                                                  @input="updatemeta_closuer"
                                                    />
                                                </div>
                                            </div>
                                            <div class="row mt-5">
                                                <div class="col-12">
                                                    <p class="f-1-8">Itinerary inclusions, exclusions notes and other T&C :</p>
                                                    <vue-ckeditor class="c-grey"

                                                                  :value="meta.meta_incl_ex"
                                                                  @input="updatemeta_incl_ex"
                                                    />
                                                </div>
                                            </div>
                                        </fieldset>
                                    </tab-content>
                                </form-wizard>
                            </div>
                        </div>
                    </div>

                    <!--                    cost-->
                    <div  v-if="cost && license.cost_sheet" :class="[cost ? 'activedev' : 'hidedev' ]" class="query-content f-2">
                        <div class="row">
                            <div class="row">
                                <div class="  text-success cursor cost_update_buttons1" @click="cost=false,refresh_cost=true" >
                                    <i style="cursor: pointer"  class="fa fa-refresh f-1-5" aria-hidden="true"></i>
                                    <span style="font-size: 13px;line-height: 33px;">&nbsp; Update Hotels</span>

                                </div>

                                <div class=" ml-3 text-primary cursor cost_update_buttons2" @click="cost=false,refresh_cost=true" style="background: white;padding: 2px 20px;">
                                    <i style="cursor: pointer"  class="fa fa-calculator f-1-5" aria-hidden="true"></i>
                                    <span style="font-size: 13px;line-height: 33px;">&nbsp; Recalculate</span>
                                </div>


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
                            <div class="col-1 offset-11"><img @click="showModalcost=true,addlevel1=true,addlevel2=false" class="hw-3 mr-3" src="./../dashboard_resources/plus.png"></div>

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
                                                            <span class="f-2" aria-hidden="true" @click="showModalcost=false">x</span>
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
                            <div v-if="meta.markup1.percent" class="col-2 offset-7">
                                <input min="0" @keypress="isNumberpercent($event)" v-model="meta.markup1.value" type="number" class="form-control"><span class="p-a per">%</span>
                            </div>
                            <div class="col-2 offset-7" v-else><input  @keypress="isNumber($event)" v-model="meta.markup1.value" type="number" class="form-control"></div>




                            <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" class="form-control"></div>-->
                            <div class="col-2">
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
                            <div class="col-1 offset-11"><img @click="showModalcost=true,addlevel2=true,addlevel1=false" class="hw-3 mr-3" src="./../dashboard_resources/plus.png"></div>
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

                            <div v-if="meta.markup2.percent" class="col-2 offset-7">
                                <input min="0" @keypress="isNumberpercent($event)" v-model="meta.markup2.value" type="number" class="form-control"><span class="p-a per">%</span>
                            </div>
                            <div class="col-2 offset-7" v-else><input  @keypress="isNumber($event)" v-model="meta.markup2.value" type="number" class="form-control"></div>




                            <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" class="form-control"></div>-->
                            <div class="col-2 ">
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
        <section style="display: none">
            <form @submit.prevent="submitForm" novalidate style="margin-top:900px">
                <div class="box" style="">

                    <div class="box-header with-border" >
                        <h3 class="box-title">Create</h3>
                    </div>

                    <div class="box-body">
                        <back-buttton></back-buttton>
                    </div>

                    <bootstrap-alert />

                    <div class="box-body">
                        <div class="form-group">
                            <label for="driver_pick_up_time">Driver pickup date time *</label>
                            <date-picker
                                :value="item.driver_pick_up_time"
                                :config="$root.dpconfigDatetime"
                                name="driver_pick_up_time"
                                placeholder="Enter Driver pickup date time *"
                                @dp-change="updatedriver_pick_up_time"
                            >
                            </date-picker>
                        </div>
                        <div class="form-group">
                            <label for="booking_id">Booking id *</label>
                            <input
                                type="text"
                                class="form-control"
                                name="booking_id"
                                placeholder="Enter Booking id *"
                                :value="item.booking_id"
                                @input="updateBooking_id"
                            >
                        </div>
                        <div class="form-group">
                            <label for="budget">Budget *</label>
                            <input
                                type="text"
                                class="form-control"
                                name="budget"
                                placeholder="Enter Budget *"
                                :value="item.budget"
                                @input="updateBudget"
                            >
                        </div>
                        <div class="form-group">
                            <label for="traveler_name">Traveler name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="traveler_name"
                                placeholder="Enter Traveler name"
                                :value="item.full_name"
                                @input="updateTraveler_name"
                            >
                        </div>
                        <div class="form-group">
                            <label for="bill_pay">Bill pay</label>
                            <input
                                type="text"
                                class="form-control"
                                name="bill_pay"
                                placeholder="Enter Bill pay"
                                :value="item.bill_pay"
                                @input="updateBill_pay"
                            >
                        </div>
                        <div class="form-group">
                            <label for="no_of_adults">No of adults</label>
                            <input
                                type="text"
                                class="form-control"
                                name="no_of_adults"
                                placeholder="Enter No of adults"
                                :value="item.no_of_adults"
                                @input="updateNo_of_adults"
                            >
                        </div>
                        <div class="form-group">
                            <label for="no_of_children">No of children</label>
                            <input
                                type="text"
                                class="form-control"
                                name="no_of_children"
                                placeholder="Enter No of children"
                                :value="item.no_of_children"
                                @input="updateNo_of_children"
                            >
                        </div>
                        <div class="form-group">
                            <label for="no_of_infant">No of infant</label>
                            <input
                                type="text"
                                class="form-control"
                                name="no_of_infant"
                                placeholder="Enter No of infant"
                                :value="meta.meta_infant"
                                @input="updatemeta_infant"
                            >
                        </div>



                        <div class="form-group">
                            <label for="note">Note</label>
                            <input
                                type="text"
                                class="form-control"
                                name="note"
                                placeholder="Enter Note"
                                :value="item.note"
                                @input="updateNote"
                            >
                        </div>
                        <div class="form-group">
                            <label for="status">Status</label>
                            <input
                                type="text"
                                class="form-control"
                                name="status"
                                placeholder="Enter Status"
                                :value="item.status"
                                @input="updateStatus"
                            >
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input
                                type="text"
                                class="form-control"
                                name="phone"
                                placeholder="Enter Phone"
                                :value="item.phone"
                                @input="updatePhone"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                class="form-control"
                                name="email"
                                placeholder="Enter Email"
                                :value="item.email"
                                @input="updateEmail"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email_second">Email second</label>
                            <input
                                type="email"
                                class="form-control"
                                name="email_second"
                                placeholder="Enter Email second"
                                :value="item.email_second"
                                @input="updateEmail_second"
                            >
                        </div>
                        <div class="form-group">
                            <label for="traveller_id">Traveller id</label>
                            <input
                                type="text"
                                class="form-control"
                                name="traveller_id"
                                placeholder="Enter Traveller id"
                                :value="item.traveller_id"
                                @input="updateTraveller_id"
                            >
                        </div>
                        <!--                                <div class="form-group">-->
                        <!--                                    <label for="generated_itinerary">Generated itinerary</label>-->
                        <!--                                    <input-->
                        <!--                                            type="text"-->
                        <!--                                            class="form-control"-->
                        <!--                                            name="generated_itinerary"-->
                        <!--                                            placeholder="Enter Generated itinerary"-->
                        <!--                                            :value="item.generated_itinerary"-->
                        <!--                                            @input="updateGenerated_itinerary"-->
                        <!--                                    >-->
                        <!--                                </div>-->
                        <div class="form-group">
                            <ul id="sortable">
                                <draggable v-model="item.tour_location" group="people" @start="drag=true" @end="drag=false">
                                    <location-place-component v-for="(location,index ) in item.tour_location"  :key="location.id" :location="location" :index="index" :hotels="hotels[(location.id).split('-')[0]]" :place="places.places_city_id[location.id.split('-')[0]]" :tour_location="item.tour_location" @addplace="addplace"  @delete="remove"></location-place-component>
                                </draggable>

                            </ul>
                            <!--                                    <ul><li v-for="tour in item.tour_location" :key="item.tour_location.id" >{{item.tour_location.title}}-->


                            <!--                                    </li></ul>-->
                            <!--                                    <ul>{{places.places_city_id[1][0]}}<li v-for="tour in places.places_city_id[1]" :key="tour.id" >{{tour.title}}-->


                            <!--                                    </li></ul>-->

                            <div class="box-body" >
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
                                        @input="inmodalL"
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
                                        :value="days_count"
                                        @input="updateTotal_tour_days"
                                    >
                                </div>
                            </div>

                            <label for="addtours" v-if="select_tour">Select Tour</label>
                            <v-select
                                name="addtours"
                                label="title"
                                @input="inmodal"
                                :value="item.tour"
                                :options="tourAll"

                            />
                        </div>
                        <div class="form-group">
                            <label for="tour_id">Tour id</label>
                            <input
                                type="text"
                                class="form-control"
                                name="tour_id"
                                placeholder="Enter Tour id"
                                :value="item.tour_id"
                                @input="updateTour_id"
                            >
                        </div>

                        <div class="form-group">
                            <label for="itinerary_places">Itinerary places</label>
                            <input
                                type="text"
                                class="form-control"
                                name="itinerary_places"
                                placeholder="Enter Itinerary places"
                                :value="item.itinerary_places"

                            >
                        </div>
                        <div class="form-group">
                            <label for="agency_id">Agency id</label>
                            <input
                                type="text"
                                class="form-control"
                                name="agency_id"
                                placeholder="Enter Agency id"
                                :value="item.agency_id"
                                @input="updateAgency_id"
                            >
                        </div>
                        <div class="form-group">
                            <label for="agent_id">Agent id</label>
                            <input
                                type="text"
                                class="form-control"
                                name="agent_id"
                                placeholder="Enter Agent id"
                                :value="item.agent_id"
                                @input="updateAgent_id"
                            >
                        </div>
                        <div class="form-group">
                            <label for="meal_day">Meal day</label>
                            <input
                                type="text"
                                class="form-control"
                                name="meal_day"
                                placeholder="Enter Meal day"
                                :value="item.meal_day"
                                @input="updateMeal_day"
                            >
                        </div>
                        <div class="form-group">
                            <label for="meals_supplement">Meals supplement</label>
                            <input
                                type="text"
                                class="form-control"
                                name="meals_supplement"
                                placeholder="Enter Meals supplement"
                                :value="item.meals_supplement"
                                @input="updateMeals_supplement"
                            >
                        </div>
                        <div class="form-group">
                            <label for="messageidd">Messageidd</label>
                            <input
                                type="text"
                                class="form-control"
                                name="messageidd"
                                placeholder="Enter Messageidd"
                                :value="item.messageidd"
                                @input="updateMessageidd"
                            >
                        </div>
                        <div class="form-group">
                            <label for="package_category">Package category</label>
                            <input
                                type="text"
                                class="form-control"
                                name="package_category"
                                placeholder="Enter Package category"
                                :value="item.package_category"
                                @input="updatePackage_category"
                            >
                        </div>
                        <div class="form-group">
                            <label for="pickup_address">Pickup address</label>
                            <input
                                type="text"
                                class="form-control"
                                name="pickup_address"
                                placeholder="Enter Pickup address"
                                :value="item.pickup_address"
                                @input="updatePickup_address"
                            >
                        </div>
                        <div class="form-group">
                            <label for="pickup_location">Pickup location</label>
                            <input
                                type="text"
                                class="form-control"
                                name="pickup_location"
                                placeholder="Enter Pickup location"
                                :value="item.pickup_location"
                                @input="updatePickup_location"
                            >
                        </div>
                        <div class="form-group">
                            <label for="query_feel">Query feel</label>
                            <input
                                type="text"
                                class="form-control"
                                name="query_feel"
                                placeholder="Enter Query feel"
                                :value="meta.query_feel"
                                @input="updateQuery_feel"
                            >
                        </div>
                        <!--                                <div class="form-group">-->
                        <!--                                    <label for="remarks">Remarks</label>-->
                        <!--                                    <input-->
                        <!--                                            type="text"-->
                        <!--                                            class="form-control"-->
                        <!--                                            name="remarks"-->
                        <!--                                            placeholder="Enter Remarks"-->
                        <!--                                            :value="meta.remarks.remark"-->
                        <!--                                            @input="updateRemarks"-->
                        <!--                                    >-->
                        <!--                                </div>-->
                        <div class="form-group">
                            <label for="score">Score</label>
                            <input
                                type="text"
                                class="form-control"
                                name="score"
                                placeholder="Enter Score"
                                :value="item.score"
                                @input="updateScore"
                            >
                        </div>
                        <div class="form-group">
                            <label for="score_new">Score new</label>
                            <input
                                type="text"
                                class="form-control"
                                name="score_new"
                                placeholder="Enter Score new"
                                :value="item.score_new"
                                @input="updateScore_new"
                            >
                        </div>
                        <div class="form-group">
                            <label for="total_room">Total room</label>
                            <input
                                type="text"
                                class="form-control"
                                name="total_room"
                                placeholder="Enter Total room"
                                :value="item.total_room"
                                @input="updateTotal_room"
                            >
                        </div>

                        <div class="form-group">
                            <label for="tour_cost">Tour cost</label>
                            <input
                                type="text"
                                class="form-control"
                                name="tour_cost"
                                placeholder="Enter Tour cost"
                                :value="item.tour_cost"
                                @input="updateTour_cost"
                            >
                        </div>
                        <div class="form-group">
                            <label for="tour_cost_tax">Tour cost tax</label>
                            <input
                                type="text"
                                class="form-control"
                                name="tour_cost_tax"
                                placeholder="Enter Tour cost tax"
                                :value="item.tour_cost_tax"
                                @input="updateTour_cost_tax"
                            >
                        </div>
                        <div class="form-group">
                            <label for="tour_id">Tour id</label>
                            <input
                                type="text"
                                class="form-control"
                                name="tour_id"
                                placeholder="Enter Tour id"
                                :value="item.tour_id"
                                @input="updateTour_id"
                            >
                        </div>
                        <div class="form-group">
                            <label for="tour_name">Tour name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="tour_name"
                                placeholder="Enter Tour name"
                                :value="item.tour_name"
                                @input="updateTour_name"
                            >
                        </div>
                        <div class="form-group">
                            <label for="tour_location">Tour location</label>
                            <input
                                type="text"
                                class="form-control"
                                name="tour_location"
                                placeholder="Enter Tour location"
                                :value="item.tour_location"
                                @input="updateTour_location"
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
    </section>
</template>


<script>
    // import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    import { mapGetters, mapActions } from 'vuex'
    import VoerroTagsInput from '@voerro/vue-tagsinput'
    import LocationPlaceComponent from '../../cruds/Locationsplace'
    import LocationComponent from '../../cruds/Locations'
    import HotelComponent from '../../cruds/hotelcompbooking'
    import DayplanComponent from '../../cruds/dayplancompbooking'
    import draggable from 'vuedraggable'
    import {FormWizard, TabContent,WizardButton,WizardStep} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    import { VueTelInput } from 'vue-tel-input'
    import uploadfile from '../../../mixins/uploadfile'
    import built_interaction from '../../../mixins/builtinteraction'

    import moment from 'moment-timezone'

    export default {

        data() {
            return {
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
                err_passport:[]
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
            ...mapGetters('BookingsSingle', ['item', 'loading', 'tourAll', 'places', 'cityid', 'hotels', 'cityAll', 'meta', 'tourdata']),
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
            this.item.booking_id = 'ITI-' + document.querySelector("meta[name='user-id']").getAttribute('content') + '-' + this.currentDate + '-' + Math.floor((Math.random() * (999 - 100 + 1) + 100))
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
            this.fetchCityAll();
            this.fetchTourAll();
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
                if (this.meta.meta_flight.length < 1) {

                    this.meta.meta_flight = [{"date": "", "dep_code": "", "arr_date": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight"}]
                }

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
            ...mapActions('BookingsSingle', ['setmeta_interactionsfull','storeData', 'uploadFile', 'resetState', 'setBooking_id', 'setplaces', 'setFull_name', 'setEmail', 'setEmail2', 'setPhone', 'setActivated', 'setScore', 'setNo_of_adults', 'setNo_of_children', 'setAgency_id', 'setAgent_id', 'setMeal_day', 'setBill_pay', 'setBudget', 'setdriver_pickup_date_time', 'setdriver_pickup_date_time_updated', 'setDrop_address', 'setHandler_name', 'setHandler_no', 'setMeals_supplement', 'setMember_of_iti', 'setPackage_category', 'setPickup_address', 'setTotal_price', 'setPickup_location', 'setTour_cost', 'setSelected_car', 'setStatus', 'setSupplier_id', 'setTotal_room', 'setTraveller_id', 'setItinerary_places', 'setItinerary_places_time', 'setTour_id', 'setTour_name', 'setTour_location', 'fetchTourAll', 'fetchplace', 'fetchhotel', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setTotal_tour_days', 'fetchTourAll', 'fetchplace', 'fetchhotel', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setmeta_infant', 'setmeta_transport'
                , 'setmeta_source'
                , 'setmeta_flightprice'
                , 'setmeta_flight'
                , 'setmeta_welcome_mail'
                , 'setmeta_incl_ex'
                , 'setmeta_closuer'
                , 'setTraveler_name',
                , 'setmeta_banner',
                'setmeta_pickup_date',
                'setmeta_pickup_time',
                'setmeta_driver_name',
                'setmeta_driver_no',
                'setmoneycollect',
                'setmeta_transport_no',
                'setmeta_interactions',
                'setmeta_exp_cost', 'setmeta_exp_costflight', 'setRemarkedit', 'addnewtour', 'setRemarks', 'setRemark', 'setEmail_second', 'setNote', 'setMessageidd', 'setQuery_feel', 'setScore_new', 'setTour_cost_tax','setmeta_mail_format']),

            updatelogo(value, type) {
                uploadfile("banner", type, value.target.files[0], this.item.booking_id).then(response => {

                    this.meta.meta_banner = response.data;
                    this.setmeta_banner(response.data)

                })
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
                        // console.log(response.data)
                        if(response.data==="No Data"){

                        }
                        else if(response.data ==="This Number is linked with Lms Agent / Agency" || response.data ==="This Email is linked with Lms Agent / Agency" || response.data==='This Email or Number is linked with Lms Agent / Agency'){
                            alert(response.data);
                            this.resettrav();


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
            checkemptyid(id, name_f) {
                if (id == '' ||name_f == '' ) {

                    return true
                } else {
                    return false
                }

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
            checkemptypassport(date,date2,place, name_f,name_l, pasno) {
                if (name_f == '' ||name_l == '' || pasno == '' || date == ''|| date2 == ''|| place == '') {

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
                this[item] = true;
                if (this.createfull) {
// alert("inn");
                    if (this.newremark1 != '') {
                        this.setRemarkedit(this.newremark1)
                        this.newremark1 = '';
                    }

                    if (item == 'day' || item == 'hotel') {
// console.log('daysdone');
                        this.setdriver_pickup_date_time(this.item.driver_pick_up_time);
                    }
                    if (item == 'intraction') {

                        this.setmeta_interactionsfull(this.meta.remarks);
                        this.interaction_visit++
                        if (this.interaction_visit === 1) {
                            var countlen = 0;
                            for (var prop in this.meta.interactions) {
                                if (this.meta.interactions.hasOwnProperty(prop))
                                    ++countlen;
                            }

                            this.$refs.myAccordion.open(countlen - 1);
                        }
                    }

                }
            },
            isNumber: function(evt) {
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


            updatemeta_welcome_mail(value) {
                this.setmeta_welcome_mail(value)
            }, updatemeta_incl_ex(value) {
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
                    if(this.item.full_name && this.item.email &&  this.item.phone) {
                        this.changemenu('createfull')

                    }
                    else {
                        this.errors.push("All Contact Details")

                    }

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
                        trav.set("type","query")
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
                                        console.log("custom name"+namet);
                                        this.setTour_name(namet)
                                    }
                                    else {
                                        if(this.tour_name ==null || this.tour_name ==''){
                                            this.setTour_name(this.item.tour_name)
                                        }
                                        else{
                                            this.setTour_name(this.tour_name)
                                        }
                                    }


                                    this.showerror=true;
                                    this.storeData()
                                        .then(() => {

                                            if(this.save_tour=== true && this.checked ===false){

                                                // tourdata:{'titel':'','locations':'','total_tour_days':''}


                                                if(this.tour_name =='' ){
                                                    var namet='';
                                                    this.tourlocalarray.forEach((callback)=>{
                                                        console.log(callback.name);
                                                        namet+= callback.name + "|";
                                                    })

                                                    namet = namet.substring(0, namet.length - 1);
                                                    console.log(namet);
                                                    this.localtourdata['title']=namet
                                                }
                                                else{
                                                    this.localtourdata['title']=this.tour_name
                                                }

                                                this.localtourdata['locations']=JSON.stringify(this.tourlocalarray)
                                                this.localtourdata['total_tour_days']=1

                                                this.addnewtour(this.localtourdata,document.querySelector("meta[name='user-id']").getAttribute('content'));
                                            }
                                            this.$router.push({ name: 'bookings.index' })
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

                if(this.meta.meta_driver_no!='' && this.meta.meta_driver_name!=''){

                        let driver = new FormData();

                        driver.set("name", this.meta.meta_driver_name)
                        driver.set("phone", this.meta.meta_driver_no)
                        driver.set("flag", "book")
                        axios.post('/api/v1/drivers', driver)
                            .then(response => {
                                console.log(response.data.id);

                            })


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
                    trav.set("type", "booking")
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



                                if (this.tour_name == null || this.tour_name =='' && this.checked ===false) {
                                    var namet = '';
                                    this.tourlocalarray.forEach((callback) => {
                                        console.log(callback.name);
                                        namet += callback.name + "|";
                                    })

                                    namet = namet.substring(0, namet.length - 1);
                                    console.log("custom name");
                                    this.setTour_name(namet)
                                } else {
                                    if(this.tour_name ==null || this.tour_name ==''){
                                        this.setTour_name(this.item.tour_name)
                                    }
                                    else{
                                        this.setTour_name(this.tour_name)
                                    }
                                }

                                this.showerror = true;
                                this.storeData()
                                    .then(() => {
                                        if (this.save_tour === true && this.checked === false) {

                                            // tourdata:{'titel':'','locations':'','total_tour_days':''}


                                            if (this.tour_name == '') {
                                                var namet = '';
                                                this.tourlocalarray.forEach((callback) => {
                                                    console.log(callback.name);
                                                    namet += callback.name + "|";
                                                })

                                                namet = namet.substring(0, namet.length - 1);
                                                console.log(namet);
                                                this.localtourdata['title'] = namet
                                            } else {
                                                this.localtourdata['title'] = this.tour_name
                                            }

                                            this.localtourdata['locations'] = JSON.stringify(this.tourlocalarray)
                                            this.localtourdata['total_tour_days'] = 1

                                            this.addnewtour(this.localtourdata, document.querySelector("meta[name='user-id']").getAttribute('content'));
                                        }
                                        this.$router.push({name: 'bookings.index'})
                                        this.$eventHub.$emit('create-success')
                                    })
                                    .catch((error) => {
                                        this.submit = true;
                                        console.error(error)
                                        window.location.reload();
                                    })

                            }

                        })
                        .catch(error => {
                            this.submit = true;
                            alert("error");
                            console.log(error)
                        })
                }
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
                if(this.meta.meta_driver_no!='' && this.meta.meta_driver_name!=''){

                        let driver = new FormData();

                        driver.set("name", this.meta.meta_driver_name)
                        driver.set("phone", this.meta.meta_driver_no)
                        driver.set("flag", "book")
                        axios.post('/api/v1/drivers', driver)
                            .then(response => {
                                console.log(response.data.id);

                            })


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
                    trav.set("type", "booking")
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


                                if (this.tour_name == null || this.tour_name =='' && this.checked ===false) {
                                    var namet = '';
                                    this.tourlocalarray.forEach((callback) => {
                                        console.log(callback.name);
                                        namet += callback.name + "|";
                                    })

                                    namet = namet.substring(0, namet.length - 1);
                                    console.log("custom name");
                                    this.setTour_name(namet)
                                } else {
                                    if(this.tour_name ==null || this.tour_name ==''){
                                        this.setTour_name(this.item.tour_name)
                                    }
                                    else{
                                        this.setTour_name(this.tour_name)
                                    }
                                }

                                this.showerror = true;

                                if(this.item.bill_pay){
                                    this.setActivated(1);
                                    this.setStatus(2);
                                    this.storeData()
                                        .then(() => {
                                            if (this.save_tour === true && this.checked === false) {


                                                if (this.tour_name == '' ) {
                                                    var namet = '';
                                                    this.tourlocalarray.forEach((callback) => {
                                                        console.log(callback.name);
                                                        namet += callback.name + "|";
                                                    })

                                                    namet = namet.substring(0, namet.length - 1);
                                                    console.log(namet);
                                                    this.localtourdata['title'] = namet
                                                } else {
                                                    this.localtourdata['title'] = this.tour_name
                                                }

                                                this.localtourdata['locations'] = JSON.stringify(this.tourlocalarray)
                                                this.localtourdata['total_tour_days'] = 1

                                                this.addnewtour(this.localtourdata, document.querySelector("meta[name='user-id']").getAttribute('content'));
                                            }
                                            this.$router.push({name: 'bookings.index'})
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
                                                this.storeData()
                                                    .then(() => {
                                                        if (this.save_tour === true && this.checked === false) {

                                                            // tourdata:{'titel':'','locations':'','total_tour_days':''}


                                                            if (this.tour_name == '') {
                                                                var namet = '';
                                                                this.tourlocalarray.forEach((callback) => {
                                                                    console.log(callback.name);
                                                                    namet += callback.name + "|";
                                                                })

                                                                namet = namet.substring(0, namet.length - 1);
                                                                console.log(namet);
                                                                this.localtourdata['title'] = namet
                                                            } else {
                                                                this.localtourdata['title'] = this.tour_name
                                                            }

                                                            this.localtourdata['locations'] = JSON.stringify(this.tourlocalarray)
                                                            this.localtourdata['total_tour_days'] = 1

                                                            this.addnewtour(this.localtourdata, document.querySelector("meta[name='user-id']").getAttribute('content'));
                                                        }
                                                        this.$router.push({name: 'bookings.index'})
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
        },


        components: {
            LocationPlaceComponent, LocationComponent, HotelComponent, DayplanComponent, draggable, FormWizard,
            TabContent, WizardButton, WizardStep, BadgerAccordion, BadgerAccordionItem, VueTelInput,"tags-input":  VoerroTagsInput }
    }
</script>

<style scoped>
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
    .m-t2 {
        margin-top: 19% !important;
    }
</style>
