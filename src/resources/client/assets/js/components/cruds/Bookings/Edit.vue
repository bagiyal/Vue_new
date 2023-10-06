<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;;font-family: Open Sans">
        <section class="content-header">

            <div class="container"  v-if="show_modal_kyc">
                <div class="modal show in" id="" style="display: block;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body" >
                                <button  type="button" class="close f-2-5" data-dismiss="modal" @click="show_modal_kyc=false">&times;</button><br>
                                <div class="container-fluid" style="text-align: left">
                                    <h2 style="text-align: left"></h2>
                                    <hr>
                                    <label for="message">Select Documents for KYC</label><br>
                                    <div class="row" v-for="(kdoc,index) in agency_kyc ">
                                        <div class="col-md-1 form-group" >

                                            <label class="container_input" >
                                                <input type="checkbox" v-model="kdoc.status" :id="'index'+index">
                                                <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                            </label>

                                        </div>
                                        <div class="col-md-11">
                                            {{kdoc.value}}
                                            <!--    <i class="fa fa-eye f-2 text-secondary mt_0_5" aria-hidden="true" @click="preview_form"></i>-->
                                        </div>
                                        <p style="margin: 3px;"></p>
                                    </div>


                                </div>
                                <!-- this condition is for TC/SOTC  meta.sellingprice1!=null ?send_form_kyc():send_form_kyc_confirm()-->
                                <button v-if="platform=='sotc'" type="button" class="btn btn-success" style="background: rgb(34, 80, 125);float: right;" @click="meta.sellingprice1!=null ?send_form_kyc():send_form_kyc_confirm()" >Send </button>
                                <button v-else type="button" class="btn btn-success" style="background: rgb(34, 80, 125);float: right;" @click="send_form_kyc()" >Send </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!--          Form Modal-->
            <div class="container"  v-if="show_modal">
                <div class="modal show in"  style="display: block;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body" >
                                <button  type="button" class="close f-2-5" data-dismiss="modal" @click="show_modal=false">&times;</button><br>
                                <div class="container-fluid" style="text-align: left">
                                    <h2 style="text-align: left"></h2>
                                    <hr>
                                    <label for="message">Select Form Name From Dropdown</label><br>
                                    <div class="row">
                                        <div class="col-md-10 form-group">
                                            <v-select v-model="forms_data_modal"
                                                      name="forms"
                                                      label="form_name"
                                                      :options="forms_data"


                                            />
                                        </div>
                                        <div class="col-md-2">
<!--                                            <i class="fa fa-eye f-2 text-secondary mt_0_5" aria-hidden="true" @click="preview_form"></i>-->
                                        </div>
                                    </div>


                                </div>
                                <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);float: right;" @click="send_form(1)" v-if="form_send_id==''">Send Form</button>


<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!--          Assign Passport Modal-->
            <div class="container"  v-if="show_modal2">
                <div class="modal show in"  style="display: block;">
                    <div class="modal-dialog" style="max-width: 70% !important;">
                        <div class="modal-content">
                            <div class="modal-body" >
<!--                                <button type="button" class="close" data-dismiss="modal" @click="show_modal2=false">&times;</button><br>-->
                                <div class="container-fluid" style="text-align: left">
                                    <h2 style="text-align: left">Available Passports</h2>
                                    <hr>

                                    <div class="form-group" >


                                        <table class="table" style="background-color: white;text-align: center">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Exp. Date</th>
                                                <th scope="col">Passport No</th>
                                                <th scope="col">Passport</th>
                                                <th scope="col">Action</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(pass,index) in existing_passport">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{pass.name_first}}</td>
                                                <td>{{pass.name_last}}</td>
                                                <td>{{pass.exp_date}}</td>
                                                <td>{{pass.passportno}}</td>
                                                <td > <a class="fa fa-download" target= "_blank" v-bind:href="pass.url"></a>
                                                </td>
                                                <button v-if="pass.show==0" @click="assign_passport_to_member(index,2)" class="custom_button_design">Assign</button>
                                                <td v-else-if="pass.show==1" >Already Assign</td>


                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="form-group" >


                                    </div>

                                </div>
                                <div class="col-md-12" style="text-align: right;">
                                    <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);margin-top: 20px" @click="show_modal2=false">Close</button>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--            Passport View Modal-->
            <div class="container"  v-if="show_modal3">
                <div class="modal show in" id="myModal3" style="display: block;">
                    <div class="modal-dialog" style="max-width: 750px !important;">
                        <div class="modal-content">
                            <div class="modal-body" >
<!--                                <button type="button" class="close" data-dismiss="modal" @click="show_modal3=false">&times;</button><br>-->
                                <div class="container-fluid" style="text-align: left" v-for="(pass,index) in show_passport">
                                    <h2 style="text-align: left">&nbsp;{{pass.name_first}} {{pass.name_last}}  Passport Details </h2>
                                    <hr>
                                    <div class="col-md-12">

                                        <div class="row" style="text-align: center">
                                            <div class="col-md-2 ">
                                                <label for="date" class="text-muted">Exp. Date</label>

                                                <h2>{{pass.exp_date}}</h2>
                                            </div>
                                            <div class="col-md-3 ">
                                                <label for="first_name" class="text-muted">First Name</label>

                                                <h2>{{pass.name_first}}</h2>
                                            </div>
                                            <div class="col-md-3 ">
                                                <label for="last_name" class="text-muted">Last Name</label>

                                                <h2>{{pass.name_last}}</h2>
                                            </div>
                                            <div class="col-md-2 ">
                                                <label for="pass no." class="text-muted">Passport No.</label>

                                                <h2>{{pass.passportno}}</h2>
                                            </div>
                                            <div class="col-md-2 ">
                                                <label for="passport" class="text-muted">Passport</label>

                                                <h2><a class="fa fa-download" target= "_blank" v-bind:href="pass.url"></a></h2>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-12" style="text-align: right;" >

                                        <button type="button" class="btn btn-success" style=";margin-top: 20px" @click="assign_passport_to_member(index,4)">Re-Assign Passport</button>
                                        <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);margin-top: 20px" @click="show_modal3=false">Close</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--            Document update Modal-->
            <div class="container"  v-if="show_modal4">
                <div class="modal show in" id="myModal4" style="display: block;">
                    <div class="modal-dialog" style="max-width: 500px !important;">
                        <div class="modal-content">
                            <div class="modal-body" style="max-height: 500px !important;overflow: auto;">
<!--                                <button type="button" class="close" data-dismiss="modal" @click="show_modal4=false">&times;</button><br>-->
                                <div class="container-fluid" style="text-align: left" >
                                    <h2 style="text-align: left">&nbsp;Document Status </h2>
                                    <hr>
                                    <div class="col-md-12" >
                                        <div class="row" style="text-align: center;margin-bottom: 20px;" >
                                            <div class="col-md-6"><label class="custom_label">Documents</label></div>
                                            <div class="col-md-6"><label class="custom_label">Verify</label></div>
                                        </div>
                                        <div class="row" style="text-align: center;margin-bottom: 15px;" v-for="(docs,index) in member_document">
                                            <div class="col-md-6 custom_label2 border-right" >
<!--                                                <i class="fa fa-file-text" style="font-size: 22px !important;" aria-hidden="true"></i>-->
                                                <img class="doc_image2" v-if="docs.doc_name.includes('Photo')"  src="./../dashboard_resources/passportsizephoto.png">
                                                <img class="doc_image1" v-else-if="docs.doc_name.includes('Passport')" src="./../dashboard_resources/passportcopy.png" >
                                                <img class="doc_image1" v-else-if="docs.doc_name.includes('Financial')" src="./../dashboard_resources/financialdoc.png">
                                                <img class="doc_image1" v-else-if="docs.doc_name.includes('Sponsor')" src="./../dashboard_resources/sponsorletter.png">
                                                <img class="doc_image2" v-else-if="docs.doc_name.includes('ID')" src="./../dashboard_resources/idproof.png">
                                                <i v-else class="fa fa-file-text text-muted" style="font-size: 22px !important;"></i>
                                                <br>{{docs.doc_name}}</div>


<!--                                            <div class="col-md-6">{{docs.value}}</div>-->
                                            <div class="col-md-6">

                                                    <label class="container_input" style="margin-left: 45%;">
                                                        <input  type="checkbox" :checked="docs.value==1" :id="docs.doc_name" >
                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                    </label>

<!--                                                <div class="checkbox">-->
<!--                                                <label><input type="checkbox" :checked="docs.value==1" :id="docs.doc_name" class="checkbox2" data-ng-model="example.check">-->
<!--                                                <span class="box"></span>-->
<!--                                                </label>-->
<!--                                                </div>-->

                                                </div>
                                        </div>

                                    </div>
                                    <div class="col-md-12" >

                                        <label for="message">Remark *</label><br>
                                        <div class="form-group">
                                            <textarea rows="5"  style="font-size: 15px;" cols="45" v-model="meta.meta_family[update_mem_doc]['remark']"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12" style="text-align: right;" >

                                        <button type="button" class="btn btn-success" style="margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="update_member_docs('index',2)">Update</button>
                                        <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="show_modal4=false">Close</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--    TC/SOTC        Pax update Modal-->
            <div class="container"  v-if="show_modal6 && platform=='sotc'">
                <div class="modal show in" id="myModal6" style="display: block;">
                    <div class="modal-dialog" style="max-width: 500px !important;">
                        <div class="modal-content">
                            <div class="modal-body" style="max-height: 500px !important;overflow: auto;">
                                <button  type="button" class="close f-2-5" data-dismiss="modal" @click="show_modal6=false">&times;</button><br>
                                <div class="container-fluid" style="text-align: left">
                                    <h2 style="text-align: left">Update Pax Details</h2>
                                    <hr>

                                    <div class="container-fluid">
                                        <div class="row" v-for="(pax,index) in paxdetails_data" :key="index" >
                                            <div class="col-md-12">
                                                <div  class="col-md-1" style="margin-top: 3px;">
                                                    <label class="container_input" v-if="pax.status=='create'" title="Pax in create mode!">
                                                        <input checked  type="checkbox"  v-model="pax.check_status" :id="pax.paxid" disabled>
                                                        <span class="checkmark bg-success" style="border:1px solid; width: 23px !important;height:23px !important;"></span>

                                                    </label>
                                                    <label class="container_input" v-else title="Click to tick pax.">
                                                        <input  type="checkbox" v-model="pax.flag" :id="pax.paxid" >
                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                    </label>

                                                </div>


                                                <div  class="col-md-10" style="font-size: 21px;margin-top: -2px;color: black;">{{pax.name}} <i v-if="pax.error_status==2" class="fa cursor fa-info-circle text-danger" :title="error_status?'Click To Hide Errors':'Click To Show Errors'" @click="add_error_logs(pax.logs)"></i></div>
                                            </div>

                                        </div>
                                        <div class="row mt-2" v-if="error_status">
                                            <h3>Error Logs</h3>
                                                <div class="col-md-12" v-for="(errors,index) in error_logs">
                                                    <div class="col-md-1">{{index+1}}</div>
                                                    <div class="col-md-8">{{errors.error}}</div>
                                                    <div class="col-md-3">{{ errors.time | dateonly2}}</div>
                                                </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div class="modal-footer f-1-2">
                                <button type="button" class="btn btn-primary" @click="share_pax()">Save changes</button>
                                <button type="button" class="btn btn-secondary" @click="show_modal6=false">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <task-maker class="arrange_edit-add-task"></task-maker>
            <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>
            <div class="row">
                <div class="col-4"><h1>Booking: {{item.booking_id}}</h1></div>
                <div class="col">
                    <div class="row float-right" style="padding-right: 2.5rem !important;">

                        <!--  hotel update button-->
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
                        <!--driver update button-->
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
                        <!--document update button-->
                        <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor" @click="save_n_update('upload')" v-if="up==true">
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
                        <!--flight update button-->
                        <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor" @click="save_n_update('upload')" v-if="train==true">
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
                        <div class="bg-white ml-2 shadow width rounded text-green pb-2 cursor"  @click="save_n_update('save_update')" v-if="hotel==false && day==false && exe==false && up==false && train==false">
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
<!--                        for tc/sotc-->
                        <div class="bg-white ml-2 shadow width rounded text-success pb-2 cursor float-right" title="Manual Payment"  @click="offline_paytment_captured_trans_num=true" v-if="offline_payment_captured && !meta.cancelled_status && platform=='sotc' ">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-money" aria-hidden="true"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">Payment</span>

                                </div>
                            </div>
                        </div>

                        <div  v-if="form_send_id==''"  class="bg-white ml-2 shadow width rounded color_sky pb-2 cursor float-right" @click="show_modal=true">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fab fa-wpforms" aria-hidden="true"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">Send Form</span>

                                </div>
                            </div>
                        </div>

                        <div  v-if="meta.kyc_sent=='false'"  class="bg-white ml-2 shadow width rounded color_sky pb-2 cursor float-right" @click="show_modal_kyc=true">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fab fa-wpforms" aria-hidden="true"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">KYC Form</span>

                                </div>
                            </div>
                        </div>


<!--                        <div class="bg-white ml-2 shadow width rounded pb-2" v-if="mail">-->
<!--                            <mail-tags />-->
<!--                        </div>-->

                        <div  class="bg-white ml-2 shadow width rounded pb-2 cursor " >
                            <div class="row">
                                <div class="col-12 text-center mt-3 mb-n2">
                                    <span class="f-2 text-muted"><i class="fas fa-envelope"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown mt-n1" id="dropdown1">
                                    <span class="f-1-4 text-dark">Delivery</span>
                                    <span class="dropdown-toggle f-1-7 text-dark" data-toggle="dropdown" @click="remove_class(1)"></span>

                                    <ul class="dropdown-menu f-1-4 p-2 mt-3 border-0" style="position: absolute; transform: translate3d(12px, 25px, 0px) !important; top: 0px; left: 0px; will-change: transform;" x-placement="bottom-start">
                                        <li v-if="this.sns_data_count>0" class=" mt-3 pt-3" >
                                            <a v-for="(qut,index) in (sns_data)"   class="text-dark border-top"  >Mail: {{ index+1 }} {{ qut }} </a>
                                        </li>
                                        <li v-else>No Data Available!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
<!--                        for tc/sotc-->
                        <div class="bg-white ml-2 shadow width rounded text-primary pb-2 cursor float-right" title="Update Pax"  @click="fetch_pax_data()" v-if="item.member_of_iti!='' && item.member_of_iti!=null && !meta.cancelled_status && platform=='sotc'">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-user-circle" aria-hidden="true"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">Update Pax</span>

                                </div>
                            </div>
                        </div>

                        <div class="bg-white ml-2 shadow width rounded color_orange pb-2 cursor float-right" >
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-paper-plane"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown" id="dropdown2">
                                    <span class="f-1-4" data-toggle="dropdown" @click="remove_class(2)">Mail</span>
                                    <span class="dropdown-toggle f-1-7 color_orange " data-toggle="dropdown" @click="remove_class(2)"></span>

                                    <ul class="dropdown-menu f-1-4 p-2 mt-3 border-0" style="position: absolute; transform: translate3d(-110px, 25px, 0px) !important; top: 0px; left: 0px; will-change: transform;" x-placement="bottom-start">
                                        <li><a @click="sendWelcomeMail" class="color_orange"><img src="./../dashboard_resources/Icon/shortquote-1.png" class="hw-1-5 mr-3">App Download Mail</a></li>
                                        <li class="divider"></li>
                                        <li  v-if="form_button==false"><a  @click="send_form(2)" class="color_orange"><img src="./../dashboard_resources/Icon/shortquote-1.png" class="hw-1-5 mr-3">Send Registration Mail</a></li>
                                        <li v-if="form_button==false" class="divider"></li>
                                        <li><a @click="request_doc_mail" class="color_orange"><img src="./../dashboard_resources/Icon/shortquote-1.png" class="hw-1-5 mr-3">Request Doc. Mail</a></li>
                                        <li class="divider"></li>
                                        <li  v-if="form_button==false"><a  @click="send_mail" class="color_orange"><img src="./../dashboard_resources/Icon/shortquote-1.png" class="hw-1-5 mr-3">Send Confirmation Mail</a></li>
                                        <li v-if="hotel==true" class="divider"></li>
                                        <li v-if="hotel==true"><a @click="show_modal5=!show_modal5" class="color_orange"><img src="./../dashboard_resources/Icon/shortquote-1.png" class="hw-1-5 mr-3">Send Hotel Mail</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>





                        <div v-if="license.whatsapp_integ"  class="bg-white ml-2 shadow width rounded text-green pb-2 cursor float-right" @click="whatsapp">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fab  fa-whatsapp"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
