@extends('layouts.auth')

@section('content')


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

            .form-main{
                background: #fff;

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

            #sec1{
                height: 320px !important;
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
                background: #fff;
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
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2500" style="height:100%">
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
                                    <img  style="border-radius: 15px;"  src="{{asset("/images/loginpageImg/cc1.jpg")}}"
                                          class="img-fluid" alt="Sample image">
                                </div>

                                <div class="item" >
                                    <img  style="border-radius: 15px;"   src="{{asset("/images/loginpageImg/cc.png")}}"
                                          class="img-fluid" alt="Sample image">
                                </div>


                            </div>


                        </div>

                    </div>
                    <div class="col-lg-5 col-12 SecM" id="sec2" style="padding: 0;height:450px;">
                        <div id="errorSec" class="text-center " style="position:absolute;top:0;width:100%">
                @if (count($errors) > 0)
                            <div  class="alert alert-danger alert-dismissible  show" role="alert" style="padding: 2rem 0rem;font-size: 14px;border-radius: 15px;"> <strong id="err">
                        <strong>Whoops!</strong> @lang('quickadmin.qa_there_were_problems_with_input'):
                        <br><br>
                                    <ul style="list-style: none;">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                                </strong>
                                <button id="clickMe"  type="button" class="close" data-dismiss="alert" aria-label="Close"> <span style="font-size:40px" aria-hidden="true">&times;</span> </button> </div>
                @endif


                        </div>
{{--                        @if (count($errors) > 0)--}}
{{--                            <div class="alert alert-danger text-left">--}}
{{--                                <strong>Whoops!</strong> @lang('quickadmin.qa_there_were_problems_with_input'):--}}
{{--                                <br><br>--}}
{{--                                <ul>--}}
{{--                                    @foreach ($errors->all() as $error)--}}
{{--                                        <li>{{ $error }}</li>--}}
{{--                                    @endforeach--}}
{{--                                </ul>--}}
{{--                            </div>--}}
{{--                        @endif--}}
                        <div class="row" style="padding:5rem;">
                            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p class="lead fw-normal mb-0 me-3" style="color:#6c757d!important;font-size: 30px;">{{ ucfirst(config('app.name')) }} @lang('quickadmin.qa_login')</p>

            </div>

                            <div class="divider d-flex align-items-center my-4">

                            </div>


            <form class="form-horizontal col-lg-12 col-xl-12 col-md-12 mb-5"
                  role="form"
                  method="POST"
                  action="{{ url('login') }}">
                <input type="hidden"
                       name="_token"
                       value="{{ csrf_token() }}">

                <div class="col-lg-12 col-xl-12 col-md-12 mt-2">
                    <label class="text-muted h3">@lang('quickadmin.qa_email')</label>
                    <input class="form-control" type="email" name="email"
                           value="{{ old('email') }}">
                </div>
                <div class="col-lg-12 col-xl-12 col-md-12 mt-3">
                    <label class="text-muted h3">@lang('quickadmin.qa_password')</label>
                    <span class="float-right h3"><a href="{{ route('auth.password.reset') }}">@lang('quickadmin.qa_forgot_password')</a></span>
                    <input class="form-control" type="password" name="password">
                </div>
                <div class="col-lg-12 col-xl-12 col-md-12 mt-0">
                    <label class="text-muted h4"><input class="form-check-inline" type="checkbox">
                        @lang('quickadmin.qa_remember_me')</label>
                </div>
                <div class="col-lg-12 col-xl-12 col-md-12 mt-5 text-center">
                    <button type="submit"
                            class="btn btn-primary">
                        <span class="h3 pl-4 pr-4 font_wieght">@lang('quickadmin.qa_login')</span>
                    </button>
                </div>
                <div class="col-lg-12 col-xl-12 col-md-12 mt-5 text-center">
                    <span class="text-muted h3"><a href="/traveller-login"> Click Here If You Are A Traveller</a></span>
                </div>

            </form>
        </div>
    </div>

</div>
            </div>

        </section>
        <script>
            setTimeout(function () {

                console.log("click");
                document.getElementById('clickMe').click();


            }, 3000);
        </script>



    </div>



    </html>
@endsection
