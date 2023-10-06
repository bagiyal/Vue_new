<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Notes</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">

                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Edit</h3>
                            </div>

                            <div class="box-body">
                                <back-buttton></back-buttton>
                            </div>

                            <bootstrap-alert />

                            <div class="box-body">

                                <input type="file" id="fileUpload"  @change="test($event)" accept=".xls,.xlsx" class="form-control">

                                <input type="text" id="jsonData" class="col-md-12"   @autocomplete="updatejson" v-model="json_data" ></input>
                            </div>
                            <div >
                                <button @click="get_value">Proceed</button>

                            </div>

                        </div>

                </div>
            </div>
        </section>
    </section>
</template>


<script>

    export default {
        data() {
            return {
                json_data:'',
                temp:''
            }
        },


        destroyed() {
        },
        watch: {
        // "json_data":function () {
        //     alert('hello');
        // }
        },
        methods: {
            updatejson(){

            },
            get_value(){

             if( document.getElementById("jsonData") !== null){
                 console.log(document.getElementById("jsonData").value );
                 this.temp=document.getElementById("jsonData").value;
                }



            },

        test(event){

            let return_arr=[];
            var selectedFile;
            var json=[];
            let jsonObject=[];
            selectedFile = event.target.files[0];
            console.log(selectedFile);
            var fileReader = new FileReader();
            fileReader.onload = function(event,json_data2) {
                var data = event.target.result;

                var workbook = XLSX.read(data, {
                    type: "binary"
                });

                workbook.SheetNames.forEach(sheet => {
                    console.log(sheet);
                    let rowObject = XLSX.utils.sheet_to_row_object_array(
                        workbook.Sheets[sheet]
                    );
                    let jsonObject = JSON.stringify(rowObject);
                    json_data2= JSON.stringify(rowObject);


                    var valid_members=[];
                    var invalid_members=[];
                    return_arr=[]
                    var flag=0;

                    rowObject.forEach((data)=>{

                        if(data.Phone.toString().length==12 && data.Phone.toString().charAt(0)==9){
                            data.Phone='+'+data.Phone;
                            flag=0

                        }
                        if(data.Phone.toString().length==13 && data.Phone.toString().charAt(0)=='+'){
                            flag=0
                        }
                        else if(data.Phone.toString().length==10){
                            data.Phone='+91'+data.Phone;
                            flag=0

                        }
                        else if(data.Phone.toString().length<10){
                            flag=1
                        }
                        else{
                            flag=1
                        }

                        if(flag==0){
                            valid_members.push(data);
                        }
                        else if(flag==1){
                            data.remark='Phone Number Error';
                            invalid_members.push(data);
                        }

                    })
                    return_arr.push({
                        'valid':valid_members,
                        'invalid':invalid_members,
                    })
                    document.getElementById("jsonData").value = JSON.stringify(return_arr);

                });

            };
            fileReader.readAsBinaryString(selectedFile);

            this.updatejson();



        }
        }
    }
</script>


<style scoped>
    input[type="file"] {
        display: block !important;
    }
</style>
