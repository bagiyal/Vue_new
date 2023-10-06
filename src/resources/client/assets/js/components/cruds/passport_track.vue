<template>
    <section class="content-wrapper"  style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Passport Tracking</h1>
        </section>

        <section class="content"   @click="myfunc">
            <div class="row">
                <div class="col-12 mt-5 text-center">
                    <textarea style="opacity: 0;height: 0px;width: 0px" id="area" v-model="passport_data"></textarea>
                    <h1 class="f-2-5 text-success">{{scan_status}}</h1>
                    <img src="./dashboard_resources/barcode-scan.gif" width="200">
                    <h1 v-if="track_status=='true'" class="f-2-5 text-success">{{status}}</h1>
                    <h1 v-else-if="track_status=='false'" class="f-2-5 text-danger">{{status}}</h1>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                passport_data:'',
                textarea_show:false,
                status:'',
                track_status:'',
                scan_status:'',
            }
        },

        created() {

        },
        mounted() {
            document.getElementById("area").focus();
            this.scan_status='Ready Scan Passport QR Code';
            setInterval(this.focus_function, 5000);

        },
        watch:{
            "passport_data":function () {
                if(this.passport_data!=''){
                    let post=new FormData();
                    post.set('qr_data',this.passport_data);
                    post.set('agent_id',document.querySelector("meta[name='user-id']").getAttribute('content'));
                    axios.post('api/webservices/update_passport_tracking',post)
                        .then((res)=>{
                            if(res.data.status=='fail'){
                                document.getElementById("area").focus();
                                this.scan_status='Ready Scan Passport QR Code';
                                this.passport_data='';
                                this.status=res.data.msg;
                                this.track_status='false';
                                document.getElementById("area").focus();

                            }
                            else if(res.data.status=='success'){
                                this.$eventHub.$emit('create-success')
                                document.getElementById("area").focus();
                                this.scan_status='Ready Scan Passport QR Code';
                                this.passport_data='';
                                this.status='success';
                                this.track_status='true';
                                document.getElementById("area").focus();

                            }
                        })

                }

            }
        },

        methods: {
            focus_function(){
                document.getElementById("area").focus();
                this.scan_status='Ready Scan Passport QR Code';
            },
            myfunc(){
                document.getElementById("area").focus();
                this.scan_status='Ready Scan Passport QR Code';
            },
        },
    }
</script>


<style scoped>

</style>
