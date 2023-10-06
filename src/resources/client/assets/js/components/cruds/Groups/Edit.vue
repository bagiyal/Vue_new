<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;;font-family: Open Sans">
        <section class="content-header">
            <div class="container"  v-if="show_modal">
                <div class="modal show in" id="" style="display: block;">
                    <div class="modal-dialog" style="max-width: 750px !important;">
                        <div class="modal-content" style="height: 400px !important;overflow: auto;">
                            <div class="modal-body" >
                                <button type="button" class="close f-2" data-dismiss="modal" @click="show_modal=false"> &times;</button><br>
                                <div class="container-fluid" style="text-align: left">
                                    <h2 style="text-align: left">Read Receipts</h2>
                                    <hr>
                                    <div class="">
                                        <ul class="nav nav-tabs col-md-12" role="tablist">
                                            <li class="nav-item navme">
                                                <a class="nav-link active" style="color: #a6a7ac;" data-toggle="tab" href="#tabs-1" role="tab"  ><b>Interview</b></a>
                                            </li>
                                            <li class="nav-item navme">
                                                <a class="nav-link" style="color: #a6a7ac;" data-toggle="tab" href="#tabs-2" role="tab" ><b>Bio-Metric</b></a>
                                            </li>

                                        </ul>


                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
<!--{{member_data}}-->
                                                <table class="table" style="background-color: white;text-align: center">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Appointment Type</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Time</th>
                                                        <th scope="col">Status</th>

                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(visa,index) in visa_history_interview" :key="index">
<!--                                                            {{visa}}-->
                                                        <td  scope="row">{{index+1}}</td>
                                                        <td  scope="row">{{ visa.name}}</td>
                                                        <td  scope="row">{{ visa.type}}</td>
                                                        <td  scope="row">{{ visa.date}}</td>
                                                        <td  scope="row">{{ visa.time}}</td>

                                                        <td  scope="row"  v-if="visa.status==2 " style="font-size:15px;color:red;">Pending</td>
                                                        <td  scope="row"  v-else-if="visa.status==0" style="font-size:15px;color:blue;">Scheduled</td>
                                                        <td  scope="row"  v-else-if="visa.status==1" style="font-size:15px;color:green;">Scheduled and Read</td>


<!--                                                        <td :style=" visa.status==1 ? 'background: lightgreen;' : 'background: #ffbebe;' ">{{visa.name}}</td>-->
<!--                                                        <td :style=" visa.status==1 ? 'background: lightgreen;' : 'background: #ffbebe;' ">{{visa.type}}</td>-->
<!--                                                        <td :style=" visa.status==1 ? 'background: lightgreen;' : 'background: #ffbebe;' ">{{visa.details.date}}</td>-->
<!--                                                        <td :style=" visa.status==1 ? 'background: lightgreen;' : 'background: #ffbebe;' ">{{visa.details.time}}</td>-->
<!--                                                        <td :style=" visa.status==1 ? 'background: lightgreen;' : 'background: #ffbebe;' " v-if="visa.status==0"><i class="fa fa-clock-o" style="font-size:15px;color:red;" aria-hidden="true"></i></td>-->
<!--                                                        <td :style=" visa.status==1 ? 'background: lightgreen;' : 'background: #ffbebe;' " v-else-if="visa.status==1"><i class="fa fa-check" style="font-size:15px;color:green;" aria-hidden="true"></i></td>-->

                                                    </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                            <div class="tab-pane " id="tabs-2" role="tabpanel">

                                                <table class="table" style="background-color: white;text-align: center">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Appointment Type</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Time</th>
                                                        <th scope="col">Status</th>

                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="(visa,index) in visa_history_bio" :key="index">
                                                        <td  scope="row">{{index+1}}</td>
                                                        <td  scope="row">{{ visa.name}}</td>
                                                        <td  scope="row">{{ visa.type}}</td>
                                                        <td  scope="row">{{ visa.date}}</td>
                                                        <td  scope="row">{{ visa.time}}</td>

                                                        <td  scope="row"  v-if="visa.status==2 " style="font-size:15px;color:red;">Pending</td>
                                                        <td  scope="row"  v-else-if="visa.status==0" style="font-size:15px;color:blue;">Scheduled</td>
                                                        <td  scope="row"  v-else-if="visa.status==1" style="font-size:15px;color:green;">Scheduled and Read</td>


                                                    </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>


                                    </div>





                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!--            SNS LOGS MODAL-->
            <div class="container"  v-if="show_modal2">
                <div class="modal show in" style="display: block;">
                    <div class="modal-dialog" style="max-width: 750px !important;">

                        <div class="modal-content" style="padding: 20px;height: 400px !important;">
                            <div class="row border-bottom">
                                <div class="col-md-8 ">
                                    <h4 class="modal-title  f-2" >Group Members Mail Status</h4>


                                </div>
                                <div class="col-md-4">
                                    <button classs="f-2" type="button" class="close" data-dismiss="modal" @click="show_modal2=false">&times;</button><br>
                                </div>
                            </div>

                            <div class="modal-body" style="max-height: 600px !important;overflow: auto;">
<!--                                <div class="col-md-12">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-3 offset-9">-->
<!--                                            <div class="col-sm">-->
<!--                                                <download-excel-->
<!--                                                    class   = "btn btn-default"-->
<!--                                                    :data   = "json_data"-->
<!--                                                    :fields = "json_fields"-->
<!--                                                    worksheet = "My Worksheet"-->
<!--                                                    name    = "itinerary.xls"-->
<!--                                                >-->
<!--                                                    <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>-->
<!--                                                </download-excel>-->

<!--                                                <download-excel-->
<!--                                                    class   = "btn btn-default"-->
<!--                                                    :data   = "json_data"-->
<!--                                                    :fields = "json_fields"-->
<!--                                                    type    = "csv"-->
<!--                                                    name    = "itinerary.csv"-->
<!--                                                >-->
<!--                                                    <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="CSV"  ><br>-->
<!--                                                    <p class="extension_title">CSV</p>-->

<!--                                                </download-excel>-->
<!--                                            </div>-->

<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
                                <div class="container-fluid" style="text-align: left" v-if="sns_data.length>0">

                                    <table class="table" style="background-color: white;text-align: center">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Member Name</th>
                                            <th scope="col">Itinerary No.</th>
                                            <th scope="col">Mail Status</th>
                                            <th scope="col">Date</th>


                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(sns,index) in sns_data">
                                            <td>{{index+1}}</td>
                                            <td >{{sns.name}}</td>
                                            <td>
                                              <router-link
                                                :to="{ name: 'bookings.edit', params: { id: sns.id } }"
                                                class="btn"
                                                style="font-size: 12px;color: blue;"
                                              >
                                                {{sns.booking_id}}
                                            </router-link>
                                            </td>
                                            <td v-if="sns.status=='OPEN'" style='color:blue;'>Open</td>
                                            <td v-else-if="sns.status=='DELIVERY' || sns.status=='Delivery'" style='color:green;'>Delivered</td>
                                            <td v-else-if="sns.status=='Bounce'" style='color:red;'>Bounce</td>
                                            <td v-else-if="sns.status==null" style='color:pink;'>Sending Error</td>
                                            <td v-else-if="sns.status==''" style='color:pink;'>Sending Error</td>
                                            <td v-else style='color:pink;'>{{sns.status}}</td>
                                            <td>{{sns.timestamp}}</td>


                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="container-fluid" style="text-align: left" v-else>
                                    <h4 class="text-secondary">No Data Available</h4>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <vue-progress-bar></vue-progress-bar>
            <task-maker class="arrange_edit-add-task"></task-maker>
            <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>
            <div class="row">
                <div class="col-4"><h1>Group: {{item.booking_id}}</h1></div>
                <div class="col">
                    <div class="row float-right pr-4">

                        <!--  hotel update button-->
                        <a class="bg-white ml-2 shadow width rounded text-green pb-2 cursor" :href="member_lisT">
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <span class="f-1-7"><i class="fa fa-list" aria-hidden="true"></i>
                                        </span>
                                </div>
                                <div class="col-12 text-center">
                                    <span   class="f-1-4">Member List</span>


                                </div>
                            </div>
                        </a>


                        <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor"  @click="save_n_update('hotel_update')" v-if="hotel==true">
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <span class="f-1-7"><i class="fa fa-check" aria-hidden="true"></i>
                                        </span>
                                </div>
                                <div class="col-12 text-center">
                                    <span  v-if="show_update_button>0" class="f-1-4">Update</span>
                                    <span  v-else class="f-1-4">Save</span>

                                </div>
                            </div>
                        </div>

                        <!--  day plan update button-->
                        <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor"  @click="save_n_update('day_plan_update')" v-if="day==true">
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <span class="f-1-7"><i class="fa fa-check" aria-hidden="true"></i>
                                        </span>
                                </div>
                                <div class="col-12 text-center">
                                    <span  v-if="show_update_button>0" class="f-1-4">Update</span>
                                    <span  v-else class="f-1-4">Save</span>

                                </div>
                            </div>
                        </div>

                        <!--                        driver update button-->
                        <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor" @click="save_n_update('driver_update')" v-if="exe==true">
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <span class="f-1-7"><i class="fa fa-check" aria-hidden="true"></i>
                                        </span>
                                </div>
                                <div class="col-12 text-center">
                                    <span  v-if="show_update_button>0" class="f-1-4">Update</span>
                                    <span  v-else class="f-1-4">Save</span>
                                </div>
                            </div>
                        </div>
                        <!--update button-->
                        <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor"  @click="save_n_update('save_update')" v-if="hotel==false && day==false && exe==false">
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <span class="f-1-7"><i class="fa fa-check" aria-hidden="true"></i>
                                        </span>
                                </div>
                                <div class="col-12 text-center">
                                    <span  v-if="show_update_button>0" class="f-1-4">Update</span>
                                    <span  v-else class="f-1-4">Save</span>
                                </div>
                            </div>
                        </div>



                        <div  class="bg-white ml-2 shadow width rounded pb-2 cursor"  @click="update_status">
                            <div class="row">
                                <div class="col-12 text-center mt-3 mb-n2">
                                    <span class="f-2 text-muted"><i class="fas fa-envelope"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown mt-n1" id="dropdown1">
                                    <span class="f-1-4 text-dark">Delivery</span>

                                </div>
                            </div>
                        </div>

<!--                        <div class="bg-white ml-2 shadow width rounded pb-2" v-if="mail">-->
<!--                            <mail-tags />-->
<!--                        </div>-->

                        <div class="bg-white ml-2 shadow width rounded color_sky pb-2 cursor float-right"  >
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
                                            <a class="color_sky" href="#" @click="downloadgroupcsv('/csv/populated_member_sheet.xlsx','xlsx')" >Id Based Member Sheet</a>
                                        </li>

                                        <li  class="divider"></li>
                                        <li >

                                            <a class="color_sky" href="#" @click="downloadgroupcsv('/csv/exhibitor_demo.xlsx','xlsx')">NON Member Sample File</a>
                                        </li>
                                        <li  class="divider"></li>
                                        <li >

                                            <a class="color_sky" href="#" @click="downloadgroupcsv('/csv/tour_support.xlsx','xlsx')">Tour Support Sample File</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="bg-white ml-2 shadow width rounded color_orange pb-2 cursor float-right">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-paper-plane"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown" id="dropdown3">
                                    <span class="f-1-4" data-toggle="dropdown" @click="remove_class(3)">Mail</span>
                                    <span class="dropdown-toggle f-1-7 color_orange " data-toggle="dropdown" @click="remove_class(3)"></span>

                                    <ul class="dropdown-menu f-1-4 p-2 mt-3 border-0" style="position: absolute; transform: translate3d(-110px, 25px, 0px) !important; top: 0px; left: 0px; will-change: transform;" x-placement="bottom-start">


                                        <li >

                                            <a class="color_orange" href="#" @click="csvmodal=true">Send Registration Mail</a>
                                        </li>

                                        <li  class="divider"></li>

                                        <li>
                                            <a class="color_orange" href="#" @click="showModalBeforeCallingFunction('send_mail-1')">Send Confirmation Mail</a>
                                        </li>
                                        <li  class="divider"></li>
                                        <li>
                                            <a class="color_orange" href="#" @click="showModalBeforeCallingFunction('send_mail-3')">Send Welcome Mail</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>


<!--                        <div class="bg-white ml-2 shadow width rounded color_orange pb-2 cursor float-right" @click="send_mail">-->
<!--                            <div class="row">-->
<!--                                <div class="col-12 mt-3 mb-n2 text-center">-->
<!--                                    <span class="f-2"><i class="fa fa-paper-plane"></i></span>-->
<!--                                </div>-->
<!--                                <div class="col-12 text-center dropdown">-->
<!--                                    <span class="f-1-4">Members Mail</span>-->

<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

                        <div   class="bg-white ml-2 shadow width rounded text-primary pb-2 cursor float-right" @click="membermodel=true">
                                                        <div class="row">
                                                            <div class="col-12 mt-3 mb-n2 text-center">
                                                                <span class="f-2"><i class="fa  fa-handshake-o"></i></span>
                                                            </div>
                                                            <div class="col-12 text-center dropdown">
                                                                <span class="f-1-4">Member Update</span>

                                                            </div>
                                                        </div>
                                                    </div>

                        <div   class="bg-white ml-2 shadow width rounded text-secondary pb-2 cursor float-right" @click="show_modal=true">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-file-text" aria-hidden="true"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">Read Receipts</span>

                                </div>
                            </div>
                        </div>

                        <div class="bg-white ml-2 shadow width rounded text-muted pb-2 cursor" @click="feedback_model=true">
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <span class="f-1-7"><img height="32px" width="30px" src="./../dashboard_resources/querylistdown.png"></span>
                                </div>
                                <div class="col-12 text-center">
                                    <span class="f-1-4">FeedBack</span>
                                </div>
                            </div>
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
                                                                :before-finish= "push_router(1)"
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

                        <div v-if="membermodel">
                            <transition name="modal">
                                <div class="modal-mask">
                                    <div class="modal-wrapper">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" @click="membermodel=false">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>

                                                </div>
                                                <div class="modal-body">
                                                    <h2 class="modal-title">Select Fields For Members Update</h2>
                                                    <div class="row" style="padding: 20px">


                                                            <!--                                                                insurance-->

                                                            <div class="col-md-4">
                                                                <h3 ><b>Summary</b></h3>
                                                                <div class="row" >

                                                                        <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                            <input type="checkbox" v-model="updatemembers_fields.driverpickuptime"  >
                                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                            Driver Pickup Time
                                                                        </label>
                                                                        <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                            <input type="checkbox" v-model="updatemembers_fields.feedback"  >
                                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                            Feedback Questions
                                                                        </label>
                                                                        <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                            <input type="checkbox" v-model="updatemembers_fields.exhi"  >
                                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                            Exhibitors
                                                                        </label>
                                                                        <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                            <input type="checkbox" v-model="updatemembers_fields.support"  >
                                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                            Tour Support
                                                                        </label>


                                                                </div>
<!--                                                                <div class="row" >-->

<!--                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">-->
<!--                                                                        <input type="checkbox" v-model="updatemembers_fields.tourcost"  >-->
<!--                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>-->
<!--                                                                       Tour Cost-->
<!--                                                                    </label>-->

<!--                                                                </div>-->

                                                            </div>
                                                            <div class="col-md-4">
                                                                <h3 ><b>Single Docs</b></h3>

                                                                <div class="row" >

<!--                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">-->
<!--                                                                        <input type="checkbox" v-model="updatemembers_fields.visa"  >-->
<!--                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>-->
<!--                                                                        Visa-->
<!--                                                                    </label>-->

                                                                </div>
                                                                <div class="row" >

                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                        <input type="checkbox" v-model="updatemembers_fields.insurance"  >
                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                        Insurance
                                                                    </label>

                                                                </div>
<!--                                                                <div class="row" >-->

<!--                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">-->
<!--                                                                        <input type="checkbox" v-model="updatemembers_fields.passport"  >-->
<!--                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>-->
<!--                                                                        Passport-->
<!--                                                                    </label>-->

<!--                                                                </div>-->
<!--                                                                <div class="row" >-->

<!--                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">-->
<!--                                                                        <input type="checkbox" v-model="updatemembers_fields.photoid"  >-->
<!--                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>-->
<!--                                                                        Photo ID-->
<!--                                                                    </label>-->

<!--                                                                </div>-->
                                                                <div class="row" >

                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                        <input type="checkbox" v-model="updatemembers_fields.others"  >
                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                        Others
                                                                    </label>

                                                                </div>
                                                                <div class="row" >

                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                        <input type="checkbox" v-model="updatemembers_fields.servicevouc"  >
                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                        Service Voucher
                                                                    </label>

                                                                </div>
                                                                <div class="row" >

                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                        <input type="checkbox" v-model="updatemembers_fields.flight"  >
                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                        Flight Details
                                                                    </label>

                                                                </div>


                                                            </div>
                                                            <div class="col-md-4">
                                                                <h3 ><b>Accomodation</b></h3>

                                                                <div class="row" >

                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                        <input type="checkbox" v-model="updatemembers_fields.hotels"  >
                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                        Hotels
                                                                    </label>

                                                                </div>
                                                                <div class="row" >

                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                        <input type="checkbox" v-model="updatemembers_fields.dayplan"  >
                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                        Day Plans
                                                                    </label>

                                                                </div>
                                                                <h3 ><b>Misc.</b></h3>
                                                                <div class="row" >

                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                        <input type="checkbox" v-model="updatemembers_fields.mail"  >
                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                        Mail/Sms
                                                                    </label>

                                                                </div>
<!--                                                                <div class="row" >-->

<!--                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">-->
<!--                                                                        <input type="checkbox" v-model="updatemembers_fields.contacts"  >-->
<!--                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>-->
<!--                                                                        Handler-->
<!--                                                                    </label>-->

<!--                                                                </div>-->

                                                                <div class="row" >

                                                                    <label class="container_input" style="font-size: 14px;padding-left:24px ">
                                                                        <input type="checkbox" v-model="updatemembers_fields.reqdocs"  >
                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                        Request Documents
                                                                    </label>

                                                                </div>
                                                            </div>








                                                    </div>
                                                    <div style="text-align: center">
                                                        <button @click="showModalBeforeCallingFunction('updateallmembers')" class="mt-5 f-2 btn text-light spec-padding button_color">Update Members</button>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>



                    </div>

                    <!--<button class="text-white"  style="outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(34, 80, 125);font-size: 14px;font-weight: 400;padding: 6px 12px;border-radius: 4px;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;" @click="send_mail" >Send Customer Mail</button>-->
                </div>
            </div>

        </section>

        <section class="content activedev">
            <div class="row">
                <div class="col-lg-2">
                    <ul class="sidenav border-right border-light">
                        <a href="#"  :class="summ==true?'sidenavactive':''"> <li @click="changeview('summ')"> Summary</li></a>
                        <a href="#" :class="hotel==true?'sidenavactive':''"><li  @click="changeview('hotel')">Hotels</li></a>
                        <a href="#" :class="day==true?'sidenavactive':''"> <li @click="changeview('day')">Day Plan</li></a>
                        <a href="#" :class="mail==true?'sidenavactive':''"><li @click="changeview('mail')" >Mail Format</li></a>
                        <a href="#" :class="app==true?'sidenavactive':''"><li @click="changeview('app')" >Personalise App</li></a>
                        <a href="#" :class="groupactive==true?'sidenavactive':''"> <li @click="changeview('groupactive')" >Group Activation</li></a>
                        <a href="#" :class="createlist==true?'sidenavactive':''"><li  @click="changeview('createlist')">Non Member List</li></a>
                        <a href="#" :class="embed==true?'sidenavactive':''"><li @click="changeview('embed')">Embed Button</li></a>
                        <a href="#" :class="inventory==true?'sidenavactive':''"><li @click="changeview('inventory')">Inventory</li></a>
                        <a href="#" :class="up==true?'sidenavactive':''"><li @click="changeview('up')">Upload</li></a>
                        <a href="#" :class="visa==true?'sidenavactive':''"><li @click="changeview('visa')">Visa Processing</li></a>
<!--                        <a href="#" :class="live==true?'sidenavactive':''"><li @click="changeview('live')">Live Expense Tracking</li></a>-->
                        <a href="#" :class="tmlist==true?'sidenavactive':''"><li  @click="changeview('tmlist')">Tour Manager List</li></a>
                        <a href="#" v-if="feedback_response.length>0" :class="feedback==true?'sidenavactive':''"><li @click="changeview('feedback')">Feedback</li></a>
<!--                        <a href="#" :class="intraction==true?'sidenavactive':''"><li @click="changeview('intraction')">Interaction History</li></a>-->
                        <a href="#" :class="costing==true?'sidenavactive':''"><li @click="changeview('costing')">Cost</li></a>
                        <a href="#" :class="polling==true?'sidenavactive':''" v-if="pollData.length>0 || opt_in.length>0"><li @click="changeview('polling') ">Poll Reponse</li></a>
                    </ul>
                </div>
                <div class="col-lg-10">
                                            <!--Summary-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[summ ? 'activedev' : 'hidedev' ]" class="query-content">

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
                                            :config="$root.dpconfigDatetime"
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
                                    <div class="col-4 text-center f-1-6" v-if="item.group_logo===null || item.group_logo===''">
                                        <p></p>
                                        <label class="file_hidden  mt-n2 f-1-6">
                                            Choose File
                                            <input type="file" size="20"  @change="updatelogo($event,'group_logo')">
                                        </label>
                                    </div></div>
                                <div class="col-4" v-if="item.group_logo!==null && item.group_logo!==''">
                                    <i style="float: right" class="fa fa-times" aria-hidden="true" v-if="item.group_logo!==null" @click="item.group_logo=''"></i>

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
                                        <vue-tel-input v-model="item.handler_no" v-bind="bindProps" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone" @input="updateHandler_no"></vue-tel-input>
                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                    </div>


                                </div>
<!--                                <div class="col-12 ml-1 mt-5"> Tour Manager Login Code : {{login_code}}</div>-->

                                <div class="row mt-3">
                                                                        <div class="col-12"><p class="fw-4 h2 text-muted">Tour Manager Login Code </p></div>

                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 mt-n2">
                                           <input type="text"  :value="login_code"  disabled class="form-control">
<!--                                                                                    <img src="./../dashboard_resources/edit.png" class="pa-img hw-i">-->
                                        </div>
                                    </div>
                                </div>


                                </div>
                                <!-- mantraData only for tc/sotc   -->
                                <div class="row mt-3" v-if="mantraData" v-for="(value,key, index) in mantraData" :key="index">

                                  <div class="col-12" ><p class="fw-4 h2 text-muted">{{key}}</p></div>
                                  <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 mt-n2">
                                           <input type="text"  :value="value"  disabled class="form-control">
<!--                                                                                    <img src="./../dashboard_resources/edit.png" class="pa-img hw-i">-->
                                        </div>
                                    </div>
                                </div>




                                </div>


<!--                                <div class="row mt-3">-->
<!--                                    <div class="col-12"><p class="fw-4 h2 text-muted">Tour Manager Name</p></div>-->

<!--                                    <div class="col-12">-->
<!--                                        <div class="row">-->
<!--                                            <div class="col-12 mt-n2">-->
<!--                                                <input type="text"  :value="meta.meta_driver_name" @change="updatemeta_driver_name" class="form-control">-->
<!--                                                <img src="./../dashboard_resources/edit.png" class="pa-img hw-i"></div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="row mt-3">-->
<!--                                <div class="col-12"><p class="fw-4 h2 text-muted">Tour Manager no</p></div>-->


<!--                                    <div  class="col-12 input-group ml-4">-->
<!--                                        <span class="input-group-prepend"><i class="fas fa-phone-alt input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>-->
<!--                                        <vue-tel-input  v-model="meta.meta_driver_no" v-bind="bindProps" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone" @input="updatemeta_driver_no"></vue-tel-input>-->
<!--                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>-->
<!--                                    </div>-->


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
                    <div :style="role=='visa'? 'pointer-events: none;':''"  :class="[hotel ? 'activedev' : 'hidedev' ]" class="f-2 text-center query-content" v-if="hotel" >

                        <hotel-component :day="day" @refresh="refeshhotel"  :location="item.tour_location"  :hotels="hotels"  @addplace="addplace" :tour_location="item.tour_location" @showday="changeview('day')" @fetch_new_hotel="update_hotel()" @delete="remove"></hotel-component>

                    </div>

                    <!--                    Day Plan-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[day ? 'activedev' : 'hidedev' ]" class="query-content f-2" v-if="day">

                        <dayplan-component  :group_id="item.id" :license="license" :itiplaces="item.itinerary_places"  :datestart="item.driver_pick_up_time"  :place="places.places_city_id"  :tour_location="item.tour_location" :meal="item.meals_supplement" @addplace="addplace"  @delete="remove" @showtrav="changeview('mail')" :button_text="button_text"></dayplan-component>

                    </div>

                    <!--                    mail format-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[mail ? 'activedev' : 'hidedev' ]" class="container" style="height: 100%">
                        <div class="row">
                            <div class="col-12">
                                <form-wizard @on-complete="changeview('app')" color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Personalise App">


                                    <tab-content title="Welcome Mail" icon="fa fa-check">


                                        <fieldset>
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col"><span class="f-2">Welcome Mail :</span></div>
                                                    <div class="col text-right">

                                                            <button class="btn btn-success cursor" style="" @click="showMailPreview('welcome')">
                                                                <i class="fa fa-eye"></i>
                                                                Preview
                                                            </button>


                                                    </div>
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
                                                    <div class="col text-right">

                                                        <button class="btn btn-success cursor" style="" @click="showMailPreview('registration')">
                                                            <i class="fa fa-eye"></i>
                                                            Preview
                                                        </button>


                                                    </div>
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

                                    <tab-content title="Confirmation Mail" icon="fa fa-check">
                                        <fieldset>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-9"><span class="f-2">Confirmation Mail :</span></div>
                                                    <div class="col text-right">

                                                        <button class="btn btn-success cursor" style="" @click="showMailPreview('confirmation')">
                                                            <i class="fa fa-eye"></i>
                                                            Preview
                                                        </button>


                                                    </div>
                                                    <div class="col-12">
                                                        <vue-ckeditor
                                                            :value="meta.meta_confirmation_mail"
                                                            @input="updatemeta_confirmation_mail"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </tab-content>

                                    <tab-content title="Collection Completed Mail" icon="fa fa-check">
                                        <fieldset>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col"><span class="f-2">Documents Collection Completed Mail :</span></div>
                                                    <div class="col text-right">

                                                        <button class="btn btn-success cursor" style="" @click="showMailPreview('collection')">
                                                            <i class="fa fa-eye"></i>
                                                            Preview
                                                        </button>


                                                    </div>
                                                    <div class="col-12">
                                                        <vue-ckeditor
                                                            :value="meta.meta_doc_completion_mail"
                                                            @input="updatemeta_doc_completion_mail"
                                                        /></div>

                                                </div>
                                            </div>
                                        </fieldset>
                                    </tab-content>
                                </form-wizard>
                            </div>
                        </div>
                    </div>

                    <!--                    Personalise App-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[app ? 'activedev' : 'hidedev' ]" class="container pl-5">
                        <personalise-app
                            v-if="app"
                            :logo="item.group_logo?item.group_logo:agency_logo"
                            :bgimage="meta.meta_group_bg_image!=''? meta.meta_group_bg_image : '/images/staticHome.png'"
                            :dynamicColor="meta.meta_group_bg_color"
                            @coloradd="updateColor"
                            @dynamicBg="uploadbg"
                        />

                        <div>
                            <button @click="changeview('groupactive')" class="button-css">Group Activation</button></div>
                    </div>

                    <!--                    Group Activation-->
                    <div :style="role=='visa'? 'pointer-events: none;':''"  :class="[groupactive ? 'activedev' : 'hidedev' ]" class="query-content">

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

<!--                                                        <div v-for="(name,index) in meta.meta_doc_req " >-->

