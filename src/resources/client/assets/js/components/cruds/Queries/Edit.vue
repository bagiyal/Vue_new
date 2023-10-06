<template>

    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 1000px;font-family: Open Sans">
        <section class="content-header">
            <task-maker class="fix-addtask"></task-maker>
            <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>
            <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <div class="row">
                <div class="col-4">
                    <div class="row">
                        <div class="col-8"><h1>{{item.booking_id}}</h1></div>

                        <div class="col-4" style="padding:5px;"><span v-if="license.tech_aug">
                    <span v-if="item.score_new">
      <div v-if="Math.trunc(parseInt(item.score_new))===5" class="bg-danger" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  5</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score_new))===4" class="bg-warning" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  4</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score_new))===3" class="bg-primary" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  3</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score_new))===2" class="bg-success" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  2</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score_new))===1" class="bg-dark" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  1</div>
      </div>


</span>
                    <span v-else>
             <div v-if="Math.trunc(parseInt(item.score))===5" class="bg-danger" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  5</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score))===4" class="bg-warning" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  4</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score))===3" class="bg-primary" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  3</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score))===2" class="bg-success" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  2</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score))===1" class="bg-dark" style="    height: 23px; text-align: center;">
                    <div  style="  font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  1</div>
      </div>
                        <!--temp-->
                        <!--<div v-else class="bg-primary" style="    height: 23px; text-align: center;">-->
                        <!--                    <div  style="  font-size: 15px; color: white; font-weight: 600;">3</div>-->
                        <!--      </div>-->
        </span>
</span></div>
                    </div>


                </div>

                <div class="col">
                    <div class="row float-right pr-4">
                        <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor" @click="submitForm('')">
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <span class="f-1-7"><i class="fa fa-check" aria-hidden="true"></i>
                                        </span>
                                </div>
                                <div class="col-12 text-center">
                                    <span  v-if="meta.last_quote_no>0" class="f-1-4">Update</span>
                                    <span  v-else class="f-1-4">Save</span>
                                </div>
                            </div>
                        </div>

    <div  class="bg-white ml-2 shadow width rounded text-green pb-2 cursor" @click="generate_itinerary" v-if="license.post_booking_app && item.status==1 ">
        <div class="row">
            <div class="col-12 text-center mt-3">
                <span class="f-1-7"><img class="h-w-2-5" src="./../dashboard_resources/Icon/confirm-2.png"></span>
            </div>
            <div class="col-12 text-center">
                <span class="f-1-4">Confirm</span>
            </div>
        </div>
    </div>




<div v-else>

    <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor"  v-if="item.status==1">
        <div class="row">
            <div class="col-12 text-center mt-3">
                <span class="f-1-7">
       <i  class="fa fa-lock" title="Confirm Lock" aria-hidden="true"></i>

                </span>
            </div>
            <div class="col-12 text-center">
                <span class="f-1-4">Conf. Lock</span>
            </div>
        </div>
    </div>

