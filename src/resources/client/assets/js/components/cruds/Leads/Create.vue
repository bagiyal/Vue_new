<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>{{item.lead_id}}</h1>


        </section>
        <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
<!--        <vue-html2pdf-->
<!--            :show-layout="false"-->
<!--            :preview-modal="true"-->
<!--            :paginate-elements-by-height="1400"-->
<!--            filename="hee hee"-->
<!--            :pdf-quality="2"-->
<!--            pdf-format="a4"-->
<!--            pdf-orientation="landscape"-->
<!--            pdf-content-width="800px"-->

<!--            @progress="onProgress($event)"-->
<!--            @hasStartedGeneration="hasStartedGeneration()"-->
<!--            @hasGenerated="hasGenerated($event)"-->
<!--            ref="html2Pdf"-->
<!--        >-->
<!--            <section slot="pdf-content">-->
<!--                <h1>hello</h1>-->
<!--            </section>-->
<!--        </vue-html2pdf>-->

        <section class="content m-t2px">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        <form @submit.prevent="submitForm" novalidate>
                            <!--                            <div class="box-header with-border">-->
                            <!--                                <h3 class="box-title">Create</h3>-->
                            <!--                            </div>-->

<!--                            <div>-->
<!--                                <back-buttton></back-buttton>-->
<!--                            </div>-->

                            <bootstrap-alert />
                            <div class="container-fluid ml-4">

                                <div class="row ml-5">
                                    <div class="col-12 h1"><i class="fas fa-pencil-alt"></i><b>Create Lead</b></div>
                                    <div class="col-lg-5 ml-4">
                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Tentative Date</span></div>
                                            <div class="col-lg-12"><span class="p-a mt-1 ml-3 c-grey f-1-8"><i class="fa fa-calendar"></i></span>
                                                <date-picker
                                                    :value="item.date"
                                                    :config="$root.dpconfigDate_disable_dates"
                                                    name="date"
                                                    placeholder="Enter Date"
                                                    @dp-change="updateDate"
                                                    class="pl-5 fw-4"
                                                >
                                                </date-picker></div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Mobile Number</span></div>
                                            <div class="col-lg-12">
                                                <span class="p-a pl-2"><img src="./../dashboard_resources/contact.png"></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span>
                                                <vue-tel-input v-bind="bindProps" style="border: 1px solid #ced4da;" v-model="item.phone"   class="form-control pl-5" name="phone" placeholder="Enter Phone"></vue-tel-input>



                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Email</span></div>
                                            <div class="col-lg-12"><span class="p-a ml-3 mt-1 c-grey f-1-8"><i class="fa fa-envelope"></i></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span><input
                                                    type="email"
                                                    class="form-control pl-5 fw-4"
                                                    name="email"
                                                    placeholder="Enter Email"
                                                    :value="item.email"
                                                    @input="updateEmail"
                                                ></div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-12"><label for="lead_id1" class="h2 fw-4 text-muted">Source Lead</label></div>
                                            <div class="col-lg-12 mt-n2">
                                                <span class="p-a ml-3"><img src="./../dashboard_resources/leadsource.png" class="hw-2 mt-2"></span>
                                                <select
                                                    class="form-control pl-5 fw-4"
                                                    name="lead_id1"
                                                    :value="item.source"
                                                    @input="updateSource"
                                                ><option value="Adwords">Adwords</option>
                                                    <option selected value="Social Media">Social Media</option>

                                                    <option value="Offline Purchase">Offline Purchase</option>
                                                    <option value="Repeat">Repeat</option>
                                                    <option value="Referred">Referred</option>
                                                    <option value="Website">Website</option>
                                                    <option value="Walk In">Walk In</option>
                                                    <option value="Phone Call">Phone Call</option>
                                                    <option value="Corporate">Corporate</option>
                                                    <option value="Sales Team">Sales Team</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-5 offset-1">
                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Sector</span></div>
                                            <div class="col-lg-12"><span class="p-a ml-2 mt-2"><img src="./../dashboard_resources/loction.png" class="hw-i"></span> <input
                                                type="text"
                                                class="form-control pl-5 fw-4"
                                                name="package_type"
                                                placeholder="Enter Package type"
                                                :value="item.package_type"
                                                @input="updatePackage_type"

                                            >
                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Traveller Name</span>
                                                <i @click="resettrav" title="Rest Traveller Details"  aria-hidden="true" class="fa fa-refresh f-2" style="cursor: pointer;"></i>

                                            </div>
                                            <div class="col-lg-12"><span class="p-a ml-1"><img src="./../dashboard_resources/name.png"></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span>
                                                <input
                                                    type="text"
                                                    class="form-control pl-5 fw-4"
                                                    name="name"
                                                    placeholder="Enter Name"
                                                    :value="item.name"
                                                    @input="updateName"
                                                ></div>
                                        </div>

                                        <div class="row mt-5">
                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Traveller</span></div>
                                            <div class="col-lg-12"><span class="p-a ml-3 mt-2"><img src="./../dashboard_resources/traveller.png" class="hw-2"></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span>
                                                <input readonly class="form-control bg-w pl-5 fw-4" data-toggle="modal" data-target="#myModal"  v-model="total_trav" type="text">
                                                <div class="container">

                                                    <div class="modal" id="myModal">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">

                                                                <!-- Modal Header -->


                                                                <!-- Modal body -->
                                                                <div class="modal-body">
                                                                    <button type="button" class="close f-2-5" data-dismiss="modal">&times;</button><br>
                                                                    <div class="container">
                                                                        <div class="row text-center pt-2 pb-2" style="">
                                                                            <div class="col-lg-4">
                                                                                <div class="row">
                                                                                    <div class="col-12">
                                                                                        <span class="h3 fw-4 text-muted">Adults</span>
                                                                                    </div>
                                                                                    <div class="col-lg-12" style="">
                                                                                        <vue-numeric-input id="adult" v-model="item.adult_guest"

                                                                                                           :min="1"
                                                                                                           :step="1"></vue-numeric-input>
                                                                                        <!--                                                                                        <input type="number" id="adult" class="form-control" min="1"-->
                                                                                        <!--                                                                                              -->
                                                                                        <!--                                                                                        >-->
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4">
                                                                                <div class="row">
                                                                                    <div class="col-12">
                                                                                        <span class="h3 fw-4 text-muted">Children</span>
                                                                                    </div>
                                                                                    <div class="col-12" style="">
                                                                                        <vue-numeric-input id="child" v-model="item.kids_guests"

                                                                                                           :min="0"
                                                                                                           :step="1"></vue-numeric-input>
                                                                                        <!--                                                                                        <input type="number" id="child" min="0" style="width: 50px;height: 25px;border: 1px solid darkgrey;border-radius: 3px;" value="0"  placeholder="0"-->
                                                                                        <!--                                                                                               -->
                                                                                        <!--                                                                                        >-->
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4">
                                                                                <div class="row">
                                                                                    <div class="col-12">
                                                                                        <span class="h3 fw-4 text-muted">Infant</span>
                                                                                    </div>
                                                                                    <div class="col-12" style="">
                                                                                        <vue-numeric-input id="infant" v-model="item.infant_guest"

                                                                                                           :min="0"
                                                                                                           :step="1"></vue-numeric-input>
                                                                                        <!--                                                                                        <input type="number" id="infant" min="0" style="width: 50px;height: 25px;border: 1px solid darkgrey;border-radius: 3px;" placeholder="0"-->
                                                                                        <!--                                                                                               -->
                                                                                        <!--                                                                                        >-->
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <!-- Modal footer -->

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="row mt-5">



                                            <div class="col-lg-12"><span class="h2 fw-4 text-muted">Remark</span></div>
                                            <div class="col-lg-12"><span class="p-a ml-3 c-grey f-2"><i class="fa fa-pencil-square-o"></i></span>
                                                <span class="edit__img">
                                        <img src="./../dashboard_resources/edit.png" class="hw-i mt-2">
                                    </span>
                                                <input type="text" class="form-control pl-5 fw-4"
                                                       name="remark"
                                                       placeholder="Enter Remark"
                                                       v-model="locremark"
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row ml-5">
                                    <div class="mt-5 col-6" >
                                        <label class="container_input" v-if="show_assign">
                                            <input type="checkbox" v-model="selfass" >
                                            <span class="checkmark"></span>
                                        </label>
                                        <p v-if="show_assign" class="ml-5 f-1-4 mt-n3 text-muted text-bold"><span>Self Assign</span></p>
                                    </div>
                                    <div class="mt-5 col-6">
                                        <div class="col-10" ><span class=" h2 fw-4 text-muted">Lead Feel Rating:</span></div>
                                        <div class="col-10">
                                            <div class="row ml-2">

                                                <div class="bg-danger rating-5 text-center" @click="item.lead_feel=5">
                                                    <div class="f-1-4 text-light fw-4">5</div>
                                                    <i class="fas fa-caret-up mt-0" v-if="item.lead_feel==5"></i></div>
                                                <div class=" bg-warning rating-w-all text-center" @click="item.lead_feel=4">
                                                    <div class="f-1-4 text-light fw-4">4</div>
                                                    <i class="fas fa-caret-up mt-0" v-if="item.lead_feel==4"></i></div>
                                                <div class="bg-primary rating-w-all text-center" @click="item.lead_feel=3">
                                                    <div class="f-1-4 text-light fw-4">3</div>
                                                    <i class="fas fa-caret-up mt-0 text-dark" v-if="item.lead_feel==3"></i></div>
                                                <div class=" bg-success rating-w-all text-center" @click="item.lead_feel=2">
                                                    <div class="f-1-4 text-light fw-4">2</div>
                                                    <i class="fas fa-caret-up mt-0" v-if="item.lead_feel==2"></i></div>
                                                <div class=" bg-dark rating-w-all text-center" @click="item.lead_feel=1">
                                                    <div class="f-1-4 text-light fw-4">1</div>
                                                    <i class="fas fa-caret-up mt-0" v-if="item.lead_feel==1"></i></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12 text-center mt-4">
                                        <!--                                            <button class="btn btn-primary text-light"><i class="fa fa-paper-plane" aria-hidden="true"></i>Submit</button>-->


                                        <vue-button-spinner v-if="submit"
                                                            class="btn btn-primary text-light pl-4 pr-4 ml-button"
                                                            style="border-radius:7px;"
                                                            :isLoading="loading"
                                                            :disabled="loading"

                                        >
                                            <span class="h2"><i class="fa fa-paper-plane mr-2"></i>Submit</span>
                                        </vue-button-spinner>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </section>
