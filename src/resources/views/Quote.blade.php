<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <script src="https://kit.fontawesome.com/2209fac208.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/2209fac208.js" crossorigin="anonymous"></script>


    <meta name="description" content="{{$booking_id}}" />
    <meta property="og:title" content="Quotation Preview" />
    <meta property="og:url" content="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}" />
    <meta property="og:description" content="{{$booking_id}}">
    <meta property="og:image" content="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}" />
    <meta property="og:type" content="article" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:locale:alternate" content="fr_FR" />
    <meta property="og:locale:alternate" content="es_ES" />


    <!-- HTML Meta Tags -->
    <title>{{$title}}</title>
    <meta name="description" content="{{$booking_id}}">

    <meta property="og:url" content="{{$pageurl}}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Quotation Preview">
    <meta property="og:description" content="QRY-2761-4-20221110-182">
    <meta property="og:image" content="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}">

    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="{{env('APP_URL')}}">
    <meta property="twitter:url" content="{{$pageurl}}">
    <meta name="twitter:title" content="Quotation Preview">
    <meta name="twitter:description" content="{{$booking_id}}">
    <meta name="twitter:image" content="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}">


    <style>
        body{
            width:100%;


            margin:0;
            background: rgb(243, 243, 243);
            box-sizing: border-box;
        }
        .flightImg p img{
            width:100%;
        }
        .flightImg{
            overflow-x: scroll;
        }

        .Pdf-download{
            width: 145px;



        }
        header{
            height:100px;
            background: #fff;
            width: 100%;

            top: 0;
            z-index:999;
            overflow: hidden;
        }


        .Top-head{
            position: absolute;
            height:100px;
            width:100%;
            background: rgba(255, 255, 255, 0.907);

        }

        .logo{
            width:53%;
            height:100px;

        }
        p{
            font-size: 14px;
            padding:0;
            margin:0;
            color:rgb(106, 106, 106);
        }



        span{
            font-size: 14px;
            color:rgb(162, 161, 161);

        }

        h1,h2,h3,h4,h5,h6{
            padding:0;
            margin:0;
        }
        .text-style{
            padding:2rem;
            text-align: center;
        }
        .text-styleM{
            padding:2rem 0.5rem;
            text-align: center;
        }
        #head-baner{
            width:100%;


        }
        .body-1{
            background-color: #fff;
            margin-top: 2rem;
        }
        .box1{
            padding :6rem 1rem
            1rem;
            text-align: justify;
        }
        .box2{
            padding:2rem 1rem;
            width:100%;
            position: relative;
        }
        .box3{
            border-radius: 10px;
            background-color: rgb(244, 244, 244);
            padding:1.5rem;
            width:100%;

        }
        .box3 h6{
            padding:0.5rem 0;
            margin:0;
            color:rgb(106, 105, 105);
        }
        .icon1{
            position: absolute;width: 73px;right: -3%;
        }
        #bnr{
            width:100%;
            height:400px;


        }
        .nav-tabs {
            position: sticky;
            top: 38px;
            background: #fff;
            border-bottom: 1px solid #dee2e6;
        }
        .conSec{
            padding:0.8rem  0.5rem;text-align: center;display: flex;background: #f3f3f3;
        }

        @media (max-width:991px){
            body{
                margin:0;
            }
            .flightImg p img{
                width:700px;
            }
        }

        @media (max-width:550px){
            .conSec{
               padding:0.8rem  0.5rem;text-align: center;display: block;background: #f3f3f3;
            }
            #bnr {
                width: 100%;
                height: 230px;
            }
            .flightImg p img{
                height:  300px !important;
                width:800px;
                margin-left: 5% !important;
                padding: 0px !important;
                float: none !important;


            }
            .box1 {
                padding: 2rem 1rem 1rem;
                text-align: justify;
            }
            .scroll_up{
                display: none;
            }

            .nav-tabs {
                position: sticky;

                background: #fff;
                border-bottom: 1px solid #dee2e6;
                z-index: 2;
            }
            p{
                font-size: 12px;
                padding:0;
                margin:0;
                color:rgb(106, 106, 106);
            }
            .icon1 {
                position: absolute;
                width: 73px;
                right: -10%;
            }

            .nav-item button{


            }
            .nav-link{
                font-size: 13px;

            }
            .nav-pills{

               margin-top: 1rem;

                z-index: 999;
            }



        }
        .features{
            padding: 0;
        }
        .features li{
            list-style: none;
            padding: 1rem 1rem 1rem 1rem;
            background: #f3f3f3;
        }

        .footer {
            position: sticky;
            z-index: 3;

            bottom: 0;
            width: 100%;
            background-color: red;
            color: white;
            text-align: center;
            overflow: hidden;
        }
        .sec-style{
            background:#FFF;margin-top:1rem;padding:1.5rem;line-height:26px;text-align: justify;
        }
        th,td{
            text-align: center;
        }
        .icons{
            width:40px;
        }
        .icons1{

            width:55px;
        }
        .body-2{
            padding-top: 1rem;

        }


        /*.flightImg p img{*/
        /*    height: 240px ;*/
        /*    width: 100% ;*/
        /*    margin-left: 5% ;*/
        /*    padding: 0px ;*/
        /*    float: none ;*/


        /*}*/

        .flightImg > p {

            text-align: left !important;
            width: 90% !important;
            margin-left: 5% !important;

        }

        .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
            color: #fff;
            background-color: {{$color}};
        }
        .nav-link {
            color: {{$color}};
        }
        .nav-pills{
            margin-top: 1rem;


            z-index:1;
        }

        .nav-link:hover {
            color: {{$color}};
        }
        .display-none{
            display: none !important;
        }
        .nav-link.active >.date{
            display: block !important;
        }
        .base-color{
            color: {{$color}} !important;
        }
        .icon i{
            font-size: 30px;
        }
        .icon span{
            font-weight: 500;
        }
        .buttonScroll{
            display: inline-block;
            width: 100%;
            overflow-x: scroll;
            white-space: nowrap;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;

        }
        .flightImg{

            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;
        }
        .flightImg::-webkit-scrollbar {
            display: none;
        }
        .buttonScroll li{
            display: inline-block;

        }
        .buttonScroll::-webkit-scrollbar {
            display: none;
        }
        .nav-tabs .nav-link:focus, .nav-tabs .nav-link{
            border-color: #e9ecef #e9ecef #dee2e6;
        }


        .section {

            padding-top:2.5rem;
            background: #fff;

            height:auto;


            width: 100%;


            align-items: center;
            justify-content: center;
            text-transform: uppercase;
        }
        /*#home {*/
        /*    background-color: #1C8106;*/
        /*}*/
        /*#about {*/
        /*    background-color: #6081C3;*/
        /*}*/
        /*#footer {*/
        /*    background-color: #A83E11;*/
        /*}*/
        .navScroll {

            position: sticky;
            top: 0;
            background-color: #eef0f1;
            border-radius:0 0 20px 20px;
        }
        .navScroll .container {
            width: 90%;
            max-width: 1000px;
            margin: 0 auto;
            text-align: center;
            padding: 10px;
        }
        .navScroll .container ul li {
            display: inline-block;
            border-radius:5px;
        }
        .navScroll .container ul li a {
            display: inline-block;
            text-decoration: none;
            padding: 10px 20px;
            color: black;
        }
        .navScroll .container ul li.active {
            background-color: {{$color}};
            border-radius:30px;
            transition: 0.3s;
        }
        .navScroll .container ul li.active a {
            color: #ffffff;
        }
        .Headings{
            margin-top: 1rem;
            text-align: center;
            list-style: none;
            padding:0;
        }
        .Headings li{
            display: inline-block;
            padding: 1rem;
            border-bottom: 2px solid {{$color}};
        }
        .scroll_up{
            font-size: 13px;
            width: 79px;
            opacity: 0;
            position: fixed;
            right: 13px;
            bottom: 7rem;
            z-index: 2;
            transition: all .8s ease;
        }
        .visible {
            opacity: 1 !important;
        }
        .DayBtn{
            border-bottom-right-radius:50px !important;
            border-top-right-radius:50px !important;
            width:150px;

        }
        .Address p{
            color:#fff;

        }

    </style>
