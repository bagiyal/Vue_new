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
    <title>{{$title}}</title>

    <style>
        body{
            width:100%;


            margin:0;
            background: rgb(243, 243, 243);
            box-sizing: border-box;
        }

        header{
            width: 100%;



            overflow: hidden;
        }


        .Top-head{
            position: absolute;
            height:100px;
            width:100%;
            background: rgba(255, 255, 255, 0.907);

        }

        .logo{
            width:20%;
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
            margin-top:2rem;
            background-color: #fff;
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
        @media (max-width:991px){
            body{
                margin:0;



            }
        }

        @media (max-width:550px){

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
                width:80px;

            }
            .nav-link{
                font-size: 13px;

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


            bottom: 0;
            width: 100%;
            background-color: red;
            color: white;
            text-align: center;

        }
        .sec-style{
            background:#FFF;margin-top:1rem;padding:1.5rem;line-height:26px;border-radius: 26px;text-align: justify;
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
            margin-top: 2rem;
        }

        .flightImg > p > img{
            height: 240px !important;
            width: 90% !important;
            margin-left: 5% !important;
            padding: 0px !important;
            float: none !important;


        }
        .flightImg  > img{
            height: 240px !important;
            width: 90% !important;
            margin-left: 5% !important;
            padding: 0px !important;
            float: none !important;


        }
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

    </style>
</head>



<body>

<link itemprop="thumbnailUrl" href="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}">

<span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject">
<link itemprop="url" href="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}">
</span>

<div class="m-4" style="position: fixed;top: 0px;z-index: 9999;right: 0px;">
    <!-- Success Alert -->
    <div class="alert alert-success alert-dismissible fade ">
        <strong>Success!</strong> Your message has been sent successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
</div>

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




<header>
    <nav class="Top-head">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12" style="text-align: center;"><img class="logo" src="{{$logo}}"></div>

                    </div>
                </div>

            </div>
        </div>


    </nav>
    <section id="head-baner">
        <img id="bnr" src="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}">

    </section>
    <section class="for-mob" >
        <div class="container-fluid" >
            <div class="row">
                <div class="" style="background:rgb(244, 244, 244)">
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
                <div class="col-12" style="background:#fff;" >
                    <div class="row">
                        <div class="col-4 text-styleM" style="border-right: 1px solid #e5e5e5;">
                            <p>Travel Date</p>
                            <h6>{{ date("d M Y", strtotime($query->driver_pickup_date_time))}}</h6>
                        </div>
                        <div class="col-4 text-styleM" style="border-right: 1px solid #e5e5e5;">
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
</header>
<div class="main-sec container-fluid" style="width:100%;position:relative;">

    <section class="body-1 container-fluid">
        <div class="container-fluid">
            <div class="row">
                <div class="col-7">
                    <div class="box1">
                        <p class="mb-0"><?php echo data_replace_in_mail_formats( fetch_meta_data($query->id,'meta_welcome_mail','query') ,$values) ?> </p>


                    </div>
                </div>
                <div class="col-5">
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
    <section class="body-2" style="background-color:rgb(243, 243, 243)">
        <div class="container-fluid">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Over View</button>
                </li>

            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                    {{--Hotel Section--}}
                    @foreach(json_decode($query->tour_location, true) as $locs)
                        <div class="row" style="padding:0.5rem;background-color: #fff;">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-5" style="padding:1rem 0;">
                                        <div class="row">
                                            <div class="col-2 icon" style="text-align: center !important">


                                                <i class="fa-solid base-color fa-hotel"></i><br>
                                                <span>Hotel</span>

                                            </div>
                                            <div class="col-2"></div>
                                            <div class="col-8">
                                                <h6>{{$locs['name'] }}</h6>
                                                <p>IN-{{$locs['date_from']}} | OUT-{{$locs['date_to']}}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-7" style="padding:1rem 0;">
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

                                <div class="container-fluid" style="margin-top:1rem">
                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-4">
                                            <div class="row">
                                                <div class="col-5 text-center">
                                                    <?php
                                                    $url='';
                                                    if($locs['hotel']['hotel_data']!=''){
                                                        $hotel_data=\App\Accommodation::where('id',$locs['hotel']['hotel_data']['id'])->first();
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
                                                <div class="col-7" style="padding:0.5rem">
                                                    <h6>{{$locs['hotel']['hotel_data']!=''?$locs['hotel']['hotel_data']['title']:'Hotel Not Selected'}}</h6>
                                                    <h6>Room:  <span>{{$locs['hotel']['roomtype']}}</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2" style="padding:1rem;text-align: center;"><h4>OR</h4></div>
                                        <div class="col-4">
                                            <div class="row">
                                                <div class="col-5 text-center">
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
                                                <div class="col-7" style="padding:0.5rem">
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
                            <div class="col-12">
                                <div class="row" >
                                    <div class="col-12" style="padding:1rem 0;">
                                        <div class="row">
                                            <div class="col-lg-1 col-2 icon" style="padding:0.5rem;text-align: center">
                                                <i class="fa-solid base-color fa-ticket"></i><br>
                                                <span>Ticket</span>



                                            </div>
                                            <div class="col-10"  style="padding:0.5rem">

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
                        <div class="col-12">
                            <div class="row" >
                                <div class="col-12" style="padding:1rem 0;">
                                    <div class="row">
                                        <div class="col-lg-1 col-3 icon" style="padding:0.5rem;text-align: center">




                                            <i class="fa-solid base-color fa-car"></i><br>
                                            <span>Transpoart</span>

                                        </div>
                                        <div class="col-11"  style="padding:0.5rem">

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
                        <div class="col-12">
                            <div class="row" >
                                <div class="col-12" style="padding:1rem 0;">
                                    <div class="row">
                                        <div class="col-lg-1 col-3 icon" style="padding:0.5rem;text-align: center">
                                            <i class="fa-solid base-color fa-umbrella-beach"></i><br>
                                            <span>Activities</span>

                                        </div>
                                        <div class="col-11"  style="padding:0.5rem">

                                            <div >
                                                <ul class="features">
                                                    @foreach ($data_array as $key => $value)
                                                        @foreach ($value as $sights => $scenes)
                                                            @if(!strpos(json_encode($scenes['categories']), "87"))
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
        <div class="container-fluid" style="margin-top:2rem;">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Day Plan</button>
                </li>

            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">



                    <div class="tab-content" id="myTabContent">
                        <?php $dayflag = 1; ?>
                        @foreach ($data_array as $key => $value)


                            <div class="container-fluid "  >

                                <div class="row" style="padding:0.5rem;">
                                    <div class="col-12">

                                        <button type="button" class="btn text-white" style="background: {{$color}} !important;">
                                            <p class="text-white " >{{ date( 'd-M' , strtotime($key)) }}</p>

                                            Day {{$dayflag}}
                                        </button>
                                        @if ($meals_arr[$dayflag-1]['meals'] != '' || $meals_arr[$dayflag-1]['meals'] != null)
                                            <div class="row" >
                                                <div class="col-12" style="margin-top: 2rem;">
                                                    <div class="row">
                                                        <div class="col-3 base-color"  style="padding:1.5rem 0;text-align: center;font-weight: 500;">Meal Plan</div>
                                                        <div class="col-9"  style="padding:0.5rem">

                                                            <div class="col-lg-6 col-12" style="border-radius:10px;background-color:#fff;display: flex;justify-content: space-between;">
                                                                <div style="padding:0.5rem;text-align:center">


                                                                    <p class="icon" style="text-align: center">
                                                                        <i class="fa-solid fa-mug-saucer {{$meals_arr[$dayflag-1]['meals']['bf'] == true?'base-color':''}}"></i><br>
                                                                        <span >Breakfast</span>


                                                                    </p>
                                                                </div>
                                                                <div style="padding:0.5rem;text-align:center">


                                                                    <p class="icon">
                                                                        <i class="fa-solid fa-bowl-food {{$meals_arr[$dayflag-1]['meals']['l'] == true?'base-color':''}}"></i><br>
                                                                        <span >Lunch</span>

                                                                    </p>
                                                                </div>
                                                                <div style="padding:0.5rem;text-align:center">


                                                                    <p class="icon">
                                                                        <i class="fa-solid fa-utensils {{$meals_arr[$dayflag-1]['meals']['d'] == true?'base-color':''}}"></i><br>
                                                                        <span >Dinner</span>

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
                                                <div class="row" >

                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-3" style="padding:0.8rem  0.5rem;text-align: center;">
                                                                <i
                                                                    style="font-size:30px;color: #b7b7b7;"
                                                                    class="fa-solid base-color {{strpos(json_encode($scenes['categories']), "87")?'fa-car':'fa-umbrella-beach'}}"
                                                                >

                                                                </i>

                                                                <br><span class="base-color" style="font-weight: 500;">

                                                  {{strpos(json_encode($scenes['categories']), "87")?'Transfer':'Activities '. $sight_scenes}}

                                                </span>
                                                            </div>
                                                            <div class="col-9"  style="padding:0.5rem">

                                                                <div class="col-12 col-12" style="border-radius:10px;background-color:#fff;display: flex;">
                                                                    <div style="padding:0.5rem;text-align:center">
                                                                        <?php
                                                                         $url=$scenes['image'];

//                                                                        print_r($scenes['image']);

                                                                        if($url==''){
                                                                            if($scenes['title']=='Day at Leisure'){
                                                                                $url=asset("/images/quote_images/dayatleisure.png");
                                                                            }
                                                                            elseif(strpos(json_encode($scenes['categories']), "87")){
                                                                                $url=asset("/images/quote_images/transfer.png");
                                                                            }
                                                                            else{
                                                                                $url=asset("/images/quote_images/sightseeing.png");
                                                                            }
                                                                        }

                                                                        ?>
                                                                        <img
                                                                            style="border-radius: 50%;width:80px;height:80px"
                                                                            src="{{$url}}"

                                                                        >


                                                                    </div>
                                                                    <div style="padding:0.5rem;text-align: justify">
                                                                        <h6>{{$scenes['title']}}</h6>

                                                                        <p >
                                                                            <?php echo $scenes['desc'] ?>
                                                                        </p>


                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>


                                            @else

                                            @endif



                                        @endforeach

                                    </div>
                                </div>

                            </div>
                            <?php $dayflag++; ?>
                        @endforeach



                    </div>


                </div>
            </div>
        </div>
        <div class="container-fluid" style="margin-top:2rem;">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Price Detail</button>
                </li>

            </ul>
            <div class="tab-content" id="pills-tabContent">

                <div class="container-fluid" style="    overflow-y: scroll;">


                    <table class="table table-bordered" style="margin-top:2rem;background-color: #fff;">
                        <thead>
                        <tr>
                            @foreach(json_decode($query['tour_cost'],true) as $costing)
                                <th><p>{{$costing['type']}}</p></th>
                            @endforeach
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            @foreach(json_decode($query['tour_cost'],true) as $costing)

                                <td><h2>{{$costing['cost']}}</h2></td>
                            @endforeach


                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>
        </div>
        <div class="container-fluid" style="margin-top:2rem;">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Inclusion/Exclusion </button>
                </li>

            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 sec-style">
                                <h5 class="mb-2">Inclusion</h5>
                                <?php
                                    $inclusion=fetch_meta_data($query->id,'meta_incl_ex','query');
                                    if($inclusion){
                                        print_r(data_replace_in_mail_formats($inclusion,$values));
                                    }
                                ?>

                            </div>


                            <div class="col-12 sec-style">
                                <h5 class="mb-2">Exclusion</h5>

                                <?php
                                $exclusion=fetch_meta_data($query->id,'meta_exclusion','query');
                                if($exclusion){

                                    print_r(data_replace_in_mail_formats($exclusion,$values));
                                }

                                ?>
                            </div>
                            <div class="col-12 sec-style">
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
        </div>

    </section>

</div>
<section class="footer" style="width:100%;background-color: #fff;">

    <div style="padding:1rem;text-align:center;background-color: black;">

        @if($agent->address != null || $agent->address != '')
            <?php echo $agent->address; ?>>
        @else
            <?php echo $agency->address; ?>
        @endif


    </div>

</section>




<script>


    window.onscroll = function() {scrollFunction()};



</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.min.js" integrity="sha512-0qU9M9jfqPw6FKkPafM3gy2CBAvUWnYVOfNPDYKVuRTel1PrciTj+a9P3loJB+j0QmN2Y0JYQmkBBS8W+mbezg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>

</html>
