<template>
    <section class="content-wrapper" :style="role=='subscriber'? 'margin-left:0px !important':''" style="min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>

            <h1 style="margin-left: 50px" v-if="role!=='subscriber'" >Traveller Edit</h1>
        </section>
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <!--        Tag Modal-->
        <div class="container"  v-if="show_modal">
            <div class="modal show in" id="myModal1" style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body" >
                            <button type="button" class="close f-2" data-dismiss="modal" @click="show_modal=false">&times;</button><br>
                            <div class="container-fluid" style="text-align: left;margin-bottom:20px;">
                                <h2 style="text-align: left"><i class="fa fa-tag f-1-5" aria-hidden="true"></i>&nbsp;Add Tag</h2>
                                <hr>

                                <input
                                    type="text"
                                    class="form_control f-1-5"
                                    style="width: 80%;border-radius: 10px;height: 35px !important;padding-left: 10px;"
                                    name="form_name"
                                    placeholder="Enter tag name"
                                    v-model="new_tag_name"


                                >
                                <button type="button" class="btn btn-success" style="background: rgb(34, 80, 125) none repeat scroll 0% 0%;margin-left: 20px;font-size: 15px;border-radius: 12px;" @click="add_custom_field">Add</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--        Address Modal-->
        <div class="container"  v-if="show_modal2">
            <div class="modal show in" id="myModal2" style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body" >
                            <button type="button" class="close f-2" data-dismiss="modal" @click="show_modal2=false">&times;</button><br>
                            <div class="container-fluid" style="text-align: left">
                                <h2 style="text-align: left">&nbsp;Change Address</h2>
                                <hr>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-12 ">
                                            <label for="address">Address</label>

                                            <input
                                                type="text"
                                                class="form-control"
                                                name="role"
                                                style="margin-top: 0px;padding-left: 0px;"
                                                v-model="new_address"

                                            >
                                        </div>
                                        <div class="col-md-6 ">
                                            <label for="city">City</label>


                                            <input
                                                type="text"
                                                class="form-control"
                                                name="role"
                                                style="margin-top: 0px;padding-left: 0px;height: 34px !important;"
                                                v-model="new_city"

                                            >
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="country">Country</label>
                                            <v-select v-model="new_country"
                                                      name="country"
                                                      label="name"
                                                      :options="country_arr"

                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12" style="text-align: right;">
                                <button type="button" class="btn btn-success f-1-5 b_r_1 m_t2" style="background: rgb(34, 80, 125)" @click="update_address">Update Address</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--            Passport View Modal-->
        <div class="container"  v-if="show_modal3">
            <div class="modal show in" id="myModal3" style="display: block;">
                <div class="modal-dialog" style="max-width: 800px !important;">
                    <div class="modal-content">
                        <div class="modal-body" >
                            <button type="button" class="close f-2" data-dismiss="modal" @click="show_modal3=false">&times;</button><br>
                            <div class="container-fluid" style="text-align: left">
                                <h2 style="text-align: left">
                                    &nbsp;{{documents[0].exp_date?documents[0].name_first+' '+documents[0].name_last:documents[0].mem_name}}
                                    {{documents[0].exp_date?'Passport Details':documents[0].id_name}}
                                </h2>
                                <hr>
                                <div class="col-12">

                                    <div class="row center" v-if="documents[0].exp_date">
                                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <label for="date" class="text-muted">Issued Date</label>

                                            <h2>{{documents[0].issue_date}}</h2>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <label for="date" class="text-muted">Exp. Date</label>

                                            <h2>{{documents[0].exp_date}}</h2>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <label for="date" class="text-muted">Issued. Place</label>

                                            <h2>{{documents[0].issue_place}}</h2>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <label for="first_name" class="text-muted">First Name</label>

                                            <h2>{{documents[0].name_first}}</h2>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <label for="last_name" class="text-muted">Last Name</label>

                                            <h2>{{documents[0].name_last}}</h2>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <label for="pass no." class="text-muted">Passport No.</label>

                                            <h2>{{documents[0].passportno}}</h2>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-4 col-lg-3">
                                            <label for="passport" class="text-muted">Passport</label> <br>

                                            <button  title="passport" @click="open_passport(documents[0].pdf,1)" class="btn btn-success">
                                                <i class="fa fa-download" aria-hidden="true"></i> Download
                                            </button>

                                        </div>
                                    </div>
                                    <div class="row center" v-else>

                                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <label for="date" class="text-muted">ID Type</label>

                                            <h2>{{documents[0].id_name}}</h2>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <label for="date" class="text-muted">ID Number</label>

                                            <h2>{{documents[0].id_num}}</h2>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                                            <label for="date" class="text-muted">Member Name</label>

                                            <h2>{{documents[0].mem_name}}</h2>
                                        </div>
                                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <label for="passport" class="text-muted">{{documents[0].id_name}}</label> <br>

                                            <button  title="passport" @click="open_passport(documents[0].url,2)" class="btn btn-success">
                                                <i class="fa fa-download" aria-hidden="true"></i> Download
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--            Invoce View Modal-->
        <div class="container"  v-if="show_modal4">
            <div class="modal show in" id="myModal4" style="display: block;">
                <div class="modal-dialog" style="max-width: 800px !important;">
                    <div class="modal-content">
                        <div class="modal-body" >
                            <button type="button" class="close f-2" data-dismiss="modal" @click="show_modal4=false">&times;</button><br>
                            <div class="container-fluid" style="text-align: left">
                                <h2 style="text-align: left">Package Cost</h2>
                                <hr>
                                <div class="col-md-12 text-center overflow-auto">


                                    <table class="body-wrap_cost">
                                        <tbody><tr>

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
                                                                                    <td>{{item.name}}</td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <td>

                                                                                        <table class="invoice-items" cellpadding="0" cellspacing="0" >
                                                                                            <tbody>
                                                                                            <tr v-for="(invoce,index) in invoice_data" :key="index">
                                                                                                <td class="" v-if="invoce.type=='markup' || invoce.type=='total' || invoce.type=='tax'"> {{invoce.title}}</td>
                                                                                                <td v-else-if="invoce.type=='final'"><b> {{invoce.title}} </b></td>
                                                                                                <td v-else>{{invoce.type.toUpperCase()}} : {{invoce.title}}</td>
                                                                                                <td class="alignright" :class="[invoce.type=='final' || invoce.type=='total' || invoce.type=='tax'?'font-weight-bold':'']">{{invoce.cost}}</td>
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

                                    <button class="btn-success mt-2 f-22"  v-if="uastra_payment_button" @click="mf_payment(form_data.booking_id,form_data)">Click To Pay</button>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        number update modal-->
        <div class="container"  v-if="numberModal">
            <div class="modal show in" id="" style="display: block;">
                <div class="modal-dialog" style="max-width:600px !important;">
                    <div class="modal-content">
                        <div class="modal-body" >
                            <button type="button" class="close f-2" data-dismiss="modal" @click="numberModal=false">&times;</button><br>
                            <div class="container-fluid" style="text-align: left">
                                <h2 style="text-align: left">&nbsp;Update Phone Number</h2>
                                <hr>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-3"><h3>Old Number</h3></div>
                                        <div class="col-md-9">

                                            <vue-tel-input  disabled="disabled" v-bind="bindProps"  v-model="item.phone"   placeholder="Enter New Number"   name="phone"  class="form-control vue-tel-input fw-3"></vue-tel-input>
                                        </div>

                                    </div>
                                    <div class="row mt-4">

                                        <div class="col-md-3"><h3>New Number</h3></div>
                                        <div class="col-md-9">

                                            <vue-tel-input v-bind="bindProps"  v-model="newPhoneNumber"   placeholder="Enter New Number"   name="phone"  class="form-control vue-tel-input fw-3"></vue-tel-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12" style="text-align: right;">
                                <button :disabled="newPhoneNumber==null || newPhoneNumber==''" type="button" class="btn btn-success f-1-5 b_r_1 m_t2" style="background: rgb(34, 80, 125)" @click="updateNumber">Update</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <section class="content">
            <div class="row" >
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm2" novalidate>
                        <div class="box box_design">
