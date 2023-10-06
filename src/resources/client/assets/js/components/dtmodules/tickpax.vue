<template>
   <div>
       <!--            Error Modal-->
       <div class="container"  v-if="show_modal4">
           <div class="modal show in" style="display: block;">
               <div class="modal-dialog" >

                   <div class="modal-content" style="padding: 20px;">
                       <div class="row border-bottom">
                           <div class="col-md-8 ">

                            <h4 class="modal-title  f-2" >Error Logs</h4>

                           </div>
                           <div class="col-md-4">
                               <button classs="f-2-5" type="button" class="close" data-dismiss="modal" @click="show_modal4=false">&times;</button><br>
                           </div>
                       </div>

                       <div class="modal-body" >

                        <div class="row mt-2" v-for="(log,index) in logs" :key="index">


                            <div class="col-md-9">{{index+1}} : {{log.error}}</div>
                            <div class="col-md-3">{{log.time}}</div>


                        </div>



                       </div>


                   </div>
               </div>
           </div>
       </div>

       <div class="text-center" v-if="row.send_status!=2">
           <!--{{row.add_update_status}}-->
           <label class="container_box"  :title="row.add_update_status=='create'?'Click To Tick':'Already Updated'" v-if="row.paid=='Paid' && !row.cancelled_status && row.form_status==4">
               <input type="checkbox" v-model="row.check_status" :disabled="row.add_update_status!='create'">
               <span class="checkmark_box" :class="row.add_update_status=='create'?'':'bg-success'"></span>
           </label>


       </div>
       <div class="" v-else>
           <!--        {{row.send_status}}-->
           <i class="fa fa-info-circle text-danger cursor" style="font-size: 22px" @click="get_error(row.id,row.paxid,row.type)" title="Click to check error"></i>
           <!--        <label class="container_box"  :title="row.add_update_status=='create'?'Click To Tick':'Already Updated'" v-if="row.paid=='Paid' && !row.cancelled_status">-->
           <!--            <input type="checkbox" v-model="row.check_status" :disabled="row.add_update_status!='create'" >-->
           <!--            <span class="checkmark_box"></span>-->
           <!--        </label>-->


       </div>
   </div>



</template>


<script>

    export default {

        props: ['row', 'field'],
        data() {
            return {
                logs:[],
                show_modal4:false,
            }
        },
        computed:{

        },
        watch:{


        },
        created() {


        },
        methods: {
            get_error(id,paxid,type){
                this.loading2=true;
                let form=new FormData();
                form.set("id", id)
                form.set("paxid", paxid)
                form.set("type", type)
                axios.post('/api/v1/fetch_error_logs' , form)
                    .then(response => {
                        this.loading2=false;
                        this.logs=response.data;
                        this.show_modal4=true;
                        console.log(this.logs);
                        // this.$eventHub.$emit('update-success')
                    })
                    .catch(error => {
                        this.loading2=false;
                        alert(error);

                    })
            },
        },
        filters:{

        },
    }
</script>


<style scoped>
    /* The container */
    .container_box {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 0px;
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
        border: 1px solid black;
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