<!--                                    <span class="f-1-4">Send Details</span>-->
                                    <span class="f-1-4">Whatsapp</span>

                                </div>
                            </div>
                        </div>

                       <div v-else  class="bg-white ml-2 shadow width rounded text-green pb-2 cursor float-right" >
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fab  fa-whatsapp"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">Whatsapp Locked</span>

                                </div>
                            </div>
                        </div>


                        <div class="bg-white ml-2 shadow width rounded text-danger pb-2 cursor float-right" title="click to cancel traveller"  @click="cancel_pax()" v-if="!meta.cancelled_status">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-times" aria-hidden="true"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">Cancel</span>

                                </div>
                            </div>
                        </div>
                        <div class="bg-white ml-2 shadow width rounded text-secondary pb-2 cursor float-right"   v-else title="already cancelled">
                            <div class="row">
                                <div class="col-12 mt-3 mb-n2 text-center">
                                    <span class="f-2"><i class="fa fa-times" aria-hidden="true"></i></span>
                                </div>
                                <div class="col-12 text-center dropdown">
                                    <span class="f-1-4">Cancel</span>

                                </div>
                            </div>
                        </div>


                    </div>

                    <!--<button class="text-white"  style="outline: 0px !important;box-sizing: border-box;border: 1px solid transparent;background-color: rgb(34, 80, 125);font-size: 14px;font-weight: 400;padding: 6px 12px;border-radius: 4px;z-index: 1;display: inline-block;margin-bottom: 0px;text-align: center;vertical-align: middle;touch-action: manipulation;cursor: pointer;background-image: none;white-space: nowrap;line-height: 1.42857;" @click="send_mail" >Send Customer Mail</button>-->
                </div>
            </div>

        </section>

        <section class="content activedev m-t2px">
            <div class="row">
                <div class="col-lg-2">
                    <ul class="sidenav border-right border-light">
                        <a href="#"  :class="summ==true?'sidenavactive':''"> <li @click="changeview('summ')"> Summary</li></a>
                        <a href="#" :class="hotel==true?'sidenavactive':''"><li  @click="changeview('hotel')">Hotels</li></a>
                        <a href="#" :class="day==true?'sidenavactive':''"> <li @click="changeview('day')">Day Plan</li></a>
                        <a href="#" :class="exe==true?'sidenavactive':''"> <li @click="changeview('exe')">Executive & Transport</li></a>
                        <a href="#" :class="trav==true?'sidenavactive':''"><li @click="changeview('trav')">Traveller</li></a>
                        <a href="#" :class="up==true?'sidenavactive':''"><li @click="changeview('up')">Upload</li></a>
                        <a href="#" :class="train==true?'sidenavactive':''"><li  @click="changeview('train')">Train/Flight</li></a>
                        <a href="#" :class="mail==true?'sidenavactive':''"><li @click="changeview('mail')">Mail Format</li></a>

                        <a href="#" :class="family_mem==true?'sidenavactive':''"><li @click="changeview('family_mem')" >Visa Processing</li></a>
                        <!--                        <a href="#" :class="visa==true?'sidenavactive':''"><li @click="changeview('visa')" >Visa</li></a>-->

                        <a href="#" :class="cost==true?'sidenavactive':''"><li @click="changeview('cost')">Cost</li></a>
                        <a href="#" v-if="feedback_response.length>0" :class="feedback==true?'sidenavactive':''"><li @click="changeview('feedback')">Feedback</li></a>

                        <a href="#" :class="intraction==true?'sidenavactive':''"><li @click="changeview('intraction')">Interaction History</li></a>
                    </ul>
                </div>
                <div class="col-lg-10">
                    <!--                    Executive and handler-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[exe ? 'activedev' : 'hidedev' ]" class="query-content">
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
<!--                                <div class="row">-->
<!--                                    <div class="col-12"><p class="fw-4 h2 text-muted">Handler Mobile no</p></div>-->
<!--                                    <div class="col-12"><input type="text" :value="item.handler_no" @change="updateHandler_no" class="form-control"></div>-->
<!--                                </div>-->

                                <div class="row">
                                    <div class="col-lg-12">
                                        <span class="c-grey f-2">Handler Mobile no</span>
                                    </div>
                                    <div  class="col-12 input-group ml-4">
                                        <span class="input-group-prepend"><i class="fas fa-phone-alt input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                        <vue-tel-input v-bind="bindProps"  v-model="item.handler_no" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone" @input="updateHandler_no"></vue-tel-input>
                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                    </div>


                                </div>

                                <div class="row pt-5">
                                    <div class="col-lg-12">
                                        <span class="c-grey f-2">Driver Mobile no</span>
                                    </div>
                                    <div  class="col-12 input-group ml-4">
                                        <span class="input-group-prepend"><i class="fas fa-phone-alt input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                        <vue-tel-input v-bind="bindProps"  v-model="meta.meta_driver_no" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone" @input="updatemeta_driver_no"></vue-tel-input>
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

                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[summ ? 'activedev' : 'hidedev' ]" class="query-content">

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
                                        <div class="row mt-3">
                                            <div class="col-12 mb-n3"><p class="text-muted">Location {{index+1}} <img src="./../dashboard_resources/loction.png" class="imgsize ml-2"></p></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-9 mr-2"><input disabled type="text" class="form-control" v-model="tour.name"></div>
                                            <div class="col-2 ml-for-nd"><input type="text" class="ml-3 form-control" v-model="tour.days"></div>
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
                                    <div class="col-lg-4 div-back ml-for-tr">
                                        <div class="row text-center pt-2 pb-2">
                                            <div class="col-lg-6">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="f-1-4 fw-4 text-muted">Rooms</p>
                                                    </div>
                                                    <div class="col-lg-12 m-t2" >
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
                                                                     @input="updatePickup_location"><img src="./../dashboard_resources/edit.png" class="pa-img hw-i"></div>
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

                                            @dp-change="updatemeta_pickup_date">
                                        </date-picker>
                                    </div>
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

                                <div class="row mt-4">
                                    <div class="col-lg-12"><p class="text-muted">Remark</p></div>
                                </div>
                                <div class="row mt-n3">
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
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[hotel ? 'activedev' : 'hidedev' ]" class="f-2 text-center query-content" v-if="hotel" >

                        <hotel-component :day="day" @upload_image="uploadhotelimage" @refresh="refeshhotel" :booking_id="item.booking_id"  :location="item.tour_location"  :hotels="hotels"  @addplace="addplace" :tour_location="item.tour_location" :modal="show_modal5" @showday="changeview('day')" @fetch_new_hotel="update_hotel()" @delete="remove" @save_booking="updateData()"></hotel-component>

                    </div>

                    <!--                    Day Plan-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[day ? 'activedev' : 'hidedev' ]" class="query-content f-2" v-if="day">

                        <dayplan-component  :license="license" :itiplaces="item.itinerary_places"  :datestart="item.driver_pick_up_time"  :place="places.places_city_id"  :tour_location="item.tour_location" :meal="item.meals_supplement" @addplace="addplace"  @delete="remove" @showtrav="changeview('exe')" ></dayplan-component>

                    </div>
                    <!--                    Traveller-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[trav ? 'activedev' : 'hidedev' ]" class="container pl-5">

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
                                    <div class="col-lg-12">
                                        <span class="c-grey f-2">Traveller Mobile no</span>
                                    </div>
                                    <div  class="col-10 input-group ml-4">
                                        <span class="input-group-prepend"><i class="fas fa-phone-alt input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                        <vue-tel-input v-bind="bindProps"  v-model="item.phone" class="border-left-0 border-right-0 number_field" name="phone" placeholder="Enter Phone"></vue-tel-input>
                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-12"><span class="c-grey f-2">Email ID</span></div>
                            <div class="col-11"><span><img src="./../dashboard_resources/email.png" class="imgsize mt-1 p-a pl-3"></span><input type="email" class="form-control pl-5 text-muted"  :value="item.email" @input="updateEmail" placeholder="asd@mail.com"></div>
                        </div>
                        <div class="row" v-if="item.member_of_iti!='' && item.member_of_iti!=null">
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <span class="c-grey f-2">Visa Hub</span>
                                    </div>
                                    <div  class="col-10 input-group ml-4">
                                        <span class="input-group-prepend"><i class="fa fa-home input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                        <input  :value="meta.Visa_Hub"  type="text" @input="updateVisa_Hub" class="form-control border-left-0 border-right-0">
                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 ml-n4">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <span class="c-grey f-2">Airport Hub</span>
                                    </div>
                                    <div  class="col-10 input-group ml-4">
                                        <span class="input-group-prepend"><i class="fa fa-plane input-group-text f-2 pt-2 c-grey border-right-0 bg-w"></i></span>
                                        <input  :value="meta.Airport_Hub" @input="updateAirport_Hub" type="text" class="form-control border-left-0 border-right-0">
                                        <span class="input-group-append"><img src="./../dashboard_resources/edit.png" class="edit-img-dem input-group-text pt-2 bg-w border-left-0"></span>
                                    </div>
                                </div>
                            </div>


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
                        <div class="row mt-4 ml-5">
                            <div class="col-1"></div>
                            <!--                            <div class="col-lg-3"><button class="btn btn-success pl-5 pr-5"><span style="font-size: 20px">Save Traveler Info</span></button></div>-->
                            <!--                            <div class="col-lg-1"></div>-->

                            <div v-if="!license.post_booking_app">
                                <div  style="padding-left: 50px;" class="col-lg-3"><button class="btn btn-primary pl-5 pr-5"><span style="font-size: 20px">Activation Locked</span></button></div>
                            </div>

                            <div v-else >

                                <div  class="col-lg-3"><button :disabled="this.item.activated!=='1'" @click="submitForm" class="btn btn-warning pl-5 pr-5"><span style="font-size: 20px">Click To Reactivate</span></button></div>
                                <!--                            <div class="col-lg-1"></div>-->
                                <div v-if="this.item.activated==='1'" style="padding-left: 26%;"  class="col-lg-3"><button :disabled=true class="btn btn-primary pl-5 pr-5"><span style="font-size: 20px">Itinerary Activated</span></button></div>
                                <div v-else style="padding-left: 26%;" class="col-lg-3"><button @click="submitForm3" class="btn btn-primary pl-5 pr-5"><span style="font-size: 20px">Activate Itinerary</span></button></div>



                            </div>



                        </div>

                        <!--                        </div>-->
                        <div>
                            <button @click="changeview('up')" class="button-css">Upload</button></div>
                    </div>

                    <!--                    train/flight-->
                    <div :style="role=='visa'? 'pointer-events: none;':''" :class="[train ? 'activedev' : 'hidedev' ]" class="query-content mb-5 mt-3 mr-5 ml-3">
                        <div class="row">
                            <div class="col-lg-12">
                                <span class="f-2 c-grey">Ticket Details(Dept. City code Ex: “DEL” for Delhi)</span>
                            </div>
                        </div>

                        <div class="row mt-3 mb-3 ml-5">



                            <div class="col-md-3 " v-for="(member,index) in membersFlightData" :key="index">
                                <div  class="col-md-1" style="margin-top: 3px;">
                                    <label class="container_input">
                                        <input  type="checkbox" checked="checked" :id="member.id" >
                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                    </label></div>

                                <div  class="col-md-10" style="font-size: 21px;margin-top: -2px;color: black;">{{member.name}}</div>
                            </div>




                        </div>


                        <div class="container bg-white border mt-5">

                            <div class="col-md-12 mt-2">
                                <div class="col-lg-6 mt-2 mb-2 " style="margin-left: -30px;">
                                    <p class="mb-2">Select Ticket Type</p>
                                    <v-select :clearable="false"
                                              name="type"
                                              label="type"
                                              v-model="selectedFlight"
                                              :options="[{'type':'Flight'},{'type':'Train'}]"
                                    />

                                </div>
                                <i class="fa fa-plus-circle float-right p-2 cursor" @click='flightsData.push({"date": "", "dep_code": "", "arr_date": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":selectedFlight.type})'></i>
                            </div>

                            <div class="col-md-12 mt-5" style="margin-left: -25px;">
                                <div class="row  ml-0 mr-5 pb-1" v-for="(ticket,index) in flightsData">
                                    <hr/>
                                    <div class="col-lg-3 mt-2 mb-2 border-right">
                                        <p class="mb-4">Dept Date & Time</p>
                                        <date-picker
                                            :id="'dept_date'+index"
                                            v-model="ticket['date']"
                                            :config="$root.dpconfigDatetime"
                                            name="flight_data_time"
                                            class="form-control"
                                            placeholder="Date & Time"

                                        />
                                </div>
                                    <div class="col-lg-3 mt-2 mb-2 border-right" >
                                            <p class="mb-4">Dept {{ticket.type=='Train'?'Station':'Airport'}} Code</p>


                                <div >
                                    <vue-bootstrap-typeahead
                                        v-if="ticket.type=='Flight'"
                                        :id="'dept_code'+index"
                                        :data="airport_codes"
                                        size="sm"

                                        placeholder="DEL"
                                        v-model="ticket['dep_code']"

                                        :serializer="s => s.name"
                                        ref="typeahead"
                                        @hit="ticket['dep_code']=$event.code,ticket['dep_name']=$event.name"
                                    />

                                        <input
                                            :id="'dept_code'+index"
                                            v-else
                                            type="text"
                                            v-model="ticket['dep_code']"
                                            class="form-control"
                                            placeholder="NDLS"
                                    />

                                </div>

                            </div>
                                    <div class="col-lg-3 mt-2 mb-2 border-right">
                                        <p class="mb-4">Arr Date & Time</p>
                                <date-picker
                                            :id="'arr_date'+index"
                                            v-model="ticket['arr_date']"
                                    :config="$root.dpconfigDatetime"
                                    name="flight_data_time"
                                    class="form-control"
                                            placeholder="Date & Time"

                                        />
                            </div>
                                    <div class="col-lg-3 mt-2 mb-2 border-right" >
                                        <p class="mb-4">Arr {{ticket.type=='Train'?'Station':'Airport'}} Code</p>


                                        <div >
                                    <vue-bootstrap-typeahead
                                                v-if="ticket.type=='Flight'"
                                        :data="airport_codes"
                                        size="sm"
                                                :id="'arr_code'+index"
                                                placeholder="DEL"
                                                ref="typeahead"
                                                v-model="ticket['arr_code']"

                                        :serializer="s => s.name"


                                                @hit="ticket['arr_code']=$event.code,ticket['arr_name']=$event.name"
                                            />

                                            <input
                                                v-else
                                                :id="'arr_code'+index"
                                                type="text"
                                                v-model="ticket['arr_code']"
                                                class="form-control"
                                                placeholder="NDLS"
                                    />

                                </div>

                            </div>
                                    <div class="col-lg-3 mt-2 mb-2 border-right">
                                        <p class="mb-4">Ticket no</p>
                                        <input
                                            :id="'ticket'+index"
                                            type="text"
                                            v-model="ticket['ticket']"
                                            class="form-control"
                                            placeholder="123456"
                                        />
                                    </div>
                                    <i class="fa fa-trash ml-3 mt-5 cursor" @click="flightsData.splice(index,1)"></i>




                                </div>

                                </div>

                            </div>
                        <div class="container-fluid mt-3" v-if="flightsData.length>0">
                            <div class="col-6 text-center offset-3 f-1-6" >
                            <p class="ml-4">
                                <i class="fa fa-file-text" aria-hidden="true"></i> &nbsp;Upload Ticket<br/>
                                <span  class="text-primary f-1-2">(Size: 2MB, Format: JPG,PNG,PDF)</span>
                            </p>
                            <label class="file_hidden cursor offset-1 mt-n2 f-1-6">
                                Choose File
                                <input
                                    id="flight-ticket-upload-button"
                                    type="file"
                                    size="20"
                                    @change="uploaddoc($event,'flight','flight-ticket-upload-button')"
                                    accept="image/x-png,image/jpg,image/jpeg,application/pdf"
                                >
                            </label>
                            </div>
                        </div>

                        <div class="col-md-12" style="margin-top: 50px;" >
                            <label class="f-2">Ticket Allocation History</label>
                            <div id="accordion" class="accordion">

                                <div class="card mb-3 "  v-for="(members,index_main) in membersFlightData" :key="index_main+members.id">
                                    <div class="card-header " :class="index_main==0?'':'collapsed'" data-toggle="collapse" :href="'#collapse'+index_main">
                                        <a class="card-title">{{members.name}} <span v-if="members.relation!=''">({{members.relation}})</span></a>
                                </div>
                                    <div :id="'collapse'+index_main" class="card-body collapse" :class="index_main==0?'show in':''" data-parent="#accordion">


                                        <table class="table" style="background-color: white;text-align: center">
                                            <thead>
                                            <tr class="f-1-5">
                                                <th scope="col">#</th>
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
                                            <tr  class="f-1-3" v-for="(value,index) in members.doc">
                                                <td>{{index+1}}</td>
                                                <td>{{value.type}}</td>
                                                <td>{{value.date}}</td>
                                                <td>{{value.dep_code}}</td>
                                                <td>{{value.arr_date}}</td>
                                                <td>{{value.arr_code}}</td>
                                                <td>{{value.ticket}}</td>

                                                <td><a class="fa fa-download" aria-hidden="true" :href="value.url"  target="_blank"></a> </td>

                                            </tr>
                                            </tbody>
                                        </table>







                                </div>

                            </div>

                            </div>
                        </div>


                        <button @click="changeview('mail')" class="button-css">Mail</button>
                    </div>
                    <!--                    mail format-->
                    <div :style="role=='visa'? 'pointer-events: none;':''"   :class="[mail ? 'activedev' : 'hidedev' ]" class="container" style="height: 100%">
                        <div class="row">
                            <div class="col-12">

                                <form-wizard @on-complete="changeview('family_mem')" color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Visa Processing">

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

                    <!--                    Family Member-->
                    <div :class="[family_mem ? 'activedev' : 'hidedev' ]" class="container" style="height: 100%">

                        <div class="container">

                            <ul class="nav nav-tabs col-md-12" role="tablist" style="margin-bottom: 50px;">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Document Required</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab" >Member Tracking</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab" >Visa Appointment</a>
                                </li>


                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div  class="container-fluid">
                                        <div class="col-lg-6">
                                            <b class="mb-3" style="font-size: 20px;">Drag Document you will like to collect</b>
                                            <div style="min-height: 200px;background-color: rgba(0, 83, 159, 0.04);">
                                                <draggable v-model="doc_req_list" group="people" @start="drag=true" @end="drag=false">
                                                    <div v-for="(name,index) in doc_req_list " >

                                                        <div class="panel panel-default col-md-11" style="margin-bottom: unset !important">
                                                            <div style="padding: 5px;font-size: 15px">{{name}} <i style="float: right;padding: 2px;font-size: 18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>
                                                            </div>
                                                        </div>

                                                        <i class="col-md-1 fa fa-arrow-right" style="font-size: 18px;" aria-hidden="true" @click="meta.meta_doc_tags.push(doc_req_list[index]), doc_req_list.splice([index],1)"></i>
