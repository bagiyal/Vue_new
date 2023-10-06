<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Users</h1>
        </section>

        <section class="content">
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
                                    <label for="name">Name *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            placeholder="Enter Name *"
                                            :value="item.name"
                                            @input="updateName"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="email">Email *</label>
                                    <input
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            placeholder="Enter Email *"
                                            :value="item.email"
                                            @input="updateEmail"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="password">Password *</label>
                                    <input
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            placeholder="Enter Password *"
                                            @input="updatePassword"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="role">Role *</label>
                                    <v-select
                                            name="role"
                                            label="title"
                                            @input="updateRole"
                                            :value="item.role"
                                            :options="rolesAll"
                                            multiple
                                    />
                                </div>
                                <div class="form-group" v-if="this.item.docs">
                                    <label for="account_manager">Documents Received </label>
                                 <div v-for="(doc,index) in item.docs"> <a :href="doc">Document : {{index}}</a></div>
                                </div>

                                <div class="form-group">
                                    <div class="checkbox" >
                                        <label>
                                            <input
                                                    type="checkbox"
                                                    name="approved"
                                                    id="approved_agency"
                                                    :value="item.approved"
                                                    :checked="item.approved == true"
                                                    @change="updateApproved"
                                            >
                                            Approved
                                        </label>
                                        <label v-if="meta.approve_agents" v-for="(mem,index) in approve_mem" class="ml-5">
                                            <input
                                                type="checkbox"
                                                 name="approved"
                                                 :checked="mem.approved == true"
                                                 :id="mem.id"
                                            >
                                             Approve {{mem.name}}
                                        </label>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label for="account_manager">Account manager</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="account_manager"
                                            placeholder="Enter Account manager"
                                            :value="item.account_manager"
                                            @input="updateAccount_manager"
                                    >
                                </div>

                                <div class="form-group">
                                    <label for="banner_color">Banner color</label>
                                    <color-picker v-model="item.banner_color"></color-picker>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="banner_color"
                                            placeholder="Enter Banner color"
                                            :value="item.banner_color"
                                            @input="updateBanner_color"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>

                                    <vue-ckeditor
                                        :value="item.address"
                                        @input="updateAddress"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <v-select
                                            name="city"
                                            label="title"
                                            @input="updateCity"
                                            :value="item.city"
                                            :options="citiesAll"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="state">State</label>
                                    <v-select
                                            name="state"
                                            label="title"
                                            @input="updateState"
                                            :value="item.state"
                                            :options="statesAll"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="country">Country</label>
                                    <v-select
                                            name="country"
                                            label="title"
                                            @input="updateCountry"
                                            :value="item.country"
                                            :options="countriesAll"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="phone"-->
<!--                                            placeholder="Enter Phone"-->
<!--                                            :value="item.phone"-->
<!--                                            @input="updatePhone"-->
<!--                                    >-->
                                    <vue-tel-input v-model="item.phone" v-bind="bindProps" class="form-control pl-0 " name="phone" placeholder="Enter Phone"></vue-tel-input>
<!--                                    <vue-tel-input v-bind="bindProps" style="border: 1px solid #ced4da;" v-model="item.phone"   class="form-control pl-0" name="phone" placeholder="Enter Phone"></vue-tel-input>-->
                                </div>
                                <div class="form-group">
                                    <label for="postcode">Postcode</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="postcode"
                                            placeholder="Enter Postcode"
                                            :value="item.postcode"
                                            @input="updatePostcode"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="company">Company</label>
                                    <v-select
                                            name="addlocations"
                                            label="name"
                                            @input="updateCompany"
                                            :value="item.company"
                                            :options="agencyAll"

                                    />

                                </div>

                                <div class="form-group">
                                    <label for="logo">Logo</label>
                                    <input
                                            type="file"
                                            class="form-control"
                                            @change="updateLogo"
                                    >
                                    <ul v-if="item.logo" class="list-unstyled">
                                        <li>
                                            {{ item.logo.name || item.logo.file_name }}
                                            <button class="btn btn-xs btn-danger"
                                                    type="button"
                                                    @click="removeLogo"
                                            >
                                                Remove file
                                            </button>
                                        </li>
                                    </ul>
                                </div>




                                <div class="form-group" v-if="isagency==='Administrator (can create other users)'">
                                    <label for="meta_main_formula">Lead Score Formula</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="postcode"
                                       v-model="meta.meta_main_formula.Lead"
                                    >
                                  <span style="float: right"> ($lf=Lead/Query Feel, $dd=Departure Date , $sl=Source, $vp=Value of Package, $pr=Place of Travel )
</span> <br>
                                    <label for="meta_main_formula">Query Score Formula</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="postcode"
                                        v-model="meta.meta_main_formula.Query"
                                    >

                                </div>


                                <div v-if="current_user==='Administrator (can create other users)'">
                                    <label for="subscription">License Management</label><br>

                                    <label>   Pay as you go</label>
                                    <label class="switch">
                                        <input type="checkbox" v-model="meta.meta_subscription">
                                        <span class="slider round"></span>
                                    </label>
                                    <label>   Subscription</label>


                                    <div v-if="meta.meta_subscription">
                                        <div class="row">
                                            <div  class="col-4" >
                                                Start Date : <date-picker

                                                v-model="meta.meta_licence.start_date"
                                                :config="$root.dpconfigDatetime"

                                            >
                                            </date-picker>
                                            </div>
                                            <div  class="col-4" >
                                                End Date : <date-picker

                                                v-model="meta.meta_licence.exp_date"
                                                :config="$root.dpconfigDatetime"

                                            >
                                            </date-picker>
                                            </div>
                                        </div>

                                    </div>

                                    <div v-else>
                                        <div class="row">
                                            <div  class="col-4" >
                                                <label>  Sending Quotes Charges? :</label> <input class="form-control"  type="text" v-model="meta.meta_licence.query"></div>
                                            <div  class="col-4" >  <label>  Single Activation Charges? :</label> <input class="form-control"  type="text" v-model="meta.meta_licence.itinerary"></div>
                                            <div  class="col-4" >   <label> Group Activation Charges? :</label> <input class="form-control"  type="text" v-model="meta.meta_licence.group"></div>
                                            <div  class="col-4" >  <label>  Broadcast To All Charges? :</label> <input class="form-control"  type="text" v-model="meta.meta_licence.broadcast_to_all"></div>
                                            <div  class="col-4" >  <label>  Broadcast To Live Charges? :</label> <input class="form-control"  type="text" v-model="meta.meta_licence.broadcast_to_live"></div>
                                            <div  class="col-4" >  <label>  Direct Notification Charges? :</label> <input  class="form-control" type="text" v-model="meta.meta_licence.direct"></div>
                                            <div  class="col-4" >  <label>  Exhibitor Charges? :</label> <input class="form-control"  type="text" v-model="meta.meta_licence.exhibitor"></div>
                                            <div  class="col-4" >  <label>  Nomination Charges? :</label> <input class="form-control"  type="text" v-model="meta.meta_licence.nomination"></div>
                                        </div>
                                    </div>
<br>
                                    <div class="form-group" v-if="!meta.meta_subscription">
                                        <label for="mycred_default_total">Credit Points</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="mycred_default_total"
                                            placeholder="Enter Credit Points"
                                            :value="item.mycred_default_total"
                                            @input="updateMycred_default_total"
                                        >
                                    </div>
                                    <br>
                                    <label>Subscription Pack</label>

                                    <div class="container">
