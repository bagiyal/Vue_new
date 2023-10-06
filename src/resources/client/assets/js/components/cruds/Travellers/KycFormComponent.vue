<template>
    <div style="font-family: 'Open Sans'">



        <div class=" row justify-content-center">
            <div class="col-lg-12">
                <div class="col-lg-12" style="background-color: rgb(245 243 243);" >


                    <div >
                        <div class="row" >
                            <div class="col-lg-12" style="padding-left:0;padding-right: 0;">
                                <div  class=" colBox" :style="{ 'background-image': 'url('+banner+')'} "> </div>

                            </div>
                        </div>




                    </div>
                </div>
                <div >
                    <div   class="container-fluid " style="background-color: rgb(245 243 243);">
                    <div  id="accordionExample" class="accordion  d-md-block d-lg-block d-xl-block">
                        <div  id="90" class="item"><div  id="headingOne90" class="item-header">
                            <h2  class="mb-0">
                                <button  type="button" data-toggle="collapse" data-target="#collapseOne90" aria-expanded="true" aria-controls="collapseOne90" class="btn btn-link">
                                   KYC DOCUMENTS
                                    <i  class="fa  fa-angle-down"></i></button></h2></div>
                            <div  id="collapseOne90" aria-labelledby="headingOne90" data-parent="#accordionExample" class="collapse show in" style="padding:1rem;">
                                <div  class="t-p">
                                    <div >

                                        <div  class="Paragrapg" >
                                            <div  style="display: flex;">
                                                <div >
                                                    <h2  style="text-align: left;"><b >Doc 1</b></h2>
                                                </div>
                                                <div >
                                                    <h2  style="margin-left: 2.5rem; text-align: right;"><i  aria-hidden="true" title="Info" class="fa fa-info-circle cursor"></i></h2>
                                                </div>
                                            </div>
                                            <div  style="width: 80%; margin: 0px auto;">
                                                <div  class="row">
                                                    <div  class="col-lg-8">
                                                        <div  class="fileUpl">
                                                            <button @click="chooseFiles('passport-front')"  class="btn-danger" style="position: absolute;">Choose File</button>
                                                            <input  type="file" name="avatar" accept="image/png,image/jpeg,application/pdf"   id="passport-front">
                                    </div>
                                    </div>
                                                    <div  class="col-lg-4">
                                                        <div  style="margin: 0px auto;">
                                                            <a  href="/storage/21501/Dual-Monitor-Wallpaper-9.jpg" target="_blank" class="cursor">
                                                                <img  src="/storage/21501/Dual-Monitor-Wallpaper-9.jpg" style="width: 100%; height: 122px;"></a>
                                                            <span  class="Delete-icon"><i  aria-hidden="true" class="fa fa-trash" style="color: black;"></i></span>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                        <div  class="Paragrapg" >
                                            <div  style="display: flex;">
                                                <div >
                                                    <h2  style="text-align: left;"><b >Doc 2</b></h2>
                                                </div>
                                                <div >
                                                    <h2  style="margin-left: 2.5rem; text-align: right;"><i  aria-hidden="true" title="Info" class="fa fa-info-circle cursor"></i></h2>
                                                </div>
                                            </div>
                                            <div  style="width: 80%; margin: 0px auto;">
                                                <div  class="row">
                                                    <div  class="col-lg-8">
                                                        <div  class="fileUpl">
                                                            <button @click="chooseFiles('passport-front')"  class="btn-danger" style="position: absolute;">Choose File</button>
                                                            <input  type="file" name="avatar" accept="image/png,image/jpeg,application/pdf"   id="passport-front">
                                                        </div>
                                                    </div>
                                                    <div  class="col-lg-4">
                                                        <div  style="margin: 0px auto;">
                                                            <a  href="/storage/21501/Dual-Monitor-Wallpaper-9.jpg" target="_blank" class="cursor">
                                                                <img  src="/storage/21501/Dual-Monitor-Wallpaper-9.jpg" style="width: 100%; height: 122px;"></a>
                                                            <span  class="Delete-icon"><i  aria-hidden="true" class="fa fa-trash" style="color: black;"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>

                    </div>
                           <div  id="accordionExample" class="accordion  d-md-block d-lg-block d-xl-block">
                            <div  id="91" class="item"><div  id="headingOne91" class="item-header">
                                <h2  class="mb-0">
                                    <button  type="button" data-toggle="collapse" data-target="#collapseOne91" aria-expanded="true" aria-controls="collapseOne91" class="btn btn-link">
                                       Form Section
                                        <i  class="fa  fa-angle-down"></i></button></h2></div>
                                <div  id="collapseOne91" aria-labelledby="headingOne91" data-parent="#accordionExample" class="collapse" style="padding: 1rem;">
                                    <div  class="t-p">
                                        <div >
                                            <div class="row form-row">
                                                <div class="form-group col-lg-12">
                                                    <label for="foodpref" class="label-heading">Entity Of Payment </label>
                                                    <label class="text-danger">*</label><br>
                                                    <div class=" form-check-block">
                                                        <input type="radio" name="Entity Of Payment"  value="Company Account">
                                                        <label for="inlineRadio1" class="form-check-label" style="margin-left: 1rem; font-size: 18px;font-weight: 300;">Company Account</label><br>
                                                    </div>
                                                    <div class=" form-check-block">
                                                        <input type="radio" name="Entity Of Payment"  value="Personal Account">
                                                        <label for="inlineRadio1" class="form-check-label" style="margin-left: 1rem; font-size: 18px;font-weight: 300;">Personal Account</label><br>
                                                    </div><br></div> </div>
                                            <div class="row form-row">
                                                <div class="form-group col-lg-12">
                                                    <label for="foodpref" class="label-heading">Will you deducting TDS on this payment ? </label>
                                                    <label class="text-danger">*</label><br>
                                                    <div class=" form-check-block">
                                                        <input type="radio" value="Yes">
                                                        <label for="inlineRadio1" class="form-check-label" style="margin-left: 1rem; font-size: 18px;font-weight: 300;">Yes</label><br>
                                                    </div>
                                                    <div class=" form-check-block">
                                                        <input type="radio"  value="No">
                                                        <label for="inlineRadio1" class="form-check-label" style="margin-left: 1rem; font-size: 18px;font-weight: 300;">No</label><br>
                                                    </div><br></div> </div>
                                            <div class="row form-row">
                                                <div class="col-md-12 form-group">

                                                    <div id="add_member0" class="row" style="padding: 20px; background-color: rgb(255, 255, 255);">
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">GST NO <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="text" placeholder="GST NO" class="form-control input_field_design select-Style">
                                                        </div>
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">Legal Name <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="text" placeholder="Legal Name" class="form-control input_field_design select-Style">
                                                        </div>
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">Trade Name <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="text" placeholder="Trade Name" class="form-control input_field_design select-Style">
                                                        </div>
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">Company Mobile <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="number" placeholder="Enter a phone number" class="form-control input_field_design select-Style">
                                                        </div>
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">Company Email <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="Email" placeholder="Company Email" class="form-control input_field_design select-Style">
                                                        </div>
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">Company Address <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="text" placeholder="Company Address" class="form-control input_field_design select-Style">
                                                        </div>
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">Company City <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="text" placeholder="Company City" class="form-control input_field_design select-Style">
                                                        </div>
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">Company State <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="text" placeholder="Company State" class="form-control input_field_design select-Style">
                                                        </div>
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">Company Pincoad <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="number" placeholder="Company Pincoad" class="form-control input_field_design select-Style">
                                                        </div>
                                                        <div class="col-md-4 border-right">
                                                            <label for="exp" class="label-heading">Company Country <p class="text-danger d-print-inline">*</p></label> <br >
                                                            <input type="text" placeholder="Company Country" class="form-control input_field_design select-Style">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row form-row">
                                                <div class="col-md-12 form-group">
                                                    <ul style="width:100%;list-style: none;padding-left: 0">
                                                        <li class="list-styles"><h2><b>Shubham Maharaj</b></h2></li>
                                                        <li class="list-styles" ><div class="span1"><h3 style="float:left">Total Package Cost</h3></div><div class="span2"><h3 style="float: right">Rs. 122212</h3></div></li>
                                                        <li class="list-styles" ><div class="span1"><h3 style="float:left">GST 5%</h3></div><div class="span2"><h3 style="float: right">Rs. 666</h3></div></li>
                                                        <li class="list-styles" ><div class="span1"><h3 style="float:left"><b>Total :</b></h3></div><div class="span2"><h3 style="float: right"><b>Rs. 122700</b></h3></div></li>
                                                    </ul>

                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row form-row" style="margin-bottom: 2rem">
                            <div class="col-lg-12" style="padding: 1rem">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                                <label for="vehicle1"><h2>I agree for <a href="" style="color:blue"><U>Terms and Condition</U></a></h2> </label><br>

                            </div>
                            <div class="col-lg-12" style="text-align: center"><button  class="btn btn-lg btn-primary">Submit</button></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>


