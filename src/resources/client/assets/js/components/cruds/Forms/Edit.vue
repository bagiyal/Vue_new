<template>
    <section class="content-wrapper"  style="margin-left: 5% !important;min-height: 960px;margin-top:3rem;">
        <section class="content-header" style="display:flex;">
            <task-maker :mode="'full'"></task-maker>
            <h1>Form Edit <i title="Form Preview" @click="preview=true" aria-hidden="true" class="fa fa-eye  "></i></h1>
            <span ref="autoClickButton" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" style="font-size: 20px;margin-left:2rem;" @click="lanCode=[]" >Add Language</span>
        </section>
        <div class="modal fade " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"  aria-hidden="false">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Select languages for Form</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" style="display:none">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <label>Add Language</label><br>
                        <v-select
                            id="mySelect"
                            @input="dataFunc()"
                            v-model="item.languages"
                            :clearable="false"
                            name="name"
                            class="hidetag bg-white"
                            label="name"
                            :options="languageSelect"

                            multiple

                        />
                        <label>Selected Languages</label><br>
                        <div class="row" style="padding:1rem">
                            <div class=""  v-for="(data,ind) in item.languages" :key="ind" style="padding:0.5rem;margin-top:0.5rem; ">

                                 <span  style="font-size: 14px;background:black;color:#fff;padding:0.8rem;cursor: pointer">{{data.name}} <span v-if="data.code !== 'en'" style="font-size: 16px;margin-left: 0.5rem;cursor: pointer " @click="filterLang(ind)">&times;</span></span>
                             </div>

                        </div>

                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close" aria-hidden="true" @click="dataFunc()">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <!--        MODEL-->
        <div v-if="show_modal===true">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog " style="max-width: 1050px !important;">
                            <div class="modal-content">
                                <div class="modal-header border-0 border-dotted" style="background: rgb(236, 240, 245) none repeat scroll 0% 0% !important;border-top-left-radius: 10px;border-top-right-radius: 10px;">
                                    <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                        <div class="row">
                                            <div class="col-10">

                                            </div>
                                            <div class="col-2 text-right">
                                                <button v-if="custom_id==null" type="button" class="close  f-2-5" @click="show_modal=false,activeTab=0">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div class="modal-body" style="background: #ecf0f5 !important">
                                    <div class="container-fluid c-grey">
                                        <div class="row no-gutters">

                                            <div class="col-md-12"><h2 style="color:black;">There are {{item.languages.length}} Language Select for Question</h2></div>

                                            <div id="exTab2" class="col-md-12">
                                                <ul class="nav nav-tabs">

                                                    <li v-for="(data,ind) in item.languages" :class="activeTab==ind?'active':''">
                                                        <a  v-model="selectedLang" style="font-size:18px;color:black;">{{data.name}}</a>
                                                    </li>

                                                </ul>

                                                <div class="tab-content " style="padding:2rem 1rem;">
                                                    <div >

                                                               <div >
                                                                   <div class="input-group row" >
                                                                       <div :id="custom_id==null?'block':'dNone'" class="col-md-4 border-right border-white ">




                                                                           <label for="field" style="color: black">Select Question Type</label><br>
                                                                           <div class="form-group">


                                                                               <div v-for="(itm,ind) in custom_fields" :key="ind">

                                                                                   <input type="radio"  label="type"  :value="itm" v-model="actualfield" @click="custom_field(itm)"><label for="html">&nbsp{{itm.type}}</label><br>



                                                                               </div>


                                                                               <!--                                                                        <v-select-->
                                                                               <!--                                                                            v-model="actualfield"-->
                                                                               <!--                                                                            name="select_field"-->
                                                                               <!--                                                                            label="type"-->
                                                                               <!--                                                                            :options="custom_fields"-->
                                                                               <!--                                                                            @input="custom_field"-->
                                                                               <!--                                                                            class="bg-white"-->

                                                                               <!--                                                                        />-->
                                                                           </div>
                                                                       </div>


                                                                       <!--Question Field-->
                                                                       <div :class="custom_id==null?'col-md-4 border-right border-white text-left':'col-md-8 border-right border-white text-left'"  v-if="ques_section===true">
                                                                             <span v-if="this.actualfield.questions!==undefined" >
                                                                                 <span style="font-size: 15px;color:black" v-if="activeTab>0"><b>Question in english:-</b></span>
                                                                           <span v-for="(value,key,ind) in this.actualfield.questions">
                                                                               <h5  style="font-size: 14px;" v-if=""> {{value.en}}</h5>
                                                                       </span>
                                                                       </span>
                                                                           <label for="field" style="color: black">Add Question</label><br>


                                                                           <textarea
                                                                               class="form-control bg-white "
                                                                               name="form_name"
                                                                               style="width: 100% !important;border: none;border-radius: 5px;height: 170px"
                                                                               placeholder="Question"
                                                                               cols="200" rows="3"
                                                                               v-model="actualfield.ques[activeTab]"> </textarea><br>

                                                                       </div>

                                                                       <div class="col-md-4" style="height:250px;overflow-y: scroll;" v-if="checkboxfield===true">
                                                                            <span v-if="this.actualfield.options!==undefined && activeTab>0" >


                                                                                      <span v-for="(value2,key2,indx) in this.actualfield.options[0]"  :key="indx">
                                                                                         <span  v-for="(value3,inde) in value2" style="font-size: 14px;">
                                                                                              <b style="font-size: 15px;color:black">Option {{inde + 1 }} :-</b> {{value3.key}} ,
                                                                                         </span><br>
                                                                                      </span>

                                                                            </span><br>

                                                                           <label for="field" style="color: black">Add Fields</label><br>
                                                                           <div v-for="(field,index) in actualfield.option[activeTab]" class="form-group">
                                                                               <input type="text"
                                                                                      class="form-control bg-white mt-2"
                                                                                      name="form_name"
                                                                                      style="  width: 90% !important;margin-bottom: 10px;border-radius: 5px;"
                                                                                      :placeholder="'Option '+ (index+1)"
                                                                                      v-model="field.key">
                                                                               <i style="float:right;font-size:20px;margin-top: 5px;" class="fa fa-trash f-2-0" title="Delete" @click="actualfield.option[activeTab].splice(index, 1)" aria-hidden="true"></i>
                                                                           </div>
                                                                           <div class="col-md-12 f-1-8"><i title="Add" aria-hidden="true"  @click="actualfield.option[activeTab].push({key:''})" class="fa fa-plus-circle f-2-5"></i> &nbsp;&nbsp;Add more</div>
                                                                       </div>
                                                                       <div class="col-md-4" style="height:250px;overflow-y: scroll;" v-if="drop_down===true">
                                                                            <span v-if="this.actualfield.options!==undefined && activeTab>0" >


                                                                                      <span v-for="(value2,key2,indx) in this.actualfield.options[0]"  :key="indx">

                                                                                         <span  v-for="(value3,inde) in value2" style="font-size: 14px;">
                                                                                          <b style="font-size: 15px;color:black">Option {{inde + 1 }} :-</b> {{value3.key}} ,
                                                                                         </span><br>
                                                                                      </span>

                                                                            </span><br>

                                                                           <label for="field" style="color: black">Add Fields</label><br>
                                                                           <div v-for="(field,index) in actualfield.option[activeTab]" class="form-group">
                                                                               <input type="text"
                                                                                      class="form-control bg-white mt-2"
                                                                                      name="form_name"
                                                                                      style="  width: 90% !important;margin-bottom: 10px;border-radius: 5px;"
                                                                                      :placeholder="'Option '+ (index+1)"
                                                                                      v-model="field.key">
                                                                               <i style="float:right;font-size:20px;margin-top: 5px;" class="fa fa-trash f-2-0" title="Delete" @click="actualfield.option[activeTab].splice(index, 1)" aria-hidden="true"></i>
                                                                           </div>
                                                                           <div class="col-md-12 f-1-8"><i title="Add" aria-hidden="true"  @click="actualfield.option[activeTab].push({key:''})" class="fa fa-plus-circle f-2-5"></i> &nbsp;&nbsp;Add more</div>
                                                                       </div>
                                                                       <div class="col-md-4" style="height:250px;overflow-y: scroll;" v-if="type_of_radio===true">
                                                                            <span v-if="this.actualfield.options!==undefined && activeTab>0" >


                                                                                      <span v-for="(value2,key2,indx) in this.actualfield.options[0]"  :key="indx">
                                                                                         <span  v-for="(value3,inde) in value2" style="font-size: 14px;">
                                                                                            <b style="font-size: 15px;color:black">Option {{inde + 1 }} :-</b> {{value3.key}} ,
                                                                                         </span><br>
                                                                                      </span>

                                                                            </span><br>
                                                                           <label for="field" style="color: black">Add Radio fields</label><br>
                                                                           <div class="form-group">
                                                                               <div v-for="(field,index) in actualfield.option[activeTab]" class="form-group">
                                                                                   <input type="text"
                                                                                          class="form-control bg-white mt-2"
                                                                                          name="form_name"
                                                                                          style="  width: 90% !important;margin-bottom: 10px;border-radius: 5px;"
                                                                                          :placeholder="'Option '+ (index+1)"
                                                                                          v-model="field.key">
                                                                                   <i style="float:right;font-size:20px;margin-top: 5px;" class="fa fa-trash f-2-0" title="Delete" @click="actualfield.option[activeTab].splice(index, 1)" aria-hidden="true"></i>


                                                                               </div>


                                                                               <div class="col-md-12 f-1-8"><i title="Add" aria-hidden="true"  @click="actualfield.option[activeTab].push({key:''})" class="fa fa-plus-circle f-2-5"></i>&nbsp;&nbsp;Add more</div>

                                                                           </div>
                                                                       </div>
                                                                       <div class="col-md-4" v-if="type_of_dropdown===true">
                                                                           <label for="field" style="color: black">Add Dropdown fields</label><br>
                                                                           <div v-for="field in actualfield.option" class="form-group">

                                                                               <input type="text"
                                                                                      class="form-control bg-white mt-2"
                                                                                      name="form_name"
                                                                                      style="  width: 100% !important;margin-bottom: 10px;border-radius: 5px;"
                                                                                      placeholder="Option"
                                                                                      v-model="field.key">
                                                                           </div>
                                                                           <div class="col-md-12 f-1-8"><i title="Add" aria-hidden="true"  @click="actualfield.option.push({key:''})" class="fa fa-plus-circle f-2-5"></i>&nbsp;&nbsp;Add more</div>


                                                                       </div>


                                                                   </div >
                                                               </div>



                                                    </div>