</div>



                        <div class="bg-white ml-2 shadow width rounded text-muted pb-2 cursor" v-if="item.status==2" disabled>
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <span class="f-1-7"><img height="27px" width="25px" src="./../dashboard_resources/Icon/confirmed-1.png"></span>
                                </div>
                                <div class="col-12 text-center">
                                    <span class="f-1-4">Confirmed</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white ml-2 shadow width rounded pb-2 cursor">
                            <div class="row">
                                <div class="col-12 text-center mt-3 mb-n2">
                                    <span class="f-2 text-muted"><i class="fas fa-envelope"></i></span>
                                </div>

                                    <div class="col-12 text-center dropdown mt-n1" id="dropdown3">
                                    <span class="f-1-4 text-dark">Delivery</span>

                                    <span class="dropdown-toggle f-1-7 text-dark" data-toggle="dropdown" @click="remove_class(3)"></span>
                                    <ul class="dropdown-menu f-1-4 p-2 mt-3 border-0">
                                        <li v-if="parseInt(meta.last_quote_no)>0" class=" mt-3 pt-3"><p v-for="(qut,index) in (sns_data)"   class="text-dark" > Q: {{ index+1 }} {{ qut }} </p></li>
                                        <!--                                        <li v-if="meta.last_quote_no>0" class=" mt-3 pt-3"><p v-for="(qut,index) in (sns_data)"   class="text-dark"  :href="'/api/webservices/admin_sent_quote?booking_id=' + item.id + '&quote_no='+parseInt(index+1) + '&preview=no' " target="_blank">-->
                                        <!--                                            Q: {{ index+1 }} {{ qut }} </p></li>-->
                                        <!--                                        <li><a href="#">JavaScript</a></li>-->
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white ml-2 shadow width rounded pb-2">
                            <div class="row">
                                <div class="col-12 text-center mt-3 mb-n2">
                                    <span class="f-2 color_sky"><i class="far fa-copy"></i></span>
                                </div>
                                <div class="dropdown col-12 text-center mt-n1" id="dropdown1">
                                    <span class=" f-1-4 color_sky">Clone
                                        </span>

                                    <span class="dropdown-toggle f-1-7 color_sky" data-toggle="dropdown" @click="remove_class(1)"></span>
                                    <ul class="dropdown-menu f-1-4 p-2 mt-3 border-0">
                                        <li><a v-if="item.status!=3" @click="clone" class="color_sky"><img class="hw-1-5 mr-3" src="./../dashboard_resources/Icon/clonenew-1.png">Clone To New</a></li>
                                        <li class="divider"></li>
                                        <li><a v-if="item.status!=3" @click="clonesamelead" class="color_sky"><img src="./../dashboard_resources/Icon/clonesame-1.png" class="hw-1-5 mr-3">Clone To Same</a></li>
                                        <li class="divider"></li>
                                        <li><a v-if="item.status!=3" @click="cloneprevious=true" class="color_sky"><img src="./../dashboard_resources/Icon/clonesame-1.png" class="hw-1-5 mr-3">Clone Previous</a></li>

                                        <!--                                        <li><a href="#">JavaScript</a></li>-->
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white ml-2 shadow width rounded pb-2">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2 color_orange"> <i class="fa fa-paper-plane"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown mt-n1" id="dropdown2">
                                    <span class="f-1-4 color_orange">Quote</span>

                                    <span class="dropdown-toggle f-1-7 color_orange" data-toggle="dropdown" @click="remove_class(2)"></span>
                                    <ul class="dropdown-menu f-1-4 p-2 mt-3 border-0">
                                        <li><a @click="shortquote()" class="color_orange"><img src="./../dashboard_resources/Icon/shortquote-1.png" class="hw-1-5 mr-3">Short Quote</a></li>
                                        <li class="divider"></li>
                                        <li><a @click="detailquote()" class="color_orange"><img src="./../dashboard_resources/Icon/Detailsquote-1.png" class="hw-1-5 mr-3">Detailed Quote</a></li>
                                        <li class="divider"></li>
                                        <li v-if="license.whatsapp_integ"><a @click="whatsappquote()" class="color_orange"><i style="font-size: 18px" class="fab  fa-whatsapp" aria-hidden="true"></i>
                                            Whatsapp Quote</a></li>

                                        <li v-else><a href="#" class="color_orange"><i style="font-size: 18px" class="fa fa-lock" aria-hidden="true"></i>
                                            Whatsapp Locked</a></li>

                                        <li class="divider"></li>


                                        <li v-if="meta.last_previous.count>0" class=" mt-3 pt-3">
                                            <a v-for="(qut,index) in (meta.last_previous.count)" v-if="index>0"   class="color_orange"  @click="preview_quotes(meta.last_previous.id,parseInt(index),'no')" href="#" >
                                                Q: {{ index }} &nbsp;&nbsp; (old)</a>
                                        </li>
                                        <li v-if="parseInt(meta.last_quote_no)>0 && meta.last_previous.count>0" class=" mt-3 pt-3"><a v-for="(qut,index) in (sns_data)"   class="color_orange"  @click="preview_quotes(item.id,parseInt(index+meta.last_previous.count),'no')" href="#" >
                                            Q: {{ index+meta.last_previous.count}} &nbsp;&nbsp; Preview</a></li>

                                        <li v-else class=" mt-3 pt-3"><a v-for="(qut,index) in (sns_data)"   class="color_orange"  @click="preview_quotes(item.id,parseInt(index+1),'no')" href="#" >
                                            Q: {{ index+1 }} &nbsp;&nbsp; Preview</a></li>

                                        <!--                                        <li><a href="#">JavaScript</a></li>-->
                                    </ul>
                                    <!--                                    <span class="color_orange pl-1 f-2"><i class="fa fa-caret-down" @click="quotemodal=true" aria-hidden="true" ></i></span>-->
                                </div>
                            </div>
                        </div>
                        <div class="bg-white ml-2 shadow width rounded text-danger pb-2 cursor" v-if="item.status==1" @click="lostreason=true,lostdisable=false">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-check"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">Mark Lost</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white ml-2 shadow width rounded pb-2" v-if="item.status==3" @click="lostreason=true,lostdisable=true">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"> <i class="fas fa-ban text-danger"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">Qr. Lost</span>
                                </div>
                            </div>
                        </div>
                        <span  @click="preview()" target="_blank" style="text-decoration:none">
                            <div class="bg-white ml-2 shadow width rounded pb-2 text-muted cursor">
                                <div class="row">
                                    <div class="col-12 mt-3 text-center">
                                        <span class="f-1-7"><img height="16px" width="25px" src="./../dashboard_resources/Icon/preview-1.png"></span>
                                        <!--<span class="f-2"><i class="fas fa-eye"></i></i></span>-->
                                    </div>
                                    <div class="col-12 text-center dropdown mt-1">
                                        <span class="f-1-4 text-muted">Preview</span>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <!--                        <img class="shadow ml-2" src="./../dashboard_resources/Icon/lost.png" v-if="item.status==1" @click="lostreason=true,lostdisable=false">
                                                <a :href="'/api/webservices/admin_sent_quote/?booking_id=' + item.id + '&quote_no=1&preview=yes' " target="_blank">
                                                    <img class="shadow ml-2" src="./../dashboard_resources/Icon/preview.png">
                                                </a>-->
                    </div>

                    <!--                    <button v-if="item.status==1"  style="float:right;outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(34, 80, 125);font-size: 14px;font-weight: 400;padding: 6px 12px;min-width: 140px;color: white;width: 100px;border-radius: 4px;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;" @click="generate_itinerary" >Generate Itinerary</button>-->
                    <button v-if="item.status==2" disabled style="float:right;outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(116,125,125);font-size: 14px;font-weight: 400;padding: 6px 12px;min-width: 140px;color: white;width: 100px;border-radius: 4px;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;display: none"  >Itinerary Generated</button>

                    <button v-if="item.status==3" @click="lostreason=true,lostdisable=true"  style="float:right;outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(116,125,125);font-size: 14px;font-weight: 400;padding: 6px 12px;min-width: 140px;color: white;width: 100px;border-radius: 4px;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;display:none"  >Query Lost</button>
                    <!--                    <button v-if="item.status==1" @click="lostreason=true,lostdisable=false"  style="float:right;outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(116,125,125);font-size: 14px;font-weight: 400;padding: 6px 12px;min-width: 140px;color: white;width: 100px;border-radius: 4px;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;"  >Mark Lost</button>-->

                    <!--                    <div style="height:92px;width:68px" class="bg-white shadow ml-1"></div>-->

                    <!--                    <button  v-if="cost" @click="quotemodal=true"  style="background-color: white;padding-left: 30px;padding-right: 30px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;font-size: 16px">Quotes<span><img src="./../dashboard_resources/dropdown11.png" style="height: 8px"></span></button>-->
                </div>
            </div>

            <div v-if="lostreason">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" @click="lostreason=false,lostdisable=false">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                    </div>
                                    <div class="modal-body">
                                        <h4 class="modal-title">Query Mark As Lost</h4>
                                        <div class="row">
                                            <div class="col-1 mt-3"> Reason:</div><div class="col-11"><input type="text" :disabled="lostdisable"  v-model="meta.lost.title"></div>

                                            <div class="col-1 mt-3"> Details:</div> <div class="col-11 mt-2"><input type="text" :disabled="lostdisable"  v-model="meta.lost.details"></div>
                                        </div>


                                        <button v-if="item.status==1" class="btn btn-primary btn-sm" @click="markaslost()">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </section>
        <section class="content m-t2px">
            <div class="row" >
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
                    <div :class="[summ ? 'activedev' : 'hidedev' ]" class="query-content">
                        <div class="row mt-4 mb-5">
                            <!--            First section-->
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-12"><p class="text-muted">Quotation Amount</p></div>
                                </div>
                                <div class="row c-grey f-1-5">
                                    <div class="col-5"><label>Type</label>
                                    </div>
                                    <div class="col-5"><label>Price</label>
                                    </div>

                                </div>

                                <div class="row" v-for="(cost,index) in item.tour_cost">
                                    <div class="col-5"><input type="text" class="form-control text-center" v-model="cost.type"></div>
                                    <div class="col-5"><input type="text" class="form-control text-center" v-model="cost.cost"></div>

                                    <img  @click="item.tour_cost.splice(index, 1) " src="./../dashboard_resources/minus.png" class="hw-p-m mt-1 margin-for-pm-img">
                                    <img @click="item.tour_cost.push({'cost':'','type':''})" src="./../dashboard_resources/plus.png" class="hw-p-m mt-1">
                                </div>


                                <div class="row mt-4">
                                    <div class="col-12 mb-n2"><p class="text-muted">Tour Date<i class="fas fa-calendar-alt ml-3 icon-color"></i></p></div>
                                </div>
                                <div class="row">
                                    <div class="col-11">
                                        <date-picker
                                            class="text-muted summary-in-w"
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
                                        <div class="col-9 mr-2"><input disabled type="text" class="form-control" v-model="tour.name"></div>
                                        <div class="col-2 ml-for-nd"><input type="text" class="ml-3 form-control" v-model="tour.days">
                                            <!--                                                    <img @click="alert('Can\'t Delete')" src="./../dashboard_resources/minus.png" style="width: 33px; height: 33px; margin-top: -1%; margin-left: 0%;">-->
                                        </div>



                                    </div>

                                </div>


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
                                                        <!--                                                                                               -->
                                                        <!--                                                                                        >-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 mr-3 ml-4 div-back">
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
                                    <div class="col-12">
                                        <p class="text-muted">Total Cost)</p>
                                        <p class="text-muted">(Budget: {{item.budget }},Tour: {{meta.sellingprice1}},Flight: {{meta.sellingprice2}})</p>
                                    </div>
                                    <div class="col-12 mt-n2"><input type="text" class="form-control" disabled :value="totalcost"  @input="updateBudget"></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12" ><p class="text-muted">Executive Name<span class="ml-3 f-1-4"><i class="fa fa-user icon-color"></i></span></p></div>
                                    <div class="col-12 mt-n2"><input type="text" @input="updatemeta_executive_name" :value="meta.meta_executive_name" class="form-control text-muted" value=""><img src="./../dashboard_resources/edit.png" class="hw-i pa-img"></div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-lg-12"> <span class="f-2 text-muted">Executive Mobile Number</span></div>
                                    <div class="col-lg-12"><span class="p-a"><img src="./../dashboard_resources/contact.png"></span>
                                        <vue-tel-input v-bind="bindProps" v-model="meta.meta_executive_no"  name="phone" placeholder="8888888888"  @input="updatemeta_executive_no" class="form-control pl-5 f-1-4"></vue-tel-input>

                                        <span class="edit-img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i">
                                    </span>
                                    </div>
                                </div>
