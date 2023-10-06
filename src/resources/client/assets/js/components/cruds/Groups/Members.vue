<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>{{group_id}} : Members</h1>


        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <section class="content">
            <!--            Document Modal-->
            <div class="container"  v-if="show_modal && doc_data.length>0 && total_doc!=0">
                <div class="modal show in" id="myModal4" style="display: block;">
                    <div class="modal-dialog" style="max-width: 500px !important;">
                        <div class="modal-content">
                            <div class="modal-body" style="max-height: 500px !important;overflow: auto;">
                                <button type="button" class="close f-2" data-dismiss="modal" @click="show_modal=false">&times;</button><br>


                                <div class="container-fluid" style="text-align: left" >
                                    <h2 style="text-align: left">&nbsp;Documents </h2>
                                    <hr>
                                    <!--                                    {{this.doc_data}}-->
                                    <div class="container-fluid">
                                        <div class="row" >

                                            <div class="col-md-3 box-style" v-for="(doc,index) in doc_data">
                                                <p class="box-label">{{doc.name}}</p>

                                                <p class="box-value" :class="[doc.value!=total_members ? 'text-danger' : 'text-success']">
                                                    <img v-if="doc.name.includes('Passport')" src="./../dashboard_resources/passportcopy.png" style="height: 30px;">
                                                    <img v-else-if="doc.name.includes('Photo')" src="./../dashboard_resources/passportsizephoto.png" style="height: 25px;">
                                                    <img v-else-if="doc.name.includes('Financial')" src="./../dashboard_resources/financialdoc.png" style="height: 25px;">
                                                    <img v-else-if="doc.name.includes('Sponsor')" src="./../dashboard_resources/sponsorletter.png" style="height: 25px;">
                                                    <img v-else-if="doc.name.includes('ID')" src="./../dashboard_resources/idproof.png" style="height: 25px;">
                                                    <i v-else class="fa fa-file-text text-muted" style="font-size: 22px !important;"></i>
                                                    {{doc.value}}/{{ 1 * total_members}}
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
            <!--            SMS Mail Model-->
            <div class="container"  v-if="show_modal2">
                <div class="modal show in" style="display: block;">
                    <div class="modal-dialog" style="max-width: 750px !important;">

                        <div class="modal-content" style="padding: 20px;">
                            <div class="row border-bottom">
                                <div class="col-md-8 ">
                                    <h4 class="modal-title  f-2" v-if="doc_mail==true && doc_sms==false">Customize Subject & Add your custom remark</h4>
                                    <h4 class="modal-title  f-2" v-else-if="doc_mail==false && doc_sms==true">Write your sms text here</h4>

                                </div>
                                <div class="col-md-4">
                                    <button classs="f-2" type="button" class="close" data-dismiss="modal" @click="show_modal2=false">&times;</button><br>
                                </div>
                            </div>

                            <div class="modal-body" style="max-height: 600px !important;overflow: auto;">

                                <div class="container-fluid" v-if="doc_mail==true && doc_sms==false">
                                    <label class="f-1-5 text-secondary">Subject</label><br>
                                    <input
                                        v-model="subject"
                                        type="text"
                                        class="form-control"
                                        name="subject"

                                    >
                                    <label class="f-1-5 text-secondary">Remark</label><br>
                                    <vue-ckeditor
                                        :value="mail_text_content"
                                        v-model="mail_text_content"

                                    />
                                </div>
                                <div class="container-fluid" v-else-if="doc_mail==false && doc_sms==true">
                                    <label class="f-1-5 text-secondary">Text</label><br>
                                    <textarea rows="5"  style="font-size: 15px;" cols="75" v-model="sms_text_content"></textarea>

                                </div>

                                <button type="button" class="button-css" style="" @click="request_doc_mail(3)">Send</button>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--            SMS LOGS Modal-->
            <div class="container"  v-if="show_modal3">
                <div class="modal show in" style="display: block;">
                    <div class="modal-dialog" style="max-width: 750px !important;">

                        <div class="modal-content" style="padding: 20px;">
                            <div class="row border-bottom">
                                <div class="col-md-8 ">

                                    <h4 class="modal-title  f-2" >SMS Logs</h4>

                                </div>
                                <div class="col-md-4">
                                    <button classs="f-2" type="button" class="close" data-dismiss="modal" @click="show_modal3=false">&times;</button><br>
                                </div>
                            </div>

                            <div class="modal-body" style="max-height: 600px !important;overflow: auto;">

                                <div class="col-md-12 border-bottom" v-for="(data,index) in sms_logs">
                                    <p class="f-1-5">{{data.time}} : SMS-{{data.count}} </p>
                                </div>



                            </div>








                        </div>
                    </div>
                </div>
            </div>
            <!--            Bulk Document Modal-->
            <div class="container"  v-if="show_modal4">
                <div class="modal show in" style="display: block;">
                    <div class="modal-dialog" style="max-width: 80% !important;">

                        <div class="modal-content" style="padding: 20px;width:60%; margin:0 auto">
                            <div class="row border-bottom">
                                <div class="col-md-8 ">

                                    <h4 class="modal-title  f-2">Bulk Documents Download</h4>

                                </div>
                                <div class="col-md-4">
                                    <button classs="f-2" type="button" class="close" data-dismiss="modal" @click="show_modal4=false">&times;</button><br>
                                </div>
                            </div>

                            <div class="modal-body" style="max-height: 400px !important;overflow: auto;">
                                <div class="col-md-12">
                                    <!--                                    {{actualdata}}-->

                                    <div class="row mt-5">
                                        <div class="col-md-6" @click="bulk_download('meta_passport')" style="text-align: center;"><i
                                                class="fa fa-download f-1-5 icon" aria-hidden="true"></i><button
                                                class="btn btn-dark f-2 icon_button">Passport</button></div>
                                        <div class="col-md-6" @click="bulk_download('form_dump')"><i
                                                class="fa fa-download f-1-5 icon" aria-hidden="true"></i><button
                                                class="btn btn-dark f-2 icon_button">Form Docs</button></div>
                                    </div>
                                </div>




                            </div>








                        </div>
                    </div>
                </div>
            </div>
            <!--            Filter Modal-->
            <div class="container"  v-if="filtermodel">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog">
                                <div class="modal-content model_head" >
                                    <div class="modal-header">
                                        <h3 class="modal-title">Apply Filters</h3>
                                        <button type="button" class="close" @click="filtermodel=false,clearfilter()">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                    </div>
                                    <div class="modal-body">

                                        <div class="row">

                                            <div class="col-12 model_div">
                                                <label for="hub">Choose Hub</label>
                                                <v-select
                                                           v-model="filter_obj.hub_filter"
                                                          :clearable="false"
                                                          name="hub"
                                                          label="hub"
                                                          :options="filteredHub"
                                                          style="background:#fff;"

                                                           multiple





                                                />
                                            </div>

                                            <div class="col-12  model_div">
                                                <label for="date">Choose Last Update </label>
                                                <div class="input-group" style="width:100% !important">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" > From Date</span>
                                                    </div>
                                                    <date-picker
                                                        v-model="filter_obj.filter_datefrom"
                                                        :config="$root.dpconfigDatetime"
                                                        name="driver_pickup_date_time"
                                                        placeholder="From"
                                                    >
                                                    </date-picker>
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" > To Date</span>
                                                    </div>
                                                    <date-picker
                                                        v-model="filter_obj.filter_dateto"
                                                        :config="$root.dpconfigDatetime"

                                                        name="driver_pickup_date_time"
                                                        placeholder="To"
                                                    >
                                                    </date-picker>
                                                </div>
                                            </div>

                                            <div class="col-12 model_div">
                                                <label for="date">Choose Sort By Field</label>

                                                <div>
                                                    <div class="group" name="sort_fields">
                                                        <div class="input-container">
                                                            <input type="radio" name="field" v-model="filter_obj.queryfilter" value="1"><label>Traveller Name</label>
                                                        </div>
                                                        <div class="input-container">
                                                            <input type="radio" name="field" v-model="filter_obj.queryfilter" value="2"><label>Itinerary No</label>
                                                        </div>
                                                        <div class="input-container">
                                                            <input type="radio" name="field" v-model="filter_obj.queryfilter" value="3"><label>Last Updates</label>
                                                        </div>
                                                        <div class="input-container">
                                                            <input type="radio" name="field" v-model="filter_obj.queryfilter" value="4" ><label>Documents</label>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 model_div">
                                                <label for="date">Choose Sort Type</label>

                                                <div>
                                                    <div class="group" name="sort_type">
                                                        <div class="input-container">
                                                            <input type="radio" name="type" v-model="filter_obj.filter_order" value="1"><label>ASC</label>
                                                        </div>
                                                        <div class="input-container">
                                                            <input type="radio" name="type" v-model="filter_obj.filter_order"  value="2"><label>DESC</label>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <div class="col-12 model_div" style="text-align:center;">
                                            <button  class="btn btn-danger btn-lg" @click="clearfilter()">Clear</button>
                                            <button class="btn btn-success btn-lg" @click="applyfilter()">Apply</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

            <!--            Main Section -->
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">
                        <!--                        <div class="box-header">-->
                        <!--                            <h3 class="box-title"></h3>-->
                        <!--                        </div>-->
                        <div class="col-md-12 container-fluid" >
                            <div class="row" >
                                <div class="col-md-1 box-style" >
                                    <p class="box-label">Total Login</p>
                                    <p class="box-value" :class="[login_members!=total_members ? 'text-danger' : 'text-success']">{{login_members}}/{{total_members}}</p>

                                </div>
                                <div class="col-md-2 box-style " style=" max-width: 11%;" @click="show_modal=true" :class="[total_doc!=0 ? 'cursor' : '']">
                                    <p class="box-label">Total Document</p>
                                    <p class="box-value" :class="[req_doc!=total_doc ? 'text-danger' : 'text-success']" >{{total_doc}}/{{req_doc}}</p>

                                </div>
                                <div class="col-md-5 input-group" >
                                    <input type="text" v-model="localsearch" class="filter_bar2"  placeholder="Search" style="height: 35px;margin: unset;">
                                    <div class="input-group-append" style="height: 36px;">
                                        <button @click="updatesearch" class="btn btn-secondary filter_button2" v-if="search"  type="button">
                                            <i class="fa fa-search"></i>
                                        </button>
                                        <button @click="clearsearch" class="btn btn-secondary filter_button2"  v-if="clear"  type="button">
                                            <i class="fa fa-times-circle"></i>
                                        </button>
                                    </div>
                                </div>