</head>



<body>

<link itemprop="thumbnailUrl" href="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}">

<span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject">
<link itemprop="url" href="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}">
</span>

{{--<div class="m-4" style="position: fixed;top: 0px;z-index: 9999;right: 0px;">--}}
{{--    <!-- Success Alert -->--}}
{{--    <div class="alert alert-success alert-dismissible fade ">--}}
{{--        <strong>Success!</strong> Your message has been sent successfully.--}}
{{--        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>--}}
{{--    </div>--}}
{{--</div>--}}

<?php
$api_place = 'AIzaSyBrL_XvVtbYTBCniSobHj1xn-lDpXrrmF4';
$query=\App\Query::where('id',$queryid)->first();
$e_bed=fetch_meta_data($query->id,'meta_extra_bed','query');
$cal = ((int)$query['no_of_adults'] + (int)$query['no_of_children']);
$c = (int)$query['total_room'] * 2;
$cal = $cal - $c;
if (!$cal <= 0) {

    $calL = $cal - $e_bed;
    if ($calL <= 0) {
        $childnoextrabed = 0;
    } else {
        $childnoextrabed = $calL;
    }
} else {
    $childnoextrabed = 0;
}
$meta_flight=fetch_meta_data($query->id,'meta_flight','query');
$data_array = array();
$dayitinerary = json_decode($query['itinerary_places'], true);
$firstdayflag = 0;
$l = 1;
$meals_arr = array();

$itilocs='';

$values=array(
    'trav_name'=>$query->full_name,
    'trav_number'=>$query->phone,
    'agency_id'=>get_agency_id_by_agent_id($query->agent_id),
    'agent_id'=>$query->agent_id
);

?>




<header id="head">
    <nav class="Top-head">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5">
                    <div class="row">
                        <div class="col-lg-4 col-4" style="text-align: center;"><img style="height:100px;width:140px;" class="logo" src="{{$logo}}"></div>
                        <div class="col-lg-8 col-8" style="padding:2rem;text-align: center;">
                            <p>Agency Name </p>
                            <h6>
                                {{$agency->name}}

                            </h6>



                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12 d-none d-lg-block d-xl-block">
                    <div class="row">
                        <div class="col-lg-4 text-style">
                            <p>Travel Date</p>
                            <h6>{{ date("d M Y", strtotime($query->driver_pickup_date_time))}}</h6>
                        </div>
                        <div class="col-lg-4 text-style">
                            <p>No of Traveller</p>
                            <h6>Adult({{$query->no_of_adults}}) | Child({{$query->no_of_children}})</h6>
                        </div>
                        <div class="col-lg-4 text-style">
                            <p>Transport Type</p>
                            <h6>{{fetch_meta_data($query->id,'meta_transport','query')}}</h6>
                        </div>


                    </div>

                </div>
            </div>
        </div>


    </nav>