<p v-if="Math.round(+new Date(meta.meta_licence.exp_date).getTime()/1000)<Math.round(+new Date().getTime()/1000) && meta.meta_licence.type!=='Point'">Plan Expired</p>
                                        <table  :style="Math.round(+new Date(meta.meta_licence.exp_date).getTime()/1000)<Math.round(+new Date().getTime()/1000)&& meta.meta_licence.type!=='Point'? 'pointer-events: none;background-color: #0000002b;opacity: 0.4;':''"  class="table table-bordered">
                                                                                        <thead>
                                                                                        <tr>
                                                                                            <th>Features
                                                                                            </th>
                                                                                            <th>Starter
                                                                                                <label class="switch2">
                                                                                                    <input type="checkbox" class="switch2-input" @click="monitor=true"  v-model="meta.meta_subscription_pack.starter">
                                                                                                    <span class="switch2-label" data-on="" data-off=""></span>
                                                                                                    <span class="switch2-handle"></span>

                                                                                                </label>
                                                                                            </th>
                                                                                            <th>Base
                                                                                                <label class="switch2">
                                                                                                    <input type="checkbox" class="switch2-input" @click="monitor=true"   v-model="meta.meta_subscription_pack.base">
                                                                                                    <span class="switch2-label" data-on="" data-off=""></span>
                                                                                                    <span class="switch2-handle"></span>

                                                                                                </label>
                                                                                            </th>
                                                                                            <th>Impact
                                                                                                <label class="switch2">
                                                                                                    <input type="checkbox" class="switch2-input" @click="monitor=true"   v-model="meta.meta_subscription_pack.impact">
                                                                                                    <span class="switch2-label" data-on="" data-off=""></span>
                                                                                                    <span class="switch2-handle"></span>

                                                                                                </label>
                                                                                            </th>
                                                                                            <th>Enterprise
                                                                                                <label class="switch2">
                                                                                                    <input type="checkbox" class="switch2-input" @click="monitor=true"   v-model="meta.meta_subscription_pack.enterprise">
                                                                                                    <span class="switch2-label" data-on="" data-off=""></span>
                                                                                                    <span class="switch2-handle"></span>

                                                                                                </label>
                                                                                            </th>
                                                                                        </tr>
                                                                                        </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    Full Edit Mode
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.full_edit_mode">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  v-model="true1">
                                                        <span class="switch2-label grayout " data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.full_edit_mode">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  v-model="true1">
                                                        <span class="switch2-label grayout " data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.full_edit_mode">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  v-model="true1">
                                                        <span class="switch2-label grayout " data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.full_edit_mode">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  v-model="true1">
                                                        <span class="switch2-label grayout " data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Lead management system
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.lead_mng_sys">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.lead_mng_sys">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.lead_mng_sys">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.lead_mng_sys">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Customer Information Repository
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.cust_info_repo">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.cust_info_repo">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.cust_info_repo">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.cust_info_repo">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Tech Augmented Follow Up (Lead probability score)
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.tech_aug">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.tech_aug">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.tech_aug">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.tech_aug">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Data Analysis Tools: Executive wise TAT, Sales, Leads, Confirmations, Feedback
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.data_analysis">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.data_analysis">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.data_analysis">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.data_analysis">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Task Reminders
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.task_rem">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.task_rem">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.task_rem">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.task_rem">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Quotation Generator
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.quotation_gen">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.quotation_gen">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.quotation_gen">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.quotation_gen">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Confirmation Letter Generator
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.confirm_letter">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.confirm_letter">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.confirm_letter">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.confirm_letter">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Booking Access
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.booking_accessL">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.booking_accessL">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.booking_accessL">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.booking_accessL">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Cost Sheet
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.cost_sheet">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.cost_sheet">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.cost_sheet">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.cost_sheet">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Whatsapp Integration
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.whatsapp_integ">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.whatsapp_integ">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.whatsapp_integ">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.whatsapp_integ">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Post booking Itinerary APP
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.post_booking_app">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.post_booking_app">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.post_booking_app">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.post_booking_app">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Multi-type Broadcast Notification
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.multi_broadcast">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.multi_broadcast">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.multi_broadcast">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.multi_broadcast">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    Partial APP Branding
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.partial_app_branding">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.partial_app_branding">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.partial_app_branding">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.partial_app_branding">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>



                                            <tr>
                                                <td>
                                                    Group/MICE module
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.group_module">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.group_module">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.group_module">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.group_module">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    Email masking
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.email_masking">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.email_masking">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.email_masking">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.email_masking">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    Generic SMS service*
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.sms_service">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.sms_service">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.sms_service">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.sms_service">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    MIS Reports
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.mis_report">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.mis_report">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.mis_report">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.mis_report">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    Personalised mails from your account (includes MX entry)
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.personalised_mail">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.personalised_mail">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.personalised_mail">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.personalised_mail">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    Full APP branding
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.full_app_branding">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.full_app_branding">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.full_app_branding">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.full_app_branding">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    Vendor management system
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.vendro_mng_sys">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.vendro_mng_sys">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.vendro_mng_sys">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.vendro_mng_sys">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    VISA Support
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.visa_support">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.visa_support">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.visa_support">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.visa_support">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    Activity upselling module
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.activity_upselling">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.activity_upselling">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.activity_upselling">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.activity_upselling">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    SMS Integration charges
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.sms_integration">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.sms_integration">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.sms_integration">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.sms_integration">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    Own quotation template
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.own_quot_temp">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.own_quot_temp">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.own_quot_temp">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.own_quot_temp">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>
                                                    Customer Retention Tool
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.starter">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.customer_retention_tool">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.base">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.customer_retention_tool">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input" disabled  >
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>

                                                    <label class="switch2" v-if="meta.meta_subscription_pack.impact">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.customer_retention_tool">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>
                                                <td>
                                                    <label class="switch2" v-if="meta.meta_subscription_pack.enterprise">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_features.customer_retention_tool">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>

                                                    <label class="switch2" v-else>
                                                        <input type="checkbox" class="switch2-input"  disabled  v-model="true1">
                                                        <span class="switch2-label grayout" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </td>

                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>


                                </div>


                                <div class="form-group">
                                    <label for="owners_email">Owners email</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="owners_email"
                                            placeholder="Enter Owners email"
                                            :value="item.owners_email"
                                            @input="updateOwners_email"
                                    >
                                </div>
                                <!--                                meta-->
                                <div class="form-group">
                                    <label for="meta_price_mode_user">Price Mode</label>

                                    <input
                                            type="text"
                                            class="form-control"
                                            name="meta_price_mode_user"
                                            placeholder="meta_price_mode_user"
                                            :value="meta.meta_price_mode_user"
                                            @input="updatemeta_price_mode_user"
                                    >

                                </div>

                                <div class="form-group">
                                    <label for="meta_registered_thru">Registered Thru</label>

                                    <input
                                            type="text"
                                            class="form-control"
                                            name="meta_registered_thru"
                                            placeholder="meta_registered_thru"
                                            :value="meta.meta_registered_thru"
                                            @input="updatemeta_registered_thru"
                                    >

                                </div>

                                <div  class="form-group">
                                    <label for="meta_registered_thru">Time Zone</label>

                                    <v-select

                                        label="name"
                                        :options="timezonedata"
                                        v-model="meta.time_zone"

                                    />

                                </div>
<!--                                <div class="form-group">-->
<!--                                    <label for="meta_score">Score Formula</label>-->

<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="meta_score"-->
<!--                                            placeholder="meta_score"-->
<!--                                            :value="meta.meta_score"-->
<!--                                            @input="updatemeta_score"-->
<!--                                    >-->

