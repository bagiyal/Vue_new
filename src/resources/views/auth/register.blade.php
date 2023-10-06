@extends('layouts.auth')

@section('content')
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body {font-family: Arial;}

            /* Style the tab */
            .tab {
                overflow: hidden;
                border-bottom: 2px solid #ccc;
                /*background-color: #f1f1f1;*/

            }

            /* Style the buttons inside the tab */
            .tab button {
                background-color: inherit;
                float: left;
                border: none;
                outline: none;
                cursor: pointer;
                padding: 14px 16px;
                transition: 0.3s;
                font-size: 17px;
            }
            .btn-primary{
                background:  rgb(34, 80, 125) !important;
                border: 1px solid rgb(34, 80, 125) !important;
            }

            /* Change background color of buttons on hover */
            .tab button:hover {
                background-color: #ddd;
            }

            /* Create an active/current tablink class */
            .tab button.active {
                background-color: rgb(34, 80, 125);
                color: #fff;
            }

            /* Style the tab content */
            .tabcontent {
                display: none;
                padding: 6px 12px;
                /*border: 1px solid #ccc;*/
                border-top: none;
            }
        </style>
    </head>
    <body>
    <div class="row" id="background-color-all">
        <div class="col-lg-5 col-md-5">
            <img src="{{url('/dashboard_resources/login.jpg')}}" class="h-100 w-100" alt="login image">
        </div>
        <div class="col-lg-6 col-md-6 ml-6">

    <div class="tab">
        <button class="tablinks active" onclick="openCity(event, 'Full')">Full Registration</button>
        <button class="tablinks" onclick="openCity(event, 'Semi')">Semi Registration</button>

    </div>
    <div id="Full" class="tabcontent" style="display: block">
        <div class="container">

                 <form class="form-horizontal" role="form" method="POST" enctype="multipart/form-data" action="{{ url('/api/webservices/create_account') }}">
                                {{ csrf_field() }}

                                <div class="form-group">
                                    <label for="Company " class="col-md-4 control-label">Company Name</label>

                                    <div class="col-md-6">
                                        <input id="companyname" type="text" class="form-control" name="companyname" required>
                                        {{--                                    <textarea rows="4" cols="50" id="company_detail" type="text" class="form-control" name="company_detail" required >--}}
                                        {{--                                    </textarea>--}}
                                    </div>
                                </div>
                                <div class="form-group{{ $errors->has('agency_email') ? ' has-error' : '' }}">
                                    <label for="agency_email" class="col-md-4 control-label">Agency Email</label>

                                    <div class="col-md-6">
                                        <input id="agency_email" type="email" class="form-control" name="agency_email" value="{{ old('agency_email') }}" required>

                                        @if ($errors->has('email'))
                                            <span class="help-block">
                                        <strong>{{ $errors->first('agency_email') }}</strong>
                                    </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <label for="password" class="col-md-4 control-label">@lang('quickadmin.qa_password')</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" name="password" required>

                                        @if ($errors->has('password'))
                                            <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group{{ $errors->has('number') ? ' has-error' : '' }}">
                                    <label for="agency_phone" class="col-md-4 control-label">Agency Phone</label>

                                    <div class="col-md-6">
                                        <input id="number" type="text" class="form-control" name="agency_phone" required>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label for="Company" class="col-md-4 control-label"> Year of Inc</label>

                                    <div class="col-md-6">
                                        <input id="yearofinc" type="text" class="form-control" name="yearofinc" required>

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="Company " class="col-md-4 control-label">Type of company</label>

                                    <div class="col-md-6">

                                        <select id="typeofcomapny" class="form-control" name="typeofcomapny" required >
                                            <option value="Limited">Limited</option>
                                            <option value=" Pvt Ltd"> Pvt Ltd</option>
                                            <option value="LLP">LLP</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Prop">Prop</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="Company" class="col-md-4 control-label">Document 1</label>

                                    <div class="col-md-6">
                                        <input id="doc1" style="display: block !important;" type="file" class="form-control" name="doc1" >

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="Company" class="col-md-4 control-label">Document 2</label>

                                    <div class="col-md-6">
                                        <input id="doc2" style="display: block !important;" type="file" class="form-control" name="doc2" >

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="Company " class="col-md-4 control-label">Contact Person</label>
                                </div>
                                <div class="form-group">
                                    <label for="name " class="col-md-4 control-label">Name</label>

                                    <div class="col-md-6">
                                        <input id="contact_name" type="text" class="form-control" name="contact_name" required>

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="contact_email " class="col-md-4 control-label">Email</label>

                                    <div class="col-md-6">
                                        <input id="contact_email" type="text" class="form-control" name="contact_email" required>

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="contact_phone " class="col-md-4 control-label">Phone</label>

                                    <div class="col-md-6">
                                        <input id="contact_phone" type="text" class="form-control" name="contact_phone" required>

                                    </div>
                                </div>
                                 <div class="col-md-6">
                                     <input id="token" type="hidden" class="form-control" name="token" value="0" >
                                 </div>
                                <div class="form-group">
                                    <div class="col-md-6 col-md-offset-4">
                                        <button  class="btn btn-primary" >
                                            @lang('quickadmin.qa_register')
                                        </button>
                                    </div>
                                </div>
                            </form>

    </div>
    </div>
    <div id="Semi" class="tabcontent">
        <div class="container">

            <form class="form-horizontal" role="form" method="POST" enctype="multipart/form-data" action="{{ url('/api/webservices/create_account') }}">
                {{ csrf_field() }}

                <div class="form-group">
                    <label for="Company " class="col-md-4 control-label">Company Name</label>

                    <div class="col-md-6">
                        <input id="companyname" type="text" class="form-control" name="companyname" required>
                        {{--                                    <textarea rows="4" cols="50" id="company_detail" type="text" class="form-control" name="company_detail" required >--}}
                        {{--                                    </textarea>--}}
                    </div>
                </div>
                <div class="form-group{{ $errors->has('agency_email') ? ' has-error' : '' }}">
                    <label for="agency_email" class="col-md-4 control-label">Agency Email</label>

                    <div class="col-md-6">
                        <input id="agency_email" type="email" class="form-control" name="agency_email" value="{{ old('agency_email') }}" required>

                        @if ($errors->has('email'))
                            <span class="help-block">
                                        <strong>{{ $errors->first('agency_email') }}</strong>
                                    </span>
                        @endif
                    </div>
                </div>
                <div class="form-group{{ $errors->has('number') ? ' has-error' : '' }}">
                    <label for="agency_phone" class="col-md-4 control-label">Agency Phone</label>

                    <div class="col-md-6">
                        <input id="number" type="text" class="form-control" name="agency_phone" required>
                    </div>
                </div>
                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                    <label for="password" class="col-md-4 control-label">@lang('quickadmin.qa_password')</label>

                    <div class="col-md-6">
                        <input id="password" type="password" class="form-control" name="password" required>

                        @if ($errors->has('password'))
                            <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                        @endif
                    </div>
                </div>
                <div class="col-md-6">
                        <input id="token" type="hidden" class="form-control" name="token" value="1" >
                    </div>





                <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                        <button  class="btn btn-primary" >
                            @lang('quickadmin.qa_register')
                        </button>
                    </div>
                </div>
            </form>

        </div>
    </div>

        </div>
    </div>





    </body>
    </html>
@endsection

<script type="application/javascript" >

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
</script>
