<template>
    <section class="content-wrapper dim">


        <section class="content-header">
            <div class="row ml-1">
                <div class="col-3">
                    <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>
                    <h1>Booking</h1>
                </div>
            </div>
        </section>

        <div class="activedev" :class="[create ? 'activedev' : 'hidedev' ]" id="msform" >
            <!-- progressbar -->
            <div>
                <form-wizard @on-complete="onCompletecreate" color="rgb(23, 80, 125)" title=""  subtitle="">
                    <tab-content title="Tour Creation" icon="fa fa-check">
                        <fieldset>
                            <div  class="container">
                                <div  class="row mb-3 rowstyle">
                                    <div  class="col-lg-5 mr-5">
                                        <div  class="row">
                                            <div  class="col-12 text-left">
                                                <label class="labelstyle">Date</label>
                                            </div>
                                            <div  class="col-12">
                                                <date-picker
                                                    class="dateinput"
                                                    :value="item.driver_pick_up_time"
                                                    :config="$root.dpconfigDatetime"
                                                    name="driver_pickup_date_time"

                                                    @dp-change="updatedriver_pick_up_time"

                                                >
                                                </date-picker>
                                            </div>
                                        </div>
                                    </div>
                                    <div  class="col-lg-4 ml-5">
                                        <div  class="row ml-2">
                                            <div  class="col-12 ml-5">
                                                <label class="labelstyle">Meal Plan</label>
                                            </div>
                                            <div  class="row ml-2">
                                                <div class="col-3"></div>
                                                <div  class="col-3 text-center" >
                                                    <img v-if="item.meals_supplement['bf']" @click="item.meals_supplement['bf']=false"  class="mealimg" src="./../dashboard_resources/bfdown.png" alt="task">
                                                    <img v-if="!item.meals_supplement['bf']" @click="item.meals_supplement['bf']=true"  class="mealimg" src="./../dashboard_resources/bfup.png" alt="task">
                                                    <span class="ml-2 sizeshort">BF</span>
                                                </div>
                                                <div  class="col-3 text-center" >
                                                    <img  v-if="item.meals_supplement['l']" @click="item.meals_supplement['l']=false" class="mealimg" src="./../dashboard_resources/lunchdown.png" alt="task">
                                                    <img v-if="!item.meals_supplement['l']" @click="item.meals_supplement['l']=true" class="mealimg" src="./../dashboard_resources/lunch.png" alt="task">
                                                    <span  class="sizeshort ml-3">L</span>
                                                </div>
                                                <div  class="col-3 text-center">
                                                    <img v-if="item.meals_supplement['d']" @click="item.meals_supplement['d']=false"  class="mealimg" src="./../dashboard_resources/dinnerdown.png" alt="task" >
                                                    <img v-if="!item.meals_supplement['d']" @click="item.meals_supplement['d']=true" class="mealimg" src="./../dashboard_resources/dinner.png" alt="task">
                                                    <span class="sizeshort ml-3">D</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-lg-12 text-left labelstyle marcrete">Create Own Tour
                                        <label class="switch">
                                            <input type="checkbox" v-model="checked">
                                            <span class="slider round"></span>
                                        </label>
                                        Select Tour</div>
                                </div>
                            </div>
                            <div :class="[checked ? 'hidedev' : 'activedev' ]">
                                <div class="row mt-4">
                                    <div class="col-8 text-left labelstyle"><p>Add Location<i class="fas fa-calendar-alt ml-1"></i>
                                        &nbsp;&nbsp; <span>Save Tour <input type="checkbox" v-model="save_tour"></span>
                                        <span v-if="save_tour" class="labelstyle">Tour Name: <input type="text" v-model="tour_name" ></span></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-8" >
                                        <v-select :clearable="false" placeholder="Select"
                                                  name="addlocations"
                                                  label="title"
                                                  @input="inmodalL"

                                                  :options="cityAll"
                                                  class="add_style"

                                        />
                                    </div>
                                </div>
                                <!--                                <button @click="savetour">save tour</button>-->
                            </div>

                            <div :class="[checked ? 'activedev' : 'hidedev' ]">
                                <div class="row mt-4">
                                    <div class="col-6 text-left"><p class="labelstyle">Select Tour<i class="fas fa-calendar-alt ml-1"></i></p></div>
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
                                                  class="add_style"

                                        />
                                    </div>
                                </div>
                            </div>



                            <ul v-if="checked" id="sortable">
                                       <location-place-component v-for="(location,index ) in item.tour_location"  :key="location.id" :location="location" :index="index" :hotels="hotels[(location.id).split('-')[0]]" :place="places.places_city_id[location.id.split('-')[0]]" :tour_location="item.tour_location"   @delete="alert('Can\'t Delete')"></location-place-component>

                            </ul>
                            <ul v-else id="sortable">
                                <draggable v-model="item.tour_location" group="people" @start="drag=true" @end="drag=false">
                                    <location-place-component v-for="(location,index ) in item.tour_location"  :key="location.id" :location="location" :index="index" :hotels="hotels[(location.id).split('-')[0]]" :place="places.places_city_id[location.id.split('-')[0]]" :tour_location="item.tour_location"   @delete="remove"></location-place-component>
                                </draggable>

                            </ul>

                            <!--                            <input  type="button" name="next" value="Next" class="next action-button" style="margin-left: 140px">-->
                        </fieldset>
                    </tab-content>
                    <tab-content title="Tour Details" icon="fa fa-check">
                        <fieldset>
                            <div class="container">
                                <!--first row-->
                                <div  class="row">
                                    <div  class="col-lg-6">
                                        <div  class="row">
                                            <div  class="col-12 text-left">
                                                <p class="labelstyle labelmar">Travelers</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <div class="row pt-2 pb-2 adultrow">
                                                    <div  class="col-lg-4">
                                                        <div class="row mar">
                                                            <div class="col-10 text-center">
                                                                <p  >Adults</p>
                                                            </div>
                                                            <div class="col-10">
                                                                <p id="adult">(12+ yrs)</p>
                                                            </div>
                                                            <div class="col-10" id="adultcol">
                                                                <input id="adultinput" type="number" min="1" :value="item.no_of_adults" @input="updateNo_of_adults" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <div class="row" id="childrow">
                                                            <div class="col-10 text-center" >
                                                                <p >Children</p>
                                                            </div>
                                                            <div class="col-10" >
                                                                <p id="child">(2-12 yrs)</p>
                                                            </div>
                                                            <div class="col-10" id="childcol">
                                                                <input type="number" min="0" :value="item.no_of_children" @input="updateNo_of_children" id="childinput">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <div class="row ml-1">
                                                            <div class="col-12 text-center">
                                                                <p >Infant</p>
                                                            </div>
                                                            <div class="col-12" >
                                                                <p id="infant">(below 2yrs)</p>
                                                            </div>
                                                            <div class="col-12" id="incol">
                                                                <input type="number" min="0"  :value="meta.meta_infant" @input="updatemeta_infant" id="ininput">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-5" id="roomcol">
                                                <div class="row">
                                                    <div class="col-lg-5">
                                                        <div class="row pt-2">
                                                            <div  class="col-12 text-center">
                                                                <p  id="room">Rooms</p>
                                                            </div>
                                                            <div class="col-12">
                                                                <p id="roomp">(12+ yrs)</p>
                                                            </div>
                                                            <div class="col-12" id="inputcol">
                                                                <input id="roominput" type="number" min="1"  :value="item.total_room" @input="updateTotal_room">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-5" id="ext">
                                                        <div class="row pt-2" id="extrow">
                                                            <div class="col-12 text-center" id="extp">
                                                                <p  id="extra">Extra Beds</p>
                                                            </div>
                                                            <div class="col-12" >
                                                                <p id="extrap">(2-12 yrs)</p>
                                                            </div>
                                                            <div class="col-12" id="extin">

                                                                <input type="number" min="0" id="extinput" v-model="meta.meta_extra_bed">


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="row mt-4">
                                            <div  class="col-12 text-left">
                                                <p  class="labelstyle labelmar">Transport</p>
                                            </div>
                                        </div>
                                        <div  class="row inputfield">
                                            <div  class="col-1">
                                                <img src="./../dashboard_resources/transport.png" class="imgdem">
                                            </div>
                                            <div class="col-10">
                                                <input type="text" class="transinput" :value="meta.meta_transport" @input="updatemeta_transport">

                                                </input>
                                            </div>
                                        </div>
                                        <div  class="row mt-4">
                                            <div  class="col-12 text-left">
                                                <p class="labelstyle labelmar">Pickup Location</p>
                                            </div>
                                        </div>
                                        <div  class="row inputfield">
                                            <div  class="col-1">
                                                <img  src="./../dashboard_resources/location.png" class="imgdem">
                                            </div>
                                            <div class="col-10">
                                                <input type="text"  :value="item.pickup_location"
                                                       @input="updatePickup_location"  class="transinput">


                                            </div>
                                        </div>
                                    </div>
                                    <div  class="col-lg-6" >
                                        <div  class="row ml-1"><div  class="col-12 text-left">
                                            <p class="labelstyle">Budget</p>
                                        </div>
                                        </div>
                                        <div  class="row inputfield1 ml-4">
                                            <div  class="col-1">
                                                <img src="./../dashboard_resources/currency.png" class="imgdem">
                                            </div>
                                            <div class="col-9">
                                                <input  type="text" :value="item.budget"  @input="updateBudget" class="transinput">
                                            </div>
                                            <div class="col-1 ml-5"><img  src="./../dashboard_resources/edit.png" class="imgdem">
                                            </div>
                                        </div>
                                        <div  class="row ml-1 mt-4">
                                            <div  class="col-12 text-left">
                                                <p  class="labelstyle">Remark</p>
                                            </div>
                                        </div>
                                        <div  class="row inputfield1 ml-4">
                                            <div  class="col-1">
                                                <img src="./../dashboard_resources/remark_gray.png" class="imgdem"></div>
                                            <div class="col-10">
                                                    <textarea   rows="3" cols="50" id="remarktxt"
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
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" @click="showModal=false">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                                <div class="modal-body">
                                                    <h4 class="modal-title">{{locationd.name}}</h4>
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
                    <tab-content title="Contacts Details" icon="fa fa-check">

                        <fieldset>
                            <div class="container">
                                <div  class="row">
                                    <div  class="col-5 mr-5">
                                        <div  class="row">
                                            <div  class="col-12 text-left">
                                                <p class="labelstyle">Name</p>
                                            </div>
                                        </div>
                                        <div  class="row inputfield1 ml-0">
                                            <div  class="col-1">
                                                <span><i class="fas fa-user"></i></span></div>
                                            <div class="col-9">
                                                <input  type="text" placeholder="Enter Traveler name"
                                                        :value="item.full_name"
                                                        @input="updateTraveler_name" name="name" class="transinput"></div><div class="col-1"><img src="./../dashboard_resources/edit.png" class="ml-3 imgdem">
                                        </div>
                                        </div>
                                        <div  class="row mt-5">
                                            <div  class="col-12 text-left">
                                                <p class="labelstyle">E-mail ID</p>
                                            </div>
                                        </div>
                                        <div  class="row inputfield1 ml-0">
                                            <div  class="col-1">
                                                <img src="./../dashboard_resources/email.png" class="imgdem"></div>
                                            <div class="col-9"><input  type="text" name="name"  :value="item.email"
                                                                       @input="updateEmail" placeholder="adb@gmail.com" class="transinput"></div><div class="col-1"><img src="./../dashboard_resources/edit.png" class="ml-3 imgdem">
                                        </div>
                                        </div>
                                    </div>
                                    <div  class="col-5 ml-5" >
                                        <div  class="row">
                                            <div  class="col-12 text-left">
                                                <p class="labelstyle">Mobile</p>
                                            </div>
                                        </div>
                                        <div  class="row inputfield1 ml-0">
                                            <div  class="col-1">
                                                <img src="./../dashboard_resources/contact.png" class="imgdem"></div>
                                            <div class="col-9"><input placeholder="888888888"   :value="item.phone"
                                                                      @input="updatePhone" type="text" name="name" class="transinput"></div><div class="col-1"><img src="./../dashboard_resources/edit.png" class="ml-3 imgdem">
                                        </div>
                                        </div>
                                        <div  class="row mt-5">
                                            <div  class="col-12 text-left">
                                                <p class="labelstyle">Query Source</p>
                                            </div>
                                        </div>
                                        <div  class="row inputfield1 ml-0">
                                            <div  class="col-1">
                                                <img src="./../dashboard_resources/Querysource.png" class="imgdem"></div>
                                            <div class="col-10">
                                                <select :value="meta.meta_source" @change="updatemeta_source" type="text" name="name" placeholder="Social Media">
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
                            <wizard-button v-if="props.isLastStep" @click.native="changemenu('createfull')" class="wizard-footer-right finish-button" :style="props.fillButtonStyle" id="continue_button">{{props.isLastStep ? 'Continue' : 'Next'}}</wizard-button>
                            <wizard-button v-if="props.isLastStep" @click.native="submitForm" class="wizard-footer-right finish-button" :style="props.fillButtonStyle" id="fixed">{{props.isLastStep ? 'Save & Exit' : 'Next'}}</wizard-button>
                        </div>
                    </template>

                </form-wizard>



            </div>
        </div>
        <section class="content" :class="[createfull ? 'activedev' : 'hidedev' ]">
            <div class="row">
                <div class="col-lg-2">
                    <ul class="sidenav mt-4">
                        <a href="#"  :class="summ==true?'sidenavactive':''"> <li @click="changeview('summ')" > Summary</li></a>
                        <a href="#" :class="hotel==true?'sidenavactive':''"><li  @click="changeview('hotel')" >Hotels</li></a>
                        <a href="#" :class="day==true?'sidenavactive':''"> <li @click="changeview('day')" >Day Plan</li></a>
                        <a href="#" :class="exe==true?'sidenavactive':''"> <li @click="changeview('exe')" >Executive & Transport</li></a>
                        <a href="#" :class="trav==true?'sidenavactive':''"><li @click="changeview('trav')" >Traveller</li></a>
                        <a href="#" :class="train==true?'sidenavactive':''"><li  @click="changeview('train')" >Train/Flight</li></a>
                        <a href="#" :class="mail==true?'sidenavactive':''"><li @click="changeview('mail')" >Mail Format</li></a>

                        <a href="#" :class="up==true?'sidenavactive':''"><li @click="changeview('up')" >Upload</li></a>
                        <a href="#" :class="cost==true?'sidenavactive':''"><li @click="changeview('cost')" >Cost</li></a>
                        <a href="#" :class="intraction==true?'sidenavactive':''"><li @click="changeview('intraction')" >Interaction History</li></a>
                    </ul>
                </div>
                <div class="col-lg-10">



                    <!--                    Executive and handler-->
                    <div :class="[exe ? 'activedev' : 'hidedev' ]" class="sameclass ml-5">
                        <div class="row">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-4">
                                <p>Handler Name</p>
                                <input type="text" :value="item.handler_name" @change="updateHandler_name" class="pt-1 pb-1" id="handle-input">
                            </div>
                            <div class="col-lg-4">
                                <p>Handler Mobile no</p>
                                <input type="text" :value="item.handler_no" @change="updateHandler_no" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">
                            </div>
                            <div class="col-lg-1"></div>
                        </div>

                        <div class="row mt-5">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-4">
                                <p>Driver Name</p>
                                <input type="text"  :value="meta.meta_driver_name" @change="updatemeta_driver_name" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">
                            </div>
                            <div class="col-lg-4">
                                <p>Driver Mobile no</p>
                                <input type="text" :value="meta.meta_driver_no" @change="updatemeta_driver_no" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">
                            </div>
                            <div class="col-lg-1"></div>
                        </div>

                        <div class="row mt-5">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-4">
                                <p>Transport Type</p>
                                <input type="text" :value="meta.meta_transport" @input="updatemeta_transport" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">
                            </div>
                            <div class="col-lg-4">
                                <p>Transport Number</p>
                                <input type="text" :value="meta.meta_transport_no" @input="updatemeta_transport_no" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">
                            </div>
                            <div class="col-lg-1"></div>
                        </div>

                        <button  style="outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(34, 80, 125);font-size: 14px;left: 81.8%; top: 90%;font-weight: 400;padding: 6px 12px;min-width: 140px;color: white;width: 100px;border-radius: 4px;position: fixed;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;" @click="changeview('trav')" >Next</button>

                    </div>
                    <!--                summary-->
                    <div :class="[summ ? 'activedev' : 'hidedev' ]" class="sameclass">
                        <div class="container mt-5 mb-5">
                            <div class="row">
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


                                    <div class="row mt-4">
                                        <div class="col-12 mar_bottom"><p >Tour Date<i class="fas fa-calendar-alt ml-2"></i></p></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-8">
                                            <date-picker
                                                id="date_style"
                                                :value="item.driver_pick_up_time"
                                                :config="$root.dpconfigDatetime"
                                                name="driver_pick_up_time"

                                                @dp-change="updatedriver_pick_up_time"
                                            >
                                            </date-picker>
                                        </div>
                                    </div>


                                    <draggable v-model="item.tour_location" group="people" @start="drag=true" @end="drag=false">

                                        <div v-for="(tour,index) in item.tour_location ">
                                            <div class="row mt-4">
                                                <div class="col-12 location_bottom"><p >Location {{index+1}} <img src="./../dashboard_resources/loction.png" class="imgsize ml-2"></p></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12  "><input disabled type="text" id="location_in1" v-model="tour.name">
                                                    <input type="text" id="location_in2" v-model="tour.days">
