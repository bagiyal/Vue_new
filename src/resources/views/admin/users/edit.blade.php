@extends('layouts.app')

@section('content')
    <h3 class="page-title">@lang('quickadmin.users.title')</h3>
    
    {!! Form::model($user, ['method' => 'PUT', 'route' => ['admin.users.update', $user->id], 'files' => true,]) !!}

    <div class="panel panel-default">
        <div class="panel-heading">
            @lang('quickadmin.qa_edit')
        </div>

        <div class="panel-body">
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('name', trans('quickadmin.users.fields.name').'*', ['class' => 'control-label']) !!}
                    {!! Form::text('name', old('name'), ['class' => 'form-control', 'placeholder' => '', 'required' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('name'))
                        <p class="help-block">
                            {{ $errors->first('name') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('email', trans('quickadmin.users.fields.email').'*', ['class' => 'control-label']) !!}
                    {!! Form::email('email', old('email'), ['class' => 'form-control', 'placeholder' => '', 'required' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('email'))
                        <p class="help-block">
                            {{ $errors->first('email') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('password', trans('quickadmin.users.fields.password').'*', ['class' => 'control-label']) !!}
                    {!! Form::password('password', ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('password'))
                        <p class="help-block">
                            {{ $errors->first('password') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('role', trans('quickadmin.users.fields.role').'*', ['class' => 'control-label']) !!}
                    <button type="button" class="btn btn-primary btn-xs" id="selectbtn-role">
                        {{ trans('quickadmin.qa_select_all') }}
                    </button>
                    <button type="button" class="btn btn-primary btn-xs" id="deselectbtn-role">
                        {{ trans('quickadmin.qa_deselect_all') }}
                    </button>
                    {!! Form::select('role[]', $roles, old('role') ? old('role') : $user->role->pluck('id')->toArray(), ['class' => 'form-control select2', 'multiple' => 'multiple', 'id' => 'selectall-role' , 'required' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('role'))
                        <p class="help-block">
                            {{ $errors->first('role') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('approved', trans('quickadmin.users.fields.approved').'', ['class' => 'control-label']) !!}
                    {!! Form::hidden('approved', 0) !!}
                    {!! Form::checkbox('approved', 1, old('approved', old('approved')), []) !!}
                    <p class="help-block"></p>
                    @if($errors->has('approved'))
                        <p class="help-block">
                            {{ $errors->first('approved') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('team_id', trans('quickadmin.users.fields.team').'', ['class' => 'control-label']) !!}
                    {!! Form::select('team_id', $teams, old('team_id'), ['class' => 'form-control select2']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('team_id'))
                        <p class="help-block">
                            {{ $errors->first('team_id') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('account_manager', trans('quickadmin.users.fields.account-manager').'', ['class' => 'control-label']) !!}
                    {!! Form::text('account_manager', old('account_manager'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('account_manager'))
                        <p class="help-block">
                            {{ $errors->first('account_manager') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('agree', trans('quickadmin.users.fields.agree').'', ['class' => 'control-label']) !!}
                    {!! Form::text('agree', old('agree'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('agree'))
                        <p class="help-block">
                            {{ $errors->first('agree') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('banner_color', trans('quickadmin.users.fields.banner-color').'', ['class' => 'control-label']) !!}
                    {!! Form::text('banner_color', old('banner_color'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('banner_color'))
                        <p class="help-block">
                            {{ $errors->first('banner_color') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('address', trans('quickadmin.users.fields.address').'', ['class' => 'control-label']) !!}
                    {!! Form::text('address', old('address'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('address'))
                        <p class="help-block">
                            {{ $errors->first('address') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('city_id', trans('quickadmin.users.fields.city').'', ['class' => 'control-label']) !!}
                    {!! Form::select('city_id', $cities, old('city_id'), ['class' => 'form-control select2']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('city_id'))
                        <p class="help-block">
                            {{ $errors->first('city_id') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('state_id', trans('quickadmin.users.fields.state').'', ['class' => 'control-label']) !!}
                    {!! Form::select('state_id', $states, old('state_id'), ['class' => 'form-control select2']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('state_id'))
                        <p class="help-block">
                            {{ $errors->first('state_id') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('country_id', trans('quickadmin.users.fields.country').'', ['class' => 'control-label']) !!}
                    {!! Form::select('country_id', $countries, old('country_id'), ['class' => 'form-control select2']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('country_id'))
                        <p class="help-block">
                            {{ $errors->first('country_id') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('phone', trans('quickadmin.users.fields.phone').'', ['class' => 'control-label']) !!}
                    {!! Form::text('phone', old('phone'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('phone'))
                        <p class="help-block">
                            {{ $errors->first('phone') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('postcode', trans('quickadmin.users.fields.postcode').'', ['class' => 'control-label']) !!}
                    {!! Form::text('postcode', old('postcode'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('postcode'))
                        <p class="help-block">
                            {{ $errors->first('postcode') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('company', trans('quickadmin.users.fields.company').'', ['class' => 'control-label']) !!}
                    {!! Form::text('company', old('company'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('company'))
                        <p class="help-block">
                            {{ $errors->first('company') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('device', trans('quickadmin.users.fields.device').'', ['class' => 'control-label']) !!}
                    {!! Form::text('device', old('device'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('device'))
                        <p class="help-block">
                            {{ $errors->first('device') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('locale', trans('quickadmin.users.fields.locale').'', ['class' => 'control-label']) !!}
                    {!! Form::text('locale', old('locale'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('locale'))
                        <p class="help-block">
                            {{ $errors->first('locale') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('login', trans('quickadmin.users.fields.login').'', ['class' => 'control-label']) !!}
                    {!! Form::text('login', old('login'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('login'))
                        <p class="help-block">
                            {{ $errors->first('login') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('login_date_time', trans('quickadmin.users.fields.login-date-time').'', ['class' => 'control-label']) !!}
                    {!! Form::text('login_date_time', old('login_date_time'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('login_date_time'))
                        <p class="help-block">
                            {{ $errors->first('login_date_time') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('login_status', trans('quickadmin.users.fields.login-status').'', ['class' => 'control-label']) !!}
                    {!! Form::text('login_status', old('login_status'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('login_status'))
                        <p class="help-block">
                            {{ $errors->first('login_status') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    @if ($user->logo)
                        <a href="{{ asset(env('UPLOAD_PATH').'/'.$user->logo) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/'.$user->logo) }}"></a>
                    @endif
                    {!! Form::label('logo', trans('quickadmin.users.fields.logo').'', ['class' => 'control-label']) !!}
                    {!! Form::file('logo', ['class' => 'form-control', 'style' => 'margin-top: 4px;']) !!}
                    {!! Form::hidden('logo_max_size', 0) !!}
                    {!! Form::hidden('logo_max_width', 0) !!}
                    {!! Form::hidden('logo_max_height', 0) !!}
                    <p class="help-block"></p>
                    @if($errors->has('logo'))
                        <p class="help-block">
                            {{ $errors->first('logo') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('mycred_default', trans('quickadmin.users.fields.mycred-default').'', ['class' => 'control-label']) !!}
                    {!! Form::text('mycred_default', old('mycred_default'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('mycred_default'))
                        <p class="help-block">
                            {{ $errors->first('mycred_default') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('mycred_default_total', trans('quickadmin.users.fields.mycred-default-total').'', ['class' => 'control-label']) !!}
                    {!! Form::text('mycred_default_total', old('mycred_default_total'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('mycred_default_total'))
                        <p class="help-block">
                            {{ $errors->first('mycred_default_total') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('mycred_epp_mycred', trans('quickadmin.users.fields.mycred-epp-mycred').'', ['class' => 'control-label']) !!}
                    {!! Form::text('mycred_epp_mycred', old('mycred_epp_mycred'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('mycred_epp_mycred'))
                        <p class="help-block">
                            {{ $errors->first('mycred_epp_mycred') }}
                        </p>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('owners_email', trans('quickadmin.users.fields.owners-email').'', ['class' => 'control-label']) !!}
                    {!! Form::text('owners_email', old('owners_email'), ['class' => 'form-control', 'placeholder' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('owners_email'))
                        <p class="help-block">
                            {{ $errors->first('owners_email') }}
                        </p>
                    @endif
                </div>
            </div>
            
        </div>
    </div>

    {!! Form::submit(trans('quickadmin.qa_update'), ['class' => 'btn btn-danger']) !!}
    {!! Form::close() !!}
@stop

@section('javascript')
    @parent

    <script src="{{ asset('quickadmin/plugins/fileUpload/js/jquery.iframe-transport.js') }}"></script>
    <script src="{{ asset('quickadmin/plugins/fileUpload/js/jquery.fileupload.js') }}"></script>
    <script>
        $(function () {
            $('.file-upload').each(function () {
                var $this = $(this);
                var $parent = $(this).parent();

                $(this).fileupload({
                    dataType: 'json',
                    formData: {
                        model_name: 'User',
                        bucket: $this.data('bucket'),
                        file_key: $this.data('filekey'),
                        _token: '{{ csrf_token() }}'
                    },
                    add: function (e, data) {
                        data.submit();
                    },
                    done: function (e, data) {
                        $.each(data.result.files, function (index, file) {
                            var $line = $($('<p/>', {class: "form-group"}).html(file.name + ' (' + file.size + ' bytes)').appendTo($parent.find('.files-list')));
                            $line.append('<a href="#" class="btn btn-xs btn-danger remove-file">Remove</a>');
                            $line.append('<input type="hidden" name="' + $this.data('bucket') + '_id[]" value="' + file.id + '"/>');
                            if ($parent.find('.' + $this.data('bucket') + '-ids').val() != '') {
                                $parent.find('.' + $this.data('bucket') + '-ids').val($parent.find('.' + $this.data('bucket') + '-ids').val() + ',');
                            }
                            $parent.find('.' + $this.data('bucket') + '-ids').val($parent.find('.' + $this.data('bucket') + '-ids').val() + file.id);
                        });
                        $parent.find('.progress-bar').hide().css(
                            'width',
                            '0%'
                        );
                    }
                }).on('fileuploadprogressall', function (e, data) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    $parent.find('.progress-bar').show().css(
                        'width',
                        progress + '%'
                    );
                });
            });
            $(document).on('click', '.remove-file', function () {
                var $parent = $(this).parent();
                $parent.remove();
                return false;
            });
        });
    </script>
    <script>
        $("#selectbtn-role").click(function(){
            $("#selectall-role > option").prop("selected","selected");
            $("#selectall-role").trigger("change");
        });
        $("#deselectbtn-role").click(function(){
            $("#selectall-role > option").prop("selected","");
            $("#selectall-role").trigger("change");
        });
    </script>
@stop