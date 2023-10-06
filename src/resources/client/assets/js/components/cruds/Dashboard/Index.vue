<template>


<div class="container">
    <section class="content-header">
        <task-maker :mode="'full'" style="    position: relative;
    top: -123px;
    left: 4%;"></task-maker>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
    </section>
    <task-maker :mode="'full'"></task-maker>

        <!--filter-->
        <div class="row ml-5">

                <div class="col-lg-8 offset-4 f-1-8">
                    <ul class="nav textcolor text-bold">
                        <li class="nav-item">

                            <a class="nav-link " :class="selected_filter_type=='today'?'active':''" href="#" @click="fetch_chart_data('today')" >Today</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="selected_filter_type=='yesterday'?'active':''" href="#" @click="fetch_chart_data('yesterday')" >Last Day</a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="selected_filter_type=='month'?'active':''" href="#" @click="fetch_chart_data('month')">This Month</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " :class="selected_filter_type=='year'?'active':''" href="#" @click="fetch_chart_data('year')">This Year</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="selected_filter_type=='today'?'custom':''" href="#" data-toggle="modal" data-target="#myModal1">Custom</a>

                        </li>



                    </ul>
                </div>
            </div>

        <!--tabs-->
        <div class="col-12 mt-5">
            <div class="  row">
                <div  :class="agency?'col-md-2 mr-5 ml-5':'col-md-3'" class="  text-left " >
                    <div class="data_box2 bg-danger text-white   ">
                        <h3 class="mt-2">Group Created</h3>

                        <h2 class="f-3 font-weight-bolder" ref="created_group">0</h2>

                    </div>

                </div>
                <div :class="agency?'col-md-2 mr-5':'col-md-3'" class="   text-left " >
                    <div class="data_box2 bg-secondary text-white">
                        <h3 class="mt-2">TMs Served</h3>

                        <h2 class="f-3 font-weight-bolder">{{tms}}</h2>

                    </div>

                </div>
                <div :class="agency?'col-md-2 mr-5':'col-md-3'" class="   text-left " >
                    <div class="data_box2 bg-warning text-white   ">
                        <h3 class="mt-2">Customers Served</h3>

                        <h2 class="f-3 font-weight-bolder">{{pax}}</h2>

                    </div>

                </div>
                <div :class="agency?'col-md-2 mr-5':'col-md-3'" class="   text-left " >
                    <div class="data_box2 bg-primary text-white   ">
                        <h3 class="mt-2">Apps Downloaded</h3>

                        <h2 class="f-3 font-weight-bolder">{{downloads}}</h2>

                    </div>

                </div>
                <div v-if="agency" class="col-md-2   text-left " >
                    <div class="data_box2 bg-success text-white   ">
                        <h3 class="mt-2">Agents Online</h3>

                        <h2 class="f-3 font-weight-bolder">{{online}}</h2>

                    </div>

                </div>



            </div>

        </div>

        <!--Agents Select Option-->
        <div class="container-fluid" v-if="agency">
            <div class="row">
                <div class="col-lg-3 offset-9">
                    <div class="aselect " :data-value="value" :data-list="agentslist">
                        <div class="selector" @click="toggle('agent')">
                            <div class="label">
                                <span>{{value }}</span>

                            </div>
<!--                            <div class="label" v-else>-->
<!--                                <span>{{posts.length>0?value:'No Data Available...' }}</span>-->