<!--                                </div>-->





                                <div class="form-group" v-if="isagency==='agency'">
                                    <ul class="nav nav-tabs" style="float: unset !important;">
                                        <li :class="[scoreset?'active':'']" ><a data-toggle="tab"  @click="scoreset=true,settingreview=false,mailformat=false,snippet=false,customdoc=false">Lead Score Setting</a></li>
                                        <li style="display: none" :class="[settingreview?'active':'']"><a  @click="scoreset=false,settingreview=true,mailformat=false,snippet=false,customdoc=false">Setting Revisions</a></li>
                                        <li :class="[mailformat?'active':'']"><a   @click="scoreset=false,settingreview=false,mailformat=true,snippet=false,customdoc=false">Mail/SMS Format</a></li>
                                        <li :class="[snippet?'active':'']"><a   @click="scoreset=false,settingreview=false,mailformat=false,snippet=true,customdoc=false">Insert Snippet Code</a></li>
                                        <li :class="[customdoc?'active':'']"><a   @click="scoreset=false,settingreview=false,mailformat=false,snippet=false,customdoc=true">Custom Documents</a></li>
                                    </ul>


                                    <div class="tab-content">
                                        <div id="home" class="" v-show="scoreset">
                                            <h2>Days To Departure (Departure Date - Current Date)</h2>
                                            <p>You are using outdated formula, click on save button to update your current formula.</p>

                                            <table>
                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class="" type="text" disabled v-model="meta.meta_score.dd['0'].score"/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input  class="" type="text" v-model="meta.meta_score.dd['0'].start" />Days </td>

                                                    <td><b> To:</b></td>
                                                    <td><input  class="" type="text" v-model="meta.meta_score.dd['0'].end"/>Days</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class=""  type="text" value="5(max)" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input  class="" type="text" disabled v-model="meta.meta_score.dd['5'].start"/>Days </td>

                                                    <td><b> To:</b></td>
                                                    <td><input class=""  type="text" v-model="meta.meta_score.dd['5'].end" />Days</td>
                                                </tr>

                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class=""  type="text" value="4" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input class=""  type="text" disabled :value="meta.meta_score.dd['4'].start=1+parseInt(meta.meta_score.dd['5'].end)"/>Days </td>

                                                    <td><b> To:</b></td>
                                                    <td><input class=""  type="text" v-model="meta.meta_score.dd['4'].end"/>Days</td>
                                                </tr>

                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class=""  type="text" value="3" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input  class="" type="text" disabled :value="meta.meta_score.dd['3'].start=1+parseInt(meta.meta_score.dd['4'].end)"/>Days </td>

                                                    <td><b> To:</b></td>
                                                    <td><input  class="" type="text" v-model="meta.meta_score.dd['3'].end"/>Days</td>
                                                </tr>

                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input  class="" type="text" value="2" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input  class="" type="text" disabled :value="meta.meta_score.dd['2'].start=1+parseInt(meta.meta_score.dd['3'].end)"/>Days </td>

                                                    <td><b> To:</b></td>
                                                    <td><input  class="" type="text" v-model="meta.meta_score.dd['2'].end"/>Days</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class=""  type="text" value="1(min)" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input class=""  type="text" disabled :value="meta.meta_score.dd['1'].start=1+parseInt(meta.meta_score.dd['2'].end)"/>Days </td>

                                                    <td><b> To:</b></td>
                                                    <td><input class=""  type="text" disabled v-model="meta.meta_score.dd['1'].end"/>Days</td>
                                                </tr>
                                            </table>

                                            <p>(from 1 to 2 days the Score for days to departure will be calculated as Zero and also the over all score will be Zero)</p>

                                            <br>
                                            <br>

                                            <h2>  Source of Lead</h2>
                                            <div class="row">

                                                <div class="col-2"><b>Adwords:</b></div>
                                                <div class="col-10">  <input type="text" v-model="meta.meta_score.sl.Adwords"></div>
                                                <div class="col-2"><b>Social Media:</b></div>
                                                <div class="col-10">  <input type="text"  v-model="meta.meta_score.sl.SocialMedia"></div>
                                                <div class="col-2"><b>Offline Purchase:</b></div>
                                                <div class="col-10">  <input type="text" v-model="meta.meta_score.sl.OfflinePurchase" ></div>
                                                <div class="col-2"><b>Repeat:</b></div>
                                                <div class="col-10">  <input type="text"  v-model="meta.meta_score.sl.Repeat"></div>
                                                <div class="col-2"><b>Referred:</b></div>
                                                <div class="col-10">  <input type="text"  v-model="meta.meta_score.sl.Referred"></div>
                                                <div class="col-2"><b>Website:</b></div>
                                                <div class="col-10">  <input type="text"  v-model="meta.meta_score.sl.Website"></div>
                                                <div class="col-2"><b>Walk In:</b></div>
                                                <div class="col-10">  <input type="text" v-model="meta.meta_score.sl.WalkIn" ></div>
                                                <div class="col-2"><b>Phone Call:</b></div>
                                                <div class="col-10">  <input type="text" v-model="meta.meta_score.sl.PhoneCall" ></div>
                                                <div class="col-2"><b>Corporate:</b></div>
                                                <div class="col-10">  <input type="text" v-model="meta.meta_score.sl.Corporate" ></div>
                                                <div class="col-2"><b>Sales Team:</b></div>
                                                <div class="col-10">  <input type="text"  v-model="meta.meta_score.sl.SalesTeam"></div>
                                                <div class="col-2"><b>Others:</b></div>
                                                <div class="col-10">  <input type="text" v-model="meta.meta_score.sl.Others" ></div>
                                            </div>


                                            <br>

                                          <h2>Value of Package</h2>
                                            <table>
                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class="" type="text" value="1(min)" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input  class="" type="text"  disabled  v-model="meta.meta_score.vp['1'].start" /> </td>

                                                    <td><b> To:</b></td>
                                                    <td><input  class="" type="text" v-model="meta.meta_score.vp['1'].end"/></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class="" type="text" value="2" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input  class="" type="text" disabled :value="meta.meta_score.vp['2'].start=1+parseInt(meta.meta_score.vp['1'].end)"/> </td>

                                                    <td><b> To:</b></td>
                                                    <td><input  class="" type="text" v-model="meta.meta_score.vp['2'].end"/></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class="" type="text" value="3" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input  class="" type="text"  disabled  :value="meta.meta_score.vp['3'].start=1+parseInt(meta.meta_score.vp['2'].end)"/> </td>

                                                    <td><b> To:</b></td>
                                                    <td><input  class="" type="text" v-model="meta.meta_score.vp['3'].end"/></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class="" type="text" value="4" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input  class="" type="text"  disabled :value="meta.meta_score.vp['4'].start=1+parseInt(meta.meta_score.vp['3'].end)" /> </td>

                                                    <td><b> To:</b></td>
                                                    <td><input  class="" type="text" v-model="meta.meta_score.vp['4'].end"/></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Score:</b></td>
                                                    <td><input class="" type="text" value="5(max)" disabled/></td>

                                                    <td><b> From:</b></td>
                                                    <td><input  class="" type="text"  disabled  :value="meta.meta_score.vp['5'].start=1+parseInt(meta.meta_score.vp['4'].end)"/> </td>

                                                    <td><b> To:</b></td>
                                                    <td><input  class=""  disabled type="text" v-model="meta.meta_score.vp['5'].end"/></td>
                                                </tr>
                                            </table>



                                        </div>

                                        <div id="menu2" v-show="settingreview">
                                            <h3>settingreview</h3>
                                             </div>
                                        <div id="menu3" v-show="mailformat">
                                            <div class="form-group">
                                                <label for="meta_bio_metric_sms">Bio Metric Notification</label>

                                                <textarea
                                                    type="text"
                                                    class="form-control"
                                                    name="meta_bio_metric_sms"

                                                    :value="meta.meta_bio_metric_sms"
                                                    @input="updatemeta_bio_metric_sms"
                                                ></textarea>

                                            </div>

                                            <div class="form-group">
                                                <label for="meta_doc_not_rec_sms">Documents not received sms</label>

                                                <textarea
                                                    type="text"
                                                    class="form-control"
                                                    name="meta_doc_not_rec_sms"

                                                    :value="meta.meta_doc_not_rec_sms"
                                                    @input="updatemeta_doc_not_rec_sms"
                                                ></textarea>

                                            </div>
                                            <div class="form-group">
                                                <label for="meta_interview_sms">Visa Interview Notification</label>

                                                <textarea
                                                    type="text"
                                                    class="form-control"
                                                    name="meta_interview_sms"

                                                    :value="meta.meta_interview_sms"
                                                    @input="updatemeta_interview_sms"
                                                ></textarea>

                                            </div>

                                            <div class="form-group">
                                                <label for="meta_sms_i">Sms Itinerary</label>

                                                <textarea
                                                    type="text"
                                                    class="form-control"
                                                    name="meta_sms_i"

                                                    :value="meta.meta_sms_i"
                                                    @input="updatemeta_sms_i"
                                                ></textarea>

                                            </div>
                                            <div class="form-group">
                                                <label for="meta_bio_metric_mail">Bio Metric Mail Format</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_bio_metric_mail"
                                                              @input="updatemeta_bio_metric_mail"
                                                />

                                            </div>
                                            <div class="form-group">
                                                <label for="meta_cloure_note_i">Cloure Note Itinerary</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_cloure_note_i"
                                                              @input="updatemeta_cloure_note_i"
                                                />

                                            </div>
                                            <div class="form-group">
                                                <label for="meta_cloure_note_q">Cloure Note Query</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_cloure_note_q"
                                                              @input="updatemeta_cloure_note_q"
                                                />

                                            </div>
                                            <div class="form-group">
                                                <label for="meta_doc_not_rec_mail">Documents not received mail</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_doc_not_rec_mail"
                                                              @input="updatemeta_doc_not_rec_mail"
                                                />

                                            </div>

                                            <div class="form-group">
                                                <label for="meta_incex_note_i">Incl/Exclution Itinerary</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_incex_note_i"
                                                              @input="updatemeta_incex_note_i"
                                                />

                                            </div>

                                            <div class="form-group">
                                                <label for="meta_incex_note_q">Incl/Exclution Query </label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_incex_note_q"
                                                              @input="updatemeta_incex_note_q"
                                                />

                                            </div>
                                            <div class="form-group">
                                                <label for="meta_interview_mail">Interview mail</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_interview_mail"
                                                              @input="updatemeta_interview_mail"
                                                />

                                            </div>


                                            <div class="form-group">
                                                <label for="meta_welcome_group">Welcome Group Mail</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_welcome_group"
                                                              @input="updatemeta_welcome_group"
                                                />

                                            </div>
                                            <div class="form-group">
                                                <label for="meta_welcome_group">Registration Group Mail</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_registration_group"
                                                              @input="updatemeta_registration_group"
                                                />

                                            </div>
                                            <div class="form-group">
                                                <label for="meta_welcome_note_i">Welcome Note Itinerary</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_welcome_note_i"
                                                              @input="updatemeta_welcome_note_i"
                                                />

                                            </div>
                                            <div class="form-group">
                                                <label for="meta_welcome_note_q">Welcome Note Query</label>

                                                <vue-ckeditor class="card-body" style="border: 0;color:grey;"

                                                              :value="meta.meta_welcome_note_q"
                                                              @input="updatemeta_welcome_note_q"
                                                />

                                            </div>
                                        </div>
                                        <div id="menu4" v-show="snippet">




                                            <div class="container">
                                                <ul class="nav nav-tabs col-md-12" role="tablist">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"  >Website</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab" >Social Media</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Adwords</a>
                                                    </li>


                                                </ul><!-- Tab panes -->
                                                <div class="tab-content">



                                                        <div id="tabs-1" role="tabpanel" class="tab-pane active " >

                                                            <h2>Snippet Code To Capture Lead From Website</h2>
                                                            <p>Please add the following code to your head and body sections to integrate the contact to LMS.</p>

                                                            <h3>Add this code in Head section. (Style and Script)</h3>


                                                            <pre>    &lt;!-- Travelexic lead capturing widget (Website) --&gt;


           &lt;!-- Style --&gt;
        &lt;style&gt;
            textarea, input {
                border-radius: 10px;
            }
        &lt;/style&gt;

           &lt;!-- script --&gt;