</header>
<section id="head-baner">
    <img id="bnr" src="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}">

</section>
<section class="for-mob  " >
    <div class="container-fluid" >
        <div class="row">
            <div class="col-sm-12" style="background:rgb(244, 244, 244)">
                <div class="col-12" style="padding:0.5rem;">
                    <p>Itineraty Destination</p>
                </div>
                <div class='col-12' style="padding: 0 0.5rem 0.5rem 0.5rem;">
                    <div class="row">
                        <div class="col-12">
                            <h6 >
                                @foreach(json_decode($query->tour_location, true) as $locs)

                                    @if($loop->last)
                                        {{$locs['name'] . ' (' . $locs['days'] . ')' . " "}}
                                    @else
                                        {{$locs['name'] . ' (' . $locs['days'] . ')' . " | "}}
                                    @endif

                                @endforeach
                            </h6>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-12 d-md-block d-sm-block d-block d-lg-none" style="background:#fff;" >
                <div class="row">
                    <div class="col-4 text-styleM">
                        <p>Travel Date</p>
                        <h6>{{ date("d M Y", strtotime($query->driver_pickup_date_time))}}</h6>
                    </div>
                    <div class="col-4 text-styleM">
                        <p>No of Traveller</p>
                        <h6>Adult({{$query->no_of_adults}}) <br/> Child({{$query->no_of_children}})</h6>
                    </div>
                    <div class="col-4 text-styleM">
                        <p>Transport Type</p>
                        <h6>{{fetch_meta_data($query->id,'meta_transport','query')}}</h6>
                    </div>


                </div>

            </div>
        </div>
    </div>
</section>
<div class="main-sec container-fluid" style="width:100%;position:relative;">

    <section  class="body-1 container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="box1">
                        <p class="mb-0"><?php echo data_replace_in_mail_formats(fetch_meta_data($query->id,'meta_welcome_mail','query') ,$values) ?> </p>


                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="box2">
                        <h5 style="padding-bottom: 1rem;">Query Details</h5>

                        <img class="icon1" src="{{asset("/images/quote_images/Group 3805.png")}}">

                        <div class="box3">

                            <h6>Query Ref No: <span>{{$query->booking_id}}</span></h6>
                            <h6>Quoted By: <span>{{$agent->name}}</span></h6>
                            <h6>Executive Number: <span>{{$agent->phone}}</span></h6>
                            <h6>Agency Number: <span>{{$agency->phone}}</span></h6>



                        </div>
                    </div>
                </div>

            </div>
        </div>


    </section>
    <section id="Overview" class="body-2" style="background-color:rgb(243, 243, 243)">

        <button
            onclick="topScr()"
            style="background: {{$color}};border:1px solid {{$color}}"
            class="btn btn-primary scroll_up"
            type="button">

            <i style="font-size: 30px;"  class="fa-solid fa-chevron-up"></i>Scroll Up
        </button>

        <div class="container">
            <ul class="Headings">
                <li>
                    <h3>Over View</h3>
                </li>
            </ul>
{{--            <ul class="nav nav-pills mb-3 buttonScroll" id="pills-tab" role="tablist">--}}

