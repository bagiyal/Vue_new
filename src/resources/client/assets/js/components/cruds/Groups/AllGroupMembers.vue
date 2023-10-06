<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>{{group_id}} : Members</h1>
        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <section class="content">
            <!--            Bulk Document Modal-->
            <div class="container"  v-if="show_modal4">
                <div class="modal show in" style="display: block;">
                    <div class="modal-dialog" >

                        <div class="modal-content" style="padding: 20px;">
                            <div class="row border-bottom">
                                <div class="col-md-8 ">

<!--                                    <h4 class="modal-title  f-2" >Pending Documents Download</h4>-->

                                </div>
                                <div class="col-md-4">
                                    <button classs="f-2-5" type="button" class="close" data-dismiss="modal" @click="show_modal4=false">&times;</button><br>
                                </div>
                            </div>

                            <div class="modal-body" style="max-height: 400px !important;overflow: auto;">
                                <div class="col-md-12 text-center">
                                    <download-excel
                                        class   = "btn btn-default"
                                        :data   = "pending_doc_data"
                                        :fields = "json_fields2"
                                        worksheet = "My Worksheet"
                                        name    = "documents_report.xls"

                                    >
                                        <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Click To Download Documents Dump Report</p>
                                    </download-excel>
                                </div>




                            </div>








                        </div>
                    </div>
                </div>
            </div>
            <!--  for TC/SOTC-->
            <!--            Add update Modal-->
            <div class="container"  v-if="show_modal5">
                <div class="modal show in" style="display: block;">
                    <div class="modal-dialog" >

                        <div class="modal-content" style="padding: 20px;">
                            <div class="row border-bottom">
                                <div class="col-md-8 ">

                                    <h4 class="modal-title  f-2" >All Passengers List</h4>

                                </div>
                                <div class="col-md-4">
                                    <button classs="f-2-5" type="button" class="close" data-dismiss="modal" @click="show_modal5=false">&times;</button><br>
                                </div>
                            </div>

                            <div class="modal-body" style="max-height: 400px !important; overflow-x: hidden;overflow-y: auto;">

                                <div class="row mt-2" v-for="(data,index) in pax_data" :key="index" >
<!--                                    {{data}}-->
                                    <div  class="col-md-1" >
                                        <label class="container_box">
                                            <input type="checkbox" v-model="data.selected_status" :disabled="data.status!='create'">
                                            <span class="checkmark_box"></span>
                                        </label>
                                    </div>
                                    <div class="col-md-8 f-2"  style="margin-top: -5px;" v-if="data.status=='create'">
                                        {{data.name}}
                                    </div>
                                    <div class="col-md-8 f-2 text-secondary"  style="margin-top: -5px;" v-else>
                                        <del>{{data.name}}</del>
                                    </div>
                                </div>


                            </div>

                            <div class="text-right">
                                <button class="btn btn-success f-1-8" @click="addupdate_pax()">Add Pax Details</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">
                        <!--                        <div class="box-header">-->
                        <!--                            <h3 class="box-title"></h3>-->
                        <!--                        </div>-->
                        <div class="col-md-12 container-fluid" >
                            <div class="row" >
                                <div class="col-md-2" style="padding: 16px 40px 40px 40px !important;" >
                                    <label for="groups">Select Dealership</label>
                                    <v-select v-model="dealer_list_modal"
                                              :clearable="false"
                                              name="dealer"
                                              label="dealer"
                                              :options="dealerships_filtered"
                                              style="background:#fff;"
                                              @input="in_dealer_modal"
                                              :disabled="dealer_filter_status"
                                    />
                                </div>
                                <div class="col-md-2" style="padding: 16px 40px 40px 40px !important;">
                                    <label for="groups">Select Hub</label>
                                    <v-select v-model="hub_list_modal"
                                              :clearable="false"
                                              name="hub"
                                              label="hub"
                                              :options="hub_filtered"
                                              style="background:#fff;"
                                              @input="in_hub_model"
                                              :disabled="hub_filter_status"


                                    />
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
                                <div class="col-md-3" style="padding: 35px;">
                                    <div class="col-sm">
                                        <download-excel
                                            class   = "btn btn-default"
                                            :data   = "all_members_data"
                                            :fields = "json_fields"
                                            worksheet = "My Worksheet"
                                            name    = "group_members.xls"
                                        >
                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>
                                        </download-excel>


                                        <a
                                            class   = "btn btn-default"
                                            :href="members_url"

                                        >

                                            <i class="fa fa-list f-2 " aria-hidden="true extension_img"></i>

                                            <br>
                                            <p class="extension_title">Members List</p>

                                        </a>
                                    </div>