<!--                                <div class="col-md-2">-->
<!--                                    <div class="input-group" style="margin-top: 20% !important;">-->
<!--                                        <p class="extension_title box-label mt-0" >Filter : </p>-->
<!--                                        <label class="switch">-->
<!--                                            <input type="checkbox" class="switch-input" id="filter_search" >-->
<!--                                            <span class="switch-label" data-on="ON" data-off="OFF"></span>-->
<!--                                            <span class="switch-handle"></span>-->
<!--                                        </label>-->
<!--                                        <i style="z-index:2;padding: 3px;padding-left:10px;" class="fa fa-eye" aria-hidden="true" v-if="filter_obj.status" @click="filtermodel=true"></i>-->
<!--                                    </div>-->
<!--                                </div>-->
                                <div class="col-md-3" style="padding-top: 35px;padding-bottom: 35px;">
                                    <div class="col-sm">
                                        <download-excel
                                            class   = "btn btn-default"
                                            :data   = "actualdata"
                                            :fields = "json_fields"
                                            worksheet = "My Worksheet"
                                            name    = "group_members.xls"
                                        >
                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>
                                        </download-excel>


                                        <a
                                            class   = "btn btn-default"
                                            :href="all_members_url"

                                        >

                                            <i class="fa fa-list f-2 " aria-hidden="true extension_img"></i>

                                            <br>
                                            <p class="extension_title">All Members</p>

                                        </a>

                                        <a
                                            class   = "btn btn-default"
                                            href="javascript:void(0)"
                                            @click="filtermodel?filtermodel=false:filtermodel=true"

                                        >

                                            <img data-v-790cf42a="" class="extension_img" :src="filter_obj.status?'/images/filter_applied.png':'/images/no_filter.png'" alt="filter" >

                                            <br>
                                            <p class="extension_title">Filter</p>

                                        </a>




                                    </div>

                                </div>


                            </div>

                            <div class="row " style=";margin-bottom: -30px;">
                                <div class="col-md-12 ">
                                    <div class="btn-group"  >

                                        <button type="button" @click="show_modal4=true" class="btn btn-primary btn-lg f-1-5 f-w600  " style="border-radius: 20px;background: #4cbdec;color: white;border: white;">Bulk Document Download</button>
