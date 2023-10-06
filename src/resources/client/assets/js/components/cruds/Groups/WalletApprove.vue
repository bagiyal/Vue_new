<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Approval Requests <span v-if="list_data.length > 0">: {{list_data[0].get_driver.name}}</span></h1>
        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">
                        <div class="box-body">
<!--                            <div class="row">-->
<!--                                <div class="col-md-3" v-if="!params">-->
<!--                                    <label for="group">Select Group</label>-->
<!--                                    <v-select  v-model="group_modal"-->
<!--                                              :clearable="false"-->
<!--                                              name="group"-->
<!--                                              label="label"-->
<!--                                              :options="group"-->
<!--                                              style="background:#fff;"-->
<!--                                              @input="in_modal($event)"-->

<!--                                    />-->

<!--                                </div>-->
<!--                                <div class="col-md-3" v-if="!params">-->
<!--                                    <label for="manager">Select Tour Manager</label>-->
<!--                                    <v-select-->
<!--                                        :clearable="false"-->
<!--                                        name="tm"-->
<!--                                        v-model="driver_modal"-->
<!--                                        label="label"-->
<!--                                        :options="driver"-->
<!--                                        style="background:#fff;"-->
<!--                                        @input="in_modal2($event)"-->
<!--                                    />-->
<!--                                </div>-->
                                <div class="mt-5 text-right" :class="params?'col-md-12':'col-md-6'"  v-if="list_data.length > 0">
                                    <button href="#"  class="btn btn-success f-1-2 button button-css" @click="accept('all')" style="width: 100px">Approve</button>
                                    <button href="#"  class="btn btn-danger f-1-2 button-css"  @click="reject_trans('all')" style="width: 100px;margin-left: -15em">Reject</button>
                                    <button href="#"  class="btn btn-primary f-1-2 " @click="get_live_bal" style="width: 100px">Check Balance</button>
                                    <button href="#"  class="btn btn-primary f-1-2 " @click="refresh" style="width: 100px">Refresh List</button>
                                    <button href="#"  class="btn btn-success f-1-2 " @click="excel_export" style="width: 100px"><i class="fa fa-file-excel-o" /> Excel Report</button>
                                </div>
                                <div class="mt-5 text-left" :class="params?'col-md-2':'col-md-2'"  v-if="list_data.length > 0">
                                    <label class="container_input" >
                                        <h3 class="text-dark">{{selectAll?'Unselect All':'Select All'}}</h3>
                                        <input type="checkbox" @change="UpdateCheckbox" checked  v-model="selectAll">
                                        <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                    </label>

                                </div>

                            </div>

                            <!--                                How it works data-->
<!--                            <button v-if="list_data.length>0" class="accordiona" @click="accordion2=!accordion2"><i class="fa fa-info-circle" aria-hidden="true"></i>-->
<!--                                <b class="f-1-8">How it works?</b>-->


<!--                                <i class="fa fa-times" aria-hidden="true" v-if="accordion2" style="float: right"></i>-->
<!--                                <i class="fa fa-angle-down" aria-hidden="true" v-else style="float: right"></i>-->