<!--                            </div>-->
                            <div class="arrow" :class="{ expanded : visible }"></div>
                            <div :class="{ hidden : !visible, visible }">
                                <ul class="listing">
                                    <li
                                        :class="{ current : item.name === value }"
                                        v-for="item in agentslist"
                                        @click="select(item)">
                                        {{ item.name }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       <!--Active Groups -->
       <div class="col-12 ">
        <h3 class="ml-3 " :class="agency?'':'mt-3'">Active Group</h3>
        <table class="table table-striped  bg-white ml-2 mt-3 rounded "  >
            <thead class="thead">
            <tr class="text-muted ">
                <th>Group Name</th>
                <th>Ref. No</th>
                <th>Assigned Members</th>
                <th>Tour Duration</th>
                <th>Group Size</th>
                <th>Downloads</th>
                <th>Feedback</th>
            </tr>
            </thead>
            <tbody v-if="displayedPosts.length>0">
            <tr v-for="post in displayedPosts" class="f-1-3" >
                <td>{{post.group_name!=null?post.group_name:post.tour_name}}</td>
                <td>{{post.booking_id}}</td>
                <td @click="selectedmem.push(post)" data-toggle="modal" data-target="#myModal2">
                    <span>
                    {{post.assigned_mem.length>0?get_username(post.assigned_mem,1):'' }}
                    </span>
                    <span v-if="post.assigned_mem.length>1">
                        <b class="text-primary cursor">+ {{post.assigned_mem.length-1}} more</b>
                    </span>

                </td>
                <td>{{post.tour_duration}}</td>
                <td>{{post.bookings}}</td>
                <td>{{post.logins}}</td>
                <td> {{post.overall_feedback==0?'No Feedback':post.overall_feedback}} </td>
            </tr>
            </tbody>

        </table>
        <h3 class="text-center"   v-if="displayedPosts.length==0">No Data Available</h3>
        <nav aria-label="Page navigation example" style="float:right;" >
            <ul class="pagination mt-0">
                <li class="page-item">
                    <button type="button" class="page-link" v-if="page != 1" @click="page--"> &lt;&lt; </button>
                </li>

                <li class="page-item">
                    <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> >> </button>
                </li>
            </ul>
        </nav>
    </div>

        <!--Tour Manager -->
        <div class="col-12 " style="margin-top: 30px;">
            <h3 class="ml-1 " :class="agency?'':''">Tour Manager</h3>
            <table class="table table-striped  bg-white   rounded "  >
                <thead class="thead">
                <tr class="text-muted ">
                    <th>Tour Manager</th>
                    <th>Group Name</th>
                    <th>Agent Name</th>
                    <th>Tour Duration</th>
                    <th>Approval Status</th>
                    <th>Net Balance</th>

                </tr>
                </thead>
                <tbody>
                <tr v-for="post in displayedTms" class="f-1-3" >
<!--                <tr v-for="post in 5" class="f-1-3" >-->
                    <td>
                        {{post.name}}
                    </td>
                    <td>
                       {{post.tour}}
                    </td>
                    <td>
                        {{post.agent}}
                    </td>
                    <td>
                        {{post.date}}
                    </td>
                    <td>
                        {{post.status.msg}}
                    </td>
                    <td>
                        <i class="fa fa-eye cursor text-primary" @click="get_balance(post.grpId,post.tmId)" data-toggle="modal" data-target="#myModal3"> View Balance</i>
                    </td>
                </tr>
                </tbody>
            </table>
            <h3 class="text-center"   v-if="displayedTms.length==0">No Data Available</h3>
            <nav aria-label="Page navigation example" style="float:right;" >
                <ul class="pagination mt-0">
                    <li class="page-item">
                        <button type="button" class="page-link" v-if="tm_page != 1" @click="tm_page--">  &lt;&lt;  </button>
                    </li>

                    <li class="page-item">
                        <button type="button" @click="tm_page++" v-if="tm_page < tm_pages.length" class="page-link"> >> </button>
                    </li>
                </ul>
            </nav>
        </div>


       <!--Bar Charts-->
        <div class="col-md-12 ">
            <div class="row mt-5">
                <div id="chart"  class="chart col-lg-6">
                    <h3>Total Passengers Count</h3>
                    <apexchart
                        ref="pax_chart"
                        type="bar"
                        height="350"
                        :options="chartOptions"
                        :series="series_pax"
                     />

                </div>
                <div id="chart"  class="chart col-lg-6">

                    <h3>Total Tour Manager Count</h3>
                    <apexchart
                        ref="tm_chart"
                        type="bar"
                        height="350"
                        :options="chartOptions"
                        :series="series_tm"
                     />
                </div>



            </div>
        </div>


        <!-- group overview -->

        <div class="container">

            <div class="row">

                <div class="col-lg-6">
                    <div class="aselect" style="width:100%;margin-top: 0px;" :data-value="value2" :data-list="grp_data">
                        <div class="selector " :class="posts.length>0?'cursor':''" @click="toggle('group')">
                            <div class="label">
                                <span>{{posts.length>0?value2:'No Groups Data Available....'}}</span>
                            </div>
                            <div class="arrow" :class="{ expanded : visible2 }"></div>
                            <div :class="{ hidden : !visible2, visible2 }">
                                <ul class="listing">
                                    <li
                                        :class="{ current : item.group_name!=null?item.group_name === value:item.tour_name === value }"
                                        v-for="item in posts"
                                        @click="select_group(item)">
                                        {{ item.group_name!=null?item.group_name: item.tour_name}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div  class="col-md-3   text-left " >
                    <div class="data_box2 bg-secondary bg-white text-dark">
                        <h3 class="mt-2">Primary Member</h3>

                        <h2 class="f-3 font-weight-bolder" ref="group_primary_member">0</h2>

                    </div>

                </div>
                <div  class="col-md-3   text-left " >
                    <div class="data_box2 bg-secondary bg-white text-dark">
                        <h3 class="mt-2">Secondary Member</h3>

                        <h2 class="f-3 font-weight-bolder" ref="group_secondary_member">0</h2>

                    </div>

                </div>
                <div  class="col-md-3   text-left " >
                    <div class="data_box2 bg-secondary bg-white text-dark">
                        <h3 class="mt-2">App Download</h3>

                        <h2 class="f-3 font-weight-bolder" ref="group_app_download">0</h2>

                    </div>

                </div>
                <div  class="col-md-3   text-left " >
                    <div class="data_box2 bg-secondary bg-white text-dark">
                        <h3 class="mt-2">Tour Manager</h3>

                        <h2 class="f-3 font-weight-bolder" ref="group_tm">0</h2>

                    </div>

                </div>
            </div>

            <div class="row mt-5">
                <h3 class="mb-3">Document Pendency</h3>
                <div class="col-md-12" style="background-color:#dfe8f9 !important">
                    <div class="row p-3">
                        <div class="col-md-2 p-3">
                             <h2><b class="text-secondary">Total Documents</b></h2>
                             <h4><b class="text-dark">Received</b></h4>
                             <h1 class="text-dark f-3" ref="total_docs"></h1>
                        </div>
                        <div class="col-md-10">
                            <div class="scrolling-wrapper-flexbox" >
                                <div class="card text-center shadow" v-for="(val,key,index) in all_docs" >
                                    <h3>{{ key }} </h3>

                                    <h1 style="font-size:3.5rem;">{{val.value}}/{{ totalBook }}</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



            <div class="row mt-5 " >

            <div class="col-12">
                <div class="row">

                    <div class="col-md-3 text-center" >
                        <div class="data_box col-md-8 offset-2 bg-white">
                            <img src="./../dashboard_resources/visa2.png"  class="data_box_images">
                            <h4 class=" font-weight-bolder text-muted mt-2">Visa Issued</h4>

                            <h2 class="f-3 font-weight-bolder"  ref="group_app_visa">0</h2>


                        </div>

                    </div>
                    <div class="col-md-3 text-center" >
                        <div class="data_box col-md-8 mt-2 offset-2 bg-white">
                            <img src="./../dashboard_resources/flight.png"  class="data_box_images">
                            <h4 class="text-muted mt-2 font-weight-bolder">Airline Tickets</h4>
                            <h2 class="f-3 font-weight-bolder" ref="group_app_ticket">0</h2>

                        </div>
                    </div>
                    <div class="col-md-3 text-center" >
                        <div class="data_box col-md-8  offset-2 bg-white">
                            <img src="./../dashboard_resources/dollar.png"  class="data_box_images">
                            <h4 class="text-muted mt-2 font-weight-bolder">Payment Received</h4>
                            <h2 class="f-3 font-weight-bolder" ref="group_app_payment">0</h2>

                        </div>
                    </div>
                    <div class="col-md-3 text-center" >
                        <div class="data_box col-md-8  offset-2 bg-white">
                            <img src="./../dashboard_resources/travel_insu.png"  class="data_box_images">
                            <h4 class="text-muted mt-2 font-weight-bolder">Travel Insurance</h4>
                            <h2 class="f-3 font-weight-bolder" ref="group_app_insu">0</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>

            <div class="row ml-5">
           <div class="col-12">
               <div class="row">
                   <div class="col-lg-12">

                       <h3 class="mb-3 mt-5">Scheduled Departures</h3>
                       <div class="p-2  bg-w">
                       <full-calendar :events="fcEvents" locale="en"></full-calendar>
                       </div>
                   </div>
               </div>
            </div>
 </div>



            <!--        Modals-->
            <div class="container">
                <div class="modal fade" id="myModal1">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Select Custom Date</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <date-picker
                                    class="text-dark"
                                    :config="$root.dpconfigDate"
                                    name="driver_pick_up_time"
                                    v-model="custom_date"
                                >
                                </date-picker>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" @click="fetch_chart_data('custom')" data-dismiss="modal">Set Date</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--        Modals-->
            <div class="container">
                <div class="modal fade" id="myModal2">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content" style="border-radius: 10px">
                            <div class="modal-header">

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="selectedmem=[]">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <table class="table">
                                    <thead>
                                    <tr class="text-secondary ">

                                        <th scope="col"><h3>Assigned Member Name</h3></th>
                                        <th scope="col"><h3>Role</h3></th>

                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr v-for="member in assigned_members">

                                        <td><h4>{{member.name}}</h4></td>
                                        <td><h4>{{member.role}}</h4></td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">

                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="selectedmem=[]">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Balance Modals-->
             <div class="container">
        <div class="modal fade" id="myModal3">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style="border-radius: 10px">
                    <div class="modal-header">
                        <h2>Current Balance </h2>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="balance={}">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <table class="table">
                            <thead>
                            <tr class="text-secondary ">

                                <th scope="col"><h3>Currency</h3></th>
                                <th scope="col">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-6">Cash Balance</div>
                                            <div class="col-md-6">Card Balance</div>
                                        </div>
                                    </div>

                                </th>

                            </tr>
                            </thead>
                            <tbody>


                            <tr v-for="(bal,bal_cur,index) in balance">

                                <td>{{bal_cur}}</td>

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

                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="balance={}">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
</template>


<!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script> -->

<script>

    export default {

        props: ['chartdata', 'options'],
        components: {
            'full-calendar': require('vue-fullcalendar'),
            apexchart: VueApexCharts

        },

        data() {
            return {
            loading:true,
            chartData: [],
            fcEvents :  [],
            custom_date:"",
            live_group:0,
             selected_filter_type:'today',
             agency:false,
             agency_agents:[],
             sale_detail:[],
             sale_detail_div:false,

              platform:'travelexic',
              user_id:'',
              cal_data:[],
              grp_data:[],
              selected_grp_data:[],
              value: 'Agent Wise Group',
              value2: 'Select Group',
              agentslist: [],
              visible: false,
              visible2: false,
              posts : [],
              tm_posts : [],
              page: 1,
              tm_page: 1,
              tm_pages: [],
              perPage: 5,
              pages: [],
              tms:0,
              pax:0,
              downloads:0,
              online:0,
              assigned_members:[],
              selectedmem:[],
                series_pax: [],
                series_tm: [],
                chartOptions: {
                    chart: {
                        type: 'bar',
                        height: 350
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '55%',
                            endingShape: 'rounded'
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        curve: "smooth",
                        width: 2,
                        colors: ['transparent']
                    },
                    xaxis: {
                        categories: [],
                    },
                    yaxis: {
                        title: {
                            text: ''
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    noData: {
                    text: "No Data Available......",
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                // return "$ " + val + " thousands"
                                return val
                            }
                        }
                    }
                },
                all_docs:[],
                totalBook:0,
                balance:{}




            }

        },
        mounted(){

            this.loading=false;
            this.platform= document.querySelector("meta[name='platform']").getAttribute('content')

            this.user_id= JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content'))
            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="lms_agent"){
                var agency_id= JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id

                axios.post('/api/v1/users_of_agency', {
                    agency_id:JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id,
                    agency_name:JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).name,
                    flag:2
                }).then(res=>{
                    this.agentslist=res.data



                });
            }
            else if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency" ||
                document.querySelector("meta[name='user-role']").getAttribute('content')==="Administrator (can create other users)" ){


                var agency_id= JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content'))
                this.agency=true;
            }

            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency"){

                axios.post('/api/v1/users_of_agency', {
                    agency_id:document.querySelector("meta[name='user-id']").getAttribute('content'),
                    agency_name:document.querySelector("meta[name='user-name']").getAttribute('content'),
                    flag:3
                }).then(res=>{
                    this.agentslist=res.data.agents
                    this.online=res.data.online


                });
            }


            axios.get('/api/v1/user/license/' + agency_id)
                .then(response => {
                    this.license=JSON.parse(response.data.data[0].meta_value);
                    if(this.license.lead_mng_sys && this.license.data_analysis){
                        this.$router.push({name: 'dashboard.index'})
                    }
                    else {
                        this.msg="You are not authorised for this action. Please contact Administrator."
                    }
                })


            //fetching Dashboard Data
            axios.post('/api/v1/DashboardDataMice',{
                'user_id':JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content')),
                'type':this.agency?'agency':'agent',
                'user_name':document.querySelector("meta[name='user-name']").getAttribute('content'),
                'selected_filter':this.selected_filter_type,
                'custom_date':this.custom_date,
            }).then(response => {

                    if(response.data.status){
                        this.posts=response.data.data.groups;
                            this.grp_data=response.data.data.groups;
                            this.downloads=response.data.data.downloads;
                            this.pax=response.data.data.pax;
                            this.tms=response.data.data.tms;
                            this.tm_posts=response.data.data.tm_data;
                            this.loading=false;
                            this.$refs.created_group.textContent=response.data.data.groups_created;


                            this.$refs.pax_chart.updateSeries([{
                                name: 'Pax',
                                data: response.data.data.pax_series
                            }])

                            this.$refs.tm_chart.updateSeries([{
                                name: 'TMs',
                                data: response.data.data.tm_series
                            }])

                            this.$refs.pax_chart.updateOptions({
                                    xaxis: {
                                        categories:  response.data.data.categories
                                    }
                            })
                            this.$refs.tm_chart.updateOptions({
                                    xaxis: {
                                        categories:  response.data.data.categories
                                    }
                            })

                    }
            })




        },
        watch: {
            posts () {
                this.setPages();
            },
            tm_posts () {
                this.setTmPages();
            },
            "selectedmem":function () {
                if(this.selectedmem.length>0 && this.selectedmem!='undefined'){
                    let arr=[];
                    this.assigned_members=[];
                    this.assigned_members.push({'name':this.get_username(this.selectedmem[0].agent_id,2),'id':this.selectedmem[0].agent_id,'role':'Handler (Primary)'});
                    arr.push(this.selectedmem[0].agent_id);

                    if(this.selectedmem[0].assigned_mem.length>0){
                        this.selectedmem[0].assigned_mem.forEach((assigned_member)=>{

                            arr.push(assigned_member.id);
                            this.assigned_members.push({'name':this.get_username(assigned_member.id,2),'id':assigned_member.id,'role':assigned_member.title});
                        })
                    }

                    let levels=JSON.parse(this.selectedmem[0].approvers[0].meta_value);

                    let flag=0;
                    this.assigned_members.forEach((assigned)=>{
                        if(levels.L1!=null && levels.L1==assigned.id){


                            this.assigned_members[flag].role+=', Approver L1';

                        }
                        if(levels.L2!=null && levels.L2==assigned.id){

                            this.assigned_members[flag].role+=', Approver L2';

                        }
                        if(levels.L3!=null && levels.L3==assigned.id){

                            this.assigned_members[flag].role+=', Approver L3';

                        }
                        if(levels.L4!=null && levels.L4==assigned.id){

                            this.assigned_members[flag].role+=', Approver L4';

                        }
                        flag++;
                    })



                }
            },
            "grp_data":function(){
                if(this.grp_data.length>0){
                    this.grp_data.forEach((data)=>{
                        let booking_id=data.booking_id;
                        this.fcEvents.push({
                            title : data.group_name!=null?data.group_name: data.tour_name,
                            start : data.cal_date,
                            end : data.cal_date,
                            cssClass: 'calender',

                            YOUR_DATA : {booking_id}
                            //       title : 'Sunny Out of Office',
                            // start : '2016-08-25',
                            // '
                        });
                    })
                }
            }

        },
        computed: {
            displayedPosts () {
                return this.paginate(this.posts,1);
            },
            displayedTms () {
                return this.paginate(this.tm_posts,2);
            }
        },
        methods: {
            toggle(param) {

                    if(param=='agent'){
                        this.visible = !this.visible;
                    }

                    if(param=='group' && this.posts.length>0){
                        this.visible2 = !this.visible2;
                    }



            },
            select(option) {

                this.value = option.name;
                let return_arr=[];
                this.visible = !this.visible;
                this.posts= this.grp_data.filter(post => {
                    return post.agent_id==option.id
                })
                this.page=1;
                this.setPages();
                this.setTmPages();
                this.value2='Select Group';
                this.$refs.group_primary_member.textContent=0;
                this.$refs.group_secondary_member.textContent=0;
                this.$refs.group_app_download.textContent=0;
                this.$refs.group_tm.textContent=0;



            },
            select_group(option) {


                this.loading=true;
                this.value2 = option.group_name!=null?option.group_name: option.tour_name;

                this.$refs.group_primary_member.textContent=option.bookings-option.bookfam;
                this.$refs.group_secondary_member.textContent=option.bookfam;
                this.$refs.group_app_download.textContent=option.logins;
                this.$refs.group_tm.textContent=JSON.parse(option.tm_data[0].meta_value).length;

                axios.post('/api/webservices/member_docs',{
                        'id':option['id'],
                        'source':'dashboard'
                })
                .then(response => {
                    this.loading=false;
                    if(response.data!='no_data'){

                            this.$refs.group_app_insu.textContent=response.data.insurance_count;
                            this.$refs.group_app_ticket.textContent=response.data.ticket_count;
                            this.$refs.group_app_visa.textContent=response.data.visa_count;
                            this.$refs.group_app_payment.textContent=response.data.payment;


                            this.$refs.total_docs.textContent=response.data.total_doc_rec+'/'+response.data.total_doc_req;
                            this.all_docs=_.clone(response.data.documents)

                            this.totalBook=option.bookings;
                    }
                    else{
                        this.$refs.group_app_insu.textContent=0;
                        this.$refs.group_app_ticket.textContent=0;
                        this.$refs.group_app_visa.textContent=0;
                        this.$refs.group_app_payment.textContent=0;
                        this.$refs.group_primary_member.textContent=0;
                        this.$refs.group_secondary_member.textContent=0;
                        this.$refs.group_app_download.textContent=0;
                        this.$refs.group_tm.textContent=0;
                        this.all_docs=[];



                        this.$refs.total_docs.textContent='';
                        this.totalBook=0;
                    }

                })

                // axios.post('/api/v1/MiceDocsData/'+option['id'])
                // .then(response => {
                //     console.log(response.data);
                // })
            },
            setPages () {
                this.pages=[];
                let numberOfPages = Math.ceil(this.posts.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            },
            setTmPages () {
                this.tm_pages=[];
                let numberOfPages = Math.ceil(this.tm_posts.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.tm_pages.push(index);
                }
            },
            paginate (posts,loc) {
                if(loc==1){
                    let page = this.page;
                    let perPage = this.perPage;
                    let from = (page * perPage) - perPage;
                    let to = (page * perPage);
                    return  posts.slice(from, to);
                }
                else if(loc==2){
                    let page = this.tm_page;
                    let perPage = this.perPage;
                    let from = (page * perPage) - perPage;
                    let to = (page * perPage);
                    return  posts.slice(from, to);
                }

            },
            get_username(user,loc){


                if(loc==1){
                    if(user.length>0){
                        let  data =  this.agentslist.filter(value => value.id==user[0].id);


                        return data[0].name;
                    }
                }
                if(loc==2){

                        let  data =  this.agentslist.filter(value => value.id==user);


                        return data[0].name;

                }

            },
            fetch_chart_data(type){
              try{
                   if(this.selected_filter_type==type && type!='custom'){
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'This Filter Already Applied !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                   }
                   else{
                        this.selected_filter_type=type;


                        this.loading=true;
                axios.post('/api/v1/DashboardDataMice',{
                'user_id':JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content')),
                'type':this.agency?'agency':'agent',
                'user_name':document.querySelector("meta[name='user-name']").getAttribute('content'),
                'selected_filter':this.selected_filter_type,
                'custom_date':this.custom_date,
                }).then(response => {

                        if(response.data.status){
                            this.posts=response.data.data.groups;
                            this.grp_data=response.data.data.groups;
                            this.downloads=response.data.data.downloads;
                            this.pax=response.data.data.pax;
                            this.tms=response.data.data.tms;
                            this.tm_posts=response.data.data.tm_data;
                            this.loading=false;
                            this.page=1;
                            this.tm_page=1;
                            this.$refs.created_group.textContent=response.data.data.groups_created;
                            this.value= 'Agent Wise Group',
                            this.value2= 'Select Group';


                            this.$refs.pax_chart.updateSeries([{
                                name: 'Pax',
                                data: response.data.data.pax_series
                            }])

                            this.$refs.tm_chart.updateSeries([{
                                name: 'TMs',
                                data: response.data.data.tm_series
                            }])

                            this.$refs.pax_chart.updateOptions({
                                    xaxis: {
                                        categories:  response.data.data.categories
                                    }
                            })
                            this.$refs.tm_chart.updateOptions({
                                    xaxis: {
                                        categories:  response.data.data.categories
                                    }
                            })


                            this.$refs.group_app_insu.textContent=0;
                            this.$refs.group_app_ticket.textContent=0;
                            this.$refs.group_app_visa.textContent=0;
                            this.$refs.group_app_payment.textContent=0;
                            this.$refs.group_primary_member.textContent=0;
                            this.$refs.group_secondary_member.textContent=0;
                            this.$refs.group_app_download.textContent=0;
                            this.$refs.group_tm.textContent=0;
                            this.all_docs=[];
                            this.$refs.total_docs.textContent='';
                            this.totalBook=0;








                            // console.log(this.$refs.pax_chart);

                            // this.chartOptions.xaxis.categories=['Today'];
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
            get_balance(grpId,tmId){
                axios.get('/api/v1/LiveBalance/'+grpId+'/'+tmId)
                    .then(response => {
                            if(response.data.status){
                                if(Object.keys(response.data.data).length!=0){

                                    this.balance=response.data.data

                                }
                                else{
                                    this.balance= {}
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

                        // this.errors.push("Error while fetching");
                        // this.errormodal=true;
                    })
            }

        }




}

</script>
<style scoped>
    .comp-full-calendar {
        padding: 20px;
        background: #fff;
        max-width: 1190px !important;
        margin: 0 auto;
    }
    li a{color:grey;}
    li a.active{color:dodgerblue}
    .pointer_for_div{
        cursor: pointer;
    }
    .dot {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        display: inline-block;
    }
    .data_box2{

        padding: 1px 5px 5px 10px !important;
        border-radius: 10px;
    }
    .data_box{

        height: 125px;
        border-radius: 10px;
        text-align: left;
    }
    .data_box_images{
        height: 45px;
        width: auto;
        margin-top: 10px;
    }
    .listing{
        height:200px;
        overflow: auto;
    }
</style>
<style scoped>
    #custom_date_picker
    {
        width: 80%;
        text-align: center;
        margin-right: 6px;
    }
    #magnifier{
        color: #0056b3;
        margin-top: 5px;
    }
    .event-box{
        text-align: center !important;
    }
    #chart {
        max-width: 544px;
        margin: 35px auto;
    }
    .small, small {
        font-weight: 700 !important;
    }
    .add_mem{

        padding: 4px 7px 4px 7px;
        border-radius: 15px;
        background: gray;
        color: white;
        font-weight: bolder;
    }
    .calender{


        font-size: 16px !important;
        color: white ;
        font-weight: bold !important;
        padding: 0px !important;
        height: 22px !important;

    }
    .full-calendar-body .dates .dates-events .events-week .events-day {
        cursor: pointer !important;
        flex: 1;
        min-height: 98px !important;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .shortcutLinkList {
        background: #fff;
        box-shadow: 0 5px 10px rgba(0,0,0,.2);
        border-radius: 8px;
        margin-bottom: 0;
        display: none !important;
    }
    .shortcutLinkSec{
        display: none !important;
    }

</style>
<style scoped>

    .aselect {
        width: 280px;
        margin: 20px auto;
    }
    .aselect .selector {
        border: 1px solid gainsboro;
        background: #F8F8F8;
        position: relative;
        z-index: 1;
    }
    .aselect .selector .arrow {
        position: absolute;
        right: 10px;
        top: 40%;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 10px solid #888;
        transform: rotateZ(0deg) translateY(0px);
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
    }
    .aselect .selector .expanded {
        transform: rotateZ(180deg) translateY(2px);
    }
    .aselect .selector .label {
        display: block;
        padding: 10px !important;
        font-size: 16px;
        color: #888;
    }
    .aselect ul {
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: 16px;
        border: 1px solid gainsboro;
        position: absolute;
        z-index: 1;
        background: #fff;
    }
    .aselect li {
        padding: 12px;
        color: #666;
    }
    .aselect li:hover {
        color: white;
        background: #007BFF;
    }
    .aselect .current {
        background: #eaeaea;
    }
    .aselect .hidden {
        visibility: hidden;
    }
    .aselect .visible {
        visibility: visible;
    }

    button.page-link {
        display: inline-block;
    }
    button.page-link {
        font-size: 20px;
        color: #29b3ed;
        font-weight: 500;
    }
    .rounded{
        border-radius:15px !important;
    }
    th{
        font-weight:inherit !important;
        font-size:16px !important;
    }
    .chart{
        width: 100% !important;
    }
</style>
<style scoped>
    .scrolling-wrapper-flexbox {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
    }
    .scrolling-wrapper-flexbox .card {
        flex: 0 0 auto;
        height: 100px;
        width: 150px;
        background-color: #fff;
        color: black;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
    }

</style>
