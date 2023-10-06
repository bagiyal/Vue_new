<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Set Nomination</h1>
        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design" >
                        <div class="box-body">

                            <div class="row">
                                <div class="col-md-3">
                                    <label for="groups">Select Dealership</label>
                                    <v-select v-model="dealer_list_modal"
                                              :clearable="false"
                                              name="dealer"
                                              label="dealer"
                                              :options="dealerships_filtered"
                                              style="background:#fff;"
                                              @input="in_dealer_modal"


                                    />
                                </div>
                                <div class="col-md-6 mt-5">
                                    <button href="#"  class="btn btn-primary f-1-2" @click="refresh_list()" style="width: 100px">Refresh List</button></div>
                            </div>
                            <div v-if="active_modal">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-dialog" style="margin-top: -230px !important;">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close f-2-5" @click="active_modal=false">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>

                                                    </div>
                                                    <div class="modal-body">
                                                        <h2 class="modal-title">Group Members </h2>
                                                        <div class="row" style="padding: 20px">

                                                            <div class="col-md text-center">



                                                                    <v-select placeholder="Select"
                                                                              label="full_name"
                                                                              :clearable="false"
                                                                              @input="selected_nominator"
                                                                              :options="mem_data_filtered.filter(o => o.status==true && o.id!=modal_index  )"


                                                                    />











                                                            </div>



                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>

                            <table class="table table-striped table-hover " style="margin-bottom: 0px;">

                                <thead>
                                <tr class="">

                                    <th class="font_style2 fit">
                                        Name

                                    </th>
                                    <th class="font_style2 fit">
                                        Mobile No

                                    </th>
                                    <th class="font_style2 fit">
                                        Email ID
                                    </th>

                                    <th class="font_style2 fit">
                                        Nominator
                                    </th>
                                    <th class="font_style2 fit">
                                        Relation
                                    </th>



                                </tr>
                                </thead>
                                <tbody  style="">

                                <tr v-for="(data,index) in mem_data_filtered" >
                                    <td class="font_style fit" >
                                        {{data.full_name}}

                                    </td>
                                    <td class="font_style fit" >
                                        {{data.phone}}
                                    </td>
                                    <td class="font_style fit" >
                                        {{data.email}}
                                    </td>
                                   <td class="font_style fit">
                                       <div  v-for="(meta,index2) in data.get_meta" v-if="meta.meta_key=='meta_nomination' ">
