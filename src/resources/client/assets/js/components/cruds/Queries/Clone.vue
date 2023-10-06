<template>

    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 1000px;font-family: Open Sans">
        <section class="content-header">
            <task-maker :mode="'full'" class="fix-addtask"></task-maker>
            <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>
            <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <div class="row">
                <div class="col"><h1>{{item.booking_id}}</h1></div>
                <!--<div class="col text-right">
                    <button v-if="createfull && cost" style="background-color: white;padding-left: 30px;padding-right: 30px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;font-size: 16px">Send Quotes<span><img src="./../dashboard_resources/dropdown11.png" style="height: 8px"></span></button>
                </div>-->
            </div>



            <div >
                <div v-if="showModalclone">
                    <transition name="modal">
                        <div class="modal-mask">
                            <div class="modal-wrapper">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <!--                                            <button type="button" class="close" @click="showModalcost=false">-->
                                            <!--                                                <span aria-hidden="true">&times;</span>-->
                                            <!--                                            </button>-->

                                        </div>


                                        <div v-if="typeof (this.$route.params.clone_data)!=='undefined'" class="modal-body">
                                            <h4 class="modal-title">Clone Finished</h4>

                                            <button  class="btn btn-primary btn-sm" @click="clonenow()">Continue</button>


                                        </div>
                                        <div v-else class="modal-body">
                                            <h4 class="modal-title">CLone Interrupted</h4>
                                            <p>Start Again Fom Cloning Query</p>
                                            <!--                                            <button  class="btn btn-primary btn-sm" @click="clonenow()">Continue</button>-->


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>


            </div>
            <!--            {{ Breadcrumbs::render('queries') }}-->

        </section>
        <!--        create query-->
        <div class="activedev mt-n5" :class="[create ? 'activedev' : 'hidedev' ]" id="msform" style="width: 80%;height:auto">
            <!-- progressbar -->

            <!--            <button @click="clonenow" >Clone Finish</button>-->
            <div>
                <form-wizard class="f-1-4" @on-complete="onCompletecreate" color="rgb(23, 80, 125)" title=""  subtitle="">
                    <tab-content title="Tour Creation" icon="fa fa-check">
                        <fieldset>
                            <div  class="container-fluid mt-5">
                                <div  class="row mb-3">
                                    <div class="col-lg-8 border border-light">
                                        <div class="row">
                                            <div  class="col-lg-6 text-left">
                                                <div  class="row">
                                                    <div  class="col-12">
                                                        <label  class="h2 fw-4 text-muted">Date</label>
                                                        <date-picker
                                                            :value="item.driver_pickup_date_time"
                                                            :config="$root.dpconfigDate"
                                                            name="driver_pickup_date_time"
                                                            @dp-change="updateDriver_pickup_date_time"
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

                                        <span class="ml-5" v-if="!checked">
                                            &nbsp;&nbsp; <span>Save Tour <input type="checkbox" v-model="save_tour"></span>
                                            <span v-if="save_tour" class=""><input class="f-1-4 fw-4 w-25" type="text" v-model="tour_name" placeholder="Tour Name"></span>
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
                                                  class="bg-light f-1-4 fw-4 mt-n1"
                                                  label="title"
                                                  @input="inmodal"
                                                  :value="tour_ob"
                                                  :options="tourAll"
                                                  v-model="tour_ob"

                                        />
                                    </div>
                                </div>
                            </div>

                            <ul v-if="checked" id="sortable" class="text-left ml-n5 mt-3">
                                <location-place-clone-component v-for="(location,index ) in item.tour_location"  :redeleteflag="redeleteflag" :key="location.id" :location="location" :index="index" :hotels="hotels[(location.id).split('-')[0]]" :place="places.places_city_id[location.id.split('-')[0]]" :tour_location="item.tour_location"   @delete="alert('Can\'t Delete')"></location-place-clone-component>


                            </ul>
                            <ul v-else id="sortable" class="text-left ml-n5 mt-3">
                                <draggable v-if="locationplacecloneflag"   v-model="item.tour_location" group="people" @start="drag=true" @end="drag=false">
                                    <location-place-clone-component   v-for="(location,index ) in item.tour_location" :redeleteflag="redeleteflag"  :key="location.id" :location="location" :index="index" :hotels="hotels[(location.id).split('-')[0]]" :place="places.places_city_id[location.id.split('-')[0]]" :tour_location="item.tour_location"   @delete="remove"></location-place-clone-component>
                                </draggable>

                            </ul>

                            <div :class="[checked ? 'hidedev' : 'activedev' ]">
                                <div class="row">
                                    <div class="col-lg-12 text-left"><p class="text-muted f-2">Add Location<i class="fas fa-calendar-alt ml-3"></i>
                                        <!--                                        &nbsp;&nbsp; <span>Save Tour <input type="checkbox" v-model="save_tour"></span>-->
                                        <!--                                        <span v-if="save_tour" class="ml-3">Tour Name: <input type="text" v-model="tour_name"></span>-->
                                    </p></div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8 text-left">
                                        <v-select :clearable="false" placeholder="Select"
                                                  name="addlocations"
                                                  label="title"
                                                  @input="inmodalL"

                                                  :options="cityAll"
                                                  class="bg-light f-1-4 fw-4 mt-n1"
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
                                                    <div class="col-lg-6 pl-3">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="f-1-5 fw-4 text-muted">E.Beds</p>
                                                            </div>
                                                            <div class="col-12">
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
                                        <div  class="row"><div  class="col-12 text-left">
                                            <p  class="f-2 fw-5 text-muted">Budget</p>
                                        </div>
                                        </div>
                                        <div  class="row mt-n3"><div  class="col-12 text-left pr-0">
                                            <img src="./../dashboard_resources/currency.png" class="hw-i p-a mt-1 ml-2"><input  type="text" :value="item.budget"  @input="updateBudget" class="form-control pl-5 f-1-4 fw-4">

                                        </div>
                                        </div>
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
                    <tab-content title="Contacts Details" icon="fa fa-check">

                        <fieldset>
                            <div class="container-fluid mt-5">
                                <div  class="row">
                                    <div  class="col-lg-6 text-left ml-n5">
                                        <div  class="row">
                                            <div  class="col-12">
                                                <p class="fw-4 h2 text-muted">Mobile</p>
                                            </div>

                                            <div  class="col-12">
                                                <span class="p-a pl-2"><img src="./../dashboard_resources/contact.png"></span>
                                                <vue-tel-input v-bind="bindProps" v-model="item.phone"  name="phone" placeholder="Enter Phone" class="form-control pl-5 pr-5 f-1-5 vue-tel-input fw-3"></vue-tel-input>



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
                                                <span class="p-a"><i class="fas fa-envelope pl-3 f-1-8 c-grey pt-2"></i></span>
                                                <input :disabled="(lead_data) && (!clonenew)"  type="email" name="name"  :value="item.email"
                                                       @input="updateEmail" placeholder="adb@gmail.com" class="form-control fw-4 pl-5"><span class="edit_form_img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i">
                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  class="col-6 text-left" >
                                        <div  class="row">
                                            <div  class="col-12">
                                                <p class="fw-4 h2 text-muted">Name

                                                </p>
                                            </div>
                                        </div>
                                        <div  class="row">
                                            <div  class="col-12">
                                                <span class="p-a"><i class="fas fa-user pl-3 c-grey pt-2 f-1-8"></i></span>
                                                <input  type="text" class="form-control pl-5 fw-4" placeholder="Enter Traveler name"
                                                        :value="item.traveler_name"
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
                            <wizard-button v-if="props.isLastStep" @click.native="changemenucontinue()" class="wizard-footer-left finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Continue' : 'Next'}}</wizard-button>
                            <wizard-button v-if="props.isLastStep && submit" @click.native="submitForm1" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Save & Exit' : 'Next'}}</wizard-button>
                        </div>
                    </template>

                </form-wizard>



            </div>
        </div>

        <section class="content" v-if="createfull" :class="[createfull ? 'activedev' : 'hidedev' ]">
            <div class="row">
                <div class="col-lg-2">
                    <ul class="sidenav border-right border-light">
                        <a href="#" :class="summ==true?'sidenavactive':''"> <li @click="changeview('summ')" > Summary</li></a>
                        <a href="#" :class="hotel==true?'sidenavactive':''"><li  @click="changeview('hotel')" >Hotels</li></a>
                        <a href="#" :class="day==true?'sidenavactive':''"> <li @click="changeview('day')" >Day Plan</li></a>
                        <a href="#" :class="trav==true?'sidenavactive':''"><li @click="changeview('trav')" >Traveller</li></a>
                        <a href="#" :class="train==true?'sidenavactive':''"><li  @click="changeview('train')" >Train/Flight</li></a>
                        <a href="#" :class="mail==true?'sidenavactive':''"><li @click="changeview('mail')" >Mail Format</li></a>
                        <a href="#" :class="cost==true?'sidenavactive':''"><li @click="changeview('cost')" >Cost</li></a>
                        <a href="#" :class="intraction==true?'sidenavactive':''"><li @click="changeview('intraction')" >Interaction History</li></a>
                    </ul>
                </div>
                <div class="col-lg-10">
                    <!--summary-->
                    <div class="query-content" :class="[summ ? 'activedev' : 'hidedev' ]">

                        <div class="row mt-4 mb-5">
                            <!--            First section-->
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-12"><p class="text-muted">Quotation Amount</p></div>
                                </div>
                                <div class="row c-grey f-1-5 mb-n2">
                                    <div class="col-5"><label>Type</label>
                                    </div>
                                    <div class="col-5"><label>Price</label>
                                    </div>
                                </div>

                                <div class="row mt-2" v-for="(cost,index) in item.tour_cost" >
                                    <div class="col-5"><input type="text" pattern="Type" class="form-control text-center f-1-4 fw-4" v-model="cost.type"></div>
                                    <div class="col-5"><input type="number" class="form-control text-center f-1-4 fw-4" pattern="Cost" v-model="cost.cost"></div>

                                    <img  @click="item.tour_cost.splice(index, 1) " src="./../dashboard_resources/minus.png" class="hw-p-m mt-1 margin-for-pm-img">
                                    <img @click="item.tour_cost.push({'cost':'','type':''})" src="./../dashboard_resources/plus.png" class="hw-p-m mt-1">
                                </div>


                                <div class="row mt-4">
                                    <div class="col-12 mb-n3"><p class="text-muted">Tour Date<i class="fas fa-calendar-alt ml-3 icon-color"></i></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-11">
                                        <date-picker
                                            class="text-muted summary-in-w f-1-4 fw-4 pl-3"
                                            :value="item.driver_pickup_date_time"
                                            :config="$root.dpconfigDate"
                                            name="driver_pickup_date_time"
                                            @dp-change="updateDriver_pickup_date_time"
                                        >
                                        </date-picker>
                                    </div>
                                </div>


                                <!--                                    <draggable v-model="item.tour_location" group="people" @start="drag=true" @end="drag=false">-->

                                <div v-for="(tour,index) in item.tour_location ">
                                    <div class="row mt-3">
                                        <div class="col-12 mb-n3"><p class="text-muted">Location {{index+1}} <img src="./../dashboard_resources/loction.png" class="hw-i ml-2"></p></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-9 mr-2"><input disabled type="text" class="form-control " v-model="tour.name"></div>
                                        <div class="col-2 ml-for-nd"><input type="text" class="ml-3 form-control " v-model="tour.days">
                                            <!--                                                    <img @click="alert('Can\'t Delete')" src="./../dashboard_resources/minus.png" style="width: 33px; height: 33px; margin-top: -1%; margin-left: 0%;">-->
                                        </div>

                                    </div>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-12 mb-n3"><p class="text-muted">Duration</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-6"><input disabled type="text" class="in-put-7 f-1-4 pt-2 pb-2 pl-3" value="Nights"><input disabled type="text" class="in-put-25 f-1-4 pt-2 pb-2 pl-3" :value="days_count"> </div>
                                    <div class="col-6 ml-n2"><input disabled type="text" class="in-put-7 f-1-4 pt-2 pb-2 pl-3" value="Day"><input disabled type="text" class="in-put-25 f-1-4 pt-2 pb-2 pl-3" :value="days_count+1"> </div>
                                </div>
                                <div class="row mt-4">
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
                                    <div class="col-lg-4 div-back ml-for-tr">
                                        <div class="row text-center pt-2 pb-2">
                                            <div class="col-lg-6">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="f-1-4 fw-4 text-muted">Rooms</p>
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
                                                        <p class="f-1-4 fw-4 text-muted">E. Beds</p>
                                                    </div>
                                                    <div class="col-12">
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
                                    <div class="col-12">
                                        <p class="text-muted">(Total Cost)</p>
                                    </div>
                                </div>
                                <div class="row c-grey f-1-5">
                                    <div class="col-12">


                                        <label>(Budget: {{item.budget }},Tour: {{meta.sellingprice1}},Flight: {{meta.sellingprice2}})</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12"><input type="text" class="form-control  f-1-4 pl-3 bg-w fw-4" disabled :value="totalcost"  @input="updateBudget"></div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-12 mb-n3" ><p class="text-muted">Executive Name<span class="ml-3 f-1-4"><i class="fa fa-user icon-color"></i></span></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-12"><input type="text" @input="updatemeta_executive_name" :value="meta.meta_executive_name" class="form-control text-muted f-1-4 fw-4 pl-3" value=""><img src="./../dashboard_resources/edit.png" class="hw-i pa-img"></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 mb-n3" ><p class="text-muted">Executive Mobile Number<span class=""><img src="./../dashboard_resources/contact.png" class="hw-i ml-2"></span></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-12"><input type="text" @input="updatemeta_executive_no" :value="meta.meta_executive_no" class="form-control text-muted f-1-4 fw-4" placeholder="8888888888"><img src="./../dashboard_resources/edit.png" class="hw-i pa-img"></div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-12 mb-n3" ><p class="text-muted">Transport Type<span class=""><img src="./../dashboard_resources/transport.png" class="hw-i ml-2"></span></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-12"><input type="text" :value="meta.meta_transport" @input="updatemeta_transport"  class="form-control text-muted fw-4 f-1-4" value="8888888888"><img src="./../dashboard_resources/edit.png" class="hw-i pa-img"></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-6 mb-n2"><p class="text-muted">Pickup Location<span><img src="./../dashboard_resources/location.png" class="hw-i ml-2"></span></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-12"><input type="text"
                                                               class="form-control text-muted fw-4 f-1-4"
                                                               name="pickup_location"
                                                               placeholder="Enter Pickup location"
                                                               :value="item.pickup_location"
                                                               @input="updatePickup_location"><img src="./../dashboard_resources/edit.png" class="pa-img hw-i"></div>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-12 mb-n2" ><p class="text-muted">Query Feel Rating:</p></div>
                                    <div class="col-12">
                                        <div class="row ml-2">

                                            <div class="bg-danger rating-5 text-center" @click="item.query_feel=5">
                                                <div class="f-1-4 text-light fw-4">5</div>
                                                <i class="fas fa-caret-up mt-0" v-if="item.query_feel==5"></i></div>
                                            <div class=" bg-warning rating-w-all text-center" @click="item.query_feel=4">
                                                <div class="f-1-4 text-light fw-4">4</div>
                                                <i class="fas fa-caret-up mt-0" v-if="item.query_feel==4"></i></div>
                                            <div class="bg-primary rating-w-all text-center" @click="item.query_feel=3">
                                                <div class="f-1-4 text-light fw-4">3</div>
                                                <i class="fas fa-caret-up mt-0 text-dark" v-if="item.query_feel==3"></i></div>
                                            <div class=" bg-success rating-w-all text-center" @click="item.query_feel=2">
                                                <div class="f-1-4 text-light fw-4">2</div>
                                                <i class="fas fa-caret-up mt-0" v-if="item.query_feel==2"></i></div>
                                            <div class=" bg-dark rating-w-all text-center" @click="item.query_feel=1">
                                                <div class="f-1-4 text-light fw-4">1</div>
                                                <i class="fas fa-caret-up mt-0" v-if="item.query_feel==1"></i></div>
                                        </div>

                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-12 mb-n2"><p class="text-muted">Past Interactions</p></div>
                                    <div v-for="(rem,index) in item.remarks " v-if="index==(item.remarks.length)-1" class="past-i ml-4 row pb-2">
                                        <!--                                                   {{rem,index}}-->
                                        <div class="col-6 ml-2 mt-2 mr-3 clock">
                                            <span class="text-black pr-2"><i class="far fa-clock"></i></span>{{ rem['time'] | moment}}</div>
                                        <div class="text-right col-5 ml-4"><img  src="./../dashboard_resources/dropdown.png" data-toggle="modal" data-target="#myModal1" class="hw-2"></div>
                                        <div class="col-12 ml-4 pl-2 border-left-3">{{rem['remark'].substring(0,40)+".."}}</div>
                                    </div>

                                </div>

                                <div class="row mt-4">
                                    <div class="col-lg-12 mb-n3"><p class="text-muted">Remark</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-10"><span class="p-a icon-color ml-2"><i class="fa fa-pencil-square-o"></i></span>
                                        <input type="text" class="form-control pl-5 f-1-4 fw-4"
                                               name="remark"
                                               placeholder="Enter Remark"
                                               v-model="newremark">
                                    </div>
                                    <div class="col-lg-2">

                                        <input type="button" value="Add" @click="updateRemark(newremark)" class="vue-btn btn btn-lg btn-primary text-light ml-for-add">
                                        <!--                                                        <i aria-hidden="true" class="fa fa-paper-plane"></i>-->



                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col"><button class="button-css" @click="changeview('hotel')">Hotels</button></div>
                                </div>

                                <!--                                   start modal for past intraction-->
                                <div class="container">
                                    <div class="modal" id="myModal1">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <button type="button" class="close f-2-5" data-dismiss="modal">&times;</button><br>
                                                    <div class="container">
                                                        <div v-for="rem in item.remarks " class="text-success">
                                                            <i class="far fa-clock mr-3"></i>{{ rem['time'] | moment}}
                                                            <span style="">|    Agent: {{rem['agent']}}</span>
                                                            <p class="border-left-3 pl-2 ml-2 text-dark">{{rem['remark']}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--                                                    <div style="width: 570px;color:red;margin-left: 20px;margin-top:-10px"><i class="far fa-clock" style="margin-right: 10px"></i>05-09-2019 / 02:15 pm <span style="margin-left: 205px">Due Date : 10-09-2019</span>-->
                                        <!--                                                        <p style="text-align:justify-all;width: 580px;height: 40px;border-left:solid black 3px;margin-left: 6px;padding-left: 5px;font-size: 12px;color:black;margin-top: 5px ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                    <div style="width: 570px;color:dodgerblue;margin-left: 20px;margin-top:-10px"><i class="far fa-clock" style="margin-right: 10px"></i>05-09-2019 / 02:15 pm <span style="margin-left: 295px">On Going</span>-->
                                        <!--                                                        <p style="text-align:justify-all;width: 580px;height: 40px;border-left:solid black 3px;margin-left: 6px;padding-left: 5px;font-size: 12px;color:black;margin-top: 5px ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>-->
                                        <!--                                                    </div>-->
                                    </div>
                                </div>
                                <!--                                    end-->

                            </div>
                        </div>

                    </div>
                    <!--                    Interaction History-->
                    <div class="query-content f-2"  :class="[ intraction ? 'activedev' : 'hidedev' ]">

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
                                        <!--                                        <div class="row mt-4" style="margin-left: 14%">-->
                                        <!--                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>-->
                                        <!--                                        </div>-->

                                        <!--                                        <div class="row">-->
                                        <!--                                            <div class="col-lg-2"></div>-->
                                        <!--                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">-->
                                        <!--                                                <div class="row">-->
                                        <!--                                                    <div class="col-lg-6">-->
                                        <!--                                                        <p>12:15 pm</p>-->
                                        <!--                                                        <p>Sent to Mr Ramesh</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                    <div class="col-lg-6 text-right mt-4 text-primary">-->
                                        <!--                                                        <p class="mt-2" style="color:#00539F">Delivered</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->

                                        <!--                                        <div class="row mt-4" style="margin-left: 14%">-->
                                        <!--                                            <div class="col-lg-4"><p style="font-size: 20px">Task</p></div>-->
                                        <!--                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020</p></div>-->
                                        <!--                                        </div>-->

                                        <!--                                        <div class="row">-->
                                        <!--                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>-->
                                        <!--                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">-->
                                        <!--                                                <div class="row">-->
                                        <!--                                                    <div class="col-lg-6">-->
                                        <!--                                                        <p>12:15 pm</p>-->
                                        <!--                                                        <p>Call to Mr Ramesh for passport verification</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                    <div class="col-lg-6 text-right mt-4 text-primary">-->
                                        <!--                                                        <p class="mt-2">Due</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->

                                        <!--                                        <div class="row mt-4" style="margin-left: 14%">-->
                                        <!--                                            <div class="col"><p style="font-size: 20px">Email</p></div>-->
                                        <!--                                        </div>-->

                                        <!--                                        <div class="row">-->
                                        <!--                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>-->
                                        <!--                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">-->
                                        <!--                                                <div class="row">-->
                                        <!--                                                    <div class="col-lg-6">-->
                                        <!--                                                        <p>12:15 pm</p>-->
                                        <!--                                                        <p>Passport verification email</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                    <div class="col-lg-6 text-right mt-4 text-danger">-->
                                        <!--                                                        <p class="mt-2">Failed</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->

                                        <!--                                        <div class="row mt-4" style="margin-left: 14%">-->
                                        <!--                                            <div class="col"><p style="font-size: 20px">Audit</p></div>-->
                                        <!--                                        </div>-->

                                        <!--                                        <div class="row">-->
                                        <!--                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>-->
                                        <!--                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">-->
                                        <!--                                                <div class="row">-->
                                        <!--                                                    <div class="col-lg-6">-->
                                        <!--                                                        <p>12:15 pm</p>-->
                                        <!--                                                        <p>Ramesh(OPS) has change the hotel from Hyatt to Hilton</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                    <div class="col-lg-6 text-right mt-4 text-success">-->
                                        <!--                                                        <p class="mt-2">Done</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->

                                        <!--                                        <div class="row mt-4" style="margin-left: 14%">-->
                                        <!--                                            <div class="col-lg-4"><p style="font-size: 20px">Broadcast</p></div>-->
                                        <!--                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020, 02:55 AM</p></div>-->
                                        <!--                                        </div>-->

                                        <!--                                        <div class="row">-->
                                        <!--                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>-->
                                        <!--                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">-->
                                        <!--                                                <div class="row">-->
                                        <!--                                                    <div class="col-lg-6">-->
                                        <!--                                                        <p>12:15 pm</p>-->
                                        <!--                                                        <p>Please check your agenda</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                    <div class="col-lg-6 text-right mt-4 text-dark">-->
                                        <!--                                                        <p class="mt-2">Scheduled</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->
                                        <!--                                        -->
                                        <!--                                        <div class="row">-->
                                        <!--                                            <div class="col-lg-2 text-right mt-3"></div>-->
                                        <!--                                            <div class="col-lg-9" style="font-size: 18px">-->
                                        <!--                                                <div class="row">-->
                                        <!--                                                    <div class="col-lg-6">-->
                                        <!--                                                    </div>-->
                                        <!--                                                    <div class="col-lg-6 text-right mt-4 text-success">-->
                                        <!--                                                        <p class="mt-2">Delivered</p>-->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->

                                    </div>
                                </template>
                            </badger-accordion-item>


                        </badger-accordion>
                    </div>

                    <!--                    Hoteln-->
                    <div :class="[hotel ? 'activedev' : 'hidedev' ]" class="f-2 text-center query-content">
                        <hotel-component v-if="hotel" :day="day" @refresh="refeshhotel"  :location="item.tour_location"  :hotels="hotels"  @addplace="addplace" :tour_location="item.tour_location" @showday="changeview('day')" @fetch_new_hotel="update_hotel()" @delete="remove"></hotel-component>

                    </div>

                    <!--                    Day Plan-->
                    <div :class="[day ? 'activedev' : 'hidedev' ]" class="query-content f-2">
                        <dayplan-component v-if="day" :license="license"  :itiplaces="item.itinerary_places"  :datestart="item.driver_pick_up_time"  :place="places.places_city_id"  :tour_location="item.tour_location" :meal="item.meals_supplement" @addplace="addplace"  @delete="remove" @showtrav="changeview('trav')"></dayplan-component>

                    </div>
                    <!--                    travellers -->
                    <div :class="[trav ? 'activedev' : 'hidedev' ]" class="query-content">
                        <div class="container-fluid pl-2">
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-lg-12"> <span class="f-2 text-muted">Traveller Name</span></div>
                                        <div class="col-lg-12"><span class="p-a"><i class="fa fa-user ml-2 mt-1 c-grey"></i></span><input  :value="item.traveler_name" @input="updateTraveler_name" type="text" class="form-control f-1-4 pl-5 fw-4"><span class="edit-img"><img src="./../dashboard_resources/edit.png" class="hw-i"></span></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-lg-12"> <span class="f-2 text-muted">Traveller Mobile no</span></div>
                                        <div class="col-lg-12"><span class="p-a"><img src="./../dashboard_resources/contact.png"></span>
                                            <!--                                    <input type="text" class="form-control" name="phone" placeholder="Enter Phone" :value="item.phone"    @input="updatePhone" style="border:0;width: 80%;padding-left: 40px;margin-left: 13px;height: 35px;font-size:16px">-->
                                            <vue-tel-input  v-model="item.phone" v-bind="bindProps" name="phone" placeholder="Enter Phone" class="form-control pl-5 f-1-4"></vue-tel-input>

                                            <span class="edit-img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i">
                                    </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-lg-12"><span class="f-2 text-muted">Email ID(the email will not visible to supplier)</span></div>
                                <div class="col-lg-12"><span class="p-a"> <img class="hw-3" src="./../dashboard_resources/email.png"></span>
                                    <input type="email" class="form-control pl-5 f-1-4 fw-4 bg-w"  :value="item.email"    @input="updateEmail" placeholder="asd@mail.com"></div>
                            </div>
                            <div class="row mt-5">

                                <div class="col-lg-12"><span class="f-2 text-muted">Email ID(Secondary)</span></div>
                                <div class="col-lg-12"><span class="p-a"> <img class="hw-3" src="./../dashboard_resources/email.png"></span>
                                    <input type="email" class="form-control pl-5 f-1-4 fw-4 bg-w"
                                           name="email_second"
                                           placeholder="Enter Email second"
                                           :value="item.email_second"
                                           @input="updateEmail_second"></div>

                            </div>
                            <div class="col">
                                <button @click="changeview('train')" class="button-css">Train/Flight</button></div>
                        </div>
                    </div>
                    <!--                    train/flight-->
                    <div :class="[train ? 'activedev' : 'hidedev' ]" class="query-content ">
                        <div class="container-fluid pl-2"><div class="row">
                            <div class="col-12">
                                <vue-ckeditor
                                    :value="meta.meta_flight"
                                    @input="updatemeta_flight"
                                />
                                <!--                                        <p style="text-align: right;margin-top: -3px">Flight Price:<input type="number"  min="1" :value="meta.meta_flightprice"    @input="updatemeta_flightprice" style="font-weight: bold;padding-left: 5px"></input></p>-->
                            </div>
                        </div></div>

                        <button @click="changeview('mail')" class="button-css">Mail</button>
                    </div>
                    <!--                    mail format-->

                    <div :class="[mail ? 'activedev' : 'hidedev' ]" class="query-content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <form-wizard @on-complete="changeview('cost')" color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Cost" class="f-1-4">
                                        <tab-content title="Welcome Notes" icon="fa fa-check">
                                            <fieldset>
                                                <div class="container-fluid mt-5">
                                                    <div class="row">
                                                        <div class="col"><span class="f-2">Welcome Mail</span></div>
                                                        <div class="col text-right"><p style="color:royalblue" class="f-1-4">(Character Limit 244)</p></div>
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

                                        <tab-content title="Tour Details" icon="fa fa-check">
                                            <fieldset>
                                                <div class="container-fluid mt-5">
                                                    <div class="row">
                                                        <div class="col-9"><span class="f-2">Tour details inclusions, exclusions notes and other T&C :</span></div>
                                                        <div class="col-3 text-right"><p style="color:royalblue" class="f-1-4">(Character Limit 244)</p></div>
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
                                                <div class="container-fluid mt-5">
                                                    <div class="row">
                                                        <div class="col"><span class="f-2">Closure Notes:</span></div>
                                                        <div class="col text-right"><p style="color:royalblue" class="f-1-4">(Character Limit 244)</p></div>
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
                                    <!--                                <form id="msform" style="width: 100%">-->
                                    <!--                                    &lt;!&ndash; progressbar &ndash;&gt;-->
                                    <!--                                    <ul id="progressbar">-->
                                    <!--                                        <li class="active"><span style="font-size: 14px;font-weight: bold;color:black">Welcome Notes</span></li>-->
                                    <!--                                        <li><span style="font-size: 14px;font-weight: bold;color:black">Tour Details</span></li>-->
                                    <!--                                        <li><span style="font-size: 14px;font-weight: bold ;color:black"> Closer Notes</span></li>-->
                                    <!--                                    </ul>-->

                                    <!--                                    &lt;!&ndash; fieldsets &ndash;&gt;-->

                                    <!--                                   -->
                                    <!--                                  -->
                                    <!--                                   -->
                                    <!--                                </form>-->

                                </div>
                            </div>
                        </div>
                        <button v-if="submit && !license.cost_sheet" class="button-css" style="margin-left: -155px;" @click="submitForm" >Submit</button>
                    </div>
                    <!--                    cost-->
                    <div   :class="[cost && license.cost_sheet ? 'activedev' : 'hidedev' ]" class="query-content f-2">
                        <!--                        <button @click="cost=false,refresh_cost=true">Refresh</button>-->
                        <div class="row">
                            <div class="  text-success cost_update_buttons1 cursor" @click="cost='refresh',refresh_cost=true">
                                <i style="cursor: pointer"  class="fa fa-refresh f-1-5" aria-hidden="true"></i>
                                <span style="font-size: 13px;line-height: 33px;"> Update Hotels</span>
                            </div>


                            <div class=" ml-3 text-primary cost_update_buttons2 cursor" @click="cost='refresh',refresh_cost=true">
                                <i style="cursor: pointer"  class="fa fa-calculator f-1-5" aria-hidden="true"></i>
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
                            <div class="col-1 offset-11"><img @click="showModalcost=true,addlevel1=true" class="hw-3 mr-3" src="./../dashboard_resources/plus.png"></div>
                        </div>
                        <div v-if="showModalcost">
                            <transition name="modal">
                                <div class="modal-mask">
                                    <div class="modal-wrapper">
                                        <div class="modal-dialog">
                                            <div class="modal-content background-color-all">
                                                <div class="modal-header border-0" @click="showModalcost=false">
                                                    <button type="button" class="close" @click="showModalcost=false">
                                                        <span aria-hidden="true" @click="showModalcost=false">&times;</span>
                                                    </button>

                                                </div>
                                                <div class="modal-body">
                                                    <h1 class="modal-title text-center mt-n5 text-muted">Add Custom Field</h1>
                                                    <div class="container">
                                                        <div class="row mt-3">
                                                            <div class="col-1 h2">Type</div>
                                                            <div class="col-11"><input type="text" class="form-control ml-3" v-model="temp_cost.type"></div>
                                                        </div>
                                                        <div class="row mt-3">
                                                            <div class="col-1 h2">Title</div>
                                                            <div class="col-11"> <input type="text" class="form-control ml-3" v-model="temp_cost.title"></div>
                                                        </div>
                                                        <div class="row mt-3">
                                                            <div class="col-1 h2">Rate</div>
                                                            <div class="col-11"> <input type="text" class="form-control ml-3" v-model="temp_cost.rate"></div>
                                                        </div>
                                                        <div class="row mt-3">
                                                            <div class="col-1 h2"> Qty</div>
                                                            <div class="col-11"> <input type="text" class="form-control ml-3" v-model="temp_cost.qty"></div>
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
                                <input  @keypress="isNumberpercent($event)" v-model="meta.markup1.value" type="number" class="form-control"><span class="p-a per">%</span>
                            </div>
                            <div class="col-2 offset-7" v-else><input  @keypress="isNumber($event)" v-model="meta.markup1.value" type="number" class="form-control"></div>




                            <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" class="form-control"></div>-->
                            <div class="col-2 offset-2">
                                <input :value="total_sp1" disabled type="text" class="form-control">

                            </div>

                        </div>



                        <!--                            <div class="col-4">-->
                        <!--                                <p class="text-muted">Flight: </p></div>-->
                        <!--                            -->
                        <!--                        </div>-->

                        <br>
                        <div class="row" v-for="(hotelarr2,index) in meta.meta_exp_costflight" >
                            <div class="col-5">
                                <p v-if="index==0" class="text-muted">Flight:</p>
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
                                <img   @click="meta.meta_exp_costflight.splice(index, 1) " src="./../dashboard_resources/minus.png" class="hw-3 mt-5">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-1 offset-11"><img @click="showModalcost=true,addlevel2=true,addlevel1=false" class="hw-3 mr-3" src="./../dashboard_resources/plus.png"></div>
                        </div>
                        <div class="row mt-5 f-2">

                            <div class="col-2 offset-9">
                                <p class="text-muted">Total</p>
                                <input type="text" disabled :value="total_lev2" class="form-control">
                            </div>


                        </div>

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
                                <input @keypress="isNumberpercent($event)" v-model="meta.markup2.value" type="number" class="form-control"><span class="p-a per">%</span>
                            </div>
                            <div class="col-2 offset-7" v-else><input  @keypress="isNumber($event)" v-model="meta.markup2.value" type="number" class="form-control"></div>




                            <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" class="form-control"></div>-->
                            <div class="col-2 offset-2">
                                <input :value="total_sp2" disabled type="text" class="form-control">

                            </div>

                        </div>
                        <button v-if="submit && license.cost_sheet && cost" class="button-css" @click="submitForm" >Submit</button>
                    </div>


                </div>
            </div>


        </section>

        <div id="app">
            <div v-if="showModal">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog">
                                <div class="modal-content background-color-all">
                                    <div class="modal-body">
                                        <button type="button" class="close" @click="showModal=false">
                                            <span aria-hidden="true">x</span>
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


<!-- jQuery easing plugin -->

<script>

    import { mapGetters, mapActions } from 'vuex'
    import LocationPlaceComponent from '../../cruds/Locationsplace'
    import LocationPlaceEditComponent from '../../cruds/Locationsplaceedit'
    import LocationPlaceCloneComponent from '../../cruds/Locationsplaceclone'
    import LocationComponent from '../../cruds/Locations'
    import HotelComponent from '../../cruds/hotelcomp'
    // import DayplanComponent from '../../cruds/dayplancomp'
    import DayplanComponent from '../../cruds/dayplancompedit'
    import draggable from 'vuedraggable'
    import {FormWizard, TabContent,WizardButton,WizardStep} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    // import VueTelInput from 'vue-tel-input'
    import { VueTelInput } from 'vue-tel-input'
    // import built_remark from '../../../mixins/helpers'
    import built_remark from '../../../mixins/builtremark'
    import built_interaction from '../../../mixins/builtinteraction'
    import getmeta from '../../../mixins/getmeta'

    import moment from 'moment-timezone'

    export default {
        data() {
            return {
                errors:[],
                errormodal:false,
                submit:true,
                redeleteflag:false,
                tempflag:true,
                tour_ob: '',
                tourlocation: [],
                days: 1,
                showModal: false,
                locations: [],
                locationd: {id: '', name: '', days: '', daynights: ''},
                make_tour: 1,
                select_tour: 1,
                // lead_data: {},
                newremark:'',
                newremark1:'',

                meta_extra_bed: '',
                meta_transport: '',
                meta_source: '',
                meta_flightprice: '',
                meta_flight: '',
                meta_welcome_mail: '',
                meta_incl_ex: '',
                meta_closuer: '',
                meta_exp_cost: [],
                interaction_visit:0,

                summ: true,
                hotel: false,
                day: false,
                trav: false,
                train: false,
                mail: false,
                cost: false,
                intraction:false,
                remarkk: false,
                create: true,
                createfull: false,

                checked: true,
                days_count: 0,
                showerror: false,

                save_tour: false,
                tour_name: '',
                localtourdata: {},
                tourlocalarray: [],
                refresh_cost:false,
                showModalcost:false,
                addlevel1:false,
                addlevel2:false,
                temp_cost:{
                    "type": "",
                    "title": "",
                    "qty": "",
                    "unit": "",
                    "price": "",
                    "ref":""
                },
                total1:'',
                total2:'',
                // meta_infant:null
                //   place:[]
                // Code...
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
                clone_datal:{},
                clone_metal:{},
                showModalclone:true,
                license:{},
                ytest:[]
            }
        },
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
        },
        computed: {
            ...mapGetters('QueriesSingle', ['createdid','item', 'loading','tourAll','places','cityid','hotels','cityAll','meta','tourdata','lead_data','lead_meta','clone_data','clone_meta','clonenew','locationplacecloneflag']),
            totalcost(){

                if(Number(this.meta.sellingprice1)>0){
                    if(Number(this.meta.sellingprice2)>0){

                        return Number(this.meta.sellingprice1) +Number(this.meta.sellingprice2);
                    }
                    else {
                        return Number(this.meta.sellingprice1)
                    }


                }
                else  if(Number(this.meta.sellingprice2)>0){
                    return Number(this.meta.sellingprice2)
                }
                else {
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

                if(!isNaN(parseFloat(this.total1)) && this.total1>0){
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

                if(!isNaN(parseFloat(this.total2)) && this.total2>0){
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
        created() {
            // Code ...
            this.fetchCityAll();
            this.fetchTourAll();
            this.fetchScoreRange();
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
            // this.setRemarks(this.built_remark())
            // alert(this.built_remark());
            // console.log( built_remark("Query Generated"));
            if(typeof (this.$route.params.clone_data)!=="undefined"){
                console.log("clone_data");
                this.setclonenew(this.$route.params.newlead)
                // console.log(this.$route.params.itiplace);
                // console.log(this.$route.params.tour_loc);
                // console.log(this.$route.params.clone_data);
                this.clone_datal=_.cloneDeep(this.$route.params.clone_data);
                this.clone_metal=_.cloneDeep(this.$route.params.clone_meta);

                if(this.clonenew) {
                    this.clone_metal.interactions=_.cloneDeep({});
                    this.clone_datal.remarks=_.cloneDeep([]);
                    this.item.remarks=[];
                }


                this.setclone_data(this.clone_datal);
                this.setclone_meta(this.clone_metal);
                this.checked=false;
                this.locations=_.cloneDeep(this.clone_datal.tour_location);
// this.item=Object.assign(this.item,this.clone_data);
// this.meta=Object.assign(this.meta,this.clone_meta);
                this.setclonedata(this.clone_datal)
                this.setclonedatameta(this.clone_meta)
                if(this.clonenew){
                    this.setTraveler_name("");
                    this.setPhone("");
                    this.setEmail("");
                    this.setEmail_second("");


                }

                this.setItinerary_places(JSON.parse(this.$route.params.itiplace));
                this.setTour_location(JSON.parse(this.$route.params.tour_loc));
            }

            this.setlead_data(this.$route.params.lead_data)


            if(this.lead_data){
                this.setDriver_pickup_date_time(this.lead_data.date+' 00:00:00')
                this.setTraveler_name(this.lead_data.name)
                this.setNo_of_adults(this.lead_data.adult_guest)
                this.setNo_of_children(this.lead_data.kids_guests)
                // console.log( built_remark("Query Generated"));
                this.setmeta_interactions(built_interaction("Query Generated","Click Action","Done",this.lead_data.lead_id))
                this.setRemarklead(this.lead_data.remark)
                // this.setRemarks(this.built_remark("Query Generated"))
                this.setPhone(this.lead_data.phone)
                this.setEmail(this.lead_data.email)
                this.setmeta_infant(this.lead_data.infant_guest)
                this.setmeta_source(this.lead_data.source)

            }

            this.setQuery_feel(3)
            // infant_guest



        },
        mounted(){
            this.currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'');
            // this.item.meals_supplement="test";
            var agency=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'));
            // console.log(JSON.parse(agency))
            // this.item.booking_id='QRY-'+document.querySelector("meta[name='user-id']").getAttribute('content')+'-'+agency.id+'-'+this.currentDate+'-'+Math.floor((Math.random() * (999-100+1)+100))
            this.item.status=1;
            // this.item.remarks.time=

            if(_.isEmpty(this.meta.meta_exp_costflight)){

                this.meta.meta_exp_costflight.push({
                    "type": "flight",
                    "title": "",
                    "qty": "",
                    "unit": "",
                    "price": "",
                    "ref": "flt"
                });

            }

        },
        destroyed() {
            this.resetState()
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
            "item.traveler_name": function(newVal, oldVal) {

                if ((typeof this.item.phone !== "undefined" && this.item.phone.length > 10) || (typeof this.item.email !== "undefined" && this.item.email.length > 10)) {
                    this.get_trav();
                }



            },
            "errormodal": function() {
                if(!this.errormodal){
                    this.errors=[];
                }

            },
            "locations": function() {
                if(!this.redeleteflag){
                    this.inmodalnew();
                }


            },
            // "$route.params.lead_data": function() {
            //
            //     this.lead_data=this.$route.params.lead_data
            // },
            // "hotels":{
            //
            //     handler(newval, oldVal){
            //         this.tempflag=false;
            //         this.tempflag=true;
            //
            //     },
            //     deep: true
            //
            // },
            "item.tour_location": {

                handler(newval, oldVal){
                    this.tourlocalarray=this.item.tour_location;
                    this.days_count=0;
                    console.log("item.tour_location");
                    newval.forEach( (dataObj) => {
                        // console.log("hotel----");
                        console.log(dataObj);
                        // item.tour_location[index]['daynights']=parent(dataObj.days)+1
                        //     alert(dataObj.days);
                        this.days_count=Number(this.days_count) + Number(dataObj.days);


                        //  alert(this.days_count);
                    });

                    if(this.item.tour_cost.length<1){

                        this.item.tour_cost= [{'cost':'','type':''}]
                    }








                },
                deep: true


            },
            "item.tour_cost":function () {

                if(this.item.tour_cost.length<1){

                    this.item.tour_cost= [{'cost':'','type':''}]
                }
            },
            "checked":function () {
                //   alert("in")
                this.item.tour_location.splice(0,this.item.tour_location.length)
                this.item.itinerary_places=_.cloneDeep({})
                this.meta.meta_exp_cost=_.cloneDeep([])
            },

            cost:function() {
                // console.log("cost");
                // console.log(this.item.tour_location);
                // if(this.cost==='refresh'){
                //
                // }
if(this.cost){
    if(this.refresh_cost==true){
        // this.meta.meta_exp_cost=[]
        var flag=0;
        var return_arr=[];
        if(_.isEmpty(this.meta.meta_exp_cost)){

            this.item.tour_location.forEach( (dataObj) => {
                // console.log("hotel----");
                console.log(dataObj);
                if(dataObj.hotel.hotel_data!==null){
                    if (typeof (dataObj.hotel.hotel_data.title) !== "undefined" ) {

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
            if(this.meta.meta_transport){

                this.meta.meta_exp_cost.push({
                    "type": "transport",
                    "title": this.meta.meta_transport,
                    "qty": "",
                    "unit": "",
                    "price": "",
                    "ref":"transport",
                });
            }
            flag=1;
        }
        else{
            flag=0;
            var trans_flag=0;

            this.item.tour_location.forEach( (dataObj) => {
                // console.log("hotel----");
                //  console.log(dataObj);
                if(dataObj.hotel.hotel_data!==null){
                    if (typeof (dataObj.hotel.hotel_data.title) !== "undefined" ) {


                        var arr_cost=_.cloneDeep(this.meta.meta_exp_cost);

                        for ( var j=0, len=arr_cost.length; j < len; j++ ){

                            if(arr_cost[j]['type']==='hotel' && arr_cost[j]['type']!=='transport'){
                                if(arr_cost[j]['ref']==dataObj.id){

                                    return_arr.push(arr_cost[j]);

                                }
                                else{
                                    return_arr.push({
                                        "type": "hotel",
                                        "title": dataObj.hotel.hotel_data.title,
                                        "qty": "",
                                        "unit": "",
                                        "price": "",
                                        "rate": "",
                                        "ref": dataObj.id
                                    });
                                }
                            }
                            else if( arr_cost[j]['type']!=='transport'){
                                return_arr.push({
                                    "type": arr_cost[j].type,
                                    "title": arr_cost[j].title,
                                    "qty": arr_cost[j].qty,
                                    "unit": arr_cost[j].unit,
                                    "price": arr_cost[j].price,
                                    "rate": arr_cost[j].rate,
                                    "ref": arr_cost[j].ref
                                });

                            }



                        }
                    }

                }
            });
            var arr_cost=_.cloneDeep(this.meta.meta_exp_cost);
            arr_cost.forEach((cost) =>{
                if(cost.type==='transport'){
                            return_arr.push({
                                "type": cost.type,
                                "title": cost.title,
                                "qty": cost.qty,
                                "unit": cost.unit,
                                "price": cost.price,
                                "rate": cost.rate,
                                "ref": cost.ref
                            });
                            trans_flag=1;
                        }
            });

        // else
            if(trans_flag===0){
                return_arr.push({
                    "type": "transport",
                    "title": this.meta.meta_transport,
                    "qty": "",
                    "unit": "",
                    "price": "",
                    "rate": "",
                    "ref":"transport",
                });
            }




        }
        console.log(JSON.stringify(return_arr));
        if(flag===0) {
            var arr_cost = _.cloneDeep(return_arr);
        }
        else if(flag===1){
            var arr_cost=_.cloneDeep(this.meta.meta_exp_cost);
        }

        for ( var j=0, len=arr_cost.length; j < len; j++ ){

            for ( var k=j+1, lenn=arr_cost.length; k < lenn; k++ ){

                if(arr_cost[j]['ref']==arr_cost[k]['ref'] && typeof(arr_cost[j]['ref'])!=="undefined" && typeof(arr_cost[k]['ref'])!=="undefined"){


                    if(arr_cost[k]['price']!==""){
                        arr_cost[j]=arr_cost[k];

                    }
                    arr_cost[k]={}

                }

            }

        }

        this.ytest=_.cloneDeep([])
        // console.log(arr_cost)
        for(var d=0 ; d<arr_cost.length;d++){
            if(JSON.stringify(arr_cost[d])!=='{}'){
                this.ytest.push(arr_cost[d]) ;
            }
        }

        var newArray=_.cloneDeep(this.ytest)
//                     alert("f")
// console.log(newArray)
        var lenk=newArray.length
        for ( var b=0; b < lenk; b++ ){
// console.log(newArray[b])
            var find='no';
            var lenj=this.item.tour_location.length
            for ( var c=0; c < lenj; c++ ){

                if(newArray[b]['ref']=== this.item.tour_location[c]['id']  ){
                    find='yes'
                }

            }



            if(find!=='yes' && newArray[b]['type']==='hotel'){
                this.ytest.splice(b, 1);
            }

        }




        this.meta.meta_exp_cost=_.cloneDeep(this.ytest);
        this.refresh_cost=false;
        this.cost=true;
    }

    else {
        this.cost=true;
    }
}



            },



        },


        methods: {
            ...mapActions('QueriesSingle', ['setmeta_interactionsfull','storeData','storeTour', 'resetState', 'setBooking_id','setplaces', 'setDriver_pickup_date_time','setBudget', 'setTraveler_name', 'setBill_pay', 'setNo_of_adults', 'setNo_of_children', 'setNote', 'setStatus', 'setPhone', 'setEmail', 'setEmail_second', 'setTraveller_id', 'setGenerated_itinerary', 'setItinerary_places', 'setAgency_id', 'setAgent_id', 'setMeal_day', 'setMeals_supplement', 'setMessageidd', 'setPackage_category', 'setPickup_address', 'setPickup_location', 'setQuery_feel', 'setRemark','setRemarkedit', 'setRemarklead','setScore', 'setScore_new', 'setTotal_room', 'setTotal_tour_days', 'setTour_cost', 'setTour_cost_tax', 'setTour_id', 'setTour_name', 'setTour_location','fetchScoreRange','fetchTourAll','fetchplace','fetchhotel','fetchCityAll','updateCity','setTitle','setLocations','setTotal_tour_days','setmeta_infant','setmeta_transport'
                ,'setmeta_source'
                ,'setmeta_flightprice'
                ,'setmeta_flight'
                ,'setmeta_welcome_mail'
                ,'setmeta_incl_ex'
                ,'setmeta_closuer',
                'setclonedata',
                'setclonedatameta',
                'setlast_previous','setlast_quote_no','setby_lead'
                ,'setmeta_exp_cost','setmeta_exp_costflight','setmeta_executive_name','setmeta_executive_no','addnewtour','setmeta_interactions','setlead_data','setclone_data','setclone_meta','setclonenew','setlead_meta']),
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
                        //console.log(response.data)
                        if(response.data==="No Data"){

                        }
                        else if(response.data ==="This Number is linked with Lms Agent / Agency" || response.data ==="This Email is linked with Lms Agent / Agency" || response.data==='This Email or Number is linked with Lms Agent / Agency'){
                            alert(response.data);
                            this.resettrav();


                        }
                        else{
                            this.traveller_array=response.data
                            this.setPhone(this.traveller_array.phone)
                            this.setEmail(this.traveller_array.email)
                            this.setTraveler_name(this.traveller_array.name)
                        }


                    })
            },
            clonenow(){


                this.showModalclone=false
                if(typeof (this.$route.params.clone_data)!=="undefined"){
                    this.setclonenew(this.$route.params.newlead)
                    this.clone_datal=_.cloneDeep(this.$route.params.clone_data);
                    this.clone_metal=_.cloneDeep(this.$route.params.clone_meta);
                    if(this.clonenew) {
                        this.clone_metal.interactions=_.cloneDeep({});
                        this.clone_datal.remarks=_.cloneDeep([]);
                        this.item.remarks=[];
                    }
                    this.checked=false;
                    this.locations=_.cloneDeep(this.clone_datal.tour_location);


                    this.setclone_data(this.clone_datal);
                    this.setclone_meta(this.clone_metal);
// this.item=Object.assign(this.item,this.clone_data);
// this.meta=Object.assign(this.meta,this.clone_meta);
                    this.setclonedata(this.clone_datal)
                    this.setclonedatameta(this.clone_metal)


                    if(this.clonenew){
                        this.setTraveler_name("");
                        this.setPhone("");
                        this.setEmail("");
                        this.setEmail_second("");
                        this.setDriver_pickup_date_time(null);
                        this.setlast_quote_no(0)

                        this.meta.meta_exp_cost=_.cloneDeep([])
                    }

                    if(this.$route.params.newleadprev){
                       // this.meta.meta_exp_cost=_.cloneDeep([])
                        this.setlead_meta(this.$route.params.lead_meta)
                        this.setlead_data(this.$route.params.lead_data)
                        if(this.lead_data){

                            let tempobj={};
                            tempobj['lead_status']=2;
                            tempobj['id']=this.lead_data.id;

                            this.setlead_data(tempobj)
                            let tempobj2={};
                            // tempobj2['meta_query_gen']=getmeta(this.clone_metal.by_lead,'lead','meta_query_gen');
                            getmeta(this.lead_data.id,'lead','meta_query_gen')
                                .then(response => {

                                    tempobj2['meta_query_gen']=JSON.parse(response);
                                })
                            this.setlead_meta(tempobj2)

                        }

                        this.setlast_quote_no(0)

                        this.currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'');
                        // this.item.meals_supplement="test";
                        var agency=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'));
                        // console.log(JSON.parse(agency))
                        this.item.booking_id='QRY-'+document.querySelector("meta[name='user-id']").getAttribute('content')+'-'+agency.id+'-'+this.currentDate+'-'+Math.floor((Math.random() * (999-100+1)+100))


                    }


                    else {

                        this.meta.interactions=_.cloneDeep({});
                        this.setlast_previous({'id':this.clone_datal.id, 'count':parseInt(this.clone_metal.last_quote_no)+1 })

                        let tempobj={};
                        tempobj['lead_status']=2;
                        tempobj['id']=this.clone_metal.by_lead;

                        this.setlead_data(tempobj)
                        let tempobj2={};
                        // tempobj2['meta_query_gen']=getmeta(this.clone_metal.by_lead,'lead','meta_query_gen');
                        getmeta(this.clone_metal.by_lead,'lead','meta_query_gen')
                            .then(response => {

                                tempobj2['meta_query_gen']=JSON.parse(response);
                            })
                        this.setlead_meta(tempobj2)
                    }

                    this.setStatus(1);
                    // this.setRemarks([]);
                    this.setmeta_interactions(built_interaction("Created by Clone","Click Action","Done",this.clone_datal.booking_id))
                    this.setItinerary_places(JSON.parse(this.$route.params.itiplace));
                    this.setTour_location(JSON.parse(this.$route.params.tour_loc));

                    this.currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'');
                    // this.item.meals_supplement="test";
                    var agency=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'));
                    // console.log(JSON.parse(agency))
                    this.item.booking_id='QRY-'+document.querySelector("meta[name='user-id']").getAttribute('content')+'-'+agency.id+'-'+this.currentDate+'-'+Math.floor((Math.random() * (999-100+1)+100))
                    this.inmodalnew();
                }
                this.tour_name='';
                this.setTour_name('')
            },
            alert(msg){
                alert(msg);
            },
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 ) {
                    evt.preventDefault();;
                } else {
                    return true;
                }
            },
            isNumberpercent: function(evt) {
                console.log(evt)
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                var valr =Number( evt.target.value+evt.key)
                // alert(typeof(valr))
                if(valr >100){
                    evt.preventDefault();;
                }

                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 ) {
                    // alert("value")
                    evt.preventDefault();;
                } else {
                    return true;
                }
            },
            refeshhotel(){
                this.changeview('summ')
                setTimeout(() => this.changeview('hotel'), 1);

                // this.summ=true;
                // this.hotel=false;
                // this.summ=false;
                // this.hotel=true;
            },
            addnewcost(){
                if(!_.isEmpty(this.temp_cost.type) && !_.isEmpty(this.temp_cost.title) && !_.isEmpty(this.temp_cost.qty) && !_.isEmpty(this.temp_cost.rate)){


                    var price= this.temp_cost.qty * this.temp_cost.rate;
                    this.meta.meta_exp_cost.push({
                        "type": this.temp_cost.type,
                        "title": this.temp_cost.title,
                        "qty": this.temp_cost.qty,
                        "unit":this.temp_cost.unit,
                        "rate":this.temp_cost.rate,
                        "price": price,
                        "ref":this.temp_cost.type + Math.floor((Math.random() * (999-100+1)+100))
                    });
                    this.addlevel1=false;
                    this.addlevel2=false;
                    this.temp_cost={"type": "", "title": "", "qty": "",  "unit": "", "price": "","ref":"" },
                        this.showModalcost=false
                }},
            addnewcostflight(){
                if(!_.isEmpty(this.temp_cost.title) && !_.isEmpty(this.temp_cost.qty) && !_.isEmpty(this.temp_cost.rate)) {
                    var price = this.temp_cost.qty * this.temp_cost.rate;


                    this.meta.meta_exp_costflight.push({
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
                }    },
            totalprice(a,b){
                if(a>0 && b>0){
                    return a*b;
                }else {
                    return 0
                }

            },
            onCompletecreate(){

            },
            changeview(item){
                //    alert(item);
                this.summ=false;
                this.hotel=false;
                this.day=false;
                this.trav=false;
                this.train=false;
                this.mail=false;
                this.cost=false;
                this.intraction=false;
                this[item]=true;
                if(item=='day' || item=='hotel'){
                    // console.log('daysdone');
                    this.setDriver_pickup_date_time(this.item.driver_pickup_date_time);
                }
                if(item=='intraction'){

                    this.setmeta_interactionsfull(this.item.remarks);
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

            },
            changemenu(item){
                //    alert(item);
                this.create=false;
                this.createfull=false;
                this[item]=true;
                if(item=='createfull'){
// alert("inn");
                    if(this.newremark1!=''){
                        this.setRemarkedit(this.newremark1)
                        this.newremark1='';
                    }

                }

            },
            updateRemark(e) {
                if(this.newremark!=''){
                    var any= _.cloneDeep(this.newremark);
                    this.setRemark(any)
                    this.newremark=''
                }

            },


            removeE(id){
                //   alert(id);
                let index = this.locations.findIndex(location => location.id === id);
                this.locations.splice(index, 1);
            },
            inmodal(value){
                //   console.log(value);
                this.item.tour_location =JSON.parse(value.locations);

                this.item.tour_name=value.title;
                this.item.tour_id=value.id;
                this.places.cites=this.item.tour_location;


                this.places.cites.forEach((val) => {

                    console.log(val.id);
                    var gg=val.id;


                    this.fetchplace(gg.split('-')[0]);
                    this.fetchhotel(gg.split('-')[0])
                });



            },
            inmodalnew(){
                //      alert("inmodalnew");

                console.log(this.locations);
                this.item.tour_location =this.locations;
                // this.item.tour_name=value.title;
                // this.item.tour_id=value.id;
                this.places.cites=this.item.tour_location;


                this.places.cites.forEach((val) => {

                    console.log(val.id);
                    var gg=val.id;


                    this.fetchplace(gg.split('-')[0]);
                    this.fetchhotel(gg.split('-')[0])
                });


                this.tempflag=true;

            },
            call_place(id){
                console.log(id);
            },
            remove(id){
                // alert(id);
                // this.redeleteflag=true
                let index = this.item.tour_location.findIndex(location => location.id === id);
                // alert(index);
                this.item.tour_location.splice(index, 1);
                this.tempflag=false;
                this.tempflag=true;
            },
            removeloc(id){
                // alert("removeloc");
                let index = this.item.tour_location.findIndex(location => location.id === id);
                this.item.tour_location.splice(index, 1);
            },

            addplace(id){
                console.log(id);
                this.setItinerary_places(id)
            },
            addhotel(e){
                this.setTour_location(e.target.value)
            },
            updateDriver_pickup_date_time(e) {
                this.setDriver_pickup_date_time(e.target.value)
            },
            updateBooking_id(e) {
                this.setBooking_id(e.target.value)
                //   this.fetchplace();
            },
            updateBudget(e) {
                this.setBudget(e.target.value)
            },
            updateTraveler_name(e) {
                this.setTraveler_name(e.target.value)
            },
            updateBill_pay(e) {
                this.setBill_pay(e.target.value)
            },
            updateNo_of_adults(e) {
                this.setNo_of_adults(e.target.value)
            },
            updateNo_of_children(e) {
                this.setNo_of_children(e.target.value)
            },
            updatemeta_infant(e) {
                this.setmeta_infant(e.target.value)
            },
            updatemeta_transport(e) {
                this.setmeta_transport(e.target.value)
            },
            updatemeta_source(e) {
                this.setmeta_source(e.target.value)
            },
            updatemeta_flightprice(e) {
                this.setmeta_flightprice(e.target.value)
            },
            updatemeta_flight(value) {
                this.setmeta_flight(value)
            },
            updatemeta_welcome_mail(value) {
                this.setmeta_welcome_mail(value)
            },
            updatemeta_incl_ex(value) {
                this.setmeta_incl_ex(value)
            },
            updatemeta_closuer(value) {
                this.setmeta_closuer(value)
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



            updatemeta_executive_name(e) {
                this.setmeta_executive_name(e.target.value)
            },
            updatemeta_executive_no(e) {
                this.setmeta_executive_no(e.target.value)
            },




            updateNote(e) {
                this.setNote(e.target.value)
            },
            updateStatus(e) {
                this.setStatus(e.target.value)
            },
            updatePhone(e) {
                this.setPhone(e.target.value)
            },
            updateEmail(e) {
                this.setEmail(e.target.value)
            },
            updateEmail_second(e) {
                this.setEmail_second(e.target.value)
            },
            updateTraveller_id(e) {
                this.setTraveller_id(e.target.value)
            },
            updateGenerated_itinerary(e) {
                this.setGenerated_itinerary(e.target.value)
            },
            // updateItinerary_places(e) {
            //     this.setItinerary_places(e.target.value)
            // },
            updateAgency_id(e) {
                this.setAgency_id(e.target.value)
            },
            updateAgent_id(e) {
                this.setAgent_id(e.target.value)
            },
            updateMeal_day(e) {
                this.setMeal_day(e.target.value)
            },
            updateMeals_supplement(e) {
                this.setMeals_supplement(e.target.value)
            },
            updateMessageidd(e) {
                this.setMessageidd(e.target.value)
            },
            updatePackage_category(e) {
                this.setPackage_category(e.target.value)
            },
            updatePickup_address(e) {
                this.setPickup_address(e.target.value)
            },
            updatePickup_location(e) {
                this.setPickup_location(e.target.value)
            },
            updateQuery_feel(e) {
                this.setQuery_feel(e.target.value)
            },
            updateRemarks(e) {
                this.setRemarks(e.target.value)
            },
            updateRemarksedit(e) {
                this.setRemarkedit(e.target.value)
            },


            updateScore(e) {
                this.setScore(e.target.value)
            },
            updateScore_new(e) {
                this.setScore_new(e.target.value)
            },
            updateTotal_room(e) {
                this.setTotal_room(e.target.value)
            },
            updateTotal_tour_days(e) {
                this.setTotal_tour_days(e.target.value)
            },
            updateTour_cost(e) {
                this.setTour_cost(e.target.value)
            },
            updateTour_cost_tax(e) {
                this.setTour_cost_tax(e.target.value)
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

            //----
            updateTitle(e) {
                this.setTitle(e.target.value)
            },
            updateLocations(e) {
                // this.setLocations(e.target.value)
            },
            updateTotal_tour_days(e) {
                this.setTotal_tour_days(e.target.value)
            },
            inmodalL(value){
                this.tempflag=false;
                this.selected = null
                this.locationd.id=value.id+'-'+Math.floor((Math.random()* 500) + 1);
                this.locationd.name=value.title;
                this.showModal=true;

                this.locations=_.cloneDeep(this.item.tour_location)
                this.inmodalnew();

            },

            updateCity(day) {
                // alert(day);
                this.showModal=false;
                this.locationd.days=day;
                this.locationd.daynights=parseInt(day) +1;
                // this.tourlocalarray.push({...this.locationd});
                this.locations.push({...this.locationd});

                this.locationd.name="";
                this.count++;
                //     this.setCity(value)
                this.days=1;
                this.inmodalnew();
                this.tempflag=false;
                this.tempflag=true;
                // this.setLocations(this.locations);
            },
            changemenucontinue(){
                for(var prop1 in this.item.itinerary_places) {
                    var found='empty';
                    console.log(prop1);
                    for (let i=0; i<this.item.tour_location.length; i++) {

                        if( this.item.tour_location[i].id===prop1){
                            found=prop1
                            console.log("found");
                        }
                    }
                    if(found==='empty'){
                        this.item.itinerary_places= _.omit(this.item.itinerary_places,prop1)
                    }

                }

                if(this.item.tour_location){
                    if(this.item.traveler_name && this.item.email &&  this.item.phone) {
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



                this.setmeta_interactionsfull(this.item.remarks);

                if(this.item.tour_location){
                    var re = /\S+@\S+\.\S+/;
                    var  email_v= re.test(this.item.email);
                    if(this.item.traveler_name && this.item.email && email_v && this.item.phone){
                        var res = this.item.phone.replace(/\(/g, "");
                        res = res.replace(/\)/g, "");
                        res = res.replace(/-/g, "");
                        res = res.replace(/ /g, "");
                        this.setPhone(res);
                        this.submit=false;
                        let trav = new FormData();

                        trav.set("name",this.item.traveler_name)
                        trav.set("email",this.item.email)
                        trav.set("phone",this.item.phone)
                        trav.set("type","query")
                        axios.post('/api/v1/travellers', trav)
                            .then(response => {
                                // alert("p0")
                                this.setTraveller_id(response.data.id)
                                // console.log(response)
                                // console.log(response.data.status)
                                // alert("p01")
                                if(response.data.status=='error'){
                                    // alert("p02")
                                    this.submit=true;
                                    alert(response.data.type);
                                }

                                else {
                                    if(this.newremark1!=''){
                                        // alert("p1")
                                        this.setRemarkedit(this.newremark1)
// alert("p2")
                                    }

                                    if(this.save_tour=== true && this.checked ===false){
                                        // alert("p3")
                                        // tourdata:{'titel':'','locations':'','total_tour_days':''}


                                        if(this.tour_name ==null){
                                            // alert("p4")
                                            var namet='';
                                            this.tourlocalarray.forEach((callback)=>{
                                                console.log(callback.name);
                                                namet+= callback.name + "|";
                                            })

                                            namet = namet.substring(0, namet.length - 1);
                                            console.log("custom name");
                                            this.setTour_name(namet)
                                        }
                                        else {

                                            if(this.tour_name ==null || this.tour_name ==''){
                                                // alert("p5")
                                                this.setTour_name(this.item.tour_name)
                                            }
                                            else{
                                                // alert("p6")
                                                this.setTour_name(this.tour_name)
                                            }
                                        }
                                    }
                                    else{
                                        var namet='';
                                        this.tourlocalarray.forEach((callback)=>{
                                            console.log(callback.name);
                                            namet+= callback.name + " | ";
                                        })

                                        namet = namet.substring(0, namet.length - 1);
                                        console.log("custom name");
                                        this.setTour_name(namet)
                                    }


                                    this.showerror=true;
                                    this.storeData()
                                        .then(() => {


                                            if(this.save_tour=== true && this.checked ===false){

                                                // tourdata:{'titel':'','locations':'','total_tour_days':''}


                                                if(this.tour_name ==''){
                                                    var namet='';
                                                    this.tourlocalarray.forEach((callback)=>{
                                                        // console.log(callback.name);
                                                        namet+= callback.name + " | ";
                                                    })

                                                    namet = namet.substring(0, namet.length - 1);
                                                    // console.log(namet);
                                                    this.localtourdata['title']=namet
                                                }
                                                else{
                                                    this.localtourdata['title']=this.tour_name
                                                }

                                                this.localtourdata['locations']=JSON.stringify(this.tourlocalarray)
                                                this.localtourdata['total_tour_days']=1

                                                this.addnewtour(this.localtourdata,document.querySelector("meta[name='user-id']").getAttribute('content'));
                                            }
                                            this.$router.push({ name: 'queries.index' })
                                            this.$eventHub.$emit('create-success')
                                        })
                                        .catch((error) => {
                                            this.submit=true;
                                            console.log(error)
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

                this.setmeta_interactionsfull(this.item.remarks);
                this.submit=false;
                //validations
                if(!this.item.driver_pickup_date_time){this.errors.push("Date")}
                // if(!this.item.budget){this.errors.push("Budget")}
                if(!this.item.traveler_name){this.errors.push("Traveler Name")}
                if(!this.item.no_of_adults){this.errors.push("No. of Adult")}
                if(this.item.no_of_children===''){this.errors.push("No. of Child")}
                if(!this.item.phone){this.errors.push("Phone")}
                var re = /\S+@\S+\.\S+/;
                var  email_v= re.test(this.item.email);
                if(!this.item.email && !email_v){this.errors.push("Email")}
                //    if(!this.item.pickup_address){this.errors.push("Pickup Address")}
                if(!this.item.pickup_location){this.errors.push("Pickup Location")}
                if(!this.item.total_room){this.errors.push("No. of Rooms")}
                if(!this.meta.meta_transport){this.errors.push("Transport")}

                if(!_.isEmpty(this.errors)){
                    this.errormodal=true
                    this.submit=true;
                }
                else {
                    var res = this.item.phone.replace(/\(/g, "");
                    res = res.replace(/\)/g, "");
                    res = res.replace(/-/g, "");
                    res = res.replace(/ /g, "");
                    this.setPhone(res);

                    let trav = new FormData();

                    trav.set("name", this.item.traveler_name)
                    trav.set("email", this.item.email)
                    trav.set("phone", this.item.phone)
                    trav.set("type", "query")
                    axios.post('/api/v1/travellers', trav)
                        .then(response => {
                            this.setTraveller_id(response.data.id)
                            // console.log(response)
                            // console.log(response.data.status)

                            if (response.data.status == 'error') {
                                this.submit = true;
                                alert(response.data.type);
                            } else {
                                if (this.newremark1 != '') {

                                    this.setRemarkedit(this.newremark1)

                                }

                                if (this.save_tour === true && this.checked === false) {

                                    // tourdata:{'titel':'','locations':'','total_tour_days':''}


                                    if (this.tour_name == null) {
                                        var namet = '';
                                        this.tourlocalarray.forEach((callback) => {
                                            console.log(callback.name);
                                            namet += callback.name + " | ";
                                        })

                                        namet = namet.substring(0, namet.length - 1);
                                        // console.log("custom name");
                                        this.setTour_name(namet)
                                    } else {
                                        if(this.tour_name ==null || this.tour_name ==''){
                                            this.setTour_name(this.item.tour_name)
                                        }
                                        else{
                                            this.setTour_name(this.tour_name)
                                        }
                                    }
                                }
                                else{
                                    var namet='';
                                    this.tourlocalarray.forEach((callback)=>{
                                        console.log(callback.name);
                                        namet+= callback.name + " | ";
                                    })

                                    namet = namet.substring(0, namet.length - 1);
                                    console.log("custom name");
                                    this.setTour_name(namet)
                                }


                                this.showerror = true;
                                this.storeData()
                                    .then(() => {


                                        if (this.save_tour === true && this.checked === false) {

                                            // tourdata:{'titel':'','locations':'','total_tour_days':''}


                                            if (this.tour_name == '') {
                                                var namet = '';
                                                this.tourlocalarray.forEach((callback) => {
                                                    // console.log(callback.name);
                                                    namet += callback.name + " | ";
                                                })

                                                namet = namet.substring(0, namet.length - 1);
                                                // console.log(namet);
                                                this.localtourdata['title'] = namet
                                            } else {
                                                this.localtourdata['title'] = this.tour_name
                                            }

                                            this.localtourdata['locations'] = JSON.stringify(this.tourlocalarray)
                                            this.localtourdata['total_tour_days'] = 1

                                            this.addnewtour(this.localtourdata, document.querySelector("meta[name='user-id']").getAttribute('content'));
                                        }
                                        // this.$router.push({ name: 'queries.index' })
                                        this.$router.push({ path: '/queries/'+this.createdid+'/edit' })
                                        this.$eventHub.$emit('create-success')
                                    })
                                    .catch((error) => {
                                        this.submit = true;
                                        console.log(error)
                                    })

                            }

                        })
                        .catch(error => {
                            this.submit = true;
                            alert("error=1");
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
        components: {VueTelInput,LocationPlaceCloneComponent,LocationPlaceComponent,LocationPlaceEditComponent,LocationComponent,HotelComponent,DayplanComponent,draggable,FormWizard,
            TabContent ,WizardButton,WizardStep,BadgerAccordion, BadgerAccordionItem},
        // mixins:[helpersmixin],
    }
</script>


<style scoped>
    input[type=number] {
        -moz-appearance:textfield;
    }
    /*form styles*/
    #msform {
        width: 400px;
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
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>
<style>
    .badger-toggle-indicator{font-size:25px;}
    .vue-form-wizard.md .wizard-icon-circle {

        width: 30px;
        height: 30px;
        font-size: 14px;
        margin-top: 20px;

    }
    .vue-form-wizard * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /*font-size: unset !important;*/
    }
    .bootstrap-datetimepicker-widget{
        z-index:3;
    }

    input{
        font-size: 20px;
        padding-left: 10px;
    }
    .vue-numeric-input {
        position: relative;
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 60px !important;
    }
    li:hover{
        cursor: pointer;
    }
    .dropdown-toggle{
        cursor:pointer;
    }
    .rounded {
        border-radius: .5rem!important;
    }
    .fix-addtask{
        position: relative;
        top: -123px;
        right: -15px;
    }
</style>
