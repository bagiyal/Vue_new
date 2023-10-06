<meta charset="utf-8">
<title>
    {{ trans('quickadmin.quickadmin_title') }}
</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<meta name="csrf-token" content="{{ csrf_token() }}">
<meta name="dp-date" content="DD-M-YYYY">
<meta name="dp-time" content="{{ config('app.time_format_moment') }}">
<meta name="dp-datetime" content="DD-M-YYYY HH:mm">
<meta name="app-locale" content="{{ App::getLocale() }}">
<meta name="user-id" content="{{ Auth::user()->id }}">
<meta name="user-name" content="{{ Auth::user()->name }}">
<meta name="user-phone" content="{{ Auth::user()->phone }}">
<meta name="agency-id" content="{{ Auth::user()->company }}">
<meta name="user-role" content="{{get_user_role(Auth::user()->id)}}">
<meta name="score-formula" content="{{get_formula()}}">
<meta name="time-zone" content="{{get_agencytimezone()}}">
<meta name="time-zone-offset" content="{{get_agencytimezoneoffset()}}">
<meta name="agency-logo" content="{{get_agency_logo_by_agent(Auth::User()->id)}}">
<meta name="agency-kyc" content="{{get_agency_kyc(Auth::user()->company)}}">
<meta name="platform" content="{{platform()}}">
<meta name="url" content="{{appurl()}}">
<meta name="level" content="{{ Auth::user()->approval_level}}">
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
<!--update_pass(Auth::user()->id)-->

<!-- Tell the browser to be responsive to screen width -->
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<!-- Ionicons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<link rel="stylesheet" href="{{ url('adminlte/bootstrap/css/bootstrap.min.css') }}">
<link rel="stylesheet" href="{{ url('adminlte/css/AdminLTE.min.css') }}">
<link rel="stylesheet" href="{{ url('adminlte/css/custom.css') }}">
<link rel="stylesheet" href="{{ url('adminlte/css/skins/skin-blue.min.css') }}">
<link rel="stylesheet" href="{{ url('/client/css/app.css') }}">

<link href="https://fonts.googleapis.com/css?family=Open Sans" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<link href="https://jqueryvalidation.org/files/demo/site-demos.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@voerro/vue-tagsinput@2.0.2/dist/style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<script src="https://cdn.rawgit.com/matfish2/vue-pagination-2/controlled-component/dist/vue-pagination-2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-apexcharts"></script>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.3/xlsx.full.min.js"
></script>