<!--                            </button>-->
<!--                            <div class="panela" v-if="accordion2">-->
<!--                                    <span class="f-1-6">-->
<!--                                        <p>NB : Any if you do not see a master set of documents-->
<!--                                                    then ask your agency admin to create the same. You can also add custom documents-->
<!--                                                    here in the list then drag them to right hand side to make them available for the tour.</p></span>-->
<!--                            </div>-->
                            <div class="" :class="platform!='sotc'?'tscroll tableFixHead':''" style="overflow: auto;" v-if="list_data.length > 0">




                            <table class="table table-bordered table-hover" style="background-color: white;text-align: center">
                                <thead class="thead-light">
                                <tr class="f-1-3">
                                    <th  class="bg-transparent" ></th>
                                    <th scope="col" >#</th>
                                    <th scope="col" >Transaction Date</th>
                                    <th scope="col">Transaction Category</th>
                                    <th scope="col">Transaction By</th>
                                    <th scope="col">Transaction Currency</th>
                                    <th scope="col">Debit Amount</th>
                                    <th scope="col">Credit Amount</th>
                                    <th scope="col" title="ATM Withdrawal Fee">Fee</th>
                                    <th scope="col" title="Rate Of Exchange">ROE</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Attachment</th>
                                    <th  >Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(trans,index) in list_data" v-if="trans.show_transaction==0 || trans.show_transaction==3" :style="trans.show_transaction!=0 ? 'background-color: rgb(255, 50, 50,0.3) !important' :trans.refId!=0 ? 'background-color: rgb(50, 255, 50,0.3) !important' :''" :title="trans.show_transaction!=0?'Deleted':trans.refId!=0 ?'Edited':''">

                                    <td class="" style="margin-top: 3px; width: 30px" :style="trans.show_transaction!=0 ?'border: none !important' :''">
                                        <label class="container_input" v-if="trans.show_transaction==0">
                                            <input type="checkbox" checked :id="trans.submission_status" v-model="trans.submission_status">
                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                                        </label>
                                    </td>
                                    <td >{{index+1}}</td>
                                    <td >{{moment_format(trans.time_of_transaction)}}</td>
                                    <td v-if="trans.sub_category!=null && trans.sub_category!=''">{{trans.category}}({{trans.sub_category}})</td>
                                    <td v-else>
                                        <p v-if="trans.category=='tm_transfer'">Transfer</p>
                                        <p v-else-if="trans.category=='atm_same_currency'">ATM Same Currency withdrawal</p>
                                        <p v-else-if="trans.category=='atm_cross_currency'">ATM Cross Currency withdrawal</p>
                                        <p v-else-if="trans.category=='misc_collection'">Miscellaneous Collection</p>
                                        <p v-else-if="trans.category=='cross_currency_by_card'">Cross Currency Exchange By Card</p>
                                        <p v-else>{{trans.category}}</p>
                                    </td>
                                    <td >{{trans.transaction_by_filtered}}</td>
                                    <td >{{trans.currency}}</td>
                                    <td :class="trans.debit_amount==0?'text-secondary':'text-danger'">{{trans.debit_amount==0?'-':trans.debit_amount}}</td>
                                    <td :class="trans.credit_amount==0?'text-secondary':'text-success'">{{trans.credit_amount==0?'-':trans.credit_amount}}</td>
                                    <td :class="trans.atm_withdrawl_fees==0?'text-secondary':'text-danger'">{{trans.atm_withdrawl_fees==0?'-':trans.atm_withdrawl_fees}}</td>
                                    <td >{{trans.roe?trans.roe:'-'}}</td>
                                    <td >{{ trans.description!=null?trans.description:'-'}}</td>
                                    <td  v-if="trans.image!='' && trans.image!=null" class="text-primary font-weight-bold cursor " ><a :href="base_url+'/'+trans.image" target="_blank" :title="trans.category">Link</a> </td>
                                    <td v-else   >-</td>
                                    <td   >

                                        <i  v-if="trans.show_transaction==0" class="fa fa-pencil-square-o button_style cursor" :class="trans.submission_remark?'text-success':'text-danger'" style="" alt="Add Remark" title="Add Remark" @click="transindex=index,remark_modal=true"  aria-hidden="true"></i>

                                        <p v-if="trans.show_transaction==3" class="text-danger font-weight-bold">Deleted</p>
                                        <!--                                        <i  v-if="platform!='sotc'"  class="fa fa-check button_style cursor" style="color: green;margin-right: 5px;margin-left: 5px" alt="Approve" title="Approve" @click="accept(trans.id)"  aria-hidden="true"></i>-->
                                        <!--                                        <i  v-if="platform!='sotc'" class="fa fa-times button_style cursor" style="color: red;margin-left: 5px" alt="Reject" title="Reject" @click="reject_trans(trans.id)"  aria-hidden="true"></i>-->

                                    </td>

                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <div class="container center" v-else>
                                <h2>No Approval Transactions Available!</h2>
                            </div>

                        </div>
                    </div>
                </div>
        </section>

        <div class="container"  v-if="reject_modal">
            <div class="modal show in" id="" style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Remark</h5>
                            <button type="button" class="close" @click="reject_modal=false">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">


                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Remark:</label>
                                    <textarea class="form-control" id="message-text" v-model="remark" ></textarea>
                                </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger " @click="reject(reject_id)" :disabled="remark==null || remark==''">Reject Transaction</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container"  v-if="remark_modal">
            <div class="modal show in"  style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" >Add Remark</h5>
                            <button type="button" class="close" @click="remark_modal=false">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">


                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Remark:</label>
                                    <textarea class="form-control"  v-model="list_data[transindex].submission_remark" ></textarea>
                                </div>

                        </div>
                        <div class="modal-footer">
                            <button v-if="transindex>0" type="button" class="btn btn-success " @click="transindex--" >Previous Remark</button>
                            <button type="button" class="btn btn-success " @click="remark_modal=false" >Save Remark</button>
                            <button v-if="transindex<list_data.length-1" type="button" class="btn btn-success " @click="transindex++" > Next Remark</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class="container"  v-if="livebal_modal">
            <div class="modal show in"  style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" >Current Balance</h5>
                            <button type="button" class="close" @click="livebal_modal=false">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table class="table" style="background-color: white;text-align: center">
                                <thead>
                                <tr >
                                    <th scope="col" >#</th>
                                    <th scope="col" >Currency</th>
                                    <th scope="col" >
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-6">Cash Balance</div>
                                                <div class="col-md-6">Card Balance</div>
                                            </div>
                                        </div>

                                    </th>



                                </tr>
                                </thead>
                                <tbody class="f-1-4" >
                                <tr v-for="(bal,bal_cur,index) in liveBal">
                                    <td>{{index+1}}</td>
                                    <td>{{bal_cur}}</td>
                                    <!--                                                    <td>{{bal[0]}}</td>-->
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
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="livebal_modal=false" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>