<!--                            <div class="box-header " style="text-align: right; color:#1E51A4; ">-->
<!--                                <h3 class="box-title">Last Booking Date: {{last_booking_date}}</h3>-->
<!--                            </div>-->

                            <bootstrap-alert />

                            <div class="box-body" style="padding:0px">


                                <div class="demo">

                                    <div class="MainSec" style="margin-right:2rem">
                                        <div class="row">
                                            <div class="col-md-3 d-none d-lg-block d-xl-block"  v-if="role!=='subscriber'">
                                               <div style="background: #fff;height: 700px;padding-bottom: 25px; padding:1rem" >
                                                <div class="col-md-12 border_bottom" style="text-align: center">

                                                    <img src="./../dashboard_resources/test_image.jpg" class="trav_image">
                                                    <p class="details" style="margin-top: 10px !important;" >
                                                        {{item.name}}</p>
                                                    <p class="details cursor" title="Update Number" @click="numberModal=true">{{item.phone}}
                                                        <i class="fa fa-pencil-square" aria-hidden="true"></i>
                                                    </p>


                                                    <p class="details">{{item.email}}</p>

                                                </div>
                                                <div class="col-md-12 border_bottom">
                                                    <div class="row">
                                                        <div class="col-md-6 border-right" style="border-bottom: 1px dotted black;" >

                                                            <div  class="col-md-12">
                                                                <img src="./../dashboard_resources/cake.png" style="width: 25px;height: 25px;position: absolute">
                                                                <p style="margin-left: 25px;margin-top: 4px;">&nbsp;Birthday</p>
                                                                <p style="font-size: 16px;">{{formatted_dob}}</p></div>
                                                        </div>
                                                        <div class="col-md-6" style="border-bottom: 1px dotted black;">
                                                            <div  class="col-md-12">
                                                                <img src="./../dashboard_resources/anniversary.png" style="width: 25px;height: 25px;position: absolute">
                                                                <p style="margin-left: 25px;margin-top: 4px;">&nbsp;Anniversary</p>
                                                                <p style="font-size: 16px;">{{formatted_anniversary}}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 border_bottom" >
                                                    <h3>Company Name :</h3><br>
                                                    <div class="row" style="margin-top: -10px;">
                                                        <div class="col-10 "> <input
                                                            type="text"
                                                            class="form-control"
                                                            name="role"
                                                            style="border: none;height: 20px !important;margin-top: 0px;padding-left: 0px; background-color: rgba(128,128,128,0.37)"
                                                            v-model="meta.meta_company_name"
                                                            @input="updatemeta_company_name"
                                                        >
                                                        </div>
                                                        <div class="col-md-2">
                                                            <!--                                                            <img src="./../dashboard_resources/edit.png"  style="width: 25px;height: 25px;">-->
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-md-12 border_bottom" >
                                                    <h3>Role :</h3>
                                                    <br>


                                                    <div class="row" style="margin-top: -10px;">
                                                        <div class="col-10 "><input
                                                            type="text"
                                                            class="form-control"
                                                            name="role"
                                                            style="border: none;height: 20px !important;padding-left: 0px; background-color: rgba(128,128,128,0.37)"
                                                            v-model="meta.meta_role"
                                                            @input="updatemeta_role"
                                                        >
                                                        </div>
                                                        <div class="col-md-2">
                                                            <!--                                                            <img src="./../dashboard_resources/edit.png"  style="width: 25px;height: 25px;">-->
                                                        </div>
                                                    </div>


                                                </div>
                                                <div class="col-md-12 border_bottom" >
                                                    <h3>Address : <span @click="show_modal2=true" style="cursor: pointer" title="Change Address">

                                                        <img src="./../dashboard_resources/edit.png" @click="show_modal2=true"  style="width: 25px;height: 25px;">
                                                    </span></h3>



                                                    <h3 v-if="item.address!=null">{{item.address[0].address+", "+item.address[0].city+", "+item.address[0].country}}</h3>
                                                    <!--<h3>{{item.address}}</h3>-->
                                                </div>
                                                <div class="col-md-12 border_bottom" >
                                                    <h3>Related People :</h3>

                                                    <div class="row">
                                                        <div class="col-md-6 related_mem" v-for="(name,index) in related_mem">
                                                            {{name}}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 "  style="margin: 2rem 0">
                                                       <div class="col-md-10" style="margin-right: 20% ;width: 80%;height: 110px;" v-if="role!=='subscriber'">
                                                           <img src="./../dashboard_resources/rupee_icon.png" style="width: 200px;height:125px;position: absolute;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                                                           <p style="position: relative;text-align:center;font-weight: 400;font-size: 20px;width: 234px;padding-top: 14%;">Total Business</p>
                                                           <p style="position: relative;text-align:center;font-weight: bold;font-size: 20px;width: 234px;">
                                                               {{total_bussiness}}</p>
                                                           <span v-if="role!=='subscriber'" >
                                                                    <p style="width: 100%;position: relative;text-align:center;font-size: 13px;width: 234px;">Till : {{last_cron_date}}</p>
                                                                </span>

                                               </div>





                                                   </div>
                                               </div>

                                            </div>

                                            <div class="" :class="role!='subscriber'?'col-md-12 col-sm-12 col-lg-9':meta.documents.length>0?'col-md-12 col-sm-12 col-lg-10':'col-md-12 col-sm-12 col-lg-9'">

                                                <div class="tab" role="tabpanel "  style="border-bottom: none">
                                                    <!-- Nav tabs -->
                                                    <ul class="nav nav-tabs" :style="role=='subscriber'? 'margin-left: 0px !important;margin-top:25px;':'margin-bottom: 2rem !important;'" role="tablist" style="float: unset !important;">

                                                        <!--                                                        <li v-if="platform=='travelexic'" role="presentation" :class="[role!='subscriber'?'active':'']" class="">-->
                                                        <!--                                                            <a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">-->
                                                        <!--                                                                <i style="font-size: 21px;" class="fa fa-puzzle-piece" aria-hidden="true" ></i>-->
                                                        <!--                                                                <span>Demographic</span>-->
                                                        <!--                                                            </a>-->
                                                        <!--                                                        </li>-->
                                                        <li class="list-style d-none d-md-block d-lg-block d-xl-block active" v-if="license_value" role="presentation" ><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab"><i style="font-size: 21px;" class='fas fa-brain'></i><br><span>Psychographic</span></a></li>
                                                        <li class="list-style d-md-block d-lg-block d-xl-block active" v-if="role==='subscriber'" role="presentation" ><a href="#Section5" aria-controls="home" role="tab" data-toggle="tab"><i style="font-size: 21px;" class='fa fa-file-text'></i><br><span>Forms</span></a></li>

                                                        <li class="list-style" v-if="license_value" role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab"><i style="font-size: 21px;" class="fa fa-history" aria-hidden="true" ></i><br><span>History</span></a></li>
                                                        <li class="list-style" v-if="license_value" role="presentation"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab"><i class="fa fa-thumbs-up" style="font-size: 21px;" aria-hidden="true"></i><br><span>Feedback</span></a></li>
                                                        <li class="list-style d-md-block d-lg-block d-xl-block" v-if="role==='subscriber' && traveller_data.length>1" role="presentation" ><a href="#Section6" aria-controls="home" role="tab" data-toggle="tab"><i style="font-size: 21px;" class='fas fa-history'></i><br><span>Tour History</span></a></li>
                                                        <li class="list-style d-md-block d-lg-block d-xl-block" v-if="role==='subscriber'"  role="presentation"><a href="#Section7" aria-controls="home" role="tab" data-toggle="tab"><i style="font-size: 21px;" class='fa fa-folder'></i><br><span>Document</span></a></li>

                                                    </ul>
                                                    <!-- Tab panes -->
                                                    <div class="tab-content tabs mb-5" style="border-bottom: none">
                                                        <div role="tabpanel" class="tab-pane fade" :class="[role!='subscriber'?'active show in no-use':'']"   id="Section1" >
                                                            <div class="col-md-12" style="padding-right: 0px !important;">
                                                                <div class="row">
                                                                    <div class="col-md-4" style="padding-left: 30px;">
                                                                        <!--                                                                        <p style="font-size: 2rem;"></p>-->
                                                                        <label for="allergens">Profile Tags</label>
                                                                    </div>
                                                                    <div class="col-md-8" style="text-align: right" v-if="enable_div==true" >
                                                                        <a  class="button-css" style="color: white;" @click="show_modal=true" >Add Tag</a></div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-12" >
                                                                <div class="row">
                                                                    <div class="col-md-10" v-if="tags_arr_delete.length>0"  style="margin-left: 20px;">
                                                                        <div class="row" >
                                                                            <div class="" v-for="tags in this.tags_arr_delete" style="padding-bottom:3px;  padding-right: 7px;">

                                                                                <p style="font-size: 15px;padding: 10px;"> <i class="fa fa-tag" aria-hidden="true"></i>&nbsp;{{tags.tag}}&nbsp;
                                                                                    <i class="fa fa-times" style="color: black;cursor: pointer;" @click="delete_tag_fun(tags.tag,tags.type,tags.loc)"></i>
                                                                                </p>

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-2">



                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12"  style="margin-top: 30px;">
                                                                <!--                                                               Allergens-->
                                                                <div class="col-md-12">
                                                                    <div class="row">
                                                                        <div class="form-group col-md-12">
                                                                            <label for="allergens">Allergens</label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                name="allergens"
                                                                                placeholder="Enter Allergens"
                                                                                v-model="meta.meta_allergens"
                                                                                @input="updatemeta_allergens"
                                                                            >

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--                                                               Food Prefrence Food Habits-->
                                                                <div class="col-md-12">
                                                                    <div class="row">
                                                                        <div class="form-group col-md-6 ">
                                                                            <label for="food_pref">Food Preference</label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                name="food_pref"
                                                                                placeholder="Enter Food Preference"
                                                                                v-model="meta.meta_food_prefrence"
                                                                                @input="updatemeta_food_prefrence"
                                                                            >

                                                                        </div>
                                                                        <div class="form-group col-md-6">
                                                                            <label for="food_habits">Food Habits</label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                name="food_habits"
                                                                                placeholder="Enter Habits"
                                                                                v-model="meta.meta_food_habits"
                                                                                @input="updatemeta_food_habits"
                                                                            >

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--                                                               Type of Tourist-->
                                                                <div class="col-md-12">
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="row">
                                                                                <div class="form-group col-md-12">
                                                                                    <label for="tourist_type">Type of Tourist</label>
                                                                                    <v-select v-model="type_of_tourist"
                                                                                              name="type Of_tourist"
                                                                                              label="type"

                                                                                              :options="platform=='sotc'?type_of_tourist_type2:type_of_tourist_type"
                                                                                              @input="inmodal"
                                                                                              style="background: white;"
                                                                                              class="f-1-5"
                                                                                              multiple
                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--                                                               Interests-->
                                                                <div class="col-md-12">
                                                                    <div class="row">
                                                                        <div class="form-group col-md-12">
                                                                            <label for="interests ">Interests</label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                name="Interests "
                                                                                placeholder="Enter Interests"
                                                                                v-model="meta.meta_interests"
                                                                                @input="updatemeta_interests"
                                                                            >

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--                                                               Lifestyle-->
                                                                <div class="col-md-12">
                                                                    <div class="row">
                                                                        <div class="form-group col-md-12">
                                                                            <label for="lifestyle ">Lifestyle</label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                name="Lifestyle"
                                                                                placeholder="Enter Lifestyle"
                                                                                v-model="meta.meta_lifestyle"
                                                                                @input="updatemeta_lifestyle"
                                                                            >
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--                                                               Seating Preferences Room Preferences-->
                                                                <div class="col-md-12">
                                                                    <div class="row">
                                                                        <div class="form-group col-md-6">
                                                                            <label for="seating_pref">Seating Preferences</label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                name="seating_pref"
                                                                                placeholder="Enter Seating Preferences"
                                                                                v-model="meta.meta_seating_pref"
                                                                                @input="updatemeta_seating_pref"
                                                                            >

                                                                        </div>
                                                                        <div class="form-group col-md-6">
                                                                            <label for="room_pref">Room Preferences</label>
                                                                            <input
                                                                                type="text"
                                                                                class="form-control"
                                                                                name="room_pref"
                                                                                placeholder="Enter Room Preferences"
                                                                                v-model="meta.meta_room_pref"
                                                                                @input="updatemeta_room_pref"
                                                                            >

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--&lt;!&ndash;                                                               Reward Excitements&ndash;&gt;-->
                                                                <!--                                                                <div class="col-md-12">-->
                                                                <!--                                                                <div class="form-group col-md-12">-->
                                                                <!--                                                                    <label for="reward">Reward Excitements</label><br>-->
                                                                <!--                                                                    <input type="radio" id="yes" name="reward" value="yes">&nbsp;&nbsp;&nbsp;-->
                                                                <!--                                                                    <label for="male">Yes</label>-->
                                                                <!--                                                                    <input type="radio" id="no" name="reward" value="no">&nbsp;&nbsp;&nbsp;-->
                                                                <!--                                                                    <label for="female">No</label><br>-->


                                                                <!--                                                                </div>-->
                                                                <!--                                                            </div>-->









                                                            </div>
                                                            <div class="box-footer" style="text-align: right">

                                                                <a v-if="enable_div==false" class="button-css" style="color: white;margin-top: 20px;" @click="enable()" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;
                                                                    Edit</a>
                                                                <button v-if="enable_div==true"
                                                                        class="button-css"
                                                                        :isLoading="loading"
                                                                        :disabled="loading"
                                                                        @click="submitForm">
                                                                    Update
                                                                </button>
                                                            </div>

                                                        </div>
                                                        <div role="tabpanel" class="tab-pane fade "  id="Section2">

                                                            <div class="col-md-12" style="margin-top: 50px">
                                                                <div class="row">
                                                                    <div class="form-group col-md-3 ">
                                                                        <label for="dob">Date Of Birth</label>
                                                                        <!--                                                                        <input-->
                                                                        <!--                                                                            type="date"-->
                                                                        <!--                                                                            class="form-control text-muted fw-4"-->
                                                                        <!--                                                                            name="dob"-->
                                                                        <!--                                                                            v-model="meta.meta_dob"-->
                                                                        <!--                                                                            @input="updatemeta_dob"-->
                                                                        <!--                                                                        >-->
                                                                        <date-picker


                                                                            :config="$root.dpconfigDate_disable_future_dates"
                                                                            class="form-control text-muted fw-4"
                                                                            name="dob"
                                                                            v-model="meta.meta_dob"
                                                                            @input="updatemeta_dob"
                                                                            placeholder="dd-mm-yyyy"
                                                                        >
                                                                        </date-picker>

                                                                    </div>
                                                                    <div class="form-group col-md-3 ">
                                                                        <label for="anniversary">Marriage Anniv.</label>
                                                                        <!--                                                                        <input-->
                                                                        <!--                                                                            type="date"-->
                                                                        <!--                                                                            class="form-control text-muted fw-4"-->
                                                                        <!--                                                                            name="anniversary"-->
                                                                        <!--                                                                            v-model="meta.meta_anniversary"-->
                                                                        <!--                                                                            @input="updatemeta_anniversary"-->
                                                                        <!--                                                                        >-->
                                                                        <date-picker


                                                                            :config="$root.dpconfigDate_disable_future_dates"
                                                                            class="form-control text-muted fw-4"
                                                                            name="anniversary"
                                                                            v-model="meta.meta_anniversary"
                                                                            @input="updatemeta_anniversary"
                                                                            placeholder="dd-mm-yyyy"
                                                                        >
                                                                        </date-picker>

                                                                    </div>
                                                                    <div class="form-group col-md-3">
                                                                        <label for="gender">Gender</label>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            name="gender"
                                                                            placeholder="Enter Gender"
                                                                            v-model="meta.meta_gender"
                                                                            @input="updatemeta_gender"
                                                                        >

                                                                    </div>
                                                                    <div class="form-group col-md-3">
                                                                        <label for="family_size">Family Size</label>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            name="family_size"
                                                                            placeholder="Enter Family Size"
                                                                            v-model="meta.meta_family_size"
                                                                            @input="updatemeta_family_size"
                                                                        >

                                                                    </div>

                                                                    <div class="form-group col-md-6" style="margin-top: 25px ;">
                                                                        <label for="occupation">Occupation</label>
                                                                        <v-select v-model="Occ_modal"
                                                                                  name="occupation"
                                                                                  label="occupation"

                                                                                  :options="occupation_arr"
                                                                                  @input="inmodal3"
                                                                                  style="background: white;"
                                                                                  class="f-1-5"
                                                                        />

                                                                    </div>
                                                                    <div class="form-group col-md-6" style="margin-top: 25px ;">
                                                                        <label for="income_range">Income Range</label>
                                                                        <v-select v-model="inc_range"
                                                                                  name="income_range"
                                                                                  label="range"

                                                                                  :options="income_range_arr"
                                                                                  @input="inmodal2"
                                                                                  style="background: white;"
                                                                                  class="f-1-5"
                                                                        />

                                                                    </div>
                                                                    <div class="form-group col-md-4" style="margin-top: 25px;">
                                                                        <label for="marital_status">Marital Status</label>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            name="marital_status"
                                                                            placeholder="Enter Marital Status"
                                                                            v-model="meta.meta_marital_status"
                                                                            @input="updatemeta_marital_status"
                                                                        >

                                                                    </div>
                                                                    <div class="form-group col-md-8" style="margin-top: 25px;">
                                                                        <label for="remark">Add Remark</label>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            name="remark"
                                                                            placeholder="Enter Remark"
                                                                            v-model="meta.meta_remark"
                                                                            @input="updatemeta_remark"
                                                                        >

                                                                    </div>



                                                                </div>

                                                            </div>



                                                            <div class="box-footer" style="text-align: right">

                                                                <a v-if="enable_div==false" class="button-css" style="color: white;margin-top: 20px;" @click="enable()" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;
                                                                    Edit</a>
                                                                <button v-if="enable_div==true"
                                                                        class="button-css"
                                                                        :isLoading="loading"
                                                                        :disabled="loading"
                                                                        @click="submitForm"
                                                                >
                                                                    Update
                                                                </button>
                                                            </div>

                                                        </div>
                                                        <div role="tabpanel" class="tab-pane fade" id="Section3">


                                                            <div class="col-md-12">
                                                                <div id="accordion" class="accordion">
                                                                    <div class="card mb-0">
                                                                        <div class="card-header" data-toggle="collapse" href="#collapseOne">
                                                                            <a class="card-title" >
                                                                                <b style="font-size: 20px;font-weight:500;"><i class="fa fa-history" aria-hidden="true" style="margin-right: 10px;font-size: 40px;color: rgb(197, 225, 255);"></i>
                                                                                    Total Enquiries {{history_lead_len}}</b>
                                                                            </a>
                                                                        </div>
                                                                        <div id="collapseOne" class="card-body collapse  show in" data-parent="#accordion" style="background-color: rgb(236, 240, 245);overflow:auto;">
                                                                            <div class="col-md-12" v-if="history_lead_len>0" style="text-align: center;font-weight: 400;color: grey;font-size: 15px;height: 400px;">
                                                                                <div class="row">
                                                                                    <div class="col-md-3">Enquiry for</div>
                                                                                    <div class="col-md-3">Date</div>
                                                                                    <div class="col-md-3">Status</div>
                                                                                    <div class="col-md-3">Reason</div>
                                                                                </div>
                                                                                <div class="col-md-12" v-for="data in history_lead" style="margin-top: 15px;text-align: center;background-color: #fff !important;color: black;">
                                                                                    <div class="row">
                                                                                        <div class="col-md-3">{{data.package}}</div>
                                                                                        <div class="col-md-3">{{data.date}}</div>
                                                                                        <div class="col-md-3" v-if="data.status=='Lost'" ><p style="color: red;">{{data.status}}</p></div>
                                                                                        <div class="col-md-3" v-else-if="data.status=='Pending'" ><p style="color:rgb(255, 141, 0) !important">{{data.status}}</p></div>
                                                                                        <div class="col-md-3" v-else-if="data.status=='Confirmed'" ><p style="color: green;">{{data.status}}</p></div>
                                                                                        <div class="col-md-3" v-else ><p style="color: blue;">{{data.status}}</p></div>
                                                                                        <div class="col-md-3">{{data.reason}}</div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-12" v-else>
                                                                                <h3>No History</h3>

                                                                            </div>
                                                                        </div>



                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12" style="margin-top: 20px">
                                                                <div id="accordion2" class="accordion">
                                                                    <div class="card mb-0">
                                                                        <div class="card-header" data-toggle="collapse" href="#collapseTwo">
                                                                            <a class="card-title" >
                                                                                <b  style="font-size: 20px;font-weight: 500;"><i class="fa fa-history" aria-hidden="true" style="margin-right: 10px;font-size: 40px;color: rgb(197, 225, 255);"></i>
                                                                                    Total Bookings {{history_book_len}}</b>
                                                                            </a>
                                                                        </div>
                                                                        <div id="collapseTwo" class="card-body collapse show in" data-parent="#accordion2" style="overflow:auto;">
                                                                            <div class="col-md-12" v-if="history_book_len>0" style="text-align: center;font-weight: 400;height: 500px;color: grey;font-size: 15px;">
                                                                                <div class="col-md-12" v-for="data in history_book" style="color: black;">
                                                                                    <div class="row" style="background: white;padding-top: 10px;">
                                                                                        <div class="col-md-6" style="text-align: left">
                                                                                            <b style="font-weight: bold;">Holiday</b><br>
                                                                                            <b style="font-weight: bold;font-weight:400;">{{data.tour}}</b><br>
                                                                                            <b style="font-size: 17px">Cost : {{data.t_b_v}}</b>
                                                                                        </div>

                                                                                        <div class="col-md-6" style="text-align: right">
                                                                                            <b style="font-weight: bold">    Itinerary Number</b> <br>
                                                                                            <router-link :to="{ name: 'bookings.edit',params:{id:data.id} }" v-if="data.id" >{{data.book_id}}</router-link>

                                                                                        </div>
                                                                                        <div class="col-md-12" v-for="tour in data.tour_details" style="font-size: 17px;">
                                                                                            <div class="row border-bottom" style="margin: 0px 0px 0px 0px;border: 1px solid #dee2e6 !important;padding: 20px;box-shadow: 4px 2px 10px rgba(0,0,0,0.2);padding-bottom:0px;">
                                                                                                <div class="col-md-4" style="text-align: left"><span style="color:gray;font-size: 14px;"><b style="font-size: 17px; font-weight: 400; color: black !important;">{{tour.from}}</b> From</span>
                                                                                                    <br> <span  style="color:gray;font-size: 14px;"><b style="font-size: 17px; font-weight: 400;color: black !important;" >{{tour.to}}</b> To</span> </div>
                                                                                                <div class="col-md-4">{{tour.hotel_name}} <br> <p style="font-size: 10px">{{tour.loc_name}}</p></div>
                                                                                                <div class="col-md-4">{{tour.travellers}} Traveler</div>

                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-12" style="margin-bottom: 10px; background-color: #fff;"></div>
                                                                                    </div>
                                                                                </div>


                                                                            </div>

                                                                            <div class="col-md-12" v-else>
                                                                                <h3>No History</h3>

                                                                            </div>
                                                                        </div>



                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div role="tabpanel" class="tab-pane fade" id="Section4">
                                                            <div class="col-md-12">
                                                                <div id="accordion3" class="accordion">
                                                                    <div class="card mb-0">
                                                                        <div class="card-header" data-toggle="collapse" href="#collapseThree">
                                                                            <a class="card-title" >
                                                                                <b style="font-size: 20px;font-weight:500;">
                                                                                    Rating & Review</b>
                                                                            </a>
                                                                        </div>
                                                                        <div id="collapseThree" class="card-body collapse show in" data-parent="#accordion2" style="overflow:auto;">
                                                                            <div class="col-md-12" v-if="history_book_len>0" style="text-align: center;font-weight: 400;height:auto;color: grey;font-size: 15px;">
                                                                                <div class="col-md-12 " v-for="(data,index) in history_book" style="color: black;">



                                                                                    <div class="row" style="background: white;padding-top: 10px;" v-if="data.reviews.length>0">
                                                                                        <!--                                                                                        {{data.reviews}}-->




                                                                                        <div class="col-md-12">
                                                                                            <div id="accordion4" class="accordion">
                                                                                                <div class="card mb-0" >
                                                                                                    <div class="card-header card-header2" data-toggle="collapse" :href="'#'+index">
                                                                                                        <div class="col-md-6" style="text-align: left">
                                                                                                            <b style="font-weight: bold;">Holiday</b>&nbsp;&nbsp;<i class="fa fa-star" aria-hidden="true" v-for="(rate,index1 ) in parseInt(data.avg_rate)" style="font-size: 10px;color: #FCB040;"></i><br>
                                                                                                            <b style="font-weight: bold;font-weight:400;">{{data.tour}}</b><br>

                                                                                                        </div>
                                                                                                        <div class="col-md-5" style="text-align: right">
                                                                                                            <b style="font-weight: bold">    Itinerary Number</b> <br>
                                                                                                            <router-link :to="{ name: 'bookings.edit',params:{id:data.id} }" v-if="data.id" >{{data.book_id}}</router-link>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div :id="+index" class="card-body collapse show in" data-parent="#accordion" >
                                                                                                        <table class="table table-striped">
                                                                                                            <thead>
                                                                                                            <tr>
                                                                                                                <th>Date</th>
                                                                                                                <th>Review For</th>
                                                                                                                <th>Rating</th>
                                                                                                                <th>Review</th>
                                                                                                            </tr>
                                                                                                            </thead>
                                                                                                            <tbody>
                                                                                                            <tr  v-for="review in data.reviews" >
                                                                                                                <td style="width: 18%">{{review.date}}</td>
                                                                                                                <td v-if="review.type=='Hotel'" style="width: 17%"><i class="fa fa-bed review" aria-hidden="true" ></i><br>{{review.type}}</td>
                                                                                                                <td v-else-if="review.type=='Driver'" style="width: 17%"><i class="fa fa-car review" aria-hidden="true" ></i><br>{{review.type}}</td>
                                                                                                                <td v-else-if="review.type=='App'" style="width: 17%"><i class="fa fa-mobile review" aria-hidden="true" ></i><br>{{review.type}}</td>
                                                                                                                <td v-else-if="review.type=='Trip'" style="width: 17%"><i class="fa fa-suitcase review" aria-hidden="true" ></i><br>{{review.type}}</td>
                                                                                                                <td v-else style="width: 17%">{{review.type}}</td>
                                                                                                                <td style="width: 15%" v-if="review.rating!='' && review.rating!=null  ">
                                                                                                                    <i class="fa fa-star" aria-hidden="true" v-for="(rate,index1 ) in parseInt(review.rating)" style="font-size: 10px;color: #FCB040;"></i>
                                                                                                                </td>
                                                                                                                <td v-else></td>
                                                                                                                <td  v-if="review.type==='Hotel' || review.type==='Driver'">{{review.review}} - ({{review.name}})</td>
                                                                                                                <td v-else>{{review.review}}</td>
                                                                                                            </tr>

                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </div>


                                                                                                </div>
                                                                                            </div>
                                                                                        </div>






                                                                                        <div class="col-md-12" style="margin-bottom: 10px; background-color: #fff;"></div>
                                                                                    </div>

                                                                                </div>


                                                                            </div>

                                                                            <div class="col-md-12" v-else>
                                                                                <h3>No Booking History</h3>

                                                                            </div>
                                                                        </div>



                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div role="tabpanel" class="tab-pane fade no-use  " id="Section5" :class="[role=='subscriber'?'active show in no-use':'']">
                                                            <div class="">


                                                                <forms-accordion
                                                                    v-if="role=='subscriber'"
                                                                    :form_data="form_data"
                                                                    :traveller_data="traveller_data"
                                                                    :data="member_form_data"
                                                                    :platform="platform"
                                                                    :payment_button="uastra_payment_button"
                                                                    @show_form="show_form"
                                                                    @show_form1="show_form1"
                                                                    @paynow="paynow"
                                                                    @payment_details="payment_details"
                                                                    @mf_payment="mf_payment"
                                                                ></forms-accordion>


                                                            </div>




                                                        </div>
                                                        <div role="tabpanel" class="tab-pane fade no-use bg-white " id="Section6" >
                                                            <div class="col-md-12">
                                                                <div class="row center border_bottom d-none d-lg-block d-xl-block">
                                                                    <div class="col-md-3" style=""  ><h1>Booking</h1></div>
                                                                    <div class="col-md-4" style=""  ><h1>Tour</h1></div>
                                                                    <div class="col-md-3" style=""  ><h1>Date</h1></div>
                                                                    <div class="col-md-2" style=""  ><h1>Status</h1></div>

                                                                </div>
                                                                <div class="row  center mt_mb5" v-for="(form,index) in traveller_data">

                                                                    <div class="col-md-3 f-1-4" style="font-weight: bold;text-align: left">
                                                                        <span  class="d-xl-none d-lg-none">Booking : </span>
                                                                        <span>{{form.booking_id}}</span>
                                                                    </div>
                                                                    <div class="col-md-4 " style="font-weight: 600;"  >
                                                                        <span  class="d-xl-none d-lg-none">Tour : </span>
                                                                        <span >{{form.tour_name}}</span>

                                                                    </div>
                                                                    <div class="col-md-3" style="font-weight: 600;"  >
                                                                        <span  class="d-xl-none d-lg-none">Tour : </span>
                                                                        <span >{{form.driver_pick_up_time}}</span>

                                                                    </div>
                                                                    <div class="col-md-2" style="font-weight: bold;"  >
                                                                        <span v-if="form.status==2" class="f-1-5 text-success" style="font-weight: bold;">Active</span>
                                                                        <span v-if="form.status==3" class="f-1-5 text-danger" style="font-weight: bold;">Inactive</span>
                                                                        <span v-if="form.status==1" class="f-1-5 text-warning" style="font-weight: bold;">Pending</span>
                                                                    </div>

                                                                </div>
                                                            </div>



                                                        </div>
                                                        <div role="tabpanel" class="tab-pane fade no-use  " id="Section7" >
                                                            <div class="">

                                                                <Documents :memDocs="memDocs" v-if="docSection" />

                                                            </div>




                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div v-if="form_show_model==true">
                                    <transition name="modal">
                                        <div class="">
                                        <div class="modal-mask form_pop">
                                            <div class="modal-wrapper backGround">
                                                <!--                                                loader.....-->

                                                <div v-if="kycLoader"  class="Load">
                                                    <div class="loader" style="margin:15rem auto;width:300px;">
                                                        <img style="width:100%" src="/dashboard_resources/loader.gif"  />
                                                    </div>
                                                </div>

                                                <!--                                                    loader end-->

                                                <div class="modal-dialog form-width" style="">

                                                    <div class="modal-content form-Size"  id="element_box" >
                                                        <div class="modal-header border-0 border-dotted">
                                                            <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important;">
                                                                <div v-if="form_data && form_data.kyc_data!='true'" class="row">
                                                                    <div class="col-10" v-if="form_data.kyc_data!='true'">
                                                                        <h1>Fill Form for {{form_data.name}}</h1>
                                                                    </div>

                                                                    <div class="col-2 text-right"  v-if="form_data && form_data.kyc_data!='true'">
                                                                        <button type="button" class="close f-2-5" @click="submit_traveller_form_partial" >
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>


                                                                    </div>
                                                                    <div class="col-12 text-right"  v-else>
                                                                        <button type="button" class="close f-2-5" @click="form_show_model=false">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>

                                                                    </div>
                                                                </div>
                                                                <div v-else class="row">
                                                                    <div class="col-10" v-if="form_data.kyc_data!='true'">
                                                                        <h1>Fill Form for {{form_data.name}}</h1>
                                                                    </div>
                                                                    <div class="col-10" v-else>
                                                                        <h1>Complete KYC</h1>
                                                                    </div>
                                                                    <div class="col-2 text-right"  v-if="form_data && form_data.kyc_data!='true'">
                                                                        <button type="button" class="close f-2-5" @click="submit_traveller_form_partial(form_data.status)" >
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>


                                                                    </div>
                                                                    <div class="col-2 text-right"  v-else>
                                                                        <button type="button" class="close f-2-5" @click="form_show_model=false,payment_method='close'">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div v-if="form_data && form_data.kyc_data!='true'">

                                                            <FormComponent
                                                                :languages="JSON.parse(form_data.get_form.languages)"
                                                                :banner="form_data.get_form.banner"
                                                                :hub_data_list="hub_data_list"
                                                                :populate_data="populate_data"
                                                                mode="edit"
                                                                :form_data="form_data"
                                                                @uploaddocument="uploadfileform"
                                                                @uploaddocumentpass="uploadfileformpass"
                                                                :form_filler="form_filler"
                                                                :tabsVisibility="tabsVisibility"
                                                                :trav_name="trav_name"
                                                                @validate_passport="validate_passport"
                                                                :states="states"
                                                                @submit_form_partial="submit_traveller_form_partial_1"
                                                                @submit_traveller_form="submit_traveller_form"
                                                                @submit_traveller_form2="submit_traveller_form2"
                                                                @kycLoadervisibility="kycLoadervisibility"
                                                            />



                                                        </div>
                                                        <div class="modal-body" style="" v-else>
                                                            <div class="container-fluid c-grey">

                                                                <div class="row no-gutters" v-if="form_data && form_data.kyc_data=='true' && kyc_cost">
                                                                    <form-wizard  color="rgb(23, 80, 125)"  title=""  subtitle="" finish-button-text="finish" :start-index="form_data.form_status==1?1:0">


                                                                        <tab-content :before-change="validateform" title="Fill Form" icon="fa fa-check"  >
                                                                            <fieldset>
                                                                                <div  class="container-fluid kyc_secMain"  :style="{ 'background-image': 'url('+background_url+')'}" style="background-repeat: no-repeat;background-size: 100% 100%;background-size: cover;">

                                                                                    <div class="col-md-12 form-group" :style="mf_key!=''? 'pointer-events: none;':''" style="padding:0 !important;">


                                                                                        <div v-if="kyc_banner_url!==''" class="container-fluid d-none d-lg-block d-xl-block" :style="{ 'background-image': 'url('+kyc_banner_url+')'}"  style=" background-repeat: no-repeat;background-size: 100% 100%; height: 200px;"></div>
                                                                                        <div v-if="kyc_banner_url!==''" class="container-fluid d-block d-sm-block d-md-none" :style="{ 'background-image': 'url('+kyc_banner_url+')'}" style=" background-repeat: no-repeat;background-size: 100% 100%; height: 125px;"></div>

                                                                                        <div class="col-md-12 form-group " style="">

                                                                                            <h2 class="header_footer"></h2>
                                                                                        </div>

                                                                                        <div  v-for="(tag,index) in form_data.html_qna"
                                                                                              :class="(tag.type==='doc'||tag.key==='pan' ||tag.key==='city'||tag.key==='state' )?'col-md-6':'col-md-12'"
                                                                                        >
                                                                                            <!--                                                                                  {{tag}}-->
                                                                                            <div  class="col-md-12 bg-white content_div"  :id="tag.doc+index" v-if="tag.type=='doc'">
                                                                                                <label for="custom_filed" >{{tag.doc}}</label>
                                                                                                <label class="text-danger">*</label><br>

                                                                                                <div class="col-md-12">
                                                                                                    <label class="file_hidden text-black cursor mt-3 f-1-6" style="background:#ecf0f5 !important; ">
                                                                                                        <i class="fa fa-upload" v-if="tag.file==''">Upload</i>
                                                                                                        <i class="fa fa-upload" v-else>Uploaded</i>
                                                                                                        <input type="file" class="form-control input_field_design2"  @change="uploadfileformKyc($event,'file_form',index,tag.file,form_data.booking_id)" style="display:none !important;"   >
                                                                                                    </label>

                                                                                                </div>
                                                                                                <span>
                                                                                    <a target="_blank" v-if="tag.file!==''" :href="tag.file">File Uploaded Before</a>
                                                                                    <a target="_blank" v-else class="text-dark">-</a>
                                                                                    </span>
                                                                                            </div>
                                                                                            <div  class="col-md-12 bg-white content_div"  :id="tag.key+index" v-if="tag.key=='pan'">
                                                                                                <label for="custom_filed" >{{tag.type}}</label>
                                                                                                <label class="text-danger">*</label><br>

                                                                                                <div class="col-md-12 content_row">
                                                                                                    <input   type="text" class="form-control fields input_field_design" v-model="tag.value" :id="tag.key" :name="tag.key" :placeholder="tag.type" >
                                                                                                </div>

                                                                                            </div>
                                                                                            <div v-if="tag.key==='payment'" :id="tag.key+index" class="col-md-12 bg-white content_div" >
                                                                                                <label for="foodpref" >{{tag.type}}</label> <label class="text-danger">&nbsp; *</label><br>
                                                                                                <div class="col-md-12 " style="padding-bottom: 10px;padding-top: 5px">
                                                                                                    <div class="row">
                                                                                                        <div class="col-md-4" v-for="op in tag.option">
                                                                                                            <label class="container_box">{{op.key}}
                                                                                                                <input type="radio" v-model="payment_method" @change="update_cost('gst',op.key.toLowerCase())" :value="op.key"   style="pointer-events:none" >
                                                                                                                <span class="checkmark_box" style="border-radius:50px;"></span>
                                                                                                            </label>


                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>


                                                                                            </div>
                                                                                            <div v-if="tag.key=='personal-option' && payment_method=='Personal account' "  :id="tag.key+index" class="col-md-12 bg-white content_div" >
                                                                                                <label for="" >{{tag.type}}</label><label class="text-danger">&nbsp; *</label> <br>

                                                                                                <div class="col-md-12 " style="padding-bottom: 10px;padding-top: 5px">
                                                                                                    <div class="row">
                                                                                                        <div class="col-md-4" v-for="op in tag.option">
                                                                                                            <label class="container_box">{{op.key}}
                                                                                                                <input type="radio" v-model="tag.value" :value="op.key" @change="update_cost('tcs',op.key.toLowerCase())"   style="pointer-events:none" >
                                                                                                                <span class="checkmark_box" style="border-radius:50px;"></span>
                                                                                                            </label>

                                                                                                        </div>
                                                                                                        <label class="text-danger" v-if="tag.value=='Yes' && this.tour_type=='ob'">On the booking, additional TCS will be applicable @ 5%</label>
                                                                                                        <label class="text-danger" v-else-if="tag.value=='No' && this.tour_type=='ob'">On the booking, additional TCS will be applicable @10%</label>
                                                                                                        <br>

                                                                                                    </div>
                                                                                                </div>


                                                                                            </div>
                                                                                            <div v-if="tag.key=='company-options' && payment_method=='Company account' "  :id="tag.key+index" class="col-md-12 bg-white content_div" >
                                                                                                <label for="foodpref" >{{tag.type}}</label> <label class="text-danger">&nbsp; *</label><br>
                                                                                                <div class="col-md-12 " style="padding-bottom: 10px;padding-top: 5px">
                                                                                                    <div class="row">
                                                                                                        <div class="col-md-4" v-for="op in tag.option">
                                                                                                            <label class="container_box">{{op.key}}
                                                                                                                <input type="radio" v-model="tag.value" :value="op.key" @change="update_cost('tcs',op.key.toLowerCase())"   style="pointer-events:none" >
                                                                                                                <span class="checkmark_box" style="border-radius:50px;"></span>
                                                                                                            </label>

                                                                                                        </div>
                                                                                                        <div class="col-md-12" >
                                                                                                            <div class="row">

                                                                                                                <div :class="(fields.key==='Company Address')?'col-md-4':'col-md-4'" class="bg-white content_div" v-for="(fields,index) in tag.fields" :id="tag.key+index"   >
                                                                                                                    <label for="">{{fields.key}}</label><label class="text-danger">*</label><br>
                                                                                                                    <div class="col-md-12 content_row">
                                                                                                                        <vue-tel-input v-bind="bindProps" v-if="fields.key=='Company Mobile'" v-model="fields.value"    name="phone"  class="form-control vue-tel-input fw-3"></vue-tel-input>

                                                                                                                        <v-select
                                                                                                                            v-model="fields.value"
                                                                                                                            v-else-if="fields.key=='Company State'"
                                                                                                                            :clearable="false"
                                                                                                                            name="states"
                                                                                                                            label="State"
                                                                                                                            :options="states"
                                                                                                                            style="background:#ecf0f5;"


                                                                                                                        />

                                                                                                                        <input   type="text" v-else class="form-control fields input_field_design" v-model="fields.value" :id="fields.key" :name="fields.key" :placeholder="fields.key" >
                                                                                                                    </div>


                                                                                                                </div>

                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>


                                                                                            </div>




                                                                                        </div>




                                                                                    </div>
                                                                                    <table class="body-wrap_cost">
                                                                                        <tbody><tr>
                                                                                            <td></td>
                                                                                            <td class="container-fluid" >
                                                                                                <div class="content">
                                                                                                    <table class="main" width="100%" cellpadding="0" cellspacing="0" style="float: right;">
                                                                                                        <tbody><tr>
                                                                                                            <td class="content-wrap aligncenter">
                                                                                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                                                                                    <tbody>
                                                                                                                    <tr>
                                                                                                                        <td class="content-block">
                                                                                                                            <table class="invoice text-black">
                                                                                                                                <tbody><tr>
                                                                                                                                    <td>{{item.name}}</td>

                                                                                                                                </tr>
                                                                                                                                <tr>
                                                                                                                                    <td>
                                                                                                                                        <table class="invoice-items" cellpadding="0" cellspacing="0" >
                                                                                                                                            <tbody>
                                                                                                                                            <tr>
                                                                                                                                                <td>Total Package Cost </td>
                                                                                                                                                <td class="alignright">{{total_cost}}</td>
                                                                                                                                                <td class="alignright"></td>
                                                                                                                                            </tr>
                                                                                                                                            <tr v-if="payment_method=='open'">
                                                                                                                                                <td >Please Select Entity Of Payment!</td>
                                                                                                                                                <td class="alignright"></td>
                                                                                                                                            </tr>

                                                                                                                                            <tr v-for="(payment,index) in final_cost_arr"  v-if="payment_method!='open'  && payment.type!='main_cost'" :key="index+payment.type">
                                                                                                                                                <td>{{payment.title}} {{payment.value}}%</td>
                                                                                                                                                <td class="alignright">{{payment.cost}}</td>

                                                                                                                                            </tr>
                                                                                                                                            <tr v-if="payment_method=='Personal account' && tcs_payment_method==''">
                                                                                                                                                <td >Please Select Have you filed the ITR in the last 2 years! </td>
                                                                                                                                                <td class="alignright"></td>
                                                                                                                                            </tr>
                                                                                                                                            <tr class="total" v-if="(payment_method=='Personal account' && tcs_payment_method!='') || payment_method=='Company account'">
                                                                                                                                                <td class="alignright" width="80%">Total : </td>
                                                                                                                                                <td class="alignright">{{final_cost}}</td>
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
                                                                                    <div class="col-md-12 form-group mt-2" v-if="mf_key==''" >
                                                                                        <label class="container_box text-black">
                                                                                            I agree to the  <a href="/terms-condition" target="_blank" ><u>terms & conditions</u></a>
                                                                                            <input type="checkbox" v-model="form_data.form_status" :value="final_cost"   >
                                                                                            <span class="checkmark_box " style="border: 1px solid black;"></span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>


                                                                            </fieldset>
                                                                        </tab-content>
                                                                        <tab-content  :title="form_data.form_status?'Invoice':'Total Package Cost'" icon="fa fa-check">
                                                                            <fieldset class="text-center">

                                                                                <table class="body-wrap_cost text-black">
                                                                                    <tbody><tr>

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
                                                                                                                            <tbody>
                                                                                                                            <tr>
                                                                                                                                <td>{{item.name}}</td>

                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td>

                                                                                                                                    <table class="invoice-items" cellpadding="0" cellspacing="0" >
                                                                                                                                        <tbody>
                                                                                                                                        <tr v-for="(invoce,index) in invoice_data" :key="index">
                                                                                                                                            <td class="" v-if="invoce.type=='markup' || invoce.type=='total' || invoce.type=='tax'"> {{invoce.title}}</td>
                                                                                                                                            <td v-else-if="invoce.type=='final'"><b> {{invoce.title}} </b></td>
                                                                                                                                            <td v-else>{{invoce.type.toUpperCase()}} : {{invoce.title}}</td>
                                                                                                                                            <td class="alignright" :class="[invoce.type=='final' || invoce.type=='total' || invoce.type=='tax'?'font-weight-bold':'']">{{invoce.cost}}</td>
                                                                                                                                        </tr>

                                                                                                                                        </tbody>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <!--                                                                                                                            <td style="color: #e3e3e3 !important">-->
                                                                                                                            <td >
                                                                                                                                <!--                                                                                                                                if you have any query or require additional information please contact your handler-->
                                                                                                                                If there is any discrepancy in the costing, you may reach handler via email on this email : {{agent_email}}

                                                                                                                            </td>
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

                                                                                <button class="btn-success mt-5 f-22"  v-if="uastra_payment_button" @click="mf_payment(form_data.booking_id,form_data)">Click To Pay</button>

                                                                            </fieldset>
                                                                        </tab-content>

                                                                        <template slot="footer" slot-scope="props">
                                                                            <div class="wizard-footer-left">
                                                                                <wizard-button  v-if="props.activeTabIndex > 0 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Previous</wizard-button>
                                                                            </div>
                                                                            <div class="wizard-footer-right">
                                                                                <wizard-button v-if="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next</wizard-button>

                                                                                <wizard-button v-else @click.native="form_show_model=false,payment_method='close'" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">Close Form</wizard-button>
                                                                            </div>
                                                                        </template>


                                                                    </form-wizard>


                                                                </div>
                                                                <div class="row no-gutters" v-if="form_data && form_data.kyc_data=='true' && !kyc_cost">


                                                                    <div  class="container-fluid kyc_secMain"  :style="{ 'background-image': 'url('+background_url+')'}" style="background-repeat: no-repeat;background-size: 100% 100%;background-size: cover;">

                                                                        <div class="col-md-12 form-group" style="padding:0 !important;">



                                                                            <div v-if="kyc_banner_url!==''" class="container-fluid d-none d-lg-block d-xl-block" :style="{ 'background-image': 'url('+kyc_banner_url+')'}"  style=" background-repeat: no-repeat;background-size: 100% 100%; height: 200px;"></div>
                                                                            <div v-if="kyc_banner_url!==''" class="container-fluid d-block d-sm-block d-md-none" :style="{ 'background-image': 'url('+kyc_banner_url+')'}" style=" background-repeat: no-repeat;background-size: 100% 100%; height: 125px;"></div>

                                                                            <div class="col-md-12 form-group " >

                                                                                <h2 class="header_footer"></h2>
                                                                            </div>

                                                                            <div  v-for="(tag,index) in form_data.html_qna"
                                                                                  :class="(tag.type==='doc'||tag.key==='pan' ||tag.key==='city'||tag.key==='state' )?'col-md-12':'col-md-12'"
                                                                            >
                                                                                <!--                                                                                  {{tag}}-->

                                                                                <div class="Paragrapg"  >
                                                                                    <div style="display: flex">
                                                                                    <div>
                                                                                        <h2 class="text_size_change" style="text-align: left">
                                                                                          <b
                                                                                            ><span style="color:black;">{{tag.doc}}</span>
                                                                                            <label class="text-danger">*</label><br></b
                                                                                          >
                                                                                        </h2>
                                                                                      </div>
                                                                                      <div>
                                                                                        <!-- <h2 class="text_size_change" style="margin-left: 2rem; text-align: right">
                                                                                               
                                                                                          <i
                                                                                            aria-hidden="true"
                                                                                            title="Info"
                                                                                            class="fa fa-info-circle cursor"
                                                                                            style="color: red"></i>
                                                                                        </h2> -->
                                                                                      </div>
                                                                                    </div>
                                                                                    <div style="width: 80%; margin: 0px auto">
                                                                                      <div class="row">
                                                                                        <div class="col-lg-8">
                                                                                          <div class="fileUpl">
                                                                                            <button :class="tag.file==''?'btn-dark':'btn-danger'" @click="chooseFiles('doc'+index)" style="position: absolute;
                                                                                            left: 16px;
                                                                                            width: 80px;

                                                                                            height: 36px;">
                                                                                            {{tag.file==''?'Choose File':'Update'}}
                                                                                            </button>
                                                                                            <input
                                                                                              type="file"
                                                                                              name="avatar"
                                                                                              accept="image/png,image/jpeg/,application/pdf"
                                                                                              :id="'doc'+index"
                                                                                              @change="uploadfileformKyc($event,'file_form',index,tag.file,form_data.booking_id)"
                                                                                              />
                                                                                          </div>
                                                                                          <div class="row">
                                                                                            <div class="col-md-6">
                                                                                              <p>
                                                                                                <b>Format:</b>
                                                                                                <span style="font-weight: 600; font-size: 12px; color: gray"
                                                                                                  >PNG/JPG/PDF</span
                                                                                                >
                                                                                              </p>
                                                                                            </div>
                                                                                            <div class="col-md-6">
                                                                                              <p>
                                                                                                <b
                                                                                                  >File Size:
                                                                                                  <span style="font-weight: 600; font-size: 12px; color: gray"
                                                                                                    >Below 2M</span
                                                                                                  ></b
                                                                                                >
                                                                                              </p>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                          <div style="margin: 0px auto">
                                                                                            <a :href="tag.file"  target="_blank" :class="tag.file==''?'disable-event':'cursor'">
                                                                                                <img style="width:100%;height:122px;" :src="tag.file==''?'/images/sample1.png':'/images/pdfUploadIcon.jpg'"/>
                                                                                                </a>
                                                                                            <!-- <a  :href="tag.file" target="_blank" class="disable-event"
                                                                                              ><img :src="/images/sample1.png" style="width: 100%; height: 122px"
                                                                                            /></a> -->
                                                                                            <!---->
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div  class="col-md-12 bg-white content_div"  :id="tag.key+index" v-if="tag.key=='pan'">
                                                                                    <label for="custom_filed" >{{tag.type}}</label>
                                                                                    <label class="text-danger">*</label><br>

                                                                                    <div class="col-md-12 content_row">
                                                                                        <input   type="text" class="form-control fields input_field_design" v-model="tag.value" :id="tag.key" :name="tag.key" :placeholder="tag.type" >
                                                                                    </div>

                                                                                </div>
                                                                                <div  class="col-md-12 bg-white content_div"  :id="tag.key+index" v-if="tag.key=='address'">
                                                                                    <label for="custom_filed" >{{tag.type}}</label>
                                                                                    <label class="text-danger">*</label><br>

                                                                                    <div class="col-md-12 content_row">
                                                                                        <input   type="text" class="form-control fields input_field_design" v-model="tag.value" :id="tag.key" :name="tag.key" :placeholder="tag.type" >
                                                                                    </div>

                                                                                </div>
                                                                                <div  class="col-md-12 bg-white content_div"  :id="tag.key+index" v-if="tag.key=='city' || tag.key=='state'|| tag.key=='pincode'|| tag.key=='country'">
                                                                                    <label for="custom_filed" >{{tag.type}}</label>
                                                                                    <label class="text-danger">*</label><br>

                                                                                    <div class="col-md-12 content_row">
                                                                                        <input   type="text" class="form-control fields input_field_design" v-model="tag.value" :id="tag.key" :name="tag.key" :placeholder="tag.type" >
                                                                                    </div>

                                                                                </div>


                                                                            </div>


                                                                        </div>


                                                                    </div>


                                                                    <div class="col-md-12 form-group text-center mt-5" style="" >
                                                                        <a href="#" @click="submit_traveller_form_kyc" class="btn btn-lg btn-success f-1-8">Submit</a>
                                                                    </div>

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
    </section>
