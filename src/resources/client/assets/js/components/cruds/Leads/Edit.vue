<template>
    <section class="content-wrapper">
        <section class="content-header">
            <task-maker class="fix-addtask"></task-maker>
            <div class="row">
                <div class="col-4 ">
                  <div class="row" style="margin-left: 10px;">
                      <div class="col-8" ><h1>{{item.lead_id}}</h1></div>

                      <div class="col-4" style="padding:5px;">
                          <span v-if="license.tech_aug">
                    <span v-if="item.score_new">
      <div v-if="Math.trunc(parseInt(item.score_new))===5" class="bg-danger" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  5</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score_new))===4" class="bg-warning" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  4</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score_new))===3" class="bg-primary" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  3</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score_new))===2" class="bg-success" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  2</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score_new))===1" class="bg-dark" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  1</div>
      </div>


</span>
                    <span v-else>
             <div v-if="Math.trunc(parseInt(item.score))===5" class="bg-danger" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  5</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score))===4" class="bg-warning" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  4</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score))===3" class="bg-primary" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  3</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score))===2" class="bg-success" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  2</div>
      </div>
      <div v-if="Math.trunc(parseInt(item.score))===1" class="bg-dark" style="     height: 23px; text-align: center;">
                    <div  style="   font-size: 15px; color: white; font-weight: 600;"><i class="fa fa-bar-chart" title="score" aria-hidden="true"></i> Score :  1</div>
      </div>
                        <!--temp-->
                        <!--<div v-else class="bg-primary" style="     height: 23px; text-align: center;">-->
                        <!--                    <div  style="   font-size: 15px; color: white; font-weight: 600;">3</div>-->
                        <!--      </div>-->
        </span>
</span>
                      </div>
                  </div>
                </div>
<!--                <p @click="pdf">pdf</p>-->
                <div class="col">
                    <div class="row float-right pr-4">
                        <div class="bg-white ml-2 shadow width1 rounded text-danger pb-2 cursor" v-if="item.lead_status!=2"  @click="lostreason=true">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-times-circle"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4" v-if="item.lead_status==1">Mark Lost</span>
                                    <span class="f-1-4" v-if="item.lead_status==3">Lost Reason</span>
                                </div>
                            </div>
                        </div>


                        <div v-if="license.quotation_gen">

                            <div class="bg-white ml-2 shadow width1 rounded text-green pb-2 cursor" v-if="item.lead_status==1 || item.lead_status==2">
                                <router-link
                                    :to="{ name: 'queries.create',params:{'lead_data':item ,'lead_meta':meta } }"
                                >
                                    <div class="row">
                                        <div class="col-12 text-center mt-3">
                                            <span class="f-1-7"><img class="h-w-2-5" src="./../dashboard_resources/Icon/confirm-2.png"></span>
                                        </div>
                                        <div class="col-12 text-center">
                                            <span class="f-1-4">Confirm to Query</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>


                        </div>
                        <div v-if="license.quotation_gen">

                            <div class="bg-white ml-2 shadow width1 rounded text-green pb-2 cursor" v-if="item.lead_status==1 || item.lead_status==2">
<!--                                <router-link-->
<!--                                    :to="{ name: 'queries.create',params:{'lead_data':item ,'lead_meta':meta } }"-->
<!--                                >-->
                                    <div class="row" @click="cloneprevious=true">
                                        <div class="col-12 text-center mt-3">
                                            <span class="f-1-7"><img class="h-w-2-5" src="./../dashboard_resources/Icon/confirm-2.png"></span>
                                        </div>
                                        <div class="col-12 text-center">
                                            <span class="f-1-4">Query From Pre.</span>
                                        </div>
                                    </div>
