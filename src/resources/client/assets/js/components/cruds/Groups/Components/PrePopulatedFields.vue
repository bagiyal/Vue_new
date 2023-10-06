<template>
    <div class="container">
        <rotate-square2 v-if="loading2"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
        <!-- Hub Download Section  -->
        <div class="container-fluid bg-white p-3">
            <label class="text-secondary mb-3">Prepopulated Fields</label>
            <div class="col-md-12" v-for="ques in questions.data">

                <div class="row">
                    <div class="col-3">
                        <label>Question</label>

                    </div>
                    <div class="col-6">

                        <input type="text" class="form-control" required ref="questionField" :disabled="questions.status"   v-model="question">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-3">
                        <label>Master Data</label>

                    </div>
                    <div class="col-4">

                        <label class="file_hidden mt-n2 dwnl-btn text-center" style="width: 88% !important;" v-if="ques.file==''">
                            Upload Master Data File
                            <input type="file" size="20"    @change="uploadExcel($event)" accept=".xls,.xlsx">
                        </label>
                        <label class=" text-center" style="width: 100% !important;" v-else>
                            <a class="download_button dwnl-btn mt-n2 offset-2 "  target= "_blank" v-bind:href="ques.file ">Uploaded Master File</a>
                        </label>
                    </div>
                    <div class="col-4">
                        <a
                            href="/csv/Pre-Populated-Sample-File.xlsx"
                            :disabled="questions.status"
                            :class="questions.status?'disabled-btn':''"
                            class="upload_file"
                            title="click to download excel"
                            download
                        >
                            Download Sample File
                        </a>

                    </div>
                </div>



            </div>
        </div>

    </div>


</template>

