<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Set Rooming</h1>
        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">
<!--                        <div class="box-header">-->
<!--                            <h3 class="box-title"></h3>-->
<!--                        </div>-->

                        <div class="col-md-12 container-fluid" >
                            <div class="row">
                                <div class="col-md-2">
                                    <div  v-if="showtoagency" class="box-body">
                                        <div class="btn-group">
<!--                                            <router-link-->
<!--                                                      v-if="$can(xprops.permission_prefix + 'create')"-->
<!--                                                :to="{ name: xprops.route + '.create' }"-->
<!--                                                class="btn btn-success btn-sm"-->
<!--                                                style="font-size: 15px"-->
<!--                                            >-->
<!--                                                <i class="fa fa-plus"></i> Add new-->
<!--                                            </router-link>-->

<!--                                            <button type="button" style="font-size: 15px;margin-left: 5px;background-color: #ffc107 !important;"  class="btn btn-default btn-sm" @click="fetchData">-->
<!--                                                <i class="fa fa-refresh" :class="{'fa-spin': loading}"></i> Refresh-->
<!--                                            </button>-->
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
<!--                                    <div class="input-group" style="margin-top: 10px;">-->
<!--                                        <p class="extension_title">Filter :</p>-->
<!--                                        <label class="switch">-->
<!--                                            <input type="checkbox" class="switch-input" id="filter_search"  v-model="filtertoggle">-->
<!--                                            <span class="switch-label" data-on="ON" data-off="OFF"></span>-->
<!--                                            <span class="switch-handle"></span>-->
<!--                                        </label>-->
<!--                                        <i style="z-index:2;padding: 3px;padding-left:10px;" class="fa fa-eye" aria-hidden="true" v-if="filter_obj.status" @click="filtermodel=true"></i>-->
<!--                                    </div>-->
                                </div>
                                <div class="col-md-6">

                                    <div class="input-group" style="margin-top: 10px;">

                                        <input type="text" v-model="localsearch" class="filter_bar2" placeholder="Search" style="height: 35px;">
                                        <div class="input-group-append">
                                            <button @click="updatesearch" class="btn btn-secondary filter_button2" v-if="search"  type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                            <button @click="clearsearch" class="btn btn-secondary filter_button2"  v-if="clear"  type="button">
                                                <i class="fa fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2">

                                    <div class="col-sm">
                                        <download-excel
                                            class   = "btn btn-default"
                                            :data   = "json_data"
                                            :fields = "json_fields"
                                            worksheet = "My Worksheet"
                                            name    = "Rooming.xls"
                                        >
                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>
                                        </download-excel>

                                        <download-excel
                                            class   = "btn btn-default"
                                            :data   = "json_data"
                                            :fields = "json_fields"
                                            type    = "csv"
                                            name    = "Rooming.csv"
                                        >
                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="CSV"  ><br>
                                            <p class="extension_title">CSV</p>

                                        </download-excel>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div class="box-body">
                            <!--                            <div class="row" v-if="loading">-->
                            <!--                                <div class="col-xs-4 col-xs-offset-4">-->
                            <!--                                    <div class="alert text-center">-->
                            <!--                                        <i class="fa fa-spin fa-refresh"></i> Loading-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->
                            <div v-if="filtermodel">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-dialog">
                                                <div class="modal-content model_head" >
                                                    <div class="modal-header">
                                                        <button type="button" class="close" @click="filtermodel=false">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>

                                                    </div>
                                                    <div class="modal-body">

                                                        <div class="row">
                                                            <!-- <div class="col-1 mt-3"> Sector:</div>
                                                            <div class="col-11"><input type="text" class="form-control"  v-model="filter_obj.filter_sector"></div> -->

                                                            <div class="col-12 model_div">
                                                                <div class="input-group mb-3">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text" id="inputGroup-sizing-default">Sector</span>
                                                                    </div>
                                                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="filter_obj.filter_sector">
                                                                </div>
                                                            </div>



                                                            <div class="col-12 mt-2 model_div" >

                                                                <div class="form-check form-check-inline">
                                                                    <h3> Group : </h3>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" class="form-check-input" v-model="filter_obj.queryfilter" value="4">
                                                                    <label class="form-check-label" for="materialInline1">All</label>
                                                                </div>


                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" class="form-check-input" v-model="filter_obj.queryfilter" value="2">
                                                                    <label class="form-check-label" for="materialInline2">Active</label>
                                                                </div>


                                                                <div class="form-check form-check-inline">
                                                                    <input type="radio" class="form-check-input" v-model="filter_obj.queryfilter" value="3">
                                                                    <label class="form-check-label" for="materialInline3">Completed</label>
                                                                </div>


                                                            </div>

                                                            <div class="col-12 model_div">
                                                                <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text" id=""> Travel Date</span>
                                                                    </div>
                                                                    <date-picker
                                                                        v-model="filter_obj.filter_datefrom"
                                                                        :config="$root.dpconfigDate"
                                                                        name="driver_pickup_date_time"
                                                                        placeholder="From"
                                                                    >
                                                                    </date-picker>
                                                                    <date-picker
                                                                        v-model="filter_obj.filter_dateto"
                                                                        :config="$root.dpconfigDate"

                                                                        name="driver_pickup_date_time"
                                                                        placeholder="To"
                                                                    >
                                                                    </date-picker>
                                                                </div>
                                                            </div>



                                                            <!-- <div class="col-2 mt-3 model_div" > Travel Date</div>

                                                              <div class="col-5 mt-2">
                                                                  From:   <date-picker
                                                                  v-model="filter_obj.filter_datefrom"
                                                                  :config="$root.dpconfigDate"
                                                                  name="driver_pickup_date_time"
                                                              >
                                                              </date-picker>


                                                              </div>
                                                              <div class="col-5 mt-2 model_div" >
                                                                  To: <date-picker
                                                                  v-model="filter_obj.filter_dateto"
                                                                  :config="$root.dpconfigDate"
                                                                  name="driver_pickup_date_time"
                                                              >
                                                              </date-picker>

                                                              </div> -->

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


                            <table class="table table-striped table-hover" style="margin-bottom: 0px;">
                                <colgroup><!----> <col style="width: 15%;"><col><col><col><col><col><col></colgroup>
                                <thead>
                                <tr>
                                    <th class="font_style2">
                                    Traveller Name

                                    </th>
                                    <th class="font_style2">
                                        Mobile No

                                    </th>
                                    <th class="font_style2">
                                        Email ID
                              </th>
                                    <th class="font_style2">

                                    </th>
                                    <th class="font_style2">
                                        Rooming
                              </th>
                                    <th class="font_style2">
                                        Partner 1
                               </th>
                                    <th class="font_style2">
                                        Partner 2
                                    </th>
                                    <th class="font_style2">
                                        Partner 3
                               </th>
                                    <th class="font_style2">
                                       Room Details
                                    </th>
                                </tr>
                                </thead>
                           <tbody>
