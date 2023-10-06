@extends('layouts.auth')

@section('content')

    <?php
        $color='#ff0000';

    $app=env('Mobile_App_Name');
    if($app=='TC GATEWAY'){
        $color='#0e2680';
    }


    ?>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <style>
        #errorSec{

        }

        @media (min-width:900px){
            .cc-picker-code-list{
                z-index:1;
                width:155px !important;
                left: 847px !important;

            }
            .cc-picker-code-filter{
                z-index:1;
                width:155px !important;
                left: 847px !important;

            }


        }
        @media (min-width:700px){
            .Form-Bg{
                width:100%;
                background:url("{{asset("/images/loginpageImg/bg1.png")}}");
                background-repeat: no-repeat;
                background-size: 100vw 100%;
                background-size: 100vw 100vh;

                background-attachment: fixed;
                background-position: center;

            }
            .form-main{


                background: {{$color}};

                border-radius: 15px;

                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

                width:80%;
            }
        }
        .cc-picker-code-list{
            z-index:1;
            width:155px !important;


        }
        .cc-picker-code-filter{
            z-index:1;
            width:155px !important;



        }
        .cc-picker-code-select-enabled {
            cursor: pointer;
            padding-right: 0px !important;

        }
        .cc-picker{

            padding: 1rem !important;
        }
        .cc-picker-code-select-enabled::after {

            top: 17px !important;
            right:15px !important;
        }

        .carousel-inner{
            height:100%;
        }
        .item{
            height:100%;
            border-radius: 15px;
        }
        .carousel-indicators .active {
            width:27PX !important;
            height: 4px !important;

        }
        input:focus, textarea:focus, select:focus{
            outline: none !important;
        }



        #form_tag{

            margin: 20% 18%;



        }
        .col-12{
            padding:0 !important;
        }
        .img-fluid{
            height: 100% !important;
            width:100%;
            border-radius: 15px;

        }
        .divider:after,
        .divider:before {
            content: "";
            flex: 1;
            height: 1px;
            background: #eee;
        }
        .h-custom {
            height: calc(100% - 73px);
        }

        @media (max-width: 500px) {
            #sec2{
                height: 400px !important;
            }
            #sec1{
                height: 350px !important;
            }

            .icon  {
                display:none;
            }
            #form_tag {
                margin: 2rem 1rem !important;
            }
            .h-custom {
                height: 100%;
            }
            .form-sec{
                padding:0rem 3rem !important;

            }
            .form-main {
                border-radius: 15px;
                width: 100% !important;
                background: #333;
                margin:2rem auto;



                /*position: fixed;*/
                /*top: 50%;*/
                /*left: 50%;*/
                /*transform: translate(-50%, -50%);*/


            }
        }
        .form-control:focus {
            border-color: inherit;
            -webkit-box-shadow: none;
            box-shadow: none;
        }


        /*.bgWhite{*/
        /*    background:white;*/
        /*    box-shadow:0px 3px 6px 0px #cacaca;*/
        /*}*/
        #Note p{
            color:#fff;
            font-weight: 600;
        }
        #Note p span{
            color:#e3e3e3;
            font-size: 16px;
            font-weight:600;
        }

        .title{

            margin-top:20px;
            font-size:16px;
            color:#fff;
        }

        .customBtn{
            border-radius:0px;
            padding:10px;
        }

        .otps{
            display:inline-block !important;
            width:50px !important;
            height:50px !important;
            text-align:center !important;
        }
        .OtpForm{
            display:inline-block !important;
            width:50px !important;
            height:50px !important;
            text-align:center !important;
        }
        .icon{
            position:absolute;
            bottom:12px;
            right:20px;
        }
        .alert{
            z-index:999;
        }
        @media (max-width: 300px) {
            .form-sec {
                padding: 0rem 2rem !important;
            }
        }



    </style>

<div class="Form-Bg">

<img  src="{{asset("/images/loginpageImg/icon.png")}}"
      class="icon" alt="Sample image">




    <section class="form-main">
        <div class="container-fluid h-custom h-100">
            <div class="row h-100">
                <div class="col-lg-7 col-12 SecM" id="sec1" style="padding: 0;height:450px;  border-radius: 15px;">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="1500" style="height:100%">
                        <!-- Indicators -->
                        <div style="text-align: center">
                            <ol class="carousel-indicators" style="margin:0 auto;" >
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>

                            </ol>
                        </div>
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner">
                            <div class="item active" >
                                <img  style="border-radius: 15px;"  src="{{asset("/images/loginpageImg/bnr1.png")}}"
                                      class="img-fluid" alt="Sample image">
                            </div>

                            <div class="item" >
                                <img  style="border-radius: 15px;"   src="{{asset("/images/loginpageImg/bnr2.png")}}"
                                      class="img-fluid" alt="Sample image">
                    </div>


            </div>


                    </div>

                </div>
                <div class="col-lg-5 col-12 SecM" id="sec2" style="padding: 0;height:450px;">
                    <div id="errorSec" class="text-center " style="position:absolute;top:0;width:100%">



                    </div>
                    <div class="" style="position:relative;">
{{--                        <div class="text-center errorSec" style="position:absolute;top:0;width:100%">--}}