</template>

<script>
    import moment from 'moment'
    export default {
        name: "WalletApprove",
        data(){
            return {
                loading:false,
                params:false,
                reject_modal:false,
                data:[],
                group:[],
                driver:[],
                list_data:[],
                base_url:'',
                reject_id:null,
                remark:null,
                group_modal:null,
                driver_modal:null,
                remark_modal:false,
                level:null,
                platform:null,
                transindex:null,
                accordion2:false,
                liveBal:{},
                livebal_modal:false,
                selectedData:{'grpId':null,'managerId':null},
                selectAll:true,

            }
        },
        mounted() {
            this.base_url = window.location.origin;
            this.platform= document.querySelector("meta[name='platform']").getAttribute('content')

            if(this.$route.params.grpid!=undefined){
                // alert(this.$route.params.grpid);
                this.params=true;
                this.selectedData.grpId=this.$route.params.grpid;
                this.selectedData.managerId=this.$route.params.id;
            }

            let form = new FormData();
            // this.level=document.querySelector("meta[name='level']").getAttribute('content');
            // form.set('level',this.level);
            if(this.params){

                form.set('driver_id',this.$route.params.id);
                form.set('grp_id',this.$route.params.grpid);


                axios.post('/api/v1/PendingWalletApproval',form)
                    .then((response) => {

                        if(response.data.status){



                                this.level=response.data.level;

                            this.data=_.cloneDeep(response.data.data);
                            if(this.params){
                                this.list_data=_.cloneDeep(this.data)
                            }
                            else{
                                let group_arr=[];
                                let group_arr2=[];
                                this.data.forEach((trans)=>{
                                    // console.log(trans);
                                    group_arr.push(trans.get_group.booking_id)
                                })


                                group_arr= [ ...new Set(group_arr) ];
                                for(var k2=0;k2<group_arr.length;k2++){

                                    group_arr2.push({
                                        'label' : group_arr[k2]
                                    });
                                }
                                this.group=_.cloneDeep(group_arr2);
                            }

                        }
                        else{
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: response.data.errors,
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 5000
                            })
                        }

                    })
                    .catch((error) => {
                        console.log(error);
                    })

            }
            else{

                this.$swal.fire({
                    type: 'error',
                    icon: 'error',
                    title: 'No Data Available! Please Open this page using email link',
                    showCloseButton:true,
                    showConfirmButton: true,
                    timer: 3500
                })

            }



        },
        methods: {
            UpdateCheckbox(){
                try{
                    let flag=0;
                    this.list_data.forEach((trans)=>{
                        if(trans.show_transaction==0){
                            this.list_data[flag].submission_status=_.cloneDeep(this.selectAll);

                        }
                        flag++
                    })

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
            get_live_bal(){
                this.liveBal= {}


                axios.get('/api/v1/LiveBalance/'+this.selectedData.grpId+'/'+this.selectedData.managerId)
                    .then(response => {
                            if(response.data.status){
                                if(Object.keys(response.data.data).length!=0){

                                    this.liveBal=response.data.data
                                    this.livebal_modal=true;
                                }
                                else{
                                    this.liveBal= {}
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

                        this.errors.push("Error while fetching");
                        this.errormodal=true;
                    })
            },
            in_modal(e){
                this.selectedData.grpId=null;
                let return_arr=[];
                let return_arr2=[];
                this.data.forEach((trans)=>{
                    if(trans.get_group.booking_id==e.label){

                        this.selectedData.grpId=trans.group_id;
                        return_arr.push('#'+trans.get_driver.id+'-'+trans.get_driver.name)
                    }
                })
                // console.log(return_arr);

                return_arr= [ ...new Set(return_arr) ];
                for(var k2=0;k2<return_arr.length;k2++){

                    return_arr2.push({
                        'label' : return_arr[k2]
                    });
                }
                this.driver=_.cloneDeep(return_arr2);




            },
            in_modal2(e){
                let return_arr=[];
                this.selectedData.managerId=null;
                this.data.forEach((trans)=>{

                    if('#'+trans.get_driver.id+'-'+trans.get_driver.name == e.label){
                        this.selectedData.managerId=trans.get_driver.id;
                        return_arr.push(trans);
                    }
                })
                this.list_data=_.cloneDeep(return_arr);

            },

            moment_format(date) {
                return moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY');
            },
            reject_trans(id){
                this.reject_id=id
                this.$swal({
                    title: 'Have you updated the remark?',
                    text: '',
                    type: 'question',
                    showCancelButton: true,
                    cancelButtonText: "Yes I have Updated",
                    cancelButtonColor: 'green',
                    confirmButtonClass:'f-22',
                    confirmButtonText:"No I haven't updated yet",
                    confirmButtonColor: 'blue',
                    focusCancel: true,
                    reverseButtons: true,
                    allowOutsideClick:false,
                    showCloseButton:true,
                    closeButtonAriaLabel:'Close',
                    closeButtonColor: 'blue',
                })
                    .then(result => {

                        if (result.value) {
                            // No I haven't updated yet


                            this.$swal({
                                title: 'Do you want to update them?',
                                text: '',
                                type: 'question',
                                showCancelButton: true,
                                cancelButtonText: "Yes",
                                cancelButtonColor: 'green',
                                confirmButtonClass:'f-22',
                                confirmButtonText:"No, Continue without remark",
                                confirmButtonColor: 'blue',
                                focusCancel: true,
                                reverseButtons: true,
                                allowOutsideClick:false,
                                showCloseButton:true,
                                closeButtonAriaLabel:'Close',
                                closeButtonColor: 'blue',
                            })
                                .then(result => {

                                    if (result.value) {
                                        // No, Continue without remark
                                           this.reject(id);
                                    }
                                    else if(result.dismiss=='cancel'){
                                        // yes

                                    }

                                })



                        }
                        else if(result.dismiss=='cancel'){
                            // Yes I have Updated
                            this.reject(id);

                        }

                    })
            },
            reject(id){
                let ids=[];
                let lists=[];
                if(id!='all'){
                    ids.push(id);
                }
                else{
                    this.list_data.forEach((data)=>{
                        if( data.submission_status){
                            lists.push(data);
                        }

                    })
                }

                if(this.level!=null){
                    let form=new FormData();
                    form.set('grpId',this.$route.params.grpid);
                    form.set('level',this.level);
                    form.set('data',JSON.stringify(lists));
                    form.set('remark',this.remark);
                    form.set('trigger','reject');
                        axios.post('/api/v1/UpdateWalletStatus',form)
                        .then((response) =>{
                            if(response.data.status){
                                this.refresh();
                                this.$swal.fire({
                                    type: 'success',
                                    icon: 'success',
                                    title: 'Transactions Rejected',
                                    // showCloseButton:true,
                                    // showConfirmButton: true,
                                    timer: 2500
                                })
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            alert('Some Error Occured!');

                        })

                }
                else{
                    alert('Some Error Occured!');
                }

                this.reject_modal=false;
                this.remark=null;
            },
            accept(id){
                let ids=[];
                let lists=[];
                if(id!='all'){
                    ids.push(id);
                }
                else{

                    this.list_data.forEach((data)=>{
                        if( data.submission_status){
                            lists.push(data);
                        }


                    })
                }

                if(this.level!=null){

                    let form=new FormData();
                    form.set('grpId',this.$route.params.grpid);
                    form.set('level',this.level);
                    form.set('data',JSON.stringify(lists));
                    form.set('trigger','approve');
                    axios.post('/api/v1/UpdateWalletStatus',form)
                     .then((response) =>{
                            // console.log(response.data);
                            if(response.data.status){
                                this.refresh();
                                this.$swal.fire({
                                    type: 'success',
                                    icon: 'success',
                                    title: 'Transactions Accepted',
                                    // showCloseButton:true,
                                    // showConfirmButton: true,
                                    timer: 2500
                                })
                            }
                            else{
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: response.data.error,
                                    // showCloseButton:true,`
                                    // showConfirmButton: true,
                                    timer: 2500
                                })
                            }


                        })
                     .catch((error) => {
                            console.log(error);
                            alert('Some Error Occured!');

                        })
                }
                else{
                    alert('Some Error Occured!');
                }

            },
            refresh(){
                this.group=[];
                this.driver=[];
                this.list_data=[];
                this.driver_modal=null;
                this.group_modal=null;
                let form = new FormData();

                if(this.params){

                    form.set('driver_id',this.$route.params.id);
                    form.set('grp_id',this.$route.params.grpid);

                }


                axios.post('/api/v1/PendingWalletApproval',form)
                    .then(response => {

                        if(response.data.status){

                            this.data=_.cloneDeep(response.data.data);
                            if(this.params){
                                this.list_data=_.cloneDeep(this.data)
                            }
                            else{
                                let group_arr=[];
                                let group_arr2=[];
                                this.data.forEach((trans)=>{
                                    // console.log(trans);
                                    group_arr.push(trans.get_group.booking_id)
                                })


                                group_arr= [ ...new Set(group_arr) ];
                                for(var k2=0;k2<group_arr.length;k2++){

                                    group_arr2.push({
                                        'label' : group_arr[k2]
                                    });
                                }
                                this.group=_.cloneDeep(group_arr2);
                            }

                        }
                        else{
                            alert('Some Error Occured');
                        }

                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            excel_export: async function(id){
                try{


                    let form=new FormData();
                    form.set('id',this.selectedData.grpId);
                    form.set('driver_id',this.selectedData.managerId);
                    form.set('type','transaction_log');
                    const {data}= await axios.post('/api/webservices/fetch_group_excel_dump',form)
                    if(data.status){
                        this.exportToCsv(this.list_data[0].get_driver.name+' Expense Sheet.csv', data.data.data);
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
        },

    }
</script>

<style scoped>
    .table td,
    .table th {
        white-space: nowrap;
        width: 1%;
    }


    .tscroll {

        overflow-x: scroll;
        margin-left: 3em;
        margin-right: 8em;
        overflow-y: visible;
        padding: 0;
    }
    .headcol {
        position: absolute;

        left: 0;
        top: auto;

    }
    .headcol2{
        position: absolute;
        right: 0px;
        top: auto;
        background: #e9ecef;
        background-color: rgb(233, 236, 239);
        width: 80px !important;
    }
    .bg-transparent{
        background: none !important;
        border: none !important;
    }
    .table {
        width: 100%;
        margin-bottom: 1rem;
        color: #212529;
        margin-left: 2% !important;


    }

    .accordiona {
        background-color: #D1ECF1;
        color: #0C5477;
        cursor: pointer;
        padding: 6px;
        border-radius: 4px;
        width: 60%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
        margin-top: 10px;
    }
    .panela {
        padding: 18px;
        color: #0C5477;
        border-radius: 3px;
        border: 2px solid #D1ECF1;
        border-top: unset;
        font-size: 14px;
        background-color: white;
        overflow: hidden;
        width: 60%;
    }



</style>
