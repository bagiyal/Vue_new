<template>

    <div id="dayplan">
        <!--{{place}}-->
        <!--<button @click=""> refresh </button>-->
        {{setdayscout()}}
        <!-- Modal -->

        <div v-if="adddescmodal===true">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog add_width">
                            <div class="modal-content">
                                <div class="modal-header border-0 border-dotted">
                                    <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                        <div class="row">
                                            <div class="col-10">
                                                {{  place_title }}
                                            </div>
                                            <div class="col-2 text-right">
                                                <button type="button" class="close" @click="adddescmodal=false">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div class="modal-body" style="">
                                    <div class="container-fluid c-grey">
                                        <div class="row no-gutters">

                                            <div class="col-12 col-sm-6 col-md-11">
                                                <div class="input-group">
                                                    <p>  <span v-html="place_desc">

                                                    </span></p>

                                                </div >

                                            </div>
                                        </div>

                                        <div class="row mt-3">
                                            <div class="col text-right" >
                                                <input type="button" class="bg-success pl-5 border-0 text-white pr-5 b-1-5" value="Close"  @click="adddescmodal=false">
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
        <a href="#" @click="mode=true" :class="[mode ? 'bg-primary text-light' :''] " class="b-1-5 btn btn-light border-0 pl-5 pr-5 f-1-4">View Mode</a>

        <a v-if="license.full_edit_mode" href="#" @click="editall " :class="[!mode ? 'bg-primary text-light' :''] " class="b-1-5 btn btn-light border-0 pl-5 pr-5 f-1-4">Edit Mode</a>
        <div v-show="mode">
            <div>

                <button v-for="(namelock,index3 ) in tour_location" @click="showlocation = namelock.name+index3" :class="[showlocation === namelock.name+index3 ? 'bg-primary text-light' :''] " class="btn btn-light  b-1-5 border-0 width-15 f-1-6">{{namelock.name}}</button>
                <!--        class="bg-primary"-->
            </div>


            <div v-for="(location,index ) in tour_location"  v-show="showlocation === location.name+index ">

                <!--test-->

                <!--{{location}}-->

                <div class="text-center text-dark f-1-8">{{location.name}}  {{location.date_from}} - {{location.date_to}}</div>
                <div class="text-center">
                    <!--{{location.daynights}}-->
                    <button  v-for="(dayl,index1 ) in parseInt(location.daynights)" @click="showday = dayl+index1" :class="[showday === dayl+index1 ? 'bg-primary text-light' :''] " class="btn btn-light  b-1-5 border-0 width-15 f-1-6">Day {{parseInt(alldaycounter[index])+parseInt(dayl)}}</button>
                    <!--            <button style="width: 160px;border: 0;border-radius: 15px;font-size: 14px;background-color: white">Day </button>-->
                </div>
                {{objpre()}}
                <div  class="col-xs-12" v-for="(day,index2 ) in parseInt(location.daynights)" :key="day" v-show="showday === day+index2">
                    <!--                            Day {{day}}- -->

                    {{preselect(day,defaultt,location.id,place[location.id.split('-')[0]])}}


                    <CarouselCard :interval="70000" height="450px" class="mt-3" type="card" arrow="always">
                        <CarouselCardItem v-for="(placeinfo, index3) in objj[location.id]['day-'+day]['place']" :key="index3" id="tran">
                            <div class="card margin-l-card_body" style="width: 400px;height:100%">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-6">
                                            <i class="fas fa-calendar-week c-grey f-2"></i>
                                            <span class=" pl-1 f-1-6"><sup class="text-secondary">{{moment_format(location.date_from,day,index2)}}</sup></span>

                                            <p style="margin-top: -5px;" class="text-primary f-2 pt-4">Visit {{parseInt(index3)+1}}</p>
                                        </div>
                                        <div class="col-6 text-center">
                                            <div class="row">
                                                <div class="col-12">
                                                    <span class="text-secondary f-1-6">Meal Plan</span>
                                                </div>
                                                <div class="col-12">
                                                    <div class="row" >
                                                        <div class="col-3 offset-3">

                                                            <img v-if="objj[location.id]['day-'+day]['meal']['bf']" @click="changemeal(location.id,'day-'+day,'bf',false,day,index2)"  class="hw-i"  src="./dashboard_resources/bfdown.png" alt="task">
                                                            <img v-if="!objj[location.id]['day-'+day]['meal']['bf']" @click="changemeal(location.id,'day-'+day,'bf',true,day,index2)"  class="hw-i"  src="./dashboard_resources/bfup.png" alt="task">
                                                            <p class="f-1 fw-2 text-muted ml-2">BF</p>
                                                        </div>
                                                        <div class="col-3">
                                                            <img  v-if="objj[location.id]['day-'+day]['meal']['l']" @click="changemeal(location.id,'day-'+day,'l',false,day,index2)" class="hw-i"  src="./dashboard_resources/lunchdown.png" alt="task">
                                                            <img v-if="!objj[location.id]['day-'+day]['meal']['l']" @click="changemeal(location.id,'day-'+day,'l',true,day,index2)"  class="hw-i"  src="./dashboard_resources/lunch.png" alt="task">
                                                            <p class="f-1 fw-2 text-muted ml-2">L</p>
                                                        </div>
                                                        <div class="col-3">
                                                            <img v-if="objj[location.id]['day-'+day]['meal']['d']" @click="changemeal(location.id,'day-'+day,'d',false,day,index2)"  class="hw-i"  src="./dashboard_resources/dinnerdown.png" alt="task" >
                                                            <img v-if="!objj[location.id]['day-'+day]['meal']['d']" @click="changemeal(location.id,'day-'+day,'d',true,day,index2)" class="hw-i"  src="./dashboard_resources/dinner.png" alt="task">
                                                            <p class="f-1 fw-2 text-muted ml-2">D</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">


                                    <div class="row mb-n3">
                                        <div class="col-12" style="margin-top: -12px;"><p class="text-secondary f-1-5"><b>{{placeinfo['title']}}</b></p></div>
                                        <div class="col-6"><img v-bind:src="objj[location.id]['day-'+day]['place'][index3]['featured_image_link']?objj[location.id]['day-'+day]['place'][index3]['featured_image_link']:'./dashboard_resources/slide1.jpg'" class="dayplan-img-wh"></div>
                                        <div class="col-6 text-secondary text-right">
                                            <!--                                            <img class="mr-1" height="15px" width="15px" src="./dashboard_resources/setting_Icon.png">Mobile:<b>-->
                                            <!--                                            <input type="text" placeholder="0987456321" style="border: 0;width: 65px;font-weight: bolder;"> </b><br>-->

                                            <span class="form-control text-justify f-1 border-0 bg-white mb-n4" style="overflow:hidden;height: 112px;" disabled v-html="objj[location.id]['day-'+day]['place'][index3]['description']" rows="4"></span>
                                            <span v-if="typeof objj[location.id]['day-'+day]['place'][index3]['description'] !=='undefined'">
                                                <a v-if="objj[location.id]['day-'+day]['place'][index3]['description'].length>155"  href="#" @click="show_decs(objj[location.id]['day-'+day]['place'][index3]['description'],placeinfo['title'])" class="f-1-2">more+</a></span>
                                        </div>
                                    </div><hr>
                                    <div class="row mt-n3">
                                        <div class="col-12"><p class="text-dark f-1-5">Remark</p></div>
                                        <div class="col-12 mt-n3">
                                            <textarea class="text-secondary form-control text-justify f-1-4" v-model="objj[location.id]['day-'+day]['place'][index3]['remark']" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-4">
                                            <span class="text-success text-success">Start Time:</span>
                                            <date-picker
                                                v-model="objj[location.id]['day-'+day]['place'][index3]['from_time']"
                                                :config="$root.dpconfigTimeshort"
                                                name="driver_pickup_date_time"
                                                class="pl-1 pr-1"
                                            >
                                            </date-picker>
                                        </div>
                                        <div class=" col-4 offset-4">
                                            <span class="text-danger">End Time:</span><br>
                                            <date-picker
                                                v-model="objj[location.id]['day-'+day]['place'][index3]['to_time']"
                                                :config="$root.dpconfigTimeshort"
                                                name="driver_pickup_date_time"
                                                class="pl-1 pr-1"
                                            >
                                            </date-picker>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </CarouselCardItem>
                    </CarouselCard>
                    <div class="card-footer text-center margin-l-card_footer" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);width:400px;">
                        <a href="#" @click="editplan= day+index2" class="text-light">Click to Edit</a>


                    </div>

                    <button v-if="tour_location.length!==index+1" @click="showlocation = tour_location[index+1].name+parseInt(index+1)"  class="button-css">{{tour_location[index+1].name}}</button>
                    <button v-else @click="changeview" class="button-css">Traveller </button>

                    <!-- Modal -->
                    <div id="">
                        <div v-if="editplan === day+index2">
                            <transition name="modal">
                                <div class="modal-mask">
                                    <div class="modal-wrapper">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" @click="editplan = null">
                                                        <span aria-hidden="true" class="f-2">&times;</span>
                                                    </button>

                                                </div>



                                                <div class="modal-body card pt-2 pb-1 pl-3 pr-2" style="margin-top: 10px;border-top:none; width: 100%;position:absolute;top:20px;z-index:6;">
                                                    <div class="row" style="width: 100%;">
                                                        <div class="col-6">
                                                            <i class="far fa-calendar text-muted" style="font-size: 20px"></i>
                                                            <span class="text-primary pl-1" style="font-size: 15px; font-weight: bold;">Day {{day}}</span><span class="text-secondary" style=";margin-left:10px;font-size:15px"> </span>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="width:100%;border-top: dotted grey 3px;margin-left:-8px;margin-top: 12px"></div>
                                                    <div class="row">
                                                        <div class="col-7" style="position: relative;"><span style="color:grey;position: absolute;top:10px;left: 23px"><i style="display: none"  class="fa fa-search"></i></span>
                                                            <v-select v-model="objj[location.id]['day-'+day]['place']"
                                                                      name="addplaceloc"
                                                                      label="title"
                                                                      @input="addtoplaces(day,location.id,editplan)"
                                                                      title="ADD SIGHTSEEING"
                                                                      multiple
                                                                      :options="localplace[location.id][day]"
                                                                      :clearable="true"
                                                                      placeholder=""
                                                                      style="font-size: 14px;width: 306px;margin-top: 10px;border: 1px solid gainsboro;border-radius: 15px;"
                                                                      class="hidetag"
                                                            />
                                                            <!--                                                            <vue-bootstrap-typeahead-->

                                                            <!--                                                                :data="localplace[location.id][day]"-->
                                                            <!--                                                                size="sm"-->
                                                            <!--                                                                placeholder="ADD SIGHTSEEING"-->
                                                            <!--                                                                :serializer="s => s.title"-->
                                                            <!--                                                                @hit="objj[location.id]['day-'+day]['place'].push($event) ,changedisplay('allplace')"-->
                                                            <!--                                                            />-->
                                                        </div>

                                                        <div class="col-5" style="position: relative;">