<!--                                                            <div class="panel panel-default" style="margin-bottom: unset !important">-->
<!--                                                            <div style="padding: 5px;font-size: 15px">{{name}} <i style="float: right;padding: 2px;font-size:-->
<!--                                                            18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                        </div>-->
                                                    <draggable  v-model="meta.meta_doc_req" group="people" @start="drag=true" @end="drag=false">
                                                        <div v-for="(name,index) in meta.meta_doc_req " >
                                                            <i class="col-md-1 fa fa-arrow-left" aria-hidden="true" @click="doc_req_list.push(meta.meta_doc_req[index]), meta.meta_doc_req.splice([index],1)" ></i>
                                                            <div class="col-md-11 panel panel-default" style="margin-bottom: unset !important">
                                                                <div style="padding: 5px;font-size: 15px">{{name}} <i style="float: right;padding: 2px;font-size: 18px;"
                                                                 class="fa fa-arrows-alt" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </draggable>

                                                    </div></div>
                                        </div>
                                    </fieldset>
                                </tab-content>

                                <tab-content title="Pre-Populated Fields" icon="fa fa-check">
                                    <fieldset>
                                        <div class="container-fluid">


                                            <button class="accordiona" @click="accordion5=!accordion5"><i class="fa fa-info-circle" aria-hidden="true"></i>
                                                <b class="f-1-8">How it works?</b>


                                                <i class="fa fa-times" aria-hidden="true" v-if="accordion2" style="float: right"></i>
                                                <i class="fa fa-angle-down" aria-hidden="true" v-else style="float: right"></i>

                                            </button>
                                            <div class="panela" v-if="accordion5">
                                    <span class="f-1-6">
                                        <p>
                                            This module will be used if you want to prepopulate data on the form mapped against any unique key ( Dealership/Employee ID/Agency ID etc). Steps to follow to setup this module is as follows:
                                        </p>
                                        <p>
                                            - Enter the question whose response will be the unique key
                                        </p>
                                        <p>
                                            - Download the sample file and master end user data to be prepopulated on the form
                                        </p>
                                        <p>
                                            - Column 1 will be used to define the unique key.
                                        </p>
                                        <p>
                                            - Replace 'row 2' with the field names and fill corresponding data 'row 3' onwards ( refer sample file for clarity)
                                        </p>
                                    </span>
                                            </div>

                                            <div class="container mt-3">
                                                <pre-populated-fields
                                                    v-if="groupactive"
                                                    :id="item.id"
                                                    :questions="meta.pre_populated_ques"
                                                    @update="updatePopulatedFields"
                                                    @download="downloadgroupcsv('/csv/Pre-Populated-Sample-File.xlsx','xlsx')"
                                                />
                                            </div>


                                        </div>
                                    </fieldset>
                                </tab-content>

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
                                            <div class="col-4 text-center f-1-2" >
                                                <p>Choose Excel File</p>
                                                <label class="file_hidden mt-n2">
                                                    Approved Member Sheet
                                                    <input type="file" size="20"  @change="uploadcsvregistrationpre($event)" accept=".xls,.xlsx">
                                                </label>
                                            </div>
                                            <div class="col-4 text-center f-1-2" >
                                                <p>Choose Excel File</p>
                                                <label class="file_hidden mt-n2">
                                                    Regular Member Sheet
                                                    <input type="file" size="20"  @change="uploadcsvregistration($event)" accept=".xls,.xlsx">
                                                </label>
                                            </div>
                                            <div class="col-4 text-center f-1-2" >
                                                <p>Choose Excel File</p>
                                                <label class="file_hidden mt-n2">
                                                    Id Based Member Sheet
                                                    <input type="file" size="20"  @change="uploadauthcodeExcel($event)" accept=".xls,.xlsx">
                                                </label>
                                            </div>
                                            <input type="hidden" id="jsonData" class="col-md-12">
                                            <div class="col-md-12 text-center">
                                                <button v-if="csv_active_option==1 && !prog" class="btn btn-lg btn-success" id="proceed_button" style="visibility: hidden;" @click="upload_confirm_all_with_reg">Click To Proceed</button>
                                                <button v-if="csv_active_option==2 && !prog" class="btn btn-lg btn-success" id="proceed_button2" style="visibility: hidden;" @click="upload_confirm_all_with_reg_pre">Click To Proceed</button>
                                                <button v-if="csv_active_option==5 && !prog" class="btn btn-lg btn-success" id="proceed_button5" style="visibility: hidden;" @click="varify_excel_file_reg">Click To Verify</button>
                                                <button v-if="csv_active_option==6 && !prog" class="btn btn-lg btn-success" id="proceed_button6" style="visibility: hidden;" @click="varify_excel_file_pre">Click To Verify</button>
                                                <button v-if="csv_active_option==7 && !prog" class="btn btn-lg btn-success" id="proceed_button7" style="visibility: hidden;" @click="verify_excel_populated">Click To Verify</button>
                                                <button v-if="csv_active_option==8 && !prog" class="btn btn-lg btn-success" id="proceed_button8" style="visibility: hidden;" @click="upload_confirm_all">Click To Proceed</button>


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

                                                </div>
                                            </div>
                                            <div class="col-12 text-center f-1-2">
                                                <h2>
                                                    History
                                                </h2>


                                                <SheetsHistory :data="excel_uploaded_members" />

                                        </div>
                                        </div>
                                    </fieldset>
                                </tab-content>
                                <tab-content title="Date Inventory" icon="fa fa-check">
                                    <fieldset>
                                        <button class="accordiona" @click="accordion4=!accordion4"><i class="fa fa-info-circle" aria-hidden="true"></i>
                                            <b class="f-1-8">How it works?</b>


                                            <i class="fa fa-times" aria-hidden="true" v-if="accordion4" style="float: right"></i>
                                            <i class="fa fa-angle-down" aria-hidden="true" v-else style="float: right"></i>

                                        </button>
                                        <div class="panela" v-if="accordion4">
                                    <span class="f-1-6">
                                        <p>
                                            NB : Date wise inventory management module lets you allot seats for predefined dates and hubs.
                                                To use this feature, please follow the below steps:
                                        </p>
                                        <ul>
                                            <li>For each travel hub - pick all possible dates and define ceiling for seat allotments for those dates.</li>
                                            <li>Save selection and pick the relevant form for document collection.</li>
                                            <li>Send form to collect responses against the dates.</li>
                                            <li>You can check live status of seats against dates below.</li>
                                            <li>Once allotments are completed, click on "Split Group" to create clone groups with all passengers sorted by dates.</li>
                                        </ul>


                                    </span>
                                        </div>
                                        <div  class="container-fluid">
                                            <b class="mb-3">Hub wise inventory management</b>



                                            <div class="row mt-3">

                                                <div class="container-fluid bg-white  p-3" v-if="meta.hub_master.file=='' && meta.travel_Hubs.length==0">
                                                <div class="col-md-12">

                                                        <div class="row mt-3">

                                                            <div class="col-4">

                                                                <label class="file_hidden mt-n2 dwnl-btn text-center" style="width: 88% !important;" v-if="meta.hub_master.file==''">
                                                                    Upload Master Data File
                                                                    <input
                                                                        type="file"
                                                                        size="20"
                                                                        @change="uploadHubExcel($event)"
                                                                        accept=".xls,.xlsx"
                                                                    />
                                                                </label>

                                                            </div>
                                                            <div class="col-4">
                                                                <a
                                                                    href="/csv/Master-Hub-List.xlsx"


                                                                    class="upload_file"
                                                                    title="click to download excel"
                                                                    download
                                                                >
                                                                    Download Sample File
                                                                </a>

                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>

                                                <div class="col-md-12 mt-2">
                                                    <div style="width:100%;padding:2rem;position:relative">
                                                        <div class="">
                                                            <button  style="position: absolute;right:2rem;top: 8px;font-size: 16px;" v-if="allHubArray.length>0" class="btn btn-primary" @click="add_hub=true">Add New Hub</button>

                                                            <div v-for="(section, index) in allHubArray" :key="index"  :id="'hub'+(index+1)" style="margin-top:4rem;">
                                                                <div class="card ">
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="col-md-6">


                                                                                <label>Hub Name</label><br>
                                                                                <span style="display:flex;">

                                                                                    <input
                                                                                        type="text"
                                                                                        class="form-control text-muted"
                                                                                        :disabled="true"
                                                                                          v-model="section.Hub"
                                                                                        style="font-size: 16px;font-weight: 600;width:48%;margin-bottom: 2rem;"

                                                                                    >


                                                                                      <button  class="btn btn-primary" style="font-size: 14px;margin-left: 1rem;height: 33px;" @click=addMoreDatesOfHub(index) >Add More Dates</button>

                                                                                </span>

                                                                            </div>
                                                                            <div class="col-md-6">

                                                                                <i @click="deleteSection(index,section.Hub)" title="Delete" aria-hidden="true" class="fa fa-trash f-2-0" style="font-size: 20px;float:right;margin-top:1rem;"></i>


                                                                            </div>

                                                                            <span v-for="(dateSec,indx) in allHubArray[index].dates" :key="indx" style="width:100%">
                                                                                 <div class="col-md-6">
                                                                                <label>Select Date</label><br>
                                                                                <date-picker
                                                                                    :disabled="dateSec.flag"
                                                                                    v-model="dateSec.date"
                                                                                    :config="$root.dpconfigDate"
                                                                                    name="driver_pick_up_time"
                                                                                    class=" summary-in-w"
                                                                                    :style="splitGroup == false && dateSec.total > dateSec.used ?'width:100% !important ;background:#fe58583b;':'width:100% !important '"


                                                                                >
                                                                                </date-picker>

                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <label>Seats Available</label>&nbsp<i  title="Total Passanger Edit" @click="EditTotalPassanger(index,indx)" style="font-size:23px;" aria-hidden="true" class="fa fa-pencil-square-o  button_style"></i><br>
                                                                                <div style="display: flex">
                                                                                    <input :disabled="dateSec.totalEdit"  :ref="`passengerInput_${index}_${indx}`"  v-model="dateSec.total" class="form-control" placeholder="Enter" style="width:90% !important"  :min="section.used" >

                                                                                    <button :disabled="dateSec.used > 0" class="btn btn-danger" style="font-size: 14px;margin-left: 1rem;" @click=deleteDate(index,indx) >delete</button></div>



                                                                                <span style="font-weight: 600;font-size: 14px;" v-if="dateSec.total != ''"><span style="color:red;font-weight: 600;font-size: 14px;">Booked Seats:-</span> {{dateSec.used}}/{{dateSec.total}} </span>&nbsp &nbsp
                                                                                 <span v-if="dateSec.total != ''" style="font-weight: 600;font-size: 14px;"><span style="color:red;font-weight: 600;font-size: 14px; ">Status:-</span><span v-if="dateSec.total == dateSec.used" style="color:blue">Fully Booked</span><span v-if="dateSec.total > dateSec.used" style="color:green">Open</span> </span>
                                                                            </div>
                                                                            </span>




                                                                        </div>
                                                                        <button :disabled="allHubArray[index].dates.length<1" class="btn btn-primary" @click="saveHub(section.Hub,index)" style="font-size: 14px;float:right;margin-top:1rem;">SAVE</button>



                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div style="width:100%;text-align: center" v-if=" allHubArray.length>0">

                                                                <button  class="btn btn-primary"  @click="SplitGroup" style="font-size: 21px;margin-top: 1rem;width: 158px;">Split Group</button>
                                                                <!--                                                                <button :disabled="creathub == false"  class="btn btn-primary" @click="save_n_update('save_update')" style="font-size: 14px;margin-top:1rem;width:100px">Save</button>-->


                                                            </div>


                                                        </div>



                                                    </div>


                                                </div>
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

                    <!--                    TM List-->
                    <div :class="[tmlist ? 'activedev' : 'hidedev' ]" class="query-content mb-5 mt-3 mr-5 ml-3">
                        <div class="row">


                            <div class="col-12 ml-1 mt-5"> Tour Manager Login Code : {{login_code}}</div>
                            <div class="col-10 ml-1 mt-2"> Tour Manager List
                            <button class="btn btn-success float-right f-1-4"  @click="addManager" ><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Manager</button>
                            </div>

                            <table class="table mt-5 " style="background-color: white;text-align: center;width: 90%">
                                <thead>
                                <tr class="f-1-6">
                                    <th scope="col">#</th>
                                    <th scope="col" class="">Name</th>
                                    <th scope="col" class="">Number</th>
                                    <th scope="col" class="">Email</th>
                                    <th scope="col" class="">Hub</th>
                                    <th scope="col" class="">Status</th>
                                    <th scope="col" class="">Live Balance</th>
                                    <th scope="col" class="">Submission Status</th>
                                    <th scope="col" class="">Actions</th>



                                </tr>
                                </thead>
                                <tbody class="f-1-4">
                                <tr v-for="(manager,index) in this.manager_data">
                                    <td>{{index+1}}</td>
                                    <td v-if="manager.status" class="cursor" @click="getTransData(manager.id)">{{manager.name}}</td>
                                    <td v-else style="width:150px !important;">
                                        <v-select :clearable="false"
                                                  name="manager"
                                                  label="name"
                                                  :options="tm_data_replica"
                                                  @input="UpdateManager($event,index)"
                                                  placeholder="Select Tour Manager"
                                                  style="background:#fff;"
                                        />
                                    </td>
                                    <td >{{manager.number}}</td>
                                    <td>{{manager.email}}</td>
                                    <td>{{manager.hub}}</td>
                                    <td ><i class="fa fa-circle text-success" aria-hidden="true" v-if="manager.hub!=''"></i></td>
                                    <td v-if="(manager.bal!='' || Object.keys(manager.bal).length>0) " class="text-primary cursor" @click="get_live_bal(manager.id,index)">Check Balance <i class="fa fa-refresh text-success cursor" aria-hidden="true" @click="get_live_bal(manager.id,index)"></i></td>
                                    <td v-else class="text-secondary " >
                                        <p v-if="manager.updated" >Check Balance
                                            <i class="fa fa-refresh text-success cursor" aria-hidden="true" @click="get_live_bal(manager.id,index)"></i>
                                        </p>
                                    </td>
                                    <td >
                                        <p v-if="manager.submission_status!=''">{{manager.submission_status}}</p>
                                        <p v-else @click="submission_status(manager.id,index)">
                                            Check Status <i class="fa fa-refresh text-success cursor" aria-hidden="true" @click="submission_status(manager.id,index)"></i>
                                        </p>
                                    </td>
                                    <td>
                                        <i class="fa fa-trash cursor" aria-hidden="true" v-if="manager.bal=='' && manager.updated==false " @click="deleteManager(manager.id,index,manager.updated)"></i>
                                        <i class="fa fa-file-text cursor" @click="getTransData(manager.id)" alt="Get Transactions" v-else title="Get Transactions" aria-hidden="true"></i>


                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <pagination :records="manager_data.length" v-model="page" :per-page="perPage" @paginate="callback">
                            </pagination>



                        </div>
                        <button  v-if="this.meta.managers_data.length>0" class="button-css" @click="balance_modal=true" style="left: 75%;">Add Balance</button>
                        <button v-if="feedback_response.length>0" @click="changeview('feedback')" class="button-css">Feedback</button>
                        <button v-else @click="submitForm0" class="button-css">Save & Exit</button>
                    </div>

                    <!--                    Non Member List-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[createlist ? 'activedev' : 'hidedev' ]" class="query-content mb-5 mt-3 mr-5 ml-3">
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
                                            <div class="col-12 text-center f-1-2 " >
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

                                <h3 class="m_t1" style="margin-bottom: 15px;">Choose Excel File</h3>
                                <label class="file_hidden mt-n2">
                                    Upload Tour Support
                                    <input type="file" size="20"  @change="uploadsupport($event)" accept=".xls,.xlsx">
                                </label>
                            </div>
                            <div class="col-3 text-left f-1-2" >
                                <button v-if="csv_active_option==4 " class="btn btn-lg btn-success" id="proceed_button4" style="visibility: visible;margin-top: 38px;" @click="upload_confirm_tour">Click To Proceed</button>
                            </div>
                            <input type="hidden" id="jsonData3" class="col-md-12"  />
                            <div class="col-4  text-center f-1-2" ></div>

                            <div class="col-3  mt-3"><h3>Support Name</h3></div>
                            <div class="col-3  mt-3"><h3>Support Email</h3></div>
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
                                <div class="col-3  mt-3">
                                    <span class="p-a"><i class="fa fa-envelope pl-3 c-grey pt-2 f-1-8"></i></span>
                                    <input
                                        type="text"
                                        class="form-control pl-5 fw-4 pl-5"
                                        v-model="support.Email"
                                        name="name"
                                    >
                                </div>
                                <div class="col-3  mt-3">
                                    <span class="p-a pl-2"><img src="./../dashboard_resources/contact.png"></span>
                                    <vue-tel-input  v-model="support.Phone"   v-bind="bindProps" name="phone"  class="form-control pl-5 pr-5 f-1-5 vue-tel-input fw-3"></vue-tel-input>


                                </div>
                                <!--                                category-->

                                <div class="col-3  mt-3">

                                    <!--                                    <div class="col-1 offset-11">-->

                                    <img v-if="meta.meta_non_member_list.support.length>1" @click="meta.meta_non_member_list.support.splice(index, 1) " src="./../dashboard_resources/minus.png" class="hw-3">
                                    <img v-else @click="meta.meta_non_member_list.support.splice(index, 1),meta.meta_non_member_list.support.push({'name':'','mobile':''}) " src="./../dashboard_resources/minus.png" class="hw-3 ">
                                    <img  @click="meta.meta_non_member_list.support.push({'name':'','mobile':'','email':''})" class="hw-3 " src="./../dashboard_resources/plus.png">
                                    <!--                                    </div>-->


                                </div>
                                <div class="col-2  mt-3">


                                </div>


                            </div>

                        </div>

                        <button @click="changeview('embed')" class="button-css">Embed Button</button>
                    </div>

                    <!--                    Embed Button-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[embed ? 'activedev' : 'hidedev' ]" class="query-content f-2">

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

                                <div class="row">
                                    <div class="col-12 mt-n2">
                                        <input type="text"  v-model="meta.meta_embed_button.instruction"  class="form-control pl-5 f-1-4 fw-4">
                                        <img src="./../dashboard_resources/edit.png" class="pa-img2 hw-i"></div>
                                </div>

                                <p class="f-2 fw-5 text-muted">Button Text</p>
                                <div class="row">
                                    <div class="col-12 mt-n2">
                                        <input type="text"  v-model="meta.meta_embed_button.title"  class="form-control pl-5 f-1-4 fw-4">
                                        <img src="./../dashboard_resources/edit.png" class="pa-img2 hw-i"></div>
                                </div>

                                <p class="f-2 fw-5 text-muted">Paste Link</p>
                                <div class="row">
                                    <div class="col-12 mt-n2">
                                        <input type="text"  v-model="meta.meta_embed_button.link"  class="form-control pl-5 f-1-4 fw-4">
                                        <img src="./../dashboard_resources/edit.png" class="pa-img2 hw-i"></div>
                                </div>
                            </div>

                        </div>


                        <button @click="changeview('inventory')" class="button-css">Inventory</button>
                    </div>

                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[live ? 'activedev' : 'hidedev' ]" class="query-content f-2">


                        <button @click="changeview('tmlist')" class="button-css">Tour Managers</button>

                    </div>

                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[inventory ? 'activedev' : 'hidedev' ]" class="query-content f-2">
<!--                        <div class="col-md-12">-->
<!--                            <button type="button" @click="add_data('inventory','COLLATERAL INVENTORY')" class="btn btn-primary btn-lg f-1-5 f-w600 mt-5 mb-2" style="float:right; border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Inventory Report</button>-->
<!--                        </div>-->

<!--                        <div class="row">-->
                           <br> <b>Inventory</b>
                            <div class="row bg-white border font ml-0 mr-5 mb-5" style="padding:11px 23px 16px 5px" v-for="(stock,index) in meta.meta_stock">


                                <div class="col-lg-4">
                                    <b>Carton Name</b>
                                    <input class="form-control" type="text" v-model="stock.name">

                                    <b>Remark</b>
                                    <input class="form-control" type="text" v-model="stock.remark">

                                    <b>Items only (Seperated by "," or ";") </b>
                                    <textarea rows="3" class="form-control" v-model="stock.carton_items_text" ></textarea>



                                </div>
                                <div class="col-lg-2">
                                    <div style="text-align: center">
                                    <button style="margin-top: 80%;padding: 5px 2px 5px 2px;font-size: 13px;" class="btn btn-primary" @click="convert_item(index)">Convert to Item Field <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </button>
                                    </div>


                                </div>
                                <div class="col-lg-5">

                                    <div class="row" >
                                        <div class="col-lg-5"> <b>Actual Item Fields</b>   </div>
                                        <div class="col-lg-3" style="padding-left: 33px;"> <b>In stock</b>   </div>
                                        <div class="col-lg-3"> <b>Balance</b>   </div>
                                    </div>
<div class="row" v-for="(ite,index1) in stock.items">

                                        <div><input class="form-control col-lg-6" placeholder="Item" v-model="ite.title" type="text">
                                            <input placeholder="Count" min="0" class="form-control col-md-2" v-model="ite.count" type="number">
                                            <input placeholder="Left" min="0" class="form-control col-md-2" v-model="ite.left" type="number">
     <div class="col-md-2" style="padding: 5px;">
                                                <i style=" " class="fa fa-trash f-1-8" title="Delete Item" @click="stock.items.splice(index1, 1)" aria-hidden="true"></i>&nbsp;&nbsp;
                                                <i v-if="stock.items.length===index1+1" class="fa fa-plus-circle f-1-8" title="Add Item" @click="stock.items.push({'title':'','count':'','left':''})" aria-hidden="true"></i>
     </div>


    </div>

</div>



                                </div>
                                <div class="col-lg-1 text-right" style="font-size: 20px; margin-top: 10%">

<!--                                    <button class="btn btn-danger" @click="meta.meta_stock.splice(index, 1)">Delete Carton</button>-->
                                    <i style="color: red " class="fa fa-trash f-1-8" title="Delete Carton" @click="meta.meta_stock.splice(index, 1)" aria-hidden="true"></i>&nbsp;&nbsp;
                                    <i style="color: #182969" class="fa fa-qrcode f-1-8"  title="Generate QR Code" @click="showqr(item.id+','+meta.meta_stock[index].id)" aria-hidden="true"></i>


                                </div>

                            </div>
                            <div class="row mt-5">
                                <div class="col-lg-3 text-center offset-4 mt-5">
                                    <button @click='addstock' class="mt-5 f-2 btn text-light spec-padding button_color">Add New Carton</button>
                                </div>
                            </div>
<!--                        </div>-->

                        <button @click="changeview('up')" class="button-css">Upload</button>
                    </div>

                    <!--                    upload-->
                    <div  v-if="up" :class="[up ? 'activedev' : 'hidedev' ]" class="query-content" style="">
                        <div class="col-12" style="text-align: right;margin-top: 2rem;">
                            <div class="btn-group"  >



                                <button type="button" @click="add_data('travel_doc','TRAVEL DOC DISPATCH')" class="btn btn-primary btn-lg f-1-5 f-w600" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Document Report</button>
                            </div>


                        </div>
                        <form-wizard @on-complete="changeview('visa')"   @on-change="resetPage" color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Visa Pro.">


                            <tab-content title="E_visa" icon="fa fa-check">
                                <fieldset>

                                    <div class="row col-10 offset-1" style="background-color: rgb(30, 81, 164);height: 300px;" v-if="visawindow">
                                        <div class="col-lg-3"></div>
                                        <!--currently not in use                -->
                                        <!--<div class="col-lg-3 pt-5" >-->
                                        <!--<div  @click="singleuploadvisa=true,visawindow=false">-->

                                        <!--<img  height="200" src="./../dashboard_resources/group/single.png" >-->

                                        <!--</div>-->
                                        <!--</div>-->
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="multiuploadvisa=true,visawindow=false">

                                                <img  height="200" src="./../dashboard_resources/group/multiple.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="visaexceupload=true,visawindow=false">
                                                <img height="200" src="./../dashboard_resources/group/excelupload.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3"></div>
                                    </div>

                                    <div v-if="multiuploadvisa">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadvisa=false,visaexceupload=false,multiuploadvisa=false,visawindow=true" style="float: right"></i>

                                        <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-sending="sendingEvent" v-on:vdropzone-success="succcessvisa" :options="dropzoneOptions"></vue-dropzone>

                                        <div class="row">
                                            <div class="col-md-12  mb-4 mt-5">   <b>Multiple Upload History</b></div>
                                        </div>


                                            <table   class="table" style="background-color: white;text-align: center;">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col" class="width_20">ID</th>
                                                    <th scope="col" class="width_40">Member Name</th>
                                                    <th scope="col" class="width_40">File Name</th>
                                                    <th scope="col" class="width_20">Status</th>
                                                    <th scope="col" class="width_20">File</th>
<!--                                                    <th scope="col" class="width_20">Action</th>-->


                                                </tr>
                                                </thead>
                                                <tbody class="f-1-4">
                                                <tr v-for="(doc,index) in meta.meta_visa_hist">
                                                    <td>{{index+1}}</td>
                                                    <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist' " class="text-secondary">{{doc.booking_id}}</td>
                                                    <td v-else><router-link :to="{ name: 'bookings.edit',params:{id:doc.id} }"  >{{ doc.booking_id }}</router-link></td>
                                                    <td>{{doc.name}}</td>
                                                    <td>{{doc.filename}}</td>
                                                    <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist'" style='color:red;'>Error</td>
                                                    <td v-else style='color:green;'>Assigned</td>
                                                    <td><a class="fa fa-download" aria-hidden="true" :href="doc.fileurl"  download></a>
<!--                                                        |-->
<!--                                                    <a href="#" @click="fetch_urldate(doc.fileurl)" >Upload Date</a>-->
                                                    </td>
<!--                                                    <td>-->
<!--                                                    <i  v-if="doc.booking_id=='Not Found ' || doc.booking_id=='Duplicate Names Exist'" class="fa fa-trash cursor text-danger" aria-hidden="true" @click="delete_history('visa',index)"/>-->
<!--                                                    </td>-->


                                                </tr>
                                                </tbody>
                                            </table>

                                        <pagination :records="meta.meta_visa_hist.length" v-model="page" :per-page="perPage" @paginate="callback">
                                        </pagination>



                                    </div>
                                    <div v-if="visaexceupload">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadvisa=false,visaexceupload=false,multiuploadvisa=false,visawindow=true" style="float: right"></i>
                                        <div class="row">

                                            <ExcelFileUpload  upload_type="visa" :hubs="hub_list" :members="original_mem"  @showErrorModal="showUploadFileErrorModal" :grpId="item.id" :agentId="item.agent_id" />

                                        </div>



                                    </div>

                                </fieldset>
                            </tab-content>
                            <tab-content title="Ticket" icon="fa fa-check">
                                <fieldset>
                                    <div class="row col-10 offset-1" style="background-color: rgb(30, 81, 164);height: 300px;" v-if="flightwindow">

                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="singleuploadflight=true,flightallocation=false,flightwindow=false">
                                                <img height="200" src="./../dashboard_resources/group/single.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="multiuploadflight=true,flightallocation=false,flightwindow=false">

                                                <img height="200" src="./../dashboard_resources/group/multiple.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="multiuploadflight=false,flightallocation=true,flightwindow=false">

                                                <img height="200" src="./../dashboard_resources/group/manual.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="multiuploadflight=false,flightallocation=false,flightwindow=false,flightexceupload=true">

                                                <img height="200" src="./../dashboard_resources/group/excelupload.png" >

                                            </div>
                                        </div>

                                    </div>

                                    <div v-if="singleuploadflight">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadflight=false,multiuploadflight=false,flightallocation=false,flightexceupload=false,flightwindow=true" style="float: right"></i>
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
                                                <p class="mb-4">Date & Time</p>
                                                <date-picker
                                                    v-model="flight['date']"
                                                    :config="$root.dpconfigDatetime"
                                                    name="flight_data_time"
                                                    class="form-control"
                                                    placeholder="Enter Date & Time"
                                                    @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])"
                                                    :disabled="flight['url']!=''">
                                                </date-picker>

<!--                                                 <input  type="text" v-model="flight['date']" class="fsize mt-3" placeholder="12/02/2020">-->
                                            </div>
                                            <div class="col-lg-3 mt-2 mb-2 border-right" v-if="flight.type=='Flight'">
                                                <p class="mb-4">Dept Airport Code</p>

                                                <div v-if="flight['url']!=''">
                                                    <input :disabled="flight['url']!=''" type="text" v-model="flight['dep_code']" @change="checkemptyflight(flight['date'],flight['arr_code'], flight['dep_code'],flight['ticket'])" class="form-control" placeholder="DEL">
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
                                            <div class="col-lg-3 mt-2 mb-2 border-right" v-else-if="flight.type=='Train'">
                                                <p class="mb-4">Dept Station Code</p>

                                                <div v-if="flight['url']!=''">
                                                    <input :disabled="flight['url']!=''" type="text" v-model="flight['dep_code']" @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="NDLS">
                                                </div>
                                                <div v-else>
                                                    <input  type="text" v-model="flight['dep_code']"  class="form-control" placeholder="NDLS">

                                                </div>

                                            </div>
                                            <div class="col-lg-3 mt-2 mb-2 border-right" v-else>
                                                <p class="mb-4">Dept Airport Code</p>

                                                <div v-if="flight['url']!=''">
                                                    <input :disabled="flight['url']!=''" type="text" v-model="flight['dep_code']" @change="checkemptyflight(flight['date'],flight['arr_code'],                                flight['dep_code'],flight['ticket'])" class="form-control" placeholder="DEL">
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
                                            <div class="col-lg-2 mt-2 mb-2 border-right">
                                                <p class="mb-4">Date & Time</p>
                                                <date-picker
                                                    v-model="flight['arr_date']"
                                                    :config="$root.dpconfigDatetime"
                                                    name="flight_data_time"
                                                    class="form-control"
                                                    placeholder="Enter Date & Time"
                                                    @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])"
                                                    :disabled="flight['url']!=''">
                                                </date-picker>

                                                <!--                                <input  type="text" v-model="flight['date']" class="fsize mt-3" placeholder="12/02/2020">-->
                                            </div>
                                            <div class="col-lg-3 mt-2 mb-2 border-right" v-if="flight.type=='Flight'">
                                                <p class="mb-4">Arr Airport Code</p>

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
                                            <div class="col-lg-3 mt-2 mb-2 border-right" v-else-if="flight.type=='Train'">
                                                <p class="mb-4">Arr Station Code</p>

                                                <div v-if="flight['url']!=''">
                                                    <input :disabled="flight['url']!=''" type="text" v-model="flight['arr_code']"  @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="NDLS">
                                                </div>
                                                <div v-else>
                                                    <input  type="text" v-model="flight['arr_code']"  class="form-control" placeholder="NDLS">

                                                </div>

                                            </div>
                                            <div class="col-lg-3 mt-2 mb-2 border-right" v-else>
                                                <p class="mb-4">Arr Airport Code</p>

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
                                            <div class="col-lg-2 mt-2 mb-2 border-right" v-if="flight.type=='Flight'">
                                                <p class="mb-4">Flight no</p>
                                                <input :disabled="flight['url']!=''" type="text" v-model="flight['ticket']"  @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="123546">
                                            </div>
                                            <div class="col-lg-2 mt-2 mb-2 border-right" v-else-if="flight.type=='Train'">
                                                <p class="mb-4">Train no</p>
                                                <input :disabled="flight['url']!=''" type="text" v-model="flight['ticket']"  @change="checkemptyflight(flight['date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="123546">
                                            </div>
                                            <div class="col-lg-2 mt-2 mb-2 border-right" v-else>
                                                <p class="mb-4">Flight no</p>
                                                <input :disabled="flight['url']!=''" type="text" v-model="flight['ticket']"  @change="checkemptyflight(flight['date'],flight['arr_date'],flight['arr_code'],flight['dep_code'],flight['ticket'])" class="form-control" placeholder="123546">
                                            </div>
                                            <div class="col-lg-4 mt-2 mb-2 text-center" >
                                                <!--                                    <label class="la"> Choose File-->
                                                <!--                                        <input type="file" size="10">-->
                                                <!--                                    </label>-->
                                                <div class="row">
                                                    <div class="col-12 text-center f-1-2" v-if="flight['url']!='' && flight['url']!=undefined">


                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <p class="fw-6">Uploaded</p>
                                                                <a class="download_button col-md-10 mt-n2 offset-2" target= "_blank" v-bind:href="flight['url'] ">Download</a>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <img  @click="deleteflightfile(index),deleted_docs.push(flight) " src="./../dashboard_resources/trash.png" class="hw-2 " style="margin-left: 10px;">
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div class="col-12 text-center f-1-2" v-else :disabled="checkemptyflight(flight['date'],flight['arr_date'],flight['arr_code'],flight['dep_code'],flight['ticket'])">

                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <p>No file Choosen</p>
                                                                <p><span data-v-0a0b01e2="" class="text-primary f-1-2">(Size: 2MB, Format: JPG,PNG,PDF)</span></p>
                                                                <label class="file_hidden mt-n2">
                                                                    Choose File
                                                                    <input type="file" size="20" id="meta_flight"  @change="updatemeta_flight($event,'meta_flight',index)">
                                                                </label>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <img  @click="deleteflightfile(index) " src="./../dashboard_resources/trash.png" class="hw-2 " style="margin-left: 10px;">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-lg-8  mt-2 mb-2 border-right text-right" v-if="flight.type=='Flight' && flight['url']!=''" >

                                                <i class="fa fa-plane mt-3 f-2-5 text-success cursor" alt="Track Flight" title="Track Fight" @click="track_flight(index)"></i>

                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-12 text-center  mt-5">
                                            <div class="row">
                                                <div class="col-md-6"><button @click='meta.meta_flight.push({"date": "", "dep_code": "", "arr_date": "","arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight","updated":false})' class="mt-5 f-2 btn text-light spec-padding button_color">Add New Flight Sector</button></div>
                                                <div class="col-md-6"><button @click='meta.meta_flight.push({"date": "", "dep_code": "", "arr_date": "","arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Train","updated":false})' class="mt-5 f-2 btn text-light spec-padding button_color">Add New Train Sector</button></div>
                                            </div>

                                        </div>
                                        </div>

                                    </div>
                                    <div v-if="multiuploadflight">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadflight=false,multiuploadflight=false,flightallocation=false,flightexceupload=false,flightwindow=true" style="float: right"></i>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="col-lg-6 mt-2 mb-2 ">
                                                    <p class="mb-4">Select Ticket Type</p>
                                                    <v-select :clearable="false"
                                                              name="type"
                                                              label="type"
                                                              :options="[{'type':'Flight'},{'type':'Train'}]"
                                                              @input="assign_flight"
                                                               style=""



                                                    />
                                                </div>
                                            </div>
                                        <div class="col-lg-2 mt-2 mb-2 border-right">
                                            <p class="mb-4">Date & Time</p>
                                            <date-picker
                                                v-model="flightdata['date']"
                                                :config="$root.dpconfigDatetime_disable_dates"
                                                name="flight_data_time"
                                                class="form-control"
                                                placeholder="Enter Date & Time"
                                               >
                                            </date-picker>
                                                                     </div>
                                        <div class="col-lg-3 mt-2 mb-2 border-right" v-if="flightdata['type']=='Flight'">
                                            <p class="mb-4">Dept Airport Code</p>


                                            <div >
                                                <vue-bootstrap-typeahead

                                                    :data="airport_codes"
                                                    size="sm"

                                                    placeholder="DEL"

                                                    v-model="flightdata['dep_code']"

                                                    :serializer="s => s.name"


                                                    @hit="flightdata['dep_code']=$event.code,flightdata['dep_name']=$event.name"
                                                />

                                            </div>

                                        </div>
                                        <div class="col-lg-3 mt-2 mb-2 border-right" v-else-if="flightdata['type']=='Train'">
                                            <p class="mb-4">Dept Station Code</p>
                                            <div >

                                                <input  type="text" v-model="flightdata['dep_code']"  class="form-control" placeholder="NDLS">
                                            </div>

                                        </div>
                                         <div class="col-lg-3 mt-2 mb-2 border-right" v-else>
                                                <p class="mb-4">Dept Airport Code</p>


                                                <div >
                                                    <vue-bootstrap-typeahead

                                                        :data="airport_codes"
                                                        size="sm"

                                                        placeholder="DEL"

                                                        v-model="flightdata['dep_code']"

                                                        :serializer="s => s.name"


                                                        @hit="flightdata['dep_code']=$event.code,flightdata['dep_name']=$event.name"
                                                    />

                                                </div>

                                            </div>
                                            <div class="col-lg-2 mt-2 mb-2 border-right">
                                                <p class="mb-4">Date & Time</p>
                                                <date-picker
                                                    v-model="flightdata['arr_date']"
                                                    :config="$root.dpconfigDatetime_disable_dates"
                                                    name="flight_data_time"
                                                    class="form-control"
                                                    placeholder="Enter Date & Time"
                                                >
                                                </date-picker>
                                            </div>
                                        <div class="col-lg-3 mt-2 mb-2 border-right" v-if="flightdata['type']=='Flight'">
                                            <p class="mb-4">Arr Airport Code</p>


                                            <div >
                                                <vue-bootstrap-typeahead

                                                    :data="airport_codes"
                                                    size="sm"

                                                    placeholder="BOM"

                                                    v-model="flightdata['arr_code']"

                                                    :serializer="s => s.name"


                                                    @hit="flightdata['arr_code']=$event.code,flightdata['arr_name']=$event.name"
                                                />

                                            </div>

                                        </div>
                                        <div class="col-lg-3 mt-2 mb-2 border-right" v-else-if="flightdata['type']=='Train'">
                                            <p class="mb-4">Arr Station Code</p>


                                            <div >

                                                <input  type="text" v-model="flightdata['arr_code']"  class="form-control" placeholder="NDLS">

                                            </div>

                                        </div>
                                            <div class="col-lg-3 mt-2 mb-2 border-right" v-else>
                                                <p class="mb-4">Arr Airport Code</p>


                                                <div >
                                                    <vue-bootstrap-typeahead

                                                        :data="airport_codes"
                                                        size="sm"

                                                        placeholder="BOM"

                                                        v-model="flightdata['arr_code']"

                                                        :serializer="s => s.name"


                                                        @hit="flightdata['arr_code']=$event.code,flightdata['arr_name']=$event.name"
                                                    />

                                                </div>

                                            </div>
                                        <div class="col-lg-2 mt-2 mb-2 border-right">
                                            <p class="mb-4">Ticket no</p>
                                            <input type="text" v-model="flightdata['ticket']"   class="form-control" placeholder="123546">
                                        </div>

                                        <div class="col-lg-2 mt-2 mb-2 text-center" >
                                          <div class="row">

                                            </div>
                                           </div>

                                        </div>
                                        <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-sending="sendingEventflight" v-on:vdropzone-success="succcessflight"  :options="dropzoneOptions"></vue-dropzone>

                                        <div class="row">
                                            <div class="col-md-12  mb-4 mt-5">   <b>Multiple Upload History</b></div>
                                        </div>