</template>


<script>
    $("#sum").click(function () {

        var a_num = $("#adult").val();
        var c_num = $("#child").val();
        var inf_num=$("#infant").val();
        var total = parseInt(a_num) + parseInt(c_num)+ parseInt(inf_num);
        if(c_num==0 && inf_num==0){ total = a_num}
        if(inf_num==0){total= parseInt(a_num)+ parseInt(c_num)}
        $("#sum").val(total);

    });
    function popupfunction() {
        var x = document.getElementById("popup");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    import { mapGetters, mapActions } from 'vuex'
    import { VueTelInput } from 'vue-tel-input'
    // import VueHtml2pdf from 'vue-html2pdf'
    export default {
        data() {
            return {
                // Code...
                submit:true,
                locremark:'',
                currentDate:null,
                // total_trav:1,
                pop:false,
                selfass:true,
                bindProps: {
                    mode: "international",
                    defaultCountry: "INR",
                    disabledFetchingCountry: false,
                    disabled: false,
                    disabledFormatting: false,
                    placeholder: "Enter a phone number",
                    required: false,
                    enabledCountryCode: true,
                    enabledFlags: true,
                    preferredCountries: ["AU", "BR"],
                    onlyCountries: [],
                    ignoredCountries: [],
                    autocomplete: "off",
                    name: "telephone",
                    maxLen: 25,
                    wrapperClasses: "",
                    inputClasses: "",
                    dropdownOptions: {
                        disabledDialCode: false
                    },
                },

                traveller_array:{},
                force:false,
                show_assign:false,
            }
        },
        watch: {
            "force": function(newVal, oldVal) {
                if(this.item.lead_id=== null || this.item.lead_id===""){
                    // alert("k")
                    location.reload();
                }

            },
            "item.phone": function(newVal, oldVal) {

                if(typeof this.item.email !== "undefined" && this.item.email !== null && this.item.email.length>10 ){
                    this.get_trav();
                }
            },
            "item.email": function(newVal, oldVal) {

                if(typeof this.item.phone !== "undefined" && this.item.phone !== null && this.item.phone.length>10 ){
                    this.get_trav();
                }

            },
            "item.name": function(newVal, oldVal) {

                if((typeof this.item.phone !== "undefined" && this.item.phone !== null && this.item.phone.length>10) || (typeof this.item.email !== "undefined" && this.item.email !== null && this.item.email.length>10) ){
                    this.get_trav();
                }

            },
            "selfass": {

                handler(newval, oldVal){

                    if(newval==true){
                        console.log("if");
                        this.item.created_by=1
                        this.item.created_by_id=1
                    }
                    else {
                        console.log("else");
                        this.item.created_by=''
                        this.item.created_by_id=''
                    }


                },
                deep: true


            },

        },


        computed: {
            ...mapGetters('LeadsSingle', ['item', 'loading']),

            total_trav(){

                return parseInt(this.item.adult_guest) + parseInt(this.item.kids_guests) +  parseInt(this.item.infant_guest);

            }
        },
        created() {



            this.fetchScoreRange();
            // alert("in")
                this.item.source="Social Media",
              //  this.item.score=3,
                this.item.lead_feel=3,

                this.currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'');
            if(document.querySelector("meta[name='user-role']").getAttribute('content')==="lms_agent"){
                this.show_assign=true;
                var agency=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id;

            }
            else if(document.querySelector("meta[name='user-role']").getAttribute('content')=="agency" ){
                var agency=document.querySelector("meta[name='user-id']").getAttribute('content');

                this.item.created_by=''
                // this.item.agency_id=agency;
                // this.item.agency_id='{"id":'+agency+',"name":"'+document.querySelector("meta[name='user-name']").getAttribute('content')+'"}';
                this.item.created_by_id=''
            }



            this.item.lead_id='LD-'+document.querySelector("meta[name='user-id']").getAttribute('content')+'-'+agency+'-'+this.currentDate+'-'+Math.floor((Math.random() * (999-100+1)+100))
                this.item.lead_status=1
     //       this.force=false;
            this.force=true;
        },
        destroyed() {
            this.resetState()
        },
        methods: {
            ...mapActions('LeadsSingle', ['storeData', 'resetState', 'setLead_id', 'setLead_status', 'setPackage_type', 'setDate', 'setEmail', 'setPhone', 'setName', 'setAdult_guest', 'setScore', 'setKids_guests', 'setAgent_id', 'setAgency_id', 'setScore_new', 'setLead_feel' ,'meta_id','query_id','sl_score','dd_score','source','source_id','source_url','task','task_status','setRemark', 'setSource','setInfant_guest','setTraveller_id','fetchScoreRange']),
            forceupdate(){

               if (!this.item.lead_id.length>2){
                   console.log("force");
                        this.item.source="Social Media",
                        //  this.item.score=3,
                        this.item.lead_feel=3,
                        this.currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'');
                    var agency=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'));
                    this.item.lead_id='LD-'+document.querySelector("meta[name='user-id']").getAttribute('content')+'-'+agency.id+'-'+this.currentDate+'-'+Math.floor((Math.random() * (999-100+1)+100))
                    this.item.lead_status=1
                   this.forceupdate()
                }
            },

            resettrav(){
                this.setPhone('')
                this.setEmail('')
                this.setName('')
            },
            get_trav(){
                // alert("g")
                let trav = new FormData();

                trav.set("phone_number",this.item.phone)
                trav.set("email",this.item.email)
                axios.post('/api/webservices/trav_auth',trav)
                    .then(response=>{
//console.log(response.data)
                        if(response.data==="No Data"){

                        }
                        else if(response.data ==="This Number is linked with Lms Agent / Agency" || response.data ==="This Email is linked with Lms Agent / Agency" || response.data==='This Email or Number is linked with Lms Agent / Agency'){
                            alert(response.data);
                            this.resettrav();


                        }
                        else{
                            this.traveller_array=response.data
                            this.setPhone(this.traveller_array.phone)
                            this.setEmail(this.traveller_array.email)
                            this.setName(this.traveller_array.name)
                        }


                    })
            },


            generateReport () {
                this.$refs.html2Pdf.generatePdf()
            },
            updatemeta_id(e) {
                this.setmeta_id(e.target.value)
            },
            updatequery_id(e) {
                this.setquery_id(e.target.value)
            },
            updatesl_score(e) {
                this.setsl_score(e.target.value)
            },
            updatedd_score(e) {
                this.setdd_score(e.target.value)
            },
            updatesource(e) {
                this.setsource(e.target.value)
            },
            updatesource_id(e) {
                this.setsource_id(e.target.value)
            },
            updatesource_url(e) {
                this.setsource_url(e.target.value)
            },
            updatetask(e) {
                this.settask(e.target.value)
            },
            updatetask_status(e) {
                this.settask_status(e.target.value)
            },

            updateLead_id(e) {
                this.setLead_id(e.target.value)
            },
            updateLead_status(e) {
                this.setLead_status(e.target.value)
            },
            updatePackage_type(e) {
                this.setPackage_type(e.target.value)
            },
            updateDate(e) {
                this.setDate(e.target.value)
            },
            updateEmail(e) {
                this.setEmail(e.target.value)
            },
            updatePhone(e) {
                this.setPhone(e.target.value)
            },
            updateName(e) {
                this.setName(e.target.value)
            },

            updateScore(e) {
                this.setScore(e.target.value)
            },

            updateAgent_id(e) {
                this.setAgent_id(e.target.value)
            },
            updateAgency_id(e) {
                this.setAgency_id(e.target.value)
            },
            updateScore_new(e) {
                this.setScore_new(e.target.value)
            },
            updateLead_feel(e) {
                this.setLead_feel(e.target.value)
            },
            updateRemark(e) {

                this.setRemark(e.target.value)
            },
            updateSource(e) {
                this.setSource(e.target.value)
            },
            updateAdult_guest(e) {
                this.setAdult_guest(e.target.value);
                this.total_trav= Number(this.item.adult_guest)+ Number(this.item.kids_guests)+ Number(this.item.infant_guest);
            },
            updateKids_guests(e) {
                this.setKids_guests(e.target.value);
                this.total_trav=  Number(this.item.adult_guest)+  Number(this.item.kids_guests)+  Number(this.item.infant_guest);
            },
            updateInfant_guest(e) {
                this.setInfant_guest(e.target.value);
                this.total_trav=  Number(this.item.adult_guest)+  Number(this.item.kids_guests)+  Number(this.item.infant_guest);
            },
            submitForm() {
                this.setRemark("Lead Created");
if(this.item.lead_id===''){
    var agency=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content'));
    this.item.lead_id='LD-'+document.querySelector("meta[name='user-id']").getAttribute('content')+'-'+agency.id+'-'+this.currentDate+'-'+Math.floor((Math.random() * (999-100+1)+100))

}

                    this.submit=false;
                if(this.locremark!==''){
                    this.setRemark(this.locremark);
                }


                var re = /\S+@\S+\.\S+/;
                var  email_v= re.test(this.item.email);
                if(this.item.name && this.item.email && email_v && this.item.phone){
                    var res = this.item.phone.replace(/\(/g, "");
                    res = res.replace(/\)/g, "");
                    res = res.replace(/-/g, "");
                    res = res.replace(/ /g, "");
                    this.setPhone(res);
                    let trav = new FormData();

                    trav.set("name",this.item.name)
                    trav.set("email",this.item.email)
                    trav.set("phone",this.item.phone)
                    trav.set("type","lead")
                    axios.post('/api/v1/travellers', trav)
                        .then(response => {
                            console.log(response)
                            console.log(response.data.status)
                            this.setTraveller_id(response.data.id);
                            if(response.data.status=='error'){
                                this.submit=true;
                                alert(response.data.type);
                                this.item.remark=_.cloneDeep([])
                            }

                            else {
                               // alert("error12");
                                let agent_State=this.item.agent_id;
                                this.storeData()
                                    .then(() => {
                                        if(agent_State)
                                        this.$router.push({ name: 'leads.index' })
                                        this.$eventHub.$emit('create-success')
                                    })
                                    .catch((error) => {
                                        this.submit=true;
                                        console.error(error)
                                        this.item.remark=_.cloneDeep([])
                                    })
                            }

                        })
                        .catch(error => {
                            this.submit=true;
                            alert("error1");
                            console.log(error)
                        })

                }
                else {
                    this.submit=true;
                    alert("Provide All Contact Details");
                }
            }
        },
        components: {VueTelInput}
    }