<!--                                    <div class="col-sm">-->
<!--                                        <download-excel-->
<!--                                            class   = "btn btn-default"-->
<!--                                            :data   = "all_members_data"-->
<!--                                            :fields = "json_fields"-->
<!--                                            worksheet = "My Worksheet"-->
<!--                                            name    = "all_group_members.xls"-->
<!--                                        >-->
<!--                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="Excel" ><br><p class="extension_title">Excel</p>-->
<!--                                        </download-excel>-->

<!--                                        <download-excel-->
<!--                                            class   = "btn btn-default"-->
<!--                                            :data   = "all_members_data"-->
<!--                                            :fields = "json_fields"-->
<!--                                            type    = "csv"-->
<!--                                            name    = "all_group_members.csv"-->
<!--                                        >-->
<!--                                            <img data-v-790cf42a="" class="extension_img" src="./../dashboard_resources/excel.png" alt="CSV"  ><br>-->
<!--                                            <p class="extension_title">CSV</p>-->

<!--                                        </download-excel>-->
<!--                                    </div>-->

                                </div>

                            </div>
                            <div class="row " style=";margin-bottom: -30px;">

                                <div class="col-12">
                                    <div class="btn-group"  >
                                        <button type="button" @click="add_data('master_dump','Master Dump')" class="btn btn-info btn-lg f-1-5 f-w600 mr-2" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Master Report</button>
                                        <button type="button" @click="add_data('doc_dump','Pending Documents')" class="btn btn-primary btn-lg f-1-5 f-w600" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Document Report</button>
                                        <button type="button" @click="add_data('form_dump','Form Responses')" class="btn btn-warning btn-lg f-1-5 f-w600 ml-2" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Form Responses Report</button>
                                        <button type="button" @click="add_data('visa_bio','Visa Appointments')" class="btn btn-danger btn-lg f-1-5 f-w600 ml-2" style="border-radius: 20px;padding-left: 50px;padding-right: 50px;color: white;">Visa Appointment Report</button>

                                        <!-- Add Mice Pax Details for TC/SOTC-->
                                        <button type="button" @click="fetch_pax()" class="btn btn-danger btn-lg f-1-5 f-w600  ml-2" style="border-radius: 20px;background: #4cbdec;color: white;border: white;">Add Mice Pax Details</button>




                                    </div>


                                </div>



                                </div>
                            </div>

                        </div>


                        <div class="box-body " style="margin-top: 170px">


<!--                            <table class="table table-striped">-->
<!--                                <thead>-->
<!--                                <tr>-->
<!--                                    <th class="font_style2" scope="col">Traveller Name</th>-->