<!--                                           <span >{{meta.meta_value}}</span>-->
                                           <i v-if="meta.meta_value=='' "
                                              @click="active_modal=true,modal_index=data.id"
                                              class="fa fa-plus-square " aria-hidden="true" title="Add Partner" style="font-size: 32px;"></i>

                                           <span v-else>{{ nominator_name(meta.meta_value)}} &nbsp; <i class="fa fa-trash cursor" @click="remove_nomination(data.id)"></i> </span>

                                       </div>
                                    </td>
                                    <td class="font_style fit">
                                    <span v-for="(meta,index2) in data.get_meta">
                                        <input v-if="meta.meta_key=='meta_relation'"  type="text"  @input="relation_set(data.id,meta.meta_value)" v-model="meta.meta_value">
                                    </span>

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
                loading2:false,
                active_modal:false,
                mem_data:[],
                mem_data_filtered:[],
                dealerships:[],
                dealerships_filtered:[],
                dealer_list_modal: {'dealer':''},
                nominator:'',
                modal_index:'',



            }
        },
        mounted(){
            // this.setcolumn(['tour_name',
            //     'booking_id',
            //     'driver_pick_up_time',
            //     'full_name',
            //     'phone']);
        },
        created() {
            // $route.params.id

            this.loading2=true;
            axios.get('/api/webservices/fetch_active_booking_of_group?id='+ this.$route.params.id+'&source=1')
                .then(response=> {


                    this.mem_data=response.data;

                    for(var j=0;j<this.mem_data.length;j++){
                        this.mem_data[j].get_meta.forEach((meta)=>{
                            if(meta.meta_key=='dealership'){
                                this.dealerships.push(meta.meta_value);
                            }
                        })

                    }
                    this.dealerships = [ ...new Set(this.dealerships) ]
                    var return_arr=[];
                    for(var k=0;k<this.dealerships.length;k++){

                        return_arr.push({
                            'dealer' : this.dealerships[k]
                        });
                    }
                    this.dealerships_filtered=_.cloneDeep(return_arr);
                    // console.log(this.dealerships_filtered);


                    this.loading2=false;
                })
                .catch(error => {
                    alert(error);
                    this.loading2=false;
                })


            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency"){
                this.showtoagency=false
            }
            this.$root.relationships = this.relationships


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
            ...mapGetters('GroupsIndexMember', ['added_partner_array','search','data', 'total', 'loading', 'relationships','filter_obj']),

        },
        watch: {

            query: {
                handler(query) {
                    this.setQuery(query)
                },
                deep: true
            },
            "mem_data_filtered": {
                handler(newval) {
                    // console.log('watch');
                    for(var j=0;j<this.mem_data_filtered.length;j++){
                        this.mem_data_filtered[j].get_meta.forEach((meta)=>{
                            if(meta.meta_key=='meta_nomination' && meta.meta_value!=""){

                                this.mem_data_filtered[j].status=false;
                            }
                            if(meta.meta_key=='meta_nomination' && meta.meta_value==""){

                                this.mem_data_filtered[j].status=true;
                            }
                        })

                    }
                },
                deep: true


            }



        },

        methods: {
            ...mapActions('GroupsIndexMember', ['fetchData', 'setQuery', 'resetState','setsearch' , 'setcolumn','setfilter']),

            nominator_name(value) {

                for(var j=0;j<this.mem_data.length;j++) {
                    if(value==this.mem_data[j].id){
                        return this.mem_data[j].full_name;
                    }

                }

            },

            save_data(){
                this.loading2=true
                let form = new FormData();

                form.set("id",this.$route.params.id)
                form.set("data",JSON.stringify(this.mem_data))

                axios.post('/api/webservices/save_nomination',form)
                    .then(response=>{
                        this.loading2=false;
                        this.$eventHub.$emit('create-success')

                    });

            },
            in_dealer_modal(e){
                let return_arr=[];

                this.loading2=true;
                this.mem_data.forEach((data)=>{
                    data.get_meta.forEach((meta)=>{
                        if(meta.meta_key=='dealership'){
                            if(meta.meta_value.toLowerCase().includes(e.dealer.toLowerCase())){
                                data.status=true;
                                return_arr.push(data)
                            }
                        }
                    })
                })

                this.mem_data_filtered=_.cloneDeep(return_arr);
                this.loading2=false;
            },
            refresh_list(){
                this.loading2=true;
                this.mem_data_filtered=[];
                this.dealer_list_modal= {'dealer':''};
                axios.get('/api/webservices/fetch_active_booking_of_group?id='+ this.$route.params.id+'&source=1')
                    .then(response=> {

                        this.mem_data=response.data;

                        for(var j=0;j<this.mem_data.length;j++){
                            this.mem_data[j].get_meta.forEach((meta)=>{
                                if(meta.meta_key=='dealership'){
                                    this.dealerships.push(meta.meta_value);
                                }
                            })

                        }
                        this.dealerships = [ ...new Set(this.dealerships) ]
                        var return_arr=[];
                        for(var k=0;k<this.dealerships.length;k++){

                            return_arr.push({
                                'dealer' : this.dealerships[k]
                            });
                        }
                        this.dealerships_filtered=_.cloneDeep(return_arr);
                        // console.log(this.dealerships_filtered);



                    })
                    .catch(error => {
                        alert(error);
                        this.loading2=false;
                    })
                this.loading2=false;
            },
            selected_nominator(e){
                this.loading2-true;

                for(var k=0;k<this.mem_data_filtered.length;k++) {
                    if(this.mem_data_filtered[k].id==this.modal_index){
                        this.mem_data_filtered[k].get_meta.forEach((data)=>{
                            if(data.meta_key=='meta_nomination'){
                                data.meta_value=e.id;
                            }
                        })

                    }

                }

                for(var j=0;j<this.mem_data.length;j++) {
                    if(this.mem_data[j].id==this.modal_index){
                        this.mem_data[j].get_meta.forEach((data)=>{
                            if(data.meta_key=='meta_nomination'){
                                data.meta_value=e.id;
                            }
                        })

                    }

                }

                this.active_modal=false;
                this.loading2-false;


            },
            remove_nomination(id){

                this.loading2-true;

                for(var k=0;k<this.mem_data_filtered.length;k++) {

                    if(this.mem_data_filtered[k].id==id){
                        this.mem_data_filtered[k].get_meta.forEach((data)=>{
                            if(data.meta_key=='meta_nomination'){
                                data.meta_value='';
                            }
                        })

                    }

                }



                for(var j=0;j<this.mem_data.length;j++) {
                    if(this.mem_data[j].id==id){

                        this.mem_data[j].get_meta.forEach((data)=>{
                            if(data.meta_key=='meta_nomination'){

                                data.meta_value='';
                            }
                        })

                    }

                }



                this.loading2-false;


            },
            relation_set(id,value){



                for(var j=0;j<this.mem_data.length;j++) {
                    if(this.mem_data[j].id==id){

                        this.mem_data[j].get_meta.forEach((data)=>{
                            if(data.meta_key=='meta_relation'){

                                data.meta_value=value;
                            }
                        })

                    }

                }


            }


        }

    }
</script>

<style scoped>




    .font_style{
        width: 10%;

    }

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
        transition-property: opacity;
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

    .table td.fit,
    .table th.fit {
        white-space: nowrap;
        width: 1%;
    }
</style>