&lt;!-- Please don't touch this code  --&gt;
&lt;script&gt;
    function send_data() {
            source_url=window.location.href;
        agent_id= document.getElementById(&quot;agent_id&quot;).value;
        agency_id= document.getElementById(&quot;agency_id&quot;).value;
        cross_zone= document.getElementById(&quot;cross_zone&quot;).value;
        leadbooking= document.getElementById(&quot;leadbooking&quot;).value;
        tour_start_date= document.getElementById(&quot;tour_start_date&quot;).value;
        package_type= document.getElementById(&quot;package_type&quot;).value;
        contact_name= document.getElementById(&quot;contact_name&quot;).value;
        contact_email= document.getElementById(&quot;contact_email&quot;).value;
        contact_phone= document.getElementById(&quot;contact_phone&quot;).value;
        adult_guest= document.getElementById(&quot;adult_guest&quot;).value;
        kids_guests= document.getElementById(&quot;kids_guests&quot;).value;
        remarks= document.getElementById(&quot;remarks&quot;).value;
        source= document.getElementById(&quot;source&quot;).value;var http = new XMLHttpRequest();
            if(tour_start_date!='' && contact_name!='' && contact_email!='' && contact_phone!='' ){
        var url = 'https://new.travelexic.com/api/webservices/capture_lead';
        var params = 'agent_id='+agent_id+'&amp;agency_id='+agency_id+'&amp;cross_zone='+cross_zone+'&amp;leadbooking='+leadbooking+'&amp;tour_start_date='+tour_start_date+'&amp;package_type='+package_type+'&amp;contact_name='+contact_name+'&amp;contact_email='+contact_email+'&amp;contact_phone='+contact_phone+'&amp;remarks='+remarks+'&amp;source='+source+'&amp;adult_guest='+adult_guest+'&amp;kids_guests='+kids_guests;
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 &amp;&amp; http.status == 200) {
                alert(http.responseText);
            }
        }
        http.send(params);}
            else{
		alert("Please fill all required fields");
		}
    }
&lt;/script&gt;




          </pre><br/>
                                                            <h3>Add this code in Body section. (Form Body)</h3>


                                                            <pre>

            &lt;!-- Form Body --&gt;
&lt;div class=&quot;lead&quot; style=&quot;padding-left: 30px&quot;&gt;

    &lt;form id=&quot;TourForm&quot; action=&quot;&quot; method=&quot;post&quot; name=&quot;TourForm&quot;&gt;

&lt;h1 class=&quot;headingh1&quot; style=&quot;padding-left: 0;&quot;&gt;Travelexic Lead&lt;/h1&gt;

        &lt;!-- Agency Id Here  --&gt;
&lt;input id=&quot;agency_id&quot; name=&quot;agency_id&quot; type=&quot;hidden&quot; value=&quot;{{item.id}}&quot; /&gt;
   &lt;!-- Please don't touch this code  --&gt;
&lt;input id=&quot;source&quot; name=&quot;source&quot; type=&quot;hidden&quot; value=&quot;Website&quot; /&gt;
&lt;input id=&quot;agent_id&quot; name=&quot;agent_id&quot; type=&quot;hidden&quot; value=&quot;&quot; /&gt;&lt;input id=&quot;cross_zone&quot; name=&quot;cross_zone&quot; type=&quot;hidden&quot; value=&quot;1&quot; /&gt;
&lt;input id=&quot;leadbooking&quot; name=&quot;leadbooking&quot; type=&quot;hidden&quot; value=&quot;&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;  Tentative Date*&lt;/h4&gt;
&lt;input id=&quot;tour_start_date&quot; class=&quot;form-control startdate&quot; autocomplete=&quot;off&quot; name=&quot;tour_start_date&quot; required=&quot;&quot; type=&quot;date&quot; value=&quot;&quot; placeholder=&quot;DD MMM YYYY&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;Sector/Route&lt;/h4&gt;
&lt;input id=&quot;package_type&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;package_type&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;Name*&lt;/h4&gt;
&lt;input id=&quot;contact_name&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;contact_name&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;Email*&lt;/h4&gt;
        &lt;input id=&quot;contact_email&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;contact_email&quot; required=&quot;&quot; type=&quot;email&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;Phone*&lt;/h4&gt;
        &lt;input id=&quot;contact_phone&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;contact_phone1&quot; required=&quot;&quot; type=&quot;tel&quot; placeholder=&quot;&quot; /&gt;
 &lt;h4 class=&quot;panel-title&quot;&gt;No. of Adults&lt;/h4&gt;
        &lt;input id=&quot;adult_guest&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;adult_guest&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;No. of Kids&lt;/h4&gt;
        &lt;input id=&quot;kids_guests&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;kids_guests&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
            &lt;h4 class=&quot;panel-title&quot;&gt;Remarks&lt;/h4&gt;
&lt;textarea title=&quot;remarks&quot; id=&quot;remarks&quot; class=&quot;form-control&quot; style=&quot;height: 200px; font-size: 30px; color: #607698;&quot; cols=&quot;22&quot; name=&quot;remarks&quot; required=&quot;&quot; rows=&quot;10&quot;&gt;&lt;/textarea&gt;
    &lt;/form&gt;
&lt;button id=&quot;btnbooknow&quot; class=&quot;btnbook&quot; onclick=&quot;send_data()&quot;&gt;Submit&lt;/button&gt;

&lt;/div&gt;



        </pre>




                                                        </div>
                                                        <div id="tabs-2" role="tabpanel" class="tab-pane active "  >

                                                            <h2>Snippet Code To Capture Lead From Social Media</h2>
                                                            <p>Kindly add the following code to your head and body sections your Social Media Ad campaign landing pafe to integrate it with LMS.</p>

                                                            <h3>Add this code in Head section. (Style and Script)</h3>


                                                            <pre>    &lt;!-- Travelexic lead capturing widget (Social Media) --&gt;


           &lt;!-- Style --&gt;
        &lt;style&gt;
            textarea, input {
                border-radius: 10px;
            }
               &lt;/style&gt;
       &lt;!-- script --&gt;
&lt;!-- Please don't touch this code  --&gt;
&lt;script&gt;
    function send_data() {
                 source_url=window.location.href;
        agent_id= document.getElementById(&quot;agent_id&quot;).value;
        agency_id= document.getElementById(&quot;agency_id&quot;).value;
        cross_zone= document.getElementById(&quot;cross_zone&quot;).value;
        leadbooking= document.getElementById(&quot;leadbooking&quot;).value;
        tour_start_date= document.getElementById(&quot;tour_start_date&quot;).value;
        package_type= document.getElementById(&quot;package_type&quot;).value;
        contact_name= document.getElementById(&quot;contact_name&quot;).value;
        contact_email= document.getElementById(&quot;contact_email&quot;).value;
        contact_phone= document.getElementById(&quot;contact_phone&quot;).value;
        adult_guest= document.getElementById(&quot;adult_guest&quot;).value;
        kids_guests= document.getElementById(&quot;kids_guests&quot;).value;
        remarks= document.getElementById(&quot;remarks&quot;).value;
        source= document.getElementById(&quot;source&quot;).value;var http = new XMLHttpRequest();
                if(tour_start_date!='' && contact_name!='' && contact_email!='' && contact_phone!='' ){
        var url = 'https://new.travelexic.com/api/webservices/capture_lead';
        var params = 'agent_id='+agent_id+'&amp;agency_id='+agency_id+'&amp;cross_zone='+cross_zone+'&amp;leadbooking='+leadbooking+'&amp;tour_start_date='+tour_start_date+'&amp;package_type='+package_type+'&amp;contact_name='+contact_name+'&amp;contact_email='+contact_email+'&amp;contact_phone='+contact_phone+'&amp;remarks='+remarks+'&amp;source='+source+'&amp;adult_guest='+adult_guest+'&amp;kids_guests='+kids_guests;
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 &amp;&amp; http.status == 200) {
                alert(http.responseText);
            }
        }
        http.send(params);}
                else{
		alert("Please fill all required fields");
		}
    }
&lt;/script&gt;




          </pre><br/>
                                                            <h3>Add this code in Body section. (Form Body)</h3>


                                                            <pre>

            &lt;!-- Form Body --&gt;
&lt;div class=&quot;lead&quot; style=&quot;padding-left: 30px&quot;&gt;

    &lt;form id=&quot;TourForm&quot; action=&quot;&quot; method=&quot;post&quot; name=&quot;TourForm&quot;&gt;

&lt;h1 class=&quot;headingh1&quot; style=&quot;padding-left: 0;&quot;&gt;Travelexic Lead&lt;/h1&gt;

        &lt;!-- Agency Id Here  --&gt;
