@extends('layouts.auth')

@section('content')
<div class="row" id="background-color-all">
        <div class="col-lg-5 col-md-5">
            <img src="{{url('/dashboard_resources/login.jpg')}}" class="h-100 w-100" alt="login image">
        </div>
        <div class="col-lg-6 col-md-6 ml-5">
            <div class="row mt-5 ml-5">
                <div class="col-lg-12 col-xl-12 col-md-12 text-center mt-5">
                    <h1 class="mt-5 font_wieght text-muted">{{ ucfirst(config('app.name')) }} @lang('quickadmin.qa_login')</h1>
                </div>
                @if (count($errors) > 0)
                    <div class="alert alert-danger">
                        <strong>Whoops!</strong> @lang('quickadmin.qa_there_were_problems_with_input'):
                        <br><br>
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                <form class="form-horizontal"
                      role="form"
                      method="POST"
                      action="{{ url('traveller/login') }}">
                    <input type="hidden"
                           name="_token"
                           value="{{ csrf_token() }}">

                    <div class="col-lg-12 col-xl-12 col-md-12 mt-2">
                                <label class="text-muted h3">T @lang('quickadmin.qa_email')</label>
                                <input class="form-control" type="text" name="id"
                                       value="{{ old('email') }}">
                            </div>
                            <div class="col-lg-12 col-xl-12 col-md-12 mt-3">
                                <label class="text-muted h3">@lang('quickadmin.qa_password')</label>
                                <span class="float-right h3"><a href="{{ route('auth.password.reset') }}">@lang('quickadmin.qa_forgot_password')</a></span>
                                <input class="form-control" type="password" name="traveller_password">
                                <input class="form-control" type="password" name="password">
                            </div>
                            <div class="col-lg-12 col-xl-12 col-md-12 mt-5">
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
                                <span class="text-muted h4">Don't have an account?</span>
                            </div>
                            <div class="col-lg-12 col-xl-12 col-md-12 text-center mt-3 font_wieght">
                                <a class="btn btn-dark" href="{{ route('auth.register') }}">
                                    <span class="h3 pl-2 pr-2">@lang('quickadmin.qa_create')</span>
                                </a>
                            </div>
                </form>
            </div>
        </div>
    </div>
{{--<div class="row">--}}
{{--    <div class="col-md-8 col-md-offset-2">--}}
{{--        <div class="panel panel-default">--}}
{{--            <div class="panel-heading">{{ ucfirst(config('app.name')) }} @lang('quickadmin.qa_login')</div>--}}
{{--            <div class="panel-body">--}}
{{--                @if (count($errors) > 0)--}}
{{--                <div class="alert alert-danger">--}}
{{--                    <strong>Whoops!</strong> @lang('quickadmin.qa_there_were_problems_with_input'):--}}
{{--                    <br><br>--}}
{{--                    <ul>--}}
{{--                        @foreach ($errors->all() as $error)--}}
{{--                        <li>{{ $error }}</li>--}}
{{--                        @endforeach--}}
{{--                    </ul>--}}
{{--                </div>--}}
{{--                @endif--}}

{{--                <form class="form-horizontal"--}}
{{--                      role="form"--}}
{{--                      method="POST"--}}
{{--                      action="{{ url('login') }}">--}}
{{--                    <input type="hidden"--}}
{{--                           name="_token"--}}
{{--                           value="{{ csrf_token() }}">--}}

{{--                    <div class="form-group">--}}
{{--                        <label class="col-md-4 control-label">@lang('quickadmin.qa_email')</label>--}}

{{--                        <div class="col-md-6">--}}
{{--                            <input type="email"--}}
{{--                                   class="form-control"--}}
{{--                                   name="email"--}}
{{--                                   value="{{ old('email') }}">--}}
{{--                        </div>--}}
{{--                    </div>--}}

{{--                    <div class="form-group">--}}
{{--                        <label class="col-md-4 control-label">@lang('quickadmin.qa_password')</label>--}}

{{--                        <div class="col-md-6">--}}
{{--                            <input type="password"--}}
{{--                                   class="form-control"--}}
{{--                                   name="password">--}}
{{--                        </div>--}}
{{--                    </div>--}}

{{--                    <div class="form-group">--}}
{{--                        <div class="col-md-6 col-md-offset-4">--}}
{{--                            <a href="{{ route('auth.password.reset') }}">@lang('quickadmin.qa_forgot_password')</a>--}}
{{--                            <br>--}}
{{--                            <a href="{{ route('auth.register') }}">@lang('quickadmin.qa_registration')</a>--}}
{{--                        </div>--}}
{{--                    </div>--}}


{{--                    <div class="form-group">--}}
{{--                        <div class="col-md-6 col-md-offset-4">--}}
{{--                            <label>--}}
{{--                                <input type="checkbox"--}}
{{--                                       name="remember"> @lang('quickadmin.qa_remember_me')--}}
{{--                            </label>--}}
{{--                        </div>--}}
{{--                    </div>--}}

{{--                    <div class="form-group">--}}
{{--                        <div class="col-md-6 col-md-offset-4">--}}
{{--                            <button type="submit"--}}
{{--                                    class="btn btn-primary"--}}
{{--                                    style="margin-right: 15px;">--}}
{{--                                @lang('quickadmin.qa_login')--}}
{{--                            </button>--}}
{{--                        </div>--}}
{{--                    </div>--}}



{{--                </form>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--</div>--}}
@endsection
