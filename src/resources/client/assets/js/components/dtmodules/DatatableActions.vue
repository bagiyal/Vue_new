<template>
    <div class="btn-group btn-group-xs">
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
<!--        <router-link-->
<!--                v-if="$can(xprops.permission_prefix + 'view')"-->
<!--                :to="{ name: xprops.route + '.show', params: { id: row.id } }"-->
<!--                class="btn btn-primary"-->
<!--                >-->
<!--            View-->
<!--        </router-link>-->

        <router-link
                v-if="$can(xprops.permission_prefix + 'edit')"
                :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
                class="btn">
            <i class="fa fa-pencil-square-o  button_style"  alt="Edit" title="Edit" aria-hidden="true"></i>

        </router-link>



        <i class="fa fa-home button_style f-1-8 cursor" v-show="show_all_buttons" v-if="show" aria-hidden="true" alt="Hub" title="Hub" @click="redirect_hub"></i>

        <button
            v-show="show_all_buttons"
                v-if="$can(xprops.permission_prefix + 'delete')"
                @click="destroyData(row.id)"
                type="button"
                class="btn ">
            <i class="fa fa-trash button_style" alt="Delete" title="Delete" aria-hidden="true"></i>

        </button>


        <router-link
            v-show="show_all_buttons"
            :to = "row.subgroups>0?{path:'/group_inventory/' + row.id}:''"
            class="btn"
            :disabled="row.subgroups==0"
        >

            <img v-if="row.subgroups==0"  src="./../dashboard_resources/sub_group.png"  style="margin-top: -2px;width: 26px;" title="No Sub Groups" />
            <img v-else class="cursor" src="./../dashboard_resources/sub_group_exist.png"  style="margin-top: -2px;width: 26px;" title="Sub Groups" />
        </router-link>




        <img
            v-show="show_all_buttons"
            v-if="role=='lms_agent' && this.$route.name!='leads.index'"
            class="cursor" src="./../dashboard_resources/add_user.png"
            alt="Assign To Other"
            title="Assign To Other"
            @click="show_assign(row.id)"
            style="width: 20px; height: 18px;margin-top: 3px;"
        />




<!--        <i v-if="role=='lms_agent'" class="fa fa-thumb-tack button_style f-1-8 cursor" aria-hidden="true" alt="Assign To Other" title="Assign To Other" @click="show_assign(row.id)"></i>-->


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

                                          multiple



                                />


                            </div>
                            <div class="col-md-12 row mt-2">
                                    <div class="col-md-6 text-right">
                                        <button type="button" @click="invite_members" class="btn f-1-5 btn-success ">Done</button>
                                    </div>
                                    <div class="col-md-6">
                                        <button type="button" @click="assign_task(row.id)" class="btn f-1-5 btn-primary">Assign Task</button>
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
                                    <span aria-hidden="true" class="f-2">&times;</span>
                                </button>

                            </div>

                        </div>


                        <div class="row " >
                            <ul class="nav nav-tabs col-md-12 mt-2 mb-4" role="tablist">
                                <li class="nav-item navme">
                                    <a class="nav-link active" style="color: #a6a7ac;" data-toggle="tab" href="#tabs-1" role="tab"  ><b>Assign Task</b></a>
                                </li>
                                <li class="nav-item navme">
                                    <a class="nav-link" style="color: #a6a7ac;" data-toggle="tab" href="#tabs-2" role="tab" ><b>Assign Approver</b></a>
                                </li>

                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div class="row " >
                                        <div class="col-md-12 ">
                                            <div class="row">
                                                <div class="col-md-8"><label class="f-1-5 text-secondary">Assign member</label></div>
                                                <div class="col-md-4"><p class="cursor" @click="assign_task_model=false,assign_model=true" style="text-align: right;font-size: 11px;color: blue;font-weight: bold;">Add Members</p></div>
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
                                            <input type="text" v-model="task" class="form-control  f-1-4 fw-4"/>
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
                                            <label class="f-1-5 text-secondary">Status</label><br>
                                            <input type="text" disabled value="Pending" class="form-control  f-1-8 fw-6" style="color: orangered;"/>
                                        </div>
                                        <div class="col-md-12 ">
                                            <label class="f-1-5 text-secondary">Add Comment</label><br>
                                            <textarea rows="4" class="form-control  f-1-4 fw-4"  cols="25" v-model="remark"></textarea>
                                        </div>

                                        <div class="col-md-12 text-center mt-2">
                                            <button type="button" class="btn f-1-5 btn-success " @click="assign_to">Done</button>
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane " id="tabs-2" role="tabpanel">
                                    <div class="row " >
                                        <div class="col-md-12 " v-if="approve_levels.levels>=1">
                                            <div class="row">
                                                <div class="col-md-8"><label class="f-1-5 text-secondary">Assign L1 Approver</label></div>
                                                <div class="col-md-4"><p class="cursor" @click="assign_task_model=false,assign_model=true" style="text-align: right;font-size: 11px;color: blue;font-weight: bold;">Add Members</p></div>
                                            </div>

                                            <select class="form-select" v-model="approve_levels.L1" :id="row.id+'L1'" @input="validate_approver($event,'L1')">
