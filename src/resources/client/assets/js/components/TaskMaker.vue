<template>
    <div v-if="">
        <div v-if="license.task_rem" class="add_task universal_pointer">
            <img @click="showtask?showtask=false:showtask=true" src="../components/cruds/dashboard_resources/addtask.png" class="h-35">
            <p class="text-white f-1-4 fw-3">Add Task</p>
        </div>
        <div v-else-if="role!='subscriber'" class="add_task universal_pointer">

            <i style="text-align: left; font-size: 36px; padding-top: 2px;" class="fa fa-lock" title="Task Locked" aria-hidden="true"></i>
            <p class="text-white f-1-4 fw-3">Add Task</p>
        </div>

        <div v-if="showtask" class="pop_up_box">
            <div class="text-right">
                <button type="button" class="mt-1 border-0 bg-white" @click="showtask=false">
                    <span class="p-2" aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="container p-5">
                <div class="row">
                    <div class="col-8">
                        <div class="form-group row">
                            <div class="col-sm-3"><p class="col-form-label">Due Date</p></div>
                            <div class="col-sm-9"><date-picker
                                class="dateinput ml-n5"
                                :config="$root.dpconfigDatetime_disable_dates"
                                v-model="task.due_date"
                            >
                            </date-picker>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 text-right">
                        <input id='remind' value="true" type="checkbox" v-model="task.reminder">
                        <span>Notification</span>


                    </div>
                    <!--                <div class="row ml-5" style="margin-top: 5%;">-->
                    <!--                    <div class="col-2">-->
                    <!--                       -->
                    <!--                    </div>-->
                    <!--                    <div class="col-4 " style="margin-left: -8%;">-->
                    <!--                     -->
                    <!--                    </div>-->


                    <!--                </div>-->

                    <div v-if="showdropdown" class="col-12 mt-3">
                        Ref No. (ID | Traveller Name | Tour Name)
                        <v-select  placeholder="Select"
                                   name="addlocations"
                                   label="booking_id"
                                   v-model="task.ref_id"
                                   :options="dropdown"
                                   max-height="200px"
                        />

                    </div>
                    <div v-else class="col-12">

                        <v-select  placeholder="Select"
                                   name="addlocations"
                                   label="booking_id"
                                   :value="task.ref_id"
                                   :options="dropdown"
                                   :disabled="true"
                        />
                    </div>
                </div>



                <div class="form-group row mt-5">
                    <div class="col-sm-2">
                        Remarks
                    </div>
                    <div class="col-sm-10">
                        <textarea id="remark" class="ml-n5 text-control" v-model="task.remark" ></textarea>
                    </div>
                </div>
                <div class="row mt-5 pt-4">
                    <div class="col-6 text-right"><button @click="clear" class="btn btn-danger pl-5 pr-5 f-1-6">Clear</button></div>
                    <div class="col-6"><button @click="submit" class="btn btn-success pl-5 pr-5 f-1-6" >Apply</button></div>


                </div>
            </div>

        </div>

    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import todaytimestamp from "../mixins/todaytimestamp";

export default {
    data() {
        return {
            showtask:false,

            // Code...
            task:{
                agent_name:'',
                assign_date:'',
                due_date:'',
                ref_id:'',
                reminder:false,
                reminder_time:'',
                remark:'',
                status:0,

            },
dropdown:[],
            checkrole:false,
            showdropdown:false,
            license:{},
            role:'',
        }
    },
    computed: {

    },
    created() {
        this.role=document.querySelector("meta[name='user-role']").getAttribute('content');
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

        if(document.querySelector("meta[name='user-role']").getAttribute('content')=='lms_agent'){
            this.checkrole=true;
        }


    },
    watch:{

        "showtask": function() {
if (this.showtask){
    this.task.ref_id=this.$root.booking_ref_id;
    axios.get('/api/v1/taskrefs/'+document.querySelector("meta[name='user-id']").getAttribute('content'))
        .then(response => {
            console.log(response.data)
            this.dropdown=  response.data;
        })
        .catch(error => {
          alert("Error in fetching task data")
            console.log(error)
        })
if(this.task.ref_id=='' || typeof this.task.ref_id=="undefined" || this.mode=='full' ){

    this.showdropdown=true;
}

}
        },

    },
    methods: {
        clear(){
            this.task.agent_name='',
                this.task.assign_date='',
                this.task.due_date='',
                // this.task.ref_id={},
                this.task.reminder=false,
                this.task.reminder_time='',
                this.task.remark=''
        },
         submit(){

if(this.task.due_date && this.task.remark && this.task.ref_id){
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        }
    }



    let params = new FormData();
    params.set('due_date', this.task.due_date);
    params.set('ref_id', JSON.stringify(this.task.ref_id));
    params.set('reminder', this.task.reminder);
    params.set('reminder_time', this.task.due_date);
    params.set('remark', this.task.remark);
    params.set('status', 0);
    params.set('assign_date', todaytimestamp());
    params.set('agent_name',  document.querySelector("meta[name='user-name']").getAttribute('content'));
    params.set('agent_id', document.querySelector("meta[name='user-id']").getAttribute('content'));
    params.set('agency_id', document.querySelector("meta[name='agency-id']").getAttribute('content'));

    axios.post('/api/v1/tasks', params,config)
    this.showtask=false
    this.clear();



}else{

    alert("Kindly fill all Details");
}

}






    },
    props:['mode']
}

</script>


<style scoped>
.text-control {
    display: block;
    width: 106%;
    height: calc(4.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>