&lt;input id=&quot;agency_id&quot; name=&quot;agency_id&quot; type=&quot;hidden&quot; value=&quot;{{item.id}}&quot; /&gt;
   &lt;!-- Please don't touch this code  --&gt;
&lt;input id=&quot;source&quot; name=&quot;source&quot; type=&quot;hidden&quot; value=&quot;Social Media&quot; /&gt;
&lt;input id=&quot;agent_id&quot; name=&quot;agent_id&quot; type=&quot;hidden&quot; value=&quot;&quot; /&gt;&lt;input id=&quot;cross_zone&quot; name=&quot;cross_zone&quot; type=&quot;hidden&quot; value=&quot;1&quot; /&gt;
&lt;input id=&quot;leadbooking&quot; name=&quot;leadbooking&quot; type=&quot;hidden&quot; value=&quot;&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;  Tentative Date*&lt;/h4&gt;
&lt;input id=&quot;tour_start_date&quot; class=&quot;form-control startdate&quot; autocomplete=&quot;off&quot; name=&quot;tour_start_date&quot; required=&quot;&quot; type=&quot;date&quot; value=&quot;&quot; placeholder=&quot;DD MMM YYYY&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;Sector/Route&lt;/h4&gt;
&lt;input id=&quot;package_type&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;package_type&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;Name*&lt;/h4&gt;
&lt;input id=&quot;contact_name&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;contact_name&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;Email*&lt;/h4&gt;
        &lt;input id=&quot;contact_email&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;contact_email&quot; required=&quot;&quot; type=&quot;email&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;Phone*&lt;/h4&gt;
        &lt;input id=&quot;contact_phone&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;contact_phone1&quot; required=&quot;&quot; type=&quot;tel&quot; placeholder=&quot;&quot; /&gt;
 &lt;h4 class=&quot;panel-title&quot;&gt;No. of Adults&lt;/h4&gt;
        &lt;input id=&quot;adult_guest&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;adult_guest&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;No. of Kids&lt;/h4&gt;
        &lt;input id=&quot;kids_guests&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;kids_guests&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;Remarks&lt;/h4&gt;
&lt;textarea title=&quot;remarks&quot; id=&quot;remarks&quot; class=&quot;form-control&quot; style=&quot;height: 200px; font-size: 30px; color: #607698;&quot; cols=&quot;22&quot; name=&quot;remarks&quot; required=&quot;&quot; rows=&quot;10&quot;&gt;&lt;/textarea&gt;
    &lt;/form&gt;
&lt;button id=&quot;btnbooknow&quot; class=&quot;btnbook&quot; onclick=&quot;send_data()&quot;&gt;Submit&lt;/button&gt;

&lt;/div&gt;



        </pre>





                                                        </div>
                                                        <div id="tabs-3" role="tabpanel" class="tab-pane active ">

                                                            <h2>Snippet Code To Capture Lead From Adwords</h2>
                                                            <p>Kindly add the following code to your head and body sections your adwords campaign landing page to integrate it with LMS.</p>

                                                            <h3>Add this code in Head section. (Style and Script)</h3>


                                                            <pre>    &lt;!-- Travelexic lead capturing widget (Adwords) --&gt;


           &lt;!-- Style --&gt;
        &lt;style&gt;
            textarea, input {
                border-radius: 10px;
            }
        &lt;/style&gt;

&lt;!-- script --&gt;
&lt;!-- Please don't touch this code  --&gt;
&lt;script&gt;
    function send_data() {
                 source_url=window.location.href;
        agent_id= document.getElementById(&quot;agent_id&quot;).value;
        agency_id= document.getElementById(&quot;agency_id&quot;).value;
        cross_zone= document.getElementById(&quot;cross_zone&quot;).value;
        leadbooking= document.getElementById(&quot;leadbooking&quot;).value;
        tour_start_date= document.getElementById(&quot;tour_start_date&quot;).value;
        package_type= document.getElementById(&quot;package_type&quot;).value;
        contact_name= document.getElementById(&quot;contact_name&quot;).value;
        contact_email= document.getElementById(&quot;contact_email&quot;).value;
        contact_phone= document.getElementById(&quot;contact_phone&quot;).value;
        adult_guest= document.getElementById(&quot;adult_guest&quot;).value;
        kids_guests= document.getElementById(&quot;kids_guests&quot;).value;
        remarks= document.getElementById(&quot;remarks&quot;).value;
        source= document.getElementById(&quot;source&quot;).value;var http = new XMLHttpRequest();
                if(tour_start_date!='' && contact_name!='' && contact_email!='' && contact_phone!='' ){
        var url = 'https://new.travelexic.com/api/webservices/capture_lead';
        var params = 'agent_id='+agent_id+'&amp;agency_id='+agency_id+'&amp;cross_zone='+cross_zone+'&amp;leadbooking='+leadbooking+'&amp;tour_start_date='+tour_start_date+'&amp;package_type='+package_type+'&amp;contact_name='+contact_name+'&amp;contact_email='+contact_email+'&amp;contact_phone='+contact_phone+'&amp;remarks='+remarks+'&amp;source='+source+'&amp;adult_guest='+adult_guest+'&amp;kids_guests='+kids_guests;
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 &amp;&amp; http.status == 200) {
                alert(http.responseText);
            }
        }
        http.send(params);}
                else{
		alert("Please fill all required fields");
		}
    }
&lt;/script&gt;



          </pre><br/>
                                                            <h3>Add this code in Body section. (Form Body)</h3>


                                                            <pre>

            &lt;!-- Form Body --&gt;
&lt;div class=&quot;lead&quot; style=&quot;padding-left: 30px&quot;&gt;

    &lt;form id=&quot;TourForm&quot; action=&quot;&quot; method=&quot;post&quot; name=&quot;TourForm&quot;&gt;

&lt;h1 class=&quot;headingh1&quot; style=&quot;padding-left: 0;&quot;&gt;Travelexic Lead&lt;/h1&gt;

        &lt;!-- Agency Id Here  --&gt;
&lt;input id=&quot;agency_id&quot; name=&quot;agency_id&quot; type=&quot;hidden&quot; value=&quot;{{item.id}}&quot; /&gt;
   &lt;!-- Please don't touch this code  --&gt;
&lt;input id=&quot;source&quot; name=&quot;source&quot; type=&quot;hidden&quot; value=&quot;Adwords&quot; /&gt;
&lt;input id=&quot;agent_id&quot; name=&quot;agent_id&quot; type=&quot;hidden&quot; value=&quot;&quot; /&gt;&lt;input id=&quot;cross_zone&quot; name=&quot;cross_zone&quot; type=&quot;hidden&quot; value=&quot;1&quot; /&gt;
&lt;input id=&quot;leadbooking&quot; name=&quot;leadbooking&quot; type=&quot;hidden&quot; value=&quot;&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;  Tentative Date*&lt;/h4&gt;
&lt;input id=&quot;tour_start_date&quot; class=&quot;form-control startdate&quot; autocomplete=&quot;off&quot; name=&quot;tour_start_date&quot; required=&quot;&quot; type=&quot;date&quot; value=&quot;&quot; placeholder=&quot;DD MMM YYYY&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;Sector/Route&lt;/h4&gt;
&lt;input id=&quot;package_type&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;package_type&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;Name*&lt;/h4&gt;
&lt;input id=&quot;contact_name&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;contact_name&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;Email*&lt;/h4&gt;
        &lt;input id=&quot;contact_email&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;contact_email&quot; required=&quot;&quot; type=&quot;email&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;Phone*&lt;/h4&gt;
        &lt;input id=&quot;contact_phone&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;contact_phone1&quot; required=&quot;&quot; type=&quot;tel&quot; placeholder=&quot;&quot; /&gt;
 &lt;h4 class=&quot;panel-title&quot;&gt;No. of Adults&lt;/h4&gt;
        &lt;input id=&quot;adult_guest&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;adult_guest&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
        &lt;h4 class=&quot;panel-title&quot;&gt;No. of Kids&lt;/h4&gt;
        &lt;input id=&quot;kids_guests&quot; class=&quot;form-control&quot; style=&quot;font-size: 30px; color: #607698;&quot; name=&quot;kids_guests&quot; required=&quot;&quot; type=&quot;text&quot; placeholder=&quot;&quot; /&gt;
&lt;h4 class=&quot;panel-title&quot;&gt;Remarks&lt;/h4&gt;
&lt;textarea title=&quot;remarks&quot; id=&quot;remarks&quot; class=&quot;form-control&quot; style=&quot;height: 200px; font-size: 30px; color: #607698;&quot; cols=&quot;22&quot; name=&quot;remarks&quot; required=&quot;&quot; rows=&quot;10&quot;&gt;&lt;/textarea&gt;
    &lt;/form&gt;
&lt;button id=&quot;btnbooknow&quot; class=&quot;btnbook&quot; onclick=&quot;send_data()&quot;&gt;Submit&lt;/button&gt;

&lt;/div&gt;



        </pre>





                                                        </div>

                                                    </div>