{{--                            @if (count($errors) > 0)--}}
{{--                                <div class="alert alert-danger text-left" >--}}
{{--                                    <strong>Whoops!</strong> @lang('quickadmin.qa_there_were_problems_with_input'):--}}
{{--                                    <br><br>--}}
{{--                                    <ul>--}}
{{--                                        @foreach ($errors->all() as $error)--}}
{{--                                            <li>{{ $error }}</li>--}}
{{--                                        @endforeach--}}
{{--                                    </ul>--}}
{{--                                </div>--}}
{{--                            @endif--}}
{{--                        </div>--}}
                        <div class="form-sec">
            <form id="form_tag"
                                   class="form-horizontal"
                  role="form"
                  method="POST"
                                   action="{{ url('login') }}">
                <input type="hidden"
                       name="_token"
                       value="{{ csrf_token() }}">

                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p class="lead fw-normal mb-0 me-3" style="color:#fff;font-size: 30px;">Traveler Login</p>

                                </div>

                                <div class="divider d-flex align-items-center my-4">

                                </div>

                                <!-- Email input -->
                                <div class="form-outline mb-4" >
                                    <div id="phone" style="margin-top: 5rem;"  >
                                        <label style="color:#fff;font-size: 16px;" class="form-label" for="form3Example3">Mobile Number</label>
                                        {{--                                    <input type="email" id="form3Example3" class="form-control form-control-lg"/>--}}
                                        <div class="input-group" style="background: #fff;padding-left: 0.5rem;">
                                            <input  class="form-control" type="phone" name="phone" style="width: 55%;height: 38px;display: inline-block;border:none" id="phoneField1"  autocomplete="off" value="{{ old('phone') }}">
                </div>
                                        <div class="text-lg-start  pt-2" style="text-align: center !important" id="getotp">
                                            <button onclick="get_otp()" type="button" class="btn btn-primary btn-lg"
                                                    style="padding-left: 2.5rem; padding-right: 2.5rem;margin-top:2rem;border-radius: 20px;background: #fdcc19;border:#fdcc19;color:black">Get OTP</button>

                </div>



                                    </div>



                                    <div class="mt-2" id="otp" style="display: none;" >
                                        {{--                                        <label class="text-muted h3">OTP Code</label>--}}
                                        <div class="">
                                            <div class="">
                                                <div class="">
                                                    <div>
                                                        <div class="bgWhite">
                                                            <div id="Note" class=" text-lg-start mt-4 pt-2">


                                                            </div>
                                                            <div class="title">
                                                                Enter OTP
                                                            </div>

                                                            <form  class="OtpForm mt-5">
                                                                <input class="otps" type="password" name="otp"
                                                                       oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength=1 >
                                                                <input class="otps" type="password" name="otp"
                                                                       oninput='digitValidate(this)' onkeyup='tabChange(2)' maxlength=1 >
                                                                <input class="otps" type="password" name="otp"
                                                                       oninput='digitValidate(this)' onkeyup='tabChange(3)' maxlength=1 >
                                                                <input class="otps" type="password" name="otp"
                                                                       oninput='digitValidate(this)'onkeyup='tabChange(4)' maxlength=1 >

                <div class="col-lg-12 col-xl-12 col-md-12 mt-2" style="display: none">
                    <label class="text-muted h3">@lang('quickadmin.qa_email')</label>
                    <input class="form-control" type="email" id="email" name="email"
                           value="{{ old('email') }}">
                </div>
               <input class="form-control"  type="hidden" id="password" name="password">

                <div class="col-lg-12 col-xl-12 col-md-12 mt-5" style="display: none">
                    <label class="text-muted h4"><input class="form-check-inline" type="checkbox">
                        @lang('quickadmin.qa_remember_me')</label>
                </div>
                                                                <div class=" mt-5 text-center" id="login-btn" style="display: none">
                                                                    <a  href="#" onclick="validate()"
                            class="btn btn-primary">
                                                                        <span class="h3 pl-4 pr-4 font_wieght">@lang('quickadmin.qa_login')</span>
                    </a>
                </div>
                                                            </form>

                                                            <div class=" mt-5 text-center" id="login-btn" style="display: none;">
                    <a  href="#" onclick="validate()"
                                                                    class="btn btn-primary" style="background: yellow;color:black;border:black;">
                        <span class="h3 pl-4 pr-4 font_wieght">@lang('quickadmin.qa_login')</span>
                    </a>
                </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {{--                                        <input class="form-control" type="password" name="otp"--}}
                                        {{--                                               value="{{ old('otp') }}">--}}

                                        {{--                                        <div class="col-lg-12 col-xl-12 col-md-12 mt-2" style="display: none">--}}
                                        {{--                                            <label class="text-muted h3">@lang('quickadmin.qa_email')</label>--}}
                                        {{--                                            <input class="form-control" type="email" id="email" name="email"--}}
                                        {{--                                                   value="{{ old('email') }}">--}}
                                        {{--                                        </div>--}}


                                    </div>


                                </div>









            </form>
        </div>
    </div>