</template>


<script>
    import { VueTelInput } from 'vue-tel-input'
    import { mapGetters, mapActions } from 'vuex'
    import uploadfile from '../../../mixins/uploadfile'
    import {FormWizard, TabContent,WizardButton,WizardStep} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import FormsAccordion from "./FormsAccordion";
    import Documents from "./Documents";
    import FormComponent from "../FormComponent";
    import KycFormComponent from "./KycFormComponent";
import { file } from 'jszip'

    export default {
        data() {
            return {
                loading2:false,
                platform:'travelexic',
                emptyIndex:'',
                emptyIndexMember:'',
                docError:'',
                traveller_data:[],
                hub_data_list:[],
                sheetType:0,
                bann:'/storage/778/pg1-reg-form-(1).png',
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
                form_show_model:false,
                // Code...
                country_arr:[{"name":"United States"},{"name":"Canada"},{"name":"Afghanistan"},{"name":"Albania"},{"name":"Algeria"},{"name":"American Samoa"},{"name":"Andorra"},{"name":"Angola"},{"name":"Anguilla"},{"name":"Antarctica"},{"name":"Antigua and\\/or Barbuda"},{"name":"Argentina"},{"name":"Armenia"},{"name":"Aruba"},{"name":"Australia"},{"name":"Austria"},{"name":"Azerbaijan"},{"name":"Bahamas"},{"name":"Bahrain"},{"name":"Bangladesh"},{"name":"Barbados"},{"name":"Belarus"},{"name":"Belgium"},{"name":"Belize"},{"name":"Benin"},{"name":"Bermuda"},{"name":"Bhutan"},{"name":"Bolivia"},{"name":"Bosnia and Herzegovina"},{"name":"Botswana"},{"name":"Bouvet Island"},{"name":"Brazil"},{"name":"British lndian Ocean Territory"},{"name":"Brunei Darussalam"},{"name":"Bulgaria"},{"name":"Burkina Faso"},{"name":"Burundi"},{"name":"Cambodia"},{"name":"Cameroon"},{"name":"Cape Verde"},{"name":"Cayman Islands"},{"name":"Central African Republic"},{"name":"Chad"},{"name":"Chile"},{"name":"China"},{"name":"Christmas Island"},{"name":"Cocos (Keeling) Islands"},{"name":"Colombia"},{"name":"Comoros"},{"name":"Congo"},{"name":"Cook Islands"},{"name":"Costa Rica"},{"name":"Croatia (Hrvatska)"},{"name":"Cuba"},{"name":"Cyprus"},{"name":"Czech Republic"},{"name":"Denmark"},{"name":"Djibouti"},{"name":"Dominica"},{"name":"Dominican Republic"},{"name":"East Timor"},{"name":"Ecudaor"},{"name":"Egypt"},{"name":"El Salvador"},{"name":"Equatorial Guinea"},{"name":"Eritrea"},{"name":"Estonia"},{"name":"Ethiopia"},{"name":"Falkland Islands (Malvinas)"},{"name":"Faroe Islands"},{"name":"Fiji"},{"name":"Finland"},{"name":"France"},{"name":"France, Metropolitan"},{"name":"French Guiana"},{"name":"French Polynesia"},{"name":"French Southern Territories"},{"name":"Gabon"},{"name":"Gambia"},{"name":"Georgia"},{"name":"Germany"},{"name":"Ghana"},{"name":"Gibraltar"},{"name":"Greece"},{"name":"Greenland"},{"name":"Grenada"},{"name":"Guadeloupe"},{"name":"Guam"},{"name":"Guatemala"},{"name":"Guinea"},{"name":"Guinea-Bissau"},{"name":"Guyana"},{"name":"Haiti"},{"name":"Heard and Mc Donald Islands"},{"name":"Honduras"},{"name":"Hong Kong"},{"name":"Hungary"},{"name":"Iceland"},{"name":"India"},{"name":"Indonesia"},{"name":"Iran (Islamic Republic of)"},{"name":"Iraq"},{"name":"Ireland"},{"name":"Israel"},{"name":"Italy"},{"name":"Ivory Coast"},{"name":"Jamaica"},{"name":"Japan"},{"name":"Jordan"},{"name":"Kazakhstan"},{"name":"Kenya"},{"name":"Kiribati"},{"name":"Korea, Democratic People\'s Republic of"},{"name":"Korea, Republic of"},{"name":"Kuwait"},{"name":"Kyrgyzstan"},{"name":"Lao People\'s Democratic Republic"},{"name":"Latvia"},{"name":"Lebanon"},{"name":"Lesotho"},{"name":"Liberia"},{"name":"Libyan Arab Jamahiriya"},{"name":"Liechtenstein"},{"name":"Lithuania"},{"name":"Luxembourg"},{"name":"Macau"},{"name":"Macedonia"},{"name":"Madagascar"},{"name":"Malawi"},{"name":"Malaysia"},{"name":"Maldives"},{"name":"Mali"},{"name":"Malta"},{"name":"Marshall Islands"},{"name":"Martinique"},{"name":"Mauritania"},{"name":"Mauritius"},{"name":"Mayotte"},{"name":"Mexico"},{"name":"Micronesia, Federated States of"},{"name":"Moldova, Republic of"},{"name":"Monaco"},{"name":"Mongolia"},{"name":"Montserrat"},{"name":"Morocco"},{"name":"Mozambique"},{"name":"Myanmar"},{"name":"Namibia"},{"name":"Nauru"},{"name":"Nepal"},{"name":"Netherlands"},{"name":"Netherlands Antilles"},{"name":"New Caledonia"},{"name":"New Zealand"},{"name":"Nicaragua"},{"name":"Niger"},{"name":"Nigeria"},{"name":"Niue"},{"name":"Norfork Island"},{"name":"Northern Mariana Islands"},{"name":"Norway"},{"name":"Oman"},{"name":"Pakistan"},{"name":"Palau"},{"name":"Panama"},{"name":"Papua New Guinea"},{"name":"Paraguay"},{"name":"Peru"},{"name":"Philippines"},{"name":"Pitcairn"},{"name":"Poland"},{"name":"Portugal"},{"name":"Puerto Rico"},{"name":"Qatar"},{"name":"Reunion"},{"name":"Romania"},{"name":"Russian Federation"},{"name":"Rwanda"},{"name":"Saint Kitts and Nevis"},{"name":"Saint Lucia"},{"name":"Saint Vincent and the Grenadines"},{"name":"Samoa"},{"name":"San Marino"},{"name":"Sao Tome and Principe"},{"name":"Saudi Arabia"},{"name":"Senegal"},{"name":"Seychelles"},{"name":"Sierra Leone"},{"name":"Singapore"},{"name":"Slovakia"},{"name":"Slovenia"},{"name":"Solomon Islands"},{"name":"Somalia"},{"name":"South Africa"},{"name":"South Georgia South Sandwich Islands"},{"name":"Spain"},{"name":"Sri Lanka"},{"name":"St. Helena"},{"name":"St. Pierre and Miquelon"},{"name":"Sudan"},{"name":"Suriname"},{"name":"Svalbarn and Jan Mayen Islands"},{"name":"Swaziland"},{"name":"Sweden"},{"name":"Switzerland"},{"name":"Syrian Arab Republic"},{"name":"Taiwan"},{"name":"Tajikistan"},{"name":"Tanzania, United Republic of"},{"name":"Thailand"},{"name":"Togo"},{"name":"Tokelau"},{"name":"Tonga"},{"name":"Trinidad and Tobago"},{"name":"Tunisia"},{"name":"Turkey"},{"name":"Turkmenistan"},{"name":"Turks and Caicos Islands"},{"name":"Tuvalu"},{"name":"Uganda"},{"name":"Ukraine"},{"name":"United Arab Emirates"},{"name":"United Kingdom"},{"name":"United States minor outlying islands"},{"name":"Uruguay"},{"name":"Uzbekistan"},{"name":"Vanuatu"},{"name":"Vatican City State"},{"name":"Venezuela"},{"name":"Vietnam"},{"name":"Virigan Islands (British)"},{"name":"Virgin Islands (U.S.)"},{"name":"Wallis and Futuna Islands"},{"name":"Western Sahara"},{"name":"Yemen"},{"name":"Yugoslavia"},{"name":"Zaire"},{"name":"Zambia"},{"name":"Zimbabwe"}],
                address:'',
                show_modal:false,
                enable_div:true,
                show_modal2:false,
                show_modal3:false,
                show_modal4:false,

                tags_arr_delete:[],
                new_tag_name:'',
                custom_tags_arr:[],
                type_of_tourist_type:[{type:'Active Senior '},{type:'Global Traveller'},{type:'Religious Traveller'},{type:'Solo '},{type:'Global Executive'},{type:'Millennials '},{type:'Ethical traveller'},{type:'Luxury travellers'},{type:'VIP/CIP'}],
                type_of_tourist_type2:[{type:'VIP/CIP'}],
                type_of_tourist:[],
                anniversary:'',
                dob:'',
                last_cron_date:'',
                total_bussiness:'',
                history_lead:'',
                history_lead_len:'',
                history_book:'',
                history_book_len:'',
                income_range_arr:[{range:'3,00,000-5,00,000 Per Annum'},{range:'5,00,000-10,00,000 Per Annum'},{range:'10,00,000-30,00,000 Per Annum'}],
                inc_range:[],
                occupation_arr:[{occupation:'Job'}, {occupation:'Bussiness'}],
                last_booking_date:'',
                new_city:'',
                new_address:'',
                new_country:[],
                show_pass:[],
                document:[],
                Occ_modal:[],
                formatted_dob:'',
                formatted_anniversary:'',
                license: {},
                license_value:'',
                role:'',
                form_data: {},
                member_form_data:[],
                form_index:'',
                background_url:'',
                trave_id:'',
                // form_code:''
                show_form_button:true,
                related_mem:[],
                counter:0,
                err_passport:[],
                form_filler:'trav',
                kyc_banner_url:'',
                payment_method:'',
                invoice_data:'',
                uastra_payment_button:false,
                total_cost:0,
                tour_type:"dom",
                final_tour_cost:0,
                tcs_cost_arr:[],
                tcs_payment_method:'',
                final_cost_arr:[],
                final_cost:0,
                errors:[],
                errormodal:false,
                mf_key:'',
                agent_email:'',
                kyc_cost:false,
                kyc_avail:true,
                trav_name:{'first':'','last':''},
                states:[],
                tabsVisibility:{'travel_date':false,'docs':false,'passport':false,'photoId':false},
                lockedTabs:{'passport':false,'docs':false,'details':false,'Add Members':false},
                errorMsg:[],
                kycLoader:false,
                memDocs:[],
                docSection:false,
                numberModal:false,
                newPhoneNumber:null,
                populate_data:{'data':[],'status':false,'pupulatedId':'','filtered_data':[],'added':false}
            }
        },
        computed: {
            ...mapGetters('TravellersSingle', ['item', 'loading','meta']),

        },
        created() {
            this.fetchData(this.$route.params.id);

            this.role=document.querySelector("meta[name='user-role']").getAttribute('content');
            var log_id=document.querySelector("meta[name='user-id']").getAttribute('content');
            if(this.role==='subscriber'){

                let params = new FormData();
                params.set('id', log_id);

                axios.post('/api/webservices/get_traveller', params)
                    .then(response => {
                        //  alert(response.data)
                        if(this.$route.params.id!==response.data){
                            this.$router.push({ path: '/travellers/'+response.data+'/edit' })

                            this.trave_id=response.data;

                            // this.fetchData(this.$route.params.id);
                            // console.log('trave_id', this.trave_id);

                            let params1 = new FormData();
                            params1.set('id', this.$route.params.id);
                            axios.post('/api/webservices/get_traveller_form', params1)
                                .then(response => {
                                    // this.form_data=_.cloneDeep(response.data)
                                    this.member_form_data=_.cloneDeep(response.data)

                                    // console.log('form_data', this.form_data);
                                });

                            let params2 = new FormData();
                            params2.set('traveller_id', this.trave_id);
                            axios.post('/api/webservices/get_booking_traveller', params2)
                                .then(response => {
                                    this.traveller_data=_.cloneDeep(response.data)

                                    // console.log('traveller_data', this.traveller_data);
                                })


                            axios.post('/api/webservices/kyc_aval',params2)
                                .then(response => {
                                    if(response.data.status){
                                        this.kyc_avail=true;
                                    }
                                    else{
                                        this.kyc_avail=false;
                                    }

                                })

                            axios.get('/api/webservices/get_state_json')
                                .then(res=>{
                                    this.states=_.cloneDeep(res.data);
                                })
                            .catch(error => {
                                console.log('Some error occured!')
                            })


                        }
                    });

                // disabling right click
                // document.addEventListener('contextmenu', event => event.preventDefault());

                document.onkeydown = function (e) {

                    // disable F12 key
                    if(e.keyCode == 123) {
                        return false;
                    }

                    // disable I key
                    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
                        return false;
                    }

                    // disable J key
                    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                        return false;
                    }

                    // disable U key
                    if(e.ctrlKey && e.keyCode == 85) {
                        return false;
                    }
                }



            }

            var base_url = window.location.origin;
            this.background_url=base_url+'/dashboard_resources/background_doc.png';
            this.kyc_banner_url=base_url+'/dashboard_resources/kyc-banner.jpg';

            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="lms_agent"){
                var agency_id= JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id
            }
            else if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency" ||
                document.querySelector("meta[name='user-role']").getAttribute('content')==="Administrator (can create other users)" ){

                var agency_id= JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content'))

            }
            if(this.role!=='subscriber') {
                axios.get('/api/v1/user/license/' + agency_id)
                    .then(response => {
                        this.license = JSON.parse(response.data.data[0].meta_value);
                        this.license_value=this.license.customer_retention_tool;
                        console.log(this.license_value);
                    })
            }

            this.platform= document.querySelector("meta[name='platform']").getAttribute('content');



        },
        mounted(){

            //fetching trav docs
            axios.post('/api/v1/fetchDocuments',{
                travId:this.$route.params.id
            }).then(response => {
                if(response.data.status){

                    this.memDocs=_.cloneDeep(response.data.data);
                    this.docSection=true;
                }

            }).catch((error)=>{
                this.$swal.fire({
                    type: 'error',
                    icon: 'error',
                    title: 'Some Error Occured, Please Contact Your Handler!',
                    showConfirmButton: true,
                    timer: 3000
                })
            })
        },
        destroyed() {
            this.resetState()
        },
        watch: {
            'payment_method':function () {

                if(this.payment_method=='close'){

                    let params1 = new FormData();
                    params1.set('id', this.$route.params.id);
                    axios.post('/api/webservices/get_traveller_form', params1)
                        .then(response => {
                            // this.form_data=_.cloneDeep(response.data)
                            this.member_form_data=_.cloneDeep(response.data)
                            this.form_show_model=false;
                            // this.$eventHub.$emit('update-success')
                        })
                }
                else if(this.payment_method=='open'){
                    this.form_show_model=true

                }
                else if(this.payment_method=='Personal account'){
                    this.form_data.html_qna.forEach((ques)=>{

                        if(ques.key=='personal-option'){
                            ques.value='';
                            this.tcs_payment_method=ques.value;
                            if(!this.form_show_model){
                                this.update_cost('tcs', ques.value.toLowerCase())

                            }
                        }
                        if(ques.key=='payment'){
                            this.update_cost('gst', ques.value.toLowerCase())
                            ques.value=this.payment_method;
                        }

                    })
                    if(!this.form_show_model){


                        this.form_show_model=true;
                    }
                }
                else{
                    if(this.form_show_model==true){

                        this.form_data.html_qna.forEach((ques)=>{

                            if(ques.key=='payment'){
                                this.update_cost('gst', ques.value.toLowerCase())
                                ques.value=this.payment_method;
                            }
                            if(ques.key=='personal-option'  && this.payment_method=='Personal account'){

                                ques.value='';

                            }
                            if(ques.key=='company-options' && this.payment_method=='Company account' ){
                                // console.log(JSON.stringify(ques));
                                ques.value='';
                            }
                        })
                    }
                    else{
                        this.form_show_model=true
                    }
                }


            },
            "$route.params.id": function() {
                this.resetState()
                this.fetchData(this.$route.params.id)
            },
            "item.get_meta":function () {

                if(this.item.get_meta==null){
                    this.item.get_meta=[];
                }

                for(var d=0;d<this.item.get_meta.length;d++){
                    if(this.item.get_meta[d]['meta_key']==='crm_meta_data'){

                        var data=JSON.parse(this.item.get_meta[d]['meta_value']);

                        this.last_cron_date=data['last_updateed_date'];
                        this.total_bussiness=data['total_bussiness'];
                        this.last_booking_date=data['last_booking'];

                        this.history_lead=data['enquiry'];
                        this.history_lead_len=data['enquiry_len'];
                        this.history_book=data['confirmed'];

                        this.history_book_len=data['confirmed_len'];


                    }

                }
                if(this.meta.meta_tags!=null){
                    if(this.meta.meta_tags.length>0 ){
                        // console.log("--------------");
                        // console.log(this.meta.meta_tags);
                        // console.log("--------------");
                        var tags=JSON.parse(this.meta.meta_tags);

                        for (var c=0;c<tags.length;c++){
                            this.tags_arr_delete.push({
                                tag : tags[c],
                                type : 'custom',
                                loc : c
                            });
                            this.custom_tags_arr.push(tags[c]);
                        }
                    }}
                if(this.meta.meta_dob!=null){
                    if(this.meta.meta_dob.length>0){

                        // let current_datetime = new Date(this.meta.meta_dob);
                        // let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
                        this.formatted_dob=this.meta.meta_dob;


                    }}
                if(this.meta.meta_anniversary!=null) {
                    if( this.meta.meta_anniversary.length>0){
                        // let current_datetime2 = new Date(this.meta.meta_anniversary);
                        // let formatted_date2 = current_datetime2.getDate() + "-" + (current_datetime2.getMonth() + 1) + "-" + current_datetime2.getFullYear();
                        this.formatted_anniversary=this.meta.meta_anniversary;
                    }
                }
                if (typeof this.item.address.isArray === 'undefined') {
                    this.item.address=JSON.parse(this.item.address);
                }


            },
            "item.id": function () {

                if(this.counter==0){
                    // axios.get('/api/webservices/fetch_family_member?trav_id='+this.item.id)
                    //     .then(response => {
                    //         this.related_mem=response.data;
                    //
                    //     })
                    // this.counter++;
                }

                if(!Array.isArray(this.item.address)){
                    this.item.address=JSON.parse(this.item.address);
                    this.new_address=this.item.address[0].address;
                    this.new_city=this.item.address[0].city;
                    this.new_country={"name":this.item.address[0].country};
                }


            },
            "meta.meta_occupation":function () {

                //
                this.Occ_modal=[];
                this.Occ_modal.push({occupation:this.meta.meta_occupation});

                console.log(this.Occ_modal);
            },
            "meta.meta_type_tourist": function () {
                if(this.meta.meta_type_tourist!=null) {
                    var tag=JSON.parse(this.meta.meta_type_tourist);

                    for (var e=0;e<tag.length;e++){
                        // console.log(tag[e]['tag']);
                        // {type:'Active Senior '}
                        this.type_of_tourist.push({type:tag[e]['tag']});
                    }


                }




            },
            "meta.meta_income_range":function () {


                this.inc_range.push({range:this.meta.meta_income_range});
                console.log(this.meta.meta_income_range);




            },
            form_data:function(){
                this.tabsVisibility={'travel_date':false,'docs':false,'passport':false,'photoId':false};
                let data=JSON.parse(this.form_data.html_qna);
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
                    this.tabsVisibility.docs=true;
                }
                if(otherDocs>=0){
                    this.tabsVisibility.docs=true;
                }
                if(passport>=0){
                    this.tabsVisibility.passport=true;
                }
                if(this.hub_data_list.travel_hubs!=undefined){
                if(this.hub_data_list.travel_hubs.length>0){
                if(this.form_data.booking_id==this.hub_data_list.id){

                    if(JSON.parse(this.hub_data_list.travel_hubs[0].meta_value).length>0) {

                        this.tabsVisibility.travel_date=true;
                    }


                }
                }
                }



            }


        },
        methods: {
            ...mapActions('TravellersSingle', ['fetchData', 'updateData', 'resetState', 'setName', 'setEmail', 'setDisplay_name', 'setPhone', 'setAddress', 'setFcm_token', 'setDevice', 'setAuth_key', 'setOtp'
                ,'setmeta_tags',
                'setmeta_company_name',
                'setmeta_role',
                'setmeta_role',
                'setmeta_interests',
                'setmeta_interests',
                'setmeta_allergens',
                'setmeta_food_prefrence',
                'setmeta_dob',
                'setmeta_anniversary',
                'setmeta_gender',
                'setmeta_occupation',
                'setmeta_income_range',
                'setmeta_marital_status',
                'setmeta_remark',
                'setmeta_type_tourist',
                'setmeta_lifestyle',
                'setmeta_room_pref',
                'setmeta_seating_pref',
                'setmeta_reward',
                'setmeta_food_habits',
                'setmeta_family_size',

            ]),
            updateNumber(){
                try{
                    this.newPhoneNumber=this.newPhoneNumber.replaceAll(/\s/g,'');

                    var regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/gm;
                    if (regex.test(this.newPhoneNumber)) {

                        if(this.item.phone!=this.newPhoneNumber){

                            this.loading2=true;

                            //fetching trav docs
                            axios.post('/api/v1/updateNumber',{
                                travId:this.$route.params.id,
                                number:this.newPhoneNumber,
                                oldnumber:this.item.phone
                            }).then(response => {
                                this.loading2=false;
                                    if(response.data.status){
                                        this.$swal.fire({
                                            type: 'success',
                                            icon: 'success',
                                            title: response.data.msg,
                                            showConfirmButton: false,
                                            timer: 3000

                                        })
                                        this.item.phone=_.clone(response.data.number);
                                        this.newPhoneNumber=null;
                                        this.numberModal=false;
                                        this.loading2=false;
                                    }
                                    else{
                                        this.$swal.fire({
                                            type: 'error',
                                            icon: 'error',
                                            title: response.data.msg,
                                            showConfirmButton: true,
                                            timer: 3000
                                        })
                                    }
                            }).catch((error)=>{
                                this.loading2=false;
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Some Error Occured. Please Try Again Later !',
                                    showConfirmButton: true,
                                    timer: 3000
                                })
                            })





                        }
                        else{

                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Old and New number cannot be same',
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
                            title: 'Please Enter Correct Number',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                    }
                }
                catch(error){
                    this.kycLoadervisibility(false)
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
            chooseFiles(id)
                     {
                try{

                        document.getElementById(id).click();
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
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            kycLoadervisibility(status){
                this.kycLoader=status;
            },
            update_mem_name(index,name_pos){
                let name='';
                let flag=0;

                if(this.trav_name.first!=''){
                    name=this.trav_name.first;
                    flag++;
                }
                if(this.trav_name.last!=''){
                    name=flag>0?this.trav_name.first+' '+this.trav_name.last:'';
                }
                if(this.trav_name.first!='' && this.trav_name.last){
                    this.form_data.html_qna[index].value.mem_name=_.cloneDeep(name);
                    console.log(this.form_data.html_qna[index]);

                }


            },
            fetchIdData :function(event){
                let doc_exist='';
                let doc_exist_status=false;
                if(this.meta.documents.length>0){
                    this.meta.documents.forEach(doc=>{
                        if(doc.id_name==event.label && doc.mem_name==this.form_data.name){

                            this.$swal.fire({
                                title: 'We may already have your '+doc.id_name+' from earlier. Would you like to view? ',
                                type: 'question',
                                showDenyButton: true,
                                showCancelButton: true,
                                confirmButtonText: 'Yes',
                                denyButtonText: `No`,
                            }).
                            then((result) => {
                                // http://127.0.0.1:8000/storage/20967/1648032569410.JPEG

                                if (result.value) {
                                    this.$swal.fire({
                                        title: 'Would you like to use it?',
                                        imageUrl: doc.url,
                                        imageWidth: 400,
                                        imageHeight: 350,
                                        imageAlt: doc.id_name,
                                        showCloseButton:true,
                                        showDenyButton: true,
                                        showCancelButton: true,
                                        confirmButtonText: 'Yes',
                                        denyButtonText: `No`,
                                    }).then((result) => {
                                        if (result.value) {

                                            let data=this.form_data.html_qna;
                                            const index=data.findIndex(form => (form.key=='file' && form.ques=='Photo ID'));
                                            // console.log(this.form_data.html_qna[index]);
                                            // console.log(doc);
                                            // {"label":"Aadhar Card"}

                                            this.form_data.html_qna[index].value=_.cloneDeep(
                                                {"id_num":doc.id_num,"id_name":{"label":doc.id_name},"mem_name":doc.mem_name,"url":doc.url}
                                            )

                                            let mem_name_arr=doc.mem_name.split(" ");

                                            if(mem_name_arr.length == 2) {
                                                this.trav_name.first=_.cloneDeep(mem_name_arr[0]);
                                                this.trav_name.last=_.cloneDeep(mem_name_arr[1]);
                                            }
                                            if(mem_name_arr.length == 3) {
                                                this.trav_name.first=_.cloneDeep(mem_name_arr[0]+' '+mem_name_arr[1]);
                                                this.trav_name.last=_.cloneDeep(mem_name_arr[2]);
                                            }
                                            if(mem_name_arr.length > 3) {
                                                this.trav_name.first=_.cloneDeep(mem_name_arr[0]+' '+mem_name_arr[1]);
                                                let last_name='';
                                                for (let i=2;i<mem_name_arr.length;i++){
                                                    last_name=last_name!=''?last_name+' '+mem_name_arr[i]:mem_name_arr[i];
                                                }
                                                this.trav_name.last=_.cloneDeep(last_name);
                                            }

                                            this.$swal.fire({
                                                type: 'success',
                                                icon: 'success',
                                                title: 'Updated',
                                                showConfirmButton: false,
                                                timer: 1500

                                            })
                                        }
                                        else if(result.dismiss=='cancel'){
                                            // console.log(result);
                                            console.log('Denied');
                                        }
                                    })

                                }




                            })
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
            update_cost(type,key){
                let return_arr=[];
                let counter=0;
                let flag=true;
                let total_cost=0;
                if (type == 'tcs'){
                    this.tcs_payment_method=key;
                }
                if(type=='gst'){
                    this.final_cost_arr.forEach((cost)=>{
                        if(cost.type=='gst' || cost.type=='main_cost'){
                            total_cost=total_cost+cost.cost;
                        }
                    })

                }
                if(this.payment_method=='Personal account') {

                    if (type == 'tcs' && key == 'yes') {
                        this.tcs_cost_arr = [];
                        this.final_cost_arr.forEach((cost) => {
                            if (cost.type == 'gst' || cost.type == 'main_cost') {
                                total_cost = total_cost + cost.cost;
                            }
                            if (cost.type == 'tcs') {
                                this.final_cost_arr[counter].value = 5;
                                this.final_cost_arr[counter].cost = (total_cost * 5) / 100;
                                total_cost = total_cost + this.final_cost_arr[counter].cost;
                                flag = false;
                            }
                            counter++;
                        })
                        if (flag && this.tour_type=="ob") {
                            // if (flag ) {
                            this.tcs_cost_arr.push({
                                'type': 'tcs',
                                'title': 'TCS',
                                'value': 5,
                                'cost': (total_cost * 5) / 100
                            });
                            total_cost = total_cost + (total_cost * 5) / 100;
                        }
                        this.final_cost_arr = this.final_cost_arr.concat(this.tcs_cost_arr);
                    }
                    else if (type == 'tcs' && key == 'no') {
                        this.tcs_cost_arr = [];

                        this.final_cost_arr.forEach((cost) => {
                            if (cost.type == 'gst' || cost.type == 'main_cost') {
                                total_cost = total_cost + cost.cost;
                            }
                            if (cost.type == 'tcs') {
                                this.final_cost_arr[counter].value = 10;
                                this.final_cost_arr[counter].cost = (total_cost * 10) / 100;
                                total_cost = total_cost + this.final_cost_arr[counter].cost;
                                flag = false;
                            }
                            counter++;
                        })
                        if (flag && this.tour_type=="ob") {
                            // if (flag ) {
                            this.tcs_cost_arr.push({
                                'type': 'tcs',
                                'title': 'TCS',
                                'value': 10,
                                'cost': (total_cost * 10) / 100
                            });
                            total_cost = total_cost + (total_cost * 10) / 100;
                        }
                        this.final_cost_arr = this.final_cost_arr.concat(this.tcs_cost_arr);
                    }

                }
                else if(this.payment_method=='Company account') {

                    if (type == 'tcs' && key == 'yes') {
                        this.tcs_cost_arr = [];
                        this.final_cost_arr.forEach((cost) => {
                            if (cost.type == 'gst' || cost.type == 'main_cost') {
                                total_cost = total_cost + cost.cost;
                            }
                            if (cost.type == 'tcs') {
                                this.final_cost_arr[counter].value = 0;
                                this.final_cost_arr[counter].cost = (total_cost * 0) / 100;
                                total_cost = total_cost + this.final_cost_arr[counter].cost;
                                flag = false;
                            }
                            counter++;
                        })
                        if (flag ) {
                            // if (flag ) {
                            this.tcs_cost_arr.push({
                                'type': 'tcs',
                                'title': 'TCS',
                                'value': 0,
                                'cost': (total_cost * 0) / 100
                            });
                            total_cost = total_cost + (total_cost * 0) / 100;
                        }
                        this.final_cost_arr = this.final_cost_arr.concat(this.tcs_cost_arr);
                    }
                    else if (type == 'tcs' && key == 'no') {
                        this.tcs_cost_arr = [];
                        this.final_cost_arr.forEach((cost) => {
                            if (cost.type == 'gst' || cost.type == 'main_cost') {
                                total_cost = total_cost + cost.cost;
                            }
                            if (cost.type == 'tcs') {
                                this.final_cost_arr[counter].value = 5;
                                this.final_cost_arr[counter].cost = (total_cost * 5) / 100;
                                total_cost = total_cost + this.final_cost_arr[counter].cost;
                                flag = false;
                            }
                            counter++;
                        })
                        if (flag ) {
                            // if (flag ) {
                            this.tcs_cost_arr.push({
                                'type': 'tcs',
                                'title': 'TCS',
                                'value': 5,
                                'cost': (total_cost * 5) / 100
                            });
                            total_cost = total_cost + (total_cost * 5) / 100;
                        }
                        this.final_cost_arr = this.final_cost_arr.concat(this.tcs_cost_arr);
                    }


                }
                else{
                    this.tcs_payment_method='';
                    this.final_cost_arr.forEach((cost)=>{
                        if (cost.type == 'tcs') {
                            this.final_cost_arr.splice(counter,1);
                        }
                        counter++;
                    })
                }

                // console.log(JSON.stringify(this.final_cost_arr));

                if(total_cost % 1!=0){
                    this.final_cost=parseInt(total_cost)+1;
                }
                else{
                    this.final_cost=parseInt(total_cost);
                }
                // console.log(total_cost);
                // console.log(this.final_cost);


            },
            validateform :function(){

                return new Promise((resolve, reject) => {
                    this.loading2 = true;
                    // if success
                    if (this.mf_key != '') {
                        resolve(true)
                        this.loading2 = false;
                    }
                    else {

                        this.errors = [];
                        let flag = 0;
                        let counter = 0;
                        let pay_method = '';
                        this.form_data.html_qna.forEach((ques) => {
                            if (ques.type == 'doc' && ques.file == "") {
                                document.getElementById(ques.doc + counter).style.border = '1px solid red';
                                this.errors.push(ques.doc + ' file not uploaded!');
                                flag++;
                            }


                            if (ques.key == 'payment') {
                                if (ques.value == "") {
                                    document.getElementById(ques.key + counter).style.border = '1px solid red';
                                    this.errors.push('Payment type is not selected!');
                                    flag++;
                                } else {

                                    pay_method = ques.value;
                                }
                            }
                            if (pay_method != '') {

                                if (pay_method == 'Personal account' && ques.key == 'personal-option') {

                                    if (ques.value == "") {
                                        document.getElementById(ques.key + counter).style.border = '1px solid red';
                                        this.errors.push('Please Select Have you filed the ITR in the last 2 years?');
                                        flag++;
                                    }
                                } else if (pay_method == 'Company account' && ques.key == 'company-options') {

                                    if (ques.value == "") {
                                        document.getElementById(ques.key + counter).style.border = '1px solid red';
                                        this.errors.push('Please Select Will you deducting TDS on this payment ?');
                                        flag++;
                                    } else {

                                        for (var i = 0; i < ques.fields.length; i++) {

                                            if (ques.fields[i].require == 1) {
                                                // console.log(ques.key+i);
                                                document.getElementById(ques.key + i).style.border = '1px solid red';
                                                flag++;
                                            }
                                            if (ques.fields[i].key == 'Company Mobile') {
                                                var res = ques.fields[i].value.replace(/\(/g, "");
                                                res = res.replace(/\)/g, "");
                                                res = res.replace(/-/g, "");
                                                res = res.replace(/ /g, "");
                                                ques.fields[i].value = res;
                                            }
                                            if (ques.fields[i].key == 'GST NO') {
                                                if (ques.fields[i].value != "") {

                                                    var txtPANCard = ques.fields[i];

                                                    var regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
                                                    if (regex.test(txtPANCard.value.toUpperCase())) {

                                                    } else {
                                                        alert('Invalid GST Number');
                                                        flag++;
                                                    }

                                                }
                                            }
                                        }
                                    }

                                }
                            }
                            counter++;
                        })
                        if (!this.form_data.form_status) {
                            this.errors.push('Please Check I agree to the terms and conditions!');
                            flag++;
                        }
                        if (flag == 0) {
                            let form = new FormData();
                            form.set("form_record_html", JSON.stringify(this.form_data.html_qna));
                            form.set("group_id", this.form_data.group_id);
                            form.set("booking_id", this.form_data.booking_id);
                            form.set("form_record_id", this.form_data.id);
                            form.set("form_id", this.form_data.form_id);
                            form.set("status", this.form_data.status);
                            form.set("traveller_id", this.$route.params.id);
                            form.set("long_id", this.form_data.long_id);
                            form.set("name", this.form_data.name);
                            form.set("form_status", this.form_data.form_status);
                            // form.set("package_costing",JSON.stringify(this.form_data[this.form_index].member_name));
                            form.set("kyc", 'true');
                            axios.post('/api/v1/traveller_form', form)

                                .then(response => {
                                    // console.log(response);
                                    let updated_cost=_.cloneDeep(this.final_cost_arr);
                                    updated_cost.push({'type':'final_cost','title':'Final Package Cost ','cost':this.final_cost})
                                    let form = new FormData();
                                    form.set('nonce','173648APz6zQ2jaa^CKIB9rSStjPWgo!NZnPYCKl59b2380d')
                                    form.set('base_payment',this.total_cost)
                                    form.set('payment_data',JSON.stringify(updated_cost))
                                    form.set('tour_type',JSON.stringify(this.tour_type))
                                    form.set('id',this.form_data.booking_id)
                                    axios.post('/api/v1/finalPayment' , form)
                                        .then(response => {

                                            if(response.data.status=='success'){

                                                this.mf_key=response.data.key;


                                                let form = new FormData();
                                                form.set('id',this.form_data.booking_id)
                                                axios.post('/api/v1/fetch_payment_details' , form)
                                                    .then(response => {
                                                        // console.log(response.data.data)
                                                        this.invoice_data=response.data.data;
                                                        this.uastra_payment_button=response.data.uastra_status;

                                                    })
                                                this.loading2=false;
                                                resolve(true)

                                            }
                                            else{
                                                flag++;
                                                this.errors=response.data.msg;
                                                if (!_.isEmpty(this.errors)) {
                                                    this.errormodal = true
                                                }
                                                reject(true)
                                                this.loading2 = false;

                                            }

                                        })
                                        .catch(error => {

                                            flag++;
                                            console.log(error);
                                            if (!_.isEmpty(this.errors)) {
                                                this.errormodal = true
                                            }
                                            reject(true)
                                            this.loading2 = false;
                                        })


                                })

                        } else {
                            if (!_.isEmpty(this.errors)) {
                                this.errormodal = true
                            }
                            reject(true)
                            this.loading2 = false;
                        }
                    }


                })
            },
            procced_to_pay(){
                let flag=0;
                this.final_cost_arr.push({'type':'final_cost','title':'Final Package Cost ','cost':this.final_cost})
                let form = new FormData();
                form.set('nonce','173648APz6zQ2jaa^CKIB9rSStjPWgo!NZnPYCKl59b2380d')
                form.set('base_payment',this.total_cost)
                form.set('payment_data',JSON.stringify(this.final_cost_arr))
                form.set('tour_type',JSON.stringify(this.tour_type))
                form.set('id',this.form_data.booking_id)
                axios.post('/api/v1/finalPayment' , form)
                    .then(response => {

                        if(response.data.status=='success'){

                            this.mf_key=response.data.key;
                        }
                        else{
                            flag++;
                            this.errors=response.data.msg;
                            return true;
                        }

                    })
                    .catch(error => {

                        console.log(error);

                        flag++;
                        return false;
                    })


            },
            fetch_pay_details(){
                let form = new FormData();
                form.set('id',this.form_data.booking_id)
                axios.post('/api/v1/fetch_payment_details' , form)
                    .then(response => {
                        // console.log(response.data.data)
                        this.invoice_data=response.data.data;
                        this.uastra_payment_button=response.data.uastra_status;

                    })
                return true;

            },
            reset_fields(){
                console.log(this.additional_kyc_data.option);
            },
            checkemptypassport(issue_date,issue_place,date, name_f, pasno,image1) {
                if (issue_place == ''  ||issue_date == ''  ||name_f == ''  || pasno == '' || date == '' || image1 == '') {

                    return true;
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
            paynow(form){
                this.form_data=_.cloneDeep(form);
                var callback=window.location.protocol+'//'+window.location.hostname+'/api/webservices/callbacktravller?id='+this.form_data.id;
                // console.log(callback)
                var data = {};
                (data["name"] = this.form_data.name),
                    (data["desc"] = this.form_data.long_id),
                    (data["amount"] = 5000),
                    axios.post('https://my-json-server.typicode.com/typicode/demo/profile', data)
                        .then(res => {
                            this.order_id = res.data.order_id;
                            console.log('order id start',this.order_id);
                            //Initiation of Razorpay PG
                            //key_id: rzp_test_o9Q9t6Ejxgjiiz
                            //key_secret: QHhovwlJKusgjmgOw9F2oQe6
                            var rzp1 = new Razorpay({
                                key: "rzp_test_o9Q9t6Ejxgjiiz",
                                amount: res.data.amount,
                                name: res.data.name,
                                currency: "INR",
                                description: res.data.desc,
                                image: "/uploads/dashboard_resources/top_logo.png",

                                //Uncomment if you are using handler function

                                // "handler": function (response){
                                //   alert(response.razorpay_payment_id);
                                // },
                                // callback_url: 'http://13.126.183.214/razorpay/checkstatus/?orderid='+this.order_id,

                                prefill: {
                                    // name: this.form_data.name,
                                    // email: this.form_data.get_booking.email,
                                    // contact:this.form_data.get_booking.phone
                                },

                                notes: {
                                    address: ""
                                },

                                theme: {
                                    color: "#00ffff"
                                },
                                order_id: res.data.order_id,
                                callback_url:callback ,
                                redirect: true,
                            });
                            rzp1.open();
                            console.log('order id final',this.order_id);
                        })
                        .catch(err => {
                            console.log("ERR", err);
                        });


            },
            uploadfileformKyc(value, type, index,url,id) {
                console.log(" for id ---- ",value.target.files[0].size);
                // const myFile = document.getElementById(id).files[0];
const fileSize = value.target.files[0].size / 1024 / 1024;
console.log(" my file ",fileSize);
if (fileSize > 2) {
    // alert('you have exceeds fileSize limit');
    this.$swal.fire({
        type: 'error',
        icon: 'error',
        title: 'File size exceeds 2 MB',
        showConfirmButton: true,
        timer: 4000,
    });
    return false;
}
                if(url!=''){
                    uploadfile("kyc ", type, value.target.files[0], id).then(response => {
                        this.form_data.html_qna[index].file = response.data;

                    })
                }else {
                    uploadfile("kyc update", type, value.target.files[0], id).then(response => {
                        this.form_data.html_qna[index].file = response.data;

                    })
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
                submit_traveller_form_partial_1(){
                console.log(JSON.parse(this.hub_data_list.travel_hubs[0].meta_value).length)

                if(this.hub_data_list.travel_hubs!='undefined'){
                    console.log(JSON.parse(this.hub_data_list.travel_hubs[0].meta_value).length)
                    if(this.hub_data_list.travel_hubs.length>0){

                            if(this.hub_data_list.travel_date=="" || this.hub_data_list.travel_date==null) {

                    if(JSON.parse(this.hub_data_list.travel_hubs[0].meta_value).length>0){
                                             console.log("inside hubbbbb3");

                        if(!document.querySelector('input[name="tour_date"]:checked')){

                            this.submit_traveller_form_partial();


                            // this.$swal.fire({
                            //     title: 'It appears that you have not picked a date for your travel. Would you like to select ?',
                            //     showCloseButton:false,
                            //     type: 'error',
                            //     icon: 'error',
                            //     showDenyButton: true,
                            //     showCancelButton: true,
                            //     focusConfirm: false,
                            //     confirmButtonText:'Yes',
                            //     cancelButtonText:'No',
                            //     }).then((result) => {
                            //     if (result.value) {
                            //
                            //
                            //         return false;
                            //         } else if (result.dismiss == 'cancel') {
                            //
                            //         this.submit_traveller_form_partial();
                            //     }
                            // })

                            }
                    else {
                        console.log("hubbb2222")
                            this.hub_data_list.travel_date=document.querySelector('input[name="tour_date"]:checked').value;
                            this.submit_traveller_form_partial();
                        }

                        }
                                     else{

                                         this.submit_traveller_form_partial();
                                     }
                    }
                    else{
                        this.submit_traveller_form_partial();
                    }
                    }
                    else{
                        this.submit_traveller_form_partial();
                    }


                }
                else{
                    this.submit_traveller_form_partial();
                }



            },
            submit_traveller_form_partial(){

                // form_data.status!=4?form_filler=='trav'?submit_traveller_form_partial:form_show_model=false:form_show_model=false
                if(this.form_data.status==4){
                    this.form_show_model=false;
                    return false;
                }
                if(this.form_filler!='trav'){
                    this.form_show_model=false;
                    return false;
                }

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
                    form.set("form_record_members",JSON.stringify(this.form_data.member_data) );
                }


                form.set("group_id",this.form_data.group_id );
                form.set("booking_id",this.form_data.booking_id );
                form.set("form_record_id",this.form_data.id );
                form.set("form_id",this.form_data.form_id );
                form.set("status",this.form_data.status );
                form.set("traveller_id",this.$route.params.id );
                form.set("long_id",this.form_data.long_id );
                form.set("name",this.form_data.name );
                form.set("member_name",JSON.stringify(this.form_data.member_name));
                form.set("form_step",JSON.stringify(this.form_data.form_step));
                form.set("populatedId",this.populate_data.status?this.populate_data.pupulatedId:'');


                axios.post('/api/v1/traveller_form_member_partial', form)

                    .then(response => {
                        // console.log(response);
                        this.$swal.fire({
                            type: 'success',
                            icon: 'success',
                            title: 'We have saved your responses. However your handler will only be notified once the form is complete and submitted.',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 5000
                        })

                        this.form_data.html_qna=_.cloneDeep(JSON.stringify(this.form_data.html_qna))
                        this.form_data.member_data=_.cloneDeep(JSON.stringify(this.form_data.member_data))
                        this.form_data.status=status;
                        this.form_show_model=false;
                        if(this.form_data.status!=4){
                            axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/0')
                        }

                        this.show_form_button=true;
                        this.fetchData(this.$route.params.id)
                        this.form_index=''
                        let params1 = new FormData();
                        params1.set('id', this.$route.params.id);
                        axios.post('/api/webservices/get_traveller_form', params1)
                            .then(response => {
                                // this.form_data=_.cloneDeep(response.data)
                                this.member_form_data=_.cloneDeep(response.data)
                                this.trav_name={'first':'','last':''};
                                this.$eventHub.$emit('update-success');
                                this.loading2=false;
                            })
                    })

            },
            submit_traveller_form(){
                try{

                    this.errors=[];
                    let add_member_flag=this.form_data.long_id.search("FAM")>=0?false:true;
                    let members_data=[];


                   if(this.hub_data_list.travel_hubs[0] !== undefined && JSON.parse(this.hub_data_list.travel_hubs[0].meta_value).length != 0){
                    if(this.hub_data_list.travel_date=='' || this.hub_data_list.travel_date==null){

                        if(this.hub_data_list.travel_hubs.length>0){



                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Please Choose Your Travel Date !!',
                                    showConfirmButton: true,
                                    timer: 3500
                    })

                                return false;


                        }

                    }

                   }




                    this.kycLoadervisibility(true);
                    var flag=true;
                    let err_check=false;

                    //adding border on empty required fields
                    for(var i=0; i<this.form_data.html_qna.length; i++){

                        if (!('addMemberSection' in this.form_data.html_qna[i])){

                        err_check=false;


                        //adding border on empty required fields
                        if(this.form_data.html_qna[i].require==1){



                            if(this.form_data.html_qna[i].key=='file' && this.form_data.html_qna[i].ques=='Original Passport'){


                                document.getElementById('passport_issue_date').style.border='none';
                                document.getElementById('passport_date').style.border='none';
                                document.getElementById('passport_first_name').style.border='none';
                                document.getElementById('passport_last_name').style.border='none';
                                document.getElementById('passport_no').style.border='none';
                                document.getElementById('passport_issue_place').style.border='none';


                                if(this.form_data.html_qna[i].value.issue_date==''){
                                    document.getElementById('passport_issue_date').style.border='1px solid red';
                                    err_check=true;

                                }
                                if(this.form_data.html_qna[i].value.exp_date==''){
                                    document.getElementById('passport_date').style.border='1px solid red';
                                    err_check=true;

                                }
                                if(this.form_data.html_qna[i].value.name_first==''){
                                    document.getElementById('passport_first_name').style.border='1px solid red';
                                    err_check=true;

                                }
                                if(this.form_data.html_qna[i].value.name_last==''){
                                    document.getElementById('passport_last_name').style.border='1px solid red';
                                    err_check=true;
                                }
                                if(this.form_data.html_qna[i].value.passportno==''){
                                    document.getElementById('passport_no').style.border='1px solid red';
                                    err_check=true;
                                }
                                if(this.form_data.html_qna[i].value.issue_place==''){
                                    document.getElementById('passport_issue_place').style.border='1px solid red';
                                    err_check=true;

                                }

                                if(err_check){
                                    document.getElementById('details-acco').style.border='1px solid red';
                                    this.errors.push('Please Fill all '+this.form_data.html_qna[i].ques+' Fields!');
                                    flag=false;
                                }

                            }
                            else if(this.form_data.html_qna[i].key=='file' && this.form_data.html_qna[i].ques=='Photo ID'){

                                document.getElementById('photoId_num').style.border='none';
                                document.getElementById('photoId_firstName').style.border='none';
                                document.getElementById('photoId_lastName').style.border='none';

                                if(this.form_data.html_qna[i].value.id_num==''){
                                    document.getElementById('photoId_num').style.border='1px solid red';
                                    err_check=true;
                                }
                                if(this.form_data.html_qna[i].value.mem_name==''){
                                    document.getElementById('photoId_firstName').style.border='1px solid red';
                                    document.getElementById('photoId_lastName').style.border='1px solid red';
                                    err_check=true;
                                }

                                if(err_check){
                                        console.log("err_check")

                                    document.getElementById('details-acco').style.border='1px solid red';
                                    this.errors.push('Please Fill all '+this.form_data.html_qna[i].ques+' Fields!');
                                    flag=false;
                                }
                            }
                            else if(this.form_data.html_qna[i].value==='' && this.form_data.html_qna[i].key!='file'){

                                this.emptyIndex = this.form_data.html_qna.findIndex((field) => field.require === 1 && field.value === '');


                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.border='1px solid red';
                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.background='#ffdfdf';

                                document.getElementById('details-acco').style.border='1px solid red';
                                this.errors.push('Please Fill all '+this.form_data.html_qna[i].type+' Fields!');
                                flag=false;


                            }
                            else if(this.form_data.html_qna[i].value=='' && this.form_data.html_qna[i].key=='file'){

                                this.docError =  this.form_data.html_qna.findIndex((field) => field.require === 1 && field.value === '' && field.key == 'file');


                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.border='1px solid red';
                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.background='#ffdfdf';
                                document.getElementById('docs-acco').style.border='1px solid red';
                                this.errors.push('Please Fill all '+this.form_data.html_qna[i].ques+' Fields!');
                                flag=false;


                            }
                            else if(this.form_data.html_qna[i].value!='' && this.form_data.html_qna[i].key=='file'){


                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.border='none';
                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.background='#fff';


                            }
                            else if(this.form_data.html_qna[i].value!='' && this.form_data.html_qna[i].key!='file'){


                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.border='none';
                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.background='none';



                            }



                        }
                        else{
                            document.getElementById(this.form_data.html_qna[i].key+[i]).style.border='none';
                            document.getElementById(this.form_data.html_qna[i].key+[i]).style.background='none';


                        }

                        //validating pan number
                        if(this.form_data.html_qna[i].require==0 && this.form_data.html_qna[i].key=="pan" && this.form_data.html_qna[i].value!=""){
                            // console.log(this.form_data[this.form_index].html_qna[i].value);
                            var txtPANCard = this.form_data.html_qna[i];
                            var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
                            if (!regex.test(txtPANCard.value.toUpperCase())) {
                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.border='1px solid red';
                                flag=false;
                                this.errors.push('Invalid PAN Number');
                            }
                            else{
                                document.getElementById(this.form_data.html_qna[i].key+[i]).style.border='none';
                            }
                        }



                        }

                        if(this.form_data.html_qna[i].type=='AddMem' && this.form_data.html_qna[i].key=='AddMem' ){
                                if(this.form_data.html_qna[i].addMemberSection=='No'){
                                    add_member_flag=false;
                                }
                        }
                    }


                    // checking self paid members
                    if(typeof this.form_data.member_name =="string"  ){




                        const Obj2 =  this.form_data.member_name.replace(/""/g, '')



                        this.form_data.member_name=JSON.parse(Obj2);



                    }

                    if(this.form_data.member_name.length>0){

                        let member_count=1;
                        this.emptyIndexMember =this.form_data.member_name.findIndex((field) => field.dob=='' || field.name=='' || field.home_town=='' || field.relation=='' ||   field.gender=='');

                        if(add_member_flag){
                        this.form_data.member_name.forEach((data)=>{

                            if(data.status==1){
                                if(data.dob=='' || data.name=='' || data.home_town=='' || data.relation=='' ||   data.gender=='' ){
                                    this.errors.push('Please fill all fields of self paid member '+member_count);
                                    document.getElementById('member'+member_count).style.border='1px solid red';
                                    document.getElementById('member'+member_count).style.background='#ffdfdf';
                                    document.getElementById('members-acco').style.border='1px solid red';
                                    flag=false;
                                }
                            }
                            else{
                                document.getElementById('member'+member_count).style.border='none';
                                document.getElementById('member'+member_count).style.background='none';
                                document.getElementById('members-acco').style.border='none';
                            }

                                members_data.push(data);
                            member_count++;
                        })
                            this.form_data.member_name=_.cloneDeep(members_data);
                            members_data=[];
                    }
                        else{
                            this.form_data.member_name=[];
                        }

                    }



                    if(flag){
                        flag=false;
                        let form = new FormData();
                        form.set("form_record_html",JSON.stringify(this.form_data.html_qna));


                        if(this.form_data.member_data!=null) {

                            let membersUpload=this.form_data.member_allowed;
                            let membersdata_filled=0;

                            members_data=[];
                            let add_mem_flag=1;
                            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            this.form_data.member_data.forEach((members) => {

                                if(members.name!='' && members.dob!='' && members.home_town!=''){
                                    membersUpload--;

                                if(members.cat.type=='fam' && members.name !=''){
                                    if (members.relation == '' || members.gender == '' || members.dob == ''){
                                        this.errors.push('Please fill all mandatory fields of add member '+add_mem_flag);
                                        document.getElementById('add_member'+add_mem_flag).style.border='1px solid red';
                                        document.getElementById('add_member'+add_mem_flag).style.background='#ffdfdf';

                                        document.getElementById('add_member'+add_mem_flag).scrollIntoView();
                                        flag=true;

                                    }
                                    else if (members.name != '' && members.relation != ''){
                                        members.associate_to_parent=true;
                                    }

                                    if(members.cat.type=='iti' && members.relation_cat.label=='Yes'){

                                        if (members.home_town == '' || members.email == '' || members.relation == '' ||  members.name == '' || members.phone == '' || members.gender == '') {
                                            this.errors.push('Please fill all mandatory fields of add member '+add_mem_flag);
                                            document.getElementById('add_member'+add_mem_flag).style.border='1px solid red';
                                            document.getElementById('add_member'+add_mem_flag).style.background='#ffdfdf';
                                            document.getElementById('add_member'+add_mem_flag).scrollIntoView();
                                            flag=true;
                                        }
                                        if( !re.test(members.email)){
                                            flag=true;
                                            this.errors.push('Please Fill Valid E-mail');
                                            document.getElementById('add_member'+add_mem_flag).style.border='1px solid red';
                                            document.getElementById('add_member'+add_mem_flag).style.background='#ffdfdf';
                                            document.getElementById('add_member'+add_mem_flag).scrollIntoView();
                                        }


                                    }

                                    if(members.cat.type=='iti' && members.relation_cat.label=='No'){
                                        members.relation ='Nominated';
                                        if (members.home_town == '' || members.email == ''  ||  members.name == '' || members.phone == '' || members.gender == '') {
                                            this.errors.push('Please fill all mandatory fields of add member '+add_mem_flag);
                                            document.getElementById('add_member'+add_mem_flag).style.border='1px solid red';
                                            document.getElementById('add_member'+add_mem_flag).style.background='#ffdfdf';
                                            document.getElementById('add_member'+add_mem_flag).scrollIntoView();
                                            flag=true;

                                        }
                                        if( !re.test(members.email)){
                                            flag=true;
                                            this.errors.push('Please Fill Valid E-mail');
                                            document.getElementById('add_member'+add_mem_flag).style.border='1px solid red';
                                            document.getElementById('add_member'+add_mem_flag).style.background='#ffdfdf';
                                            document.getElementById('add_member'+add_mem_flag).scrollIntoView();
                                        }



                                    }

                                }
                                    membersdata_filled++;
                                add_mem_flag++;
                                members_data.push(members);
                                }
                                else{
                                    document.getElementById('add_member'+add_mem_flag).style.border='1px solid red';
                                    document.getElementById('add_member'+add_mem_flag).style.background='#ffdfdf';
                                    document.getElementById('add_member'+add_mem_flag).scrollIntoView();
                                }
                            })

                            if(add_member_flag){
                                if(this.form_data.member_allowed>1){
                                    if(members_data.length>0 && membersdata_filled>0){
                            this.form_data.member_data=_.cloneDeep(members_data);
                            members_data=[];
                        }
                                else{

                                    this.kycLoadervisibility(false);

                                        this.$swal.fire({
                                            type: 'error',
                                            icon: 'error',
                                            title: 'Kindly provide all necessary information of your nominations.',
                                            showConfirmButton: true,
                                            timer: 3500
                                        })

                                    return false;
                                }
                            }

                            }



                        }

                        if(flag){


                            this.kycLoadervisibility(false);
                            if (!_.isEmpty(this.errors)) {
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Oops! You may have missed filling a few fields. Please check again',
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                            }
                            return false;

                        }

                        if(add_member_flag){
                        if(this.form_data.member_data==='' || _.isEmpty(this.form_data.member_data)){
                            form.set("form_record_members",'' );
                        }
                        else if(this.form_data.member_data[0].name==''){
                            form.set("form_record_members",'' );
                        }
                        else{
                            form.set("form_record_members",JSON.stringify(this.form_data.member_data) );
                        }
                         }
                        else{
                            form.set("form_record_members",'' );
                        }


                        form.set("group_id",this.form_data.group_id );
                        form.set("booking_id",this.form_data.booking_id );
                        form.set("form_record_id",this.form_data.id );
                        form.set("form_id",this.form_data.form_id );
                        form.set("status",this.form_data.status );
                        form.set("traveller_id",this.$route.params.id );
                        form.set("long_id",this.form_data.long_id );
                        form.set("name",this.form_data.name );
                        form.set("member_name",JSON.stringify(this.form_data.member_name));
                        form.set("form_step",JSON.stringify(this.form_data.form_step));
                        form.set("populatedId",this.populate_data.status?this.populate_data.pupulatedId:'');

                        axios.post(this.form_data.long_id.search("FAM")!==-1?'/api/v1/traveller_form_member':'/api/v1/traveller_form', form)
                            .then(response => {

                                if(this.form_data.long_id.search("FAM")>=0){
                                    // document.getElementById('members-acco').style.border='none';
                                }


                                if(response.data.msg.includes('contact your handler')){
                                    // document.getElementById('members-acco').style.border='1px solid red';
                                    this.kycLoadervisibility(false)
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: response.data.msg,
                                        showConfirmButton: true,
                                        timer: 5000
                                    })

                                    return false;
                                }

                                if(response.data.status){

                                    this.form_data.html_qna=_.cloneDeep(JSON.stringify(this.form_data.html_qna))
                                    this.form_data.member_data=_.cloneDeep(JSON.stringify(this.form_data.member_data))
                                    this.form_data.status=1;
                                    this.form_show_model=false

                                    if(this.form_data.status!=4){
                                        axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/0')
                                    }
                                    this.show_form_button=true;
                                    this.fetchData(this.$route.params.id)
                                    this.form_index=''

                                    let params1 = new FormData();
                                    params1.set('id', this.$route.params.id);
                                    axios.post('/api/webservices/get_traveller_form', params1)
                                        .then(response => {
                                            // this.form_data=_.cloneDeep(response.data)
                                            this.member_form_data=_.cloneDeep(response.data)
                                            this.$eventHub.$emit('update-success');
                                            this.tabsVisibility={'travel_date':false,'docs':false,'passport':false,'photoId':false};
                                            this.lockedTabs={'passport':false,'docs':false,'details':false,'Add Members':false};

                                            this.form_filler='trav';
                                            this.trav_name={'first':'','last':''};
                                            this.kycLoadervisibility(false)
                                        })
                                        .catch((error)=>{
                                            this.kycLoadervisibility(false)
                                            this.$swal.fire({
                                                type: 'error',
                                                icon: 'error',
                                                title: 'Some Error Occured, Please Contact Your Handler !',
                                                showConfirmButton: true,
                                                timer: 3000
                                            })
                                        })
                                }
                                else{
                                    this.kycLoadervisibility(false)
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Some Error Occured, Please Contact Your Handler !',
                                        showConfirmButton: true,
                                        timer: 3000
                                    })
                                }




                            })
                            .catch((error)=>{
                                this.kycLoadervisibility(false)
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Some Error Occured, Please Contact Your Handler !',
                                    showConfirmButton: true,
                                    timer: 3000
                                })
                            })

                    }
                    if (!_.isEmpty(this.errors)) {

                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Oops! You may have missed filling a few fields. Please check again',
                            showConfirmButton: true,

                        }).then(result=>{
                            if(result.value){
                                this.scrollErrFunc();

                                }

                        })
                        this.kycLoadervisibility(false);
                    }

                }
                catch(error){
                    this.kycLoadervisibility(false)
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
            scrollToElementById(id) {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            },
            scrollErrFunc(){
                if (this.docError !== '') {
                    document.getElementById('faq2').classList.add('show');
                    const key = this.form_data.html_qna[this.docError].key;
                    this.scrollToElementById(key + this.docError);
                    this.docError = '';
                } else if (this.emptyIndex !== '') {
                    document.getElementById('faq3').classList.add('show');
                    const key = this.form_data.html_qna[this.emptyIndex].key;
                    this.scrollToElementById(key + this.emptyIndex);
                    this.emptyIndex = '';
                } else if (this.emptyIndexMember !== '') {
                    document.getElementById('faq4').classList.add('show');
                    const memberId = 'member' + (this.emptyIndexMember + 1);
                    this.scrollToElementById(memberId);
                    this.emptyIndexMember = '';
                }


            },
            submit_traveller_form2(){
                try{
                    this.kycLoadervisibility(true);
                    let form = new FormData();
                    var emailv=0;
                    var flag=0;
                    if(this.form_data.member_data!=null) {
                        this.form_data.member_data.forEach((members) => {

                            members.relation ='Nominated';
                            if (members.home_town == '' || members.email == '' || members.relation == '' ||  members.name == '' || members.phone == '' ) {

                                flag++;
                            }
                            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                            if(!members.associate_to_parent)
                                if(! re.test(members.email)){
                                    emailv++;
                                }
                        })
                    }

                    if(flag>0){

                    this.kycLoadervisibility(false);

                        this.errors.push('Please Fill Members Details Properly');
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Oops! You may have missed filling a few fields. Please check again',
                        showConfirmButton: true,

                    }).then((result)=>{
                        if(result.value){

                        }
                    })
                        this.loading=false;
                    console.log(this.loading2);
                        if (!_.isEmpty(this.errors)) {
                        // this.errormodal = true
                        }

                        return false;

                    }
                    else if(emailv>0){
                        this.loading2=false;
                        this.kycLoadervisibility(false);

                        this.errors.push('Please Enter Valid Mail');
                        if (!_.isEmpty(this.errors)) {
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please Enter Valid E-Mail Address',
                            showConfirmButton: true,
                            timer: 3500
                        })
                        }

                        return false;
                    }
                    if(this.form_data.member_data==='' || _.isEmpty(this.form_data.member_data)
                    ){
                        form.set("form_record_members",'' );
                    }
                    else if(this.form_data.member_data[0].name==''){
                        form.set("form_record_members",'' );
                    }
                    else{
                        form.set("form_record_members",JSON.stringify(this.form_data.member_data) );
                    }

                    form.set("group_id",this.form_data.group_id );
                    form.set("booking_id",this.form_data.booking_id );
                    form.set("form_record_id",this.form_data.id );
                    form.set("form_id",this.form_data.form_id );
                    form.set("status",this.form_data.status );
                    form.set("traveller_id",this.$route.params.id );
                    form.set("long_id",this.form_data.long_id );
                    form.set("name",this.form_data.name );
                    form.set("populatedId",this.populate_data.status?this.populate_data.pupulatedId:'');

                    axios.post('/api/v1/traveller_form_by_agent', form)

                        .then(response => {

                             if(response.data.msg.includes('contact your handler')){
                                document.getElementById('members-acco').style.border='1px solid red';
                                this.kycLoadervisibility(false)
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: response.data.msg,
                                    showConfirmButton: true,
                                    timer: 5000
                                })

                                return false;
                            }


                            this.form_data.status=1;
                            // this.form_data.get_booking.activated=2;
                            this.form_show_model=false
                            if(this.form_data.status!=4){
                                axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/0')
                            }
                            this.show_form_button=true;
                            this.fetchData(this.$route.params.id)
                            this.form_index=''
                            let params1 = new FormData();
                            params1.set('id', this.$route.params.id);
                            axios.post('/api/webservices/get_traveller_form', params1)
                                .then(response => {
                                    this.loading2=false;
                                    // this.form_data=_.cloneDeep(response.data)
                                    this.trav_name={'first':'','last':''};
                                    this.member_form_data=_.cloneDeep(response.data)
                                    this.$eventHub.$emit('update-success');
                                })
                        })


                }
                catch(error){
                    this.kycLoadervisibility(false)
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
            submit_traveller_form_kyc(){
                this.kycLoadervisibility(true);
                this.errors=[];
                let flag=0;
                let counter=0;
                let pay_method='';

                this.form_data.html_qna.forEach((ques)=>{
                    if(ques.type=='doc' && ques.file==""){
                        document.getElementById(ques.doc+counter).style.border='1px solid red';
                        this.errors.push(ques.doc+' file not uploaded!');
                        flag++;
                    }

                    counter++;
                })

                if(flag>0){
                    if (!_.isEmpty(this.errors)) {
                        this.errormodal = true
                    }
                    return false;

                }
                else{
                    this.form_data.status = 1;
                    let form = new FormData();
                    form.set("form_record_html",JSON.stringify(this.form_data.html_qna) );
                    form.set("form_record_members",'' );
                    form.set("group_id",this.form_data.group_id );
                    form.set("booking_id",this.form_data.booking_id );
                    form.set("form_record_id",this.form_data.id );
                    form.set("form_id",this.form_data.form_id );
                    form.set("status",this.form_data.status );
                    form.set("traveller_id",this.$route.params.id );
                    form.set("long_id",this.form_data.long_id );
                    form.set("name",this.form_data.name );
                    form.set("form_status",this.form_data.form_status);
                    // form.set("package_costing",JSON.stringify(this.form_data[this.form_index].member_name));
                    form.set("kyc",'true');
                    axios.post('/api/v1/traveller_form', form)

                        .then(response => {
                            // console.log(response);

                            this.form_data.html_qna=_.cloneDeep(JSON.stringify(this.form_data.html_qna))
                            this.form_data.member_data=_.cloneDeep(JSON.stringify(this.form_data.member_data))
                            this.form_data.status=1;


                            this.show_form_button=true;
                            this.fetchData(this.$route.params.id)
                            this.form_index=''
                            let params1 = new FormData();
                            params1.set('id', this.$route.params.id);
                            axios.post('/api/webservices/get_traveller_form', params1)
                                .then(response => {
                                    this.member_form_data=_.cloneDeep(response.data)
                                    this.form_show_model=false;
                                    this.payment_method='close';
                                    this.$eventHub.$emit('update-success')
                                    this.kycLoadervisibility(false);
                                })

                        })





                }


            },


            show_form: async function (form,hubs){
                this.hub_data_list = hubs;
                // form_filler
                this.form_data=_.cloneDeep(form);



                if(this.hub_data_list.get_meta!=undefined){

                    this.hub_data_list.get_meta.forEach((data)=>{
                        if(data.meta_key=='sheet_type'){
                            this.sheetType=data.meta_value;
                        }
                    })


                }



                if(form.populated_data.length>0){

                    this.populate_data=_.cloneDeep(JSON.parse(this.form_data.populated_data[0].meta_value))
                    this.populate_data.pupulatedId='';
                    this.populate_data.filtered_data=[];
                    this.populate_data.added=false;

                    if(form.populated_id!=undefined){

                        if(form.populated_id.length>0){
                            this.populate_data.pupulatedId=form.populated_id[0].meta_value;
                        }

                    }
                    if(form.nominated_populated_id!=undefined){

                        if(form.nominated_populated_id.length>0){

                            this.populate_data.pupulatedId=form.nominated_populated_id[0].meta_value;

                        }


                    }

                    if(this.populate_data.pupulatedId!=''){

                        this.populate_data.data[0].data.forEach((memberData)=>{
                            if(memberData.primary_key==this.populate_data.pupulatedId){
                                this.populate_data.filtered_data.push(memberData)
                                this.populate_data.added=true;
                            }
                        })

                    }

                }

                let gname=this.form_data.get_group!=undefined?this.form_data.get_group.group_name:'';


                if(this.populate_data.added==false){

                    if(this.populate_data.status && form.status==0 && this.populate_data.pupulatedId=='' ){

                        const responseFromcallbackFunc = await this.validate_populated_data(this.populate_data.data[0].question);

                }
                }

                if(this.form_data.relation==null){
                    if(this.sheetType==2){
                        this.show_form1(form,hubs);
                    }
                    else{
                if(this.form_data.status==0){
                    this.$swal({
                            title: gname!=''?'Are you travelling for ['+gname+'] ?':'Will I be travelling with the group ?',
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
                                this.form_filler='agent';
                                this.show_form1(form,this.hub_data_list);
                            }
                            else if(result.dismiss=='cancel'){
                                // console.log(result);
                                this.form_filler='trav';
                                this.show_form1(form,this.hub_data_list);
                            }




                        })

                }
                }

                }
                else{
                    this.show_form1(form,hubs);
                }


            },

            show_form1: async function (form,hubs){
            	this.hub_data_list = hubs;
                this.form_data=_.cloneDeep(form);

                if(form.populated_data.length>0 && this.populate_data.added==false){

                    this.populate_data=_.cloneDeep(JSON.parse(form.populated_data[0].meta_value))
                    this.populate_data.pupulatedId='';
                    this.populate_data.filtered_data=[];
                    this.populate_data.added=false;


                    if(form.populated_id!=undefined){

                        if(form.populated_id.length>0){
                            this.populate_data.pupulatedId=form.populated_id[0].meta_value;
                        }

                    }
                    if(form.nominated_populated_id!=undefined){

                        if(form.nominated_populated_id.length>0){

                            this.populate_data.pupulatedId=form.nominated_populated_id[0].meta_value;

                        }


                    }



                    if(this.populate_data.pupulatedId!=''){

                        this.populate_data.data[0].data.forEach((memberData)=>{
                            if(memberData.primary_key==this.populate_data.pupulatedId){
                                this.populate_data.filtered_data.push(memberData)
                                this.populate_data.added=true;
                            }
                        })

                            }

                    }

                if(this.populate_data.status && form.status==0 && this.populate_data.added==false){

                    const responseFromcallbackFunc = await this.validate_populated_data(this.populate_data.data[0].question);

                }



                let arryHub = [];
                if(this.hub_data_list.travel_hubs[0] !== undefined){
                     arryHub = JSON.parse(this.hub_data_list.travel_hubs[0].meta_value);
                }

                let allocated_mem='';


                    if(this.form_data && this.form_data.kyc_data=='true'){

                        // console.log(this.form_data[index]);
                        let form=new FormData();
                        form.set("id", this.form_data.booking_id)

                        axios.post('/api/v1/get_tour_cost' , form)
                            .then(response => {
                                this.loading2=false;
                                if(response.data.status){
                                    this.agent_email=response.data.agent_mail;
                                    this.mf_key=response.data.mf_key;
                                    this.total_cost=response.data.cost;
                                    this.final_tour_cost=response.data.cost;
                                    this.final_cost_arr=[];
                                    this.final_cost_arr.push({'type':'main_cost','title':'Total Package Cost ','cost':response.data.cost},{'type':'gst','title':'GST','value':'5','cost':(response.data.cost*5)/100});
                                    this.tour_type=response.data.tour_type;
                                    if(typeof this.form_data.html_qna=='string'){
                                        this.form_data.html_qna=_.cloneDeep(JSON.parse(this.form_data.html_qna))
                                        this.form_data.member_name=_.cloneDeep(JSON.parse(this.form_data.member_name))
                                    }
                                    // this.form_index=index
                                    this.form_data.html_qna.forEach((ques)=>{
                                        if(ques.key=='payment'){
                                            this.payment_method=ques.value;
                                        }

                                    })
                                    if(this.payment_method==''){
                                        this.payment_method='open';
                                    }
                                    if(this.payment_method=='close'){
                                        this.payment_method='open';
                                    }
                                    // console.log(this.payment_method);
                                    if(this.form_data.form_status==1){
                                        this.form_data.form_status=true;
                                        this.fetch_pay_details();
                                    }
                                    else{
                                        this.form_data.form_status=false;
                                    }
                                    if(this.form_data.cost_check!=null){
                                        if(this.form_data.cost_check.meta_value=="true"){
                                            this.kyc_cost=true;
                                        }
                                    }
                                    else{
                                        this.kyc_cost=false;
                                    }


                                }

                            })
                            .catch(error => {
                                this.loading2=false;
                                alert(error);

                            })




                    }
                    else{
                        let data=JSON.parse(this.form_data.html_qna);


                        axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/fetch')
                            .then(response => {
                                if(this.form_filler=='agent'){
                                    response.data.form_status=0;
                                }
                                if(response.data.form_status==1){

                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'There was an error while submitting the form / The form currently being updated by the operator. Please try again after 5 min or contact your handler',
                                        showCloseButton:true,
                                        showConfirmButton: true,
                                        timer: 3500
                                    })

                                    return false;
                                }
                                if(this.form_data.status==0){
                                    allocated_mem=this.form_data.member_data;
                                    // this.form_data.member_data='';
                                }

                                if(this.form_data.member_data=='' || this.form_data.member_data==null ){


                                    var arry=[];
                                    // alert(this.form_filler);
                                    var allow_mem=_.cloneDeep(this.form_data.member_allowed);
                                    // alert(allow_mem);
                                    if(this.form_filler==='trav' && allow_mem>0){

                                        if(this.form_data.member_allowed>0){
                                            allow_mem--;
                                        }
                                    }

                                    // alert(allow_mem);
                                    if(this.form_filler=='agent'  && allow_mem>0){
                                        for(var i=0; i<allow_mem;i++){

                                        arry.push({'name':'','phone':'','email':'','visa_hub':'','airport_hub':'','paid':true ,'relation':'Nominated','associate_to_parent':false,'approval_status':0,'rejection_status':false,'approval_msg':'','cat':{'type':'iti','label':'None of above'},'relation_cat':{'label':''}})
                                        }
                                    }
                                    if(this.form_filler=='trav'  && allow_mem>0){
                                        for(var i=0; i<allow_mem;i++){

                                            arry.push({'gender':'','name':'','phone':'','email':'','dob':'','home_town':'','paid':true ,'approval_status':0,'rejection_status':false,'approval_msg':'','relation1':{'relation':'','relation_proof':''},'relation':'','associate_to_parent':false,'cat':{'type':'','label':''},'relation_cat':{'label':''}})
                                        }
                                    }

                                    this.form_data.member_data=_.cloneDeep(arry)
                                }
                                else{
                                    // alert('2');
                                    // console.log(this.form_data);
                                    this.form_data.member_data=_.cloneDeep(JSON.parse(this.form_data.member_data))
                                    console.log(this.form_data.member_data);

                                if(this.form_data.member_data.length>0){
                                    let mem_data=[];
                                    this.form_data.member_data.forEach((mem)=>{
                                        if(mem.approval_msg){
                                            mem.approval_msg=mem.approval_msg;
                                }
                                        else{
                                            mem.approval_msg='';
                                        }
                                        if(mem.approval_status){
                                            mem.approval_status=mem.approval_status;
                                        }
                                        else{
                                            mem.approval_status=0;
                                        }
                                        if(mem.rejection_status){
                                            mem.rejection_status=mem.rejection_status;
                                        }
                                        else{
                                            mem.rejection_status=false;
                                        }

                                        mem_data.push(mem);
                                    })
                                    this.form_data.member_data=_.cloneDeep(mem_data);
                                }

                            }




                                this.form_show_model=true

                                this.form_data.html_qna=_.cloneDeep(JSON.parse(this.form_data.html_qna))

                                this.form_data.member_name=_.cloneDeep(JSON.parse(this.form_data.member_name))

                            if(this.form_data.member_name.length>0){
                                let mem_name=[];
                                this.form_data.member_name.forEach((mem)=>{
                                    if(mem.approval_msg){
                                        mem.approval_msg=mem.approval_msg;
                                    }
                                    else{
                                        mem.approval_msg='';
                                    }

                                    if(mem.approval_status){
                                        mem.approval_status=mem.approval_status;
                                    }
                                    else{
                                        mem.approval_status=0;
                                    }

                                    if(mem.rejection_status){
                                        mem.rejection_status=mem.rejection_status;
                                    }
                                    else{
                                        mem.rejection_status=false;
                                    }

                                    mem_name.push(mem);
                                })
                                this.form_data.member_name=_.cloneDeep(mem_name);
                            }

                                // this.form_index=index
                                // console.log(this.form_data[index].form_status);
                                if(this.form_data.status!=4){
                                    axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/1');
                                }


                            })
                            .catch((error)=>{
                                this.showLoader(false);
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Some Error Occured, Please Contact Your Handler!',
                                    showConfirmButton: true,
                                    timer: 3000
                                })
                            })



                }










                },
            show_form2(index){
                // console.log(index);


                this.form_data[index].html_qna=_.cloneDeep(JSON.parse(this.form_data[index].html_qna))

                this.form_data[index].member_name=_.cloneDeep(JSON.parse(this.form_data[index].member_name))

                // this.form_index=index
                this.form_show_model=true;
            },
            mf_payment(id,member_form){

                this.form_data=_.cloneDeep(member_form);
                this.loading2=true;
                let form = new FormData();
                form.set('id',this.form_data.booking_id)
                axios.post('/api/webservices/FetchPaymentLink' , form)
                    .then(response => {
                        this.loading2=false;
                        // console.log(response.data.msg);
                        if(response.data.status){
                            window.open( response.data.msg, "_blank");
                        }
                        else{
                            alert(response.data.msg);
                        }


                    })
                    .catch(error => {
                        this.loading2=false;
                        alert('Error While fetching link. Please try again later');

                    })
            },
            payment_details(id,mem_form){

                this.form_data=_.cloneDeep(mem_form);
                this.loading2=true;

                let form = new FormData();
                form.set('id',id)
                axios.post('/api/v1/fetch_payment_details' , form)
                    .then(response => {
                        this.loading2=false;
                        if(response.data.status){
                            // console.log(response.data.data)
                            this.show_modal4=true;
                            this.invoice_data=response.data.data;
                            this.uastra_payment_button=response.data.uastra_status;
                            // this.form_index=index;
                        }
                        else{
                            alert(response.data.msg);
                        }


                    })
                    .catch(error => {
                        this.loading2=false;
                        // alert('Error While fetching link. Please try again later');

                    })
            },
            hide_form(){
                this.form_data.html_qna=_.cloneDeep(JSON.stringify(this.form_data.html_qna))
                this.form_data.member_data=_.cloneDeep(JSON.stringify(this.form_data.member_data))
                this.form_data.member_name=_.cloneDeep(JSON.stringify(this.form_data.member_name))
                if(this.form_data.status!=4){
                    axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/0')
                }
                this.form_index=''



            },
            updateName(e) {
                this.setName(e.target.value)
            },
            updateEmail(e) {
                this.setEmail(e.target.value)
            },
            updateDisplay_name(e) {
                this.setDisplay_name(e.target.value)
            },
            updatePhone(e) {
                this.setPhone(e.target.value)
            },
            updateAddress(e) {
                this.setAddress(e.target.value)
            },
            updateFcm_token(e) {
                this.setFcm_token(e.target.value)
            },
            updateDevice(e) {
                this.setDevice(e.target.value)
            },
            updateAuth_key(e) {
                this.setAuth_key(e.target.value)
            },
            updateOtp(e) {
                this.setOtp(e.target.value)
            },
            updatemeta_tags(e) {
                this.setmeta_tags(e)
            },
            updatemeta_company_name(e) {
                this.setmeta_company_name(e.target.value)
            },

            updatemeta_role(e) {
                this.setmeta_role(e.target.value)
            },
            updatemeta_interests(e) {
                this.setmeta_interests(e.target.value)
            },
            updatemeta_allergens(e) {
                this.setmeta_allergens(e.target.value)
            },
            updatemeta_food_prefrence(e) {
                this.setmeta_food_prefrence(e.target.value)
            },
            updatemeta_dob(e) {
                this.setmeta_dob(e.target.value)
            },
            updatemeta_anniversary(e) {
                this.setmeta_anniversary(e.target.value)
            },


            updatemeta_gender(e) {
                this.setmeta_gender(e.target.value)
            },
            updatemeta_family_size(e) {
                this.setmeta_family_size(e.target.value)
            },
            updatemeta_occupation(e) {
                this.setmeta_occupation(e.target.value)
            },
            updatemeta_income_range(e) {
                this.setmeta_income_range(e.target.value)
            },
            updatemeta_marital_status(e) {
                this.setmeta_marital_status(e.target.value)
            },
            updatemeta_remark(e) {
                this.setmeta_remark(e.target.value)
            },
            updatemeta_type_tourist(e) {
                this.setmeta_type_tourist(e.target.value)
            },
            updatemeta_lifestyle(e) {
                this.setmeta_lifestyle(e.target.value)
            },
            updatemeta_room_pref(e) {
                this.setmeta_room_pref(e.target.value)
            },
            updatemeta_seating_pref(e) {
                this.setmeta_seating_pref(e.target.value)
            },
            updatemeta_reward(e) {
                this.setmeta_reward(e.target.value)
            },
            updatemeta_food_habits(e) {
                this.setmeta_food_habits(e.target.value)
            },




            submitForm() {
                this.updateData()
                    .then(() => {

                        if(this.role!=='subscriber'){
                            this.$router.push({ name: 'travellers.index' })
                        }


                        this.$eventHub.$emit('update-success')
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            },
            submitForm2() {

                if(this.role!=='subscriber'){
                    this.$router.push({ name: 'travellers.index' })
                }



            },

            add_custom_field(){
                // alert(this.new_tag_name.length);
                var count=0;
                if(this.new_tag_name.length>0){

                    for(var d=0;d<this.custom_tags_arr.length;d++){
                        if(this.new_tag_name.toLowerCase()===this.custom_tags_arr[d].toLowerCase()){
                            count=1;
                        }
                    }
                    if(count===0){
                        this.tags_arr_delete.push({
                            tag : this.new_tag_name,
                            type : 'custom',
                            loc : this.custom_tags_arr.length
                        });
                        this.custom_tags_arr.push(this.new_tag_name);
                        this.show_modal=false;
                        this.new_tag_name='';
                    }
                    else{

                        alert(this.new_tag_name+" tag already exist.");
                        this.new_tag_name='';
                    }

                }
                else if(this.new_tag_name.length===0){
                    alert('Enter Tag Name');
                }
                this.meta.meta_tags=[];
                this.meta.meta_tags=JSON.stringify(this.custom_tags_arr);
            },
            delete_tag_fun(tag,type,loc){

                // alert(tag+"---"+type+"---"+loc);
                this.tags_arr_delete=[];
                var data_arr=[];
                for(var e=0;e<this.custom_tags_arr.length;e++){
                    if(this.custom_tags_arr[e]!==tag){
                        this.tags_arr_delete.push({
                            tag : this.custom_tags_arr[e],
                            type : 'custom',
                            loc : e
                        });
                        data_arr.push(this.custom_tags_arr[e]);
                    }
                }
                this.custom_tags_arr=[];
                this.custom_tags_arr=data_arr;


                this.meta.meta_tags=JSON.stringify(this.custom_tags_arr);

            },
            inmodal(value){
                this.type_of_tourist=[];
                var data_arr=[];
                for (var f=0;f<value.length;f++){
                    // console.log(value[f]['type'])
                    data_arr.push({
                        'tag':value[f]['type']
                    });
                }
                this.meta.meta_type_tourist=JSON.stringify(data_arr);
            },
            inmodal2(value){
                this.inc_range=[];
                if(value=='' || value==null){
                    this.meta.meta_income_range="";



                }
                else{
                    var type=Object.entries(value);
                    this.meta.meta_income_range=type[0][1];

                }

            },
            inmodal3(value){
                if(value=='' || value==null){
                    this.meta.meta_occupation="";
                }
                else{
                    var type=Object.entries(value);
                    this.meta.meta_occupation=type[0][1];

                }

            },

            enable(){
                this.enable_div=true;
                var element =document.getElementById("Section1");
                element.classList.remove("no-use");
                var element2 =document.getElementById("Section2");
                element2.classList.remove("no-use");
            },
            update_address(){


                if(this.new_city.length>0 && this.new_address.length>0 && this.new_country!=""){
                    var type=Object.entries(this.new_country);
                    this.item.address=[{
                        address:this.new_address,
                        city:this.new_city,
                        country:type[0][1]
                    }];
                    this.show_modal2=false;
                }
                else{
                    alert('Please Fill All Fields');
                }
            },
              show_passport(index){

                this.documents=[];
                this.documents.push(this.meta.documents[index])
                this.show_modal3=true;
                // show_pass


            },
            open_passport(link,index){
                var base_url = window.location.origin;
                // console.log(base_url);
                // console.log(link);
                if(index==1){
                    window.open(link, "_blank");
                }
                else{
                    window.open(base_url+link, "_blank");
                }

            },
            check_form_status(){

                if(this.form_data.status!=4 &&  this.form_show_model){




                    axios.get('/api/webservices/change_form_status/' + this.form_data.id+'/fetch')
                        .then(response => {
                            if(response.data.form_status==0){
                                this.form_show_model=false

                                // this.form_data[this.form_index].html_qna=_.cloneDeep(JSON.stringify(this.form_data[this.form_index].html_qna))
                                // this.form_data[this.form_index].member_data=_.cloneDeep(JSON.stringify(this.form_data[this.form_index].member_data))
                                // this.form_data[this.form_index].member_name=_.cloneDeep(JSON.stringify(this.form_data[this.form_index].member_name))




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
                                    form.set("form_record_members",JSON.stringify(this.form_data.member_data) );
                                }

                                form.set("group_id",this.form_data.group_id );
                                form.set("booking_id",this.form_data.booking_id );
                                form.set("form_record_id",this.form_data.id );
                                form.set("form_id",this.form_data.form_id );
                                form.set("status",this.form_data.status );
                                form.set("traveller_id",this.$route.params.id );
                                form.set("long_id",this.form_data.long_id );
                                form.set("name",this.form_data.name );
                                form.set("member_name",JSON.stringify(this.form_data.member_name));
                                form.set("form_step",JSON.stringify(this.form_data.form_step));


                                // alert(this.form_data[this.form_index].long_id.search("FEM"));


                                axios.post('/api/v1/traveller_form_member_partial', form)

                                    .then(response => {
                                        console.log(response);

                                        let params1 = new FormData();
                                        params1.set('id', this.$route.params.id);
                                        axios.post('/api/webservices/get_traveller_form', params1)
                                            .then(response => {
                                                // this.form_data=_.cloneDeep(response.data)
                                                this.member_form_data=_.cloneDeep(response.data)
                                                // this.$eventHub.$emit('update-success');
                                                this.form_index='';
                                                alert('Session Expired.Please Try Again');
                                                this.loading2=false;
                                            })
                                    })



                            }




                        })
                }

            },
            validate_populated_data(ques){


                return new Promise((resolve, reject) => {
                    // Simulating an asynchronous operation
                    setTimeout(() => {
                this.$swal({
                    title:ques,
                    input: 'text',
                    icon: 'question',
                    type: 'question',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Submit',
                    required: 'true',
                    showLoaderOnConfirm: true,
                    preConfirm: (showform) => {
                        if(showform==''){
                            this.$swal.showValidationMessage('Please fill out this field');
                        }
                        else{

                            let flag=false;
                            this.populate_data.data[0].data.forEach((memberData)=>{

                                        if(memberData.primary_key==showform){
                                    this.populate_data.filtered_data.push(memberData)
                                    this.populate_data.pupulatedId=showform;
                                    flag=true;
                                }
                            })
                                    this.populate_data.added=true;

                            if(!flag){
                                this.$swal.showValidationMessage('Enter Valid Id '+this.populate_data.data[0].data[0].primary_heading);
                            }
                        }

                    },
                    allowOutsideClick: () => !this.$swal.isLoading()
                }).
                then((result) => {
                    if (result.value) {

                                resolve("success");
                        
                                            }

                                        })

                    }, 1000); // Wait for 2 seconds
                                });


            }


        },
        components: {
            KycFormComponent,
            VueTelInput, FormWizard,TabContent, WizardButton, WizardStep,FormsAccordion,FormComponent,Documents}
    }