<!--                                </tr>-->
<!--                                </thead>-->
<!--                                <tbody>-->
<!--                                    <tr v-for="(post,index) in bookings_data" :key="post.id">-->
<!--                                        <td>{{post.name}}</td>-->
<!--                                    </tr>-->
<!--                                </tbody>-->
<!--                            </table>-->



                            <datatable
                                v-if="!loading"
                                :columns="columns"
                                :data="data"
                                :total="total"
                                :query="query"
                                :xprops="xprops"
                                :HeaderSettings=false
                            />
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
    import AllGroupMemberShowStatus from "../../dtmodules/AllGroupMemberShowStatus";
    import AllGroupPAymentStatus from "../../dtmodules/AllGroupPAymentStatus";
      // for TC/SOTC
    import tickpax from "../../dtmodules/tickpax";
    import JsZip from 'jszip'
    import LocationPlaceEditComponent from "../Locationsplaceedit";
    import allMemberListPaxName from "../../dtmodules/allMemberListPaxName";
    import visastatus from "../../dtmodules/visastatus";



    export default {
        data() {
            return {
                columns: [
                    // { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                    //  for TC/SOTC
                    {title: '#', tdComp: tickpax, visible: true, tdClass: 'font_style ', thClass: 'font_style2',},
                    {
                        title: 'Traveller Name',
                        tdComp: allMemberListPaxName,
                        visible: true,
                        tdClass: 'font_style ',
                        thClass: 'font_style2',
                    },
                    // { title: 'Traveller Name', field: 'name',colStyle: 'width: 15%;' ,tdClass: 'font_style',thClass: 'font_style2' },
                    {title: 'Relation', field: 'relation', tdClass: 'font_style', thClass: 'font_style2'},
                    {title: 'Dealership', field: 'dealership', tdClass: 'font_style', thClass: 'font_style2'},
                    {
                        title: 'Payment',
                        tdComp: AllGroupPAymentStatus,
                        visible: true,
                        tdClass: 'font_style',
                        thClass: 'font_style2',
                    },
                    {title: 'Mobile No.', field: 'phone', tdClass: 'font_style', thClass: 'font_style2'},
                    {title: 'Email', field: 'email', tdClass: 'font_style', thClass: 'font_style2'},
                    // { title: 'Booking No.', field: 'booking_id',tdClass: 'font_style',thClass: 'font_style2'},

                    {title: 'Airport Hub', field: 'airport_hub', tdClass: 'font_style', thClass: 'font_style2'},
                    {title: 'Visa Hub', field: 'visa_hub', tdClass: 'font_style', thClass: 'font_style2'},
                    {
                        title: 'No Show',
                        tdComp: AllGroupMemberShowStatus,
                        visible: true,
                        tdClass: 'font_style',
                        thClass: 'font_style2',
                    },
                    {
                        title: 'Visa Status',
                        tdComp: visastatus,
                        visible: true,
                        tdClass: 'font_style',
                        thClass: 'font_style2',
                    },


                ],
                query: {sort: 'id', order: 'asc'},
                xprops: {
                    module: 'GroupAllMember',
                    route: 'groups',
                    permission_prefix: 'group_'
                },
                localsearch: '',
                json_fields: {
                    'Traveller Name': 'name',
                    'Dealership': 'dealership',
                    'Relation': 'relation',
                    'Payment Status': 'paid',
                    'Mobile No.': 'phone',
                    'Email': 'email',
                    'Itinerary': 'tour_name',
                    'Itinerary No.': 'booking_id',
                    'No Show Status': 'show_status',
                    'Airport Hub': 'airport_hub',
                    'Visa Hub': 'visa_hub',
                    'Visa Status': 'visa_status',


                },
                json_fields2: {
                    'Traveller Name': 'name',

                },

                json_data: [],
                filtermodel: false,
                filtertoggle: false,
                showtoagency: true,
                clear: false,
                search: true,
                group_id: '',
                total_members: 0,
                login_members: 0,
                req_doc: 0,
                total_doc: 0,
                show_modal: false,
                show_modal2: false,
                show_modal3: false,
                show_modal4: false,
                show_modal5: false,
                doc_data: [],
                doc_sms: false,
                doc_mail: false,
                loading2: false,
                subject: '',
                sms_text_content: 'Insurance/ Passport documents will be provided by travel agent so ignore.',
                mail_text_content: 'Insurance/ Passport documents will be provided by travel agent so ignore.',
                sms_logs: '',
                license: {},
                doc_data_new: [],
                rooming_url: '',
                pending_doc_data: [],
                members_url: '',
                dealer_list_modal: {'dealer': 'All'},
                hub_list_modal: {'hub': 'All'},
                laravelData: {},
                // pax_data for TC/SOTC
                pax_data: [],
                hub_filter_status: false,
                dealer_filter_status: false,
                bookings_data:[]

            }
        },
        mounted() {
            this.setcolumn(['tour_name',
                'name',
                'booking_id',
                'email',
                'dealership',
                'phone']);

            // axios.get('/api/v1/groupsmember2?id=' + this.$route.params.id +'&page='+1)
            //     .then(response => {
            //         this.bookings_data=response.data.data;
            //
            //     })
        },
        created() {


            this.rooming_url = "/groups/" + this.$route.params.id + "/roomall";
            this.members_url = "/members/" + this.$route.params.id

            if (document.querySelector("meta[name='user-role']").getAttribute('content') === "agency") {
                this.showtoagency = false
            }
            this.$root.relationships = this.relationships

            axios.get('/api/v1/group_details/' + this.$route.params.id)
                .then(response => {
                    this.group_id = response.data.data[0].booking_id
                })

            this.fetchData(this.$route.params.id)


            if (document.querySelector("meta[name='user-role']").getAttribute('content') === "lms_agent") {
                var agency_id = JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id
            } else if (document.querySelector("meta[name='user-role']").getAttribute('content') === "agency" ||
                document.querySelector("meta[name='user-role']").getAttribute('content') === "Administrator (can create other users)") {

                var agency_id = JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content'))

            }
            axios.get('/api/v1/user/license/' + agency_id)
                .then(response => {
                    this.license = JSON.parse(response.data.data[0].meta_value);
                })

        },
        destroyed() {
            this.resetState()
        },
        computed: {
            ...mapGetters('GroupAllMember', ['page_num', 'pagedata', 'filter_str', 'hub', 'dealerships', 'all_members_data', 'hub_filtered', 'dealerships_filtered', 'search', 'data', 'total', 'loading', 'relationships', 'filter_obj']),
            rows() {
                return this.items.length
            }
        },
        watch: {
            filtertoggle: function () {
                if (this.filtertoggle) {
                    this.filtermodel = true;
                } else {

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
            data: function () {

                this.json_data = this.data;
                this.total_members = 0;
                this.login_members = 0;
                for (var b = 0; b < this.json_data.length; b++) {
                    this.total_members++;
                    if (this.json_data[b]['login'] == "1") {
                        this.login_members++;
                    }
                }


            },
            license: function () {
                let form = new FormData();

                form.set("id", this.$route.params.id)
                form.set("source", 'index')
                axios.post('/api/webservices/member_docs', form)
                    .then(response => {

                        if (response.data == null) {
                            this.req_doc = 0;
                            this.total_doc = 0;

                        } else {


                            const objectArray = Object.entries(response.data);

                            this.total_doc = this.total_members * objectArray.length;
                            // alert(this.total_doc);
                            for (var y = 0; y < objectArray.length; y++) {
                                this.doc_data.push({
                                    // objectArray[y][1] : objectArray[y][1]['value']
                                    'name': objectArray[y][0],
                                    'value': objectArray[y][1]['value'],
                                });
                                if (objectArray[y][1]['value'] > 0) {

                                    this.req_doc += objectArray[y][1]['value'];
                                }
                            }
                            // console.log(this.doc_data);
                        }

                    });
            },

        },
        methods: {
            ...mapActions('GroupAllMember', ['sethubfilter', 'setfilter', 'fetchData', 'setQuery', 'resetState', 'setsearch', 'setcolumn', 'setfilter', 'setreverse']),

            reverse() {
                this.setreverse();
            },
            add_data(type, file_name) {
                this.loading2 = true;
                let form = new FormData();
                form.set('id', this.$route.params.id);
                form.set('type', type);
                axios.post('/api/webservices/fetch_group_excel_dump', form)
                    .then(response => {

                        if (response.data.status == 'true') {

                            // console.log(JSON.stringify(response.data.data.data));


                            this.exportToCsv(file_name + '.csv', response.data.data.data);
                            this.loading2 = false;
                    }
                    else{
                            this.loading2 = false;
                            alert('No Data Defined');
                        }
                    })
                    .catch(error => {
                        this.loading2 = false;
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

                var blob = new Blob([csvFile], {type: 'text/csv;charset=utf-8;'});
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
                if (this.localsearch != '') {
                    this.search = false;
                    this.clear = true;
                }
            },
            clearsearch() {
                this.localsearch = ""
                this.setsearch(this.localsearch)

                this.search = true;
                this.clear = false;
            },
            applyfilter() {
                this.clearsearch();
                this.filter_obj.status = true
                this.setfilter();
                this.filtermodel = false
                this.filtertoggle = true
            },
            clearfilter() {
                this.clearsearch();
                this.filter_obj.filter_sector = '';
                this.filter_obj.queryfilter = '4';
                this.filter_obj.filter_datefrom = '';
                this.filter_obj.filter_dateto = '';
                this.filter_obj.status = false
                this.filtertoggle = false

            },


            in_dealer_modal(e) {
                this.hub_filter_status = true;

                let return_arr = [];
                this.hub_list_modal = {'hub': 'All'};
                this.setfilter(e.dealer)
                if (e.dealer == 'All') {
                    this.hub_filter_status = false;
                }

                // this.loading2=true;
                // this.mem_data.forEach((data)=>{
                //     data.get_meta.forEach((meta)=>{
                //         if(meta.meta_key=='dealership'){
                //             if(meta.meta_value.toLowerCase().includes(e.dealer.toLowerCase())){
                //                 data.status=true;
                //                 return_arr.push(data)
                //             }
                //         }
                //     })
                // })
                //
                // this.mem_data_filtered=_.cloneDeep(return_arr);
                // this.loading2=false;
            },
            in_hub_model(e) {
                this.dealer_filter_status = true;
                this.dealer_list_modal = {'dealer': 'All'};

                // console.log(e.hub);
                this.sethubfilter(e.hub);
                if (e.hub == 'All') {
                    this.dealer_filter_status = false;
                }

            },
            fetch_pax() {


                let final_data = [];

                this.data.forEach((data) => {
                    let data_arr = [];

                    if (!data.cancelled_status) {


                        // console.log(data.check_status)
                        if (data.add_update_status == 'create') {
                            if (data.check_status) {

                                final_data.push({"name": data.name, 'id': data.id, 'paxid': data.paxid});
                            }
                        }


                    }


                })

                if (final_data.length == 0) {
                    alert('Please Select Members');
                    return false;
                }
                // if(counter!=0){
                //     alert('Cannot Select Disabled Members!');
                //     return false;
                // }
                // console.log(final_data);
                this.loading2 = true;
                let form = new FormData();
                form.set("id", this.$route.params.id)
                form.set("flag", true)
                form.set("members_data", JSON.stringify(final_data))
                axios.post('/api/v1/savepaxdetails', form)
                    .then(response => {
                        this.loading2 = false;

                        this.$eventHub.$emit('update-success')
                        this.fetchData(this.$route.params.id)


                    })
                    .catch(error => {
                        this.loading2 = false;
                        alert(error);

                    })



            },
            addupdate_pax() {
                let final_data = [];
                let flag = 0;
                let counter = 0;
                this.pax_data.forEach((data) => {
                    // console.log(data);
                    if (data.selected_status) {
                        flag++;
                        final_data.push(data);
                    }
                    if (data.status != 'create') {
                        if (data.selected_status) {
                            counter++;
                        }
                    }

                })

                if (flag == 0) {
                    alert('Please Select Members');
                    return false;
                }
                if (counter != 0) {
                    alert('Cannot Select Disabled Members!');
                    return false;
                }

                console.log(final_data);


            },
            components: {
                AllGroupPAymentStatus,
                AllGroupMemberShowStatus

            }


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
    .icon[data-v-c2b59c6a] {
        background: black;
        color: white;
        padding: 10px 7px 16px 7px;
        border-radius: 5px;
    }
    .icon_button {
        padding: 0px 36px 2px 18px;
        border-radius: 0px 5px 5px 0px;
        margin-left: -2px;
    }
    .input-group[class*="col-"] {
        float: none;
        padding: 40px 40px 40px 100px !important;
    }
    .filter_bar2[data-v-c2b59c6a] {
        width: 60% !important;
        height: 100%;
        border-radius: 20px 0px 0px 20px;
        border: 1px solid white;
        padding-left: 10px;
        font-size: 15px !important;
        margin-left: 50px;
    }
</style>
<!-- this style is used for TC/SOTC-->
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

</style>
