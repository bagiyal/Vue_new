<template>


<div class="container">
    <section class="content-header">
        <task-maker :mode="'full'" style="    position: relative;
    top: -123px;
    left: 4%;"></task-maker>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
    </section>
    <task-maker :mode="'full'"></task-maker>
        <div class="row ml-5">
            <div class="col-lg-12" ><h1 style="visibility: hidden;" class="mt-5 text-dark">Analytics Dashboard</h1></div>
        </div>
        <div class="row ml-5">
            <div class="col-lg-6">
                <select class="form-control" style="visibility: hidden;">
                    <option>Total Leads</option>
                    <option>Total Confirmations</option>
                    <option> Total Sale</option>
                    <option>Avg TAT</option>
                    <option>Conversion Rate</option>
                    <option>Unassigned Leads</option>
                </select>
            </div>
            <div class="col-lg-6 f-1-8">
                <ul class="nav textcolor text-bold">
                    <li class="nav-item">
                        <!-- <a class="nav-link " :class="{'active' : today}" href="#" @click="today_fun,today=true,yesterday=false,month=false,year=false,custom=false,custom_date_div=false">Today</a> -->
                        <a class="nav-link " :class="{'active' : today}" href="#" @click="today_fun">Today</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{'active' : yesterday}" href="#" @click="last_day_fun">Last Day</a>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{'active' : month}" href="#" @click="month_fun">This Month</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " :class="{'active' : year}" href="#" @click="year_fun">This Year</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{'active' : custom}" href="#" @click="custom_date_div=true">Custom</a>

                    </li>
                  <date-picker v-if="custom_date_div"
                      class="dateinput"
                      :value="custom_date"
                      :config="$root.dpconfigDate"

                      id="custom_date_picker"
                      name="driver_pickup_date_time"
                      @dp-change="updatedriver_pick_up_time"

                  >
                  </date-picker><i class="fa fa-search" v-if="custom_date_div" id="magnifier" aria-hidden="true" @click="custom_select_date"></i>
                </ul>
            </div>
        </div>
    <div class="container">
        <div class="modal" id="myModal1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal">&times;</button><br>
                        <div class="container-fluid">
                                <!-- {{this.sale_detail}} -->
                                <table class="table table-hover" style="text-align: center;">
                                    <thead>
                                    <tr>

                                        <th>Booking ID</th>
                                        <th>Package Cost</th>
                                        <th>Flight Cost</th>
                                        <th>Markup (Package + Flight)</th>
                                    </tr>
                                    </thead>
                                    <tbody id='sale_tr'>

                                    <tr  v-for="sale in this.sale_detail">
                                        <td class="close" data-dismiss="modal"><router-link :to="{ name: 'bookings.edit',params:{id:sale.id} }" v-if="sale.id" >{{ sale.book_id }}</router-link></td>
                                        <td>{{ sale.price_tour }}</td>
                                        <td>{{ sale.price_flight }}</td>
                                        <td>{{ sale.markup }}</td>


                                    </tr>



                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


        <div class="row ml-5">
            <div class="col-lg-12"><h1 class="mt-5 text-dark">Admin</h1></div>


            <div class="col-2 ml-4 mr-1 text-center bg-light pointer_for_div"  data-toggle="modal" data-target="#myModal1">
                <p class="text-muted f-1-6">Sale</p>
                <h5 class="text-bold f-2">{{this.selling_price_cost}}</h5>
                <img src="./../dashboard_resources/sale.png" class="hw-5">
            </div>
            <div class="col-2 mar-left text-center bg-light">
                <p class="text-muted f-1-6">Itinerary</p>
                <h5 class="text-bold f-2">{{this.Itinerary_length}}</h5>
                <img src="./../dashboard_resources/Itinerary.png" class="hw-5">
            </div>
            <div class="col-2 mar-left text-center bg-light">
                <p class="text-muted f-1-6">Unassign Lead</p>
                <h5 class="text-bold f-2">{{this.lead_unassign_length}}</h5>
                <img src="./../dashboard_resources/UnAssignlead.png" class="hw-5">
            </div>
            <div class="col-2 mar-left text-center bg-light">
                <p class="text-muted f-1-6">Confirmation</p>
                <h5 class="text-bold f-2">{{this.confirmations_iti}}</h5>
                <img src="./../dashboard_resources/confirmation.png" class="hw-5">
            </div>
            <div class="col-2 mar-left text-center bg-light">
                <p class="text-muted f-1-6">Lead</p>
                <h5 class="text-bold f-2">{{this.Lead_length}}</h5>
                <img src="./../dashboard_resources/Lead.png" class="hw-5">
            </div>
        </div>



        <div class="row ml-5">

            <div class="col-4">
                <h1 class="mt-5 text-dark"></h1>
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="text-dark">Today's Queries</h1>
                        <div class="p3 bg-w">
                          <table class="table table-hover">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Sector</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr  v-for="query in this.Query_arr">
                            <td>{{ query.name }}</td>
                            <td>{{ query.tour }}</td>

                            <td><router-link :to="{ name: 'queries.edit',params:{id:query.id} }" v-if="query.id">Open</router-link></td>
                            </tr>



                          </tbody>
                        </table>

                        </div>
                    </div>
                </div>
            </div>



            <div class="col-4">
                <h1 class="mt-5 text-dark"></h1>
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="text-dark">Today's Itinerary</h1>
                        <div class="p-3 bg-w">
                          <table class="table table-hover">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Sector</th>
                              <th>Travel Date</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr  v-for="iti in this.Iti_arr">
                            <td>{{ iti.name }}</td>
                            <td>{{ iti.tour }}</td>
                            <td>{{ iti.time }}</td>

                            <td><router-link :to="{ name: 'bookings.edit',params:{id:iti.id} }" v-if="iti.id">Open</router-link></td>
                            </tr>



                          </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
          <div class="col-4">
              <h1 class="mt-5 text-dark"></h1>
              <div class="row">
                  <div class="col-lg-12">
                      <h1 class="text-dark">Today's Task</h1>
                      <div class="p-2 bg-w">
                      <!-- {{this.tasks_arr}} -->
                      <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Date/Time</th>
                          <th>Name</th>
                          <th>Remark</th>
                          <th>Status</th>
                          </tr>
                      </thead>
                      <tbody id="tbody_task">

                        <tr   v-for="task in this.tasks_arr">
                        <td>{{ task.due_date }}</td>
                        <td>{{ task.name }}</td>
                        <td>{{ task.remark }}</td>
                        <td><i class="fa fa-thumbs-up" style="font-size:24px;color:blue;cursor: pointer;" @click=update_tasks(task.id) v-if="task.id"></i></td>

                        </tr>



                      </tbody>
                    </table>

                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div class="row ml-5">
            <div class="col-lg-12"><h1 class="mt-5 text-dark">Graph</h1></div>
            <div class="col-lg-12">
                <div class="p-2 bg-w">
                    <GChart
                        type="ColumnChart"
                        :data="chartData"
                        :options="chartOptions"
                        :resizeDebounce="500"
                    />

                </div>
            </div>


        </div>



        <div class="row ml-5">
            <div class="col-6">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="mt-5 text-dark">Feedback</h1>
                        <div class="p-2 bg-w">

<!--                                <radar-chart :chart-data="datacollection"></radar-chart>-->
                                <div id="app">
                                    <div id="chart" >
                                        <apexchart type="radar" height="550" :options="chartOptions2" :series="series"></apexchart>
                                    </div>
                                </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <h1 class="mt-5 text-dark"></h1>
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="text-dark">City Wise Departures</h1>
                        <div class="p-2 bg-w">
                          <GChart
                              type="ColumnChart"
                              :data="city_chartData"
                              :options="chartOptions"
                              :resizeDebounce="500"
                          />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ml-5">
            <div class="col"><h1 class="text-dark mt-5">Live Event</h1>  </div>
            <div class="col"> <h1 class="text-right text-dark mt-5"><i class="fa fa-calendar float-right" aria-hidden="true"></i><span class="font-bold">Today</span> </h1></div>
            <div class="col-12"><div style="position: absolute;color: white;width: 20%;margin-left: 5%;height: 100%;text-align: center;font-size: 20px;font-weight: bold;padding-top: 22px;">Live Itinerary<br>{{live_iti}}</div>
            <div style="position: absolute;color: white;width: 20%;margin-left: 36%;height: 100%;text-align: center;font-size: 20px;font-weight: bold;padding-top: 22px;">Live Group Events<br>{{live_group}}</div>
            <div style="position: absolute;color: white;width: 20%;margin-left: 70%;height: 100%;text-align: center;font-size: 20px;font-weight: bold;padding-top: 22px;">Live Queries<br>{{live_query}}</div>

          <img src="./../dashboard_resources/image.png" width="100%">

          </div>

        </div>
        <div class="row ml-5" v-if="agency">
            <div class="col"><h1 class="text-dark mt-5">Agent Count</h1></div><div class="col"><h1 class="text-dark mt-5 text-right font-bold"></h1></div>

        <div class="col-12">
                <div class="p-3 bg-w">