<script>

    import uploadfile from "../../../../mixins/uploadfile";

    export default {
        name: "PrePopulatedFields",
        props:['questions','id'],
        data(){
            return{
                sample_file:[{
                    'Keyword':'Primary Key',
                    'Col1':'',
                    'Col2':'',
                    'Col3':'',
                    'Col4':'',
                    'Col5':'',
                    'Col6':'',
                    'Col7':'',
                    'Col8':'',
                    'Col9':'',
                    'Col10':'',
                }],
                loading2:false,
                verifiedData:[],
                question:''
            }
        },
        mounted(){

            if(this.questions.data[0].question!=''){
               this.question = this.questions.data[0].question;
            }
        },
        methods: {
            downloadExcl: async function () {
                try {
                    this.loading2 = true;

                    let ws = XLSX.utils.json_to_sheet(this.sample_file);
                    var wb = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(wb, ws, "People");
                    XLSX.writeFile(wb, 'Pre-Populated-Sample-File.xlsx');

                    this.loading2 = false;

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

                    if(this.question==''){
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please Fill Question !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 2500
                        })
                        this.$refs.questionField[0].style.border="1px solid #ff0000";

                        return false;
                    }
                    this.$refs.questionField[0].style.border="1px solid #ced4da";

                    this.loading2=true;
                    let selectedFile = event.target.files[0];
                    let fileReader = new FileReader();


                    fileReader.onload = (event) => {
                        let data = event.target.result;
                        let workbook = XLSX.read(data, {
                            type: "binary"
                        });
                        let rowObject = XLSX.utils.sheet_to_row_object_array(
                            workbook.Sheets[workbook.SheetNames[0]]
                        );
                        let jsonObject = JSON.stringify(rowObject);

                        const headers =['Keyword','Col1','Col2','Col3','Col4','Col5','Col6','Col7','Col8','Col9','Col10'];
                        let fileHeaders=Object.keys(rowObject[0]);
                        if(fileHeaders.every(r=> headers.includes(r)) && fileHeaders.length>=4){
                            let counter=0;
                            let status=true;
                            let data_arr=[];

                            if('Keyword' in rowObject[0] !== false){

                                counter=1;

                                for(let j=counter;j<rowObject.length;j++){

                                    if('Keyword' in rowObject[j] === false){
                                        rowObject[j].remark='Primary Id Missing / Primary Id is empty';
                                        status=false;
                                    }

                                    if(status){
                                        data_arr.push({
                                            'primary_heading':rowObject[0].Keyword,
                                            'primary_key':rowObject[j].Keyword,
                                             [rowObject[0].Keyword]:rowObject[j].Keyword,
                                             [rowObject[0].Col1==undefined?'NULL':rowObject[0].Col1]:rowObject[0].Col1!=undefined?rowObject[j].Col1!=undefined?rowObject[j].Col1:'':'',
                                             [rowObject[0].Col2==undefined?'NULL':rowObject[0].Col2]:rowObject[0].Col2!=undefined?rowObject[j].Col2!=undefined?rowObject[j].Col2:'':'',
                                             [rowObject[0].Col3==undefined?'NULL':rowObject[0].Col3]:rowObject[0].Col3!=undefined?rowObject[j].Col3!=undefined?rowObject[j].Col3:'':'',
                                             [rowObject[0].Col4==undefined?'NULL':rowObject[0].Col4]:rowObject[0].Col4!=undefined?rowObject[j].Col4!=undefined?rowObject[j].Col4:'':'',
                                             [rowObject[0].Col5==undefined?'NULL':rowObject[0].Col5]:rowObject[0].Col5!=undefined?rowObject[j].Col5!=undefined?rowObject[j].Col5:'':'',
                                             [rowObject[0].Col6==undefined?'NULL':rowObject[0].Col6]:rowObject[0].Col6!=undefined?rowObject[j].Col6!=undefined?rowObject[j].Col6:'':'',
                                             [rowObject[0].Col7==undefined?'NULL':rowObject[0].Col7]:rowObject[0].Col7!=undefined?rowObject[j].Col7!=undefined?rowObject[j].Col7:'':'',
                                             [rowObject[0].Col8==undefined?'NULL':rowObject[0].Col8]:rowObject[0].Col8!=undefined?rowObject[j].Col8!=undefined?rowObject[j].Col8:'':'',
                                             [rowObject[0].Col9==undefined?'NULL':rowObject[0].Col9]:rowObject[0].Col9!=undefined?rowObject[j].Col9!=undefined?rowObject[j].Col9:'':'',
                                             [rowObject[0].Col10==undefined?'NULL':rowObject[0].Col10]:rowObject[0].Col10!=undefined?rowObject[j].Col10!=undefined?rowObject[j].Col10:'':'',
                                        })
                                    }

                                }

                                if(status==false){
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Please Fill '+rowObject[0].Keyword+' in every data row !',
                                        showCloseButton:true,
                                        showConfirmButton: true,
                                        timer: 3500
                                    })
                                }
                                else{
                                    uploadfile("populated_sheet", 'populated_sheet', selectedFile,this.id).then(response => {
                                        this.$emit('update',this.question,data_arr,response.data)
                                        this.loading2=false;
                                    })
                                    .catch((error) => {
                                        this.$swal.fire({
                                            type: 'error',
                                            icon: 'error',
                                            title: 'Error in uploading file, Please Try Again Later !',
                                            showCloseButton:true,
                                            showConfirmButton: true,
                                            timer: 3500
                                        })

                                        this.loading2=false;
                                        return false;
                                    })


                                }

                            }
                            else{
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                    title: 'Primary Id Missing / Primary Id is empty',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                                this.loading2=false;
                                return false;

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
                            this.loading2=false;
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
    .dwnl-btn{
        margin-top :0px !important;
        margin-left: 0px !important;
    }
    .upload_file{
        text-decoration: underline !important;
        color: #000 !important;
        font-size: 16px !important;
        margin-top: -10px !important;
        margin-left: -20px !important;
    }
    .disabled-btn{
        cursor: not-allowed !important;
    }

</style>