</div>

                                              </div>
                                        <div id="menu5" v-show="customdoc">
                                            <div class="form-group">
                                                <label for="meta_welcome_note_q">Document tags</label>
                                                <tags-input element-id="tags"
                                                            v-model="meta.meta_doc_tags"
                                                            :existing-tags="[
        { key: 'passport', value: 'Passport' },
        { key: 'visa', value: 'Visa' },
        { key: 'idproof', value: 'ID Proof' },
                                                              ]"
                                                            :typeahead="true"></tags-input>
                                            </div>
                                        </div>
                                    </div>
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
    </section>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'
    import { VueTelInput } from 'vue-tel-input'
    import VoerroTagsInput from '@voerro/vue-tagsinput';
    import ColorPicker from 'vue-color-picker-wheel';
    export default {
        components: {"tags-input":  VoerroTagsInput,ColorPicker,VueTelInput },
        data() {
            return {
                // Code...
                true1:true,
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
                isagency:false,
current_user:'',
                scoreset:true,
                settingreview:false,
                mailformat:false,
                snippet:false,
                customdoc:false,
                monitor:false,
                timezonedata:[],
                approve_mem:[],

            }
        },
        computed: {
            ...mapGetters('UsersSingle', ['item', 'loading', 'rolesAll', 'teamsAll', 'citiesAll', 'statesAll', 'countriesAll','agencyAll','meta'])
        },
        created() {
            this.current_user=document.querySelector("meta[name='user-role']").getAttribute('content');
            if(document.querySelector("meta[name='user-role']").getAttribute('content')!=='Administrator (can create other users)'){
                this.$router.push({name: 'dashboard.index'})
            }
            this.timezonedata=[
                {
                    "offset": "-12:00",
                    "name": "Etc/-12"
                },
                {
                    "offset": "-11:00",
                    "name": "Etc/-11"
                },
                {
                    "offset": "-11:00",
                    "name": "Pacific/Midway"
                },
                {
                    "offset": "-10:00",
                    "name": "America/Adak"
                },
                {
                    "offset": "-09:00",
                    "name": "America/Anchorage"
                },
                {
                    "offset": "-09:00",
                    "name": "Pacific/Gambier"
                },
                {
                    "offset": "-08:00",
                    "name": "America/Dawson_Creek"
                },
                {
                    "offset": "-08:00",
                    "name": "America/Ensenada"
                },
                {
                    "offset": "-08:00",
                    "name": "America/Los_Angeles"
                },
                {
                    "offset": "-07:00",
                    "name": "America/Chihuahua"
                },
                {
                    "offset": "-07:00",
                    "name": "America/Denver"
                },
                {
                    "offset": "-06:00",
                    "name": "America/Belize"
                },
                {
                    "offset": "-06:00",
                    "name": "America/Cancun"
                },
                {
                    "offset": "-06:00",
                    "name": "America/Chicago"
                },
                {
                    "offset": "-06:00",
                    "name": "Chile/EasterIsland"
                },
                {
                    "offset": "-05:00",
                    "name": "America/Bogota"
                },
                {
                    "offset": "-05:00",
                    "name": "America/Havana"
                },
                {
                    "offset": "-05:00",
                    "name": "America/New_York"
                },
                {
                    "offset": "-04:30",
                    "name": "America/Caracas"
                },
                {
                    "offset": "-04:00",
                    "name": "America/Campo_Grande"
                },
                {
                    "offset": "-04:00",
                    "name": "America/Glace_Bay"
                },
                {
                    "offset": "-04:00",
                    "name": "America/Goose_Bay"
                },
                {
                    "offset": "-04:00",
                    "name": "America/Santiago"
                },
                {
                    "offset": "-04:00",
                    "name": "America/La_Paz"
                },
                {
                    "offset": "-03:00",
                    "name": "America/Argentina/Buenos_Aires"
                },
                {
                    "offset": "-03:00",
                    "name": "America/Montevideo"
                },
                {
                    "offset": "-03:00",
                    "name": "America/Araguaina"
                },
                {
                    "offset": "-03:00",
                    "name": "America/Godthab"
                },
                {
                    "offset": "-03:00",
                    "name": "America/Miquelon"
                },
                {
                    "offset": "-03:00",
                    "name": "America/Sao_Paulo"
                },
                {
                    "offset": "-03:30",
                    "name": "America/St_Johns"
                },
                {
                    "offset": "-02:00",
                    "name": "America/Noronha"
                },
                {
                    "offset": "-01:00",
                    "name": "Atlantic/Cape_Verde"
                },

                {
                    "offset": "+01:00",
                    "name": "Africa/Algiers"
                },
                {
                    "offset": "+01:00",
                    "name": "Africa/Windhoek"
                },
                {
                    "offset": "+01:00",
                    "name": "Atlantic/Azores"
                },
                {
                    "offset": "+01:00",
                    "name": "Atlantic/Stanley"
                },
                {
                    "offset": "+01:00",
                    "name": "Europe/Amsterdam"
                },
                {
                    "offset": "+01:00",
                    "name": "Europe/Belgrade"
                },
                {
                    "offset": "+01:00",
                    "name": "Europe/Brussels"
                },
                {
                    "offset": "+02:00",
                    "name": "Africa/Cairo"
                },
                {
                    "offset": "+02:00",
                    "name": "Africa/Blantyre"
                },
                {
                    "offset": "+02:00",
                    "name": "Asia/Beirut"
                },
                {
                    "offset": "+02:00",
                    "name": "Asia/Damascus"
                },
                {
                    "offset": "+02:00",
                    "name": "Asia/Gaza"
                },
                {
                    "offset": "+02:00",
                    "name": "Asia/Jerusalem"
                },
                {
                    "offset": "+03:00",
                    "name": "Africa/Addis_Ababa"
                },
                {
                    "offset": "+03:00",
                    "name": "Asia/Riyadh89"
                },
                {
                    "offset": "+03:00",
                    "name": "Europe/Minsk"
                },
                {
                    "offset": "+03:30",
                    "name": "Asia/Tehran"
                },
                {
                    "offset": "+04:00",
                    "name": "Asia/Dubai"
                },
                {
                    "offset": "+04:00",
                    "name": "Asia/Yerevan"
                },
                {
                    "offset": "+04:00",
                    "name": "Europe/Moscow"
                },
                {
                    "offset": "+04:30",
                    "name": "Asia/Kabul"
                },
                {
                    "offset": "+05:00",
                    "name": "Asia/Tashkent"
                },
                {
                    "offset": "+05:30",
                    "name": "Asia/Kolkata"
                },
                {
                    "offset": "+05:45",
                    "name": "Asia/Katmandu"
                },
                {
                    "offset": "+06:00",
                    "name": "Asia/Dhaka"
                },
                {
                    "offset": "+06:00",
                    "name": "Asia/Yekaterinburg"
                },
                {
                    "offset": "+06:30",
                    "name": "Asia/Rangoon"
                },
                {
                    "offset": "+07:00",
                    "name": "Asia/Bangkok"
                },
                {
                    "offset": "+07:00",
                    "name": "Asia/Novosibirsk"
                },
                {
                    "offset": "+08:00",
                    "name": "Etc/+8"
                },
                {
                    "offset": "+08:00",
                    "name": "Asia/Hong_Kong"
                },
                {
                    "offset": "+08:00",
                    "name": "Asia/Krasnoyarsk"
                },
                {
                    "offset": "+08:00",
                    "name": "Australia/Perth"
                },
                {
                    "offset": "+08:45",
                    "name": "Australia/Eucla"
                },
                {
                    "offset": "+09:00",
                    "name": "Asia/Irkutsk"
                },
                {
                    "offset": "+09:00",
                    "name": "Asia/Seoul"
                },
                {
                    "offset": "+09:00",
                    "name": "Asia/Tokyo"
                },
                {
                    "offset": "+09:30",
                    "name": "Australia/Adelaide"
                },
                {
                    "offset": "+09:30",
                    "name": "Australia/Darwin"
                },
                {
                    "offset": "+09:30",
                    "name": "Pacific/Marquesas"
                },
                {
                    "offset": "+10:00",
                    "name": "Etc/+10"
                },
                {
                    "offset": "+10:00",
                    "name": "Australia/Brisbane"
                },
                {
                    "offset": "+10:00",
                    "name": "Australia/Hobart"
                },
                {
                    "offset": "+10:00",
                    "name": "Asia/Yakutsk"
                },
                {
                    "offset": "+10:30",
                    "name": "Australia/Lord_Howe"
                },
                {
                    "offset": "+11:00",
                    "name": "Asia/Vladivostok"
                },
                {
                    "offset": "+11:30",
                    "name": "Pacific/Norfolk"
                },
                {
                    "offset": "+12:00",
                    "name": "Etc/+12"
                },
                {
                    "offset": "+12:00",
                    "name": "Asia/Anadyr"
                },
                {
                    "offset": "+12:00",
                    "name": "Asia/Magadan"
                },
                {
                    "offset": "+12:00",
                    "name": "Pacific/Auckland"
                },
                {
                    "offset": "+12:45",
                    "name": "Pacific/Chatham"
                },
                {
                    "offset": "+13:00",
                    "name": "Pacific/Tongatapu"
                },
                {
                    "offset": "+14:00",
                    "name": "Pacific/Kiritimati"
                }
            ];

            this.fetchData(this.$route.params.id)
            if(_.isArray(this.item.role)){
                console.log(this.item.role[0].title)
                this.isagency=this.item.role[0].title;
            }

        },
        destroyed() {
            this.resetState()
        },
        watch: {
            "meta.meta_subscription_pack.starter": function() {

                if(this.meta.meta_subscription_pack.starter===true && this.monitor===true){

                    this.meta.meta_subscription_pack.base=false
                   this.meta.meta_subscription_pack.impact=false
                    this.meta.meta_subscription_pack.enterprise=false


                        this.meta.meta_subscription_features.full_edit_mode=true
                        this.meta.meta_subscription_features.lead_mng_sys=true
                        this.meta.meta_subscription_features.cust_info_repo=true
                        this.meta.meta_subscription_features.tech_aug=false
                        this.meta.meta_subscription_features.data_analysis=false
                        this.meta.meta_subscription_features.task_rem=true
                        this.meta.meta_subscription_features.quotation_gen=false
                        this.meta.meta_subscription_features.confirm_letter=false
                    this.meta.meta_subscription_features.booking_accessL=false
                        this.meta.meta_subscription_features.cost_sheet=false
                        this.meta.meta_subscription_features.whatsapp_integ=false
                        this.meta.meta_subscription_features.post_booking_app=false
                        this.meta.meta_subscription_features.multi_broadcast=false
                        this.meta.meta_subscription_features.partial_app_branding=false
                        this.meta.meta_subscription_features.group_module=false
                        this.meta.meta_subscription_features.email_masking=false
                        this.meta.meta_subscription_features.sms_service=false
                        this.meta.meta_subscription_features.mis_report=false
                        this.meta.meta_subscription_features.personalised_mail=false
                        this.meta.meta_subscription_features.full_app_branding=false
                        this.meta.meta_subscription_features.vendro_mng_sys=false
                        this.meta.meta_subscription_features.visa_support=false
                        this.meta.meta_subscription_features.activity_upselling=false
                        this.meta.meta_subscription_features.sms_integration=false
                        this.meta.meta_subscription_features.own_quot_temp=false
                        this.meta.meta_subscription_features.customer_retention_tool=false


                }
            },
            "meta.meta_subscription_pack.base": function() {
                if(this.meta.meta_subscription_pack.base===true && this.monitor===true){

                    this.meta.meta_subscription_pack.starter=false
                    this.meta.meta_subscription_pack.impact=false
                    this.meta.meta_subscription_pack.enterprise=false

                    this.meta.meta_subscription_features.full_edit_mode=true
                    this.meta.meta_subscription_features.lead_mng_sys=true
                    this.meta.meta_subscription_features.cust_info_repo=true
                    this.meta.meta_subscription_features.tech_aug=true
                    this.meta.meta_subscription_features.data_analysis=true
                    this.meta.meta_subscription_features.task_rem=true
                    this.meta.meta_subscription_features.quotation_gen=true
                    this.meta.meta_subscription_features.confirm_letter=true
                    this.meta.meta_subscription_features.booking_accessL=true
                    this.meta.meta_subscription_features.cost_sheet=true
                    this.meta.meta_subscription_features.whatsapp_integ=true
                    this.meta.meta_subscription_features.post_booking_app=true
                    this.meta.meta_subscription_features.multi_broadcast=true
                    this.meta.meta_subscription_features.partial_app_branding=true
                    this.meta.meta_subscription_features.group_module=true
                    this.meta.meta_subscription_features.email_masking=true
                    this.meta.meta_subscription_features.sms_service=false
                    this.meta.meta_subscription_features.mis_report=false
                    this.meta.meta_subscription_features.personalised_mail=false
                    this.meta.meta_subscription_features.full_app_branding=false
                    this.meta.meta_subscription_features.vendro_mng_sys=false
                    this.meta.meta_subscription_features.visa_support=false
                    this.meta.meta_subscription_features.activity_upselling=false
                    this.meta.meta_subscription_features.sms_integration=false
                    this.meta.meta_subscription_features.own_quot_temp=false
                    this.meta.meta_subscription_features.customer_retention_tool=false
                }
            },
            "meta.meta_subscription_pack.impact": function() {
                if(this.meta.meta_subscription_pack.impact===true && this.monitor===true){

                    this.meta.meta_subscription_pack.base=false
                    this.meta.meta_subscription_pack.starter=false
                    this.meta.meta_subscription_pack.enterprise=false

                    this.meta.meta_subscription_features.full_edit_mode=true
                    this.meta.meta_subscription_features.lead_mng_sys=true
                    this.meta.meta_subscription_features.cust_info_repo=true
                    this.meta.meta_subscription_features.tech_aug=true
                    this.meta.meta_subscription_features.data_analysis=true
                    this.meta.meta_subscription_features.task_rem=true
                    this.meta.meta_subscription_features.quotation_gen=true
                    this.meta.meta_subscription_features.confirm_letter=true
                    this.meta.meta_subscription_features.booking_accessL=true
                    this.meta.meta_subscription_features.cost_sheet=true
                    this.meta.meta_subscription_features.whatsapp_integ=true
                    this.meta.meta_subscription_features.post_booking_app=true
                    this.meta.meta_subscription_features.multi_broadcast=true
                    this.meta.meta_subscription_features.partial_app_branding=true
                    this.meta.meta_subscription_features.group_module=true
                    this.meta.meta_subscription_features.email_masking=true
                    this.meta.meta_subscription_features.sms_service=true
                    this.meta.meta_subscription_features.mis_report=true
                    this.meta.meta_subscription_features.personalised_mail=false
                    this.meta.meta_subscription_features.full_app_branding=true
                    this.meta.meta_subscription_features.vendro_mng_sys=true
                    this.meta.meta_subscription_features.visa_support=true
                    this.meta.meta_subscription_features.activity_upselling=false
                    this.meta.meta_subscription_features.sms_integration=false
                    this.meta.meta_subscription_features.own_quot_temp=false
                    this.meta.meta_subscription_features.customer_retention_tool=true
                }

            },
            "meta.meta_subscription_pack.enterprise": function() {
                if(this.meta.meta_subscription_pack.enterprise===true && this.monitor===true){

                    this.meta.meta_subscription_pack.base=false
                    this.meta.meta_subscription_pack.impact=false
                    this.meta.meta_subscription_pack.starter=false

                    this.meta.meta_subscription_features.full_edit_mode=true
                    this.meta.meta_subscription_features.lead_mng_sys=true
                    this.meta.meta_subscription_features.cust_info_repo=true
                    this.meta.meta_subscription_features.tech_aug=true
                    this.meta.meta_subscription_features.data_analysis=true
                    this.meta.meta_subscription_features.task_rem=true
                    this.meta.meta_subscription_features.quotation_gen=true
                    this.meta.meta_subscription_features.confirm_letter=true
                    this.meta.meta_subscription_features.booking_accessL=true
                    this.meta.meta_subscription_features.cost_sheet=true
                    this.meta.meta_subscription_features.whatsapp_integ=true
                    this.meta.meta_subscription_features.post_booking_app=true
                    this.meta.meta_subscription_features.multi_broadcast=true
                    this.meta.meta_subscription_features.partial_app_branding=true
                    this.meta.meta_subscription_features.group_module=true
                    this.meta.meta_subscription_features.email_masking=false
                    this.meta.meta_subscription_features.sms_service=true
                    this.meta.meta_subscription_features.mis_report=true
                    this.meta.meta_subscription_features.personalised_mail=true
                    this.meta.meta_subscription_features.full_app_branding=true
                    this.meta.meta_subscription_features.vendro_mng_sys=true
                    this.meta.meta_subscription_features.visa_support=true
                    this.meta.meta_subscription_features.activity_upselling=true
                    this.meta.meta_subscription_features.sms_integration=true
                    this.meta.meta_subscription_features.own_quot_temp=true
                    this.meta.meta_subscription_features.customer_retention_tool=true

                }
            },


            "$route.params.id": function() {
                this.resetState()
                this.fetchData(this.$route.params.id)

            },
            "meta.meta_subscription": function(){
                if(this.meta.meta_subscription){
                    this.meta.meta_licence.type="Subscription"
                    this.item.mycred_default_total=""
                }
                else {
                    this.meta.meta_licence.type="Point"
                    this.meta.meta_licence.exp_date=""
                    this.meta.meta_licence.start_date=""
                }
            },
            "item.role": function(){
                if(_.isArray(this.item.role)){
                    console.log(this.item.role[0].title)
                    this.isagency=this.item.role[0].title;
                    if(this.meta.approve_agents){
                        // approve_mem
                        let form = new FormData();
                        form.set('id',this.item.id);
                        form.set('name', this.item.name);
                        axios.post('/api/webservices/fetch_agency_agents', form)
                            .then(response => {
                               this.approve_mem=response.data;

                            });
                    }
                }

            }
        },
        methods: {
            ...mapActions('UsersSingle', ['fetchData', 'updateData', 'resetState', 'setName', 'setEmail', 'setPassword', 'setRole', 'setApproved', 'setTeam', 'setAccount_manager', 'setAgree', 'setBanner_color', 'setAddress', 'setCity', 'setState', 'setCountry', 'setPhone', 'setPostcode', 'setCompany', 'setDevice', 'setLocale', 'setLogin', 'setLogin_date_time', 'setLogin_status', 'setLogo', 'setMycred_default', 'setMycred_default_total', 'setMycred_epp_mycred', 'setOwners_email','fetchAgencyAll',
                'setmeta_bio_metric_mail',
                'setmeta_bio_metric_sms',
                'setmeta_cloure_note_i',
                'setmeta_cloure_note_q',
                'setmeta_doc_not_rec_mail',
                'setmeta_doc_not_rec_sms',
                'setmeta_incex_note_i',
                'setmeta_incex_note_q',
                'setmeta_interview_mail',
                'setmeta_interview_sms',
                'setmeta_price_mode_user',
                'setmeta_registered_thru',
                'setmeta_score',
                'setmeta_sms_i',
                'setmeta_welcome_group',
                'setmeta_registration_group',
                'setmeta_welcome_note_i',
                'setmeta_welcome_note_q',
            ]),
            updateName(e) {
                this.setName(e.target.value)
            },
            updateEmail(e) {
                this.setEmail(e.target.value)
            },
            updatePassword(e) {
                this.setPassword(e.target.value)
            },
            updateRole(value) {
                this.setRole(value)
            },
            updateApproved(e) {
                this.setApproved(e.target.checked)
            },
            updateTeam(value) {
                this.setTeam(value)
            },
            updateAccount_manager(e) {
                this.setAccount_manager(e.target.value)
            },
            updateAgree(e) {
                this.setAgree(e.target.value)
            },
            updateBanner_color(e) {
                this.setBanner_color(e.target.value)
            },
            updateAddress(e) {
                this.setAddress(e)
            },
            updateCity(value) {
                this.setCity(value)
            },
            updateState(value) {
                this.setState(value)
            },
            updateCountry(value) {
                this.setCountry(value)
            },
            updatePhone(e) {
                this.setPhone(e.target.value)
            },
            updatePostcode(e) {
                this.setPostcode(e.target.value)
            },
            updateCompany(e) {
                this.setCompany(e)
            },
            updateDevice(e) {
                this.setDevice(e.target.value)
            },
            updateLocale(e) {
                this.setLocale(e.target.value)
            },
            updateLogin(e) {
                this.setLogin(e.target.value)
            },
            updateLogin_date_time(e) {
                this.setLogin_date_time(e.target.value)
            },
            updateLogin_status(e) {
                this.setLogin_status(e.target.value)
            },
            removeLogo(e, id) {
                this.$swal({
                    title: 'Are you sure?',
                    text: "To fully delete the file submit the form.",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    confirmButtonColor: '#dd4b39',
                    focusCancel: true,
                    reverseButtons: true
                }).then(result => {
                    if (typeof result.dismiss === "undefined") {
                        this.setLogo('');
                    }
                })
            },
            updateLogo(e) {
                this.setLogo(e.target.files[0]);
                this.$forceUpdate();
            },
            updateMycred_default(e) {
                this.setMycred_default(e.target.value)
            },
            updateMycred_default_total(e) {
                this.setMycred_default_total(e.target.value)
            },
            updateMycred_epp_mycred(e) {
                this.setMycred_epp_mycred(e.target.value)
            },
            updateOwners_email(e) {
                this.setOwners_email(e.target.value)
            },
            //meta

            updatemeta_bio_metric_mail(e) {
                this.setmeta_bio_metric_mail(e)
            },
            updatemeta_bio_metric_sms(e) {
                this.setmeta_bio_metric_sms(e.target.value)
            },
            updatemeta_cloure_note_i(e) {
                this.setmeta_cloure_note_i(e)
            },
            updatemeta_cloure_note_q(e) {
                this.setmeta_cloure_note_q(e)
            },
            updatemeta_doc_not_rec_mail(e) {
                this.setmeta_doc_not_rec_mail(e)
            },
            updatemeta_doc_not_rec_sms(e) {
                this.setmeta_doc_not_rec_sms(e.target.value)
            },
            updatemeta_incex_note_i(e) {
                this.setmeta_incex_note_i(e)
            },
            updatemeta_incex_note_q(e) {
                this.setmeta_incex_note_q(e)
            },
            updatemeta_interview_mail(e) {
                this.setmeta_interview_mail(e)
            },
            updatemeta_interview_sms(e) {
                this.setmeta_interview_sms(e.target.value)
            },
            updatemeta_price_mode_user(e) {
                this.setmeta_price_mode_user(e.target.value)
            },
            updatemeta_registered_thru(e) {
                this.setmeta_registered_thru(e.target.value)
            },
            updatemeta_score(e) {
                this.setmeta_score(e.target.value)
            },
            updatemeta_sms_i(e) {
                this.setmeta_sms_i(e.target.value)
            },
            updatemeta_welcome_group(e) {
                this.setmeta_welcome_group(e)
            },
            updatemeta_registration_group(e) {
                this.setmeta_registration_group(e)
            },
            updatemeta_welcome_note_i(e) {
                this.setmeta_welcome_note_i(e)
            },
            updatemeta_welcome_note_q(e) {
                this.setmeta_welcome_note_q(e)
            },



            submitForm() {
                var res = this.item.phone.replace(/\(/g, "");
                res = res.replace(/\)/g, "");
                res = res.replace(/-/g, "");
                res = res.replace(/ /g, "");
                this.setPhone(res);
                if(this.meta.approve_agents) {
                    var return_arr = []
                    var checked = '';
                    var checked2 = '';
                    var approval = 0;
                    var agent_create=0;

                    if (this.approve_mem.length > 0) {

                    for (var r = 0; r < this.approve_mem.length; r++) {

                        checked = document.getElementById(this.approve_mem[r].id).checked;
                        if (checked == true) {

                            return_arr.push(this.approve_mem[r]);
                        }

                        checked = '';
                    }
                         approval = 1;
                }

                    checked2 = document.getElementById('approved_agency').checked;
                    if (checked2 == true) {
                        agent_create=1;
                    }

                  if(return_arr.length>0){

                        let form = new FormData();
                        form.set('id',this.item.id);
                        form.set('email',this.item.email);
                        form.set('approval',approval);
                        form.set('data', JSON.stringify(return_arr));
                        axios.post('/api/webservices/approve_agents', form)
                            .then(response => {


                            });
                    }
                  else if(return_arr.length==0 && agent_create==1){

                      let form = new FormData();
                      form.set('id',this.item.id);
                      form.set('email',this.item.email);
                      form.set('approval',approval);
                      form.set('data', JSON.stringify(return_arr));
                      axios.post('/api/webservices/approve_agents', form)
                          .then(response => {


                          });
                  }

                }
                this.updateData()
                    .then(() => {
                        this.$router.push({ name: 'users.index' })
                        this.$eventHub.$emit('update-success')
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }
    }
</script>


<style scoped>
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


    .switch2 {
        position: relative;
        display: inline-block;
        vertical-align: top;
        width: 35px;
        height: 14px;
        padding: 3px;
        border-radius: 18px;
        cursor: pointer;
    }

    .switch2-input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    .switch2-label {
        position: relative;
        display: block;
        height: inherit;
        font-family: Helvetica Neue;
        font-size: 8px;
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
    .switch2-label:before, .switch2-label:after {
        position: absolute;
        top: 50%;
        margin-top: -.5em;
        line-height: 1;
        -moz-transition: inherit;
        -o-transition: inherit;
        -webkit-transition: inherit;
        transition: inherit;
    }
    .switch2-label:before {
        content: attr(data-off);
        right: 6px;
        color: #6d6d6d;
        text-shadow: 0 1px rgba(255, 255, 255, 0.5);
    }
    .switch2-label:after {
        content: attr(data-on);
        left: 4px;
        color: white;
        text-shadow: 0 1px rgba(0, 0, 0, 0.2);
        opacity: 0;
    }
    .switch2-input:checked ~ .switch2-label {
        background: #0eabf4;
        -moz-box-shadow: #119af0 0 0 2px 1px inset;
        -webkit-box-shadow: #119af0 0 0 2px 1px inset;
        box-shadow: #119af0 0 0 2px 1px inset;
    }
    .switch2-input:checked ~ .switch2-label:before {
        opacity: 0;
    }
    .switch2-input:checked ~ .switch2-label:after {
        opacity: 1;
    }

    .switch2-handle {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 12px;
        height: 12px;
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
    .switch2-input:checked ~ .switch2-handle {
        left: 25px;
    }

    .grayout{
        background: #0eabf457 !important;
        box-shadow: #0eabf438 0 0 2px 1px inset !important;
    }

    input[type="file"] {
        display: block !important;
    }
</style>
