<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>New Approve Requests</h1>
        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">


                        <div class="box-body">

                            <div class="row">
                                <div class="col-md-3">
                                    <label for="groups">Select Group</label>
                                    <v-select v-model="group_list_modal"
                                              :clearable="false"
                                              name="group"
                                              label="group"
                                              :options="all_groups"
                                              style="background:#fff;"
                                              @input="in_group_modal"


                                    />
                                </div>
                                <div class="col-md-6 mt-5">
<!--                                    <button href="#"  class="btn btn-success f-1-2" @click="bulk_approve()" style="width: 100px">Bulk Approve</button>-->
<!--                                    <button href="#"  class="btn btn-danger f-1-2" @click="bulk_reject()" style="width: 100px">Bulk Reject</button>-->
                                    <button href="#"  class="btn btn-primary f-1-2" @click="refresh()" style="width: 100px">Refresh List</button></div>
                            </div>




                            <table class="table mt-5" style="background-color: white;text-align: center">
                                <thead>
                                <tr class="text-left">
                                    <th scope="col">#</th>
<!--                                    <th scope="col" style="width: 30px;">Select</th>-->
                                    <th scope="col">Payment</th>
                                    <th scope="col">Group/Tour</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Relation</th>
                                    <th scope="col">Relation Proof</th>
                                    <th scope="col">Nominator</th>
                                    <th scope="col">Home Town</th>
                                    <th scope="col">Visa Hub*</th>
                                    <th scope="col">Airport Hub*</th>

                                    <th scope="col">Status</th>
                                    <th scope="col" >Action</th>


                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(book,index) in member_data"  class="text-left">
                                    <td>{{index+1}}</td>
<!--                                     <td style="margin-top: 3px; width: 30px">-->
<!--                                        <label class="container_input" v-if="book.approve==0">-->
<!--                                            <input type="checkbox" checked :id="'index'+index">-->
<!--                                            <span class="checkmark" style="border:1px solid; width: 23px !important;height:23px !important;"></span>-->
<!--                                        </label>-->
<!--                                         <i  v-if="book.approve==2" class="fa fa-times fa-2x button_style " style="color: red" alt="Reject" title="Rejected" aria-hidden="true"></i>-->

<!--                                     </td>-->
                                    <td>
                                        <i
                                            class="fa fa-money "
                                            :class="book.payment_status==0?'text-danger':'text-success'"
                                            :title="book.payment_status==0?'Pending':'Paid'"
                                            aria-hidden="true"
                                        />

                                    </td>
                                    <td>{{book.tour_name}}</td>
                                    <td>{{book.name}}</td>
                                    <td v-if="book.relation!=null">{{book.relation.includes('relation_proof')?JSON.parse(book.relation).relation:book.relation}}</td>
                                    <td v-else></td>

                                    <td v-if="book.relation!=null">
                                        <div v-if="book.relation.includes('relation_proof')">

                                            <a
                                                :href="JSON.parse(book.relation).relation_proof"
                                                target="_blank"
                                                class="fa fa-eye"
                                                title="view file"
                                                aria-hidden="true"
                                            />




                                        </div>

                                    </td>
                                    <td v-else></td>

                                    <td>{{book.nominee}}</td>
                                    <td>{{book.home_town}}</td>
                                    <td v-if="book.long_id.includes('FAM')"><input type="text" disabled :id="index+'_visa'" v-model="book.visa_hub"></td>
                                    <td v-else><input type="text" :id="index+'_visa'" v-model="book.visa_hub"></td>
                                    <td v-if="book.long_id.includes('FAM')"><input type="text" disabled :id="index+'_airport'" v-model="book.airport_hub"></td>
                                    <td v-else><input type="text" :id="index+'_airport'" v-model="book.airport_hub"></td>


                                    <td>
                                    <span v-if="book.approve==2">Rejected</span>
                                        <span v-if="book.approve==0">Pending</span>
                                        <span v-if="book.approve===1">Approved</span>
                                    </td>
                                    <td >
                                        <span v-if="book.approve==0">
                                     <i class="fa fa-check button_style " style="color: green;margin-right: 20px" alt="Approve" title="Approve" @click="approve(index)" aria-hidden="true"></i>
                                      <i class="fa fa-times button_style " style="color: red" alt="Reject" title="Reject" @click="reject_index=book" aria-hidden="true"></i>
                                   </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div class="container"  v-if="reject_index!=null">
            <div class="modal show in" style="display: block;">
                <div class="modal-dialog" style="max-width: 750px !important;">

                    <div class="modal-content" style="padding: 20px;">
                        <div class="row border-bottom">
                            <div class="col-md-12 ">
                                <h4 class="modal-title  f-2" >Please provide the reason for rejection : {{reject_index.name}}</h4>
                            </div>
                        </div>

                        <div class="modal-body" style="max-height: 600px !important;overflow: auto;">


                            <div class="container-fluid">
                                <label class="f-1-5 text-secondary">Reason</label><br>
                                <textarea rows="5"  style="font-size: 15px;" cols="75" v-model="reject_reason"></textarea>

                            </div>




                            <button type="button" :disabled="reject_reason==null || reject_reason==''"  class="btn btn-success button_style" style="float: right;margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="reject" >Submit</button>
                            <button type="button" class="btn btn-danger button_style" style="float: right;margin-top: 20px;font-size: 15px;border-radius: 5px;" @click="reject_index=null">Cancel</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>