<!--                                                    <img @click="removeloc(tour.id)" src="./../dashboard_resources/minus.png" class="imgsize">-->
                                                </div>



                                            </div>

                                        </div>

                                    </draggable>
                                    <br>
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
                                        <div class="col-12 mar_bottom"><p >Duration</p></div>
                                    </div>
                                    <div class="row" id="dur_row">
                                        <div class="ml-3 col-4 mr-5 dur_in"><input disabled type="text" class="dura_in" value="Nights"><input disabled type="text" class="durat_in" :value="days_count"> </div>
                                        <div class="col-4 ml-5 dur_in"><input disabled type="text" class="dura_in" value="Day"><input disabled type="text" class="durat_in" :value="days_count+1"> </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12"><p >Travelers</p></div>
                                    </div>
                                    <div class="row mar_bottom">
                                        <div class="col-6">
                                            <div class="row pt-2 pb-2" id="tra_row">
                                                <div class="col-lg-4">
                                                    <div class="row" id="tra_ml">
                                                        <div class="col-10 text-center">
                                                            <p >Adults</p>
                                                        </div>
                                                        <div class="col-10" >
                                                            <p id="adu-yr">(12+ yrs)</p>
                                                        </div>
                                                        <div class="col-10" id="ad-mt">
                                                            <input min="1" type="number" id="ad-in" :value="item.no_of_adults" @input="updateNo_of_adults">
                                                        </div>
                                                    </div>
                                                </div>







                                                <div class="col-lg-4" style="margin-left: -3%;">
                                                    <div class="row">
                                                        <div class="col-10 text-center" >
                                                            <p style="font-size: 15px; color: grey;">Children</p>
                                                        </div>
                                                        <div class="col-10" >
                                                            <p style="font-size: 10px; color: darkgray; margin-top: -22%; width: 59px;">(2-12 yrs)</p>
                                                        </div>
                                                        <div class="col-10" style="margin-top: -17%;">
                                                            <input type="number" :value="item.no_of_children" @input="updateNo_of_children" min="0" style="font-size: 16px; color: grey; width: 59px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px;">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 ml-1">
                                                    <div class="row">
                                                        <div class="col-12 text-center">
                                                            <p style="font-size: 15px; color: grey;">Infant</p>
                                                        </div>
                                                        <div class="col-12" style="margin-left: -1px;">
                                                            <p style="font-size: 10px; color: darkgray; width: 57px; margin-top: -33%;">(below 2yrs)</p>
                                                        </div>
                                                        <div class="col-12" style="margin-top: -19%;">
                                                            <input min="0" type="number" style="font-size: 16px; color: grey; width: 59px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px; margin-left: -17%;" :value="meta.meta_infant" @input="updatemeta_infant">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="z-index: 1; background-color: white; border: 1px solid gainsboro; /*! position: absolute; */ /*! left: 41.3%; */ border-radius: 5px; width: 154px;margin-left: -3%;" class="col-4" >
                                            <div class="row" >
                                                <div class="col-lg-5 ml-1">
                                                    <div class="row pt-2">
                                                        <div class="col-12 text-center">
                                                            <p style="font-size: 15px; color: grey;">Rooms</p>
                                                        </div>
                                                        <div class="col-12" >
                                                            <p style="font-size: 10px; margin-top: -19%; color: darkgrey; width: 43px;">(12+ yrs)</p>
                                                        </div>
                                                        <div class="col-12" style="margin-bottom: 6%;margin-top: -13%;">
                                                            <input min="1" type="number" style="font-size: 16px; color: grey; width: 59px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px;" :value="item.total_room" @input="updateTotal_room">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5 ml-4">
                                                    <div class="row pt-2">
                                                        <div class="col-12 ml-4">
                                                            <p style="font-size: 15px; color: grey; margin-left: -32px;">Extra Beds</p>
                                                        </div>
                                                        <div class="col-12" style="margin-left: -23%;">
                                                            <p style="font-size: 10px; color: darkgrey; margin-top: -7px;">(2-12 yrs)</p>
                                                        </div>
                                                        <div class="col-12" style="margin-top: -11px;margin-left: -23%;">

                                                            <input min="0" type="number" style="font-size: 16px; color: grey; width: 59px; border: 1px solid gainsboro; padding: 0px 0px 0px 4px;" v-model="meta.meta_extra_bed">


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <!--            second section-->
                                <div class="col-lg-6" style="border-left: solid white 2px;margin-left: -7%;padding-left:3%">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Pickup Location<span style="margin-left: 1px"><img src="./../dashboard_resources/location.png" height="20px" style="margin-top: -5px"></span></p></div>
                                    </div>
                                    <div class="row ml-1" style="padding-left: 20px; color: grey; width: 92%; border: 1px solid gainsboro;background-color: white">
                                        <div class="col-11" ><input type="text"
                                                                    class="form-control"
                                                                    name="pickup_location"
                                                                    placeholder="Enter Pickup location"
                                                                    :value="item.pickup_location"
                                                                    @input="updatePickup_location" style="border: 0px none; margin-left: -9%; width: 115%;"></div><div class="col-1" style="margin-left:-3%"><img src="./../dashboard_resources/edit.png" class="imgsize"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-10"><p style="color:grey;">Pickup Date/Time</p></div>
                                    </div>
                                    <div class="row" style="margin-top:-2%">
                                        <div class="col-12">
                                            <date-picker
                                                style="width: 92%;border-radius: 3px;"
                                                :value="meta.meta_pickup_date"
                                                :config="$root.dpconfigDatetime"
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
                                        <div class="col-12" ><p style="color:grey;">Query Feel Rating:</p></div>
                                        <div class="col-12">
                                            <div class="row" style="margin-left: 1px">

                                                <div class="bg-danger" @click="meta.query_feel=5" style="width:75px;height: 18px;text-align:center">
                                                    <div style="font-size: 12px;color: white;font-weight: 600;">5</div>
                                                    <i class="fas fa-caret-up" style="margin-top: 0px" v-if="meta.query_feel==5"></i></div>
                                                <div class=" bg-warning" @click="meta.query_feel=4" style="width:75px;height: 18px;text-align:center">
                                                    <div style="font-size: 12px;color: white;font-weight: 600;">4</div>
                                                    <i class="fas fa-caret-up" style="margin-top: 0px" v-if="meta.query_feel==4"></i></div>
                                                <div class="bg-primary" @click="meta.query_feel=3" style="width:75px;height: 18px;text-align:center">
                                                    <div style="font-size: 12px;color: white;font-weight: 600;">3</div>
                                                    <i class="fas fa-caret-up" style="color:black;margin-top:0px" v-if="meta.query_feel==3"></i></div>
                                                <div class=" bg-success" @click="meta.query_feel=2" style="width:75px;height: 18px;text-align:center">
                                                    <div style="font-size: 12px;color: white;font-weight: 600;">2</div>
                                                    <i class="fas fa-caret-up" style="margin-top: 0px" v-if="meta.query_feel==2"></i></div>
                                                <div class=" bg-dark" @click="meta.query_feel=1" style="width:75px;height: 18px;text-align:center">
                                                    <div style="font-size: 12px;color: white;font-weight: 600;">1</div>
                                                    <i class="fas fa-caret-up" style="margin-top: 0px" v-if="meta.query_feel==1"></i></div>


                                            </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: 15px;margin-top: 15px"><p style="color:grey;">Past Interactions</p></div>
                                        <div class="row ml-4" v-for="(rem,index) in meta.remarks " v-if="index==(meta.remarks.length)-1" style="width: 86%;height: 60px;background-color: white;margin-left: 28px;border:solid gainsboro 1px;border-radius: 5px;font-size:14px;margin-top:-25px;">
                                            <!--                                                   {{rem,index}}-->
                                            <div class="col-10"><p style="border:solid gainsboro 1px;border-radius: 15px;color:red;margin-top:2px;margin-left: 5px;width: 215px;padding-left: 10px;padding-right: 10px">
                                                <span style="color:black;margin-left:-5px;margin-right: 5px"><i class="far fa-clock"></i></span>{{ rem['time'] | moment}}</p></div>

                                            <div class="col-1"><img class="ml-5" @click="remarkk=remarkk?false:true" src="./../dashboard_resources/dropdown.png" style="width:20px;height:20px"></div>
                                            <p style="width: 320px;border-left:solid black 4px;margin-left: 31px; margin-top:-12px;padding-left: 5px">{{rem['remark']}}</p>

                                        </div>
                                        <div :class="[remarkk ? 'activedev' : 'hidedev' ]" class="col-12">
                                            <div style="overflow-x: hidden; background-color: white; width: 91%; height: 250px; border: 1px solid gainsboro; border-radius: 10px; font-size: 16px; z-index: 1;">


                                                <div v-for="rem in meta.remarks " style="width: 570px;color:forestgreen;margin-left: 20px;margin-top: 20px">

                                                    <i class="far fa-clock" style="margin-right: 10px"></i>{{ rem['time'] | moment}}
                                                    <span style="">|    Agent: {{rem['agent']}}</span>
                                                    <p style="text-align:justify-all;width: 580px;height: 40px;border-left:solid black 3px;margin-left: 6px;padding-left: 5px;font-size: 12px;color:black;margin-top: 5px ">{{rem['remark']}}</p>
                                                </div>
                                                <!--                                                    <div style="width: 570px;color:red;margin-left: 20px;margin-top:-10px"><i class="far fa-clock" style="margin-right: 10px"></i>05-09-2019 / 02:15 pm <span style="margin-left: 205px">Due Date : 10-09-2019</span>-->
                                                <!--                                                        <p style="text-align:justify-all;width: 580px;height: 40px;border-left:solid black 3px;margin-left: 6px;padding-left: 5px;font-size: 12px;color:black;margin-top: 5px ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>-->
                                                <!--                                                    </div>-->
                                                <!--                                                    <div style="width: 570px;color:dodgerblue;margin-left: 20px;margin-top:-10px"><i class="far fa-clock" style="margin-right: 10px"></i>05-09-2019 / 02:15 pm <span style="margin-left: 295px">On Going</span>-->
                                                <!--                                                        <p style="text-align:justify-all;width: 580px;height: 40px;border-left:solid black 3px;margin-left: 6px;padding-left: 5px;font-size: 12px;color:black;margin-top: 5px ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>-->
                                                <!--                                                    </div>-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row pt-2">
                                        <div class="col-lg-12"><span style=";color:grey;font-size:20px;">Remark</span></div>
                                    </div>
                                    <div class="row" >
                                        <div class="col-9" ><div class="row ml-1" style="width:100%;padding-left: 33px;background-color: white;border-radius:3px"><div class="col-1"style="margin-left: -12%;"><span style="color: grey;font-size: 18px;"><i class="fa fa-pencil-square-o"></i></span></div>
                                            <div class="col-11">
                                                <input type="text" class="form-control"
                                                       name="remark"
                                                       placeholder="Enter Remark"
                                                       v-model="newremark"

                                                       style="border:0;width:118%"
                                                >
                                            </div>

                                        </div>
                                        </div>
                                        <div class="col-lg-2">

                                            <input type="button" value="Add" @click="updateRemark(newremark)" class="vue-btn btn btn-primary text-light" style="font-size: 18px; /*! margin-left: -8%; */">

                                            <!--                                                        <i aria-hidden="true" class="fa fa-paper-plane"></i>-->



                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12 text-center ml-5"><button class="ml-5" @click="changeview('hotel')" style="outline: currentcolor none 0px !important; box-sizing: border-box; border: 1px solid transparent; background-color: rgb(34, 80, 125); font-size: 14px; font-weight: 400; padding: 6px 12px; min-width: 140px; color: white; width: 100px; border-radius: 4px; position: fixed; z-index: 1; display: inline-block; vertical-align: middle; touch-action: manipulation; cursor: pointer; background-image: none; white-space: nowrap; line-height: 1.42857;">Next</button></div>
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
                    </div>

                    <!--                    hotel-->
                    <div :class="[hotel ? 'activedev' : 'hidedev' ]" class="sameclass" v-if="hotel" >

                        <hotel-component :day="day" @refresh="refeshhotel"  :location="item.tour_location"  :hotels="hotels"  @addplace="addplace" :tour_location="item.tour_location" @showday="changeview('day')" @delete="remove"></hotel-component>

                    </div>
                    <!--                    Interaction History-->
                    <div  :class="[ intraction ? 'activedev' : 'hidedev' ]"class="sameclass" >

                        <badger-accordion>
                            <badger-accordion-item>
                                <template slot="header"><button class="btn btn-light" style="font-size: 20px;border-radius: 30px">12-02-2020</button></template>
                                <template slot="content" >
                                    <div style="border-left: 5px solid #0058A1; margin-left: 6.5%">
                                        <div class="row" style="margin-left: 4.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row" style="margin-left: -12.5%;">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 100px;margin-top: -10%;" src="./../dashboard_resources/quotation11.png"></div>
                                            <div class="col-lg-9" style="background-color: white; border: 1px solid gainsboro; border-radius: 5px; font-size: 18px;margin-top: -1%;">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p class="mt-3">12:15 pm</p>
                                                        <p style="margin-top: 8%;">Opened by Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-5 text-success">
                                                        <p class="mt-2">Opened</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 4.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row" style="margin-left: -12.5%;">
                                            <div class="col-lg-2" style="height: 94px"></div>
                                            <div class="col-lg-9" style="background-color: white; border: 1px solid gainsboro; border-radius: 5px; font-size: 18px;margin-top: -1%;">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p class="mt-3">12:15 pm</p>
                                                        <p style="margin-top: 8%;">Sent to Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-5">
                                                        <p class="mt-2" style="color:#00539F">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 4.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Task</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020</p></div>
                                        </div>

                                        <div class="row" style="margin-left: -12.5%;">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 100px;margin-top: -10%;" src="./../dashboard_resources/Task11.png"></div>
                                            <div class="col-lg-9" style="background-color: white; border: 1px solid gainsboro; border-radius: 5px; font-size: 18px;margin-top: -1%;">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p class="mt-3">12:15 pm</p>
                                                        <p style="margin-top: 8%;">Call to Mr Ramesh for passport verification</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-5 text-success">
                                                        <p class="mt-2">Due</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 4.5%;">
                                            <div class="col"><p style="font-size: 20px">Email</p></div>
                                        </div>

                                        <div class="row" style="margin-left: -12.5%;">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 100px;margin-top: -10%;" src="./../dashboard_resources/email11.png"></div>
                                            <div class="col-lg-9" style="background-color: white; border: 1px solid gainsboro; border-radius: 5px; font-size: 18px;margin-top: -1%;">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p class="mt-3">12:15 pm</p>
                                                        <p style="margin-top: 8%;">Passport verification email</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-5 text-success">
                                                        <p class="mt-2">Failed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 4.5%;">
                                            <div class="col"><p style="font-size: 20px">Audit</p></div>
                                        </div>

                                        <div class="row" style="margin-left: -12.5%;">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 100px;margin-top: -10%;" src="./../dashboard_resources/audit11.png"></div>
                                            <div class="col-lg-9" style="background-color: white; border: 1px solid gainsboro; border-radius: 5px; font-size: 18px;margin-top: -1%;">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p class="mt-3">12:15 pm</p>
                                                        <p style="margin-top: 8%;width: 124%">Ramesh(OPS) has change the hotel from Hyatt to Hilton</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-5 text-success">
                                                        <p class="mt-2">Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 4.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Broadcast</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020, 02:55 AM</p></div>
                                        </div>

                                        <div class="row" style="margin-left: -12.5%;">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 100px;margin-top: -10%;" src="./../dashboard_resources/broadcast11.png"></div>
                                            <div class="col-lg-9" style="background-color: white; border: 1px solid gainsboro; border-radius: 5px; font-size: 18px;margin-top: -1%;">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p class="mt-3">12:15 pm</p>
                                                        <p style="margin-top: 8%;">Please check your agenda</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-5 text-success">
                                                        <p class="mt-2">Scheduled</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"></div>
                                            <div class="col-lg-9" style="font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </badger-accordion-item>

                            <badger-accordion-item>
                                <template slot="header"><button class="btn btn-light mt-2" style="font-size: 20px;border-radius: 30px">11-02-2020</button></template>
                                <template slot="content" >
                                    <div style="border-left: 10px solid #0058A1; margin-left: 6.5%">
                                        <div class="row" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/quotation.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Opened by Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Opened</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Sent to Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2" style="color:#00539F">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Task</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Call to Mr Ramesh for passport verification</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2">Due</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Email</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Passport verification email</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-danger">
                                                        <p class="mt-2">Failed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Audit</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Ramesh(OPS) has change the hotel from Hyatt to Hilton</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Broadcast</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020, 02:55 AM</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Please check your agenda</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-dark">
                                                        <p class="mt-2">Scheduled</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"></div>
                                            <div class="col-lg-9" style="font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </badger-accordion-item>

                            <badger-accordion-item>
                                <template slot="header"><button class="btn btn-light mt-2" style="font-size: 20px;border-radius: 30px">10-02-2020</button></template>
                                <template slot="content" >
                                    <div style="border-left: 10px solid #0058A1; margin-left: 6.5%">
                                        <div class="row" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/quotation.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Opened by Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Opened</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Sent to Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2" style="color:#00539F">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Task</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Call to Mr Ramesh for passport verification</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2">Due</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Email</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Passport verification email</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-danger">
                                                        <p class="mt-2">Failed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Audit</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Ramesh(OPS) has change the hotel from Hyatt to Hilton</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Broadcast</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020, 02:55 AM</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Please check your agenda</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-dark">
                                                        <p class="mt-2">Scheduled</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"></div>
                                            <div class="col-lg-9" style="font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </badger-accordion-item>

                            <badger-accordion-item>
                                <template slot="header"><button class="btn btn-light mt-2" style="font-size: 20px;border-radius: 30px">09-02-2020</button></template>
                                <template slot="content" >
                                    <div style="border-left: 10px solid #0058A1; margin-left: 6.5%">
                                        <div class="row" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/quotation.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Opened by Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Opened</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Sent to Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2" style="color:#00539F">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Task</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Call to Mr Ramesh for passport verification</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2">Due</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Email</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Passport verification email</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-danger">
                                                        <p class="mt-2">Failed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Audit</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Ramesh(OPS) has change the hotel from Hyatt to Hilton</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Broadcast</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020, 02:55 AM</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Please check your agenda</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-dark">
                                                        <p class="mt-2">Scheduled</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"></div>
                                            <div class="col-lg-9" style="font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </badger-accordion-item>

                            <badger-accordion-item>
                                <template slot="header"><button class="btn btn-light mt-2" style="font-size: 20px;border-radius: 30px">08-02-2020</button></template>
                                <template slot="content" >
                                    <div style="border-left: 10px solid #0058A1; margin-left: 6.5%">
                                        <div class="row" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/quotation.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Opened by Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Opened</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Sent to Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2" style="color:#00539F">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Task</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Call to Mr Ramesh for passport verification</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2">Due</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Email</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Passport verification email</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-danger">
                                                        <p class="mt-2">Failed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Audit</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Ramesh(OPS) has change the hotel from Hyatt to Hilton</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Broadcast</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020, 02:55 AM</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Please check your agenda</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-dark">
                                                        <p class="mt-2">Scheduled</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"></div>
                                            <div class="col-lg-9" style="font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </badger-accordion-item>

                            <badger-accordion-item>
                                <template slot="header"><button class="btn btn-light mt-2" style="font-size: 20px;border-radius: 30px">07-02-2020</button></template>
                                <template slot="content" >
                                    <div style="border-left: 10px solid #0058A1; margin-left: 6.5%">
                                        <div class="row" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/quotation.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Opened by Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Opened</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Sent to Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2" style="color:#00539F">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Task</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Call to Mr Ramesh for passport verification</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2">Due</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Email</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Passport verification email</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-danger">
                                                        <p class="mt-2">Failed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Audit</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Ramesh(OPS) has change the hotel from Hyatt to Hilton</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Broadcast</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020, 02:55 AM</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Please check your agenda</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-dark">
                                                        <p class="mt-2">Scheduled</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"></div>
                                            <div class="col-lg-9" style="font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </badger-accordion-item>

                            <badger-accordion-item>
                                <template slot="header"><button class="btn btn-light mt-2" style="font-size: 20px;border-radius: 30px">06-02-2020</button></template>
                                <template slot="content" >
                                    <div style="border-left: 10px solid #0058A1; margin-left: 6.5%">
                                        <div class="row" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/quotation.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Opened by Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Opened</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">#Q1(#54321)</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Sent to Mr Ramesh</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2" style="color:#00539F">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Task</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Call to Mr Ramesh for passport verification</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-primary">
                                                        <p class="mt-2">Due</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Email</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Passport verification email</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-danger">
                                                        <p class="mt-2">Failed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col"><p style="font-size: 20px">Audit</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/email1.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Ramesh(OPS) has change the hotel from Hyatt to Hilton</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4" style="margin-left: 2.5%;">
                                            <div class="col-lg-4"><p style="font-size: 20px">Broadcast</p></div>
                                            <div class="col-lg-7 text-right text-primary" style="font-size: 18px"><p class="mt-2">Due Date: 13-02-2020, 02:55 AM</p></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/Task.png"></div>
                                            <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <p>12:15 pm</p>
                                                        <p>Please check your agenda</p>
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-dark">
                                                        <p class="mt-2">Scheduled</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2 text-right mt-3"></div>
                                            <div class="col-lg-9" style="font-size: 18px">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                    </div>
                                                    <div class="col-lg-6 text-right mt-4 text-success">
                                                        <p class="mt-2">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </badger-accordion-item>
                        </badger-accordion>
                    </div>
                    <!--                    Day Plan-->
                    <div :class="[day ? 'activedev' : 'hidedev' ]" class="sameclass" v-if="day">

                        <dayplan-component   :datestart="item.driver_pick_up_time"  :place="places.places_city_id"  :tour_location="item.tour_location" :meal="item.meals_supplement" @addplace="addplace"  @delete="remove" @showtrav="changeview('exe')"></dayplan-component>

                    </div>
                    <!--                    Executive and handler-->
                    <!--                    <div :class="[exe ? 'activedev' : 'hidedev' ]" style="position: absolute; left: 18%;  font-size: 20px; width: 100%; height: 100%;">-->
                    <!--                        <div class="row">-->
                    <!--                            <div class="col-lg-1"></div>-->
                    <!--                            <div class="col-lg-4">-->
                    <!--                                <p>Handler Name</p>-->
                    <!--                                <input type="text" v-model="item.handler_name" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">-->
                    <!--                            </div>-->
                    <!--                            <div class="col-lg-4">-->
                    <!--                                <p>Handler Mobile no</p>-->
                    <!--                                <input type="text"  v-model="item.handler_no" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">-->
                    <!--                            </div>-->
                    <!--                            <div class="col-lg-1"></div>-->
                    <!--                        </div>-->

                    <!--                        <div class="row mt-5">-->
                    <!--                            <div class="col-lg-1"></div>-->
                    <!--                            <div class="col-lg-4">-->
                    <!--                                <p>Driver Name</p>-->

                    <!--                                <input type="text" :value="meta.meta_driver_name" @input="updatemeta_driver_name" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">-->
                    <!--                            </div>-->
                    <!--                            <div class="col-lg-4">-->
                    <!--                                <p>Driver Mobile no</p>-->
                    <!--                                <input type="text" :value="meta.meta_driver_no" @input="updatemeta_driver_no" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">-->
                    <!--                            </div>-->
                    <!--                            <div class="col-lg-1"></div>-->
                    <!--                        </div>-->

                    <!--                        <div class="row mt-5">-->
                    <!--                            <div class="col-lg-1"></div>-->
                    <!--                            <div class="col-lg-4">-->
                    <!--                                <p>Transport Type</p>-->
                    <!--                                <input type="text" :value="meta.meta_transport" @input="updatemeta_transport "  class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">-->
                    <!--                            </div>-->
                    <!--                            <div class="col-lg-4">-->
                    <!--                                <p>Transport Number</p>-->
                    <!--                                <input type="text" :value="meta.meta_transport_no" @input="updatemeta_transport_no" class="pt-1 pb-1" style="border:1px solid gainsboro;width:100%;border-radius:3px">-->
                    <!--                            </div>-->
                    <!--                            <div class="col-lg-1"></div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->

                    <!--                    travellers -->
                    <div :class="[trav ? 'activedev' : 'hidedev' ]" class="container mb-5 sameclass" >
                        <div class="row ml-0">
                            <div class="col-6" style="margin-left: 50px ">
                                <div class="row"><div class="col-lg-12"> <span style="color:grey;font-size:20px;margin-left: 10px">Traveller Name</span></div></div>
                                <div class="row" style="background-color:white;border: 1px solid gainsboro; border-radius: 5px; font-size: 16px; width: 80%; padding-left: 40px; margin-left: 13px; height: 35px;">
                                    <div class="col-1 mt-2" style="margin-left: -12%;"><i class="fa fa-user"></i></div>
                                    <div class="col-10"><input  :value="item.full_name" @input="updateTraveler_name" type="text" style="border:0;width:122%"></div>
                                    <div class="col-1 ml-5"><img src="./../dashboard_resources/edit.png" class="imgsize"></div>
                                </div>

                            </div>
                            <div class="col-6"style="margin-left: -100px">
                                <div class="row"><div class="col-lg-12"> <span style="color:grey;font-size:20px;margin-left: 10px">Traveller Mobile no</span></div></div>
                                <div class="row" style="background-color:white;border: 1px solid gainsboro; border-radius: 5px; font-size: 16px; width: 80%; padding-left: 40px; margin-left: 13px; height: 35px;">
                                    <div class="col-1 mt-2" style="margin-left: -12%;"><img src="./../dashboard_resources/contact.png" class="imgsize"></div>
                                    <div class="col-10"><vue-tel-input style="width: 122%;border:0;height: 83%" v-model="item.phone" v-bind="bindProps" class="form-control" name="phone" placeholder="Enter Phone"></vue-tel-input></div>
                                    <div class="col-1 ml-5"><img src="./../dashboard_resources/edit.png" style="height: 25px;margin-top: 5px"></div>
                                </div>

                            </div>
                        </div>
                        <div class="row mt-3" style="margin-left: 50px">
                            <div class="col-lg-12"><span style="color:grey;font-size:20px;margin-left: 10px">Email ID</span></div>
                            <div class="col-lg-12">
                                <div class="row" style="margin-left: 11px; width: 84.5%; border: 1px solid gainsboro; border-radius: 5px; height: 35px; padding-left: 40px; font-size: 16px;background-color: white">
                                    <div class="col-1" style="margin-left:-6%">
                                        <img src="./../dashboard_resources/email.png"class="imgsize mt-1">
                                    </div>
                                    <div class="col-10"><input type="email" class="form-control"  :value="item.email"    @input="updateEmail" style="border: 0px none; width: 125.5%;margin-left: -5%;height: 100%;" placeholder="asd@mail.com"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3 ml-5">
                            <div class="col-lg-12 ml-5"><span >Pickup Address</span></div>
                            <div class="col-lg-12 ml-5">


                                <textarea rows="3" :value="item.pickup_address" @input="updatePickup_address" style="resize: none;border:1px solid gainsboro;border-radius:5px;width:82.5%"></textarea>
                            </div>
                        </div>
                        <div class="row mt-3 ml-5">
                            <div class="col-lg-12 ml-5"><span style="color:grey">Drop Address</span></div>
                            <div class="col-lg-12 ml-5">
                                <textarea rows="3" :value="item.drop_address" @change="updateDrop_address" style="resize: none;border:1px solid gainsboro;border-radius:5px;width:82.5%"></textarea>
                            </div>
                            <div style="display:none" class="col-lg-12 ml-4 mt-3"><input type="checkbox" v-model="meta.moneycollect" class="large"><span style="color:grey;font-size:20px;margin-left: 10px">Money Collected</span></div>
                        </div>
                        <div class="row mt-4 ml-5">
                            <div class="col-1"></div>
                            <div class="col-lg-3"><button class="btn btn-success pl-5 pr-5"><span style="font-size: 20px">Save Traveler Info</span></button></div>
                            <!--                            <div class="col-lg-1"></div>-->
                            <div class="col-lg-3"><button class="btn btn-warning pl-5 pr-5"><span style="font-size: 20px">Click To Reactivate</span></button></div>
                            <!--                            <div class="col-lg-1"></div>-->
                            <div class="col-lg-3"><button class="btn btn-primary pl-5 pr-5"><span style="font-size: 20px">Activate Itinerary</span></button></div>
                        </div>
                        <div style="position: relative">
                            <button @click="changeview('train')" style="outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(34, 80, 125);font-size: 14px;left: 81.8%; top: 90%;font-weight: 400;padding: 6px 12px;min-width: 140px;color: white;width: 100px;border-radius: 4px;position: fixed;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;">Next</button></div>
                    </div>
                    <!--                    train/flight-->
                    <div :class="[train ? 'activedev' : 'hidedev' ]" class="container mb-5 mt-3 sameclass">
                        <div class="row">
                            <div class="col-lg-12">
                                <span style="font-size: 20px">Ticket Details(Dept. City code Ex: “DEL” for Delhi)</span>
                            </div>
                        </div>
                        <div class="row mt-3 mb-3" style="width:90%">
                            <div class="col-lg-6 mt-2 mb-2">
                                <span class="text-primary" style="font-size: 13px">(Size: 2MB, Format: DOC/DOCX/PDF/JPEG/PNG/TIFF/ALSX)</span>

                            </div>
                            <div class="col-lg-2">

                            </div>
                            <div class="col-lg-2">

                            </div>
                            <div class="col-lg-2">

                            </div>

                        </div>
                        <div class="row">
                            <div class="col-10 ml-1 mt-3 font" v-for="(flight,index) in meta.meta_flight" style="background-color: white;border:1px solid gainsboro;width:75%">

                                <div class="col-lg-2 mt-2 mb-2" style="border-right: 1px solid gainsboro">
                                    <p >Date</p>
                                    <date-picker
                                        v-model="flight['date']"
                                        :config="$root.dpconfigDate"
                                        name="driver_pick_up_time"
                                        class="form-control"
                                        placeholder="12/02/2020"
                                        @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])"
                                        :disabled="flight['url']!=''">
                                    </date-picker>

                                    <!--                                <input  type="text" v-model="flight['date']" class="fsize mt-3" placeholder="12/02/2020">-->
                                </div>
                                <div class="col-lg-2 mt-2 mb-2" style="border-right: 1px solid gainsboro">
                                    <p >Dept Code</p>
                                    <input :disabled="flight['url']!=''" type="text" v-model="flight['dep_code']" @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="DEL">
                                </div>
                                <div class="col-lg-3 mt-2 mb-2" style="border-right: 1px solid gainsboro">
                                    <p >Arr Airport Code</p>
                                    <input :disabled="flight['url']!=''" type="text" v-model="flight['arr_code']"  @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="BOM">
                                </div>
                                <div class="col-lg-2 mt-2 mb-2" style="border-right: 1px solid gainsboro">
                                    <p>Flight no</p>
                                    <input :disabled="flight['url']!=''" type="text" v-model="flight['ticket']"  @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="123546">
                                </div>
                                <div class="col-lg-2 mt-2 mb-2 text-center" >
                                    <p v-if="flight['url']!=''">File Uploaded</p>
                                    <input v-else class="form-control mt-3"
                                           :disabled="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])"
                                           type="file" @change="updatemeta_flight($event,'meta_flight',index)">
                                    <!--                                <p class="imgsize mb-1">Del2bam_img.png</p>-->
                                    <!--                                <button class="btn-warning pl-5 pr-5 imgsize" style="color:white">Download</button><br>-->
                                    <!--                                <img class="imgmes" src="./../dashboard_resources/trash.png">-->
                                </div>

                                <div class="col-lg-1 text-right mt-4">
                                    <img  @click="meta.meta_flight.splice(index, 1) " src="./../dashboard_resources/trash.png" style="width: 27px;height: 27px;">

                                </div>

                            </div>
                        </div>

                        <div class="row mt-3 mb-3 ml-4" style="width:100%">

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
                                <button @click='meta.meta_flight.push({"date":"","dep_code":"","arr_code":"","ticket":"","url":""})' class="btn btn-primary pl-5 pr-5" style="font-size: 20px">Add New Sector</button>
                            </div>
                        </div>
                        <button @click="changeview('mail')" class="btn pl-5 pr-5" style="outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(34, 80, 125);font-size: 14px;left: 80.5%; top: 90%;font-weight: 400;padding: 6px 12px;min-width: 140px;color: white;width: 100px;border-radius: 4px;position: fixed;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;">Next</button>
                    </div>
                    <!--                    mail format-->
                    <div :class="[mail ? 'activedev' : 'hidedev' ]" class="container" style="height: 100%">
                        <div class="row">
                            <div class="col-12">
                                <form-wizard @on-complete="changeview('up')" color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Upload">


                                    <tab-content title="Welcome Notes" icon="fa fa-check">
                                        <fieldset>
                                            <div class="row">
                                                <div class="col-12">
                                                    <p class="font-size">Activate SMS Format</p>
                                                    <textarea v-model="meta.meta_activate_sms" rows="5" style="resize: none;width: 90%;border:1px solid gainsboro"></textarea>
                                                </div>
                                            </div>

                                        </fieldset>
                                    </tab-content>

                                    <tab-content title=" Closure Notes" icon="fa fa-check">
                                        <fieldset>




                                            <div class="row">
                                                <div class="col-12">
                                                    <p class="font-size ml-3">Itinerary Welcome Notes</p>
                                                    <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                                  :value="meta.meta_welcome_mail"
                                                                  @input="updatemeta_welcome_mail"
                                                    />
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-12">
                                                    <p class="font-size ml-3">Itinerary Clouser Notes: </p>
                                                    <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                                  :value="meta.meta_closuer"
                                                                  @input="updatemeta_closuer"
                                                    />
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-12">
                                                    <p class="font-size ml-3">Itinerary inclusions, exclusions notes and other T&C :</p>
                                                    <vue-ckeditor class="card-body" style="border: 0;color:grey;"

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
                    <!--                    upload-->
                    <div  v-if="up" :class="[up ? 'activedev' : 'hidedev' ]" class="container sameclass" style="">
                        <form-wizard @on-complete="changeview('cost')"  color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Cost">


                            <tab-content title="E_visa" icon="fa fa-check">
                                <fieldset>
                                    <div class="row">
                                        <div v-for="(visa,index) in meta.meta_visa">
                                            <div class="col-5 upload">
                                                <div class="row mt-2 mb-2">
                                                    <div class="col-4 uploadvisa text-center ml-2">
                                                        <img class="mt-4" src="./../dashboard_resources/E_Visa.png" height="60px" width="45px">
                                                        <p style="font-size: 16px">E-visa</p>
                                                    </div>
                                                    <div class="col-7"><div class="row ml-1"><div class="col-5 text-center mt-5">
                                                        <input v-if="visa['url']==''" type="file" @change="updatemeta_visa($event,'meta_visa',index)" />
                                                        <p v-else>File Uploaded</p>
                                                        <img  @click="meta.meta_visa.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;">

                                                    </div>

                                                    </div></div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-lg-10 text-center">
                                            <button @click='meta.meta_visa.push({"url":""})' class="btn btn-primary pl-5 pr-5" style="font-size: 20px">Add New Visa</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </tab-content>
                            <tab-content title="Passport" icon="fa fa-check">
                                <fieldset>
                                    <div class="row">
                                        <div class="col-10 ml-1 mt-3" v-for="(passport,index) in meta.meta_passport" style="background-color: white;border:1px solid gainsboro">

                                            <div class="col-lg-2 pt-4 pb-4 mt-2" style="border-right: 1px solid gainsboro">
