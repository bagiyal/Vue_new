<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Set Rooming <span v-if="mater_flag">: ({{all.length}})</span></h1>
        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design" >
                        <!--                        <div class="box-header">-->
                        <!--                            <h3 class="box-title"></h3>-->
                        <!--                        </div>-->

                        <div class="col-md-12 container-fluid" >
                            <div class="row">
                                <div class="col-md-2">


                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-2" v-if="!prog">

                                    Select City    <v-select v-model="selected_city"
                                                             name="forms"
                                                             label="city"
                                                             :options="city"
                                                             @input="fetchfilterdatacity"
                                                             :clearable="false"


                                />

                                </div>
                                <div class="col-md-2" v-if="this.selected_city!=''">

                                    Select Airline
                                    <v-select v-model="select_flightfilter"
                                              name="forms"
                                              label="form_name"
                                              :options="filtertag"
                                              @input="fetchfilterdata"
                                              :clearable="false"


                                    />

                                </div>
                                <div class="col-md-3" v-if="this.selected_city!=''">

                                    Select Hotel
                                    <v-select v-model="select_hotelfilter"
                                              name="forms"
                                              label="form_name"
                                              :options="hotelfiltertag"
                                              @input="fetchfilterhoteldata"
                                              :clearable="false"


                                    />

                                </div>
                                <div class="col-md-2 btn-group" style="text-align: center;margin-top: 2rem;" v-if="this.selected_city!='' && mater_flag">


                                    <button type="button" @click="add_data()" class="btn btn-success btn-sm f-1-5 f-w600" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Rooming Report</button>


                                </div>
                                <div class="col-md-2 btn-group" style="text-align: center;margin-top: 2rem;" v-if="this.selected_city!='' && mater_flag">


                                    <button type="button" @click="member_modal=true" class="btn btn-warning btn-sm f-1-5 f-w600" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">
                                        Pending Members
                                    </button>


                                </div>







                            </div>
                        </div>

                        <div class="loadnew" v-if="prog">

                            <vue-ellipse-progress :progress="transitionDuration"
                                                  :animation="animateDuration"


                            >

                                <!--                                <template v-slot:legend-value>-->
                                <!--                                    <span slot="legend-value">/{{transitionDuration}}</span>-->
                                <!--                                </template>-->
                                <template v-slot:legend-caption>
                                    <p slot="legend-caption">Building Rooms</p>
                                </template>

                            </vue-ellipse-progress>

                            <!--                                                                            <Progress-->
                            <!--                                                                                :transitionDuration="transitionDuration"-->
                            <!--                                                                                :radius="50"-->
                            <!--                                                                                :strokeWidth="20"-->
                            <!--                                                                                value="95"-->
                            <!--                                                                            >-->
                            <!--                                                                            </Progress>-->
                        </div>

                        <div class="box-body " style="overflow: auto;height: 450px">
                            <div v-if="active_modal">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-dialog" style="margin-top: -230px !important;">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close f-2-5" @click="active_modal=false">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>

                                                    </div>
                                                    <div class="modal-body">
                                                        <h2 class="modal-title">Partner {{modal_partner+1}}</h2>
                                                        <div class="row" style="padding: 20px">

                                                            <div class="col-md text-center">


                                                                <div v-if="modal_partner==0">
                                                                    <span v-if="all[modal_index].room_cat=='TWN' || all[modal_index].room_cat=='DBL'">Adult/Child</span>

                                                                    <v-select v-if="all[modal_index].room_cat=='TWN' || all[modal_index].room_cat=='DBL'"  placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner1(modal_index)"
                                                                              v-model="all[modal_index].with_me[0]"
                                                                              :options="
                                                                              all.filter(o => o.cancel_status.length==0?o.status=='true' && o.cat!='INF' &&  o.name!=all[modal_index].name
                                                                               && ( o.room_cat=='' || o.room_cat==null)
                                                                               && !( o.dob=='' || o.dob==null)
                                                                               && ( (o.book[0].tour_location[0].hotel.hotel_data!='' || o.book[0].tour_location[0].hotel.hotel_data!=null) ? o.book[0].tour_location[0].hotel.hotel_data.title==all[modal_index].book[0].tour_location[0].hotel.hotel_data.title : false )
                                                                               :'')"
                                                                              :disabled="  all[modal_index].room_cat===null  || typeof (all[modal_index].with_me[0])!== 'undefined'  "

                                                                    />
                                                                    <span v-if="all[modal_index].room_cat=='CWB' || all[modal_index].room_cat=='CNB'">Adult/Child</span>
                                                                    <v-select v-if="all[modal_index].room_cat=='CWB' || all[modal_index].room_cat=='CNB'"  placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner1(modal_index)"
                                                                              v-model="all[modal_index].with_me[0]"
                                                                              :options="all.filter(o =>  o.cancel_status.length==0? o.status=='true' && o.cat!='INF' &&  o.name!=all[modal_index].name &&
                                                                              ( o.room_cat=='' || o.room_cat==null)
                                                                              && !( o.dob=='' || o.dob==null)
                                                                               && (( o.book[0].tour_location[0].hotel.hotel_data!=''
                                                                               || o.book[0].tour_location[0].hotel.hotel_data!=null) ? o.book[0].tour_location[0].hotel.hotel_data.title==all[modal_index].book[0].tour_location[0].hotel.hotel_data.title : false )
                                                                               :'')"
                                                                              :disabled="  all[modal_index].room_cat===null  || typeof (all[modal_index].with_me[0])!== 'undefined'  "

                                                                    />
                                                                    <span v-if="all[modal_index].room_cat=='INF'|| all[modal_index].room_cat=='TRPL' || all[modal_index].room_cat== 'Quad' || all[modal_index].room_cat== 'Family'" >Adult</span>
                                                                    <v-select v-if="all[modal_index].room_cat=='INF'|| all[modal_index].room_cat=='TRPL' || all[modal_index].room_cat== 'Quad' || all[modal_index].room_cat== 'Family'"  placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner1(modal_index)"
                                                                              v-model="all[modal_index].with_me[0]"
                                                                              :options="all.filter(o =>  o.cancel_status.length==0?o.status=='true' && o.cat=='ADT' &&  o.name!=all[modal_index].name &&
                                                                               ( o.room_cat=='' || o.room_cat==null)
                                                                                && ( (o.book[0].tour_location[0].hotel.hotel_data!=''
                                                                               || o.book[0].tour_location[0].hotel.hotel_data!=null) ? o.book[0].tour_location[0].hotel.hotel_data.title==all[modal_index].book[0].tour_location[0].hotel.hotel_data.title : false )
                                                                              :'')"
                                                                              :disabled="  all[modal_index].room_cat===null  || typeof (all[modal_index].with_me[0])!== 'undefined'  "

                                                                    />
                                                                </div>
                                                                <div v-if="modal_partner==1">
                                                                    <span v-if="all[modal_index].room_cat=='CWB' ">Only Child</span>
                                                                    <v-select v-if="all[modal_index].room_cat=='CWB' " placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner2(modal_index)"
                                                                              v-model="all[modal_index].with_me[1]"
                                                                              :options="all.filter(o =>  o.cancel_status.length==0?o.status=='true' && o.cat=='CHD' &&  o.name!=all[modal_index].name && ( o.room_cat=='' || o.room_cat==null)  && !( o.dob=='' || o.dob==null) && (( o.book[0].tour_location[0].hotel.hotel_data!='' || o.book[0].tour_location[0].hotel.hotel_data!=null) ? o.book[0].tour_location[0].hotel.hotel_data.title==all[modal_index].book[0].tour_location[0].hotel.hotel_data.title : false )
                                                                                                    :'')"
                                                                              :disabled="all[modal_index].room_cat===''  || all[modal_index].room_cat===null  || all[modal_index].room_cat==='DBL' || typeof (all[modal_index].with_me[1])!== 'undefined' || all[modal_index].room_cat==='TWN'  "
                                                                    />
                                                                    <span v-if="all[modal_index].room_cat=='CNB' ">Only Child</span>
                                                                    <v-select v-if= " all[modal_index].room_cat=='CNB'"     placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner2(modal_index)"
                                                                              v-model="all[modal_index].with_me[1]"
                                                                              :options="all.filter(o =>  o.cancel_status.length==0?o.status=='true' && o.cat=='CHD' &&  o.name!=all[modal_index].name && ( o.room_cat=='' || o.room_cat==null) && !( o.dob=='' || o.dob==null) && ( (o.book[0].tour_location[0].hotel.hotel_data!='' || o.book[0].tour_location[0].hotel.hotel_data!=null) ? o.book[0].tour_location[0].hotel.hotel_data.title==all[modal_index].book[0].tour_location[0].hotel.hotel_data.title : false )
                                                                                                    :'')"
                                                                              :disabled="all[modal_index].room_cat===''  || all[modal_index].room_cat===null  || all[modal_index].room_cat==='DBL' || typeof (all[modal_index].with_me[1])!== 'undefined' || all[modal_index].room_cat==='TWN'  "
                                                                    />
                                                                    <span v-if= "all[modal_index].room_cat=='INF'">Only Infant</span>
                                                                    <v-select v-if= "all[modal_index].room_cat=='INF'"
                                                                              placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner2(modal_index)"
                                                                              v-model="all[modal_index].with_me[1]"
                                                                              :options="all.filter(o =>  o.cancel_status.length==0?o.status=='true' && o.cat=='INF' &&  o.name!=all[modal_index].name
                                                                              && ( o.room_cat=='' || o.room_cat==null)
                                                                              && !( o.dob=='' || o.dob==null)
                                                                              &&  ( (o.book[0].tour_location[0].hotel.hotel_data!='' || o.book[0].tour_location[0].hotel.hotel_data!=null) ? o.book[0].tour_location[0].hotel.hotel_data.title==all[modal_index].book[0].tour_location[0].hotel.hotel_data.title : false )
                                                                                :'')"
                                                                              :disabled="all[modal_index].room_cat===''  || all[modal_index].room_cat===null  || all[modal_index].room_cat==='DBL' || typeof (all[modal_index].with_me[1])!== 'undefined' || all[modal_index].room_cat==='TWN'  "
                                                                    />
                                                                    <span v-if= "all[modal_index].room_cat=='TRPL' || all[modal_index].room_cat== 'Quad' "> Adult</span>
                                                                    <v-select v-if= "all[modal_index].room_cat=='TRPL' || all[modal_index].room_cat== 'Quad' "     placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner2(modal_index)"
                                                                              v-model="all[modal_index].with_me[1]"
                                                                              :options="all.filter(o =>  o.cancel_status.length==0?o.status=='true' && o.cat=='ADT' &&  o.name!=all[modal_index].name && ( o.room_cat=='' || o.room_cat==null)  && !( o.dob=='' || o.dob==null) && (( o.book[0].tour_location[0].hotel.hotel_data!='' || o.book[0].tour_location[0].hotel.hotel_data!=null) ? o.book[0].tour_location[0].hotel.hotel_data.title==all[modal_index].book[0].tour_location[0].hotel.hotel_data.title : false )
                                                                                      :'')"
                                                                              :disabled="all[modal_index].room_cat===''  || all[modal_index].room_cat===null  || all[modal_index].room_cat==='DBL' || typeof (all[modal_index].with_me[1])!== 'undefined' || all[modal_index].room_cat==='TWN'  "
                                                                    />
                                                                    <span v-if="all[modal_index].room_cat=='Family'">Child/Infant</span>
                                                                    <v-select v-if="all[modal_index].room_cat=='Family'"   placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner2(modal_index)"
                                                                              v-model="all[modal_index].with_me[1]"
                                                                              :options="all.filter(o =>  o.cancel_status.length==0?o.status=='true' && o.cat!='ADT' &&  o.name!=all[modal_index].name && ( o.room_cat=='' || o.room_cat==null) && !( o.dob=='' || o.dob==null)  &&  (( o.book[0].tour_location[0].hotel.hotel_data!='' || o.book[0].tour_location[0].hotel.hotel_data!=null) ? o.book[0].tour_location[0].hotel.hotel_data.title==all[modal_index].book[0].tour_location[0].hotel.hotel_data.title : false )
                                                                                    :'')"
                                                                              :disabled="all[modal_index].room_cat===''  || all[modal_index].room_cat===null  || all[modal_index].room_cat==='DBL' || typeof (all[modal_index].with_me[1])!== 'undefined' || all[modal_index].room_cat==='TWN'  "
                                                                    />
                                                                </div>
                                                                <div v-if="modal_partner==2">
                                                                    <span v-if="all[modal_index].room_cat=='Quad'">Adult</span>
                                                                    <v-select v-if="all[modal_index].room_cat=='Quad'"  placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner3(modal_index)"
                                                                              v-model="all[modal_index].with_me[2]"
                                                                              :options="all.filter(o =>  o.cancel_status.length==0?o.status=='true' && o.cat=='ADT' &&  o.name!=all[modal_index].name && ( o.room_cat=='' || o.room_cat==null) && !( o.dob=='' || o.dob==null)  && ( (o.book[0].tour_location[0].hotel.hotel_data!='' || o.book[0].tour_location[0].hotel.hotel_data!=null )? o.book[0].tour_location[0].hotel.hotel_data.title==all[modal_index].book[0].tour_location[0].hotel.hotel_data.title : false )
                                                                              :'')"

                                                                              :disabled="all[modal_index].room_cat==='CWB' ||all[modal_index].room_cat==='CNB' ||all[modal_index].room_cat==='INF' ||all[modal_index].room_cat==='TRPL' ||all[modal_index].room_cat==='SGL' || all[modal_index].room_cat===''  || all[modal_index].room_cat===null || all[modal_index].room_cat==='DBL' || typeof (all[modal_index].with_me[2])!== 'undefined' || all[modal_index].room_cat==='TWN' "

                                                                    />
                                                                    <span v-if="all[modal_index].room_cat=='Family'">Child/Infant</span>
                                                                    <v-select v-if="all[modal_index].room_cat=='Family'"   placeholder="Select"
                                                                              label="name"
                                                                              :clearable="false"
                                                                              @input="selected_patner3(modal_index)"
                                                                              v-model="all[modal_index].with_me[2]"
                                                                              :options="all.filter(o =>  o.cancel_status.length==0?o.status=='true'&& o.cat!='ADT' &&  o.name!=all[modal_index].name && ( o.room_cat=='' || o.room_cat==null) && !( o.dob=='' || o.dob==null)  &&  o.booking_id==all[modal_index].booking_id :'')"
                                                                              :disabled="all[modal_index].room_cat==='CWB' ||all[modal_index].room_cat==='CNB' ||all[modal_index].room_cat==='INF' ||all[modal_index].room_cat==='TRPL' ||all[modal_index].room_cat==='SGL' || all[modal_index].room_cat===''  || all[modal_index].room_cat===null || all[modal_index].room_cat==='DBL' || typeof (all[modal_index].with_me[2])!== 'undefined' || all[modal_index].room_cat==='TWN' "

                                                                    />
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



                            <table class="table table-striped table-hover " style="margin-bottom: 0px;">

                                <thead>
                                <tr class="">
                                    <th class="font_style2 fit">
                                        Title

                                    </th>
                                    <th class="font_style2 fit">
                                        Name

                                    </th>
                                    <th class="font_style2 fit">
                                        Passport

                                    </th>
                                    <th class="font_style2 fit">
                                        Photo Id

                                    </th>
                                    <th class="font_style2 fit">
                                        Pax type
                                    </th>
                                    <th class="font_style2 fit">
                                        DOB
                                    </th>
                                    <th class="font_style2 fit">
                                        Age
                                    </th>
                                    <th class="font_style2 fit">
                                        Dealership
                                    </th>
                                    <th class="font_style2 fit">
                                        Relationship
                                    </th>

                                    <th class="font_style2 fit">

                                    </th>
                                    <th class="font_style2 fit">
                                        Rooming
                                    </th>
                                    <th class="font_style2 fit">
                                        Partner 1
                                    </th>
                                    <th class="font_style2 fit">
                                        Partner 2
                                    </th>
                                    <th class="font_style2 fit">
                                        Partner 3
                                    </th>
                                    <th class="font_style2 fit">
                                        Room Id
                                    </th>
                                    <th class="font_style2 fit">
                                        Remark
                                    </th>
                                    <th class="font_style2 fit">
                                        Check In
                                    </th>
                                    <th class="font_style2 fit">
                                        Check Out
                                    </th>
                                    <th class="font_style2 fit">
                                        Hotel Name
                                    </th>

                                </tr>
                                </thead>
                                <tbody v-if="mater_flag" style="">
                                <!--                           :class="[all[index].meta_rooming.drop[index].status?'disabled-row':''] "-->
                                <tr v-for="(data,index) in all" :class="[data.dob==''?'disabled-row':'']"   >
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''" :title="data.title" :alt="data.title">
                                        {{data.title}}
                                    </td>
                                    <td class="font_style fit" :title="data.name" :alt="data.name" :class="[all[index].status=='false'?'disabled-row':'',data.cancel_status.length>0?'cancelled_pax text-secondary':'']">
                                        <sup class="fa fa-star text-warning f-1-2 cursor" title="VIP/CIP Member" aria-hidden="true" v-if="data.vip==1"></sup>
                                        {{data.name}}
                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''" title="PPT" alt="PPT">
                                        <div >

                                            <div style="display: inline-block;" v-for="(dat,index) in JSON.parse(data.passport[0].meta_value).slice().reverse()"
                                                 v-if="dat.name != '' && data.name.includes(dat.name_first)">

                                                {{last=dat.passportno}}
                                                <span v-if="index>0">,</span>
                                            </div>

                                        </div>
                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''" title="Id" alt="Id">
                                        <div >

                                            <div style="display: inline-block;"  v-if="typeof data.photo_id[0] != 'undefined'">

                                                <div v-for="(dat,index) in JSON.parse(data.photo_id[0].meta_value).slice().reverse()"
                                                     v-if="dat.id_name != '' && data.name.includes(dat.mem_name)">

                                                    {{dat.id_num}}
                                                    <!--                                                    <span v-if="index>0">,</span>-->
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''" :title="data.cat" :alt="data.cat">
                                        {{data.cat}}
                                    </td>
                                    <td class="font_style fit"  :title="data.dob" :alt="data.dob">
                                        {{data.dob}}
                                    </td>
                                    <td class="font_style fit" :title="data.age" :alt="data.age">
                                        {{data.age}}
                                    </td>
                                    <td class="font_style fit"  :title="data.dealership[0].meta_value" :alt="data.dealership[0].meta_value" >
                                        <div >

                                            {{data.dealership[0].meta_value}}

                                        </div>
                                    </td>
                                    <td class="font_style fit" :title="data.relation" :alt="data.relation">
                                        {{data.relation}}
                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''">

                                        <i class="fa fa-refresh"  aria-hidden="true" @click="reset_field(index)" v-if="data.room_cat!=''  && data.room_cat!=null"></i>

                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''">
                                        <span style="display: none" v-if="data.room_no!='' && data.room_no!=null && room_no_count<data.room_no">
                                            {{room_no_count=data.room_no}}
                                        </span>

                                        <div >

                                            <v-select    v-if="all[index].cat!='CHD' && all[index].cat!='INF'  " v-model="data.room_cat" :clearable="false"

                                                         label="title"
                                                         :disabled="data.cancel_status.length==0?data.room_cat!=''  && data.room_cat!=null:'disabled'"
                                                         @input="selected_cat(index)"



                                                         :options="data.cancel_status.length==0?[
                                                      {code:'SGL',title:'Single (SGL)'},
                                                      {code:'TWN',title:'Twin (TWN)'}
                                                      ,{code:'DBL',title:'Double (DBL)'}
                                                      ,{code:'CWB',title:'DBL +Child with Bed (CWB)'}
                                                      ,{code:'CNB',title:'DBL +Child No Bed (CNB)'}
                                                      ,{code:'INF',title:'DBL +Infant (INF)'}
                                                      ,{code:'TRPL',title:'Triple (TRPL)'}
                                                      ,{code:'Quad',title:'Quad'}
                                                      ,{code:'Family',title:'Family'}]:[]
