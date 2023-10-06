@inject('request', 'Illuminate\Http\Request')
@extends('layouts.app')

@section('content')
    <h3 class="page-title">@lang('quickadmin.users.title')</h3>
    @can('user_create')
    <p>
        <a href="{{ route('admin.users.create') }}" class="btn btn-success">@lang('quickadmin.qa_add_new')</a>
        
    </p>
    @endcan

    

    <div class="panel panel-default">
        <div class="panel-heading">
            @lang('quickadmin.qa_list')
        </div>

        <div class="panel-body table-responsive">
            <table class="table table-bordered table-striped {{ count($users) > 0 ? 'datatable' : '' }} @can('user_delete') dt-select @endcan">
                <thead>
                    <tr>
                        @can('user_delete')
                            <th style="text-align:center;"><input type="checkbox" id="select-all" /></th>
                        @endcan

                        <th>@lang('quickadmin.users.fields.name')</th>
                        <th>@lang('quickadmin.users.fields.email')</th>
                        <th>@lang('quickadmin.users.fields.role')</th>
                        <th>@lang('quickadmin.users.fields.approved')</th>
                        <th>@lang('quickadmin.users.fields.team')</th>
                        <th>@lang('quickadmin.users.fields.account-manager')</th>
                        <th>@lang('quickadmin.users.fields.agree')</th>
                        <th>@lang('quickadmin.users.fields.banner-color')</th>
                        <th>@lang('quickadmin.users.fields.address')</th>
                        <th>@lang('quickadmin.users.fields.city')</th>
                        <th>@lang('quickadmin.users.fields.state')</th>
                        <th>@lang('quickadmin.users.fields.country')</th>
                        <th>@lang('quickadmin.users.fields.phone')</th>
                        <th>@lang('quickadmin.users.fields.postcode')</th>
                        <th>@lang('quickadmin.users.fields.company')</th>
                        <th>@lang('quickadmin.users.fields.device')</th>
                        <th>@lang('quickadmin.users.fields.locale')</th>
                        <th>@lang('quickadmin.users.fields.login')</th>
                        <th>@lang('quickadmin.users.fields.login-date-time')</th>
                        <th>@lang('quickadmin.users.fields.login-status')</th>
                        <th>@lang('quickadmin.users.fields.logo')</th>
                        <th>@lang('quickadmin.users.fields.mycred-default')</th>
                        <th>@lang('quickadmin.users.fields.mycred-default-total')</th>
                        <th>@lang('quickadmin.users.fields.mycred-epp-mycred')</th>
                        <th>@lang('quickadmin.users.fields.owners-email')</th>
                                                <th>&nbsp;</th>

                    </tr>
                </thead>
                
                <tbody>
                    @if (count($users) > 0)
                        @foreach ($users as $user)
                            <tr data-entry-id="{{ $user->id }}">
                                @can('user_delete')
                                    <td></td>
                                @endcan

                                <td field-key='name'>{{ $user->name }}</td>
                                <td field-key='email'>{{ $user->email }}</td>
                                <td field-key='role'>
                                    @foreach ($user->role as $singleRole)
                                        <span class="label label-info label-many">{{ $singleRole->title }}</span>
                                    @endforeach
                                </td>
                                <td field-key='approved'>{{ Form::checkbox("approved", 1, $user->approved == 1 ? true : false, ["disabled"]) }}</td>
                                <td field-key='team'>{{ $user->team->name or '' }}</td>
                                <td field-key='account_manager'>{{ $user->account_manager }}</td>
                                <td field-key='agree'>{{ $user->agree }}</td>
                                <td field-key='banner_color'>{{ $user->banner_color }}</td>
                                <td field-key='address'>{{ $user->address }}</td>
                                <td field-key='city'>{{ $user->city->title or '' }}</td>
                                <td field-key='state'>{{ $user->state->title or '' }}</td>
                                <td field-key='country'>{{ $user->country->title or '' }}</td>
                                <td field-key='phone'>{{ $user->phone }}</td>
                                <td field-key='postcode'>{{ $user->postcode }}</td>
                                <td field-key='company'>{{ $user->company }}</td>
                                <td field-key='device'>{{ $user->device }}</td>
                                <td field-key='locale'>{{ $user->locale }}</td>
                                <td field-key='login'>{{ $user->login }}</td>
                                <td field-key='login_date_time'>{{ $user->login_date_time }}</td>
                                <td field-key='login_status'>{{ $user->login_status }}</td>
                                <td field-key='logo'>@if($user->logo)<a href="{{ asset(env('UPLOAD_PATH').'/' . $user->logo) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/' . $user->logo) }}"/></a>@endif</td>
                                <td field-key='mycred_default'>{{ $user->mycred_default }}</td>
                                <td field-key='mycred_default_total'>{{ $user->mycred_default_total }}</td>
                                <td field-key='mycred_epp_mycred'>{{ $user->mycred_epp_mycred }}</td>
                                <td field-key='owners_email'>{{ $user->owners_email }}</td>
                                                                <td>
                                    @can('user_view')
                                    <a href="{{ route('admin.users.show',[$user->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('user_edit')
                                    <a href="{{ route('admin.users.edit',[$user->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('user_delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['admin.users.destroy', $user->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>

                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="32">@lang('quickadmin.qa_no_entries_in_table')</td>
                        </tr>
                    @endif
                </tbody>
            </table>
        </div>
    </div>
@stop

@section('javascript') 
    <script>
        @can('user_delete')
            window.route_mass_crud_entries_destroy = '{{ route('admin.users.mass_destroy') }}';
        @endcan

    </script>
@endsection