</div>
            </div>
        </div>

    </section>


    <script>


        let tabChange = function(val){
            let ele = document.getElementsByClassName('otps');
            if(ele[val-1].value != ''){
                ele[val].focus()
            }else if(ele[val-1].value == ''){
                ele[val-2].focus()
            }
        }



    </script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
<link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<script src="{{ asset('adminlte/country/js/jquery.ccpicker.js')}}" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="{{ asset('adminlte/country/css/jquery.ccpicker.css')}}">
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    $( document ).ready(function() {
        $("#phoneField1").CcPicker();
        $("#phoneField1").CcPicker("setCountryByCode","in");
        $("#phoneField3").CcPicker({"countryCode":"in"});
        $("#phoneField5").CcPicker();
        $("#phoneField1").on("countrySelect", function(e, i){
           // alert(i.countryName + " " + i.phoneCode);
        });
    });
</script>
<script type="application/javascript" >
    let id='';
    function get_otp() {

        if(document.getElementsByName('phone')[0].value.length>9){

            axios.post('/api/webservices/generate_otp',  {
                phone: document.getElementById('phoneField1_phoneCode').value+document.getElementsByName('phone')[0].value
            })
                .then(res => {
                    console.log(res.data.status)
                    if(res.data.status.length>6){
                        document.getElementById('phone').style.display = "none";
                        document.getElementById('otp').style.display = "block";
                        document.getElementById('getotp').style.display = "none";
                        document.getElementById('login-btn').style.display = "block";
                        id=res.data.id
                        document.getElementById('email').value= res.data.email;
                            document.getElementById('Note').innerHTML="<p>An OTP is sent to the registered email address <span>"+res.data.email+"</span> and mobile number <span>"+document.getElementById('phoneField1').value+"</span> of the traveller</p>";
                    }
                    else{
                            // alert(res.data.msg);
                            document.getElementById('errorSec').innerHTML='<div  class="alert alert-danger alert-dismissible  show" role="alert" style="padding: 2rem 0rem;font-size: 14px;border-radius: 15px;"> <strong id="err">'+res.data.msg+'</strong> <button id="clickMe" type="button" class="close" data-dismiss="alert" aria-label="Close"> <span style="font-size:40px" aria-hidden="true">&times;</span> </button> </div>'
                            setTimeout(function () {

                                console.log("click");
                                document.getElementById('clickMe').click();


                            }, 3000);

                    }

                })
                .catch(error => {
                        console.log(error.response);
                });
        }
        else{
                document.getElementById('errorSec').innerHTML='<div  class="alert alert-danger alert-dismissible  show" role="alert" style="padding: 2rem 0rem;font-size: 14px;border-radius: 15px;"> <strong id="err">Please enter valid number</strong> <button id="clickMe"  type="button" class="close" data-dismiss="alert" aria-label="Close"> <span style="font-size:40px" aria-hidden="true">&times;</span> </button> </div>'
                setTimeout(function () {

                   console.log("click");
                   document.getElementById('clickMe').click();


                }, 3000);


        }

    }

    function validate(){



            var resP='';
            for(let i=0;i<4;i++){

                resP= resP + document.getElementsByClassName('otps')[i].value;


            }
            console.log(resP);



        axios.post('/api/webservices/validate_otp',  {
            id: id,
            email: document.getElementById('email').value,
                otp: resP,
        })
            .then(res => {
                    console.log("sss",res.data.msg)
                if(res.data.status.length>6){
                    console.log(res.data);

                    document.getElementsByName('password')[0].value = res.data.session;

                    document.getElementById("form_tag").submit();
                }
                else{
                        document.getElementById('errorSec').innerHTML='<div class="alert alert-danger alert-dismissible  show" role="alert" style="padding: 2rem 0rem;font-size: 14px;  border-radius: 15px;"> <strong id="err">'+res.data.msg+'</strong> <button id="clickMe"  type="button" class="close" data-dismiss="alert" aria-label="Close"> <span style="font-size:40px" aria-hidden="true">&times;</span> </button> </div>'
                        setTimeout(function () {

                            console.log("click");
                            document.getElementById('clickMe').click();


                        }, 3000);
                }

            })
            .catch(error => {
                    console.log(error.response);
            });


        // let form = new FormData();
        // form.set('id', id);
        // form.set('email', document.getElementById('email').value);
        // form.set('otp', document.getElementsByName('otp')[0].value);
        // axios.post('/api/webservices/validate_otp', form)
        //     .then(res => {
        //
        //
        //
        //     });


    }
</script>


</div>



</html>
@endsection