<!-- {{this.agency_agents}} -->
                  <!-- <input type="text" v-model="localsearch"  placeholder="Search">
                  <button @click="updatesearch" class="btn btn-secondary" type="button">
                    <i class="fa fa-search"></i>
                </button>
                <button @click="clearsearch" class="btn btn-secondary" type="button">
                    <i class="fa fa-times-circle"></i>
                </button> -->

              <table class="table table-hover">

            <thead>
                <tr>
                  <th>Name</th>
                  <th>Total Leads</th>
                  <th>Total Confirmations</th>
                  <th>Total Sales</th>
                  <th>Coversation Rate%</th>
                  <th>Avg TAT </th>
                  </tr>
              </thead>




              <tbody v-for="agent in this.agency_agents" id='agency_tr' >

                <tr  v-for="agent2 in agent">

              <td>{{ agent2.agent_name }}</td>
              <td>{{ agent2.leads }}</td>
              <td>{{ agent2.iti }}</td>
              <td>{{ agent2.sale }}</td>
              <td>{{ agent2.conversion_rate }}</td>
              <td>{{ agent2.TAT }}</td>

                </tr>



               </tbody>
            </table>

            </div>

            </div>
        </div>

        <div class="row ml-5">
            <div class="col-12">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="mt-5 text-dark">Scheduled Departures</h1>
                        <div class="p-2  bg-w">
                        <full-calendar :events="fcEvents" locale="en"></full-calendar>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row ml-5">
            <div class="col-12">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="mt-5 text-dark">Covid-19 Status </h1>
                        <div class="p-2  bg-w">
                        <iframe src="https://maps.mapmyindia.com/corona" style="width: 100%; height: 500px;border: none;"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style>
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