<!--                                        <div  class="row">-->



<!--                                            <div class="col-md-3"><b>Ref.id</b></div>-->
<!--                                            <div class="col-md-2"><b>Name</b></div>-->
<!--                                            <div class="col-md-2"><b>Date</b></div>-->
<!--                                            <div class="col-md-1"><b>Dept.</b></div>-->
<!--                                            <div class="col-md-1"><b>Arr.</b></div>-->
<!--                                            <div class="col-md-1"><b>Flt.no</b></div>-->
<!--                                            <div class="col-md-2"><b>File</b></div></div>-->

                                        <table class="table" style="background-color: white;text-align: center;">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col" class="width_0">Ref.id</th>
                                                <th scope="col" class="width_0">Member Name</th>
                                                <th scope="col" class="width_0">File Name</th>
                                                <th scope="col" class="">Date</th>
                                                <th scope="col" class="">Dept.</th>
                                                <th scope="col" class="">Arr.</th>
                                                <th scope="col" class="">Ticket No.</th>
                                                <th scope="col" class="">File</th>
<!--                                                <th scope="col" class="">Action</th>-->


                                            </tr>
                                            </thead>
                                            <tbody class="f-1-4">
                                            <tr v-for="(doc,index) in  meta.meta_flight_hist">
                                                <td>{{index+1}}</td>
                                                <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist'" class="text-secondary">{{doc.booking_id}}</td>

                                                <td v-else><router-link :to="{ name: 'bookings.edit',params:{id:doc.id} }"  >{{ doc.booking_id }}</router-link></td>
                                                <td>{{doc.name}}</td>
                                                <td :title="doc.filename" > {{doc.filename}} </td>
                                                <td>
<!--                                                    {{ [doc.date.slice(0, doc.date.indexOf(":")-2), '-', doc.date.slice(doc.date.indexOf("-")-2)].join('') }}-->
                                                    {{date_update(doc.date)}}
                                                </td>
                                                <td>{{doc.dep_code}}</td>
                                                <td>{{doc.arr_code}}</td>
                                                <td>{{doc.ticket}}</td>
                                               <td><a class="fa fa-download" aria-hidden="true" :href="doc.fileurl"  download></a> </td>
<!--                                                <td>-->
<!--                                                    <i  v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist'" class="fa fa-trash cursor text-danger" aria-hidden="true" @click="delete_history('flight',index)"/>-->
<!--                                                </td>-->


                                            </tr>
                                            </tbody>
                                        </table>
                                      <pagination :records="meta.meta_flight_hist.length" v-model="page" :per-page="perPage" @paginate="callback">
                                    </pagination>




<!--                                        <div v-for="flighthist in meta.meta_flight_hist" class="row">-->
<!--                                            <div class="col-md-3">{{flighthist.booking_id}}</div>-->
<!--                                            <div class="col-md-2">{{flighthist.filename}}</div>-->
<!--                                            <div class="col-md-2">{{flighthist.date}}</div>-->
<!--                                            <div class="col-md-1">{{flighthist.dep_code}}</div>-->
<!--                                            <div class="col-md-1">{{flighthist.arr_code}}</div>-->
<!--                                            <div class="col-md-1">{{flighthist.ticket}}</div>-->
<!--                                            <div class="col-md-2"><a :href="flighthist.fileurl"  download>{{flighthist.fileurl}}</a></div>-->


<!--                                        </div>-->
                                    </div>
                                    <div v-if="flightallocation">

                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadflight=false,multiuploadflight=false,flightallocation=false,flightexceupload=false,flightwindow=true" style="float: right"></i>
                                        <div class="row">
                                            <div class="col-lg-6 ">
                                                Select Ticket Type
                                                <v-select :clearable="false"
                                                          name="type"
                                                          label="type"
                                                          :options="[{'type':'Flight'},{'type':'Train'}]"
                                                          @input="assign_flight2"
                                                          style="background:#fff;"
                                                />

                                            </div>
                                            <div class="col-lg-6">
                                                Select Hub
                                                <v-select v-model="flight_hub_filter"
                                                          :clearable="false"
                                                          name="hub"
                                                          label="hub"
                                                          :options="hub_flight"
                                                          style="background:#fff;"
                                                          @input="filterhub"



                                                />
                                            </div>



                                            <div class="row">
                                                <div class="col-lg-2 mt-2 mb-2 border-right">
                                                    <p class="mb-4">Date & Time</p>
                                                    <date-picker
                                                        v-model="flightdataallo['date']"
                                                        :config="$root.dpconfigDatetime_disable_dates"
                                                        name="flight_data_time"
                                                        class="form-control"
                                                        placeholder="Enter Date & Time"
                                                    >
                                                    </date-picker>
                                                </div>
                                                <div class="col-lg-3 mt-2 mb-2 border-right" v-if="flightdataallo['type']=='Flight'">
                                                    <p class="mb-4">Dept Airport Code</p>


                                                    <div >
                                                        <vue-bootstrap-typeahead

                                                            :data="airport_codes"
                                                            size="sm"

                                                            placeholder="DEL"

                                                            v-model="flightdataallo['dep_code']"

                                                            :serializer="s => s.name"


                                                            @hit="flightdataallo['dep_code']=$event.code,flightdataallo['dep_name']=$event.name"
                                                        />

                                                    </div>

                                                </div>
                                                <div class="col-lg-3 mt-2 mb-2 border-right" v-else-if="flightdataallo['type']=='Train'">
                                                    <p class="mb-4">Dept Station Code</p>


                                                    <div >

                                                        <input  type="text" v-model="flightdataallo['dep_code']"  class="form-control" placeholder="NDLS">

                                                    </div>

                                                </div>
                                                <div class="col-lg-3 mt-2 mb-2 border-right" v-else>
                                                    <p class="mb-4">Dept Airport Code</p>


                                                    <div >
                                                        <vue-bootstrap-typeahead

                                                            :data="airport_codes"
                                                            size="sm"

                                                            placeholder="DEL"

                                                            v-model="flightdataallo['dep_code']"

                                                            :serializer="s => s.name"


                                                            @hit="flightdataallo['dep_code']=$event.code,flightdataallo['dep_name']=$event.name"
                                                        />

                                                    </div>

                                                </div>
                                                <div class="col-lg-2 mt-2 mb-2 border-right">
                                                    <p class="mb-4">Date & Time</p>
                                                    <date-picker
                                                        v-model="flightdataallo['arr_date']"
                                                        :config="$root.dpconfigDatetime_disable_dates"
                                                        name="flight_data_time"
                                                        class="form-control"
                                                        placeholder="Enter Date & Time"
                                                    >
                                                    </date-picker>
                                                </div>
                                                <div class="col-lg-3 mt-2 mb-2 border-right" v-if="flightdataallo['type']=='Flight'">
                                                    <p class="mb-4">Arr Airport Code</p>


                                                    <div >
                                                        <vue-bootstrap-typeahead

                                                            :data="airport_codes"
                                                            size="sm"

                                                            placeholder="BOM"
                                                            class="text-danger"
                                                            v-model="arr_code_allocation"
                                                            style="color: red !important;"
                                                            :serializer="s => s.name"

                                                            @hit="flightdataallo['arr_code']=$event.code,flightdataallo['arr_name']=$event.name"
                                                        />

                                                    </div>

                                                </div>
                                                 <div class="col-lg-3 mt-2 mb-2 border-right" v-else-if="flightdataallo['type']=='Train'">
                                                    <p class="mb-4">Arr Station Code</p>


                                                    <div >

                                                        <input  type="text" v-model="flightdataallo['arr_code']"  class="form-control" placeholder="NDLS">

                                                    </div>

                                                </div>
                                               <div class="col-lg-3 mt-2 mb-2 border-right" v-else>
                                                    <p class="mb-4">Arr Airport Code</p>


                                                    <div >
                                                        <vue-bootstrap-typeahead

                                                            :data="airport_codes"
                                                            size="sm"

                                                            placeholder="BOM"
                                                            class="text-danger"
                                                            v-model="arr_code_allocation"
                                                            style="color: red !important;"
                                                            :serializer="s => s.name"

                                                            @hit="flightdataallo['arr_code']=$event.code,flightdataallo['arr_name']=$event.name"
                                                        />

                                                    </div>

                                                </div>
                                                <div class="col-lg-2 mt-2 mb-2 border-right">
                                                    <p class="mb-4">Ticket no</p>
                                                    <input type="text" v-model="flightdataallo['ticket']"   class="form-control" placeholder="123546">
                                                    <i  class="fa fa-plus-circle" @click='flightdataallo["sector"].push({"date": "", "dep_code": "","arr_date": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"",
                                                "type":"Flight"})' aria-hidden="true" title="Add Sector For Same Ticket"></i>


                                                </div>
                                            </div>
                                            <div class="row" v-for=" (flightsector,index) in flightdataallo['sector'] ">
                                                <div class="col-lg-2 mt-2 mb-2 border-right">
                                                    <p class="mb-4">Date & Time</p>
                                                    <date-picker
                                                        v-model="flightsector['date']"
                                                        :config="$root.dpconfigDatetime_disable_dates"
                                                        name="flight_data_time"
                                                        class="form-control"
                                                        placeholder="Enter Date & Time"
                                                    >
                                                    </date-picker>
                                                </div>
                                                <div class="col-lg-3 mt-2 mb-2 border-right" >
                                                    <p class="mb-4">Dept Airport Code</p>


                                                    <div >
                                                        <vue-bootstrap-typeahead

                                                            :data="airport_codes"
                                                            size="sm"

                                                            placeholder="DEL"

                                                            v-model="flightsector['dep_code']"

                                                            :serializer="s => s.name"


                                                            @hit="flightsector['dep_code']=$event.code,flightsector['dep_name']=$event.name"
                                                        />

                                                    </div>

                                                </div>
                                                <div class="col-lg-2 mt-2 mb-2 border-right">
                                                    <p class="mb-4">Date & Time</p>
                                                    <date-picker
                                                        v-model="flightsector['arr_date']"
                                                        :config="$root.dpconfigDatetime_disable_dates"
                                                        name="flight_data_time"
                                                        class="form-control"
                                                        placeholder="Enter Date & Time"
                                                    >
                                                    </date-picker>
                                                </div>
                                                <div class="col-lg-3 mt-2 mb-2 border-right" >
                                                    <p class="mb-4">Arr Airport Code</p>


                                                    <div >
                                                        <vue-bootstrap-typeahead

                                                            :data="airport_codes"
                                                            size="sm"

                                                            placeholder="BOM"
                                                            class="text-danger"
                                                            v-model="arr_code_allocation"
                                                            style="color: red !important;"
                                                            :serializer="s => s.name"

                                                            @hit="flightsector['arr_code']=$event.code,flightsector['arr_name']=$event.name"
                                                        />

                                                    </div>

                                                </div>
                                                <div class="col-lg-2 mt-2 mb-2 border-right">
                                                    <p class="mb-4">Ticket no</p>
                                                    <input type="text" v-model="flightsector['ticket']"   class="form-control" placeholder="123546">
                                                    <i  class="fa fa-trash" @click="flightdataallo['sector'].splice(index, 1) " aria-hidden="true" title="Remove Sector "></i>



                                                </div>


                                            </div>
                                            <div class="col-lg-4 mt-2 mb-2 text-center" >

                                                <div class="row">
<!--                                                    <div class="col-12 text-center f-1-2" v-if="flightdataallo['url']!=''" >-->
<!--                                                        <a target="_blank" style="padding-top: 36px" :href="flightdataallo['url']"> Selected File</a>-->
<!--                                                    </div>-->

                                                    <div class="col-12 text-center f-1-8" v-if="flightdataallo['url']!='' && flightdataallo['url']!=undefined">
                                                        <p class="mb-4">Uploaded</p>
                                                        <div class="row">
                                                            <div class="col-md-10">
                                                                <a class="download_button mt-n2 offset-2" target= "_blank" v-bind:href="flightdataallo['url'] ">Download</a>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <img  @click="flightdataallo['url']=''" src="./../dashboard_resources/trash.png" class="hw-2 " style="margin-left: 10px;">
                                                            </div>

                                                        </div>


                                                    </div>
                                                    <div class="col-12 text-center f-1-8" v-else >
                                                        <p class="mb-4">No file Choosen</p>
                                                        <p><span data-v-0a0b01e2="" class="text-primary f-1-2">(Size: 2MB, Format: JPG,PNG,PDF)</span></p>

                                                        <label class="file_hidden mt-n2">
                                                            Choose File
                                                            <input

                                                                type="file" size="20" id="flightallo"  @change="updateflightallo($event,'flightallo')">
                                                        </label>
                                                    </div>
                                                </div>
                             </div>
<!--                                                more sectors-->





                                        <div class="mt-5 col-md-12"></div>


                                        <div class="col-md-4 mt-2" v-for="(members,index) in memberData">



                                            <div class="row" >
                                                <div class="col-md-1" style="margin-top: 3px;">
                                                    <label class="container_input">

                                                        <input type="checkbox" v-model="allocationticketids"  :id="members.traveller_id" :value="members.traveller_id" checked v-if="members.cancel_status=='false'||members.cancel_status==false">
                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                    </label></div>
                                                <div class="col-md-10" :alt="members.email" :title="members.email" style="font-size: 21px;margin-top: -2px;color: black;" :class="members.cancel_status=='false'||members.cancel_status==false?'':'cancelled_pax text-secondary'">
                                                    <sup class="fa fa-star text-warning f-1-2 cursor" title="VIP/CIP Member" aria-hidden="true" v-if="members.meta_vip"></sup>
                                                    {{members.full_name}}
                                                </div>
                                            </div>



                                        </div>
                                        <div class="mt-5 col-md-12 text-center" >

                                            <pagination :records="member_data.length" v-model="page" :per-page="perPage" @paginate="callback">
                                            </pagination>
    <button @click="allocate_ticket" class="mt-5 f-2 btn text-light spec-padding button_color">Allocate</button>

</div>
                                        <div class="col-md-12" style="margin-top: 50px;" >
                                            <label class="f-2">Ticket Allocation History</label>
                                            <table class="table" style="background-color: white;text-align: center">
                                                <thead>
                                                <tr class="f-1-5">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Ticket Type</th>
                                                    <th scope="col">Date & Time</th>
                                                    <th scope="col">Dept Airport Code</th>
                                                    <th scope="col">Date & Time</th>
                                                    <th scope="col">Arr Airport Code</th>
                                                    <th scope="col">Ticket No.</th>
                                                    <th scope="col">File</th>

                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr  class="f-1-3" v-for="(data,index) in meta.meta_ticket_hist">
                                                  <td>{{index+1}}</td>
                                                  <td>{{data.name}}</td>
                                                  <td>{{data.type}}</td>
                                                  <td>{{data.date}}</td>
                                                  <td>{{data.dep_code}}</td>
                                                  <td>{{data.arr_date}}</td>
                                                  <td>{{data.arr_code}}</td>
                                                  <td>{{data.ticket}}</td>

                                                  <td><a class="fa fa-download" aria-hidden="true" :href="data.url"  target="_blank"></a> </td>


                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>


</div>
                                    <div v-if="flightexceupload">

                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadflight=false,multiuploadflight=false,flightallocation=false,flightexceupload=false,flightwindow=true" style="float: right"></i>
                                        <div class="row">
                                            <ExcelTicketUpload :hubs="hub_flight"  :members="original_mem" :airport_code="airport_codes"  @showErrorModal="showErrorModalPreview" :grpId="item.id" :agentId="item.agent_id" />
                                        </div>


                                    </div>


                                </fieldset>
                            </tab-content>
                            <tab-content title="Insurance" icon="fa fa-check">
                                <fieldset>
                                    <div class="row col-10 offset-1" style="background-color: rgb(30, 81, 164);height: 300px;" v-if="insuwindow">

                                        <div class="col-lg-3 pt-5 offset-1" >
                                            <div  @click="singleuploadinsu=true,insuwindow=false,inuranceexceupload=false,multiuploadinsu=false">
                                                <img height="200" src="./../dashboard_resources/group/single.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3 pt-5" >
                                            <div @click="multiuploadinsu=true,insuwindow=false,inuranceexceupload=false,singleuploadinsu=false">

                                                <img height="200" src="./../dashboard_resources/group/multiple.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="inuranceexceupload=true,multiuploadinsu=false,singleuploadinsu=false,insuwindow=false">
                                                <img height="200" src="./../dashboard_resources/group/excelupload.png" >

                                            </div>
                                        </div>

                                    </div>

                                    <div v-if="singleuploadinsu">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadinsu=false,multiuploadinsu=false,insuwindow=true" style="float: right"></i>

                                        <div class="row">
                                            <div class="col-5 mr-5 mt-3  border" v-for="(insurance,index) in meta.meta_insurance">
                                                <div class="row p-2">
                                                    <div class="col-3 border bg-w text-center rounded">
                                                        <img class="mt-4" src="./../dashboard_resources/Insurance.png" height="60px" width="45px">
                                                        <p class="f-1-6 mt-3">Insurance</p>
                                                    </div>
                                                    <div class="col-9">
                                                        <div class="row mt-3">
                                                            <div class="col-12 text-center f-1-6" v-if="insurance['url']=='' || insurance['url']==undefined ">
                                                                <p>No file Choosen</p>
                                                                <p><span data-v-0a0b01e2="" class="text-primary f-1-2">(Size: 2MB, Format: JPG,PNG,PDF)</span></p>
                                                                <label class="file_hidden  mt-n2 f-1-6">
                                                                    Choose File
                                                                    <input size="20" id="meta_insurance" type="file" @change="updatemeta_insurance($event,'meta_insurance',index)" />
                                                                </label>
                                                            </div>
                                                            <div class="col-12 text-center f-1-6" v-if="insurance['url']!='' && insurance['url']!=undefined">
                                                                <p class="fw-6">Uploaded</p>
                                                                <div class="row">
                                                                    <div class="col-md-8 ">
                                                                        <a class="download_button mt-n2  f-1-6" target= "_blank" v-bind:href="insurance['url'] ">Download</a>
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <img  @click="meta.meta_insurance.splice(index, 1),deleted_docs.push(insurance['url']) " src="./../dashboard_resources/trash.png" class="hw-3 ">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        <div class="row mt-5">
                                            <div class="col-lg-10 text-center">
                                                <button @click='meta.meta_insurance.push({"url":"","updated":false})' class="btn btn-primary pl-5 pr-5 f-2">Add New Insurance</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="multiuploadinsu">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadinsu=false,multiuploadinsu=false,insuwindow=true" style="float: right"></i>

                                        <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-sending="sendingEventinsu" v-on:vdropzone-success="succcessinsu"  :options="dropzoneOptions"></vue-dropzone>




                                    <div class="row">
                                        <div class="col-md-12  mb-4 mt-5">   <b>Multiple Upload History</b></div>
                                    </div>
<!--                                    <div v-for="insuhist in meta.meta_insu_hist" class="row">-->
<!--                                        <div class="col-md-5">{{insuhist.booking_id}}</div>-->
<!--                                        <div class="col-md-2">{{insuhist.filename}}</div>-->
<!--                                        <div class="col-md-5"><a :href="insuhist.fileurl"  download>{{insuhist.fileurl}}</a></div>-->


<!--                                    </div>-->
                                        <table class="table" style="background-color: white;text-align: center">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col" class="width_20">ID</th>
                                                <th scope="col" class="width_40">Member Name</th>
                                                <th scope="col" class="width_40">File Name</th>
                                                <th scope="col" class="width_20">Status</th>
                                                <th scope="col" class="width_20">File</th>
<!--                                                <th scope="col" class="width_20">Action</th>-->


                                            </tr>
                                            </thead>
                                            <tbody class="f-1-4">
                                            <tr v-for="(doc,index) in metaInsuHistory">
                                                <td>{{index+1}}</td>
                                                <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist' " class="text-secondary">{{doc.booking_id}}</td>
                                                <td v-else><router-link :to="{ name: 'bookings.edit',params:{id:doc.id} }"  >{{ doc.booking_id }}</router-link></td>
                                                <td>{{doc.name}}</td>
                                                <td>{{doc.filename}}</td>
                                                <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist'" style='color:red;'>Error</td>
                                                <td v-else style='color:green;'>Assigned</td>
                                                <td><a class="fa fa-download" aria-hidden="true" :href="doc.fileurl"  download></a> </td>
<!--                                                <td>-->
<!--                                                    <i  v-if="doc.booking_id=='Not Found ' || doc.booking_id=='Duplicate Names Exist'" class="fa fa-trash cursor text-danger" aria-hidden="true" @click="delete_history('insu',index)"/>-->
<!--                                                </td>-->



                                            </tr>
                                            </tbody>
                                        </table>
                                        <pagination :records="meta.meta_insu_hist.length" v-model="page" :per-page="perPage" @paginate="callback">
                                        </pagination>

                                    </div>
                                    <div v-if="inuranceexceupload">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadinsu=false,multiuploadinsu=false,inuranceexceupload=false,insuwindow=true" style="float: right"></i>

                                        <ExcelFileUpload  upload_type="insurance" :hubs="hub_flight" :members="original_mem" @showErrorModal="showUploadFileErrorModal" :grpId="item.id" :agentId="item.agent_id" />


                                    </div>




                                </fieldset>
                            </tab-content>
                            <tab-content title="Passport" icon="fa fa-check">
                                <fieldset>

                                    <div>

                                        <h2 class="col-11 text-right"><a href="#" @click="showModal2=true" class="btn btn-success btn-lg" >Passport Sample Image</a></h2>
                                    <div class="col-md-12">

                                        <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-sending="sendingEventpass"  v-on:vdropzone-success="succcesspass"  :options="dropzoneOptionsPassport"></vue-dropzone>

                                    </div>
                                        <div class="col-lg-12 mt-3" style="border-bottom: 2px solid black"> <b>Not Assigned:</b></div>
                                            <div class="col-lg-12" v-for="(passhis,index) in meta.meta_pass_hist " v-if="passhis['booking_id']==''">

                                                <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                                    <p class="f-1-8 c-grey">Issue Date</p>
                                                    <date-picker

                                                    v-model="passhis['issue_date']"
                                                    @input="err_passport=[]"
                                                    :config="$root.dpconfigDate_disable_future_dates"
                                                    name="exp_date"
                                                    placeholder="dd/mm/yyyy"
                                                >
                                                </date-picker> </div>

                                                <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                                    <p class="f-1-8 c-grey">Exp. Date</p>
                                                    <!--  {"exp_date":"","name_first":"","name_last":"","passportno":"","url":""}--> <date-picker

                                                v-model="passhis['exp_date']"
                                                @input="err_passport=[]"
                                                :config="$root.dpconfigDate_disable_dates"
                                                name="exp_date"
                                                placeholder="dd/mm/yyyy"
                                            >
                                            </date-picker> </div>
                                                 <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                                    <p class="f-1-8 c-grey">Issue Place</p>
                                                    <input  type="text" v-model="passhis['issue_place']"  @input="validate_passport1(index)" class="form-control" placeholder="">
                                                </div>
                                                 <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                            <p class="f-1-8 c-grey">Given Name</p>
                                            <input  type="text" v-model="passhis['name_first']"  @input="validate_passport1(index)" class="form-control" placeholder="">
                                        </div>
                                                 <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                            <p class="f-1-8 c-grey">Sur Name</p>
                                            <input type="text" v-model="passhis['name_last']" class="form-control" placeholder="">
                                        </div>
                                                 <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                            <p class="f-1-8 c-grey">Passport No.</p>
                                            <input  type="text" v-model="passhis['passportno']" class="form-control" placeholder="">
                                        </div>
                                                <div class="col-lg-4 pt-4 pb-4 mt-2 border-right">
                                                <span style="font-size: 12px">   (File Name: {{passhis['filename']}} )</span>
                                                    <div class="row">
                                                        <div class="col-md-10">
                                                            <v-select :clearable="true" placeholder="Select"
                                                                      name="addlocations"
                                                                      label="full_name"
                                                                      @input="updatepasssingle(meta.meta_pass_hist[index],index,$event)"
                                                                      v-model="passhis['booking_id']"
                                                                      :options="groupsmember_with_family"
                                                                      class="bg-light h4 fw-4 mt-2"

                                                            />
                                                        </div>
<!--                                                        <div class="col-md-2">-->
<!--                                                            <i  class="fa fa-trash cursor text-danger" aria-hidden="true" @click="delete_history('pass',index)"/>-->
<!--                                                        </div>-->
                                                    </div>


                                                </div>

                                        </div>

<!--                                        <div class="col-lg-12" v-for="(passhis,index) in meta.meta_pass_hist " v-if="passhis['booking_id']!=''">-->
<!--                                            <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">-->
<!--                                                <p class="f-1-8 c-grey">Exp. Date</p>-->
<!--                                                &lt;!&ndash;  {"exp_date":"","name_first":"","name_last":"","passportno":"",        }&ndash;&gt; <date-picker-->

<!--                                                v-model="passhis['exp_date']"-->
<!--                                                disabled="disabled"-->
<!--                                                :config="$root.dpconfigDate"-->
<!--                                                name="exp_date"-->
<!--                                                placeholder="dd/mm/yyyy"-->
<!--                                            >-->
<!--                                            </date-picker> </div>-->
<!--                                            <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">-->
<!--                                                <p class="f-1-8 c-grey">Given Name</p>-->
<!--                                                <input  disabled="disabled"  type="text" v-model="passhis['name_first']" class="form-control" placeholder="">-->
<!--                                            </div>-->
<!--                                            <div class="col-lg-2 pt-4 pb-4 mt-2 border-right">-->
<!--                                                <p class="f-1-8 c-grey">Sur Name</p>-->
<!--                                                <input  disabled="disabled" type="text" v-model="passhis['name_last']" class="form-control" placeholder="">-->
<!--                                            </div>-->
<!--                                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right">-->
<!--                                                <p class="f-1-8 c-grey">Passport No.</p>-->
<!--                                                <input  disabled="disabled" type="text" v-model="passhis['passportno']" class="form-control" placeholder="">-->
<!--                                            </div>-->
<!--                                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right">-->
<!--                                                <p class="f-1-8 c-grey">File</p>-->
<!--                                                <a :href="passhis['url']" download >{{passhis['filename']}}</a>-->
<!--                                            </div>-->
<!--                                        </div>-->
                                        <div class="col-lg-12 mt-3"> <b>Assigned History:</b></div>

                                        <table class="table" style="background-color: white;text-align: center" >
                                            <thead>
                                            <tr>

                                                <th scope="col" class="width_20">Exp. Date</th>
                                                <th scope="col" class="width_20">Given Name</th>
                                                <th scope="col" class="width_20">Sur Name</th>
                                                <th scope="col" class="width_20">Passport No.</th>
                                                <th scope="col" class="width_20">File</th>


                                            </tr>
                                            </thead>
                                            <tbody class="f-1-4">
                                            <tr v-for="(doc,index) in metaPassportHistory" v-if="doc['booking_id']!=''">

                                                <td>{{doc.exp_date}}</td>
                                                <td>{{doc.name_first}}</td>
                                                <td>{{doc.name_last}}</td>
                                                <td>{{doc.passportno}}</td>
                                                <td><a class="fa fa-download" aria-hidden="true" :href="doc.filename"  download></a> </td>



                                            </tr>
                                            </tbody>
                                        </table>

                                        <pagination :records="meta.meta_pass_hist.length" v-model="page" :per-page="perPage" @paginate="callback">
                                        </pagination>




<!--                                        <div class="row">-->
<!--                                            <div class="col-md-12  mb-4 mt-5">   <b>Multiple Upload History</b></div>-->
<!--                                        </div>-->
<!--                                        <div v-for="insuhist in meta.meta_insu_hist" class="row">-->
<!--                                            <div class="col-md-5">{{insuhist.booking_id}}</div>-->
<!--                                            <div class="col-md-2">{{insuhist.filename}}</div>-->
<!--                                            <div class="col-md-5"><a :href="insuhist.fileurl"  download>{{insuhist.fileurl}}</a></div>-->


<!--                                        </div>-->

                                    </div>



                                </fieldset>
                            </tab-content>
                            <tab-content title="Photo Id" icon="fa fa-check">
                                <fieldset>

                                    <div >


                                        <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-sending="sendingEventphotoid" v-on:vdropzone-success="succcessphoto_id" :options="dropzoneOptions"></vue-dropzone>

                                        <div class="col-lg-12 mt-3" style="border-bottom: 2px solid black"> <b>Not Assigned:</b></div>

                                        <div class="col-lg-12" v-for="(doc,index) in meta.meta_photo_id_hist" v-if="doc.booking_id==''">

                                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right">
                                                <p class="f-1-8 c-grey">Member Name</p>
                                                <input  type="text" v-model="doc.mem_name"   class="form-control" >
                                            </div>
                                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right" >
                                                <p class="f-1-8 c-grey">ID Type</p>

                                                <v-select

                                                    :clearable="false"
                                                    name="addmem"
                                                    label="label"
                                                    :options="[{'label':'Aadhar Card'},{'label':'Pan Card'},{'label':'Driving Licence'},{'label':'Voter Id'}]"
                                                    v-model="doc.id_name"
                                                    class="bg-white"




                                                />

                                            </div>
                                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right">
                                                <p class="f-1-8 c-grey">Id Number</p>
                                                <!--  {"id_num":"","id_name":"","url":""}-->

                                                <input type="text" v-model="doc.id_num"  class="form-control" >

                                            </div>
                                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right">
                                                <span style="font-size: 12px">   (File Name: {{doc.filename}} )</span>
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <v-select  placeholder="Select"
                                                                  name="addid"
                                                                  label="full_name"
                                                                  @input="updatepasspassId(meta.meta_photo_id_hist[index],index,$event)"
                                                                  v-model="doc['data']"
                                                                  :options="groupsmember_with_family"
                                                                  class="bg-light h4 fw-4 mt-2"

                                                        />
                                                    </div>

                                                </div>


                                            </div>


                                        </div>


                                        <div class="col-lg-12 mt-3"> <b>Assigned History:</b></div>

                                        <table class="table" style="background-color: white;text-align: center" >
                                            <thead>
                                            <tr>

                                                <th scope="col" class="width_20">#</th>
                                                <th scope="col" class="width_20">ID</th>
                                                <th scope="col" class="width_40">Member Name</th>
                                                <th scope="col" class="width_40">File Name</th>
                                                <th scope="col" class="width_20">Status</th>
                                                <th scope="col" class="width_20">File</th>


                                            </tr>
                                            </thead>
                                            <tbody class="f-1-4">
                                            <tr v-for="(doc,index) in metaPhotoIdHist" v-if="doc.booking_id!=''">

                                                <td>{{index+1}}</td>
                                                <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist' " class="text-secondary">{{doc.booking_id}}</td>
                                                <td v-else><router-link :to="{ name: 'bookings.edit',params:{id:doc.id} }"  >{{ doc.booking_id }}</router-link></td>
                                                <td>{{doc.mem_name}}</td>
                                                <td>{{doc.filename}}</td>
                                                <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist'" style='color:red;'>Error</td>
                                                <td v-else style='color:green;'>Assigned</td>
                                                <td><a class="fa fa-download" aria-hidden="true" :href="doc.url"  download></a> </td>



                                            </tr>
                                            </tbody>
                                        </table>
                                        <pagination :records="meta.meta_photo_id_hist.length" v-model="page" :per-page="perPage" @paginate="callback">
                                        </pagination>







                                    </div>

                                </fieldset>
                            </tab-content>
                            <tab-content title="Vouchers" icon="fa fa-check">
                                <fieldset>
                                    <div class="row col-10 offset-1" style="background-color: rgb(30, 81, 164);height: 300px;" v-if="voucherwindow">
                                        <div class="col-lg-3"></div>
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="singleuploadvoucher=true,voucherwindow=false">
                                                <img height="200" src="./../dashboard_resources/group/single.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="multiuploadvoucher=true,voucherwindow=false">

                                                <img  height="200" src="./../dashboard_resources/group/multiple.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3"></div>
                                    </div>




                                    <div v-if="singleuploadvoucher">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadvoucher=false,multiuploadvoucher=false,voucherwindow=true" style="float: right"></i>

                                        <div class="row">
                                            <div class="col-5 mr-5 mt-3  border" v-for="(voucher,index) in meta.meta_voucher">
                                                <div class="row p-2">
                                                    <div class="col-3 border bg-w text-center rounded">
                                                        <img class="mt-4" src="./../dashboard_resources/voucher.png" height="60px" width="45px">
                                                        <p class="f-1-6 mt-3">Voucher</p>
                                                    </div>
                                                    <div class="col-9">
                                                        <div class="row mt-3">
                                                            <div class="col-12 text-center f-1-6" v-if="voucher['url']=='' || voucher['url']==undefined">
                                                                <p>No file Choosen</p>
                                                                <p><span data-v-0a0b01e2="" class="text-primary f-1-2">(Size: 2MB, Format: JPG,PNG,PDF)</span></p>
                                                                <label class="file_hidden  mt-n2 f-1-6">
                                                                    Choose File
                                                                    <input size="20" type="file" id="meta_voucher" @change="updatemeta_voucher($event,'meta_voucher',index)" />
                                                                </label>

                                                            </div>
                                                            <div class="col-12 text-center f-1-6" v-if="voucher['url']!='' && voucher['url']!=undefined">
                                                                <p class="fw-6">Uploaded</p>
                                                                <div class="row">
                                                                    <div class="col-md-8 ">
                                                                        <a class="download_button mt-n2  f-1-6" target= "_blank" v-bind:href="voucher['url'] ">Download</a>
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <img  @click="meta.meta_voucher.splice(index, 1),deleted_docs.push(voucher['url']) " src="./../dashboard_resources/trash.png" class="hw-3 ">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-10 text-center">
                                                <button @click='meta.meta_voucher.push({"url":"","updated":false})' class="btn btn-primary pl-5 pr-5 f-2">Add New Voucher</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div v-if="multiuploadvoucher">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadvoucher=false,multiuploadvoucher=false,voucherwindow=true" style="float: right"></i>

                                        <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-sending="sendingEventvoucher" v-on:vdropzone-success="succcessvouchers" :options="dropzoneOptions"></vue-dropzone>

                                        <div class="row">
                                            <div class="col-md-12  mb-4 mt-5">   <b>Multiple Upload History</b></div>
                                        </div>


                                        <table class="table" style="background-color: white;text-align: center">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col" class="width_20">ID</th>
                                                <th scope="col" class="width_40">Member Name</th>
                                                <th scope="col" class="width_40">File Name</th>
                                                <th scope="col" class="width_20">Status</th>
                                                <th scope="col" class="width_20">File</th>
