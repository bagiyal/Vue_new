<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/2209fac208.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Booking</title>

    <style>
        body{
            width:100%;


            margin:0;
            background: rgb(243, 243, 243);
            box-sizing: border-box;
        }

        header{
            width: 100%;

            top: 0;
            z-index:999;
            overflow: hidden;

        }


        .Top-head{
            position: absolute;
            background-color: rgb(255 255 255 / 47%);

            width:100%;


        }

        .nav-link.active {
            color: #fff !important;
            background-color: {{$color}} !important;
            border-color: #fff !important;
        }
        .nav-link {
            color: {{$color}};
        }

        .logo{
            width:40%;
            height:100px;

        }
        .fa-file-arrow-down{
            font-size: 25px;
            color: {{$color}};
            cursor: pointer !important;
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
            transition: 0.9s;

        }
        @media (max-width:991px){
            body{
                margin:0;



            }
        }
        @media (max-width:550px){
            .nav-tabs .nav-link {
                margin-bottom: -1px;
                background: 0 0;
                border: 1px solid transparent;
                border-top-left-radius: 0.25rem;
                border-top-right-radius: 0.25rem;
                height: 80px;
                width: 110px;
            }
            .downl {
                width: 49% !important;
            }
            .imgHotel{
                height: 151px !important;
            }
            .imgContainer{
                padding:0;

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
            .main-sec {

            }
            .box1{
                padding :2rem 1rem
                1rem;
                text-align: justify;
            }
            .nav-item button{
                width:90px;

            }

        }
        .features li{
            list-style: none;

        }

        .footer {





            color: white;
            text-align: center;
            overflow: hidden;
        }
        .sec-style{
            background:#FFF;margin-top:1rem;padding:1.5rem;line-height:26px;border-radius: 26px;text-align: justify;
        }
        th,td{
            text-align: center;
        }
        .icon i {
            font-size: 30px;
        }
        .body-2{
            padding-top: 1rem;

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
        .logoshow{
            width:100%;


        }
        .logosec{
            position: fixed;
            left: 0;
            top: 279px;
            width: 50px;
            z-index: 999;
        }
        .features{
            padding:0;
        }
        .features li{
            margin-top: 0.5rem;
            padding: 1rem;
            background-color: #fff;
        }
        .Pdf-download {
            width: 100px;
            border-top-left-radius: 36px;
            position: fixed;
            right: 0px;
            bottom: 32rem;
            z-index: 9999;
        }
        .footerAdd p{
            color:black;

        }
        .imgHotel{
            width:100%;height: 116px;border-radius:5px;
        }
        tr td{
            text-align: left;
        }

        .base-color{
            color: {{$color}} !important;
        }
        .downl{
            width:30%;
        }


    </style>
</head>
<body>

<?php
$api_place = 'AIzaSyBrL_XvVtbYTBCniSobHj1xn-lDpXrrmF4';
$dayitinerary = json_decode($bookingData['itinerary_places'], true);
$e_bed=fetch_meta_data($id,'meta_extra_bed','book');
$cal = ((int)$bookingData['no_of_adults'] + (int)$bookingData['no_of_children']);
$c = (int)$bookingData['total_room'] * 2;
$cal = $cal - $c;
if (!$cal <= 0) {

    $calL = $cal - $e_bed;
    if ($calL <= 0) {
        $childnoextrabed = 0;
    } else {
        $childnoextrabed = $calL;
    }
}
else {
    $childnoextrabed = 0;
}
$data_array = array();
$firstdayflag = 0;
$l = 1;
$primarymemDocs=\App\Documents::where('bookId',$id)

    ->where('status',1)
    ->where('travellerId',$bookingData['traveller_id'])
    ->get();

$banner=fetch_meta_data($id,'meta_banner','book');


function getdocName($doc){
    switch($doc){
                case $doc==2:
                    $docId='Ticket';

                    break;
                case $doc==3:
                    $docId='Insurance';

                    break;
                case $doc==4:
                    $docId='Passport';

                    break;
                case $doc==5:
                    $docId='Photo Id';

                    break;
                case $doc==6:
                    $docId='E-Vouchers';

                    break;
                case $doc==7:
                    $docId='Others';

                    break;
                default:
                     $docId='E-Visa';

            }
            return $docId;
}
function getmemberDocs($travid,$bookid){
    return \App\Documents::where('bookId',$bookid)
        ->where('status',1)
        ->where('travellerId',$travid)
        ->get();
}

?>


<header>
    <nav class="Top-head">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5">
                    <div class="row">
                        <div class="col-lg-6" style="text-align: center;"><img class="logo" src="{{$logo}}"></div>

                    </div>
                </div>
                <div class="col-lg-7" style="text-align: center;">
                    <a href="https://play.google.com/store/apps/details?id=com.travelexic_one">
                       <img class="downl" src="{{asset("/dashboard_resources/apk.png")}}">
                    </a>
                    <a href="https://apps.apple.com/us/app/travelexic/id1369759056?ls=1">
                        <img class="downl" src="{{asset("/dashboard_resources/ios.png")}}">
                    </a>


                </div>

            </div>
        </div>
    </nav>
    <section style="width:100%;">

        <img style="width:100%;height:400px;"  src="{{ $banner!=''?asset($banner):asset("/images/quote_images/banner.png")}}">
    </section>

</header>
<div class="container">
    <nav style="margin-top:2rem;">
        <div class="nav nav-tabs" id="nav-tab" role="tablist" style="text-align:center;">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Itinerary</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Documents</button>
            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Important Numbers</button>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <section class="body-2" style="background-color:rgb(243, 243, 243)">



                <div class="container">



                    <div class="row" style="padding:0.5rem;/* background-color: #fff; */">
                        <div class="col-lg-12">



                            <div class="row">
                                <div class="col-lg-1" style="padding:1rem 0;">
                                    <div class="row">
                                        <div class="col-lg-12 col-2 icon"  style="text-align: center !important">



                                            <i class="fa-solid base-color fa-hotel"></i><br>
                                            <span>Hotel</span>




                                        </div>

                                    </div>

                                </div>
                                 <div class="col-lg-11" style="padding: 1rem 0.5rem;background: #fff;">


                                     @foreach(json_decode($bookingData['tour_location'],true) as $locs)

                                        <div class="row">
                                        <div class="col-lg-4 col-12">
                                            <h6>{{$locs['name'] }}</h6>
                                            <p>IN-{{$locs['date_from']}} | OUT-{{$locs['date_to']}}</p>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-3">
                                            <p>No of Room:</p>
                                            <h6>{{$bookingData['total_room']}}</h6>

                                        </div>
                                        <div class="col-lg-2 col-md-2 col-3">
                                            <p>Extra Bed:</p>
                                            <h6>{{$e_bed}}</h6>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-3">
                                            <p>W/O Bed:</p>
                                            <h6>{{$childnoextrabed}}</h6>
                                        </div>

                                        <div class="col-lg-2 col-md-2 col-3">
                                            <p>Meal Plan:</p>
                                            <h6>{{$locs['mealplan']}}</h6>
                                        </div>
                                        <div class="container-fluid">
                                            <div class="row" style="padding:1rem 1rem;margin: 1rem;border:1px solid rgb(220, 220, 220)">

                                                <div class="col-lg-8">
                                                    <div class="row">
                                                    <?php
                                                        $url='';
                                                        if($locs['hotel']['hotel_data']!=''){
                                                            $hotel_data=\App\Accommodation::select('title','accommodation_address','contact_no')->where('id',$locs['hotel']['hotel_data']['id'])->first();
                                                            $url=$hotel_data->featured_image_link;
                                                            $hotel_address=$hotel_data->accommodation_address;

                                                        }
                                                        $url = asset('/dashboard_resources/hotel.png');   //remove before release
                                                        if($url==''){
                                                            $hotel_add = $hotel_data->title.' ,'.$hotel_data->accommodation_address.' ,'.$locs['name'];
                                                            if ($hotel_data->accommodation_address == '') {
                                                                $hotel_add =$hotel_data->title.' ,'.$locs['name'];
                                                            }


                                                            $par = ($hotel_add);
                                                            $u = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' . $par . '&inputtype=textquery&fields=photos&key=' . $api_place;
                                                            $file = file_get_contents($u);
                                                            $file_decodec = json_decode($file, true);
                                                            if($file_decodec['status']=='OK' || $file_decodec['status'] != 'ZERO_RESULTS'){
                                                                if ($file_decodec['candidates'][0] == '' || $file_decodec['candidates'][0] == null) {
                                                                    $url = asset('/dashboard_resources/hotel.png');
                                                                }
                                                                else{

                                                                    $place_ref = $file_decodec['candidates'][0]['photos'][0]['photo_reference'];
                                                                    $url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=' . $place_ref . '&key=' . $api_place;
                                                                }
                                                            }
                                                            else{
                                                                $url = asset('/dashboard_resources/hotel.png');
                                                            }



                                                        }


                                                    ?>
                                                        <div class="col-4 text-center imgContainer"><img class="imgHotel" src="{{$url}}"></div>
                                                        <div class="col-8" style="padding:0.5rem">
                                                            <h6>{{strtoupper($locs['hotel']['hotel_data']!=''?$locs['hotel']['hotel_data']['title']:'Hotel Not Selected')}}</h6>
                                                            <h6>Address:  <span>{{$locs['hotel']['hotel_data']!=''?$hotel_data->accommodation_address:''}}</span></h6>
                                                            <h6>Number: <span>{{$locs['hotel']['hotel_data']!=''?str_replace(' ','',$hotel_data->contact_no):''}}</span></h6>
                                                            <h6>Room:  <span>{{$locs['hotel']['roomtype']}}</span></h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-4">
                                                    <div class="row">

                                                        <div class="col-12" style="padding:0.5rem">
                                                            <span>Special Instruction</span>
                                                            <h6>{{$locs['specinst']}}</h6>
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
                                                     if ($days == "day-1" && $locs['id'] != json_decode($bookingData['tour_location'], true)[0]['id']) {

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
                                                            if($scenes['title']!='Day at Leisure'){
                                                             $data_array[$checkInDate2][] = array("title" => $scenes['title'], "id" => $scenes['id'],

                                                                 "image" => $image,
                                                                 "categories" => $scenes['categories'],
                                                                 "to_time" => $scenes['to_time'],
                                                                 "from_time" => $scenes['from_time'],
                                                                 "remark" => $scenes['remark'],
                                                                 "desc" => $desc

                                                             );
                                                            }

                                                     }
                                                     $l++;
                                                 }

                                             }

                                         }

                                         ?>

                                     @endforeach

                                </div>
                            </div>


                        </div>
                    </div>
                    @if(count($data_array)>0)
                     <div class="row" style="padding:0.5rem;/* background-color: #fff; */">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-1" style="padding:1rem 0;">
                                    <div class="row">
                                        <div class="col-lg-12 col-2 icon"  style="text-align: center !important">


                                            <i class="fa-solid base-color fa-umbrella-beach"></i><br>
                                            <span>Activities /Transfer</span>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-11" style="padding: 1rem 0;">
                                    <div class="row">
                                        <div style="padding-bottom:2rem;">
                                            <ul class="features">
                                                @foreach ($data_array as $key => $value)
                                                    @foreach ($value as $sights => $scenes)
                                                        @if($scenes['title']!='Day at Leisure')
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
                    @endif

                    @if($bookingData['pickup_address']!='' && $bookingData['drop_address']!='')
                        <div class="row" style="padding:0.5rem;/* background-color: #fff; */">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-1" style="padding:1rem 0;">
                                    <div class="row">
                                        <div class="col-lg-12 col-2 icon"  style="text-align: center !important">

                                            <i class="fa-solid base-color fa-car"></i><br>
                                            <span>Pickup/Drop</span>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-11" style="padding: 1rem 0;">
                                    <div class="row">
                                        <div style="padding-bottom:2rem;">
                                            <ul class="features">
                                                <li>
                                                    <h6 style="color:green">Pickup Point</h6>
                                                    <h6>{{$bookingData['pickup_address']}}</h6>
                                                </li>
                                                <li>
                                                    <h6 style="color:red">Drop Point</h6>
                                                    <h6>{{$bookingData['drop_address']}}</h6>
                                                </li>

                                            </ul>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>



                    </div>

                    @endif

                    <div class="row" style="padding:0.5rem;">

                        <div class="col-lg-1">

                        </div>

                        <div class="col-lg-11 col-12" style="margin-top:1rem;padding:0.5rem;text-align: justify;background-color: #fff;">
                            <div class="col-12" style="border:1px solid rgb(220, 220, 220);padding:1rem;" >
                            <h2 style="margin:0.5rem 0;">Terms & Condition</h2>
                           <?php
                                $values=array(
                                    'trav_name'=>$bookingData->full_name,
                                    'trav_number'=>$bookingData->phone,
                                    'agency_id'=>get_agency_id_by_agent_id($bookingData->agent_id),
                                    'agent_id'=>$bookingData->agent_id
                                );

                                print_r(data_replace_in_mail_formats(fetch_meta_data($id,'meta_incl_ex','book'),$values));

                            ?>
                            </div>

                        </div>



                    </div>

                </div>




            </section>


        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div class="row" style="padding:0.5rem;background-color: #fff;margin: 2rem 0rem;">
                <div class="accordion" id="accordionExample" style="margin-top:2rem;">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h6 class="base-color">{{count($primarymemDocs)>0?$primarymemDocs[0]->travellerName:''}} &nbsp;</h6>
                                <span> (Primary Member)</span>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <table class="table">

                                    <thead>
                                    <tr colspan="3">

                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($primarymemDocs as $p_docs)


                                        <tr >

                                            <td><b>{{getdocName($p_docs['doc'])}}</b></td>
                                            <td>
                                                @foreach(json_decode($p_docs['data'],true) as $docData)

                                                    <a class="fa-solid fa-file-arrow-down" href="{{$docData['url']}}" download></a>&nbsp;&nbsp;&nbsp;

                                                @endforeach


                                            </td>


                                        </tr>

                                     @endforeach


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    @foreach(json_decode(fetch_meta_data($id,'meta_family','book'),true) as $family)
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="{{'heading'.$family['id']}}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="{{'#collapse'.$family['id']}}" aria-expanded="false" aria-controls="{{'collapse'.$family['id']}}">
                                    <h6>{{$family['first_name']}} &nbsp;</h6>
                                    <span> {{$family['relation']!=''?($family['relation']):''}}</span>
                                </button>
                            </h2>
                            <div id="{{'collapse'.$family['id']}}" class="accordion-collapse collapse" aria-labelledby="{{'heading'.$family['id']}}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table class="table">

                                        <thead>
                                        <tr colspan="3">

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <?php $data=getmemberDocs($family['id'],$id) ?>

                                            @if(count($data)>0)

                                                @foreach($data as $p_docs)


                                                <tr >

                                                    <td><b>{{getdocName($p_docs['doc'])}}</b></td>
                                                    <td>
                                                        @foreach(json_decode($p_docs['data'],true) as $docData)

                                                            <a class="fa-solid fa-file-arrow-down" href="{{$docData['url']}}" download></a>&nbsp;&nbsp;&nbsp;

                                                        @endforeach


                                                    </td>


                                                </tr>

                                            @endforeach

                                            @else

                                                <h4 class="text-center">No Data Available</h4>

                                            @endif




                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    @endforeach


                </div>


            </div>
        </div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

            <div class="row" style="padding:0.5rem;height:40vh;margin-top: 2rem;/* background-color: #fff; */">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-2" style="padding:1rem 0;">
                            <div class="row">
                                <div class="col-lg-12 col-8 icon">



                                    <i class="fa-solid base-color fa-phone"></i><br>
                                    <span style="color:#333"><b>Important Number</b></span>




                                </div>

                            </div>
                        </div>
                        <div class="col-lg-10" style="padding: 1rem 0.5rem;">
                            <div class="row">
                                <div style="padding-bottom:2rem;">
                                    <ul class="features">
                                        <li style="background:rgb(214, 222, 235)">
                                            <h6>Driver : {{$Driver}}</h6>

                                        </li>
                                        <li style="background:rgb(214, 222, 235)">
                                            <h6>Handler : {{$number}}</h6>
                                        </li>

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


<section class="footer">

    <div class="footerAdd" style="padding:1rem;text-align:center;background-color: rgb(98 96 96 / 47%);">

        <?php
        print_r($address)
        ?>


    </div>

</section>



<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
    $(document).ready(function(){
        $(".fa-file-arrow-down").click(function(){
            $(this).css("color", "grey");
       });
    });
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>