<!--                                                            <span style="color:green;font-size:14px">-->
<!--                                                                <i @click="clplace('refresh')" style="margin-top: 11%;margin-left: 10%;" class="fa fa-refresh cursor" aria-hidden="true"></i></span>-->
                                                            <!--                                                            <button  @click="clplace(true),placedata.city_id= placedata.city=[location.id.split('-')[0]]" style="text-align: left; width: 90%; font-size: 11px; background-color: white; border: 1px solid gainsboro; border-radius: 15px; /*! margin-top: 10px; */ /*! margin-left: -9px; */position: absolute;top: 46%;left: 18%;">ADD CUSTOM</button><span  style="/*! font-weight: normal; */ color: grey; position: absolute; top: 47%; left: 82%; font-size: 12px;"><i  class="fa fa-plus"></i></span>-->
                                                            <button @click="clplace(true),placedata.city_id= placedata.city=[location.id.split('-')[0]]" class=" pl-4 pr-4 mb-2" style="margin:17px 10px 10px 10px; background-color:rgb(76, 189, 236); border-color: rgb(76, 189, 236); color: white; border-radius: 10px;float: right;font-size: 12px;"><i  class="fa fa-plus"></i> &nbsp;ADD CUSTOM</button></div>
                                                    </div>
                                                    <div class="row">

                                                        <draggable v-model="objj[location.id]['day-'+day]['place']" group="people" @start="drag=true" @end="drag=false,allplace=false,allplace=true">

                                                            <div v-for="(placeinfo, index) in objj[location.id]['day-'+day]['place']">
                                                                <div  class="col-12" style="overflow: hidden"  v-show="allplace">
                                                                    <label>{{index+1 + "."}}</label>
                                                                    <input type="text" disabled :value="placeinfo['title']" style="font-weight: 100;margin-left: 16px;margin-top: 5px;height: 30px;border:0;border:solid gainsboro 2px">

                                                                    <i style=" " class="fa fa-trash" @click="objj[location.id]['day-'+day]['place'].splice(index, 1), changedisplay('allplace')" aria-hidden="true"></i>
                                                                    <i style=""  class="fa fa-arrows-alt" aria-hidden="true"></i>






                                                                </div>
                                                            </div>
                                                        </draggable>


                                                        <div v-for="(placeinfo, index) in objj[location.id]['day-'+day]['place']">



                                                            <div v-if="placeinfo['categories'].indexOf('237')!==-1">
                                                                <div  class="col-12" style="overflow: hidden"    v-show="privateplace">

                                                                    <input type="text" disabled :value="placeinfo['title']" style="font-weight: 100;margin-left: 16px;margin-top: 5px;height: 30px;border:0;border:solid gainsboro 2px">
                                                                    <i style=" " class="fa fa-trash" @click="objj[location.id]['day-'+day]['place'].splice(index, 1), changedisplay('allplace')" aria-hidden="true"></i>



                                                                </div>
                                                            </div>

                                                            <div v-if="placeinfo['categories'].indexOf('232')!==-1">
                                                                <div  class="col-12" style="overflow: hidden"   v-show="transferplace">
                                                                    <input type="text" disabled :value="placeinfo['title']" style="font-weight: 100;margin-left: 16px;margin-top: 5px;height: 30px;border:0;border:solid gainsboro 2px">
                                                                    <i style=" " class="fa fa-trash" @click="objj[location.id]['day-'+day]['place'].splice(index, 1), changedisplay('allplace')" aria-hidden="true"></i>
                                                                </div>
                                                            </div>



                                                        </div>

                                                        <div style="margin-top: 2px;width: 421px;margin-left: 46px;padding-left:5px;padding-right: 10px">

                                                            <!--                                                                <button  @click="editplan = null" class="btn-primary pl-4 pr-4 mb-2" style="float: right;font-size:10px;border:0;border-radius: 10px">Update</button>-->
                                                            <button @click="editplan = null" class="btn-primary pl-4 pr-4 mb-2" style="background-color: rgb(23, 80, 125); border-color: rgb(23, 80, 125); color: white; border-radius: 10px;float: right;font-size: 12px;">Update</button>

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




                    <div style="display: none" v-for="(placeinfo, index) in objj[location.id]['day-'+day]['place']">Place: {{placeinfo['title']}}:

                        <label>From:</label><input type="text" v-model="objj[location.id]['day-'+day]['place'][index]['from_time']" >
                        <label>To:</label><input type="text" v-model="objj[location.id]['day-'+day]['place'][index]['to_time']">
                        <label>Remark:</label><input type="text" v-model="objj[location.id]['day-'+day]['place'][index]['remark']">

                    </div>

                </div>


            </div>
        </div>
        <div v-show="!mode">

            <CarouselCard v-if="alledit" :interval="70000" height="450px" class="mt-3" type="card" arrow="always">
                <CarouselCardItem v-for="(location,index ) in newobjj" :key="index" id="edit">
                    <div >
                        <div >

                            <div class="">
                                <div class="">
                                    <div class="">
                                        <div class="">

                                            <div class="" style="margin-left: -10px;margin-right: 10px;">


                                                <div class="card pt-2 pb-1 pl-3 pr-2" style="width: 100%;position:absolute;top:20px;z-index:6;" >
                                                    <div class="row" style="width: 100%;margin-left: 2%;" >
                                                        <div class="col-12">
                                                            <i class="far fa-calendar text-muted" style="font-size: 20px" ></i>
                                                            <span  class="text-primary pl-1" style="font-size: 15px; font-weight: bold;">Day {{location.displayno}} ({{location.locname}})</span><span class="text-secondary" style=";margin-left:10px;font-size:15px"> </span>
                                                            <i v-if="location.common"  class="fa fa-flag" aria-hidden="true" title="Common Day" :style="location.color"></i>

                                                        </div>

                                                    </div>
                                                    <div class="row" style="width:100%;border-top: dotted grey 3px;margin-left:-8px;margin-top: 12px"></div>
                                                    <div class="row" style="margin-left: 0%">
                                                        <div class="col-7" style="position: relative;"><span style="color:grey;position: absolute;top:10px;left: 23px"><i style="display: none" class="fa fa-search"></i></span>
                                                            <v-select v-model="objj[location.loc][location.day]['place']"
                                                                      name="addplaceloc"
                                                                      label="title"
                                                                      @input="addtoplaces2(location.daycount,location.loc,location.daycount+index)"
                                                                      title="ADD SIGHTSEEING"
                                                                      multiple
                                                                      :options="localplace[location.loc][location.daycount]"
                                                                      :clearable="true"
                                                                      placeholder=""
                                                                      class="hidetag day_plan_edit"


                                                            />

                                                            <!--                                                            <vue-bootstrap-typeahead-->

                                                            <!--                                                                :data="localplace[location.loc][location.daycount]"-->
                                                            <!--                                                                size="sm"-->
                                                            <!--                                                                placeholder="ADD SIGHTSEEING"-->
                                                            <!--                                                                :serializer="s => s.title"-->
                                                            <!--                                                                @hit="objj[location.loc][location.day]['place'].push($event) ,changedisplay('allplace')"-->
                                                            <!--                                                            />-->
                                                        </div>
                                                        <div class="col-5" style="position: relative;">