{{--                <li class="nav-item" role="presentation">--}}
{{--                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Over View</button>--}}
{{--                </li>--}}
{{--                <li class="nav-item" role="presentation">--}}
{{--                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onclick="topSec()">Day Plan</button>--}}
{{--                </li>--}}
{{--                <li class="nav-item" role="presentation">--}}
{{--                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Price Details</button>--}}
{{--                </li>--}}
{{--                <li class="nav-item" role="presentation">--}}
{{--                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-sn" type="button" role="tab" aria-controls="pills-sn" aria-selected="false">Inclusion Exclusion</button>--}}
{{--                </li>--}}

{{--            </ul>--}}
            <div >
                <div >

                    {{--Hotel Section--}}
                    @foreach(json_decode($query->tour_location, true) as $locs)
                        <div class="row" style="padding:0.5rem;background-color: #fff;">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-5" style="padding:1rem 0;">
                                        <div class="row">
                                            <div class="col-2 icon" style="text-align: center !important">


                                                <i class="fa-solid base-color fa-hotel"></i><br>
                                                <span>Hotel</span>

                                                {{--                                            <img class="icons" src="{{asset("/images/quote_images/Group 3806.png")}}" alt="">--}}

                                            </div>

                                            <div class="col-8">
                                                <h6>{{$locs['name'] }}</h6>
                                                <p>IN-{{$locs['date_from']}} | OUT-{{$locs['date_to']}}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-lg-7" style="padding:1rem 0;">
                                        <div class="row">
                                            <div class="col-3">
                                                <p>No of Room:</p>
                                                <h6>{{$query->total_room}}</h6>

                                            </div>
                                            <div class="col-3">
                                                <p>Extra Bed:</p>
                                                <h6>{{$e_bed}}</h6>
                                            </div>
                                            <div class="col-3">
                                                <p>W/O Bed:</p>
                                                <h6>{{$childnoextrabed}}</h6>
                                            </div>
                                            <div class="col-3">
                                                <p>Meal Plan:</p>
                                                <h6>{{$locs['mealplan']}}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="container" style="margin-top:1rem">
                                    <div class="row">
                                        <div class="col-lg-2"></div>
                                        <div class="col-lg-4">
                                            <div class="row">
                                                <div class="col-4 text-center">
                                                    <?php
                                                    $url='';
                                                    if($locs['hotel']['hotel_data']!=''){
                                                        $hotel_data=\App\Accommodation::where('id',$locs['hotel']['hotel_data']['id'])->first();

                                                        $url=$hotel_data->featured_image_link;
                                                    }

//     TODO                                               $url = asset('/dashboard_resources/hotel.png');   //remove before release
                                                    if($url==''){
                                                        $url = asset('/dashboard_resources/hotel.png');
                                                    if($url==''){
                                                        $hotel_add = $hotel_data->accommodation_address;
                                                        if ($hotel_add == '') {
                                                            $hotel_add = $hotel_data->title;
                                                        }
                                                        $par = urlencode($hotel_add);
                                                        $u = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' . $par . '&inputtype=textquery&fields=photos&key=' . $api_place;
                                                        $file = file_get_contents($u);
                                                        $file_decodec = json_decode($file, true);
                                                        if($file_decodec['status']=='OK' || $file_decodec['status'] != 'ZERO_RESULTS'){
                                                            if ($file_decodec['candidates'][0] == '' || $file_decodec['candidates'][0] == null) {
                                                                $url = asset('/dashboard_resources/hotel.png');
                                                            }
                                                            else{

                                                                $place_ref = $file_decodec['candidates'][0]['photos'][0]['photo_reference'];
                                                                $url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=' . $place_ref . '&key=' . $api_place;
                                                            }
                                                        }
                                                        else{
                                                            $url = asset('/dashboard_resources/hotel.png');
                                                        }
                                                    }



                                                    }



                                                    ?>
                                                    <img
                                                        src="{{$url}}"
                                                        style="width:100px;height:60px;border-radius:5px;"
                                                    >
                                                </div>
                                                <div class="col-8" style="padding:0.5rem">
                                                    <h6>{{$locs['hotel']['hotel_data']!=''?$locs['hotel']['hotel_data']['title']:'Hotel Not Selected'}}</h6>
                                                    <h6>Room:  <span>{{$locs['hotel']['roomtype']}}</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2" style="padding:1rem;text-align: center;"><h4>OR</h4></div>
                                        <div class="col-lg-4">
                                            <div class="row">
                                                <div class="col-4 text-center">
                                                    <?php
                                                    $url='';
                                                    if($locs['hotel2']['hotel_data']!=''){
                                                        $hotel_data=\App\Accommodation::where('id',$locs['hotel2']['hotel_data']['id'])->first();
                                                        $url=$hotel_data->featured_image_link;
                                                    }

//                                                    $url = asset('/dashboard_resources/hotel.png');   //remove before release
                                                    if($url==''){

                                                        $url = asset('/dashboard_resources/hotel.png');
                                                        if($url==''){

                                                        $hotel_add = $hotel_data->accommodation_address;
                                                        if ($hotel_add == '') {
                                                            $hotel_add = $hotel_data->title;
                                                        }
                                                        $par = urlencode($hotel_add);
                                                        $u = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' . $par . '&inputtype=textquery&fields=photos&key=' . $api_place;
                                                        $file = file_get_contents($u);
                                                        $file_decodec = json_decode($file, true);
                                                        if($file_decodec['status']=='OK' || $file_decodec['status'] != 'ZERO_RESULTS'){
                                                            if ($file_decodec['candidates'][0] == '' || $file_decodec['candidates'][0] == null) {
                                                                $url = asset('/dashboard_resources/hotel.png');
                                                            }
                                                            else{

                                                                $place_ref = $file_decodec['candidates'][0]['photos'][0]['photo_reference'];
                                                                $url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=' . $place_ref . '&key=' . $api_place;
                                                            }
                                                        }
                                                        else{
                                                            $url = asset('/dashboard_resources/hotel.png');
                                                        }
                                                    }

                                                    }



                                                    ?>
                                                    <img
                                                        src="{{$url}}"
                                                        style="width:100px;height:60px;border-radius:5px;"
                                                    >
                                                </div>
                                                <div class="col-8" style="padding:0.5rem">
                                                    <h6>{{$locs['hotel2']['hotel_data']!=''?$locs['hotel2']['hotel_data']['title']:'Hotel Not Selected'}}</h6>
                                                    <h6>Room:  <span>{{$locs['hotel2']['roomtype']}}</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>
                        </div>

                        <?php
                        if ($firstdayflag == 0) {
                            $vdate =  $locs['date_from'];
                            $vdate = str_replace('/', '-', $vdate);
                        }
                        if($dayitinerary!=''){
                            if (count($dayitinerary[$locs['id']]) > 0) {

                                foreach ($dayitinerary[$locs['id']] as $days => $day_data) {
                                    if ($days == "day-1" && $locs['id'] != json_decode($query->tour_location, true)[0]['id']) {

                                        $l--;
                                        $day_meals = null;
                                    }
                                    else {

                                        $day_meals = $day_data['meal'];
                                        $meals_arr[] = array("meals" => $day_meals);
                                        if ($firstdayflag == 0) {
                                            $firstdayflag = 1;
                                            $checkInDate2 = date('d-m-Y', strtotime($vdate . ' + ' . ($l - 1) . ' days'));
                                        } else {

                                            $checkInDate2 = date('d-m-Y', strtotime($vdate . ' + ' . ($l - 1) . ' days'));
                                        }

                                    }
                                    $places = $day_data['place'];
                                    foreach ($places as $sights => $scenes) {
                                        $desc='';
                                        if(isset($scenes['description'])){
                                            $desc = $scenes['description'];
                                        }

                                        if (isset($scenes['featured_image_link'])) {

                                            $image = $scenes['featured_image_link'];

                                        }
                                        else {
                                            $image = '';

                                        }

                                        $data_array[$checkInDate2][] = array("title" => $scenes['title'], "id" => $scenes['id'],

                                            "image" => $image,
                                            "categories" => $scenes['categories'],
                                            "to_time" => $scenes['to_time'],
                                            "from_time" => $scenes['from_time'],
                                            "remark" => $scenes['remark'],
                                            "desc" => $desc

                                        );
                                    }
                                    $l++;
                                }

                            }

                        }

                        ?>
                    @endforeach

                    {{--Ticket Section--}}
                    @if($meta_flight!='' || $meta_flight!=null)
                        <div class="row" style="padding:0.5rem;margin-top:2rem;background-color: #fff;">
                            <div class="col-lg-12">
                                <div class="row" >
                                    <div class="col-lg-12" style="padding:1rem 0;">
                                        <div class="row">
                                            <div class="col-lg-1 col-2 icon" style="padding:0.5rem;text-align: center">
                                                <i class="fa-solid base-color fa-ticket"></i><br>
                                                <span>Ticket</span>



                                            </div>
                                            <div class="col-lg-10"  style="padding:0.5rem">

                                                <div class="flightImg" style="text-align:center;">
                                                    <?php print_r($meta_flight); ?>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                            </div>
                        </div>
                    @endif

                    {{--Transfer Section--}}

                    <div class="row" style="padding:0.5rem;margin-top:2rem;background-color: #fff;">
                        <div class="col-lg-12">
                            <div class="row" >
                                <div class="col-lg-12" style="padding:1rem 0;">
                                    <div class="row">
                                        <div class="col-lg-1 col-3 icon" style="padding:0.5rem;text-align: center">




                                            <i class="fa-solid base-color fa-car"></i><br>
                                            <span>Transfer</span>
                                            {{--                                            <img class="icons1" src="{{asset("/images/quote_images/Group 3808.png")}}" alt="">--}}
                                        </div>
                                        <div class="col-lg-11"  style="padding:0.5rem">

                                            <div >
                                                <ul class="features">
                                                    @foreach ($data_array as $key => $value)
                                                        @foreach ($value as $sights => $scenes)
                                                            @if(strpos(json_encode($scenes['categories']), "87"))
                                                                <div class="mt-2">

                                                                    <li><h6>{{$scenes['title']}}</h6></li>
                                                                </div>
                                                            @endif
                                                        @endforeach
                                                    @endforeach

                                                </ul>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>



                        </div>
                    </div>


                    {{--Activities Section--}}
                    <div class="row" style="padding:0.5rem;margin-top:2rem;background-color: #fff;">
                        <div class="col-lg-12">
                            <div class="row" >
                                <div class="col-lg-12" style="padding:1rem 0;">
                                    <div class="row">
                                        <div class="col-lg-1 col-3 icon" style="padding:0.5rem;text-align: center">
                                            <i class="fa-solid base-color fa-umbrella-beach"></i><br>
                                            <span>Activities</span>
                                            {{--                                            <img class="icons1" src="{{asset("/images/quote_images/Group 3807.png")}}"  alt="">--}}
                                        </div>
                                        <div class="col-lg-11"  style="padding:0.5rem">

                                            <div >
                                                <ul class="features">
                                                    @foreach ($data_array as $key => $value)
                                                        @foreach ($value as $sights => $scenes)
                                                            @if(!strpos(json_encode($scenes['categories']), "87") && $scenes['title']!='Day at Leisure')
                                                                <div class="mt-2">

                                                                    <li><h6>{{$scenes['title']}}</h6></li>
                                                                </div>
                                                            @endif
                                                        @endforeach
                                                    @endforeach

                                                </ul>

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
    </section>
    <section class="Price-Detail">
        <ul class="Headings">
            <li>
                <h3>Price Detail</h3>
            </li>
        </ul>
        <div class="container">


            <div class=" mb-5" >
                <div class="" style="margin-top:2rem;">

                    @foreach(json_decode($query['tour_cost'],true) as $costing)
                        <div class="row" style="padding:1rem;background:#fff;">
                            <div class="col-6" style="text-align: center;padding:1rem;border: 1px solid #e5dfdf;background: #f3f3f3">

                                <h6>{{$costing['type']}}</h6>


                            </div>
                            <div class="col-6" style="text-align: center;padding:1rem;border: 1px solid #e5dfdf;background: #f3f3f3">

                                <h6>{{$costing['cost']}}</h6>


                            </div>
                        </div>
                    @endforeach



                </div>


                {{--                        <table class="table table-bordered" style="margin-top:2rem;background-color: #fff;">--}}
                {{--                            <thead>--}}
                {{--                            <tr>--}}
                {{--                                @foreach(json_decode($query['tour_cost'],true) as $costing)--}}
                {{--                                    <th><p>{{$costing['type']}}</p></th>--}}
                {{--                                @endforeach--}}
                {{--                            </tr>--}}
                {{--                            </thead>--}}
                {{--                            <tbody>--}}
                {{--                            <tr>--}}
                {{--                                @foreach(json_decode($query['tour_cost'],true) as $costing)--}}

                {{--                                    <td><h2>{{$costing['cost']}}</h2></td>--}}
                {{--                                @endforeach--}}


                {{--                            </tr>--}}

                {{--                            </tbody>--}}
                {{--                        </table>--}}

                {{--                        <div style="text-align:justify">--}}
                {{--                            <h5>NOTE:</h5>--}}
                {{--                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, totam.</span>--}}
                {{--                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, totam.</span>--}}
                {{--                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, totam.</span>--}}



                {{--                        </div>--}}





            </div>


        </div>
    </section>
    <section class="Day_plan">
        <div class="container">
            <ul class="Headings">
                <li>
                    <h3>Day Plan</h3>
                </li>
            </ul>

        <nav class="navScroll BtnScroll buttonScroll" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
            <div class="container">
                <ul style="margin-top: 0.5rem;padding:0;margin-bottom: 0;">
                    <?php $dayflag=1; ?>
                    @foreach($data_array as $key => $value)
                        <li
                            class="{{'day'.$dayflag}} active">
                            <a
                                href="{{'#day'.$dayflag}}"
                            >
                                Day {{$dayflag}}
                            </a>
                        </li>
{{--                        <li class="home active"><a href="#home">Home</a></li>--}}
                            <?php $dayflag++; ?>
                    @endforeach

                </ul>
            </div>
        </nav>

            <?php $dayflag=1; ?>


                @foreach($data_array as $key => $value)

                      <section  class="section" id="{{'day'.$dayflag}}">
            <ul  class="nav nav-pills mb-3 buttonScroll" style="margin-top: 2.5rem !important;" >
                <li class="nav-item" role="presentation">
                    <button class="nav-link active DayBtn">Day {{$dayflag}} <br> {{ date( 'd-M' , strtotime($key)) }}</button>
                </li>
            </ul>

            <div class="row" style="padding:0.5rem;">
                <div class="col-lg-12">
                    @if ($meals_arr[$dayflag-1]['meals'] != '' || $meals_arr[$dayflag-1]['meals'] != null)
                        <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-3 text-secondary" style="padding:1.5rem 0;text-align: center;font-weight: 500;">Meal Plan</div>
                                <div class="col-9" style="padding:0.5rem">

                                    <div class="col-lg-6 col-12" style="border-radius:10px;background:#f3f3f3;display: flex;justify-content: space-between;">
                                        <div style="padding:0.5rem;text-align:center">


                                            <p class="icon" style="text-align: center">
                                                <i class="fa-solid fa-mug-saucer {{$meals_arr[$dayflag-1]['meals']['bf'] == true?'base-color':''}} "></i><br>
                                                <span>Breakfast</span>





                                            </p>
                                        </div>
                                        <div style="padding:0.5rem;text-align:center">


                                            <p class="icon">
                                                <i class="fa-solid fa-bowl-food {{$meals_arr[$dayflag-1]['meals']['l'] == true?'base-color':''}}"></i><br>
                                                <span>Lunch</span>




                                            </p>
                                        </div>
                                        <div style="padding:0.5rem;text-align:center">


                                            <p class="icon">
                                                <i class="fa-solid fa-utensils {{$meals_arr[$dayflag-1]['meals']['d'] == true?'base-color':''}}"></i><br>
                                                <span>Dinner</span>




                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    @endif

                <?php
                $sight_scenes = 0;
                ?>
                {{--Day Plan--}}
                @foreach ($value as $sights => $scenes)
                    <?php

                    $sight_scenes++;

                    ?>
                    @if($scenes['title'] !== "" )
                        <div class="row">

                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-12" style="padding:0.8rem  0.5rem;text-align: center;">
                                    <i style="font-size:30px;color: #b7b7b7;" class="fa-solid base-color fa-umbrella-beach {{strpos(json_encode($scenes['categories']), "87")?'fa-car':'fa-umbrella-beach'}}">

                                    </i>

                                    <br><span class="text-secondary" style="font-weight: 500;">

                      {{strpos(json_encode($scenes['categories']), "87")?'Transfer':'Activities '. $sight_scenes}}

                    </span>
                                </div>
                                <div class="col-lg-9 col-md-9 col-12" style="padding:0.5rem">

                                    <div class="col-lg-12 col-12 conSec" >
                                        <div style="padding:0.5rem;text-align:center">
                                            <?php
                                            $url2=$scenes['image'];

                                            if($url2==''){
                                                if($scenes['title']=='Day at Leisure'){
                                                    $url2=asset("/images/quote_images/dayatleisure.png");
                                                }
                                                elseif(strpos(json_encode($scenes['categories']), "87")){
                                                    $url2=asset("/images/quote_images/transfer.png");
                                                }
                                                else{
                                                    $url2=asset("/images/quote_images/sightseeing.png");
                                                }
                                            }

                                            ?>

                                                <img
                                                    style="border-radius: 50%;width:80px;height:80px"
                                                    src="{{$url2}}"

                                                >


                                        </div>
                                        <div style="padding:0.5rem;text-align: justify;">
                                            <h6>{{$scenes['title']}}</h6>

                                            <p class="show-read-more">
                                                <?php echo $scenes['desc'] ?>
                                            </p>


                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    @endif

                @endforeach










                </div>
            </div>

        </section>

                <?php $dayflag++; ?>

            @endforeach



        </div>
    </section>

    <section class="inclosure" >
        <ul class="Headings">
            <li>
                <h3>Inclusion/Exclusion</h3>
            </li>
        </ul>
        <div class="container" >

            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 sec-style">
                        <div class="col-12" style="padding:1rem;background:rgb(244, 244, 244)">
                        <h5 class="mb-2">Inclusion</h5>
                        <?php


                        $inclusion=fetch_meta_data($query->id,'meta_incl_ex','query');
                        if($inclusion){

                            print_r(data_replace_in_mail_formats($inclusion,$values));
                        }

                        ?>
                        </div>
                    </div>


                    <div class="col-lg-6 sec-style">
                        <div class="col-12" style="padding:1rem;background:rgb(244, 244, 244)">
                        <h5 class="mb-2">Exclusion</h5>

                        <?php
                        $exclusion=fetch_meta_data($query->id,'meta_exclusion','query');
                        if($exclusion){

                            print_r(data_replace_in_mail_formats($exclusion,$values));
                        }

                        ?>
                        </div>
                    </div>

                    <div class="col-lg-12 sec-style">
                        <div class="col-12" style="padding:1rem;background:rgb(244, 244, 244)">
                        <h5 class="mb-2">Terms & Conditions</h5>
                        <?php
                        $tnc=fetch_meta_data($query->id,'meta_closuer','query');
                        if($tnc){
                            print_r(data_replace_in_mail_formats($tnc,$values));
                        }

                        ?>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section style="padding:2rem;text-align: center;">
        @if($previewBtn)
            <button
                onclick="openpdf()"
                class="btn btn-danger Pdf-download"
                type="button">
                <i style="font-size: 30px;"  class="fa-regular fa-file-pdf"></i> Download
            </button>
        @endif
    </section>

</div>
<section class="footer" style="width:100%;background-color: #fff;">
    @if($previewBtn)
    <div>
        <div class="">
            <div class="row">
                <div class="col-lg-4 col-12" style="padding:0;" ><button style="width:100%;border-radius: 0px;" type="button" class="btn btn-success" data-toggle="modal" data-target="#whatsappModalCenter" type="button">Whatsapp</button></div>

                <div class="col-lg-4 col-12" style="padding:0;"  ><button style="width:100%;border-radius: 0px;"  data-toggle="modal" data-target="#exampleModalCenter" type="button" class="btn btn-outline-primary">Request for Change</button></div>
                <div class="col-lg-4 col-12" style="padding:0;" ><button style="width:100%;border-radius: 0px;" type="button" class="btn btn-secondary"   data-toggle="modal" data-target="#bookModalCenter" >Book Now</button></div>
            </div>
        </div>
    </div>
    @endif
    <div class="Address" style="padding:1rem;text-align:center;background-color: black;">

        @if($agent->address != null || $agent->address != '')
            <?php echo $agent->address; ?>>
        @else
            <?php echo $agency->address; ?>
        @endif


    </div>

</section>


<!-- remark Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Remark</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="background:#fff;border:none;">
                    <span aria-hidden="true" style="font-size:28px;">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <textarea style="width:100%;height:200px;" placeholder="Enter Remark" id="requestForm" required ></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="hidee">Close</button>
                <button type="button" class="btn btn-success" onclick="shareRemark(1)" >Share</button>
            </div>
        </div>
    </div>
</div>

<!--whatsapp remark Modal -->
<div class="modal fade" id="whatsappModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Whatsapp Remark</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="background:#fff;border:none;">
                    <span aria-hidden="true" style="font-size:28px;">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <textarea style="width:100%;height:200px;" placeholder="Enter Remark" id="requestFormwhatsapp" required ></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="hidee2">Close</button>
                <button type="button" class="btn btn-success" onclick="whatsappRemark()" >Share</button>
            </div>
        </div>
    </div>
</div>


<!--book now Modal -->
<div class="modal fade" id="bookModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Select Your Hotel Prefrences <i class="fa-solid base-color fa-hotel"></i></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="background:#fff;border:none;">
                    <span aria-hidden="true" style="font-size:28px;">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                @foreach(json_decode($query->tour_location, true) as $locs)

                    <h6 class="mb-2  {{$loop->first?'':'mt-3'}}">Choose Hotel for {{$locs['name']}} :</h6>
                    <select id="{{$locs['id']}}" class="form-select" name="{{$locs['id']}}" aria-label="{{$locs['name']}}">
                        <option selected>Choose Hotel</option>
                        <option value="{{$locs['hotel']['hotel_data']!=''?$locs['hotel']['hotel_data']['title']:'Hotel Not Added'}}">
                            {{$locs['hotel']['hotel_data']!=''?$locs['hotel']['hotel_data']['title']:'Hotel Not Added'}}
                        </option>
                        <option value="{{$locs['hotel2']['hotel_data']!=''?$locs['hotel2']['hotel_data']['title']:'Hotel Not Added'}}">
                            {{$locs['hotel2']['hotel_data']!=''?$locs['hotel2']['hotel_data']['title']:'Hotel Not Added'}}
                        </option>

                    </select>


                @endforeach


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="hidee3">Close</button>
                <button type="button" class="btn btn-success"  onclick="hotelRemark()" >Book Now</button>
            </div>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" ></script>
{{--<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>--}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/1.1.6/waypoints.min.js"></script>


<script>
    $(document).ready(function(){
        var maxLength = 250;
        $(".show-read-more").each(function(){

            var myStr = $(this).text().trim();
            if($.trim(myStr).length > maxLength){

                var newStr = myStr.substring(0, maxLength);
                var removedStr = myStr.substring(maxLength, $.trim(myStr).length);



                $(this).empty().html(newStr);
                $(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
                $(this).append('<span class="more-text">' + removedStr + '</span>');
            }
        });
        $(".read-more").click(function(){
            $(this).siblings(".more-text").contents().unwrap();
            $(this).remove();
        });

    });
</script>
<style>
    .show-read-more .more-text{
        display: none;
    }
</style>
<script>
    $('#Overview').waypoint(function() {

        $(".scroll_up").addClass("visible");
    }, { offset: 100 });
    $('#head-baner').waypoint(function() {

        $(".scroll_up").removeClass("visible");
    }, { offset: 30 });
</script>
<script>


    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("bnr").style.height = "100px";
        } else {
            document.getElementById("bnr").style.height = "400px";
        }
    }

    function shareRemark(loc){
        if(loc==1){
            let data= document.getElementById('requestForm').value;

            if(data==''){
                alert('Please Fill Your Request');
                document.getElementById('requestForm').style.border = "1px solid #FF0000";
                return false;
            }
            else{
                let form = new FormData();
                form.set("loc",loc );
                form.set("remark",data );
                form.set("queryid",<?php echo $query->id ?>);
                axios.post('/api/webservices/V2/addRemark',form)
                    .then(response => {

                        if(response.data.status){
                            document.getElementById('requestForm').value='';
                            document.getElementById("hidee").click();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })

            }
        }
        else{
            let form = new FormData();
            form.set("loc",loc );
            form.set("remark",'BookConfirmation');
            form.set("queryid",<?php echo $query->id ?>);
            axios.post('/api/webservices/V2/addRemark',form)
                .then(response => {
                    $('.alert').show()
                    setTimeout(function() {
                        $(".alert").alert('close');
                    }, 2000);
                })
                .catch(error => {
                    console.log(error);
                })
        }


    }

    function whatsappRemark(){
        let data= document.getElementById('requestFormwhatsapp').value;

        if(data==''){
            alert('Please Fill Your Request');
            document.getElementById('requestFormwhatsapp').style.border = "1px solid #FF0000";
            return false;
        }
        else{


            let phone=<?php echo str_replace(' ','',trim(get_agent_number_by_agent($query->agent_id),'+')) ?>;

            let link='https://wa.me/'+phone+'?';

            let text='text=<?php echo $query->booking_id ?>%0A<?php echo $itilocs ?>%0A<?php echo $pageurl ?>%0A----------------------------%0A%0A*Remark* : '+data+'';

            window.open(link+text.split(' ').join('%20'),"_blank");

            document.getElementById('requestFormwhatsapp').value='';

            document.getElementById("hidee2").click();


        }
    }

    function hotelRemark(){

        let data=<?php echo $query->tour_location ?>;
        let remark='';
        let flag=true;
        data.forEach((json)=>{
            if(document.getElementById(json.id).value=='Choose Hotel'){
                flag=false;
            }
            remark=remark!=''?
                remark+' || '+'Selected Hotel for :'+json.name+' '+document.getElementById(json.id).value:
                'Selected Hotel for :'+json.name+' '+document.getElementById(json.id).value;


        })

        if(flag==false){
            alert('Please select all Hotel for all Locations');

            return false;
        }
        else{
            let form = new FormData();
            form.set("loc",3 );
            form.set("remark",remark );
            form.set("queryid",<?php echo $query->id ?>);
            axios.post('/api/webservices/V2/addRemark',form)
                .then(response => {

                    if(response.data.status){

                        document.getElementById("hidee3").click();
                        $('.alert').show()
                        setTimeout(function() {
                            $(".alert").alert('close');
                        }, 2000);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }


    }

    function openpdf() {
        alert("PDF will open in next tab,Click OK");

        axios.post('/api/webservices/pdfmakernew',{
            'url':'<?php echo $pdfurl ?>',

        }).then(response=>{
            window.open(response.data,"_blank");
        })

    }


</script>
<script>

    const sections = document.querySelectorAll(".section");
    const navLi = document.querySelectorAll(".navScroll .container ul li");
    window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop -60) {
                current = section.getAttribute("id"); }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        });
    };
    function topScr(){

        $('html, body').animate({
            scrollTop: $("#head").offset().top-65
        }, 1000);
        return false;

    }

</script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.min.js" integrity="sha512-0qU9M9jfqPw6FKkPafM3gy2CBAvUWnYVOfNPDYKVuRTel1PrciTj+a9P3loJB+j0QmN2Y0JYQmkBBS8W+mbezg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>

</html>
