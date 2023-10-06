<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>
        {{ trans('quickadmin.quickadmin_title') }}
    </title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="{{ url('adminlte/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ url('adminlte/css/custom.css') }}">
    <link rel="stylesheet" href="{{ url('adminlte/css/AdminLTE.min.css') }}">
    <link rel="stylesheet" href="{{ url('adminlte/css/newcss/newcss.css') }}">
    <style>
        @media (min-width:700px){
            .Form-Bg{
                width:100%;
                background:url("{{asset("/images/loginpageImg/bg1.png")}}");
                background-repeat: no-repeat;
                background-size: 100vw 100%;
                background-size: 100vw 100vh;

                background-attachment: fixed;
                background-position: center;

            }}
    </style>
</head>

<body class="page-header-fixed Form-Bg">



<div class="container-fluid">
    @yield('content')
</div>

<div class="scroll-to-top"
     style="display: none;">
    <i class="fa fa-arrow-up"></i>
</div>
</body>
</html>