<!--                                                <img class="mt-4 ml-3" src="./../dashboard_resources/passport.png" height="60px" width="45px">-->
<!--                                                Passport-->
                                                <p class="fsize">Exp. Date</p>
                                                <date-picker

                                                    v-model="passport['exp_date']"
                                                    :config="$root.dpconfigDate"
                                                    name="exp_date"
                                                    class="form-control"
                                                    placeholder="12/02/2020"
                                                    @change="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])"
                                                    :disabled="passport['url']!=''">
                                                </date-picker> </div>
                                            <div class="col-lg-2 pt-4 pb-4 mt-2" style="border-right: 1px solid gainsboro">
                                                <p id="fsize">Given Name</p>
                                                <input :disabled="passport['url']!=''" type="text" v-model="passport['name_first']" @change="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])" class="form-control" placeholder="Visharth">
                                            </div>
                                            <div class="col-lg-2 pt-4 pb-4 mt-2" style="border-right: 1px solid gainsboro">
                                                <p id="fsize">Sur Name</p>
                                                <input :disabled="passport['url']!=''" type="text" v-model="passport['name_last']" @change="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])" class="form-control" placeholder="Visharth">
                                            </div>
                                            <div class="col-lg-3 pt-4 pb-4 mt-2" style="border-right:1px solid gainsboro">
                                                <p class="fsize">Passport No.</p>
                                                <input :disabled="passport['url']!=''" type="text" v-model="passport['passportno']" @change="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])" class="form-control" placeholder="123546">
                                            </div>
                                            <div class="col-lg-2 pt-4 pb-4 mt-2 text-center">

                                                <p v-if="passport['url']!=''">File Uploaded</p>
                                                <input v-else
                                                       class="form-control"
                                                       :disabled="checkemptypassport(passport['exp_date'],passport['name_first'],passport['name_last'],passport['passportno'])"
                                                       type="file" @change="updatemeta_passport($event,'meta_passport',index)">
                                                <!-- <p class="imgsize mb-1">Del2bam_img.png</p>-->
                                                <!-- <button class="btn-warning pl-5 pr-5 imgsize" style="color:white">Download</button><br>-->
                                                <!-- <img class="imgmes" src="./../dashboard_resources/trash.png">-->
                                            </div>
                                            <div class="col-lg-1 text-right mt-4"><img @click="meta.meta_passport.splice(index, 1)" src="./../dashboard_resources/trash.png" style="width: 27px; height: 27px;"></div>

                                        </div>
                                    </div>


                                    <div class="row mt-3 mb-3" style="width:92.8%">

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
                                            <button @click='meta.meta_passport.push({"exp_date":"","name_first":"","name_last":"","passportno":"","url":""})' class="btn btn-primary pl-5 pr-5" style="font-size: 20px">Add New Passport</button>
                                        </div>
                                    </div>


                                </fieldset>
                            </tab-content>
                            <tab-content title="Vouchers" icon="fa fa-check">
                                <fieldset>
                                    <div class="row">
                                        <div v-for="(voucher,index) in meta.meta_voucher">
                                            <div class="col-12 upload">
                                                <div class="row mt-2 mb-2">
                                                    <div class="col-4 uploadvisa text-center ml-2">
                                                        <img class="mt-4" src="./../dashboard_resources/voucher.png" height="60px" width="45px">
                                                        <p style="font-size: 16px">Voucher</p>
                                                    </div>
                                                    <div class="col-7"><div class="row"><div class="col-5 text-center mt-5">
                                                        <input v-if="voucher['url']==''" type="file" @change="updatemeta_voucher($event,'meta_voucher',index)" />
                                                        <p v-else>File Uploaded</p>
                                                        <img  @click="meta.meta_voucher.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;">

                                                    </div>

                                                    </div></div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-lg-10 text-center">
                                            <button @click='meta.meta_voucher.push({"url":""})' class="btn btn-primary pl-5 pr-5" style="font-size: 20px">Add New Voucher</button>
                                        </div>
                                    </div>



                                </fieldset>
                            </tab-content>




                            <tab-content title="Insurance" icon="fa fa-check">
                                <fieldset>
                                    <div class="row">
                                        <div v-for="(insurance,index) in meta.meta_insurance">
                                            <div class="col-12 upload">
                                                <div class="row mt-2 mb-2">
                                                    <div class="col-4 uploadvisa text-center ml-2">
                                                        <img class="mt-4" src="./../dashboard_resources/Insurance.png" height="60px" width="45px">
                                                        <p style="font-size: 16px">Insurance</p>
                                                    </div>
                                                    <div class="col-7"><div class="row"><div class="col-5 text-center mt-5">
                                                        <input v-if="insurance['url']==''" type="file" @change="updatemeta_insurance($event,'meta_insurance',index)" />
                                                        <p v-else>File Uploaded</p>
                                                        <img  @click="meta.meta_insurance.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;">

                                                    </div>

                                                    </div></div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-lg-10 text-center">
                                            <button @click='meta.meta_insurance.push({"url":""})' class="btn btn-primary pl-5 pr-5" style="font-size: 20px">Add New Insurance</button>
                                        </div>
                                    </div>


                                </fieldset>
                            </tab-content>
                            <tab-content title="Others" icon="fa fa-check">
                                <fieldset>

                                    <div class="row">
                                        <div v-for="(other,index) in meta.meta_other">
                                            <div class="col-12 upload">
                                                <div class="row mt-2 mb-2">
                                                    <div class="col-4 uploadvisa text-center ml-2">
                                                        <img class="mt-4" src="./../dashboard_resources/Other.png" height="60px" width="45px">
                                                        <p style="font-size: 16px">Other</p>
                                                    </div>
                                                    <div class="col-7"><div class="row"><div class="col-5 text-center mt-5">
                                                        <input v-if="other['url']==''" type="file" @change="updatemeta_other($event,'meta_other',index)" />
                                                        <p v-else>File Uploaded</p>
                                                        <img  @click="meta.meta_other.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;">

                                                    </div>

                                                    </div></div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-lg-10 text-center">
                                            <button @click='meta.meta_other.push({"url":""})' class="btn btn-primary pl-5 pr-5" style="font-size: 20px">Add New Other</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </tab-content>
                        </form-wizard>
                    </div>
                    <!--                    cost-->
                    <div  v-if="cost" :class="[cost ? 'activedev' : 'hidedev' ]" class="container sameclass" style="">
                        <button style="background-color: white;padding-left: 30px;padding-right: 30px;margin-left: 75%;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;font-size: 16px ">Send Quotes<span style="margin-left: 5px;"><img src="./../dashboard_resources/dropdown11.png" style="height: 8px"></span></button>
                        <!--                        <button @click="cost=false,refresh_cost=true">Refresh</button>-->

                        <span style="color:green;font-size:14px">
                        <i @click="cost=false,refresh_cost=true" style="padding:5px;font-size:20px" class="fa fa-refresh" aria-hidden="true"></i></span>


                        <div  class="row"  v-for="(hotelarr,index) in meta.meta_exp_cost" style="font-size: 20px">
                            <div class="col-4" style="margin-left:10%;">
                                <p style="color:grey;">{{hotelarr.type.toUpperCase()}}: </p></div>
                            <div v-if="index==0" class="col-2"><p style="color: grey;margin-left: 11.5%;">Rate</p></div>
                            <div v-if="index==0" class="col-1"><p style="color: grey;margin-left: -10%;">Qty. </p></div>
                            <div v-if="index==0" class="col-1"><p style="color: grey;margin-left: -10%;">Unit </p></div>
                            <div v-if="index==0" class="col-2"><p style="color: grey;margin-left: -10%;">Price</p></div>
                            <div v-else class="col-4"><p> </p></div>


                            <div class="col-5"><input type="text" :disabled="hotelarr.type!='transport'&& hotelarr.type!='hotel'"  :value="hotelarr.title" disabled style="border: 1px solid gainsboro; border-radius: 3px; width: 85%; height: 40px; margin-left: 25.5%;"></div>

                            <div class="col-2" style="margin-left: 3.3%;"><input type="text" v-model="hotelarr.rate" style="border: 1px solid gainsboro; border-radius: 3px; width: 90%; height: 40px;"></div>
                            <div class="col-1" style="margin-left: -2%;"><input type="text" v-model="hotelarr.qty" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>
                            <div class="col-1" style="margin-left: -2%;"><input type="text" v-model="hotelarr.unit" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>
                            <div class="col-2" style="margin-left: -1%;"><input type="text" disabled="disabled" :value="hotelarr.price=totalprice(hotelarr.rate,hotelarr.qty)" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>
                            <div class="col-1"> <img v-if="hotelarr.type!='transport'&& hotelarr.type!='hotel'"  @click="meta.meta_exp_cost.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;margin-left: -14px">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-11"></div><div class="col-1"><img @click="showModalcost=true,addlevel1=true" style="height: 37px" src="./../dashboard_resources/plus.png"></div>

                        </div>

                        <div >
                            <div v-if="showModalcost">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-dialog">
                                                <div class="modal-content" style="background-color:#ECF0F5">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title" style="margin-left: 37%;color:grey">Add Custom Field</h4>
                                                        <button type="button" class="close" @click="showModalcost=false">
                                                            <span aria-hidden="true" style="font-size: 20px;font-weight: bolder">&times;</span>
                                                        </button>

                                                    </div>
                                                    <div class="modal-body">

                                                        <div class="row">
                                                            <div class="col-2 mt-3" style="font-size: 16px"> Type:</div><div class="col-8"><input type="text"  v-model="temp_cost.type"></div>
                                                            <div class="col-1 mt-3"> Title:</div><div class="col-11 mt-2"> <input type="text"  v-model="temp_cost.title"></div>
                                                            <div class="col-1 mt-3"> Rate:</div><div class="col-11 mt-2"> <input type="text"  v-model="temp_cost.rate"></div>
                                                            <div class="col-1 mt-3"> Qty:</div><div class="col-11 mt-2">  <input type="text"  v-model="temp_cost.qty"></div>
                                                            <div class="col-1 mt-3"> Unit:</div> <div class="col-11 mt-2"><input type="text"  v-model="temp_cost.unit"></div></div>

                                                        <button v-if="addlevel1" class="btn btn-primary btn-sm" @click="addnewcost()">Add</button>
                                                        <button v-if="addlevel2" class="btn btn-primary btn-sm" @click="addnewcostflight()">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <!--                        <div class="row mt-5" style="font-size: 20px">-->
                        <!--                            <div class="col-4" style="margin-left:10%;">-->
                        <!--                                <p style="color:grey;">Transport </p></div>-->


                        <!--                        </div>-->

                        <!--                        <div class="row">-->
                        <!--                            <div class="col-5"><input type="text" style="border: 1px solid gainsboro; border-radius: 3px; width: 85%; height: 40px; margin-left: 25.5%;"></div>-->

                        <!--                            <div class="col-2 " style="margin-left: 3.3%;"><input type="text" style="border: 1px solid gainsboro; border-radius: 3px; width: 90%; height: 40px;"></div>-->
                        <!--                            <div class="col-1" style="margin-left: -2%;"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>-->
                        <!--                            <div class="col-1" style="margin-left: -2%;"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>-->

                        <!--                            <div class="col-2" style="margin-left: -1%;"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>-->
                        <!--                            <div class="col-1"><img style="height: 37px" src="./../dashboard_resources/plus.png"></div>-->
                        <!--                        </div>-->


                        <div class="row mt-5" style="font-size: 20px">
                            <div class="col-4" style="margin-left:10%;">
                            </div>
                            <div class="col-2"></div>
                            <div class="col-1"></div>
                            <div class="col-1"></div>
                            <div class="col-2"> <p style="color: grey;margin-left: -10%;">Total</p></div>


                        </div>

                        <div class="row">
                            <div class="col-5"></div>

                            <div class="col-2 " style="margin-left: 3.3%;"></div>
                            <div class="col-1" style="margin-left: -2%;"></div>
                            <div class="col-1" style="margin-left: -2%;"></div>
                            <div class="col-2" style="margin-left: -1%;"><input type="text" disabled :value="total_lev1" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>

                        </div>
                        <div class="row mt-5" style="font-size: 20px">
                            <div class="col-5" style="margin-left:10%;">
                            </div>

                            <div class="col-3"><p style="color: grey;margin-left: -2%;">
                                Fixed
                                <label class="switch">
                                    <input type="checkbox" v-model="meta.markup1.percent">
                                    <span class="slider round"></span>
                                </label>
                                Percent
                                (Markup)
                            </p></div>
                            <div class="col-2"> <p style="color: grey;margin-left: -10%;">Selling Price</p></div>


                        </div>

                        <div class="row">
                            <div class="col-6"></div>

                            <div class="col-1 " style="margin-left: 1.3%;"></div>

                            <div v-if="meta.markup1.percent" class="col-2" style="margin-left: -2%;"><input @keypress="isNumberpercent($event)" v-model="meta.markup1.value" type="number" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:80%;height:40px">%</div>
                            <div v-else class="col-2" style="margin-left: -2%;"><input  @keypress="isNumber($event)" v-model="meta.markup1.value" type="number" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>

                            <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>-->
                            <div class="col-2" style="margin-left: -1%;"><input :value="total_sp1" disabled type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>

                        </div>


                        <div class="row mt-5" style="font-size: 20px">
                            <div class="col-4" style="margin-left:10%;">
                                <p style="color:grey;">Flight: </p></div>


                        </div>

                        <div class="row" v-for="(hotelarr2,index) in meta.meta_exp_costflight" >
                            <div class="col-5"><input type="text"  v-model="hotelarr2.title"  style="border: 1px solid gainsboro; border-radius: 3px; width: 85%; height: 40px; margin-left: 25.5%;"></div>

                            <div class="col-2" style="margin-left: 3.3%;"><input type="text" v-model="hotelarr2.rate" style="border: 1px solid gainsboro; border-radius: 3px; width: 90%; height: 40px;"></div>
                            <div class="col-1" style="margin-left: -2%;"><input type="text" v-model="hotelarr2.qty" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>
                            <div class="col-1" style="margin-left: -2%;"><input type="text" v-model="hotelarr2.unit" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>
                            <div class="col-2" style="margin-left: -1%;"><input type="text" disabled="disabled" :value="hotelarr2.price=totalprice(hotelarr2.rate,hotelarr2.qty)" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>
                            <div class="col-1"> <img   @click="meta.meta_exp_costflight.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;margin-left: -14px">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-11"></div><div class="col-1"><img @click="showModalcost=true,addlevel2=true" style="height: 37px" src="./../dashboard_resources/plus.png"></div>

                        </div>
                        <div class="row mt-5" style="font-size: 20px">
                            <div class="col-4" style="margin-left:10%;">
                            </div>
                            <div class="col-2"></div>
                            <div class="col-1"></div>
                            <div class="col-1"></div>
                            <div class="col-2"> <p style="color: grey;margin-left: -10%;">Total</p></div>


                        </div>

                        <div class="row">
                            <div class="col-5"></div>

                            <div class="col-2 " style="margin-left: 3.3%;"></div>
                            <div class="col-1" style="margin-left: -2%;"></div>
                            <div class="col-1" style="margin-left: -2%;"></div>
                            <div class="col-2" style="margin-left: -1%;">
                                <input type="text" disabled :value="total_lev2" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>

                        </div>
                        <div class="row mt-5" style="font-size: 20px">
                            <div class="col-5" style="margin-left:10%;">
                            </div>


                            <div class="col-3"><p style="color: grey;margin-left: -2%;">
                                Fixed
                                <label class="switch">
                                    <input type="checkbox" v-model="meta.markup2.percent">
                                    <span class="slider round"></span>
                                </label>
                                Percent
                                (Markup)</p></div>
                            <div class="col-2"> <p style="color: grey;margin-left: -10%;">Selling Price</p></div>


                        </div>

                        <div class="row">
                            <div class="col-6"></div>

                            <div class="col-1 " style="margin-left: 1.3%;"></div>


                            <div v-if="meta.markup2.percent" class="col-2" style="margin-left: -2%;"><input  @keypress="isNumberpercent($event)" v-model="meta.markup2.value" type="number" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:80%;height:40px;">%</div>
                            <div v-else class="col-2" style="margin-left: -2%;"><input  @keypress="isNumber($event)" v-model="meta.markup2.value" type="number" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>

                            <div class="col-2" style="margin-left: -1%;">
                                <input disabled type="text" :value="total_sp2" disabled style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:40px;"></div>

                        </div>




                        <button  style="outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(34, 80, 125);font-size: 14px;left: 81.8%; top: 90%;font-weight: 400;padding: 6px 12px;min-width: 140px;color: white;width: 100px;border-radius: 4px;position: fixed;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;" @click="submitForm" >Submit</button>

                    </div>

                    <!--                    Interaction History-->
                    <div  :class="[ intraction ? 'activedev' : 'hidedev' ]" style="margin-left: 19%">

                        <badger-accordion>
                            <badger-accordion-item v-for="(interact,name) in meta.interactions">


                                <template slot="header"><button class="btn btn-light" style="font-size: 20px;border-radius: 30px">{{ name }}</button></template>
                                <template slot="content" >
                                    <div v-for="int in interact " >
                                        <div  style="border-left: 1px solid #0058A1; margin-left: 6.5%">
                                            <div class="row" style="margin-left: 14%">
                                                <div class="col"><p style="font-size: 20px">{{int['title']}}</p></div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-2 text-right mt-3"><img style="height: 55px" src="./../dashboard_resources/quotation.png"></div>
                                                <div class="col-lg-9" style="background-color: white;border:1px solid gainsboro;border-radius: 5px;font-size: 18px">
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
                                :value="item.traveler_name"
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
                                type="text"
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

    </section>