<!--                                                <option v-if="approve_levels.L1==null" selected="true" disabled="disabled">Select Approver</option>-->
                                                <option v-for="option in approvers"
                                                        :disabled="option.status"

                                                        :value="option.id">
                                                    {{ option.show_name }}
                                                </option>
                                            </select>
<!--                                            <span-->
<!--                                                v-if="approve_levels.L1!=null"-->
<!--                                                 class="f-2 custom_remove"-->
<!--                                                 @click="removeSelected('L1')">-->
<!--                                                &times;-->
<!--                                            </span>-->




                                        </div>
                                        <div class="col-md-12 " v-if="approve_levels.levels>=2">
                                            <div class="row">
                                                <div class="col-md-12"><label class="f-1-5 text-secondary">Assign L2 Approver</label></div>

                                            </div>
                                            <select class="form-select" v-model="approve_levels.L2"  :id="row.id+'L2'" @input="validate_approver($event,'L2')">
<!--                                                <option v-if="approve_levels.L2==null" selected="true" disabled="disabled">Select Approver</option>-->
                                                <option v-for="option in approvers"
                                                        :disabled="option.status"

                                                        :value="option.id">
                                                    {{ option.show_name }}
                                                </option>
                                            </select>


                                        </div>
                                        <div class="col-md-12 " v-if="approve_levels.levels>=3">
                                            <div class="row">
                                                <div class="col-md-12"><label class="f-1-5 text-secondary">Assign L3 Approver</label></div>

                                            </div>
                                            <select class="form-select" v-model="approve_levels.L3"  :id="row.id+'L3'" @input="validate_approver($event,'L3')">