<!--                                        <button @click="request_sms_logs" type="button" class="btn btn-secondary btn-lg f-1-5 f-w600  ml-4" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;">Request Logs</button>-->
                                        <a type="button" :href="rooming_url" :class="filter_obj.status?'disabled':''" :disabled="filter_obj.status" class=" ml-4 btn  text-white btn-warning btn-lg f-1-5 f-w600" :style="filter_obj.status?'cursor: no-drop !important;':''" style="border-radius: 20px;border: black;padding-left: 30px;padding-right: 30px;">Rooming Wizard</a>
                                        <!--                                        <a type="button" :href="nomination_url" class=" ml-4 btn btn-danger btn-lg f-1-5 f-w600" style="border-radius: 20px;border: black;padding-left: 30px;padding-right: 30px;">Nomination</a>-->
                                        <button type="button" :disabled="filter_obj.status"  class="btn btn-primary btn-lg f-1-5 f-w600  ml-4" style="border-radius: 20px 0px 0px 20px;" @click="request_doc_mail(3)">Request Document Mail</button>
                                        <button @click="remove_class(1)" type="button"   class=" btn btn-primary dropdown-toggle-split dropdown-toggle f-1-5" :data-toggle="filter_obj.status?'nodrop':'dropdown'" aria-haspopup="true" aria-expanded="false" :style="filter_obj.status?'background:#52a3fb !important;cursor: no-drop !important;':''" style="border-radius: 0px 20px 20px 0px;">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu"  @click="remove_class(1)">
                                            <a class="dropdown-item f-1-5 "  @click="request_doc_mail(1)" href="#">Send Mail</a>

                                        </div>


                                        <button  :disabled="filter_obj.status"  type="button" @click="add_data('arr_dep_dump','Arrival Departure')" class="btn btn-success btn-lg f-1-5 f-w600 ml-2" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Arr Dep Report</button>


                                    </div>



                                </div>


                                <!--                                <div class="col-2">-->
                                <!--                                    <div class="btn-group"  >-->
                                <!--                                        <button type="button" class="btn btn-warning btn-lg f-1-5 f-w600" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Responses</button>-->

                                <!--                                    </div>-->


                                <!--                                </div>-->

                                <div class="col-4">
                                    <div class="btn-group"  id="dropdown1">

                                    </div>


                                </div>


                            </div>
                        </div>


                        <div class="box-body">



                            <!--                            <datatable-->
                            <!--                                v-if="!loading"-->
                            <!--                                :columns="columns"-->
                            <!--                                :data="data"-->
                            <!--                                :total="total"-->
                            <!--                                :query="query"-->
                            <!--                                :xprops="xprops"-->
                            <!--@showday="test"-->
                            <!--                            />-->

                            <div class="box-body " style="margin-top: 20px;">



                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th class="font_style2" scope="col">Traveller Name</th>
                                        <th class="font_style2" scope="col">Mobile No.</th>
                                        <th class="font_style2" scope="col">Itinerary No.</th>
                                        <th class="font_style2" scope="col">Login</th>
                                        <th class="font_style2" scope="col">Activated</th>
                                        <th class="font_style2" scope="col">Documents</th>
                                        <!-- <th class="font_style2" scope="col">Documents</th> -->
                                        <th class="font_style2" scope="col">Passport No.</th>
                                        <th class="font_style2" scope="col">Actions</th>
                                        <th class="font_style2" scope="col">Last Updates</th>
                                        <th class="font_style2" scope="col">Mail Status</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(post,index) in all_members_data" :key="post.id">

                                        <td class="font_style"><member_list_name_hover :row="post" /></td>
                                        <td class="font_style">{{post.phone}}</td>
                                        <td class="font_style cursor"  >{{post.booking_id}}</td>
                                        <td class="font_style"><login :row="post"/></td>
                                        <td class="font_style"><activated :row="post"/></td>
                                        <td class="font_style"><docs_status :row="post"/></td>
                                        <!-- <td class="font_style"><documents :row="post"/></td> -->
                                        <td class="font_style">{{post.pass_nos}}</td>
                                        <td class="font_style"><datatable-actions_-members :states="states" :row="post" /></td>
                                        <td class="font_style"><datatable-lastupdates_-members :row="post" /></td>
                                        <td class="font_style"><member_sns :row="post" /></td>


                                    </tr>
                                    </tbody>
                                </table>

                                <div class="row" style="margin-top: 10px;">
                                    <div class="col-sm-6" style="white-space: nowrap;">
                                        <div class="row" >
                                            <div class="col-sm-1" style="white-space: nowrap;">
                                                <strong> Total {{actualdata.length}},</strong>
                                            </div>
                                            <div class="col-sm-2" style="white-space: nowrap;">
                                                <label name="PageSizeSelect">
                                                    <select class="form-control input-sm -page-size-select" @change="updatepagesize">
                                                        <option value="10" data-foo="10">10</option>
                                                        <option value="20" data-foo="20">20</option>
                                                        <option value="40" data-foo="40">40</option>
                                                        <option value="80" data-foo="80">80</option>
                                                        <option value="100" data-foo="100">100</option>
                                                    </select>

                                                </label>
                                            </div>
                                            <div class="col-sm-1" style="white-space: nowrap;margin-left: -40px;">
                                                <label name="PageSizeSelect">
                                                    items / page
                                                </label>
                                            </div>

                                        </div>


                                    </div>


                                    <div class="col-sm-6">
                                        <ul name="Pagination" class="pagination pull-right" style="margin: 0px;" v-if="pagination_buttons>0 && pagination_buttons<7">

                                            <li class="page-item" v-if="current_page>1"><a href="#" class="page-link" @click="table_data(current_page-1)"><i class="fa fa-arrow-left"></i></a></li>
                                            <li class="page-item " :class="index==current_page?'active':''" v-for="index in pagination_buttons" :key="index">
                                                <a href="#" class="page-link" @click="table_data(index)" >
                                                    {{index}}
                                                </a>
                                            </li>
                                            <li v-if="pagination_buttons>1 && current_page<pagination_buttons" class="page-item"><a href="#" class="page-link" @click="table_data(current_page+1)"><i class="fa fa-arrow-right"></i></a></li>

                                        </ul>
                                        <ul name="Pagination" class="pagination pull-right" style="margin: 0px;" v-else-if="pagination_buttons>7">
                                            <!--                                            {{pagination_buttons}}-{{current_page}}-{{current_page+5}}-->
                                            <li class="page-item" v-if="current_page>1"><a href="#" class="page-link" @click="table_data(current_page-1)"><i class="fa fa-arrow-left"></i></a></li>
                                            <li class="page-item " :class="index==current_page?'active':''" v-for="index in current_page+5" :key="index">
                                                <a href="#" v-if="index>=current_page && index<pagination_buttons " class="page-link" @click="table_data(index)" >
                                                    {{index}}
                                                </a>

                                            </li>
                                            <li  class="page-item"><a class="page-link"><i class="fa fa-ellipsis-h"></i></a></li>
                                            <li class="page-item " :class="current_page==pagination_buttons?'active':''">

                                                <a href="#"  class="page-link" @click="table_data(pagination_buttons)" >
                                                    {{pagination_buttons}}
                                                </a>
                                            </li>
                                            <li v-if="pagination_buttons>1 && current_page<pagination_buttons" class="page-item"><a href="#" class="page-link" @click="table_data(current_page+1)"><i class="fa fa-arrow-right"></i></a></li>



                                            <!--                                            <li class="page-item " :class="index==current_page?'active':''" v-for="index in pagination_buttons" :key="index">-->
                                            <!--                                                <a class="page-link" v-if="index==7"><i class="fa fa-ellipsis-h"></i></a>-->
                                            <!--                                                <a href="#" v-else-if="index<7" class="page-link" @click="table_data(index)" >-->
                                            <!--                                                    {{index}}-->
                                            <!--                                                </a>-->
                                            <!--                                            </li>-->


                                            <!--                                            <li v-if="pagination_buttons>7" class="page-item"><a href="#"  class="page-link" @click="table_data(pagination_buttons)" >{{pagination_buttons}}</a></li>-->
                                            <!--                                            <li v-if="pagination_buttons>1" class="page-item"><a href="#" class="page-link" @click="table_data(current_page+1)"><i class="fa fa-arrow-right"></i></a></li>-->
                                        </ul>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
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
                                    <!--                                    <h2>Kindly fill following Fields with the valid data</h2>-->
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
    import login from "../../dtmodules/login";
    import activated from "../../dtmodules/activated";
    import documents from "../../dtmodules/documents";
    import member_sns from "../../dtmodules/member_sns";
    import docs_status from "../../dtmodules/docs_status";
    import JsZip from 'jszip'
    import member_list_name_hover from "../../dtmodules/member_list_name_hover";
    import check_box from "../../dtmodules/check_box"
    import Member_list_name_hover from "../../dtmodules/member_list_name_hover";
    import Login from "../../dtmodules/login";
    import Activated from "../../dtmodules/activated";
    import Docs_status from "../../dtmodules/docs_status";
    import Documents from "../../dtmodules/documents";
    import DatatableActions_Members from "../../dtmodules/DatatableActions_Members";
    import DatatableLastupdates_Members from "../../dtmodules/DatatableLastupdates_Members";
    import Member_sns from "../../dtmodules/member_sns";



    export default {
        components: {
            Member_sns,
            DatatableLastupdates_Members,
            DatatableActions_Members, Documents, Docs_status, Activated, Login, Member_list_name_hover},
        data() {
            return {
                columns: [
                    // { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                    // { title: '', tdComp: check_box, visible: true, tdClass: 'font_style',thClass: 'font_style2', colStyle: 'width:5%' },

                    { title: 'Traveller Name', tdComp: member_list_name_hover, visible: true, tdClass: 'font_style',thClass: 'font_style2', colStyle: 'width:15%' },
                    { title: 'Mobile No.', field: 'phone', sortable: true ,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 10%;' },
                    { title: 'Itinerary No.', field: 'booking_id', sortable: true,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 15%;'},
                    { title: 'Login', field: 'login',tdComp: login , sortable:true,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 7%;' },
                    { title: 'Activated', field: 'score', tdComp: activated ,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 7%;'},
                    { title: 'Documents', field: 'score', tdComp: docs_status ,tdClass: 'font_style3',thClass: 'font_style3',colStyle: 'width: 10%;'},
                    { title: 'Documents', field: 'score', tdComp: documents ,tdClass: 'font_style',thClass: 'font_style3',colStyle: 'width: 10%;'},
                    { title: 'Passport No.', field: 'pass_nos', tdClass: 'font_style',thClass: 'font_style3',colStyle: 'width: 10%;'},

                    // { title: 'Travel Date', field: 'driver_pick_up_time', tdComp: dateonlybooking,tdClass: 'font_style',thClass: 'font_style2' },
                    // { title: 'Members', field: 'driver_pick_up_time', tdComp: memberaction,tdClass: 'font_style',thClass: 'font_style2' },
                    // { title: 'Traveller Name', field: 'full_name', sortable: true },
                    // { title: 'Mobile No.', field: 'phone', sortable: true },
                    // { title: 'Login', field: 'email', tdComp: login},
                    // { title: 'Ops. Assign', field: 'score', tdComp: ops },
                    // { title: 'Activated', field: 'activated', sortable: true },

                    // { title: 'Status', field: 'score', tdComp: statusbooking,tdClass: 'font_style',thClass: 'font_style2'},
                    { title: 'Actions', tdComp: DatatableActions_Members, visible: true, tdClass: 'font_style',thClass: 'font_style3', colStyle: 'width: 80px;' },
                    { title: 'Last Updates', tdComp: DatatableLastupdates_Members, visible: true, tdClass: 'font_style',thClass: 'font_style3', colStyle: 'width: 100%' },

                    { title: 'Mail Status', tdComp: member_sns, visible: true, tdClass: 'font_style',thClass: 'font_style2'},

                ],
                query: { sort: 'id', order: 'desc' },
                xprops: {
                    module: 'GroupsIndexMember',
                    route: 'groups',
                    permission_prefix: 'group_'
                },
                localsearch:'',
                json_fields: {
                    'Itinerary': 'tour_name',
                    'Itinerary No.':'booking_id',
                    'Travel Date':'driver_pick_up_time',
                    'Traveller Name':'full_name',
                    'Mobile No.':'phone',


                },
                json_data:[],
                filtermodel:false,

                showtoagency:true,
                clear:false,
                search:true,
                group_id:'',
                total_members:0,
                login_members:0,
                req_doc:0,
                total_doc:0,
                show_modal:false,
                show_modal2:false,
                show_modal3:false,
                show_modal4:false,
                doc_data:[],
                doc_sms:false,
                doc_mail:false,
                loading2:false,
                subject:'',
                sms_text_content:'Insurance/ Passport documents will be provided by travel agent so ignore.',
                mail_text_content:'Insurance/ Passport documents will be provided by travel agent so ignore.',
                sms_logs:'',
                license:{},
                doc_data_new:[],
                rooming_url:'',
                nomination_url:'',
                all_members_url:'',
                filtered_hubs:[],
                errors:[],
                errormodal:false,
                states:[],


            }
        },
        mounted(){

        },
        created() {
            // axios.get('/api/v1/groupsmemberdoc2/' + this.$route.params.id)
            //     .then(response => {
            //         // console.log(response.data.data);
            //         this.doc_data_new=response.data.data
            //         this.doc_data_new[0].member_doc_tags= JSON.parse(this.doc_data_new[0].member_doc_tags)
            //
            //})
            this.rooming_url="/groups/"+this.$route.params.id+"/roomall";
            this.nomination_url="/groups/"+this.$route.params.id+"/nomination";
            this.all_members_url="/allmembers/"+this.$route.params.id

            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency"){
                this.showtoagency=false
            }
            this.$root.relationships = this.relationships

            axios.get('/api/v1/group_details/' + this.$route.params.id)
                .then(response => {
                    this.group_id=response.data.data[0].booking_id
                })

            this.fetchData(this.$route.params.id);





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

            //fetching states
            axios.get('/api/webservices/get_state_json')
                .then(res=>{
                    this.states=_.cloneDeep(res.data);
                })
                .catch(error => {
                    //console.log('Some error occured!')
                })

        },
        destroyed() {
            this.resetState()
        },
        computed: {
            ...mapGetters('GroupsIndexMember', ['page_size','actualdata','current_page','pagination_buttons','all_members_data','search','data', 'total', 'loading', 'relationships','filter_obj','filteredHub']),
        },
        watch: {

            query: {
                handler(query) {
                    this.setQuery(query)
                },
                deep: true
            },
            all_members_data:function () {

                this.json_data=this.all_members_data;
                this.total_members=0;
                this.login_members=0;
                for(var b=0;b<this.json_data.length;b++){
                    this.total_members++;
                    if(this.json_data[b]['login']=="1"){
                        this.login_members++;
                    }
                }


            },
            license:function () {

                // let form = new FormData();

                // form.set("id",this.$route.params.id)
                // form.set("source",'index')
                // axios.post('/api/webservices/member_docs',form)
                //     .then(response=>{
                        // console.log(response.data);
                    //     if(response.data!=null){
                    //         this.req_doc=response.data.total_doc_req;
                    //         this.total_doc=response.data.total_doc_rec;

                    //     }
                    //     const objectArray = Object.entries(response.data.documents);

                    //     for(var y=0;y<objectArray.length;y++){
                    //         this.doc_data.push({
                    //             // objectArray[y][1] : objectArray[y][1]['value']
                    //             'name' :  objectArray[y][0],
                    //             'value' : objectArray[y][1]['value'],
                    //         });

                    //     }
                    // });

            },


        },
        methods: {
            ...mapActions('GroupsIndexMember', ['fetchData', 'setQuery', 'resetState','setsearch' , 'setpage_size','setcolumn','setfilter','setpaginate']),
            updatepagesize(e) {

                // console.log(e.target.options[e.target.options.selectedIndex].dataset.foo)
                this.setpage_size(e.target.options[e.target.options.selectedIndex].dataset.foo);
                // console.log(this.page_size);

            },
            table_data(page){
                this.setpaginate(page)
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
            updatesearch() {
                this.setsearch(this.localsearch)
                if(this.localsearch!=''){
                    this.search=false;
                    this.clear=true;
                    this.filter_obj.status=true
                }
            },
            clearsearch() {
                this.localsearch=""
                this.setsearch(this.localsearch)
                this.filter_obj.status=false
                this.search=true;
                this.clear=false;
            },
            applyfilter(){
                this.clearsearch();
                this.filter_obj.status=true
                this.setfilter();
                this.filtermodel=false

            },
            clearfilter(){
                this.clearsearch();
                this.filter_obj.hub_filter=[];
                this.filter_obj.filter_sector='';
                this.filter_obj.queryfilter='0';
                this.filter_obj.filter_order='0';
                this.filter_obj.filter_datefrom=null;
                this.filter_obj.filter_dateto=null;
                this.filter_obj.status=false


            },
            remove_class(e){

                var element = document.getElementById("dropdown"+e);
                element.classList.remove("open");
            },
            request_doc_mail(loc){
                var source=0;
                var content='';
                if(loc==1){
                    this.show_modal2=true;
                    this.doc_mail=true;
                    this.doc_sms=false;
                }
                else if(loc==2){
                    this.show_modal2=true;
                    this.doc_mail=false;
                    this.doc_sms=true;
                }
                else if(loc==3){
                    this.loading2=true;
                    if(this.doc_mail==true && this.doc_sms==false){
                        this.show_modal2=false;
                        this.doc_mail=false;
                        source=1;
                        content=this.mail_text_content;
                    }
                    else if(this.doc_sms==true && this.doc_mail==false){
                        this.show_modal2=false;
                        this.doc_sms=false;
                        source=2;
                        content=this.sms_text_content;
                    }
                    else if(this.doc_sms==false && this.doc_mail==false){
                        this.subject='';
                        source=3;
                        content='Insurance/ Passport documents will be provided by travel agent so ignore.';
                    }
                    let form = new FormData();

                    form.set("group_id",this.$route.params.id)
                    form.set("source",source)
                    form.set("subject",this.subject)
                    // form.set("member_doc_tags",JSON.stringify(this.doc_data_new[0].member_doc_tags))
                    // form.set("member_family",JSON.stringify(this.doc_data_new[0].meta_family))

                    form.set("member_doc_tags",this.all_members_data[0].member_doc_tags)
                    form.set("member_family",this.all_members_data[0].meta_family)


                    form.set("content",content)
                    axios.post('/api/webservices/request_doc_group',form)
                        .then(response => {
                            this.loading2=false;
                            this.$eventHub.$emit('create-success')
                            if(response.data=='no_members'){

                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'No member available in the group !',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                            }
                            else if(response.data=='no_subscription'){

                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'You dont have sms subscription !',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                            }
                            else if(response.data=='no_pending_doc'){
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'No Pending Documents',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })

                            }
                        })
                        .catch(error => {
                            this.loading2=false;
                            alert("Error while sending ");

                        })
                }
            },
            request_sms_logs(){

                axios.get('/api/webservices/sms_logs', {
                    params: {
                        id: this.$route.params.id,
                    }
                })
                    .then(response => {
                        if(response.data=='no_data'){
                            alert('No SMS Logs');
                        }
                        else{

                            this.sms_logs=response.data;
                            this.show_modal3=true;
                        }
                    })
            },
            validation(loc){
                if(loc==1){
                    alert('You Dont Have SMS Subscription')
                }

            },
            bulk_download(doc) {


                let ids = this.all_members_data.map(function(item) {
                    return item["id"];
                });

                    this.loading2 = true;
                    let form = new FormData();

                    form.set("id",this.$route.params.id)
                    form.set("type",doc)
                    form.set("members",JSON.stringify(ids))
                    axios.post('/api/webservices/fetch_data_url', form)
                        .then(response => {

                            if (response.data == 'no_members') {
                                alert('No Members Available');
                        }
                        else {

                                var zip = new JsZip();
            var img = zip.folder(response.data[0].folder_name);
            var orgcount = response.data[0].total;
            const MAX_SIZE = 100000; // 100kb

                                var urls_arr = [];
            var norcount = 0; 

            response.data[0].data.forEach((dataObj) => {
                console.log(" sub folder ",dataObj.folder_name);
                var folderName = dataObj.folder_name;
                var subfolderName = folderName;
                var subfolder = img.folder(subfolderName);
                dataObj.files.forEach((item) => {
                    urls_arr.push(item);
                });

                                if (orgcount > 0) {
                    if (response.data[0].data.length > 0) {
                        let form = new FormData();
                        form.set("data", JSON.stringify(urls_arr));
                        form.set("source", 1);

                                        axios.post('/api/webservices/get_file_content_js2', form)

                                            .then((response1) => {

                                                response1.data.forEach((dataObj) => {
                                                    var base64 = dataObj.url;
                                                    let ext='.jpeg';
                                                    if(dataObj.file_ext=='pdf'){
                                                        ext='.pdf';
                                                    }
                                                    subfolder.file(dataObj.filename + ext, base64, {
                                                        base64: true
                                                    });
                                                    norcount++;
                                                    if (orgcount === norcount) {
                                                        zip.generateAsync({
                                                            type: "blob"
                                                        })
                                                            .then(function (content) {
                                                                saveAs(content, "document.zip");

                                                            });
                                                        this.loading2 = false;
                                                    }
                                });
                            });
                                    }
                } else {
                                    alert('No Docs Available');
                                    this.loading2 = false;
                                }
                urls_arr = [];
                        });
        }
    });
            },
        }

    }
</script>


<style scoped>
    .button-css{
        float: right !important;
        margin-top: 20px !important;
        position: unset;
    }
    .extension_title{
        font-size: 17px !important;
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
        vertical-align: top;
        width: 55px;
        height: 20px;
        padding: 3px;
        border-radius: 18px;
        cursor: pointer;
    }

    .switch-input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    .switch-label {
        position: relative;
        display: block;
        height: inherit;
        font-family: 'Source Sans Pro',sans-serif;
        font-size: 12px;
        text-transform: uppercase;
        background: #cccccc;
        border-radius: inherit;
        -moz-box-shadow: #bebebe 0 0 2px 1px inset;
        -webkit-box-shadow: #bebebe 0 0 2px 1px inset;
        box-shadow: #bebebe 0 0 2px 1px inset;
        -moz-transition: ease-out 0.15s;
        -o-transition: ease-out 0.15s;
        -webkit-transition: ease-out 0.15s;
        transition: ease-out 0.15s;
        -moz-transition-property: opacity, background;
        -o-transition-property: opacity, background;
        -webkit-transition-property: opacity, background;
        transition-property: opacity background;
    }
    .switch-label:before, .switch-label:after {
        position: absolute;
        top: 50%;
        margin-top: -.5em;
        line-height: 1;
        -moz-transition: inherit;
        -o-transition: inherit;
        -webkit-transition: inherit;
        transition: inherit;
    }
    .switch-label:before {
        content: attr(data-off);
        right: 6px;
        color: #6d6d6d;
        text-shadow: 0 1px rgba(255, 255, 255, 0.5);
    }
    .switch-label:after {
        content: attr(data-on);
        left: 4px;
        color: white;
        text-shadow: 0 1px rgba(0, 0, 0, 0.2);
        opacity: 0;
    }
    .switch-input:checked ~ .switch-label {
        background: #0eabf4;
        -moz-box-shadow: #119af0 0 0 2px 1px inset;
        -webkit-box-shadow: #119af0 0 0 2px 1px inset;
        box-shadow: #119af0 0 0 2px 1px inset;
    }
    .switch-input:checked ~ .switch-label:before {
        opacity: 0;
    }
    .switch-input:checked ~ .switch-label:after {
        opacity: 1;
    }

    .switch-handle {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 18px;
        height: 18px;
        background: white;
        border-radius: 10px;
        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y3ZjdmNyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
        background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f7f7f7), color-stop(100%, #ffffff));
        background: -moz-linear-gradient(top, #f7f7f7, #ffffff);
        background: -webkit-linear-gradient(top, #f7f7f7, #ffffff);
        background: linear-gradient(to bottom, #f7f7f7, #ffffff);
        -moz-transition: left 0.15s ease-out;
        -o-transition: left 0.15s ease-out;
        -webkit-transition: left 0.15s ease-out;
        transition: left 0.15s ease-out;
    }
    .switch-input:checked ~ .switch-handle {
        left: 32px;
    }
    .filter_bar2 {
        width: 80% !important;
        height: 100%;
        border-radius: 20px 0px 0px 20px;
        border: 1px solid white;
        padding-left: 10px;
        font-size: 15px !important;
        margin-left: 50px;
    }
    .input-group {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: stretch;
        align-items: stretch;
        width: 70%;
    }
    .dropdown-menu{
        background: transparent;
        border: none;
    }
    .dropdown-menu a{
        background-color: #1E51A4 !important;
        border-radius: 15px;
        color: white;
    }
    .dropdown-menu a:hover{
        color: white !important;
        background-color: #1E51A4 !important;

    }
    .icon {
        background: black !important;
        color: white !important;
        padding: 10px 7px 16px 7px !important;
        border-radius: 5px !important;
    }
    .icon[data-v-c2b59c6a] {
        background: black !important;
        color: white !important;
        padding: 10px 7px 16px 7px !important;
        border-radius: 5px !important;
    }
    .icon_button {
        padding: 0px 36px 2px 18px;
        border-radius: 0px 5px 5px 0px;
        margin-left: -2px;
    }
    .input-group[class*="col-"] {
        float: none;
        padding: 40px !important;
    }
    .filter_bar2[data-v-c2b59c6a] {

        height: 100%;
        border-radius: 20px 0px 0px 20px;
        border: 1px solid white;
        padding-left: 10px;
        font-size: 15px !important;
        margin-left: 50px;
    }


/*Custom RadioButton*/
    input[type=radio] {
        opacity: 0;
        width: 100%;
        height: 42px;
        background-color: blue;
        position: relative;
        z-index: 1;
    }

    .group {

        display: flex;
    }

    .input-container {
        height: 42px;
        width: 100%;
        line-height: 42px;
        text-align: center;
        position: relative;
    }
    .input-container:first-child label {
        border-radius: 5px 0 0 5px;
    }
    .input-container:last-child label {
        border-radius: 0 5px 5px 0;
        border-right: 2px solid #CCC;
    }

    .input-container>label {
        width: 100%;
        height: 100%;
        position: absolute;
        border: 2px solid #CCC;
        border-right: inherit;
        top: 0;
        left: 0;
        font-family: arial;
        color: #737373;
    }

    input:checked + label {
        background-color: rgb(34, 80, 125);
        top: 0;
        left: 0;
        border: 2px solid rgb(34, 80, 125) !important;
        z-index: 2;
        color: white;
    }

</style>