"

                                            />

                                        </div>
                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''">
                                        <div v-if="all[index].cat!='CHD' && all[index].cat!='INF'  " >
                                            <span class="title_add" v-if="(all[index].room_cat=='TWN' || all[index].room_cat=='DBL') && typeof all[index].with_me[0] == 'undefined'">Adult/Child <br></span>
                                            <span class="title_add"  v-if="(all[index].room_cat=='CWB' || all[index].room_cat=='CNB') && typeof all[index].with_me[0] == 'undefined'">Adult/Child <br></span>
                                            <span  class="title_add" v-if="(all[index].room_cat=='INF'|| all[index].room_cat=='TRPL' || all[index].room_cat== 'Quad' || all[index].room_cat== 'Family') && typeof all[index].with_me[0] == 'undefined'" >Adult <br></span>


                                            <i :class="( all[index].room_cat==='SGL' || all[index].room_cat==='' ||
                                            all[index].room_cat===null)?'disabled-row':''"
                                               v-if="typeof all[index].with_me[0] == 'undefined'" @click="active_modal=true,modal_index=index,modal_partner=0"
                                               class="fa fa-plus-square " aria-hidden="true" title="Add Partner" style="font-size: 32px;"></i>

                                            <span v-else>{{all[index].with_me[0].name}}</span>

                                        </div>

                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''">

                                        <div v-if="all[index].cat!='CHD' && all[index].cat!='INF'  "  >
                                            <span  class="title_add" v-if="all[index].room_cat=='CWB' && typeof all[index].with_me[1] == 'undefined'">Only Child <br></span>

                                            <span  class="title_add" v-if="all[index].room_cat=='CNB' && typeof all[index].with_me[1] == 'undefined'">Only Child <br></span>

                                            <span class="title_add"  v-if= "all[index].room_cat=='INF' && typeof all[index].with_me[1] == 'undefined'">Only Infant <br></span>

                                            <span  class="title_add" v-if= "(all[index].room_cat=='TRPL' || all[index].room_cat== 'Quad') &&  typeof all[index].with_me[1] == 'undefined' "> Adult <br></span>

                                            <span  class="title_add" v-if="all[index].room_cat=='Family'  && typeof all[index].with_me[1] == 'undefined'">Child/Infant <br></span>




                                            <i :class="( all[index].room_cat==='SGL'  || all[index].room_cat===''
                                        || all[index].room_cat===null  || all[index].room_cat==='DBL'
                                        || typeof (all[index].with_me[1])!== 'undefined' || all[index].room_cat==='TWN')?'disabled-row':''  "

                                               v-if="typeof all[index].with_me[1] == 'undefined'" @click="active_modal=true,modal_index=index,modal_partner=1"
                                               class="fa fa-plus-square " aria-hidden="true" title="Add Partner" style="font-size: 32px;"></i>

                                            <span v-else>{{all[index].with_me[1].name}}</span>

                                        </div>
                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''">

                                        <div v-if="all[index].cat!='CHD' && all[index].cat!='INF'  ">
                                            <span class="title_add"  v-if="all[index].room_cat=='Quad' && typeof all[index].with_me[2] == 'undefined'">Adult <br></span>

                                            <span  class="title_add" v-if="all[index].room_cat=='Family' &&  typeof all[index].with_me[1] == 'undefined'">Child/Infant <br></span>

                                            <i :class= "( all[index].room_cat==='SGL'
                                        || all[index].room_cat===''  || all[index].room_cat===null || all[index].room_cat==='DBL' || all[index].room_cat==='CWB'
                                        || all[index].room_cat==='CNB' || all[index].room_cat==='INF' || all[index].room_cat==='TRPL'
                                        || all[index].room_cat==='TRPL' || typeof (all[index].with_me[2])!== 'undefined'
                                        || all[index].room_cat==='TWN') ?'disabled-row':''"
                                               v-if="typeof all[index].with_me[2] == 'undefined'" @click="active_modal=true,modal_index=index,modal_partner=2"
                                               class="fa fa-plus-square " aria-hidden="true" title="Add Partner" style="font-size: 32px;"></i>

                                            <span v-else>{{all[index].with_me[2].name}}</span>

                                        </div>
                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''">
                                        <div >

                                            {{ data.room_no}}

                                        </div>
                                    </td>
                                    <td class="font_style fit">
                                        <div >

