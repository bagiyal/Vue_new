<template>
    <div class="container">
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <div class="container-fluid row">
                <div class="col-12 mb-3">
                    <h2>Download Excel Upload Sheet</h2>
                </div>
                <div class="col-6">
                    <h4>Select Hub</h4>
                    <v-select v-model="flight_hub_filter"
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
                <div class="col-3">

                    <button class="btn btn-block btn-success dwnl-btn" title="click to download excel" @click="downloaCodes" >Download Airport Codes</button>

                </div>
            </div>
            <div v-if="!showDropzone" class="container-fluid row mt-5">

            <div class="col-6 offset-3">

                    <div class="row mt-3">
                        <div class="col-12 text-center f-1-2" >
                            <p>Choose Excel File</p>
                            <label class="file_hidden mt-n2">
                                Flight Ticket Excel Sheet
                                <input type="file" size="20"  @change="uploadFlightExcel($event)" accept=".xlsx">
                            </label>
                        </div>


                    </div>
                <input type="hidden" id="jsonData" class="col-md-12"  />

            </div>

        </div>
<!--        v-on:vdropzone-queue-complete="onDropzoneUploadComplete"-->
<!--        v-on:vdropzone-sending-multiple="uploadmultiplefiles"-->
            <!--Dropzone-->
            <div class="container">
                <vue-dropzone
                    class="mt-5"
                    ref="myVueDropzone"
                    id="dropzone"
                    :options="dropzoneOptions"
                    v-if="showDropzone"
                    :useCustomSlot=true
                    v-on:vdropzone-sending="sendingEvent"
                    v-on:vdropzone-success="succcessFlight"

                >
                    <div class="dropzone-custom-content">
                        <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                        <div class="subtitle">...or click to select a file from your computer</div>
                    </div>
                </vue-dropzone>
            </div>

    </div>
</template>