</template>

<script>
    export default {
        name: "KycFormComponent",
        data(){
            return{
                banner:'',
            }

        },
        beforeMount() {
            var base_url = window.location.origin;
            this.banner=base_url+'/dashboard_resources/kyc-banner.jpg';
        },methods:{
            chooseFiles(id){
                document.getElementById(id).click();
            }
        }
    }

</script>

<style scoped>
    .colBox{
        /*background-color: rgba(56, 83, 240, 0.911);*/
        background-repeat: no-repeat;
        background-size: 100% 180px;

        padding:1.5rem;

        height:180px;
        margin-bottom: 2rem;

    }
    .border-bottom-2{
        border-bottom: 1px dotted grey;
    }

    .comment_design{

        padding: 10px 13px 10px 13px;
        border-radius: 25px;
        background: #d0cfcf;
        color: #fff;
        text-transform: uppercase;
    }


    .accordion{
        margin: 20px 0;
    }
    .accordion .item {
        border: none;
        margin-bottom: 50px;
        background: none;
    }
    .t-p{
        color: black;
        padding: 20px 15px 0px 15px;
    }
    .accordion .item .item-header h2 button.btn.btn-link {
        background: #fff;
        color: black;
        border-radius: 0px;
        font-family: "Open Sans";
        font-size: 25px;
        font-weight: 400;
        line-height: 2.5;
        text-decoration: none;
    }
    .accordion .item .item-header {
        border-bottom: none;
        background: transparent;
        padding: 0px;
        margin: 2px;
    }

    .accordion .item .item-header h2 button {
        color: white;
        font-size: 20px;

        display: block;
        width: 100%;
        text-align: left;
    }

    .accordion .item .item-header h2 i {
        float: right;
        font-size: 34px;
        color: black;
        background-color: transparent;
        width: 60px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }

    button.btn.btn-link.collapsed i {
        transform: rotate(0deg);
    }

    button.btn.btn-link i {
        transform: rotate(180deg);
        transition: 0.5s;
    }

    input[type="file"] {
        display: block !important;

    }
    .fileUpl input {
        margin-top: 1rem;
        background: rgb(230, 238, 241);
        width:100%;
        margin-bottom: 1.5rem;
        height: 37px !important;
        text-align: left !important;

        padding-left: 1rem;

    }


    input[type='file']::file-selector-button{
        font-weight: bold;
        color:#fff;
        padding: 0.5em;
        border: none;
        border-radius: 3px;
        background:black;
        visibility: hidden;
    }
    .Delete-icon{

        padding: 0px 8px;

        border-radius: 50%;
        position: absolute;

        background: #fff;
        right: 14px;
        top: 90px;
        opacity: 0.9;


    }
    .select-Style{
        border-radius: 1rem;
        border: 2px solid rgb(255, 255, 255);

        background: rgb(230, 238, 241);
        border: none;
    }
    img{
        width: 100%;
        height: 120px;
        background: #B5CCEC;
        border-radius: 3px;
        box-shadow: 4px 4px gray;
    }
    .collapse.show{

        line-height: 30px;
        color: #222;
    }
    .Paragrapg{
        padding:1rem; background-color: #fff;margin-top:2rem;  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;margin-bottom: 1.5rem;
    }
    .form-group{
        background: #fff;padding:2rem;box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;border-radius: 1rem;

    }
    .label-heading{
        font-size: 18px;
        font-weight: 600;
    }
    .text-danger{
        font-size: 2rem;
    }
    .d-print-inline{
        display: inline-block !important;
    }
    .border-right{
        margin-bottom: 1rem;
    }
    .list-styles{
        padding:1rem;
        border-bottom: 2px solid gray;
        list-style: none;
        display: flex;
    }
    .span1{

        width:50%;
    }
    .span2{

        width:50%;
    }

</style>
