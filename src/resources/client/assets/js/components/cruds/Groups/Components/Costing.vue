<template>
    <div class="container">
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <div class="container-fluid row mt-5">
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
            <div class="col-3"  style="margin-top:25px !important;">

                <button class="btn btn-block btn-success dwnl-btn" title="click to download excel" @click="downloadExcl" >Download Excel</button>

            </div>
        </div>
        <div class="container-fluid row mt-5">

            <div class="col-6 offset-3">

                <div class="row mt-3">
                    <div class="col-12 text-center f-1-2" >
                        <p>Choose Excel File</p>
                        <label class="file_hidden mt-n2">
                            Cost Excel Sheet
                            <input type="file" size="20"  @change="uploadExcel($event)"  accept=".xlsx">
                        </label>
                    </div>


                </div>


            </div>


        </div>
        <div class="container-fluid  mt-5">

            <div class="row">
                <div class="col-md-12  mb-4 mt-5">   <b>Cost Upload History</b></div>
            </div>

            <table class="table" style="background-color: white;text-align: center">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" class="width_20">Uploaded Date</th>
                    <th scope="col" class="width_40">Members</th>
                    <th scope="col" class="width_40">Status</th>
                    <th scope="col" class="width_20">File</th>



                </tr>
                </thead>
                <tbody class="f-1-4" v-if="cost_history.length>0">
                    <tr v-for="(cost,index) in cost_history" v-if="cost.date">
                        <td>{{index+1}}</td>
                        <td>{{cost.date | formatDate}}</td>
                        <td>{{cost.members}}</td>
                        <td class="text-success">Uploaded</td>
                        <td><a :href="cost.url" class="fa fa-download" download></a></td>
                    </tr>

                </tbody>
            </table>


        </div>


    </div>
</template>