<script>
    import moment from 'moment-timezone';
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "ExcelTicketUpload",
        props:["hubs","members","airport_code","grpId","agentId"],
        data(){
            return {
                excelUploadFile:null,
                flight_hub_filter:[],
                loading2:false,
                excel_data:[],
                allMemberId:[],
                datawithFile:[],
                datatobeUploaded:0,
                verifiedData:{'validMem':[],'invalidMem':[],'status':false},
                showDropzone:false,
                uploadedFiles:[],
                dropzoneOptions:{
                    url: location.origin+'/api/webservices/uploadExcelFlightData',
                    duplicateCheck:true,
                    thumbnailWidth: 150,
                    maxFilesize: 2, // MB
                    maxFiles: 50,
                    // parallelUploads: 10,
                    createImageThumbnails: true,
                    // uploadMultiple: true,
                    // Multiple: true, // Enable multiple file uploads
                    // autoProcessQueue: false, // Disable automatic uploading
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

                },


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
        methods:{

            getQueuedFiles() {
                const queuedFiles = this.$refs.myVueDropzone.getQueuedFiles();
                queuedFiles.forEach((data)=>{
                    console.log(data.name);
                })
                this.$refs.myVueDropzone.processQueue();
            },
            downloaCodes: async function(){
                try{

                    let ws = XLSX.utils.json_to_sheet(this.airport_code);
                    var wb = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(wb, ws, "People");
                    XLSX.writeFile(wb,'AirportCodes.xlsx');
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
            downloadExcl: async function(){
                try{

                    if(this.flight_hub_filter.length>0){
                        this.loading2=true;
                        this.excel_data=[];
                        this.excel_data.push({
                            'Id':'1',
                            'Name':'Sample Passenger',
                            'Type':'Primary',
                            'Relation':'',
                            'Hub':'Delhi',
                            'Departure_date':'12-10-2022',
                            'Departure_time':'11|00',
                            'Departure_airport_code':'DEL',
                            'Arrival_date':'12-10-2022',
                            'Arrival_time':'16|00',
                            'Arrival_airport_code':'BOM',
                            'Flight_number':'A87II',
                            'File':'data.png'
                        })

                        let fam=[]

                        this.members.forEach((data)=>{
                            this.flight_hub_filter.forEach((selectedHub)=>{
                                if(data.airport_hub==selectedHub.hub){

                                    this.excel_data.push({
                                        'Id':data.id,
                                        'Name':data.full_name,
                                        'Type':'Primary',
                                        'Relation':'',
                                        'Hub':data.airport_hub,
                                        'Departure_date':'',
                                        'Departure_time':'',
                                        'Departure_airport_code':'',
                                        'Arrival_date':'',
                                        'Arrival_time':'',
                                        'Arrival_airport_code':'',
                                        'Flight_number':'',
                                        'File':''
                                    })
                                    fam=JSON.parse(data.meta_family);
                                    if(fam.length>0){
                                        fam.forEach((fam)=>{
                                            this.excel_data.push({
                                                'Id':fam.id,
                                                'Name':fam.first_name,
                                                'Hub':data.airport_hub,
                                                'Type':'Secondary',
                                                'Relation':fam.relation,
                                                'Departure_date':'',
                                                'Departure_time':'',
                                                'Departure_airport_code':'',
                                                'Arrival_date':'',
                                                'Arrival_time':'',
                                                'Arrival_airport_code':'',
                                                'Flight_number':'',
                                                'File':''
                                            })
                                        })
                                    }

                                }
                            })

                        })
                        let ws = XLSX.utils.json_to_sheet(this.excel_data);
                        var wb = XLSX.utils.book_new();
                        XLSX.utils.book_append_sheet(wb, ws, "People");
                        XLSX.writeFile(wb,'FlightUpload.xlsx');
                        this.loading2=false;
                        this.showDropzone=false;
                    }
                    else{
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please Select Hub',
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
            uploadFlightExcel: async function(event){
                try{
                    this.verifiedData=_.cloneDeep({'validMem':[],'invalidMem':[],'status':false});
                    let selectedFile = event.target.files[0];
                    let fileReader = new FileReader();
                    let members_data=this.allMemberId;
                    let fetchTicket=[];
                    let ExcelData=[];

                    fileReader.onload = (event) => {
                        let data = event.target.result;
                        let workbook = XLSX.read(data, {
                            type: "binary"
                        });
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[workbook.SheetNames[0]]
                        );
                        let jsonObject = JSON.stringify(rowObject);

                        const headers =['Id','Name','Type','Relation','Hub','Departure_date','Departure_time','Departure_airport_code','Arrival_date','Arrival_time','Arrival_airport_code','Flight_number','File'];
                        let fileHeaders=Object.keys(rowObject[0]);
                        if(fileHeaders.every(r=> headers.includes(r)) && fileHeaders.length==13){

                            const dateValidation  =/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
                            const timeValidation  =/^([0-9]{2}):([0-9]{2})$/;

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
                                        if('Departure_date' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Traveller Departure Date Error / Traveller Departure Date is empty';
                                            }
                                            else{
                                                data.remark='Traveller Departure Date Error / Traveller Departure Date is empty';
                                            }

                                        }
                                        else{

                                            if(!dateValidation.test(data.Departure_date) && (JSON.stringify(data.Departure_date).indexOf("-")>=0 || JSON.stringify(data.Departure_date).indexOf("/")>=0)){
                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='Traveller Departure Date Format Error, Please use (DD/MM/YYYY) format';
                                                }
                                                else{
                                                    data.remark='Traveller Departure Date Format Error, Please use (DD/MM/YYYY) format';
                                                }

                                            }
                                            if(JSON.stringify(data.Departure_date).indexOf("-")<0 && JSON.stringify(data.Departure_date).indexOf("/")<0){
                                                var date = new Date(Math.round((data.Departure_date - (25569)) * 86400 * 1000));
                                                var converted_date = date.toISOString().split('T')[0];

                                                data.Departure_date=_.cloneDeep(moment(String(converted_date)).format('DD-MM-YYYY'));
                                            }

                                        }
                                        if('Departure_time' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Traveller Departure Time Error / Traveller Departure Time is empty';
                                            }
                                            else{
                                                data.remark='Traveller Departure Time Error / Traveller Departure Time is empty';
                                            }

                                        }
                                        else{


                                            if(typeof data.Departure_time=='number'){
                                                data.Departure_time=data.Departure_time.toString();
                                            }
                                            if((data.Departure_time).search('|')>=0){
                                                data.Departure_time=_.cloneDeep((data.Departure_time).replace("|",":"))
                                                if(!timeValidation.test(data.Departure_time)){

                                                    if(data.remark!=null){
                                                        data.remark+=' ,';
                                                        data.remark+='Traveller Departure Time Format Error, Please use 24 Hour format (HH:MM)';
                                                    }
                                                    else{
                                                        data.remark='Traveller Departure Time Format Error, Please use 24 Hour format (HH|MM)';
                                                    }
                                                }
                                            }
                                            else{
                                                data.remark='Traveller Departure Time Format Error, Please use 24 Hour format (HH|MM)';
                                            }






                                        }
                                        if('Departure_airport_code' in rowObject[counter] === false){

                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Traveller Departure Airport Code Error / Traveller Departure Airport Code is empty';
                                            }
                                            else{
                                                data.remark='Traveller Departure Airport Code Error / Traveller Departure Airport Code is empty';
                                            }
                                        }
                                        else{

                                            if(JSON.stringify(this.airport_code).indexOf('"'+data.Departure_airport_code+'"')<0){
                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='Invalid Departure Airport Code';
                                                }
                                                else{
                                                    data.remark='Invalid Departure Airport Code';
                                                }

                                            }
                                        }
                                        if('Arrival_date' in rowObject[counter] === false){

                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Arrival Date Error / Arrival  Date is empty';
                                            }
                                            else{
                                                data.remark='Arrival Date Error / Arrival  Date is empty';
                                            }
                                        }
                                        else{
                                            if(!dateValidation.test(data.Arrival_date) && (JSON.stringify(data.Arrival_date).indexOf("-")>=0 || JSON.stringify(data.Arrival_date).indexOf("/")>=0)){

                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='Traveller Arrival Date Format Error, Please use (DD/MM/YYYY) format';
                                                }
                                                else{
                                                    data.remark='Traveller Arrival Date Format Error, Please use (DD/MM/YYYY) format';
                                                }

                                            }
                                            if(JSON.stringify(data.Arrival_date).indexOf("-")<0 && JSON.stringify(data.Arrival_date).indexOf("/")<0){
                                                var date = new Date(Math.round((data.Arrival_date - (25569)) * 86400 * 1000));
                                                var converted_date = date.toISOString().split('T')[0];

                                                data.Arrival_date=_.cloneDeep(moment(String(converted_date)).format('DD-MM-YYYY'));
                                            }
                                        }
                                        if('Arrival_time' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Arrival Departure Time Error / Arrival Departure Time is empty';
                                            }
                                            else{
                                                data.remark='Arrival Departure Time Error / Arrival Departure Time is empty';
                                            }

                                        }
                                        else{
                                            if(typeof data.Arrival_time=='number'){
                                                data.Arrival_time=data.Arrival_time.toString();
                                            }
                                            if((data.Arrival_time).search('|')>=0){
                                                data.Arrival_time=_.cloneDeep((data.Arrival_time).replace("|",":"))
                                                if(!timeValidation.test(data.Arrival_time)){
                                                    if(data.remark!=null){
                                                        data.remark+=' ,';
                                                        data.remark+='Traveller Arrival Time Format Error, Please use 24 Hour format (HH:MM)';
                                                    }
                                                    else{
                                                        data.remark='Traveller Arrival Time Format Error, Please use 24 Hour format (HH:MM)';
                                                    }


                                                }

                                            }
                                            else{
                                                data.remark='Traveller Arrival Time Format Error, Please use 24 Hour format (HH|MM)';
                                            }

                                        }
                                        if('Arrival_airport_code' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Arrival Airport Code Error / Arrival Airport Code is empty';
                                            }
                                            else{
                                                data.remark='Arrival Airport Code Error / Arrival Airport Code is empty';
                                            }

                                        }
                                        else{
                                            if(JSON.stringify(this.airport_code).indexOf('"'+data.Arrival_airport_code+'"')<0){
                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='Invalid Arrival Airport Code';
                                                }
                                                else{
                                                    data.remark='Invalid Arrival Airport Code';
                                                }

                                            }

                                        }
                                        if('Flight_number' in rowObject[counter] === false){
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+=' Flight Number Error /  Flight Number is empty';
                                            }
                                            else{
                                                data.remark=' Flight Number Error /  Flight Number is empty';
                                            }

                                        }
                                        else{
                                            // console.log(data.Flight_number);
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

                                        ExcelData.push(data);

                                        fetchTicket.push({
                                            'id':data.Id,
                                            'type':data.Type,
                                            'ticket':data.Flight_number,
                                            'status':false,
                                            'index':counter,
                                        })

                                }
                                counter++;
                            })

                            let form=new FormData();
                            form.set('data',JSON.stringify(fetchTicket));
                            axios.post('/api/v1/fetchUplodedTickets',form)
                                .then(response => {

                                    if(response.data.status){

                                        ExcelData.forEach((mainData)=>{

                                            JSON.parse(response.data.data).forEach((verifiedData)=>{
                                                if(mainData.Id==verifiedData.id){

                                                    if(verifiedData.status){

                                                        if(mainData.remark==null){
                                                           mainData.remark='This ticket is already allocated to passenger';
                                                        }
                                                        else{
                                                            mainData.remark+=' ,';
                                                            mainData.remark+='This ticket is already allocated to passenger';
                                                        }


                                                    }

                                                }
                                            })
                                            if(mainData.remark==null){

                                                this.verifiedData.validMem.push(mainData);

                                            }
                                            else{
                                                this.verifiedData.invalidMem.push(mainData);
                                            }
                                        })

                                        if(this.verifiedData.invalidMem.length>0){
                                            this.$emit('showErrorModal',JSON.stringify(this.verifiedData.invalidMem))
                                        }
                                        else{
                                            this.datatobeUploaded=_.cloneDeep(this.verifiedData.validMem.length);
                                            this.showDropzone=true;
                                        }

                                    }
                                    else{
                                        this.$swal.fire({
                                            type: 'error',
                                            icon: 'error',
                                            title: 'Incomplete Headers. Please Check !',
                                            showCloseButton:true,
                                            showConfirmButton: true,
                                            timer: 3500
                                        })
                                    }




                                })
                                .catch(error => {
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Incomplete Headers. Please Check !',
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
                                title: 'Incomplete Headers. Please Check !',
                                showCloseButton:true,
                                showConfirmButton: true,
                                timer: 3500
                            })

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
            async sendingEvent(file, xhr, formData){
                this.datawithFile=_.cloneDeep([]);
                this.verifiedData.validMem.forEach((data)=>{


                    if(data.File==file.name){


                        this.datawithFile.push(data);


                    }
                })


                formData.append('linked_data',JSON.stringify(this.datawithFile));
                formData.append('grpID',this.grpId);
                formData.append('agentID',this.agentId);

                this.datatobeUploaded=_.cloneDeep(this.datatobeUploaded-this.datawithFile.length)



                 this.datawithFile=_.cloneDeep([]);
            },
            onDropzoneUploadComplete (file, xhr, formData) {
                console.log('Complete queue')
            },
            succcessFlight(file,respones){
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
        },
        components: {
            vueDropzone: vue2Dropzone
        },
    }
</script>

<style scoped>

    .dwnl-btn{
        margin-top :25px !important;
    }
    .dropzone-custom-content {
        position: absolute;
        top: 65% !important;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .dropzone-custom-title {
        margin-top: 0;
        color: #00b782;
    }

    .subtitle {
        color: #314b5f;
    }
</style>
