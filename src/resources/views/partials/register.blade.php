@extends('layouts.auth')

@section('content')
    <div class="container">
            <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">@lang('quickadmin.qa_register')</div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="{{ url('/api/webservices/create_account') }}">
                            {{ csrf_field() }}

                            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                <label for="name" class="col-md-4 control-label">@lang('quickadmin.qa_name')</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                                    @if ($errors->has('name'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <label for="email" class="col-md-4 control-label">@lang('quickadmin.qa_email')</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                                    @if ($errors->has('email'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <!-- <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                <label for="password" class="col-md-4 control-label">@lang('quickadmin.qa_password')</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" required>

                                    @if ($errors->has('password'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div> -->
                            <div class="form-group{{ $errors->has('number') ? ' has-error' : '' }}">
                                <label for="phone_number" class="col-md-4 control-label">Phone Number</label>

                                <div class="col-md-6">
                                    <input id="number" type="text" class="form-control" name="phone_number" required>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="Company " class="col-md-4 control-label">Company Details</label>

                                <div class="col-md-6">
                                    <textarea rows="4" cols="50" id="company_detail" type="text" class="form-control" name="company_detail" required >
                                    </textarea>
                                </div>
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
    </div>

@endsection

<script type="application/javascript" >
// function submit(){
// var name=document.getElementById('name').value;
// var number=document.getElementById('number').value;
// var email=document.getElementById('email').value;
// var company_detail=document.getElementById('company_detail').value;
//
//   alert(name);
//   alert(number);
//   alert(email);
//   alert(company_detail);
// }
</script>