</script>

<style scoped>
    .MainSec{
        margin-left:7rem;
    }
    @media (max-width:760px){
        .MainSec{
            margin-left:2rem;
        }

    }
    .floatweb{
        position:fixed;
        /*width:60px;*/
        height:60px;
        bottom:40px;
        left:25%;

        color:#FFF;
        /*border-radius:50px;*/
        text-align:center;
        box-shadow: 2px 2px 3px #999;
        font-size: 15px;
    }
    .float2web{
        font-size: 15px;
        position:fixed;
        /*width:60px;*/
        height:60px;
        bottom:40px;
        right:25%;

        color:#FFF;
        /*border-radius:50px;*/
        text-align:center;
        box-shadow: 2px 2px 3px #999;
    }
    .floatmob{
        position:fixed;
        /*width:60px;*/
        height:60px;
        bottom:10px;
        left:25px;

        color:#FFF;
        /*border-radius:50px;*/
        text-align:center;
        box-shadow: 2px 2px 3px #999;
        font-size: 15px;
    }
    .float2mob{
        font-size: 15px;
        position:fixed;
        /*width:60px;*/
        height:60px;
        bottom:10px;
        right:25px;

        color:#FFF;
        /*border-radius:50px;*/
        text-align:center;
        box-shadow: 2px 2px 3px #999;
    }

    .my-float{
        margin-top:22px;
    }
    .related_mem{
        background: #e4e4e4;
        padding: 5px 7px 5px 10px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-align: center;
        margin-top: 5px;
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
    .box, .box-footer {
        background: transparent !important;
    }
    .trav_image{
        width: 75px;height: 75px;border-radius: 46px;margin-top: 10px
    }
    .details{
        margin-top: -10px;
        font-size: 15px;
    }

    .tab .nav-tabs{
        border:none;

    }
    .nav-tabs li a{
        padding: 3px 50px;

        font-size: 15px;
        border-right: 0px none;
        background: #fff !important;
        color: black !important;
        text-align: center;
        border-radius: 0px;
        margin-right: 0px;

        transition: all 0.3s ease-in 0s;
    }
    .nav-tabs li a:hover{

        border-right: 0px none;
        background: #1E51A4;
        color: #fff;
    }
    .nav-tabs li a i{
        display: inline-block;
        text-align: center;

    }
    .nav-tabs li:last-child{

    }
    .nav-tabs li.active a,
    .nav-tabs li.active a:focus{

        margin-top: 0;
        color: #fff !important;
        /*padding: 20px 40px;*/
        background: #333 !important;
        border-radius: 1rem;
        /*font-size: 22px !important;*/
    }

    .nav-tabs li.active a:hover{

        margin-top: 0;
        color: #fff !important;
        /*padding: 20px 40px;*/
        background: #333 !important;
        /*font-size: 22px !important;*/
    }
    .tab .tab-content{
        line-height: 22px;
        box-shadow:0px 1px 0px transparent;
    }
    .tab .tab-content h3{
        margin-top: 0;
    }
    @media only screen and (max-width: 767px){
        .nav-tabs li{
            /*width:100%;*/
            margin-bottom: 10px;
        }
        .nav-tabs li a{

        }
        .nav-tabs li.active a,
        .nav-tabs li.active a:focus,
        .nav-tabs li.active a:hover{

            margin-top: 0;
        }
    }
    .border_bottom{
        border-bottom: 1px dotted black;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .button-css{
        position: unset !important;
    }
    .tab-content, .tabs{
        border-bottom: none !important;
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
    .accordion .card-header2:after {
        font-family: 'FontAwesome';

        content: "\f054" !important;
        float: right;
    }
    .accordion .card-header2.collapsed:after {
        /* symbol for "collapsed" panels */
        content: "\f078" !important;
    }
    input[type=text],input[type=date]{
        height: 50px !important;
    }
    .form_pop  input[type=text]{
        height: 30px !important;
    }
    .form_pop   input[type=date]{
        height: 30px !important;
    }

    .no-use{
        /*pointer-events: none;*/
        /*opacity: 0.7;*/
    }
    .review{
        font-size: 18px !important;
        color: gray !important;
    }
    .sidebar-mini.sidebar-collapse .content-wrapper, .sidebar-mini.sidebar-collapse .right-side, .sidebar-mini.sidebar-collapse .main-footer{
        margin-left: 25px !important;
    }
    .backGround{
        /*background-image:url('/dashboard_resources/bgImg2.png');*/
        background-color: #cfe1ff;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    @media screen and (min-width: 1200px) and (max-width: 1600px){
        label{
            font-size: 16px !important;
            color: black;
        }


        .nav-tabs li a{

            font-size: 20px !important;
        }
        .nav-tabs li.active a,
        .nav-tabs li.active a:focus,
        .nav-tabs li.active a:hover{

            font-size: 20px !important;
        }


    }





    @media screen and (min-width: 1900px){
        label{
            font-size: 20px !important;
            color: black;
        }

        .nav-tabs li a{

            font-size: 15px !important;
        }
        .nav-tabs li.active a,
        .nav-tabs li.active a:focus,
        .nav-tabs li.active a:hover{

            font-size: 22px !important;
        }
    }
    input[type="file"] {
        display: block !important;
        border: none;
    }
    .header_footer{

        padding:10px 0px 10px 0px;
        color:black;

    }
    .input_field_design2{
        border:1px solid #00000038;
    }

</style>
<style scoped>
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

    .fields{
        border: none;
        /*border-bottom-color: currentcolor;*/
        /*border-bottom-style: none;*/
        /*border-bottom-width: medium;*/
        /*border-bottom: 1px solid #00000038;*/


        background: #ecf0f5 ;
        border-radius: 5px;
        /*margin-bottom:5px;*/
    }
    textarea{
        width: 100%;
        font-size: 16px;
        background: rgb(236, 240, 245) none repeat scroll 0% 0%;
        border: none;
        color: black;
        padding: 15px;
        font-size: 18px;
    }

</style>
<style scoped>
    .form-width{
        max-width: 65% !important;
    }

    @media screen and (max-width:500px){
        .form-width{
            max-width: 100% !important;
        }
    }

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
    .f-22{
        font-size: 22px !important;
    }
    .swal2-popup .swal2-styled.swal2-confirm {

        font-size: 12px !important;
    }
    .swal2-close {
        color: gray !important;
        font-weight: bold !important;
        font-size: 30px !important;
    }



    .body-wrap_cost {

        width: 100%;
    }
    .Paragrapg{
        padding: 1rem;
        background-color: #fff;
        margin-top: 2rem;
        border: 1px solid rgb(220, 220, 220);
    }
    .fileUpl{
        margin-top: 1rem;
        background: rgb(243 244 245);
        width: 100%;
        margin-bottom: 1.5rem;
        height: 37px !important;
        text-align: left !important;
        padding-left: 1rem;
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
<style>
    .vue-form-wizard.md .wizard-card-footer.clearfix {
        top: 90%;
        position: unset;
    }
    .vue-form-wizard .wizard-card-footer .wizard-footer-right {
        position: unset !important;

    }
    .vue-form-wizard .wizard-card-footer .wizard-footer-left {
        position: unset !important;

    }
    /*.vue-form-wizard.md .fa {*/
    /*    font-size: 18px !important;*/
    /*}*/

</style>
<style>


    .invoice {
        padding: 30px;
    }

    .invoice h2 {
        margin-top: 0px;
        line-height: 0.8em;
    }

    .invoice .small {
        font-weight: 300;
    }

    .invoice hr {
        margin-top: 10px;
        border-color: #ddd;
    }

    .invoice .table tr.line {
        border-bottom: 1px solid #ccc;
    }

    .invoice .table td {
        border: none;
    }

    .invoice .identity {
        margin-top: 10px;
        font-size: 1.1em;
        font-weight: 300;
    }

    .invoice .identity strong {
        font-weight: 600;
    }


  .grid {
        position: relative;
        width: 100%;
        background: #fff;
        color: #666666;
        border-radius: 2px;
        margin-bottom: 25px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }

    .float-btn{
        position: fixed;
        top: 50%;

        font-size: 17px !important;
        color: #fff !important;
        background: rgb(23, 80, 125);
        padding: 10px;
        border-radius: 14px;
        cursor: pointer;
    }
    .vue-form-wizard {

        width: 100% !important;

    }
    .list-style{
        padding:0.5rem;
        background: #fff;

    }
    @media screen and (max-width:650px){
        .nav-tabs li a{
            padding: 3px 16px !important;
        }
        .form-Size{
            height:88vh !important;
        }
    }
    /*loader.......*/
    .Load{
        background-color: #212121db;
        height:100vh;
        margin: 0;
        padding: 0;
        position: absolute;
        width:100%;
        z-index:999;

    }
    .kyc_secMain{
        padding:0 !important;
    }
    .form-Size{
        height:95vh;overflow-x: hidden;overflow-y: scroll;    background-color: rgb(245 243 243);
    }

</style>
