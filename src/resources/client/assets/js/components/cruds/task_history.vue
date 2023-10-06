<template>
    <section class="content-wrapper"  style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Task History</h1>
            <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">

                        <div class="box box_design">

                            <div class="box-body" v-if="task_data">

                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-9">
                                            <div id="accordion" class="accordion">

                                                <div class="card mb-0" v-for="(data,key,index) in task_data" >

                                                    <div class="card-header " :class="[index==0 ? '' : 'collapsed' ]" :aria-expanded="index==0? 'true':'false'" :key="index" data-toggle="collapse" :href="'#collapseOne'+index">
                                                        <a class="card-title f-1-8" >
                                                            <b >{{key}}</b>
                                                        </a>

                                                    </div>

                                                    <div :id="'collapseOne'+index" class="card-body collapse " :class="[index==0 ? 'show in' : '' ]" data-parent="#accordion" :key="index+'collapseOne'">

                                                        <div class="container-fluid" v-for="(tasks,index2) in data">
                                                            <div class="col-md-12" v-if="index2==0"  :style="tasks.id==0?'':'margin:20px;'">
                                                                <div class="row text-right">
                                                                    <div class="col-md-4 offset-8 ">
                                                                        <span class="border border-primary rounded cursor " style="padding:5px" @click="add_new_tasks(tasks.gid)">
                                                                            <i class="fa fa-plus-circle text-primary f-1-5 " >Add Task</i></span>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        <div v-if="index2==0 && tasks.id!=0" class="col-md-12 ">
                                                            <div class="row">
                                                                <div class="col-md-2 text-left">
                                                                    <label class="f-1-2 text-secondary">Task</label><br>
                                                                </div>
                                                                <div class="col-md-2 text-left">
                                                                    <label class="f-1-2 text-secondary">Assigned by</label><br>
                                                                </div>
                                                                <div class="col-md-2 text-left">
                                                                    <label class="f-1-2 text-secondary">Assigned Members</label><br>
                                                                </div>
                                                                <div class="col-md-2 text-left">
                                                                    <label class="f-1-2 text-secondary">Status</label><br>
                                                                </div>
                                                                <div class="col-md-2 text-left">
                                                                    <label class="f-1-2 text-secondary">Due Date</label><br>
                                                                </div>
                                                                <div class="col-md-2 text-center">
                                                                    <label class="f-1-2 text-secondary">Action</label><br>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 " v-else>