<!--                                                <option v-if="approve_levels.L1==null" selected="true" disabled="disabled">Select Approver</option>-->
                                                <option v-for="option in approvers"
                                                        :disabled="option.status"

                                                        :value="option.id">
                                                    {{ option.show_name }}
                                                </option>
                                            </select>


                                        </div>
                                        <div class="col-md-12 " v-if="approve_levels.levels>=4">
                                            <div class="row">
                                                <div class="col-md-12"><label class="f-1-5 text-secondary">Assign L4 Approver</label></div>

                                            </div>
                                            <select class="form-select" v-model="approve_levels.L4"  :id="row.id+'L4'" @input="validate_approver($event,'L4')">
                                                <option v-for="option in approvers"
                                                        :disabled="option.status"

                                                        :value="option.id">
                                                    {{ option.show_name }}
                                                </option>
                                            </select>


                                        </div>


                                        <div class="col-md-12 text-center mt-2">
                                            <button type="button" class="btn f-1-5 btn-success " @click="allocateApprovers">Allocate</button>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    props: ['row', 'xprops'],
    data() {
        return {
            hub_list:[],
            show:false,
            assign_model:false,
            assign_task_model:false,
            agency_users:[],
            temp_user:[],
            group_users:[],
            group_users_model:[],
            remark:'',
            task:'',
            end_time:'',
            assigend_list:[],
            loading:false,
            role:'',
            created_by_agent:'',
            approve_levels:{"levels":4,"L1":null,"L2":null,"L3":null,"L4":null},
            approvers:[],
            show_all_buttons:true,
            img:'./../dashboard_resources/sub_group.png',

        }
    },
    created() {
      this.role=  document.querySelector("meta[name='user-role']").getAttribute('content');
        if(window.location.href.toLowerCase().includes('bookings')){
            axios.get('/api/v1/hub_booking2', {
                params: {
                    id: this.row.id,

                }
            })
                .then(response => {
                    this.bookings=response.data.data;

                    if(response.data.data.status=='success'){
                        this.show=true;
                    }
                    // else{
                    //     alert('no data');
                    // }

                    //
                });
        }

    },
    mounted(){
        //updating approvers data
        if(this.row.get_meta.length>0){
            this.row.get_meta.forEach((meta)=>{
                if(meta.meta_key=='approvers_data'){
                    console.log(JSON.parse(meta.meta_value))
                    this.approve_levels=_.cloneDeep(JSON.parse(meta.meta_value))
                }
            })
        }
        if(this.xprops.path!=undefined){
            if(this.xprops.path=='split'){
                this.show_all_buttons=false;
            }
        }
    },
    methods: {
        invite_members(){
            if(this.temp_user.length>0){
                let params = new FormData();
                params.set('ref_id',this.row.id+'-g')
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
        assign_to(){

            if(this.group_users_model.length>0 ){
                if(this.task!=''){
                  if(this.end_time!='') {
                    let params = new FormData();
                    params.set('ref_id', this.row.id)
                    params.set('remark', this.remark)
                    params.set('task', this.task)
                    params.set('type', 'group')
                    params.set('end_date', this.end_time)
                    params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                    params.set('assigned_to', JSON.stringify(this.group_users_model))
                    params.set('flag', 0)
                    this.loading = true
                    axios.post('/api/v1/assigen_task_user', params)
                        .then(response => {
                            this.group_users_model = []
                            this.remark = ''
                            this.end_time = ''
                            this.task = ''
                            this.loading = false;
                            this.assign_task_model = false;
                            this.$eventHub.$emit('create-success');


                        })
                    }
                  else{
                      alert('Please add due date');
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
        show_assign(id){
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
                        console.log('if');
                        let params = new FormData();
                        params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                        params.set('created_by', this.created_by_agent)
                        params.set('flag', 0)
                        axios.post('/api/v1/users_of_agency', params)
                            .then(response => {
                                console.log(this.row.get_meta)
                                this.agency_users=response.data
                                let roles='';

                                for(let i=0;i<this.agency_users.length;i++){
                                    roles='';

                                    this.agency_users[i]['role'].forEach((role)=>{
                                        if(role['title']=='lms_agent'){
                                            role['title']='Handler';
                                        }
                                        if(role['title']=='tour_manager'){
                                            role['title']='Tour Manager';
                                        }
                                        roles=roles==''?role['title']:roles+', '+role['title']
                                    })

                                    this.agency_users[i]['show_name']=this.agency_users[i]['name']+' ('+roles+')'
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
                        console.log('else');
                        let params = new FormData();
                        params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'))
                        params.set('created_by',0)
                        params.set('flag', 0)
                        axios.post('/api/v1/users_of_agency', params)
                            .then(response => {

                                this.agency_users=response.data


                                let roles='';
                                for(let i=0;i<this.agency_users.length;i++){

                                    roles='';

                                    this.agency_users[i]['role'].forEach((role)=>{
                                        if(role['title']=='lms_agent'){
                                            role['title']='Handler';
                                        }
                                        if(role['title']=='tour_manager'){
                                            role['title']='Tour Manager';
                                        }
                                        roles=roles==''?role['title']:roles+' , '+role['title']
                                    })
                                    this.agency_users[i]['show_name']=this.agency_users[i]['name']+' ('+roles+')'


                                }
                                this.loading=false
                                this.assign_model=true
                            })
                    }


                })









        },
        assign_task(id){


            if(this.temp_user.length>0){
                let params = new FormData();
                params.set('ref_id',this.row.id+'-g')
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
                                    params.set('flag', 0)
                                    axios.post('/api/v1/users_of_agency', params)
                                        .then(response => {

                                            this.agency_users=response.data
                                            this.group_users=[];
                                            this.approvers=[];
                                            let assign_users=[];
                                            assign_users.push({
                                                show_name:'Self',
                                                id:document.querySelector("meta[name='user-id']").getAttribute('content'),
                                                name:'Self',
                                                status:false,
                                            });


                                            let roles='';
                                            for(let i=0;i<this.agency_users.length;i++){

                                                roles='';

                                                this.agency_users[i]['role'].forEach((role)=>{
                                                    if(role['title']=='lms_agent'){
                                                        role['title']='Handler';
                                                    }
                                                    if(role['title']=='tour_manager'){
                                                        role['title']='Tour Manager';
                                                    }
                                                    roles=roles==''?role['title']:roles+' , '+role['title']
                                                })

                                                this.agency_users[i]['show_name']=this.agency_users[i]['name']+' ('+roles+')'
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


                                            this.loading=false;

                                            //filtering approvers and checking if they aren't assigned as TM.
                                            assign_users=assign_users.concat(this.group_users);

                                            if(assign_users.length>0){
                                                let managers_data=[];
                                                if(this.row.get_meta.length>0){
                                                    this.row.get_meta.forEach((meta)=>{
                                                        if(meta.meta_key=='managers_data'){
                                                            managers_data=JSON.parse(meta.meta_value);
                                                        }
                                                    })
                                                }


                                                let name='';
                                                assign_users.forEach((users)=>{
                                                    name=users.name;
                                                    users.status=false;

                                                    if(managers_data.length>0){
                                                        managers_data.forEach((tm)=>{
                                                            if(tm.number == users.phone){
                                                                users.status=true;

                                                                name=users.name+' (Already Assigned as Tm) ';
                                                            }

                                                        })
                                                    }

                                                    if(this.approve_levels['L1']!=null || this.approve_levels['L2']!=null || this.approve_levels['L3']!=null || this.approve_levels['L4']!=null){
                                                        if(
                                                            this.approve_levels['L1']==users.id ||
                                                            this.approve_levels['L2']==users.id ||
                                                            this.approve_levels['L3']==users.id ||
                                                            this.approve_levels['L4']==users.id
                                                        ){
                                                            users.status=true;
                                                        }
                                                    }

                                                    this.approvers.push({
                                                        show_name:name,
                                                        id:users.id,
                                                        name:users.name,
                                                        status:users.status,
                                                    });
                                                })


                                            }

                                        })
                                }
                                else{
                                    this.group_users=[];
                                    this.approvers=[];
                                    this.assign_model=false;
                                    this.assign_task_model=true;

                                    this.loading=false

                                }


                            })




                    })
            }
            else{
                alert('Please select user to invite');
            }







        },
        destroyData(id) {
            this.$swal({
                title: 'Are you sure?',
                text: 'This will delete the group from every assigned member and You won\'t be able to revert this!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#dd4b39',
                focusCancel: true,
                reverseButtons: true
            }).then(result => {
                if (result.value) {
                    this.$store.dispatch(
                        this.xprops.module + '/destroyData',
                        id
                    ).then(result => {
                        this.$eventHub.$emit('delete-success')
                        if(window.location.href.toLowerCase().includes('groups')){
                            axios.get('/api/v1/deactivate_bookings?id='+id);
                        }
                    })
                }
            })
        },
        redirect_hub(){
            var group_name='';
            if(this.row.group_name){
                group_name=this.row.group_name;
            }
            else{
                group_name=this.row.tour_name;

            }


            var pass_data={"hub":this.row.booking_id+" || "+group_name};
         //   console.log(pass_data);
            this.$router.push({ name: 'hub', params:{'hub_data':pass_data}})
        },
        validate_approver(user,level){
            try{
                let id=document.getElementById(this.row.id+level).value;
                // console.log(document.getElementById(this.row.id+level).options[document.getElementById(this.row.id+level).selectedIndex].text);
                // console.log(level,this.approve_levels);
                if(level=='L1'){
                    this.approve_levels.L1=id;
                }
                else if(level=='L2'){
                    this.approve_levels.L2=id;
                }
                else if(level=='L3'){
                    this.approve_levels.L3=id;
                }
                else if(level=='L4'){
                    this.approve_levels.L4=id;
                }
                let return_arr=[];
                this.approvers.forEach((approver)=>{
                    if(approver.id==id){
                        approver.status=true;

                    }
                    return_arr.push(approver);
                })
                this.approvers=_.cloneDeep(return_arr);
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
        removeSelected(level){
            try{
                var element=document.getElementById(this.row.id+level);
                let id=element.value;
                element.value='';
                console.log(id);
                // let return_arr=[];
                // this.approvers.forEach((approver)=>{
                //     if(approver.id==id){
                //         approver.status=false;
                //
                //     }
                //     return_arr.push(approver);
                // })
                //
                // this.approvers=_.cloneDeep(return_arr);


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
        allocateApprovers(){
            try{
                if(this.approve_levels['L1']!=null && this.approve_levels['L2']!=null && this.approve_levels['L3']!=null && this.approve_levels['L4']!=null){
                    axios.post('/api/v1/UpdateApprover',{
                        'grpId':this.row.id,
                        'approvers':JSON.stringify(this.approve_levels)
                    }).then(response => {
                        this.$eventHub.$emit('update-success');
                        this.assign_task_model=false;
                    })
                        .catch((error) => {
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Some Error Occured. Please Try Again Later !',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })
                        })
                }
                else{
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Please Assign All Approvers',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
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
    }
}
</script>


<style scoped>
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
    .navme{
        width: 50%;
        text-align: center;
    }


    .active{
        color:black !important;
    }

    select{
        width: 100% !important;
        padding: 7px !important;
        background: transparent !important;
        border: 1px solid #ccc !important;
        border-radius: 5px !important;
    }
    select option:disabled {
        cursor: no-drop !important;
    }
    .custom_remove{
        position: absolute !important;
        right: 35px !important;
        cursor: pointer;
    }

</style>