<!--                                        <input type="text" @input="room_set(index)" v-model="data.rooms">-->
                                        <input type="text" v-model="data.rooms">

                                        </div>

                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''">

                                        <!--                                        <date-picker-->
                                        <!--                                                     v-model="data.check_in"-->
                                        <!--                                                     :config="$root.dpconfigTimeshort"-->
                                        <!--                                                     name="driver_pickup_date_time"-->
                                        <!--                                                     class="form-control"></date-picker>-->
                                        <!--                                        <input type="text" style="width: 103px;" v-model="data.check_in"  name="checkintime" class="form-control">-->

                                        <div style="position:relative" >  <date-picker v-if="all[index].cat!='CHD' && all[index].cat!='INF'  "
                                                                                       style="width: 103px;"

                                                                                       name="checkintime"
                                                                                       class="form-control"
                                                                                       v-model="data.check_in"
                                                                                       :config="$root.dpconfigDate"


                                                                                       @dp-change="updatecheckin(index)"
                                        >
                                        </date-picker>
                                            <!--                                         <div v-else-if="all[index].i_am_with!='' && all[index].i_am_with!=null">-->
                                            <!--                                             {{all[all.findIndex(p => p.id == all[index].i_am_with)].check_in}}-->

                                            <!--                                         </div>-->
                                            <div v-else> {{data.check_in}}</div>

                                        </div>
                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''">
                                        <!--                                        <input type="text" style="width: 103px;" v-model="data.check_out" name="checkouttime" class="form-control">-->

                                        <div style="position:relative" >
                                            <date-picker v-if="all[index].cat!='CHD' && all[index].cat!='INF'  "
                                                         style="width: 103px;"
                                                         name="checkouttime"
                                                         class="form-control"
                                                         v-model="data.check_out"
                                                         :config="$root.dpconfigDate"
                                                         @dp-change="updatecheckout(index)"
                                            >
                                            </date-picker>
                                            <!--                                          <div v-else-if="all[index].i_am_with!='' && all[index].i_am_with!=null">-->
                                            <!--                                              {{all[all.findIndex(p => p.id == all[index].i_am_with)].check_out}}-->

                                            <!--                                          </div>-->

                                            <div v-else> {{data.check_out}}</div>
                                        </div>


                                        <!--                                        <date-picker-->
                                        <!--                                            v-model="data.check_out"-->
                                        <!--                                            :config="$root.dpconfigTimeshort"-->
                                        <!--                                            name="checkouttime"-->
                                        <!--                                            class="form-control"></date-picker>-->



                                    </td>
                                    <td class="font_style fit" :class="all[index].status=='false'?'disabled-row':''"><div >

                                        <input type="text" v-for="(dat,index) in data.book[0].tour_location"  v-if="data.city_id== dat.id && data.city_name==dat.name"
                                               :value="data.book[0].tour_location[index].hotel.hotel_data.title" disabled>

                                    </div>
                                    </td>

                                </tr>

                                </tbody>
                            </table>

                            <button  class="button-css" @click="save_data">Save</button>

                            <div v-if="member_modal">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-dialog" style="margin-top: -230px !important;max-width: 800px !important;">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close f-2-5" @click="member_modal=false">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>

                                                    </div>
                                                    <div class="modal-body">
                                                        <h2 class="modal-title">Pending Members</h2>
                                                        <div class="row" style="padding: 20px">
                                                            <div class="col-md text-center">
                                                                <table class="table table-striped table-hover " style="margin-bottom: 0px;">

                                                                    <thead>
                                                                    <tr class="">
                                                                        <!--                                                                        <th class="font_style2 fit">-->
                                                                        <!--                                                                            #-->

                                                                        <!--                                                                        </th>-->
                                                                        <th class="font_style2 fit">
                                                                            Name

                                                                        </th>
                                                                        <th class="font_style2 fit">
                                                                            Email

                                                                        </th>
                                                                        <th class="font_style2 fit">
                                                                            Number

                                                                        </th>

                                                                        <th class="font_style2 fit">
                                                                            Dealership

                                                                        </th>

                                                                    </tr>
                                                                    </thead>

                                                                    <tbody v-if="mater_flag" style="">
                                                                    <!--                           :class="[all[index].meta_rooming.drop[index].status?'disabled-row':''] "-->
                                                                    <tr v-for="(data,index) in all" v-if="data.dob==''"   >
                                                                        <!--                                                                        <td>{{index+1}}</td>-->
                                                                        <td>{{data.name}}</td>
                                                                        <td>{{data.email}}</td>
                                                                        <td>{{data.phone}}</td>
                                                                        <td>{{data.dealership[0].meta_value}}</td>
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
                                </transition>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'
    import DatatableActions_Members from '../../dtmodules/DatatableActions_Members'
    import DatatableSingle from '../../dtmodules/DatatableSingle'
    import DatatableList from '../../dtmodules/DatatableList'
    import DatatableCheckbox from '../../dtmodules/DatatableCheckbox'
    import login from "../../dtmodules/login";
    import ops from "../../dtmodules/ops";
    import activated from "../../dtmodules/activated";
    import statusbooking from "../../dtmodules/statusbooking";
    import dateonlybooking from "../../dtmodules/dateonlybooking";
    import activatedmembers from "../../dtmodules/activatedmembers";
    import groupname from "../../dtmodules/groupname";
    import memberaction from "../../dtmodules/memberaction";
    import downloads from "../../dtmodules/downloads";
    import documents from "../../dtmodules/documents";
    import member_sns from "../../dtmodules/member_sns";
    import docs_status from "../../dtmodules/docs_status";
    import JsZip from 'jszip'


    export default {
        data() {
            return {
                mater_flag:false,
                active_modal:false,
                member_modal:false,
                modal_index:'',
                modal_partner:'',
                loading2:false,
                room_no_count:0,
                prog:false,
                transitionDuration:100,
                animateDuration:"loop 36000 100",
                localsearch:'',
                json_fields: {
                    'Traveller Name ': 'name',
                    'Mobile No ':'number',
                    'Email ID ':'email',
                    'Rooming ':'room_cat',
                    'Partner 1 ':'pat1',
                    'Partner 2 ':'pat2',
                    'Partner 3 ':'pat3',
                    'Room Details ':'room',
                    'Hotel Name ':'hotel',
                    'Check-in':'check_in',
                    'Check-out':'check_out',
                    'Meal Preference':'meal_preference',


                },
                json_data:[],
                filtermodel:false,
                filtertoggle:false,
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
                all:[],
                filter:[],
                filtertag:[],
                hotelfiltertag:[],
                filtercheck:[],
                select_flightfilter:'Select',
                select_hotelfilter:'Select',
                city:[],
                selected_city:'',
                file_name:'',
                titles:['Group Name:','Group Ref Number:','Departure Date: '],





            }
        },
        mounted(){
            this.setcolumn(['tour_name',
                'booking_id',
                'driver_pick_up_time',
                'full_name',
                'phone']);
        },
        created() {
            // this.fetchfilterdata()
            let form = new FormData();
            this.prog=true;
            form.set("group_id",this.$route.params.id)

            axios.post('/api/v1/build_rooms',form)
                .then(response=> {

                    this.prog=false;

                });






            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency"){
                this.showtoagency=false
            }
            this.$root.relationships = this.relationships

            // axios.get('/api/v1/group_details/' + this.$route.params.id)
            //     .then(response => {
            //         this.group_id=response.data.data[0].booking_id
            //     })

            // this.fetchData(this.$route.params.id);
            axios.get('/api/v1/groupsroomingfilter/' + this.$route.params.id)
                .then(response => {
                    this.city=response.data.data.city



                })



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
        destroyed() {
            this.resetState()
        },
        computed: {
            ...mapGetters('GroupsIndexMember', ['added_partner_array','search','data', 'total', 'loading', 'relationships','filter_obj']),
        },
        watch: {
            filtertoggle:function (){
                if(this.filtertoggle){
                    this.filtermodel=true;
                }
                else {

                    this.clearfilter();
                    this.clearsearch();
                }

            },
            query: {
                handler(query) {
                    this.setQuery(query)
                },
                deep: true
            },
            // all:function () {
            //
            //
            //     //this.json_data=_.cloneDeep(this.json_data);
            //   //  this.json_data=this.all;
            //
            //     for(var b=0;b<this.all.length;b++){
            //
            //
            //             this.json_data.push({
            //                 'name':this.all[b].name,
            //                 'number':this.all[b].phone,
            //                 'email':this.all[b].email,
            //                 'room_cat':this.all[b].room_cat,
            //                 'pat1':typeof (this.all[b].with_me[0])=='undefined' ?'':this.all[b].with_me[0].name,
            //                 'pat2':typeof (this.all[b].with_me[1])=='undefined' ?'':this.all[b].with_me[1].name,
            //                 'pat3':typeof (this.all[b].with_me[2])=='undefined' ?'':this.all[b].with_me[2].name,
            //                 'room':this.all[b].rooms,
            //                 'hotel':this.all[b].book[0].tour_location[0].hotel.hotel_data.title,
            //             })
            //
            //
            //     }
            //
            //
            // },
            // license:function () {
            //     let form = new FormData();
            //
            //     form.set("id",this.$route.params.id)
            //     form.set("source",'index')
            //     axios.post('/api/webservices/member_docs',form)
            //         .then(response=>{
            //
            //             if(response.data==null){
            //                 this.req_doc=0;
            //                 this.total_doc=0;
            //
            //             }
            //             else{
            //
            //
            //                 const objectArray = Object.entries(response.data);
            //
            //                 this.total_doc=this.total_members*objectArray.length;
            //                 // alert(this.total_doc);
            //                 for(var y=0;y<objectArray.length;y++){
            //                     this.doc_data.push({
            //                         // objectArray[y][1] : objectArray[y][1]['value']
            //                         'name' :  objectArray[y][0],
            //                         'value' : objectArray[y][1]['value'],
            //                     });
            //                     if(objectArray[y][1]['value']>0){
            //
            //                         this.req_doc+=objectArray[y][1]['value'];
            //                     }
            //                 }
            //                 // console.log(this.doc_data);
            //             }
            //
            //         });
            // },

        },

        methods: {
            ...mapActions('GroupsIndexMember', ['fetchData', 'setQuery', 'resetState','setsearch' , 'setcolumn','setfilter']),

            updatecheckin(index){



                let form = new FormData();
                form.set('index',this.selected_city.index);
                form.set('checkin', this.all[index].check_in);
                form.set('type','checkin');
                form.set('id',this.all[index].book[0].id);
                axios.post('/api/webservices/update_check_in_out' , form)
                    .then(response => {
                        // this.save_data()
                    })

            },
            updatecheckout(index){

                let form = new FormData();
                form.set('index',this.selected_city.index);
                form.set('checkin', this.all[index].check_out);
                form.set('type','checkout');
                form.set('id',this.all[index].book[0].id);
                axios.post('/api/webservices/update_check_in_out' , form)
                    .then(response => {
                        // this.save_data()
                    })
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

            fetchfilterdatacity(){
                this.mater_flag=false
                this.loading2=true
                let form = new FormData();

                form.set("group_id",this.$route.params.id)
                form.set("flight_id",this.select_flightfilter)
                form.set("city",JSON.stringify(this.selected_city))
                axios.post('/api/v1/groupsrooming',form)

                    .then(response => {

                        this.all=response.data.data
                        this.filtertag=[];
                        this.hotelfiltertag=[];
                        this.select_flightfilter="Select";
                        this.select_hotelfilter="Select";
                        this.room_no_count=0;

                        for (let t =0 ; t< this.all.length; t++ ){

                            if(this.all[t].room_no!='' && this.all[t].room_no!=null  ){
                                this.room_no_count=this.all[t].room_no;
                            }
                            this.all[t].with_me=JSON.parse(this.all[t].with_me)
                            if(typeof this.all[t].with_me=="string"){
                                this.all[t].with_me=JSON.parse(this.all[t].with_me)
                            }
                        }
                        this.loading2=false
                        //      for (let p =0 ; p< this.all.length; p++ ){
                        // this.all[p].book[0].tour_location=JSON.parse(this.all[p].book[0].tour_location)

                        this.filter=response.data.data

                        for(let i=0; i<  this.filter.length; i++){
                            this.filter[i].flight[0].meta_value=JSON.parse(this.filter[i].flight[0].meta_value)
                            this.filter[i].book[0].tour_location=JSON.parse(this.filter[i].book[0].tour_location)
                            // console.log(this.filter[i].book[0].tour_location);
                            for(let j=0 ; j<this.filter[i].flight[0].meta_value.length;j++){

                                if(this.filter[i].flight[0].meta_value[j].ticket!=''){
                                    if(this.filter[i].flight[0].meta_value[j].arr_name.toLowerCase().includes(this.selected_city.city.toLowerCase())){
                                        var flight_number=this.filter[i].flight[0].meta_value[j].ticket+' ('+this.filter[i].flight[0].meta_value[j].dep_code+')'
                                        this.filtertag.push(flight_number)

                                    }

                                }

                                function onlyUnique(value, index, self) {
                                    return self.indexOf(value) === index;
                                }

                                var unique = this.filtertag.filter(onlyUnique);

                                this.filtertag=unique


                            }
                            for (let j=0; j<this.filter[i].book[0].tour_location.length;j++){

                                if(this.selected_city.id==this.filter[i].book[0].tour_location[j].id){
                                    // console.log(this.filter[i].book[0].tour_location[j].hotel.hotel_data.title);
                                    this.hotelfiltertag.push(this.filter[i].book[0].tour_location[j].hotel.hotel_data.title);
                                }
                                function onlyUnique(value, index, self) {
                                    return self.indexOf(value) === index;
                                }

                                var unique = this.hotelfiltertag.filter(onlyUnique);

                                this.hotelfiltertag=unique
                            }




                        }

                        this.filtertag.push("Select");
                        this.hotelfiltertag.push("Select");


                        //       }

                    })
                // this.all=_.cloneDeep([]);

            },
            fetchfilterdatacity2(){
                this.mater_flag=false
                this.loading2=true
                let form = new FormData();

                form.set("group_id",this.$route.params.id)
                form.set("flight_id",this.select_flightfilter)
                form.set("city",JSON.stringify(this.selected_city))
                axios.post('/api/v1/groupsrooming',form)

                    .then(response => {
                        this.all=response.data.data
                        this.filtertag=[];
                        this.hotelfiltertag=[];
                        // this.select_flightfilter="Select";
                        // this.select_hotelfilter="Select";

                        for (let t =0 ; t< this.all.length; t++ ){
                            this.all[t].with_me=JSON.parse(this.all[t].with_me)
                            if(typeof this.all[t].with_me=="string"){
                                this.all[t].with_me=JSON.parse(this.all[t].with_me)
                            }
                        }
                        this.loading2=false
                        //      for (let p =0 ; p< this.all.length; p++ ){
                        // this.all[p].book[0].tour_location=JSON.parse(this.all[p].book[0].tour_location)

                        this.filter=response.data.data

                        for(let i=0; i<  this.filter.length; i++){
                            this.filter[i].flight[0].meta_value=JSON.parse(this.filter[i].flight[0].meta_value)
                            this.filter[i].book[0].tour_location=JSON.parse(this.filter[i].book[0].tour_location)
                            // console.log(this.filter[i].book[0].tour_location);
                            for(let j=0 ; j<this.filter[i].flight[0].meta_value.length;j++){

                                if(this.filter[i].flight[0].meta_value[j].ticket!=''){
                                    if(this.filter[i].flight[0].meta_value[j].arr_name.toLowerCase().includes(this.selected_city.city.toLowerCase())){
                                        var flight_number=this.filter[i].flight[0].meta_value[j].ticket+' ('+this.filter[i].flight[0].meta_value[j].dep_code+')'
                                        this.filtertag.push(flight_number)

                                    }

                                }

                                function onlyUnique(value, index, self) {
                                    return self.indexOf(value) === index;
                                }

                                var unique = this.filtertag.filter(onlyUnique);

                                this.filtertag=unique


                            }
                            for (let j=0; j<this.filter[i].book[0].tour_location.length;j++){

                                if(this.selected_city.id==this.filter[i].book[0].tour_location[j].id){
                                    // console.log(this.filter[i].book[0].tour_location[j].hotel.hotel_data.title);
                                    this.hotelfiltertag.push(this.filter[i].book[0].tour_location[j].hotel.hotel_data.title);
                                }
                                function onlyUnique(value, index, self) {
                                    return self.indexOf(value) === index;
                                }

                                var unique = this.hotelfiltertag.filter(onlyUnique);

                                this.hotelfiltertag=unique
                            }

                        }

                        this.filtertag.push("Select");
                        this.hotelfiltertag.push("Select");


                        //       }
                        if(this.select_flightfilter!=='Select'){
                            this.fetchfilterdata(this.select_flightfilter)
                        }
                        if(this.select_hotelfilter!=='Select'){
                            this.fetchfilterhoteldata(this.select_hotelfilter)
                        }

                    })
                // this.all=_.cloneDeep([]);


            },


            fetchfilterdata(e){


                if(e!=='Select'){
                    var return_arr=[];
                    this.hotelfiltertag=[];

                    this.select_hotelfilter="Select";
                    for(let i=0; i<this.filter.length; i++){

                        for(let j=0 ; j<this.filter[i].flight[0].meta_value.length;j++){

                            if(this.filter[i].flight[0].meta_value[j].ticket!=''){
                                if(this.filter[i].flight[0].meta_value[j].arr_name.toLowerCase().includes(this.selected_city.city.toLowerCase())    ){
                                    var flight_number=this.filter[i].flight[0].meta_value[j].ticket+' ('+this.filter[i].flight[0].meta_value[j].dep_code+')';
                                    if(flight_number==e){
                                        return_arr.push(this.filter[i]);
                                        // console.log(this.filter[i].flight[0].meta_value[j].dep_name);

                                        for (let j=0; j<this.filter[i].book[0].tour_location.length;j++){

                                            if(this.selected_city.id==this.filter[i].book[0].tour_location[j].id){
                                                // console.log(this.filter[i].book[0].tour_location[j].hotel.hotel_data.title);
                                                this.hotelfiltertag.push(this.filter[i].book[0].tour_location[j].hotel.hotel_data.title);
                                            }
                                            function onlyUnique(value, index, self) {
                                                return self.indexOf(value) === index;
                                            }

                                            var unique = this.hotelfiltertag.filter(onlyUnique);

                                            this.hotelfiltertag=unique
                                        }

                                    }

                                }

                            }




                        }


                    }

                    this.hotelfiltertag.push("Select");
                    this.all=_.cloneDeep(return_arr);

                    this.mater_flag=true


                }
                else if(e=='Select'){

                    this.hotelfiltertag=[];
                    this.select_hotelfilter="Select";
                    for(let i=0; i<  this.filter.length; i++) {
                        for (let j = 0; j < this.filter[i].book[0].tour_location.length; j++) {

                            if (this.selected_city.id == this.filter[i].book[0].tour_location[j].id) {
                                // console.log(this.filter[i].book[0].tour_location[j].hotel.hotel_data.title);
                                this.hotelfiltertag.push(this.filter[i].book[0].tour_location[j].hotel.hotel_data.title);
                            }

                            function onlyUnique(value, index, self) {
                                return self.indexOf(value) === index;
                            }

                            var unique = this.hotelfiltertag.filter(onlyUnique);

                            this.hotelfiltertag = unique
                        }
                    }
                    this.hotelfiltertag.push("Select");
                    this.all=_.cloneDeep([]);

                }


            },
            fetchfilterhoteldata(e){
                if(e!=='Select'){
                    var return_arr=[];
                    // console.log(JSON.stringify(this.filter));
                    this.room_no_count=0;
                    for(let i=0; i<this.filter.length; i++){

                        for (let j=0; j<this.filter[i].book[0].tour_location.length;j++){
                            if(this.selected_city.id==this.filter[i].book[0].tour_location[j].id) {
                                if(e==this.filter[i].book[0].tour_location[j].hotel.hotel_data.title){

                                    return_arr.push(this.filter[i]);
                                    if(this.filter[i].room_no!='' && this.filter[i].room_no!=null  ){
                                        this.room_no_count=this.filter[i].room_no;
                                    }

                                }
                            }
                        }



                    }


                    this.all=_.cloneDeep(return_arr);

                    this.mater_flag=true
                    this.select_flightfilter="Select";

                }
                else if(e=='Select'){
                    this.all=_.cloneDeep([]);

                }
            },


            add_data(){
                this.loading2=true
                var meal_pref='';
                if(typeof this.selected_city.city!='undefined'){
                    this.file_name= 'Rooming-'+this.selected_city.city+'.xls'
                }
                else{

                    this.file_name= 'Rooming.xls'
                }



                this.json_data=_.cloneDeep([]);
                for(var b=0;b<this.all.length;b++){
                    let index=0;
                    for(let i=0;i<this.city.length ;i++){

                        if(this.city[i]==this.selected_city){
                            // alert(i);
                            index=i
                        }
                    }




                    this.json_data.push({
                        'booking_id':this.all[b].booking_id,
                        'flight':this.all[b].flight,
                        'group_id':this.all[b].group_id,
                        'type':this.all[b].type,
                        'name':this.all[b].name,
                        'number':this.all[b].phone,
                        'email':this.all[b].email,
                        'room_cat':this.all[b].room_cat,
                        'pax_type':this.all[b].cat,
                        'dob':this.all[b].dob,
                        'room_no':this.all[b].room_no,
                        'title':this.all[b].title,
                        'i_am_with':this.all[b].i_am_with,

                        'pat1':typeof (this.all[b].with_me[0])=='undefined' ?'':this.all[b].with_me[0].name,
                        'pat2':typeof (this.all[b].with_me[1])=='undefined' ?'':this.all[b].with_me[1].name,
                        'pat3':typeof (this.all[b].with_me[2])=='undefined' ?'':this.all[b].with_me[2].name,
                        'room':this.all[b].rooms,
                        'hotel':(typeof this.all[b].book[0].tour_location[index].hotel == "undefined")?'': this.all[b].book[0].tour_location[index].hotel.hotel_data.title,
                        'check_in':this.all[b].check_in,
                        'check_out':this.all[b].check_out,
                        'meal_preference':'',
                        'vip':this.all[b].vip,
                    })









                }


                let form=new FormData();
                form.set('id',this.$route.params.id);
                form.set('type','rooming');
                form.set('json',JSON.stringify(this.json_data));

                axios.post('/api/webservices/fetch_group_excel_dump',form)
                    .then(response=>{
                        // console.log(response.data);

                        if(response.data.status=='true'){

                            // console.log(JSON.stringify(response.data.data.data));


                            this.exportToCsv('Rooming Report '+ this.selected_city.city +'.csv', response.data.data.data);
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

            save_data(){
                this.loading2=true
                let form = new FormData();

                form.set("all",JSON.stringify(this.all))

                axios.post('/api/v1/save_rooming',form)
                    .then(response=>{
                        this.loading2=false
                        this.$eventHub.$emit('create-success')
                        this.fetchfilterdatacity2()



                    });

            },
            selected_cat(index){


                this.all[index].room_cat= this.all[index].room_cat.code

                this.all[index].room_no=_.cloneDeep(this.room_no_count=parseInt(this.room_no_count) + 1) ;
                if(this.all[index].room_cat!=='Family' && this.all[index].room_cat!=='SGL'){
                    if(this.all[index].vip=='1') {
                        alert(this.all[index].name + " has VIP tagging");
                    }
                }
            },
            // selected_cat(index){
            //  alert(3);
            //   if(this.all[index].meta_rooming.room_cat==='Family'){
            //     //  alert(2);
            //       for(let j=0; j<this.all.length; j++){
            //
            //           var flag=1;
            //           for (let k =0 ; k<this.all[j].meta_rooming.drop.length; k++ ){
            //               if(this.all[j].meta_rooming.drop[k].email==this.all[index].email ){
            //
            //              //     alert(1);
            //                   this.all[j].meta_rooming.drop[k].status=false
            //               }
            //
            //           }
            //       }
            //
            //   }
            //   else{
            //       for(let j=0; j<this.all.length; j++){
            //
            //           var flag=1;
            //           for (let k =0 ; k<this.all[j].meta_rooming.drop.length; k++ ){
            //               if(this.all[j].meta_rooming.drop[k].email==this.all[index].email ){
            //                   this.all[j].meta_rooming.drop[k].status=true
            //               }
            //
            //           }
            //       }
            //   }
            //   if(this.all[index].meta_rooming.room_cat!=='Family' && this.all[index].meta_rooming.room_cat!=='SGL'){
            //    alert(2);
            //    if(this.all[index].meta_vip){
            //        alert(this.all[index].full_name+" has VIP tagging");
            //    }
            //
            //     }
            // },

            reset_field(index){

                // console.log(this.all[index]);
                let count=0;
                this.all.forEach((room)=>{
                    if(room.room_no!='' && room.room_no!=null && room.room_no>this.all[index].room_no){
                        // console.log(room.name)
                        this.all[count].room_no=_.cloneDeep(this.all[count].room_no=parseInt(this.all[count].room_no) - 1) ;
                    }
                    count++;
                })
                let count2=0;
                this.filter.forEach((members)=>{

                    // console.log(this.all[index].room_no);

                    if(members.room_no!='' && members.room_no!=null ){

                        // console.log(this.all[index].room_no);
                        // console.log(this.all[index].name);

                        if(members.room_no>this.all[index].room_no){
                            //
                            //console.log(this.filter[count2].room_no);
                            this.filter[count2].room_no=_.cloneDeep(this.filter[count2].room_no=parseInt(this.filter[count2].room_no) - 1) ;
                            // console.log(this.filter[count2].room_no);
                        }

                    }



                    count2++;


                    // if(this.all[index].id == members.id){
                    //     console.log(members);
                    // }
                })
                // console.log('new');
                //
                this.all[index].room_cat=''
                this.all[index].rooms=''
                this.all[index].room_no=''



                if(typeof (this.all[index].with_me[0])!== 'undefined' && this.all[index].with_me[0]!==''){

                    for(let i=0 ;i<this.all.length;i++){


                        if( this.all[i].name==this.all[index].with_me[0].name &&   this.all[i].email==this.all[index].with_me[0].email && this.all[i].booking_id==this.all[index].with_me[0].booking_id){


                            this.all[i].status='true'
                            this.all[i].i_am_with=null
                            this.all[i].rooms=''
                            this.all[i].room_no=''

                        }
                    }
                }
                if(typeof (this.all[index].with_me[1])!== 'undefined' && this.all[index].with_me[1]!==''){

                    for(let i=0 ;i<this.all.length;i++){
                        if( this.all[i].name==this.all[index].with_me[1].name &&   this.all[i].email==this.all[index].with_me[1].email && this.all[i].booking_id==this.all[index].with_me[1].booking_id){
                            this.all[i].status='true'
                            this.all[i].i_am_with=null
                            this.all[i].rooms=''
                            this.all[i].room_no=''

                        }
                    }
                }
                if(typeof (this.all[index].with_me[2])!== 'undefined' && this.all[index].with_me[2]!==''){

                    for(let i=0 ;i<this.all.length;i++){
                        if( this.all[i].name==this.all[index].with_me[2].name &&   this.all[i].email==this.all[index].with_me[2].email && this.all[i].booking_id==this.all[index].with_me[2].booking_id){
                            this.all[i].status='true'
                            this.all[i].i_am_with=null
                            this.all[i].rooms=''

                        }
                    }
                }
                this.all[index].with_me=[]
                if(this.room_no_count>0){
                    this.room_no_count=parseInt(this.room_no_count) - 1 ;
                }


            },
            room_set(index){

                for(let i=0;i<this.all[index].with_me.length;i++){
                    for(let j=0 ;j<this.all.length;j++) {
                        if(this.all[j].id==this.all[index].with_me[i].id){
                            this.all[j].rooms=this.all[index].rooms

                        }
                    }

                }

            },
            room_set_no(index){

                for(let i=0;i<this.all[index].with_me.length;i++){
                    for(let j=0 ;j<this.all.length;j++) {
                        if(this.all[j].id==this.all[index].with_me[i].id){
                            this.all[j].room_no=this.all[index].room_no

                        }
                    }

                }

            },

            selected_patner1(index){

                for (let k =0 ; k<this.all.length; k++ ){

                    if( this.all[index].with_me[0].group_id==this.all[k].group_id &&
                        this.all[index].with_me[0].booking_id==this.all[k].booking_id &&
                        this.all[index].with_me[0].name==this.all[k].name ){
                        this.all[k].status='false'
                        this.all[k].i_am_with=this.all[index].id
                        this.all[k].rooms=this.all[index].rooms
                        this.all[k].room_no=this.all[index].room_no

                        if(this.all[index].type=='TWL' || this.all[index].type=='DBL'){

                            if(this.all[index].with_me[0].cat=='CHD'){
                                alert("Child will be charged as an adult");
                            }

                        }
                        if(this.all[index].type=='CWB' || this.all[index].type=='CNB'){

                            if(this.all[index].with_me[0].cat=='CHD'){
                                alert("Child will be charged as an adult");
                            }

                        }




                    }




                }
                this.active_modal=false;

            },
            selected_patner2(index){

                for (let k =0 ; k<this.all.length; k++ ){

                    if( this.all[index].with_me[1].group_id==this.all[k].group_id &&
                        this.all[index].with_me[1].booking_id==this.all[k].booking_id &&
                        this.all[index].with_me[1].name==this.all[k].name ){
                        this.all[k].status='false'
                        this.all[k].i_am_with=this.all[index].id
                        this.all[k].rooms=this.all[index].rooms
                        this.all[k].room_no=this.all[index].room_no


                    }




                }
                this.active_modal=false;


            },
            selected_patner3(index){

                for (let k =0 ; k<this.all.length; k++ ){

                    if( this.all[index].with_me[2].group_id==this.all[k].group_id &&
                        this.all[index].with_me[2].booking_id==this.all[k].booking_id &&
                        this.all[index].with_me[2].name==this.all[k].name ){
                        this.all[k].status='false'
                        this.all[k].i_am_with=this.all[index].id
                        this.all[k].rooms=this.all[index].rooms
                        this.all[k].room_no=this.all[index].room_no


                    }




                }
                this.active_modal=false;

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
            applyfilter(){
                this.clearsearch();
                this.filter_obj.status=true
                this.setfilter();
                this.filtermodel=false
                this.filtertoggle=true
            },
            clearfilter(){
                this.clearsearch();
                this.filter_obj.filter_sector='';
                this.filter_obj.queryfilter='4';
                this.filter_obj.filter_datefrom='';
                this.filter_obj.filter_dateto='';
                this.filter_obj.status=false
                this.filtertoggle=false

            },


        }

    }
</script>


<style scoped>
    .title_add{
        color: gray;
        font-size: 12px;
    }



    .font_style{
        width: 10%;

    }

    .disabled-row{
        opacity: 0.4;
        pointer-events: none;
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

    .table td.fit,
    .table th.fit {
        white-space: nowrap;
        width: 1%;
    }
</style>