<!--                                                                                                                @click="doc_req_list.push(meta.meta_doc_tags[index]), meta.meta_doc_tags.splice([index],1)"-->
                                                    </div>

                                                </draggable>
                                            </div>
                                            <div class="panel panel-default mt-3">
                                                <div style="padding: 5px;font-size: 15px">
                                                    <input type="text" v-model="add_doc_tag" placeholder="Add New Document" style="border: unset;width:90%;height: 20px;font-size: 14px">
<!--                                                    <i style="float: right;cursor:pointer;padding: 2px;font-size: 18px;" class="fa fa-plus" aria-hidden="true"-->
<!--                                                       @click="doc_req_list.push(add_doc_tag),add_doc_tag=''"></i>-->

                                                    <i style="float: right;padding: 2px;font-size: 18px;" v-if="add_doc_tag.length>0" class="fa fa-plus" aria-hidden="true"
                                                       @click="doc_req_list.push(add_doc_tag),add_doc_tag=''"></i>

                                                    <i style="float: right;padding: 2px;font-size: 18px;" v-else class="fa fa-plus" aria-hidden="true"></i>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-6">
                                            <b class="mb-3" style="font-size: 20px;">Documents Required </b>
                                            <div style="min-height: 32px;background-color: rgba(0, 83, 159, 0.04);">
                                                <draggable v-model="meta.meta_doc_tags" group="people" @start="drag=true" @end="drag=false">
                                                    <div v-for="(name,index) in meta.meta_doc_tags " >
                                                        <i style="font-size: 20px;" class="col-md-1 fa fa-arrow-left" aria-hidden="true" @click="doc_req_list.push(meta.meta_doc_tags[index]), meta.meta_doc_tags.splice([index],1)" ></i>

                                                        <div class=" col-md-11  panel panel-default" style="margin-bottom: unset !important">
                                                            <div style="padding: 5px;font-size: 15px">{{name}}
                                                                <i style="float: right;padding: 2px;font-size: 18px;" class="fa fa-arrows-alt" aria-hidden="true"></i>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </draggable></div>

                                            <button  class="custom_button_design" style="float: right;margin-top: 20px;font-size: 18px;" @click="update_doc_tags(1)">Update</button>

                                        </div>
                                    </div>


                                </div>
                                <div class="tab-pane " id="tabs-2" role="tabpanel">
                                    <div class="col-md-12">
                                        <label class="f-2">Add Member</label>

                                        <div class="row">
<!--                                            <div class="col-md-2">-->
<!--                                                &lt;!&ndash;                                            <i class="fa fa-eye f-2 text-secondary mt_0_5" aria-hidden="true" @click="preview_form"></i>&ndash;&gt;-->
<!--                                            </div>-->
                                            <div class="col-md-10 form-group ml-3" v-if="form_send_id==''"><label for="message">Select Form For New Members</label><br>
                                                <v-select v-model="forms_selected"
                                                          name="forms"
                                                          label="form_name"
                                                          :options="forms_data"
                                                          class="bg-white"


                                                />
                                            </div>

                                        </div>

                                        <div class="col-md-12" v-for="(member,index) in family_mem_arr">
                                            <div class="row">

                                                <div class="form-group col-md-3">
                                                    <label for="name">Name *</label>
                                                    <input
                                                        v-model="member['first_name']"
                                                        type="text"
                                                        placeholder="Name"
                                                        class="form-control"
                                                        name="first_name"

                                                    >

                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="name">Relation *</label>
                                                    <input
                                                        v-model="member['relation']"
                                                        type="text"
                                                        placeholder="Relation"
                                                        class="form-control"
                                                        name="last_name"

                                                    >

                                                </div>

                                                <div class="form-group col-md-2">
                                                    <label for="name">DOB *</label>

                                                    <date-picker
                                                        class="text-dark"
                                                        v-model="member['dob']"
                                                        :config="$root.dpconfigDate_disable_future_dates"
                                                        placeholder="DOB"
                                                        name="member_dob" >
                                                    </date-picker>

                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="exp" title="gender">Gender *</label> <br>
                                                    <v-select
                                                        :clearable="false"
                                                        name="addmem"
                                                        placeholder="Gender"
                                                        label="label"
                                                        :options="[{'label':'Male'},{'label':'Female'}]"
                                                        v-model="member['gender']"
                                                        class="bg-white"

                                                    />

                                                    <label >Mark Paid &nbsp;&nbsp;</label><input type="checkbox" v-model="member['paid']">
                                                </div>





<!--                                                <div class="form-group col-md-2">-->
<!--                                                    <label for="number">Mobile Number</label>-->
<!--                                                    <input-->
<!--                                                        v-model="member['phone']"-->
<!--                                                        type="text"-->
<!--                                                        placeholder="Number"-->
<!--                                                        class="form-control"-->
<!--                                                        name="member_number"-->

<!--                                                    >-->


<!--                                                </div>-->


<!--                                                <div class="form-group col-md-3">-->
<!--                                                    <label for="email">Email</label>-->
<!--                                                    <input-->
<!--                                                        v-model="member['email']"-->
<!--                                                        type="text"-->
<!--                                                        placeholder="Email"-->
<!--                                                        class="form-control"-->
<!--                                                        name="member_email"-->

<!--                                                    >-->

<!--                                                    <label >Mark Paid &nbsp;&nbsp;</label><input type="checkbox" v-model="member['paid']">-->
<!--                                                </div>-->


                                                <div class="form-group col-md-1">
                                                    <img  @click="deletefamily_mem(index,1) " src="./../dashboard_resources/trash.png" style="height: 30px;width: 30px;margin-top: 22px;cursor: pointer">
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="col-lg-12 text-center ">
                                                <button @click='family_mem_arr.push({"id":item.id+"-"+Math.floor(Math.random() * 1000),"first_name":"","last_name":"","phone":"","email":"","dob":"","gender":"","passport":[],"documents":[],"remark":"","approve" : 1,"fcm_token": "","relation":"","device": "","paid":false,"no_show":"false"})' class="mt-5 f-2 btn text-light spec-padding button_color">Add New Member</button>
                                                <button @click='save_member' class="mt-5 f-2 btn text-light spec-padding button_color">Save Members</button>

                                            </div>
                                        </div>

                                    </div><br><br>


                                    <div class="col-md-12" style="margin-top: 50px;" >
                                        <label class="f-2">Members</label>
                                        <table class="table" style="background-color: white;text-align: center">
                                            <thead>
                                            <tr class="f-1-5">
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Relation</th>
                                                <th scope="col">Delete</th>
                                                <th scope="col">Payment</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="( members,index) in meta.meta_family" class="f-1-3" v-if="members.approve==1">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{members.first_name}}</td>
                                                <td>{{members.relation}}</td>
                                                <td v-if="members.type!='parent'"><img @click="deletefamily_mem(index,2)" src="./../dashboard_resources/trash.png" style="height: 20px;width: 20px;cursor: pointer"></td>
                                                <td v-else=""><i class="fa fa-ban" aria-hidden="true" style="font-size: 15px;color:#ff0000;"></i></td>
                                                <td v-if='typeof members.paid !="undefined"'>
                                                    <i  v-if='members.paid'  class="fa fa-money " title="Paid" aria-hidden="true" style="font-size: 15px;color:#2ab835;"></i></td>
                                                <td v-else><i class="fa fa-money " title="Not Paid" aria-hidden="true" style="font-size: 15px;color:#747d7d;"></i></td>

                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div class="tab-pane " id="tabs-3" role="tabpanel">

                                    <div class="col-md-12">

                                        <div class="col-md-12" style="margin-top: 20px;">
                                            <label  class="custom_label" style="margin-bottom: 20px;">Select The People For Appointment</label><br>
                                            <div class="row" >


                                                <div class="col-md-4" >
                                                    <div  class="col-md-1" style="margin-top: 3px;">
                                                        <label class="container_input">
                                                            <input  type="checkbox" checked="checked" :id="item.full_name" >
                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                        </label></div>

                                                    <div  class="col-md-10" style="font-size: 21px;margin-top: -2px;color: black;">{{item.full_name}}</div>
                                                </div>

                                                <div class="col-md-4" v-for="(members,index) in meta.meta_family">
                                                    <div  class="col-md-1" style="margin-top: 3px;">
                                                        <label class="container_input">
                                                            <input  type="checkbox" checked="checked" :id="members.first_name" >
                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                        </label></div>

<!--                                                    <div class="col-md-1">-->
<!--                                                        <div class="checkbox">-->
<!--                                                            <label><input type="checkbox" checked="checked" :id="members.first_name"  class="checkbox2" >-->
<!--                                                                <span class="box"></span>-->
<!--                                                            </label>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
                                                    <div  class="col-md-2" style="font-size: 21px;margin-top: -2px;color: black;">{{members.first_name}}</div>
                                                </div>

                                            </div>

                                        </div>

                                        <div class="col-md-12" style="margin-top: 20px;">
                                           <label  class="custom_label" style="margin-bottom: 20px;">Select Appointment Type</label><br>
                                           <div class="row">

<!--                                           <div class="col-md-1">-->
<!--                                               <div class="checkbox">-->
<!--                                                   <label><input type="checkbox" id="interview"  class="checkbox2" >-->
<!--                                                       <span class="box"></span>-->
<!--                                                   </label>-->
<!--                                               </div>-->
<!--                                           </div>-->
<!--                                           <div  class="col-md-2" style="font-size: 21px;margin-left: -60px;margin-top: -2px;color: gray;">Interview</div>-->

                                               <div class="col-md-4" >
                                                   <div  class="col-md-1" style="margin-top: 3px;">
                                                       <label class="container_input">
                                                           <input  type="checkbox" id="interview" >
                                                           <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                       </label></div>
<!--                                                   <div class="col-md-1">-->
<!--                                                       <div class="checkbox">-->
<!--                                                           <label><input type="checkbox" id="interview" class="checkbox2" >-->
<!--                                                               <span class="box"></span>-->
<!--                                                           </label>-->
<!--                                                       </div>-->
<!--                                                   </div>-->
                                                   <div  class="col-md-3" style="font-size: 21px;margin-top: -2px;color: black;">Interview</div>
                                               </div>
                                               <div class="col-md-4">

                                                   <div  class="col-md-1" style="margin-right: 13px;margin-top: 3px;">
                                                       <label class="container_input">
                                                           <input  type="checkbox" id="bio_metric" >
                                                           <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                       </label></div>

<!--                                                   <div  class="col-md-1">-->
<!--                                                       <div  class="checkbox">-->
<!--                                                           <label >-->
<!--                                                               <input  type="checkbox" id="bio_metric" class="checkbox2"> <span  class="box"></span></label></div>-->
<!--                                                   </div>-->

                                                   <div  style="font-size: 21px; margin-top: -2px; color: black;" class="col-md-3-">Bio-Metric</div></div>