<!--                                </router-link>-->
                            </div>


                        </div>
                        <div v-else>

                            <div class="bg-white ml-2 shadow width1 rounded text-green pb-2 cursor" v-if="item.lead_status==1 || item.lead_status==2">

                                 <a href="#">
                                   <div class="row">
                                        <div class="col-12 text-center mt-3">
                                            <i style="text-align: left; font-size: 20px;padding: 8px;" class="fa fa-lock" title="Query Locked" aria-hidden="true"></i>
                                        </div>
                                        <div class="col-12 text-center">
                                            <span class="f-1-4">Confirm to Query</span>
                                        </div>
                                    </div>
                                 </a>

                            </div>



                        </div>
                         <!--                                                    <div v-if="item.lead_status==1 || item.lead_status==2"  class="float-right">  <router-link-->
                        <!--                                                        :to="{ name: 'queries.create',params:{'lead_data':item ,'lead_meta':meta } }"-->
                        <!--                                                    >-->

                        <!--                                                        <img class="shadow" src="./../dashboard_resources/Icon/confirmed.png">-->
                        <!--                                                        </router-link>-->
                        <!--                                                    </div>-->
                    </div>

                </div>
            </div>
        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        <form @submit.prevent="submitForm" novalidate>

                            <!--                            <div class="box-header with-border">-->
                            <!--                                <h3 class="box-title">Edit</h3>-->
                            <!--                            </div>-->

                            <bootstrap-alert />
                            <div class="container-fluid ml-4">

                                <div class="row ml-5">
                                    <div class="col-12 h1">
                                        <i class="fas fa-pencil-alt" v-if="item.lead_status!=3"></i>
                                        <i class="fa fa-times-circle" v-else aria-hidden="true"></i>

                                        <b v-if="item.lead_status!=3">Edit Lead</b>
                                        <b v-else>Lead Lost</b>
                                    </div>

                                    <div class="col-lg-5 ml-4">
                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Tentative Date</span></div>
                                            <div class="col-lg-12"><span class="p-a mt-1 ml-3 c-grey f-1-8"><i class="fa fa-calendar"></i></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span>
                                                <date-picker
                                                    :value="item.date"
                                                    :config="$root.dpconfigDate"
                                                    name="date"
                                                    placeholder="Enter Date"
                                                    @dp-change="updateDate"
                                                    class="pl-5 form-control fw-4"
                                                >
                                                </date-picker></div>
                                        </div>


                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Mobile Number</span></div>
                                            <div class="col-lg-12">
                                                <span class="p-a pl-2"><img src="./../dashboard_resources/contact.png"></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span>
                                                <vue-tel-input v-bind="bindProps" disabled style="border: 1px solid #ced4da;" v-model="item.phone"    class="form-control pl-5" name="phone" placeholder="Enter Phone"></vue-tel-input>



                                            </div>
                                        </div>


                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Email</span></div>
                                            <div class="col-lg-12"><span class="p-a ml-3 mt-1 c-grey f-1-8"><i class="fa fa-envelope"></i></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span>
                                                <input
                                                    type="email"
                                                    class="form-control pl-5 fw-4"
                                                    name="email"
                                                    placeholder="Enter Email"
                                                    :value="item.email"
                                                    @input="updateEmail"
                                                    disabled
                                                ></div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-12"><label for="lead_id1" class="h2 fw-4 text-muted">Source Lead</label></div>
                                            <div class="col-lg-12 mt-n2">
                                                <span class="p-a ml-3"><img src="./../dashboard_resources/leadsource.png" class="hw-2 mt-2"></span>
                                                <select
                                                    class="form-control pl-5 fw-4"
                                                    name="lead_id1"
                                                    :value="item.source"
                                                    @input="updateSource"
                                                ><option value="Adwords">Adwords</option>
                                                    <option selected value="Social Media">Social Media</option>

                                                    <option value="Offline Purchase">Offline Purchase</option>
                                                    <option value="Repeat">Repeat</option>
                                                    <option value="Referred">Referred</option>
                                                    <option value="Website">Website</option>
                                                    <option value="Walk In">Walk In</option>
                                                    <option value="Phone Call">Phone Call</option>
                                                    <option value="Corporate">Corporate</option>
                                                    <option value="Sales Team">Sales Team</option>
                                                    <option value="Others">Others</option>
                                                </select></div>

                                            <div class="mt-5 col-lg-12">
                                                <div class="" ><span class=" h2 fw-4 text-muted">Lead Feel Rating:</span></div>
                                                <div class="">
                                                    <div class="row ml-2">

                                                        <div class="bg-danger rating-5 text-center" @click="item.lead_feel=5">
                                                            <div class="f-1-4 text-light fw-4">5</div>
                                                            <i class="fas fa-caret-up mt-0" v-if="item.lead_feel==5"></i></div>
                                                        <div class=" bg-warning rating-w-all text-center" @click="item.lead_feel=4">
                                                            <div class="f-1-4 text-light fw-4">4</div>
                                                            <i class="fas fa-caret-up mt-0" v-if="item.lead_feel==4"></i></div>
                                                        <div class="bg-primary rating-w-all text-center" @click="item.lead_feel=3">
                                                            <div class="f-1-4 text-light fw-4">3</div>
                                                            <i class="fas fa-caret-up mt-0 text-dark" v-if="item.lead_feel==3"></i></div>
                                                        <div class=" bg-success rating-w-all text-center" @click="item.lead_feel=2">
                                                            <div class="f-1-4 text-light fw-4">2</div>
                                                            <i class="fas fa-caret-up mt-0" v-if="item.lead_feel==2"></i></div>
                                                        <div class=" bg-dark rating-w-all text-center" @click="item.lead_feel=1">
                                                            <div class="f-1-4 text-light fw-4">1</div>
                                                            <i class="fas fa-caret-up mt-0" v-if="item.lead_feel==1"></i></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-5 offset-1 mt-5">
                                        <div class="row">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Sector</span></div>
                                            <div class="col-lg-12" ><span class="p-a ml-3 mt-2"><img src="./../dashboard_resources/loction.png" class="hw-i"></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span>
                                                <input
                                                    type="text"
                                                    class="form-control pl-5 fw-4"
                                                    name="package_type"
                                                    placeholder="Enter Package type"
                                                    :value="item.package_type"
                                                    @input="updatePackage_type"

                                                ></div>
                                        </div>

                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Traveller Name</span>
                                                 </div>
                                            <div class="col-lg-12" ><span class="p-a ml-1"><img src="./../dashboard_resources/name.png"></span><input
                                                type="text"
                                                class="form-control pl-5 fw-4"
                                                name="name"
                                                placeholder="Enter Name"
                                                :value="item.name"
                                                @input="updateName"
                                                disabled
                                            ></div>
                                        </div>


                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Traveller</span></div>
                                            <div class="col-lg-12"><span class="p-a ml-3 mt-2"><img src="./../dashboard_resources/traveller.png" class="hw-2"></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span>
                                                <input readonly class="form-control bg-w pl-5 fw-4" data-toggle="modal" data-target="#myModal"  v-model="total_trav" type="text">
                                                <div class="container">

                                                    <div class="modal" id="myModal">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">

                                                                <!-- Modal Header -->


                                                                <!-- Modal body -->
                                                                <div class="modal-body">
                                                                    <button type="button" class="close f-2-5" data-dismiss="modal">&times;</button><br>
                                                                    <div class="container">
                                                                        <div class="row text-center pt-2 pb-2" style="">
                                                                            <div class="col-lg-4">
                                                                                <div class="row">
                                                                                    <div class="col-12">
                                                                                        <span class="h3 fw-4 text-muted">Adults</span>
                                                                                    </div>
                                                                                    <div class="col-lg-12" style="">
                                                                                        <vue-numeric-input id="adult" v-model="item.adult_guest"

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
                                                                                        <span class="h3 fw-4 text-muted">Children</span>
                                                                                    </div>
                                                                                    <div class="col-12" style="">
                                                                                        <vue-numeric-input id="child" v-model="item.kids_guests"

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
                                                                                        <span class="h3 fw-4 text-muted">Infant</span>
                                                                                    </div>
                                                                                    <div class="col-12" style="">
                                                                                        <vue-numeric-input id="infant" v-model="item.infant_guest"

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
                                                                </div>

                                                                <!-- Modal footer -->

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Past Interactions</span></div>
                                            <div class="past-i ml-4 row pb-2" v-for="(rem,index) in item.remark " v-if="index==(item.remark.length)-1">
                                                <!--                                                   {{rem,index}}-->
                                                <div class="col-6 ml-2 mt-2 mr-3 clock">
                                                    <span class=" pr-2 text-danger" ><i class="far fa-clock pr-1"></i>{{ rem['time'] | moment}}</span>
                                                </div>
                                                <div class="text-right col-5 ml-4"><img data-toggle="modal" data-target="#Modal" src="./../dashboard_resources/dropdown.png" class="hw-2"></div>
                                                <div class="col-12 ml-4 pl-2 border-left-3 remark_design">
                                                    {{rem['remark'].substring(0,40)+".."}}
                                                </div>
                                            </div>

                                        </div>
                                        <div class="container">

                                            <div class="modal" id="Modal">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">

                                                        <!-- Modal Header -->


                                                        <!-- Modal body -->
                                                        <div class="modal-body">
                                                            <button type="button" class="close f-2-5" data-dismiss="modal">&times;</button><br>
                                                            <div class="container">
                                                                <div v-for="rem in item.remark " class="h3 fw-5">
                                                                        <span class="text-success"><i class="far fa-clock mr-2 text-success"></i>{{ rem['time'] | moment}}
                                                                        |    Agent: {{rem['agent']}}</span><br>
                                                                    <span class="border-left-3 ml-2 pl-1 fw-4">{{rem['remark']}}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Modal footer -->

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Remark</span></div>
                                            <div class="col-lg-10"><span class="p-a ml-3 c-grey f-2"><i class="fa fa-pencil-square-o"></i></span>
                                                <input type="text" class="form-control pl-5"
                                                       name="remark"
                                                       placeholder="Enter Remark"
                                                       v-model="newremark"
                                                >
                                            </div>
                                            <div class="col-lg-2 text-right">
                                                <input type="button" value="Add" @click="updateRemark(newremark)" class="vue-btn btn btn-primary text-light f-1-8">
                                                <!--                                                        <i aria-hidden="true" class="fa fa-paper-plane"></i>-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row ml-5">
                                    <div class="mt-5 col-11 ml-4">
                                        <label class="container_input" v-if="!item.agent_id">
                                            <input v-if="!item.agent_id" type="checkbox" v-model="selfass" >
                                            <span class="checkmark"></span>
                                        </label>
                                        <p class="ml-5 f-1-4 mt-n3 text-muted text-bold" v-if="!item.agent_id" ><span>Self Assign</span></p>
                                    </div>
                                </div>
                                <!--                                        <input v-if="!item.agent_id" type="checkbox" v-model="selfass" style="margin-left: -38.5%"><span v-if="!item.agent_id" style="color:grey;font-weight: bold;margin-left: -38.5%">Self Assign</span>-->
                                <div class="row">
                                    <div class="col-lg-12 text-center mt-0">
                                        <!--                                            <button class="btn btn-primary text-light"><i class="fa fa-paper-plane" aria-hidden="true"></i>Submit</button>-->


                                        <vue-button-spinner
                                            :isLoading="loading"
                                            :disabled="loading"
                                            class="btn btn-primary text-light pl-4 pr-4 ml-button"
                                            style="border-radius:7px;"
                                            v-if="item.lead_status!=3"
                                        >
                                            <span  class="h2"><i class="fa fa-paper-plane mr-2"></i>Submit</span>
                                        </vue-button-spinner>
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
            <div v-if="lostreason">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close f-2-5" @click="lostreason=false">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                    </div>
                                    <div class="modal-body">
                                        <h4 class="modal-title">Lead Mark As Lost</h4>
                                        <div class="row">
                                            <div class="col-1 mt-3"> Reason:</div><div class="col-11"><input type="text" class="fw-4" :disabled="item.lead_status==3"  v-model="meta.lost.title"></div>

                                            <div class="col-1 mt-3"> Details:</div> <div class="col-11 mt-2"><input type="text" class="fw-4" :disabled="item.lead_status==3"  v-model="meta.lost.details"></div>
                                        </div>


                                        <button v-if="item.lead_status==1" class="btn btn-primary btn-sm" @click="marklost()">Save</button>
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
                            <div class="modal-dialog" style= "pointer-events: unset;max-width: 80%; height: 500px; overflow-y: scroll;overflow-x: hidden;">
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
    </section>