<!--                                                            <span style="color:green;font-size:14px">-->
<!--                                                                <i @click="clplace('refresh')" style="margin-top: 10%;margin-left: 10%;" class="fa fa-refresh cursor" aria-hidden="true"></i></span>-->
                                                            <!--                                                            <button  @click="clplace(true),placedata.city_id= placedata.city=[location.loc.split('-')[0]]" style="text-align: left; width: 90%; font-size: 11px; background-color: white; border: 1px solid gainsboro; border-radius: 15px; /*! margin-top: 10px; */ /*! margin-left: -9px; */position: absolute;top: 46%;left: 18%;">ADD CUSTOM</button><span  style="/*! font-weight: normal; */ color: grey; position: absolute; top: 54%; left: 82%; font-size: 12px;"><i  class="fa fa-plus"></i></span>-->
                                                            <button @click="clplace(true),placedata.city_id= placedata.city=[location.loc.split('-')[0]]" class=" pl-4 pr-4 mb-2" style="margin:17px 17px 10px 10px; background-color:rgb(76, 189, 236); border-color: rgb(76, 189, 236); color: white; border-radius: 10px;float: right;font-size: 12px;"><i  class="fa fa-plus"></i> &nbsp;ADD CUSTOM</button>
                                                        </div>
                                                    </div>

                                                    <div class="row" style="margin-left: 0%">
                                                        <!--{{objj[location.loc][location.day]['place']}}-->
                                                        <!--                                                    <div v-for="(placeinfo, index) in objj[location.id]['day-'+day]['place']">-->


                                                        <draggable v-model="objj[location.loc][location.day]['place']" group="people" @start="drag=true" @end="drag=false,allplace=false,allplace=true">

                                                            <div v-for="(placeinfo, index1) in objj[location.loc][location.day]['place']">
                                                                <div  class="col-12" style="overflow: hidden"  v-show="allplace">
                                                                    <label>{{index1+1 + "."}}</label>
                                                                    <input type="text" disabled :value="placeinfo['title']" style="font-weight: 100;margin-left: 16px;margin-top: 5px;height: 30px;border:0;border:solid gainsboro 2px">

                                                                    <i style=" " class="fa fa-trash" @click="objj[location.loc][location.day]['place'].splice(index1, 1), changedisplay('allplace')" aria-hidden="true"></i>
                                                                    <i style=""  class="fa fa-arrows-alt" aria-hidden="true"></i>






                                                                </div>
                                                            </div>
                                                        </draggable>

                                                        <div v-for="(placeinfo, index1) in objj[location.loc][location.day]['place']">


                                                            <div v-if="placeinfo['categories'].indexOf('237')!==-1">
                                                                <div  class="col-12" style="overflow: hidden"   v-show="privateplace">
                                                                    <input type="text" disabled :value="placeinfo['title']" style="font-weight: 100;margin-left: 16px;margin-top: 5px;height: 30px;border:0;border:solid gainsboro 2px">
                                                                    <i style=" " class="fa fa-trash" @click="objj[location.loc][location.day]['place'].splice(index1, 1), changedisplay('allplace')" aria-hidden="true"></i>

                                                                </div>
                                                            </div>

                                                            <div v-if="placeinfo['categories'].indexOf('232')!==-1">
                                                                <div  class="col-12" style="overflow: hidden"    v-show="transferplace">
                                                                    <input type="text" disabled :value="placeinfo['title']" style="font-weight: 100;margin-left: 16px;margin-top: 5px;height: 30px;border:0;border:solid gainsboro 2px">
                                                                    <i style=" " class="fa fa-trash" @click="objj[location.loc][location.day]['place'].splice(index1, 1), changedisplay('allplace')" aria-hidden="true"></i>

                                                                </div>
                                                            </div>



                                                        </div>
                                                        <!--                                                        <div style="margin-top: 2px;width: 421px;margin-left: 46px;padding-left:5px;padding-right: 10px">-->

                                                        <!--                                                            <button  @click="editplan = null" class="btn-primary pl-4 pr-4 mb-2" style="float: right;font-size:10px;border:0;border-radius: 10px">Update</button>-->

                                                        <!--                                                        </div>-->
                                                    </div>
                                                </div>




                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </CarouselCardItem></CarouselCard>

        </div>
        <!-- Add Place Modal -->
        <div >
            <div v-if="addplacemodal===true">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog add_width">
                                <div class="modal-content">
                                    <div class="modal-header border-0 border-dotted">
                                        <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                            <div class="row">
                                                <div class="col-10">
                                                    <h1><span><img src="./dashboard_resources/add-1.png" class="hw-4 mr-2"></span>Add Sightseeing</h1>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <button type="button" class="close" @click="clplace(false)">
                                                        <span aria-hidden="true" class="f-2">&times;</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="modal-body" style="">
                                        <div class="container-fluid c-grey">
                                            <div class="row no-gutters">
                                                <div class="col-6 col-md-3">NAME *</div>
                                                <div class="col-12 col-sm-6 col-md-9">
                                                    <input id="name" type="text" class="form-control fw-4" name="title" placeholder="Enter Title" v-model="placedata.title" @input="updateTitle">
                                                </div>
                                            </div>
                                            <div class="row no-gutters mt-4">
                                                <div class="col-6 col-md-3">CONTACT NUMBER</div>
                                                <div class="col-12 col-sm-6 col-md-9">
                                                    <input type="text"
                                                           class="form-control fw-4"
                                                           name="contact_no"
                                                           placeholder="Enter Contact no"
                                                           v-model="placedata.contact_no"
                                                           @input="updateContact_no">
                                                </div>
                                            </div>
                                            <div class="row no-gutters mt-4">
                                                <div class="col-6 col-md-1">LAT</div>
                                                <div class="col-12 col-sm-6 col-md-5">
                                                    <input type="text"
                                                           class="form-control fw-4"
                                                           name="place_latitude"
                                                           placeholder="Enter Place latitude"
                                                           v-model="placedata.place_latitude"
                                                           @input="updatePlace_latitude">
                                                </div>
                                                <div class="col-6 col-md-1 text-center">LONG</div>
                                                <div class="col-12 col-sm-6 col-md-5">
                                                    <input type="text"
                                                           class="form-control fw-4"
                                                           name="place_longitude"
                                                           placeholder="Enter Place longitude"
                                                           v-model="placedata.place_longitude"
                                                           @input="updatePlace_longitude">
                                                </div>
                                            </div>

                                            <div class="row no-gutters mt-4">
                                                <p class="text-dark">Note:- Image ratio should be 4:3 otherwise image will be croped.</p>
                                            </div>
                                            <div class="row no-gutters mt-4">
                                                <div class="col-6 col-md-3">UPLOAD PICTURE</div>
                                                <div class="col-12 col-sm-6 col-md-9">

                                                    <div class="row mt-3">
                                                        <div class="col-6 text-center f-1-6" v-if="this.placedata.featured_image==''">
                                                            <!--                                                            <p>No file Choosen</p>-->
                                                            <label class="file_hidden offset-2 mt-n2 f-1-6" id="file_button">
                                                                Choose File
                                                                <input type="file" size="20"  @change="updateFeatured_image" accept="image/x-png,image/jpeg">
                                                            </label>
                                                        </div>
                                                        <div class="col-12 text-center f-1-6" v-if="this.placedata.featured_image!=''">
                                                            <!--                                                            <p class="fw-6">Uploaded</p>-->
                                                            <div class="row">
                                                                <div class="col-md-4 offset-2">
                                                                    <a class="download_button mt-n2 offset-2 f-1-6" target= "_blank" href="#">Uploaded</a>
                                                                </div>
                                                                <div class="col-md-2">
                                                                    <img  @click="deletefetureimage" src="./dashboard_resources/trash.png" class="hw-3 ">
                                                                </div>

                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="row no-gutters mt-4">
                                                <div class="col-6 col-md-3">DESCRIPTION *</div>
                                                <div class="col-12 col-sm-6 col-md-9">
                                                    <textarea  rows="5" class="form-control fw-4" name="description"
                                                               id="description"
                                                               v-model="placedata.description"
                                                               @input="updateDescription"></textarea>
                                                </div>
                                            </div>