<script>

    export default {
        data() {
            return {

                original_members:[],
                member_data:[],
                loading:false,
                all_groups:[],
                group_list_modal:'All',
                reject_index:null,
                reject_reason:null


            }
        },
        mounted(){

        },
        created() {

            axios.get('/api/v1/groupapprove')
                .then(response => {
                   //console.log(response)
                    this.original_members=response.data
                    this.member_data=response.data

                    this.member_data.forEach((data)=>{
                        this.all_groups.push(data.group_long_id+' || '+data.group_tour_name)
                    })
                    this.all_groups.push('All');


                    this.all_groups = [ ...new Set(this.all_groups) ]
                    var return_arr2=[];
                    for(var k2=0;k2<this.all_groups.length;k2++){

                        return_arr2.push({
                            'group' : this.all_groups[k2]
                        });
                    }
                    this.all_groups=return_arr2;
                })


            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency"){
                this.showtoagency=false
            }
            this.$root.relationships = this.relationships

        },
        destroyed() {
            this.resetState()
        },
        computed: {

        },
        watch: {

        },
        methods: {
            in_group_modal(e){
                if(e.group!='All'){
                    let return_arr=[];
                    this.original_members.forEach((data)=>{

                        // console.log(data.group_long_id);
                        if(data.group_long_id!=''){
                        if(e.group.includes(data.group_long_id)){
                            return_arr.push(data)
                        }
                        }

                    })
                    this.member_data=_.cloneDeep(return_arr);
                }
                else if(e.group=='All'){
                    this.member_data=_.cloneDeep(this.original_members);
                }

            },
            refresh(){
                this.loading=true;
                axios.get('/api/v1/groupapprove')
                    .then(response => {
                        //console.log(response)
                        // this.group_list_modal='All';
                        this.member_data=response.data
                        this.original_members=response.data
                        this.all_groups=[];
                        this.member_data.forEach((data)=>{
                            this.all_groups.push(data.group_long_id+' || '+data.group_tour_name)
                        })
                        this.all_groups.push('All');


                        this.all_groups = [ ...new Set(this.all_groups) ]
                        var return_arr2=[];
                        for(var k2=0;k2<this.all_groups.length;k2++){

                            return_arr2.push({
                                'group' : this.all_groups[k2]
                            });
                        }
                        this.all_groups=return_arr2;
                        this.group_list_modal='All';
                    })
                this.loading=false;
                this.$eventHub.$emit('create-success')
            },
            bulk_approve(){
                this.loading=true;
                var arr=[];
                var arr2=[];
                var arr3=[];
                var counter=0;
                var counter2=0;
                for(var r=0;r<this.member_data.length;r++) {



                    if(this.member_data[r]['approve']!=2){



                 var  checked = document.getElementById('index'+r).checked;



                    if (checked == true) {
                            var flag=0;
                             if(!this.member_data[r].long_id.includes('FAM')){
                                 if(this.member_data[r].visa_hub==''){
                                     flag++;
                                     counter++;
                                     counter2++;
                                     document.getElementById(r+'_visa').style.border='1px solid red';
                                 }
                                 else if(this.member_data[r].visa_hub!=''){

                                     document.getElementById(r+'_visa').style.border='1px solid black';
                                 }
                                 if(this.member_data[r].airport_hub==''){
                                     flag++;
                                     counter++;
                                     counter2++;
                                     document.getElementById(r+'_airport').style.border='1px solid red';
                                 }
                                 else if(this.member_data[r].airport_hub!=''){

                                     document.getElementById(r+'_airport').style.border='1px solid black';
                                 }
                             }
                             if(flag==0){
                                 arr.push(this.member_data[r]['tid'])
                                 arr2.push({'visa':this.member_data[r]['visa_hub']})
                                 arr3.push({'airport':this.member_data[r]['airport_hub']})

                             }





                            // this.member_data[r]['approve'] = 1;

                    }
                }


                }
                if(counter2!=0){
                    alert('Please Fill All Mandatory Field');
                }
                if(counter==0){
                    let params = new FormData();
                    params.set('trav_form_id', JSON.stringify(arr))
                    params.set('trav_visa_hubs', JSON.stringify(arr2))
                    params.set('trav_airport_hubs', JSON.stringify(arr3))
                    // params.set('agent_id', [this.member_data[index]['agent_id']])
                    axios.post('/api/v1/approve_group' , params)
                        .then(response => {
                            console.log(response.data);
                            return false;
                            if(response.data.status){
                                this.refresh();
                            }
                            else{
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: resposne.data.msg,
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                                return false;
                            }
                            this.loading=false;

                        })
                        .catch(error => {
                            this.loading=false;
                            alert(error)
                        })
                }
                else{
                    this.loading=false;
                }


            },
            bulk_reject(){
                this.loading=true;
                var arr = [];
                for(var r=0;r<this.member_data.length;r++) {


                    if (this.member_data[r]['approve'] != 2) {
                    var    checked = document.getElementById('index'+r).checked;

                    if (checked == true) {
                        // this.member_data[r]['approve'] = 0;
                        arr.push(this.member_data[r]['tid'])
                    }
                }
                }
                let params = new FormData();
                params.set('trav_form_id', JSON.stringify(arr))
                // params.set('agent_id', [this.member_data[index]['agent_id']])
                axios.post('/api/v1/disapprove_group' , params)
                    .then(response => {

                        this.refresh();
                    })
            },
            approve(index){
                this.loading=true;
                var arr=[];
                var arr2=[];
                var arr3=[];
                var flag=0;


                if(!this.member_data[index].long_id.includes('FAM')){
                    if(this.member_data[index].visa_hub==''){
                        flag++;
                        document.getElementById(index+'_visa').style.border='1px solid red';
                    }
                    else if(this.member_data[index].visa_hub!=''){

                        document.getElementById(index+'_visa').style.border='1px solid black';
                    }
                    if(this.member_data[index].airport_hub==''){
                        flag++;
                        document.getElementById(index+'_airport').style.border='1px solid red';
                    }
                    else if(this.member_data[index].airport_hub!=''){

                        document.getElementById(index+'_airport').style.border='1px solid black';
                    }
                }
                if(flag==0){
                    // arr.push(this.member_data[index]['tid'])
                    arr2.push({'visa':this.member_data[index]['visa_hub']})
                    arr3.push({'airport':this.member_data[index]['airport_hub']})

                    let params = new FormData();
                    params.set('trav_form_id',this.member_data[index]['tid'])
                    params.set('trav_visa_hubs', JSON.stringify(arr2))
                    params.set('trav_airport_hubs', JSON.stringify(arr3))
                    // params.set('agent_id', [this.member_data[index]['agent_id']])
                    axios.post('/api/v1/approve_group' , params)
                        .then(response => {

                            if(response.data.status){
                            this.refresh();
                            }
                            else{

                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: response.data.msg,
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                                return false;
                            }
                            this.loading=false;

                        })
                        .catch(error => {
                            this.loading=false;
                            alert(error)
                        })
                        .finally(() => {
                            this.loading=false;

                        })
                }
                else{
                    this.loading=false;
                }


            },
            reject(){

                this.loading=true;
                var arr=[];
                this.reject_index.reject_reason=this.reject_reason;
                arr.push(this.reject_index)
                let params = new FormData();
                params.set('data', JSON.stringify(arr))
                // params.set('agent_id', [this.member_data[index]['agent_id']])
                axios.post('/api/v1/disapprove_group' , params)
                    .then(response => {

                        this.refresh();
                        this.reject_reason=null;
                        this.reject_index=null;
                    })
                    .catch(error => {
                          this.loading=false;
                        alert(error)
                    })
                    .finally(() => {
  this.loading=false;
                    })


            }



        }

    }
</script>


<style scoped>

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
