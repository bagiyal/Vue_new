@extends('layouts.app')

@section('content')
    <h3 class="page-title">@lang('quickadmin.assets.title')</h3>

    <div class="panel panel-default">
        <div class="panel-heading">
            @lang('quickadmin.qa_view')
        </div>

        <div class="panel-body table-responsive">
            <div class="row">
                <div class="col-md-6">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <th>@lang('quickadmin.assets.fields.category')</th>
                            <td field-key='category'>{{ $asset->category->title or '' }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.assets.fields.serial-number')</th>
                            <td field-key='serial_number'>{{ $asset->serial_number }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.assets.fields.title')</th>
                            <td field-key='title'>{{ $asset->title }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.assets.fields.photo1')</th>
                            <td field-key='photo1'>@if($asset->photo1)<a href="{{ asset(env('UPLOAD_PATH').'/' . $asset->photo1) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/' . $asset->photo1) }}"/></a>@endif</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.assets.fields.photo2')</th>
                            <td field-key='photo2'>@if($asset->photo2)<a href="{{ asset(env('UPLOAD_PATH').'/' . $asset->photo2) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/' . $asset->photo2) }}"/></a>@endif</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.assets.fields.photo3')</th>
                            <td field-key='photo3'>@if($asset->photo3)<a href="{{ asset(env('UPLOAD_PATH').'/' . $asset->photo3) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/' . $asset->photo3) }}"/></a>@endif</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.assets.fields.status')</th>
                            <td field-key='status'>{{ $asset->status->title or '' }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.assets.fields.location')</th>
                            <td field-key='location'>{{ $asset->location->title or '' }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.assets.fields.assigned-user')</th>
                            <td field-key='assigned_user'>{{ $asset->assigned_user->name or '' }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.assets.fields.notes')</th>
                            <td field-key='notes'>{!! $asset->notes !!}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <p>&nbsp;</p>

            <a href="{{ route('admin.assets.index') }}" class="btn btn-default">@lang('quickadmin.qa_back_to_list')</a>
        </div>
    </div>
@stop
