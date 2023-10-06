<template>
    <div>
        <div class="container"  v-if="show_modal2">
            <div class="modal show in" style="display: block;">
                <div class="modal-dialog" style="max-width: 500px !important;">

                    <div class="modal-content" style="padding: 20px;">
                        <div class="row border-bottom">
                            <div class="col-md-8 ">
                                <h4 class="modal-title  f-2" >Mail Status</h4>


                            </div>
                            <div class="col-md-4">
                                <button classs="f-2" type="button" class="close" data-dismiss="modal" @click="show_modal2=false">&times;</button><br>
                            </div>
                        </div>

                        <div class="modal-body" style="max-height: 600px !important;overflow: auto;">

                            <div class="container-fluid" v-if="row.sns.length>0">

                                <table class="table" style="background-color: white;text-align: center">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Mail Status</th>
                                        <th scope="col">Date</th>


                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(sns,index) in row.sns">
                                        <td>{{index+1}}</td>
                                        <td v-if="sns.status=='OPEN'" style='color:blue;'>Open</td>
                                        <td v-else-if="sns.status=='DELIVERY'" style='color:green;'>Delivered</td>
                                        <td v-else-if="sns.status=='Bounce'" style='color:red;'>Bounce</td>
                                        <td v-else-if="sns.status==null" style='color:pink;'>Sending Error</td>
                                        <td v-else-if="sns.status==''" style='color:pink;'>Sending Error</td>
                                        <td v-else style='color:pink;'>{{sns.status}}</td>
                                        <td>{{sns.timestamp | moment}}</td>


                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div class="container-fluid" style="text-align: left" v-else>
                                <h4 class="text-secondary">No Data Available</h4>
                            </div>






                        </div>
                    </div>
                </div>
            </div>
        </div>
<span>
        <p v-if="sns=='OPEN'" style='color:blue;' class="cursor" @click="show_modal2=true">Open</p>
        <p v-else-if="sns=='DELIVERY'" style='color:green;' class="cursor" @click="show_modal2=true">Delivered</p>
        <p v-else-if="sns=='Bounce'" style='color:red;' class="cursor" @click="show_modal2=true">Bounce</p>
        <p v-else-if="sns=='no_mail'" ></p>
        <p v-else-if="sns==null" style='color:pink;' class="cursor" @click="show_modal2=true">Sending Error</p>
        <p v-else-if="sns==''" style='color:pink;' class="cursor" @click="show_modal2=true">Sending Error</p>
        <p v-else style='color:pink;' class="cursor" @click="show_modal2=true">{{sns}}</p>
</span>
    </div>
</template>


<script>
    import moment from 'moment-timezone'
    export default {

        props: ['row', 'field'],
        data() {
            return {

                sns:'',
                show_modal2:false,
            }
        },
        computed:{

        },
        watch:{
            // "row": function() {
            //
            //
            // }
        },
        created() {
            if(this.row.sns.length>0){
                var length=this.row.sns.length;
                 length=length-1;
                this.sns=this.row.sns[length]['status'];

            }
            else{
                this.sns='no_mail';
            }

        },
        methods: {
            // Code...
        },
        filters:{
            moment: function (value) {
                if (value) {
                    return moment.unix(value).format("MM-DD-YYYY")
                }
            },
        },
    }
</script>


<style scoped>
    p{
        font-weight: bold;
    }
    .table-striped tbody tr:nth-of-type(2n+1) {
        background-color: transparent !important;
    }
</style>