<!--                                            <div class="row no-gutters mt-4">-->
<!--                                                <p class="text-dark">Note:- Please Fill All Fields.</p>-->
<!--                                            </div>-->
                                            <div class="row mt-3">
                                                <div class="col text-center" >
                                                    <input type="button" class="bg-success pl-5 border-0 text-white pr-5 b-1-5" value="DONE" @click="addplacenew">
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

        <div v-if="place_added_model===true">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-header border-0 border-dotted">
                                    <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                        <div class="row">
                                            <div class="col-10">
                                                <h1>Custom Place Added</h1>
                                            </div>
                                            <div class="col-2 text-right">
                                                <button type="button" class="close f-2-5"  @click="clplace('refresh')">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div class="modal-body" >
                                    <div :style="{ 'background-image': 'url('+tick_url+')'}" style="height: 100px; width: 100%; background-size: contain; background-repeat: no-repeat; background-position: center; "></div>
                                    <div style="text-align: center;" ><h1 >
                                        New activity added to {{showlocation.slice(0, -1)}}
                                    </h1></div>
                                    <div class="col text-right" >
                                        <input type="button" class="bg-success pl-5 border-0 text-white pr-5 b-1-5"
                                               value="Continue" @click="clplace('refresh')">
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
    <!--@click="remove"-->