<!--                                                    <div class="tab-pane" id="78">-->
<!--                                                        <h3>Notice the gap between the content and tab after applying a background color</h3>-->
<!--                                                    </div>-->
<!--                                                    <div class="tab-pane" id="66">-->
<!--                                                        <h3>add clearfix to tab-content (see the css)</h3>-->
<!--                                                    </div>-->
                                                </div>
                                            </div>

                                            <hr>






                                            <!--                                            <div class="col-md-12" v-if="type_of_radio_choices===true" v-html="show_radio_choices">-->

                                            <!--                                            </div>-->

                                        </div>

                                        <div class="row mt-3">
                                            <div class="col text-right" >
                                                <a v-if="numCount<item.languages.length-1" class="button-css bg-primary" style="color: white;margin: 1rem;" value="done" @click="nextTab()">Next</a>

                                                <a v-if="numCount == item.languages.length-1" class="button-css bg-success" style="color: white;" value="Save"  @click="save_field" >Save</a>
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
        <div v-if="preview===true">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper backGround">
                        <div class="modal-dialog " style="max-width: 65% !important">
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

                                    <FormComponent :languages="item.languages" :hub_data_list="[]" :banner="item.banner" mode="preview" :form_data="item" form_filler="handler" tabsVisibility="{'docs':false,'passport':false}" states="[]" />



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box box_design">
                            <div class="box-header ">

                            </div>



                            <bootstrap-alert />

                            <div class="box-body">
                                <div class="form-group col-md-12">
                                    <div class="row">

                                        <div class="col-md-5 col-sm-4">
                                            <label for="form_name">Form name</label>
                                            <input type="text"
                                                   class="form-control bg-white"
                                                   name="form_name"
                                                   style="border: 1px solid rgb(180, 180, 180);border-radius: 3px;width:100% !important;"
                                                   placeholder="Enter Form name"
                                                   :value="item.form_name"
                                                   @input="updateForm_name"><img src="./../dashboard_resources/edit.png" style="top:50%" class="pa-img hw-i"></div>

                                        <div class="col-md-5 col-sm-4">
                                            <label for="select_fields">Predefined Field</label>
                                            <v-select :clearable="false"
                                                      name="addlocations"
                                                      label="type"
                                                      @input="defined_field"
                                                      v-model="item.form_html"
                                                      :options="selectformtag"
                                                      multiple
                                                      class="hidetag bg-white"
                                            />
                                        </div>

                                        <div class="col-md-2 col-sm-3">
                                            <label for="message">Custom Field</label><br>
                                            <a  class="fa fa-plus text-dark bg-white f-2-5 cursor" style="padding:5px;"  @click="show_modal=true,custom_id=null,ques_section=false,checkboxfield=false,drop_down=false,type_of_radio=false,actualfield.options=[],actualfield.questions=[],actualfield.ques=[],actualfield.option=[[]],numCount = 0,activeTab = 0,actualfield={}"></a>

                                        </div>




                                    </div>
                                    <br><br>
                                    <div  class="container-fluid"  :style="{ 'background-image': 'url('+background_url+')'}" style="background-repeat: no-repeat;background-size: 100% 100%;padding: 20px;background-size: cover;">
                                        <i style="float: right;color: grey;font-size: 18px;" title="Delete Banner" alt="Delete Banner" v-if="item.banner" @click="deletefetureimage" class="fa fa-trash"> </i>
                                        <div class="col-md-12 form-group" style="">
       <label>Select language in which you want to see form </label><br>
                        <v-select
            id="mySelect"
            v-model="SelectedLangForForm"
            :clearable="false"
            name="name"
            class="bg-white"
            label="name"
            :options="item.languages"
            style="width:30%;margin:1rem 0rem;"



        />


                                            <div v-if="item.banner" class="container-fluid" :style="{ 'background-image': 'url('+item.banner+')'}" style=" background-repeat: no-repeat;background-size: 100% 100%; height: 200px;">

                                            </div>
                                            <div v-else class="col-md-12">
                                                <div class="col-md-4 offset-4">

                                                    <div class="row mt-3">

                                                        <div class="col-md-12 col-sm-12 text-center f-1-6" v-if="banner_link==''">
                                                            <b class="f-1-2 text-red" style="margin-bottom: 0px;">*Banner Size : 1160*225</b>
                                                            <label class="file_hidden text-white">
                                                                Click To Add Custom Banner
                                                                <input type="file" size="20" style="display:none !important;" @change="updatemeta_banner($event,'form_banner',index)">
                                                            </label>
                                                        </div>

                                                    </div>



                                                </div>
                                            </div>

                                            <div class="col-md-12 form-group  mt-3" style="">