<!--                                                <th scope="col" class="width_20">Action</th>-->


                                            </tr>
                                            </thead>
                                            <tbody class="f-1-4">
                                            <tr v-for="(doc,index) in metaVoucherHist">
                                                <td>{{index+1}}</td>
                                                <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist' " class="text-secondary">{{doc.booking_id}}</td>
                                                <td v-else><router-link :to="{ name: 'bookings.edit',params:{id:doc.id} }"  >{{ doc.booking_id }}</router-link></td>
                                                <td>{{doc.name}}</td>
                                                <td>{{doc.filename}}</td>
                                                <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist'" style='color:red;'>Error</td>
                                                <td v-else style='color:green;'>Assigned</td>
                                                <td><a class="fa fa-download" aria-hidden="true" :href="doc.fileurl"  download></a> </td>
<!--                                                <td>-->
<!--                                                    <i  v-if="doc.booking_id=='Not Found ' || doc.booking_id=='Duplicate Names Exist'" class="fa fa-trash cursor text-danger" aria-hidden="true" @click="delete_history('visa',index)"/>-->
<!--                                                </td>-->



                                            </tr>
                                            </tbody>
                                        </table>
                                        <pagination :records=" meta.meta_voucher_hist.length" v-model="page" :per-page="perPage" @paginate="callback">
                                        </pagination>




                                    </div>

                                </fieldset>
                            </tab-content>
                            <tab-content title="Others" icon="fa fa-check">
                                <fieldset>
                                    <div class="row col-10 offset-1" style="background-color: rgb(30, 81, 164);height: 300px;" v-if="otherwindow">
                                        <div class="col-lg-3"></div>
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="singleuploadother=true,otherwindow=false">
                                                <img height="200" src="./../dashboard_resources/group/single.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3 pt-5" >
                                            <div  @click="multiuploadother=true,otherwindow=false">

                                                <img  height="200" src="./../dashboard_resources/group/multiple.png" >

                                            </div>
                                        </div>
                                        <div class="col-lg-3"></div>
                                    </div>




                                    <div v-if="singleuploadother">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadother=false,multiuploadother=false,otherwindow=true" style="float: right"></i>

                                        <div class="row">
                                            <div class="col-5 mr-5 mt-3  border" v-for="(other,index) in meta.meta_other">
                                                <div class="row p-2">
                                                    <div class="col-3 border bg-w text-center rounded">
                                                        <img class="mt-4" src="./../dashboard_resources/Other.png" height="60px" width="45px">
                                                        <p class="f-1-6 mt-3">Other</p>
                                                    </div>
                                                    <div class="col-9">
                                                        <div class="row mt-3">
                                                            <div class="col-12 text-center f-1-6" v-if="other['url']=='' || other['url']==undefined ">
                                                                <p>No file Choosen</p>
                                                                <p><span data-v-0a0b01e2="" class="text-primary f-1-2">(Size: 2MB, Format: JPG,PNG,PDF)</span></p>
                                                                <label class="file_hidden  mt-n2 f-1-6">
                                                                    Choose File
                                                                    <input type="file" size="20" id="meta_other"  @change="updatemeta_other($event,'meta_other',index)" />
                                                                </label>
                                                            </div>
                                                            <div class="col-12 text-center f-1-6" v-if="other['url']!='' && other['url']!=undefined">
                                                                <p class="fw-6">Uploaded</p>
                                                                <div class="row">
                                                                    <div class="col-md-8 ">
                                                                        <a class="download_button mt-n2  f-1-6" target= "_blank" v-bind:href="other['url'] ">Download</a>
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <img  @click="meta.meta_other.splice(index, 1),deleted_docs.push(other['url'])  " src="./../dashboard_resources/trash.png" class="hw-3 ">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        <div class="row mt-5">
                                            <div class="col-lg-10 text-center">
                                                <button @click='meta.meta_other.push({"url":"","updated":false})' class="btn btn-primary pl-5 pr-5 f-2">Add New Other</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="multiuploadother">
                                        <i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="singleuploadother=false,multiuploadother=false,otherwindow=true" style="float: right"></i>

                                        <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-sending="sendingEventothers" v-on:vdropzone-success="succcessothers" :options="dropzoneOptions"></vue-dropzone>

                                        <div class="row">
                                            <div class="col-md-12  mb-4 mt-5">   <b>Multiple Upload History</b></div>
                                        </div>


                                        <table class="table" style="background-color: white;text-align: center">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col" class="width_20">ID</th>
                                                <th scope="col" class="width_40">Member Name</th>
                                                <th scope="col" class="width_40">File Name</th>
                                                <th scope="col" class="width_20">Status</th>
                                                <th scope="col" class="width_20">File</th>
<!--                                                <th scope="col" class="width_20">Action</th>-->


                                            </tr>
                                            </thead>
                                            <tbody class="f-1-4">
                                            <tr v-for="(doc,index) in metaOtherHist">
                                                <td>{{index+1}}</td>
                                                <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist' " class="text-secondary">{{doc.booking_id}}</td>
                                                <td v-else><router-link :to="{ name: 'bookings.edit',params:{id:doc.id} }"  >{{ doc.booking_id }}</router-link></td>
                                                <td>{{doc.name}}</td>
                                                <td>{{doc.filename}}</td>
                                                <td v-if="doc.booking_id=='Not Found' || doc.booking_id=='Duplicate Names Exist'" style='color:red;'>Error</td>
                                                <td v-else style='color:green;'>Assigned</td>
                                                <td><a class="fa fa-download" aria-hidden="true" :href="doc.fileurl"  download></a> </td>
<!--                                                <td>-->
<!--                                                    <i  v-if="doc.booking_id=='Not Found ' || doc.booking_id=='Duplicate Names Exist'"  class="fa fa-trash cursor text-danger" aria-hidden="true" @click="delete_history('visa',index)"/>-->
<!--                                                </td>-->



                                            </tr>
                                            </tbody>
                                        </table>
                                        <pagination :records="meta.meta_other_hist.length" v-model="page" :per-page="perPage" @paginate="callback">
                                        </pagination>




                                    </div>

                                </fieldset>
                            </tab-content>





                        </form-wizard>
                        <!--                        <div class="row" v-if="license.cost_sheet">-->
<!--                            <div class="col-1 offset-10"><button v-if="submit" class="button-css" @click="submitForm" style="margin-left: -28%;">Submit</button></div>-->
<!--                            <div class="col-1"><button v-if="submit && item.activated!=='1' && license.post_booking_app" class="button-css" @click="submitForm3" >Submit & Activate</button></div>-->
<!--                        </div>-->
                    </div>
                    <!--                    Visa processing-->
                    <div  :class="[visa ? 'activedev' : 'hidedev' ]" class="query-content f-2">

                        <div class="row">
                            <div class="col-lg-12">

                                <div class="col-md-12" style="margin-top: 20px;">
                                        <div class="row" >
                                            <div class="col-md-5">
                                                <div class="col-md-10" >
                                                    <label  class="custom_label m_t2" >Select Hub</label><br>
                                                    <v-select v-model="hub_list_modal"
                                                              :clearable="false"
                                                              name="hub"
                                                              label="hub"
                                                              :options="hub_list"
                                                              style="background:#fff"
                                                              @input="in_hub_modal"


                                                    />
                                                </div>

                                            </div>
                                            <div class="col-md-7" >
                                                <label  class="custom_label m_t2" >Select Appointment Type</label><br>
                                                <div class="row">



                                                    <div class="col-md-4" >
                                                        <div  class="col-md-1" style="margin-top: 3px;">
                                                            <label class="container_input">
                                                                <input  type="checkbox" id="interview" @click="validate_visa_mem('interview','Interview')">
                                                                <span class="checkmark"  style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                            </label></div>

                                                        <div  class="col-md-3" style="font-size: 21px;margin-top: -2px;color: black;">Interview</div>
                                                    </div>
                                                    <div class="col-md-4">

                                                        <div  class="col-md-1" style="margin-right: 13px;margin-top: 3px;">
                                                            <label class="container_input">
                                                                <input  type="checkbox" id="bio_metric" @click="validate_visa_mem('bio_metric','Bio-Metric')">
                                                                <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                            </label></div>


                                                        <div  style="font-size: 21px; margin-top: -2px; color: black;" class="col-md-3-">Bio-Metric</div></div>

                                                </div>
                                            </div>

                                    </div>


                                        </div>

                                    <div class="col-md-12 m_t1" v-for="(visa,index) in visa_appointment">

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="col-md-10" >
                                                    <div class="row">
                                                        <div class="col-md-8">
                                                            <label  class="custom_label m_t2">Date</label><br>
                                                            <date-picker

                                                                :config="$root.dpconfigDate_disable_dates"
                                                                name="interview_date"
                                                                class="summary-in-w"
                                                                style="padding-left: 20px"
                                                                v-model="visa['date']"


                                                            >
                                                            </date-picker>

                                                        </div>
                                                        <div class="col-md-4">
                                                            <label  class="custom_label m_t2">Time</label><br>
                                                            <date-picker
                                                                name="interview_time"
                                                                :config="$root.dpconfigTimeshort"
                                                                style="padding-left: 20px"
                                                                class="summary-in-w"
                                                                v-model="visa['time']"
                                                            >
                                                            </date-picker>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-12 m_t1" v-for="(visa,index) in visa_appointment">

                                        <div class="row" style="margin-left: 0px;">
                                            <div class="col-md-8">
                                                <div class="row" >
                                                    <div class="col-md-6">
                                                        <label  class="custom_label m_t2">City</label><br>
                                                        <input

                                                            type="text"
                                                            class="form-control"
                                                            name="city"
                                                            v-model="visa['city']"


                                                        >

                                                    </div>
                                                    <div class="col-md-6">
                                                        <label  class="custom_label m_t2">Location</label><br>
                                                        <input

                                                            type="text"
                                                            class="form-control"
                                                            name="Location"
                                                            v-model="visa['location']"


                                                        >

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-12 m_t1" v-for="(visa,index) in visa_appointment">

                                        <div class="row" style="margin-left: 0px;">
                                            <div class="col-md-12">
                                                <div class="row" >
                                                    <div class="col-md-4">
                                                        <label  class="custom_label m_t2">Local Contact Name</label><br>
                                                        <input

                                                            type="text"
                                                            class="form-control"
                                                            name="contact_name"
                                                            v-model="visa['local_contact_name']"
                                                            style="width:104%"



                                                        >

                                                    </div>
                                                    <div class="col-md-4">
                                                        <label  class="custom_label m_t2">Contact Number</label><br>
                                                        <input

                                                            type="text"
                                                            class="form-control"
                                                            name="contact_number"
                                                            v-model="visa['local_contact_number']"


                                                        >

                                                    </div>
                                                    <div class="col-md-4">
                                                        <label  class="custom_label m_t2">Upload Appointment Letter</label><br>
                                                        <div class="row" style="margin-top: 5px">
                                                            <div class="col-7 text-center f-1-2" v-if="visa['appointment_letter']!=''">

                                                                <a class="download_button mt-n2 " target= "_blank" v-bind:href="visa['appointment_letter'] ">Download</a>

                                                            </div>
                                                            <div class="col-2 f-1-2" v-if="visa['appointment_letter']!=''">
                                                                <img  @click="visa['appointment_letter']=''" src="./../dashboard_resources/trash.png" class="hw-2">

                                                            </div>
                                                            <div class="col-12 text-center f-1-2" v-else>

                                                                <label class="file_hidden  mt-n2" style="width: 50% !important;">
                                                                    Choose File
                                                                <input type="file" id="appointment_letter" size="20" @change="updatemeta_appintment_letter($event,'appointment_letter',index)" >
                                                                </label>
                                                            </div>
                                                        </div>



                                                    </div>

                                                    <div class="col-md-12">
                                                        <label  class="custom_label">Remark</label><br>
                                                        <input

                                                            type="text"
                                                            class="form-control"
                                                            name="contact_number"
                                                            v-model="visa['remark']"


                                                        >
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-12 m_t4" style="margin-left: 15px;">

                                        <div class="row">
                                            <div class="col-md-3">
                                                <label  class="custom_label m_b2" >Hubwise Traveller List</label>
                                            </div>
                                            <div class="col-md-4" >
                                                <div class="row" >
                                                    <div  class="col-md-2" style="margin-top: 3px;">
                                                        <label class="container_input">
                                                            <input  type="checkbox"  id="select_all" @click="select_mem(1)" >
                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                        </label></div>
                                                    <div  class="col-md-10" style="font-size: 21px;margin-top: -2px;color: black;"><p id="select_text">Select All</p></div>
                                                </div>



                                            </div>
                                            <div class="col-5">
                                                <div class="input-group">
                                                    <input type="text" v-model="localsearch2" class="filter_bar" placeholder="Search" style="margin: unset;width: unset">
                                                    <div class="input-group-append" style="height: 53px">
                                                        <button @click="updatesearch2" class="btn btn-secondary filter_button" v-if="search2"  type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                        <button @click="clearsearch2" class="btn btn-secondary filter_button" v-if="clear2"  type="button">
                                                            <i class="fa fa-times-circle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" style="margin-left: 0px;">

                                        <div class="col-md-4" v-for="(members,index) in allMember" v-if="all_members.length>0">
                                                <div class="row" >
                                                    <div  class="col-md-2" style="margin-top: 3px;" v-if="members.params==0">
                                                        <label class="container_input">
                                                            <input  type="checkbox"  :id="members.id"  :value="members.full_name" v-if="!members.cancel_status">
                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                        </label>
                                                    </div>
                                                    <div  class="col-md-2" style="margin-top: 3px;" v-else-if="members.params==1">
                                                     <i class="fa fa-times f-2-5 text-danger"></i>
                                                    </div>
                                                    <div :alt="members.email" :class="members.cancel_status?'cancelled_pax text-secondary':''" :title="members.email"  class="col-md-10" :style="members.params==1? 'color: grey;' : 'color: black;'"  style="font-size: 21px;margin-top: -2px;"   >
                                                        <sup class="fa fa-star text-warning f-1-2 cursor" title="VIP/CIP Member" aria-hidden="true" v-if="members.meta_vip"></sup>
                                                        {{members.full_name}}
                                                    </div>
                                                </div>



                                            </div>

                                        </div>

                                    </div>

                                    <div class="col-lg-12 text-center ">
                                    <pagination :records="all_members.length" v-model="page" :per-page="perPage" @paginate="callback">
                                    </pagination>

                                        <button @click="send_intimation" class="mt-5 f-2 btn text-light spec-padding button_color" :class="[visa_appointment[0]['Hub']=='' ? 'disabled' : '' ]">Send Intimation</button>

                                    </div>

                            </div>
                        </div>
                        <button @click="changeview('tmlist')" class="button-css">Tour Managers</button>

                    </div>

                    <!--                    Form Feedback-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" v-if="fr" :class="[fr ? 'activedev' : 'hidedev' ]" class="query-content f-2">

                        <div class="container">
                            <div id="accordion" class="accordion">
                                <div class="card mb-0" v-for="data in form_feed_back">
                                    <div class="card-header" data-toggle="collapse" href="#collapseOne">
                                        <a class="card-title" v-for="form_data in data">
                                            <b v-if="form_data.question=='form_name'">{{form_data.ans}}</b>
                                        </a>
                                    </div>
                                    <div id="collapseOne" class="card-body collapse show in" data-parent="#accordion" v-for="form_data in data">
                                        <div class="col-md-12" v-if="form_data.question!=='form_name'">

                                            <div class="col-md-5">{{form_data.question}}</div>
                                            <div class="col-md-2">:</div>
                                            <div class="col-md-5">{{form_data.ans}}</div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <!--                    Interaction History-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" v-show="intraction" class="query-content f-2"  :class="[ intraction ? 'activedev' : 'hidedev' ]">
                        <!--<button @click="test">test</button>-->
                        <badger-accordion ref="myAccordionbooking">
                            <badger-accordion-item v-for="(interact,name) in meta.interactions">


                                <template slot="header"><button class="btn btn-light b-1-5 f-1-8" >{{ name }}</button></template>
                                <template slot="content">
                                    <div v-for="int in interact ">
                                        <div class=" fluid-container">
                                            <div class="row badger-div pl-5">
                                                <div class="col-9 offset-2"><p class="f-2">{{int['title']}}</p></div>
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
                        <!--                        {{opentab()}}-->
                    </div>

                    <!--                    Question Feedback-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" v-if="feedback" :class="[feedback ? 'activedev' : 'hidedev' ]" class="query-content f-2">

                        <div class="container">

                            <div class="btn-group mt-5" style="float: right;" >
                                <button type="button" @click="add_data('feedback','CUSTOMER FEEDBACK')" class="btn btn-primary btn-lg f-1-5 f-w600" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Feedback Report</button>
                            </div>
                            <div class="col-md-12 m-t5" v-for="(value_rating,key_rating,index_rating) in feedback_response[0]"  :key="key_rating+index_rating">

                                <div class="row" v-if="key_rating=='rating'">


                                    <div class="col-md-6" v-for="(value_rating2,key_rating2,index_rating2) in value_rating" :key="key_rating2+index_rating2">
                                        {{key_rating2}}

                                             <feedback-bar :data="value_rating2.ans"></feedback-bar>

                                    </div>

                                </div>
                                <div class="row" v-if="key_rating=='radio'">
                                    <div class="col-md-6" v-for="(value_radio,key_radio,index_radio) in value_rating" :key="key_radio+index_radio">

                                        {{key_radio}}
                                        <feedback-pie  :data="value_radio.ans"></feedback-pie>
                                    </div>

                                </div>


                            </div>
                            <div class="container-fluid m-t5" v-for="(value,key,index) in feedback_response[0]"  :key="key+index">
                                <div class="col-md-12" v-if="key=='all'">

                                    <label  class="custom_label m_t2" >Search via name</label><br>
                                    <v-select
                                        :clearable="false"
                                        name="feedback"
                                        v-model="feedback_members_model"
                                        label="form_name"
                                        :options="JSON.parse(value.members)"
                                        style="width: 400px;margin-left: -16px;background:#fff"
                                    />

                                        <div class="row " v-for="(value2,key2,index2) in value" :key="key2+index2"
                                                :class="key2==feedback_members_model?'mt-5':''"
                                        >


                                            <div class="col-md-12 bg-white" style="padding: 10px;border-radius: 10px;" v-if="key2==feedback_members_model && value2.length>0">
                                                <ul>
                                                    <li v-for="(resp,quesno) in value2" :key="quesno" class="mb-2">


                                                        <span class="text-muted">{{resp.question}}</span><br>
                                                        <span class="font-weight-bolder">{{resp.ans}}</span>

                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-12 bg-white" style="padding: 10px;border-radius: 10px;" v-if="key2==feedback_members_model && value2.length==0">
                                                <h2>No Response Available</h2>
                                            </div>


                                        </div>

                                </div>

                            </div>


                        </div>


                    </div>

                    <!--Costing Module-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" v-if="costing" :class="[costing ? 'activedev' : 'hidedev' ]" class="query-content f-2">

                        <div class="container-fluid">

                            <Costing :hubs="hub_flight" :members="original_mem" @showErrorModal="CostErrorModalPreview" :grpId="item.id" :cost_history="meta.meta_cost_history" />

                        </div>
                    </div>
                                    <!--Poll Response -->
               <div :style="role=='visa'? 'pointer-events: none;':''" :class="[polling ? 'activedev' : 'hidedev' ]" class="query-content f-2" v-if="(pollData.length>0 || opt_in.length>0) && polling">
                    <PollResponse
                    :pollresponse="pollData"
                    :opt="opt_in"
                    :groupRef="item.booking_id"
                    />
                </div> 

                </div>
            </div>


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


            <div v-if="qr_modal">
                    <transition name="modal">
                        <div class="modal-mask">
                            <div class="modal-wrapper">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h2>Carton QR Code  <i class="fa fa-print" title="Print QR" @click="printDiv" aria-hidden="true"></i> </h2>
                                            <button type="button" class="close" @click="qr_modal=false">
                                                <span aria-hidden="true">&times;</span>
                                            </button>

                                        </div>
                                        <div class="modal-body text-center" id="qr_print">

                                            <qrcode-vue :value="qr_value" :foreground="qr_for" :size="400" :renderAs="'svg'" ></qrcode-vue>

<!--                                            <button class="btn btn-primary btn-sm" @click="updateCity(days)">Save</button>-->
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                          </div>
            <div v-if="balance_modal">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog" style="pointer-events: unset;max-width: 80%; ">
                                <div class="modal-content" >
                                    <div class="modal-header">
                                        <h2>Add Balance </h2>
                                        <button type="button" class="close" @click="balance_modal=false">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                    </div>
                                    <div class="modal-body text-center" style="height: 300px; overflow-y: scroll;overflow-x: hidden;">

                                        <table class="table" style="background-color: white;text-align: center">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col" class="">Manager ID</th>
                                                <th scope="col" class="">Manager Name</th>
                                                <th scope="col" class="">Manager Hub</th>
                                                <th scope="col" class="">Mode Of Payment *</th>
                                                <th scope="col" class="">Card Id *</th>
                                                <th scope="col" class="">Select Currency *</th>
                                                <th scope="col" class="">Amount *</th>
                                                <th scope="col" class="">Remark</th>

                                            </tr>
                                            </thead>
                                            <tbody class="f-1-4">
                                            <tr v-for="(manager,index) in this.manager_data" v-if="manager.updated">
                                                <td>{{index+1}}</td>
                                                <td>{{manager.id}}</td>
                                                <td>{{manager.name}}</td>
                                                <td>{{manager.hub}}</td>
                                                <td>
                                                    <v-select

                                                        name="currency_type"
                                                        label="label"
                                                        :options="[{'label':'Card','type':'1'},{'label':'Cash','type':'2'}]"
                                                        @input="manager.mode=$event.type"

                                                    />
                                                </td>
                                                <td>

                                                    <input :disabled="manager.mode==2 || manager.mode==''"   v-model="manager.cardId" placeholder="Enter card Id" type="text" class="form-control">
                                                </td>
                                                <td>
                                                    <vue-bootstrap-typeahead

                                                    :data="currencies"
                                                    size="sm"
                                                    placeholder="INR"
                                                    :serializer="s => s.label"
                                                    @hit="manager.currency=$event.currency"

                                                />
                                                </td>
                                                <td>
                                                    <input  @keypress="isNumber($event)" v-model="manager.amount" type="number" class="form-control">
                                                </td>
                                                <td>
                                                    <input  v-model="manager.remark" type="text" class="form-control">
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <pagination :records="manager_data.length" v-model="page" :per-page="perPage" @paginate="callback">
                                        </pagination>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" @click="update_balance">Add Balance</button>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="balance_modal=false" >Close</button>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <div v-if="livebal_modal!=null">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog" style="pointer-events: unset;max-width: 30%; ">
                                <div class="modal-content" >
                                    <div class="modal-header">
                                        <h2>{{manager_data[livebal_modal].name}} Balance </h2>
                                        <button type="button" class="close" @click="livebal_modal=null">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                    </div>
                                    <div class="modal-body text-center" style="height: 300px; overflow-y: scroll;overflow-x: hidden;">

<!--                                        <div class="container-fluid">-->
<!--                                            <div class="row"-->
<!--                                        </div>-->

                                        <table class="table" style="background-color: white;text-align: center">
                                            <thead>
                                            <tr >
                                                <th scope="col" >#</th>
                                                <th scope="col" >Currency</th>
                                                <th scope="col" >
                                                    <div class="container-fluid">
                                                        <div class="row">
                                                            <div class="col-md-6">Cash Balance</div>
                                                            <div class="col-md-6">Card Balance</div>
                                                        </div>
                                                    </div>

                                                </th>



                                            </tr>
                                            </thead>
                                            <tbody class="f-1-4" >
                                                <tr v-for="(bal,bal_cur,index) in manager_data[livebal_modal].bal">
                                                    <td>{{index+1}}</td>
                                                    <td>{{bal_cur}}</td>
<!--                                                    <td>{{bal[0]}}</td>-->
                                                    <td  v-if="bal.length>1">
                                                        <div class="container-fluid">
                                                            <div class="row">
                                                                <div v-if="bal[0].type==2" class="col-md-6">{{bal[0].cash_amount}}.00</div>
                                                                <div v-else-if="bal[1].type==2" class="col-md-6">{{bal[1].cash_amount}}.00</div>
                                                                <div v-else class="col-md-6"></div>

                                                                <div v-if="bal[0].type==1" class="col-md-6">{{bal[0].cash_amount}}.00</div>
                                                                <div v-else-if="bal[1].type==1" class="col-md-6">{{bal[1].cash_amount}}.00</div>
                                                                <div v-else class="col-md-6"></div>

                                                            </div>
                                                        </div>


                                                    </td>
                                                    <td v-else>
                                                        <div v-if="bal[0].type==2" class="col-md-6">{{bal[0].cash_amount}}.00</div>
                                                        <div v-else class="col-md-6"></div>

                                                        <div v-if="bal[0].type==1" class="col-md-6">{{bal[0].cash_amount}}.00</div>
                                                        <div v-else class="col-md-6"></div>
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="livebal_modal=null" >Close</button>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </section>

        <section class="content" style="display: none">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Edit</h3>
                            </div>

                            <div class="box-body">
                                <back-buttton></back-buttton>
                            </div>

                            <bootstrap-alert />

                            <div class="box-body">
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
                                    <label for="full_name">Full name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="full_name"
                                        placeholder="Enter Full name"
                                        :value="item.full_name"
                                        @input="updateFull_name"
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
                                    <label for="email2">Email2</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        name="email2"
                                        placeholder="Enter Email2"
                                        :value="item.email2"
                                        @input="updateEmail2"
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
                                    <label for="activated">Activated</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="activated"
                                        placeholder="Enter Activated"
                                        :value="item.activated"
                                        @input="updateActivated"
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

                                    <!--                                    <ul id="sortable">-->
                                    <!--                                        <draggable v-model="item.tour_location" group="people" @start="drag=true" @end="drag=false">-->

                                    <!--                                            <location-place-edit-component v-for="(location,index ) in item.tour_location"  :key="location.id" :location="location" :place="places.places_city_id[location.id.split('-')[0]]" :itiplace="item.itinerary_places[location.id]" :index="index" :hotels="hotels[(location.id).split('-')[0]]" :tour_location="item.tour_location" :allitiplace="item.itinerary_places" @addplace="addplace" ></location-place-edit-component>-->
                                    <!--                                        </draggable>-->

                                    <!--                                    </ul>-->


                                    <label for="itinerary_places">Itinerary places</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="itinerary_places"
                                        placeholder="Enter Itinerary places"
                                        :value="item.itinerary_places"
                                        @input="updateItinerary_places"
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
                                    <label for="budget">Budget</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="budget"
                                        placeholder="Enter Budget"
                                        :value="item.budget"
                                        @input="updateBudget"
                                    >
                                </div>
                                <!--                                <div class="form-group">-->
                                <!--                                    <label for="driver_pick_up_time">Driver pick up time</label>-->
                                <!--                                    <input-->
                                <!--                                            type="text"-->
                                <!--                                            class="form-control"-->
                                <!--                                            name="driver_pick_up_time"-->
                                <!--                                            placeholder="Enter Driver pick up time"-->
                                <!--                                            :value="item.driver_pick_up_time"-->
                                <!--                                            @input="updateDriver_pick_up_time"-->
                                <!--                                            >-->
                                <!--                                </div>-->
                                <!--                                <div class="form-group">-->
                                <!--                                    <label for="driver_pick_up_time_updated">Driver pick up time updated</label>-->
                                <!--                                    <input-->
                                <!--                                            type="text"-->
                                <!--                                            class="form-control"-->
                                <!--                                            name="driver_pick_up_time_updated"-->
                                <!--                                            placeholder="Enter Driver pick up time updated"-->
                                <!--                                            :value="item.driver_pick_up_time_updated"-->
                                <!--                                            @input="updateDriver_pick_up_time_updated"-->
                                <!--                                            >-->
                                <!--                                </div>-->
                                <div class="form-group">
                                    <label for="drop_address">Drop address</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="drop_address"
                                        placeholder="Enter Drop address"
                                        :value="item.drop_address"
                                        @input="updateDrop_address"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="handler_name">Handler name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="handler_name"
                                        placeholder="Enter Handler name"
                                        :value="item.handler_name"
                                        @input="updateHandler_name"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="handler_no">Handler no</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="handler_no"
                                        placeholder="Enter Handler no"
                                        :value="item.handler_no"
                                        @input="updateHandler_no"
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
                                    <label for="member_of_iti">Member of iti</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="member_of_iti"
                                        placeholder="Enter Member of iti"
                                        :value="item.member_of_iti"
                                        @input="updateMember_of_iti"
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
                                    <label for="total_price">Total price</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="total_price"
                                        placeholder="Enter Total price"
                                        :value="item.total_price"
                                        @input="updateTotal_price"
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
                                    <label for="selected_car">Selected car</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="selected_car"
                                        placeholder="Enter Selected car"
                                        :value="item.selected_car"
                                        @input="updateSelected_car"
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
                                    <label for="supplier_id">Supplier id</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="supplier_id"
                                        placeholder="Enter Supplier id"
                                        :value="item.supplier_id"
                                        @input="updateSupplier_id"
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
                                    <label for="total_tour_days">Total tour days</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="total_tour_days"
                                        placeholder="Enter Total tour days"
                                        :value="item.total_tour_days"
                                        @input="updateTotal_tour_days"
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
                                    <label for="itinerary_places">Itinerary places</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="itinerary_places"
                                        placeholder="Enter Itinerary places"
                                        :value="item.itinerary_places"
                                        @input="updateItinerary_places"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="itinerary_places_time">Itinerary places time</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="itinerary_places_time"
                                        placeholder="Enter Itinerary places time"
                                        :value="item.itinerary_places_time"
                                        @input="updateItinerary_places_time"
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
        <div v-if="showModal2">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" @click="showModal2=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="modal-body">

                                    <img   src="./../dashboard_resources/passport_sample.png" style="width: 80%;margin: 5% 10% 5% 10%;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div v-if="feedback_model">
            <transition name="modal" >
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" style="pointer-events: unset;max-width: 80%; height: 400px; overflow-y: scroll;overflow-x: hidden;">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <div class="col-md-6">
                                        <h2>Select Feedback Questions</h2>
                                    </div>
                                    <div class="col-md-6">
                                        <button type="button" class="close" @click="feedback_model=false">
                                            <span aria-hidden="true" class="f-2-5">&times;</span>
                                        </button>

                                    </div>

                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="input-group">
                                                <input type="text" v-model="localsearch3" class="filter_bar" style="height: unset;width: unset;background-color: #bfbfbfa6;margin-left:unset;" placeholder="Search">
                                                <div class="input-group-append">
                                                    <button @click="updatesearch3" class="btn btn-secondary "  type="button">
                                                        <i class="fa fa-search"></i>
                                                    </button>
                                                    <button @click="clearsearch3" class="btn btn-secondary "  type="button">
                                                        <i class="fa fa-times-circle"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 text-right">
                                            <button  class="button-css2" @click="save_feedback_questions()" >Submit</button>
                                        </div>
                                    </div>





                                    <table class="table table-striped">
                                        <thead>
                                        <tr >
                                            <th> Select</th>
                                            <th>Question</th>
                                            <th>Question Type</th>
                                            <th>Options</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(feed_ques,index) in feedback_ques">
                                            <td>

                                                <label class="container_input">