</template>


<script>
    // import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    import { mapGetters, mapActions } from 'vuex'
    import LocationPlaceComponent from '../../cruds/Locationsplace'
    import LocationComponent from '../../cruds/Locations'
    import HotelComponent from '../../cruds/hotelcomp'
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
                    defaultCountry: "FR",
                    disabledFetchingCountry: false,
                    disabled: false,
                    disabledFormatting: false,
                    placeholder: "Enter a phone number",
                    required: false,
                    enabledCountryCode: false,
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
                        disabledDialCode: true
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
                bindProps: {
                    mode: "international",
                    defaultCountry: "FR",
                    disabledFetchingCountry: false,
                    disabled: false,
                    disabledFormatting: false,
                    placeholder: "Enter a phone number",
                    required: false,
                    enabledCountryCode: false,
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
                        disabledDialCode: true
                    },
                },
                // Code...
            }
        },
        filters: {
            moment: function (value) {
                if (value) {
                    return moment.unix(value).format("MM-DD-YYYY / h:mm:ss a")
                }
            }
        },
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
                    "ref": "flt"
                });

            }


        },
        created() {
            this.fetchCityAll();
            this.fetchTourAll()
            this.meta.query_feel=3
            this.lead_data = this.$route.params.lead_data

            this.setdriver_pickup_date_time(this.lead_data.date + ' 00:00:00')
            this.setTraveler_name(this.lead_data.name)
            this.setNo_of_adults(this.lead_data.adult_guest)
            this.setNo_of_children(this.lead_data.kids_guests)
            this.setNote(this.lead_data.remark)
            this.setPhone(this.lead_data.phone)
            this.setEmail(this.lead_data.email)
            this.setmeta_infant(this.lead_data.infant_guest)
            this.lead_data = this.$route.params.lead_data

            // this.lead_data=this.$route.params.lead_data

            if (this.lead_data) {
                this.setdriver_pickup_date_time(this.lead_data.date + ' 00:00:00')
                this.setTraveler_name(this.lead_data.name)
                this.setNo_of_adults(this.lead_data.adult_guest)
                this.setNo_of_children(this.lead_data.kids_guests)
                // console.log( built_remark("Query Generated"));
                this.setinteractions(built_interaction("Query Generated"))
                this.setRemarklead(this.lead_data.remark)
                // this.setRemarks(this.built_remark("Query Generated"))
                this.setPhone(this.lead_data.phone)
                this.setEmail(this.lead_data.email)
                this.setmeta_infant(this.lead_data.infant_guest)
                this.setmeta_source(this.lead_data.source)

            }
        },
        watch: {
            "locations": function () {
                this.inmodalnew();

            },
            "meta.meta_flight": function () {
                if (this.meta.meta_flight.length < 1) {

                    this.meta.meta_flight = [{"date": "", "dep_code": "", "arr_code": "", "ticket": "", "url": ""}]
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


            },
        },
        destroyed() {
            this.resetState()
        },
        methods: {
            ...mapActions('BookingsSingle', ['storeData', 'uploadFile', 'resetState', 'setBooking_id', 'setplaces', 'setFull_name', 'setEmail', 'setEmail2', 'setPhone', 'setActivated', 'setScore', 'setNo_of_adults', 'setNo_of_children', 'setAgency_id', 'setAgent_id', 'setMeal_day', 'setBill_pay', 'setBudget', 'setdriver_pickup_date_time', 'setdriver_pickup_date_time_updated', 'setDrop_address', 'setHandler_name', 'setHandler_no', 'setMeals_supplement', 'setMember_of_iti', 'setPackage_category', 'setPickup_address', 'setTotal_price', 'setPickup_location', 'setTour_cost', 'setSelected_car', 'setStatus', 'setSupplier_id', 'setTotal_room', 'setTraveller_id', 'setItinerary_places', 'setItinerary_places_time', 'setTour_id', 'setTour_name', 'setTour_location', 'fetchTourAll', 'fetchplace', 'fetchhotel', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setTotal_tour_days', 'fetchTourAll', 'fetchplace', 'fetchhotel', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setmeta_infant', 'setmeta_transport'
                , 'setmeta_source'
                , 'setmeta_flightprice'
                , 'setmeta_flight'
                , 'setmeta_welcome_mail'
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
                'setmeta_exp_cost', 'setmeta_exp_costflight', 'setRemarkedit', 'addnewtour', 'setRemarks', 'setRemark', 'setEmail_second', 'setNote', 'setMessageidd', 'setQuery_feel', 'setScore_new', 'setTour_cost_tax']),
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
                //    alert(item);
                this.summ = false;
                this.intraction = false;
                this.up = false,
                    this.hotel = false;
                this.day = false;
                this.trav = false;
                this.train = false;
                this.mail = false;
                this.cost = false;
                this.exe = false;
                this.up = false;
                this[item] = true;
                if (item == 'createfull') {
// alert("inn");
                    if (this.newremark1 != '') {
                        this.setRemarkedit(this.newremark1)
                        this.newremark1 = '';
                    }

                    if (item == 'day') {
// console.log('daysdone');
                        this.driver_pick_up_time(this.item.driver_pick_up_time);
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
                        "ref": this.temp_cost.type + Math.floor((Math.random() * (999 - 100 + 1) + 100))
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
                this.setHandler_no(e.target.value)
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
                this.setmeta_driver_no(e.target.value)
            },


            updatemeta_flight(value, meta_flight, index) {
                // itinerary_places_time

                this.setItinerary_places_time(value.target.files[0]);
                // this.uploadfile("",value.target.files[0]);


                if (!_.isEmpty(this.meta[meta_flight][index]['date']) && !_.isEmpty(this.meta[meta_flight][index]['dep_code']) && !_.isEmpty(this.meta[meta_flight][index]['arr_code']) && !_.isEmpty(this.meta[meta_flight][index]['ticket'])) {
                    uploadfile("flight", this.meta[meta_flight][index]['ticket'], this.item.itinerary_places_time, this.item.booking_id).then(response => {
                        console.log(response.data);
                        // console.log(resp);
                        this.meta[meta_flight][index]['url'] = response.data;

                    })


                } else {

                    alert("Kindly fill all fields");
                }

            },

            updatemeta_passport(value, meta_passport, index) {

                if (!_.isEmpty(this.meta[meta_passport][index]['exp_date']) && !_.isEmpty(this.meta[meta_passport][index]['name_first']) && !_.isEmpty(this.meta[meta_passport][index]['name_last']) && !_.isEmpty(this.meta[meta_passport][index]['passportno'])) {
                    uploadfile("passport", this.meta[meta_passport][index]['name_first']+this.meta[meta_passport][index]['name_last'], value.target.files[0], this.item.booking_id).then(response => {
                        console.log(response.data);
                        // console.log(resp);
                        this.meta[meta_passport][index]['url'] = response.data;

                    })


                } else {

                    alert("Kindly fill all fields");
                }

            },

            updatemeta_visa(value, type, index) {
                uploadfile("visa", type, value.target.files[0], this.item.booking_id).then(response => {
                    console.log(response.data);
                    // console.log(resp);
                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_voucher(value, type, index) {
                uploadfile("voucher", type, value.target.files[0], this.item.booking_id).then(response => {
                    console.log(response.data);
                    // console.log(resp);
                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_insurance(value, type, index) {
                uploadfile("insurance", type, value.target.files[0], this.item.booking_id).then(response => {
                    console.log(response.data);
                    // console.log(resp);
                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_other(value, type, index) {
                uploadfile("other", type, value.target.files[0], this.item.booking_id).then(response => {
                    console.log(response.data);
                    // console.log(resp);
                    this.meta[type][index]['url'] = response.data;

                })
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
            submitForm() {
                let trav = new FormData();

                trav.set("name",this.item.full_name)
                trav.set("email",this.item.email)
                trav.set("phone",this.item.phone)
                trav.set("type","booking")
                axios.post('/api/v1/travellers', trav)
                    .then(response => {
                            console.log(response)
                            console.log(response.data.status)
this.setTraveller_id(response.data.id);
                            if(response.data.status=='error'){
                                alert(response.data.type);
                            }

                            else {

                if (this.newremark1 != '') {

                    this.setRemarkedit(this.newremark1)

                }

                if (this.save_tour === true && this.checked === false) {

                    // tourdata:{'titel':'','locations':'','total_tour_days':''}


                    if (this.tour_name == null) {
                        var namet = '';
                        this.tourlocalarray.forEach((callback) => {
                            console.log(callback.name);
                            namet += callback.name + "|";
                        })

                        namet = namet.substring(0, namet.length - 1);
                        console.log("custom name");
                        this.setTour_name(namet)
                    } else {
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
                        console.error(error)
                    })

                            }

                    })
                    .catch(error => {
                        alert("error");
                    })

            },
            continuesubmit() {

                this.storeData()
                    .then(() => {
                        this.changemenu('createfull');

                    })
                    .catch((error) => {
                        console.error(error)
                    })


            }
        },


        components: {
            LocationPlaceComponent, LocationComponent, HotelComponent, DayplanComponent, draggable, FormWizard,
            TabContent, WizardButton, WizardStep, BadgerAccordion, BadgerAccordionItem, VueTelInput
        }
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

    .sidenavactive {

        color: white !important;
        background-color: #00539F !important;
    }

    .sidenav {
        /*height: 100%;*/
        z-index: 1;
        background-color: #ECF0F5;
        overflow-x: hidden;
        transition: 0.5s;
        margin-left: -20%;
        list-style:none;

    }

    .sidenav a {
        padding-left: 15px;
        padding-top:5px;
        padding-bottom:5px;
        text-decoration: none;
        font-size: 20px;
        color:black;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: white;
        background-color: #00539F;
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
</style>