<!--                                                {{item.header}}{{item.footer}}-->
<!--                                             <label for="address" style="text-align: left;" >Header Text</label>-->
<!--                                                <vue-ckeditor-->
<!--                                                    v-model="item.header"-->
<!--                                                />-->
                                                <label for="address" style="text-align: left;" >Create Header Text in Selected Languages</label>
                                                <ul class="nav nav-tabs">

                                                    <li v-for="(data,ind) in item.languages" :class="activeTab==ind?'active':''">
                                                        <a  v-model="selectedLang" style="font-size:18px;color:black;">{{data.name}}</a>
                                                    </li>

                                                </ul>

                                                <!--                        <textarea class="field_class" v-model="item.header" cols="100" rows="3" style="width: 100%;font-size: 16px;"></textarea>-->



                                                <vue-ckeditor
                                                    :config="config"
                                                    v-model="headerData"

                                                />
                                                <div class="col text-right" >
                                                    <a  v-if="numCount<item.languages.length-1" class="button-css bg-primary" style="color: white;margin: 1rem;"  @click="nextHeader()">Next</a>


                                                    <a  v-if="numCount == item.languages.length-1" class="button-css bg-success" style="color: white;margin: 1rem;"  @click="nextHeader()" >Done</a>


                                                </div>

                                                <div  v-for="(item,index) in item.header" :key="index">


                                                    <div v-for="(value,key,indx) in item"   v-if="key ===  SelectedLangForForm.code">

                                                        <label for="address" style="text-align: left;" >Header Text</label>
                                                        <div :style="headLen !== langlength?'background-color:rgba(238, 97, 97, 0.98) !important;padding: 15px !important;border-radius: 5px !important;margin-top: 20px;':'padding: 15px !important;border-radius: 5px !important;margin-top: 20px;background-color: #fff !important;'">
                                                            <h3 v-html="value"></h3>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                        <div   v-for="(tag,index) in item.form_html" v-if=
                            "tag.key==='gender' || tag.key==='dob' ||  tag.key==='pan'||  tag.key==='address'||  tag.key==='city'||  tag.key==='state'||  tag.key==='country'||  tag.key==='pincode'||  tag.key==='nominee'||  tag.key==='disease' "
                             :class="(tag.key==='gender' || tag.key==='dob' ||  tag.key==='pan'||  tag.key==='address'||  tag.key==='city'||  tag.key==='state'||  tag.key==='country'||  tag.key==='pincode' ||  tag.key==='nominee'||  tag.key==='disease'  )?'col-md-6':'col-md-12'"
                        >
                            <!--                                 {type:'DOB',code:' -->
                            <div class="col-md-12 bg-white content_div " v-if="tag.key==='dob'" >

<!--                                <label for="passport_image">जन्म की तारीख</label>-->
<!--                                <label for="passport_image">જન્મ તારીખ</label>-->
                                <label for="passport_image"  v-if="'en' ===  SelectedLangForForm.code">Date Of Birth</label>

                                                    <label for="passport_image" v-if="'hi' ===  SelectedLangForForm.code" >{{hin.DateOfBirth}}</label>
                                                    <label for="passport_image" v-if="'ta' ===  SelectedLangForForm.code" >{{ta.DateOfBirth}}</label>
                                                    <label for="passport_image" v-if="'te' ===  SelectedLangForForm.code" >{{te.DateOfBirth}}</label>
                                                    <label for="passport_image" v-if="'gu' ===  SelectedLangForForm.code" >{{gu.DateOfBirth}}</label>
                                                    <label for="passport_image" v-if="'kn' ===  SelectedLangForForm.code" >{{kn .DateOfBirth}}</label>
                                                    <label for="passport_image" v-if="'mr' ===  SelectedLangForForm.code">{{mr.DateOfBirth}}</label>

                                <label v-if="tag.require" class="text-danger">*</label><br>

                                <div class="row" style="margin-top: 10px;margin-bottom: 5px;">
                                    <div class="col-md-8 no_event" >
                                        <input style="pointer-events:none" type="date" class="form-control input_field_design" v-model="tag.value" id="dob" name="DOB" placeholder="Enter DOB" />
                                    </div>



                                </div>




                            </div>
                            <div v-else-if="tag.key==='gender'" class="col-md-12 bg-white content_div" >
                                <label for="foodpref"  v-if="'en' ===  SelectedLangForForm.code">Gender</label>

                                                    <label for="foodpref" v-if="'hi' ===  SelectedLangForForm.code" >{{hin.Gender}}</label>
                                                    <label for="foodpref" v-if="'ta' ===  SelectedLangForForm.code" >{{ta.Gender}}</label>
                                                    <label for="foodpref" v-if="'te' ===  SelectedLangForForm.code" >{{te.Gender}}</label>
                                                    <label for="foodpref" v-if="'gu' ===  SelectedLangForForm.code" >{{gu.Gender}}</label>
                                                    <label for="foodpref" v-if="'kn' ===  SelectedLangForForm.code" >{{kn.Gender}}</label>
                                                    <label for="foodpref"  v-if="'mr' ===  SelectedLangForForm.code">{{mr.Gender}}</label>

                                <label v-if="tag.require" class="text-danger">*</label><br>

                                                <div class="row" v-for="op in tag.options">
                                                    <div class="col-md-12" v-for="(value2,key2,indx) in op" style="padding-bottom: 2px;" >
                                        <div class="row">
                                                            <div  v-if="SelectedLangForForm.code==key2" class="col-md-4" v-for="(value3,key,inde) in value2">

                                                                <label class="container_box" >
<!--                                                                    {{SelectedLangForForm.code}}-->
<!--                                                                    {{key2}}-->

              <span>
                {{value3.key}}
                                                    <input type="radio" v-model="tag.value" :value="op.key"   style="pointer-events:none" disabled>
                                                    <span class="checkmark_box" style="border-radius:50px;"></span>

              </span>
  <!--                                                        {{value2}}-->

                                                </label>
                                                            </div>



                                            </div>

                                                        <div>

                                        </div>
                                    </div>
                                                </div>

<!--                                                <label  class="container_box">{{op.key}}-->
<!--                                                    <input type="radio" v-model="tag.value" :value="op.key"   style="pointer-events:none" >-->
<!--                                                    <span class="checkmark_box" style="border-radius:50px;"></span>-->
<!--                                                </label>-->



                                </div>

                            <div class="col-md-12 bg-white content_div " v-else  >

                                <span v-for="(data,ind) in tag.questions" :key="ind">
                                    <span  v-for="(value,key,indx) in data" :key="indx" v-if="key ===  SelectedLangForForm.code">

                                        <label for="schedule_date" >{{value}}</label>
                                <label v-if="tag.require" class="text-danger">*</label><br>
                                </span>
                                </span>
                                <div class="row" style="margin-top: 10px;margin-bottom: 5px;">
                                    <div class="col-md-8 no_event" >
                                        <input  type="text" class="form-control input_field_design" v-model="tag.value"  :id="tag.key" :name="tag.key" style="pointer-events:none"  placeholder="" >
                                    </div>


                                </div>

                            </div>

                        </div>


                        <draggable v-model="item.form_html" group="people" @start="drag=true" @end="drag=false">


                            <div   v-for="(tag,index) in item.form_html"

                                   :class="(

                                                     tag.key==='marriage_anni'
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




                                <!--                                 {type:'Food Prefrences',code:'-->
                                <div v-if="tag.key==='foodpref' && tag.custom==0"  class="col-md-12 bg-white all-scroll content_div" >
                                                        <label  for="foodpref"  v-if="'en' ===  SelectedLangForForm.code">Food Prefrences</label>

                                                        <label  for="foodpref" v-if="'hi' ===  SelectedLangForForm.code" >{{hin.FoodPrefrences}}</label>
                                                        <label  for="foodpref" v-if="'ta' ===  SelectedLangForForm.code" >{{ta.FoodPrefrences}}</label>
                                                        <label  for="foodpref" v-if="'te' ===  SelectedLangForForm.code" >{{te.FoodPrefrences}}</label>
                                                        <label  for="foodpref" v-if="'gu' ===  SelectedLangForForm.code" >{{gu.FoodPrefrences}}</label>
                                                        <label  for="foodpref" v-if="'kn' ===  SelectedLangForForm.code" >{{kn .FoodPrefrences}}</label>
                                                        <label  for="foodpref" v-if="'mr' ===  SelectedLangForForm.code">{{mr.FoodPrefrences}}</label>

                                                        <label v-if="tag.require" class="text-danger">*</label><br>

                                    <div class="row content_row">
                                        <div class="col-md-12 no_event">
                                            <div class="row" v-for="op in tag.option">
                                                <div class="col-md-12" v-for="(value2,key2,indx) in op" style="padding-bottom: 2px;" >

                                            <div class="row">
                                                        <div  v-if="SelectedLangForForm.code==key2" class="col-md-4" v-for="(value3,key,inde) in value2">

                                                            <label class="container_box" >
                                                                <!--                                                                    {{SelectedLangForForm.code}}-->
                                                                <!--                                                                    {{key2}}-->

                                                                <span>
                {{value3.key}}
                                                        <input type="radio" v-model="tag.value" :value="op.key"   style="pointer-events:none" >
                                                        <span class="checkmark_box" style="border-radius:50px;"></span>

              </span>
                                                                <!--                                                        {{value2}}-->

                                                    </label>
                                                        </div>



                                                </div>

                                                    <div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div class="row">
                                        <div class="col-md-2 offset-7" >
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                <!--                                 {type:'Marriage Anniversary',code:'-->
                                <div class="col-md-12 bg-white content_div all-scroll" v-if="tag.key==='marriage_anni'"  >


                                                        <label  for="schedule_date" v-if="'en' ===  SelectedLangForForm.code">Marriage Anniversary</label>

                                                        <label  for="schedule_date" v-if="'hi' ===  SelectedLangForForm.code" >{{hin.MarriageAnniversary}}</label>
                                                        <label  for="schedule_date" v-if="'ta' ===  SelectedLangForForm.code" >{{ta.MarriageAnniversary}}</label>
                                                        <label  for="schedule_date" v-if="'te' ===  SelectedLangForForm.code" >{{te.MarriageAnniversary}}</label>
                                                        <label  for="schedule_date" v-if="'gu' ===  SelectedLangForForm.code" >{{gu.MarriageAnniversary}}</label>
                                                        <label  for="schedule_date" v-if="'kn' ===  SelectedLangForForm.code" >{{kn .MarriageAnniversary}}</label>
                                                        <label  for="schedule_date" v-if="'mr' ===  SelectedLangForForm.code">{{mr.MarriageAnniversary}}</label>
                                    <label v-if="tag.require" class="text-danger">*</label><br>



                                    <div class="row" style="margin-top: 10px;margin-bottom: 5px;">
                                        <div class="col-md-5 no_event">
                                                                <input  style="pointer-events:none" type="date" class="form-control input_field_design" id="anniversary" v-model="tag.value"  name="anniversary" >
                                        </div>
                                        <div class="col-md-1 " >
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                <!--custom--------------------------------------------------------------->
                                <div>

                                </div>
                                <div  v-if="tag.key==='text' && tag.custom==1" v-for="(data,ind) in tag.questions" :key="ind" >
                                                        <div v-for="(value,key,indx) in data" v-if="key ===  SelectedLangForForm.code" class="col-md-12 bg-white all-scroll content_div"  :style="item.languages.length > tag.questions.length?'background-color:rgba(238, 97, 97, 0.98) !important': 'border:none'">
                                    <div>
                                       <label for="custom_filed">{{value}}</label>
                                       <label v-if="tag.require" class="text-danger">*</label>
                                       <i  title="Form Edit"  class="fa fa-pencil-square-o  button_style" @click="editForm_html(tag.custom_id,tag.type,show_modal=true)"></i>
                                   </div>
                                    <div class="row content_row">
                                        <div class="col-md-5 no_event">
                                            <input type="text" class="form-control input_field_design" v-model="tag.value"  placeholder="Enter Text"
                                            >
                                        </div>
                                        <div class="col-md-1 " >
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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


                                </div>

                                <div  v-if="tag.key==='date' && tag.custom==1"  v-for="(data,ind) in tag.questions" :key="ind"  >

                                                        <div  v-for="(value,key,indx) in data"  v-if="key ===  SelectedLangForForm.code"  class="col-md-12 bg-white all-scroll content_div"  :style="item.languages.length > tag.questions.length?'background-color:rgba(238, 97, 97, 0.98) !important': 'border:none'">
                                    <div>
                                        <label for="custom_filed">{{value}}</label>
                                        <label v-if="tag.require" class="text-danger">*</label>
                                        <i data-v-3a05c998="" title="Form Edit"  class="fa fa-pencil-square-o  button_style" @click="editForm_html(tag.custom_id,tag.type,show_modal=true)"></i>
                                    </div>


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
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                                <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                                <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                                <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                                <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                                <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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

                                <!--custom---------------------------------->

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
                                                <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                <div  v-if="tag.key==='checkbox' && tag.custom==1" v-for="(data,ind) in tag.questions" :key="ind" >

                                                        <div v-for="(value1,key1,indx) in data"  v-if="key1 ===  SelectedLangForForm.code" class="col-md-12 bg-white all-scroll content_div"  :style="item.languages.length > tag.questions.length?'background-color:rgba(238, 97, 97, 0.98) !important': 'border:none'" >
                                            <label for="custom_filed"  >{{value1}}</label><label v-if="tag.require" class="text-danger">*</label>
                                    <i data-v-3a05c998="" title="Form Edit"  class="fa fa-pencil-square-o  button_style" @click="editForm_html(tag.custom_id,tag.type,show_modal=true)"></i>

                                    <div class="row content_row">
                                        <div class="col-md-12 no_event">
                                            <div class="row" v-for="op in tag.options">
                                                <div class="col-md-12" v-for="(value2,key2,indx) in op" >

                                     <div class="row">
    <div class="col-md-4" v-for="(value3,key,inde) in value2">

        <label class="container_box"  >

                                                  <span v-if="item.languages[ind].code == key2">
                                                    {{value3.key}}

                                                    <input type="checkbox" v-model="tag.value" :value="op.key"   style="pointer-events:none" >
                                                    <span class="checkmark_box"></span>



                                                  </span>



            <!--                                                        {{value2}}-->

        </label>
    </div>



                                       </div>

                                                    <div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-2 offset-7" >
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                <!--                                {{drop-&#45;&#45;&#45;&#45;down}}-->

                                <div  v-if="tag.key==='dropdown' && tag.custom==1" v-for="(data,ind) in tag.questions" :key="ind" >

                                    <div v-for="(value1,key1,indx) in data"  v-if="key1 ===  SelectedLangForForm.code" class="col-md-12 bg-white all-scroll content_div"  :style="item.languages.length > tag.questions.length?'background-color:rgba(238, 97, 97, 0.98) !important': 'border:none'" >
                                        <label for="custom_filed"  >{{value1}}</label><label v-if="tag.require" class="text-danger">*</label>
                                        <i data-v-3a05c998="" title="Form Edit"  class="fa fa-pencil-square-o  button_style" @click="editForm_html(tag.custom_id,tag.type,show_modal=true)"></i>

                                        <div class="row content_row">
                                            <div class="col-md-12 no_event">


                                                <div class="row" v-for="op in tag.options" v-if="key1 ===  SelectedLangForForm.code" style="padding:0 2rem;" >
                                                    <div calss="col-md-6"   v-for="(value2,key2,indx) in op" v-if="item.languages[ind].code == key2" >


                                                        <v-select
                                                            id="dropDown"
                                                            v-model="tag.value"
                                                            name="key"
                                                            class=" bg-white"


                                                            label="key"
                                                            :options="value2"
                                                            style="width:300px"

                                                            multiple

                                                        />

                                                    </div>



<!--                                                    <div class="col-md-12" v-for="(value2,key2,indx) in op" >-->
<!--                                                    -->

<!--                                                        <div class="row">-->
<!--                                                            <div class="col-md-4" v-for="(value3,key,inde) in value2">-->

<!--                                                                <label class="container_box"  >-->

<!--                                                  <span v-if="item.languages[ind].code == key2">-->


<!--                                                        <v-select-->
<!--                                                            id="dropDown"-->
<!--                                                            v-model="tag.value"-->
<!--                                                            :clearable="false"-->
<!--                                                            name="name"-->
<!--                                                            @input="dataFunc()"-->
<!--                                                            class="hidetag bg-white"-->
<!--                                                            label="name"-->
<!--                                                            :options="value3.key"-->

<!--                                                            multiple-->

<!--                                                        />-->

<!--&lt;!&ndash;                                                        <input type="checkbox" v-model="tag.value" :value="op.key"   style="pointer-events:none" >&ndash;&gt;-->
<!--                                                        <span class="checkmark_box"></span>-->



<!--                                                  </span>-->



<!--                                                                    &lt;!&ndash;                                                        {{value2}}&ndash;&gt;-->

<!--                                                                </label>-->
<!--                                                            </div>-->



<!--                                                        </div>-->

<!--                                                        <div>-->

<!--                                                        </div>-->
<!--                                                    </div>-->
                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-2 offset-7" >
                                                <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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


                                <div v-if="tag.key==='radio' && tag.custom==1" v-for="(data,ind) in tag.questions" :key="ind"   >
                                                        <div v-for="(value1,key1,indx) in data"  v-if="key1 ===  SelectedLangForForm.code" class="col-md-12 bg-white all-scroll content_div"  :style="item.languages.length > tag.questions.length?'background-color:rgba(238, 97, 97, 0.98) !important': 'border:none'" >

                                    <label for="radio">{{value1}}</label><label v-if="tag.require" class="text-danger">*</label>   <i  title="Form Edit"  class="fa fa-pencil-square-o  button_style" @click="editForm_html(tag.custom_id,tag.type,show_modal=true)"></i>

                                      <div class="row content_row">
    <div class="col-md-12 no_event">
        <div class="row">
            <div class="col-md-4" >
                <div class="row" v-for="op in tag.options">
                    <div class="col-md-12" v-for="(value2,key2,indx) in op" >

                        <div class="row">
                            <div class="col-md-4" v-for="(value3,key,inde) in value2">

                                <label class="container_box"  >

              <span v-if="item.languages[ind].code == key2">
                {{value3.key}}
                  <input type="radio" v-model="tag.value" :value="op.key"   style="pointer-events:none" >
                    <span class="checkmark_box" style="border-radius:50px;"></span>




              </span>



                                    <!--                                                        {{value2}}-->

                                </label>
                            </div>



                        </div>

                        <div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>



                                      </div>
                                     <div class="row">
    <div class="col-md-2 offset-7" >
        <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                <!--                                 {type:'textarea custom',code:'-->
                                <div v-if="tag.key==='textarea' && tag.custom==1"  v-for="(data,ind) in tag.questions" :key="ind"  >
                                                        <div v-for="(value,key,indx) in data"  v-if="key ===  SelectedLangForForm.code" class="col-md-12 bg-white all-scroll content_div"  :style="item.languages.length > tag.questions.length?'background-color:rgba(238, 97, 97, 0.98) !important': 'border:none'">

                                    <div >
                                        <label for="custom_filed">{{value}}</label>
                                        <label v-if="tag.require" class="text-danger">*</label>   <i  title="Form Edit"  class="fa fa-pencil-square-o  button_style" @click="editForm_html(tag.custom_id,tag.type,show_modal=true)"></i>
                                    </div>


                                    <textarea class="field_class" v-model="tag.value" cols="100" rows="3" style="pointer-events: none; width: 100%; font-size: 16px;background: #ecf0f5;"></textarea>
                                    <div class="row">
                                        <div class="col-md-2 offset-7" >
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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

                                            <label class="file_hidden text-white mt-3 f-1-4">
                                                <i class="fa fa-upload">&nbsp;&nbsp;First Page</i>
                                                <input type="file" @change="uploadfileformpass($event,'pass',index)" class="form-control no_event input_field_design2" id="passport_image" name="passport_image" style="display:none !important;"  placeholder="Passport Image">
                                            </label>


                                        </div>
                                        <div class="col-md-2 "  v-else><label for="passport">Passport File</label><br>

                                            <a :href="tag.value.url" target="_blank">File Uploaded</a>
                                        </div>
                                        <div class="col-md-2 " v-if="tag.value.url2===''" style="pointer-events:none"><label for="passport"></label>

                                            <label class="file_hidden text-white mt-3 f-1-4">
                                                <i class="fa fa-upload">&nbsp;&nbsp;Last Page</i>
                                                <input type="file" @change="uploadfileformpass($event,'pass',index)" class="form-control no_event input_field_design2" id="passport_image" name="passport_image" style="display:none !important;"  placeholder="Passport Image">
                                            </label>


                                        </div>
                                        <div class="col-md-2 "  v-else><label for="passport">Passport File</label><br>

                                            <a :href="tag.value.url2" target="_blank">File Uploaded</a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2 offset-7" >
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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
                                            <i style="float:right;font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="item.form_html.splice(index, 1)" aria-hidden="true"></i>
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


                        </draggable>

                         <div v-if="item.form_html.length<1">

    <h1 class="text-center">---Form Fields Area---</h1>


                                        </div>

                          <div class="col-md-12 form-group  mt-5" style="">
                              <label for="address" style="text-align: left;" >Create Footer Text in Selected Languages</label>
                              <ul class="nav nav-tabs">

                                  <li v-for="(data,ind) in item.languages" :class="activeTab==ind?'active':''">
                                      <a  v-model="selectedLang" style="font-size:18px;color:black;">{{data.name}}</a>
                                  </li>

                              </ul>


                              <vue-ckeditor
                                  :config="config"
                                  v-model="footerData"

                              />
                              <div class="col text-right" >
                                  <a  v-if="numCount<item.languages.length-1" class="button-css bg-primary" style="color: white;margin: 1rem;"  @click="nextFooter()">Next</a>


                                  <a v-if="numCount == item.languages.length-1" class="button-css bg-success" style="color: white;margin: 1rem;"  @click="nextFooter()" >Done</a>


                              </div>
                              <div  v-for="(item,index) in item.footer" :key="index">


                                  <div v-for="(value,key,indx) in item"   v-if="key ===  SelectedLangForForm.code">

                                      <label for="address" style="text-align: left;" >Footer Text</label>
                                      <div :style="footerLen !== langlength?'background-color:rgba(238, 97, 97, 0.98) !important;padding: 15px !important;border-radius: 5px !important;margin-top: 20px;':'padding: 15px !important;border-radius: 5px !important;margin-top: 20px;background-color: #fff !important;'">
                                          <h3 v-html="value"></h3>
                                      </div>

                                  </div>

                              </div>





                                    </div>



                             </div>
                            <div class="col-lg-12 text-left f-2 ml-n4 mt-5 text-muted">

                                        <label id="Edit">

                                            <input type="checkbox" v-model="item.add_member" :value="item.add_member" >
                                <span class="slider round"></span>

                                            Can Add Members
                            </label>


                        </div>

                             </div>


                                    <div class="box-footer" style="text-align: right;background-color: transparent;">

                                        <vue-button-spinner
                                            class="button-css"
                                            :isLoading="loading"
                                            :disabled="loading"
                                        >
                                            Save
                                        </vue-button-spinner>
                                    </div>
                        </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import uploadfile from '../../../mixins/uploadfile'
import draggable from 'vuedraggable'
import FormComponent from "../FormComponent";
    import hin from '../../../mixins/hin';
    import ta from '../../../mixins/ta';
    import te from '../../../mixins/te';
    import kn from '../../../mixins/kn';
    import gu from '../../../mixins/gu';
    import mr from '../../../mixins/mr';




export default {
        mixins:[hin,ta,te,gu,kn,mr],
    data() {

        return {
            SelectedLangForForm:{ "code": "en", "name": "English", "nativeName": "English" },
            lanCode:[],
            headLen:0,
            footerLen:0,
            langlength:0,
            checkValue:0,
            config: {
                format_tags: 'h3'
            },
            languageSelect:[],
            activeTab:0,
            numCount:0,
            select_tag:[],
            selectedLang:'',
            custom_id:null,
            AllOptions:[],
            selectformtag:[
                {type:'DOB',key:'dob',value:'',custom:0,require:1},
                {type:'Gender',key:'gender',value:'',custom:0,require:1,options:[{en:[{"key":"Male"},{"key":"Female"}]},{hi:[{"key":""},{"key":""}]},{ta:[{"key":""},{"key":""}]},{te:[{"key":""},{"key":""}]},{gu:[{"key":""},{"key":""}]},{kn:[{"key":""},{"key":""}]},{mr:[{"key":""},{"key":""}]}]},
                // {type:'Food Preferences',key:'foodpref',value:'',custom:0,require:0},

                {type:'Pan Card Number',key:'pan',value:'',custom:0,require:0,questions:[{ en: "Pan Card Number" }, { hi:"" }, { ta: "" },{te:""},{gu:""},{kn:""},{mr:""}]},
                {type:'Address',key:'address',value:'',custom:0,require:1,questions:[{ en: "Address" }, { hi: "" }, { ta: "" },{te:""},{gu:""},{kn:""},{mr:""}]},
                {type:'City',key:'city',value:'',custom:0,require:1,questions:[{ en: "City" }, { hi: "" }, { ta: "" },{te:""},{gu:""},{kn:""},{mr:""}]},
                     // for TC/SOTC
                {type:'State',key:'state',value:'',custom:0,require:1,questions:[{ en: "State" }, { hi: "" }, { ta: "" },{te:""},{gu:""},{kn:""},{mr:""}]},
                {type:'Country',key:'country',value:'',custom:0,require:1,questions:[{ en: "Country" }, { hi: "" }, { ta: "" },{te:""},{gu:""},{kn:""},{mr:""}]},
                {type:'Pincode',key:'pincode',value:'',custom:0,require:1,questions:[{ en: "Pincode" }, { hi:"" }, { ta: "" },{te:""},{gu:""},{kn:""},{mr:""}]},
                {type:'Marriage Anniversary',key:'marriage_anni',value:'',custom:0,require:0,questions:[{ en: "Marriage Anniversary" }, { hi: ""}, { ta: "" },{te:""},{gu:""},{kn:""},{mr:""}]},

                {type:'Nominee for Travel Insurance Policy',key:'nominee',value:'',custom:0,require:1,questions:[{ en: "Nominee for Travel Insurance Policy" }, { hi: "" }, { ta: "" },{te:""},{gu:""},{kn:""},{mr:""}]},
                {type:'Pre Existing Disease for Travel Insurance Policy',key:'disease',value:'',custom:0,require:1,questions:[{ en: "Pre Existing Disease for Travel Insurance Policy" }, { hi: "" }, { ta: "" },{te:""},{gu:""},{kn:""},{mr:""}]},

                // {type:'Passport Size Image',key:'pass_photo',value:'',custom:0,require:1},
                // {type:'Visa',key:'visa',value:'',custom:0,require:0},
                // {type:'Voucher',key:'vouc',value:'',custom:0,require:0},
                // {type:'Insurance',key:'insu',value:'',custom:0,require:0},
                // {type:'Other',key:'other',value:'',custom:0,require:0},
                // // {type:'Allergies',key:'allergy',value:'',custom:0,require:0},
                //{type:'Passport',key:'pass',value:{"exp_date":"","name_first":"","name_last":"","passportno":"","url":""},custom:0,require:0}
            ],
            actualfield:{},
            custom_fields:[
                    {key:'text',type:'Short Answer',value:'',custom:1,custom_id:'',ques:[],require:0,questions:[]},
                    {key:'date',type:'Date',value:'',custom:1,custom_id:'',ques:[],require:0,questions:[]},
                    {key:'checkbox',type:'Check Box',value:[],custom:1,custom_id:'',options:[],option:[[]],ques:[],questions:[],require:0},
                    // {key:'options',type:'Dropdown',value:[],custom:1,custom_id:'',option:[],ques:'',require:0},
                    {key:'radio',type:'Radio Button',value:'',custom:1,custom_id:'',options:[],option:[[]],ques:[],questions:[],require:0},
                    {key:'textarea',type:'Paragraph',value:'',custom:1,custom_id:'',ques:[],require:0,questions:[]},
                    {key:'dropdown',type:'Drop Down',value:[],custom:1,custom_id:'',options:[],option:[[]],ques:[],questions:[],require:0}



                    // {key:'file',type:'File Upload',value:'',custom:1,custom_id:'',ques:'',require:0},
                    // {key:'passport',type:'Passport Details',value:{"exp_date":"","name_first":"","name_last":"","passportno":"","url":""},custom:1,custom_id:'',ques:'',require:1}
                    ],

            show_modal:false,
            section_type:[],

            body_element_data:[],
            final_html:'',

            show_radio_choices:'',
            selectes_type:[],
            label_name:'',
            add_custom_field:[],
            ques_section:'false',
            field_type:null,
            type_of_field:false,
            type_of_radio:false,
            type_of_radio_choices:false,
            type_of_dropdown:false,
            checkboxfield:false,
                drop_down:false,
            choice_count:'',
            text_field_type:'',
            banner_link:'',
            background_url:'',
            delete_fields_section:'',
            delete_fields_arr:[],
            skip_deleted_values:[],
            preview:false,
            headerData:'',
            headerDataarray:[],
            footerData:'',
            footerDataarray:[]


        }
    },
    computed: {
        ...mapGetters('FormsSingle', ['item', 'loading']),
    },
    mounted(){



       this.numCount=0;
       this.activeTab=0;
       console.log("aaasas",JSON.stringify(this.item.languages))


            axios.get('/api/v1/FetchLanguages')
                .then(response => {

                    this.languageSelect = response.data.data;
                      // data.forEach(lang=>this.languageSelect.push(lang))
                     console.log(this.languageSelect)
                    // this.langlength = this.item.languages.length;
                    // this.headLen=this.item.header.length;
                    //
                    // this.footerLen=this.item.footer.length;

                })
                .catch(error => {

                })
                .finally(() => {

                })


}  ,
 created() {

     if(this.item.add_member == 'false'){
         this.item.add_member = false
     }else if(this.item.add_member == 'true'){
         this.item.add_member = true
     }
        this.fetchData(this.$route.params.id);
        var base_url = window.location.origin;
        this.background_url=base_url+'/dashboard_resources/background_doc.png';
     this.selectformtag.push({type:'Food Preferences',key:'foodpref',value:'',custom:0,require:1,option:[{en:[{"key":"Veg"},{"key":"Non Veg "},{"key":"Jain"}]},{hi:[{"key":this.hin.Veg},{"key":this.hin.nonVeg},{"key":this.hin.jain}]},{ta:[{"key":this.ta.Veg},{"key":this.ta.nonVeg},{"key":this.ta.jain}]},{te:[{"key":this.te.Veg},{"key":this.te.nonVeg},{"key":this.te.jain}]},{gu:[{"key":this.gu.Veg},{"key":this.gu.nonVeg},{"key":this.gu.jain}]},{kn:[{"key":this.kn.Veg},{"key":this.kn.nonVeg},{"key":this.kn.jain}]},{mr:[{"key":this.mr.Veg},{"key":this.mr.nonVeg},{"key":this.mr.jain}]}]},);
    },
    destroyed() {
        this.resetState()
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        },
        "item.form_html":function () {

            this.langlength = this.item.languages.length;
            this.headLen=this.item.header.length;

            this.footerLen=this.item.footer.length;
            console.log("dasdfsdfsdfs",  this.headLen, this.langlength);

            },

    },
    methods: {
        ...mapActions('FormsSingle', ['fetchData', 'updateData', 'resetState', 'setForm_name', 'setAgency_id', 'setForm_html','setfields_arr','setAgent_id']),
        uploadfileform(value, type, index) {
            uploadfile("form", type, value.target.files[0], this.item.id).then(response => {
                this.item.form_html[index].value = response.data;

            })},
        uploadfileformpass(value, type, index) {
            uploadfile("form", type, value.target.files[0], this.item.id).then(response => {
                this.item.form_html[index].value.url = response.data;

            })},

        updateForm_name(e) {
            this.setForm_name(e.target.value)
        },
        updateAgency_id(e) {
            this.setAgency_id(e.target.value)
        },
        updateForm_html(e) {
            this.setForm_html(e.target.value)
        },
        submitForm() {

            if(this.item.form_name!=null && this.item.form_name.length>0){
                var loop = true;

                this.item.form_html.forEach(itm =>{

                    if(itm.ques !== undefined && loop == true){

                        if(itm.ques.length !== this.langlength){
                            this.$swal.fire({
                                title: 'You have selected a new language. Please update all highlighted questions.',

                                type: 'warning',
                                showCancelButton: false,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Ok'
                            })
                            loop = false;
                        }

                    }

                });


                if(loop == true){
                    if(this.headLen!== this.langlength){
                        this.$swal.fire({
                            title: 'You have selected a new language. Please update header text.',

                            type: 'warning',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Ok'
                        })
                        return false;

                    }
                    if(this.footerLen!== this.langlength){
                        this.$swal.fire({
                            title: 'You have selected a new language. Please update footer text.',

                            type: 'warning',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Ok'
                        })
                        return false;

                    }
                    this.$swal.fire({
                        title: 'Are you sure?',

                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, save Form!'
                    }).then((result) =>{
                        if(result.value){


                    this.updateData()
                        .then(() => {
                            this.$router.push({ name: 'forms.index' })
                            this.$eventHub.$emit('update-success')
                        })
                        .catch((error) => {
                            console.error(error)
                        })

                        }


                    })
                    loop = false;
                }



                }
                else{
                    alert('Please fill form name');
                }



            // this.$swal.fire({
            //     title: 'Are you sure?',
            //     text: "Check All questions are created properly or not",
            //     type: 'warning',
            //     showCancelButton: true,
            //     confirmButtonColor: '#3085d6',
            //     cancelButtonColor: '#d33',
            //     confirmButtonText: 'Yes, save Form!'
            // }).then((result)=> {
            //     if(result.value){
            //         if(this.item.form_name!=null){
            //             if(this.item.form_name.length>0){
            //
            //                 this.updateData()
            //                     .then(() => {
            //                         this.$router.push({ name: 'forms.index' })
            //                         this.$eventHub.$emit('update-success')
            //                     })
            //                     .catch((error) => {
            //                         console.error(error)
            //                     })
            //             }
            //             else{
            //                 alert('Please fill form name');
            //             }
            //         }
            //         else{
            //             alert('Please fill form name');
            //         }
            //     }
            //
            //
            // })


        },
        // filterLang(i){
        //     console.log(i) ;
        //     this.item.languages.splice(i,1);
        //     return this.item.languages;
        // },
        filterLang(i){
            this.SelectedLangForForm={ "code": "en", "name": "English", "nativeName": "English" };
            console.log(i) ;
            this.item.languages.splice(i,1);
            this.item.header.splice(i,1);
            this.item.footer.splice(i,1);
            this.langlength = this.item.languages.length;
            this.headLen=this.item.header.length;

            this.footerLen=this.item.footer.length;
            this.item.form_html.forEach(itm =>{
                if(itm.ques !== undefined || itm.questions !== undefined){
                    console.log("bb")
                    if(itm.type=='Short Answer' || itm.type=='Short Answer' || itm.type=='Paragraph' || itm.type=='Date'){
                        console.log("aaaa",itm.ques)
                        itm.ques.splice(i,1);
                        itm.questions.splice(i,1);
                    }
                    if(itm.type=='Check Box' || itm.type=='Radio Button' || itm.type =='Drop Down'){

                        itm.options.splice(i,1);
                        itm.option.splice(i,1);
                        itm.ques.splice(i,1);

                        itm.questions.splice(i,1);


                        console.log(JSON.stringify(itm.option));

            }
            }

            })
            return this.item.languages;
        },

        custom_field(value,ind){
            this.actualfield.options=[]
            this.actualfield.questions=[]
            this.actualfield.ques=[];
            this.actualfield.option=[[]];
            this.numCount = 0;
            this.activeTab = 0;
            console.log("value",value)
            console.log("radio")
            if(value=='' || value==null){
                this.ques_section=false;
                this.field_type=null;
                this.type_of_radio_choices=false;
                this.type_of_field=false;
                this.type_of_dropdown=false;
                this.checkboxfield=false;
                this.drop_down = false;

            }
            else{
                var type=Object.entries(value);
                var field=type[0][1];
                this.field_type=field;
                if(field=='text'){
                    this.ques_section=true;
                    this.checkboxfield=false;
                    //  this.type_of_field=true;
                    this.type_of_radio=false;
                    this.type_of_radio_choices=false;
                    this.type_of_dropdown=false;
                    this.drop_down = false;

                }
                if(field=='date'){
                    this.ques_section=true;
                    //this.type_of_field=true;
                    this.checkboxfield=false;
                    this.type_of_radio=false;
                    this.type_of_radio_choices=false;
                    this.type_of_dropdown=false;
                    this.drop_down = false;

                }
                else if(field=='checkbox'){
                    this.ques_section=true;
                    this.checkboxfield=true;
                    this.type_of_field=false;
                    this.type_of_radio=false;
                    this.type_of_radio_choices=false;
                    this.type_of_dropdown=false;
                    this.drop_down = false;
                }
                else if(field=='dropdown'){
                    this.drop_down = true;
                    this.ques_section=true;
                    this.checkboxfield=false;
                    this.type_of_field=false;
                    this.type_of_radio=false;
                    this.type_of_radio_choices=false;
                    this.type_of_dropdown=false;

                }
                else if(field=='options'){
                    this.ques_section=true;
                    this.checkboxfield=false;
                    this.type_of_field=false;
                    this.type_of_radio=false;
                    this.type_of_radio_choices=false;
                    this.type_of_dropdown=true;
                    this.drop_down = false;


                }
                else if(field=='radio'){
                    this.ques_section=true;
                    this.checkboxfield=false;
                    this.type_of_field=false;
                    this.type_of_radio=true;
                    this.type_of_radio_choices=false;
                    this.type_of_dropdown=false;
                    this.drop_down = false;
                }
                else if(field=='textarea'){
                    this.ques_section=true;
                    this.checkboxfield=false;
                    this.type_of_field=false;
                    this.type_of_radio=false;
                    this.type_of_radio_choices=false;
                    this.type_of_dropdown=false;
                    this.drop_down = false;
                }
                else if(field=='file'){
                    this.ques_section=true;
                    this.checkboxfield=false;
                    this.type_of_field=false;
                    this.type_of_radio=false;
                    this.type_of_radio_choices=false;
                    this.type_of_dropdown=false;
                    this.drop_down = false;
                }
                else if(field=='passport'){
                    this.ques_section=true;
                    this.checkboxfield=false;
                    this.drop_down = false;

                    this.type_of_field=false;
                    this.type_of_radio=false;
                    this.type_of_radio_choices=false;
                    this.type_of_dropdown=false;

                }

                //type_of_radio

            }

        },
        dataFunc(){


            this.langlength = this.item.languages.length;
            this.headLen=this.item.header.length;

            this.footerLen=this.item.footer.length;
            // console.log("ml",this.item.languages);
            // this.item.languages.forEach(itm=> this.lanCode.push(itm.code))
            //
            // console.log("array", this.item.languages)
            },
            editForm_html(id,type,e){
                this.activeTab = 0;
                this.numCount=0;
                this.dataFunc()
                this.field_type=type;
this.custom_id=id;
this.ques_section=true;
let index= this.item.form_html.findIndex(obj => obj.custom_id === this.custom_id);
this.item.form_html[index].questions=[]

console.log(type);
                if(type=="Radio Button" || type=="Check Box" || type =="Drop Down" ){
                    if (type === "Radio Button") {
        this.checkboxfield =false;
                        this.drop_down = false;
    this.type_of_radio = true;
                    } else if (type === "Check Box") {
        this.checkboxfield =true;
                        this.drop_down = false;
                        this.type_of_radio = false;
                    } else if (type === "Drop Down") {
                        this.drop_down = true;
                        this.checkboxfield = false;
        this.type_of_radio = false;
    }

    this.item.form_html[index].options=[]
    this.actualfield = this.item.form_html[index];
    // this.AllOptions.forEach(dat => this.actualfield.option.push(dat));
}
else{
    this.type_of_radio = false;
    this.checkboxfield =false;
    this.drop_down = false;
    console.log("elcome");
    this.actualfield = this.item.form_html[index];
    console.log( this.actualfield)
}


},
        nextFooter(){
            if(this.activeTab == 0){

                this.footerDataarray = [];
            }

            const Count=this.numCount;
            const sublis = this.item.languages[Count].code;
            console.log("sublist",sublis)

            if(this.footerData == '' || this.footerData == null){
                alert('Please Fill Question Field');
                return  false;
            }




            if(this.numCount ===  this.item.languages.length-1){
                console.log("one Sec")

                const content =this.footerData
                console.log("one Sec",content)
                this.footerDataarray.push({[sublis]:content})
                this.footerData = '';
                const obj = this.footerDataarray;
                console.log("Obj",JSON.stringify(obj));
                this.item.footer = [];
                this.item.footer=obj;
                this.footerLen = this.item.footer.length;

                console.log(JSON.stringify(this.item.footer));

                this.activeTab=0
                this.numCount = 0;


            }
            else if(this.numCount < this.item.languages.length){
                const content =this.footerData;
                console.log(this.footerData);

                this.footerDataarray.push({[sublis]:content})
                this.footerData = '';

                this.numCount = this.numCount+1;
                this.activeTab=this.activeTab + 1;
                return;

            }

            // else{
            //
            //
            //     if(this.numCount ===  this.lanCode.length-1){
            //         console.log("22222");
            //         this.headerTexts.questions.push({[sublis]:this.headerTexts.ques[this.activeTab]})
            //         this.item.header = [];
            //         this.item.header.push(this.headerTexts);
            //         console.log(this.item.header);
            //         this.activeTab=0
            //         this.numCount = 0;
            //         this.headerTexts.questions = [];
            //         return false;
            //         console.log("aaa",this.numCount)
            //         console.log( this.lanCode.length-1)
            //     }
            //     if(this.numCount < this.lanCode.length){
            //         console.log( "hellow",this.numCount)
            //         console.log(this.lanCode.length-1)
            //
            //         this.headerTexts.questions.push({[sublis]:this.headerTexts.ques[this.activeTab]})
            //
            //         this.numCount = this.numCount+1;
            //         this.activeTab=this.activeTab + 1;
            //
            //     }
            //
            // }


            this.footerDataarray=[]



        },
        nextHeader(){
            if(this.activeTab == 0){

                this.headerDataarray = [];
            }
            const Count=this.numCount;
            const sublis = this.item.languages[Count].code;
            console.log("sublist",sublis)

            console.log(this.headerData);

            if(this.headerData == '' || this.headerData == null){
                alert('Please Fill Question Field');
                return  false;
            }




            console.log(this.headerData);

            if(this.numCount ===  this.item.languages.length-1){
                console.log("one Sec")

                const content =this.headerData
                console.log("one Sec",content)
                this.headerDataarray.push({[sublis]:content})
                this.headerData = '';
                const obj = this.headerDataarray;
                console.log("Obj",JSON.stringify(obj));
                this.item.header = [];
                this.item.header=obj;
                this.headLen =  this.item.header.length;

                console.log(JSON.stringify(this.item.header));

                this.activeTab=0
                this.numCount = 0;


            }
            else if(this.numCount < this.item.languages.length){
                const content =this.headerData;
                console.log(this.headerData);

                this.headerDataarray.push({[sublis]:content})
                this.headerData = '';

                this.numCount = this.numCount+1;
                this.activeTab=this.activeTab + 1;
                return;

            }

            // else{
            //
            //
            //     if(this.numCount ===  this.lanCode.length-1){
            //         console.log("22222");
            //         this.headerTexts.questions.push({[sublis]:this.headerTexts.ques[this.activeTab]})
            //         this.item.header = [];
            //         this.item.header.push(this.headerTexts);
            //         console.log(this.item.header);
            //         this.activeTab=0
            //         this.numCount = 0;
            //         this.headerTexts.questions = [];
            //         return false;
            //         console.log("aaa",this.numCount)
            //         console.log( this.lanCode.length-1)
            //     }
            //     if(this.numCount < this.lanCode.length){
            //         console.log( "hellow",this.numCount)
            //         console.log(this.lanCode.length-1)
            //
            //         this.headerTexts.questions.push({[sublis]:this.headerTexts.ques[this.activeTab]})
            //
            //         this.numCount = this.numCount+1;
            //         this.activeTab=this.activeTab + 1;
            //
            //     }
            //
            // }


            this.headerDataarray=[]



        },
         nextTab() {


                var question=this.actualfield.ques;



                const opLen = this.activeTab;
                const Count=this.numCount;

                const sublis = this.item.languages[Count].code;
             if(question[Count]=='' || question[Count]==null){
                    alert('Please Fill Question Field');
                    return  false;
                }


                if(this.numCount ===   this.item.languages.length-1){
                    this.activeTab=0
                    this.numCount = 0;

                }
                else if(this.type_of_radio==true || this.checkboxfield==true ||  this.drop_down == true){

                    for(let i=0 ; i<this.actualfield.option[0].length ;i++){



                        if(this.actualfield.option[opLen][i].key==="" || this.actualfield.option[opLen][i].key===null){
                            alert('Please Fill option Field');
                            return  false;
                        }
                        if(Object.keys(this.actualfield.option[opLen][i]).length=== 0){
                            alert('Please Fill option Field');
                            return  false;
                        }

                    }




                    var return_arr=[];
                    var len=0;
                    var empty_count=0;
                    this.actualfield.option.push([]);
                    this.actualfield.option[this.activeTab].forEach((data)=>{
                        // console.log(data.key);
                        if(data.key!=""){
                            return_arr.push(data)
                            empty_count++
                        }

                        len++;
                    })
                    if(empty_count<2){
                        alert('Minimum 2 Filled Sields Required');

                        return  false;
                    }
                    this.AllOptions.push(this.actualfield.option[this.activeTab]);


                    this.actualfield.options.push({[sublis]:this.actualfield.option[this.activeTab]})

                    this.actualfield.questions.push({[sublis]:this.actualfield.ques[this.activeTab]})

                    // this.actualfield.ques='';

                    this.numCount = this.numCount+1;
                    this.activeTab=this.activeTab + 1;
                    if(this.actualfield.option[0].length>0 && this.actualfield.option[this.activeTab].length<=0){
                        var optLen= this.actualfield.option[0].length
                        for(let i=0;i<optLen;i++){
                            this.actualfield.option[this.activeTab].push({})
                        }
                    }
                }



                else if(this.numCount <  this.item.languages.length){

                    this.actualfield.questions.push({[sublis]:this.actualfield.ques[this.activeTab]})
                    this.numCount = this.numCount+1;
                    this.activeTab=this.activeTab + 1;
                    // this.actualfield.ques='';


                }else{
                    this.activeTab=0
                    this.numCount = 0;
                }












            },
            save_field(){
                const opLen = this.activeTab;
                var data_arr=[];
                if(this.field_type!=null){


                    var question=this.actualfield.ques;

                    const Count=this.numCount;
                    if(question[Count]=='' || question[Count]==null){
                        alert('Please Fill Question Field');
                        return  false;
                    }
                    else{
                        // console.log(question);


                        const sublis = this.item.languages[Count].code;
                  //    var len=  this.actualfield
                        if(this.type_of_radio==true || this.checkboxfield==true || this.drop_down == true){


                            for(let i=0 ; i<this.actualfield.option[0].length ;i++){



                                if(this.actualfield.option[opLen][i].key==="" || this.actualfield.option[opLen][i].key===null){
                                    alert('Please Fill option Field');
                                    return  false;
                                }
                                if(Object.keys(this.actualfield.option[opLen][i]).length=== 0){
                                    alert('Please Fill option Field');
                                    return  false;
                                }

                            }
                        }


if(this.type_of_radio==false && this.checkboxfield==false && this.drop_down==false){

    this.actualfield.questions.push({[sublis]:this.actualfield.ques[this.activeTab]})
}
else{
    var return_arr=[];
    var len=0;
    var empty_count=0;

    this.actualfield.option[this.activeTab].forEach((data)=>{
        // console.log(data.key);
        if(data.key!=""){
            return_arr.push(data)
            empty_count++
        }

        len++;
    })
    if(empty_count<2){
        console.log("wowwwwwww",empty_count)
        alert('Minimum 2 Filled Sields Required');

        return  false;
    }
    this.AllOptions.push(this.actualfield.option[this.activeTab]);
    console.log("allOptions",this.AllOptions);
    this.actualfield.options.push({[sublis]:this.actualfield.option[this.activeTab]})
    this.actualfield.questions.push({[sublis]:this.actualfield.ques[this.activeTab]})

}


                        this.activeTab=0
                        this.numCount = 0;

                        var date = new Date();
                        var timestamp = date.getTime();

                      var field=_.cloneDeep(this.actualfield)

                    //    if(this.type_of_radio==true || this.checkboxfield==true){
                    //         var return_arr=[];
                    //         var len=0;
                    //         var empty_count=0;

                    //         field.option.forEach((data)=>{
                    //             // console.log(data.key);
                    //             if(data.key!=""){
                    //                 return_arr.push(data)
                    //                 empty_count++
                    //             }

                    //             len++;
                    //         })
                    //         if(empty_count<2){
                    //             alert('Minimum 2 Filled Sields Required');

                    //             return  false;
                    //         }
                    //         field.option=_.cloneDeep(return_arr);
                    //         // console.log(field.option);
                    //     }

                      if(this.custom_id ==null){
                          field.custom_id=timestamp+Math.floor((Math.random() * 1000) + 100);
                          this.item.form_html.push(field);
                      }
                      else{
                          field.custom_id = this.custom_id;
                      }

                        console.log(this.custom_id)
                        if(this.custom_id !=null){
                            console.log("Editttttttt");
                            let index= this.item.form_html.findIndex(obj => obj.custom_id === field.custom_id);
                            this.item.form_html[index] = field;
                            this.show_modal=false;
                        }
                        console.log("items",this.item.form_html);

                        this.actualfield.options=[]
                        this.actualfield.questions=[]
                        this.actualfield.ques=[];
                        this.actualfield.option=[[]];
                        // this.actualfield.ques=_.cloneDeep("");
                        // this.actualfield.option=_.cloneDeep([]);


                    }

                    this.$eventHub.$emit('update-success');

                }
                else {
                    alert('Please Select Field Type');
                }
            },

        updatemeta_banner(value, type, index){
            uploadfile("form", type, value.target.files[0], this.item.id).then(response => {
                this.item.banner = response.data;

            })},
        deletefetureimage() {
            this.item.banner='';
            this.banner_link='';

        },
        defined_field(e){
            this.$eventHub.$emit('update-success');

        },
    },
    components: {draggable,FormComponent}
}
</script>


<style scoped>
    .all-scroll {cursor: all-scroll;}
    .backGround{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
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
    .no_event{
        pointer-events:none;
    }
    .button-css{
        position: unset !important;
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
    .v-select .selected-tag{
        display: none !important;
    }
    .hidetag .selected-tag{
        display: none !important
    }
    input[type="file"] {
        display: block !important;
    }
    .fa.fa-trash {
        font-size: 15px;
        padding: 3px;
    }
    input{
        border: none;
        /*border-bottom-color: currentcolor;*/
        /*border-bottom-style: none;*/
        /*border-bottom-width: medium;*/
        /*border-bottom: 1px solid #00000038;*/


        background: #ecf0f5 ;
        border-radius: 5px;
        margin-bottom:5px;
    }
    .fa-trash{
        color: gray !important;
        cursor: pointer;
    }
    label {
        display: inline-block;
        margin-bottom: .5rem;
        font-size: 18px !important;
        color:black;
        font-weight: normal;
    }
    .header_footer{

        padding:10px 0px 10px 0px;
        color:black;

    }
    .field_class{
        border: none !important;
        border-radius: 5px !important;
        padding:10px;
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
    .nav {
  float: none !important;
}
#dNone{
        display:none;
    }
    .button_style{
        font-size:20px;
        margin-left: 2rem;
        position: absolute;
        right: 30px;
    }
</style>