<!--                                                    <input  type="checkbox" checked="checked" :id="feed_ques.id+JSON.parse(feed_ques.questions_html).type" >-->
                                                    <input  type="checkbox" v-model="feed_ques.checked" :id="feed_ques.id+feed_ques.type" >
                                                    <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                </label>


                                            </td>
                                            <td>{{feed_ques.question}}</td>
                                            <td>{{feed_ques.type}}</td>
                                            <td v-if="feed_ques.type=='radio'">
                                                <span v-for="(opt,index) in feed_ques.options">
                                                            <p>Option-{{index+1}}: {{opt.key}}</p>

                                              </span>
                                            </td>
                                            <td v-else-if="feed_ques.type=='rating'">
                                                {{feed_ques.length}} Options
                                            </td>
                                            <td v-else>
                                                Paragraph Type
                                            </td>


                                        </tr>
<!--                                        <tr>-->
<!--                                            {{item.tour_location}}-->
<!--                                        </tr>-->

                                        </tbody>
                                    </table>




                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div v-if="flight_data_modal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" style="max-width: 60%;">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" @click="flight_data_modal=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="modal-body">
                                    <div class="col-md-12" v-if="flight_data.status=='success'">
                                        <!--                                               <div class="box">-->
                                        <!--                                                   <div class="ribbon ribbon-top-left"><span>ribbon</span></div>-->
                                        <!--                                                   <div class="ribbon ribbon-top-right"><span>ribbon</span></div>-->

                                        <!--                                               </div>-->
                                        <div class="row">
                                            <div class="col-md-12 pb-5 f-2-5">Airline : {{flight_data.airline_name}} ({{flight_data.carrierFsCode}}-{{flight_data.flightNumber}})</div>
                                            <div class="col-md-6 box_ribbon">

                                                <div class="ribbon ribbon-top-left" v-if="flight_data.dep_track_status=='on_time'"><span class="bg-success">On Time</span></div>
                                                <div class="ribbon ribbon-top-left" v-else><span class="bg-danger">Delayed</span></div>
                                                <div class="row f-1-8">
                                                    <div class="col-md-9 offset-3 ">Departure : {{flight_data.scheduledGateDeparture}}</div>
                                                    <div class="col-md-9 offset-3 " v-if="flight_data.dep_delayed!=''">Delayed : {{flight_data.dep_delayed}}</div>
                                                    <div class="col-md-9 offset-3 ">
                                                        <p class="mt-2 f-1-5" v-if="flight_data.AirportDeparture.name!=''">{{flight_data.departureAirportFsCode}}-{{flight_data.AirportDeparture.name}},{{flight_data.AirportDeparture.city}},{{flight_data.AirportDeparture.countryCode}}</p>
                                                        <p class="mt-2 f-1-5 " v-else>{{flight_data.departureAirportFsCode}}-</p>
                                                    </div>
                                                    <div class="col-md-9 offset-3 ">
                                                        Terminal : {{flight_data.airportResources.departureTerminal}}
                                                    </div>
                                                    <div class="col-md-9 offset-3 ">
                                                        Gate : {{flight_data.airportResources.departureGate}}

                                                    </div>

                                                </div>

                                            </div>
                                            <div class="col-md-6 box_ribbon">

                                                <div class="ribbon ribbon-top-left" v-if="flight_data.arr_track_status=='on_time'"><span class="bg-success">On Time</span></div>
                                                <div class="ribbon ribbon-top-left" v-else><span class="bg-danger">Delayed</span></div>
                                                <div class="row f-1-8">
                                                    <div class="col-md-9 offset-3 ">Arrival : {{flight_data.scheduledGateArrival}}</div>
                                                    <div class="col-md-9 offset-3 " v-if="flight_data.arr_delayed!=''">Delayed : {{flight_data.arr_delayed}}</div>
                                                    <div class="col-md-9 offset-3 ">
                                                        <p class="mt-2 f-1-5" v-if="flight_data.AirportArrival.name!=''">{{flight_data.arrivalAirportFsCode}}-{{flight_data.AirportArrival.name}},{{flight_data.AirportArrival.city}},{{flight_data.AirportArrival.countryCode}}</p>
                                                        <p class="mt-2 f-1-5 " v-else>{{flight_data.arrivalAirportFsCode}}-</p>
                                                    </div>
                                                    <div class="col-md-9 offset-3 ">
                                                        Terminal : {{flight_data.airportResources.arrivalTerminal}}
                                                    </div>
                                                    <div class="col-md-9 offset-3 ">
                                                        Gate : {{flight_data.airportResources.arrivalGate}}
                                                    </div>
                                                </div>

                                            </div>



                                        </div>
                                    </div>
                                    <div class="col-md-12" v-else>{{flight_data.status}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div v-if="csvmodal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper" style="vertical-align: top;!important;">
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
                                        <div class="container m-t5" >
                                            <v-select v-model="forms_data_modal"
                                                      name="forms"
                                                      label="form_name"
                                                      :options="forms_data"
                                                      @input="inmodal_form1"
                                                      style="width: 470px;margin-left: -16px"
                                                      :disabled="form_select"



                                            /><br/>
                                        </div>
                                    </div>

                                    <button  class="btn btn-lg btn-success" @click="showModalBeforeCallingFunction('send_mail-2')">Send Mail</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div v-if="transaction_modal">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" style="pointer-events: unset;max-width: 80%; ">
                            <div class="modal-content" >
                                <div class="modal-header">
                                    <h2>{{transaction_data.driver_name}} Transactions Log </h2>
                                    <button type="button" class="close" @click="transaction_modal=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="modal-body text-center" style="height: 350px; overflow-y: scroll;overflow-x: hidden;">

                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-8">
                                                <div class="row">
                                                    <div class="col-3">
                                                        <h3 >Total Expense:</h3>
                                                    </div>
                                                    <div class="col-9 text-left" >

                                                    <span v-for="(curr_val,currency,index) in transaction_data.total_expenses" v-if="curr_val.value>0" class="badge badge-pill " :class="curr_val.class" style="font-size:11px !important;margin-left: 4px;" >
                                                        {{currency}} {{curr_val.value}}
                                                    </span>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 text-right">

                                                <button class="btn btn-success" @click="bulk_download" style="margin-right: 50px;" :disabled="transaction_data.attachment==null">
                                                    <i class="fa fa-download" aria-hidden="true"></i> &nbsp;
                                                    Bulk Documents Download
                                                </button>
                                                <img data-v-790cf42a="" @click="get_excel_export(transaction_data.driver_id)" class="extension_img cursor" src="./../dashboard_resources/excel.png" alt="Download Excel" title="Download Excel">
                                            </div>

                                        </div>
                                    </div>
                                    <hr/>
                                        <table class="table table-bordered table-hover">
                                        <thead class="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Transaction type</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Mode</th>
                                            <th scope="col">Currency</th>
                                            <th scope="col">Cost</th>
                                            <th scope="col">Balance</th>
                                            <th scope="col" title="Rate Of Exchange">ROE</th>
                                            <th scope="col">Remark </th>
                                            <th scope="col">Document</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(data,index) in transaction_data.data" :key="index+data.id" v-if="data.transfer_status!=1">
                                            <th scope="row">{{index+1}}</th>
                                            <td>{{ data.time_of_transaction | formatDate}}</td>
                                            <td>
                                                <p v-if="data.transaction_type==1" class="text-danger">Expense <b v-if="data.transfer_to_name!=''"><br> (Transfer to {{data.transfer_to_name}})</b></p>
                                                <p v-else-if="data.transaction_type==2" class="text-success">Added <b v-if="data.transfer_from_name!=''"><br> (Transfer from {{data.transfer_from_name}})</b></p>
                                                <p v-else-if="data.transaction_type==3" class="text-primary">Transfer</p>
                                                <p v-else class="text-primary">Exchange</p>
                                            </td>
                                            <td>

                                                <p v-if="data.category=='tm_transfer'">Transfer</p>
                                                <p v-else-if="data.category=='atm_same_currency'">ATM Same Currency withdrawal</p>
                                                <p v-else-if="data.category=='atm_cross_currency'">ATM Cross Currency withdrawal</p>
                                                <p v-else-if="data.category=='misc_collection'">Miscellaneous Collection</p>
                                                <p v-else-if="data.category=='cross_currency_by_card'">Cross Currency Exchange By Card</p>
                                                <p v-else-if="data.category=='own_money'">Added Self Balance ({{data.sub_category.toUpperCase()}})</p>
                                                <p v-else>{{data.category}}</p>

                                            </td>
                                            <td>

                                                <p v-if="data.transaction_by==1" >Card</p>
                                                <p v-else>Cash</p>
                                            </td>

                                            <td>{{data.currency}}</td>
                                            <td>
                                                <p v-if="data.transaction_type==1" class="text-danger">- {{data.transaction_amount.toString().substr(0,5)}}</p>
                                                <p v-else-if="data.transaction_type==2" class="text-success">+ {{data.transaction_amount.toString().substr(0,5)}}</p>
                                                <p v-else class="text-primary">- {{data.transaction_amount.toString().substr(0,5)}}</p>

                                            </td>
                                            <td>{{ data.live_balance.toString().substr(0,5)}}</td>
                                            <td>{{ data.roe}}</td>
                                            <td>{{data.description}}</td>
                                            <td>
                                                <a
                                                    v-if="data.image!=null &&
                                                    data.image!=''"
                                                    title="Preview"
                                                    alt="Preview"
                                                    :href="data.image"
                                                    target="_blank"
                                                    class="fa fa-eye">

                                                </a>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>

                                </div>
                                <div class="modal-footer">

                                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="transaction_modal=false" >Close</button>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div v-if="add_hub">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title" id="exampleModalLongTitle">Add New Hub</h3>
                                    <button type="button" class="close"  @click="add_hub=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <input
                                        type="text"
                                        class="form-control"
                                        ref="newHubname"
                                        placeholder="Enter New HUB"
                                    >

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"  @click="add_hub=false">Close</button>
                                    <button type="button" class="btn btn-success" @click="addHubs">Add Hub</button>
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
    import HotelComponent from '../../cruds/hotelcompbooking'
    import DayplanComponent from '../../cruds/dayplancompgroupedit'
    import draggable from 'vuedraggable'
    import {FormWizard, TabContent,WizardButton,WizardStep} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    import { VueTelInput } from 'vue-tel-input'
    import uploadfile from '../../../mixins/uploadfile'
    
    import built_interaction from '../../../mixins/builtinteraction'
    import ColorPicker from 'vue-color-picker-wheel';
    import moment from 'moment-timezone'
    import documentlink from "../../dtmodules/documentlink";
    import GetPaymentType from "../../dtmodules/GetPaymentType";
    import JsZip from 'jszip'
    import { saveAs } from 'file-saver';
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import QrcodeVue from 'qrcode.vue'
    import FeedbackBar from '../../cruds/feedback_bar_chart'
    import FeedbackPie from '../../cruds/feedback_pie_chart'
    import Currency from '../../cruds/dashboard_resources/currencies.json'
    import thfilter from "../../dtmodules/th-Filter";
    import ExcelTicketUpload from "./Components/ExcelTicketUpload";
    import Costing from "./Components/Costing";
    import ExcelFileUpload from "./Components/ExcelFileUpload";
    import ExcelVisaProcessing from "./Components/ExcelVisaProcessing";
    import SheetsHistory from "./SheetsHistory";
    import MailTags from "../../dtmodules/MailTags";
    import PrePopulatedFields from "./Components/PrePopulatedFields";
    import PersonaliseApp from "./Components/PersonaliseApp";
    import PollResponse from "./Components/PollResponse.vue";


    export default {

        data() {
            return {
                add_hub:false,
                splitGroup:true,
                CountDates:0,
                creathub:false,
                alldone:true,
                NewHubs:[{city:[{hubName:'',date:'',total:''}]}],
                AirportHubName:[],

                page: 1,
                perPage: 50,
                records:[],
                allHubArray:[],
                HubIndex:0,
                dateIndx:0,
                livebal_modal:null,
                currencies:Currency,
                manager_data:[],
                balance_modal:'',
                member_lisT:'',
                showModal2:false,
                prog:false,
                transitionDuration:100,
                animateDuration:"loop 17000 100",
                completedSteps: 0,
                totalSteps: 10,

                feedback_model:false,
                selectall:false,
                actualdata:[],
                actualdata2:[],
                feedback_ques:[],
                localsearch3:'',
                localsearch4:'',
                preview:false,
                form_preview:[],
                background_url:'',
                dropzoneOptions: {
                    url: location.origin+'/api/webservices/uploadmemberdoc',
                    thumbnailWidth: 150,
                    maxFilesize: 5, // MB
                    createImageThumbnails: true,
              //      headers: { 'content-type': 'multipart/form-data ; charset=utf-8; boundary=' + Math.random().toString().substr(2)}
                },
                dropzoneOptionsPassport: {
                    throw_error:'',
                    url: location.origin+'/api/webservices/uploadmemberdoc',
                    thumbnailWidth: 150,
                    maxFilesize: 5, // MB
                    createImageThumbnails: true,
                    acceptedFiles:'application/pdf',

                    accept: function(file, done) {

                        if(file.type=='application/pdf'){
                            done();
                        }
                        else{

                            done("Only PDF File Allowed !");


                        }
                    }

                    //      headers: { 'content-type': 'multipart/form-data ; charset=utf-8; boundary=' + Math.random().toString().substr(2)}
                },
                updatemembers_fields:{'driverpickuptime':false,'tourcost':false,'visa':false,
                    'servicevouc':false,'insurance':false,'passport':false,'photoid':false,'others':false,'flight':false,
                    'hotels':false,'dayplan':false,'reqdocs':false,
                    'contacts':false,'feedback':false,'exhi':false,'support':false},

                membermodel:false,
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
                local_meta_doc_req:[],

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
                qr_modal:false,
                qr_value:'',
                qr_for:'#182969',
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
                fr:false,
                feedback:false,
                groupactive:false,
                createlist:false,
                tmlist:false,

                embed:false,
                live:false,
                visa:false,
                app:false,
                inventory:false,
                costing:false,

                singleuploadvisa:false,
                multiuploadvisa:false,
                visawindow:true,

                singleuploadinsu:false,
                multiuploadinsu:false,
                insuwindow:true,

                singleuploadvoucher:false,
                multiuploadvoucher:false,
                voucherwindow:true,

                singleuploadother:false,
                multiuploadother:false,
                otherwindow:true,

                singleuploadphotoid:false,
                multiuploadphotoid:false,
                photoidwindow:true,

                singleuploadpass:false,
                multiuploadpass:true,
                passwindow:true,
                passportallo:{"exp_date":"","issue_date":"","issue_place":"","name_first":"","name_last":"","passportno":"","url":"","url2":"","pdf":"","updated":false},

                singleuploadflight:false,
                multiuploadflight:false,
                flightallocation:false,
                flightexceupload:false,
                visaexceupload:false,
                inuranceexceupload:false,
                flightwindow:true,
                flightdata:{"date": "", "dep_code": "","arr_date": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight","updated":false},
                flightdataallo:{"date": "", "dep_code": "","arr_date": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight","sector":[],"updated":false},
                accordion:false,
                accordion2:false,
                accordion3:true,
                accordion4:false,
                accordion5:false,

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
                sns_data:[],
                sns_data_count:0,
                airport_codes:'',
                show_update_button:0,
                interaction_visit:0,
                license:{},
                show_modal:false,
                show_modal2:false,
                forms_data:'',
                forms_data_modal:[],
                selected_form:null,
                hub_list_modal:{"hub":""},
                form_feed_back:[],
                form_button:false,
                loading2:false,
                loading3:false,
                send_form_button:true,
                agency_logo:'',
                doc_req_list:[],
                add_doc_tag:'',
                csvmodal:false,
                forms_data:[],
                form_url:'',
                loading2:false,
                form_id:'',
                members_data:[],
                members_data_filtered:[],
                hub_list:[],
                hub_flight:[],
                flight_hub_filter:[],
                visa_process:[],
                visa_appointment:[{"date":"","time":"","city":"","location":"","local_contact_name":"","local_contact_number":"","appointment_letter":"","Hub":'',"remark":""}],
                visa_history:[],
                original_mem:[],
                member_data:[],
                groupsmember_with_family:[],
                button_text:"Mail",
                role:'',
                arr_code_allocation:'',
                err_passport:[],
                err_passport1:[],
                localsearch:'',
                localsearch2:'',
                invalid_member_data:[],
                json_fields2: {
                    'Traveller_name': 'Traveller_name',
                    'Email':'Email',
                    'Phone':'Phone',
                    'Remark':'remark',

                },
                invalid_mem_modal:false,


                clear:false,
                search:true,
                clear2:false,
                search2:true,
                currency_all:{"AED":0,"AFN":0,"ALL":0,"AMD":0,"ANG":0,"AOA":0,"ARS":0,"AUD":0,"AWG":0,"AZN":0,"BAM":0,"BBD":0,"BDT":0,"BGN":0,"BHD":0,"BIF":0,"BMD":0,"BND":0,"BOB":0,"BRL":0,"BSD":0,"BTN":0,"BWP":0,"BYR":0,"BZD":0,"CAD":0,"CDF":0,"CHF":0,"CLP":0,"CNY":0,"COP":0,"CRC":0,"CUC":0,"CVE":0,"CZK":0,"DJF":0,"DKK":0,"DOP":0,"DZD":0,"EEK":0,"EGP":0,"ERN":0,"ETB":0,"EUR":0,"FJD":0,"FKP":0,"GBP":0,"GEL":0,"GHS":0,"GIP":0,"GMD":0,"GNF":0,"GQE":0,"GTQ":0,"GYD":0,"HKD":0,"HNL":0,"HRK":0,"HTG":0,"HUF":0,"IDR":0,"ILS":0,"INR":0,"IQD":0,"IRR":0,"ISK":0,"JMD":0,"JOD":0,"JPY":0,"KES":0,"KGS":0,"KHR":0,"KMF":0,"KPW":0,"KRW":0,"KWD":0,"KYD":0,"KZT":0,"LAK":0,"LBP":0,"LKR":0,"LRD":0,"LSL":0,"LTL":0,"LVL":0,"LYD":0,"MAD":0,"MDL":0,"MGA":0,"MKD":0,"MMK":0,"MNT":0,"MOP":0,"MRO":0,"MUR":0,"MVR":0,"MWK":0,"MXN":0,"MYR":0,"MZM":0,"NAD":0,"NGN":0,"NIO":0,"NOK":0,"NPR":0,"NZD":0,"OMR":0,"PAB":0,"PEN":0,"PGK":0,"PHP":0,"PKR":0,"PLN":0,"PYG":0,"QAR":0,"RON":0,"RSD":0,"RUB":0,"SAR":0,"SBD":0,"SCR":0,"SDG":0,"SEK":0,"SGD":0,"SHP":0,"SLL":0,"SOS":0,"SRD":0,"SYP":0,"SZL":0,"THB":0,"TJS":0,"TMT":0,"TND":0,"TRY":0,"TTD":0,"TWD":0,"TZS":0,"UAH":0,"UGX":0,"USD":0,"UYU":0,"UZS":0,"VEB":0,"VND":0,"VUV":0,"WST":0,"XAF":0,"XCD":0,"XDR":0,"XOF":0,"XPF":0,"YER":0,"ZAR":0,"ZMK":0,"ZWR":0},
                currency_flag:true,
                allocationticketids:[],
                feedback_response:[],
                feedback_members_model:"",
                upload_member_status:'',
                json_data:'',
                csv_active_option:0,
                excel_file:'',
                file_upload_status:0,
                flight_data:'',
                flight_data_modal:false,
                form_select:false,
                show_excel_button:false,
                login_code:'',
                deleted_docs:[],
                mantraData:"",
                tm_data:[],
                tm_data_replica:[],
                tm_mode:'creation',
                transaction_modal:false,
                transaction_data:[],
                visaProcessingSection:{
                    "window":true,
                    "manualUpload":false,
                    "excelUpload":false,

                },
                uploaded_members:{'total':0,'uploaded':0},
                newInsatance: new Vue(),
                pollData:[],
                opt_in:[],
                polling: false,

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
            formatDate: function(value){
                if(value){
                    return moment(String(value)).format('DD-MM-YYYY')
                }
            },
        },
        computed: {

            ...mapGetters('GroupsSingle', ['all_member_upload_sheet','csvupload_reg','csvupload','item', 'loading', 'tourAll', 'places', 'cityid', 'hotels', 'cityAll', 'meta', 'tourdata','search','meta_form_id','all_members','all_members_filtered','excel_uploaded_members']),

            memberData(){
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.member_data.slice(startIndex, endIndex);



            },
            allMember() {

                    const startIndex = this.perPage * (this.page - 1);
                    const endIndex = startIndex + this.perPage;
                    return this.all_members.slice(startIndex, endIndex);

                },
            metaVisaHistory(){
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.meta.meta_visa_hist.slice(startIndex, endIndex);


            },
            metaFlightHistory(){
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.meta.meta_flight_hist.slice(startIndex, endIndex);


            },
            metaInsuHistory(){
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.meta.meta_insu_hist.slice(startIndex, endIndex);
},
            metaPassportHistory(){
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.meta.meta_pass_hist.slice(startIndex, endIndex);
 },
 metaPhotoIdHist(){
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.meta.meta_photo_id_hist.slice(startIndex, endIndex);
            },
            metaVoucherHist(){
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.meta.meta_voucher_hist.slice(startIndex, endIndex);
            },
            metaOtherHist(){
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.meta.meta_other_hist.slice(startIndex, endIndex);
            },
            managerData(){
                const startIndex = this.perPage * (this.page - 1);
                const endIndex = startIndex + this.perPage;
                return this.manager_data.slice(startIndex, endIndex);
            },

            visa_history_interview: function(){
                let return_arr=[]
                this.member_data.forEach((data)=>{

                    let status=2;
                    let type='';
                    let date='';
                    let time='';
                    if(data.meta_visa_history.length>0){
                        data.meta_visa_history.forEach((data)=>{
                            if(data.type=='Interview'){
                                type=data.type;
                                date=data.details.date;
                                time=data.details.time;
                                status=data.status;
                            }
                        })
                    }
                    return_arr.push({'name':data.full_name,'type': type,'date':date,'time':time,'status':status});
                })


                return return_arr;
            },
            visa_history_bio: function(){

                let return_arr=[]
                this.member_data.forEach((data)=>{

                    let status=2;
                    let type='';
                    let date='';
                    let time='';
                    if(data.meta_visa_history.length>0){
                        data.meta_visa_history.forEach((data)=>{
                            if(data.type=='Bio-Metric'){
                                type=data.type;
                                date=data.details.date;
                                time=data.details.time;
                                status=data.status;
                            }
                        })
                    }
                    return_arr.push({'name':data.full_name,'type': type,'date':date,'time':time,'status':status});
                })


                return return_arr;
            },


        },
        mounted() {
            // this.allHubArray[ind].dates.push({date:'',total:'',flag:false,totalPassangerEdit:''})

            this.setcolumn(['tour_manager',
                'date',
                'type',
                'currency',
                'cost',
                'remark',
                'doc']);
            if (_.isEmpty(this.meta.meta_exp_costflight)) {

                this.meta.meta_exp_costflight.push({
                    "type": "flight",
                    "title": "",
                    "qty": "",
                    "unit": "",
                    "price": "",
                    "ref": "flt",
                    "fix":"no"
                });

            }


        },
        created() {
this.member_lisT="/members/"+this.$route.params.id;
            // this.$router.push({path: '/groups/' + this.$route.params.book_id + '/edit'})
            this.role=document.querySelector("meta[name='user-role']").getAttribute('content')
            if(this.$route.params.invalid_mem_status){
                if(this.$route.params.error_section){

                    axios.get('/api/webservices/fetch_active_booking_of_group?id='+this.$route.params.id)
                        .then(response => {
                            this.upload_member_status=''+response_data.data+' members loaded successfully. Something went wrong ,Please Re-Upload the file';
                            this.invalid_member_data=this.$route.params.invalid_mem;
                            this.invalid_mem_modal=true;
                            this.show_excel_button=false;
                            this.file_upload_status=1;


                        })
                        .catch(error => {
                            alert(error);
                        })

                }
                else{
                    // this.upload_member_status=this.$route.params.upload_status;
                    // this.invalid_member_data=this.$route.params.invalid_mem;
                    // this.invalid_mem_modal=true;
                    // this.file_upload_status=1;
                    // this.show_excel_button=true;
                }



            }
            var user_id=document.querySelector("meta[name='user-id']").getAttribute('content');
            var role=document.querySelector("meta[name='user-role']").getAttribute('content');


            var base_url = window.location.origin;
            this.background_url=base_url+'/dashboard_resources/background_doc.png';
            // this.$root.booking_ref_id={'booking_id':this.item.booking_id,'id':this.item.id}
            axios.get('/api/v1/form_ids')
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
            this.fetchCityAll();
            this.fetchTourAll()
            axios.get('/api/v1/forms')
                .then(response =>{
                    this.forms_data=response.data.data;
                    // console.log(this.forms_data);
                });

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
            // this.$on('meta.interaction:ready', () => {
            //     this.opentab();
            //
            // })

            // this.setdriver_pick_up_time(this.lead_data.date + ' 00:00:00')
            // this.setTraveler_name(this.lead_data.name)
            // this.setNo_of_adults(this.lead_data.adult_guest)
            // this.setNo_of_children(this.lead_data.kids_guests)
            // this.setNote(this.lead_data.remark)
            // this.setPhone(this.lead_data.phone)
            // this.setEmail(this.lead_data.email)
            // this.setmeta_infant(this.lead_data.infant_guest)

            this.fetchData(this.$route.params.id);

            axios.get('/api/v1/groupsmember/' + this.$route.params.id)
                .then(response => {
                    this.member_data= response.data.data
                    this.original_mem= response.data.data
                })
            axios.get('/api/v1/groupsmember_with_family/' + this.$route.params.id)
                .then(response => {
                    this.groupsmember_with_family= response.data

                })



            for (var key in this.item.itinerary_places) {

                this.places.cites.push({[key]:this.item.itinerary_places[key]})

                //  console.log(this.item.itinerary_places);
                this.fetchplace(key.split('-')[0]);
            }

            // fetch airport codes
            axios.post('/api/webservices/airport_codes' )
                .then(response => {this.airport_codes=response.data
                    //
                    console.log(this.airport_codes)
                })

        },
        updated(){

            //  alert(this.item.itinerary_places);
            if(this.i<2){


                for (var key in this.item.itinerary_places) {
                    //     alert("hello");

                    this.places.cites.push(this.item.itinerary_places[key])

                    console.log(this.item.itinerary_places);
                    this.fetchplace(key.split('-')[0]);
                    this.fetchhotel(key.split('-')[0])
                }
                this.i++;
            }
        },
        watch: {

            "meta.feedback_ques": function () {

                if(this.meta.feedback_ques.length>0){
                    let ques_data=[];
                    axios.get('/api/webservices/feedback_questions?type=group&source=0&id='+this.$route.params.id)
                        .then(response => {

                            response.data.forEach( (dataObj) => {
                                let match1=dataObj.question;
                                let flag=0;

                                this.meta.feedback_ques.forEach((data)=>{
                                    let match2=data.question;
                                    if(match1==match2 && flag==0){
                                        flag++;
                                    }
                                })
                                if(flag>0){
                                    dataObj.checked=1;
                                }
                                else if(flag==0){
                                    dataObj.checked=0;
                                }
                                ques_data.push(dataObj);
                            })
                            this.feedback_ques=_.cloneDeep(ques_data);
                        })
                        .catch(error => {
                            alert(error);
                        })




                }
                else if(this.meta.feedback_ques.length==0){
                    let user_id=document.querySelector("meta[name='user-id']").getAttribute('content');
                    let role=document.querySelector("meta[name='user-role']").getAttribute('content');



                        axios.get('/api/webservices/feedback_questions?type=group&source=1&id='+this.$route.params.id)
                            .then(response => {

                                this.feedback_ques=_.cloneDeep(response.data);
                            })
                            .catch(error => {
                                alert(error);
                            })



                }




            },
            "errormodal": function() {
                if(!this.errormodal){
                    this.errors=[];
                }

            },
            "item.booking_id": function() {
                this.$root.booking_ref_id={'booking_id':this.item.booking_id,'id':this.item.id}
                axios.get('/api/v1/groupsmember/' + this.item.id)

            .then(response => {this.members_data=response.data.data



                for(var j=0;j<this.members_data.length;j++){
                    this.hub_list.push(this.members_data[j]['visa_Hub']);
                    this.hub_flight.push(this.members_data[j]['airport_hub']);

                }


                this.hub_list = [ ...new Set(this.hub_list) ]
                var return_arr=[];
                for(var k=0;k<this.hub_list.length;k++){

                    return_arr.push({
                        'hub' : this.hub_list[k]
                    });
                }
                this.hub_list=return_arr;


                this.hub_flight = [ ...new Set(this.hub_flight) ]
                var return_arr2=[];
                for(var k2=0;k2<this.hub_flight.length;k2++){

                    return_arr2.push({
                        'hub' : this.hub_flight[k2]
                    });
                }
                this.hub_flight=return_arr2;


            });

                let params=new FormData();
                params.set('book_id',this.item.booking_id);
                axios.post('/api/webservices/form_feedback' , params)
                    .then(response => {this.form_feed_back=response.data
                        if(this.form_feed_back.length==0){
                            this.form_button=true;
                        }
                        else{
                            this.form_button=false;
                        }

                    });
                if(this.item.get_meta!=''){
                    for (var t=0;t<this.item.get_meta.length;t++){
                        if(this.item.get_meta[t]['meta_key']=='meta_visa_history'){
                            this.visa_history=JSON.parse(this.item.get_meta[t]['meta_value']);
                            // console.log(JSON.parse(this.item.get_meta[t]['meta_value']));
                        }
                         // mantraData only for tc/sotc
                        if(this.item.get_meta[t]['meta_key']=='mantra_data'){
                            this.mantraData=JSON.parse(this.item.get_meta[t]['meta_value']);

                        }

                    }
                }
                let feedback=new FormData();
                feedback.set('id',this.item.id);
                axios.post('/api/webservices/fetch_feedback_response',feedback)
                    .then(res=>{

                        this.feedback_response=res.data;

                    })
                if (this.meta.meta_flight.length < 1) {

                    this.meta.meta_flight = [{"date": "", "dep_code": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight","updated":false}]
                }
                this.login_code=this.item.get_login_code[0].login_code;

                        // checking poll response

                axios.get('/api/v1/getPollResponse/'+this.item.id)
                .then(response => {
                    if (response.data.status == true) {
                        // console.log("gfrhgfh",JSON.stringify(response.data.data.opt_in));
                        if (response.data.data.other_poll) {
                        this.pollData = response.data.data.other_poll;
                        }
                        if (response.data.data.opt_in) {
                        this.opt_in = response.data.data.opt_in;
                        }
                    }

                })

            },
            "$route.params.id": function() {
                this.resetState()
                this.fetchData(this.$route.params.id)
            },
            "locations": function () {
                this.inmodalnew();

            },
            "meta.meta_passport": function () {
                if (this.meta.meta_passport.length < 1) {

                    this.meta.meta_passport = [{"exp_date":"","issue_date":"","issue_place":"","name_first":"","name_last":"","passportno":"","url":"","url2":"","pdf":"","updated":false}]
                }

            },
            "meta.meta_visa": function () {
                if (this.meta.meta_visa.length < 1) {

                    this.meta.meta_visa = [{"url": "","updated":false}]
                }

            },
            "meta.meta_voucher": function () {
                if (this.meta.meta_voucher.length < 1) {

                    this.meta.meta_voucher = [{"url": "","updated":false}]
                }

            },
            "meta.meta_insurance": function () {
                if (this.meta.meta_insurance.length < 1) {

                    this.meta.meta_insurance = [{"url": "","updated":false}]
                }

            },
            "meta.meta_other": function () {
                if (this.meta.meta_other.length < 1) {

                    this.meta.meta_other = [{"url": "","updated":false}]
                }

            },
            "meta.meta_photo_id": function () {
                if (this.meta.meta_photo_id.length < 1) {

                    this.meta.meta_photo_id = [{"id_num":"","id_name":"","mem_name":"","url":""}]
                }

            },
            "meta.travel_Hubs":function(){
                if(this.meta.travel_Hubs.length == 0){
                    // this.allHubArray.push(({Hub:'',dates:[{date:'',total:'',used:0,flag:false,members:[],totalEdit:false}],hubDone:false}));
                    // this.creathub=false;
                }else{
                    this.allHubArray = _.cloneDeep(this.meta.travel_Hubs)
                    // this.creathub=true;
                }

            },
            "meta.meta_forms": function () {


                if(this.meta.meta_forms){
                    if(this.meta.meta_forms.length>0){
                        let last_remark=this.meta.meta_forms[this.meta.meta_forms.length-1];
                        var arr=[];
                        this.forms_data.forEach((data)=>{

                            if(last_remark==data.id){
                                // arr.push(data);
                                this.forms_data_modal=data;
                                this.selected_form=data;
                                this.form_select=true;
                            }
                        })

                        // if(arr.length>0){
                        // this.forms_data_modal=arr[0];
                        // this.selected_form=arr[0];
                        // this.form_select=true;
                        // }
                    }

                }

            },
            "item.tour_location": {



                handler(newval, oldVal){
                    if(this.set_tourlocation==0) {
                        this.set_tourlocation = 1;

                        this.days_count = 0;
                        newval.forEach( (dataObj) => {

                            // item.tour_location[index]['daynights']=parent(dataObj.days)+1
                            //     alert(dataObj.days);
                            this.days_count=Number(this.days_count) + Number(dataObj.days);
                            //  alert(this.days_count);
                        });

                        if(JSON.stringify(this.places.cites)!==JSON.stringify(newval)){
                            this.places.cites=newval;


                            this.places.cites.forEach((val) => {

                                console.log(val.id);
                                var gg=val.id;


                                this.fetchplace(gg.split('-')[0]);
                                this.fetchhotel(gg.split('-')[0])
                            });

                        }

                    }
                    else {


                        if(JSON.stringify(this.places.cites)!==JSON.stringify(newval)){
                            this.places.cites=newval;


                            this.places.cites.forEach((val) => {

                                console.log(val.id);
                                var gg=val.id;


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
                                    "unit": "u",
                                    "price": "",
                                    "rate": 1,
                                    "ref": "flt",
                                    "fix":dataObj1.url
                                })


                            }
                            else {
                                if(dataObj1.ticket!='' && typeof dataObj1.ticket!=="undefined"){

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
            "meta.managers_data":function(){
                if(this.meta.managers_data.length>0 && this.tm_mode=='creation'){

                    this.meta.managers_data.forEach((manager)=>{

                        this.manager_data.push({"id":manager.id,"name":manager.name,"number":manager.number,"email":manager.email,"hub":manager.hub!="undefined"?manager.hub:'',"mode":'',"currency":'',"cardId":'',"amount":'','bal':'','remark':'','status':true,'updated':true,'submission_status':''})
                    })
                    const return_arr=[];

                    axios.get('/api/v1/getManagers')
                        .then(response => {

                            const return_arr=[];
                            let status=true;
                            if(response.data.status) {
                                response.data.data.forEach((managers_new)=>{

                                    status=true;
                                    if(this.meta.approvers_data){

                                        if(this.meta.approvers_data['L1']!=null || this.meta.approvers_data['L2']!=null || this.meta.approvers_data['L3']!=null || this.meta.approvers_data['L4']!=null){
                                            if(
                                                this.meta.approvers_data['L1']==managers_new.refId ||
                                                this.meta.approvers_data['L2']==managers_new.refId ||
                                                this.meta.approvers_data['L3']==managers_new.refId ||
                                                this.meta.approvers_data['L4']==managers_new.refId

                                            ){
                                                status=false;
                                            }
                                        }
                                    }




                                    if(status){
                                        const manager_index=this.manager_data.findIndex(old_manger=>old_manger.id===managers_new.id)
                                        if(manager_index<0){
                                            return_arr.push(managers_new);
                                        }
                                        this.tm_data.push(managers_new);
                                    }

                                })
                                if(return_arr.length>0){
                                    this.tm_data_replica = _.cloneDeep(return_arr);
                                }
                            }

                        })




                }
            },
            "item.uploaded_sheets":function(){
                // uploaded_members:{'total':0,'uploaded':0}
                console.log('item.uploaded_sheets----',this.item.uploaded_sheets);
                this.item.uploaded_sheets.forEach((data)=>{
                    this.uploaded_members.total=this.uploaded_members.total+data.total_members;
                    this.uploaded_members.uploaded=this.uploaded_members.uploaded+data.last_index;
                })
                console.log('item.uploaded_sheets----2222222222222',this.uploaded_members);

            },

        },
        destroyed() {
            this.resetState()
        },
        methods: {

            upload_confirm_all(){


                if( document.getElementById("jsonData") !== null){
                    this.json_data=document.getElementById("jsonData").value;
                    if(JSON.parse(this.json_data).filtered.length>0){
                        this.setall_member_upload_sheet(this.json_data);
                        this.setmeta_form_id(this.forms_data_modal.id)
                        this.transitionDuration=JSON.parse(this.json_data).filtered.length
                        this.animateDuration="loop "+ 100*JSON.parse(this.json_data).filtered.length +" 100"
                        this.prog=true;
                        this.setcsvupload_reg("populated")
                        this.setcsvupload(this.excel_file)

                        this.updateData()
                            .then((response) => {
                                this.prog=false;

                                this.csvmodal = false
                                this.json_data='';
                                this.csv_active_option=0;
                                this.excel_file='';

                                if(response.invalid_mem_status){

                                    if(response.error_section){

                                        axios.get('/api/webservices/fetch_active_booking_of_group?id='+response.id)
                                            .then(response_data => {
                                                this.upload_member_status=''+response_data.data+' members loaded successfully. Something went wrong ,Please Re-Upload the file';
                                                this.invalid_member_data=response.invalid_mem;
                                                this.invalid_mem_modal=true;
                                                this.show_excel_button=false;
                                                this.file_upload_status=1;

                                            })
                                            .catch(error => {
                                                alert(error);
                                            })

                                    }

                                }
                                if(response.msg=='success'){
                                    this.$eventHub.$emit('update-success')
                                }
                            })
                            .catch((error) => {
                                this.$Progress.fail()

                                this.submit = true;

                                window.location.reload();

                            })
                    }

                    else{
                        alert('Please Upload Valid Excel Sheet');
                        return false;
                    }



                }




                return false;






            },

            verify_excel_populated(){
                if( document.getElementById("jsonData") !== null) {
                    this.json_data = document.getElementById("jsonData").value;
                    if (JSON.parse(this.json_data)[0].status == 'true') {
                        this.loading2=true;
                        let form=new FormData();
                        form.set('counter','2');
                        form.set('type','prepopulated');
                        form.set('json',this.json_data);
                        form.set('id',this.item.id);

                        axios.post('/api/v1/verify_member_sheet' , form)
                            .then(response => {
                                this.loading2=false;
                                if(response.data.status=='error' ){

                                    if(response.data.data.invalid.length>0){
                                        this.json_fields2= {
                                            'AuthCode': 'AuthCode',
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
                                        this.upload_member_status='There is some error in your excel member file please correct and re-upload the file. Above excel file is just for reference do not upload this file.';
                                        this.invalid_member_data=response.data.data.invalid;
                                        this.invalid_mem_modal=true;
                                        this.file_upload_status=1;
                                        this.show_excel_button=true;
                                        this.csv_active_option=0;
                                        this.setcsvupload_reg(false)
                                    }

                                }
                                else if(response.data.status=='success'){
                                    this.csv_active_option=8;
                                    document.getElementById("jsonData").value = JSON.stringify(response.data.data);

                                }


                            })
                    }

                }

            },

            uploadauthcodeExcel: async function(event){
                try{

                    if(this.meta.pre_populated_ques.status==false){
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Kindly ensure that the pre-populated master sheet is uploaded first !!',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                        return false;
                    }

                    this.csv_active_option=7;
                    this.loading2=true;
                    let selectedFile = event.target.files[0];
                    let fileReader = new FileReader();
                    let return_arr=[];
                    this.excel_file = event.target.files[0];


                    fileReader.onload = (event) => {
                        let data = event.target.result;
                        let workbook = XLSX.read(data, {
                            type: "binary"
                        });
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[workbook.SheetNames[0]]
                        );
                        let jsonObject = JSON.stringify(rowObject);
                        document.getElementById("jsonData").innerHTML = jsonObject;

                        let members={'valid_members':[],'invalid_members':[]};

                        if(rowObject.length<=501){
                            const headers =['AuthCode','Traveller_name','Email','Phone','Gender','DOB','Airport_Hub','Visa_Hub','Members_Allowed','Dealership'];
                            let fileHeaders=Object.keys(rowObject[0]);
                            if(fileHeaders.every(r=> headers.includes(r)) && (fileHeaders.length>=9)){
                                let counter=1;
                                let flag=0;
                                let data_pushed=false;
                                for(let i=counter;i<rowObject.length;i++){

                                    if (('Email' in rowObject[counter] === true
                                        || 'Phone' in rowObject[counter] === true)
                                        ){
                                        flag=0;
                                        data_pushed=false;
                                        if('AuthCode' in rowObject[counter] === true){

                                            if('Traveller_name' in rowObject[counter] === true){
                                                rowObject[counter].Traveller_name=rowObject[counter].Traveller_name.trim();
                                            }
                                            else{
                                                rowObject[counter].Traveller_name='';
                                            }



                                            if('Members_Allowed' in rowObject[counter] === true){
                                                rowObject[counter].Members_Allowed=rowObject[counter].Members_Allowed.toString().trim();
                                            }
                                            else{
                                                rowObject[counter].Members_Allowed=1;
                                            }

                                            if('Airport_Hub' in rowObject[counter] === true){
                                                rowObject[counter].Airport_Hub=rowObject[counter].Airport_Hub.trim();
                                            }
                                            else{
                                                rowObject[counter].Airport_Hub='';
                                            }

                                            if('Visa_Hub' in rowObject[counter] === true){
                                                rowObject[counter].Visa_Hub=rowObject[counter].Visa_Hub.trim();
                                            }
                                            else{
                                                rowObject[counter].Visa_Hub='';
                                            }

                                            if('Dealership' in rowObject[counter] !== true){
                                                rowObject[counter].Dealership='';
                                            }
                                            if('Email' in rowObject[counter] === true){

                                                rowObject[counter].Email=rowObject[counter].Email.trim();
                                            }
                                            else{
                                                rowObject[counter].Email='';
                                            }

                                            if('Phone' in rowObject[counter] === true){
                                                rowObject[counter].Phone=rowObject[counter].Phone.toString().replace(/\s+/g, '');

                                                if(rowObject[counter].Phone.toString().length==12 && rowObject[counter].Phone.toString().charAt(0)==9){
                                                    rowObject[counter].Phone='+'+rowObject[counter].Phone;
                                                    flag=0

                                                }
                                                if(rowObject[counter].Phone.toString().length==13 && rowObject[counter].Phone.toString().charAt(0)=='+'){
                                                    flag=0
                                                }
                                                else if (rowObject[counter].Phone.toString().length == 10) {
                                                    rowObject[counter].Phone='+91'+rowObject[counter].Phone;
                                                    flag=0

                                                }
                                                else if (rowObject[counter].Phone.toString().length < 10) {
                                                    flag=1
                                                }
                                                else {
                                                    flag=1
                                                }
                                                if(flag==0){
                                                    members.valid_members.push(rowObject[counter]);
                                                    data_pushed=true;
                                                }
                                                else if (flag == 1) {
                                                    rowObject[counter].remark='Phone Number Error';
                                                    members.invalid_members.push(rowObject[counter]);
                                                    data_pushed=true;
                                                }
                                            }
                                            else{
                                                rowObject[counter].Phone='';
                                            }

                                            if('Email' in rowObject[counter] === true && data_pushed==false){

                                                members.valid_members.push(rowObject[counter]);
                                            }



                                        }
                                        else{
                                            rowObject[counter].AuthCode='';
                                            rowObject[counter].remark='AuthCode is required!';
                                            members.invalid_members.push(rowObject[counter]);
                                        }

                                    }
                                    else{
                                        rowObject[counter].Phone='';
                                        rowObject[counter].Email='';
                                        rowObject[counter].remark='Email or Phone is required!';
                                        members.invalid_members.push(rowObject[counter]);
                                    }



                                    counter++;
                                }

                                return_arr.push({
                                    'valid':members.valid_members,
                                    'invalid':members.invalid_members,
                                    'status':'true'
                                })

                                document.getElementById("jsonData").value = JSON.stringify(return_arr);
                                document.getElementById("proceed_button7").style.visibility = "visible";
                                this.loading2=false;

                            }
                            else{

                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Incomplete Headers. Please Check !!',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                                this.loading2=false;
                            }

                        }
                        else{
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'The maximum number of members you can upload is 500 !!',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                            return false;
                        }



                    }
                    fileReader.readAsBinaryString(selectedFile);
                    return false;
                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },

            uploadHubExcel: async function(event){
                try{



                    this.loading2=true;
                    let selectedFile = event.target.files[0];
                    let fileReader = new FileReader();


                    fileReader.onload = (event) => {
                        let data = event.target.result;
                        let workbook = XLSX.read(data, {
                            type: "binary"
                        });
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[workbook.SheetNames[0]]
                        );
                        let jsonObject = JSON.stringify(rowObject);

                        const headers =['HUB'];
                        let fileHeaders=Object.keys(rowObject[0]);
                        if(fileHeaders.every(r=> headers.includes(r)) && fileHeaders.length==1){
                            let counter=0;
                            let status=true;
                            let data_arr=new Set();

                            if('HUB' in rowObject[0] !== false){

                                counter=0;

                                for(let j=counter;j<rowObject.length;j++){

                                    if('HUB' in rowObject[j] === false){
                                        rowObject[j].remark='HUB is Missing / HUB is empty';
                                        status=false;
                                    }

                                    if(status){
                                        // data_arr.push(rowObject[j].HUB)
                                        data_arr.add(rowObject[j].HUB)
                                    }

                                }

                                if(status){


                                    uploadfile("master_hub_sheeet", 'master_hub_sheeet', selectedFile,this.item.id).then(response => {
                                        this.updateHubdata(data_arr,response.data);
                                        this.loading2=false;


                                        data_arr.forEach((hubs)=>{
                                            this.allHubArray.push(({Hub:hubs,dates:[{date:'',total:'',used:0,flag:false,members:[],totalEdit:false}],hubDone:false}));
                                        });
                                        this.meta.travel_Hubs = this.allHubArray;
                                        this.$eventHub.$emit('update-success');


                                    }).catch((error) => {
                                            this.$swal.fire({
                                                type: 'error',
                                                icon: 'error',
                                                title: 'Error in uploading file, Please Try Again Later !',
                                                showCloseButton:true,
                                                showConfirmButton: true,
                                                timer: 3500
                                            })

                                            this.loading2=false;
                                            return false;
                                        })
                                }


                            }
                            else{
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'HUB is Missing / HUB is empty',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                                this.loading2=false;
                                return false;

                            }


                        }
                        else{

                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Incomplete Headers. Please Check !',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                            this.loading2=false;
                        }

                    }
                    fileReader.readAsBinaryString(selectedFile);
                    return false;
                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },

            updateColor(colorData) {
                this.meta.meta_group_bg_color = colorData;
            },

            resetPage(){
                this.page=1;

            },
            callback: function(page) {
                // no need for callback here since you have all your data loaded already
            },
            getPage: function(page) {
                // we simulate an api call that fetch the records from a backend
                this.records = [];
                const startIndex = this.perPage * (page - 1) + 1;
                const endIndex = startIndex + this.perPage - 1;
                for (let i = startIndex; i <= endIndex; i++) {
                    this.records.push(`Item ${i}`);
                }
            },


            SplitGroup: async function(){
                console.log(this.allHubArray.length);
                let breakLoop = false;
                let breakLoop1 = false;


                for (let i = 0; i < this.allHubArray.length; i++) {
                    const dates =  this.allHubArray[i].dates;

                    for (let j = 0; j < dates.length; j++) {
                        const total = parseInt(dates[j].total);
                        const used = parseInt(dates[j].used);
                        const date = parseInt(dates[j].date);


                       if(used < total) {
                            breakLoop = true;
                            // Perform your action here

                        }
                        if(used=="" || total=="") {
                            breakLoop1 = true;
                            // Perform your action here

                        }

                    }

                    if (breakLoop) {

                    }
                }

                if (breakLoop) {
                    this.splitGroup = false;
                    // Perform any other actions here if needed
                    this.$swal.fire({
                        title: 'Fill all seats before splitting OR you may modify the number of seats',

                        type: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ok'
                    })
                    console.log("Loop was broken.");
                }
                else if (breakLoop1) {
                    this.splitGroup = false;
                    // Perform any other actions here if needed
                    this.$swal.fire({
                        title: 'Hub is empty!',

                        type: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ok'
                    })
                    console.log("Loop was broken.");
                }


                else {
                    this.save_n_update('save_update');

                try{
                    this.loading2=true;
                    let form_data= new FormData();
                    form_data.set('data',JSON.stringify(this.allHubArray));
                    form_data.set('groupId',this.item.id);

                    await axios.post('/api/v1/SplitGroup', form_data)
                        .then((res)=>{
                            if(res.data.status){
                                this.$eventHub.$emit('update-success')

                                // this.$router.push({name: 'groups.index'})
                                this.$router.push({path: '/group_inventory/' + this.$route.params.id})

                            }
                            else{

                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: res.data.msg,
                                    showConfirmButton: false,
                                    timer: 5000

                                })

                            }

                        })
                        .catch((error)=>{

                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Some Error Occured, Please Contact Your Handler!',
                                showConfirmButton: true,
                                timer: 3000
                            })
                        })


                }
                catch(error){

                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later 1!',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }


                }

            },
            addHubs() {

                if(this.$refs.newHubname.value==''){

                    this.$refs.newHubname.style.border="1px solid #ff0000";
                    return false;
                }
                else{
                    const value=this.$refs.newHubname.value;
                    const data=JSON.stringify( this.allHubArray);
                    if(this.allHubArray.length>0){
                        if(data.toLowerCase().includes(value.toLowerCase())){
                    this.$swal.fire({
                        type: 'error',
                                icon: 'error',
                                title: 'This HUB already exist !!',
                                showConfirmButton: false,
                                timer: 2000
                    })
                            return false;
                }
                }
                    this.loading2=true;
                    this.$refs.newHubname.style.border="1px solid #ced4da";
                    this.allHubArray.push({Hub:this.$refs.newHubname.value,dates:[{date:'',total:'',used:0,flag:false,members:[],totalEdit:false}],hubDone:false});
                    this.$refs.newHubname.value='';
                    this.meta.travel_Hubs = this.allHubArray;
                    this.add_hub=false;
                    this.loading2=false;
                    this.$eventHub.$emit('create-success');
                }

            },

            EditTotalPassanger(index,indx){
                // this.$refs['passengerInput'+indx][index].focus();

                this.$nextTick(() => {
                    const inputField = this.$refs[`passengerInput_${index}_${indx}`][0]

                    console.log(inputField);
                    if (inputField instanceof HTMLElement) {
                        inputField.disabled = false;
                        inputField.focus();
                        this.allHubArray[index].dates[indx].totalEdit=false;

                    }
                });



            },

            deleteSection(index,hubName) {

                this.$swal.fire({
                    title: 'Are you really want to delete the hub?',

                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Delete Hub!'
                }).then((result) =>{
                        if(result.value){
                // this.meta.travel_Hubs.splice(index, 1);
                this.allHubArray.splice(index, 1);
                console.log(this.allHubArray);

if(this.allHubArray.length == 0){
                    // this.meta.travel_Hubs = []
}else{
    this.meta.travel_Hubs = this.allHubArray;
}



                if(!this.AirportHubName.includes(hubName) && hubName !=''){
                    this.AirportHubName.push(hubName);
                }
                this.save_n_update('save_update');

                        }});






            },
            saveHub(selectedHub,index){



                this.splitGroup=true;

                let breakLoop = false;
                let breakLoop2 = false;
                let UsedSeat = '';


                    const dates =  this.allHubArray[index].dates;

                    for (let j = 0; j < dates.length; j++) {
                        const total = parseInt(dates[j].total);
                        const used = parseInt(dates[j].used);
                        const date = parseInt(dates[j].date);



                        if(dates[j].date == ''||dates[j].total == '' ||selectedHub ==''){
                            breakLoop2=true;

                                    }

                        else if (total < used) {
                            dates[j].total='';
                            breakLoop = true;
                            UsedSeat=  dates[j].used;
                            // Perform your action here

                        }

                    }




                if (breakLoop) {
                    // Perform any other actions here if needed
                           this.$swal.fire({
                               html:'',


                        title: '<span><span style="color:red;font-weight: 600;">'+UsedSeat+'</span> seats are currently blocked. Blocked seats cannot be more than available seats</span>',

                        type: 'error',
                               showCancelButton: false,
                               confirmButtonColor: '#3085d6',
                               cancelButtonColor: '#d33',
                               confirmButtonText: 'Ok'
                    })

                }
                else if(breakLoop2){
                    this.$swal.fire({
                        title: 'Please fill all the fields',

                        type: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ok'
                    })

                }

                else {

                           for(let a=0; a<this.allHubArray[index].dates.length; a++){
                               this.allHubArray[index].dates[a].flag=true;
                               this.allHubArray[index].dates[a].totalEdit=true;
                       }
                           this.allHubArray[index].hubDone= true;

                           this.meta.travel_Hubs = this.allHubArray;
                           var index = this.AirportHubName.indexOf(selectedHub);
                           // Check if the element exists in the array
                           if (index !== -1) {
                               // Use the splice method to remove the element
                               this.AirportHubName.splice(index, 1);

                           }

                           this.$swal.fire({
                               title: 'Hub sucessfully Created',

                               type: 'success',
                               showCancelButton: false,
                               confirmButtonColor: '#3085d6',
                               cancelButtonColor: '#d33',
                               confirmButtonText: 'Ok'
                           })
                          this.save_n_update('save_update');


                       }









            },
            isOptionDisabled(option) {

            },
            addMoreDatesOfHub(ind){

                this.allHubArray[ind].dates.push({date:'',total:'',used:0,flag:false,members:[],totalEdit:false})

            },
            deleteDate(index,ind){
                this.allHubArray[index].dates.splice(ind, 1);


            },
        showModalBeforeCallingFunction: function(func){
                try{


                    let pendingdata = this.item.uploaded_sheets.filter(value => value.status==0);

                    if(pendingdata.length>0){

                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Member upload under process. Please try in a few minutes !!',
                            showConfirmButton: false,
                            timer: 3000
                        })

                    }
                    else{


                        this.callFunction(func)
                    }



                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },
            callFunction(call_func){

                if(call_func=='updateallmembers'){
                    this.updateallmembers();
                }
                if(call_func=='send_mail-1'){
                    this.send_mail(1);
                }
                if(call_func=='send_mail-2'){
                    this.send_mail(2);
                }
                if(call_func=='send_mail-3'){
                    this.send_mail(3);
                }


             },


            showVisaProcessErrorModal(data){

                try{
                    console.log(data);
                    this.json_fields2= {
                        'Id': 'Id',
                        'Name':'Name',
                        'Type':'Type',
                        'Relation':'Relation',
                        'Hub':'Hub',
                        'Date':'Date',
                        'Time':'Time',
                        'City':'City',
                        'Location':'Location',
                        'Local Contact Name':'Local Contact Name',
                        'Local Contact Number':'Local Contact Number',
                        'File':'File',
                        'Remark':'remark',
                    };
                    this.upload_member_status='There is some error in your excel file please correct and re-upload the file. Above excel file is just for reference do not upload this file.';
                    this.invalid_member_data=JSON.parse(data);
                    this.invalid_mem_modal=true;
                    this.show_excel_button=true;

                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },
            showUploadFileErrorModal(data){

                try{
                    this.json_fields2= {
                        'Id': 'Id',
                        'Name':'Name',
                        'Type':'Type',
                        'Relation':'Relation',
                        'Hub':'Hub',

                        'File':'File',
                        'Remark':'remark',
                    };
                    this.upload_member_status='There is some error in your excel file please correct and re-upload the file. Above excel file is just for reference do not upload this file.';
                    this.invalid_member_data=JSON.parse(data);
                    this.invalid_mem_modal=true;
                    this.show_excel_button=true;

                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },
            showErrorModalPreview(data){

                try{
                    this.json_fields2= {
                        'Id': 'Id',
                        'Name':'Name',
                        'Type':'Type',
                        'Relation':'Relation',
                        'Hub':'Hub',
                        'Departure_date':'Departure_date',
                        'Departure_time':'Departure_time',
                        'Departure_airport_code':'Departure_airport_code',
                        'Arrival_date':'Arrival_date',
                        'Arrival_time':'Arrival_time',
                        'Arrival_airport_code':'Arrival_airport_code',
                        'Flight_number':'Flight_number',
                        'File':'File',
                        'Remark':'remark',
                    };
                    this.upload_member_status='There is some error in your excel file please correct and re-upload the file. Above excel file is just for reference do not upload this file.';
                    this.invalid_member_data=JSON.parse(data);
                    this.invalid_mem_modal=true;
                    this.show_excel_button=true;

                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },
            CostErrorModalPreview(data){

                try{
                    this.json_fields2= {
                        'Id': 'Id',
                        'Name':'Name',
                        'Hub':'Hub',
                        'Cost':'Cost',
                        'Remark':'Remark',
                    };
                    this.upload_member_status='There is some error in your excel file please correct and re-upload the file. Above excel file is just for reference do not upload this file.';
                    this.invalid_member_data=JSON.parse(data);
                    this.invalid_mem_modal=true;
                    this.show_excel_button=true;

                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },
            // both domains
            get_excel_export: async function(id){
                try{
                    this.loading2=true;
                    let form=new FormData();
                    form.set('id',this.$route.params.id);
                    form.set('driver_id',id);
                    form.set('type','transaction_log');
                    const {data}= await axios.post('/api/webservices/fetch_group_excel_dump',form)
                    if(data.status){
                        this.exportToCsv(this.transaction_data.driver_name+' Expense Sheet.csv', data.data.data);
                    }

                    this.loading2=false;
                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },
            // both domains
            submission_status(id,index){
                try{
                    axios.get('/api/v1/SubmissionLevel/'+id+'/'+this.item.id)
                        .then(response => {

                                if(response.data.status){
                                    this.manager_data[index].submission_status=response.data.msg;
                                }


                            })
                        .catch(error => {

                        })
                }
                catch(error){

                }
            },
            showMailPreview(type){
                try{

                    this.updateData()
                        .then(() => {

                            window.open('/api/webservices/MailPreview/'+btoa(type)+'/'+btoa(this.item.id), "_blank");
                        })
                        .catch((error) => {


                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Some error occured, Try Again Later!',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })

                        })

                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }

            },
            getTransData:async function(id){

                    this.loading2=true;
                    this.transaction_data=[];
                    axios.post('/api/TourManager/getManagerTransactions',{
                        managerId: id,
                        groupId:this.item.id
                    })
                    .then(res=>{


                        this.loading2=false;
                        if(res.data.status){
                            this.transaction_data=_.cloneDeep(res.data);
                            console.log(res.data);
                            this.transaction_modal=true;
                        }
                        else{
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Some Error Occured. Please Try Again Later !',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                        }

                    })
                    .catch(error => {
                        // console.log(error);
                        this.loading2=false;
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Some Error Occured. Please Try Again Later !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                    })


            },
            deleteManager(id,manager_index,update_status){

                try{

                    const manager_data=this.tm_data.findIndex(manager1=>manager1.id==id);
                    if(manager_data>=0){
                        this.tm_data_replica.push(this.tm_data[manager_data]);
                        this.manager_data.splice(manager_index,1);
                        this.tm_mode='updation';
                        if(update_status){
                            const existing_manager_data=this.meta.managers_data.findIndex(manager2=>manager2.id==id);
                            if(existing_manager_data>=0){
                                this.meta.managers_data.splice(existing_manager_data,1);
                            }
                            this.submitForm0();
                        }

                    }
                    else{
                        this.manager_data.splice(manager_index,1);
                    }
                }
                catch(error){

                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some error occured, Try Again Later!',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }


            },
            UpdateManager(event,index){
                // console.log(event);
                // console.log(index);
                const manager_index=this.tm_data_replica.findIndex(manager=>manager.id===event.id);
                // console.log(manager_index);
                this.tm_data_replica.splice(manager_index,1);

                this.manager_data[index].status=true;
                this.managerData[index].status=true;

                this.manager_data[index]={"name":event.name,"number":event.phone,"email":event.email,"id":event.id,"hub":'',"mode":'',"currency":'',"cardId":'',"amount":'','bal':'','remark':'','status':true,'updated':false,'submission_status':event.submission_status};
                this.managerData[index]={"name":event.name,"number":event.phone,"email":event.email,"id":event.id,"hub":'',"mode":'',"currency":'',"cardId":'',"amount":'','bal':'','remark':'','status':true,'updated':false,'submission_status':event.submission_status};
                this.tm_mode='updation';
                // this.meta.managers_data.push({"id":event.id,"name":event.name,"number":event.phone,"email":event.email})

            },
            addManager: async function(){
                this.loading2=true;
                if(this.tm_data.length > 0){
                    if(this.tm_data_replica.length > 0){
                        this.manager_data.push({"name":'',"number":'',"email":'',"id":'',"hub":'',"mode":'',"currency":'',"cardId":'',"amount":'','bal':'','remark':'','status':false,'updated':false,'submission_status':''})
                    }
                    else{
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'You have already allocated all the managers !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                    }

                }
                else{
                    const {data}=await axios.get('/api/v1/getManagers')
                    if(data.status){
                        if(data.data.length>0){

                            this.tm_data=_.cloneDeep(data.data);
                            this.tm_data_replica=_.cloneDeep(data.data);
                            this.addManager();
                        }
                        else{
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'No Tour Manager Data Available !',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                        }
                    }
                    else{
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Some error occured. Try again later !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                    }


                }
                this.loading2=false;

            },
            get_live_bal(id,index){



                axios.get('/api/v1/LiveBalance/'+this.item.id+'/'+id)
                    .then(response => {
                        if(response.data.status){
                            if(Object.keys(response.data.data).length!=0){

                                this.manager_data[index].bal=response.data.data
                                this.livebal_modal=index;
                            }
                            else{
                                this.manager_data[index].bal= {}
                            }
                        }
                        else{
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'No Balance Available !',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                        }



                        }
                    )
                    .catch(error => {

                        this.errors.push("Error while fetching");
                        this.errormodal=true;
                    })
            },
            handleQueryChange () {
               let flag=true;
                if(typeof this.query.driver_name!="undefined"){
                    if(this.query.driver_name!=''){
                        flag=false;

                        let return_arr=[];
                        this.item.wallet_transactions.forEach((member)=>{
                            // console.log(member.driver_name);
                            if(member.driver_name.toLowerCase().includes(this.query.driver_name.toLowerCase())){
                                return_arr.push(member);
                            }
                        })
                        if(return_arr.length>0){
                            this.wallet_data_length=return_arr.length;

                        }
                        else{
                            this.error=[];
                            this.errors.push('No manager available with this name!')
                            this.errormodal=true;
                        }

                    }

                }

                if(flag){
                    let return_arr=[];
                    let new_val=this.query.limit+this.query.offset;


                    if(new_val>this.item.wallet_transactions.length){

                        new_val=this.item.wallet_transactions.length;
                        // console.log(this.query.offset);
                        // console.log(new_val);
                    }
                    for(let i=this.query.offset;i<new_val;i++){
                        // console.log(i)
                        return_arr.push(this.item.wallet_transactions[i]);
                    }
                    this.wallet_data_length=this.item.wallet_transactions.length;

                }





            },
            update_balance(){
                this.loading2=true;
                let return_arr=[];
                let status=true;
                if(this.meta.approvers_data){


                        if(
                            this.meta.approvers_data['L1']==null &&
                            this.meta.approvers_data['L2']==null &&
                            this.meta.approvers_data['L3']==null &&
                            this.meta.approvers_data['L4']==null

                        ){
                            status=false;
                        }

                }
                else{
                    status=false;
                }
                if(status){
                    this.manager_data.forEach((data)=>{

                        if(data.mode!='' && data.currency!='' && data.amount!=''){
                            return_arr.push(data)
                        }
                    })
                    if(return_arr.length>0){
                        let form = new FormData();
                        form.set("id", this.item.id)
                        form.set("data", JSON.stringify(return_arr))
                        axios.post('/api/v1/UpdateManagerBalance', form)
                            .then(response => {
                                this.loading2=false;
                                this.balance_modal=false;
                                if(response.data.status){
                                    let flag=0;
                                    for(var i=0;i<this.manager_data.length;i++){
                                        this.manager_data[i].mode='';
                                        this.manager_data[i].currency='';
                                        this.manager_data[i].amount='';
                                        this.manager_data[i].remark='';
                                        this.manager_data[i].cardId='';
                                    }
                                    this.$eventHub.$emit('update-success')
                                }
                                else{
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: response.data.msg,
                                        showCloseButton:true,
                                        showConfirmButton: true,
                                        timer: 3500
                                    })
                                }






                            })
                            .catch(error => {
                                this.loading2=false;

                                this.errors.push("Error while fetching");
                                this.errormodal=true;
                            })
                    }
                    else{
                        this.loading2=false;
                        this.errors.push("Please Fill All Mandatory Fields");
                        this.errormodal=true;
                    }
                }
                else{
                    this.loading2=false;
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'No Approvers Allocated !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }



            },
            date_update(date){
                let index =date.indexOf(":")-2;
                 return date.substring(0, index) + ' , ' + date.substring(index, date.length);

            },
            add_data(type,file_name){

                this.loading2=true;
                let form=new FormData();
                form.set('id',this.$route.params.id);
                form.set('type',type);
                axios.post('/api/webservices/fetch_group_excel_dump',form)
                    .then(response=>{

                        if(response.data.status=='true'){

                            // console.log(JSON.stringify(response.data.data.data));


                            this.exportToCsv(file_name+'.csv', response.data.data.data);
                            this.loading2=false;
                        }
                        else{
                            this.loading2=false;
                            alert('No Data Defined');
                        }
                    })
                    .catch(error => {
                        this.loading2=false;
                        alert("Error while fetching ");

                    })



                // this.show_modal4=true
                // this.pending_doc_data=[{'name':'Shubham'}];
            },
            exportToCsv(filename, rows) {
                var processRow = function (row) {

                    var finalVal = '';
                    for (var j = 0; j < row.length; j++) {
                        var innerValue = row[j] === null ? '' : row[j].toString();
                        if (row[j] instanceof Date) {
                            innerValue = row[j].toLocaleString();
                        };
                        var result = innerValue.replace(/"/g, '""');
                        if (result.search(/("|,|\n)/g) >= 0)
                            result = '"' + result + '"';
                        if (j > 0)
                            finalVal += ',';
                        finalVal += result;
                    }
                    return finalVal + '\n';
                };

                var csvFile = '';
                for (var i = 0; i < rows.length; i++) {
                    csvFile += processRow(rows[i]);
                }

                var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
                if (navigator.msSaveBlob) { // IE 10+
                    navigator.msSaveBlob(blob, filename);
                } else {
                    var link = document.createElement("a");
                    if (link.download !== undefined) { // feature detection
                        // Browsers that support HTML5 download attribute
                        var url = URL.createObjectURL(blob);
                        link.setAttribute("href", url);
                        link.setAttribute("download", filename);
                        link.style.visibility = 'hidden';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                }
            },
            validate_visa_mem(type,type_name) {
                // @click="validate_visa_mem('interview','Interview')"
                // @click="validate_visa_mem('bio_metric','Bio-Metric')"
                var interview = document.getElementById('interview').checked;
                var interview_str = 'Interview';
                var bio_metric = document.getElementById('bio_metric').checked;
                var bio_metric_str = 'Bio-Metric';
                var return_arr = [];
                var flag = 0;
                if (interview == true && bio_metric == false) {

                    if (this.hub_list_modal.hub != "") {
                        if (this.visa_history.length > 0 && this.all_members.length > 0) {

                            // console.log(JSON.stringify(data));

                            this.all_members.forEach(member => {
                                flag = 0;
                                this.visa_history.forEach(data => {

                                    if (data.book_id == member.id && data.type == interview_str) {
                                        member.params = 1;
                                        flag++;
                                    }


                                })
                                if (flag == 0) {
                                    member.params = 0;

                                }
                                return_arr.push(member);

                            })
                            var empty_arr = [];
                            this.setall_members(empty_arr);
                            this.setall_members(return_arr);
                            this.setall_members_filtered(empty_arr);
                            this.setall_members_filtered(return_arr);

                        }

                    } else {
                        alert('Please Select Hub');
                        var checked = document.getElementById(interview).checked = false;
                    }
                }
                else if (interview == false && bio_metric == true) {

                    if (this.hub_list_modal.hub != "") {
                        if (this.visa_history.length > 0 && this.all_members.length > 0) {

                            // console.log(JSON.stringify(data));

                            this.all_members.forEach(member => {
                                flag = 0;
                                this.visa_history.forEach(data => {

                                    if (data.book_id == member.id && data.type == bio_metric_str) {
                                        member.params = 1;
                                        flag++;
                                    }


                                })
                                if (flag == 0) {
                                    member.params = 0;

                                }
                                return_arr.push(member);

                            })
                            var empty_arr = [];
                            this.setall_members(empty_arr);
                            this.setall_members(return_arr);
                            this.setall_members_filtered(empty_arr);
                            this.setall_members_filtered(return_arr);

                        }

                    } else {
                        alert('Please Select Hub');
                        var checked = document.getElementById('bio_metric').checked = false;
                    }
                }
                else if (interview == true && bio_metric == true) {

                    if (this.hub_list_modal.hub != "") {
                        if (this.visa_history.length > 0 && this.all_members.length > 0) {

                            // console.log(JSON.stringify(data));

                            this.all_members.forEach(member => {
                                flag = 0;
                                this.visa_history.forEach(data => {

                                    if (data.book_id == member.id && data.type == bio_metric_str) {
                                        member.params = 1;
                                        flag++;
                                    }
                                    if (data.book_id == member.id && data.type == interview_str) {
                                        member.params = 1;
                                        flag++;
                                    }


                                })
                                if (flag == 0) {
                                    member.params = 0;

                                }
                                return_arr.push(member);

                            })
                            var empty_arr = [];
                            this.setall_members(empty_arr);
                            this.setall_members(return_arr);
                            this.setall_members_filtered(empty_arr);
                            console.log(JSON.stringify(return_arr));
                        }

                    }
                    else {
                        alert('Please Select Hub');
                        var checked = document.getElementById('interview').checked = false;
                        var checked = document.getElementById('bio_metric').checked = false;
                    }
                }
                else if (interview == false || bio_metric == false) {



                    this.all_members.forEach(member => {

                                member.params = 0;



                        return_arr.push(member);
                        })



                    var empty_arr = [];
                    this.setall_members(empty_arr);
                    this.setall_members(return_arr);
                    this.setall_members_filtered(empty_arr);
                    this.setall_members_filtered(return_arr);

                }
            },
            fetch_urldate(url){

                let form = new FormData();
                form.set('url',url)

                axios.post('/api/v1/fetch_file_date' , form)
                    .then(response => {

alert(response.data)

                    })
            },

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

            validate_passport1(index){


                if(this.meta.meta_pass_hist[index].exp_date==''){
                    alert("Kindly Entre Expiry Date First")
                }
                else{

                    var datew=  this.meta.meta_pass_hist[index].exp_date.split('-');
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
                            if(!this.err_passport1.includes(this.meta.meta_pass_hist[index].exp_date)){
                                alert("Your Passport will expire in less then 6 months")
                                this.err_passport1.push(this.meta.meta_pass_hist[index].exp_date);
                            }

                        }
                        else if(diffDays<=1) {
                            alert("Your Passport is expired")
                            this.meta.meta_pass_hist[index].exp_date='';
                            this.meta.meta_pass_hist[index].name_first='';
                            // name_first
                            // name_last
                            // passportno
                            // url
                        }



                    }
                    else {
                        alert("Your Passport is expired")
                        this.meta.meta_pass_hist[index].exp_date='';
                        this.meta.meta_pass_hist[index].name_first='';
                    }
                }

            },
            track_flight(loc){
                // console.log(this.meta.meta_flight[loc]);
                let form = new FormData();
                form.set('nonce','173648APz6zQ2jaa^CKIB9rSStjPWgo!NZnPYCKl59b2380d')
                form.set('flightdata',JSON.stringify(this.meta.meta_flight[loc]))
                axios.post('/api/webservices/fetch_flight_status' , form)
                    .then(response => {
                        this.flight_data=response.data;
                        if(this.flight_data.status=='success'){
                            this.flight_data_modal=true;
                        }
                        else{
                            alert('Flight Data Not Available');
                        }


                    })



            },
            assign_flight(e){
                this.flightdata['type']=e.type;
            },
            assign_flight2(e){
                this.flightdataallo['type']=e.type;
                this.flightdataallo['sector']=[]

            },
            push_router(event){
                if(this.file_upload_status==1){
                    this.$router.push({path: '/groups/' + this.$route.params.id + '/edit'})
                }

                // this.invalid_mem_modal=false;
            },
            alertt(){
               alert('Please define document name');
           },
            updatesearch3() {
                if(this.localsearch3!="") {
                    this.selectall = false;
                    this.setsearch3(this.localsearch3)
                }
            },
            clearsearch3() {
                if(this.localsearch3!=""){
                    this.selectall=false;
                    this.localsearch3=""
                    this.setsearch3(this.localsearch3)
                }

            },
            setsearch3(search){
                let arr=[];
                if(search!==''){
                    if(_.isEmpty(this.actualdata)){
                        this.actualdata=_.cloneDeep(this.feedback_ques)
                    }

                    this.actualdata.forEach(post => {
                        let f="empty";
                        if (f === "empty" ) {
                            if((post.question.toLowerCase().includes(search.toLowerCase()))){

                                f="found";
                                arr.push(post);

                            }
                        }
                    });

                    console.log(arr);

                    this.feedback_ques=_.cloneDeep(arr)

                }
                else {
                    this.feedback_ques=_.cloneDeep(this.actualdata)

                }
            },
            updatesearch4() {
                if(this.localsearch4!="") {
                    this.setsearch4(this.localsearch4)
                }
            },
            clearsearch4() {
                if(this.localsearch4!=""){
                    this.localsearch4=""
                    this.setsearch4(this.localsearch4)
                }

            },
            setsearch4(search){
                let arr=[];
                if(search!==''){
                    if(_.isEmpty(this.actualdata2)){
                        this.actualdata2=_.cloneDeep(this.feedback_response)
                    }

                    this.actualdata2.forEach(post => {
                        let f="empty";
                        if (f === "empty" ) {
                            if(
                                post.user_name.toLowerCase().includes(search.toLowerCase()) ||
                                post.question.toLowerCase().includes(search.toLowerCase())
                            ){

                                f="found";
                                arr.push(post);

                            }
                        }
                    });

                    console.log(arr);

                    this.feedback_response=_.cloneDeep(arr)

                }
                else {
                    this.feedback_response=_.cloneDeep(this.actualdata2)

                }
            },
            save_feedback_questions(){
                var return_arr=[];
                var checked=''
                this.feedback_ques.forEach((data)=>{
                        if(data.checked){
                            // console.log(data.question)
                            return_arr.push(data);
                        }


                        //


                })
                if(return_arr.length>0){
                    this.meta.feedback_ques=return_arr;
                    this.feedback_model=false;
                }
            },
            printDiv(){
                var divContents = document.getElementById("qr_print").innerHTML;
                var a = window.open('', '', 'height=500, width=500');
                a.document.write('<html>');
                a.document.write('<body >');
                a.document.write(divContents);
                a.document.write('</body></html>');
                a.document.close();
                a.print();


               this.qr_modal=false
            },
            showqr(id){
                this.qr_modal=true;
                this.qr_value=id;
            },
            convert_item(index){

              var item=_.cloneDeep( this.meta.meta_stock[index].carton_items_text);
              if(this.meta.meta_stock[index].items.length==0){
                  this.meta.meta_stock[index].items.push({'title':'','count':'','left':''});
              }
                item=item.replace(';',',');
              var  array = [];
                  array = item.split(',');
              if(this.meta.meta_stock[index].items[0].title=='' && array.length>0){
                  this.meta.meta_stock[index].items=[]
              }
                array.forEach( (dataObj) => {
            if(dataObj.length>0 && dataObj!==''){
                this.meta.meta_stock[index].items.push({"title":dataObj,"count":'',"left":''})
}

                })
                this.meta.meta_stock[index].carton_items_text='';
            },

            addstock(){
    var date = new Date();
    var timestamp = date.getTime();

    this.meta.meta_stock.push({"name":"","id":timestamp+Math.floor((Math.random() * 1000) + 100),"items":[{'title':'','count':'','left':''}],"remark":"","carton_items_text":''})
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

                // $http({method: 'GET', url: "/abrechnung/exportToExcel/" + JSON.stringify(pageAndFilter.filterByFields) ,
                //     headers: {'Content-Type': "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}, responseType: "arraybuffer"}).
                // success(function(data, status, headers, config) {
                //
                //
                // })
                //         // continue like before...


                this.$http({
                    method: 'get',
                    url: url,
                    headers: {'Content-Type': "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},
                    responseType: 'arraybuffer'
                })
                    .then(response => {
                        this.forceFileDownload(response,type)
                    })
                    .catch(() => console.log('error occured'))

            },


            filterhub(e){
                this.loading2=true
                if(this.flight_hub_filter!=='' && this.flight_hub_filter!== null){
                    this.allocationticketids=[]
                    this.member_data=[]
                    this.original_mem.forEach((item)=>{
                        if(item.airport_hub == e.hub){
                            // item.checked='1'
                            // this.allocationticketids.push(item.traveller_id);
                            this.member_data.push(item);
                            // document.getElementById(item.id).checked=true;

                        }
                        else if(item.airport_hub !== e.hub){
                            item.checked='0'
                        }

                    })
                    // this.member_data.forEach((data)=>{
                    //     document.getElementById(data.id).checked=true;
                    // })

                    // this.allocationticketids=[]
                    // for(var t=0;t<this.member_data.length;t++){
                    //     console.log(this.member_data[t]['id']);
                    //     document.getElementById(this.member_data[t]['id']).checked=true;
                    //     this.allocationticketids.push(this.member_data[t]['id'])
                    // }
                }
                else{
                    this.member_data=_.cloneDeep(this.original_mem)
                }

                this.loading2=false

            },

            updateallmembers(){
                this.meta.meta_doc_req=_.cloneDeep(this.local_meta_doc_req.concat(this.meta.meta_doc_req));
                this.local_meta_doc_req=[];
              this.membermodel=false;
                this.setcsvupload_reg(false)
                this.setcsvupload('');

                this.updateData()
                    .then(() => {
                        // alert('hello');

                        let form = new FormData();
                        form.set('group_id', this.item.id);
                        form.set('fields', JSON.stringify(this.updatemembers_fields));
                        form.set('del_docs', JSON.stringify(this.deleted_docs));

                        axios.post('/api/webservices/updatemembers', form)
                            .then(response => {


                                if(this.updatemembers_fields.servicevouc){


                                    let arr=[];
                                    this.meta.meta_voucher.forEach((data)=>{
                                        data.updated=true;
                                        arr.push(data)
                                    })
                                    this.meta.meta_voucher=_.cloneDeep(arr);

                                }
                                if(this.updatemembers_fields.insurance){


                                    let arr=[];
                                    this.meta.meta_insurance.forEach((data)=>{
                                        data.updated=true;
                                        arr.push(data)
                                    })
                                    this.meta.meta_insurance=_.cloneDeep(arr);

                                }
                                if(this.updatemembers_fields.others){
                                    let arr=[];
                                    this.meta.meta_other.forEach((data)=>{
                                        data.updated=true;
                                        arr.push(data)
                                    })
                                    this.meta.meta_other=_.cloneDeep(arr);


                                }
                                if(this.updatemembers_fields.flight){

                                    let arr=[];
                                    this.meta.meta_flight.forEach((data)=>{
                                        data.updated=true;
                                        arr.push(data)
                                    })
                                    this.meta.meta_flight=_.cloneDeep(arr);


                                }

                                this.$eventHub.$emit('update-success')

                                this.deleted_docs=[];

                                // response.data.forEach((dataObj) => {});
                            });
                    })

            },
            succcessvisa(file,respones){
                // console.log(respones)
                this.meta.meta_visa_hist.push(respones)
                this.loading2=false;

            },
            succcessothers(file,respones){
                // console.log(respones)
                this.meta.meta_other_hist.push(respones)
                this.loading2=false;

            },
            succcessphoto_id(file,respones){

                this.meta.meta_photo_id_hist=respones
                this.loading2=false;

            },
            succcessvouchers(file,respones){
                // console.log(respones)
                this.meta.meta_voucher_hist.push(respones)
                this.loading2=false;

            },
            succcessinsu(file,respones){
                // console.log(respones)
                this.meta.meta_insu_hist.push(respones)
                this.loading2=false;

            },
            succcessflight(file,respones){
                // console.log(respones)
                if(respones!=''){

                    this.meta.meta_flight_hist.push(respones)

                }

                this.loading2=false;


            },
            //
            sendingEventpass (file, xhr, formData) {
                // formData.append('paramName', 'some value or other');
                this.loading2=true;
                formData.append("ref_id", this.item.booking_id);
                formData.append("collection_name", 'bulkpassallo');
                formData.append("ref_key",this.item.id );
                formData.append("type",'passportallow' );

                // formData.append("passportallocation",JSON.stringify(this.passportallo) );
            },
            succcesspass(file,respones){
                this.meta.meta_pass_hist=respones
                this.loading2=false;
                           },

            updateflightallo(value) {

                uploadfile("flightallocation", 'flightallo', value.target.files[0], this.item.booking_id).then(response => {

                    this.flightdataallo.url= response.data;

                })
            },
            allocate_ticket(){
                let form = new FormData();
                let sector=true;
                this.loading2=true;
                if(this.flightdataallo.arr_code!='' && this.flightdataallo.date!='' && this.flightdataallo.dep_code!='' && this.flightdataallo.ticket!=''  && this.flightdataallo.url!='' ){
                    if(this.flightdataallo.sector.length>0 ){
                        for(let i =0; i<this.flightdataallo.sector.length ; i++){
                            if(this.flightdataallo.sector[i].date==''||
                             this.flightdataallo.sector[i].dep_code==''||
                            this.flightdataallo.sector[i].arr_date==''||
                            this.flightdataallo.sector[i].arr_code==''||
                            this.flightdataallo.sector[i].arr_name==''
                           ){
                                sector=false
                            }
                        }
                    }

                    if(sector){
                     form.set("ref_id", this.item.booking_id);
                     form.set("collection_name", 'bulkflightallo');
                     form.set("ref_key",this.item.id );
                     form.set("type",'flight-allocation' );
                     form.set("flightdata",JSON.stringify(this.flightdataallo) );
                    form.set("membersids",JSON.stringify(this.allocationticketids) );
                    axios.post('/api/webservices/uploadmemberdoc', form)
                        .then(response => {
                            this.meta.meta_ticket_hist=response.data;
                            this.flightdataallo={"date": "", "dep_code": "","arr_date": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight","sector":[],"updated":false}
                            this.arr_code_allocation=''
                            this.allocationticketids=[]
                            this.flight_hub_filter=[]
                            this.$eventHub.$emit('create-success')
                            // response.data.forEach((dataObj) => {});
                        });
                        this.loading2=false;
                    }

                }
                else{
                    alert("Kindly Fill all the fields");
                    this.loading2=false;
                }





            },

            sendingEvent (file, xhr, formData) {
                this.loading2=true;
                // formData.append('paramName', 'some value or other');
                formData.append("ref_id", this.item.booking_id);
                formData.append("collection_name", 'bulkvisa');
                formData.append("ref_key",this.item.id );
                formData.append("type",'visa' );
            },
            sendingEventothers (file, xhr, formData) {
                this.loading2=true;
                // formData.append('paramName', 'some value or other');
                formData.append("ref_id", this.item.booking_id);
                formData.append("collection_name", 'bulkothers');
                formData.append("ref_key",this.item.id );
                formData.append("type",'other' );
            },
            sendingEventphotoid (file, xhr, formData) {
                this.loading2=true;
                // formData.append('paramName', 'some value or other');
                formData.append("ref_id", this.item.booking_id);
                formData.append("collection_name", 'bulkphotoid');
                formData.append("ref_key",this.item.id );
                formData.append("type",'photo_id' );
            },
            sendingEventvoucher (file, xhr, formData) {
                this.loading2=true;
                // formData.append('paramName', 'some value or other');
                formData.append("ref_id", this.item.booking_id);
                formData.append("collection_name", 'bulkvoucher');
                formData.append("ref_key",this.item.id );
                formData.append("type",'voucher' );
            },
            sendingEventinsu (file, xhr, formData) {
                this.loading2=true;
                // formData.append('paramName', 'some value or other');
                formData.append("ref_id", this.item.booking_id);
                formData.append("collection_name", 'bulkinsu');
                formData.append("ref_key",this.item.id );
                formData.append("type",'insurance' );
            },

            sendingEventflight (file, xhr, formData) {
                this.loading2=true;
                // formData.append('paramName', 'some value or other');

                if(this.flightdata.arr_code!='' && this.flightdata.date!='' && this.flightdata.dep_code!='' && this.flightdata.ticket!='' ){
                    formData.append("ref_id", this.item.booking_id);
                    formData.append("collection_name", 'bulkflight');
                    formData.append("ref_key",this.item.id );
                    formData.append("type",'flight' );
                    formData.append("flightdata",JSON.stringify(this.flightdata) );
                }
                else{
                    alert("Kindly Fill all the fields");
                }

            },
            bulk_download(){
                if(this.transaction_data.attachment!=''){
                    this.loading2=true;
                    var zip = new JsZip();
                    var img = zip.folder("Documents");
                    var count=1;


                    var data_arr=[];
                    this.transaction_data.data.forEach((data)=>{

                        if(data.image!=null){
                            data_arr.push({"doc":data.image});
                        }

                    })
                    let form = new FormData();
                    form.set("data",JSON.stringify(data_arr))
                    form.set("source",2)
                    axios.post('/api/webservices/get_file_content_js2',form)

                        .then((response1) => {
                            var orgcount=response1.data.length;
                            var norcount=0;
                            response1.data.forEach( (dataObj) => {
                                var base64=dataObj.url;
                                img.file("doc-"+count+'.jpg', base64, {base64: true});
                                count++;
                                norcount++;
                                if(orgcount===norcount){
                                    this.loading2=false;
                                    zip.generateAsync({type:"blob"})
                                        .then(function(content) {

                                            saveAs(content, "TransactionLogs.zip");
                                        });
                                }
                                else{
                                    this.loading2=false;
                                }
                            })


                        })

                        .catch((error) => {
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Some Error Occured! Please Try Again Later',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                                console.log(error); // Logs an error if there was one
                                norcount++;
                            this.loading2=false;
                            })




                }
                else{
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'No Documents Available',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }



            },

            updatesearch() {
                this.setsearch(this.localsearch)
                if(this.localsearch!=''){
                    this.search=false;
                    this.clear=true;
                }
            },
            clearsearch() {
                this.localsearch=""
                this.setsearch(this.localsearch)
                this.search=true;
                this.clear=false;
            },
            updatesearch2() {

                if(this.all_members.length>0){
                    this.setsearch2(this.localsearch2)
                    if(this.localsearch2!=''){
                        this.search2=false;
                        this.clear2=true;
                        for(var t=0;t<this.all_members.length;t++){
                            if(this.all_members[t]['params']==0) {
                                document.getElementById(this.all_members[t]['id']).checked = false;
                            }

                        }
                        document.getElementById("select_all").checked = false;
                        document.getElementById("select_text").innerHTML = "Select All";
                    }
                }else{
                    alert('Please select hub');
                }

            },
            clearsearch2() {
                this.localsearch2=""
                this.setsearch2(this.localsearch2)
                this.search2=true;
                this.clear2=false;
            },

            opentab(){
                var countlen=0;
                for(var prop in this.meta.interactions) {
                    if(this.meta.interactions.hasOwnProperty(prop))
                        ++countlen;
                }
                console.log("tab"+countlen)
                if(countlen>0 && typeof this.$refs.myAccordionbooking !=="undefined"){
                    this.$refs.myAccordionbooking.open(countlen-1);
                }

            },


            send_mail(loc){

                var send=false;
                if(loc==1){

                    var sms=this.license.sms_service;
                    // console.log(memb.id)
                    axios.post('/api/v1/SendMails',  {
                        grop_id: this.item.id,
                        sms:sms,
                        loc:3,
                        source:'group',
                        type:'confirmation',
                    })
                        .then(response => {
                            if(response.data.status){
                                this.$eventHub.$emit('update-success')
                            }
                            else{
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: response.data.msg,
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                            }

                        })
                        .catch(error => {
                            this.$eventHub.$emit('update-success')
                            console.log("Error while sending Mail: "+memb.id);
                            // this.errors.push("Error while sending Mail")
                            // this.errormodal=true
                        })


                }
                if(loc==2){
                    if(this.selected_form!=null){

                        if(this.selected_form.id!="") {
                            this.loading2=true;
                            let form = new FormData();
                            form.set("group_id",this.item.id);
                            form.set("form_id",this.selected_form.id);
                            axios.post('/api/v1/send_form_to_group_member', form)

                                .then(response => {
                                    // console.log(response.data);
                                    this.csvmodal=false;
                                    this.loading2=false;
                                    this.meta.meta_forms=[this.selected_form.id]
                                    this.$eventHub.$emit('update-success')
                                    if(response.data.status=='fail'){
                                        alert(response.data.msg);
                                    }
                                    else if(response.data.status=='success'){


                                    }


                                })

                        }
                        else{
                            alert('Choose Registration Form For Attachment');
                        }
                    }
                    else{
                        alert('Choose Registration Form For Attachment');
                    }


                }
                if(loc==3){

                    axios.post('/api/v1/SendMails',  {
                        grop_id: this.item.id,
                        loc:3,
                        source:'group',
                        type:'welcome',
                    })
                        .then(response => {
                            if(response.data.status){
                                this.$eventHub.$emit('update-success')
                            }
                            else{
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: response.data.msg,
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                            }


                        })
                        .catch(error => {
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Some error occured, Try Again Later!',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                        })

                }

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
            checkemptyid(id, name_f) {
                if (id == '' ||name_f == '' ) {

                    return true
                } else {
                    return false
                }

            },
            checkemptypassport(date, name_f,name_l, pasno) {
                if (name_f == '' ||name_l == '' || pasno == '' || date == '') {

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
            checkemptypassport(date, name, pasno) {
                if (name == '' || pasno == '' || date == '') {

                    return true
                } else {
                    return false
                }

            },
            updatelogo(value, type) {
                uploadfile("grouplogo", type, value.target.files[0], this.item.booking_id).then(response => {

                    this.item.group_logo = response.data;

                })
            },

            uploadbg(value, type) {
                uploadfile("groupbackgroud", type, value.target.files[0], this.item.booking_id).then(response => {

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
                let data=document.getElementById("jsonData2").value
                let flag=0;
                let exhi_data=[];
                if( data !== null){
                    JSON.parse(data).forEach((exhi)=> {
                        if (flag==0) {
                        if (exhi.Logo != '') {

                            // if (exhi.Logo.indexOf('http:') > -1) {
                            //
                            //     alert('Please add logo with http only.');
                            //
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

                        uploadfile("groupexhibitors", 'exhibitor', JSON.stringify(exhi_data), this.item.booking_id, data.length).then(response => {

                            if (response.data !== 'Insufficient Balance') {
                                // console.log(data);

                                // this.meta.meta_non_member_list.exhibitor.push(JSON.parse(data));
                                this.meta.meta_non_member_list.exhibitor = this.meta.meta_non_member_list.exhibitor.concat(exhi_data);
                                this.csv_active_option = 0;
                                document.getElementById("proceed_button3").style.visibility = "hidden";
                                this.$eventHub.$emit('create-success')

                            } else {
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



                    const headers=['Name','Email','Phone'];
                    let fileHeaders=Object.keys(rowObject[0]);
                    if(fileHeaders.every(r=> headers.includes(r)) && fileHeaders.length==3){
                    rowObject.forEach((data)=>{
                        // Name	Phone

                        var flag=0;
                        if (
                            'Name' in rowObject[counter] === true &&
                                'Email' in rowObject[counter] === true &&
                            'Phone' in rowObject[counter] === true
                        ){
                            data.Name=data.Name.trim();
                            data.Phone=data.Phone.toString().replace(/\s+/g, '');
                            return_arr.push(data)

                        }
                        counter++;
                    });
                    console.log(JSON.stringify(return_arr));
                    document.getElementById("jsonData3").value = JSON.stringify(return_arr);
                    document.getElementById("proceed_button4").style.visibility = "visible";
                    }
                    else{
                        alert("File with wrong headers.")

                    }


                }
                fileRead.readAsBinaryString(selectedFile);
                return false;


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

                          if(mem.Email.includes('testing.com')){
                              flag=1
                              alert('Please use correct email.');
                              return false;
                          }
                          non_mem.push(mem);
                      }


                    })

                    if(flag==0 && non_mem.length>0) {

                        uploadfile("groupsupport", 'toursupport', this.excel_file, this.item.booking_id).then(response => {

                            if (this.meta.meta_non_member_list.support[0].mobile != '') {


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

            updatepasssingle(data1,index,event){
          //    console.log(data)
                let data =_.cloneDeep(data1);
                if( this.meta.meta_pass_hist[index].exp_date!='' &&
                    this.meta.meta_pass_hist[index].issue_date!='' &&
                    this.meta.meta_pass_hist[index].issue_place!='' &&
                    this.meta.meta_pass_hist[index].name_first!='' &&
                    this.meta.meta_pass_hist[index].name_last!='' &&
                    this.meta.meta_pass_hist[index].passportno!=''  ){


                    let form = new FormData();
                    var id = data['booking_id']['id'];
                    form.set("id",id);
                    form.set("filename",data.filename);
                    form.set("travellerId",event.traveller_id);
                    form.set("travellerName",event.full_name);
                    form.set("relation",event.relation);

                    delete data.booking_id;
                    delete data.filename;
                    //    console.log(data)

                    form.set("group_id",this.item.id);
                    form.set("index",index);
                    form.set("data",JSON.stringify(data) );

                    axios.post('/api/webservices/passupdatemember', form)

                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.log(error);
                        })

                }
                else{
                    // console.log(this.meta.meta_pass_hist[index].booking_id);
                    // console.log(data1.booking_id);

                    if(data1.booking_id!=null){
                        data1.booking_id='';
                        this.meta.meta_pass_hist[index].booking_id=''
                        alert("Kindly Fill all Details, Clear Dropdown & Reassign")
                    }
                    else {
                    data1.booking_id='';
                        this.meta.meta_pass_hist[index].booking_id=''
                    }

                }


            },
            updatepasspassId(data1,index,event){
             // console.log(data1)

                data1.id_name=data1.id_name.label

                var data =_.cloneDeep(data1);

                if(this.meta.meta_photo_id_hist[index].id_num!='' &&
                    this.meta.meta_photo_id_hist[index].id_name!=''
                    ){

                    this.meta.meta_photo_id_hist[index].id_name=this.meta.meta_photo_id_hist[index].id_name.label;

                    let form = new FormData();
                    var id = data['data']['id'];
                    form.set("id",id);
                    form.set("filename",data.filename);

                    delete data.data;
                    delete data.filename;
                    //    console.log(data)

                    form.set("group_id",this.item.id);
                    form.set("index",index);
                    form.set("data",JSON.stringify(data) );
                    form.set("travellerId",event.traveller_id);
                    form.set("travellerName",event.full_name);
                    form.set("relation",event.relation);

                    axios.post('/api/webservices/photo_idupdatemember', form)

                        .then(response => {

                            this.meta.meta_photo_id_hist=_.cloneDeep(response.data);

                        })
                        .catch(error => {
                            console.log(error);
                        })

                }
                else{
                    // console.log(this.meta.meta_pass_hist[index].booking_id);
                    // console.log(data1.booking_id);

                    if(data1.booking_id!=null){
                        data1.booking_id='';
                        this.meta.meta_photo_id_hist[index].booking_id=''
                        alert("Kindly Fill all Details, Clear Dropdown & Reassign")
                    }
                    else {
                    data1.booking_id='';
                        this.meta.meta_photo_id_hist[index].booking_id=''
                    }

                }


            },

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
                            if(found && arr2.length>=10){
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
                                    else if('Type' in rowObject[counter] === true &&( data.type== 'Secondry' || data.type== 'Secondary')){
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
                            alert("File with wrong headers.")

                        }

                        }
                        else{

                            alert('You Cannot Upload Members More Than 500');
                        }




                };
                fileReader.readAsBinaryString(selectedFile);




                return false;




            },

            uploadcsvregistration(event){


                // this.csv_active_option=1;
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


                                    data.Email=data.Email.trim();

                                    if('Members_Allowed' in rowObject[counter] === true){
                                        data.Members_Allowed=data.Members_Allowed.toString().trim();
                                    }
                                    else{
                                        data.Members_Allowed=1;
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

                                    if('Traveller_name' in rowObject[counter] === true){
                                        data.Traveller_name=data.Traveller_name.trim();
                                    }
                                    else{
                                        data.Traveller_name='';
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
                                    }
                                    else if (data.Phone.toString().length == 10) {
                                        data.Phone='+91'+data.Phone;
                                        flag=0

                                    }
                                    else if (data.Phone.toString().length < 10) {
                                        flag=1
                                    }
                                    else {
                                        flag=1
                                    }
                                    if(flag==0){
                                        valid_members.push(data);
                                    }
                                    else if (flag == 1) {
                                        data.remark='Phone Number Error';
                                        invalid_members.push(data);
                                    }
                                }
                                else if ('Traveller_name' in rowObject[counter] === false) {
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
                        alert('You Cannot Upload Members More Than 500');
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
                        form.set('counter','2');
                        form.set('type','reg');
                        form.set('json',this.json_data);
                        form.set('id',this.item.id);

                        axios.post('/api/v1/verify_member_sheet' , form)
                            .then(response => {
                               this.loading2=false;
                                if(response.data.status=='error' ){

                                    if(response.data.data.invalid.length>0){
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
                                        this.upload_member_status='There is some error in your excel member file please correct and re-upload the file. Above excel file is just for reference do not upload this file.';
                                        this.invalid_member_data=response.data.data.invalid;
                                        this.invalid_mem_modal=true;
                                        this.file_upload_status=1;
                                        this.show_excel_button=true;
                                        this.csv_active_option=0;
                                        this.setcsvupload_reg(false)
                                    }

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
                                        this.upload_member_status='There is some error in your excel member file please correct and re-upload the file. Above excel file is just for reference do not upload this file.';
                                        this.invalid_member_data=response.data.data;
                                        this.invalid_mem_modal=true;
                                        this.file_upload_status=1;
                                        this.show_excel_button=true;
                                        this.setcsvupload_reg(false)
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
                        form.set('counter','2');
                        form.set('type','pre');
                        form.set('json',this.json_data);
                        form.set('id',this.item.id);

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
                                    this.upload_member_status='There is some error in your excel member file please correct and re-upload the file. Above excel file is just for reference do not upload this file.';
                                    this.invalid_member_data=response.data.data.invalid;
                                    this.invalid_mem_modal=true;
                                    this.file_upload_status=1;
                                    this.show_excel_button=true;
                                    this.csv_active_option=0;
                                    this.setcsvupload_reg(false)
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
                                        this.upload_member_status='There is some error in your excel member file please correct and re-upload the file. Above excel file is just for reference do not upload this file.';
                                        this.invalid_member_data=response.data.data;
                                        this.invalid_mem_modal=true;
                                        this.file_upload_status=1;
                                        this.show_excel_button=true;
                                        this.setcsvupload_reg(false)
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

                        // if ('Traveller_name' in rowObject[0] === true
                        //     && 'Email' in rowObject[0] === true
                        //     && 'Phone' in rowObject[0] === true
                        //     && 'Airport_Hub' in rowObject[0] === true
                        //     && 'Visa_Hub' in rowObject[0] === true
                        //     && 'Members_Allowed' in rowObject[0] === true) {
                        //
                        //     rowObject.forEach((data)=>{
                        //
                        //         if(data.Phone.toString().length==12 && data.Phone.toString().charAt(0)==9){
                        //             data.Phone='+'+data.Phone;
                        //             flag=0
                        //
                        //         }
                        //         if(data.Phone.toString().length==13 && data.Phone.toString().charAt(0)=='+'){
                        //             flag=0
                        //         }
                        //         else if(data.Phone.toString().length==10){
                        //             data.Phone='+91'+data.Phone;
                        //             flag=0
                        //
                        //         }
                        //         else if(data.Phone.toString().length<10){
                        //             flag=1
                        //         }
                        //         else{
                        //             flag=1
                        //         }
                        //
                        //         if(flag==0){
                        //             valid_members.push(data);
                        //         }
                        //         else if(flag==1){
                        //             data.remark='Phone Number Error';
                        //             invalid_members.push(data);
                        //         }
                        //
                        //     })
                        //     return_arr.push({
                        //         'valid':valid_members,
                        //         'invalid':invalid_members,
                        //         'status':'true'
                        //     })
                        //     document.getElementById("jsonData").value = JSON.stringify(return_arr);
                        // }
                        // else{
                        //
                        //     return_arr.push({
                        //         'valid':[],
                        //         'invalid':[],
                        //         'status':'false'
                        //     })
                        //     document.getElementById("jsonData").value = JSON.stringify(return_arr);
                        // }



                        //





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
                        this.updateData()
                            .then((response) => {
                                this.prog=false;
                                // this.$Progress.finish()
                                this.csvmodal = false
                                this.json_data='';
                                this.csv_active_option=0;
                                this.excel_file='';
                                // this.$router.push({ name: 'groups.edit', params:{'invalid_mem':response.invalid_mem ,'invalid_mem_status':response.invalid_mem_status,'book_id':response.id ,'upload_status':response.upload_status}})
                                if(response.invalid_mem_status){

                                    if(response.error_section){

                                        axios.get('/api/webservices/fetch_active_booking_of_group?id='+response.id)
                                            .then(response_data => {
                                                this.upload_member_status=''+response_data.data+' members loaded successfully. Something went wrong ,Please Re-Upload the file';
                                                this.invalid_member_data=response.invalid_mem;
                                                this.invalid_mem_modal=true;
                                                this.show_excel_button=false;
                                                this.file_upload_status=1;
                                            })
                                            .catch(error => {
                                                alert(error);
                                            })

                                    }
                                    else{
                                        // this.upload_member_status=response.upload_status;
                                        // this.invalid_member_data=response.invalid_mem;
                                        // this.invalid_mem_modal=true;
                                        // this.file_upload_status=1;
                                        // this.show_excel_button=true;
                                    }





                                }
                                if(response.msg=='success'){
                                    this.$eventHub.$emit('create-success')
                                }
                            })
                            .catch((error) => {
                                this.$Progress.fail()

                                this.submit = true;
                                // alert(error)
                                console.log(error)
                                window.location.reload();

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
                        this.setcsvupload_reg("reg")
                        this.setcsvupload(this.excel_file)
                        this.updateData()
                            .then((response) => {
                                this.prog=false;
                                // this.$Progress.finish()
                                this.csvmodal = false
                                this.json_data='';
                                this.csv_active_option=0;
                                this.excel_file='';
                                // this.$router.push({ name: 'groups.edit', params:{'invalid_mem':response.invalid_mem ,'invalid_mem_status':response.invalid_mem_status,'book_id':response.id ,'upload_status':response.upload_status}})
                                if(response.invalid_mem_status){

                                    if(response.error_section){

                                        axios.get('/api/webservices/fetch_active_booking_of_group?id='+response.id)
                                            .then(response_data => {
                                                this.upload_member_status=''+response_data.data+' members loaded successfully. Something went wrong ,Please Re-Upload the file';
                                                this.invalid_member_data=response.invalid_mem;
                                                this.invalid_mem_modal=true;
                                                this.show_excel_button=false;
                                                this.file_upload_status=1;



                                            })
                                            .catch(error => {
                                                alert(error);
                                            })

                                    }
                                    else{
                                        // this.upload_member_status=response.upload_status;
                                        // this.invalid_member_data=response.invalid_mem;
                                        // this.invalid_mem_modal=true;
                                        // this.file_upload_status=1;
                                        // this.show_excel_button=true;
                                    }





                                }
                                if(response.msg=='success'){
                                    this.$eventHub.$emit('create-success')
                                }
                            })
                            .catch((error) => {
                                this.$Progress.fail()

                                this.submit = true;
                                //        alert(error)
                                console.log(error)
                                window.location.reload();

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
                this.page=1;
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
                this.fr = false;
                this.app=false;
                this.groupactive= false;
                this.createlist= false;
                this.tmlist= false;
                this.embed= false;
                this.live= false;
                this.visa= false;
                this.inventory=false;
                this.feedback=false;
                this.costing=false;
                this[item] = true;

// alert("inn");
                if (this.newremark1 != '') {
                    this.setRemarkedit(this.newremark1)
                    this.newremark1 = _.cloneDeep('');
                }

                if (item == 'day' || item=='hotel') {
// console.log('daysdone');
//                     alert("day")
                    this.setdriver_pickup_date_time(this.item.driver_pick_up_time)
                    this.setdriver_pick_up_time(this.item.driver_pick_up_time);
                }
                if(item=='intraction'){
                    // this.opentab();

                    this.setmeta_interactionsfull(this.meta.remarks);
                    this.interaction_visit++
                    if(this.interaction_visit===1){
                        var countlen=0;
                        for(var prop in this.meta.interactions) {
                            if(this.meta.interactions.hasOwnProperty(prop))
                                ++countlen;
                        }

                        this.$refs.myAccordionbooking.open(countlen-1);
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
                if(item=='live'){
                    this.handleQueryChange()
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
            },
            updateRemarks(e) {
                this.setRemarks(e.target.value)
            },
            updatePopulatedFields(question,data,url) {

                let return_arr=[{'question':question,'file':url,'question_type':'populate','data':data}];

                this.setpre_populated_ques(return_arr)
                this.save_n_update('save_update');
            },
            updateHubdata(data,url){
                let return_arr={'data':data,'file':url};
                this.sethub_master(return_arr);
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

            addplace(id){
                this.setItinerary_places(id)
            },
            updatedriver_pickup_date_time(e) {
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
            updatedriver_pick_up_time(e) {

                this.setdriver_pickup_date_time(e.target.value)
            },
            // updateDriver_pick_up_time(e) {
            //     this.setdriver_pickup_date_time(e.target.value)
            // },
            updatedriver_pick_up_time_updated(e) {
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
                this.locationd.id = value.id + '-' + Math.floor((Math.random() * 500) + 1);
                this.locationd.name = value.title;
                this.showModal = true;
                //  this.inmodalnew();

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
                var res = this.meta.meta_driver_no.replace(/\(/g, "");
                res = res.replace(/\)/g, "");
                res = res.replace(/-/g, "");
                res = res.replace(/ /g, "");
                this.setmeta_driver_no(res)
                // this.setmeta_driver_no(e.target.value)
            },


            updatemeta_flight(value, meta_flight, index) {
                // itinerary_places_time

                this.setItinerary_places_time(value.target.files[0]);
                // this.uploadfile("",value.target.files[0]);


                if (!_.isEmpty(this.meta[meta_flight][index]['date']) && !_.isEmpty(this.meta[meta_flight][index]['dep_code']) && !_.isEmpty(this.meta[meta_flight][index]['arr_code']) && !_.isEmpty(this.meta[meta_flight][index]['ticket'])) {
                    uploadfile("flight", this.meta[meta_flight][index]['ticket'], this.item.itinerary_places_time, this.item.booking_id).then(response => {
                        console.log(response.data);
                        // console.log(resp);
                        // axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=flight')
                        this.meta[meta_flight][index]['url'] = response.data;

                    })


                } else {

                    alert("Kindly fill all fields");
                }

            },

            updatemeta_passport(value, meta_passport, index) {

                if (!_.isEmpty(this.meta[meta_passport][index]['exp_date']) && !_.isEmpty(this.meta[meta_passport][index]['name_first']) && !_.isEmpty(this.meta[meta_passport][index]['name_last']) && !_.isEmpty(this.meta[meta_passport][index]['passportno'])) {
                    uploadfile("passport", this.meta[meta_passport][index]['name_first']+this.meta[meta_passport][index]['name_last'], value.target.files[0], this.item.booking_id).then(response => {
                        // axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=passport')
                        this.meta[meta_passport][index]['url'] = response.data;

                    })


                } else {

                    alert("Kindly fill all fields");
                }

            },
            fetch_pass_pdf(index){

                if ( typeof  this.meta.meta_passport[index].pdf !== 'undefined' ){
                    if(this.meta.meta_passport[index].pdf==""){
                        if ( typeof  this.meta.meta_passport[index].url2 !== 'undefined' ) {
                            let form = new FormData();

                            form.set("image1", this.meta.meta_passport[index].url)
                            form.set("image2", this.meta.meta_passport[index].url2)
                            form.set("book_id", this.item.id)
                            form.set("index", index)
                            form.set("source", 3)
                            axios.post('/api/webservices/passport_pdf', form)
                                .then(response => {
                                    this.meta.meta_passport[index].pdf=response.data;
                                    window.open(response.data);

                                })
                        }
                        else {
                            let form = new FormData();

                            form.set("image1", this.meta.meta_passport[index].url)
                            form.set("image2", '')
                            form.set("book_id", this.item.id)
                            form.set("index", index)
                            form.set("source", 3)
                            axios.post('/api/webservices/passport_pdf', form)
                                .then(response => {
                                    this.meta.meta_passport[index].pdf=response.data;
                                    window.open(response.data);

                                })
                        }
                    }
                    else{
                        window.open(this.meta.meta_passport[index].pdf);
                    }

                }
                else{
                    let form = new FormData();

                    form.set("image1", this.meta.meta_passport[index].url)
                    form.set("image2", '')
                    form.set("book_id", this.item.id)
                    form.set("index", index)
                    form.set("source", 3)

                    axios.post('/api/webservices/passport_pdf', form)
                        .then(response => {
                            this.meta.meta_passport[index].pdf=response.data;
                            window.open(response.data);

                        })
                }


            },

            updatemeta_visa(value, type, index) {
                uploadfile("visa", type, value.target.files[0], this.item.booking_id).then(response => {
                    // axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=visa')
                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_voucher(value, type, index) {
                uploadfile("voucher", type, value.target.files[0], this.item.booking_id).then(response => {
                    // axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=voucher')
                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_insurance(value, type, index) {
                uploadfile("insurance", type, value.target.files[0], this.item.booking_id).then(response => {
                    // axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=insurance')
                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_appintment_letter(value, type, index) {
                uploadfile("appointment_letter", type, value.target.files[0], this.item.booking_id).then(response => {
                    this.visa_appointment[0]['appointment_letter'] = response.data;

                })
            },
            updatemeta_other(value, type, index) {
                uploadfile("other", type, value.target.files[0], this.item.booking_id).then(response => {
                    // axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=other')
                    this.meta[type][index]['url'] = response.data;

                })
            },
            updatemeta_photo_id(value, type, index) {
                uploadfile("meta_photo_id", type, value.target.files[0], this.item.booking_id).then(response => {

                    this.meta[type][index]['url'] = response.data;
                    this.meta[type][index]['id_name'] = this.meta[type][index]['id_name'].label;


                })
            },


            updatemeta_welcome_mail(value) {
                this.setmeta_welcome_mail(value)
            },
            updatemeta_confirmation_mail(value) {
                this.setmeta_confirmation_mail(value)
            },
            updatemeta_doc_completion_mail(value) {
                this.setmeta_doc_completion_mail(value)
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

            updateTour_id(e) {
                this.setTour_id(e.target.value)
            },
            updateTour_name(e) {
                this.setTour_name(e.target.value)
            },
            updateTour_location(e) {
                this.setTour_location(e.target.value)
            },
            submitForm0() {



                // this.meta.meta_doc_req=_.cloneDeep(this.local_meta_doc_req.concat(this.meta.meta_doc_req));
                // this.local_meta_doc_req=[];
                // this.setmeta_interactionsfull(this.meta.remarks);
                this.submit=false;


                if(this.tm_data.length>0){

                    if(this.manager_data.length>0){

                        const manager_index=this.manager_data.findIndex(manager=>manager.updated==false && manager.status==true);
                        if(manager_index>=0){
                            let flag=0;
                            this.manager_data.forEach((manager)=>{
                                if(manager.updated==false && manager.status==true){
                                    this.meta.managers_data.push({
                                        "id":manager.id,
                                        "name":manager.name,
                                        "email":manager.email,
                                        "number":manager.number,
                                        "hub":""
                                    })
                                }
                                this.manager_data[flag].updated=true;
                                console.log(this.manager_data[flag]);
                                console.log(this.meta.managers_data);
                                flag++;
                            })
                        }

                    }

                }

                if (!this.item.driver_pick_up_time) {
                    this.errors.push("Date")
                }
                if (!_.isEmpty(this.errors)) {
                    this.errormodal = true
                    this.submit = true;
                }
                else {


                                this.updateData()
                                    .then(() => {

                                        this.$eventHub.$emit('update-success')
                                    })
                                    .catch((error) => {
                                        this.submit = true;
                                        console.error(error)
                                        window.location.reload();
                                    })
                            }


                this.submit = true;
            },
            submitForm() {

                this.setmeta_interactionsfull(this.meta.remarks);
                this.submit=false;
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
                                this.updateData()
                                    .then(() => {
                                        this.$router.push({name: 'groups.index'})
                                        this.$eventHub.$emit('update-success')
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
                        })
                }
            },
            submitForm2() {

                this.setmeta_interactionsfull(this.meta.remarks);
                this.submit=false;
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
                            this.setmeta_interactions(built_interaction("Mail sent to customer","Click Action","Done","Self"))
                            if (response.data.status == 'error') {
                                this.submit = true;
                                alert(response.data.type);
                            } else {
                                this.updateData()
                                // .then(() => {
                                //     this.$router.push({name: 'groups.index'})
                                this.$eventHub.$emit('create-success')
                                // alert("Mail Sent");
                                // this.$router.push({name: 'groups.index'})
                                // })
                                // .catch((error) => {
                                //     this.submit = true;
                                //     console.error(error)
                                // })
                            }

                        })
                        .catch(error => {
                            this.submit = true;
                            alert("error");
                        })
                }
            },
            save_n_update(event){
                this.show_update_button=1;

                if(event==='hotel_update')
                {
                    this.submitForm0();
            //        axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=hotel')
                }
                if(event==='day_plan_update')
                {
                    this.submitForm0();
           //         axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=day_plan')
                }
                if(event==='driver_update')
                {
                    this.submitForm0();
              //      axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=driver')
                }
                if(event==='save_update')
                {
                    this.submitForm0();
                }

                //  this.submit



            },
            update_hotel(){
                this.places.cites.forEach((val) => {

                    console.log(val.id);
                    var gg=val.id;

                    this.fetchhotel(gg.split('-')[0])

                });
            },
            update_status(){
                this.loading2=true;
                // Sns logs fetch
                let form = new FormData();
                form.set('book_id',this.item.booking_id);
                form.set('src','2');
                axios.post('/api/webservices/fetch_sns_logs' , form)
                    .then(response => {this.sns_data=response.data
                        this.loading2=false;
                            this.show_modal2=true;
                        if(this.sns_data.length>0){
                            this.sns_data_count++;
                        }
                    })
            },
            remove_class(e){
                if(e===1){
                    this.update_status();
                }
                var element = document.getElementById("dropdown"+e);
                element.classList.remove("open");
            },
            preview_form(){
                if(this.forms_data_modal=='' || this.forms_data_modal==null){
                    alert('Please Select Form');
                }
                else{

                }


            },

            inmodal_form1(e){
                this.selected_form=e;
                // console.log(JSON.parse(e.form_html))
                // this.preview=true;
                // this.form_preview=_.cloneDeep(e)
                // this.form_preview.form_html=_.cloneDeep(JSON.parse(e.form_html))
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
            in_hub_modal(e){
                this.loading2=true
                // this.members_data_filtered=[];
                var empty_arr=[];
                this.setall_members(empty_arr);
                this.setall_members_filtered(empty_arr);
                if(e==null){
                    // for(var b=0;b<this.members_data.length;b++){
                    //     // this.members_data_filtered=[];
                    //     this.setall_members(empty_arr);
                    //     this.setall_members_filtered(empty_arr);
                    //
                    // }
                    this.visa_appointment[0]['Hub']="";
                }
                else {
                    this.visa_appointment[0]['Hub']=e.hub;

                    for (var b = 0; b < this.members_data.length; b++) {
                        if (this.members_data[b]['visa_Hub'] == e.hub) {
                            // this.members_data_filtered.push(this.members_data[b]);
                            this.members_data[b].params=0;
                            this.all_members.push(this.members_data[b]);
                            // this.all_members_filtered.push(this.members_data[b]);


                        }

                    }
                    this.all_members_filtered=this.all_members;


                }
                document.getElementById("select_all").checked = false;
                document.getElementById("select_text").innerHTML = "Select All";
                this.loading2=false

            },
            select_mem(loc){
            if(loc==1){
                var select_all= document.getElementById('select_all').checked;
                let flag=0;
                if(select_all==true){
                    if(this.all_members.length>0){
                        for(var t=0;t<this.all_members.length;t++){
                            if(this.all_members[t]['params']==0 && this.all_members[t]['cancel_status']==false){
                                document.getElementById(this.all_members[t]['id']).checked = true;
                                flag++;
                            }

                        }
                        if(flag>0){
                            document.getElementById("select_text").innerHTML = "Unselect All";
                        }

                    }
                    else{
                        alert('Please select hub');
                        document.getElementById("select_all").checked = false;
                    }

                }
                else{

                    for(var t=0;t<this.all_members.length;t++){
                        if(this.all_members[t]['params']==0){
                            document.getElementById(this.all_members[t]['id']).checked = false;
                        }

                        document.getElementById("select_text").innerHTML = "Select All";
                    }

                }
            }


            },
            send_intimation(){
                var interview = document.getElementById('interview').checked;
                var bio_metric = document.getElementById('bio_metric').checked;
                var members_checked = '';
                var members_checked_arr = [];
                var appointment_type = [];
                var final_arr=[];
                if(interview==true && bio_metric==true ){
                    appointment_type.push({type:'Interview'},{type:'Bio-Metric'});
                // alert('both');
                }
                else if(interview==false && bio_metric==true){
                    appointment_type.push({type:'Bio-Metric'});
                    // alert('bio');
                }
                else if(interview==true && bio_metric==false){
                    appointment_type.push({type:'Interview'});
                    // alert('int');
                }
                else if(interview==false && bio_metric==false){
                    appointment_type = [];
                    }
                for(var r=0;r<this.all_members_filtered.length;r++){
                    if(this.all_members_filtered[r]['params']==0){
                        members_checked=document.getElementById(this.all_members_filtered[r]['id']).checked;
                        if(members_checked==true){
                            members_checked_arr.push({members:this.all_members_filtered[r]['id']});
                        }
                    }

                }

                if(appointment_type.length>0){

                    if(members_checked_arr.length>0){
                        if(!_.isEmpty(this.visa_appointment[0]['date']) &&
                            !_.isEmpty(this.visa_appointment[0]['time']) &&
                            !_.isEmpty(this.visa_appointment[0]['city']) &&
                            !_.isEmpty(this.visa_appointment[0]['location'])){

                             for(var r=0;r<members_checked_arr.length;r++){
                                 final_arr.push({
                                     id : members_checked_arr[r]['members'],
                                     details : this.visa_appointment,
                                     appointment :appointment_type,
                                     remark:this.visa_appointment[0]['remark'],
                                 });
                             }

                            this.loading2=true;
                            let form=new FormData();
                            form.set('data',JSON.stringify(final_arr));
                            form.set('booking_id',this.item.booking_id);
                            form.set('source','group');
                            axios.post('/api/webservices/visa_appointment' , form)
                                .then(response => {
                                    this.visa_history=response.data
                                    // console.log(response.data);
                                    this.loading2=false;
                                    this.$eventHub.$emit('update-success');
                                    this.visa_appointment=[{"date":"","time":"","city":"","location":"","local_contact_name":"","local_contact_number":"","appointment_letter":"","Hub":'',"remark":""}];
                                    document.getElementById('interview').checked = false;
                                    document.getElementById('bio_metric').checked = false;
                                    this.hub_list_modal=[];
                                })

                            // visa_appointment:[{"date":"","time":"","city":"","location":"","local_contact_name":"","local_contact_number":"","appointment_letter":"","Hub":''}],
                            //

                        }
                        else{
                            alert('Please Fill All required fields');
                        }


                    }
                    else{
                        alert('Please select members');
                    }

                }
                else{
                    alert('Please select appointment type');
                }



            },
            delete_history(loc,index){
                // alert(loc+"--"+index);
                // console.log(this.meta.meta_visa_hist);
                var main_arr='';
                if(loc=='visa'){
                     main_arr=this.meta.meta_visa_hist;
                }
                else if(loc=='flight'){
                     main_arr=this.meta.meta_flight_hist;
                }
                else if(loc=='insu'){
                     main_arr=this.meta.meta_insu_hist;
                }
                else if(loc=='pass'){
                     main_arr=this.meta.meta_pass_hist;
                }

                var return_arr=[];
                for(var j=0;j<main_arr.length;j++){
                    if(j!==index){
                        return_arr.push(main_arr[j]);
                    }
                  }


                if(loc=='visa'){
                    this.meta.meta_visa_hist=return_arr;
                }
                else if(loc=='flight'){
                    this.meta.meta_flight_hist=return_arr;
                }
                else if(loc=='insu'){
                    this.meta.meta_insu_hist=return_arr;
                }
                else if(loc=='pass'){
                    this.meta.meta_pass_hist=return_arr;
                }

            },


            ...mapActions('GroupsSingle', ['setall_member_upload_sheet','setsearch' ,'setsearch2' ,'setcolumn','setmeta_interactionsfull','fetchData', 'updateData','storeData', 'uploadFile', 'resetState', 'setBooking_id', 'setplaces', 'setFull_name', 'setEmail', 'setEmail2', 'setPhone', 'setActivated', 'setScore', 'setNo_of_adults', 'setNo_of_children', 'setAgency_id', 'setAgent_id', 'setMeal_day', 'setBill_pay', 'setBudget','setdriver_pickup_date_time', 'setdriver_pick_up_time', 'setDriver_pick_up_time_updated', 'setDrop_address', 'setHandler_name', 'setHandler_no', 'setMeals_supplement', 'setMember_of_iti', 'setPackage_category', 'setPickup_address', 'setTotal_price', 'setPickup_location', 'setTour_cost', 'setSelected_car', 'setStatus', 'setSupplier_id', 'setTotal_room', 'setTraveller_id', 'setItinerary_places', 'setItinerary_places_time', 'setTour_id', 'setTour_name', 'setTour_location', 'fetchTourAll', 'fetchplace', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setTotal_tour_days', 'fetchTourAll', 'fetchplace', 'fetchhotel', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setmeta_infant', 'setmeta_transport'
                , 'setmeta_source'
                , 'setmeta_flightprice'
                , 'setmeta_flight'
                , 'setmeta_welcome_mail','setmeta_registration_mail','setmeta_doc_completion_mail','setmeta_confirmation_mail'
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
                'setmeta_meta_photo_id',
                'setmeta_ticket_hist',
                'setmeta_interactions',
                'setcsvupload','setcsvupload_reg',
                'setmeta_exp_cost', 'setmeta_exp_costflight', 'setRemarkedit', 'addnewtour', 'setRemarks', 'setRemark', 'setEmail_second', 'setNote', 'setMessageidd', 'setQuery_feel', 'setScore_new', 'setTour_cost_tax','setmeta_form_id','setall_members','setall_members_filtered','setpre_populated_ques','sethub_master']),





        },
        components: {
            SheetsHistory,
            ExcelVisaProcessing,
            ExcelFileUpload,
            LocationPlaceEditComponent,LocationPlaceComponent, LocationComponent, HotelComponent, DayplanComponent, draggable, FormWizard,
            TabContent, WizardButton, WizardStep, BadgerAccordion, BadgerAccordionItem,
            VueTelInput, ColorPicker,vueDropzone: vue2Dropzone,QrcodeVue,apexchart: VueApexCharts,FeedbackBar,FeedbackPie,ExcelTicketUpload,Costing,MailTags,PrePopulatedFields,PersonaliseApp,PollResponse
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




</style>
<style>
    input[type="file"] {
        display: none;
    }
    .modal_preview input[type="file"] {
        display: block !important;
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
    #cost_input{padding-left: 35px; color: grey; width: 132%; border: 1px solid gainsboro;padding-right: 35px;}
    #type_input{padding-left:20px;color:grey;width: 100%;border: solid gainsboro 1px}
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
    .rounded {
        border-radius: .5rem!important;
    }
    #transform_for_send-mail{
        transform: translate3d(-111px, 24px, 0px) !important;
    }

    .accordion .card-header:after {
        font-family: 'FontAwesome';
        content: "\f068";
        float: right;
    }
    .accordion .card-header.collapsed:after {
        /* symbol for "collapsed" panels */
        content: "\f067";
    }
    .custom_label{
        font-size: 17px;
        color: gray;
        font-weight: bolder;
    }
    .custom_label2{
        font-size: 15px;
        color: gray;
        font-weight: 400;
        -webkit-margin-bottom:10px !important;
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
</style>
<style scoped>



    .box_ribbon {
        position: relative;
        width: 100%;
        min-height: 200px;
        background: #fff;
        -webkit-box-shadow: 0 0 15px rgba(0,0,0,.1);
        box-shadow: 0 0 15px rgba(0,0,0,.1);
    }

    /* common */
    .ribbon {
        width: 150px;
        height: 150px;
        overflow: hidden;
        position: absolute;
    }
    .ribbon::before,
    .ribbon::after {
        position: absolute;
        z-index: -1;
        content: '';
        display: block;
        border: 5px solid #2980b9;
    }
    .ribbon span {
        position: absolute;
        display: block;
        width: 225px;
        padding: 15px 0;
        background-color: #3498db;
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        color: #fff;
        font: 700 18px/1 'Lato', sans-serif;
        text-shadow: 0 1px 1px rgba(0,0,0,.2);
        text-transform: uppercase;
        text-align: center;
    }

    /* top left*/
    .ribbon-top-left {
        top: -10px;
        left: -10px;
    }
    .ribbon-top-left::before,
    .ribbon-top-left::after {
        border-top-color: transparent;
        border-left-color: transparent;
    }
    .ribbon-top-left::before {
        top: 0;
        right: 0;
    }
    .ribbon-top-left::after {
        bottom: 0;
        left: 0;
    }
    .ribbon-top-left span {
        right: -25px;
        top: 30px;
        transform: rotate(-45deg);
    }

    /* top right*/
    .ribbon-top-right {
        top: -10px;
        right: -10px;
    }
    .ribbon-top-right::before,
    .ribbon-top-right::after {
        border-top-color: transparent;
        border-right-color: transparent;
    }
    .ribbon-top-right::before {
        top: 0;
        left: 0;
    }
    .ribbon-top-right::after {
        bottom: 0;
        right: 0;
    }
    .ribbon-top-right span {
        left: -25px;
        top: 30px;
        transform: rotate(45deg);
    }

    /* bottom left*/
    .ribbon-bottom-left {
        bottom: -10px;
        left: -10px;
    }
    .ribbon-bottom-left::before,
    .ribbon-bottom-left::after {
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .ribbon-bottom-left::before {
        bottom: 0;
        right: 0;
    }
    .ribbon-bottom-left::after {
        top: 0;
        left: 0;
    }
    .ribbon-bottom-left span {
        right: -25px;
        bottom: 30px;
        transform: rotate(225deg);
    }

    /* bottom right*/
    .ribbon-bottom-right {
        bottom: -10px;
        right: -10px;
    }
    .ribbon-bottom-right::before,
    .ribbon-bottom-right::after {
        border-bottom-color: transparent;
        border-right-color: transparent;
    }
    .ribbon-bottom-right::before {
        bottom: 0;
        left: 0;
    }
    .ribbon-bottom-right::after {
        top: 0;
        right: 0;
    }
    .ribbon-bottom-right span {
        left: -25px;
        bottom: 30px;
        transform: rotate(-225deg);
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
    .vue-dropzone {
        height: 400px !important;
        overflow-y: auto !important;
    }
    .button-css2 {
        outline: currentcolor none 0px !important;
        box-sizing: border-box;
        border: 1px solid transparent;
        background-color: rgb(34, 80, 125);
        font-size: 14px;
        font-weight: 400;
        padding: 6px 12px;
        min-width: 140px;
        color: white;
        width: 100px;
        border-radius: 4px;

        z-index: 10;
        display: inline-block;
        margin-bottom: 0px;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        white-space: nowrap;
        line-height: 1.42857;
    }
    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
        color:black !important;
        font-size:18px !important;

    }

</style>
