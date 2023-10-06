<template>
    <div class="container-fluid">
        <div id="accordion" class="accordion">
            <h2 v-if="docType=='passport'" class="col-12 text-right mb-3"><a href="#" @click="$emit('showModal2')" class="btn btn-success btn-lg" >Passport Sample Image</a></h2>
            <div class="card mb-3 "  v-for="(members,index_main) in data" :key="index_main+members.id" style="overflow: inherit;">
                <div class="card-header " :class="index_main==0?'':'collapsed'" data-toggle="collapse" :href="'#collapse'+index_main">
                    <a class="card-title">{{members.name}} <span v-if="members.relation!=''">({{members.relation}})</span></a>
                </div>
                <div :id="'collapse'+index_main" class="card-body collapse" :class="index_main==0?'show in':''" data-parent="#accordion">

                    <div :class="docType=='passport'||docType=='photoid'?'col-12':'col-6'" class="mt-3" v-for="(key,index) in members.doc" style="background-color: white;">

                        <div class="row" v-if="docType=='passport'">
                            <!--issue date column-->
                            <div v-if="typeof key.issue_date!==undefined" class="col-lg-2 pt-4 pb-4 mt-2 border-right" >

                                <p class="f-1-8 ">Issue Date</p>
                                <date-picker
                                    :id="'issue_date'+index"
                                    v-model="key['issue_date']"
                                    name="issue_date"
                                    placeholder="12/02/2020"
                                    :config="$root.dpconfigDate_disable_future_dates"
                                    v-if="key['pdf']==''"
                                >
                                </date-picker>
                                <date-picker
                                    :id="'issue_date'+index"
                                    v-model="key['issue_date']"
                                    name="exp_date"
                                    placeholder="12/02/2020"
                                    :config="$root.dpconfigDate"
                                    :disabled="true"
                                    v-else
                                >
                                </date-picker>
                            </div>
                            <!--expiry date column-->
                            <div v-if="typeof key.exp_date!==undefined" class="col-lg-2 pt-4 pb-4 mt-2 border-right">

                                <p class="f-1-8 ">Exp. Date</p>
                                <date-picker
                                    :id="'exp_date'+index"
                                    v-model="key['exp_date']"
                                    name="exp_date"
                                    placeholder="12/02/2020"
                                    @input="err_passport=[]"
                                    :config="$root.dpconfigDate_disable_dates"
                                    v-if="key['pdf']==''"
                                >
                                </date-picker>
                                <date-picker
                                    :id="'exp_date'+index"
                                    v-model="key['exp_date']"
                                    name="exp_date"
                                    placeholder="12/02/2020"
                                    @input="err_passport=[]"
                                    :config="$root.dpconfigDate"
                                    :disabled="true"
                                    v-else
                                >
                                </date-picker>
                            </div>
                            <!--issue place column-->
                            <div v-if="typeof key.issue_place!==undefined" class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                <p class="f-1-8 ">Issue Place</p>
                                <input
                                    :id="'issue_place'+index"
                                    type="text"
                                    :disabled="key['pdf']!=''"
                                    v-model="key['issue_place']"
                                    class="form-control"
                                    placeholder="Delhi"
                                />
                            </div>
                            <!--first name  column-->
                            <div v-if="typeof key.name_first!==undefined" class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                <p class="f-1-8 ">Given Name</p>
                                <input
                                    :id="'name_first'+index"
                                    type="text"
                                    :disabled="key['pdf']!=''"
                                    v-model="key['name_first']"
                                    class="form-control"
                                    placeholder="First Name">
                            </div>
                            <!--last name  column-->
                            <div  v-if="typeof key.name_last!==undefined" class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                <p class="f-1-8 ">Sur Name</p>
                                <input
                                    :id="'name_last'+index"
                                    type="text"
                                    :disabled="key['pdf']!=''"
                                    v-model="key['name_last']"
                                    class="form-control"
                                    placeholder="Last Name"
                                >
                            </div>
                            <!--passport number column-->
                            <div v-if="typeof key.passportno!==undefined" class="col-lg-2 pt-4 pb-4 mt-2 border-right">
                                <p class="f-1-8 ">Passport No.</p>
                                <input
                                    :id="'passportno'+index"
                                    type="text"
                                    :disabled="key['pdf']!=''"
                                    v-model="key['passportno']"
                                    class="form-control"
                                    placeholder="123546">
                            </div>
                            <!--passport pdf column-->
                            <div v-if="typeof key.pdf!=undefined && docType=='passport'" class="col-lg-4 mt-2 mb-2 text-center " >

                                <div class="row mt-3">

                                    <div class="col-12 text-center f-1-6" v-if="key['pdf']=='' ||key['pdf']==undefined ">
                                        <p class="ml-4">
                                            Passport Front & Last Page PDF<br/>
                                            <span  class="text-primary f-1-2">(Size: 2MB, Format: PDF)</span>
                                        </p>
                                        <label class="file_hidden cursor offset-1 mt-n2 f-1-6">
                                            Choose File
                                            <input
                                                :id="docType+index"
                                                type="file"
                                                size="20"
                                                @change="uploaddoc($event,docType,index,index_main,docType+index)"
                                                accept="application/pdf"
                                            >
                                        </label>
                                    </div>
                                    <div class="col-12 text-center f-1-6" v-else>
                                        <p class="ml-4">
                                            Uploaded Passport PDF<br/>

                                        </p>
                                        <div class="row" style="margin-top: 25px;">
                                            <div class="col-md-8 offset-2">
                                                <a class="download_button mt-n2 offset-2" :href="members.doc[index].pdf" target="_blank">Download</a>
                                            </div>
                                            <div class="col-md-2">
                                                <img
                                                    @click="deletedDocs.push(members.doc[index].pdf),members.doc[index].pdf=''"
                                                    src="./../dashboard_resources/trash.png"
                                                    class="hw-2 mt-1"
                                                >
                                            </div>
                                        </div>


                                    </div>
                                </div>


                            </div>



                        </div>
                        <div class="row" v-else-if="docType=='photoid'">
                            <!--Member Name-->
                            <span style="display: none;">{{key['mem_name']=members.name}}</span>
                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right">
                                <p class="f-1-8 ">Member Name</p>
                                <input
                                    :id="'mem_name'+index"
                                    :disabled="key['url']!=''"
                                    type="text"
                                    v-model="key['mem_name']"
                                    class="form-control"
                                >
                            </div>
                            <!--ID Type-->
                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right" v-if="key['url']==''">
                                <p class="f-1-8 ">ID Type</p>

                                <v-select
                                    :id="'id_name'+index"
                                    :clearable="false"
                                    name="addmem"
                                    label="label"
                                    :options="[{'label':'Aadhar Card'},{'label':'Pan Card'},{'label':'Driving Licence'},{'label':'Voter Id'}]"
                                    v-model="key['id_name']"
                                    class="bg-white"

                                />

                            </div>
                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right" v-else>
                                <p class="f-1-8 ">Id Type</p>
                                <input v-if="typeof key['id_name']=='string'" :disabled="key['url']!=''"  type="text" v-model="key['id_name']"  class="form-control" >
                                <input v-else :disabled="key['url']!=''"  type="text" v-model="key['id_name'].label"  class="form-control" >
                            </div>
                            <!--ID Number-->
                            <div class="col-lg-3 pt-4 pb-4 mt-2 border-right">
                                <p class="f-1-8 ">Id Number</p>
                                <input
                                    :id="'id_num'+index"
                                    :disabled="key['url']!=''"
                                    type="text"
                                    v-model="key['id_num']"
                                    class="form-control" >
                            </div>
                            <!--url-->
                            <div v-if="typeof key.url!=undefined" class="col-lg-3 mt-2 mb-2 text-center " >

                                <div class="row mt-3">

                                    <div class="col-12 text-center f-1-6" v-if="key['url']=='' || key['url']==undefined">
                                        <p class="ml-4">
                                            Upload Photo Id<br/>
                                            <span  class="text-primary f-1-2">(Size: 2MB, Format: JPG,PNG,PDF)</span>
                                        </p>
                                        <label class="file_hidden cursor mt-n2 f-1-6">
                                            Choose File
                                            <input
                                                :id="docType+index"
                                                type="file"
                                                size="20"
                                                @change="uploaddoc($event,docType,index,index_main,docType+index)"
                                                accept="image/x-png,image/jpg,image/jpeg,application/pdf"
                                            >
                                        </label>
                                    </div>
                                    <div class="col-12 text-center f-1-6" v-else>
                                        <p class="ml-4">
                                            Uploaded {{key['id_name'].label}}<br/>

                                        </p>
                                        <div class="row" style="margin-top: 25px;">
                                            <div class="col-md-8 offset-2">
                                                <a class="download_button mt-n2 offset-2" target="_blank" :href="members.doc[index].url"  >Download</a>
                                            </div>
                                            <div class="col-md-2">
                                                <img
                                                    @click="deletedDocs.push(members.doc[index].url),members.doc[index].url=''"
                                                    src="./../dashboard_resources/trash.png"
                                                    class="hw-2 mt-1"
                                                >
                                            </div>
                                        </div>


                                    </div>
                                </div>


                            </div>


                        </div>
                        <div class="row" v-else>

                                <div class="col-3 border bg-w text-center rounded">
                                    <img v-if="docType=='visa'" class="mt-4" src="./../dashboard_resources/E_Visa.png" height="60px" width="45px">
                                    <img v-if="docType=='voucher'" class="mt-4" src="./../dashboard_resources/voucher.png" height="60px" width="45px">
                                    <img v-if="docType=='insurance'" class="mt-4" src="./../dashboard_resources/Insurance.png" height="60px" width="45px">
                                    <img v-if="docType=='other'" class="mt-4" src="./../dashboard_resources/Other.png" height="60px" width="45px">

                                    <p class="f-1-6 mt-3">
                                       {{ docType=='visa'?'E-Visa':docType=='voucher'?'Voucher':docType=='insurance'?'Insurance':'Other' }}
                                    </p>
                                </div>
                                <div class="col-9">
                                    <div class="row mt-3">
                                        <div class="col-12 text-center f-1-6" v-if="key['url']==''">
                                            <p >
                                                Upload
                                                <span v-if="docType=='visa'">E-visa</span>
                                                <span v-if="docType=='voucher'">Voucher</span>
                                                <span v-if="docType=='insurance'">Insurance</span>
                                                <span v-if="docType=='other'">Others</span>
                                                <br/>
                                                <span  class="text-primary f-1-2">(Size: 2MB, Format: JPG,PNG,PDF)</span>
                                            </p>
                                            <label class="file_hidden offset-2 mt-n2 f-1-6">
                                                Choose File
                                                <input
                                                    :id="docType+index"
                                                    type="file"
                                                    size="20"
                                                @change="uploaddoc($event,docType,index,index_main,docType+index)"
                                                    accept="image/x-png,image/jpg,image/jpeg,application/pdf"
                                                >

                                            </label>
                                        </div>
                                        <div class="col-12 text-center f-1-6" v-if="key['url']!=''">
                                            <p class="fw-6"> <span v-if="docType=='visa'">E-visa</span>
                                                <span v-if="docType=='voucher'">Voucher</span>
                                                <span v-if="docType=='insurance'">Insurance</span>
                                                <span v-if="docType=='other'">Others</span>
                                                Uploaded</p>
                                            <div class="row">
                                                <div class="col-md-8 offset-2">
                                                    <a class="download_button mt-n2 offset-2 f-1-6" target="_blank" :href="key['url'] ">Download</a>
                                                </div>
                                                <div class="col-md-2">
                                                    <img  @click="deletedDocs.push(members.doc[index].url),members.doc[index].url=''" src="./../dashboard_resources/trash.png" class="hw-3 ">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                        <hr/>

                    </div>



                    <div class="col-lg-12 text-center mt-5">
                        <button
                            @click='addData(index_main)'
                            class="btn btn-primary f-2">
                            Add New
                        </button>
                    </div>



                </div>

            </div>

        </div>
    </div>