<!--                                               <div class="col-md-4" >-->
<!--                                                   <div class="col-md-1">-->
<!--                                                       <div class="checkbox">-->
<!--                                                           <label><input type="checkbox" id="bio_metric" class="checkbox2" >-->
<!--                                                               <span class="box"></span>-->
<!--                                                           </label>-->
<!--                                                       </div>-->
<!--                                                   </div>-->
<!--                                                   <div  class="col-md-3" style="font-size: 21px;margin-top: -2px;color: black;">Bio-Metric</div>-->
<!--                                               </div>-->



<!--                                           <div  class="col-md-2" style="font-size: 21px;margin-left: -60px;margin-top: -2px;color: gray;">Bio-Metric</div>-->
                                       </div></div><br><br>

                                        <div class="col-md-12" style="margin-top: 10px;" v-for="(visa,index) in visa_appointment">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label  class="custom_label">Date</label><br>
                                                    <date-picker

                                                        :config="$root.dpconfigDate_disable_dates"
                                                        name="interview_date"
                                                        class="summary-in-w"
                                                        style="padding-left: 20px"
                                                        v-model="visa['date']"

                                                    >
                                                    </date-picker>

                                                </div>

                                                <div class="col-md-2">
                                                    <label  class="custom_label">Time</label><br>
                                                    <date-picker
                                                        name="interview_time"
                                                        :config="$root.dpconfigTimeshort"
                                                        style="padding-left: 20px"
                                                        class="summary-in-w"
                                                        v-model="visa['time']"
                                                    >
                                                    </date-picker>
                                                </div>
                                                <div class="col-md-3">
                                                    <label  class="custom_label">City</label><br>
                                                    <input

                                                        type="text"
                                                        class="form-control"
                                                        name="city"
                                                        v-model="visa['city']"


                                                    >

                                                </div>

                                                <div class="col-md-3">
                                                    <label  class="custom_label">Location</label><br>
                                                    <input

                                                        type="text"
                                                        class="form-control"
                                                        name="Location"
                                                        v-model="visa['location']"


                                                    >
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12" style="margin-top: 20px;" v-for="(visa,index) in visa_appointment">
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <label  class="custom_label">Local Contact Name</label><br>
                                                    <input

                                                        type="text"
                                                        class="form-control"
                                                        name="contact_name"
                                                        v-model="visa['local_contact_name']"
                                                        style="width:104%"



                                                    >

                                                </div>

                                                <div class="col-md-3">
                                                    <label  class="custom_label">Contact Number</label><br>
                                                    <input

                                                        type="text"
                                                        class="form-control"
                                                        name="contact_number"
                                                        v-model="visa['local_contact_number']"


                                                    >
                                                </div>

                                                <div class="col-md-4">
                                                    <label  class="custom_label">Upload Appointment Letter</label><br>
                                                           <div class="row" style="margin-top: 5px">
                                                                   <div class="col-7 text-center f-1-2" v-if="visa['appointment_letter']!=''">

                                                                               <a class="download_button mt-n2 offset-2" target= "_blank" v-bind:href="visa['appointment_letter'] ">Download</a>

                                                                                   </div>
                                                                    <div class="col-2 f-1-2" v-if="visa['appointment_letter']!=''">
                                                                        <img  @click="visa['appointment_letter']=''" src="./../dashboard_resources/trash.png" class="hw-2">

                                                                    </div>
                                                                    <div class="col-12 text-center f-1-2" v-else>

                                                                                         <label class="file_hidden offset-2 mt-n2" style="width: 50% !important;">
                                                                                           Choose File
                                                                                            <input type="file" id="appointment_letter"  accept="image/png, image/jpeg,image/jpg,application/pdf" size="20" @change="updatemeta_appintment_letter($event,'appointment_letter',index)" >
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


                                        <div class="col-lg-12 text-center ">

                                            <button @click="save_visa_appointment(2)" class="mt-5 f-2 btn text-light spec-padding button_color">Add Appointment</button>
                                            <button @click="save_visa_appointment(1)" class="mt-5 f-2 btn text-light spec-padding button_color" :class="[visa_process.length==0 ? 'disabled' : '' ]">Send Intimation</button>

                                        </div>
                                        <div class="col-md-12" style="margin-top: 50px;" v-if="visa_history.length>0">
                                            <label class="f-2">Appointment History</label>
                                            <table class="table" style="background-color: white;text-align: center">
                                                <thead>
                                                <tr class="f-1-5">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Appointment Type</th>
                                                    <th scope="col">Date & Time</th>
                                                    <th scope="col">Remark</th>
                                                    <th scope="col">Acknowledgement</th>
                                                    <th scope="col">Delete</th>

                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="(visa,index) in visa_history" class="f-1-3">
                                                    <th scope="row">{{index+1}}</th>
                                                    <td>{{visa.name}}</td>
                                                    <td>{{visa.type}}</td>
                                                    <td>{{visa.details.date}} / {{visa.details.time}}</td>
                                                    <td>{{visa.remark}}</td>
                                                    <td v-if="visa.status==0"><i class="fa fa-clock-o" style="font-size:15px;color:red;" aria-hidden="true"></i></td>
                                                    <td v-else-if="visa.status==1"><i class="fa fa-check" style="font-size:15px;color:green;" aria-hidden="true"></i></td>
                                                     <td v-if="visa.status!==1 && visa.status!==0"><img @click="delete_appointment(index,visa.name,visa.type)" src="./../dashboard_resources/trash.png" style="height: 20px;width: 20px;cursor: pointer"></td>
                                                    <td v-else></td>


                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>


                                    </div>



                                </div>



                            </div>
                            <div v-if="!license.cost_sheet" class="col-1 offset-10"><button v-if="submit" class="button-css" @click="submitForm" style="margin-left: -155px">Submit</button></div>
                            <button v-else class="button-css" @click="changeview('cost')" color="rgb(23, 80, 125)" style="margin-left: -155px">Cost</button>
                            <button v-if="submit && item.activated!=='1' && license.post_booking_app && !license.cost_sheet" class="button-css" @click="submitForm3" >Submit & Activate</button>

                        </div>











                    </div>

                    <!--                    upload-->
                    <div  v-if="up" :class="[up ? 'activedev' : 'hidedev' ]" class="query-content" style="">
                        <form-wizard @on-complete="changeview('train')"  color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="Train/Flight">


                            <tab-content title="Passport" icon="fa fa-check">
                                <fieldset>

                                    <Documents :bookId="item.id" :booking_id="item.booking_id"  docType="passport" :loading="loading2" @showModal2="showModal2=true" :newInsatance="newInsatance"  :grpId="item.member_of_iti" />

                                </fieldset>
                            </tab-content>
                            <tab-content title="Photo ID" icon="fa fa-check">
                                <fieldset>

                                    <Documents :booking_id="item.booking_id" :bookId="item.id" docType="photoid" :loading="loading2" @showModal2="showModal2=true" :newInsatance="newInsatance"  :grpId="item.member_of_iti" />

                                </fieldset>
                            </tab-content>
                            <tab-content title="E_visa" icon="fa fa-check">
                                <fieldset>

                                    <Documents :booking_id="item.booking_id" :bookId="item.id" docType="visa" :loading="loading2" @showModal2="showModal2=true" :newInsatance="newInsatance"  :grpId="item.member_of_iti" />


                                </fieldset>
                            </tab-content>
                             <tab-content title="Vouchers" icon="fa fa-check">
                                <fieldset>
                                    <Documents :booking_id="item.booking_id" :bookId="item.id" docType="voucher" :loading="loading2" @showModal2="showModal2=true" :newInsatance="newInsatance"  :grpId="item.member_of_iti" />

                                </fieldset>
                            </tab-content>
                             <tab-content title="Insurance" icon="fa fa-check">
                                <fieldset>
                                    <Documents :booking_id="item.booking_id"  :bookId="item.id" docType="insurance" :loading="loading2" @showModal2="showModal2=true" :newInsatance="newInsatance"  :grpId="item.member_of_iti" />
                                </fieldset>
                            </tab-content>
                            <tab-content title="Others" icon="fa fa-check">
                                <fieldset>

                                    <Documents :booking_id="item.booking_id" :bookId="item.id" docType="other" :loading="loading2" @showModal2="showModal2=true" :newInsatance="newInsatance"  :grpId="item.member_of_iti" />
                                </fieldset>
                            </tab-content>

                        </form-wizard>
                    </div>

                    <!--                    cost-->
                    <div :style="role=='visa'? 'pointer-events: none;':''"  v-if="cost && license.cost_sheet" :class="[cost ? 'activedev' : 'hidedev' ]" class="query-content f-2">

                        <div class="container" v-if="item.member_of_iti=='' || item.member_of_iti==null">

                            <div class="row">
                                <div class="row">
                                    <div class=" text-success cursor cost_update_buttons1" @click="cost=false,refresh_cost=true" >
                                        <i  class="fa fa-refresh f-1-5" aria-hidden="true"></i><span style="font-size: 13px;line-height: 33px;">&nbsp; Update Hotels</span>
                                    </div>

                                    <div class=" ml-3 text-primary cursor cost_update_buttons2" @click="cost=false,refresh_cost=true" >
                                        <i  class="fa fa-calculator f-1-5" aria-hidden="true"></i><span style="font-size: 13px;line-height: 33px;">&nbsp; Recalculate</span>
                                    </div>

                                    <div class=" ml-3 text-danger cursor cost_update_buttons2" v-if="platform!='sotc'"  @click="get_payment_tracker()">
                                        <i  class="fa fa-usd f-1-5" aria-hidden="true"></i><span style="font-size: 13px;line-height: 33px;">&nbsp; Payment History</span>
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
                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                    <input type="text" :disabled="mf_created && platform=='sotc'"  v-model="hotelarr.rate" class="form-control mt-n3">
                                </div>
                                <div class="col-1">
                                    <p v-if="index==0" class="text-muted">Qty.</p>
                                    <p v-else><br></p>
                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                    <input type="text" :disabled="mf_created && platform=='sotc'" v-model="hotelarr.qty" class="form-control mt-n3">
                                </div>
                                <div class="col-1">
                                    <p v-if="index==0" class="text-muted">Unit</p>
                                    <p v-else><br></p>
                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                    <input type="text" :disabled="mf_created && platform=='sotc'" v-model="hotelarr.unit" class="form-control mt-n3">
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
                                                                <span class="f-2" aria-hidden="true" @click="showModalcost=false">&times;</span>
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
                                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                                    <input :disabled="mf_created && platform=='sotc'" type="checkbox"  v-model="meta.markup1.percent">
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

                            <div class="row ">

                                <div v-if="meta.markup1.percent" class="col-2 offset-7">
                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                    <input :disabled="mf_created && platform=='sotc'"  @keypress="isNumberpercent($event)" v-model="meta.markup1.value" type="number" class="form-control"><span class="p-a per">%</span>
                                </div>
                                <!-- :disabled="mf_created" only for tc/sotc                                -->
                                <div class="col-2 offset-7" :disabled="mf_created && platform=='sotc'" v-else><input  @keypress="isNumber($event)" v-model="meta.markup1.value" type="number" class="form-control"></div>




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
                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                    <input :disabled="mf_created && platform=='sotc'" type="text"  v-model="hotelarr2.title" class="form-control mt-n3">
                                </div>
                                <div class="col-2">
                                    <p v-if="index==0"  class="text-muted">Rate</p>
                                    <p v-else><br></p>
                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                    <input :disabled="mf_created && platform=='sotc'" type="text" v-model="hotelarr2.rate" class="form-control mt-n3">
                                </div>
                                <div class="col-1">
                                    <p v-if="index==0" class="text-muted">Qty.</p>
                                    <p v-else><br></p>
                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                    <input :disabled="mf_created && platform=='sotc'" type="text" v-model="hotelarr2.qty" class="form-control mt-n3">
                                </div>
                                <div class="col-1">
                                    <p v-if="index==0" class="text-muted">Unit</p>
                                    <p v-else><br></p>
                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                    <input type="text" :disabled="mf_created && platform=='sotc'" v-model="hotelarr2.unit" class="form-control mt-n3">
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
                                                    <!-- :disabled="mf_created" only for tc/sotc             -->
                                                    <input :disabled="mf_created && platform=='sotc'" type="checkbox" v-model="meta.markup2.percent">
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
                                    <!-- :disabled="mf_created" only for tc/sotc                                -->
                                    <input :disabled="mf_created && platform=='sotc'" @keypress="isNumberpercent($event)" v-model="meta.markup2.value" type="number" class="form-control"><span class="p-a per">%</span>
                                </div>
                                <!-- :disabled="mf_created" only for tc/sotc                                -->
                                <div :disabled="mf_created && platform=='sotc'" class="col-2 offset-7" v-else><input  @keypress="isNumber($event)" v-model="meta.markup2.value" type="number" class="form-control"></div>




                                <!--                            <div class="col-2" style="margin-left: -2%;"><input max="100" type="number" class="form-control"></div>-->
                                <div class="col-2 offset-2">
                                    <input :value="total_sp2" disabled type="text" class="form-control">

                                </div>
                                <!--                            {{total_lev1}}-->

                            </div>

                        </div>
                        <div class="container" v-else>
                            <div class="row " v-if="meta.payments.length==0">
                                <h1 class="text-danger" style="position: fixed;right: 35%;">No Costing Recorded Yet!</h1>
                            </div>
                            <div class="row" v-else>

                                <div class="col-md-12" v-if="kyc_payment.msg!='false'">
                                    <table class="body-wrap_cost">
                                        <tbody><tr>
                                            <td></td>
                                            <td class="container" width="600">
                                                <div class="content">
                                                    <table class="main" width="100%" cellpadding="0" cellspacing="0" style="float: right;">
                                                        <tbody><tr>
                                                            <td class="content-wrap aligncenter">
                                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td class="content-block">
                                                                            <table class="invoice">
                                                                                <tbody><tr>
                                                                                    <td>{{item.full_name}}</td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <table class="invoice-items" cellpadding="0" cellspacing="0"  v-if="kyc_payment_status">
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td>Total Cost Without </td>
                                                                                                <td class="alignright">{{meta.payments[0].cost}}</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td v-if="kyc_payment.msg=='KYC form not sent to customer!' && meta.kyc_sent=='false'" >
                                                                                                    <button type="button" class="btn btn-success f-2"  @click="show_modal_kyc=true" >Share KYC</button>
                                                                                                </td>
                                                                                                <td v-else-if="kyc_payment.msg=='KYC form not sent to customer!' && meta.kyc_sent!='false'">KYC form sent to customer!</td>
                                                                                                <td v-else>{{kyc_payment.msg}}</td>
                                                                                                <td class="alignright"></td>
                                                                                            </tr>


                                                                                            <tr>

                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <table class="invoice-items" cellpadding="0" cellspacing="0"  v-if="kyc_payment.values!=undefined">
                                                                                            <tbody>
                                                                                            <tr v-for="(payment,index) in kyc_payment.values">
                                                                                                <td>{{payment.type}} {{payment.value}}%</td>
                                                                                                <td class="alignright">{{get_percent_value(index)}}</td>

                                                                                            </tr>
                                                                                            <tr class="total" v-if="kyc_payment_status">
                                                                                                <td class="alignright" width="80%">Total</td>
                                                                                                <td class="alignright">{{get_total_value()}}</td>
                                                                                            </tr>
                                                                                            <tr class="">
                                                                                                <!-- :disabled="mf_created" only for tc/sotc                                -->
                                                                                                <td class="alignright" v-if="!mf_created"></td>
                                                                                                <td class="alignleft" v-else>
                                                                                                    Booking File No. {{mf_key}}
                                                                                                </td>

                                                                                            </tr>

                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody></table>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>


                        </div>







                        <div class="row" v-if="license.cost_sheet">
                            <div class="col-1 offset-10"><button v-if="submit" class="button-css" @click="submitForm" style="margin-left: -11%;">Submit</button></div>
                            <div class="col-1"><button v-if="submit && item.activated!=='1' && license.post_booking_app" class="button-css" @click="submitForm3" >Submit & Activate</button></div>
                        </div>
                    </div>

                    <!--                    Question Feedback-->
                    <div  v-if="feedback" :class="[feedback ? 'activedev' : 'hidedev' ]" class="query-content f-2">

                        <div class="container">