</template>


<script>
    import DaysPlaceComponent from '../cruds/daysplaces'
    import moment from 'moment'

    import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
    import 'vue-carousel-card/styles/index.css'
    import { mapGetters, mapActions } from 'vuex'
    import draggable from 'vuedraggable'
    import random_color from "../../mixins/random_color";
    export default{

        data(){
            return{
                tour:[],
                days:[],
                mealday:[],
                objj:{},
                temp:{},
                defaultt:[],
                localplace:{},
                hotelselect:[],
                hotelselect2:[],
                hoteloptions:{},
                non:[],
                non2:[],
                slides:['1','2','3'],
                showlocation:null,
                showday:null,
                editplan:null,
                allplace:true,
                privateplace:false,
                transferplace:false,
                alldaycounter:[],
                placeholder:'',
                newobjj:[],
                alledit:false,
                mode:true,
                test:true,
                sortdays:false,
                adddescmodal:false,
                place_title:'',
                place_desc:'',
                place_added_model:false,
                background_url:'',
                tick_url:'',
                place_create:false,

                // addplacemodal:null,
                // placedata:{'title':'',
                //     'description':'',
                //     'contact_no':'',
                //     'categories':'custom',
                //     'place_longitude':'',
                //     'place_latitude':'',
                //     'featured_image':'',
                //     'city_id':'',
                //     'city[0]':'',
                // }
                // tt:[{"id":1,"title":"ffhjhj"}]
            }

        },
        computed:{
            ...mapGetters('QueriesSingle', ['placedata','addplacemodal','add_place_modal_status']),

            random_color(){
                return random_color();
            }
        },

        mounted(){


            //<button  v-for="(dayl,index1 ) in parseInt(location.days)" @click="showday = dayl+index1"
            this.showlocation=this.tour_location[0].name+0
            this.showday=1+0

            // namelock.name+index3
            this.defaultt.push({"id":1,
                "title":"Day at Leisure",
                "to_time":"",
                "from_time":"",
                "remark":"",
                "created_by_id":1,
                "categories":["193"]

            });

            this.setday_plan_mounted_status(true);
        },
        watch: {


            'hotels': function(newVal, oldVal) {
                // console.log("watch");
                // console.log('value changed from ' + oldVal + ' to ' + newVal);
                this.hotelset(this.location.id,this.hotels);
            },
            tour_location: {
                handler(query) {
                    this.alledit=false
                    this.newobjj=_.cloneDeep([])
                    this.showday=1;
                    var len=this.tour_location.length;
                    for(var t=0;t<len ;t++){
                        //
                        if(t==0){
                            this.alldaycounter[t]=0

                        }

                        else{
                            this.alldaycounter[t]=parseInt(this.alldaycounter[t-1])+parseInt(this.tour_location[t-1]['days'])
                        }

                    }
                },
                deep: true
            },
            'addplacemodal': function (n,o) {
                console.log('addplace'+n);
                if(n!==false &&  n!==true &&  n!='refresh'){
                    // alert("new places fetching");
                    this.fetchplace(n);
                    this.closeplace(false)
                    this.localplace={};
                }
                if(n===false){
                    this.closeplace(false)
                    this.localplace={};
                }
                if(n=='refresh'){
                    // this.closeplace(false)
                    this.localplace={};
                }
// this.addplacemodal=false;



            },
            'add_place_modal_status': function () {
                if(this.place_create){
                    this.place_added_model=true;
                }


            },
        },
        created(){
            var base_url = window.location.origin;
            this.background_url=base_url+'/dashboard_resources/background_doc.png';
            this.tick_url=base_url+'/dashboard_resources/green-tick.png';

        },

        methods: {
            ...mapActions('QueriesSingle', ['addPlace','closeplace','fetchplace','setday_plan_mounted_status']),
            editall(){
                //     alert("g")
                this.mode=false


                if(!this.sortdays){
                    // this.sortdays=true
                    var sortedarray={}
                    for (let i=0; i<this.tour_location.length; i++) {

                        sortedarray[ this.tour_location[i].id]=_.cloneDeep(this.objj[this.tour_location[i].id])
                    }

                    this.itiplaces=_.cloneDeep(sortedarray);
                    this.objj=_.cloneDeep(sortedarray);
                    this.$emit('addplace',sortedarray)
                    // console.log(sortedarray);
                }


                if( this.alledit==false){
                    // var overallcounter=0;
                    var  displayno=0;
                    for (let value of Object.entries(this.objj)) {
                        // console.log(value); // John, then 30
                        var a=  value[0];
                        var daycount=0;

                        for (let dop=0; dop<this.tour_location.length; dop++) {
                            if(this.tour_location[dop].id==a){

                                var name=this.tour_location[dop].name
                            }
                        }
                        var countlen=0;
                        for(var prop in value[1]) {
                            if(value[1].hasOwnProperty(prop))
                                ++countlen;
                        }

                        var locallength=0
                        for (let val of Object.entries(value[1])) {
                            daycount++
                            displayno++
                            locallength++
                            var b=a+val[0];


                            var c={};
                            // c[b]=val[1]
                            c['loc']=a
                            c['day']=val[0]
                            c['daycount']=daycount
                            c['locname']=name
                            c['displayno']=displayno
                            if((locallength===countlen) || (displayno>1 && locallength===1)){
                                c['common']=true
                                if(val[0]=='day-1'){
                                    c['color']=this.newobjj[this.newobjj.length-1].color
                                }
                                else {
                                    c['color']={'color' :random_color()}
                                }

                            }
                            else{
                                c['common']=false
                                c['color']=''
                            }


                            this.newobjj.push(c)
                        }
                        displayno--
                    }
                    var len= this.newobjj.length

                    this.newobjj[len-1]['common']=false

                    this.alledit=true
                }

            },
            changemeal(location,day,meal,status,day1,index2){
                console.log("changemeal");

                this.temp={};
                this.temp=Object.assign(this.temp,this.objj);


                this.temp[location][day]['meal'][meal]=status;


                this.objj=Object.assign(this.objj,this.temp);

                this.showday="";
                this.showday=day1+index2;
            },
            setdayscout(){
                console.log("count set days")
                var len=this.tour_location.length;
                var len2=this.alldaycounter.length;
                if(len!=len2){
                    for(var t=0;t<len ;t++){
                        //
                        if(t==0){
                            this.alldaycounter[t]=0

                        }

                        else{
                            this.alldaycounter[t]=parseInt(this.alldaycounter[t-1])+parseInt(this.tour_location[t-1]['days'])
                        }

                    }
                }

            },
            addplacenew(){
                var flag=0;
                if(document.getElementById("description").value==''){
                    document.getElementById("description").style.border = "2px solid red";
                    flag=1;
                }
                else{
                    document.getElementById("description").style.border = "1px solid #ced4da";
                }
                if(document.getElementById("name").value==''){
                    document.getElementById("name").style.border = "2px solid red";
                    flag=1;
                }
                else{
                    document.getElementById("name").style.border = "1px solid #ced4da";
                }



                if(flag==0){
                    this.place_create=true;
                    this.addPlace()
                }
                else{
                    return false;
                }



            },
            clplace(e){
                this.closeplace(e)
                if(e){
                    this.setday_plan_mounted_status(true);
                }
                if(e=='refresh'){
                    this.place_create=false;
                    this.place_added_model=false;
                    this.setday_plan_mounted_status(false);
                }
            },
            updateTitle(e) {
                // this.setTitle(e.target.value)
            },
            updateDescription(value) {
                // this.setDescription(value)
            },
            updateContact_no(e) {
                // this.setContact_no(e.target.value)
            },
            updateCategories(e) {
                // this.setCategories(e.target.value)
            },
            updateAddress(e) {
                // this.setAddress(e.target.value)
            },
            updatePlace_longitude(e) {
                // this.setPlace_longitude(e.target.value)
            },
            updatePlace_latitude(e) {
                // this.setPlace_latitude(e.target.value)
            },
            updateFeatured_image(e) {
                this.placedata.featured_image=(e.target.files[0]);
                this.$forceUpdate();
            },
            deletefetureimage() {
                this.placedata.featured_image='';
                this.$forceUpdate();
            },

            changeview(){
                this.$emit('showtrav');
            },
            changedisplay(item){


                this.allplace=false;
                this.privateplace=false;
                this.transferplace=false;

                if(item=='allplace'){



                    this.allplace=true;


                }
                if(item=='privateplace'){


                    this.allplace=false;
                    this.privateplace=true;
                    this.transferplace=false;
                }
                if(item=='transferplace'){

                    this.allplace=false;
                    this.privateplace=false;
                    this.transferplace=true;
                }
                // this.test=true;
            },
            moment_format(f,days,index){
                // return   moment(f).add(parseInt(days)-1,'days').format("DD MM YYYY");
                var date = moment(f, 'DD-MM-YYYY').format('YYYY-MM-DD');
                // return   moment(date).add(7,'days').format("DD MMM YYYY");
//     if(index==0){
                return   moment(date).add(parseInt(days)-1,'days').format("DD MMM YYYY");

                // }
                // else {
                //     return   moment(moment(f).format("YYYY-MM-DD")).add(days,'days').format("DD MMM YYYY");
                //
                // }

            },
            objpre(){

                console.log('objpre1');
                if(_.isEmpty(this.objj)){
                    console.log('objpre2');
                    if(this.$props.itiplaces){
                        this.objj= _.cloneDeep(this.$props.itiplaces);
                    }


                }
                return null;
            },
            preselect(a,b,locationid,place){
                // console.log('objpre3');
                // console.log(a);
                // console.log(b);
                // console.log(locationid);
                // console.log(place);


                if(typeof a !== 'undefined' && typeof b !== 'undefined' && typeof locationid !== 'undefined' && typeof place !== 'undefined'  ){
                    // alert("day:"+a+"-"+b+"loc"+locationid+"place"+place);


                    if(_.isEmpty(this.localplace)){
                        //     alert("test");
                        var pla=_.cloneDeep(place);
                        this.localplace[locationid]={[a]:pla};
                        //var arr=_.clone(place);
                        // this.localplace[locationid][a]=place;
                        // console.log("cloned");
                        // console.log(this.localplace);
                    }
                    else if(this.localplace.hasOwnProperty(locationid)){

                        if(this.localplace[locationid].hasOwnProperty(a)){


                        }else {

                            var pla=_.cloneDeep(place);
                            // this.localplace[locationid]={[a]:pla};

                            this.temp[locationid]={};

                            this.temp[locationid]={[a]:pla};


                            this.localplace[locationid] = Object.assign(this.localplace[locationid], this.temp[locationid]);
                            this.temp = Object.assign({}, {});


                        }


                    }
                    else {

                        var pla=_.cloneDeep(place);
                        this.localplace[locationid]={[a]:pla};

                    }



                    if(_.isEmpty(this.objj)){
                        // alert("me empty");

                        this.days[a]=[{"id":1,
                            "title":"Day at Leisure",
                            "to_time":"",
                            "from_time":"",
                            "remark":"",
                            "created_by_id":1,
                            "categories":["193"]

                        }];
                        this.mealday[a]=JSON.parse(JSON.stringify(this.meal));

                        var day=a;

                        this.temp[locationid]={};

                        this.temp[locationid]['day-'+day]={'place':this.days[day],'meal': JSON.parse(JSON.stringify(this.meal))};
                        this.objj = Object.assign(this.objj, this.temp);
                        this.temp = Object.assign({}, {});

                        // this.$emit('addplace',this.objj)
                    }
                    else if(  this.objj.hasOwnProperty(locationid)){
                        var day=a;
                        // alert("hasOwnProperty");
                        if(this.objj[locationid].hasOwnProperty(['day-'+day])){

                            // alert("day not empty");

                        }
                        else {

                            // alert("day empty");
                            this.days[a]=[{"id":1,
                                "title":"Day at Leisure",
                                "to_time":"",
                                "from_time":"",
                                "remark":"",
                                "created_by_id":1,
                                "categories":["193"]

                            }];
                            this.mealday[a]=JSON.parse(JSON.stringify(this.meal));
                            // alert("me not else in");
                            this.temp=Object.assign(this.temp,this.objj);
                            this.temp[locationid]['day-'+day]={'place':this.days[day],'meal':JSON.parse(JSON.stringify(this.meal))};
                            this.objj[locationid] = Object.assign(this.objj[locationid], this.temp[locationid]);
                            this.temp = Object.assign({}, {});

                        }


                    }
                    else {

                        // var day=a;
                        //  alert("no hasOwnProperty");

                        this.days[a]=[{"id":1,
                            "title":"Day at Leisure",
                            "to_time":"",
                            "from_time":"",
                            "remark":"",
                            "created_by_id":1,
                            "categories":["193"]

                        }];
                        this.mealday[a]=JSON.parse(JSON.stringify(this.meal));
                        var day=a;

                        this.temp[locationid]={};

                        this.temp[locationid]['day-'+day]={'place':this.days[day],'meal': JSON.parse(JSON.stringify(this.meal))};
                        this.objj = Object.assign(this.objj, this.temp);
                        this.temp = Object.assign({}, {});


                    }
                    var arr_location_id=[]
                    for (let i=0; i<this.tour_location.length; i++) {
                        arr_location_id.push(this.tour_location[i].id)
                        var countlen=0
                        for(var prop in this.objj[this.tour_location[i].id]) {
                            if(this.objj[this.tour_location[i].id].hasOwnProperty(prop))
                                ++countlen;
                        }
                        if( parseInt(this.tour_location[i].daynights) < parseInt(countlen)){
                            // alert("in")
                            var dif= parseInt(countlen)-parseInt(this.tour_location[i].daynights)
                            // var tmpobj =  _.cloneDeep(this.objj[this.tour_location[i].id])
                            for(var j=parseInt(this.tour_location[i].daynights)+1 ;j<=countlen ;j++ ){
// var tempobj=_.cloneDeep(this.objj);
                                this.objj[this.tour_location[i].id]= _.omit(this.objj[this.tour_location[i].id],'day-'+j)


                                // delete tmpobj['day-3']
                            }
                            // this.objj[this.tour_location[i].id]=_.cloneDeep(tmpobj)
                        }


                    }
//                     for(var prop1 in this.objj) {
//
// console.log(prop1);
// var found='empty';
//                         for (let i=0; i<this.tour_location.length; i++) {
//
//                             if( this.tour_location[i].id===prop1){
//
//                                 found
//                             }
//                         }
//
//                         this.objj= _.omit(this.objj,this.tour_location[i][prop1])
//                     }

                    // this.$emit('addplace',tempobj)

                    // this.objj=_.cloneDeep(tempobj);


                    this.$emit('addplace',this.objj)


                }
                return null;
            },
            remove(){
                //  alert('hello');
                this.$emit('delete', this.location.id)

            },

            addtoplaces(day,locationid,editplan){

                if( this.objj.hasOwnProperty(locationid)){

                    if(this.objj[locationid].hasOwnProperty('day-'+day)){

                        // this.objj[locationid]['day-'+day].place=_.clone(this.days[day])
                        this.objj[locationid]['day-'+day].meal=_.clone(JSON.parse(JSON.stringify(this.meal)))
                    }
                    else{


                        // Object.assign( this.objj[locationid], {['day-'+day]: {'place':_.clone(this.days[day])}})
                        Object.assign( this.objj[locationid], {['day-'+day]: {'meal':_.clone(JSON.parse(JSON.stringify(this.meal)))}})

                    }


                }
                else {

                    this.temp[locationid]={};

                    //  this.objj[locationid].push([day]);
                    // this.temp[locationid]['day-'+day]={'place':_.clone(this.days[day])};
                    this.temp[locationid]['day-'+day]={'meal':_.clone(JSON.parse(JSON.stringify(this.meal)))};

                    this.objj = Object.assign(this.objj, this.temp);

                }


                this.$emit('addplace',this.objj)

                this.editplan=null;
                this.editplan=editplan;
            },
            addtoplaces2(day,locationid,editplan){

                if( this.objj.hasOwnProperty(locationid)){

                    if(this.objj[locationid].hasOwnProperty('day-'+day)){

                        // this.objj[locationid]['day-'+day].place=_.clone(this.days[day])
                        this.objj[locationid]['day-'+day].meal=_.clone(JSON.parse(JSON.stringify(this.meal)))
                    }
                    else{


                        // Object.assign( this.objj[locationid], {['day-'+day]: {'place':_.clone(this.days[day])}})
                        Object.assign( this.objj[locationid], {['day-'+day]: {'meal':_.clone(JSON.parse(JSON.stringify(this.meal)))}})

                    }


                }
                else {

                    this.temp[locationid]={};

                    //  this.objj[locationid].push([day]);
                    // this.temp[locationid]['day-'+day]={'place':_.clone(this.days[day])};
                    this.temp[locationid]['day-'+day]={'meal':_.clone(JSON.parse(JSON.stringify(this.meal)))};

                    this.objj = Object.assign(this.objj, this.temp);

                }


                this.$emit('addplace',this.objj)

                this.editplan=null;
                this.editplan=editplan;
                this.editplan=null;
            },
            show_decs(desc,title){
                this.adddescmodal=true;
                this.place_desc=desc;
                this.place_title=title;

            },



        },
        components: {CarouselCard, CarouselCardItem,draggable

        } ,
        props: ['place','tour_location','datestart','meal','summ','hotel','itiplaces','license']


    }