</template>

<script>
    import moment from 'moment';
    import { mapActions } from 'vuex'
    import uploadfile from "../../../mixins/uploadfile";
    export default {
        name: "Documents",
        props:["bookId","docType","loading","showModal2","newInsatance","grpId","booking_id"],
        data(){
            return{
                'data':[],
                'deletedDocs':[],
                uploadedFlag:false

            }
        },
        mounted(){

            this.newInsatance.$on('save_n_update', this.updata_data)

            //feching doc details
            axios.post('/api/v1/getDocsData/'+this.bookId+'/'+this.docType)
                .then(response => {
                    if(response.data.status){
                        this.data =_.cloneDeep(response.data.data)
                    }
                })
                .catch(error => {
                    // console.log(error);
                })

        },
        methods: {
            ...mapActions('BookingsSingle',['uploadFile']),
            uploaddoc(value,type,doc_index,mem_index,id){
                // console.log(id);

                try{
                   let doc=this.data[mem_index].doc[doc_index];
                    console.log("aaa",doc);


                    // doc validate
                    let field_error=false;
                    let passport_expire=0;
                    if(type=='passport'){

                       console.log("bbb",type)

                        for (const [key, value] of Object.entries(doc)) {

                            if(key!='url' && key!='url2' && key!='pdf' ){
                                console.log("value",value)

                                // console.log(`${key}: ${value}`);
                                if(value!=''){
                                    if(key=='exp_date'){
                                        var today = new Date();
                                        var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                                        let date1 = new Date(today_date);
                                        let date2 = new Date(moment(value, 'DD-MM-YYYY').format('YYYY-MM-DD'));
                                        let diffDays=parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
                                        passport_expire=diffDays;

                                    }
                                    document.getElementById(key+doc_index).style.border='1px solid #ced4da';
                                }
                                else{
                                    document.getElementById(key+doc_index).style.border='1px solid red';
                                    field_error=true;
                                }

                            }

                        }


                    }
                    if(type=='photoid'){



                        for (const [key, value] of Object.entries(doc)) {
                            console.log(`${key}: ${value}`);
                            if(key!='url' ){


                                if(value!=''){

                                    document.getElementById(key+doc_index).style.border='1px solid #ced4da';
                                }
                                else{
                                    document.getElementById(key+doc_index).style.border='1px solid red';
                                    field_error=true;
                                }

                            }

                        }


                    }

                    if(field_error){
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please Fill All Required Fields !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                        return false;
                    }

                    const myFile = document.getElementById(id).files[0];
                    console.log("ccc",myFile)



                    const fileSize = myFile.size / 1024 / 1024;
                    if (fileSize > 2) {
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'File size exceeds 2 MB',
                            showConfirmButton: true,
                            timer: 3000

                        })

                    }
                    else{
                        if(this.docType=='passport'){
                            if(id=='front' || id=='back'){
                                if(myFile.type!='image/jpg' && myFile.type!='image/jpeg' && myFile.type!='image/png'){
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Please Upload Correct File Type (PNG,JPG,JPEG)',
                                        showConfirmButton: true,
                                        timer: 3000

                                    })
                                    return false;
                                }
                            }
                            if(id=='pdf'){
                                if(myFile.type!='application/pdf'){
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Please Upload Correct File Type (PDF)',
                                        showConfirmButton: true,
                                        timer: 3000

                                    })
                                    return false;
                                }
                            }
                            //checking passport expiry
                            if(passport_expire>=1 && passport_expire<=180){
                                this.$swal({
                                    title: 'This Passport will expire in less then 6 months',
                                    text: '',
                                    type: 'question',
                                    showCancelButton: true,
                                    cancelButtonText: "Proceed",
                                    cancelButtonColor: 'green',
                                    confirmButtonClass:'f-22',
                                    confirmButtonText:"Cancel ",
                                    confirmButtonColor: 'blue',
                                    focusCancel: true,
                                    reverseButtons: true,
                                    allowOutsideClick:false,
                                    showCloseButton:true,
                                    closeButtonAriaLabel:'Close',
                                    closeButtonColor: 'blue',
                                })
                                    .then(result => {

                                        if (result.value) {
                                            return false
                                        }
                                        else if(result.dismiss=='cancel'){
                                            uploadfile(this.docType, type, value.target.files[0], this.bookId)
                                                .then(response => {
                                                    this.data[mem_index].doc[doc_index].pdf= response.data;
                                                    this.uploadedFlag=true;
                                                })
                                        }

                                    })

                            }
                            else{

                                uploadfile(this.docType, type, value.target.files[0], this.bookId)
                                    .then(response => {
                                        this.data[mem_index].doc[doc_index].pdf= response.data;
                                        this.uploadedFlag=true;

                                    })
                            }
                        }
                        else{

                            if(myFile.type!='application/pdf' && myFile.type!='image/jpg' && myFile.type!='image/jpeg' && myFile.type!='image/png'){
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Please Upload Correct File Type (PNG,JPG,PDF)',
                                    showConfirmButton: true,
                                    timer: 3000

                                })
                                return false;
                            }
                            uploadfile(this.docType, type, value.target.files[0], this.bookId)
                                .then(response => {
                                    this.data[mem_index].doc[doc_index].url= response.data;
                                    this.uploadedFlag=true;
                                })
                        }





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
            updata_data(){
                try{

                    axios.post('/api/v1/updateDocsData',{
                        'data':JSON.stringify(this.data),
                        'bookId':this.bookId,
                        'doc':this.docType,
                        'grpId':this.grpId,
                        'deletedDocs':JSON.stringify(this.deletedDocs)

                    }).then(response => {
                            if(response.data.status){
                                this.data =_.cloneDeep(response.data.data)
                                this.deletedDocs=[];
                                if(this.uploadedFlag){

                                   axios.get('/api/webservices/document_noti?book_id=' + this.booking_id+'&type='+this.docType)
                                    this.uploadedFlag=false;
                                }
                            }
                        })
                        .catch(error => {
                            // console.log(error);
                        })

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
            addData(index){
                if(this.docType == 'passport'){
                    this.data[index].doc.push({"exp_date":"","issue_date":"","issue_place":"","name_first":"","name_last":"","passportno":"","url":"","url2":"","pdf":""})
                }
                else if(this.docType == 'photoid'){
                    this.data[index].doc.push({"id_num":"","id_name":"","mem_name":"","url":""})
                }
                else{
                    this.data[index].doc.push({"url":""})
                }
            },


        }
    }
</script>

<style scoped>
    .accordion .card-header:after {
        font-family: 'FontAwesome';
        content: "\f077";
        float: right;
    }
    .accordion .card-header.collapsed:after {
        /* symbol for "collapsed" panels */
        content: "\f078";
    }
    .border-right {
        border-right: 3px solid #dee2e6 !important;
    }
    .card{
        margin-left:-40px !important;
    }
    .or_text{
        position: absolute !important;
        top: 45px !important;
        font-size: 35px !important;

    }

</style>