<!--                                <div class="row mt-3">-->
<!--                                    <div class="col-12" ><p class="text-muted">Executive Mobile Number<span class=""><img src="./../dashboard_resources/contact.png" class="hw-i ml-2"></span></p></div>-->
<!--                                    <div class="col-12 mt-n2"><input type="text" @input="updatemeta_executive_no" :value="meta.meta_executive_no" class="form-control text-muted" placeholder="8888888888"><img src="./../dashboard_resources/edit.png" class="hw-i pa-img"></div>-->
<!--                                </div>-->
                                <div class="row mt-3">
                                    <div class="col-12" ><p class="text-muted">Transport Type<span class=""><img src="./../dashboard_resources/transport.png" class="hw-i ml-2"></span></p></div>
                                    <div class="col-12 mt-n2"><input type="text" :value="meta.meta_transport" @input="updatemeta_transport"  class="form-control text-muted" value="8888888888"><img src="./../dashboard_resources/edit.png" class="hw-i pa-img"></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-6" ><p class="text-muted">Pickup Location<span><img src="./../dashboard_resources/location.png" class="hw-i ml-2"></span></p></div>

                                    <div class="col-12 mt-n2"><input type="text"
                                                                     class="form-control text-muted fw-4"
                                                                     name="pickup_location"
                                                                     placeholder="Enter Pickup location"
                                                                     :value="item.pickup_location"
                                                                     @input="updatePickup_location"><img src="./../dashboard_resources/edit.png" class="pa-img hw-i"></div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-12" ><p class="text-muted">Query Feel Rating:</p></div>
                                    <div class="col-12 mt-n3">
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
                                    <div class="col-12"><p class="text-muted">Past Interactions</p></div>
                                    <div v-for="(rem,index) in item.remarks " v-if="index==(item.remarks.length)-1" class="past-i ml-4 row mt-n3 pb-2">
                                        <!--                                                   {{rem,index}}-->
                                        <div class="col-6 ml-2 mt-2 mr-3 clock">
                                            <span class="text-black pr-2"><i class="far fa-clock"></i></span>{{ rem['time'] | moment}}</div>
                                        <div class="text-right col-5 ml-4"><img  src="./../dashboard_resources/dropdown.png" data-toggle="modal" data-target="#myModal1" class="hw-2"></div>
                                        <div class="col-12 ml-4 pl-2 border-left-3 remark_design">{{rem['remark'].substring(0,40)+".."}}</div>
                                    </div>

                                </div>

                                <div class="row mt-3">
                                    <div class="col-lg-12 mb-n3"><p class="text-muted">Remark</p></div>
                                    <div class="col-lg-10"><span class="p-a icon-color ml-2"><i class="fa fa-pencil-square-o"></i></span>
                                        <input type="text" class="form-control pl-5"
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
                                                    <button type="button" class="close" data-dismiss="modal">&times;</button><br>
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
                                    </div>
                                </div>
                                <!--                                    end-->
                            </div>
                        </div>



                    </div>


                    <!--                    Interaction History-->
                    <div  :class="[ intraction ? 'activedev' : 'hidedev' ]" class="query-content f-2">

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
                    <!--                    Hoteln-->
                    <div :class="[hotel ? 'activedev' : 'hidedev' ]" class="f-2 text-center query-content" v-if="hotel && Object.keys(hotels).length">

                        <hotel-component :day="day" @refresh="refeshhotel"  :location="item.tour_location"  :hotels="hotels"  @addplace="addplace" :tour_location="item.tour_location" @showday="changeview('day')"  @fetch_new_hotel="update_hotel()" @delete="remove"></hotel-component>

                    </div>


                    <!--                    Day Plan-->
                    <div :class="[day ? 'activedev' : 'hidedev' ]" class="query-content f-2" v-if="day" >
                        <dayplan-component :license="license" :itiplaces="item.itinerary_places"  :datestart="item.driver_pick_up_time"  :place="places.places_city_id"  :tour_location="item.tour_location" :meal="item.meals_supplement" @addplace="addplace"  @delete="remove" @showtrav="changeview('trav')"></dayplan-component>




                    </div>
                    <!--                    travellers -->
                    <div :class="[trav ? 'activedev' : 'hidedev' ]" class="query-content">
                        <!--                        <button style="background-color: white;padding-left: 30px;padding-right: 30px;margin-left: 800px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;font-size: 16px">Send Quotes<span><img src="./../dashboard_resources/dropdown11.png" style="height: 8px"></span></button>-->
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-lg-12"> <span class="f-2 text-muted">Traveller Name</span></div>
                                        <div class="col-lg-12"><span class="p-a"><i class="fa fa-user ml-2 mt-1 c-grey"></i></span><input  :value="item.traveler_name" @input="updateTraveler_name" type="text" class="form-control f-1-6 pl-5"><span class="edit-img"><img src="./../dashboard_resources/edit.png" class="hw-i"></span></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-lg-12"> <span class="f-2 text-muted">Traveller Mobile no</span></div>
                                        <div class="col-lg-12"><span class="p-a"><img src="./../dashboard_resources/contact.png"></span>
                                            <!--                                    <input type="text" class="form-control" name="phone" placeholder="Enter Phone" :value="item.phone"    @input="updatePhone" style="border:0;width: 80%;padding-left: 40px;margin-left: 13px;height: 35px;font-size:16px">-->
                                            <vue-tel-input v-bind="bindProps" :disabled="true" v-model="item.phone"  name="phone" placeholder="Enter Phone" class="form-control pl-5 f-1-6"></vue-tel-input>

                                            <span class="edit-img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i">
                                    </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-lg-12"><span class="f-2 text-muted">Email ID(the email will not visible to supplier)</span></div>
                                <div class="col-lg-12"><span class="p-a"> <img src="./../dashboard_resources/email.png"></span>
                                    <input :disabled="true" type="email" class="form-control pl-5 f-1-6"  :value="item.email"    @input="updateEmail" placeholder="asd@mail.com"></div>
                            </div>
                            <div class="row mt-5">

                                <div class="col-lg-12"><span class="f-2 text-muted">Email ID(Secondary)</span></div>
                                <div class="col-lg-12"><span class="p-a"> <img src="./../dashboard_resources/email.png"></span>
                                    <input type="email" class="form-control pl-5 f-1-6"
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
                        <!--                        <button style="background-color: white;padding-left: 30px;padding-right: 30px;margin-left: 700px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;font-size: 16px ">Send Quotes<span><img src="./../dashboard_resources/dropdown11.png" style="height: 8px"></span></button>-->
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <vue-ckeditor
                                        :value="meta.meta_flight"
                                        @input="updatemeta_flight"
                                    />
                                    <!--                                        <p style="text-align: right;margin-top: -3px">Flight Price:<input type="number"  min="1" :value="meta.meta_flightprice"    @input="updatemeta_flightprice" style="font-weight: bold;padding-left: 5px"></input></p>-->
                                </div>
                            </div>
                        </div>

                        <button @click="changeview('mail')" class="button-css">Mail</button>
                    </div>
                    <!--                    mail format-->

                    <div :class="[mail ? 'activedev' : 'hidedev' ]" class="query-content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <form-wizard @on-complete="changeview('cost')" color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Cost">
                                        <tab-content title="Welcome Notes" icon="fa fa-check">
                                            <fieldset>
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <div class="col"><span class="f-2">Welcome Mail</span></div>
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
                        <button v-if="submit && !license.cost_sheet" class="button-css" style="margin-left: -155px;" @click="submitForm('')" >Submit</button>
                    </div>
                    <!--                    cost-->



                    <div  v-if="cost && license.cost_sheet" :class="[cost ? 'activedev' : 'hidedev' ]" class="query-content f-2">
                        <!--                        <button style="background-color: white;padding-left: 30px;padding-right: 30px;margin-left: 75%;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;font-size: 16px ">Send Quotes<span style="margin-left: 5px;"><img src="./../dashboard_resources/dropdown11.png" style="height: 8px"></span></button>-->
                        <!--                        <button @click="cost=false,refresh_cost=true">Refresh</button>-->

                        <div class="row">
                            <div class="  text-success cost_update_buttons1 cursor" @click="cost=false,refresh_cost=true">
                                <i style="cursor: pointer"  class="fa fa-refresh f-1-5" aria-hidden="true"></i>
                                <span style="font-size: 13px;line-height: 33px;">&nbsp; Update Hotels</span>
                            </div>

                            <div class=" ml-3 text-primary cost_update_buttons2 cursor" @click="cost=false,refresh_cost=true">
                                <i style="cursor: pointer"  class="fa fa-calculator f-1-5" aria-hidden="true"></i>
                                <span style="font-size: 13px;line-height: 33px;">&nbsp; Recalculate</span>
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
                                                            <span class="f-2" aria-hidden="true" @click="showModalcost=false" >&times;</span>
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
                        <!--                        <div class="row mt-5" style="font-size: 20px">-->
                        <!--                            <div class="col-4" style="margin-left:10%;">-->
                        <!--                                <p style="color:grey;">Transport </p></div>-->


                        <!--                        </div>-->

                        <!--                        <div class="row">-->
                        <!--                            <div class="col-5"><input type="text" style="border: 1px solid gainsboro; border-radius: 3px; width: 85%; height: 40px; margin-left: 25.5%;"></div>-->

                        <!--                            <div class="col-2 " style="margin-left: 3.3%;"><input type="text" style="border: 1px solid gainsboro; border-radius: 3px; width: 90%; height: 40px;"></div>-->
                        <!--                            <div class="col-1" style="margin-left: -2%;"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>-->
                        <!--                            <div class="col-1" style="margin-left: -2%;"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:40px;"></div>-->

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
                                <input  @keypress="isNumberpercent($event)" v-model="meta.markup1.value" type="number" class="form-control"><span class="p-a per">%</span>
                            </div>
                            <div class="col-2 offset-7" v-else><input  @keypress="isNumber($event)" v-model="meta.markup1.value" type="number" class="form-control"></div>




                            <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" class="form-control"></div>-->
                            <div class="col-2 ">
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

                            <div v-if="meta.markup2.percent" class="col-2 offset-7">
                                <input @keypress="isNumberpercent($event)" v-model="meta.markup2.value" type="number" class="form-control"><span class="p-a per">%</span>
                            </div>
                            <div class="col-2 offset-7" v-else><input  @keypress="isNumber($event)" v-model="meta.markup2.value" type="number" class="form-control"></div>




                            <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" class="form-control"></div>-->
                            <div class="col-2 ">
                                <input :value="total_sp2" disabled type="text" class="form-control">

                            </div>

                        </div>
                        <button v-if="submit" class="button-css" @click="submitForm('')" >Submit</button>

                    </div>

                    <form @submit.prevent="submitForm('')" novalidate style="margin-top:900px">
                        <div class="box" style="display: none">

                            <div class="box-header with-border" >
                                <h3 class="box-title">Create</h3>
                            </div>

                            <div class="box-body">
                                <back-buttton></back-buttton>
                            </div>

                            <bootstrap-alert />

                            <div class="box-body">
                                <div class="form-group">
                                    <label for="driver_pickup_date_time">Driver pickup date time *</label>
                                    <date-picker
                                        :value="item.driver_pickup_date_time"
                                        :config="$root.dpconfigDate"
                                        name="driver_pickup_date_time"
                                        placeholder="Enter Driver pickup date time *"
                                        @dp-change="updateDriver_pickup_date_time"
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
                                <div class="form-group">
                                    <label for="generated_itinerary">Generated itinerary</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="generated_itinerary"
                                        placeholder="Enter Generated itinerary"
                                        :value="item.generated_itinerary"
                                        @input="updateGenerated_itinerary"
                                    >
                                </div>
                                <div class="form-group">
                                    <!--                                    <ul id="sortable">-->
                                    <!--                                        <draggable v-model="item.tour_location" group="people" @start="drag=true" @end="drag=false">-->
                                    <!--                                            <location-place-edit-component v-for="(location,index ) in item.tour_location"  :key="location.id" :location="location" :index="index" :hotels="hotels[(location.id).split('-')[0]]" :place="places.places_city_id[location.id.split('-')[0]]" :tour_location="item.tour_location" @addplace="addplace"  @delete="remove"></location-place-edit-component>-->
                                    <!--                                        </draggable>-->

                                    <!--                                    </ul>-->
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
                                                    <!--                                                    <location-component v-for="location in locations"  :key="location.id" :location="location"  @delete="remove"></location-component>-->
                                                </draggable>

                                            </ul>
                                        </div>





                                        <div class="form-group">
                                            <label for="addlocations">Add Locations</label>
                                            <v-select :clearable="false"
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
                                    <v-select :clearable="false"
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
                                <!--                                <div class="form-group">-->
                                <!--                                    <label for="query_feel">Query feel</label>-->
                                <!--                                    <input-->
                                <!--                                        type="text"-->
                                <!--                                        class="form-control"-->
                                <!--                                        name="query_feel"-->
                                <!--                                        placeholder="Enter Query feel"-->
                                <!--                                        :value="meta_query_feel"-->
                                <!--                                        @input="updateQuery_feel"-->
                                <!--                                    >-->
                                <!--                                </div>-->
                                <div class="form-group">
                                    <label for="remarks">Remarks</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="remarks"
                                        placeholder="Enter Remarks"
                                        :value="item.remarks"
                                        @input="updateRemarks"
                                    >
                                </div>
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
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <div class="container mt-5">
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
                                                        <div class="col-12"><h3 class="text-secondary">Days</h3></div>
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

        <div v-if="cloneprevious">
            <transition name="modal" >
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" style="pointer-events: unset;max-width: 80%; height: 500px; overflow-y: scroll;overflow-x: hidden;">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" @click="cloneprevious=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="modal-body">
                                    <h2>Select a Query to Clone with Tour Data</h2>
                                    <div class="input-group">
                                    <input type="text" v-model="localsearch" class="filter_bar" style="height: unset;width: unset;background-color: #bfbfbfa6;margin-left:unset;" placeholder="Search">
                                       <div class="input-group-append">
                                        <button @click="updatesearch" class="btn btn-secondary "  type="button">
                                            <i class="fa fa-search"></i>
                                        </button>
                                        <button @click="clearsearch" class="btn btn-secondary "  type="button">
                                            <i class="fa fa-times-circle"></i>
                                        </button>
                                    </div>
                                    </div>
                                    <div style="font-size: 15px">