</template>


<script>
    // import moment from 'moment'
    // import VueMoment from 'vue-moment'
    import moment from 'moment-timezone'
    $("#sum").click(function () {

        var a_num = $("#adult").val();
        var c_num = $("#child").val();
        var inf_num=$("#infant").val();
        var total = parseInt(a_num) + parseInt(c_num)+ parseInt(inf_num);
        if(c_num==0 && inf_num==0){ total = a_num}
        if(inf_num==0){total= parseInt(a_num)+ parseInt(c_num)}
        $("#sum").val(total);

    });
    function popupfunction() {
        var x = document.getElementById("popup");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    import { mapGetters, mapActions } from 'vuex'
    import { VueTelInput } from 'vue-tel-input'
    export default {
        data() {
            return {
                html:'<img style="float: right;" src="/dashboard_resources/bunnot_pdf.png" \tonclick="Test()" width="190"><div id="snackbar"></div><div id="snackbar_red"></div> <div class="city-details-bar" style="border-radius: 0px;"><div style="background-color: #e3e3e3;width: 225px;color: black;padding: 3px;border-radius: 5px;margin: 4px 0 4px -8px;text-align: center;"><p class="city-name"><b>Quote Preview</b></p></div></div><br><!doctype html><html lang="en"><head><!-- Required meta tags --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"><link rel="stylesheet"  href="/dashboard_resources/style.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style>pre {overflow-x: auto;white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;font-family:Arial;}</style><style>\n' +
                    '                .col-md-2 {\n' +
                    '\n' +
                    '\n' +
                    '    margin-left: 25px !important;\n' +
                    '    margin-top: 20px !important;\n' +
                    '    margin-bottom: 20px !important;\n' +
                    '    border-radius: 14px;\n' +
                    '\n' +
                    '                            }\n' +
                    '    </style><title>Quote</title></head><body><div class="container-fluid"><header class="mt-2 nav-header"><div class="row"><div class="col-12 col-md-4"><div class="logo"><img src="/storage/14282/6xd3sC.jpg"></div></div><div class="col-12 col-md-1"></div><div class="col-12 col-md-6" ><div class="address" style="float: unset;width: 100% !important;"><div class="address-icon d-flex"><i class="fa fa-map-marker fa-3"></i><p>Address<br><span style="font-weight: 200;"></span> </p></div></div></div></div></header><div class="row"><div class="col-12"><div class="header-bar"><p class="mb-0"></p></div></div></div><div class="row"><div class="col-12 col-md-3"><div class="user-details"><p>Query Ref No :<span>QRY-3-4-20200707-408</span></p><p>Quoted By :<span>Visharth</span></p><p>Executive Number :<span>9557595287</span></p><p>Agency Number :<span></span></p></div></div><div class="col-12 col-md-9"><div class="row"><div class="col-12"><div class="city-details-bar"><p class="mb-0" style="text-align: center;">ltinerary Destination</p><p class="city-name" style="text-align: center;">SHIMLA (1) MANALI (1) CHANDIGARH (1) </p></div></div></div><div class="row"><div class="col-12"><div class="fare-details-bar"><ul><li><p class="mb-0">Date of Travel</p><p class="fare-bottom">07 Jul,2020</p></li><li><p class="mb-0">Number of Traveler</p><p class="fare-bottom">Adult(1) Child(0)</p></li><li><p class="mb-0">Transport Type</p><p class="fare-bottom">reeer</p></li><li><p class="mb-0">Tour Duration</p><p class="fare-bottom">3N/4D</p></li></ul></div></div></div></div></div><div class="row"><div class="col-12 col-md-3"><div class="hotel-details"><div class="top-bar"><i class="fa fa-bed pr-2"></i><span>Hotel Details</span></div><div class="hotel-addres"><i class="fa fa-map-marker pr-2"></i><span>SHIMLA</span><p class="intry-date">In -07 Jul 2020 | Out -08 Jul 2020</p></div><div class="room-details "><div class="col-md-12" style=""><div class="row"><div class="col-lg-6 col-md-12"  style="text-align: center;padding: 0px !important;font-size: 17px;"></div></div></div><br><form class="text-center"><div ><p style="width: 100%;display: inline-block;"></p></div></form></div><div class="bed-dtls d-flex"><ul><li><p>No. Of Room</p><p class="text-primary">1</p></li><li><p>Extra Bed</p><p class="text-primary">0</p></li><li><p>W/O Bed</p><p class="text-primary">0</p></li></ul></div><div class="meal"><p>Meal</p><p class="text-primary">bf</p></div></div><div class="hotel-details"><div class="top-bar"><i class="fa fa-bed pr-2"></i><span>Hotel Details</span></div><div class="hotel-addres"><i class="fa fa-map-marker pr-2"></i><span>MANALI</span><p class="intry-date">In -08 Jul 2020 | Out -09 Jul 2020</p></div><div class="room-details "><div class="col-md-12" style=""><div class="row"><div class="col-lg-6 col-md-12"  style="text-align: center;padding: 0px !important;font-size: 17px;"></div></div></div><br><form class="text-center"><div ><p style="width: 100%;display: inline-block;"></p></div></form></div><div class="bed-dtls d-flex"><ul><li><p>No. Of Room</p><p class="text-primary">1</p></li><li><p>Extra Bed</p><p class="text-primary">0</p></li><li><p>W/O Bed</p><p class="text-primary">0</p></li></ul></div><div class="meal"><p>Meal</p><p class="text-primary">bf</p></div></div><div class="hotel-details"><div class="top-bar"><i class="fa fa-bed pr-2"></i><span>Hotel Details</span></div><div class="hotel-addres"><i class="fa fa-map-marker pr-2"></i><span>CHANDIGARH</span><p class="intry-date">In -09 Jul 2020 | Out -10 Jul 2020</p></div><div class="room-details "><div class="col-md-12" style=""><div class="row"><div class="col-lg-6 col-md-12"  style="text-align: center;padding: 0px !important;font-size: 17px;"></div></div></div><br><form class="text-center"><div ><p style="width: 100%;display: inline-block;"></p></div></form></div><div class="bed-dtls d-flex"><ul><li><p>No. Of Room</p><p class="text-primary">1</p></li><li><p>Extra Bed</p><p class="text-primary">0</p></li><li><p>W/O Bed</p><p class="text-primary">0</p></li></ul></div><div class="meal"><p>Meal</p><p class="text-primary">bf</p></div></div></div><div class="col-12 col-md-9"><div class="tab-section"><div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"><div class="panel panel-default"><div class="panel-heading" role="tab" id="headingOne"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><i class="more-less fa fa-minus"></i>Day Plan</a></h4></div><div id="collapseOne" class="panel-collapse collapse show" role="tabpanel" aria-labelledby="headingOne" ><div class="panel-body"><ul class="days-plan"><li class="mt-3"><div class="day-count d-flex text-center"><div class="days">Days-1</div><div class="day-dinner"><img class="img-fluid" src="/dashboard_resources/breakfast.png"><p>BF</p></div><div class="day-launch"><img class="img-fluid" src="/dashboard_resources/lunchgrey.png"><p>L</p></div><div class="day-launch"><img class="img-fluid" src="/dashboard_resources/dinnergrey.png"><p>D</p></div></li><li class="mt-3"><div class="row"><div class="col-12 col-md-8"><div class="border days-detail p-2"><div class="days-btn"><a href="#">Visit-1</a><a href="#" style="background-color: white; color: #2553a3;">Day at Leisure</a><p class="text-secondary mb-0">07-07-2020</p></div><p></p></div></div><div class="col-12 col-md-4"><div class="days-img"><img  src="http://uat.yourplan.in/wp-content/themes/BookYourTravel/wp-content/uploads/2016/02/day-150x150.jpg" class="img-fluid"></div></div></div></li><li class="mt-3"><div class="day-count d-flex text-center"><div class="days">Days-2</div><div class="day-dinner"><img class="img-fluid" src="/dashboard_resources/breakfast.png"><p>BF</p></div><div class="day-launch"><img class="img-fluid" src="/dashboard_resources/lunchgrey.png"><p>L</p></div><div class="day-launch"><img class="img-fluid" src="/dashboard_resources/dinnergrey.png"><p>D</p></div></li><li class="mt-3"><div class="row"><div class="col-12 col-md-8"><div class="border days-detail p-2"><div class="days-btn"><a href="#">Visit-1</a><a href="#" style="background-color: white; color: #2553a3;">Day at Leisure</a><p class="text-secondary mb-0">08-07-2020</p></div><p></p></div></div><div class="col-12 col-md-4"><div class="days-img"><img  src="http://uat.yourplan.in/wp-content/themes/BookYourTravel/wp-content/uploads/2016/02/day-150x150.jpg" class="img-fluid"></div></div></div></li><li class="mt-3"><div class="row"><div class="col-12 col-md-8"><div class="border days-detail p-2"><div class="days-btn"><a href="#">Visit-2</a><a href="#" style="background-color: white; color: #2553a3;">Day at Leisure</a><p class="text-secondary mb-0">08-07-2020</p></div><p></p></div></div><div class="col-12 col-md-4"><div class="days-img"><img  src="http://uat.yourplan.in/wp-content/themes/BookYourTravel/wp-content/uploads/2016/02/day-150x150.jpg" class="img-fluid"></div></div></div></li><li class="mt-3"><div class="day-count d-flex text-center"><div class="days">Days-3</div><div class="day-dinner"><img class="img-fluid" src="/dashboard_resources/breakfast.png"><p>BF</p></div><div class="day-launch"><img class="img-fluid" src="/dashboard_resources/lunchgrey.png"><p>L</p></div><div class="day-launch"><img class="img-fluid" src="/dashboard_resources/dinnergrey.png"><p>D</p></div></li><li class="mt-3"><div class="row"><div class="col-12 col-md-8"><div class="border days-detail p-2"><div class="days-btn"><a href="#">Visit-1</a><a href="#" style="background-color: white; color: #2553a3;">Day at Leisure</a><p class="text-secondary mb-0">09-07-2020</p></div><p></p></div></div><div class="col-12 col-md-4"><div class="days-img"><img  src="http://uat.yourplan.in/wp-content/themes/BookYourTravel/wp-content/uploads/2016/02/day-150x150.jpg" class="img-fluid"></div></div></div></li><li class="mt-3"><div class="row"><div class="col-12 col-md-8"><div class="border days-detail p-2"><div class="days-btn"><a href="#">Visit-2</a><a href="#" style="background-color: white; color: #2553a3;">Day at Leisure</a><p class="text-secondary mb-0">09-07-2020</p></div><p></p></div></div><div class="col-12 col-md-4"><div class="days-img"><img  src="http://uat.yourplan.in/wp-content/themes/BookYourTravel/wp-content/uploads/2016/02/day-150x150.jpg" class="img-fluid"></div></div></div></li><li class="mt-3"><div class="day-count d-flex text-center"><div class="days">Days-4</div><div class="day-dinner"><img class="img-fluid" src="/dashboard_resources/breakfast.png"><p>BF</p></div><div class="day-launch"><img class="img-fluid" src="/dashboard_resources/lunchgrey.png"><p>L</p></div><div class="day-launch"><img class="img-fluid" src="/dashboard_resources/dinnergrey.png"><p>D</p></div></li><li class="mt-3"><div class="row"><div class="col-12 col-md-8"><div class="border days-detail p-2"><div class="days-btn"><a href="#">Visit-1</a><a href="#" style="background-color: white; color: #2553a3;">Day at Leisure</a><p class="text-secondary mb-0">10-07-2020</p></div><p></p></div></div><div class="col-12 col-md-4"><div class="days-img"><img  src="http://uat.yourplan.in/wp-content/themes/BookYourTravel/wp-content/uploads/2016/02/day-150x150.jpg" class="img-fluid"></div></div></div></li></ul></div></div></div></div></div><!-- panel-group --></div><!-- container --></div></div></div><!-- jQuery first, then Popper.js, then Bootstrap JS --></body></html>',
                // Code...
                selfass:false,
                submit:true,
                currentDate:null,
                total_trav:1,
                pop:false,
                remarkk: false,
                newremark:'',
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
                lostreason:false,
                license:{},
                cloneprevious:false,
                clonelist:{},
                localsearch:'',
                actualdata:[],
                column:(['tour_name',
                    'booking_id',
                    'driver_pickup_date_time',
                    'traveler_name',
                    'phone'])

            }
        },

        filters: {
            moment: function (value) {
                if (value) {
                    return moment.unix(value).format("MM-DD-YYYY / h:mm a")
                }
            }
        },
        computed: {
            ...mapGetters('LeadsSingle', ['item','meta', 'loading']),

            total_trav(){

                return parseInt(this.item.adult_guest) + parseInt(this.item.kids_guests) +  parseInt(this.item.infant_guest);

            }
        },
        created() {
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
            this.fetchData(this.$route.params.id)



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

            "item.lead_id": function() {
                this.$root.booking_ref_id={'booking_id':this.item.lead_id,'id':this.item.id}
            },
            "$route.params.id": function() {
                this.resetState()
                this.fetchData(this.$route.params.id)
            },
            "item.adult_guest": function() {
                this.total_trav=  Number(this.item.adult_guest)+  Number(this.item.kids_guests)+  Number(this.item.infant_guest);

            },
            "item.kids_guests": function() {
                this.total_trav=  Number(this.item.adult_guest)+  Number(this.item.kids_guests)+  Number(this.item.infant_guest);

            },
            "item.infant_guest": function() {
                this.total_trav=  Number(this.item.adult_guest)+  Number(this.item.kids_guests)+  Number(this.item.infant_guest);

            },
            "item.phone": function(newVal, oldVal) {

                if(typeof this.item.email !== "undefined" && this.item.email !== null && this.item.email.length>10 ){
                    this.get_trav();
                }
            },
            "item.email": function(newVal, oldVal) {

                if(typeof this.item.phone !== "undefined" && this.item.phone !== null && this.item.phone.length>10 ){
                    this.get_trav();
                }

            },
            "item.name": function(newVal, oldVal) {

                if((typeof this.item.phone !== "undefined" && this.item.phone !== null && this.item.phone.length>10) || (typeof this.item.email !== "undefined" && this.item.email !== null && this.item.email.length>10) ){
                    this.get_trav();
                }

            },
            "selfass": {

                handler(newval, oldVal){

                    if(newval==true){
                        console.log("if");
                        this.item.created_by=1
                        this.item.created_by_id=1

                    }
                    else {
                        console.log("else");
                        this.item.created_by=''
                        this.item.created_by_id=''
                    }


                },
                deep: true


            },

        },
        methods: {
            ...mapActions('LeadsSingle', ['fetchData', 'updateData', 'resetState', 'setLead_id', 'setLead_status', 'setPackage_type', 'setDate', 'setEmail', 'setPhone', 'setName', 'setAdult_guest', 'setScore', 'setKids_guests', 'setAgent_id', 'setAgency_id', 'setScore_new', 'setLead_feel', 'setRemark', 'setSource', 'setInfant_guest','setRemarkedit']),
            updatesearch() {
                this.setsearch(this.localsearch)
            },
            clearsearch() {
                this.localsearch=""
                this.setsearch(this.localsearch)
            },
            pdf(){


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
                            this.setName(this.traveller_array.name)
                        }


                    })
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


            clonepreviousaction(id){

                axios.get('/api/v1/queries/' + id,{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        response.data.data
                        var clone_data =_.cloneDeep(response.data.data);
                        clone_data.get_meta =_.cloneDeep({});
                        var clone_meta={}


                            clone_data.itinerary_places=JSON.parse(response.data.data.itinerary_places);
                            clone_data.tour_location=JSON.parse(response.data.data.tour_location);
                            clone_data.meals_supplement=JSON.parse(response.data.data.meals_supplement);
                            clone_data.tour_cost=JSON.parse(response.data.data.tour_cost);
                            clone_data.remarks=JSON.parse(response.data.data.remarks);

                            var meta_data = response.data.data.get_meta;



                        meta_data.forEach(function(e){

                            if(e.meta_key=='meta_infant'){

                                clone_meta.meta_infant=e.meta_value;
                            }

                            if(e.meta_key=='meta_extra_bed'){

                                clone_meta.meta_extra_bed=e.meta_value;
                            }
                            if(e.meta_key=='meta_transport'){

                                clone_meta.meta_transport=e.meta_value;
                            }
                            if(e.meta_key=='meta_source'){


                               clone_meta.meta_source=e.meta_value;
                            }
                            if(e.meta_key=='meta_flightprice'){

                              clone_meta.meta_flightprice=e.meta_value;
                            }
                            if(e.meta_key=='meta_flight'){

                               clone_meta.meta_flight=e.meta_value;
                            }
                            if(e.meta_key=='meta_welcome_mail'){

                                clone_meta.meta_welcome_mail=e.meta_value;
                            }
                            if(e.meta_key=='meta_incl_ex'){

                               clone_meta.meta_incl_ex=e.meta_value;
                            }
                            if(e.meta_key=='meta_closuer'){

                               clone_meta.meta_closuer=e.meta_value;
                            }
                            if(e.meta_key=='meta_exp_cost'){

                               clone_meta.meta_exp_cost=JSON.parse(e.meta_value);
                            }
                            if(e.meta_key=='meta_exp_costflight'){

                              clone_meta.meta_exp_costflight=JSON.parse(e.meta_value);
                            }
                            if(e.meta_key=='markup1'){

                                clone_meta.markup1=JSON.parse(e.meta_value);
                            }
                            if(e.meta_key=='markup2'){

                                clone_meta.markup2=JSON.parse(e.meta_value);
                            }
                            if(e.meta_key=='sellingprice1'){

                                clone_meta.sellingprice1=e.meta_value;
                            }
                            if(e.meta_key=='sellingprice2'){

                                clone_meta.sellingprice2=e.meta_value;
                            }
                            if(e.meta_key=='interactions'){

                                clone_meta.interactions=JSON.parse(e.meta_value);
                            }
                            if(e.meta_key=='lost'){

                                clone_meta.lost=JSON.parse(e.meta_value);
                            }
                            if(e.meta_key=='by_lead'){

                                clone_meta.by_lead=e.meta_value;
                            }
                            if(e.meta_key=='last_quote_no'){

                                clone_meta.last_quote_no=0
                            }


                              clone_meta.last_previous={'id':'', 'count': ''}

                            clone_meta.meta_executive_name=document.querySelector("meta[name='user-name']").getAttribute('content');

                            clone_meta.meta_executive_no=document.querySelector("meta[name='user-phone']").getAttribute('content');


                        });

                        clone_data.traveler_name=this.item.name
                        clone_data.phone=this.item.phone
                        clone_data.email=this.item.email
                        clone_data.no_of_adults= this.item.adult_guest
                        clone_data.no_of_children= this.item.kids_guests
                        clone_meta.meta_infant= this.item.infant_guest
                        clone_meta.meta_extra_bed=0
                        clone_data.tour_name=''
                        clone_data.driver_pickup_date_time=this.item.date
                        clone_data.total_room=1






                        this.$router.push({ name: 'queries.clone', params:{'clone_data':clone_data ,'clone_meta':clone_meta,'itiplace':clone_data.itinerary_places,'tour_loc':clone_data.tour_location,'newlead':false ,'newleadprev':true, 'lead_data':this.item ,'lead_meta':this.meta }})



                    })

            },

            marklost(){
                this.setLead_status(3);
                this.updateData()
                this.lostreason=false

            },
            updateLead_id(e) {
                this.setLead_id(e.target.value)
            },
            updateLead_status(e) {
                this.setLead_status(e.target.value)
            },
            updatePackage_type(e) {
                this.setPackage_type(e.target.value)
            },
            updateDate(e) {
                this.setDate(e.target.value)
            },
            updateEmail(e) {
                this.setEmail(e.target.value)
            },
            updatePhone(e) {
                this.setPhone(e.target.value)
            },
            updateName(e) {
                this.setName(e.target.value)
            },

            updateScore(e) {
                this.setScore(e.target.value)
            },

            updateAgent_id(e) {
                this.setAgent_id(e.target.value)
            },
            updateAgency_id(e) {
                this.setAgency_id(e.target.value)
            },
            updateScore_new(e) {
                this.setScore_new(e.target.value)
            },
            updateLead_feel(e) {
                this.setLead_feel(e.target.value)
            },
            updateRemark(e) {
                if(this.newremark!=''){
                    var any= _.cloneDeep(this.newremark);
                    this.setRemark(any)
                    this.newremark=''
                }
            },
            updateSource(e) {
                this.setSource(e.target.value)
            },
            updateAdult_guest(e) {
                this.setAdult_guest(e.target.value);
                this.total_trav= Number(this.item.adult_guest)+ Number(this.item.kids_guests)+ Number(this.item.infant_guest);
            },
            updateKids_guests(e) {
                this.setKids_guests(e.target.value);
                this.total_trav=  Number(this.item.adult_guest)+  Number(this.item.kids_guests)+  Number(this.item.infant_guest);
            },
            updateInfant_guest(e) {
                this.setInfant_guest(e.target.value);
                this.total_trav=  Number(this.item.adult_guest)+  Number(this.item.kids_guests)+  Number(this.item.infant_guest);
            },
            submitForm() {
                this.submit=false;
                let trav = new FormData();
                this.item.agent_id=document.querySelector("meta[name='user-id']").getAttribute('content');
                var re = /\S+@\S+\.\S+/;
                var  email_v= re.test(this.item.email);

                if(this.item.name && this.item.email && email_v && this.item.phone) {
                    trav.set("name", this.item.name)
                    trav.set("email", this.item.email)
                    trav.set("phone", this.item.phone)
                    trav.set("type", "lead")
                    axios.post('/api/v1/travellers', trav)
                        .then(response => {
                            console.log(response)
                            console.log(response.data.status)

                            if (response.data.status == 'error') {
                                this.submit = true;
                                alert(response.data.type);
                            } else {

                                this.updateData()
                                    .then(() => {
                                        this.$router.push({name: 'leads.index'})
                                        this.$eventHub.$emit('update-success')
                                    })
                                    .catch((error) => {
                                        this.submit = true;
                                        console.error(error)
                                    })

                            }

                        })
                        .catch(error => {
                            this.submit = true;
                            alert("error");
                        })
                }
                else {

                    alert("Provide All Contact Details");
                }


            }
        },
        components:{
            moment,VueTelInput

        }

    }
