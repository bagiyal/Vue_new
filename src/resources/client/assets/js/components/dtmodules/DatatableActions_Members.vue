<template>
    <div class="btn-group btn-group-xs" :key="row.id">
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <div class="container"  v-if="show_modal">
            <div class="modal show in" id="myModal4" style="display: block;">
                <div class="modal-dialog" style="max-width: 1000px !important;">
                    <div class="modal-content">
                        <div class="modal-body" style="max-height: 500px !important;overflow: auto;">
                            <!--                                <button type="button" class="close f-2" data-dismiss="modal" @click="show_modal=false">&times;</button><br>-->
<div class="total_docs row">
    <h2 style="margin-right:12px">Total Docs = </h2> 
    <!-- <div style="clear: both;"></div> -->
    <span style="color: green; font-size: 17px;"> {{ uploadingDocs }} </span> / <span style="color: rgb(204, 137, 13)9, 139, 3); font-size:17px;" >{{ totalDocs }}</span>

</div>
                            <div class="">
                                <ul class="nav nav-tabs col-md-12" role="tablist">
                                    <li class="nav-item navme">
                                        <a class="nav-link active" style="color: #a6a7ac;" data-toggle="tab" href="#tabs-1" role="tab"  ><b>Document Status</b></a>
                                    </li>
                                    <li class="nav-item navme">
                                        <a class="nav-link" style="color: #a6a7ac;" data-toggle="tab" href="#tabs-2" role="tab" ><b>Visa related Responses</b></a>
                                    </li>
                                    <li class="nav-item navme">
                                        <a class="nav-link" style="color: #a6a7ac;" data-toggle="tab" href="#tabs-3" role="tab" ><b>Other Responses</b></a>
                                    </li>
                                    <li class="nav-item navme">
                                        <a class="nav-link" style="color: #a6a7ac;" data-toggle="tab" href="#tabs-4" role="tab" ><b>KYC Responses</b></a>
                                    </li>
                                </ul>

                                <div class="tab-content">

                                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-10" style="padding-top: 10px;">
                                            <b style="color: orange">Last Seen:{{doc_data_new[0].last_update}}
                                                <i aria-hidden="true" class="fa fa-info-circle" title=" This records the time when a document was last verified by the operator. "></i>
                                            </b>

                                            <b @click="qr_print_all()" style="float: right;cursor: pointer"> Bulk QR Download <i class="fa fa-download" aria-hidden="true"></i>
                                            </b></div>
                                        <div class="col-md-2">
                                            <label class="custom_label"> Name </label><br>
                                            <button type="button" @click="showdoc='primary'"  :style="showdoc=='primary' ? 'background-color: #007bff' :'background-color: '+primary_color+''" class="btn  btn-lg f-1-5 f-w600" :title="row.full_name" style="width:100%;color: white;border-radius: 6px;border: white;margin-bottom: 0.5rem">{{ row.full_name.indexOf(' ')<0?row.full_name:row.full_name.substring(0, row.full_name.indexOf(' '))}} </button>
                                            <br>
                                            <button v-for="(mem,index) in doc_data_new[0].family_form" v-if="doc_data_new[0].family_form[0].id!='' && mem.approve!=0"

                                                    type="button" @click="showdoc=index"  :style="showdoc==index ? 'background-color: #007bff' :'background-color: '+mem.color+''"
                                                    class="btn  btn-lg f-1-5 f-w600" :title="mem.name" style="width:100%;cmargin-right:5px;border-radius: 6px;color: white;border: white;margin-bottom: 0.5rem">{{mem.name.indexOf(' ')<0?mem.name:mem.name.substring(0, mem.name.indexOf(' '))}} </button>  <br>

                                        </div>
                                        <div class="col-md-10">
                                            <hr>
                                            <div class="container-fluid">
                                                <div class="row" style="overflow-y: scroll; height:250px;">
                                                    <div v-show="showdoc=='primary'">
                                                        <div class="col-md-3" >
                                                            <div class="row" style="text-align: center;" >
                                                                <div class="col-md-6"><label class="custom_label">Documents</label></div>
                                                                <div class="col-md-6"><label class="custom_label">Verify</label></div>

                                                            </div>
                                                            <div class="row" style="text-align: center;margin-bottom: 15px;" v-for="(docs,index) in docs.documents">
                                                                <div class="col-md-6 custom_label2 border-right"  >


                                                                    <img class="doc_image2" v-if="docs.doc_name.includes('Photo')"  src="./../dashboard_resources/passportsizephoto.png">
                                                                    <img class="doc_image1" v-else-if="docs.doc_name.includes('Passport')" src="./../dashboard_resources/passportcopy.png" >
                                                                    <img class="doc_image1" v-else-if="docs.doc_name.includes('Financial')" src="./../dashboard_resources/financialdoc.png">
                                                                    <img class="doc_image1" v-else-if="docs.doc_name.includes('Sponsor')" src="./../dashboard_resources/sponsorletter.png">
                                                                    <img  class="doc_image2" v-else-if="docs.doc_name.includes('ID')" src="./../dashboard_resources/idproof.png">
                                                                    <i v-else class="fa fa-file-text text-muted" style="font-size: 22px !important;"></i>
                                                                    <br>{{docs.doc_name}}</div>

                                                                <!--                                                <img v-if="docs.doc_name.includes('Passport')" src="./../dashboard_resources/financialdoc.png" >-->

                                                                <!--                                            <div class="col-md-6">{{docs.value}}</div>-->
                                                                <div class="col-md-3 " >

                                                                    <label class="container_input" style="margin-left: 45%;">
                                                                        <input  type="checkbox" :checked="docs.value==1" :id="docs.doc_name" @click="add_remark(docs.doc_name,docs.doc_name,'primary',doc_data_new[0].full_name)">
                                                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                    </label>



                                                                </div>
                                                                <div class="col-md-3 border-right" >

                                                                    <div v-if="docs.doc_name=='Original Passport'">
                                                                       <!-- {{doc_data_new[0]}} -->
                                                                        <i 
                                                                            class="fa fa-qrcode" 
                                                                            v-if="doc_data_new[0].pass_no && docs.value==1" 
                                                                            aria-hidden="true" 
                                                                            @click="qr_print_p('trvl_pass,'+doc_data_new[0].id+','+doc_data_new[0].full_name+','+'parent')">
                                                                        </i>

                                                                    </div>
                                                                    <div style="display: none">
                                                                        <div class="qr_div"  v-if="docs.doc_name=='Original Passport' && doc_data_new[0].pass_no && docs.value==1">
                                                                            <div class="col-md-3">
                                                                                <!--                                                                {{doc_data_new[0].full_name+'('+doc_data_new[0].booking_id+')'}}-->
                                                                                {{doc_data_new[0].full_name+' || '+doc_data_new[0].pass_no+' || '+doc_data_new[0].visa_hub}}
                                                                                <qrcode-vue :value="'trvl_pass,'+doc_data_new[0].id+','+doc_data_new[0].full_name+','+'parent'" :foreground="qr_for" :size="200" :renderAs="'svg'" ></qrcode-vue>
                                                                            </div>
                                                                        </div>


                                                                        <div v-if="docs.doc_name=='Original Passport'" id="qr_print" >
                                                                            <!--                                                            <i class="fa fa-print" aria-hidden="true" @click="qr_value=doc_data_new[0].full_name+'('+doc_data_new[0].booking_id+')',qr_modal=false" ></i>-->

                                                                            {{doc_data_new[0].full_name+' || '+doc_data_new[0].pass_no+' || '+doc_data_new[0].visa_hub}}
                                                                            <qrcode-vue :value="qr_value" :foreground="qr_for" :size="400" :renderAs="'svg'" ></qrcode-vue>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div class="col-md-3 border-right" >
                                                            <div class="row" style="margin-bottom: 20px;" >
                                                                <div class="col-md-12" style="text-align: center;"><label class="custom_label">Received Files</label></div>
                                                                <div class="col-md-12">
                                                                    <div v-if="typeof doc_data_new[0]!='undefined'" class="row" style="">
                                                                        <!--                                                                                                                {{JSON.parse(doc_data_new[0].family_primary[0].html_qna)}}-->

                                                                        <div class="col-md-12" v-if="JSON.parse(doc_data_new[0].family_primary[0].html_qna)">
                                                                            <div class="col-md-12" v-for="(tag,index) in JSON.parse(doc_data_new[0].family_primary[0].html_qna)">


                                                                                <!--                                 {type:'Passport Size Image',code:'-->
                                                                                <div class="" v-if="tag.key==='pass_photo' && tag.value!=''"  >Passport Size Image:

                                                                                    <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>

                                                                                </div>
                                                                                <!--                                 {type:'Visa',code:'-->
                                                                                <div class="" v-if="tag.key==='visa'&& tag.value!=''"  >Visa:
                                                                                    <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                                <!--                                 {type:'Voucher',code:'-->
                                                                                <div class="" v-if="tag.key==='vouc'&& tag.value!=''"  >Voucher:
                                                                                    <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                                <!--                                 {type:'Insurance',code:'-->
                                                                                <div class="" v-if="tag.key==='insu'&& tag.value!=''"  >Insurance:
                                                                                    <a  target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                                <!--                                 {type:'Other',code:'-->
                                                                                <div class="" v-if="tag.key==='other'&& tag.value!=''"  >Other:
                                                                                    <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>

                                                                                <!--                                 {type:'Passport',code:'-->
                                                                                <div class=""  v-if="tag.key==='pass'&& tag.value.url!=''"  >
                                                                                    Passport:- Name: {{tag.value.name_first}} {{tag.value.name_last}}  | Passport No.: {{tag.value.passportno}} |

                                                                                    Passport File:<a target="_blank" :href="tag.value.pdf"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                </a><br>
                                                                                </div>

                                                                                <div v-if="typeof tag.ques !=='undefined'">
                                                                                    <div v-if="tag.ques=='Original Passport' && (tag.value.url!='' || tag.value.pdf!='' )  ">

                                                                                        {{tag.ques}} :
                                                                                        Name: {{tag.value.name_first}} {{tag.value.name_last}} | Passport No.: {{tag.value.passportno}} |
                                                                                        <!--                                                                            <a target="_blank" :href="tag.value.url"><i class="fa fa-eye" aria-hidden="true"></i>
</a>-->
                                                                                        File:<a  target="_blank" :href="tag.value.pdf"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a><br>


                                                                                    </div>
                                                                                    <div v-else-if="tag.ques!='Original Passport' && tag.ques=='Photo ID' && tag.key==='file' && tag.custom==1 && tag.value.url!=''">
                                                                                        {{tag.ques}}:
                                                                                        <a target="_blank" :href="tag.value.url"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div v-else-if="tag.ques!='Original Passport' && tag.ques!='Photo ID' && tag.key==='file' && tag.custom==1 && tag.value!=''">
                                                                                        {{tag.ques}}:
                                                                                        <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </div>

                                                                                </div>

                                                                                <div v-else-if="tag.key==='file' && tag.custom==1 && tag.value!=''" class="" >
                                                                                    {{tag.ques}} :
                                                                                    <a target="_blank" :href="tag.value"> File </a>


                                                                                </div>

                                                                                <!--                                                                    <div v-if="tag.key==='passport' && tag.custom==1 && tag.value.url!=''" class="" >-->
                                                                                <!--                                                                        {{tag.ques}} :-->
                                                                                <!--                                                                        Name: {{tag.value.name_first}} | Passport No.: {{tag.value.passportno}} |-->
                                                                                <!--                                                                        <a target="_blank" :href="tag.value.url"><i class="fa fa-eye" aria-hidden="true"></i>
</a>-->


                                                                                <!--                                                                    </div>-->
                                                                            </div>


                                                                        </div>



                                                                    </div>

                                                                </div>





                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 ">
                                                            <div class="row" style="text-align: center;margin-bottom: 20px;" >
                                                                <div class="col-md-12"><label class="custom_label">Action</label></div>
                                                                <div class="col-md-12">
                                                                    <div class="row" style="">
                                                                        <div class="col-md-3">
                                                                            <button type="button" @click="request_doc_mail" class="btn cursor"><i class="fa fa-envelope button_style text-dark"  alt="Request Document Mail" Title="Request Document Mail" aria-hidden="true"></i></button>
                                                                        </div>
                                                                     <div class="col-md-3">

                                                                            <button type="button" @click="show_modal2=true" class="btn cursor"><i class="fa fa-pencil-square-o  button_style text-primary cursor"   alt="Edit Remark" title="Edit Remark" ></i></button>

                                                                        </div>
                                                                     <div class="col-md-3">

                                                                            <button type="button" v-if="doc_data_new[0].family_primary[0].id!=''" @click="fetch_form(JSON.parse(doc_data_new[0].family_primary[0].id))" class="btn cursor"><i  class="fa fa-file-text  button_style text-warning cursor"  alt="Update Form" title="Update Form" aria-hidden="true"></i></button>


                                                                        </div>
                                                                     <div class="col-md-3">

                                                                            <button type="button" v-if="doc_data_new[0].family_primary[0].id!=''" @click="close_form(JSON.parse(doc_data_new[0].family_primary[0].id))" class="btn cursor"><i  class="fa fa-window-close  button_style text-danger cursor"  alt="Close Form Forcefully" title="Close Form Forcefully" aria-hidden="true"></i></button>


                                                                        </div>
<!--                                                                        <div class="col-md-12">-->
<!--                                                                            <button type="button" class="btn btn-success button_style" style="margin-top: 20px;font-size: 15px;border-radius: 5px;" v-if="doc_data_new[0].family_primary[0].id!='' && this.form_data.status !==4" @click="fetch_form_MAC(JSON.parse(doc_data_new[0].family_primary[0].id))">Mark as complete</button>-->
<!--                                                                        </div>-->

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4" style="overflow-y: scroll;height: 250px;overflow-x: hidden;">
                                                            <div class="col-md-12"><label class="custom_label">Remark</label></div>

                                                            <div v-for="(rem,index) in docs.remark.slice().reverse()"  class="past-i ml-4 row mt_1rem pb-2" v-if="rem.remark_id==undefined || rem.remark_id==row.id ">
                                                                <!--                                                   {{rem,index}}-->
                                                                <div v-if="rem.type=='auto'" class="col-12 ml-2 mt-2 mr-3 text-success " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fa fa-check text-success" aria-hidden="true"></i></span>
                                                                    Successfully verified
                                                                </div>
                                                                <div v-else-if="rem.type=='remove'" class="col-12 ml-2 mt-2 mr-3 text-danger " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fas fa-stop-circle text-danger" aria-hidden="true"></i></span>
                                                                    Unchecked
                                                                </div>
                                                                <div v-else-if="rem.type=='remark'" class="col-12 ml-2 mt-2 mr-3 text-success " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fa fa-plus-circle text-success " aria-hidden="true"></i></span>
                                                                    Added
                                                                </div>
                                                                <div v-else-if="rem.type=='mail'" class="col-12 ml-2 mt-2 mr-3 text-orange " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fa fa-envelope text-orange" aria-hidden="true"></i></span>
                                                                    Send Mail
                                                                </div>
                                                                <div v-else class="col-12 ml-2 mt-2 mr-3 text-success " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fa fa-plus-circle text-success"  aria-hidden="true"></i></span>
                                                                    Added
                                                                </div>


                                                                <div class="col-12 ml-4" style="font-size: 11px; color: grey">{{ rem['time'] | moment}}</div>
                                                                <div class="col-12 ml-4 pl-2 border-left-3 remark_design">{{rem['remark']}}</div>
                                                            </div>

                                                        </div>
                                                        <div
                                                            style="display: none">

                                                            <div name="all_qr_div">


                                                            </div>
                                                        </div>

                                                        <!--                                            <div class="col-md-12" style="text-align: right;" >-->


                                                        <!--                                                <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="show_modal=false">Close</button>-->
                                                        <!--                                            </div><br><br>-->



                                                    </div>
                                                    <!--                                        doc_data_new[0].family_primary[0].html_qna-->

                                                    <div  v-for="(mem,index) in doc_data_new[0].family_form " v-show="showdoc==index">


                                                        <div class="col-md-3"  >
                                                            <div class="row" style="text-align: center;" >
                                                                <div class="col-md-6"><label class="custom_label">Documents</label></div>
                                                                <div class="col-md-6"><label class="custom_label">Verify</label></div>

                                                            </div>
                                                            <div class="row" style="text-align: center" v-for="(docs1,index) in doc_data_new[0].meta_family" >
                                                                <!--                                                    {{mem.name}} &#45;&#45; {{docs1.first_name}}-->

                                                                <div class="col-md-12" v-for="(docs,index2) in docs1.documents" v-if="typeof docs.doc_name!= 'undefined' && (mem.name.replace(/\s+/g,'').toLowerCase()===docs1.first_name.replace(/\s+/g,'').toLowerCase() || [...mem.name.replace(/\s+/g,'').toLowerCase()].every((char) => docs1.first_name.replace(/\s+/g,'').toLowerCase().includes(char)))">


                                                                    <div class="col-md-6 custom_label2 border-right"  >
                                                                        <!--                                                        {{docs}}-->


                                                                        <img class="doc_image2" v-if="docs.doc_name.includes('Photo')"  src="./../dashboard_resources/passportsizephoto.png">
                                                                        <img class="doc_image1" v-else-if="docs.doc_name.includes('Passport')" src="./../dashboard_resources/passportcopy.png" >
                                                                        <img class="doc_image1" v-else-if="docs.doc_name.includes('Financial')" src="./../dashboard_resources/financialdoc.png">
                                                                        <img class="doc_image1" v-else-if="docs.doc_name.includes('Sponsor')" src="./../dashboard_resources/sponsorletter.png">
                                                                        <img  class="doc_image2" v-else-if="docs.doc_name.includes('ID')" src="./../dashboard_resources/idproof.png">
                                                                        <i v-else class="fa fa-file-text text-muted" style="font-size: 22px !important;"></i>
                                                                        <br>{{docs.doc_name}}

                                                                    </div>


                                                                    <div class="col-md-3 " >

                                                                        <label class="container_input" style="margin-left: 45%;">
                                                                            <input  type="checkbox" :checked="docs.value==1" :id="index+'-'+index2+docs.doc_name+'mem'" @click="add_remark(index+'-'+index2+docs.doc_name+'mem',docs.doc_name,'child',doc_data_new[0].family_form[showdoc].name)" >
                                                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                                                        </label>

                                                                    </div>

                                                                    <div class="col-md-3 border-right" >

                                                                        <div v-if="docs.doc_name=='Original Passport'">

                                                                            <i class="fa fa-qrcode" v-if="mem.pass_no && docs.value==1" aria-hidden="true" @click="qr_print_c('trvl_pass,'+mem.booking_id+','+mem.name+','+'child',index+'-'+index2+docs.doc_name+'mem_qr')"></i>

                                                                        </div>
                                                                        <div style="display: none">
                                                                            <div v-if="docs.doc_name=='Original Passport' && mem.pass_no && docs.value==1"  :id="index+'-'+index2+docs.doc_name+'mem_qr'" class="qr_div">
                                                                                <div class="col-md-3">
                                                                                    <!--                                                                        {{mem}}-->
                                                                                    {{mem.name+' || '+mem.pass_no+' || '+mem.visa_hub}}
                                                                                    <!--                                                                        {{mem.name+'('+mem.long_id+')'}}-->
                                                                                    <qrcode-vue :value="'trvl_pass,'+mem.booking_id+','+mem.name+','+'child'" :foreground="qr_for" :size="200" :renderAs="'svg'" ></qrcode-vue>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div style="display: none">
                                                                            <div v-if="docs.doc_name=='Original Passport'"  :id="index+'-'+index2+docs.doc_name+'mem_qr'">

                                                                                {{mem.name+' || '+mem.pass_no+' || '+mem.visa_hub}}
                                                                                <!--       {{mem.name+'('+mem.long_id+')'}}-->
                                                                                <qrcode-vue :value="qr_value" :foreground="qr_for" :size="400" :renderAs="'svg'" ></qrcode-vue>

                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 border-right">
                                                            <div class="row" style="margin-bottom: 20px;" >
                                                                <div class="col-md-12" style="text-align: center;"><label class="custom_label">Received Files</label></div>
                                                                <div class="col-md-12">
                                                                    <div v-if="typeof doc_data_new[0]!='undefined'" class="row" style="">
                                                                        <!--                                                                                                                {{JSON.parse(doc_data_new[0].family_primary[0].html_qna)}}-->

                                                                        <div class="col-md-12" v-if="JSON.parse(mem.html_qna)[0].value!=''">
                                                                            <div class="col-md-12" v-for="(tag,index) in JSON.parse(mem.html_qna)">


                                                                                <!--                                 {type:'Passport Size Image',code:'-->
                                                                                <div class="" v-if="tag.key==='pass_photo' && tag.value!=''"  >Passport Size Image:

                                                                                    <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>

                                                                                </div>
                                                                                <!--                                 {type:'Visa',code:'-->
                                                                                <div class="" v-if="tag.key==='visa'&& tag.value!=''"  >Visa:
                                                                                    <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                                <!--                                 {type:'Voucher',code:'-->
                                                                                <div class="" v-if="tag.key==='vouc'&& tag.value!=''"  >Voucher:
                                                                                    <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                                <!--                                 {type:'Insurance',code:'-->
                                                                                <div class="" v-if="tag.key==='insu'&& tag.value!=''"  >Insurance:
                                                                                    <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                                <!--                                 {type:'Other',code:'-->
                                                                                <div class="" v-if="tag.key==='other'&& tag.value!=''"  >Other:
                                                                                    <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>

                                                                                <!--                                 {type:'Passport',code:'-->
                                                                                <div class=""  v-if="tag.key==='pass'&& tag.value.url!=''"  >
                                                                                    Passport:- Name: {{tag.value.name_first}} {{tag.value.name_last}}  | Passport No.: {{tag.value.passportno}} |

                                                                                    Passport File:<a   target="_blank" :href="tag.value.pdf"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                </a><br>
                                                                                </div>


                                                                                <div v-if="typeof tag.ques !=='undefined'">
                                                                                    <div v-if="tag.ques=='Original Passport' && (tag.value.url!='' || tag.value.pdf!='' ) ">

                                                                                        {{tag.ques}} :
                                                                                        Name: {{tag.value.name_first}} {{tag.value.name_last}} | Passport No.: {{tag.value.passportno}} |
                                                                                        <!--                                                                            <a target="_blank" :href="tag.value.url"><i class="fa fa-eye" aria-hidden="true"></i>
</a>-->
                                                                                        File:<a  target="_blank" :href="tag.value.pdf"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a><br>


                                                                                    </div>
                                                                                    <div v-else-if="tag.ques!='Original Passport' && tag.ques=='Photo ID' && tag.key==='file' && tag.custom==1 && tag.value.url!=''">
                                                                                        {{tag.ques}}:
                                                                                        <a target="_blank" :href="tag.value.url"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div v-else-if="tag.ques!='Original Passport' && tag.ques!='Photo ID' && tag.key==='file' && tag.custom==1 && tag.value!=''">
                                                                                        {{tag.ques}}:
                                                                                        <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </div>
<!--                                                                                    <div v-else-if="tag.key==='file' && tag.custom==1 && tag.value!='' && tag.ques!='Original Passport'">-->
<!--                                                                                        {{tag.ques}}:-->
<!--                                                                                        <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>-->
<!--                                                                                        </a>-->
<!--                                                                                    </div>-->

                                                                                </div>

                                                                                <div v-else-if="tag.key==='file' && tag.custom==1 && tag.value!=''" class="" >
                                                                                    {{tag.ques}} :
                                                                                    <a target="_blank" :href="tag.value"> File </a>


                                                                                </div>

                                                                                <!--                                                                    <div v-if="tag.key==='file' && tag.custom==1 && tag.value!=''" class="" >-->
                                                                                <!--                                                                        {{tag.ques}}:-->
                                                                                <!--                                                                        <a target="_blank" :href="tag.value"><i class="fa fa-eye" aria-hidden="true"></i>
</a>-->


                                                                                <!--                                                                    </div>-->

                                                                                <div v-if="tag.key==='passport' && tag.custom==1 && tag.value.url!=''" class="" >
                                                                                    {{tag.ques}} :
                                                                                    Name: {{tag.value.name_first}} {{tag.value.name_last}} | Passport No.: {{tag.value.passportno}} |
                                                                                    <a target="_blank" :href="tag.value.url"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>


                                                                                </div>
                                                                            </div>


                                                                        </div>



                                                                    </div>

                                                                </div>





                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 ">
                                                            <div class="row" style="text-align: center;margin-bottom: 20px;" >
                                                                <div class="col-md-12"><label class="custom_label">Action</label></div>
                                                                <div class="col-md-12">
                                                                    <div class="row" >
                                                                        <div class="col-md-3">
                                                                            <button type="button" @click="request_doc_mail" class="btn cursor"><i class="fa fa-envelope button_style text-dark"  alt="Request Document Mail" Title="Request Document Mail" aria-hidden="true"></i></button>
                                                                        </div>
                                                                        <div class="col-md-3">

                                                                            <button type="button" @click="show_modal2=true"  class="btn cursor"><i class="fa fa-pencil-square-o  button_style text-primary cursor"  alt="Edit Remark" title="Edit Remark" aria-hidden="true"></i></button>


                                                                        </div>
                                                                        <div class="col-md-3">

                                                                            <button type="button" @click="fetch_form(JSON.parse(mem.id))" class="btn cursor"><i  class="fa fa-file-text  button_style text-warning cursor"   alt="Update Form" title="Update Form" aria-hidden="true"></i></button>


                                                                        </div>
                                                                        <div class="col-md-3">

                                                                            <button type="button" v-if="doc_data_new[0].family_primary[0].id!=''" @click="close_form(JSON.parse(mem.id))" class="btn cursor"><i  class="fa fa-window-close  button_style text-danger cursor"  alt="Close Form Forcefully" title="Close Form Forcefully" aria-hidden="true"></i></button>


                                                                        </div>
<!--                                                                        <div class="col-md-12">-->
<!--                                                                            <button type="button" class="btn btn-success button_style" style="margin-top: 20px;font-size: 15px;border-radius: 5px;"  @click="fetch_form_mamber(JSON.parse(mem.id))">Mark as complete</button>-->
<!--                                                                        </div>-->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4" style="overflow-y: scroll;height: 250px;overflow-x: hidden;">
                                                            <div class="col-md-12"><label class="custom_label">Remark</label></div>

                                                            <div v-for="(rem,index) in docs.remark.slice().reverse() "  class="past-i ml-4 row mt_1rem pb-2" v-if="rem.remark_id!=undefined || rem.remark_id==Paxid ">
                                                                <!--                                                   {{rem,index}}-->
                                                                <div v-if="rem.type=='auto'" class="col-12 ml-2 mt-2 mr-3 text-success " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fa fa-check text-success" aria-hidden="true"></i></span>
                                                                    Successfully verified
                                                                </div>
                                                                <div v-else-if="rem.type=='remove'" class="col-12 ml-2 mt-2 mr-3 text-danger " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fas fa-stop-circle text-danger" aria-hidden="true"></i></span>
                                                                    Unchecked
                                                                </div>
                                                                <div v-else-if="rem.type=='remark'" class="col-12 ml-2 mt-2 mr-3 text-success " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fa fa-plus-circle text-success " aria-hidden="true"></i></span>
                                                                    Added
                                                                </div>
                                                                <div v-else-if="rem.type=='mail'" class="col-12 ml-2 mt-2 mr-3 text-orange " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fa fa-envelope text-orange" aria-hidden="true"></i></span>
                                                                    Send Mail
                                                                </div>
                                                                <div v-else class="col-12 ml-2 mt-2 mr-3 text-success " style="margin-left: unset;">
                                                                    <span class="text-black pr-2"><i class="fa fa-plus-circle text-success"  aria-hidden="true"></i></span>
                                                                    Added
                                                                </div>


                                                                <div class="col-12 ml-4" style="font-size: 11px; color: grey">{{ rem['time'] | moment}}</div>
                                                                <div class="col-12 ml-4 pl-2 border-left-3 remark_design">{{rem['remark']}}</div>
                                                            </div>

                                                        </div>
                                                        <br><br>

                                                    </div>


                                                </div>

                                                <div class="col-md-12" style="text-align: right;" >

                                                    <button type="button" class="btn btn-success button_style" style="margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="update_member_docs('index')">Update</button>
                                                    <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="show_modal=false">Close</button>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div class="tab-pane " id="tabs-2" role="tabpanel">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-10" style="padding-top: 10px;">
                                            <b style="color: orange">Last Seen:{{doc_data_new[0].last_update}}<i aria-hidden="true" class="fa fa-info-circle" title=" This records the time when a document was last verified by the operator. "></i></b>
                                            <b @click="qr_print_all()" style="float: right;cursor: pointer"> Bulk QR Download <i class="fa fa-download" aria-hidden="true"></i>
                                            </b></div>
                                        <div class="col-md-2">
                                            <label class="custom_label"> Name </label><br>
                                            <button type="button" @click="showdoc='primary'"  :style="showdoc=='primary' ? 'background-color: #007bff;margin-bottom: 0.5rem;' :'background-color: '+primary_color+';margin-bottom: 0.5rem;'" class="btn  btn-lg f-1-5 f-w600" :title="row.full_name" style="width:100%;color: white;border-radius: 6px;border: white;">{{row.full_name.indexOf(' ')<0?row.full_name:row.full_name.substring(0, row.full_name.indexOf(' '))}}</button>
                                            <br>
                                            <button v-for="(mem,index) in doc_data_new[0].family_form" v-if="doc_data_new[0].family_form[0].id!='' && mem.approve!=0"

                                                    type="button" @click="showdoc=index" :title="mem.name"   :style="showdoc==index ? 'background-color: #007bff;margin-bottom: 0.5rem;' :'background-color: '+mem.color+';margin-bottom: 0.5rem;'"
                                                    class="btn  btn-lg f-1-5 f-w600" style="width:100%;cmargin-right:5px;border-radius: 6px;color: white;border: white;">{{mem.name.indexOf(' ')<0?mem.name:mem.name.substring(0, mem.name.indexOf(' '))}}</button>  <br>

                                        </div>
                                        <div class="col-md-10">


                                            <hr>



                                            <div class="container-fluid">
                                                <div class="row" style="overflow-y: scroll; height:250px;">
                                                    <div v-show="showdoc=='primary'" class="col-md-12">


                                                        <div class="row" style="margin-bottom: 20px;" >

                                                            <div class="col-md-12">
                                                                <div v-if="typeof doc_data_new[0]!='undefined'" class="row" style="">
                                                                    <!--                                                                                                                {{JSON.parse(doc_data_new[0].family_primary[0].html_qna)}}-->

                                                                    <div class="col-md-12" v-if="JSON.parse(doc_data_new[0].family_primary[0].html_qna)">
                                                                        <div  v-for="(tag,index) in JSON.parse(doc_data_new[0].family_primary[0].html_qna)">



                                                                            <div class="col-md-12" v-if="typeof tag.ques !=='undefined'">
                                                                                <div v-if="tag.ques=='Original Passport' && (tag.value.url!='' || tag.value.pdf!='' )  ">

                                                                                    <div class="row" style="text-align: center">
                                                                                        <div class="col-md-3 " >
                                                                                            <label for="passport" class="text-muted">Issue Date</label>

                                                                                            <h2>{{tag.value.issue_date}}</h2>

                                                                                        </div>
                                                                                        <div class="col-md-3 ">
                                                                                            <label for="date" class="text-muted">Exp. Date</label>

                                                                                            <h2>{{tag.value.exp_date}}</h2>
                                                                                        </div>
                                                                                        <div class="col-md-3 ">
                                                                                            <label class="text-muted" for="passport">Issue Place</label>
                                                                                            <h2>{{tag.value.issue_place}}</h2>

                                                                                        </div>
                                                                                        <div class="col-md-3 ">
                                                                                            <label for="first_name" class="text-muted">First Name</label>

                                                                                            <h2>{{tag.value.name_first}}</h2>
                                                                                        </div>
                                                                                        <div class="col-md-3 ">
                                                                                            <label for="last_name" class="text-muted">Last Name</label>

                                                                                            <h2>{{tag.value.name_last}}</h2>
                                                                                        </div>
                                                                                        <div class="col-md-3 ">
                                                                                            <label for="pass no." class="text-muted">Passport No.</label>

                                                                                            <h2>{{tag.value.passportno}}</h2>
                                                                                        </div>
                                                                                        <div class="col-md-3 ">
                                                                                            <label for="passport" class="text-muted">Passport</label>

                                                                                            <h2><a class="fa fa-eye" target="_blank" :href="tag.value.pdf">
                                                                                            </a></h2>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                            <div class="col-md-6 bg-white content_div " v-if="tag.key==='dob'" >

                                                                                <label for="passport_image" class="text-muted">Date Of Birth</label>

                                                                                <div class="row" style="margin-top: 10px;margin-bottom: 30px;">
                                                                                    <div class="col-md-8 no_event" >
                                                                                        <p style="pointer-events:none;font-weight: 600"  class="">{{tag.value}}

                                                                                        </p>
<!--                                                                                        <input style="pointer-events:none" type="text" class="form-control input_field_design" :value="tag.value" id="dob" name="DOB"  />-->
<!--                                                                                   -->

                                                                                    </div>



                                                                                </div>




                                                                            </div>
                                                                            <div v-if="tag.key==='gender'" class="col-md-6 bg-white content_div" >
                                                                                <label for="foodpref"  class="text-muted">Gender</label><br>

                                                                                <div class="row " style="margin-top: 10px;margin-bottom: 30px;padding-left: 2rem;">
                                                                                    <div class="col-md-12 no_event">
                                                                                        <div class="row" v-if="typeof tag.value =='string' || tag.value.length>0 ">


                                                                                            <p style="pointer-events:none;font-weight: 600"  class="">{{tag.value}}

                                                                                            </p>
<!--                                                                                            <input type="text" :value="tag.value"    style="pointer-events:none" class="form-control input_field_design">-->


                                                                                        </div>
                                                                                        <div class="row" v-else>
                                                                                            <p style="pointer-events:none;font-weight: 600"  class="">{{tag.value == 0?'Male':'Female'}}

                                                                                            </p>


<!--                                                                                            <input type="text"  :value="tag.value == 0?'Male':'Female'"   style="pointer-events:none" class="form-control input_field_design">-->


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
                                                    <!--                                        doc_data_new[0].family_primary[0].html_qna-->

                                                    <div class="col-md-12" v-for="(mem,index) in doc_data_new[0].family_form " v-show="showdoc==index">


                                                        <div class=" border-right">
                                                            <div class="row" style="margin-bottom: 20px;" >

                                                                <div class="col-md-12">
                                                                    <div v-if="typeof doc_data_new[0]!='undefined'" class="row" style="">
                                                                        <!--                                                                                                                {{JSON.parse(doc_data_new[0].family_primary[0].html_qna)}}-->

                                                                        <div class="col-md-12" v-if="JSON.parse(mem.html_qna)[0].value!=''">
                                                                            <div  v-for="(tag,index) in JSON.parse(mem.html_qna)">


                                                                                <div class="col-md-12" v-if="typeof tag.ques !=='undefined'">
                                                                                    <div v-if="tag.ques=='Original Passport' && (tag.value.url!='' || tag.value.pdf!='' ) ">

                                                                                        <div class="row" style="text-align: center">
                                                                                            <div class="col-md-3 ">
                                                                                                <label for="date" class="text-muted">Issue Date</label>

                                                                                                <h2>{{tag.value.issue_date}}</h2>
                                                                                            </div>
                                                                                            <div class="col-md-3 ">
                                                                                                <label for="date" class="text-muted">Exp. Date</label>

                                                                                                <h2>{{tag.value.exp_date}}</h2>
                                                                                            </div>
                                                                                            <div class="col-md-3 ">
                                                                                                <label class="text-muted" for="passport">Issue Place</label>
                                                                                                <h2>{{tag.value.issue_place}}</h2>

                                                                                            </div>
                                                                                            <div class="col-md-3 ">
                                                                                                <label for="first_name" class="text-muted">First Name</label>

                                                                                                <h2>{{tag.value.name_first}}</h2>
                                                                                            </div>
                                                                                            <div class="col-md-3 ">
                                                                                                <label for="last_name" class="text-muted">Last Name</label>

                                                                                                <h2>{{tag.value.name_last}}</h2>
                                                                                            </div>
                                                                                            <div class="col-md-3 ">
                                                                                                <label for="pass no." class="text-muted">Passport No.</label>

                                                                                                <h2>{{tag.value.passportno}}</h2>
                                                                                            </div>
                                                                                            <div class="col-md-3 ">
                                                                                                <label for="passport" class="text-muted">Passport</label>

                                                                                                <h2><a class="fa fa-eye" target="_blank" :href="tag.value.pdf">
                                                                                                </a></h2>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-6 bg-white content_div " v-if="tag.key==='dob'" >

                                                                                    <label for="passport_image" class="text-muted">Date Of Birth</label>

                                                                                    <div class="row" style="margin-top: 10px;margin-bottom: 30px;">
                                                                                        <div class="col-md-8 no_event" >
                                                                                            <p style="pointer-events:none;font-weight: 600"  class="">{{tag.value}}

                                                                                            </p>
<!--                                                                                            <input style="pointer-events:none" type="text" class="form-control input_field_design" :value="tag.value" id="dob" name="DOB"  />-->
<!--                                                                                       -->

                                                                                        </div>



                                                                                    </div>




                                                                                </div>
                                                                                <div v-if="tag.key==='gender'" class="col-md-6 bg-white content_div" >
                                                                                    <label for="foodpref"  class="text-muted">Gender</label><br>

                                                                                    <div class="row " style="margin-top: 10px;margin-bottom: 30px;">
                                                                                        <div class="col-md-12 no_event">
                                                                                            <div class="row" v-if="typeof tag.value =='string' || tag.value.length>0 " style="padding-left: 2rem;">

                                                                                                <p style="pointer-events:none;font-weight: 600"  class="">{{tag.value}}

                                                                                                </p>

<!--                                                                                                <input type="text" :value="tag.value"    style="pointer-events:none" class="form-control input_field_design">-->


                                                                                            </div>
                                                                                            <div class="row" v-else>
                                                                                                <p style="pointer-events:none;font-weight: 600"  class="">{{tag.value == 0?'Male':'Female'}}

                                                                                                </p>


<!--                                                                                                <input type="text"  :value="tag.value == 0?'Male':'Female'"   style="pointer-events:none" class="form-control input_field_design">-->


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


                                                        <br><br>




                                                    </div>


                                                </div>

                                                <div class="col-md-12" style="text-align: right;" >


                                                    <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="show_modal=false">Close</button>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div class="tab-pane " id="tabs-3" role="tabpanel">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-10" style="padding-top: 10px;">
                                            <!--                                            <b style="color: orange">Last Seen:15May 2021,15:20</b> -->
                                            <b style="color: orange">Last Seen:{{doc_data_new[0].last_update}}<i aria-hidden="true" class="fa fa-info-circle" title=" This records the time when a document was last verified by the operator. "></i></b>
                                            <b @click="qr_print_all()" style="float: right;cursor: pointer"> Bulk QR Download <i class="fa fa-download" aria-hidden="true"></i>
                                            </b></div>
                                        <div class="col-md-2">
                                            <label class="custom_label"> Name </label><br>
                                            <button type="button" @click="showdoc='primary'"  :style="showdoc=='primary' ? 'background-color: #007bff;margin-bottom: 0.5rem;' :'background-color: '+primary_color+';margin-bottom: 0.5rem;'" :title="row.full_name" class="btn  btn-lg f-1-5 f-w600" style="width:100%;color: white;border-radius: 6px;border: white;">{{row.full_name.indexOf(' ')<0?row.full_name:row.full_name.substring(0, row.full_name.indexOf(' '))}}</button>
                                            <br>
                                            <button v-for="(mem,index) in doc_data_new[0].family_form" v-if="doc_data_new[0].family_form[0].id!='' && mem.approve!=0"

                                                    type="button" @click="showdoc=index" :title="mem.name"   :style="showdoc==index ? 'background-color: #007bff;margin-bottom: 0.5rem;' :'background-color: '+mem.color+';margin-bottom: 0.5rem;'"
                                                    class="btn  btn-lg f-1-5 f-w600" style="width:100%;cmargin-right:5px;border-radius: 6px;color: white;border: white;">{{mem.name.indexOf(' ')<0?mem.name:mem.name.substring(0, mem.name.indexOf(' '))}} </button>  <br>

                                        </div>
                                        <div class="col-md-10">


                                            <hr>



                                            <div class="container-fluid">
                                                <div class="row" style="overflow-y: scroll; height:250px;">
                                                    <div v-show="showdoc=='primary'" class="col-md-12">

                                                        <div class="border-right" >
                                                            <div class="row" style="margin-bottom: 20px;" >

                                                                <div class="col-md-12">
                                                                    <div v-if="typeof doc_data_new[0]!='undefined'" class="row" style="">
                                                                        <!--                                                                                                                {{JSON.parse(doc_data_new[0].family_primary[0].html_qna)}}-->

                                                                        <div class="col-md-12" v-if="JSON.parse(doc_data_new[0].family_primary[0].html_qna)">
                                                                            <div  v-for="(tag,index) in JSON.parse(doc_data_new[0].family_primary[0].html_qna)">

                                                                                <div class="col-md-6 bg-white content_div " v-if="tag.key!=='file' && tag.key!='gender' " style="height:100px;" >

                                                                                    <label for="" class="text-muted" v-if="tag.custom==0"><span v-if="tag.type!='AddMem'">{{tag.type}}</span></label>
                                                                                    <label for="" class="text-muted" v-else>{{tag.ques[0]}} </label>

                                                                                    <div class="row" style="margin-top: 10px;margin-bottom: 30px;">
                                                                                        <div class="col-md-8 no_event" >
                                                                                            <span  v-if="tag.type=='Check Box'" >
                                                                                                <p
                                                                                                v-for="count in tag.value"
                                                                                                    style="pointer-events:none;font-weight: 600;"

                                                                                                   >{{ tag.options[0].en[count].key}}
                                                                                                </p>
<!--                                                                                            <input-->
<!--                                                                                                v-for="count in tag.value"-->
<!--                                                                                                style="pointer-events:none"-->
<!--                                                                                                type="text"-->
<!--                                                                                                class="form-control input_field_design"-->
<!--                                                                                                :value="tag.options[0].en[count].key"-->
<!--                                                                                            />-->
                                                                                            </span>
                                                                                            <span  v-if="tag.type=='Drop Down'" >
                                                                                                <p
                                                                                                    v-for="count in tag.value"
                                                                                                    style="pointer-events:none;font-weight: 600;"

                                                                                                >{{count.key}}
                                                                                                </p>
                                                                                                <!--                                                                                            <input-->
                                                                                                <!--                                                                                                v-for="count in tag.value"-->
                                                                                                <!--                                                                                                style="pointer-events:none"-->
                                                                                                <!--                                                                                                type="text"-->
                                                                                                <!--                                                                                                class="form-control input_field_design"-->
                                                                                                <!--                                                                                                :value="tag.options[0].en[count].key"-->
                                                                                                <!--                                                                                            />-->
                                                                                            </span>
                                                                                            <span v-else-if="tag.type=='Radio Button'">


<!--                                                                                            <input-->

<!--                                                                                                style="pointer-events:none"-->
<!--                                                                                                type="text"-->
<!--                                                                                                class="form-control input_field_design"-->
<!--                                                                                                :value="tag.options[0].en[tag.value] !== undefined && tag.options !==undefined ? tag.options[0].en[tag.value].key:''"-->
<!--                                                                                            />-->
                                                                                                <p style="pointer-events:none;font-weight: 600"

                                                                                                   class="">{{tag.options[0].en[tag.value] !== undefined && tag.options !==undefined ? tag.options[0].en[tag.value].key:''}}</p>

                                                                                            </span>
                                                                                            <span v-else-if="tag.type=='Food Preferences'">


<!--                                                                                            <input-->

<!--                                                                                                    style="pointer-events:none"-->
<!--                                                                                                    type="text"-->
<!--                                                                                                    class="form-control input_field_design"-->
<!--                                                                                                    :value="tag.option[0].en[tag.value] !== undefined && tag.option !==undefined ? tag.option[0].en[tag.value].key:''"-->
<!--                                                                                            />-->
                                                                                                <p style="pointer-events:none;font-weight: 600"  class="">{{tag.option[0].en[tag.value] !== undefined && tag.option !==undefined ? tag.option[0].en[tag.value].key:''}}

                                                                                                </p>
                                                                                            </span>

<!--                                                                                            <input-->
<!--                                                                                                v-else-->
<!--                                                                                                style="pointer-events:none"-->
<!--                                                                                                type="text"-->
<!--                                                                                                class="form-control input_field_design"-->
<!--                                                                                                :value="typeof tag.value=='string'?tag.value:tag.value.State"-->
<!--                                                                                            />-->
                                                                                            <p v-else
                                                                                               style="pointer-events:none;font-weight: 600"

                                                                                               class=""
                                                                                            >{{typeof tag.value=='string'?tag.value:tag.value.State}}

                                                                                            </p>

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
                                                    <!--                                        doc_data_new[0].family_primary[0].html_qna-->

                                                    <div  class="col-md-12" v-for="(mem,index) in doc_data_new[0].family_form " v-show="showdoc==index">


                                                        <div class=" border-right">
                                                            <div class="row" style="margin-bottom: 20px;" >

                                                                <div class="col-md-12">

                                                                    <div v-if="typeof doc_data_new[0]!='undefined'" class="row" style="">
                                                                        <!--                                                                                                                {{JSON.parse(doc_data_new[0].family_primary[0].html_qna)}}-->

                                                                        <div class="col-md-12" v-if="JSON.parse(mem.html_qna)[0].value!=''">
                                                                            <div  v-for="(tag,index) in JSON.parse(mem.html_qna)">

                                                                                <div class="col-md-6 bg-white content_div " v-if="tag.key!=='file' && tag.key!='gender' " style="height:100px;" >

<!--                                                                                    <label for="passport_image" class="text-muted">{{tag.type}}</label>-->
                                                                                    <label for="" class="text-muted" v-if="tag.custom==0"><span v-if="tag.type!='AddMem'">{{tag.type}}</span></label>
                                                                                    <label for="" class="text-muted" v-else>{{tag.ques[0]}}</label>

                                                                                    <div class="row" style="margin-top: 10px;margin-bottom: 30px;">
                                                                                        <div class="col-md-8 no_event" >
                                                                                            <span  v-if="tag.type=='Check Box'" >
                                                                                                  <p
                                                                                                v-for="count in tag.value"
                                                                                                      style="pointer-events:none;font-weight: 600;"

                                                                                                  >{{ tag.options[0].en[count].key}}
                                                                                                </p>
<!--                                                                                            <input-->
<!--                                                                                                v-for="count in tag.value"-->
<!--                                                                                                style="pointer-events:none"-->
<!--                                                                                                type="text"-->
<!--                                                                                                class="form-control input_field_design"-->
<!--                                                                                                :value="tag.options[0].en[count].key"-->
<!--                                                                                            />-->
                                                                                            </span>
                                                                                            <span  v-if="tag.type=='Drop Down'" >
                                                                                                <p
                                                                                                    v-for="count in tag.value"
                                                                                                    style="pointer-events:none;font-weight: 600;"

                                                                                                >{{count.key}}
                                                                                                </p>
                                                                                                <!--                                                                                            <input-->
                                                                                                <!--                                                                                                v-for="count in tag.value"-->
                                                                                                <!--                                                                                                style="pointer-events:none"-->
                                                                                                <!--                                                                                                type="text"-->
                                                                                                <!--                                                                                                class="form-control input_field_design"-->
                                                                                                <!--                                                                                                :value="tag.options[0].en[count].key"-->
                                                                                                <!--                                                                                            />-->
                                                                                            </span>

                                                                                            <span v-else-if="tag.type=='Radio Button'">
                                                                                                    <p style="pointer-events:none;font-weight: 600"

                                                                                                       class="">{{tag.options[0].en[tag.value] !== undefined && tag.options !==undefined ? tag.options[0].en[tag.value].key:''}}</p>


<!--                                                                                            <input-->

<!--                                                                                                style="pointer-events:none"-->
<!--                                                                                                type="text"-->
<!--                                                                                                class="form-control input_field_design"-->
<!--                                                                                                :value="tag.options[0].en[tag.value] !== undefined && tag.options !==undefined ? tag.options[0].en[tag.value].key:''"-->
<!--                                                                                            />-->
                                                                                            </span>
                                                                                            <span v-else-if="tag.type=='Food Preferences'">
                                                                                                 <p style="pointer-events:none;font-weight: 600"  class="">{{tag.option[0].en[tag.value] !== undefined && tag.option !==undefined ? tag.option[0].en[tag.value].key:''}}

                                                                                                </p>


<!--                                                                                            <input-->

<!--                                                                                                style="pointer-events:none"-->
<!--                                                                                                type="text"-->
<!--                                                                                                class="form-control input_field_design"-->
<!--                                                                                                :value="tag.option[0].en[tag.value] !== undefined && tag.option !==undefined ? tag.option[0].en[tag.value].key:''"-->
<!--                                                                                            />-->
                                                                                            </span>
                                                                                            <p v-else
                                                                                               style="pointer-events:none;font-weight: 600"

                                                                                               class=""
                                                                                            >{{typeof tag.value=='string'?tag.value:tag.value.State}}

                                                                                            </p>

<!--                                                                                            <input-->
<!--                                                                                                v-else-->
<!--                                                                                                style="pointer-events:none"-->
<!--                                                                                                type="text"-->
<!--                                                                                                class="form-control input_field_design"-->
<!--                                                                                                :value="typeof tag.value=='string'?tag.value:tag.value.State"-->
<!--                                                                                            />-->

                                                                                    </div>
                                                                                    </div>




                                                                                </div>
                                                                            </div>


                                                                        </div>



                                                                    </div>

                                                                </div>





                                                            </div>
                                                        </div>


                                                        <br><br>




                                                    </div>


                                                </div>

                                                <div class="col-md-12" style="text-align: right;" >


                                                    <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="show_modal=false">Close</button>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div class="tab-pane " id="tabs-4" role="tabpanel">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-10" style="padding-top: 10px;">
                                            <!--                                            <b style="color: orange">Last Seen:15May 2021,15:20</b> -->
                                            <b style="color: orange">Last Seen:{{doc_data_new[0].last_update}}<i aria-hidden="true" class="fa fa-info-circle" title=" This records the time when a document was last verified by the operator. "></i></b>
                                            <b @click="qr_print_all()" style="float: right;cursor: pointer"> Bulk QR Download <i class="fa fa-download" aria-hidden="true"></i>
                                            </b></div>
                                        <div class="col-md-2">
                                            <label class="custom_label"> Name </label><br>
                                            <button type="button" @click="showdoc='primary'"  :style="showdoc=='primary' ? 'background-color: #007bff' :'background-color: #cdcdcd'" class="btn  btn-lg f-1-5 f-w600" :title="row.full_name" style="width:100%;color: white;border-radius: 6px;border: white;">{{row.full_name.indexOf(' ')<0?row.full_name:row.full_name.substring(0, row.full_name.indexOf(' '))}}</button>
                                            <br>

                                        </div>
                                        <div class="col-md-10">


                                            <hr>



                                            <div class="container-fluid">
                                                <div class="row" style="overflow-y: scroll; height:250px;">
                                                    <div v-show="showdoc=='primary'" class="col-md-12">

                                                        <div class="border-right" >
                                                            <div class="row" style="margin-bottom: 20px;" >

                                                                <div class="col-md-12">
                                                                    <div v-if="typeof doc_data_new[0]!='undefined'" class="row" style="">
                                                                        <!--                                                                                                                {{JSON.parse(doc_data_new[0].family_primary[0].html_qna)}}-->

                                                                        <div class="col-md-12" v-if="doc_data_new[0].kyc_form.length>0">
                                                                            <div class="row">
                                                                                <div class="col-md-4"  >
                                                                                    <div class="row" style="text-align: center;" >
                                                                                        <div class="col-md-6"><label class="custom_label">Documents</label></div>


                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-4"  >
                                                                                    <div class="row" style="text-align: center;" >

                                                                                        <div class="col-md-6"><label class="custom_label">Received Files</label></div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                              <div v-if="typeof doc_data_new[0].kyc_form[0]!='undefined'" >
                                                                              
                                                                            <div  v-for="(tag,index) in  JSON.parse(doc_data_new[0].kyc_form[0].html_qna)">

                                                                                <div class="row">


                                                                                    <div class="col-md-3 custom_label2 border-right" style="margin-left: 30px;" >


                                                                                        <img class="doc_image2"  src="./../dashboard_resources/passportsizephoto.png">

                                                                                        <br>{{tag.doc}}</div>

                                                                                    <div class="col-md-3" style="margin-left: 30px;" v-if="tag.file!=''"  >File :

                                                                                        <a target="_blank" :href="tag.file"><i class="fa fa-eye" aria-hidden="true"></i>
                                                                                        </a>

                                                                                    </div>

                                                                                    <div class="col-md-3" v-else>

                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                        </div>
                                                                        <div class="col-md-12" style="text-align: center;padding: 25px;" v-else>
                                                                            <h1>No Data Available</h1>
                                                                        </div>



                                                                    </div>

                                                                </div>





                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>

                                                <div class="col-md-12" style="text-align: right;" >


                                                    <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="show_modal=false">Close</button>
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
        </div>
        <!--        remark modal-->
        <div class="container"  v-if="show_modal2">
            <div class="modal show in" style="display: block;">
                <div class="modal-dialog" style="max-width: 750px !important;">

                    <div class="modal-content" style="padding: 20px;">
                        <div class="row border-bottom">
                            <div class="col-md-8 ">
                                <h4 class="modal-title  f-2" >Add Remark</h4>

                            </div>
                            <div class="col-md-4">
                                <button classs="f-2" type="button" class="close" data-dismiss="modal" @click="show_modal2=false">&times;</button><br>
                            </div>
                        </div>

                        <div class="modal-body" style="max-height: 600px !important;overflow: auto;">


                            <div class="container-fluid">
                                <label class="f-1-5 text-secondary">Remark</label><br>
                                <textarea rows="5"  style="font-size: 15px;" cols="75" v-model="remark"></textarea>

                            </div>

                            <div class="col-12"><p class="text-muted">Past Interactions</p></div>

                            <div  style="overflow-y: scroll;height: 250px;overflow-x: hidden;">


                                <div v-for="(rem,index) in docs.remark.slice().reverse() "  class="past-i ml-4 row mt_1rem pb-2">
                                    <!--                                                   {{rem,index}}-->
                                    <div v-if="rem.type=='auto'" class="col-12 ml-2 mt-2 mr-3 text-success " style="margin-left: unset;">
                                        <span class="text-black pr-2"><i class="fa fa-check text-success" aria-hidden="true"></i></span>
                                        Successfully verified
                                    </div>
                                    <div v-else-if="rem.type=='remove'" class="col-12 ml-2 mt-2 mr-3 text-danger " style="margin-left: unset;">
                                        <span class="text-black pr-2"><i class="fas fa-stop-circle text-danger" aria-hidden="true"></i></span>
                                        Unchecked
                                    </div>
                                    <div v-else-if="rem.type=='remark'" class="col-12 ml-2 mt-2 mr-3 text-success " style="margin-left: unset;">
                                        <span class="text-black pr-2"><i class="fa fa-plus-circle text-success " aria-hidden="true"></i></span>
                                        Added
                                    </div>
                                    <div v-else-if="rem.type=='mail'" class="col-12 ml-2 mt-2 mr-3 text-orange " style="margin-left: unset;">
                                        <span class="text-black pr-2"><i class="fa fa-envelope text-orange" aria-hidden="true"></i></span>
                                        Sent Mail
                                    </div>
                                    <div v-else class="col-12 ml-2 mt-2 mr-3 text-success " style="margin-left: unset;">
                                        <span class="text-black pr-2"><i class="fa fa-plus-circle text-success"  aria-hidden="true"></i></span>
                                        Added
                                    </div>


                                    <div class="col-12 ml-4" style="font-size: 11px; color: grey">{{ rem['time'] | moment}}</div>
                                    <div class="col-12 ml-4 pl-2 border-left-3 remark_design">{{rem['remark']}}</div>
                                </div>

                            </div>

                            <button type="button" class="btn btn-success button_style" style="float: right;margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="update_member_docs('past')">Update</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container"  v-if="remove_reason_modal">
            <div class="modal show in" style="display: block;">
                <div class="modal-dialog" style="max-width: 750px !important;">

                    <div class="modal-content" style="padding: 20px;">
                        <div class="row border-bottom">
                            <div class="col-md-8 ">
                                <h4 class="modal-title  f-2" >Give Reason</h4>

                            </div>
                            <!--                            <div class="col-md-4">-->
                            <!--                                <button classs="f-2" type="button" class="close" data-dismiss="modal" @click="remove_reason_modal=false">&times;</button><br>-->
                            <!--                            </div>-->
                        </div>

                        <div class="modal-body" style="max-height: 600px !important;overflow: auto;">


                            <div class="container-fluid">
                                <label class="f-1-5 text-secondary">Reason</label><br>
                                <textarea rows="5"  style="font-size: 15px;" cols="75" v-model="remove_reason"></textarea>

                            </div>




                            <button type="button" :class="[remove_reason==''?'disabled-row':'']" class="btn btn-success button_style" style="float: right;margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="reason_checkbox(1)">Submit</button>
                            <button type="button" class="btn btn-danger button_style" style="float: right;margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="reason_checkbox(0)">Cancel</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>


        <button type="button" @click="send_mail" class="btn "><i class="fa fa-envelope button_style text-dark"  alt="Send Mail" Title="Send Mail" aria-hidden="true"></i></button>


        <router-link

            :to="{ name: 'bookings.edit', params: { id: row.id } }"
            target="_blank"
            class="btn">
            <i class="fa fa-pencil-square-o  button_style text-primary"  alt="Edit" title="Edit" aria-hidden="true"></i>

        </router-link>
        <button type="button" class="btn " @click="getdata"><i class="fa fa-briefcase button_style"  alt="Update Documents" Title="Update Documents" aria-hidden="true" :style="{ color: '#1e51a4' }"></i></button>


        <button v-if="row.meta_kyc!=='true'" type="button" class="btn " @click="show_modal_kyc=true"><i class="fa fa-file-text  button_style"  alt="Request KYC" Title="Request KYC" aria-hidden="true" style="color: chocolate"></i></button>
        <button v-else type="button" class="btn " @click="alertt()"><i class="fa fa-file-text  button_style"  alt="KYC Request sent" Title="KYC Request sent" aria-hidden="true" style="color: green"></i></button>


        <button class="btn " @click="showDateModal"><i class="fa fa-calendar-o" aria-hidden="true"></i></button> <!--herehere-->
                    <!-- The DateModal -->
                    <div v-if="isDateModalVisible"  class="modal">
                        <div class="date-modal-content scrollable-table " >
                            <!-- DateModal content goes here -->
                            <h2>Date Modal</h2>
                            <!--  add form or content for the modal here -->
                            <div class="info-container">
                                    <div>
                                        <h2>Selected Travel HUB</h2>
                                        <span v-if="this.existingData.hub" :existing_hub="row.airport_hub">
                                            <h4>{{ this.existingData.hub }}</h4>
                                        </span>
                                        <span v-else>
                                            <h4>TravelerHub is not selected Yet</h4>
                                        </span>
                                    </div>
                                    <div>
                                        <h2>Travel Date</h2>
                                        <span v-if="this.existingData.date" :existing_date="row.travel_date">
                                            <h4>{{ this.existingData.date }}</h4>
                                        </span>
                                        <span v-else>
                                            <h4>TravelDate is not selected Yet</h4>
                                        </span>
                                    </div>
                            </div>  
                            <!-- Select prefered HUB -->
                            <div class="hub" >
                                <h3>Select Preferred HUB</h3>
                                <!-- <select name="selectHub" id="selectHub" >
                                    <option v-for="item in updateDateM" :value="item.Hub">{{ item.Hub }}</option>
                                </select> -->
                                <v-select
                                    v-model="TravelerHub"
                                    :clearable="false"                                    
                                    name="Hub"
                                    label="Hub"                                   
                                    :options="updateDateM"
                                     style="width:300px;background-color: #fff"
                                 />
                                <div class="">
                                <span style="font-size: 18px;" >Selected hub is <span style="color:red">{{ TravelerHub.Hub }}</span>.</span>
                                </div>
                            </div>
                            <!-- dateChecker -->
                                    <div class="dateChecker" v-for="dateItem in TravelerHub.dates" >
                                       
                                            
                                            <span v-if="dateItem.total == dateItem.used ">                                                  
                                                <input :id="dateItem.date"  name="tour_date" v-modal="dateItem.date" type="radio" :disabled="dateItem.total == dateItem.used" style="position: fixed;opacity: 0;pointer-events: none;">
                                                <label :for= "dateItem.date" style="color:grey; cursor: not-allowed;"> <del>{{dateItem.date}}&nbsp 
                                                    (NO Seats Available :-<span style="color:grey;font-size:14px;">{{dateItem.total - dateItem.used}}</span>)</del>
                                                </label> 
                                            </span>    

                                            <span v-else-if="dateItem.total != dateItem.used && TravelerHub.Hub !=existingData.hub">
                                                            
                                                <input :id="dateItem.date"  name="tour_date" v-modal="dateItem.date" type="radio" :disabled="dateItem.total === dateItem.used" ref="input"   @click="newDate(dateItem.date)" >
                                                <label :for= "dateItem.date" >{{dateItem.date}}&nbsp 
                                                    (Seats Available :-><span style="color:red;font-size:14px;">{{dateItem.total - dateItem.used}}</span>)
                                                </label>
                                            </span>
                                            <span v-else-if="dateItem.total != dateItem.used && TravelerHub.Hub ==existingData.hub && dateItem.date != existingData.date">
                                                            
                                                            <input :id="dateItem.date"  name="tour_date" v-modal="dateItem.date" type="radio" :disabled="dateItem.total === dateItem.used" ref="input"   @click="newDate(dateItem.date)" >
                                                            <label :for= "dateItem.date" >{{dateItem.date}}&nbsp 
                                                                (Seats Available :-><span style="color:red;font-size:14px;">{{dateItem.total - dateItem.used}}</span>)
                                                            </label>
                                             </span>

                                          
                                            <span v-if=" (dateItem.date == existingData.date && TravelerHub.Hub ==existingData.hub)">
                                                <input :id="dateItem.date"  name="tour_date" v-modal="dateItem.date" type="radio" :disabled="dateItem.total == dateItem.used" style="position: fixed;opacity: 0;pointer-events: none;">
                                                <label :for= "dateItem.date" style="color:goldenrod; cursor: not-allowed;">Cannot select existing travel date &nbsp <span style="color:red;font-size:14px;">{{dateItem.date}}&nbsp 
                                                    (Seats Available :->{{dateItem.total - dateItem.used}})</span>
                                                </label> 
                                            </span> 
                                      
                                    </div> 
                            <button class="update-button" @click="updateDateModal(existing_date,existing_hub,updated_date,TravelerHub.Hub)">Update</button>
                            <button class="close-button" @click="closeDateModal">Close</button>
                        </div>
                    </div>

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
                            <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125);float: right;" @click="send_form_kyc()" >Send </button>
                            <!--                                <button type="button" class="btn btn-success" @click="send_form(2)" v-if="send_form_button==true">Get Link</button>-->
                            <!--                                <div class="container-fluid m_t1 f-1-5 " v-if="send_form_button==false" style="font-weight: bold" v-html="form_send_response">-->

                            <!--                                </div>-->

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="form_show_model==true">
            <transition name="modal">
                <div class="modal-mask form_pop">
                    <div class="modal-wrapper backGround ">
                        <!--                                                loader.....-->

                        <div v-if="kycLoader"  class="Load">
                            <div class="loader" style="margin:15rem auto;width:300px;">
                                <img style="width:100%" src="/dashboard_resources/loader.gif"  />
                            </div>
                        </div>

                        <!--                                                    loader end-->
                        <div class="modal-dialog" style="max-width: 65% !important;">

                            <div class="modal-content"  id="element_box" style="height: 600px;overflow-x: hidden;overflow-y: scroll">
                                <div class="modal-header border-0 border-dotted">
                                    <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                        <div class="row">
                                            <div class="col-10">
                                                <h1>Fill Form for {{form_data.name}}</h1>
                                            </div>
                                            <div class="col-2 text-right" v-if="form_data.status!=4">
                                                <button type="button" class="close f-2-5" @click="submit_traveller_form(form_data.status)">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>

                                            </div>
                                            <div class="col-2 text-right" v-else>
                                                <button type="button" class="close f-2-5" @click="form_show_model=false">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div class="modal-body" style="">
                                    <FormComponent
                                                   :languages="JSON.parse(form_data.get_form.languages)"
                                                   :banner="form_data.get_form.banner"
                                                   :hub_data_list="form_data"
                                                   mode="edit"
                                                   :form_data="form_data"
                                                   @uploaddocument="uploadfileform"
                                                   @uploaddocumentpass="uploadfileformpass"
                                                   form_filler="handler_fill"
                                                   :tabsVisibility="tabsVisibility"
                                                   :trav_name="trav_name"
                                                   @validate_passport="validate_passport"
                                                   :states="states"
                                                   @submit_form_partial="submit_traveller_form"
                                                   @submit_traveller_form="submit_traveller_form"
                                                   @kycLoadervisibility="kycLoadervisibility"

                                    />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </transition>
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

    </div>
</template>


<script>

    import moment from 'moment-timezone'
    import QrcodeVue from 'qrcode.vue'
    import uploadfile from "../../mixins/uploadfile";
    import FormComponent from "../cruds/FormComponent";

    export default {
        props: ['row','states'],
        data() {
            return {
                // Code...
                loading2:false,
                show_modal:false,
                show_modal2:false,
                docs:'',
                doc_data:0,
                remark:'',
                remark_type:'',
                checkbox_id:'',
                remove_reason:'',
                remove_reason_modal:false,

                doc_data_new:[],
                showdoc:'primary',
                agency_kyc:[],
                show_modal_kyc:false,
                doc:0,
                total:0,
                qr_modal:false,
                qr_value:'',
                qr_for:'#182969',
                qr_data:'',
                pass_data:[],
                fam_count:0,
                form_show_model:false,
                form_data:'',
                background_url:'',
                primary_color:'red',
                errors:[],
                errormodal:false,
                trav_name:{'first':'','last':''},
                tabsVisibility:{'travel_date':false,'docs':false,'passport':false,'photoId':false},
                kycLoader:false,
                // member_cost for tc/sotc
                member_cost:'true',
                Paxid:0,
                isDateModalVisible: false, //herehere
                id:'',
                dateM:{},
                updateDateM:{},
                TravelerHub:[],
                errorChecker:true,
                //new api data members
                existing_date:'',
                existing_hub:'',
                updated_date:'',
                updated_hub:'',
                groupId:'',
                bookId:'',
                existingData:{'hub':'','date':''},
                totalDocs: 0,
                uploadingDocs: 0,
            }
        },
        watch: {
            "showdoc": function() {
                if(this.showdoc!='primary'){
                    if(this.doc_data_new[0].meta_family[this.showdoc].id==undefined){

                        this.Paxid=this.row.id+"-"+Math.floor(Math.random() * 1000);
                        this.doc_data_new[0].meta_family[this.showdoc].id=this.Paxid;

                    }
                    else {
                        this.Paxid = this.doc_data_new[0].meta_family[this.showdoc].id;
                    }
                }


            },
            form_data:function(){

                this.tabsVisibility={'travel_date':false,'docs':false,'passport':false,'photoId':false};
                let data=this.form_data.html_qna;


                const index=data.findIndex(form => (form.key=='file' && form.ques=='Photo ID'));
                const otherDocs=data.findIndex(form => (form.key=='file' && (form.type=='File Upload' ||  form.ques=='Photo ID') && form.ques!='Original Passport' ));
                const passport=data.findIndex(form => (form.key=='file' && form.ques=='Original Passport'));
                if(index>=0){

                    if(data[index].value.mem_name!=''){
                        var stringArray = data[index].value.mem_name.split(/(\s+)/).filter( e => e.length >= 1);

                        this.trav_name.first=stringArray[0];
                        let last_name='';
                        for(var i=1; i<stringArray.length;i++){
                            if(last_name==''){
                                last_name=stringArray[i];
                            }
                            else{
                                last_name=last_name+' '+stringArray[i];
                            }

                        }

                        this.trav_name.last=last_name;

                    }
                    this.tabsVisibility.photoId=true;
                }
                if(otherDocs>=0){
                    this.tabsVisibility.docs=true;
                }
                if(passport>=0){
                    this.tabsVisibility.passport=true;
                }


            }
        },
        created() {
            var base_url = window.location.origin;
            this.background_url=base_url+'/dashboard_resources/background_doc.png';
            // console.log('kyc');
            var kyc=JSON.parse(document.querySelector("meta[name='agency-kyc']").getAttribute('content'));
            // console.log('kyc-1');
            // console.log(kyc);
            var kyc_arr=[];
            for(var i=0 ; i<kyc.length ; i++){
                kyc_arr[i]=kyc[i];
                kyc_arr[i]['status']=true;
            }
            this.agency_kyc=kyc_arr
        },
        mounted(){
            this.existingData.hub=this.row.airport_hub;
            this.existingData.date=this.row.travel_date;
            if(tag.options[0].en[tag.value] ==undefined && tag.options == undefined){
                tag.options[0].en[tag.value] = '';
                tag.options='';
            }
        },
        methods: {
                            // herehere
            
          getDateModal() {

                // this.errorChecker=false;
                if(this.row.member_of_iti == null)
                    {
                        console.log("throwing error in groupID or member_of_iti")
                        this.$swal.fire({
                        icon: 'error',
                        title: 'Data Inventory',
                        text: 'Data Inventory is currently empty.',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                        });
                        }
            const group_id = this.row.member_of_iti;
            const id = this.row.id;
            const url = `/api/v1/groupsHubJson/${group_id}/${id}`;
            axios
                .get(url)
                .then((response) => {
                if (response.data.data) {
                    this.dateM = response.data.data;
                    console.log(response.data)
                    this.updateDateM = { ...this.dateM };
                    console.log("API call successful");
                } else {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'API Error',
                        text: 'The API did not return any data.',
                    });
                }
                })
                .catch((error) => {
                    console.error('Error in fetch', error);
                    this.$swal.fire({
                        icon: 'error',
                        title: 'API Error',
                        text: 'An error occurred while making the API call.',
                     });
                });

             this.isDateModalVisible = true;
            },

           
            showDateModal() {
                            this.getDateModal();
                        // if(this.errorChecker){
                        //     this.$swal.fire({
                        //         icon: 'error',
                        //         title: 'API Error',
                        //         text: 'An error occurred while making the API call.',
                        //      });
                        //     }
                        // else
                            this.isDateModalVisible = true;  
            },

            newDate(selectedDate) {
            //    console.log('Selected date:',this.$refs.input.value);
               console.log('Selected date:', selectedDate);
               this.updated_date=selectedDate;
           },


            async updateDateModal(existing_date,existing_hub,updated_date,updated_hub){             

                    //setting values
                existing_date=this.existingData.date;
                existing_hub=this.existingData.hub;
                this.groupId=this.row.member_of_iti;
                this.bookId=this.row.id;
                if(existing_date === null || existing_date === '')
                    {existing_date = null;}

                    //logs
                console.log("inside updateDateModal")
                console.log('Existing Date:', existing_date);
                console.log('Existing Hub:', existing_hub);
                console.log('Updated Date:', updated_date);
                console.log('Updated Hub:', updated_hub);  
                console.log('groupID:', this.groupId);
                console.log('bookID:', this.bookId);                                                                  


                    //formData
                const formData = new FormData();
                formData.set( 'existing_date', existing_date)
                formData.set( 'existing_hub', existing_hub)
                formData.set('updated_date' ,updated_date)
                formData.set( 'updated_hub', updated_hub)
                formData.set('groupId', this.groupId)
                formData.set( 'bookId', this.bookId)                  

                console.log('formData:', formData);
                
              await  axios.post('/api/v1/updateTravelDate', formData)
                    .then(response => {
                        console.log("Response "+response);
                        if (response.data.status == false) {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Seats Unavailable',
                                text: response.data.error,
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 5000
                            });
                        }
                        else{
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Seats Updated',
                                text: 'Your airport hub and travel date have been updated',
                                // showCloseButton:true,
                                // showConfirmButton: true,
                                timer: 3500
                            });
                        
                            this.existingData.date=updated_date;
                            this.existingData.hub=updated_hub;
                            this.TravelerHub=[];
                        }
                    })
                    .catch( ()=> {
                        console.log("error");
                    });            
                this.closeDateModal();
            },
            closeDateModal() {
                this.TravelerHub=[];
                this.isDateModalVisible = false;
        },
            kycLoadervisibility(status){
                this.kycLoader=status;
            },
            uploadfileformpass(value, type, index,url,id,filetype) {
                filetype=type+'-'+filetype;

                if (url != '') {
                    uploadfile("form_update", filetype, value.target.files[0], this.form_data.booking_id).then(response => {
                        if(type=='passport-front'){
                            this.form_data.html_qna[index].value.url = response.data;
                        }
                        if(type=='passport-back'){
                            this.form_data.html_qna[index].value.url2 = response.data;
                        }
                        if(type=='passport-merged'){
                            this.form_data.html_qna[index].value.pdf = response.data;
                        }


                    })
                } else {
                    uploadfile("form", filetype, value.target.files[0], this.form_data.booking_id).then(response => {
                        if(type=='passport-front'){
                            this.form_data.html_qna[index].value.url = response.data;
                        }
                        if(type=='passport-back'){
                            this.form_data.html_qna[index].value.url2 = response.data;
                        }
                        if(type=='passport-merged'){
                            this.form_data.html_qna[index].value.pdf = response.data;
                        }


                    })
                }
            },
            validate_passport(index){
                // alert(index, form_index);
                //  alert(this.form_data[form_index].html_qna[index].value.exp_date);
                if(this.form_data.html_qna[index].value.exp_date==''){

                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Kindly enter expiery date first!',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
                else{

                    var datew=  this.form_data.html_qna[index].value.exp_date.split('-');
                    const date1=   new Date(datew[1]+'/'+datew[0]+'/'+datew[2]);
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
                    // console.log(date1 ,date2)
                    // console.log(diffTime)
                    if(diffTime){
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        // console.log(diffTime + " milliseconds");
                        // console.log(diffDays + " days");
                        if(diffDays<180 && diffDays >1){
                            if(!this.err_passport.includes()){

                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Your Passport will expire in less then 6 months',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                            }

                        }
                        else if(diffDays<=1) {


                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Your Passport is expired!',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                            this.form_data.html_qna[index].value.exp_date='';
                            this.form_data.html_qna[index].value.name_first='';
                            // name_first
                            // name_last
                            // passportno
                            // url
                        }



                    }
                    else {
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Your Passport is expired!',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                        this.form_data.html_qna[index].value.exp_date='';
                        this.form_data.html_qna[index].value.name_first='';
                    }
                }

            },
            uploadfileform(value, type, index,url,id,filetype) {
                filetype=type+'-'+filetype;
                // type=_.cloneDeep(type+'-'+filetype)
                if(url!=''){


                    uploadfile("form_update", filetype, value.target.files[0], this.form_data.booking_id).then(response => {

                        if(type=='photo_id'){

                            this.form_data.html_qna[index].value.url = response.data;
                        }
                        else{

                            this.form_data.html_qna[index].value = response.data;

                        }


                    })
                }
                else {
                    uploadfile("form", filetype, value.target.files[0], this.form_data.booking_id).then(response => {

                        if(type=='photo_id'){
                            this.form_data.html_qna[index].value.url = response.data;
                        }
                        else{
                            this.form_data.html_qna[index].value = response.data;
                        }

                    })
                }


            },
            submit_traveller_form(status){


                this.loading2=true;
                let form = new FormData();
                form.set("form_record_html",JSON.stringify(this.form_data.html_qna) );
                form.set("group_id",this.form_data.group_id );
                form.set("booking_id",this.form_data.booking_id );
                form.set("form_record_id",this.form_data.id );
                form.set("form_id",this.form_data.form_id );
                form.set("status",status );
                form.set("traveller_id",this.$route.params.id );
                form.set("long_id",this.form_data.long_id );
                form.set("name",this.form_data.name );
                form.set("form_record_members", JSON.stringify(this.form_data.member_data));
                form.set("member_name", JSON.stringify(this.form_data.member_name));
                form.set("form_step",JSON.stringify(this.form_data.form_step));

                axios.post('/api/v1/traveller_form_member_partial', form)

                    .then(response => {

                        this.form_show_model=false;
                        axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/0')
                        this.loading2=false;
                    })






            },
            hide_form(){

                this.form_show_model=false

                axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/0')



            },
            checkemptypassport(date, name_f, pasno,image1) {
                if (name_f == ''  || pasno == '' || date == '' || image1 == '') {

                    return true
                } else {
                    return false
                }

            },
            checkemptyid(id, name_f,mem_name) {
                if (id == '' ||name_f == '' || mem_name=='') {

                    return true
                } else {
                    return false
                }

            },
            reason_checkbox(e){
                if(e){

                    this.remark = this.remark+ " ("+this.remove_reason+")";

                    this.update_member_docs('remark');
                    this.remove_reason=''
                    this.remove_reason_modal=false
                }
                else{
                    // checkbox_id
                    this.remark = '';
                    this.remark_type = '';
                    document.getElementById(this.checkbox_id).checked = true
                    this.checkbox_id='';
                    this.remove_reason=''
                    this.remove_reason_modal=false

                }


            },
            add_remark(id,doc,type,name){
                var checked = document.getElementById(id).checked;
                if(checked==true) {
                    this.remark = doc + ' for ' + name;
                    this.remark_type = "auto";
                    this.checkbox_id=id;
                    this.update_member_docs('remark');
                }
                else{
                    this.remark = doc + ' for ' + name;
                    this.remark_type = "remove";
                    this.checkbox_id=id;
                    this.remove_reason_modal=true
                }
            },
            qr_print_all(){
                //    name="qr_div"
                // name="all_qr_div"

                var x = document.getElementsByClassName("qr_div");
                if(x.length==0){
                    alert('No Verified Passport Found!');
                    return false;
                }

                // alert((x[0]));
                var divContents =''
                for(let j=0;j<x.length;j++){

                    divContents += (x[j]).innerHTML;

                }
                var a = window.open('', '', 'height=500, width=500');
                a.document.write('<html><head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></head>');
                a.document.write('<body ><div class="row">');
                a.document.write(divContents);
                a.document.write('</div></body></html>');
                a.document.close();
                a.print();
                // x[1].innerHTML = "Hello World!";
            },
            qr_print_c(data,id){
                this.qr_value=data
                setTimeout(function(){

                    var divContents = document.getElementById(id).innerHTML;
                    var a = window.open('', '', 'height=500, width=500');
                    a.document.write('<html>');
                    a.document.write('<body >');
                    a.document.write(divContents);
                    a.document.write('</body></html>');
                    a.document.close();
                    a.print();


                },1000);

            },
            qr_print_p(data){
                this.qr_value=data
                // console.log(data);
                setTimeout(function(){
                    var divContents = document.getElementById("qr_print").innerHTML;
                    var a = window.open('', '', 'height=500, width=500');
                    a.document.write('<html>');
                    a.document.write('<body >');
                    a.document.write(divContents);
                    a.document.write('</body></html>');
                    a.document.close();
                    a.print();
                },1000);
            },
            alertt(){
                this.errors=[];
                this.errors.push('KYC Form already sent to customer!');
                if(!_.isEmpty(this.errors)){
                    this.errormodal=true
                }

            },
            send_form_kyc(){
                if(this.member_cost=='true' || this.member_cost=='Accepted'){
                    this.loading2=true;
                    let flag=0;
                    for(let i=0;i<this.agency_kyc.length;i++){
                        if(this.agency_kyc[i].status){
                            flag++
                        }
                    }
                    if(!flag){
                        this.loading2=true;
                        alert('Kindly Select Document');

                    }
                    else {

                        let form = new FormData();
                        form.set('kyc', JSON.stringify(this.agency_kyc));
                        form.set('booking_id', this.row.id);
                        form.set('email', this.row.email);
                        form.set('agent_id', this.row.agent_id);
                        form.set('long_id', this.row.booking_id);
                        form.set('traveller_id', this.row.traveller_id);
                        form.set('full_name', this.row.full_name);
                        form.set('tour_name', this.row.tour_name);
                        form.set('member_of_iti', this.row.member_of_iti);
                        form.set('agency_name', JSON.parse(this.row.agency_id).name);
                        form.set('flag', 'list');
                        form.set('cost_status', this.member_cost);
                        axios.post('/api/webservices/send_kyc_mail', form)
                            .then(response => {
                                this.loading2=false;
                                this.show_modal_kyc = false;

                                if(!response.data.status){
                                    this.member_cost='false';
                                    this.send_form_kyc();
                                    // this.errors=response.data.msg;
                                    // if(!_.isEmpty(this.errors)){
                                    //     this.errormodal=true
                                    // }
                                }
                                else{
                                    this.row.meta_kyc = false
                                    this.$eventHub.$emit('update-success');
                                }


                            })
                            .catch(error => {
                                this.loading2=false;
                                alert(error);

                            })
                    }
                }
                else{
                    // member_cost for tc/sotc
                    this.$swal({
                        title: 'Cost is empty, Would you like to continue ?',
                        text: '',
                        type: 'question',
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
                            if (result.value) {
                                // console.log('no');
                            }
                            else if(result.dismiss=='cancel'){
                                // console.log('yes');
                                this.member_cost='Accepted';
                                 this.send_form_kyc();
                            }

                        })
                }

            },
            fetch_pass_pdf2(pass_no){
                this.loading2=true;
                let form = new FormData();
                form.set("book_id", this.row.id)
                form.set("index", pass_no)
                form.set("source", 4)
                axios.post('/api/webservices/passport_pdf', form)
                    .then(response => {

                        window.open(response.data);
                        this.loading2=false;
                    })


            },
            getdata(){

                this.loading2=true
                axios.get('/api/v1/groupsmemberdoc/' + this.row.id)
                    .then(response => {
                       let parseData = JSON.parse(response.data.data[0].member_doc_tags);
                       this.docs = parseData;
                       this.totalDocs = response.data.data[0].totalDocs;
                       this.uploadingDocs = response.data.data[0].uploaded;
                        this.doc_data_new=response.data.data
                        this.doc_data_new[0].family_primary.forEach((pri)=>{

                            if(pri.kyc_data==null){
                                if(pri.status==1 || pri.status==4){
                                    this.primary_color='#28a745';
                                }
                            }
                        })
                        this.doc_data_new[0].member_doc_tags= JSON.parse(this.doc_data_new[0].member_doc_tags)
                        this.doc_data_new[0].meta_family= JSON.parse(this.doc_data_new[0].meta_family)
                        this.doc_data_new[0].meta_pass.forEach( (data) => {
                            var name=data.name_first.toLowerCase()+' '+data.name_last.toLowerCase();

                            // console.log(this.doc_data_new[0].full_name+'-'+name);
                            // console.log(data.passportno);
                            // this.doc_data_new[0].pass_no='';
                            if(this.doc_data_new[0].full_name.toLowerCase()==name){
                                this.doc_data_new[0].pass_no=data.passportno;

                            }

                            // this.pass_data.push({'name':data.name_first+' '+data.name_last,'pass_no':data.passportno})
                        })
                        // console.log( this.doc_data_new);
                        var flag=0;
                        this.doc_data_new[0].family_form.forEach( (data1) => {

                            flag=0;
                            data1.color='red';
                            if(data1.status==1 || data1.status==4){
                                data1.color='#28a745';
                            }
                            var match1=data1.name.toLowerCase();
                            // console.log(data1.approve);
                            this.doc_data_new[0].meta_pass.forEach( (data2) => {
                                var match2=data2.name_first.toLowerCase()+' '+data2.name_last.toLowerCase();
                                // console.log(match1+'---'+match2);
                                // console.log(match1==match2);
                                if(match1==match2){
                                    // console.log(match1+'---'+match2);
                                    data1.pass_no=data2.passportno;
                                    flag++;
                                }

                            })
                            if(flag==0){
                                data1.pass_no="";
                            }
                            data1.visa_hub= this.doc_data_new[0].visa_hub;
                        })

                        // console.log( this.doc_data_new);
                        this.show_modal=true
                        this.loading2=false
                    })

            },
            update_member_docs(loc){

                var return_arr=[];
                var checked ='';
                var remark_id='';
                var counter1=this.docs.documents.length;
                var counter2=0;
                var counter3=0;

                for(var r=0;r<this.docs.documents.length;r++){

                    checked = document.getElementById(this.docs.documents[r]['doc_name']).checked;
                    if(checked==true){
                        this.docs.documents[r]['value']=1;
                        counter2++;
                        counter3++;
                    }
                    else if(checked==false){
                        this.docs.documents[r]['value']=0;

                    }
                    return_arr.push(this.docs.documents[r]);
                    checked ='';
                }
                // console.log(return_arr);
                var color_count=0;
                var member_count=0;


                for(var i=0;i<this.doc_data_new[0].meta_family.length;i++){

                    var docslen = this.doc_data_new[0].meta_family[i].documents.length;

                    for (var j = 0; j < docslen; j++) {
                        // console.log(i + '-' + j + this.doc_data_new[0].meta_family[i].documents[j]['doc_name'] + 'mem');
                        if(typeof document.getElementById(i + '-' + j + this.doc_data_new[0].meta_family[i].documents[j]['doc_name'] + 'mem')!='undefined' && document.getElementById(i + '-' + j + this.doc_data_new[0].meta_family[i].documents[j]['doc_name'] + 'mem')!=null){
                            var checked1 = document.getElementById(i + '-' + j + this.doc_data_new[0].meta_family[i].documents[j]['doc_name'] + 'mem').checked;
                            if (checked1 == true) {
                                this.doc_data_new[0].meta_family[i].documents[j].value = 1;
                                // this.doc_data_new[0].meta_family[i].color = 'green'
                                color_count++;
                                counter3++;
                            } else if (checked1 == false) {
                                this.doc_data_new[0].meta_family[i].documents[j].value = 0;

                            }
                        }



                    }
                    if(typeof document.getElementById(i + '-' + 0 + this.doc_data_new[0].meta_family[i].documents[0]['doc_name'] + 'mem')!='undefined' && document.getElementById(i + '-' + 0 + this.doc_data_new[0].meta_family[i].documents[0]['doc_name'] + 'mem')!=null) {

                        member_count++;
                    }

                }
                // alert(this.doc_data_new[0].member_doc_tags.length * this.doc_data_new[0].member_doc_tags[0].documents.length);
                if(this.showdoc=='primary'){
                    remark_id=this.row.id;
                }
                else{
                    if(this.doc_data_new[0].meta_family[this.showdoc].id==undefined){

                        remark_id=this.row.id+"-"+Math.floor(Math.random() * 1000);
                        this.doc_data_new[0].meta_family[this.showdoc].id=remark_id;
                        // alert(this.doc_data_new[0].meta_family[this.showdoc].id);
                    }
                    else {
                        remark_id = this.doc_data_new[0].meta_family[this.showdoc].id;
                    }
                }

                let form = new FormData();
                form.set("id",this.row.id)
                form.set("doc",JSON.stringify(return_arr))
                form.set("color",this.docs.color)
                form.set("remark",this.remark)
                form.set("remark_id",remark_id)
                form.set("remark_type",this.remark_type?this.remark_type:'remark')
                form.set("member_doc_tags",JSON.stringify(this.doc_data_new[0].member_doc_tags))
                form.set("member_family",JSON.stringify(this.doc_data_new[0].meta_family))
                form.set("source",'dtmodules')
                axios.post('/api/webservices/member_docs',form)
                    .then(response=> {
                        this.docs=response.data;
                        this.remark='';
                        this.remark_type='';

                        if(loc=='past'){
                            this.show_modal2=false;
                        }
                        else if(loc=='remark'){

                        }
                        else{
                            this.show_modal=false;
                        }


                    });

            },
            send_mail(){
                this.loading2=true;
                let params = new FormData();

                axios.get('/api/webservices/send_customer_mail', {
                    params: {
                        BookingID: this.row.id,
                    }
                })
                    .then(response => {
                        this.loading2=false;
                        this.$eventHub.$emit('create-success')
                        console.log(response)

                    })
                    .catch(error => {
                        this.loading2=false;
                        alert("Error while sending Mail");

                    })
            },
            request_doc_mail(){
                this.loading2=true;

                var return_arr=[];
                var checked ='';
                var remark_id ='';

                var counter1=this.docs.documents.length;
                var counter2=0;
                var counter3=0;

                for(var r=0;r<this.docs.documents.length;r++){

                    checked = document.getElementById(this.docs.documents[r]['doc_name']).checked;
                    if(checked==true){
                        this.docs.documents[r]['value']=1;
                        counter2++;
                        counter3++;
                    }
                    else if(checked==false){
                        this.docs.documents[r]['value']=0;

                    }
                    return_arr.push(this.docs.documents[r]);
                    checked ='';
                }
                // console.log(return_arr);
                let form = new FormData();
                // let remark= this.docs.remark;
                //
                // if(remark.length>0){
                //     remark= this.docs.remark[this.docs.remark.length-1].type=="remark"?this.docs.remark[this.docs.remark.length-1].remark:''
                // }
                // else{
                //     remark='';
                // }

                if(this.showdoc=='primary'){
                    remark_id=this.row.id;
                }
                else{
                    if(this.doc_data_new[0].meta_family[this.showdoc].id==undefined){

                        remark_id=this.row.id+"-"+Math.floor(Math.random() * 1000);
                        this.doc_data_new[0].meta_family[this.showdoc].id=remark_id;
                        // alert(this.doc_data_new[0].meta_family[this.showdoc].id);
                    }
                    else {
                        remark_id = this.doc_data_new[0].meta_family[this.showdoc].id;
                    }
                }

                form.set("book_id",this.row.id)
                form.set("source",'4')
                form.set("subject",'')
                form.set("member_doc_tags",JSON.stringify(this.doc_data_new[0].member_doc_tags))
                form.set("member_family",JSON.stringify(this.doc_data_new[0].meta_family))
                form.set("content",'')
                form.set("save_remark",false)
                axios.post('/api/webservices/request_doc_group',form)
                    .then(response => {

                        if(response.data=='no_doc'){
                            this.loading2=false;
                            alert('No Documents Available');
                        }
                        else if(response.data=='success'){
                            let form = new FormData();
                            this.remark = '';
                            this.remark_type = "mail";
                            form.set("id",this.row.id)
                            form.set("doc",JSON.stringify(return_arr))
                            form.set("color",this.docs.color)
                            form.set("remark_id",remark_id)
                            form.set("remark",this.remark)
                            form.set("remark_type",this.remark_type?this.remark_type:'remark')
                            form.set("member_family",JSON.stringify(this.doc_data_new[0].meta_family))
                            form.set("source",'dtmodules')
                            axios.post('/api/webservices/member_docs',form)
                                .then(response=> {
                                    this.docs=response.data;

                                    this.remark='';
                                    this.remark_type='';

                                    this.loading2=false;
                                    this.$eventHub.$emit('update-success');
                                    this.show_modal=false;
                                });
                        }
                        else if(response.data=='no_pending_doc'){
                            this.loading2=false;
                            alert('No Pending Documents');
                        }

                    })

            },
            fetch_form(id){
                axios.get('/api/webservices/change_form_status/' +id+'/fetch2')
                    .then(response => {
                        if(response.data.form_status==1){
                            alert('The form is currently being updated by the traveller.');
                            return false;
                        }
                        if(response.data.status!="4"){
                            axios.get('/api/webservices/change_form_status/' + id+'/1')
                        }


                        this.form_show_model=_.cloneDeep(true);
                        this.form_data=_.cloneDeep(response.data);
                        this.form_data.airport_hub=this.row.airport_hub;

                        this.form_data.travel_date=this.row.travel_date;
                        this.form_data.travel_hubs=response.data.travel_hub;
                        this.form_data.html_qna=JSON.parse(this.form_data.html_qna);

                        console.log("memdata",typeof this.form_data)
                        console.log("this.form_datamem",this.form_data.member_data)
                        if(this.form_data.member_data =="" ||this.form_data.member_data ==null ){

                            var arry = [];
                            this.form_data.member_data = _.cloneDeep(arry)

                            var allow_mem = _.cloneDeep(this.form_data.member_allowed);
                            // alert(allow_mem);
                            if ( allow_mem > 0) {

                                if (this.form_data.member_allowed > 0) {
                                    allow_mem--;
                                }
                            }
                            console.log("allow_mem",allow_mem);


                            if (allow_mem > 0) {
                                console.log(allow_mem);
                                for (var i = 0; i < allow_mem; i++) {

                                    this.form_data.member_data.push({'gender':'','name':'','phone':'','email':'','dob':'','home_town':'','paid':true ,'relation1':{'relation':'','relation_proof':''},'relation':'','associate_to_parent':false,'cat':{'type':'','label':''},'relation_cat':{'label':''}})
                                }

                            }

                        }
                        else if(JSON.parse(this.form_data.member_data).length < 1 ) {


                            var arry = [];
                            this.form_data.member_data = _.cloneDeep(arry)

                            var allow_mem = _.cloneDeep(this.form_data.member_allowed);
                            // alert(allow_mem);
                            if ( allow_mem > 0) {

                                if (this.form_data.member_allowed > 0) {
                                    allow_mem--;
                                }
                            }
                            console.log("allow_mem",allow_mem);


                            if (allow_mem > 0) {
                                console.log(allow_mem);
                                for (var i = 0; i < allow_mem; i++) {

                                    this.form_data.member_data.push({
                                        'gender': '',
                                        'name': '',
                                        'phone': '',
                                        'email': '',
                                        'dob': '',
                                        'home_town': '',
                                        'paid': true,
                                        'relation': '',
                                        'associate_to_parent': false,
                                        'cat': {'type': '', 'label': ''},
                                        'relation_cat': {'label': ''}
                                    })
                                }

                            }


                        }
                        else{
                            this.form_data.member_data=JSON.parse( this.form_data.member_data);
                        }


                        // checking self paid members
                        if(typeof this.form_data.member_name =="string"  ){


                            const Obj2 =  this.form_data.member_name.replace(/""/g, '')



                            this.form_data.member_name=JSON.parse(Obj2);


                        }
                        console.log("member_name",this.form_data.member_name)
                        console.log("typeof",  this.form_data.member_name.length)

                       if(this.form_data.member_name.length < 1){

                           this.form_data.member_name=_.cloneDeep([])


                           console.log("member_name 1",JSON.parse(this.form_data.member_name))

                        }
                        else{
                            console.log("dssf",JSON.parse(this.form_data.member_name))
                            this.form_data.member_name =_.cloneDeep(JSON.parse(this.form_data.member_name)) ;
                        }






                    })
            },
            // fetch_form_mamber(id){
            //     axios.get('/api/webservices/change_form_status/' +id+'/fetch2')
            //         .then(response => {
            //
            //             if(response.data.status == "4"){
            //                 alert('Already completed');
            //
            //                 return false;
            //
            //             }
            //             if(response.data.form_status==1){
            //                 alert('The form is currently being updated by the traveller.');
            //                 return false;
            //             }
            //             if(response.data.status!="4"){
            //                 axios.get('/api/webservices/change_form_status/' + id+'/1')
            //             }
            //
            //             if(response.data.status!="4"){
            //
            //                 this.form_data=_.cloneDeep(response.data);
            //                 this.form_data.airport_hub=this.row.airport_hub;
            //                 this.form_data.travel_date=this.row.travel_date;
            //                 this.form_data.travel_hubs=response.data.travel_hub;
            //                 // this.form_data.form_step = response.data.form_step;
            //                 // console.log("form_step",this.form_data.form_step)
            //
            //
            //
            //
            //                 this.form_data.html_qna=JSON.parse(this.form_data.html_qna);
            //                 this.$swal({
            //                     title: 'have you verify all document?',
            //                     text: '',
            //                     type: 'question',
            //                     showCancelButton: true,
            //                     cancelButtonText: "No",
            //                     cancelButtonColor: 'gray',
            //                     confirmButtonClass:'f-22',
            //                     confirmButtonText:"yes",
            //                     confirmButtonColor: 'blue',
            //                     focusCancel: true,
            //                     reverseButtons: true,
            //                     allowOutsideClick:false,
            //                     showCloseButton:true,
            //                     closeButtonAriaLabel:'Close',
            //                     closeButtonColor: 'blue',
            //                 })
            //                     .then(result => {
            //                         // console.log(result);
            //                         if (result.value) {
            //                             console.log("res",result.value)
            //                             axios.get('/api/webservices/change_form_status/' + id+'/0')
            //
            //
            //                             this.submit_traveller_form(4);
            //
            //                         }else{
            //                             axios.get('/api/webservices/change_form_status/' + id+'/0')
            //
            //                         }
            //
            //
            //                     })
            //             }
            //
            //
            //         })
            //
            // },
            //
            // fetch_form_MAC(id){
            //     axios.get('/api/webservices/change_form_status/' +id+'/fetch2')
            //         .then(response => {
            //
            //             if(response.data.status =="4"){
            //                 alert('Already completed');
            //
            //                 return false;
            //
            //             }
            //             if(response.data.form_status==1){
            //                 alert('The form is currently being updated by the traveller.');
            //                 return false;
            //             }
            //             if(response.data.status!="4"){
            //                 axios.get('/api/webservices/change_form_status/' + id+'/1')
            //             }
            //
            //             if(response.data.status!="4"){
            //
            //                 this.form_data=_.cloneDeep(response.data);
            //                 this.form_data.airport_hub=this.row.airport_hub;
            //                 this.form_data.travel_date=this.row.travel_date;
            //                 this.form_data.travel_hubs=response.data.travel_hub;
            //
            //                 // this.form_data.form_step = response.data.form_step;
            //                 // console.log("form_step",this.form_data.form_step)
            //
            //
            //
            //
            //                 this.form_data.html_qna=JSON.parse(this.form_data.html_qna);
            //                 this.$swal({
            //                     title: 'have you verify all document?',
            //                     text: '',
            //                     type: 'question',
            //                     showCancelButton: true,
            //                     cancelButtonText: "No",
            //                     cancelButtonColor: 'gray',
            //                     confirmButtonClass:'f-22',
            //                     confirmButtonText:"yes",
            //                     confirmButtonColor: 'blue',
            //                     focusCancel: true,
            //                     reverseButtons: true,
            //                     allowOutsideClick:false,
            //                     showCloseButton:true,
            //                     closeButtonAriaLabel:'Close',
            //                     closeButtonColor: 'blue',
            //                 })
            //                     .then(result => {
            //                         // console.log(result);
            //                         if (result.value) {
            //                             console.log("res",result.value)
            //                             axios.get('/api/webservices/change_form_status/' + id+'/0')
            //
            //
            //                             this.submit_traveller_form(4);
            //                             this.form_data.status = 4;
            //
            //                         }else{
            //                             axios.get('/api/webservices/change_form_status/' + id+'/0')
            //
            //                         }
            //
            //
            //                     })
            //             }
            //
            //
            //         })
            // },
            close_form(id){
                axios.get('/api/webservices/change_form_status/' + id+'/0')
                this.$eventHub.$emit('update-success');
            },
            check_form_status(){

                if(this.form_show_model && this.form_data.status!=4){




                    axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/fetch')
                        .then(response => {
                            if(response.data.form_status==0){
                                this.form_show_model=false


                                this.loading2=true;

                                let form = new FormData();
                                form.set("form_record_html",JSON.stringify(this.form_data.html_qna) );


                                if(this.form_data.member_data==='' || _.isEmpty(this.form_data.member_data)
                                ){
                                    form.set("form_record_members",'' );
                                }
                                else if(this.form_data.member_data[0].name==''){
                                    form.set("form_record_members",'' );
                                }
                                else{
                                    form.set("form_record_members",this.form_data.member_data );
                                }

                                form.set("group_id",this.form_data.group_id );
                                form.set("booking_id",this.form_data.booking_id );
                                form.set("form_record_id",this.form_data.id );
                                form.set("form_id",this.form_data.form_id );
                                form.set("status",this.form_data.status );
                                form.set("traveller_id",this.$route.params.id );
                                form.set("long_id",this.form_data.long_id );
                                form.set("name",this.form_data.name );
                                form.set("member_name",this.form_data.member_name);

                                // alert(this.form_data.long_id.search("FEM"));


                                axios.post('/api/v1/traveller_form_member_partial', form)

                                    .then(response => {

                                        alert('Session Expired.Please Try Again');
                                        this.loading2=false;
                                    })



                            }




                        })
                }

            },


        },
        filters:{
            moment: function (value) {
                if (value) {
                    return moment.unix(value).format("MM-DD-YYYY / h:mm a")
                }
            },

        },
        components: {
            QrcodeVue,FormComponent}
    }
</script>


<style scoped>

    .fa .fa-database{
        background-color: transparent;
        border: 1px solid transparent;
    }
    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .scrollable-table {
        max-height: 500px; /* Adjust the maximum height as needed */
        max-width: 100%; /* Ensure the table doesn't exceed the container's width */
        overflow: auto; /* Create scrollbars when necessary */
    }
        /* Add margin or padding to adjust the spacing between h2 and h4 */
    .info-container div {
        margin-right: 20px; /* Adjust as needed */
        text-align: center; /* Optional: Centers the content horizontally */
    }
    
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Style the modal content */
    .date-modal-content {
        background-color: white;
        padding: 20px;
        width: 40%;
        height: 60%;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        position: relative; /* Needed for positioning the close button */
    }
     /* Style the close button */
    .update-button {
        position: absolute;
        bottom: 10px; 
        right: 80px; 
        background-color: rgb(8, 138, 8);
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;

    }

    .update-button:hover {
        background-color: #3dd32f;
    }

    /* Style the close button */
    .close-button {
        position: absolute;
        bottom: 10px; 
        right: 10px; 
        background-color: #f44336;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;

    }

    .close-button:hover {
        background-color: #d32f2f;
    }
    .navme{
        width: 25%;
        text-align: center;
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
    .active{
        color:black !important;
    }
    .disabled-row{
        opacity: 0.4;
        pointer-events: none;
    }
    .content_div{

        padding: 15px !important;
        border-radius: 5px !important;
        margin-top: 20px;
    }
    .content_row{
        margin-top: 10px;
        margin-bottom: 5px;
    }
    label{
        color: black;
    }
    .file_hidden{    padding: 5px 35px 5px 35px;
        background: black;
        display: table;
        color: #fff;
        border-radius: 3px;
        width: 100%;
        font-size: 12px;}
    .input_field_design2{
        border:1px solid #00000038;
    }
    .fields{
        border: none;
        background: #ecf0f5 ;
        border-radius: 5px;
        margin-bottom:5px;
    }

    .backGround{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    /*loader.......*/
    .Load {
        background-color: #212121db;
        height: 100vh;
        margin: 0;
        padding: 0;
        position: absolute;
        width: 100%;
        z-index: 999;
    }
    .form_pop  input[type=text]{
        height: 30px !important;
    }
    .form_pop   input[type=date]{
        height: 30px !important;
    }
    .total_docs {
        margin: 1px;
        padding: 1px;
    }
</style>