<script>
    import moment from 'moment-timezone'
    export default {
        name: "Costing",
        props:['hubs','members','grpId','cost_history'],
        data(){
            return{
                loading2:false,
                hub_filter:[],
                excel_data:[],
                verifiedData:{'validMem':[],'invalidMem':[],'status':false},
                allMemberId:[],

            }
        },

        filters: {


            formatDate: function(value){
                if(value){
                    return moment.unix(value).format("DD-MM-YYYY")
                }
            },
        },
        mounted() {

            this.members.forEach((data)=>{
                this.allMemberId.push(data.id)
            })

            if(this.hubs.length>1){
                this.hubs.push('All');
            }

        },
        methods: {
            downloadExcl: async function(){
                try{
                    if(this.hub_filter.length>0){
                        this.loading2=true;
                        this.excel_data=[];
                        this.excel_data.push({
                            'Id':'45551',
                            'Name':'Sample Passenger',
                            'Hub':'Delhi',
                            'Cost':'10000.00',

                        })
                        this.members.forEach((data)=>{
                            if(this.hub_filter.includes('All')){
                                this.excel_data.push({
                                    'Id':data.id,
                                    'Name':data.full_name,
                                    'Hub':data.airport_hub,
                                    'Cost':'',
                                })
                            }
                            else{
                                this.hub_filter.forEach((selectedHub)=>{
                                    if(data.airport_hub==selectedHub.hub){
                                        this.excel_data.push({
                                            'Id':data.id,
                                            'Name':data.full_name,
                                            'Hub':data.airport_hub,
                                            'Cost':'',
                                        })
                                    }

                                })
                            }

                        });
                        let ws = XLSX.utils.json_to_sheet(this.excel_data);
                        var wb = XLSX.utils.book_new();
                        XLSX.utils.book_append_sheet(wb, ws, "People");
                        XLSX.writeFile(wb,'CostUpload.xlsx');
                        this.loading2=false;

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
            uploadExcel: async function(event){
                try{
                    this.verifiedData=_.cloneDeep({'validMem':[],'invalidMem':[],'status':false});
                    let selectedFile = event.target.files[0];
                    let fileReader = new FileReader();
                    let members_data=this.allMemberId;
                    let ExcelData=[];

                    let status=true;
                    console.log(selectedFile);
                    fileReader.onload = (event) => {
                        let data = event.target.result;
                        let workbook = XLSX.read(data, {
                            type: "binary"
                        });
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[workbook.SheetNames[0]]
                        );
                        let jsonObject = JSON.stringify(rowObject);

                        const headers =['Id','Name','Hub','Cost'];
                        let fileHeaders=Object.keys(rowObject[0]);
                        if(fileHeaders.every(r=> headers.includes(r)) && fileHeaders.length==4){
                            let counter=0;
                            const IndianCurr = /^\d+(\.\d{1,2})?$/;
                            rowObject.forEach((data)=>{
                                if(counter>0){
                                    data.remark=null;

                                    if('Id' in rowObject[counter] !== false && 'Name' in rowObject[counter] !== false){

                                        if('Id' in rowObject[counter] === false){
                                            data.remark='Traveller Id Error / Traveller Id is empty';
                                            status=false;
                                        }
                                        else{


                                            if(members_data.includes(data.Id)<0){
                                                status=false;
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
                                                data.remark+='Name Error / Name is empty';
                                            }
                                            else{
                                                data.remark='Name Error / Name is empty';
                                            }

                                        }

                                        if('Cost' in rowObject[counter] === false){
                                            status=false;
                                            if(data.remark!=null){
                                                data.remark+=' ,';
                                                data.remark+='Cost Error / Cost is empty';
                                            }
                                            else{
                                                data.remark='Cost Error / Cost is empty';
                                            }

                                        }
                                        else{
                                            if(!IndianCurr.test(data.Cost)){
                                                if(data.remark!=null){
                                                    data.remark+=' ,';
                                                    data.remark+='Cost Format Error, Please use (10000.10 || 15000.5 || 45000.00 || 80000) format';
                                                }
                                                else{
                                                    data.remark='Cost Format Error, Please use (10000.10 || 15000.5 || 45000.00 || 80000) format';
                                                }
                                            }
                                        }

                                        ExcelData.push(data);
                                        if(data.remark!=null){
                                            this.verifiedData.invalidMem.push({
                                                'Id':data.Id?data.Id:'',
                                                'Name':data.Name?data.Name:'',
                                                'Hub':data.Hub,
                                                'Cost':data.Cost?data.Cost:'',
                                                'Remark':data.remark,
                                                'index':counter,
                                            })
                                        }
                                        else{
                                            this.verifiedData.validMem.push({
                                                'Id':data.Id?data.Id:'',
                                                'Name':data.Name?data.Name:'',
                                                'Hub':data.Hub,
                                                'Cost':data.Cost?data.Cost:'',
                                                'Remark':data.remark,
                                                'index':counter,
                                            })
                                        }

                                    }


                                }
                                counter++;
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
                        if(this.verifiedData.invalidMem.length>0){
                            this.$emit('showErrorModal',JSON.stringify(this.verifiedData.invalidMem))
                        }
                        else{

                            if(this.verifiedData.validMem.length>0){


                                axios.post('/api/v1/ValidateCosting',{
                                    'members':JSON.stringify(this.verifiedData.validMem)
                                })
                                    .then(response => {
                                        // console.log(response.data)
                                        if(response.data.status){

                                            let params = new FormData();
                                            params.append('file',selectedFile);
                                            params.set('grpId',this.grpId);
                                            params.set("members", JSON.stringify(this.verifiedData.validMem));

                                            axios.post('/api/v1/AddCosting',params)
                                                .then(response => {
                                                    // console.log(response.data)
                                                    if(response.data.status){
                                                        this.cost_history=_.cloneDeep(response.data.history);
                                                        this.$eventHub.$emit('update-success')
                                                    }
                                                    else{

                                                        this.$swal.fire({
                                                            type: 'error',
                                                            icon: 'error',
                                                            title: 'Getting Error While Uploading, Please Try Again Later !',
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
                                                        title: 'Some Error Occured. Please Try Again Later !',
                                                        showCloseButton:true,
                                                        showConfirmButton: true,
                                                        timer: 3500
                                                    })
                                                })

                                        }
                                        else{

                                            response.data.data.forEach((cost)=>{
                                                if(cost.Remark!='' || cost.Remark!=null){
                                                    this.verifiedData.invalidMem.push({
                                                        'Id':cost.Id?cost.Id:'',
                                                        'Name':cost.Name?cost.Name:'',
                                                        'Hub':cost.Hub,
                                                        'Cost':cost.Cost?cost.Cost:'',
                                                        'Remark':cost.Remark
                                                    })
                                                }
                                                // console.log(JSON.stringify(this.verifiedData.invalidMem));
                                            })

                                            //show error modal
                                            if(this.verifiedData.invalidMem.length>0){
                                                this.$emit('showErrorModal',JSON.stringify(this.verifiedData.invalidMem))
                                            }

                                        }
                                    })
                                    .catch(error => {
                                        this.$swal.fire({
                                            type: 'error',
                                            icon: 'error',
                                            title: 'Some Error Occured. Please Try Again Later !',
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
                                    title: '0 Pax Data Available In Sheet !',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                                return false;
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
            }
        }
    }
</script>

<style scoped>

</style>
