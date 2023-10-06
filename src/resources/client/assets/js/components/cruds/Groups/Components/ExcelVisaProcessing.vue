<template>
    <div class="container">
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <!-- Hub Download Section  -->
        <div class="container-fluid row">
            <div class="col-12 mb-3">
                <h2>Download Excel Upload Sheet</h2>
            </div>
            <div class="col-6">
                <h4>Select Hub</h4>
                <v-select v-model="hub_filter"
                          :clearable="false"
                          name="Select Hub"
                          label="hub"
                          :options="hubs"
                          style="background:#fff;font-size: 12px !important"
                          multiple
                />
            </div>
            <div class="col-3" >

                <button class="btn btn-block btn-success dwnl-btn" title="click to download excel" @click="downloadExcl" >Download Excel</button>

            </div>

        </div>

        <!-- Hub Excel File Upload Section  -->
        <div v-if="!showDropzone" class="container-fluid row mt-5">



            <div class="col-6 offset-3">
                <label  class="custom_label m_t2" >Select Appointment Type</label><br>
                <div class="row mt-3">
                    <div class="col-6 ">
                        <div  class="col-md-2" style="margin-top: 3px;">
                            <label class="container_input">
                                <input  type="checkbox" v-model="appointment_type.interview" id="interview" @click="">
                                <span class="checkmark"  style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                            </label></div>

                        <div  class="col-md-10" style="font-size: 21px;margin-top: -2px;color: black;">Interview</div>
                    </div>
                    <div class="col-6 ">
                        <div  class="col-md-2" style="margin-top: 3px;">
                            <label class="container_input">
                                <input  type="checkbox" v-model="appointment_type.bio_metric" id="bio" @click="">
                                <span class="checkmark"  style="border:1px solid; width: 23px !important;height:23px !important;"></span>
                            </label></div>

                        <div  class="col-md-10" style="font-size: 21px;margin-top: -2px;color: black;">Bio-Metric</div>
                    </div>
                </div>
            </div>

            <div class="col-6 offset-3 mt-5">

                <div class="row mt-3">
                    <div class="col-12 text-center f-1-2" >
                        <p>Choose Excel File</p>
                        <label class="file_hidden mt-n2">
                            Upload Excel Sheet
                            <input type="file" size="20"  @change="uploadExcel($event)" accept=".xlsx">
                        </label>
                    </div>


                </div>
                <input type="hidden" id="jsonData" class="col-md-12"  />

            </div>

        </div>

        <!--Dropzone-->
        <div v-else-if="showDropzone" class="container">
            <vue-dropzone class="mt-5" ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"  :useCustomSlot=true v-on:vdropzone-sending="sendingEvent" v-on:vdropzone-success="successUpload">
                <div class="dropzone-custom-content">
                    <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                    <div class="subtitle">...or click to select a file from your computer</div>
                </div>
            </vue-dropzone>
        </div>


    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "ExcelVisaProcessing",
        props:["hubs","members","grpId","agentId"],
        components: {
            vueDropzone: vue2Dropzone
        },
        data() {
            return {
                excelUploadFile:null,
                hub_filter:[],
                loading2:false,
                excel_data:[],
                allMemberId:[],
                showDropzone:false,
                appointment_type:{'interview':false,'bio_metric':false},
                uploadedFiles:[],
                datawithFile:[],
                datatobeUploaded:0,
                verifiedData:{'validMem':[],'invalidMem':[],'status':false},
                dropzoneOptions:{
                    url: location.origin+'/api/webservices/VisaProcess',
                    duplicateCheck:true,
                    thumbnailWidth: 150,
                    maxFilesize: 2, // MB
                    maxFiles: 50,
                    createImageThumbnails: true,

                    accept: (file, done)=>{


                        let fileFlag=false;
                        let duplicateFile=false;
                        if(file.type=='application/pdf' || file.type=='image/png' ||file.type=='image/jpeg'||file.type=='image/jpg'){

                            if(this.datatobeUploaded>0){
                                this.uploadedFiles.forEach((UploadedFile)=>{

                                    if(UploadedFile==file.name){
                                        duplicateFile=true;
                                    }
                                })

                                if(duplicateFile){
                                    done("Duplicate File, This file is already uploaded !");
                                }
                                else{
                                    this.verifiedData.validMem.forEach((data)=>{
                                        if(data.File==file.name){
                                            fileFlag=true;
                                            // console.log(data);
                                            this.datawithFile.push(data);
                                            this.uploadedFiles.push(file.name);
                                        }
                                    })
                                    // console.log(this.dropzoneOptions.url);
                                    if(fileFlag){

                                        done();
                                    }
                                    else{
                                        done("Invalid File Name, Please use correct name!");
                                    }
                                }
                            }
                            else{

                                done("All mentioned files have been uploaded !");

                            }


                        }
                        else{

                            done("Only PNG,JPG & PDF File Allowed !");


                        }
                    }

                }
            }
        },
        mounted() {
            let fam=[];
            this.members.forEach((data)=>{
                this.allMemberId.push(data.id)
                fam=JSON.parse(data.meta_family);
                if(fam.length>0){
                    fam.forEach((fam)=>{
                        this.allMemberId.push(fam.id)
                    })
                }

            })


        },
        methods: {
            downloadExcl: async function () {
                try {
                    if (this.hub_filter.length > 0) {
                        this.loading2 = true;
                        this.excel_data = [];
                        this.excel_data.push({
                            'Id': '1',
                            'Name': 'Sample Passenger',
                            'Type': 'Primary',
                            'Relation': '',
                            'Hub': 'Delhi',
                            'Date':'12-10-2022',
                            'Time':'13|00',
                            'City': 'New Delhi',
                            'Location': 'Visa Application Centre, Connaught Place New Delhi 110001 India',
                            'Local Contact Name': 'Ramesh',
                            'Local Contact Number': '9999999999',
                            'File': 'data.png'
                        })

                        let fam = []
                        this.members.forEach((data) => {
                            this.hub_filter.forEach((selectedHub) => {
                                if (data.visa_Hub == selectedHub.hub) {
                                    this.excel_data.push({
                                        'Id': data.id,
                                        'Name': data.full_name,
                                        'Type': 'Primary',
                                        'Relation': '',
                                        'Hub': data.visa_Hub,
                                        'Date':'',
                                        'Time':'',
                                        'City': data.visa_Hub,
                                        'Location':'',
                                        'Local Contact Name': '',
                                        'Local Contact Number': '',
                                        'File': ''
                                    })

                                    fam = JSON.parse(data.meta_family);
                                    if (fam.length > 0) {
                                        fam.forEach((fam) => {
                                            this.excel_data.push({
                                                'Id': fam.id,
                                                'Name': fam.first_name,
                                                'Type': 'Secondary',
                                                'Relation': fam.relation,
                                                'Hub': data.airport_hub,
                                                'Date':'',
                                                'Time':'',
                                                'City': data.visa_Hub,
                                                'Location':'',
                                                'Local Contact Name': '',
                                                'Local Contact Number': '',
                                                'File': ''
                                            })
                                        })
                                    }
                                }
                            })
                        })
                        let ws = XLSX.utils.json_to_sheet(this.excel_data);
                        var wb = XLSX.utils.book_new();
                        XLSX.utils.book_append_sheet(wb, ws, "People");
                        XLSX.writeFile(wb, 'VisaProcessing.xlsx');
                        this.showDropzone = false;
                        this.loading2 = false;
                    } else {
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please Select Hub',
                            showCloseButton: true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                    }

                } catch (error) {
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton: true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },
            uploadExcel: async function(event){
                try{
                    if(!this.appointment_type.interview && !this.appointment_type.bio_metric){
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please choose `Appointment Type` and re-upload Excel Sheet !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                        return false;
                    }
                    this.verifiedData=_.cloneDeep({'validMem':[],'invalidMem':[],'status':false});
                    let selectedFile = event.target.files[0];
                    let fileReader = new FileReader();
                    let members_data=this.allMemberId;
                    fileReader.onload = (event) => {
                        let data = event.target.result;
                        let workbook = XLSX.read(data, {
                            type: "binary"
                        });
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[workbook.SheetNames[0]]
                        );
                        let jsonObject = JSON.stringify(rowObject);
                        const headers =['Id','Name','Type','Relation','Hub','Date','Time','City','Location','Local Contact Name','Local Contact Number','File'];
                        let fileHeaders=Object.keys(rowObject[0]);
                        if(fileHeaders.every(r=> headers.includes(r)) && fileHeaders.length==12){
                            const dateValidation  =/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
                            const timeValidation  =/^([0-9]{2}):([0-9]{2})$/;
                            var phoneno_regex = new RegExp('^[0-9]+$');
                            let counter=0;
                            rowObject.forEach((data)=>{
                                if(counter>0){

                                    data.remark=null;
                                        if('Id' in rowObject[counter] === false){
                                            data.remark='Traveller Id Error / Traveller Id is empty';
                                        }
                                        else{

                                            // if(JSON.stringify(members_data).indexOf(data.Id)<0){
                                            if(members_data.includes(data.Id)<0){
                                                if(data.remark!=null){

                                                    data.remark+=' ,';
                                                    data.remark+='Traveller Id Error / Traveller Id is invalid';
                                                }
                                                else{
                                                    data.remark='Traveller Id Error / Traveller Id is invalid';
                                                }

                                            }

                                        }
                                        if('Name' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Traveller Name Error / Traveller Name is empty';
                                            }
                                            else{
                                                data.remark='Traveller Name Error / Traveller Name is empty';
                                            }

                                        }
                                        if('Date' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Date Error / Date is empty';
                                            }
                                            else{
                                                data.remark='Date Error / Date is empty';
                                            }

                                        }
                                        else{
                                            if(data.Date!=''){
                                                if(!dateValidation.test(data.Date) && (JSON.stringify(data.Date).indexOf("-")>=0 || JSON.stringify(data.Date).indexOf("/")>=0)){

                                                    if(data.remark!=null){
                                                        data.remark+=' ,';
                                                        data.remark+='Date Format Error, Please use (DD/MM/YYYY) format';
                                                    }
                                                    else{
                                                        data.remark='Date Format Error, Please use (DD/MM/YYYY) format';
                                                    }

                                                }
                                                if(JSON.stringify(data.Date).indexOf("-")<0 && JSON.stringify(data.Date).indexOf("/")<0){

                                                    var date = new Date(Math.round((data.Date - (25569)) * 86400 * 1000));
                                                    var converted_date = date.toISOString().split('T')[0];

                                                    data.Date=_.cloneDeep(moment(String(converted_date)).format('DD-MM-YYYY'));
                                                }

                                            }
                                            else{
                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='Date Error / Date is empty';
                                                }
                                                else{
                                                    data.remark='Date Error / Date is empty';
                                                }
                                            }

                                        }
                                        if('Time' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Time Error / Time is empty';
                                            }
                                            else{
                                                data.remark='Time Error / Time is empty';
                                            }

                                        }
                                        else{


                                            if(typeof data.Time=='number'){
                                                data.Time=data.Time.toString();
                                            }
                                            if((data.Time).search('|')>=0){
                                                data.Time=_.cloneDeep((data.Time).replace("|",":"))
                                                if(!timeValidation.test(data.Time)){

                                                    if(data.remark!=null){
                                                        data.remark+=' ,';
                                                        data.remark+=' Time Format Error, Please use 24 Hour format (HH:MM)';
                                                    }
                                                    else{
                                                        data.remark=' Time Format Error, Please use 24 Hour format (HH|MM)';
                                                    }
                                                }
                                            }
                                            else{
                                                data.remark='Traveller Departure Time Format Error, Please use 24 Hour format (HH|MM)';
                                            }






                                        }
                                        if('City' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+=' City Error /  City is empty';
                                            }
                                            else{
                                                data.remark=' City Error /  City is empty';
                                            }

                                        }
                                        else{
                                            if(data.City==''){
                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='City Error /  City is empty';
                                                }
                                                else{
                                                    data.remark='City Error /  City is empty';
                                                }
                                            }
                                        }
                                        if('Location' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+=' Location Error /  Location is empty';
                                            }
                                            else{
                                                data.remark=' Location Error /  Location is empty';
                                            }

                                        }
                                        else{
                                            if(data.Location==''){
                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+=' Location Error /  Location is empty';
                                                }
                                                else{
                                                    data.remark=' Location Error /  Location is empty';
                                                }
                                            }
                                        }
                                        if('Local Contact Name' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+=' Local Contact Name Error /  Local Contact Name is empty';
                                            }
                                            else{
                                                data.remark='Local Contact Name Error /  Local Contact Name is empty';
                                            }

                                        }
                                        else{
                                            if(data['Local Contact Name']==''){
                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='Local Contact Name Error /  Local Contact Name is empty';
                                                }
                                                else{
                                                    data.remark='Local Contact Name Error /  Local Contact Name is empty';
                                                }

                                            }
                                        }
                                        if('Local Contact Number' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+=' Local Contact Number Error /  Local Contact Number is empty';
                                            }
                                            else{
                                                data.remark='Local Contact Number Error /  Local Contact Number is empty';
                                            }

                                        }
                                        else{
                                            if(data['Local Contact Number']==''){

                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='Local Contact Number Error /  Local Contact Number is empty';
                                                }
                                                else{
                                                    data.remark='Local Contact Number Error /  Local Contact Number is empty';
                                                }

                                            }
                                            else{

                                                if(!phoneno_regex.test(data['Local Contact Number'])){

                                                    if(data.remark!=null){
                                                        data.remark+=' ,';
                                                        data.remark+='Local Contact Number Error, Please Use Correct Number';
                                                    }
                                                    else{
                                                        data.remark+='Local Contact Number Error, Please Use Correct Number';
                                                    }


                                                }

                                            }
                                        }
                                        if('File' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='File Error /  File is empty';
                                            }
                                            else{
                                                data.remark='File Error / File is empty';
                                            }

                                        }
                                        else{

                                            if(data.File.lastIndexOf('.')<0){
                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='Invalid File, Please enter correct filename with extension';
                                                }
                                                else{
                                                    data.remark='Invalid File, Please enter correct filename with extension';
                                                }

                                            }
                                            else{

                                                var ext = data.File.substring(data.File.lastIndexOf('.') + 1);
                                                if( ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "png" || ext == "pdf") {

                                                }
                                                else {
                                                    if(data.remark!=null){
                                                        data.remark+=' ,';
                                                        data.remark+='Invalid file type, Please Upload (jpeg,jpg,png,pdf)';
                                                    }
                                                    else{
                                                        data.remark='Invalid file type, Please Upload (jpeg,jpg,png,pdf)';
                                                    }


                                                }

                                            }

                                        }

                                        if( data.remark==null){
                                            this.verifiedData.validMem.push(data);
                                        }
                                        else{
                                            this.verifiedData.invalidMem.push(data);
                                        }

                                    }
                                counter++;
                            })

                            if(this.verifiedData.invalidMem.length>0){
                                this.$emit('showErrorModal',JSON.stringify(this.verifiedData.invalidMem))
                            }
                            else{
                                this.datatobeUploaded=_.cloneDeep(this.verifiedData.validMem.length);
                                this.showDropzone=true;
                            }



                        }
                    }
                    fileReader.readAsBinaryString(selectedFile);
                    return false;

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
            sendingEvent(file, xhr, formData){

                this.datatobeUploaded=_.cloneDeep(this.datatobeUploaded-this.datawithFile.length)
                formData.append('linked_data',JSON.stringify(this.datawithFile));
                formData.append('grpID',this.grpId);
                formData.append('agentID',this.agentId);
                formData.append('type',JSON.stringify(this.appointment_type));
                this.datawithFile=_.cloneDeep([]);

            },
            successUpload(file,respones){
                try{

                    this.$eventHub.$emit('update-success')
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
    .dwnl-btn{
        margin-top :25px !important;
    }
</style>