</script>


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
        vertical-align: middle;
    }
    .activedev{
        display: block;
    }
    .hidedev{
        display: none;
    }
    .dropbtn {

        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
    }
    .changecolor:hover{background-color:white;border-bottom-left-radius: 5px }
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {display:none;
        top:0px;
        right:-70px;
        position: absolute;

        min-width: 50px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .icon {
        color: darkgrey;
        text-align: center;

    }
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 70px;
    }



    .dropdown:hover .dropdown-content {display: block;}
    .sidebar{
        float: left;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        text-align: left;
        height: 100%;
        width: 20%;
        padding-bottom: 200px;
        /*margin-top: -10px;*/


    }
    .sidebar a{
        text-decoration: none;
        color:black;
        display: grid;
        text-align: left;
        padding: 10px 10px 10px 10px;
        border-collapse: solid black 1px;
    }
    .sidebar a:hover{
        background-color: #2751A4;
        padding-left: 20px;
        color: white;
        display: grid;

    }
    .sidebar li{list-style: none;}
    #align{
        text-align: left;
        margin-left:-40px; margin-right:10px;
    }
    .onhover a{color:grey; font-size: 13px;}
    .onhover a:hover{background-color: #2751A4; border-radius:20px; color: white;}
    .navpad li a{ padding-left: 70px; }
    .quantity::-webkit-inner-spin-button,
    .quantity::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .edit__img{
        position: absolute;
        right: 20px;
    }
    .past-i{
        width: 94%;
    }
    .pl-5, .px-5 {
        padding-left: 4rem!important;
    }
    p span {
        padding-right: 10px;
    }
    p:after {
        content: "";
        position: absolute;
        bottom: 12px;
        left: 122px;
        right: 0;
        width: 86.8%;
        height: 0.5em;
        border-top: 1px solid white;
        z-index: 1;
    }
    @media screen and (min-width: 1900px){
        p:after{
            width: 91%
        }
        .past-i{
            width: 95.5%;
        }
        .ml-button{
            margin-left: -3.5%;
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1300px){
        p:after{
            width:85.7%
        }
        .past-i{
            width: 93%;
        }
        .ml-button{
            margin-left: -1%;
        }
    }
</style>
<style>
    .width1{
        width: 115px !important;
    }
    a{
        color:green;
    }
    a:hover {
        text-decoration:none;
        color:green;
    }
    input.changesize{
        width:50px;
        height:50px;
    }
    img .shadow .ml-2{
        cursor: pointer;
    }
    .fix-addtask{
    position: relative;
    top: -123px;
    right: -16px;
}
</style>
