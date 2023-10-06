<template>
    <section class="content-wrapper"  style="margin-left: 5% !important;min-height: 960px;">

        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Poll \ Opt-in</h1>
        </section>

          <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">



                        <div class="col-md-12 container-fluid" >
                            <div class="row">
                                <div class="col-md-2">
                                    <div   class="box-body">
                                        <div class="btn-group" >
                                            <router-link

                                                :to="{ name: xprops.route + '.create' }"
                                                class="btn btn-success btn-sm "
                                                style="font-size: 15px"
                                            >
                                                <i class="fa fa-plus"></i> Add new
                                            </router-link>

                                            <button type="button" style="font-size: 15px;margin-left: 5px;background-color: #ffc107 !important;" class="btn btn-default btn-sm" @click="fetchData">
                                                <i class="fa fa-refresh" :class="{'fa-spin': loading}"></i> Refresh
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">

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


                                </div>

                            </div>
                        </div>


                        <div class="box-body">




                            <div v-if="show_modal===true">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-dialog " style="max-width: 1050px !important;">
                                                <div class="modal-content">
                                                    <div class="modal-header border-0 border-dotted" style="background: rgb(236, 240, 245) none repeat scroll 0% 0% !important;border-top-left-radius: 10px;border-top-right-radius: 10px;">
                                                        <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                                            <div class="row">
                                                                <div class="col-10">

                                                                </div>
                                                                <div class="col-2 text-right">
                                                                    <button type="button" class="close  f-2-5" @click="close_modal()">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                    <div class="modal-body" style="background: #ecf0f5 !important">
                                                        <div class="container-fluid c-grey">
                                                            <div class="row no-gutters">

                                                                <div class="col-md-12">
                                                                    <div class="input-group row" >
                                                                        <div class="col-md-4 border-right border-white text-center">
                                                                            <label for="field" style="color: black">Select Question Type</label><br>
                                                                            <div class="form-group">
                                                                                <v-select :clearable="false"
                                                                                          name="question_type"
                                                                                          v-model="type_model"
                                                                                          label="type"
                                                                                          :options="question_type"
                                                                                          class="bg-white"
                                                                                          @input="select_type"
                                                                                />
                                                                            </div>
                                                                        </div>





                                                                        <!--Question Field-->
                                                                        <div class="col-md-4  border-right border-white text-center"  >
                                                                            <label for="field" style="color: black">Question</label><br>



                                                                            <input type="text"
                                                                                   class="input form-control bg-white mt-2"
                                                                                   name="form_name"
                                                                                   style="width: 100% !important;border: none;border-radius: 5px;"
                                                                                   placeholder="Question"
                                                                                   v-model="item.question" >
                                                                        </div>
                                                                        <div class="col-md-4  border-right border-white "  >
                                                                            <label for="field" style="color: black">Remark</label><br>
                                                                            <textarea
                                                                                class="form-control bg-white "
                                                                                name="form_name"
                                                                                style="width: 100% !important;border: none;border-radius: 5px;"
                                                                                placeholder="Enter Remark"
                                                                                cols="100" rows="3"
                                                                                v-model="item.remark" > </textarea>

                                                                        </div>
                                                                        <div class="col-md-4"  >
                                                                            <label for="field" style="color: black">Add Fields</label><br>
                                                                            <div v-for="(field,index) in item.options"  class="form-group">
                                                                                <input type="text"
                                                                                       class="input form-control bg-white mt-2"
                                                                                       name="form_name"
                                                                                       style="  width: 90% !important;margin-bottom: 10px;border-radius: 5px;"
                                                                                       placeholder="Option"
                                                                                       v-model="field.option">
                                                                                <i style="float:right;font-size:20px;margin-top: 5px;" class="fa fa-trash f-2-0" title="Delete" @click="item.options.splice(index, 1)" aria-hidden="true"></i>
                                                                            </div>
                                                                            <div class="col-md-12 f-1-8"><i title="Add" aria-hidden="true"  @click="item.options.push({'option':'',ans:''})" class="fa fa-plus-circle f-2-5"></i> &nbsp;&nbsp;Add more</div>
                                                                        </div>




                                                                    </div >

                                                                </div>

                                                            </div>

                                                            <div class="row mt-3">
                                                                <div class="col text-right" >
                                                                    <a class="button-css bg-success" style="color: white;" value="Save"  @click="save_question()" >Save</a>
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

                            <datatable
                                v-if="!loading"
                                :columns="columns"
                                :data="data"
                                :total="total"
                                :query="query"
                                :xprops="xprops"

                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'
    import DatatableActions from '../../dtmodules/DatatableActions'
    import DatatableSingle from '../../dtmodules/DatatableSingle'
    import DatatableList from '../../dtmodules/DatatableList'
    import DatatableCheckbox from '../../dtmodules/DatatableCheckbox'
    import DatatablePoll_expiredate from "../../dtmodules/DatatablePoll_expiredate";
    import PollIndex from '../../../../js/store/modules/Poll/index.js'
    import DatatablePoll_status from "../../dtmodules/DatatablePoll_status";
    import DatatableActionsPoll from "../../dtmodules/DatatableActionsPoll";
    // [{"id":1,"booking_id":"66","group_id":"41","agency_id":"4","name":"Shubham Handa",
    //     "email":"shubham.handa@econurture.in","question":"Select Cuisine",
    //     "question_type":"checkbox","options":"[{\"option\":\"Thai\",\"ans\":\"\"},{\"option\":\"Mexican\",\"ans\":\"\"}]"
    //     ,"remark":"","time":"1615542979","status":"true",
    //     "expire_time":"1615562460","poll_rpy_time":"","created_at":"2021-03-12 09:56:19","updated_at":"2021-03-12 09:56:19"}]

    export default {
        data() {
            return {
                columns: [
                    { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                    { title: 'Question', field: 'question', sortable: true },
                    { title: 'Type', field: 'question_type', sortable: true },
                    { title: 'Member Name', field: 'name', sortable: true },
                    { title: 'Group Id', field: 'group_id', sortable: true },
                    { title: 'Book Id', field: 'booking_id', sortable: true },
                    { title: 'Status', tdComp: DatatablePoll_status, visible: true },
                    { title: 'Exp. Time', tdComp: DatatablePoll_expiredate, visible: true },

                    { title: 'Actions', tdComp: DatatableActionsPoll, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }
                ],
                query: { sort: 'id', order: 'asc' },
                xprops: {
                    module: 'PollIndex',
                    route: 'poll',
                    permission_prefix: 'poll_',
                    update_id:''
                },
                user_role:'',
                clear:false,
                search:true,
                localsearch:'',
                // data:[],
                question:'',
                show_modal:false,
                item: {'question':'','type':'','options':[],'expire_time':'','remark':'','group_id':''},
                type:'',
                question_type:[{'type':'Radio','field':'radio'},{'type':'Check Box','field':'checkbox'}],
                type_model:{},
                user_id:'',
                role:'',
                counter:0,
                actualdata:[],

            }
        },
        created() {
            this.$root.relationships = this.relationships
            this.fetchData()
            var user_id=document.querySelector("meta[name='user-id']").getAttribute('content');

            var role=document.querySelector("meta[name='user-role']").getAttribute('content');

            if(role=='agency'){
                this.user_id=user_id;
                this.role=role;
            }
            else if(role=='lms_agent'){
                this.user_id=user_id;
                this.role=role;

            }


        },
        destroyed() {
            this.resetState()
        },
        computed: {
            ...mapGetters('PollIndex', [ 'data','total', 'loading']),
        },
        watch: {
            query: {
                handler(query) {
                    this.setQuery(query)
                },
                deep: true
            },
            // item: {'question':'','type':'','options':[],'expire_time':'','remark':'','group_id':''},
            "xprops.update_id": function () {
                if(this.xprops.update_id!=''){

                    this.data.forEach((data)=>{
                        if(this.xprops.update_id==data.id){
                            this.show_modal=true;
                            var data_poll=data;
                            console.log(data_poll.question);
                            this.item.question=data_poll.question;
                            this.item.options=JSON.parse(data_poll.options);
                            if(data_poll.question_type=='radio'){
                                data_poll.question_type='Radio';
                                this.type_model={"type":"Radio","field":"radio"};
                                this.type='radio';
                            }
                            else if(data_poll.question_type=='checkbox'){
                                data_poll.question_type='Check Box';
                                this.type_model={"type":"Check Box","field":"checkbox"};
                                this.type='checkbox';
                            }
                            this.item.expire_time=data_poll.expire_time;
                            this.item.remark=data_poll.remark;


                        }
                    })
                }
            }
        },
        methods: {
            ...mapActions('PollIndex', ['fetchData', 'setQuery', 'resetState','setsearch' ]),
            select_type(e){
                this.type=e.field;
                this.item.type=e.field;
                this.item.options=[];
                this.item.question='';

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



            save_question(){
                if(this.item.question!='' && this.item.type!=''){
                    var counter=0;
                    if(this.type!='text'){
                        var return_arr=[];
                        if(this.item.options.length>0){

                            this.item.options.forEach((data)=>{
                                if(data.key!=''){
                                    return_arr.push(data);
                                }
                            })
                            console.log(return_arr);

                        }
                        else if(this.item.options.length==0){
                            alert('Please Add Options');
                            return false;
                        }
                        else{
                            alert('Please Fill All Options');
                            return false;
                        }
                        if(return_arr.length>0){
                            counter=1;
                            this.item.options=_.cloneDeep(return_arr);

                        }



                    }


                        if(this.counter==0){
                            let form = new FormData();
                            if(this.role=='lms_agent'){
                                form.set("agent_id", this.user_id)
                                form.set("agency_id", "")
                            }
                            else  if(this.role=='agency'){
                                form.set("agent_id", "")
                                form.set("agency_id", this.user_id)
                            }
                            form.set("question_data", JSON.stringify(this.item))
                            form.set("counter", 1)
                            axios.post('/api/webservices/save_feedback_questions', form)
                                .then(response => {
                                    this.show_modal=false;
                                    this.type='';
                                    this.item= {'question':'','type':'','options':[]};
                                    this.type_model={};
                                    this.fetchData()
                                    this.$eventHub.$emit('create-success');
                                })
                        }
                        else if(this.counter==1){
                            let form = new FormData();

                            form.set("question_data", JSON.stringify(this.item))
                            form.set("counter", 2)
                            form.set("ques_id", this.xprops.update_id)
                            axios.post('/api/webservices/save_feedback_questions', form)
                                .then(response => {
                                    this.show_modal=false;
                                    this.xprops.update_id='';
                                    this.counter=0;
                                    this.type='';
                                    this.item= {'question':'','type':'','options':[]};
                                    this.type_model={};
                                    this.fetchData()
                                    this.$eventHub.$emit('create-success');
                                })
                        }



                }
                else{
                    alert('Please Fill All Fields');
                    return  false;
                }
            },
            close_modal(){
                this.show_modal=false;
                this.xprops.update_id='';
                this.counter=0;
                this.type='';
                this.item= {'question':'','type':'','options':[]};
                this.type_model={};
            },
        }
    }
</script>


<style scoped>
    .button-css{
        position: unset !important;
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
    .button-css{
        position: unset !important;
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
    .activedev{
        display: block !important;
    }
    .hidedev{
        display: none;
    }
    .bg-primary {
        color: white !important;
    }
    .v-select .selected-tag{
        display: none !important;
    }
    .hidetag .selected-tag{
        display: none !important
    }
    input[type="file"] {
        display: block !important;
    }
    .fa.fa-trash {
        font-size: 15px;
        padding: 3px;
    }
    .input{
        border: none;
        /*border-bottom-color: currentcolor;*/
        /*border-bottom-style: none;*/
        /*border-bottom-width: medium;*/
        /*border-bottom: 1px solid #00000038;*/


        background: #ecf0f5 ;
        border-radius: 5px;
        margin-bottom:5px;
    }
    .fa-trash{
        color: gray !important;
        cursor: pointer;
    }
    label {
        display: inline-block;
        margin-bottom: .5rem;
        font-size: 18px !important;
        color:black;
        font-weight: normal;
    }
    .header_footer{

        padding:10px 0px 10px 0px;
        color:black;

    }
    .field_class{
        border: none !important;
        border-radius: 5px !important;
        padding:10px;
    }
</style>
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
    .fields_div{
        font-size: 18px; color: grey; font-weight: 525; margin-left: -20px;text-align: right;
    }
</style>