.calender{


    font-size: 14px !important;
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
<!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script> -->
<script>
        // Radar Chart

        document.write(
            '<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"><\/script>'
        )
        window.Promise ||
        document.write(
            '<script src="https://cdn.jsdelivr.net/npm/eligrey-classlist-js-polyfill@1.2.20171210/classList.min.js"><\/script>'
        )
        window.Promise ||
        document.write(
            '<script src="https://cdn.jsdelivr.net/npm/findindex_polyfill_mdn"><\/script>'
        )
        // Load Charts and the corechart and barchart packages.
        google.charts.load('current', {'packages':['corechart']});

    // Draw the pie chart and bar chart when Charts is loaded.
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');

        var column_options = {
            width: auto,
            height: auto
        };
        var columnchart = new google.visualization.ColumnChart(document.getElementById('column_div'));
        columnchart.draw(data, column_options);
    }
    // import { mapGetters, mapActions } from 'vuex'
    import { GChart } from 'vue-google-charts'
    import RadarChart from './LineChart.js'
    import BarChart from './bar.js'
    import getmeta from '../../../mixins/getmeta'




    export default {

        props: ['chartdata', 'options'],
        components: {
            GChart,
            apexchart: VueApexCharts,
            RadarChart,
            'full-calendar': require('vue-fullcalendar')

        },
        data() {
            return {
                // Code...
                series: [],

                chartOptions2: {
                    chart: {
                        height: 550,
                        type: 'radar',
                        dropShadow: {
                            enabled: true,
                            blur: 1,
                            left: 1,
                            top: 1
                        }
                    },
                    title: {
                        text: ''
                    },
                    stroke: {
                        width: 2
                    },
                    fill: {
                        opacity: 0.1
                    },
                    markers: {
                        size: 0
                    },
                    xaxis: {
                        categories: ['App', 'Overall', 'Tour Manager', 'Hotel']
                    },

                },
             chartData: [],
            city_chartData: [],
            fcEvents :  [],


            chartOptions: {
                    chart: {
                        title: 'Company Performance',
                        subtitle: 'Sales, Expenses, and Profit:2014-2017',
                    }
                },
            datacollection: null,
            lead_unassign:"",
            lead_unassign_length:"",
            Itinerary:"",
            Itinerary_length:"",
            Lead:"",
            Lead_length:"",
            confirmations_iti:"",
            custom_date:"",
            custom_date_div:false,
            year_chart_lead:0,
            selling_price:"",
            selling_price_cost:"",
            Query:'',
            Query_arr:[],
            Iti_arr:[],
            iti_data:"",
            tasks:"",
            tasks_arr:[],
            task_status:"",
            live_iti:0,
            live_group:0,
            live_query:0,
            today:true,
            yesterday:false,
            month:false,
            year:false,
            custom:false,
            agency:false,
            city_agenda:"",
            agency_agents:[],
            sale_detail:[],
            sale_detail_div:false,
            localsearch:'',
            radar_graph:'',
            loading:true



            }

        },
        mounted(){
            this.loading=false;
            this.fillData();


            // //console.log(this.testing);
        },
        created(){



                var agent_id=document.querySelector("meta[name='user-id']").getAttribute('content');
                var role=document.querySelector("meta[name='user-role']").getAttribute('content');
                if(role=='agency'){
                this.agency=true;
                // tracking_agency_agents_data
                let params = new FormData();
                params.set('agency_id',agent_id);
                params.set('custom','0');
                axios.post('/api/webservices/agent_track_for_agency' , params)
                .then(response => {this.agency_data=response.data
                // //console.log();
                this.agency_agents=[];
              this.agency_agents.push(this.agency_data['today']);
              //   for(var a=0;a<this.agency_data['today'].length;a++){
              //   //console.log(this.agency_data['today'][a]);
              // }
              });
                }
              // City Departures agenda
              let form = new FormData();
              form.set('id',agent_id);
              form.set('role',role);
              axios.post('/api/webservices/city_agenda' , form)
                  .then(response => {this.city_agenda=response.data

                  var today = new Date();
                  var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

                    var today_city_arr=[];
                    var city_counter=0;
                    for(var t=0;t<this.city_agenda.length;t++){
                  // console.log(this.city_agenda[t]['date']);
                  var book = new Date(this.city_agenda[t]['date']);
                    var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

                    // console.log(today_date+"---"+book_date);
                  if(today_date==book_date){
                  city_counter++;

                        // //console.log(this.city_agenda[t]['city']);
                today_city_arr.push(this.city_agenda[t]['city']);

                }

                  }
            // alert(city_counter);

                // //console.log(today_city_arr);
              var today_arr_result=today_city_arr.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
              // var today_arr_result_decode=JSON.stringify(today_arr_result);
            this.city_chartData.push(['City','-'])
          // console.log(today_arr_result);
          var result = _.sortBy(today_arr_result, ['count']);
          var arr_rev=result.reverse();

        var length=0;
          if(arr_rev.length<5){length=arr_rev.length;}else{length=5;}

              for(var r=0;r<length;r++){
                var city_data=JSON.stringify(arr_rev[r]);
                var city_data_json=JSON.parse(city_data);

                  // //console.log(city_data_json['el']+"-"+city_data_json['count']);

                this.city_chartData.push([city_data_json['el'],
                                        city_data_json['count']],)
              }
              if(city_counter===0){
                this.city_chartData.push(['No-Data',0])
                }
                });

                // Radar Chart
            let radar = new FormData();
            radar.set('id',agent_id);
            radar.set('role',role);
            axios.post('/api/webservices/feedback' , radar)
                .then(response => {this.radar_graph=response.data
                    // console.log(this.radar_graph);
                    var today_rad=0;
                 if(response.data.length>0){
                     for(var f=0;f<response.data.length;f++){
                         var today = new Date();
                         var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

                         var book = new Date(response.data[f]['date']);
                         var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

                         if(today_date==book_date){
                             today_rad++;
                             this.series.push({
                                 name: response.data[f]['book_id'],
                                 data: [response.data[f]['App'],
                                        response.data[f]['Trip'],
                                        response.data[f]['Tour_Manager'],
                                        response.data[f]['Hotel']],
                             }, )

                         }


                     }
                     if(today_rad==0){
                         this.series.push({
                             name: 'NO-DATA',
                             data: [0,
                                 0,
                                 0,
                                 0],
                         } )
                     }
                 }
                 else{
                     this.series.push({
                         name: 'NO-DATA',
                         data: [0,
                             0,
                             0,
                             0],
                     } )
                 }

                });




                axios.get('/api/v1/tasks')
                .then(response => {this.tasks=response.data.data
                var today = new Date();
                var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                  // //console.log({{env('APP_URL')}} );
                  var task_count=1;
                  for(var i=0;i<this.tasks.length;i++){
                var book = new Date(this.tasks[i]['due_date']);
                var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
                var status = this.tasks[i]['status'];
                // alert(status)
                if(book_date===today_date && status==0){
                var ref_id=JSON.parse(this.tasks[i]['ref_id'])['booking_id'];
                var name=ref_id.split('|')[1];
                if(task_count<=5){
                var myArray = {due_date: this.tasks[i]['due_date'], remark: this.tasks[i]['remark'] , id: this.tasks[i]['id'],name: name};
                this.tasks_arr.push(myArray);
                // //console.log(this.tasks_arr);
                task_count++;
                }

                }
              //   book_date='';
            }
            if(this.tasks_arr.length===0){
            var myArray = {};
            this.tasks_arr.push(myArray);
            }
                })

                axios.get('/api/v1/bookings')
              .then(response => {this.iti_data=response.data.data
              var today = new Date();
              var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();




            var iti_count=1;
            var live_iti=0;
            for(var i=0;i<this.iti_data.length;i++){
              var book = new Date(this.iti_data[i]['created_at']);
              var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();


                    var driver_pick = new Date(this.iti_data[i]['driver_pick_up_time']);
                    var driver_pick_date = driver_pick.getFullYear()+'-'+(driver_pick.getMonth()+1)+'-'+driver_pick.getDate();
                      // alert(driver_pick_date);
                      var tour_loc=JSON.parse(this.iti_data[i]['tour_location']);
                      var length_tour=JSON.parse(this.iti_data[i]['tour_location']).length;
                      // //console.log(tour_loc);
                      var total_tour_days= parseInt("0");
                      for(var j=0;j<length_tour;j++){
                      var tour_days= parseInt(tour_loc[j]['days']);
                      total_tour_days=total_tour_days+tour_days;
                      // //console.log(typeof total_tour_days );
                      }
                      var numberOfDaysToAdd = total_tour_days+1;
                      driver_pick.setDate(driver_pick.getDate() + numberOfDaysToAdd);
                      var tour_end = driver_pick.getFullYear()+'-'+(driver_pick.getMonth() + 1)+'-'+driver_pick.getDate();
                      var pickup=Math.floor(new Date(this.iti_data[i]['driver_pick_up_time']) / 1000);
                      var current= Math.floor(new Date() / 1000);
                      var tour_end=Math.floor(new Date(tour_end) / 1000);

                      if(pickup<=current && current<=tour_end){
                        // //console.log(driver_pick_date+' '+total_tour_days+' '+tour_end );
                        // //console.log(this.iti_data[i]['booking_id']);
                      live_iti++;
                      }

                  this.live_iti=live_iti;

          if(book_date===today_date){
          if(iti_count<=5){
            iti_count++;
            var myArray = {id: this.iti_data[i]['id'], name: this.iti_data[i]['full_name'], tour: this.iti_data[i]['tour_name'],
                            time:this.iti_data[i]['driver_pick_up_time']};


            this.Iti_arr.push(myArray)
          }

          }
          book_date='';
          }
          if(this.Iti_arr.length===0){
          var myArray = {};
          this.Iti_arr.push(myArray);
          }
          })

          axios.get('/api/v1/queries')
                .then(response => {this.Query=response.data.data
            // //console.log(this.Query);
            var today = new Date();
            var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var live_query=0;
            var query_count=1;
            for(var i=0;i<this.Query.length;i++){
            // //console.log(this.Query[i]);

              var book = new Date(this.Query[i]['created_at']);
              var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();


                    var driver_pick = new Date(this.Query[i]['driver_pickup_date_time']);
                    var driver_pick_date = driver_pick.getFullYear()+'-'+(driver_pick.getMonth()+1)+'-'+driver_pick.getDate();
                      // alert(driver_pick_date); tour_location
                    var tour_loc=JSON.parse(this.Query[i]['tour_location']);
                    var length_tour=JSON.parse(this.Query[i]['tour_location']).length;
                    // //console.log(tour_loc);
                    var total_tour_days= parseInt("0");
                    for(var j=0;j<length_tour;j++){
                    var tour_days= parseInt(tour_loc[j]['days']);
                    total_tour_days=total_tour_days+tour_days;
                    }
                          // //console.log(total_tour_days );
                    var numberOfDaysToAdd = total_tour_days+1;
                    driver_pick.setDate(driver_pick.getDate() + numberOfDaysToAdd);
                    var tour_end = driver_pick.getFullYear()+'-'+(driver_pick.getMonth() + 1)+'-'+driver_pick.getDate();
                    // alert(tour_end);
                    var pickup=Math.floor(new Date(this.Query[i]['driver_pickup_date_time']) / 1000);
                    var current= Math.floor(new Date() / 1000);
                    var tour_end=Math.floor(new Date(tour_end) / 1000);
                    if(pickup<=current && current<=tour_end){
                      // //console.log(driver_pick_date+' '+total_tour_days+' '+tour_end );
                      // //console.log(this.Query[i]['booking_id']);
                    live_query++;
                    }

                this.live_query=live_query;




              if(book_date==today_date){


            if(query_count<=5){
                query_count++;
                var myArray = {id: this.Query[i]['id'] , name: this.Query[i]['traveler_name'], tour: this.Query[i]['tour_name']};
                // this.Query_arr.push(['id':this.Query[i]['id'],'name':this.Query[i]['traveller_name'],'tour_name':this.Query[i]['tour_name']])
                // //console.log("/queries/"+this.Query[i]['id']+"/edit");
                this.Query_arr.push(myArray)
                }


              }
            }
            if(this.Query_arr.length===0){
            var myArray = {};
            this.Query_arr.push(myArray);
            }
            })

          let params = new FormData();
          params.set('id',agent_id);
          params.set('role',role);
          axios.post('/api/webservices/fetch_tour_cost' , params)
          .then(response => {this.selling_price=response.data
          // //console.log(this.selling_price);
          var today = new Date();
          var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var today_price=0;

          //
          this.sale_detail=[];
          for(var i=0;i<this.selling_price.length;i++){
            var book = new Date(this.selling_price[i]['date']);
            var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

            if(book_date==today_date){
              if(this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 ){

                var myArray = {book_id: this.selling_price[i]['book_id'] ,
                    id: this.selling_price[i]['id'] ,
                    price_tour: this.selling_price[i]['price_tour'] ,
                                price_flight: this.selling_price[i]['price_flight'],
                                markup: this.selling_price[i]['tour_markup']};
                this.sale_detail.push(myArray)
                  }
            // document.getElementById('sale_tr').innerHTML = '';
            today_price=parseInt(today_price)+parseInt(this.selling_price[i]['price_tour']);

            today_price=parseInt(today_price)+parseInt(this.selling_price[i]['price_flight']);
            today_price=parseInt(today_price)+parseInt(this.selling_price[i]['tour_markup']);

            // tour_markup
            // sale_detail

            }
          book_date='';
          }
          this.selling_price_cost=today_price;

          })

          axios.get('/api/v1/newleadall')
                .then(response => {this.lead_unassign=response.data.data
          // this.lead_unassign_length=this.lead_unassign.length;
            var today = new Date();
            var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var unassign_today_lead=0;
          for(var i=0;i<this.lead_unassign.length;i++){
          var book = new Date(this.lead_unassign[i]['created_at']);
          var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
          // //console.log(book_date);
          if(book_date==today_date){
            unassign_today_lead++;
          }
          book_date='';
          }
          this.lead_unassign_length=unassign_today_lead;

          })

          axios.get('/api/v1/bookings')
        .then(response => {this.Itinerary=response.data.data
        // this.Itinerary_length=this.Itinerary.length;
      // //console.log(this.Itinerary);
        var today = new Date();
        var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var today_iti=0;
          for(var i=0;i<this.Itinerary.length;i++){
        var book = new Date(this.Itinerary[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

//       getmeta(this.Itinerary[i]['id'],'booking','meta_exp_cost')
//     .then(response => {
//
//   this.exp_data=JSON.parse(response);
//     })
//
// //console.log(Json.parse(this.exp_data));


        if(book_date===today_date){
          today_iti++;
      //   var myArray = {id: this.Itinerary[i]['id'], name: this.Itinerary[i]['full_name'], tour: this.Itinerary[i]['tour_name'],
      //                   time:this.Itinerary[i]['driver_pick_up_time']};
      // // Iti_arr
      //   this.Iti_arr.push(myArray)

        }
        book_date='';
        }

        this.Itinerary_length=today_iti;



  var today_iti_confirm=0;
          for(var i=0;i<this.Itinerary.length;i++){
        var book = new Date(this.Itinerary[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==today_date && this.Itinerary[i]['activated']==2){
          today_iti_confirm++;
        }
        book_date='';
        }
        this.confirmations_iti=today_iti_confirm;
})
          axios.get('/api/v1/leads')
        .then(response => {this.Lead=response.data.data
          // this.Lead_length=this.Lead.length;
        var today = new Date();
        var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var today_lead=0;
        for(var i=0;i<this.Lead.length;i++){
        var book = new Date(this.Lead[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date===today_date){
          today_lead++;
        }
        book_date='';
        }
        this.Lead_length=today_lead;

  })



    },
        watch: {
            'Itinerary':function () {
                  this.Lead;


          this.chartData=[];
        this.chartData.push(['Today','Itinerary','Lead'])
      if(this.today){


          var today = new Date();
          var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

          var chart_iti=0;
          for(var i=0;i<this.Itinerary.length;i++){
              var book = new Date(this.Itinerary[i]['created_at']);
              var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
              // //console.log(book_date+'=='+year_month);
              if(book_date===today_date){
                  chart_iti++;

              }
              book_date='';
          }
          // //console.log(chart_iti)

          var chart_lead=0;
          // //console.log(month+''+this.Lead.length);

          for(var i=0;i<this.Lead.length;i++){
              var book = new Date(this.Lead[i]['created_at']);
              var book_date =book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
              // //console.log(book_date+'=='+year_month);
              if(book_date==today_date){
                  chart_lead++;

              }
              book_date='';
          }
          // //console.log(chart_lead);

            this.chartData.push(
                ['Today', chart_iti, chart_lead]
            )




          }

        for(var i=0;i<this.Itinerary.length;i++){
            var book = new Date(this.Itinerary[i]['driver_pick_up_time']);
            var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
            var trav_name=this.Itinerary[i]['full_name'];
            var booking_id=this.Itinerary[i]['booking_id'];
            var phone=this.Itinerary[i]['phone'];
            // //console.log("this"+book_date+"--"+trav_name);
              this.fcEvents.push({
                  title : trav_name,
                  start : book_date,
                  end : book_date,
                  cssClass: 'calender',

                  YOUR_DATA : {booking_id}
        //       title : 'Sunny Out of Office',
      // start : '2016-08-25',
      // '
                });
            book_date='';
        }



            },










            },


    computed:{
    // agent_count() {
    // return this.agency_data.length;
    //   },


    },
    methods: {

      today_fun(){
      this.today=true
      this.yesterday=false
      this.month=false
      this.year=false
      this.custom=false
      this.custom_date_div=false
      if(this.agency){
      this.agency_agents=[];
        this.agency_agents.push(this.agency_data['today']);
    }


// //console.log(this.agency_data['today']);
      var today = new Date();
      var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var today_price=0;
      this.sale_detail=[];
      for(var i=0;i<this.selling_price.length;i++){
      //
        var book = new Date(this.selling_price[i]['date']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==today_date){
        // document.getElementById('sale_tr').innerHTML = '';
        if(this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 ){

          var myArray = {book_id: this.selling_price[i]['book_id'] ,
              id: this.selling_price[i]['id'] ,
              price_tour: this.selling_price[i]['price_tour'] ,
                          price_flight: this.selling_price[i]['price_flight'],
                          markup: this.selling_price[i]['tour_markup']};
          this.sale_detail.push(myArray)
            }
        today_price=parseInt(today_price)+parseInt(this.selling_price[i]['price_tour']);

        today_price=parseInt(today_price)+parseInt(this.selling_price[i]['price_flight']);
        today_price=parseInt(today_price)+parseInt(this.selling_price[i]['tour_markup']);



      }
      book_date='';
      }
      this.selling_price_cost=today_price;



        var today_iti=0;
          for(var i=0;i<this.Itinerary.length;i++){
        var book = new Date(this.Itinerary[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==today_date){
          today_iti++;
        }
        book_date='';
        }
        this.Itinerary_length=today_iti;

        // //console.log(this.Lead[0]['created_at']);
        var today_lead=0;
        for(var i=0;i<this.Lead.length;i++){
        var book = new Date(this.Lead[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==today_date){
          today_lead++;
        }
        book_date='';
        }
        this.Lead_length=today_lead;

        // //console.log(this.lead_unassign[0]['created_at']);
        var unassign_today_lead=0;
        for(var i=0;i<this.lead_unassign.length;i++){
        var book = new Date(this.lead_unassign[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==today_date){
          unassign_today_lead++;
        }
        book_date='';
        }
        this.lead_unassign_length=unassign_today_lead;


        var today_iti_confirm=0;
          for(var i=0;i<this.Itinerary.length;i++){
        var book = new Date(this.Itinerary[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==today_date && this.Itinerary[i]['activated']==2){
          today_iti_confirm++;
        }
        book_date='';
        }
        this.confirmations_iti=today_iti_confirm;
        this.custom_date_div=false;

        //Chart DATA
          this.chartData=[];
        this.chartData.push(['Today','Itinerary','Lead'])

          var today = new Date();
          var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

          var chart_iti=0;
          for(var i=0;i<this.Itinerary.length;i++){
              var book = new Date(this.Itinerary[i]['created_at']);
              var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
              // //console.log(book_date+'=='+year_month);
              if(book_date===today_date){
                  chart_iti++;

              }
              book_date='';
          }
          // //console.log(chart_iti)

          var chart_lead=0;
          // //console.log(month+''+this.Lead.length);

          for(var i=0;i<this.Lead.length;i++){
              var book = new Date(this.Lead[i]['created_at']);
              var book_date =book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
              // //console.log(book_date+'=='+year_month);
              if(book_date==today_date){
                  chart_lead++;

              }
              book_date='';
          }
          // //console.log(chart_lead);

            this.chartData.push(
                ['Today', chart_iti, chart_lead]
            )

            // city data charts
        var today = new Date();
        var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        this.city_chartData=[];
        var custom_city_arr=[];
        var city_counter_custom=0;
        for(var t=0;t<this.city_agenda.length;t++){
         var book = new Date(this.city_agenda[t]['date']);
         var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

          if(today_date==book_date){
          // console.log(this.city_agenda[t]);
          city_counter_custom++;
              // console.log(this.city_agenda[t]['city']);
          custom_city_arr.push(this.city_agenda[t]['city']);
          }
        }
        // console.log(custom_city_arr);
        var today_arr_result=custom_city_arr.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
        // console.log(today_arr_result);
        var result = _.sortBy(today_arr_result, ['count']);
        var arr_rev=result.reverse();
        // console.log(arr_rev)
        var length=0;
        if(arr_rev.length<5){length=arr_rev.length;}else{length=5;}
        this.city_chartData.push(['Today','City'])
        if(city_counter_custom===0){this.city_chartData.push(['No-Data',0])}
        for(var r=0;r<length;r++){
          var city_data=JSON.stringify(arr_rev[r]);
          var city_data_json=JSON.parse(city_data);
          // console.log(city_data_json['el']+"-"+city_data_json['count']);
          this.city_chartData.push([city_data_json['el'],
                              city_data_json['count']],)
        }

        // radar Chart
          this.series=[];
        var radar_today=0;
          if(this.radar_graph.length>0){
              for(var f=0;f<this.radar_graph.length;f++){
                  // console.log(this.radar_graph[f])
                  var today = new Date();
                  var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

                  var book = new Date(this.radar_graph[f]['date']);
                  var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

                  if(today_date==book_date){
                      radar_today++;
                      // console.log(this.radar_graph[f]['book_id']);
                      this.series.push({
                          name: this.radar_graph[f]['book_id'],
                          data: [this.radar_graph[f]['App'],
                              this.radar_graph[f]['Trip'],
                              this.radar_graph[f]['Tour_Manager'],
                              this.radar_graph[f]['Hotel']],
                      }, )

                  }

              }
              if(radar_today==0){
                  this.series.push({
                      name: 'NO-DATA',
                      data: [0,
                          0,
                          0,
                          0],
                  } )
              }
          }
          else{
              this.series.push({
                  name: 'NO-DATA',
                  data: [0,
                      0,
                      0,
                      0],
              } )
          }


      },
      last_day_fun(){

      this.today=false
      this.yesterday=true
      this.month=false
      this.year=false
      this.custom=false
      this.custom_date_div=false
      if(this.agency){
        this.agency_agents=[];
        this.agency_agents.push(this.agency_data['yesterday']);
    }

 // //console.log(this.agency_data['yesterday']);
    var last_day =new Date(new Date().setDate(new Date().getDate() - 1));
    var yesterday_date = last_day.getFullYear()+'-'+(last_day.getMonth()+1)+'-'+last_day.getDate();
      var yesterday_price=0;

      this.sale_detail=[];
      for(var i=0;i<this.selling_price.length;i++){
        var book = new Date(this.selling_price[i]['date']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==yesterday_date){
        if(this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 ){

          var myArray = {book_id: this.selling_price[i]['book_id'] ,
              id: this.selling_price[i]['id'] ,
              price_tour: this.selling_price[i]['price_tour'] ,
                          price_flight: this.selling_price[i]['price_flight'],
                          markup: this.selling_price[i]['tour_markup']};
          this.sale_detail.push(myArray)
            }
        // document.getElementById('sale_tr').innerHTML = '';
        yesterday_price=parseInt(yesterday_price)+parseInt(this.selling_price[i]['price_tour']);

        yesterday_price=parseInt(yesterday_price)+parseInt(this.selling_price[i]['price_flight']);
        yesterday_price=parseInt(yesterday_price)+parseInt(this.selling_price[i]['tour_markup']);


      }
      book_date='';
      }
      this.selling_price_cost=yesterday_price;


        // //console.log(yesterday_date);
        var yesterday_iti=0;
          for(var i=0;i<this.Itinerary.length;i++){
        var book = new Date(this.Itinerary[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==yesterday_date){
          yesterday_iti++;
        }
        book_date='';
        }
        this.Itinerary_length=yesterday_iti;

        var yesterday_iti_confirm=0;
          for(var i=0;i<this.Itinerary.length;i++){
        var book = new Date(this.Itinerary[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==yesterday_date && this.Itinerary[i]['activated']==2){
          yesterday_iti_confirm++;
        }
        book_date='';
        }
        this.confirmations_iti=yesterday_iti_confirm;

        var yesterday_lead=0;
        for(var i=0;i<this.Lead.length;i++){
        var book = new Date(this.Lead[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==yesterday_date){
          yesterday_lead++;
        }
        book_date='';
        }
        this.Lead_length=yesterday_lead;
        // //console.log(this.lead_unassign[0]['created_at']);
        var unassign_yesterday_lead=0;
        for(var i=0;i<this.lead_unassign.length;i++){
        var book = new Date(this.lead_unassign[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==yesterday_date){
          unassign_yesterday_lead++;
        }
        book_date='';
        }
        this.lead_unassign_length=unassign_yesterday_lead;
        this.custom_date_div=false;

        // Chart Data
        this.chartData=[];
      this.chartData.push(['Yesterday','Itinerary','Lead'])



        var last_day =new Date(new Date().setDate(new Date().getDate() - 1));
        var yesterday_date = last_day.getFullYear()+'-'+(last_day.getMonth()+1)+'-'+last_day.getDate();

        var chart_iti=0;
        for(var i=0;i<this.Itinerary.length;i++){
            var book = new Date(this.Itinerary[i]['created_at']);
            var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
            // //console.log(book_date+'=='+year_month);
            if(book_date===yesterday_date){
                chart_iti++;

            }
            book_date='';
        }
        // //console.log(chart_iti)

        var chart_lead=0;
        // //console.log(month+''+this.Lead.length);

        for(var i=0;i<this.Lead.length;i++){
            var book = new Date(this.Lead[i]['created_at']);
            var book_date =book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
            // //console.log(book_date+'=='+year_month);
            if(book_date==yesterday_date){
                chart_lead++;

            }
            book_date='';
        }
        // //console.log(chart_lead);

          this.chartData.push(
              ['Yesterday', chart_iti, chart_lead]
          )

    // //console.log(this.city_agenda);

  // city agenda chart
    this.city_chartData=[];
   var yester_city_arr=[];
    var city_counter_yester=0;
    for(var t=0;t<this.city_agenda.length;t++){
    // //console.log(this.city_agenda[t]['date']);
    var book = new Date(this.city_agenda[t]['date']);
      var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

      // //console.log(today_date+"---"+book_date);
    if(yesterday_date==book_date){
      city_counter_yester++;
          // //console.log(this.city_agenda[t]['city']);
  yester_city_arr.push(this.city_agenda[t]['city']);
  }

    }
  // //console.log(today_city_arr);
var today_arr_result=yester_city_arr.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
// var today_arr_result_decode=JSON.stringify(today_arr_result);
      // alert(city_counter_yester);
var result = _.sortBy(today_arr_result, ['count']);
var arr_rev=result.reverse();
// console.log(arr_rev)
var length=0;
if(arr_rev.length<5){length=arr_rev.length;}else{length=5;}
  this.city_chartData.push(['Yesterday','City'])
  if(city_counter_yester===0){
    this.city_chartData.push(['No-Data',0])
    }
for(var r=0;r<length;r++){
  var city_data=JSON.stringify(arr_rev[r]);
  var city_data_json=JSON.parse(city_data);

    // //console.log(city_data_json['el']+"-"+city_data_json['count']);

  this.city_chartData.push([city_data_json['el'],
                          city_data_json['count']],)
      }

          // radar Chart
          this.series=[];
           var radar_yesterday=0;
          if(this.radar_graph.length>0){
              for(var f=0;f<this.radar_graph.length;f++){
                  // console.log(this.radar_graph[f])
                  var last_day =new Date(new Date().setDate(new Date().getDate() - 1));
                  var yesterday_date = last_day.getFullYear()+'-'+(last_day.getMonth()+1)+'-'+last_day.getDate();

                  var book = new Date(this.radar_graph[f]['date']);
                  var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

                  if(yesterday_date==book_date){
                      radar_yesterday++;
                      // console.log(this.radar_graph[f]['book_id']);
                      this.series.push({
                          name: this.radar_graph[f]['book_id'],
                          data: [this.radar_graph[f]['App'],
                              this.radar_graph[f]['Trip'],
                              this.radar_graph[f]['Tour_Manager'],
                              this.radar_graph[f]['Hotel']],
                      }, )

                  }

              }
              if(radar_yesterday==0){
                  this.series.push({
                      name: 'NO-DATA',
                      data: [0,
                          0,
                          0,
                          0],
                  } )
              }
          }
          else{
              this.series.push({
                  name: 'NO-DATA',
                  data: [0,
                      0,
                      0,
                      0],
              } )
          }




        },
        month_fun(){
        this.today=false
        this.yesterday=false
        this.month=true
        this.year=false
        this.custom=false
        this.custom_date_div=false
        if(this.agency){
          // document.getElementById('agency_tr').innerHTML = '';
              this.agency_agents=[];
              this.agency_agents.push(this.agency_data['month']);
        }

        var this_month =new Date(new Date().setDate(new Date().getDate()));
        var month = this_month.getFullYear()+'-'+(this_month.getMonth()+1);
        // //console.log(month);


        var month_price=0;
        this.sale_detail=[];
        for(var i=0;i<this.selling_price.length;i++){
          var book = new Date(this.selling_price[i]['date']);
          var book_date = book.getFullYear()+'-'+(book.getMonth()+1);

          // //console.log(book_date);
          if(book_date==month){
          if(this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 ){

            var myArray = {book_id: this.selling_price[i]['book_id'] ,
                id: this.selling_price[i]['id'] ,
                price_tour: this.selling_price[i]['price_tour'] ,
                            price_flight: this.selling_price[i]['price_flight'],
                            markup: this.selling_price[i]['tour_markup']};
            this.sale_detail.push(myArray)
              }
          // document.getElementById('sale_tr').innerHTML = '';
          month_price=parseInt(month_price)+parseInt(this.selling_price[i]['price_tour']);

          month_price=parseInt(month_price)+parseInt(this.selling_price[i]['price_flight']);
          month_price=parseInt(month_price)+parseInt(this.selling_price[i]['tour_markup']);


        }
        book_date='';
        }
        this.selling_price_cost=month_price;




        var month_lead=0;
        for(var i=0;i<this.Lead.length;i++){
        var book = new Date(this.Lead[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1);
        // //console.log(book_date);
        if(book_date==month){
          month_lead++;
        }
        book_date='';
        }
        this.Lead_length=month_lead;
        var unassign_month_lead=0;
        for(var i=0;i<this.lead_unassign.length;i++){
        var book = new Date(this.lead_unassign[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1);
        // //console.log(book_date);
        if(book_date==month){
          unassign_month_lead++;
        }
        book_date='';
        }
        this.lead_unassign_length=unassign_month_lead;

        var month_iti=0;
          for(var i=0;i<this.Itinerary.length;i++){
        var book = new Date(this.Itinerary[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1);
        // //console.log(book_date);
        if(book_date==month){
          month_iti++;
        }
        book_date='';
        }
        this.Itinerary_length=month_iti;


        var month_iti_confirm=0;
          for(var i=0;i<this.Itinerary.length;i++){
        var book = new Date(this.Itinerary[i]['created_at']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1);
        // //console.log(book_date);
        if(book_date==month && this.Itinerary[i]['activated']==2){
          month_iti_confirm++;
        }
        book_date='';
        }
        this.confirmations_iti=month_iti_confirm;
        this.custom_date_div=false;



        this.chartData=[];
      this.chartData.push(['Month','Itinerary','Lead'])

     var days = new Date();
      var in_month = days.getMonth();
      var days_in_month=this.daysInMonth(in_month + 1, days.getFullYear());
    for(var k=0;k<days_in_month;k++){
        var j=k+1;
        var chart_month = new Date();
        var year_month = chart_month.getFullYear()+'-'+(chart_month.getMonth()+1)+'-'+j;
        // //console.log(year_month);
        var chart_iti=0;
        for(var i=0;i<this.Itinerary.length;i++){
            var book = new Date(this.Itinerary[i]['created_at']);
            var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
            // //console.log(book_date+'=='+year_month);
            if(book_date===year_month){
                chart_iti++;

            }
            book_date='';
        }
        // //console.log(chart_iti)

        var chart_lead=0;
        // //console.log(month+''+this.Lead.length);

        for(var i=0;i<this.Lead.length;i++){
            var book = new Date(this.Lead[i]['created_at']);
            var book_date =book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
            // //console.log(book_date+'=='+year_month);
            if(book_date==year_month){
                chart_lead++;

            }
            book_date='';
        }
        // //console.log(chart_lead);
      this.chartData.push(
              [j, chart_iti, chart_lead]
          )

        }

  // City Agenda chart
  this.city_chartData=[];
  var month_city_arr=[];
   var city_counter_month=0;
   for(var t=0;t<this.city_agenda.length;t++){
   // //console.log(this.city_agenda[t]['date']);
   var book = new Date(this.city_agenda[t]['date']);
     var book_date = book.getFullYear()+'-'+(book.getMonth()+1);
      var this_month =new Date();
      var month = this_month.getFullYear()+'-'+(this_month.getMonth()+1);
     // console.log(month+"---"+book_date);
      // console.log(this_month);
      // console.log(month);
   if(month==book_date){
     city_counter_month++;

         // console.log(this.city_agenda[t]['city']);
  month_city_arr.push(this.city_agenda[t]['city']);
  }

   }
  // //console.log(today_city_arr);
  var today_arr_result=month_city_arr.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
  // var today_arr_result_decode=JSON.stringify(today_arr_result);

  // alert(today_arr_result.length);
   var result = _.sortBy(today_arr_result, ['count']);
    var arr_rev=result.reverse();
   // console.log(arr_rev)
   var length=0;
if(arr_rev.length<5){length=arr_rev.length;}else{length=5;}
  this.city_chartData.push(['Month','City'])
  if(city_counter_month===0){
    this.city_chartData.push(['No-Data',0])
    }
  for(var r=0;r<length;r++){
  var city_data=JSON.stringify(arr_rev[r]);
  var city_data_json=JSON.parse(city_data);

   // //console.log(city_data_json['el']+"-"+city_data_json['count']);

  this.city_chartData.push([city_data_json['el'],
                         city_data_json['count']],)
  }


            // radar Chart
            this.series=[];
            var radar_month=0;
            if(this.radar_graph.length>0){
                for(var f=0;f<this.radar_graph.length;f++){
                    // console.log(this.radar_graph[f])
                    var this_month =new Date();
                    var month = this_month.getFullYear()+'-'+(this_month.getMonth()+1);

                    var book = new Date(this.radar_graph[f]['date']);
                    var book_date = book.getFullYear()+'-'+(book.getMonth()+1);


                    if(month==book_date){
                        radar_month++;
                        // console.log(this.radar_graph[f]['book_id']);
                        this.series.push({
                            name: this.radar_graph[f]['book_id'],
                            data: [this.radar_graph[f]['App'],
                                this.radar_graph[f]['Trip'],
                                this.radar_graph[f]['Tour_Manager'],
                                this.radar_graph[f]['Hotel']],
                        }, )

                    }

                }
                if(radar_month==0){
                    this.series.push({
                        name: 'NO-DATA',
                        data: [0,
                            0,
                            0,
                            0],
                    } )
                }
            }
            else{
                this.series.push({
                    name: 'NO-DATA',
                    data: [0,
                        0,
                        0,
                        0],
                } )
            }





        },
        year_fun(){
          this.today=false
          this.yesterday=false
          this.month=false
          this.year=true
          this.custom=false
          this.custom_date_div=false
          if(this.agency){
            this.agency_agents=[];
          this.agency_agents.push(this.agency_data['year']);
          }

          var this_year =new Date(new Date().setDate(new Date().getDate()));
          var year = this_year.getFullYear();
          // //console.log(year);

        var year_price=0;
        this.sale_detail=[];
        for(var i=0;i<this.selling_price.length;i++){
          var book = new Date(this.selling_price[i]['date']);
          var book_date = book.getFullYear();

          // //console.log(book_date);
          if(book_date==year){

          if(this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 ){

            var myArray = {book_id: this.selling_price[i]['book_id'] ,
                id: this.selling_price[i]['id'] ,
                price_tour: this.selling_price[i]['price_tour'] ,
                            price_flight: this.selling_price[i]['price_flight'],
                            markup: this.selling_price[i]['tour_markup']};
            this.sale_detail.push(myArray)
              }

          year_price=parseInt(year_price)+parseInt(this.selling_price[i]['price_tour']);

          year_price=parseInt(year_price)+parseInt(this.selling_price[i]['price_flight']);
          year_price=parseInt(year_price)+parseInt(this.selling_price[i]['tour_markup']);


      }
        book_date='';
        }

        this.selling_price_cost=year_price;


          var year_lead=0;
          for(var i=0;i<this.Lead.length;i++){
          var book = new Date(this.Lead[i]['created_at']);
          var book_date = book.getFullYear();
          // //console.log(book_date);
          if(book_date==year){
            year_lead++;
          }
          book_date='';
          }
          this.Lead_length=year_lead;
          var unassign_year_lead=0;
          for(var i=0;i<this.lead_unassign.length;i++){
          var book = new Date(this.lead_unassign[i]['created_at']);
          var book_date = book.getFullYear();
          // //console.log(book_date);
          if(book_date==year){
            unassign_year_lead++;
          }
          book_date='';
          }
          this.lead_unassign_length=unassign_year_lead;

          var year_iti=0;
            for(var i=0;i<this.Itinerary.length;i++){
          var book = new Date(this.Itinerary[i]['created_at']);
          var book_date = book.getFullYear();
          // //console.log(book_date);
          if(book_date==year){
            year_iti++;
          }
          book_date='';
          }
          this.Itinerary_length=year_iti;

          var year_iti_confirm=0;
            for(var i=0;i<this.Itinerary.length;i++){
          var book = new Date(this.Itinerary[i]['created_at']);
          var book_date = book.getFullYear();
          // //console.log(book_date);
          if(book_date==year && this.Itinerary[i]['activated']==2){
            year_iti_confirm++;
          }
          book_date='';
          }
          this.confirmations_iti=year_iti_confirm;
          this.custom_date_div=false;
          // alert(this.custom_date);



        this.chartData=[];
      this.chartData.push(['Year','Itinerary','Lead'])

    for(var k=0;k<12;k++){
        var j=k+1;
        var chart_month = new Date();
        var year_month = chart_month.getFullYear()+'-'+j;

        var chart_iti=0;
        for(var i=0;i<this.Itinerary.length;i++){
            var book = new Date(this.Itinerary[i]['created_at']);
            var book_date = book.getFullYear()+'-'+(book.getMonth()+1);
            // //console.log(book_date+'=='+year_month);
            if(book_date===year_month){
                chart_iti++;

            }
            book_date='';
        }
        // //console.log(chart_iti)

        var chart_lead=0;
        // //console.log(month+''+this.Lead.length);

        for(var i=0;i<this.Lead.length;i++){
            var book = new Date(this.Lead[i]['created_at']);
            var book_date = book.getFullYear()+'-'+(book.getMonth()+1);
            // //console.log(book_date+'=='+year_month);
            if(book_date==year_month){
                chart_lead++;

            }
            book_date='';
        }
        // //console.log(chart_lead);

        if(j===1){
            this.chartData.push(
                ['Jan', chart_iti, chart_lead]
            )
        }
        if(j===2){
            this.chartData.push(
                ['Feb', chart_iti, chart_lead]
            )
        }
        if(j===3){
            this.chartData.push(
                ['Mar', chart_iti, chart_lead]
            )
        }
        if(j===4){
            this.chartData.push(
                ['Apr', chart_iti, chart_lead]
            )
        }
        if(j===5){
            this.chartData.push(
                ['May', chart_iti, chart_lead]
            )
        }
        if(j===6){
            this.chartData.push(
                ['June', chart_iti, chart_lead]
            )
        }if(j===7){
            this.chartData.push(
                ['July', chart_iti, chart_lead]
            )
        }if(j===8){
            this.chartData.push(
                ['Aug', chart_iti, chart_lead]
            )
        }if(j===9){
            this.chartData.push(
                ['Sep', chart_iti, chart_lead]
            )
        }if(j===10){
            this.chartData.push(
                ['Oct', chart_iti, chart_lead]
            )
        }if(j===11){
            this.chartData.push(
                ['Nov', chart_iti, chart_lead]
            )
        }if(j===12){
            this.chartData.push(
                ['Dec', chart_iti, chart_lead]
            )
        }
        }

          // city agenda chart
            this.city_chartData=[];
           var year_city_arr=[];
            var city_counter_year=0;
            for(var t=0;t<this.city_agenda.length;t++){
            // //console.log(this.city_agenda[t]['date']);
            var book = new Date(this.city_agenda[t]['date']);
              var book_date = book.getFullYear();

              // //console.log(today_date+"---"+book_date);
            if(year==book_date){
              city_counter_year++;
                  // //console.log(this.city_agenda[t]['city']);
          year_city_arr.push(this.city_agenda[t]['city']);
          }

            }
          // //console.log(today_city_arr);
        var today_arr_result=year_city_arr.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
        // var today_arr_result_decode=JSON.stringify(today_arr_result);
        var result = _.sortBy(today_arr_result, ['count']);
        var arr_rev=result.reverse();
       // console.log(arr_rev)
        var length=0;
         if(arr_rev.length<5){length=arr_rev.length;}else{length=5;}

        // alert(city_counter_year);
          this.city_chartData.push(['Year','City'])
        if(city_counter_year===0){
          this.city_chartData.push(['No-Data',0])
          }
        for(var r=0;r<length;r++){
          var city_data=JSON.stringify(arr_rev[r]);
          var city_data_json=JSON.parse(city_data);

            // //console.log(city_data_json['el']+"-"+city_data_json['count']);

          this.city_chartData.push([city_data_json['el'],
                                  city_data_json['count']],)
              }


            // radar Chart
            this.series=[];
            var radar_year=0;
            if(this.radar_graph.length>0){
                for(var f=0;f<this.radar_graph.length;f++){
                    // console.log(this.radar_graph[f])
                    var this_year = new Date();
                    var year = book.getFullYear();

                    var book = new Date(this.radar_graph[f]['date']);
                    var book_date = book.getFullYear();

                    if(year==book_date){
                        radar_year++;
                        // console.log(this.radar_graph[f]['book_id']);
                        this.series.push({
                            name: this.radar_graph[f]['book_id'],
                            data: [this.radar_graph[f]['App'],
                                this.radar_graph[f]['Trip'],
                                this.radar_graph[f]['Tour_Manager'],
                                this.radar_graph[f]['Hotel']],
                        }, )

                    }

                }
                if(radar_year==0){
                    this.series.push({
                        name: 'NO-DATA',
                        data: [0,
                            0,
                            0,
                            0],
                    } )
                }
            }
            else{
                this.series.push({
                    name: 'NO-DATA',
                    data: [0,
                        0,
                        0,
                        0],
                } )
            }











      },
      updatedriver_pick_up_time(e) {

        this.custom_date=e.target.value
      },
      custom_select_date(){
      // alert(this.custom_date);
      var agent_id=document.querySelector("meta[name='user-id']").getAttribute('content');
      var role=document.querySelector("meta[name='user-role']").getAttribute('content');
      if(role=='agency'){
      // alert(this.custom_date);

      let params = new FormData();
      params.set('agency_id',agent_id);
      params.set('custom',this.custom_date);
      axios.post('/api/webservices/agent_track_for_agency' , params)
      .then(response => {this.agency_data=response.data
      // console.log(this.agency_data);
      this.agency_agents=[];
      this.agency_agents.push(this.agency_data['custom']);
      });
      }
      var custom = new Date(this.custom_date);
      var custom_date = custom.getFullYear()+'-'+(custom.getMonth()+1)+'-'+custom.getDate();
      // //console.log(custom_date);
      var custom_date_lead=0;
      for(var i=0;i<this.Lead.length;i++){
      var book = new Date(this.Lead[i]['created_at']);
      var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
      // //console.log(book_date);
      if(book_date==custom_date){
        custom_date_lead++;
      }
      book_date='';
      }
      this.Lead_length=custom_date_lead;
      var unassign_custom_date_lead=0;
      for(var i=0;i<this.lead_unassign.length;i++){
      var book = new Date(this.lead_unassign[i]['created_at']);
      var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
      // //console.log(book_date);
      if(book_date==custom_date){
        unassign_custom_date_lead++;
      }
      book_date='';
      }
      this.lead_unassign_length=unassign_custom_date_lead;

      var custom_date_iti=0;
        for(var i=0;i<this.Itinerary.length;i++){
      var book = new Date(this.Itinerary[i]['created_at']);
      var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
      // //console.log(book_date);
      if(book_date==custom_date){
        custom_date_iti++;
      }
      book_date='';
      }
      this.Itinerary_length=custom_date_iti;

      var custom_date_iti_confirm=0;
        for(var i=0;i<this.Itinerary.length;i++){
      var book = new Date(this.Itinerary[i]['created_at']);
      var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
      // //console.log(book_date);
      if(book_date==custom_date && this.Itinerary[i]['activated']==2){
        custom_date_iti_confirm++;
      }
      book_date='';
      }
      this.confirmations_iti=custom_date_iti_confirm;

      var custom_price=0;

      this.sale_detail=[];
      for(var i=0;i<this.selling_price.length;i++){

        var book = new Date(this.selling_price[i]['date']);
        var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
        // //console.log(book_date);
        if(book_date==custom_date){
        if(this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 && this.selling_price[i]['price_tour']!=0 ){

          var myArray = {book_id: this.selling_price[i]['book_id'] ,
              id: this.selling_price[i]['id'] ,
              price_tour: this.selling_price[i]['price_tour'] ,
                          price_flight: this.selling_price[i]['price_flight'],
                          markup: this.selling_price[i]['tour_markup']};
          this.sale_detail.push(myArray)
            }
        custom_price=parseInt(custom_price)+parseInt(this.selling_price[i]['price_tour']);
        // document.getElementById('sale_tr').innerHTML = '';
        custom_price=parseInt(custom_price)+parseInt(this.selling_price[i]['price_flight']);
        custom_price=parseInt(custom_price)+parseInt(this.selling_price[i]['tour_markup']);



      }

      book_date='';
      }

      this.selling_price_cost=custom_price;

      //Chart DATA
        this.chartData=[];
      this.chartData.push([custom_date,'Itinerary','Lead'])


        var chart_iti=0;
        for(var i=0;i<this.Itinerary.length;i++){
            var book = new Date(this.Itinerary[i]['created_at']);
            var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
            // //console.log(book_date+'=='+year_month);
            if(book_date===custom_date){
                chart_iti++;

            }
            book_date='';
        }
        // //console.log(chart_iti)

        var chart_lead=0;
        // //console.log(month+''+this.Lead.length);

        for(var i=0;i<this.Lead.length;i++){
            var book = new Date(this.Lead[i]['created_at']);
            var book_date =book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
            // //console.log(book_date+'=='+year_month);
            if(book_date==custom_date){
                chart_lead++;

            }
            book_date='';
        }
        // //console.log(chart_lead);

          this.chartData.push(
              [custom_date, chart_iti, chart_lead]
          )

            // city data charts

            this.city_chartData=[];
            var custom_city_arr=[];
            var city_counter_custom=0;
            for(var t=0;t<this.city_agenda.length;t++){
          // //console.log(this.city_agenda[t]['date']);
          var book = new Date(this.city_agenda[t]['date']);
            var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

            // //console.log(today_date+"---"+book_date);
          if(custom_date==book_date){
          city_counter_custom++;
                // //console.log(this.city_agenda[t]['city']);
        custom_city_arr.push(this.city_agenda[t]['city']);

        }

          }
        // //console.log(today_city_arr);
      var today_arr_result=custom_city_arr.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
      // var today_arr_result_decode=JSON.stringify(today_arr_result);
       var result = _.sortBy(today_arr_result, ['count']);
       var arr_rev=result.reverse();
      // console.log(arr_rev)
      var length=0;
       if(arr_rev.length<5){length=arr_rev.length;}else{length=5;}
    // alert(city_counter_custom);
      this.city_chartData.push([custom_date,'City'])

      if(city_counter_custom===0){
        this.city_chartData.push(['No-Data',0])
        }

      for(var r=0;r<length;r++){
        var city_data=JSON.stringify(arr_rev[r]);
        var city_data_json=JSON.parse(city_data);

          // //console.log(city_data_json['el']+"-"+city_data_json['count']);

        this.city_chartData.push([city_data_json['el'],
                                city_data_json['count']],)
      }


          // radar Chart
          this.series=[];
          var radar_custom=0;
          if(this.radar_graph.length>0){
              for(var f=0;f<this.radar_graph.length;f++){
                  // console.log(this.radar_graph[f])
                  var today = new Date();
                  var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

                  var book = new Date(this.radar_graph[f]['date']);
                  var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();

                  if(custom_date==book_date){
                      radar_custom++;
                      // console.log(this.radar_graph[f]['book_id']);
                      this.series.push({
                          name: this.radar_graph[f]['book_id'],
                          data: [this.radar_graph[f]['App'],
                              this.radar_graph[f]['Trip'],
                              this.radar_graph[f]['Tour_Manager'],
                              this.radar_graph[f]['Hotel']],
                      }, )

                  }

              }
              if(radar_custom==0){
                  this.series.push({
                      name: 'NO-DATA',
                      data: [0,
                          0,
                          0,
                          0],
                  } )
              }
          }
          else{
              this.series.push({
                  name: 'NO-DATA',
                  data: [0,
                      0,
                      0,
                      0],
              } )
          }


        },
         // fillData () {
         //        this.datacollection = {
         //    labels: ['Activities/Planned', 'Overall', 'Tour Manager', 'Hotel'],
         //     datasets: [{data: [20, 10, 4, 2]},{data: [12, 11, 14, 12]}]
         //        }
         //    },
          update_tasks(id){
          document.getElementById('tbody_task').innerHTML = '';
          // alert(id);
            let params = new FormData();
            params.set('task_id',id);
            axios.post('/api/webservices/update_task_status' , params)
            .then(response => {this.task_status=response.data
            // alert(this.task_status);
            // task_status
              axios.get('/api/v1/tasks')
              .then(response => {this.tasks=response.data.data
              var today = new Date();
              var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                // //console.log({{env('APP_URL')}} );
                var task_count=1;
                for(var i=0;i<this.tasks.length;i++){
              var book = new Date(this.tasks[i]['due_date']);
              var book_date = book.getFullYear()+'-'+(book.getMonth()+1)+'-'+book.getDate();
              var status = this.tasks[i]['status'];
              // alert(status)
              if(book_date===today_date && status==0){
            var ref_id=JSON.parse(this.tasks[i]['ref_id'])['booking_id'];
            var name=ref_id.split('|')[1];
            if(task_count<=5){
              var myArray = {due_date: this.tasks[i]['due_date'], remark: this.tasks[i]['remark'] , id: this.tasks[i]['id'],name: name};
              this.tasks_arr.push(myArray);
              task_count++;
              }

              }
            //   book_date='';
          }
          if(this.tasks_arr.length===0){
          var myArray = {};
          this.tasks_arr.push(myArray);
          }
              })
            })


          },
          daysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
          },
          updatesearch() {
              this.setsearch(this.localsearch)
          },
          clearsearch() {
              this.localsearch=""
              this.setsearch(this.localsearch)
          },
          setsearch(state, val) {
              state.search = val
              let arr = [];

              if(state.filter_obj.status){

                  if (state.search !== '') {

                      // console.log(state.actualdata),
                          state.dataclone.forEach(post => {
                              let f = "empty";
                              state.column.forEach((dataObj) => {
                                  console.log(dataObj)
                                  console.log(post[dataObj])
                                  if (f === "empty" && post[dataObj]!==null) {
                                      if (post[dataObj].toLowerCase().includes(state.search.toLowerCase())) {

                                          f = "found";
                                          arr.push(post);

                                      }
                                  }

                              });

                          });

                      console.log(arr);

                      state.all = _.cloneDeep(arr);

                  } else {
                      state.all =_.cloneDeep( state.actualdata)

                  }

              }
              else {

                  if (state.search !== '') {

                      // console.log(state.actualdata),
                      state.actualdata.forEach(post => {
                          let f = "empty";
                          state.column.forEach((dataObj) => {
                              console.log(dataObj)
                              console.log(post[dataObj])
                              if (f === "empty" && post[dataObj]!==null) {
                                  if (post[dataObj].toLowerCase().includes(state.search.toLowerCase())) {

                                      f = "found";
                                      arr.push(post);

                                  }
                              }

                          });

                      });

                      console.log(arr);

                      state.all = _.cloneDeep(arr);

                  } else {
                      state.all =_.cloneDeep( state.actualdata)

                  }
              }



          },






}


}

</script>
<style>
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
</style>