<!--                                                             <h1>No Tasks assigned yet!</h1>-->
                                                         </div>
                                                        <div v-if="tasks.id!=0" class="col-md-12 f-1-3 " :class="[index>0 ? '' : 'mt-3' ]">
                                                            <div class="row">
                                                                <div class="col-md-2 text-left">

                                                                    <b class="cursor" >{{tasks.task}}</b>
                                                                </div>
                                                                <div class="col-md-2 text-left">

                                                                    <b v-if="user_id==tasks.agent">You</b>
                                                                    <b v-else>{{tasks.agent_name}}</b>
                                                                </div>
                                                                <div class="col-md-2 text-left">

                                                                    <span v-if="tasks.assigned.length>1 && tasks.id!=0">
                                                                        <p>{{tasks.assigned[0].name}}
                                                                        <b class="add_mem">+{{tasks.assigned.length-1}}</b>
                                                                        </p>

                                                                    </span>
                                                                    <span v-else-if="tasks.id!=0">
                                                                        <p>{{tasks.assigned[0].name}}</p>
                                                                    </span>
                                                                </div>
                                                                <div class="col-md-2 text-left" v-if="tasks.id!=0">

                                                                    <img v-if="tasks.status==0" src="./dashboard_resources/taskpending.png" alt="Task pending" title="Task pending" style="width: 30px;">
                                                                    <img v-if="tasks.status==1" src="./dashboard_resources/Taskrescheduled.png" alt="Task Re-Scheduled" title="Task Re-Scheduled" style="width: 30px;">
                                                                    <img v-if="tasks.status==2" src="./dashboard_resources/taskcomplete.png" alt="Task Completed" title="Task Completed" style="width: 30px;">



                                                                </div>
                                                                <div class="col-md-2 text-left ">
                                                                    <b > {{tasks.exp}}  </b>
                                                                </div>
                                                                <div class="col-md-2 text-center f-1-8" >
                                                                      <i class="fa fa-pencil-square-o cursor" v-if="user_id==tasks.agent && tasks.status!=2" @click="update_model=false,task_key=key,task_id=tasks.id,task_index=index2,assign_task(tasks.gid),edit_task_status=true" alt="Click To Edit Task" title="Click To Edit Task" aria-hidden="true"></i>
                                                                      <i class="fa fa-pencil-square-o text-secondary" v-else-if="user_id==tasks.agent && tasks.status==2"  alt="This task is completed" title="This task is completed" aria-hidden="true"></i>
                                                                      <i class="fa fa-pencil-square-o  text-secondary" v-else alt="You Cannot Edit This Task" title="You Cannot Edit This Task" aria-hidden="true"></i>
                                                                      <i class="fa fa-check-circle cursor text-success" v-if="user_id==tasks.agent && tasks.status!=2" @click="task_key=key,task_id=tasks.id,task_index=index2,complete_task(tasks.id)"  title="Mark as completed" aria-hidden="Mark as completed"></i>
                                                                      <i class="fa fa-check-circle cursor text-secondary" v-else-if="user_id==tasks.agent && tasks.status==2"   title="Already Completed" aria-hidden="Already Completed"></i>
                                                                      <i class="fa fa-check-circle  text-secondary" v-else  alt="You Cannot Mark Completed" title="You Cannot Mark Completed"></i>
                                                                    <i class="fa fa-comments f-2 cursor" aria-hidden="true" style="color:#1b89f7" @click="show_remarks(tasks.id,index2,key)"></i>


                                                                </div>


                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>






                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <a class="card-title f-1-8" >
                                                <b  v-if="remarks_data.length>0">Remarks</b>
                                            </a>
                                            <div class="container-fluid mt-2 remarks_section"  v-if="remarks_data.length>0">
                                                <div class="col-md-12 remarks_section2" >
                                                    <div class="row mt-5  mb-4" v-for="(remark,index) in remarks_data" :key="index">

                                                        <div class="col-md-1 mt-3" style="border-right:2px dotted" >
                                                            <i v-if="remark.type=='date'" data-v-0a0b01e2="" class="fas ml-2  f-2 fa-calendar-alt  icon-color"></i>
                                                            <b v-else-if="remark.type=='comment'"  class="comment_design  f-1-6" :style="remark.bgcolor">
                                                                {{remark.agent_name.substring(0, 2)}}
                                                            </b>
                                                            <b v-else-if="remark.type=='status'"  class=" fa fa-check comment_design  f-1-6" style="background:rgb(93, 230, 26)">

                                                            </b>
                                                        </div>
                                                        <div class="col-md-10 mt-2 ml-2 " v-if="remark.type=='date'">
                                                            <label class="f-2 text-secondary ml-5" >{{remark.remark}}</label><br>
                                                            <label class="f-1-6 fw-6 ml-5">{{remark.date2}}</label>

                                                        </div>
                                                        <div class="col-md-10 mt-2" v-else-if="remark.type=='comment'">
                                                            <label class="f-2 ml-5" :style="remark.color">{{remark.agent_name}}</label><br>
                                                            <label class="f-1-6 fw-6 ml-5" >{{remark.remark}}</label>

                                                        </div>
                                                        <div class="col-md-10 mt-2" v-else-if="remark.type=='status'">
                                                            <label class="f-2 ml-5" style="color:rgb(93, 230, 26)">{{remark.remark}}</label><br>


                                                        </div>
                                                        <div class="col-md-10 mt-2" v-else>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="col-md-12">
                                                    <div class="row">
                                                    <div class="col-md-10" >
                                                        <input type="text" v-model="msg" placeholder="Type Somthing..." class="form-control msg_box  f-1-4 fw-4"/>
                                                    </div>
                                                    <div class="col-md-2 bg-success "  style="padding: 5px 10px 5px 11px;border-radius: 20px;" >
                                                        <i class="fa fa-paper-plane cursor f-2 text-white" @click="add_msg" aria-hidden="true"></i>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div class="box-body text-center" v-else>

                            <h1>No Data Available</h1>

                            </div>

                        </div>

                </div>
            </div>
            <div class="container"  v-if="assign_model">
                <div class="modal show in" style="display: block;">
                    <div class="modal-dialog" style="max-width: 500px !important;">

                        <div class="modal-content" style="padding: 20px;">
                            <div class="row ">

                                <div class="col-md-12 ">
                                    <button type="button" class="close" @click="assign_model=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="col-md-12 ">
                                    <h4 class="modal-title fw-6 text-dark f-2 text-center" >Invite Member</h4>

                                </div>

                            </div>

                            <div class="row ">
                                <div class="col-md-12 ">
                                    <label class="f-1-5 text-secondary">Search Name</label><br>
                                    <v-select :clearable="false"
                                              v-model="temp_user"
                                              name="type"
                                              label="show_name"
                                              :options="agency_users"
                                              style=""
                                              multiple



                                    />


                                </div>
                                <div class="col-md-12 row mt-2">
                                    <div class="col-md-6 text-right">
                                        <button type="button" @click="invite_members" class="btn f-1-5 btn-success ">Done</button>
                                    </div>
                                    <div class="col-md-6" v-if="edit_task_status">
                                        <button type="button"  class="btn f-1-5 btn-primary" @click="assign_task2">Assign Task</button>
                                    </div>
                                    <div class="col-md-6" v-else-if="!edit_task_status">
                                        <button type="button" class="btn f-1-5 btn-primary" @click="assign_task3">Assign Task</button>
                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>
                </div>
            </div>
            <div class="container"  v-if="assign_task_model">
                <div class="modal show in" style="display: block;">
                    <div class="modal-dialog" style="max-width: 500px !important;">

                        <div class="modal-content" style="padding: 20px;">
                            <div class="row ">

                                <div class="col-md-12 ">
                                    <button type="button" class="close" @click="assign_task_model=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="col-md-12 ">
                                    <h4 class="modal-title fw-6 text-dark f-2 text-center" >Assign Task</h4>

                                </div>

                            </div>

                            <div class="row ">
                                <div class="col-md-12 ">
                                    <div class="row">

                                        <div class="col-md-8"><label class="f-1-5 text-secondary">Assign member</label></div>
                                        <div class="col-md-4"><p class="cursor" @click="assign_task_model=false,show_assign()" style="text-align: right;font-size: 11px;color: blue;font-weight: bold;">Invite Members</p></div>
                                    </div>
                                    <v-select :clearable="false"
                                              v-model="group_users_model"
                                              name="type"
                                              label="show_name"
                                              :options="this.group_users"
                                              style=""
                                              multiple



                                    />


                                </div>
                                <div class="col-md-12 ">
                                    <label class="f-1-5 text-secondary">Add Task</label><br>
                                    <input type="text" disabled="disabled"  v-model="this.edit_task.task" class="form-control  f-1-4 fw-4"/>
                                </div>
                                <div class="col-md-12 ">
                                    <label class="f-1-5 text-secondary">Expiry Date</label><br>
                                    <date-picker

                                        v-model="end_time"
                                        :config="$root.dpconfigDate_disable_dates"
                                        name="exp_date"
                                        class="form-control  f-1-4 fw-4"
                                        placeholder="12/02/2020">
                                    </date-picker>
                                </div>

                                <div class="col-md-12 ">
                                    <label class="f-1-5 text-secondary">Add Comment</label><br>
                                    <textarea rows="4" class="form-control  f-1-4 fw-4"  cols="25" v-model="comment" ></textarea>
                                </div>

                                <div class="col-md-12 text-center mt-2">
                                    <button type="button" @click="update_task()" class="btn f-1-5 btn-success " >Done</button>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
            <div class="container"  v-if="assign_task_model2">
                <div class="modal show in" style="display: block;">
                    <div class="modal-dialog" style="max-width: 500px !important;">

                        <div class="modal-content" style="padding: 20px;">
                            <div class="row ">

                                <div class="col-md-12 ">
                                    <button type="button" class="close" @click="assign_task_model2=false">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="col-md-12 ">
                                    <h4 class="modal-title fw-6 text-dark f-2 text-center" >Assign Task</h4>

                                </div>

                            </div>

                            <div class="row ">
                                <div class="col-md-12 ">
                                    <div class="row">

                                        <div class="col-md-8"><label class="f-1-5 text-secondary">Assign member</label></div>
                                        <div class="col-md-4"><p class="cursor" @click="edit_task_status=false,assign_task_model2=false,show_assign3()" style="text-align: right;font-size: 11px;color: blue;font-weight: bold;">Invite Members</p></div>
                                    </div>
                                    <v-select :clearable="false"
                                              v-model="new_task.assigned"
                                              name="type"
                                              label="show_name"
                                              :options="this.group_users"
                                              style=""
                                              multiple



                                    />


                                </div>
                                <div class="col-md-12 ">
                                    <label class="f-1-5 text-secondary">Add Task</label><br>
                                    <input type="text"  v-model="new_task.task"   class="form-control  f-1-4 fw-4"/>
                                </div>
                                <div class="col-md-12 ">
                                    <label class="f-1-5 text-secondary">Expiry Date</label><br>
                                    <date-picker
                                        v-model="new_task.exp"
                                        :config="$root.dpconfigDate_disable_dates"
                                        name="exp_date"
                                        class="form-control  f-1-4 fw-4"
                                        placeholder="12/02/2020">
                                    </date-picker>
                                </div>
                                <div class="col-md-12 ">
                                    <label class="f-1-5 text-secondary">Status</label><br>
                                    <input type="text" disabled value="Pending" class="form-control  f-1-8 fw-6" style="color: orangered;"/>
                                </div>
                                <div class="col-md-12 ">
                                    <label class="f-1-5 text-secondary">Add Comment</label><br>
                                    <textarea rows="4" class="form-control  f-1-4 fw-4" v-model="new_task.remark"  cols="25"  ></textarea>
                                </div>

                                <div class="col-md-12 text-center mt-2">
                                    <button type="button" @click="create_task" class="btn f-1-5 btn-success " >Done</button>
                                </div>
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
    import random_color from "../../mixins/random_color";

    export default {
        data() {
            return {

                assign_model:false,
                loading:false,
                task_data:[],
                temp_user:[],
                user_id:'',
                user_name:'',
                remarks_data:[],
                msg:'',
                colors:['text-primary','text-secondary','text-success','text-danger','text-warning'],
                task_id:'',
                group_id:'',
                task_index:'',
                task_key:'',
                date_change:false,
                update_model:false,
                end_time:'',
                end_time2:'',
                new_status:'',
                update_type:'',
                group_users:[],
                assign_model:false,
                assign_task_model:false,
                assign_task_model2:false,
                assigend_list:[],
                created_by_agent:'',
                agency_users:[],
                group_users_model:[],
                edit_task:[],
                new_task: {'task':'','exp':'','status':0,'remark':'','assigned':[],},
                comment:'',
                edit_task_status:false,






            }
        },
        created() {
            // Code ...
            this.user_id=document.querySelector("meta[name='user-id']").getAttribute('content');
            this.user_name=document.querySelector("meta[name='user-name']").getAttribute('content');
            var role=document.querySelector("meta[name='user-role']").getAttribute('content');
            // alert(role);





        },
        mounted(){

            axios.post('/api/v1/task_history')
                .then(response => {
                    // console.log(response.data);
                    this.task_data=response.data;
                });


        },


        methods: {
            show_remarks(id,index,key){
                // alert(id);
                this.task_id=id;
                this.task_index=index;
                this.task_key=key;

                let return_arr=[];
                // console.log(this.task_data[key][index].remark)
                // this.remarks_data=this.task_data[key][index].remark
                if(this.task_data[key][index].remark.length>0){
                    this.task_data[key][index].remark.forEach((data)=>{
                        let rand=random_color();
                        data.color={'color' :rand}
                        data.bgcolor={'background' :rand}
                        return_arr.push(data);
                    })
                }
                this.remarks_data=_.cloneDeep(return_arr);
            },
            add_msg(){
                if(this.msg!=''){
                    var ts = Math.round((new Date()).getTime() / 1000);
                    // alert(ts);
                    // {"type":"comment","date":1626956011,"agent_id":3,"remark":"Complete it asap.","agent_name":"Visharth"}
                    let rand=random_color();
                    this.remarks_data.push({"type":"comment","date":ts,"agent_id":this.user_id,"remark":this.msg,"agent_name":this.user_name,'color':{'color' :rand},'bgcolor':{'background' :rand}});

                    let params = new FormData();
                    params.set('id',this.task_id)
                    params.set('type', 'remark')
                    params.set('remarks', JSON.stringify(this.remarks_data))

                    axios.post('/api/v1/update_task_details', params)
                        .then(response => {
                            this.msg='';
                            this.task_data[this.task_key][this.task_index].remark=_.cloneDeep(this.remarks_data);

                        })
                }
                else{
                    alert('Please Type Something To Send');
                }
            },
            assign_task(id){
                // alert(id+'-'+this.task_id);
                this.group_id=id;
                this.end_time=this.date_format(this.task_data[this.task_key][this.task_index].exp);
                this.end_time2=this.date_format(this.task_data[this.task_key][this.task_index].exp);
                this.edit_task=this.task_data[this.task_key][this.task_index];
                let return_arr=[];

                for(let i=0;i<this.task_data[this.task_key][this.task_index].assigned.length;i++){

                    this.task_data[this.task_key][this.task_index].assigned[i]['show_name']=
                        this.task_data[this.task_key][this.task_index].assigned[i]['name']+
                        '('+this.task_data[this.task_key][this.task_index].assigned[i]['title']+')'
                    return_arr.push(this.task_data[this.task_key][this.task_index].assigned[i]);



                }

                this.group_users_model=_.cloneDeep(return_arr);
                let params1 = new FormData();
                params1.set('id', id+'-g')
                params1.set('type', 'group')
                axios.post('/api/v1/assigend_list', params1)
                    .then(response => {
                        if(response.data!=''){
                            this.assigend_list=JSON.parse(response.data.meta_value)
                            this.created_by_agent=response.data.created_by

                            let params = new FormData();
                            params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                            params.set('created_by', this.created_by_agent)
                            params.set('flag', 1)
                            axios.post('/api/v1/users_of_agency', params)
                                .then(response => {

                                    this.agency_users=response.data
                                    this.group_users=[];
                                    for(let i=0;i<this.agency_users.length;i++){

                                        this.agency_users[i]['show_name']=this.agency_users[i]['name']+'('+this.agency_users[i]['role'][0]['title']+')'
                                        if(this.assigend_list.length>0){

                                            for(let j=0;j<this.assigend_list.length;j++){


                                                if(this.agency_users[i]['id']==this.assigend_list[j]['id']){
                                                    this.group_users.push(this.agency_users[i]);

                                                }
                                            }
                                        }



                                    }
                                    this.assign_model=false;
                                    this.assign_task_model=true;

                                    this.loading=false
                                    console.log(this.group_users);
                                })
                        }
                        else{
                            this.group_users=[];
                            this.assign_model=false;
                            this.assign_task_model=true;

                            this.loading=false

                        }
                    });
            },
            date_format(date){
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                return [day, month, year].join('-');
            },
            show_assign(){

                let id=this.group_id;
                this.loading=true
                this.temp_user=[];
                this.created_by_agent='';
                let params1 = new FormData();
                params1.set('id', id+'-g')
                params1.set('type', 'group')
                axios.post('/api/v1/assigend_list', params1)
                    .then(response => {


                        if(response.data!=''){
                            this.assigend_list=JSON.parse(response.data.meta_value)
                            this.created_by_agent=response.data.created_by

                            let params = new FormData();
                            params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                            params.set('created_by', this.created_by_agent)
                            params.set('flag', 1)
                            axios.post('/api/v1/users_of_agency', params)
                                .then(response => {

                                    this.agency_users=response.data
                                    for(let i=0;i<this.agency_users.length;i++){

                                        this.agency_users[i]['show_name']=this.agency_users[i]['name']+'('+this.agency_users[i]['role'][0]['title']+')'
                                        if(this.assigend_list.length>0){

                                            for(let j=0;j<this.assigend_list.length;j++){


                                                if(this.agency_users[i]['id']==this.assigend_list[j]['id']){

                                                    this.temp_user.push(this.agency_users[i]);

                                                }
                                            }
                                        }



                                    }
                                    this.loading=false
                                    this.assign_model=true
                                })
                        }
                        else{

                            let params = new FormData();
                            params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                            params.set('created_by',0)
                            params.set('flag', 1)
                            axios.post('/api/v1/users_of_agency', params)
                                .then(response => {

                                    this.agency_users=response.data
                                    for(let i=0;i<this.agency_users.length;i++){

                                        this.agency_users[i]['show_name']=this.agency_users[i]['name']+'('+this.agency_users[i]['role'][0]['title']+')'


                                    }
                                    this.loading=false
                                    this.assign_model=true
                                })
                        }


                    })









            },
            invite_members(){
                if(this.temp_user.length>0){
                    let params = new FormData();
                    params.set('ref_id',this.group_id+'-g')
                    params.set('assigned_to', JSON.stringify(this.temp_user))
                    this.loading=true
                    axios.post('/api/v1/invite_task_user', params)
                        .then(response => {
                            this.$eventHub.$emit('create-success');
                            this.loading=false;
                            this.assign_model=false;


                        })
                }
                else{
                    alert('Please select user to invite');
                }


            },
            assign_task2(){
                // alert(id+'-'+this.task_id);
                let id=this.group_id;
                if(this.temp_user.length>0){
                    let params = new FormData();
                    params.set('ref_id',this.group_id+'-g')
                    params.set('assigned_to', JSON.stringify(this.temp_user))
                    this.loading=true
                    axios.post('/api/v1/invite_task_user', params)
                        .then(response => {

                            let params1 = new FormData();
                            params1.set('id', id+'-g')
                            params1.set('type', 'group')
                            axios.post('/api/v1/assigend_list', params1)
                                .then(response => {
                                    if(response.data!=''){
                                        this.assigend_list=JSON.parse(response.data.meta_value)
                                        this.created_by_agent=response.data.created_by

                                        let params = new FormData();
                                        params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                                        params.set('created_by', this.created_by_agent)
                                        params.set('flag', 1)
                                        axios.post('/api/v1/users_of_agency', params)
                                            .then(response => {

                                                this.agency_users=response.data
                                                this.group_users=[];
                                                for(let i=0;i<this.agency_users.length;i++){

                                                    this.agency_users[i]['show_name']=this.agency_users[i]['name']+'('+this.agency_users[i]['role'][0]['title']+')'
                                                    if(this.assigend_list.length>0){

                                                        for(let j=0;j<this.assigend_list.length;j++){


                                                            if(this.agency_users[i]['id']==this.assigend_list[j]['id']){
                                                                this.group_users.push(this.agency_users[i]);

                                                            }
                                                        }
                                                    }



                                                }
                                                this.assign_model=false;
                                                this.assign_task_model=true;

                                                this.loading=false
                                                console.log(this.group_users);
                                            })
                                    }
                                    else{
                                        this.group_users=[];
                                        this.assign_model=false;
                                        this.assign_task_model=true;

                                        this.loading=false

                                    }
                                });


                        })
                }
                else{
                    alert('Please select user to invite');
                }


            },
            assign_task3(){
                // alert(id+'-'+this.task_id);
                let id=this.group_id;
                if(this.temp_user.length>0){
                    let params = new FormData();
                    params.set('ref_id',this.group_id+'-g')
                    params.set('assigned_to', JSON.stringify(this.temp_user))
                    this.loading=true
                    axios.post('/api/v1/invite_task_user', params)
                        .then(response => {

                            let params1 = new FormData();
                            params1.set('id', id+'-g')
                            params1.set('type', 'group')
                            axios.post('/api/v1/assigend_list', params1)
                                .then(response => {
                                    if(response.data!=''){
                                        this.assigend_list=JSON.parse(response.data.meta_value)
                                        this.created_by_agent=response.data.created_by

                                        let params = new FormData();
                                        params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                                        params.set('created_by', this.created_by_agent)
                                        params.set('flag', 1)
                                        axios.post('/api/v1/users_of_agency', params)
                                            .then(response => {

                                                this.agency_users=response.data
                                                this.group_users=[];
                                                for(let i=0;i<this.agency_users.length;i++){

                                                    this.agency_users[i]['show_name']=this.agency_users[i]['name']+'('+this.agency_users[i]['role'][0]['title']+')'
                                                    if(this.assigend_list.length>0){

                                                        for(let j=0;j<this.assigend_list.length;j++){


                                                            if(this.agency_users[i]['id']==this.assigend_list[j]['id']){
                                                                this.group_users.push(this.agency_users[i]);

                                                            }
                                                        }
                                                    }



                                                }
                                                this.assign_model=false;
                                                this.assign_task_model2=true;

                                                this.loading=false
                                                console.log(this.group_users);
                                            })
                                    }
                                    else{
                                        this.group_users=[];
                                        this.assign_model=false;
                                        this.assign_task_model2=true;

                                        this.loading=false

                                    }
                                });


                        })
                }
                else{
                    alert('Please select user to invite');
                }


            },
            update_task(){
                if(this.group_users_model.length>0 ){

                    var ts = Math.round((new Date()).getTime() / 1000);

                    if(this.end_time!==this.end_time2){


                        var date = moment(this.end_time, 'DD-MM-YYYY').format('YYYY-MM-DD');

                        let new_date=  moment(date).format("DD MMM YYYY");

                        let rand=random_color();

                        this.edit_task.remark.push({"type":"date","date":ts,"agent_id":this.user_id,"remark":'Rescheduled Date',"date2":new_date,"agent_name":this.user_name,'color':{'color' :rand},'bgcolor':{'background' :rand}});
                        this.edit_task.status=_.cloneDeep(1);
                        this.edit_task.exp=_.cloneDeep(this.end_time);
                        // this.edit_task.remark.push({"type":"comment","date":ts,"agent_id":this.user_id,"remark":this.msg,"agent_name":this.user_name,'color':{'color' :rand},'bgcolor':{'background' :rand}});
                    }
                    if(this.comment!=''){
                        let rand=random_color();
                        this.edit_task.remark.push({"type":"comment","date":ts,"agent_id":this.user_id,"remark":this.comment,"agent_name":this.user_name,'color':{'color' :rand},'bgcolor':{'background' :rand}});
                    }
                    this.remarks_data=_.cloneDeep( this.edit_task.remark);
                    let params = new FormData();
                    params.set('task_id',this.task_id)
                    params.set('flag',1)
                    params.set('assigned_to',JSON.stringify(this.group_users_model))
                    params.set('data',JSON.stringify(this.edit_task))
                    this.loading=true
                    axios.post('/api/v1/assigen_task_user', params)
                        .then(response => {
                            this.group_users_model=[]
                            this.edit_task=[];
                            this.comment='';
                            this.end_time='';
                            this.end_time2='';
                            this.loading=false;
                            this.assign_task_model=false;
                            this.$eventHub.$emit('create-success');

                            axios.post('/api/v1/task_history')
                                .then(response => {
                                    this.task_data=[];
                                    // console.log(response.data);
                                    this.task_data=response.data;
                                });








                        })



                }
                else{
                    alert('Please select user to assign task.');
                }
            },
            complete_task(id){



                var ts = Math.round((new Date()).getTime() / 1000);
                let rand=random_color();
                this.task_data[this.task_key][this.task_index].remark.push({"type":"status","date":ts,"agent_id":this.user_id,"remark":'Task Completed',"agent_name":this.user_name,'color':{'color' :rand},'bgcolor':{'background' :rand}});
                let params = new FormData();
                params.set('id',this.task_id)
                params.set('type', 'complete')
                params.set('remarks', JSON.stringify( this.task_data[this.task_key][this.task_index].remark))

                axios.post('/api/v1/update_task_details', params)
                    .then(response => {

                        this.$eventHub.$emit('create-success');

                        axios.post('/api/v1/task_history')
                            .then(response => {
                                this.task_data=[];
                                // console.log(response.data);
                                this.task_data=response.data;
                            });

                    })
            },
            add_new_tasks(id){
                this.group_id=id;


                let params1 = new FormData();
                params1.set('id', id+'-g')
                params1.set('type', 'group')
                axios.post('/api/v1/assigend_list', params1)
                    .then(response => {
                        if(response.data!=''){
                            this.assigend_list=JSON.parse(response.data.meta_value)
                            this.created_by_agent=response.data.created_by

                            let params = new FormData();
                            params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                            params.set('created_by', this.created_by_agent)
                            params.set('flag', 1)
                            axios.post('/api/v1/users_of_agency', params)
                                .then(response => {

                                    this.agency_users=response.data
                                    this.group_users=[];
                                    for(let i=0;i<this.agency_users.length;i++){

                                        this.agency_users[i]['show_name']=this.agency_users[i]['name']+'('+this.agency_users[i]['role'][0]['title']+')'
                                        if(this.assigend_list.length>0){

                                            for(let j=0;j<this.assigend_list.length;j++){


                                                if(this.agency_users[i]['id']==this.assigend_list[j]['id']){
                                                    this.group_users.push(this.agency_users[i]);

                                                }
                                            }
                                        }



                                    }

                                    this.assign_task_model2=true;

                                    this.loading=false
                                    console.log(this.group_users);
                                })
                        }
                        else{
                            this.group_users=[];
                            this.assign_model=false;
                            this.assign_task_model=true;

                            this.loading=false

                        }
                    });
            },
            show_assign3(){

                let id=this.group_id;
                this.loading=true
                this.temp_user=[];
                this.created_by_agent='';
                let params1 = new FormData();
                params1.set('id', id+'-g')
                params1.set('type', 'group')
                axios.post('/api/v1/assigend_list', params1)
                    .then(response => {


                        if(response.data!=''){
                            this.assigend_list=JSON.parse(response.data.meta_value)
                            this.created_by_agent=response.data.created_by

                            let params = new FormData();
                            params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                            params.set('created_by', this.created_by_agent)
                            params.set('flag', 0)
                            axios.post('/api/v1/users_of_agency', params)
                                .then(response => {

                                    this.agency_users=response.data
                                    for(let i=0;i<this.agency_users.length;i++){

                                        this.agency_users[i]['show_name']=this.agency_users[i]['name']+'('+this.agency_users[i]['role'][0]['title']+')'
                                        if(this.assigend_list.length>0){

                                            for(let j=0;j<this.assigend_list.length;j++){


                                                if(this.agency_users[i]['id']==this.assigend_list[j]['id']){

                                                    this.temp_user.push(this.agency_users[i]);

                                                }
                                            }
                                        }



                                    }
                                    this.loading=false
                                    this.assign_model=true
                                })
                        }
                        else{

                            let params = new FormData();
                            params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                            params.set('created_by',0)
                            params.set('flag', 0)
                            axios.post('/api/v1/users_of_agency', params)
                                .then(response => {

                                    this.agency_users=response.data
                                    for(let i=0;i<this.agency_users.length;i++){

                                        this.agency_users[i]['show_name']=this.agency_users[i]['name']+'('+this.agency_users[i]['role'][0]['title']+')'


                                    }
                                    this.loading=false
                                    this.assign_model=true
                                })
                        }


                    })









            },
            create_task(){
                // new_task: {'task':'','exp':'','status':0,'remark':'','assigned':[],},
                if(this.new_task.assigned.length>0 ){
                    if(this.new_task.task!=''){
                        if(this.new_task.exp!=''){
                        let params = new FormData();
                        params.set('ref_id',this.group_id)
                        params.set('remark',this.new_task.remark)
                        params.set('task',this.new_task.task)
                        params.set('type','group')
                        params.set('end_date', this.new_task.exp)
                        params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                        params.set('assigned_to', JSON.stringify(this.new_task.assigned))
                        params.set('flag',0)
                        this.loading=true
                        axios.post('/api/v1/assigen_task_user', params)
                            .then(response => {
                                this.new_task=_.cloneDeep( {'task':'','exp':'','status':0,'remark':'','assigned':[],});
                                this.loading=false;
                                this.assign_task_model2=false;
                                this.$eventHub.$emit('create-success');

                                axios.post('/api/v1/task_history')
                                    .then(response => {
                                        this.task_data=[];
                                        // console.log(response.data);
                                        this.task_data=response.data;
                                    });



                            })
                        }
                    else{
                        alert('Please add due date.');
                    }
                    }
                    else{
                        alert('Please add task name.');
                    }
                }
                else{
                    alert('Please select user to assign task.');
                }




            },




            }
    }
</script>


<style scoped>
    .accordion .card-header:after {
        font-family: 'FontAwesome';
        content: "\f068";
        float: right;
        font-size:18px !important;
    }
    .accordion .card-header.collapsed:after {
        /* symbol for "collapsed" panels */
        content: "\f067";
        font-size:18px !important;
    }
    .add_mem{

        padding: 4px 7px 4px 7px;
        border-radius: 15px;
        background: gray;
        color: white;
        font-weight: bolder;
    }
    .remarks_section{
        height: 500px;
        background: white;
        border-radius: 15px;
    }
    .remarks_section2{
        height: 425px;
        background: white;
        overflow-y: auto;
    }
    .comment_design{

        padding: 4px 7px 4px 7px;
        border-radius: 15px;
        background: #d0cfcf;
        color: white;
        font-weight: bolder;
        text-transform: uppercase;
    }
    .msg_box{
        border-radius:15px;
    }


</style>