<div class="row">
    <div class="col-lg-3"><b>Sector</b> </div>
    <div class="col-lg-2"><b>Query No.</b></div>
    <div class="col-lg-2"><b>Travel Date</b></div>
    <div class="col-lg-2"><b>Traveler name</b></div>
    <div class="col-lg-2"><b>Phone</b></div>
    <div class="col-lg-1"><b>Clone</b></div>
</div>
                                    <div class="row" v-for="clon in clonelist">
                                        <div class="col-lg-3">{{clon.tour_name}}</div>
                                        <div class="col-lg-2">{{clon.booking_id}}</div>
                                        <div class="col-lg-2">{{clon.driver_pickup_date_time}}</div>
                                        <div class="col-lg-2">{{clon.traveler_name}}</div>
                                        <div class="col-lg-2">{{clon.phone}}</div>
                                        <div class="col-lg-1">
                                            <i  alt="Clone" title="Clone" @click="clonepreviousaction(clon.id)" aria-hidden="true" class="fa fa-clone button_style"></i></div>
                                    </div>
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
    import { mapGetters, mapActions } from 'vuex'
    import LocationPlaceEditComponent from '../../cruds/Locationsplaceedit'
    import LocationPlaceComponent from '../../cruds/Locationsplace'
    import LocationComponent from '../../cruds/Locations'
    import HotelComponent from '../../cruds/hotelcomp'
    import DayplanComponent from '../../cruds/dayplancompedit'
    import draggable from 'vuedraggable'
    import {FormWizard, TabContent,WizardButton,WizardStep} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import { VueTelInput } from 'vue-tel-input'
    import built_remark from '../../../mixins/builtremark'
    import built_interaction from '../../../mixins/builtinteraction'
    import addupdatemeta from '../../../mixins/addupdatemeta'
    import moment from 'moment-timezone'
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    import todaydate from '../../../mixins/todaydate'

    export default {
        data() {
            return {
                localsearch:'',
                errors:[],
                cloneicon:false,
                errormodal:false,
                quotemodal:false,
                // Code...
                submit:true,
                lostreason:false,
                lostdisable:false,
                tour_ob: '',
                place:[],
                i:1,
                transferdata:{},
                meta_infant:0,
                tourlocation:[],
                days:1,
                showModal:false,
                locations: [],
                locationd: {id:'',name: '', days: '', daynights: ''},
                make_tour:1,
                select_tour:1,
                lead_data:{},
                newremark:'',
                newremark1:'',

                meta_extra_bed:'',
                meta_transport:'',
                meta_source:'',
                meta_flightprice:'',
                meta_flight:'',
                meta_welcome_mail:'',
                meta_incl_ex:'',
                meta_closuer:'',
                meta_exp_cost:[],


                paid:false,
                interaction_visit:0,

                summ:true,
                hotel:false,
                day:false,
                trav:false,
                train:false,
                mail:false,
                cost:false,
                remarkk:false,
                create:true,
                createfull:false,
                intraction:false,
                checked:true,
                days_count:0,
                showerror:false,

                save_tour:false,
                tour_name:'',
                localtourdata:{},
                tourlocalarray:[],
                set_tourlocation:0,
                refresh_cost:true,
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
                sns_data:'',
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
                license:{},
                cloneprevious:false,
                clonelist:{},
                actualdata:[],
               column:(['tour_name',
                    'booking_id',
                    'driver_pickup_date_time',
                    'traveler_name',
                    'phone'])
                // temp:[{'id':1,'title':'place 1'},{'id':2,'title':'place 2'}],
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
            ...mapGetters('QueriesSingle', ['item', 'loading','tourAll','places','cityid','hotels','cityAll','meta','meta_data']),
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

            // this.fetchCityAll();
            // this.fetchTourAll();
            //item.tour_location=(item.tour_location);
            this.fetchScoreRange();

            this.fetchData(this.$route.params.id);
            for (var key in this.item.itinerary_places) {

                this.places.cites.push({[key]:this.item.itinerary_places[key]})

                //  console.log(this.item.itinerary_places);
                this.fetchplace(key.split('-')[0]);
            }
            // this.tour_location.forEach( (dataObj) => {
            //
            //     // item.tour_location[index]['daynights']=parent(dataObj.days)+1
            //     //     alert(dataObj.days);
            //     this.days_count=Number(this.days_count) + Number(dataObj.days);
            //     //  alert(this.days_count);
            // });


        },

        mounted(){
            // this.tour_location.forEach( (dataObj) => {
            //
            //     // item.tour_location[index]['daynights']=parent(dataObj.days)+1
            //     //     alert(dataObj.days);
            //     this.days_count=Number(this.days_count) + Number(dataObj.days);
            //     //  alert(this.days_count);
            // });
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
        },
        updated(){

            //  alert(this.item.itinerary_places);
            if(this.i<2){


                for (var key in this.item.itinerary_places) {
                    //     alert("hello");

                    // this.places.cites.push(this.item.itinerary_places[key])

                    console.log(this.item.itinerary_places);
                    this.fetchplace(key.split('-')[0]);
                    this.fetchhotel(key.split('-')[0])
                }
                this.i++;
            }
        },


        destroyed() {
            this.resetState()
        },
        watch: {
            "cloneprevious": function () {
                axios.get('/api/v1/queries')
                    .then(response => {
                     this.clonelist=response.data.data

                    })

            },

            "item.booking_id": function() {
                this.$root.booking_ref_id={'booking_id':this.item.booking_id,'id':this.item.id}
                // console.log(this.item.booking_id);
                // Sns logs fetch

                let form = new FormData();
                form.set('book_id',this.item.booking_id);
                axios.post('/api/webservices/fetch_sns_logs' , form)
                    .then(response => {this.sns_data=response.data
                        // console.log(this.sns_data);
                    })
            },
            "errormodal": function() {
                if(!this.errormodal){
                    this.errors=[];
                }

            },
            "$route.params.id": function() {
                this.resetState()
                this.fetchData(this.$route.params.id)

            },


            "item.tour_location": {

                handler(newval, oldVal){
                    if(this.set_tourlocation==0) {
                        this.set_tourlocation = 1;
                        // console.log("watch tour location");
                        // console.log(newval);
                        // console.log(JSON.parse(newval));
                        //
                        // this.item.tour_location=JSON.parse(newval)
                        // // this.setTour_location(JSON.parse(newval));

                        // if(Array.isArray(newval)){
                        this.days_count = 0;
                        newval.forEach( (dataObj) => {

                            // item.tour_location[index]['daynights']=parent(dataObj.days)+1
                            //     alert(dataObj.days);
                            this.days_count=Number(this.days_count) + Number(dataObj.days);
                            //  alert(this.days_count);
                        });
                        this.places.cites=newval;


                        this.places.cites.forEach((val) => {

                            console.log(val.id);
                            var gg=val.id;


                            this.fetchplace(gg.split('-')[0]);
                            this.fetchhotel(gg.split('-')[0])
                        });
                    }
                    else {



                        if(JSON.stringify(this.places.cites)!==JSON.stringify(newval)){
                            this.places.cites=newval;


                            this.places.cites.forEach((val) => {

                                console.log(val.id);
                                var gg=val.id;


                                // alert("4");
                                this.fetchplace(gg.split('-')[0]);
                                this.fetchhotel(gg.split('-')[0])
                            });

                        }

                        // }
                        // else {
                        //     this.item.tour_location=JSON.parse(newval);
                        // }
                        this.days_count = 0;
                        newval.forEach( (dataObj) => {

                            // item.tour_location[index]['daynights']=parent(dataObj.days)+1
                            //     alert(dataObj.days);
                            this.days_count=Number(this.days_count) + Number(dataObj.days);
                            //  alert(this.days_count);
                        });
                    }

                },
                deep: true


            },
            "item.tour_cost":function () {

                if(this.item.tour_cost.length<1){

                    this.item.tour_cost= [{'cost':'','type':''}]
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
        methods: {
            ...mapActions('QueriesSingle', ['setlast_quote_no','setmeta_interactionsfull','setmeta_interactions','setmeta_executive_name','fetchData', 'updateData', 'resetState','setDriver_pickup_date_time', 'setBooking_id', 'setBudget', 'setTraveler_name', 'setBill_pay', 'setNo_of_adults', 'setNo_of_children', 'setNote', 'setStatus', 'setPhone', 'setEmail', 'setEmail_second', 'setTraveller_id', 'setGenerated_itinerary', 'setItinerary_places', 'setAgency_id', 'setAgent_id', 'setMeal_day', 'setMeals_supplement', 'setMessageidd', 'setPackage_category', 'setPickup_address', 'setPickup_location', 'setQuery_feel', 'setRemark', 'setScore', 'setScore_new', 'setTotal_room', 'setTotal_tour_days', 'setTour_cost', 'setTour_cost_tax', 'setTour_id', 'setTour_name', 'setTour_location','fetchTourAll','fetchScoreRange','fetchplace','fetchhotel','fetchCityAll','updateCity','setTitle','setLocations','setTotal_tour_days','setmeta_infant','setmeta_transport'
                ,'setmeta_source'
                ,'setmeta_flightprice'
                ,'setmeta_flight'
                ,'setmeta_welcome_mail'
                ,'setmeta_incl_ex'
                ,'setmeta_closuer'
                ,'setmeta_exp_cost','setmeta_executive_no']),
            clonepreviousaction(id){

                axios.get('/api/v1/queries/' + id,{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        response.data.data
var clone_data =_.cloneDeep(this.item);
var clone_meta=_.cloneDeep(this.meta);
                        clone_meta.last_previous={'id':'', 'count': ''}
                        clone_meta.last_quote_no=0



                        clone_data.tour_name=''
                        clone_data.itinerary_places=JSON.parse(response.data.data.itinerary_places)
                        clone_data.tour_location=JSON.parse(response.data.data.tour_location)
                        clone_data.meals_supplement=JSON.parse(response.data.data.meals_supplement);
                        clone_data.tour_cost=JSON.parse(response.data.data.tour_cost);
                        clone_data.remarks=JSON.parse(response.data.data.remarks);
                        // clone_meta.meta_exp_cost=JSON.parse(response.data.meta.meta_exp_cost);
                        // clone_meta.meta_transport=JSON.parse();
                        response.data.data.get_meta.forEach(function(e){
                            if(e.meta_key=='meta_exp_cost'){

                                clone_meta.meta_exp_cost=JSON.parse(e.meta_value);

                            }
                            if(e.meta_key=='meta_transport'){

                                clone_meta.meta_transport=e.meta_value;
                            }
                        });




                        this.$router.push({ name: 'queries.clone', params:{'clone_data':clone_data ,'clone_meta':clone_meta,'itiplace':clone_data.itinerary_places,'tour_loc':clone_data.tour_location,'newlead':false ,'newleadprev':true }})



                    })

            },
            updatesearch() {
                this.setsearch(this.localsearch)
            },
            clearsearch() {
                this.localsearch=""
                this.setsearch(this.localsearch)
            },
            setsearch(search){
                let arr=[];
                if(search!==''){
if(_.isEmpty(this.actualdata)){
    this.actualdata=_.cloneDeep(this.clonelist)
}

                    this.actualdata.forEach(post => {
                        let f="empty";
                        this.column.forEach( (dataObj) => {

                            if (f === "empty" && post[dataObj]!==null) {
                                if(post[dataObj].toLowerCase().includes(search.toLowerCase())){

                                    f="found";
                                    arr.push(post);

                                }
                            }

                        });

                    });

                    console.log(arr);

                    this.clonelist=_.cloneDeep(arr)

                }
                else {
                    this.clonelist=_.cloneDeep(this.actualdata)

                }
            },
            preview(){
                this.submitForm('preview');

            },
            testsingle(){
                let params = new FormData();
                params.set('test', 'sdfsd')
                params.set('test1', 'souou')
                axios.post('/api/v1/singleupdatemeta_q/'+2, params)
                    .then(response => {
                        console.log(response)
                    })

            },
            shortquote(){
                var agency_id=JSON.parse(this.item.agency_id)

                if(this.item.bill_pay){

                    var qno=_.cloneDeep(this.meta.last_quote_no);

                    var qno1= parseInt(qno) + 1;
                    if(!qno1){
                        qno1=1;
                    }
                    this.setmeta_interactionsfull([built_interaction("Q:"+qno1,"Click Action","Done","Quote Sent")]);
                    this.setlast_quote_no(qno1);
                    this.submitForm('shortquote');


                }
                else{
                    axios.get('/api/webservices/debit_point', {
                        params: {
                            agency_id:agency_id.id,
                            agent_id:this.item.agent_id,
                            type:'query',
                            remark:'Sending Quote from : '+this.item.booking_id

                        }
                    })
                        .then(response => {


                            if(response.data.includes("Success")){

                                this.setBill_pay(1)
                                var qno=_.cloneDeep(this.meta.last_quote_no);

                                var qno1= parseInt(qno) + 1;
                                if(!qno1){
                                    qno1=1;
                                }
                                this.setmeta_interactionsfull([built_interaction("Q:"+qno1,"Click Action","Done","Quote Sent")]);
                                this.setlast_quote_no(qno1);
                                this.submitForm('shortquote');



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




            },
            detailquote(){
                var agency_id=JSON.parse(this.item.agency_id)

                if(this.item.bill_pay){

                    var qno=_.cloneDeep(this.meta.last_quote_no);

                    var qno1= parseInt(qno) + 1;
                    if(!qno1){
                        qno1=1;
                    }
                    this.setmeta_interactionsfull([built_interaction("Q:"+qno1,"Click Action","Done","Quote Sent")]);
                    this.setlast_quote_no(qno1);

                    this.submitForm('detailquote');



                }
                else{
                    axios.get('/api/webservices/debit_point', {
                        params: {
                            agency_id:agency_id.id,
                            agent_id:this.item.agent_id,
                            type:'query',
                            remark:'Sending Quote from : '+this.item.booking_id

                        }
                    }).then(response => {

                        console.log(response)
                        if(response.data.includes("Success")){

                            this.setBill_pay(1)
                            var qno=_.cloneDeep(this.meta.last_quote_no);

                            var qno1= parseInt(qno) + 1;
                            if(!qno1){
                                qno1=1;
                            }
                            this.setmeta_interactionsfull([built_interaction("Q:"+qno1,"Click Action","Done","Quote Sent")]);
                            this.setlast_quote_no(qno1);

                            this.submitForm('detailquote');

                            this.quotemodal=false;
                            let params = new FormData();


                        }
                        else {
                            alert(response.data);
                        }
                    })
                        .catch(error => {
                            alert("Error in debit points");

                        })
                }




            },
            whatsappquote(){
                var agency_id=JSON.parse(this.item.agency_id)

                if(this.item.bill_pay){

                    var qno=_.cloneDeep(this.meta.last_quote_no);

                    var qno1= parseInt(qno) + 1;
                    if(!qno1){
                        qno1=1;
                    }
                    this.setmeta_interactionsfull([built_interaction("Q:"+qno1,"Click Action","Done","Quote Sent Via Whatsapp")]);
                    // this.setlast_quote_no(qno1);

                    this.submitForm('whatsapp');



                }
                else{
                    axios.get('/api/webservices/debit_point', {
                        params: {
                            agency_id:agency_id.id,
                            agent_id:this.item.agent_id,
                            type:'query',
                            remark:'Sending Quote from : '+this.item.booking_id

                        }
                    }).then(response => {

                        console.log(response)
                        if(response.data.includes("Success")){

                            this.setBill_pay(1)
                            var qno=_.cloneDeep(this.meta.last_quote_no);

                            var qno1= parseInt(qno) + 1;
                            if(!qno1){
                                qno1=1;
                            }
                            this.setmeta_interactionsfull([built_interaction("Q:"+qno1,"Click Action","Done","Quote Sent Via Whatsapp")]);
                            // this.setlast_quote_no(qno1);

                            this.submitForm('whatsapp');

                            this.quotemodal=false;
                            let params = new FormData();


                        }
                        else {
                            alert(response.data);
                        }
                    })
                        .catch(error => {
                            alert("Error in debit points");

                        })
                }





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

                // if(item=='hotel' && this.set_tourlocation==0){
                //     this.set_tourlocation=1;
                //     this.set_tourlocation(JSON.parse(this.item.tour_location));
                // }
                if(item=='day' || item=='hotel'){

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
            markaslost(){
                if(this.meta.lost.title!="" && this.meta.lost.details!=""){
                    this.lostreason=false;
                    this.setStatus(3);
                    this.setmeta_interactions(built_interaction("Marked As Lost","Click Action","Done","Action"));
                    this.submitForm('');

                }
                else {
                    alert("kindly fill all the fields");
                }

            },
            onCompletecreate(){

            },
            clone(){

                // this.setmeta_interactions(built_interaction("Clone to other query","Click Action","Done","Action"));

                // :to="{ name: 'queries.clone',params:{'clone_data':item ,'clone_meta':meta,'itiplace':JSON.stringify(item.itinerary_places),'tour_loc':JSON.stringify(item.tour_location) } }"
                this.$router.push({ name: 'queries.clone', params:{'clone_data':this.item ,'clone_meta':this.meta,'itiplace':JSON.stringify(this.item.itinerary_places),'tour_loc':JSON.stringify(this.item.tour_location),'newlead':true }})


            },
            clonesamelead(){

                this.$router.push({ name: 'queries.clone', params:{'clone_data':this.item ,'clone_meta':this.meta,'itiplace':JSON.stringify(this.item.itinerary_places),'tour_loc':JSON.stringify(this.item.tour_location),'newlead':false  }})


            },
            generate_itinerary(){


                let params = new FormData();
                this.transferdata=_.cloneDeep(this.meta);
                this.transferdata.meta_exp_cost=JSON.stringify(this.transferdata.meta_exp_cost);
                this.transferdata.meta_exp_costflight=JSON.stringify(this.transferdata.meta_exp_costflight);
                this.transferdata.markup1=JSON.stringify(this.transferdata.markup1);
                this.transferdata.markup2=JSON.stringify(this.transferdata.markup2);

                let value=    built_interaction("Itinerary Generated","Click Action","Done",this.item.booking_id)

                let metaq=this.transferdata.interactions;
                // console.log(metaq)
                if(metaq.hasOwnProperty(todaydate()) ){
                    metaq[todaydate()].push(value)
                }
                else {
                    metaq[todaydate()] =[value]
                }

                var doc=[{"url":""}];
                var passport=[{"exp_date":"","name_first":"","name_last":"","passportno":"","url":""}];
                var flightdoc=[{"date":"","dep_code":"","arr_code":"","ticket":"","url":""}];
                var empty_string='';
                this.transferdata.interactions=JSON.stringify(metaq);
                this.transferdata.meta_visa=JSON.stringify(doc);
                this.transferdata.meta_passport=JSON.stringify(passport);
                this.transferdata.meta_voucher=JSON.stringify(doc);
                this.transferdata.meta_insurance=JSON.stringify(doc);
                this.transferdata.meta_other=JSON.stringify(doc);
                this.transferdata.lost=JSON.stringify(this.transferdata.lost);
                this.transferdata.meta_flight=JSON.stringify(flightdoc);
                this.transferdata.remarks=JSON.stringify([built_remark("Booking Generated")]);
                this.transferdata.from_query=JSON.stringify(this.$route.params.id);
                this.transferdata.query_feel=this.item.query_feel;
                this.transferdata.last_previous=JSON.stringify(this.item.last_previous);
                this.transferdata.meta_doc_tags=JSON.stringify([]);
                this.transferdata.meta_doc_tags_family=JSON.stringify([]);
                this.transferdata.meta_family=JSON.stringify([]);
                this.transferdata.Airport_Hub=empty_string;
                this.transferdata.Visa_Hub=empty_string;
                this.transferdata.Members_Allowed=empty_string;
                this.transferdata.member_status=0;
                this.transferdata.member_doc_tags=JSON.stringify({"documents":[],"color":"red","remark":[]});
                this.transferdata.moneycollect=false;
                this.transferdata.meta_transport_no=null;
                this.transferdata.meta_pickup_date=null;
                this.transferdata.meta_pickup_time=null;
                this.transferdata.meta_driver_name=null;
                this.transferdata.meta_driver_no=null;
                this.transferdata.meta_activate_sms=null;
                this.transferdata.feedback_ques=JSON.stringify([]);

                params.set('meta', JSON.stringify(this.transferdata));

                for (let fieldName in this.item) {
                    let fieldValue = this.item[fieldName];
                    if (typeof fieldValue !== 'object') {
                        params.set(fieldName, fieldValue);
                    }
                    else {

                        if (fieldValue && typeof fieldValue[0] !== 'object') {

                            if(fieldName=='itinerary_places'){
                                //   console.log("itinerary_places");
                                let newobj={};
                                console.log(fieldValue);
                                console.log(this.places.cites)

                                this.places.cites.forEach( (dataObj) => {
                                    console.log(dataObj['id']);
                                    newobj[dataObj['id']]=fieldValue[dataObj['id']];

                                });

                                console.log(newobj);
                                //   throw new Error("my error message");
                                params.set(fieldName, JSON.stringify(newobj));

                            }
                            // else  if(fieldName=='remarks'){
                            //
                            //     params.set(fieldName, JSON.stringify(fieldValue));
                            //
                            // }
                            else  if(fieldName=='meals_supplement'){

                                params.set(fieldName, JSON.stringify(fieldValue));


                            }
                            else {
                                params.set(fieldName, fieldValue);
                            }

                        }
                        else if(fieldName=='tour_location'){

                            params.set(fieldName, JSON.stringify(fieldValue));

                        }
                        else  if(fieldName=='tour_cost'){

                            params.set(fieldName, JSON.stringify(fieldValue));

                        }

                        else {

                            for (let index in fieldValue) {
                                params.set(fieldName + '[' + index + ']', fieldValue[index]);
                            }
                        }
                    }
                }

                if (_.isEmpty(this.item.created_by)) {
                    params.set('created_by_id', '')
                } else {
                    params.set('created_by_id', this.item.created_by.id)
                }
                if (_.isEmpty(this.item.created_by_team)) {
                    params.set('created_by_team_id', '')
                } else {
                    params.set('created_by_team_id', this.item.created_by_team.id)
                }
                console.log( "all params:");

                if (this.item.itinerary_places_time === null) {
                    params.delete('itinerary_places_time');
                }
                // console.log( params);

                params.delete('remarks');
                params.delete('query_feel');
                params.delete('booking_id');

                this.currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'');

                params.set('booking_id','ITI-'+document.querySelector("meta[name='user-id']").getAttribute('content')+'-'+this.currentDate+'-'+Math.floor((Math.random() * (999-100+1)+100))
                )
                params.delete('traveler_name');
                params.delete('activated');
                params.delete('status');
                params.set('activated',1);
                params.set('status',2);
                params.set('full_name',this.item.traveler_name);
                if( this.transferdata.meta_executive_name.length>2){
                    params.set('handler_name',this.transferdata.meta_executive_name);
                }
                else{
                    params.set('handler_name',document.querySelector("meta[name='user-name']").getAttribute('content'));
                }
                if( this.transferdata.meta_executive_no.length>2){
                    params.set('handler_no',this.transferdata.meta_executive_no);

                }
                else{
                    params.set('handler_no',document.querySelector("meta[name='user-phone']").getAttribute('content'));
                }



                params.delete('driver_pickup_date_time');
                params.set('driver_pick_up_time',this.item.driver_pickup_date_time);

                params.delete('remarks');


                axios.post('/api/v1/bookings', params)
                    .then(response => {
                        // commit('resetState')

                        let bookid=response.data.data.id;
                        let bookid_big=response.data.data.booking_id;
                        let intr=built_interaction("Itinerary Generated","Click Action","Done",bookid_big);

                        this.setmeta_interactions(intr);
                        let interaction=this.meta.interactions;
                        console.log(bookid);
                        let params = new FormData();
                        params.set('_method', 'PUT');
                        // axios call for activata itinerary
                        // console.log('id'+bookid+'traveller_id'+this.item.traveller_id);
                        axios.get('/api/webservices/activate_noti?traveller_id='+this.item.traveller_id+'&id='+bookid+'&sms='+this.license.sms_service, { })
                        if(this.item.status==1){
                            //change status of query
                            console.log("query_data.status")
                            params.set("status", 2);
                            params.set('meta', JSON.stringify({"meta_iti_gen":  JSON.stringify([response.data.data.id])}));
                            axios.post('/api/v1/queries/' + this.$route.params.id, params)
                                .then(response => {
                                    this.setStatus(2);
                                    this.$router.push({ path: '/bookings/'+bookid+'/edit' })
                                    this.$eventHub.$emit('create-success')
                                    console.log("query_datasucc"+response)


                                    //
                                    let params = new FormData();
                                    params.set('_method', 'PUT');
                                    params.set("generated_itinerary", bookid);
                                    params.set('meta', JSON.stringify({"interactions":  JSON.stringify(interaction)}));
                                    axios.post('/api/v1/queries/' + this.item.id, params)


                                    // commit('setItem', response.data.data)
                                    // resolve()
                                });

                        }






                    })





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
            changemenu(item){
                //    alert(item);
                this.create=false;
                this.createfull=false;
                this[item]=true;
                if(this.newremark1!=''){
                    this.setRemarkedit(this.newremark1)
                    this.newremark1='';
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
            inmodalL(value){
                this.selected = null
                this.locationd.id=value.id+'-'+Math.floor((Math.random()* 500) + 1);
                this.locationd.name=value.title;
                this.showModal=true;
                this.inmodalnew();

            },
            updatemeta_transport(e) {
                this.setmeta_transport(e.target.value)
            },
            remove(id){
// alert(id);
                let index = this.item.tour_location.findIndex(location => location.id === id);
                this.item.tour_location.splice(index, 1);
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
            updatemeta_exp_cost(e) {
                this.setmeta_exp_cost(e.target.value)
            },
            updateTitle(e) {
                this.setTitle(e.target.value)
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
                var res = this.meta.meta_executive_no.replace(/\(/g, "");
                res = res.replace(/\)/g, "");
                res = res.replace(/-/g, "");
                res = res.replace(/ /g, "");
                this.setmeta_executive_no(res)
            },




            addplace(id){
                this.setItinerary_places(id)
            },
            updateDriver_pickup_date_time(e) {
                this.setDriver_pickup_date_time(e.target.value)
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
                // alert("inmodalnew");
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



            },
            updateRemark(e) {
                if(this.newremark!=''){
                    var any= _.cloneDeep(this.newremark);
                    this.setRemark(any)
                    this.newremark=''
                }
            },

            updateBooking_id(e) {
                this.setBooking_id(e.target.value)
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
            updateItinerary_places(e) {
                this.setItinerary_places(e.target.value)
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
            submitForm(action) {

                if(this.item.email_second!=null && this.item.email_second!=""){

                    if(this.item.email.toLowerCase()==this.item.email_second.toLowerCase()){
                        alert('Primary And Sencondary Mail Should Not Be Same.');
                        return false;
                    }


                }
                this.setmeta_interactionsfull(this.item.remarks);

                this.submit=false;

                if(!this.item.driver_pickup_date_time){this.errors.push("Date")}
                // if(!this.item.budget){this.errors.push("Budget")}
                if(!this.item.traveler_name){this.errors.push("Traveler Name")}
                if(!this.item.no_of_adults){this.errors.push("No. of Adult")}
                if(this.item.no_of_children===''){this.errors.push("No. of Child")}
                if(!this.item.phone){this.errors.push("Phone")}
                if(!this.item.email){this.errors.push("Email")}
                //    if(!this.item.pickup_address){this.errors.push("Pickup Address")}
                if(!this.item.pickup_location){this.errors.push("Pickup Location")}
                if(!this.item.total_room){this.errors.push("No. of Rooms")}
                if(!this.meta.meta_transport){this.errors.push("Transport")}

                if(!_.isEmpty(this.errors)){
                    this.errormodal=true
                    this.submit=true;
                }
                else {
                    this.updateData()
                        .then(() => {
                            // this.$router.push({name: 'queries.index'})
                            this.$eventHub.$emit('update-success');
                            this.submit = true;

                            if(action==='shortquote'){

                                this.quotemodal=false;
                                let params = new FormData();

                                axios.get('/api/webservices/send_quote_mail_short', {
                                    params: {
                                        BookingID: this.item.id,
                                        Quote_no:this.meta.last_quote_no,
                                        sms:this.license.sms_service

                                    }
                                })
                                    .then(respons => {

                                    //  window.open("/pdfs/"+this.item.id+".pdf");
                                        // console.log(response)
                                        let form = new FormData();
                                        form.set('book_id',this.item.booking_id);
                                        axios.post('/api/webservices/fetch_sns_logs' , form)
                                            .then(response => {this.sns_data=response.data
                                                // console.log(this.sns_data);
                                            })
                                    })
                                    .catch(error => {
                                        var qno=_.cloneDeep(this.meta.last_quote_no);

                                        var qno1= parseInt(qno) - 1;
                                        this.setlast_quote_no(qno1);

                                        alert("Error while sending Mail");
                                        let params = new FormData();
                                        params.set('last_quote_no', qno1)
                                        axios.post('/api/v1/singleupdatemeta_q/'+this.item.id, params)
                                            .then(response => {
                                                console.log(response)
                                            })

                                    })



                            }
// alert(action)
                            if(action==='detailquote'){
                                this.quotemodal=false;
                                let params = new FormData();

                                axios.get('/api/webservices/send_quote_mail', {
                                    params: {
                                        BookingID: this.item.id,
                                        Quote_no:this.meta.last_quote_no,
                                        sms:this.license.sms_service
                                    }
                                })
                                    .then(respons => {
                                        // console.log(response)
                                        let form = new FormData();
                                        form.set('book_id',this.item.booking_id);
                                        axios.post('/api/webservices/fetch_sns_logs' , form)
                                            .then(response => {this.sns_data=response.data
                                                // console.log(this.sns_data);
                                            })

                                    })
                                    .catch(error => {
                                        var qno=_.cloneDeep(this.meta.last_quote_no);

                                        var qno1= parseInt(qno) - 1;

                                        this.setlast_quote_no(qno1);

                                        alert("Error while sending Mail");
                                        let params = new FormData();
                                        params.set('last_quote_no', qno1)
                                        axios.post('/api/v1/singleupdatemeta_q/'+this.item.id, params)
                                            .then(response => {
                                                console.log(response)
                                            })
                                        // this.errors.push("Error while sending Mail")
                                        // this.errormodal=true
                                    })

                            }
                            if(action==='whatsapp'){
                                this.quotemodal=false;

                                var quote_no=this.meta.last_quote_no;
                                var qno1= parseInt(quote_no) + 1;
                                this.setlast_quote_no(qno1);
                                let params = new FormData();
                                axios.get('/api/webservices/send_quote_whatsapp', {
                                    params: {
                                        BookingID: this.item.id,
                                        Quote_no:qno1
                                    }
                                })
                                    .then(respons => {
                                        // console.log(respons.data.data.url)
                                        window.open(respons.data.data.url, "_blank");

                                        this.submitForm('detailquote');


                                    })
                                //let paramss = new FormData();
                                // axios.get('/api/webservices/send_quote_mail', {
                                //     paramss: {
                                //         BookingID: this.item.id,
                                //         Quote_no:qno1
                                //     }
                                // })
                                //     .then(response => {
                                //         // console.log(response)
                                //
                                //
                                //     })
                                // let form = new FormData();
                                // form.set('book_id',this.item.booking_id);
                                // axios.post('/api/webservices/fetch_sns_logs' , form)
                                //     .then(response => {this.sns_data=response.data
                                //         console.log(this.sns_data);
                                //     })


                                // let form = new FormData();
                                // form.set('book_id',this.item.booking_id);
                                // axios.post('/api/webservices/fetch_sns_logs' , form)
                                //     .then(response => {this.sns_data=response.data
                                //         let form2 = new FormData();
                                //         form2.set('book_id',this.item.booking_id);
                                //         axios.post('/api/webservices/fetch_sns_logs' , form2)
                                //             .then(response => {this.sns_data=response.data
                                //
                                //             })
                                //     })


                                //     .then(respons => {
                                //         console.log(respons.data)
                                //
                                //     })

                                // axios.get('/api/webservices/send_quote_mail', {
                                //     params: {
                                //         BookingID: this.item.id,
                                //         Quote_no:this.meta.last_quote_no
                                //     }
                                // })
                                //     .then(respons => {
                                //         // console.log(response)
                                //         // let params = new FormData();
                                //
                                //         axios.get('/api/webservices/send_quote_whatsapp', {
                                //             params: {
                                //                 BookingID: this.item.id,
                                //                 Quote_no:this.meta.last_quote_no
                                //             }
                                //         })
                                //             .then(respons => {
                                //                 window.open(respons, "_blank");
                                //                 // let form = new FormData();
                                //                 // form.set('book_id',this.item.booking_id);
                                //                 // axios.post('/api/webservices/fetch_sns_logs' , form)
                                //                 //     .then(response => {this.sns_data=response.data
                                //                 //         // console.log(this.sns_data);
                                //                 //     })
                                //             })
                                //             .catch(error => {
                                //                 // var qno=_.cloneDeep(this.meta.last_quote_no);
                                //                 //
                                //                 // var qno1= parseInt(qno) - 1;
                                //                 // this.setlast_quote_no(qno1);
                                //
                                //                 alert("Error while sending Mail");
                                //                 // let params = new FormData();
                                //                 // params.set('last_quote_no', qno1)
                                //                 // axios.post('/api/v1/singleupdatemeta_q/'+this.item.id, params)
                                //                 //     .then(response => {
                                //                 //         console.log(response)
                                //                 //     })
                                //
                                //             })
                                //
                                //
                                //         let form = new FormData();
                                //         form.set('book_id',this.item.booking_id);
                                //         axios.post('/api/webservices/fetch_sns_logs' , form)
                                //             .then(response => {this.sns_data=response.data
                                //                 // console.log(this.sns_data);
                                //             })
                                //
                                //     })
                                //     .catch(error => {
                                //         var qno=_.cloneDeep(this.meta.last_quote_no);
                                //
                                //         var qno1= parseInt(qno) - 1;
                                //
                                //         this.setlast_quote_no(qno1);
                                //
                                //         alert("Error while sending Mail");
                                //         let params = new FormData();
                                //         params.set('last_quote_no', qno1)
                                //         axios.post('/api/v1/singleupdatemeta_q/'+this.item.id, params)
                                //             .then(response => {
                                //                 console.log(response)
                                //             })
                                //         // this.errors.push("Error while sending Mail")
                                //         // this.errormodal=true
                                //     })

                            }

                            if(action==='preview'){


                                window.open('/api/webservices/admin_sent_quote/?booking_id=' + btoa(this.item.id) + '&quote_no='+btoa('1')+'&preview='+btoa('yes')+'', "_blank");

                            }

                        })
                        .catch((error) => {
                            this.submit = true;
                            console.error(error)
                        })

                }
            },
            update_status(){
                // Sns logs fetch
                let form = new FormData();
                form.set('book_id',this.item.booking_id);
                axios.post('/api/webservices/fetch_sns_logs' , form)
                    .then(response => {this.sns_data=response.data
                        // console.log(this.sns_data);
                    })
            },
            update_hotel(){
                this.places.cites.forEach((val) => {

                    console.log(val.id);
                    var gg=val.id;

                    this.fetchhotel(gg.split('-')[0])
                });
            },
            remove_class(e){
                if(e===3){
                    this.update_status();
                }
                var element = document.getElementById("dropdown"+e);
                element.classList.remove("open");

            },
            preview_quotes(id,quote_no,preview){
                // alert(id);
                // alert(quote_no);
                // alert(preview);
                window.open('/api/webservices/admin_sent_quote/?booking_id=' + btoa(id) + '&quote_no='+btoa(quote_no)+'&preview='+btoa(preview)+'', "_blank");
            },

        },
        components: {VueTelInput,LocationPlaceEditComponent,LocationComponent,HotelComponent,DayplanComponent,draggable,FormWizard,
            TabContent ,WizardButton,WizardStep,BadgerAccordion, BadgerAccordionItem}
    }

</script>

<style scoped>
    .fix-addtask{
        top: -123px;
        position: relative;
        right: -5px;
    }
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
    .m-t2 {
        margin-top: 19% !important;
    }
</style>