<!--                           :class="[all[index].meta_rooming.drop[index].status?'disabled-row':''] "-->
                            <tr v-for="(data,index) in all" :class="[added_partner_array.includes(data.email)?'disabled-row':''] " >
                                <td class="font_style">
                                    <div >

                                        {{data.full_name}}
                                        <span v-if="data.meta_family.length>0"><b>Fam<sup >{{data.meta_family.length}}</sup></b> </span>

                            </div>
                                </td>
                                <td class="font_style">
                                    {{data.phone}}
                            </td>
                                <td class="font_style">
                                    <div >

                                        {{data.email}}

                            </div>
                                </td>
                                <td class="font_style">
                                    <div >

                                        <i class="fa fa-refresh" aria-hidden="true" @click="reset_field(index)"></i>

                                    </div>
                                </td>


                                <td class="font_style">
<!--                                    <i class="fa fa-refresh" aria-hidden="true" @click="reset_field(index)"></i>-->

                                    <div >

                                        <v-select  v-model="data.meta_rooming.room_cat" :clearable="false"

                                                   label="title"
                                                  :disabled="data.meta_rooming.room_cat!=''"
                                                   @input="selected_cat(index)"

                                                   :options="['Single','Double','Triple','Quadruple','Family']"

                                        />

                            </div>
                                </td>
                                <td class="font_style">

                                    <v-select  placeholder="Select"
                                              label="name"
                                               :clearable="false"
                                               @input="selected_patner1(index)"
                                               v-model="data.meta_rooming.with_me[0]"
                                               :options="data.meta_rooming.drop.filter(o => o.status)"
                                               :disabled="data.meta_rooming.room_cat==='Family' || data.meta_rooming.room_cat==='Single' || data.meta_rooming.room_cat==='' || data.meta_rooming.room_cat==='Single' || typeof (data.meta_rooming.with_me[0])!== 'undefined'  "

                                    />


                                </td>

                                <td class="font_style"><div >

                                    <v-select  placeholder="Select"
                                               :clearable="false"
                                               label="name"
                                               @input="selected_patner2(index)"
                                               v-model="data.meta_rooming.with_me[1]"
                                               :options="data.meta_rooming.drop.filter(o => o.status)"
                                               :disabled="data.meta_rooming.room_cat==='Family' || data.meta_rooming.room_cat==='Single'  || data.meta_rooming.room_cat===''  || data.meta_rooming.room_cat==='Double' || typeof (data.meta_rooming.with_me[1])!== 'undefined' "


                                    />

                                </div>
                                </td>
                                <td class="font_style"><div >

                                    <v-select  placeholder="Select"
                                               :clearable="false"
                                               label="name"
                                               @input="selected_patner3(index)"
                                               v-model="data.meta_rooming.with_me[2]"
                                               :options="data.meta_rooming.drop.filter(o => o.status)"
                                               :disabled="data.meta_rooming.room_cat==='Family' || data.meta_rooming.room_cat==='Single' || data.meta_rooming.room_cat==='' || data.meta_rooming.room_cat==='Double' || data.meta_rooming.room_cat==='Triple' || typeof (data.meta_rooming.with_me[2])!== 'undefined' "

                                    />

                                </div>
                                </td>
                                <td class="font_style"><div >

                                    <input type="text" v-model="data.meta_rooming.rooms">

                                </div>
                                </td>
                            </tr>

                            </tbody>
                            </table>
                            <button  class="button-css" @click="save_data">Save</button>
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
                columns: [
                    // { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                    { title: 'Traveller Name', field: 'full_name', sortable: true ,colStyle: 'width: 15%;' ,tdClass: 'font_style',thClass: 'font_style2' },
                    { title: 'Mobile No.', field: 'phone', sortable: true ,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 10%;' },
                    { title: 'Itinerary No.', field: 'booking_id', sortable: true,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 15%;'},
                    { title: 'Login', field: 'login',tdComp: login , sortable:true,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 7%;' },
                    { title: 'Activated', field: 'score', tdComp: activated ,tdClass: 'font_style',thClass: 'font_style2',colStyle: 'width: 7%;'},
                    { title: 'Documents', field: 'score', tdComp: docs_status ,tdClass: 'font_style3',thClass: 'font_style3',colStyle: 'width: 10%;'},
                    { title: 'Documents', field: 'score', tdComp: documents ,tdClass: 'font_style',thClass: 'font_style3',colStyle: 'width: 10%;'},
                    // { title: 'Travel Date', field: 'driver_pick_up_time', tdComp: dateonlybooking,tdClass: 'font_style',thClass: 'font_style2' },
                    // { title: 'Members', field: 'driver_pick_up_time', tdComp: memberaction,tdClass: 'font_style',thClass: 'font_style2' },
                    // { title: 'Traveller Name', field: 'full_name', sortable: true },
                    // { title: 'Mobile No.', field: 'phone', sortable: true },
                    // { title: 'Login', field: 'email', tdComp: login},
                    // { title: 'Ops. Assign', field: 'score', tdComp: ops },
                    // { title: 'Activated', field: 'activated', sortable: true },

                    // { title: 'Status', field: 'score', tdComp: statusbooking,tdClass: 'font_style',thClass: 'font_style2'},
                    { title: 'Actions', tdComp: DatatableActions_Members, visible: true, tdClass: 'font_style',thClass: 'font_style3', colStyle: 'width: 80px;' },
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
                    'Traveller Name ': 'name',
                    'Mobile No ':'number',
                    'Email ID ':'email',
                    'Rooming ':'room_cat',
                    'Partner 1 ':'pat1',
                    'Partner 2 ':'pat2',
                    'Partner 3 ':'pat3',
                    'Room Details ':'room',


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
            axios.get('/api/v1/groupsmemberdoc2/' + this.$route.params.id)
                .then(response => {
                    // console.log(response.data.data);
                    this.doc_data_new=response.data.data
                    this.doc_data_new[0].member_doc_tags= JSON.parse(this.doc_data_new[0].member_doc_tags)

                })


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

        },
        destroyed() {
            this.resetState()
        },
        computed: {
            ...mapGetters('GroupsIndexMember', ['added_partner_array','all','search','data', 'total', 'loading', 'relationships','filter_obj']),
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
            all:function () {



                // this.json_data=this.all;

                for(var b=0;b<this.all.length;b++){


                        this.json_data.push({
                            'name':this.all[b].full_name,
                            'number':this.all[b].phone,
                            'email':this.all[b].email,
                            'room_cat':this.all[b].meta_rooming.room_cat,
                            'pat1':typeof (this.all[b].meta_rooming.with_me[0])=='undefined' ?'':this.all[b].meta_rooming.with_me[0].name,
                            'pat2':typeof (this.all[b].meta_rooming.with_me[1])=='undefined' ?'':this.all[b].meta_rooming.with_me[1].name,
                            'pat3':typeof (this.all[b].meta_rooming.with_me[2])=='undefined' ?'':this.all[b].meta_rooming.with_me[2].name,
                            'room':this.all[b].meta_rooming.rooms,
                        })


                }


            },
            license:function () {
                let form = new FormData();

                form.set("id",this.$route.params.id)
                form.set("source",'index')
                axios.post('/api/webservices/member_docs',form)
                    .then(response=>{

                        if(response.data==null){
                            this.req_doc=0;
                            this.total_doc=0;

                        }
                        else{


                            const objectArray = Object.entries(response.data);

                            this.total_doc=this.total_members*objectArray.length;
                            // alert(this.total_doc);
                            for(var y=0;y<objectArray.length;y++){
                                this.doc_data.push({
                                    // objectArray[y][1] : objectArray[y][1]['value']
                                    'name' :  objectArray[y][0],
                                    'value' : objectArray[y][1]['value'],
                                });
                                if(objectArray[y][1]['value']>0){

                                    this.req_doc+=objectArray[y][1]['value'];
                                }
                            }
                            console.log(this.doc_data);
                        }

                    });
            },

        },
        methods: {
            ...mapActions('GroupsIndexMember', ['fetchData', 'setQuery', 'resetState','setsearch' , 'setcolumn','setfilter']),
            save_data(){
                let form = new FormData();

                form.set("all",JSON.stringify(this.all))

                axios.post('/api/v1/save_rooming',form)
                    .then(response=>{



                    });

            },

            selected_cat(index){
              //  alert(3);
                if(this.all[index].meta_rooming.room_cat==='Family'){
                  //  alert(2);
                    for(let j=0; j<this.all.length; j++){

                        var flag=1;
                        for (let k =0 ; k<this.all[j].meta_rooming.drop.length; k++ ){
                            if(this.all[j].meta_rooming.drop[k].email==this.all[index].email ){

                           //     alert(1);
                                this.all[j].meta_rooming.drop[k].status=false
                            }

                        }
                    }

                }
                else{
                    for(let j=0; j<this.all.length; j++){

                        var flag=1;
                        for (let k =0 ; k<this.all[j].meta_rooming.drop.length; k++ ){
                            if(this.all[j].meta_rooming.drop[k].email==this.all[index].email ){
                                this.all[j].meta_rooming.drop[k].status=true
                            }

                        }
                    }
                }
                if(this.all[index].meta_rooming.room_cat!=='Family' && this.all[index].meta_rooming.room_cat!=='Single'){
                 //    alert(2);
               if(this.all[index].meta_vip){
                   alert(this.all[index].full_name+" has VIP tagging");
               }

                }
            },

            reset_field(index){

                this.all[index].meta_rooming.room_cat=''
                this.all[index].meta_rooming.rooms=''
                for (let k =0 ; k<this.all[index].meta_rooming.drop.length; k++ ){

                    if(typeof (this.all[index].meta_rooming.with_me[0])== 'undefined'){

                        this.all[index].meta_rooming.with_me[0]={'email':'test'}
                    }
                    if(typeof (this.all[index].meta_rooming.with_me[1])== 'undefined'){

                        this.all[index].meta_rooming.with_me[1]={'email':'test'}
                    }
                    if(typeof (this.all[index].meta_rooming.with_me[2])== 'undefined'){

                        this.all[index].meta_rooming.with_me[2]={'email':'test'}
                    }

                    if(this.all[index].meta_rooming.drop[k].email==this.all[index].email || this.all[index].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[0].email
                        || this.all[index].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[1].email || this.all[index].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[2].email) {

                        const index1 = this.added_partner_array.indexOf(this.all[index].meta_rooming.drop[k].email);
                        if (index1 > -1) {
                            this.added_partner_array.splice(index1, 1);
                        }
                    }
                }


                for(let j=0; j<this.all.length; j++){

                    var flag=1;
                    for (let k =0 ; k<this.all[j].meta_rooming.drop.length; k++ ){


                        if(this.all[j].meta_rooming.drop[k].email==this.all[index].email ||
                            this.all[j].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[0].email
                            || this.all[j].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[1].email ||
                            this.all[j].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[2].email){

                              //   alert(1);
                            this.all[j].meta_rooming.drop[k].status=true
                        }

                    }
                }
                this.all[index].meta_rooming.with_me=[]
            },

            selected_patner1(index){

                for (let k =0 ; k<this.all[index].meta_rooming.drop.length; k++ ){
                    if(this.all[index].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[0].email ){
                        this.all[index].meta_rooming.drop[k].status=false
                        this.added_partner_array.push(this.all[index].meta_rooming.with_me[0].email);
                    }

                    for(let j=0; j<this.all.length; j++){

                        var flag=1;
                        for (let k =0 ; k<this.all[j].meta_rooming.drop.length; k++ ){


                            if(this.all[j].meta_rooming.drop[k].email==this.all[index].email || this.all[j].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[0].email){

                                //     alert(1);
                                this.all[j].meta_rooming.drop[k].status=false
                                // this.all[j].meta_rooming.rooms=''
                            }


                        }
                        if(this.all[j].email==this.all[index].meta_rooming.with_me[0].email ){

                            this.all[j].meta_rooming.rooms=this.all[index].meta_rooming.rooms
                        }
                    }

                }


            },
            selected_patner2(index){
                for (let k =0 ; k<this.all[index].meta_rooming.drop.length; k++ ){
                    if(this.all[index].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[1].email ){
                        this.all[index].meta_rooming.drop[k].status=false
                        this.added_partner_array.push(this.all[index].meta_rooming.with_me[1].email);
                    }
                }
                for(let j=0; j<this.all.length; j++){

                    var flag=1;
                    for (let k =0 ; k<this.all[j].meta_rooming.drop.length; k++ ){
                        if(this.all[j].meta_rooming.drop[k].email==this.all[index].email  || this.all[j].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[0].email){

                            //     alert(1);
                            this.all[j].meta_rooming.drop[k].status=false
                            // this.all[j].meta_rooming.rooms=''
                        }

                    }
                    if(this.all[j].email==this.all[index].meta_rooming.with_me[1].email ){

                        this.all[j].meta_rooming.rooms=this.all[index].meta_rooming.rooms
                    }
                }
            },
            selected_patner3(index){
                for (let k =0 ; k<this.all[index].meta_rooming.drop.length; k++ ){
                    if(this.all[index].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[2].email ){
                        this.all[index].meta_rooming.drop[k].status=false
                        this.added_partner_array.push(this.all[index].meta_rooming.with_me[2].email);
                    }
                }
                for(let j=0; j<this.all.length; j++){

                    var flag=1;
                    for (let k =0 ; k<this.all[j].meta_rooming.drop.length; k++ ){
                        if(this.all[j].meta_rooming.drop[k].email==this.all[index].email  || this.all[j].meta_rooming.drop[k].email==this.all[index].meta_rooming.with_me[0].email ){

                            //     alert(1);
                            this.all[j].meta_rooming.drop[k].status=false
                            // this.all[j].meta_rooming.rooms=''
                        }


                    }

                    if(this.all[j].email==this.all[index].meta_rooming.with_me[2].email ){

                        this.all[j].meta_rooming.rooms=this.all[index].meta_rooming.rooms
                    }
                }
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
                    form.set("member_doc_tags",JSON.stringify(this.doc_data_new[0].member_doc_tags))
                    form.set("content",content)
                    axios.post('/api/webservices/request_doc_group',form)
                        .then(response => {
                            this.loading2=false;
                            if(response.data=='no_members'){
                                alert('No member available in group');
                            }
                            else if(response.data=='no_subscription'){
                                alert('You dont have sms subscription');
                            }
                            else if(response.data=='no_pending_doc'){
                                alert('No Pending Documents');
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
            bulk_download(doc){
                this.loading2=true;
                axios.get('/api/webservices/fetch_data_url', {
                    params: {
                        id: this.$route.params.id,
                        type: doc
                    }
                })
                    .then(response => {

                        if(response.data=='no_members'){
                            alert('No Members Available');
                        }
                        else{

                            var zip = new JsZip();
                            var img = zip.folder("Documents");
                            var orgcount=response.data.length;
                            var count=response.data.length+1;
                            var norcount=0;
                            if(orgcount>0){
                                response.data.forEach( (dataObj) => {
                                    console.log(dataObj);
                                    axios.get('/api/webservices/get_file_content_js', {
                                        params: {
                                            url:location.origin +dataObj,
// url:'https://picsum.photos/200'

                                        }
                                    })
                                        .then(
                                            (response) => {

                                                console.log(response.data);
                                                var base64=response.data;
                                                img.file("doc-"+count+'.jpg', base64, {base64: true});
                                                count++;
                                                norcount++;
                                                if(orgcount===norcount){
                                                    zip.generateAsync({type:"blob"})
                                                        .then(function(content) {
                                                            // see FileSaver.js
                                                            saveAs(content, "document.zip");
                                                            this.loading2=false;
                                                        });
                                                }

                                            })
                                })
                                this.loading2=false;
                            }
                            else{
                                alert('No Docs Available');
                                this.loading2=false;
                            }

                        }
                    })

            },
        }

    }
</script>


<style scoped>
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

</style>
