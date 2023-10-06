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
                                <h3 class="box-title">Create</h3>
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
                                <div class="form-group">
                                    <div class="checkbox">
                                        <label>
                                            <input
                                                    type="checkbox"
                                                    name="approved"
                                                    :value="item.approved"
                                                    :checked="item.approved == true"
                                                    @change="updateApproved"
                                                    >
                                            Approved
                                        </label>
                                    </div>
                                </div>
<!--                                <div class="form-group">-->
<!--                                    <label for="team">Team</label>-->
<!--                                    <v-select-->
<!--                                            name="team"-->
<!--                                            label="name"-->
<!--                                            @input="updateTeam"-->
<!--                                            :value="item.team"-->
<!--                                            :options="teamsAll"-->
<!--                                            />-->
<!--                                </div>-->
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
<!--                                <div class="form-group">-->
<!--                                    <label for="agree">Agree</label>-->
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="agree"-->
<!--                                            placeholder="Enter Agree"-->
<!--                                            :value="item.agree"-->
<!--                                            @input="updateAgree"-->
<!--                                            >-->
<!--                                </div>-->
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
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="address"-->
<!--                                            placeholder="Enter Address"-->
<!--                                            :value="item.address"-->
<!--                                            @input="updateAddress"-->
<!--                                            >-->
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
<!--                                            >-->
<!--                                    <vue-tel-input v-bind="bindProps" style="border: 1px solid #ced4da;" v-model="item.phone"   class="form-control pl-0" name="phone" placeholder="Enter Phone"></vue-tel-input>-->
                                    <vue-tel-input v-model="item.phone" v-bind="bindProps" class="form-control pl-0 " name="phone" placeholder="Enter Phone"></vue-tel-input>
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
<!--                                <div class="form-group">-->
<!--                                    <label for="device">Device</label>-->
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="device"-->
<!--                                            placeholder="Enter Device"-->
<!--                                            :value="item.device"-->
<!--                                            @input="updateDevice"-->
<!--                                            >-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="locale">Locale</label>-->
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="locale"-->
<!--                                            placeholder="Enter Locale"-->
<!--                                            :value="item.locale"-->
<!--                                            @input="updateLocale"-->
<!--                                            >-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="login">Login</label>-->
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="login"-->
<!--                                            placeholder="Enter Login"-->
<!--                                            :value="item.login"-->
<!--                                            @input="updateLogin"-->
<!--                                            >-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="login_date_time">Login date time</label>-->
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="login_date_time"-->
<!--                                            placeholder="Enter Login date time"-->
<!--                                            :value="item.login_date_time"-->
<!--                                            @input="updateLogin_date_time"-->
<!--                                            >-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="login_status">Login status</label>-->
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="login_status"-->
<!--                                            placeholder="Enter Login status"-->
<!--                                            :value="item.login_status"-->
<!--                                            @input="updateLogin_status"-->
<!--                                            >-->
<!--                                </div>-->
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

                                <div v-if="isagency==='agency'">
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
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_pack.starter">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </th>
                                                <th>Base
                                                    <label class="switch2">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_pack.base">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </th>
                                                <th>Impact
                                                    <label class="switch2">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_pack.impact">
                                                        <span class="switch2-label" data-on="" data-off=""></span>
                                                        <span class="switch2-handle"></span>

                                                    </label>
                                                </th>
                                                <th>Enterprise
                                                    <label class="switch2">
                                                        <input type="checkbox" class="switch2-input"  v-model="meta.meta_subscription_pack.enterprise">
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
                                    <label for="meta_bio_metric_sms">Bio Metric Sms</label>

                                    <textarea
                                            type="text"
                                            class="form-control"
                                            name="meta_bio_metric_sms"
                                            placeholder="meta_bio_metric_sms"
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
                                            placeholder="meta_doc_not_rec_sms"
                                            :value="meta.meta_doc_not_rec_sms"
                                            @input="updatemeta_doc_not_rec_sms"
                                    ></textarea>

                                </div>
                                <div class="form-group">
                                    <label for="meta_interview_sms">Interview sms</label>

                                    <textarea
                                            type="text"
                                            class="form-control"
                                            name="meta_interview_sms"
                                            placeholder="meta_interview_sms"
                                            :value="meta.meta_interview_sms"
                                            @input="updatemeta_interview_sms"
                                    ></textarea>

                                </div>

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

                                <div class="form-group">
                                    <label for="meta_registered_thru">Time Zone</label>
                                    <v-select

                                        label="name"
                                        :options="timezonedata"
                                        v-model="meta.time_zone"

                                    />


                                </div>



                                <div class="form-group">
                                    <label for="meta_score">Score Formula</label>

                                    <input
                                            type="text"
                                            class="form-control"
                                            name="meta_score"
                                            placeholder="meta_score"
                                            :value="meta.meta_score"
                                            @input="updatemeta_score"
                                    >

                                </div>

                                <div class="form-group">
                                    <label for="meta_sms_i">Sms Itinerary</label>

                                    <textarea
                                            type="text"
                                            class="form-control"
                                            name="meta_sms_i"
                                            placeholder="meta_sms_i"
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
            timezonedata:[],
            // Code...
isagency:false,
        }
    },
    computed: {
        ...mapGetters('UsersSingle', ['item', 'loading', 'rolesAll', 'teamsAll', 'citiesAll', 'statesAll', 'countriesAll','agencyAll','meta'])
    },
    created() {
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

        this.fetchRolesAll(),
        this.fetchTeamsAll(),
        this.fetchCitiesAll(),
        this.fetchStatesAll(),
        this.fetchCountriesAll()
        this.fetchAgencyAll()
    },
    destroyed() {
        this.resetState()
    },
    watch:{
        "meta.meta_subscription_pack.starter": function() {

            if(this.meta.meta_subscription_pack.starter===true){

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
            if(this.meta.meta_subscription_pack.base===true){

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
            if(this.meta.meta_subscription_pack.impact===true){

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
            if(this.meta.meta_subscription_pack.enterprise===true){

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
            }

        }

    },
    methods: {
        ...mapActions('UsersSingle', ['storeData', 'resetState', 'setName', 'setEmail', 'setPassword', 'setRole', 'setApproved', 'setTeam', 'setAccount_manager', 'setAgree', 'setBanner_color', 'setAddress', 'setCity', 'setState', 'setCountry', 'setPhone', 'setPostcode', 'setCompany', 'setDevice', 'setLocale', 'setLogin', 'setLogin_date_time', 'setLogin_status', 'setLogo', 'setMycred_default', 'setMycred_default_total', 'setMycred_epp_mycred', 'setOwners_email',
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

            'fetchRolesAll', 'fetchTeamsAll', 'fetchCitiesAll', 'fetchStatesAll', 'fetchCountriesAll','fetchAgencyAll']),
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
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'users.index' })
                    this.$eventHub.$emit('create-success')
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