</script>

<style scoped>
    input[type="file"] {
        display: block;
    }
    .custom-control.material-checkbox .material-control-input {
        display: none;
    }
    .custom-control.material-checkbox .material-control-input:checked ~ .material-control-indicator {
        border-color: var(--color);
        transform: rotateZ(45deg) translate(1px, -5px);
        width: 10px;
        border-top: 0px solid #fff;
        border-left: 0px solid #fff;
    }
    .custom-control.material-checkbox .material-control-indicator {
        display: inline-block;
        position: absolute;
        top: 4px;
        left: 0;
        width: 16px;
        height: 16px;
        border: 2px solid #aaa;
        transition: 0.3s;
    }
    .custom-control.fill-checkbox {
        --color: #26a69a;
    }
    .custom-control.fill-checkbox .fill-control-input {
        display: none;
    }
    .custom-control.fill-checkbox .fill-control-input:checked ~ .fill-control-indicator {
        background-color: var(--color);
        border-color: var(--color);
        background-size: 80%;
    }

    .custom-control.fill-checkbox .fill-control-indicator {
        border-radius: 3px;
        display: inline-block;
        position: absolute;
        top: 2px;
        left: 0;
        width: 10px;
        height: 16px;
        border: 2px solid #aaa;
        transition: 0.3s;
        background: transperent;
        background-size: 0%;
        background-position: center;
        background-repeat: no-repeat;

    }
    .custom-control.overflow-checkbox .overflow-control-input {
        display: none;
    }
    .custom-control.overflow-checkbox .overflow-control-input:checked ~ .overflow-control-indicator::after {
        transform: rotateZ(45deg) scale(1);
        background-color: transparent;
        top: -2px;
        left: 10px;
    }
    .custom-control.overflow-checkbox .overflow-control-input:checked ~ .overflow-control-indicator::before {
        opacity: 1;

    }
    .custom-control.overflow-checkbox .overflow-control-indicator {
        border-radius: 3px;
        display: inline-block;
        position: absolute;
        top: 4px;
        left: 0;
        width: 23px;
        height: 23px;
        border: 3px solid gainsboro;

    }
    .custom-control.overflow-checkbox .overflow-control-indicator::after {
        content: '';
        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        transition: 0.3s;
        transform: rotateZ(90deg) scale(0);
        width: 10px;
        border:0;
        border-bottom: 4px solid green;
        border-right: 4px solid green;
        border-radius: 3px;
        top: -2px;
        left: 2px;

    }

    .custom-control.overflow-checkbox .overflow-control-indicator::before {
        content: '';

        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        transition: 0.3s;
        width: 10px;
        border-right: 7px solid #fff;
        border-radius: 3px;
        transform: rotateZ(45deg) scale(1);
        top: -4px;
        left: 5px;
        opacity: 0;
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
        /*vertical-align: middle;*/
    }
    .activedev{
        display: block !important;
    }
    .hidedev{
        display: none;
    }
    .bg-primary {
        color: white !important;
    }
    textarea{height: 100% !important;resize: none;}
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
