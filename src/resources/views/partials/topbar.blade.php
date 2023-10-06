
@if(Auth::user()->role[0]->title=='subscriber')
<header class="pt-3 pl-3 pr-3 pb-1" style="background:rgb(139 139 139);font-family:'Open Sans !important;">

@else<header class="pt-3 pl-3 pr-3 pb-1" style="background-image:url({{asset("uploads/dashboard_resources/ItenararyBackground.png")}});font-family:'Open Sans !important">   @endif
    <!-- Logo -->
    {{--    user side-----------}}
    @if(Auth::user()->role[0]->title=='subscriber')
        <div class="row mb-3" >
            {{get_topbar_with_details(Auth::User()->id)}}
            <div class="col-md-5"></div>
            <div class="col-lg-3  text-right text-white pr-5">
                <div class="offset-9 text-center border_left pl-3 logoutbtn">

                    <img id="ImgClick" onclick="myFunction()"  src="{{asset("images/test_image.jpg")}}" class="h-35 cursor" style="border-radius: 50%">

                </div>


                <div class="card"  id="myDIV" style="text-align:center;width: 30rem;position:absolute;z-index:999999;right: 10px;top:40px;border-radius: 2rem;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;display: none;" >
                    <img style=" width: 100px; height: 100px;border-radius: 50%;margin: 3rem auto 0px; border: 1px solid #e3e3e3;box-shadow: 3px 4px #888;" src="{{asset("images/test_image.jpg")}}" alt="Card image cap">
                    <span style="position: absolute; top: 96px;right: 91px;padding: 8px;border-radius: 50%;background: #fff;"><i style="color:black;font-size: 16px;" id="uploadImage" class="fa fa-camera cursor" aria-hidden="true"></i></span>
                    <div class="card-body">
                        <h2 class="card-title" style="color:black;font-family:'Open Sans !important">Me : {{Auth::user()->name}}</h2>
                        <h5 class="text-muted">{{Auth::user()->email}}</h5>
                        <h5 class="text-muted">{{Auth::user()->phone}}</h5>
                        <hr>
                        <div style="display:flex;" style="margin-top: 1rem;font-family:'Open Sans !important">
                            <div style="width:50%;">
                                <div style="width:100%;text-align: center;padding:0.3rem;color:black;"><h4><img data-v-75f1b808="" src="/images/cake.png?692240a2c407f584f09a09507c975a5a" style="width: 17px; height: 17px;font-family:'Open Sans !important"> Birthday</h4></div>
                                <div style="width:100%;padding:0.3rem;text-align: center;color:black"><p>{{gettrav_data(Auth::user()->phone,'meta_dob')}}</p></div>

                            </div>
                            <div style="width:50%;">
                                <div style="width:100%;text-align: center;padding:0.3rem;color:black;"><h4><img data-v-75f1b808="" src="/images/anniversary.png?2b221dbe3974937c656aa8a198c49cf9" style="width: 17px; height: 18px;font-family:'Open Sans !important"> Anniversary</h4></div>
                                <div style="width:100%;padding:0.3rem;text-align: center;color:black;"><p>{{gettrav_data(Auth::user()->phone,'meta_anniversary')}}</p></div>

                            </div>
                        </div>


                        <a  href="#logout" onclick="$('#logout').submit();" class="btn btn-primary btn-lg cursor" >Log Out</a>
                    </div>
                </div>
            </div>
        </div>

        {{--   clint side-----------}}
    @else
        <div class="row" >
            {{get_topbar_with_details(Auth::User()->id)}}
            <div class="col-md-5"></div>
            <div class="col-lg-3  text-right text-white pr-5">
                <div class="offset-9 text-center border_left pl-3 logoutbtn">
                    <a href="#logout" onclick="$('#logout').submit();">
                        <img src="{{asset("uploads/dashboard_resources/logout.png")}}" class="h-35">
                        <p class="text-white f-1-4 fw-3">@lang('quickadmin.qa_logout')</p>
                    </a>
                </div>
                <p class="f-2 fw-3 p_r-3" >  Me : {{Auth::user()->name}}</p>
            </div>
        </div>
    @endif


</header>


<script type="application/javascript">
    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    window.onclick = function(event) {

        // if (event.target.id != "ImgClick" || event.target.class != "myDIV" ) {
        //     $("#myDIV").hide();
        // }
    }




</script>