<!--                            <div class="row" v-for="(data,index) in feedback_response">-->
<!--                                <div class="col-md-6">{{data.question}}</div>-->
<!--                                <div class="col-md-6">{{data.response}}</div>-->

<!--                            </div>-->
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Question</th>
                                    <th scope="col">Response</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(data,index) in feedback_response">
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{data.question}}</td>
                                    <td>{{data.response}}</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>


                    </div>


                    <!--                    Interaction History-->
                    <div v-show="intraction" class="query-content f-2"  :class="[ intraction ? 'activedev' : 'hidedev' ]">
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
                                                        <div class="col-lg-10">
                                                            <p>{{int['time'] | timeonly }}</p>
                                                            <p v-if="int['remark'].search('decreased')==-1">{{int['remark']}} by {{int['agent']}}</p>
                                                            <p v-else>{{int['remark']}}</p>
                                                        </div>
                                                        <div class="col-lg-2 text-right mt-4 text-success">
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
                <div v-if="offline_paytment_captured_trans_num==true">
                    <transition name="modal">
                        <div class="modal-mask">
                            <div class="modal-wrapper">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        <div class="modal-header">
                                            <div class="col-md-6">
                                                <h2>Transaction Number</h2>
                                            </div>
                                            <div class="col-md-6">
                                                <button type="button" class="close" @click="offline_paytment_captured_trans_num=false">
                                                    <span aria-hidden="true" class="f-2-5">&times;</span>
                                                </button>

                                            </div>

                                        </div>
                                        <div class="modal-body">


                                            <input type="text" class="form-control pl-5"
                                                   name="remark"
                                                   placeholder="Enter Transaction Number"
                                                   v-model="offline_paytment_captured_trans_id">

                                        </div>
                                        <div class="modal-footer f-1-2">

                                            <button type="button" class="btn btn-success" @click="manual_payment()">Update Payment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>


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
                                    <button type="button" class="close" @click="errormodal=false,error_heading=true">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="modal-body">
                                    <h2 v-if="error_heading">Kindly fill following Fields with the valid data</h2>
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
    import { mapGetters, mapActions } from 'vuex'
    import VoerroTagsInput from '@voerro/vue-tagsinput'
    import LocationPlaceEditComponent from '../../cruds/Locationsplaceedit'
    import LocationPlaceComponent from '../../cruds/Locationsplace'
    import LocationComponent from '../../cruds/Locations'
    import HotelComponent from '../../cruds/hotelcompbooking'
    import DayplanComponent from '../../cruds/dayplancompbookingedit'
    import draggable from 'vuedraggable'
    import {FormWizard, TabContent,WizardButton,WizardStep} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    import { VueTelInput } from 'vue-tel-input'
    import uploadfile from '../../../mixins/uploadfile'
    import built_interaction from '../../../mixins/builtinteraction'
    import todaytimestamp from "../../../mixins/todaytimestamp";
    import Documents from "./Documents";

    import moment from 'moment-timezone'
    <!-- import {meta} from "vue-sweetalert2/nuxt"; -->
    import MailTags from "../../dtmodules/MailTags";

    export default {

        data() {
            return {
                showModal2:false,
                show_modal_kyc:false,

                feedback_model:false,
                selectall:false,
                actualdata:[],
                feedback_ques:[],
                feedback_response:[],
                localsearch:'',
                remark_p:'',
                errors:[],
                error_heading:true,
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
                fr:false,
                doc_rec:false,
                family_mem:false,
                visa:false,
                remarkk: false,
                feedback:false,
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
                show_modal3:false,
                show_modal4:false,
                show_modal5:false,
                show_modal6:false,
                forms_data:'',
                forms_data_modal:[],
                forms_selected:[],
                form_button:true,
                loading2:false,
                send_form_button:true,
                family_mem_arr:[{"first_name":"","last_name":"","phone":"","email":"","dob":"","gender":"","passport":[],"documents":[],"remark":"","approve" : 1,"fcm_token": "","relation":"","device": "","paid":false,"no_show":"false","form_status":"false","visa_status":""}],
                assign_passport:'',
                update_mem_doc:'',
                show_passport:[],
                member_document:[],
                visa_history:[],
                visa_process:[],
                visa_appointment:[{"date":"","time":"","city":"","location":"","local_contact_name":"","local_contact_number":"","appointment_letter":"","remark":""}],
                doc_req_list:[],
                add_doc_tag:'',
                existing_passport:[],
                form_send_response:'',
                family_counter:0,
                form_send_status:true,
                form_send_id:'',
                role:'',
                flight_data:'',
                flight_data_modal:false,
                err_passport:[],
                tour_type:'',
                kyc_payment:{"status":"","msg":""},
                kyc_payment_status:false,
                total_costing:0,
                pay_button_status:false,
                // mf_created only for tc/sotc
                mf_created:false,
                paxdetails_data:[],
                error_logs:[],
                error_status:false,
                mf_key:'',
                payment_status:true,
                member_cost:'true',
                offline_payment_captured:false,
                offline_paytment_captured_trans_num:false,
                offline_paytment_captured_trans_id:'',
                platform:'',
                newInsatance: new Vue(),
                membersFlightData:[],
                selectedFlight:{'type':'Flight'},
                flightsData:[{"date": "", "dep_code": "", "arr_date": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight"}],



                // Code...
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
            dateonly2: function (value) {
                if (value) {
                    return moment.unix(value).format("DD-MM-YYYY")
                }
            },
            timeonly: function (value) {
                if (value) {
                    return moment.unix(value).format("h:mm a")
                }
            },
        },
        computed: {
            ...mapGetters('BookingsSingle', ['item', 'loading', 'tourAll', 'places', 'cityid', 'hotels', 'cityAll', 'meta', 'tourdata','cancelled_status']),
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

            // this.$root.booking_ref_id={'bookinf_id':this.item.booking_id,'id':this.item.id}
            // this.currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '');
            // // this.item.meals_supplement="test";
            // this.item.booking_id = 'ITI-' + document.querySelector("meta[name='user-id']").getAttribute('content') + '-' + this.currentDate + '-' + Math.floor((Math.random() * (999 - 100 + 1) + 100))
            // this.item.status = 1;
            // this.meta.remarks.time=
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
            this.platform= document.querySelector("meta[name='platform']").getAttribute('content');


        },
        created() {
            // this.$root.booking_ref_id={'booking_id':this.item.booking_id,'id':this.item.id}
            this.role=document.querySelector("meta[name='user-role']").getAttribute('content')
            // this.fetchCityAll();
            // this.fetchTourAll()
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
            var kyc  =JSON.parse(document.querySelector("meta[name='agency-kyc']").getAttribute('content'));
            var kyc_arr=[];
            for(var i=0 ; i<kyc.length ; i++){
                kyc_arr[i]=kyc[i];
                kyc_arr[i]['status']=true;
            }
            this.agency_kyc=kyc_arr;
            // adding id to family member
            this.family_mem_arr[0].id=this.$route.params.id+"-"+Math.floor(Math.random() * 1000)


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
        destroyed() {
            this.resetState()
        },
        watch: {
            "errormodal": function() {
                if(!this.errormodal){
                    this.errors=[];
                }

            },
            "meta.interaction":function () {

            },
            "item.booking_id": function() {
                this.$root.booking_ref_id={'booking_id':this.item.booking_id,'id':this.item.id}

                let form = new FormData();
                var agency_id=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'))
                form.set('agency_id', agency_id.id);
                axios.post('/api/webservices/document_tags', form)
                    .then(response => {
                        // this.meta.meta_doc_tags = response.data
                        // console.log(this.meta.meta_doc_tags);
                        response.data.forEach((dataObj) => {

                            this.doc_req_list.push(dataObj.value)
                        });


                    });

                if(this.item.get_meta!=''){
                    for (var t=0;t<this.item.get_meta.length;t++){
                        if(this.item.get_meta[t]['meta_key']=='meta_visa_history'){
                            this.visa_history=JSON.parse(this.item.get_meta[t]['meta_value']);
                            console.log(JSON.parse(this.item.get_meta[t]['meta_value']));
                        }
                        if(this.item.get_meta[t]['meta_key']=='mf_key'){
                            this.mf_key=this.item.get_meta[t]['meta_value'];
                        }
                        if(this.item.get_meta[t]['meta_key']=='paymentupdate_history'){
                            this.payment_status=false;
                        }

                    }
                }

            // this.update_doc_tags(2);

                // update_form_data
                axios.get('/api/webservices/fetch_booking_form?booking_id='+this.item.booking_id)
                    .then(res=>{
                        if(res.data.status=='success'){
                            this.form_send_status=false;
                            this.form_send_id=res.data.form_id;
                        }


                        // form_id: "120"id: 56status: "success"
                        // form_send_status

                    })

                if (this.meta.meta_flight.length < 1) {

                    this.meta.meta_flight = [{"date": "", "dep_code": "","arr_date": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight"}]
                }

                // axios call for fetching tour type ob/dom

                    axios.get('/api/v1/get_tour_type?id=' + this.item.id)
                        .then(response => {
                            this.kyc_payment=response.data;

                            if(response.data.status=='success'){
                                this.kyc_payment_status=true;

                            }
                            else{
                                this.kyc_payment_status=true;
                                // alert(response.data.msg);
                            }



                        })
                        .catch(error => {
                            alert(error);
                        })
                    // for tc/soctc
                    if(this.platform=='sotc'){
                        axios.get('/api/v1/mf_status?id=' + this.item.id)
                            .then(response => {
                                this.mf_created=response.data.status;
                                // console.log(response.data.status)

                            })
                            .catch(error => {
                                alert(error);
                            })
                    }




            },
            "$route.params.id": function() {
                this.resetState()
                this.fetchData(this.$route.params.id)
            },
            "locations": function () {
                this.inmodalnew();

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
            "meta.payments":function(){

                if(this.meta.payments!=undefined || typeof this.meta.payments !== "undefined"){

                        if(this.meta.payments.length>0){
                            if(!this.meta.payments[0].status){
                                this.offline_payment_captured=true;
                            }
                        }

                }

            },
            "selectedFlight":function(){
                let data=this.flightsData;
                if(this.selectedFlight.type=='Train'){
                    data=JSON.stringify(this.flightsData).replace("Flight","Train")
                }
                if(this.selectedFlight.type=='Flight'){
                    data=JSON.stringify(this.flightsData).replace("Train","Flight")
                }
                console.log(data);
                this.flightsData=JSON.parse(data);

            },
            "meta.feedback_ques": function () {

                if(this.meta.feedback_ques.length>0){
                    let ques_data=[];
                    axios.get('/api/webservices/feedback_questions?type=book&source=0&id='+this.$route.params.id)
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



                    axios.get('/api/webservices/feedback_questions?type=book&source=1&id='+this.$route.params.id)
                        .then(response => {

                            this.feedback_ques=_.cloneDeep(response.data);
                        })
                        .catch(error => {
                            alert(error);
                        })



                }




            },

        },
        methods: {
            ...mapActions('BookingsSingle', ['setmeta_interactionsfull','fetchData', 'updateData','storeData', 'uploadFile', 'resetState', 'setBooking_id', 'setplaces', 'setFull_name', 'setEmail', 'setEmail2', 'setPhone', 'setActivated', 'setScore', 'setNo_of_adults', 'setNo_of_children', 'setAgency_id', 'setAgent_id', 'setMeal_day', 'setBill_pay', 'setBudget','setdriver_pickup_date_time', 'setdriver_pick_up_time', 'setDriver_pick_up_time_updated', 'setDrop_address', 'setHandler_name', 'setHandler_no', 'setMeals_supplement', 'setMember_of_iti', 'setPackage_category', 'setPickup_address', 'setTotal_price', 'setPickup_location', 'setTour_cost', 'setSelected_car', 'setStatus', 'setSupplier_id', 'setTotal_room', 'setTraveller_id', 'setItinerary_places', 'setItinerary_places_time', 'setTour_id', 'setTour_name', 'setTour_location', 'fetchTourAll', 'fetchplace', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setTotal_tour_days', 'fetchTourAll', 'fetchplace', 'fetchhotel', 'fetchCityAll', 'updateCity', 'setTitle', 'setLocations', 'setmeta_infant', 'setmeta_transport'
                , 'setmeta_source'
                , 'setmeta_flightprice'
                , 'setmeta_flight'
                , 'setmeta_welcome_mail'
                , 'setmeta_registration_mail'
                , 'setmeta_itinerary_mail'
                , 'setmeta_incl_ex'
                , 'setmeta_closuer'
                , 'setTraveler_name',
                'setmeta_pickup_date',
                'setmeta_pickup_time',
                'setmeta_driver_name',
                'setAirport_Hub',
                'setVisa_Hub',
                'setmeta_driver_no',
                'setmoneycollect',
                'setmeta_transport_no',
                'setmeta_interactions',
                'setpayments',
                'setmeta_exp_cost', 'setmeta_exp_costflight', 'setRemarkedit', 'addnewtour', 'setRemarks', 'setRemark', 'setEmail_second', 'setNote', 'setMessageidd', 'setQuery_feel', 'setScore_new', 'setTour_cost_tax']),
            // for sotc branch only start
            manual_payment(){

                    this.loading2=true;
                    let form=new FormData();
                    form.set("id", this.item.id)
                    form.set("trn", this.offline_paytment_captured_trans_id)
                    axios.post('/api/v1/changePaymentStatus' , form)
                        .then(response => {
                            this.loading2=false;
                            this.payment_status=false;
                            this.$eventHub.$emit('update-success')
                            this.offline_paytment_captured_trans_id='';
                            this.offline_paytment_captured_trans_num=false;
                            this.offline_payment_captured=false;




                        })
                        .catch(error => {
                            this.loading2=false;
                            // console.log(error);
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
            add_error_logs(log){
               this.error_logs=log;
               this.error_status=!this.error_status;
            },
            fetch_pax_data(){
                this.loading2=true;

                axios.get('/api/v1/fetch_pax?id=' + this.item.id)
                    .then(response => {

                        this.loading2=false;
                        if(response.data.status){
                                this.paxdetails_data=response.data.mem;
                            this.show_modal6=true;
                            }
                            else{
                             this.errors=[];
                                this.errors.push('No Members Data Available!');
                                if(!_.isEmpty(this.errors)){
                                    this.errormodal=true
                                }
                            }
                        // console.log(response.data);


                    })
                    .catch(error => {
                        this.loading2=false;
                        alert(error);
                    })
            },
            share_pax(){


                let final_data=[];

                this.paxdetails_data.forEach((data)=>{
                    let data_arr=[];
                    if(data.flag){
                        final_data.push({"name":data.name,'id':data.id,'paxid':data.paxid});
                    }

                     // final_data.push({"name":data.name,'id':data.id,'paxid':data.paxid});
                })

                if(final_data.length>0){

                    this.loading2=true;
                    let form=new FormData();
                    form.set("id", this.item.member_of_iti)
                    form.set("flag", true)
                    form.set("members_data", JSON.stringify(final_data))
                    axios.post('/api/v1/savepaxdetails' , form)
                        .then(response => {
                            this.loading2=false;
                            this.$eventHub.$emit('update-success')
                            this.show_modal6=false;



                        })
                        .catch(error => {
                            this.loading2=false;
                            alert(error);

                        })
                }
                else{
                    alert('Please Select PAX.');
                    return false;
                }





            },
            get_percent_value(index){
                console.log(index);
                let arr=this.kyc_payment.values;
                let val=0;
                console.log(arr);
                if(index>0){
                    val=arr[index-1].amount;
                    arr[index].amount=parseInt(val)+parseInt((val*arr[index].value)/100);
                    if(val*arr[index].value/100 % 1 !=0){
                        arr[index].amount=parseInt(arr[index].amount)+1;
                    }
                    this.kyc_payment.values=_.cloneDeep(arr);
                    return (val*arr[index].value)/100;
                }
                else if(index==0){


                    if(this.meta.payments.length>0){
                        val+=this.meta.payments[0].cost;

                    }

                    arr[index].amount=parseInt(val)+parseInt((val*arr[index].value)/100);
                    if(val*arr[index].value/100 % 1 !=0){
                        arr[index].amount=parseInt(arr[index].amount)+1;
                    }
                    this.kyc_payment.values=_.cloneDeep(arr);
                    return (val*arr[index].value)/100;
                }
                else{
                    return '0';
                }






            },
            get_total_value(value){
                let arr=this.kyc_payment.values;

                let val=0;
                let percentage=0;
                let percentage_val=0;

                if(this.meta.payments.length>0){
                    val+=this.meta.payments[0].cost;

                }
                let flag=0;
                arr.forEach((data)=>{
                    if(flag==0){
                        percentage_val=parseInt(percentage_val)+(val*data.value)/100;
                        if(percentage_val % 1!=0){
                            percentage_val=parseInt(percentage_val)+1;
                        }

                    }
                    else{
                        percentage_val=parseInt(percentage_val)+(arr[flag-1].amount*data.value)/100;
                        if(percentage_val % 1!=0){
                            percentage_val=parseInt(percentage_val)+1;
                        }

                    }

                    flag++;
                })

                if(parseInt(val)+parseInt(percentage_val)!=0){
                    // alert('hello');
                    this.pay_button_status=true;
                }
                // console.log(this.kyc_payment.values);
                // console.log(arr);
                return parseInt(val)+parseInt(percentage_val);



            },
            // for sotc branch only end


            uploaddoc(event){
                try{



                    // doc validate
                    let field_error=false;
                    let count=0;
                    this.flightsData.forEach((data)=>{


                        if(data.date!=''){

                            document.getElementById('dept_date'+count).style.border='1px solid #ced4da';
                        }
                        else{
                            document.getElementById('dept_date'+count).style.border='1px solid red';
                            field_error=true;
                        }


                        if(data.arr_date!=''){

                            document.getElementById('arr_date'+count).style.border='1px solid #ced4da';
                        }
                        else{
                            document.getElementById('arr_date'+count).style.border='1px solid red';
                            field_error=true;
                        }


                        if(data.dep_code!=''){

                            document.getElementById('dept_code'+count).style.border='1px solid #ced4da';
                        }
                        else{
                            document.getElementById('dept_code'+count).style.border='1px solid red';
                            field_error=true;
                        }


                        if(data.arr_code!=''){

                            document.getElementById('arr_code'+count).style.border='1px solid #ced4da';
                        }
                        else{
                            document.getElementById('arr_code'+count).style.border='1px solid red';
                            field_error=true;
                        }


                        if(data.ticket!=''){

                            document.getElementById('ticket'+count).style.border='1px solid #ced4da';
                        }
                        else{
                            document.getElementById('ticket'+count).style.border='1px solid red';
                            field_error=true;
                        }
                        count++;
                    })

                    if(field_error){
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please Fill All Required Fields !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                        return false;
                    }

                    const myFile = document.getElementById('flight-ticket-upload-button').files[0];

                    const fileSize = myFile.size / 1024 / 1024;
                    if (fileSize > 2) {
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'File size exceeds 2 MB',
                            showConfirmButton: true,
                            timer: 3000

                        })

                    }
                    else{
                        if(myFile.type!='application/pdf' && myFile.type!='image/jpg' && myFile.type!='image/jpeg' && myFile.type!='image/png'){
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Please Upload Correct File Type (PNG,JPG,PDF)',
                                showConfirmButton: true,
                                timer: 3000

                            })
                            return false;
                        }


                        uploadfile('upload', 'flight',event.target.files[0], this.item.id)
                            .then(response => {
                                this.loading2=true;

                                let counter=0;
                                this.flightsData.forEach((flight)=>{
                                    flight.url=_.cloneDeep(response.data);
                                    this.flightsData[counter].url=_.cloneDeep(response.data);

                                    this.counter++;
                                })
                                let update_mem=[];
                                this.membersFlightData.forEach((member)=>{
                                    if(document.getElementById(member.id).checked){
                                        member.doc=_.cloneDeep(this.flightsData);
                                        update_mem.push(member);
                                    }
                                })

                                if(update_mem.length>0){

                                    axios.post('/api/v1/updateDocsData',{
                                        'data':JSON.stringify(update_mem),
                                        'bookId':this.item.id,
                                        'doc':'ticket',
                                        'grpId':this.item.member_of_iti,
                                        'deletedDocs':'[]'

                                    }).then(response => {
                                        this.loading2=false;
                                        if(response.data.status){
                                            axios.post('/api/v1/getDocsData/'+this.item.id+'/ticket')
                                                .then(response2 => {
                                                    if(response2.data.status){
                                                        this.membersFlightData =_.cloneDeep(response2.data.data)
                                                        this.flightsData=_.cloneDeep([{"date": "", "dep_code": "", "arr_date": "", "arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":this.selectedFlight.type}])
                                                        for(let i=0; i<this.$refs.typeahead.length;i++){
                                                            this.$refs.typeahead[i]._data.inputValue='';

                                                        }
                                                        this.$eventHub.$emit('create-success')
                                                    }
                                                })
                                        }
                                    })
                                        .catch(error => {
                                            // console.log(error);
                                            this.loading2=false;
                                        })

                                }
                                else{
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Please Select Members !',
                                        showConfirmButton: true,
                                        timer: 3000

                                    })
                                    this.loading2=false;
                                }






                            })
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

                save_feedback_questions(){

                    var return_arr=[];
                    var checked=''
                    this.feedback_ques.forEach((data)=>{
                        if(data.checked){

                            return_arr.push(data);

                            }
                    })
                    if(return_arr.length>0){

                        this.loading2=true;
                        axios.post('/api/v1/ShareNotification',  {
                            bookId: this.item.id,
                            travellerId: this.item.traveller_id,
                            ques:JSON.stringify(return_arr),
                        })
                            .then(res=>{
                                this.feedback_model=false;
                                this.meta.feedback_ques=return_arr;
                                this.loading2=false;
                                this.save_n_update('save_update');
                            })
                            .catch(error => {

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
                }
                else {
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Select Feedback Questions !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                })
                }
            },


          update_primary(){
              var return_arr=[];
              var checked ='';
if(this.remark_p!=''){
    const today = new Date();
    this.meta.member_doc_tags.remark.push({'remark':this.remark_p, 'time':today})
    this.remark_p='';
}
              var counter1=this.meta.member_doc_tags.documents.length;
              var counter2=0;
              for(var r=0;r<this.meta.member_doc_tags.documents.length;r++){

                  checked = document.getElementById(this.meta.member_doc_tags.documents[r]['doc_name']).checked;
                  if(checked==true){
                      this.meta.member_doc_tags.documents[r]['value']=1;
                      counter2++;
                  }
                  else if(checked==false){
                      this.meta.member_doc_tags.documents[r]['value']=0;

                  }
                  return_arr.push(this.meta.member_doc_tags.documents[r]);
                  checked ='';
              }
              if(counter1==counter2){
                  this.meta.member_doc_tags.color='green';
              }else{
                  this.meta.member_doc_tags.color='red';
              }

              this.show_modal_p=false;
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

            whatsapp(){
                var agency_id=JSON.parse(this.item.agency_id)

                if(this.item.bill_pay){



                    this.submitForm2();
                    let params = new FormData();

                    axios.get('/api/webservices/send_msg_whatsapp', {
                        params: {
                            BookingID: this.item.id,

                        }
                    })
                        .then(response => {
                            console.log(response)
                            window.open(response.data.data.url, "_blank");
                            let params = new FormData();
                            // this.setmeta_interactionsfull([built_interaction("Mail to customer","Click Action","Done","Mail Sent Via Whatsapp")]);
                            axios.get('/api/webservices/send_customer_mail', {
                                params: {
                                    BookingID: this.item.id,
                                    sms:this.license.sms_service
                                }
                            })
                                .then(response => {
                                    console.log(response)
                                })
                                .catch(error => {
                                    alert("Error while sending Mail");
                                })
                        })
                        .catch(error => {
                            alert("Error while opening whatsapp");
                            // this.errors.push("Error while sending Mail")
                            // this.errormodal=true
                        })

                }
                else{
                    axios.get('/api/webservices/debit_point', {
                        params: {
                            agency_id:agency_id.id,
                            agent_id:this.item.agent_id,
                            type:'itinerary',
                            remark:'Sending whatsapp msg from : '+this.item.booking_id

                        }
                    })
                        .then(response => {

                            console.log(response.data)
                            if(response.data.includes("Success")){

                                this.setBill_pay(1)
                                // this.setmeta_interactionsfull([built_interaction("Mail to customer","Click Action","Done","Mail Sent Via Whatsapp")]);

                                this.submitForm2();



                                let params = new FormData();

                                axios.get('/api/webservices/send_msg_whatsapp', {
                                    params: {
                                        BookingID: this.item.id,

                                    }
                                })
                                    .then(response => {
                                        console.log(response)
                                        window.open(respons.data.data.url, "_blank");
                                        let params = new FormData();

                                        axios.get('/api/webservices/send_customer_mail', {
                                            params: {
                                                BookingID: this.item.id,
                                                sms:this.license.sms_service
                                            }
                                        })
                                            .then(response => {
                                                console.log(response)
                                            })
                                            .catch(error => {
                                                alert("Error while sending Mail");
                                                })


                                    })
                                    .catch(error => {
                                        alert("Error while opening whatsapp");
                                        // this.errors.push("Error while sending Mail")
                                        // this.errormodal=true
                                    })
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
            sendWelcomeMail(){
                var agency_id=JSON.parse(this.item.agency_id)

                if(this.item.bill_pay){

                    this.submitForm2();

                    axios.post('/api/v1/SendMails',  {
                        BookingID: this.item.id,
                        loc:3,
                        member_of_iti:this.item.member_of_iti,
                        source:'book',
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
                else{
                    axios.get('/api/webservices/debit_point', {
                        params: {
                            agency_id:agency_id.id,
                            agent_id:this.item.agent_id,
                            type:'itinerary',
                            remark:'Sending Mail from : '+this.item.booking_id

                        }
                    })
                        .then(response => {


                            if(response.data.includes("Success")){

                                this.setBill_pay(1)

                                this.submitForm2();
                                let params = new FormData();

                                axios.post('/api/v1/SendMails',  {
                                    BookingID: this.item.id,
                                    member_of_iti:this.item.member_of_iti,
                                    loc:3,
                                    source:'book',
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

                        })
                        .catch(error => {
                            alert("Error in debit points");
                            console.log(error);
                        })
                }
            },
            send_mail(){
                var agency_id=JSON.parse(this.item.agency_id)

                if(this.item.bill_pay){




                    // this.setmeta_interactionsfull([built_interaction("Mail to customer","Click Action","Done","Mail Sent")]);

                    this.submitForm2();


                    let params = new FormData();

                    axios.get('/api/webservices/send_customer_mail', {
                        params: {
                            BookingID: this.item.id,
                            sms:this.license.sms_service
                        }
                    })
                        .then(response => {
                            this.$eventHub.$emit('update-success');
                            console.log(response)
                        })
                        .catch(error => {
                            alert("Error while sending Mail");
                            // this.errors.push("Error while sending Mail")
                            // this.errormodal=true
                        })

                }
                else{
                    axios.get('/api/webservices/debit_point', {
                        params: {
                            agency_id:agency_id.id,
                            agent_id:this.item.agent_id,
                            type:'itinerary',
                            remark:'Sending Mail from : '+this.item.booking_id

                        }
                    })
                        .then(response => {

                            console.log(response.data)
                            if(response.data.includes("Success")){

                                this.setBill_pay(1)
                                // this.setmeta_interactionsfull([built_interaction("Mail to customer","Click Action","Done","Mail Sent")]);

                                this.submitForm2();
                                let params = new FormData();

                                axios.get('/api/webservices/send_customer_mail', {
                                    params: {
                                        BookingID: this.item.id,
                                        sms:this.license.sms_service
                                    }
                                })
                                    .then(response => {
                                        console.log(response)
                                    })
                                    .catch(error => {
                                        alert("Error while sending Mail");
                                        // this.errors.push("Error while sending Mail")
                                        // this.errormodal=true
                                    })


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
            checkemptyflight(date, arr, dep, tic) {
                if (arr == '' || dep == '' || tic == '' || date == '') {

                    return true
                } else {
                    return false
                }

            },
            checkemptypassport(date,date2,place, name_f,name_l, pasno) {
                if (name_f == '' ||name_l == '' || pasno == '' || date == ''|| date2 == ''|| place == '') {

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
                this.fr = false;
                this.feedback = false;
                this.doc_rec = false;
                this.family_mem = false;
                this.visa = false;
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

                        //feching doc details
                        axios.post('/api/v1/getDocsData/'+this.item.id+'/ticket')
                            .then(response => {
                                if(response.data.status){

                                    this.membersFlightData =_.cloneDeep(response.data.data)
                                }
                            })
                            .catch(error => {
                                // console.log(error);
                            })

                    // fetch airport codes
                    axios.post('/api/webservices/airport_codes' )
                        .then(response => {this.airport_codes=response.data
                            //
                            console.log(this.airport_codes)
                        })
                }
                if(item=='family_mem') {
                    var name_arr = this.item.full_name.split(/\s+/);
                    var first_name = name_arr[0];
                    var last_name = '';
                    var docs = [];
                    var doc_name = '';
                    if (this.meta.meta_doc_tags.length > 0) {
                        for (var i = 0; i < this.meta.meta_doc_tags.length; i++) {
                            doc_name = this.meta.meta_doc_tags[i]['value'];
                            docs.push({doc_name: doc_name, value: 0});
                        }
                    }



                    if (name_arr.length > 0) {

                        for (var n = 1; n < name_arr.length; n++) {
                            last_name += name_arr[n];
                            last_name += " ";
                        }
                    }

                    if (this.meta.meta_family.length > 0) {
                        var counter=0;
                        for(var m=0;m<this.meta.meta_family.length;m++){
                                if(this.meta.meta_family[m]['first_name'].toLowerCase()==first_name.toLowerCase()){
                                    counter=1;
                                }
                        }
                        // if(counter==0){
                        //     this.meta.meta_family.push({
                        //         "first_name": first_name,
                        //         "last_name": last_name,
                        //         "phone": this.item.phone,
                        //         "email": this.item.email,
                        //         "passport": [],
                        //         "documents": docs,
                        //         "type":"parent",
                        //         "color":"red",
                        //         "remark":"",
                        //
                        //     });
                        //}

                    }
                    else {


                            // this.meta.meta_family.push({
                            //     "first_name": first_name,
                            //     "last_name": last_name,
                            //     "phone": this.item.phone,
                            //     "email": this.item.email,
                            //     "passport": [],
                            //     "documents": docs,
                            //     "type":"parent",
                            //     "color":"red",
                            //     "remark":"",
                            //});



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
                // console.log(evt)
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
            updateTitle(e) {
                this.setTitle(e.target.value)
            },
            updateLocations(e) {
                // this.setLocations(e.target.value)
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
            updateVisa_Hub(e) {
                this.setVisa_Hub(e.target.value)

            },
            updateAirport_Hub(e) {
                this.setAirport_Hub(e.target.value)
            },
            updatemeta_driver_no(e) {
                var res = this.meta.meta_driver_no.replace(/\(/g, "");
                res = res.replace(/\)/g, "");
                res = res.replace(/-/g, "");
                res = res.replace(/ /g, "");
                this.setmeta_driver_no(res)

            },
                updatemeta_appintment_letter(value, type, index) {


                    // this.visa_appointment[0]['appointment_letter'] = '';
                    uploadfile('upload',"appointment_letter", value.target.files[0], this.item.booking_id).then(response => {
                        console.log("sdsad",response);
                        if(response == false){
                            this.visa_appointment[0]['appointment_letter'] ='';
                            } else {
                        this.visa_appointment[0]['appointment_letter'] = response.data;
                    }


                })
            },

            updatemeta_welcome_mail(value) {
                this.setmeta_welcome_mail(value)
            }, updatemeta_incl_ex(value) {
                this.setmeta_incl_ex(value)
                },  updateitinerary_mail(value) {
                    this.setmeta_itinerary_mail(value)
            }, updatemeta_closuer(value) {
                this.setmeta_closuer(value)
                }, updatemeta_registration(value) {
                this.setmeta_registration_mail(value)
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
            submitForm0(){
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
                    trav.set("type", "booking")
                    axios.post('/api/v1/travellers', trav)
                        .then(response => {
                            console.log("trav me")
                            console.log(response)
                            // console.log(response.data.status)
                            this.setTraveller_id(response.data.id);
                            if (response.data.status == 'error') {
                                this.submit = true;
                                alert(response.data.type);
                            } else {
                                this.updateData()
                                    .then(() => {
                                        // this.$router.push({name: 'bookings.index'})
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
                    trav.set("type", "booking")
                    axios.post('/api/v1/travellers', trav)
                        .then(response => {

                            this.setTraveller_id(response.data.id);
                            if (response.data.status == 'error') {
                                this.submit = true;
                                alert(response.data.type);
                            }
                            else {
                                this.updateData()
                                    .then(() => {
                                        if(this.item.member_of_iti==null){
                                            this.$router.push({name: 'bookings.index'})
                                        }

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
                    trav.set("type", "booking")
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
                                //     this.$router.push({name: 'bookings.index'})
                                this.$eventHub.$emit('create-success')
                                // alert("Mail Sent");
                                // this.$router.push({name: 'bookings.index'})
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
                                        this.setTour_name(this.item.tour_name)
                                    }
                                }
                                this.showerror = true;

                                if(this.item.bill_pay){
                                    this.setActivated(1);
                                    this.setStatus(2);
                                    this.updateData()
                                        .then(() => {
                                            axios.get('/api/webservices/activate_noti?traveller_id='+this.item.traveller_id+'&id='+this.item.id+'&sms='+this.license.sms_service, {

                                            })
                                                .then(response => {
                                                })
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
                                                this.updateData()
                                                    .then(() => {
                                                        axios.get('/api/webservices/activate_noti?traveller_id='+this.item.traveller_id+'&id='+this.item.id+'&sms='+this.license.sms_service, {

                                                        })
                                                            .then(response => {
                                                            })
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
            save_n_update(event){
                this.show_update_button=1;

                if(event==='hotel_update')
                {
                    this.submitForm0();
                    axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=hotel')
                }
                if(event==='day_plan_update')
                {
                    this.submitForm0();
                    axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=day_plan')
                }
                if(event==='driver_update')
                {
                    this.submitForm0();
                    axios.get('/api/webservices/document_noti?book_id=' + this.item.booking_id+'&type=driver')

                }
                if(event==='upload')
                {
                    this.newInsatance.$emit('save_n_update')
                    this.submitForm0();


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
                // Sns logs fetch
                let form = new FormData();
                form.set('book_id',this.item.booking_id);
                form.set('src','1');
                axios.post('/api/webservices/fetch_sns_logs' , form)
                    .then(response => {this.sns_data=response.data

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
                    var type=Object.entries(this.forms_data_modal);
                    var form_id=type[0][1];
                    // console.log(form_id);
                    window.open('/api/webservices/form_preview/?form_id=' + btoa(form_id) , "_blank");
                }


            },
            send_form_kyc(){


                    let flag = 0;
                    for (let i = 0; i < this.agency_kyc.length; i++) {
                        if (this.agency_kyc[i].status) {
                            flag++
                        }
                    }
                    if (!flag) {
                        alert('Kindly Select Document');
                    } else {

                        this.loading2 = true;
                        let form = new FormData();
                        form.set('kyc', JSON.stringify(this.agency_kyc));
                        form.set('booking_id', this.item.id);
                        form.set('email', this.item.email);
                        form.set('agent_id', this.item.agent_id);
                        form.set('long_id', this.item.booking_id);
                        form.set('traveller_id', this.item.traveller_id);
                        form.set('full_name', this.item.full_name);
                        form.set('tour_name', this.item.tour_name);
                        form.set('member_of_iti', this.item.member_of_iti);
                        form.set('agency_name', JSON.parse(this.item.agency_id).name);
                        form.set('cost_status', this.member_cost);
                        form.set('flag', 'book');
                        form.set('cost_data', this.meta.sellingprice1!=null?'true':'false');

                        axios.post('/api/webservices/send_kyc_mail', form)
                            .then(response => {
                                this.show_modal_kyc = false;
                                this.loading2 = false;
                this.meta.kyc_sent=false;
                this.$eventHub.$emit('update-success')

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


            send_form(loc){
                if((this.forms_data_modal=='' || this.forms_data_modal==null) && loc==1){
                    alert('Please Select Form');
                }
                else{
                    let form_id=0;
                    if( loc==1){
                        var type=Object.entries(this.forms_data_modal);
                        form_id=type[0][1];
                    }

                    let form=new FormData();
                    this.loading2=true;

                    form.set('form_id',form_id);
                    form.set('trav_id',this.item.traveller_id);
                    form.set('agent_id',this.item.agent_id);
                    form.set('book_id',this.item.booking_id);
                    form.set('id',this.item.id);
                    form.set('flag',loc==1?true:false);

                    axios.post('/api/webservices/send_form' , form)
                        .then(response => {
                            this.send_form_button=false;
                                this.form_send_id=form_id;
                            this.show_modal=false
                            this.loading2=false;
                            this.$eventHub.$emit('update-success');
                            // if(loc==1){
                            //     this.form_send_response='Status : Form Sent <br> Link : '+response.data;
                            //     this.show_modal=false;
                            // }
                            // else if(loc==2){
                            //     this.form_send_response='Status : Form Sent <br> Link : '+response.data;
                            //
                            // }


                        })

                }
            },
            delete_document(tags){
                var return_arr=[];
                for(var k=0;k<this.meta.meta_doc_tags.length;k++){
                    if(tags.toLowerCase()!==this.meta.meta_doc_tags[k]['value'].toLowerCase()){
                        return_arr.push({
                            key:this.meta.meta_doc_tags[k]['key'],
                            value:this.meta.meta_doc_tags[k]['value']
                        });
                    }
                }
                this.meta.meta_doc_tags=[];
                this.meta.meta_doc_tags=return_arr;


            },
            deletefamily_mem(loc,place){
                var return_arr=[];
                let dd='';
              if(place==1){
                  for(var j=0;j<this.family_mem_arr.length;j++){
                      if(j!==loc){
                          return_arr.push({
                              "id":this.family_mem_arr[j]['id'],
                              "first_name":this.family_mem_arr[j]['first_name'],
                              "last_name":this.family_mem_arr[j]['last_name'],
                              "phone":this.family_mem_arr[j]['phone'],
                              "email":this.family_mem_arr[j]['email'],
                              "passport":[],
                              "documents":[],
                              "approve" : 1,"fcm_token": "","dob":this.family_mem_arr[j]['dob'],
                              "gender":this.family_mem_arr[j]['gender'],
                              "relation":this.family_mem_arr[j]['relation'],
                              "device": "","paid":this.family_mem_arr[j]['paid'],"no_show":"false","form_status":"false","visa_status":""
                          });
                      }
                  }
                  this.family_mem_arr=[];
                  this.family_mem_arr=return_arr;
                  if(this.family_mem_arr.length==0){

                      this.family_mem_arr.push({"id":this.item.id+"-"+Math.floor(Math.random() * 1000),"first_name":"","dob":"","gender":"","last_name":"","phone":"","email":"","passport":[],"documents":[],"approve" : 1,"fcm_token": "","relation":"","device": "","paid":false,"no_show":"false","form_status":"false","visa_status":""});
                  }
              }
              else if(place==2){
                  for (var o=0;o<this.meta.meta_family.length;o++){
                       dd=this.meta.meta_family[loc];
                      if(loc!==o){
                          return_arr.push({
                              "id": this.meta.meta_family[o]['id'],
                              "first_name": this.meta.meta_family[o]['first_name'],
                              "last_name": this.meta.meta_family[o]['last_name'],
                              "phone": this.meta.meta_family[o]['phone'],
                              "email": this.meta.meta_family[o]['email'],
                              "passport": this.meta.meta_family[o]['passport'],
                              "documents": this.meta.meta_family[o]['documents'],
                              "type":this.meta.meta_family[o]['type'],
                              "color":this.meta.meta_family[o]['color'],
                              "remark":this.meta.meta_family[o]['remark']
                              ,"approve" :this.meta.meta_family[o]['approve'],
                              "fcm_token": this.meta.meta_family[o]['fcm_token'],
                              "relation": this.meta.meta_family[o]['relation'],
                              "device": this.meta.meta_family[o]['device'],
                              "paid":this.meta.meta_family[o]['paid'],
                              "no_show":"false",
                              "dob":this.meta.meta_family[o]['dob'],
                              "gender":this.meta.meta_family[o]['gender'],
                              "form_status":"false","visa_status":""
                          });
                      }
                  }
                  this.meta.meta_family=[];
                  this.meta.meta_family=return_arr;

                   this.submitForm0();
                  let params = new FormData();

                      params.set('name', dd['first_name'])
                      params.set('id', this.item.id)
                      params.set('email', dd['email'])
                      axios.post('/api/v1/groupsroomingdelete', params)

                      .then(response => {



                      })



              }


            },
            save_member(){
              var counter=0;
              var docs=[];
              var doc_name='';
              if(this.meta.meta_doc_tags.length>0) {
                  for (var i = 0; i < this.meta.meta_doc_tags.length; i++) {
                      doc_name = this.meta.meta_doc_tags[i];
                      docs.push({doc_name : doc_name,value:0});

                  }
              }


                    if(this.family_mem_arr.length>0){
                    for(var j=0;j<this.family_mem_arr.length;j++){
                            if(_.isEmpty(this.family_mem_arr[j]['first_name']) || _.isEmpty(this.family_mem_arr[j]['relation']) || _.isEmpty(this.family_mem_arr[j]['gender']) || _.isEmpty(this.family_mem_arr[j]['dob']) ){
                            counter=1;

                            }

                    }

                        if(counter==1){
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Please fill secondary member data!',
                                showConfirmButton: true,
                                timer: 3000
                            })
                            return false;
                        }
                        else{

                    if(this.form_send_status==true){
                                if(counter==0 && this.form_send_id!=''){


                            let params = new FormData();
                            params.set('family_mem_arr',JSON.stringify(this.family_mem_arr))
                            params.set('booking_id',this.item.id)
                            params.set('long_id',this.item.booking_id)
                            params.set('group_id',this.item.member_of_iti)
                            params.set('traveller_id',this.item.traveller_id)
                                    params.set('form_id',this.form_send_id)
                            params.set('agent_id',this.item.agent_id);
                            params.set('docs',this.meta.meta_doc_tags);



                            axios.post('/api/v1/create_trav_form' , params)
                                .then(response => {
                                            if(response.data.status){
                                                this.form_send_id=response.data.form_id;
                                                this.form_send_status=false;
                                    this.send_form_button=false;
                                            }

                                })

                            for(var k=0;k<this.family_mem_arr.length;k++){
                                this.meta.meta_family.push({
                                    "id":this.family_mem_arr[k]['id'],
                                    "first_name":this.family_mem_arr[k]['first_name'],
                                    "last_name":this.family_mem_arr[k]['last_name'],
                                    "phone":this.family_mem_arr[k]['phone'],
                                    "email":this.family_mem_arr[k]['email'],
                                    "passport":[],
                                    "documents":docs,
                                    "type":"child",
                                    "color":"red",
                                    "remark":"",
                                    "approve" : 1,
                                    "fcm_token": "",
                                    "dob":this.family_mem_arr[k]['dob'],
                                    "gender":this.family_mem_arr[k]['gender']!=''?this.family_mem_arr[k]['gender'].label:'',
                                    "relation":this.family_mem_arr[k]['relation'],
                                    "device": "",
                                    "paid":this.family_mem_arr[k]['paid'],
                                    "no_show":"false","form_status":"true","visa_status":""

                                });
                            }
                            this.family_mem_arr=[{"id":this.item.id+"-"+Math.floor(Math.random() * 1000),"first_name":"","last_name":"","phone":"","dob":"","gender":"","email":"","passport":[],"documents":[],"remark":"","approve" : 1,"fcm_token": "","relation":"","device": "","paid":false,"no_show":"false","form_status":"false","visa_status":""}];
                            this.updateData()
                                .then(() => {
                                    // this.$router.push({name: 'bookings.index'})
                                    this.$eventHub.$emit('update-success')
                                })
                        }
                        else{

                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Form is not selected for members !',
                                        showConfirmButton: true,
                                        timer: 3000
                                    })
                        }
                    }
                    else if(this.form_send_status==false){
                                if(this.form_send_id!=''){


                            let params = new FormData();
                            params.set('family_mem_arr',JSON.stringify(this.family_mem_arr))
                            params.set('booking_id',this.item.id)
                            params.set('long_id',this.item.booking_id)
                            params.set('group_id',this.item.member_of_iti)
                            params.set('traveller_id',this.item.traveller_id)
                            params.set('form_id',this.form_send_id)
                            params.set('agent_id',this.item.agent_id);
                            params.set('docs',this.meta.meta_doc_tags);

                            axios.post('/api/v1/create_trav_form' , params)
                                .then(response => {
                                            this.form_send_status=false;
                                            this.form_send_id=response.data.form_id;

                                            // console.log(response.data);
                                    this.send_form_button=false;
                                })


                            for(var k=0;k<this.family_mem_arr.length;k++){
                                this.meta.meta_family.push({
                                    "id":this.family_mem_arr[k]['id'],
                                    "first_name":this.family_mem_arr[k]['first_name'],
                                    "last_name":this.family_mem_arr[k]['last_name'],
                                    "phone":this.family_mem_arr[k]['phone'],
                                    "email":this.family_mem_arr[k]['email'],
                                    "passport":[],
                                    "documents":docs,
                                    "type":"child",
                                    "color":"red",
                                    "remark":"",
                                    "approve" : 1,
                                    "fcm_token": "",
                                    "dob":this.family_mem_arr[k]['dob'],
                                    "gender":this.family_mem_arr[k]['gender']!=''?this.family_mem_arr[k]['gender'].label:'',
                                    "relation":this.family_mem_arr[k]['relation'],
                                    "device": "",
                                    "paid":this.family_mem_arr[k]['paid'],
                                    "no_show":"false",
                                    "form_status":"true",
                                    "visa_status":""

                                });
                            }
                            this.family_mem_arr=[{"id":this.item.id+"-"+Math.floor(Math.random() * 1000),"first_name":"","last_name":"","phone":"","email":"","passport":[],"documents":[],"remark":"","approve" : 1,"fcm_token": "","relation":"","device": "","paid":false,"no_show":"false","form_status":"false","visa_status":""}];
                            this.updateData()
                                .then(() => {
                                    // this.$router.push({name: 'bookings.index'})
                                    this.$eventHub.$emit('update-success')
                                })
                        }
                        else{
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Form is not selected yet!',
                                        showConfirmButton: true,
                                        timer: 3000
                                    })

                    }

                        }
                    }




                        }
                        else{
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please fill secondary member data!',
                            showConfirmButton: true,
                            timer: 3000
                        })

                }
            },
            update_member_docs(index,place){
                if(place==1){
                    this.update_mem_doc=index;
                    this.member_document=this.meta.meta_family[index]['documents'];
                    this.show_modal4=true;

                }
                else if(place==2){
                    var return_arr=[];
                    var value=0;
                    var total_doc=0;
                    var total_doc_rec=0;
                    var color='red';
                    for (var r=0;r<this.member_document.length;r++){
                        total_doc++;
                        var checked = document.getElementById(this.member_document[r]['doc_name']).checked;
                        if(checked==true){
                            value=1;
                        }else{
                            value=0;
                        }
                        return_arr.push({
                            doc_name:this.member_document[r]['doc_name'],
                            value:value})
                        total_doc_rec+=value;
                    }
                      if(total_doc===total_doc_rec){
                        color='green';
                    }
                    this.meta.meta_family[this.update_mem_doc]['documents']=return_arr;
                    this.meta.meta_family[this.update_mem_doc]['color']=color;
                    console.log(this.meta.meta_family[this.update_mem_doc]);
                    this.update_mem_doc='';
                    this.show_modal4=false;
                    this.$eventHub.$emit('update-success');
                }

            },
            update_doc_tags(loc){

                if(this.meta.meta_doc_tags.length>0){
                        this.loading2=true;
                        let return_arr1=[];
                        let return_arr2=[];
                        let members=[];
                        let counter=0;
                        let counter2=0;
                    var match1='';
                    var match2='';
                        var color='red';
                    var total_doc=0;
                    var total_doc_rec=0;


                    if(this.meta.member_doc_tags.documents.length>0){


                        for(var k=0;k<this.meta.meta_doc_tags.length;k++) {
                            // console.log(JSON.stringify(this.meta.meta_doc_tags[k]));
                            counter2=0;
                            for(var m=0;m<this.meta.member_doc_tags.documents.length;m++) {

                                if(this.meta.meta_doc_tags[k].toLowerCase()==this.meta.member_doc_tags.documents[m]['doc_name'].toLowerCase()){
                                    return_arr2.push(this.meta.member_doc_tags.documents[m])
                                    counter2=1;
                                }



                            }
                            if(counter2===0){
                                return_arr2.push({doc_name:this.meta.meta_doc_tags[k], value:0})

                            }


                        }

                    }
                    else{
                        for(var k=0;k<this.meta.meta_doc_tags.length;k++) {
                            this.meta.member_doc_tags.documents.push({doc_name: this.meta.meta_doc_tags[k], value: 0})
                        }



                    }

                    if(this.meta.meta_family.length>0) {


                        for (var m = 0; m < this.meta.meta_family.length; m++) {
                            return_arr1 = [];
                            members = this.meta.meta_family[m]['documents'];


                            for (var l = 0; l < this.meta.meta_doc_tags.length; l++) {

                                counter = 0;
                                match1 = this.meta.meta_doc_tags[l];
                                for (var n = 0; n < members.length; n++) {
                                    match2 = members[n]['doc_name'];
                                    if (match1 === match2) {
                                        return_arr1.push({doc_name: members[n]['doc_name'], value: members[n]['value']})
                                        // console.log(match1+'--'+match2);
                                        counter = 1;
                                    }
                                }
                                if (counter === 0) {
                                    return_arr1.push({doc_name: this.meta.meta_doc_tags[l], value: 0})
                                }


                            }


                            this.meta.meta_family[m]['documents'] = return_arr1;


                        }

                        for (var k = 0; k < this.meta.meta_family.length; k++) {
                            total_doc_rec = 0;
                            total_doc = 0;
                            color = 'red';
                            for (l = 0; l < this.meta.meta_family[k]['documents'].length; l++) {
                                total_doc++;
                                total_doc_rec += this.meta.meta_family[k]['documents'][l]['value'];
                            }
                            if (total_doc === total_doc_rec) {
                                color = 'green';
                            }
                            this.meta.meta_family[k]['color'] = color;
                        }

                    }



                        axios.post('/api/v1/updateRequireDocs',{
                            'id':this.item.id,
                            'member_doc_tags':JSON.stringify(this.meta.member_doc_tags),
                            'meta_doc_tags':JSON.stringify(this.meta.meta_doc_tags),
                            'meta_family':JSON.stringify(this.meta.meta_family),
                        }).then(response => {
                            this.loading2=false;
                            this.$eventHub.$emit('update-success');

                        })
                            .catch(error => {
                                this.loading2=false;
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Some Error Occured, Please Try Again Later !',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                            });


                }
                else{
                    if(loc==1) {
                            this.loading2=false;
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Please add required documents !',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                            return false;

                    }
                }

            },
            save_visa_appointment(loc){
                if(loc==1){
                    if(this.visa_process.length>0){
                        this.loading2=true;
                        let form=new FormData();
                        form.set('data',JSON.stringify(this.visa_process));
                        form.set('booking_id',this.item.booking_id);
                        form.set('source','iti');
                        axios.post('/api/webservices/visa_appointment' , form)
                            .then(response => {
                                this.visa_history=response.data
                                console.log(response.data);
                                this.loading2=false;
                                this.visa_process=[];
                                this.$eventHub.$emit('update-success');
                            })
                    }else{
                        alert('Please add an appointment');
                    }

                }
                else if(loc==2){
                    var interview = document.getElementById('interview').checked;
                    var bio_metric = document.getElementById('bio_metric').checked;
                    var members_checked = '';
                    var members_checked_main = '';
                    var members_checked_arr = [];
                    var appointment_type = [];
                    var final_arr=[];

                    members_checked_main=document.getElementById(this.item.full_name).checked;
                    if(members_checked_main==true){
                        members_checked_arr.push({members:this.item.full_name});
                    }

                    for(var t=0;t<this.meta.meta_family.length;t++){

                        members_checked=document.getElementById(this.meta.meta_family[t]['first_name']).checked;
                        if(members_checked==true){
                            members_checked_arr.push({members:this.meta.meta_family[t]['first_name']});
                        }

                    }
                    if(interview==true && bio_metric==true ){
                        appointment_type.push({type:'Interview'},{type:'Bio-Metric'});

                    }
                    else if(interview==false && bio_metric==true){
                        appointment_type.push({type:'Bio-Metric'});

                    }
                    else if(interview==true && bio_metric==false){
                        appointment_type.push({type:'Interview'});

                    }
                    else if(interview==false && bio_metric==false){
                        appointment_type = [];

                    }
                    // console.log(appointment_type);
                    // console.log(members_checked_arr);
                    if(appointment_type.length>0){

                        if(members_checked_arr.length>0){
                            if(!_.isEmpty(this.visa_appointment[0]['date']) &&
                                !_.isEmpty(this.visa_appointment[0]['time']) &&
                                !_.isEmpty(this.visa_appointment[0]['city']) &&
                                !_.isEmpty(this.visa_appointment[0]['location'])){

                                for(var y=0;y<appointment_type.length;y++){
                                    for(var z=0;z<members_checked_arr.length;z++){
                                        this.visa_history.push({
                                            name:members_checked_arr[z]['members'],
                                            type:appointment_type[y]['type'],
                                            details:this.visa_appointment[0],
                                            remark:this.visa_appointment[0]['remark'],
                                            status:''})
                                        this.visa_process.push({
                                            name:members_checked_arr[z]['members'],
                                            type:appointment_type[y]['type'],
                                            remark:this.visa_appointment[0]['remark'],
                                            details:this.visa_appointment[0]})

                                    }
                                }

                                this.visa_appointment=[{"date":"","time":"","city":"","location":"","local_contact_name":"","local_contact_number":"","appointment_letter":"","remark":""}];

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
                }



            },
            delete_appointment(index,name,type){
                var visa_history=[];
                var visa_process=[];

                for(var r=0;r<this.visa_history.length;r++){
                    if(r!==index){
                        // console.log('history');
                        // console.log(this.visa_history[r]['name']);
                        visa_history.push({
                            name:this.visa_history[r]['name'],
                            type:this.visa_history[r]['type'],
                            remark:this.visa_history[r]['remark'],
                            details:this.visa_history[r]['details'],
                            status:this.visa_history[r]['status']})
                        if(this.visa_history[r]['status']!==0 && this.visa_history[r]['status']!==1){
                        //     console.log('process');
                        //     console.log(this.visa_history[r]['name']);
                            visa_process.push({
                                name:this.visa_history[r]['name'],
                                type:this.visa_history[r]['type'],
                                remark:this.visa_history[r]['remark'],
                                details:this.visa_history[r]['details']})
                        }
                    }
                }
                this.visa_history=visa_history;
                this.visa_process=visa_process;
                console.log(this.visa_history);
                console.log(this.visa_process);
            },
            request_doc_mail(){

                this.updateData()
                    .then(() => {
                        // this.$router.push({name: 'bookings.index'})

                        let form=new FormData();
                        form.set('book_id',this.item.booking_id);
                        axios.post('/api/webservices/request_doc' , form)
                            .then(response => {

                                if(response.data=='success'){

                                    this.$eventHub.$emit('update-success');
                                }
                                else if(response.data=='No Pending Docs'){
                                    alert('No Pending Docs');
                                }
                                else if(response.data=='No Family Member'){
                                    alert('Please add and save family member data');
                                }


                            })
                    })

            },
            cancel_pax(){
                if(this.meta.meta_family.length!=0){
                    this.$swal({
                        title: 'There is family member associated, Would you like to cancel !',
                        text: '',
                        type: 'error',
                        showCancelButton: true,
                        cancelButtonText: "Yes",
                        cancelButtonColor: 'green',
                        confirmButtonClass:'f-22',
                        confirmButtonText:"No",
                        confirmButtonColor: 'blue',
                        focusCancel: true,

                        reverseButtons: true,
                        allowOutsideClick:false,
                        showCloseButton:true,
                        closeButtonAriaLabel:'Close',
                        closeButtonColor: 'blue',
                    })
                        .then(result => {
                            // console.log(result);
                     if(result.dismiss=='cancel'){
                          this.cancel_pax_process();
                     }

                        })
                }
                else{
                    this.cancel_pax_process();
                }

            },
            cancel_pax_process(){
                this.loading2=true;
                let trav = new FormData();

                trav.set("id", this.item.id)

                axios.post('/api/webservices/CancelPax', trav)
                    .then(response => {
                        this.loading2=false;
                        if(!response.data.status){
                            this.errors=response.data.msg;
                            if(!_.isEmpty(this.errors)){
                                this.errormodal=true

                            }
                            // alert(response.data.msg);
                        }
                        else{
                            this.meta.cancelled_status=true;
                            this.$eventHub.$emit('update-success')

                        }



                    })
                    .catch(error => {

                        alert(error);
                    })
            },




        },
        components: {LocationPlaceEditComponent,LocationPlaceComponent, LocationComponent, HotelComponent, DayplanComponent, draggable, FormWizard,
            TabContent, WizardButton, WizardStep, BadgerAccordion, BadgerAccordionItem, VueTelInput,"tags-input":  VoerroTagsInput,Documents,MailTags}
    }
</script>


<style scoped>
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
    .tags-input-root{
        font-size: 20px !important;
    }
    .tags-input-wrapper-default{
        font-size: 20px !important;
        /*border-radius: 20px !important;*/
        border: 1px solid black;
    }
    .tags-input span {

      margin: 5px !important;
      display: none !important;
    }
    .offset-2{
        margin-left: 0px !important;
    }
    .custom_button_design{
        background: rgb(23, 80, 125);
        color: white;
        padding: 2px 5px 2px 5px;
        border-radius: 6px;
    }
    /*checkbox css*/
    .checkbox{
        margin-left: -40px;
        margin-top: 20px !important;
        -webkit-margin-top: 3px !important;
    }
    .checkbox label{
        padding-left: 24px
    }
    .checkbox2{
        display: none
    }
    .checkbox2 + .box:before,
    .checkbox2 + .box:after{
        transition: all .3s
    }
    .checkbox2 + .box:after{
        position: absolute;
        left: 4px;
        top: 3px;
        margin-top: -5px;
        margin-left: -4px;
        display: inline-block;
        content: ' ';
        width: 20px;
        height: 20px;
        border: 2px solid #999;
        border-radius: 2px;
        background-color: #fff;
        z-index: 1000
    }
    .checkbox2:checked + .box:after{
        background-color: #2196F3;
        border-color:  #2196F3;
    }
    .checkbox2:checked + .box:before{
        transform: rotate(45deg);
        position: absolute;
        left: 7px;
        top: 0px;
        width: 6px;
        height: 13px;
        border-width: 2px;
        border-style: solid;
        border-top: 0;
        border-left: 0;
        border-color: #fff;
        content: '';
        z-index: 10000
    }
    .custom_label{
        font-size: 17px;
        color: black;
        font-weight: bolder;
    }
    .custom_label2{
        font-size: 15px;
        color: gray;
        font-weight: 400;
        -webkit-margin-bottom:10px !important;
    }


    .nav-tabs .nav-link{
        font-size: 20px !important;
    }
    .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
        color: #fff !important;
        background-color: #00539F !important;
        border-color: #dee2e6 #dee2e6 #fff;
    }
    .nav-item .active{
        color: #fff !important;
        background-color: #00539F !important;
    }
    .nav-tabs {
        border-bottom: 1px solid #fff !important;
    }
    .m-t2 {
        margin-top: 19% !important;
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




    .body-wrap_cost {

        width: 100%;
    }




    .main {
        background: #e3e3e3;
        border: 1px solid #e9e9e9;
        border-radius: 3px;
    }



    /* -------------------------------------
        OTHER STYLES THAT MIGHT BE USEFUL
    ------------------------------------- */


    .aligncenter {
        text-align: center;
    }

    .alignright {
        text-align: right;
    }

    .alignleft {
        text-align: left;
    }

    .clear {
        clear: both;
    }


    /* -------------------------------------
        INVOICE
        Styles for the billing table
    ------------------------------------- */
    .invoice {
        margin: 40px auto;
        text-align: left;
        width: 90%;
        font-size:20px;
        background: transparent !important;
        border: transparent !important;
    }
    .invoice td {
        padding: 5px 0;
    }
    .invoice .invoice-items {
        width: 100%;
    }
    .invoice .invoice-items td {
        border-top: #333 2px solid;
    }
    .invoice .invoice-items .total td {
        border-top: 2px solid #333;
        border-bottom: 2px solid #333;
        font-weight: 700;
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

</style>