</script>


<style scoped>
    .dropbtn {

        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
    }
    .changecolor:hover{background-color:white;border-bottom-left-radius: 5px }
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {display:none;
        top:0px;
        right:-70px;
        position: absolute;

        min-width: 50px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .icon {
        color: darkgrey;
        text-align: center;

    }
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        width: 70px;
    }



    .dropdown:hover .dropdown-content {display: block;}
    .sidebar{
        float: left;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        text-align: left;
        height: 100%;
        width: 20%;
        padding-bottom: 200px;
        /*margin-top: -10px;*/


    }
    .edit__img{
        position: absolute;
        right: 20px;
    }
    .sidebar a{
        text-decoration: none;
        color:black;
        display: grid;
        text-align: left;
        padding: 10px 10px 10px 10px;
        border-collapse: solid black 1px;
    }
    .ml-button{
        margin-left: -2%;
    }
    .sidebar a:hover{
        background-color: #2751A4;
        padding-left: 20px;
        color: white;
        display: grid;

    }
    .sidebar li{list-style: none;}
    #align{
        text-align: left;
        margin-left:-40px; margin-right:10px;
    }
    .onhover a{color:grey; font-size: 13px;}
    .onhover a:hover{background-color: #2751A4; border-radius:20px; color: white;}
    .navpad li a{ padding-left: 70px; }
    .quantity::-webkit-inner-spin-button,
    .quantity::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .vue-numeric-input {
        position: relative;
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 70px !important;
    }
    .pl-5, .px-5 {
        padding-left: 4rem!important;
    }
    p span {
        padding-right: 10px;
    }
    p:after {
        content: "";
        position: absolute;
        bottom: 12px;
        left: 122px;
        right: 0;
        width: 86.8%;
        height: 0.5em;
        border-top: 1px solid white;
        z-index: 1;
    }
    @media screen and (min-width: 1900px){
        p:after{
            width: 91%
        }
        .ml-button{
            margin-left: -3.5%;
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1300px){
        p:after{
            width:85.7%
        }
        .ml-button{
            margin-left: -1%;
        }
    }
</style>
<style>

</style>
