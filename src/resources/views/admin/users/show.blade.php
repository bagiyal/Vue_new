@extends('layouts.app')

@section('content')
    <h3 class="page-title">@lang('quickadmin.users.title')</h3>

    <div class="panel panel-default">
        <div class="panel-heading">
            @lang('quickadmin.qa_view')
        </div>

        <div class="panel-body table-responsive">
            <div class="row">
                <div class="col-md-6">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <th>@lang('quickadmin.users.fields.name')</th>
                            <td field-key='name'>{{ $user->name }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.email')</th>
                            <td field-key='email'>{{ $user->email }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.role')</th>
                            <td field-key='role'>
                                @foreach ($user->role as $singleRole)
                                    <span class="label label-info label-many">{{ $singleRole->title }}</span>
                                @endforeach
                            </td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.approved')</th>
                            <td field-key='approved'>{{ Form::checkbox("approved", 1, $user->approved == 1 ? true : false, ["disabled"]) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.team')</th>
                            <td field-key='team'>{{ $user->team->name or '' }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.account-manager')</th>
                            <td field-key='account_manager'>{{ $user->account_manager }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.agree')</th>
                            <td field-key='agree'>{{ $user->agree }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.banner-color')</th>
                            <td field-key='banner_color'>{{ $user->banner_color }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.address')</th>
                            <td field-key='address'>{{ $user->address }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.city')</th>
                            <td field-key='city'>{{ $user->city->title or '' }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.state')</th>
                            <td field-key='state'>{{ $user->state->title or '' }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.country')</th>
                            <td field-key='country'>{{ $user->country->title or '' }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.phone')</th>
                            <td field-key='phone'>{{ $user->phone }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.postcode')</th>
                            <td field-key='postcode'>{{ $user->postcode }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.company')</th>
                            <td field-key='company'>{{ $user->company }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.device')</th>
                            <td field-key='device'>{{ $user->device }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.locale')</th>
                            <td field-key='locale'>{{ $user->locale }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.login')</th>
                            <td field-key='login'>{{ $user->login }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.login-date-time')</th>
                            <td field-key='login_date_time'>{{ $user->login_date_time }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.login-status')</th>
                            <td field-key='login_status'>{{ $user->login_status }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.logo')</th>
                            <td field-key='logo'>@if($user->logo)<a href="{{ asset(env('UPLOAD_PATH').'/' . $user->logo) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/' . $user->logo) }}"/></a>@endif</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.mycred-default')</th>
                            <td field-key='mycred_default'>{{ $user->mycred_default }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.mycred-default-total')</th>
                            <td field-key='mycred_default_total'>{{ $user->mycred_default_total }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.mycred-epp-mycred')</th>
                            <td field-key='mycred_epp_mycred'>{{ $user->mycred_epp_mycred }}</td>
                        </tr>
                        <tr>
                            <th>@lang('quickadmin.users.fields.owners-email')</th>
                            <td field-key='owners_email'>{{ $user->owners_email }}</td>
                        </tr>
                    </table>
                </div>
            </div><!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
    
<li role="presentation" class="active"><a href="#user_actions" aria-controls="user_actions" role="tab" data-toggle="tab">User actions</a></li>
<li role="presentation" class=""><a href="#tour" aria-controls="tour" role="tab" data-toggle="tab">Tour</a></li>
<li role="presentation" class=""><a href="#rooms" aria-controls="rooms" role="tab" data-toggle="tab">Rooms</a></li>
<li role="presentation" class=""><a href="#exhibitors" aria-controls="exhibitors" role="tab" data-toggle="tab">Exhibitors</a></li>
<li role="presentation" class=""><a href="#field_operator" aria-controls="field_operator" role="tab" data-toggle="tab">Field operator</a></li>
<li role="presentation" class=""><a href="#drivers" aria-controls="drivers" role="tab" data-toggle="tab">Drivers</a></li>
<li role="presentation" class=""><a href="#leads" aria-controls="leads" role="tab" data-toggle="tab">Leads</a></li>
<li role="presentation" class=""><a href="#place" aria-controls="place" role="tab" data-toggle="tab">Place</a></li>
<li role="presentation" class=""><a href="#query" aria-controls="query" role="tab" data-toggle="tab">Query</a></li>
<li role="presentation" class=""><a href="#booking" aria-controls="booking" role="tab" data-toggle="tab">Booking</a></li>
<li role="presentation" class=""><a href="#group" aria-controls="group" role="tab" data-toggle="tab">Group</a></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
    
<div role="tabpanel" class="tab-pane active" id="user_actions">
<table class="table table-bordered table-striped {{ count($user_actions) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.user-actions.created_at')</th>
                        <th>@lang('quickadmin.user-actions.fields.user')</th>
                        <th>@lang('quickadmin.user-actions.fields.action')</th>
                        <th>@lang('quickadmin.user-actions.fields.action-model')</th>
                        <th>@lang('quickadmin.user-actions.fields.action-id')</th>
                        
        </tr>
    </thead>

    <tbody>
        @if (count($user_actions) > 0)
            @foreach ($user_actions as $user_action)
                <tr data-entry-id="{{ $user_action->id }}">
                    <td>{{ $user_action->created_at or '' }}</td>
                                <td field-key='user'>{{ $user_action->user->name or '' }}</td>
                                <td field-key='action'>{{ $user_action->action }}</td>
                                <td field-key='action_model'>{{ $user_action->action_model }}</td>
                                <td field-key='action_id'>{{ $user_action->action_id }}</td>
                                
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="7">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="tour">
<table class="table table-bordered table-striped {{ count($tours) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.tour.fields.title')</th>
                        <th>@lang('quickadmin.tour.fields.locations')</th>
                        <th>@lang('quickadmin.tour.fields.total-tour-days')</th>
                        <th>@lang('quickadmin.tour.fields.created-by')</th>
                        <th>@lang('quickadmin.tour.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($tours) > 0)
            @foreach ($tours as $tour)
                <tr data-entry-id="{{ $tour->id }}">
                    <td field-key='title'>{{ $tour->title }}</td>
                                <td field-key='locations'>{{ $tour->locations }}</td>
                                <td field-key='total_tour_days'>{{ $tour->total_tour_days }}</td>
                                <td field-key='created_by'>{{ $tour->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $tour->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['tours.restore', $tour->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['tours.perma_del', $tour->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('tours.show',[$tour->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('tours.edit',[$tour->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['tours.destroy', $tour->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="10">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="rooms">
<table class="table table-bordered table-striped {{ count($rooms) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.rooms.fields.room-type-and-size')</th>
                        <th>@lang('quickadmin.rooms.fields.bed-size')</th>
                        <th>@lang('quickadmin.rooms.fields.featured-image')</th>
                        <th>@lang('quickadmin.rooms.fields.max-count')</th>
                        <th>@lang('quickadmin.rooms.fields.created-by')</th>
                        <th>@lang('quickadmin.rooms.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($rooms) > 0)
            @foreach ($rooms as $room)
                <tr data-entry-id="{{ $room->id }}">
                    <td field-key='room_type_and_size'>{{ $room->room_type_and_size }}</td>
                                <td field-key='bed_size'>{{ $room->bed_size }}</td>
                                <td field-key='featured_image'>@if($room->featured_image)<a href="{{ asset(env('UPLOAD_PATH').'/' . $room->featured_image) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/' . $room->featured_image) }}"/></a>@endif</td>
                                <td field-key='max_count'>{{ $room->max_count }}</td>
                                <td field-key='created_by'>{{ $room->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $room->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['rooms.restore', $room->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['rooms.perma_del', $room->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('rooms.show',[$room->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('rooms.edit',[$room->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['rooms.destroy', $room->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="11">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="exhibitors">
<table class="table table-bordered table-striped {{ count($exhibitors) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.exhibitors.fields.name')</th>
                        <th>@lang('quickadmin.exhibitors.fields.description')</th>
                        <th>@lang('quickadmin.exhibitors.fields.contact')</th>
                        <th>@lang('quickadmin.exhibitors.fields.address')</th>
                        <th>@lang('quickadmin.exhibitors.fields.website')</th>
                        <th>@lang('quickadmin.exhibitors.fields.category')</th>
                        <th>@lang('quickadmin.exhibitors.fields.logo')</th>
                        <th>@lang('quickadmin.exhibitors.fields.history')</th>
                        <th>@lang('quickadmin.exhibitors.fields.device-id')</th>
                        <th>@lang('quickadmin.exhibitors.fields.created-by')</th>
                        <th>@lang('quickadmin.exhibitors.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($exhibitors) > 0)
            @foreach ($exhibitors as $exhibitor)
                <tr data-entry-id="{{ $exhibitor->id }}">
                    <td field-key='name'>{{ $exhibitor->name }}</td>
                                <td field-key='description'>{{ $exhibitor->description }}</td>
                                <td field-key='contact'>{{ $exhibitor->contact }}</td>
                                <td field-key='address'>{{ $exhibitor->address }}</td>
                                <td field-key='website'>{{ $exhibitor->website }}</td>
                                <td field-key='category'>{{ $exhibitor->category }}</td>
                                <td field-key='logo'>@if($exhibitor->logo)<a href="{{ asset(env('UPLOAD_PATH').'/' . $exhibitor->logo) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/' . $exhibitor->logo) }}"/></a>@endif</td>
                                <td field-key='history'>{{ $exhibitor->history }}</td>
                                <td field-key='device_id'>{{ $exhibitor->device_id }}</td>
                                <td field-key='created_by'>{{ $exhibitor->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $exhibitor->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['exhibitors.restore', $exhibitor->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['exhibitors.perma_del', $exhibitor->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('exhibitors.show',[$exhibitor->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('exhibitors.edit',[$exhibitor->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['exhibitors.destroy', $exhibitor->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="16">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="field_operator">
<table class="table table-bordered table-striped {{ count($field_operators) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.field-operator.fields.name')</th>
                        <th>@lang('quickadmin.field-operator.fields.phone')</th>
                        <th>@lang('quickadmin.field-operator.fields.rating')</th>
                        <th>@lang('quickadmin.field-operator.fields.date-of-birth')</th>
                        <th>@lang('quickadmin.field-operator.fields.drivers-license-number')</th>
                        <th>@lang('quickadmin.field-operator.fields.drivers-license-state')</th>
                        <th>@lang('quickadmin.field-operator.fields.drivers-license-expiration-date')</th>
                        <th>@lang('quickadmin.field-operator.fields.relationdeviceid')</th>
                        <th>@lang('quickadmin.field-operator.fields.ref-role')</th>
                        <th>@lang('quickadmin.field-operator.fields.created-by')</th>
                        <th>@lang('quickadmin.field-operator.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($field_operators) > 0)
            @foreach ($field_operators as $field_operator)
                <tr data-entry-id="{{ $field_operator->id }}">
                    <td field-key='name'>{{ $field_operator->name }}</td>
                                <td field-key='phone'>{{ $field_operator->phone }}</td>
                                <td field-key='rating'>{{ $field_operator->rating }}</td>
                                <td field-key='date_of_birth'>{{ $field_operator->date_of_birth }}</td>
                                <td field-key='drivers_license_number'>{{ $field_operator->drivers_license_number }}</td>
                                <td field-key='drivers_license_state'>{{ $field_operator->drivers_license_state }}</td>
                                <td field-key='drivers_license_expiration_date'>{{ $field_operator->drivers_license_expiration_date }}</td>
                                <td field-key='relationdeviceid'>{{ $field_operator->relationdeviceid }}</td>
                                <td field-key='ref_role'>{{ $field_operator->ref_role }}</td>
                                <td field-key='created_by'>{{ $field_operator->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $field_operator->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['field_operators.restore', $field_operator->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['field_operators.perma_del', $field_operator->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('field_operators.show',[$field_operator->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('field_operators.edit',[$field_operator->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['field_operators.destroy', $field_operator->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="16">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="drivers">
<table class="table table-bordered table-striped {{ count($drivers) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.drivers.fields.name')</th>
                        <th>@lang('quickadmin.drivers.fields.phone')</th>
                        <th>@lang('quickadmin.drivers.fields.rating')</th>
                        <th>@lang('quickadmin.drivers.fields.date-of-birth')</th>
                        <th>@lang('quickadmin.drivers.fields.drivers-license-number')</th>
                        <th>@lang('quickadmin.drivers.fields.drivers-license-state')</th>
                        <th>@lang('quickadmin.drivers.fields.drivers-license-expiration-date')</th>
                        <th>@lang('quickadmin.drivers.fields.relationdeviceid')</th>
                        <th>@lang('quickadmin.drivers.fields.created-by')</th>
                        <th>@lang('quickadmin.drivers.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($drivers) > 0)
            @foreach ($drivers as $driver)
                <tr data-entry-id="{{ $driver->id }}">
                    <td field-key='name'>{{ $driver->name }}</td>
                                <td field-key='phone'>{{ $driver->phone }}</td>
                                <td field-key='rating'>{{ $driver->rating }}</td>
                                <td field-key='date_of_birth'>{{ $driver->date_of_birth }}</td>
                                <td field-key='drivers_license_number'>{{ $driver->drivers_license_number }}</td>
                                <td field-key='drivers_license_state'>{{ $driver->drivers_license_state }}</td>
                                <td field-key='drivers_license_expiration_date'>{{ $driver->drivers_license_expiration_date }}</td>
                                <td field-key='relationdeviceid'>{{ $driver->relationdeviceid }}</td>
                                <td field-key='created_by'>{{ $driver->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $driver->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['drivers.restore', $driver->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['drivers.perma_del', $driver->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('drivers.show',[$driver->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('drivers.edit',[$driver->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['drivers.destroy', $driver->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="15">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="leads">
<table class="table table-bordered table-striped {{ count($leads) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.leads.fields.lead-id')</th>
                        <th>@lang('quickadmin.leads.fields.lead-status')</th>
                        <th>@lang('quickadmin.leads.fields.package-type')</th>
                        <th>@lang('quickadmin.leads.fields.date')</th>
                        <th>@lang('quickadmin.leads.fields.email')</th>
                        <th>@lang('quickadmin.leads.fields.phone')</th>
                        <th>@lang('quickadmin.leads.fields.name')</th>
                        <th>@lang('quickadmin.leads.fields.adult-guest')</th>
                        <th>@lang('quickadmin.leads.fields.score')</th>
                        <th>@lang('quickadmin.leads.fields.kids-guests')</th>
                        <th>@lang('quickadmin.leads.fields.created-by')</th>
                        <th>@lang('quickadmin.leads.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($leads) > 0)
            @foreach ($leads as $lead)
                <tr data-entry-id="{{ $lead->id }}">
                    <td field-key='lead_id'>{{ $lead->lead_id }}</td>
                                <td field-key='lead_status'>{{ $lead->lead_status }}</td>
                                <td field-key='package_type'>{{ $lead->package_type }}</td>
                                <td field-key='date'>{{ $lead->date }}</td>
                                <td field-key='email'>{{ $lead->email }}</td>
                                <td field-key='phone'>{{ $lead->phone }}</td>
                                <td field-key='name'>{{ $lead->name }}</td>
                                <td field-key='adult_guest'>{{ $lead->adult_guest }}</td>
                                <td field-key='score'>{{ $lead->score }}</td>
                                <td field-key='kids_guests'>{{ $lead->kids_guests }}</td>
                                <td field-key='created_by'>{{ $lead->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $lead->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['leads.restore', $lead->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['leads.perma_del', $lead->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('leads.show',[$lead->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('leads.edit',[$lead->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['leads.destroy', $lead->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="24">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="place">
<table class="table table-bordered table-striped {{ count($places) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.place.fields.title')</th>
                        <th>@lang('quickadmin.place.fields.description')</th>
                        <th>@lang('quickadmin.place.fields.contact-no')</th>
                        <th>@lang('quickadmin.place.fields.timing')</th>
                        <th>@lang('quickadmin.place.fields.closed-day')</th>
                        <th>@lang('quickadmin.place.fields.time-required-to-visit')</th>
                        <th>@lang('quickadmin.place.fields.categories')</th>
                        <th>@lang('quickadmin.place.fields.esb-visiblity')</th>
                        <th>@lang('quickadmin.place.fields.address')</th>
                        <th>@lang('quickadmin.place.fields.place-longitude')</th>
                        <th>@lang('quickadmin.place.fields.place-latitude')</th>
                        <th>@lang('quickadmin.place.fields.city')</th>
                        <th>@lang('quickadmin.place.fields.featured-image')</th>
                        <th>@lang('quickadmin.place.fields.cuisine')</th>
                        <th>@lang('quickadmin.place.fields.recommended')</th>
                        <th>@lang('quickadmin.place.fields.partner')</th>
                        <th>@lang('quickadmin.place.fields.place-tripadvisor-id')</th>
                        <th>@lang('quickadmin.place.fields.city-id')</th>
                        <th>@lang('quickadmin.place.fields.created-by')</th>
                        <th>@lang('quickadmin.place.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($places) > 0)
            @foreach ($places as $place)
                <tr data-entry-id="{{ $place->id }}">
                    <td field-key='title'>{{ $place->title }}</td>
                                <td field-key='description'>{!! $place->description !!}</td>
                                <td field-key='contact_no'>{{ $place->contact_no }}</td>
                                <td field-key='timing'>{{ $place->timing }}</td>
                                <td field-key='closed_day'>{{ $place->closed_day }}</td>
                                <td field-key='time_required_to_visit'>{{ $place->time_required_to_visit }}</td>
                                <td field-key='categories'>{{ $place->categories }}</td>
                                <td field-key='esb_visiblity'>{{ $place->esb_visiblity }}</td>
                                <td field-key='address'>{!! $place->address !!}</td>
                                <td field-key='place_longitude'>{{ $place->place_longitude }}</td>
                                <td field-key='place_latitude'>{{ $place->place_latitude }}</td>
                                <td field-key='city'>
                                    @foreach ($place->city as $singleCity)
                                        <span class="label label-info label-many">{{ $singleCity->title }}</span>
                                    @endforeach
                                </td>
                                <td field-key='featured_image'>@if($place->featured_image)<a href="{{ asset(env('UPLOAD_PATH').'/' . $place->featured_image) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/' . $place->featured_image) }}"/></a>@endif</td>
                                <td field-key='gallery'>@if($place->gallery)<a href="{{ asset(env('UPLOAD_PATH').'/' . $place->gallery) }}" target="_blank"><img src="{{ asset(env('UPLOAD_PATH').'/thumb/' . $place->gallery) }}"/></a>@endif</td>
                                <td field-key='cuisine'>{{ $place->cuisine }}</td>
                                <td field-key='recommended'>{{ $place->recommended }}</td>
                                <td field-key='partner'>{{ $place->partner }}</td>
                                <td field-key='place_tripadvisor_id'>{{ $place->place_tripadvisor_id }}</td>
                                <td field-key='city_id'>{{ $place->city_id }}</td>
                                <td field-key='created_by'>{{ $place->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $place->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['places.restore', $place->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['places.perma_del', $place->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('places.show',[$place->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('places.edit',[$place->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['places.destroy', $place->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="26">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="query">
<table class="table table-bordered table-striped {{ count($queries) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.query.fields.driver-pickup-date-time')</th>
            <th>@lang('quickadmin.query.fields.booking-id')</th>
                        <th>@lang('quickadmin.query.fields.budget')</th>
                        <th>@lang('quickadmin.query.fields.traveler-name')</th>
                        <th>@lang('quickadmin.query.fields.bill-pay')</th>
                        <th>@lang('quickadmin.query.fields.no-of-adults')</th>
                        <th>@lang('quickadmin.query.fields.no-of-children')</th>
                        <th>@lang('quickadmin.query.fields.note')</th>
                        <th>@lang('quickadmin.query.fields.status')</th>
                        <th>@lang('quickadmin.query.fields.phone')</th>
                        <th>@lang('quickadmin.query.fields.email')</th>
                        <th>@lang('quickadmin.query.fields.email-second')</th>
                        <th>@lang('quickadmin.query.fields.created-by')</th>
                        <th>@lang('quickadmin.query.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($queries) > 0)
            @foreach ($queries as $query)
                <tr data-entry-id="{{ $query->id }}">
                    <td field-key='driver_pickup_date_time'>{{ $query->driver_pickup_date_time }}</td>
                    <td field-key='booking_id'>{{ $query->booking_id }}</td>
                                <td field-key='budget'>{{ $query->budget }}</td>
                                <td field-key='traveler_name'>{{ $query->traveler_name }}</td>
                                <td field-key='bill_pay'>{{ $query->bill_pay }}</td>
                                <td field-key='no_of_adults'>{{ $query->no_of_adults }}</td>
                                <td field-key='no_of_children'>{{ $query->no_of_children }}</td>
                                <td field-key='note'>{{ $query->note }}</td>
                                <td field-key='status'>{{ $query->status }}</td>
                                <td field-key='phone'>{{ $query->phone }}</td>
                                <td field-key='email'>{{ $query->email }}</td>
                                <td field-key='email_second'>{{ $query->email_second }}</td>
                                <td field-key='created_by'>{{ $query->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $query->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['queries.restore', $query->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['queries.perma_del', $query->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('queries.show',[$query->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('queries.edit',[$query->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['queries.destroy', $query->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="41">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="booking">
<table class="table table-bordered table-striped {{ count($bookings) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.booking.fields.booking-id')</th>
                        <th>@lang('quickadmin.booking.fields.full-name')</th>
                        <th>@lang('quickadmin.booking.fields.email')</th>
                        <th>@lang('quickadmin.booking.fields.activated')</th>
                        <th>@lang('quickadmin.booking.fields.score')</th>
                        <th>@lang('quickadmin.booking.fields.created-by')</th>
                        <th>@lang('quickadmin.booking.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($bookings) > 0)
            @foreach ($bookings as $booking)
                <tr data-entry-id="{{ $booking->id }}">
                    <td field-key='booking_id'>{{ $booking->booking_id }}</td>
                                <td field-key='full_name'>{{ $booking->full_name }}</td>
                                <td field-key='email'>{{ $booking->email }}</td>
                                <td field-key='activated'>{{ $booking->activated }}</td>
                                <td field-key='score'>{{ $booking->score }}</td>
                                <td field-key='created_by'>{{ $booking->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $booking->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['bookings.restore', $booking->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['bookings.perma_del', $booking->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('bookings.show',[$booking->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('bookings.edit',[$booking->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['bookings.destroy', $booking->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="44">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
<div role="tabpanel" class="tab-pane " id="group">
<table class="table table-bordered table-striped {{ count($groups) > 0 ? 'datatable' : '' }}">
    <thead>
        <tr>
            <th>@lang('quickadmin.group.fields.booking-id')</th>
                        <th>@lang('quickadmin.group.fields.full-name')</th>
                        <th>@lang('quickadmin.group.fields.email')</th>
                        <th>@lang('quickadmin.group.fields.activated')</th>
                        <th>@lang('quickadmin.group.fields.created-by')</th>
                        <th>@lang('quickadmin.group.fields.created-by-team')</th>
                        @if( request('show_deleted') == 1 )
                        <th>&nbsp;</th>
                        @else
                        <th>&nbsp;</th>
                        @endif
        </tr>
    </thead>

    <tbody>
        @if (count($groups) > 0)
            @foreach ($groups as $group)
                <tr data-entry-id="{{ $group->id }}">
                    <td field-key='booking_id'>{{ $group->booking_id }}</td>
                                <td field-key='full_name'>{{ $group->full_name }}</td>
                                <td field-key='email'>{{ $group->email }}</td>
                                <td field-key='activated'>{{ $group->activated }}</td>
                                <td field-key='created_by'>{{ $group->created_by->name or '' }}</td>
                                <td field-key='created_by_team'>{{ $group->created_by_team->name or '' }}</td>
                                @if( request('show_deleted') == 1 )
                                <td>
                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'POST',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['groups.restore', $group->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_restore'), array('class' => 'btn btn-xs btn-success')) !!}
                                    {!! Form::close() !!}
                                                                    {!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['groups.perma_del', $group->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_permadel'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                                                </td>
                                @else
                                <td>
                                    @can('view')
                                    <a href="{{ route('groups.show',[$group->id]) }}" class="btn btn-xs btn-primary">@lang('quickadmin.qa_view')</a>
                                    @endcan
                                    @can('edit')
                                    <a href="{{ route('groups.edit',[$group->id]) }}" class="btn btn-xs btn-info">@lang('quickadmin.qa_edit')</a>
                                    @endcan
                                    @can('delete')
{!! Form::open(array(
                                        'style' => 'display: inline-block;',
                                        'method' => 'DELETE',
                                        'onsubmit' => "return confirm('".trans("quickadmin.qa_are_you_sure")."');",
                                        'route' => ['groups.destroy', $group->id])) !!}
                                    {!! Form::submit(trans('quickadmin.qa_delete'), array('class' => 'btn btn-xs btn-danger')) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                </td>
                                @endif
                </tr>
            @endforeach
        @else
            <tr>
                <td colspan="48">@lang('quickadmin.qa_no_entries_in_table')</td>
            </tr>
        @endif
    </tbody>
</table>
</div>
</div>

            <p>&nbsp;</p>

            <a href="{{ route('admin.users.index') }}" class="btn btn-default">@lang('quickadmin.qa_back_to_list')</a>
        </div>
    </div>
@stop
