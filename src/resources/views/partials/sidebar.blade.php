@inject('request', 'Illuminate\Http\Request')
<!-- Left side column. contains the sidebar -->
@if(Auth::user()->role[0]->title!=='subscriber')
<aside class="vertical-menu p-a" style="z-index:850;height:100% !important;background-image:url({{asset("uploads/dashboard_resources/ItenararyBackground.png")}}">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <ul class="sidebar-menu">
            @if(Auth::user()->role[0]->title!=='subscriber')
@can('data_analysis')
            <li>
                <a href="{{ url('/') }}">
                    <img src="{{asset("uploads/dashboard_resources/dashboard_Icon.png")}}" class="h-35">
                    <span class="title icon-name">@lang('quickadmin.qa_dashboard')</span>
                </a>
            </li>

@else
                <li>
                 <a href="#" > <i style="text-align: left; font-size: 20px;padding: 8px;" class="fa fa-lock" title="Dashboard Locked" aria-hidden="true"></i>
                     <span class="title icon-name">Dashboard Locked</span>
                 </a>

                </li>

@endcan

{{--    create_agent--}}
            <li  v-if="{!! \App\User::create_agent() !!}==1">
                <router-link :to="{ name: 'create_agent' }">
                    <img src="{{asset("uploads/dashboard_resources/usermanager.png")}}" class="h-35">
                    <span class="title icon-name">Create Agent</span>
                </router-link>
            </li>


            <li class="treeview" v-if="$can('user_management_access')">
                <a href="#">
                    <img src="{{asset("uploads/dashboard_resources/usermanager.png")}}" style="height: 35px">
                    <span style="margin-left: 20%; padding-top: 25%; height: 59px;z-index: 1;">@lang('quickadmin.user-management.title')</span>
                    {{--                    <span class="pull-right-container" style="margin-top: -8%">--}}
                    {{--                       <i class="fa fa-angle-right" aria-hidden="true"></i>--}}
                    {{--                    </span>--}}
                </a>
                <ul class="treeview-menu"  style="margin-left: 23%; padding-top: 25%;">
                    <li v-if="$can('permission_access')">
                        <router-link :to="{ name: 'permissions.index' }">
                            <img src="{{asset("uploads/dashboard_resources/permission.png")}}" class="h-35">
                            <span>@lang('quickadmin.permissions.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('role_access')">
                        <router-link :to="{ name: 'roles.index' }">
                            <img src="{{asset("uploads/dashboard_resources/roles.png")}}" class="h-35">
                            <span>@lang('quickadmin.roles.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('user_access')">
                        <router-link :to="{ name: 'users.index' }">
                            <img src="{{asset("uploads/dashboard_resources/user.png")}}" class="h-35">
                            <span>@lang('quickadmin.users.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('user_access')">
                        <router-link :to="{ name: 'users.client' }">
                            <img src="{{asset("uploads/dashboard_resources/user.png")}}" class="h-35">
                            <span>Clients</span>
                        </router-link>
                    </li>
                    <li v-if="$can('user_action_access')">
                        <router-link :to="{ name: 'user_actions.index' }">
                            <img src="{{asset("uploads/dashboard_resources/useraction.png")}}" class="h-35">
                            <span>@lang('quickadmin.user-actions.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('team_access')">
                        <router-link :to="{ name: 'teams.index' }">
                            <img src="{{asset("uploads/dashboard_resources/team.png")}}" class="h-35">
                            <span>@lang('quickadmin.teams.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('customer_access')">
                        <router-link :to="{ name: 'customers.index' }">
                            <i class="fa fa-user"></i>
                            <span>@lang('quickadmin.customer.title')</span>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li v-if="$can('country_access')">
                <router-link :to="{ name: 'countries.index' }">
                    <img src="{{asset("uploads/dashboard_resources/country.png")}}" class="h-35">
                    <span  class="title icon-name">@lang('quickadmin.country.title')</span>
                </router-link>
            </li>
            {{--            <li v-if="$can('country_access')" >--}}
            {{--                <router-link :to="{ name: 'reward.reward' }">--}}
            {{--                    <img src="{{asset("uploads/dashboard_resources/country.png")}}" style="height: 35px;">--}}
            {{--                    <span>@lang('quickadmin.reward.title')</span>--}}
            {{--                </router-link>--}}
            {{--            </li>--}}
            {{--            <li>--}}
            {{--                <a href="{{ url('/') }}">--}}
            {{--                    <img src="{{asset("uploads/dashboard_resources/dashboard_Icon.png")}}" style="height: 35px;">--}}
            {{--                    <span class="title">@lang('quickadmin.qa_dashboard')</span>--}}
            {{--                </a>--}}
            {{--            </li>--}}
            <li v-if="$can('state_access')">
                <router-link :to="{ name: 'states.index' }">
                    <img src="{{asset("uploads/dashboard_resources/state.png")}}" class="h-35">
                    <span  class="icon-name">@lang('quickadmin.state.title')</span>
                </router-link>
            </li>
            <li v-if="$can('city_access')">
                <router-link :to="{ name: 'cities.index' }">
                    <img src="{{asset("uploads/dashboard_resources/city.png")}}" class="h-35">
                    <span  class="icon-name">@lang('quickadmin.city.title')</span>
                </router-link>
            </li>
    @if(auth()->user()->id=='1')
    <li class="treeview" v-if="$can('place_access')">
        <a href="#">
            <img src="{{asset("uploads/dashboard_resources/place.png")}}" style="height: 35px">
            <span style="margin-left: 20%; padding-top: 25%; height: 59px;z-index: 1;">Place Management</span>
            {{--                    <span class="pull-right-container" style="margin-top: -8%">--}}
            {{--                       <i class="fa fa-angle-right" aria-hidden="true"></i>--}}
            {{--                    </span>--}}
        </a>
        <ul class="treeview-menu"  style="margin-left: 23%; padding-top: 25%;">
            <li v-if="$can('place_access')">
                <router-link :to="{ name: 'places.index' }">
                    <img src="{{asset("uploads/dashboard_resources/place.png")}}" class="h-35">
                    <span  class="">@lang('quickadmin.place.title')</span>
                </router-link>
            </li>
            <li v-if="$can('place_access')">
                <router-link :to="{ name: 'categories.index' }">
                    <img src="{{asset("uploads/dashboard_resources/place.png")}}" class="h-35">
                    <span  class="">Place Categories</span>
                </router-link>
            </li>

        </ul>
    </li>
    @endif


{{--            @if(auth()->user()->id=='1')--}}
{{--                <li v-if="$can('place_access')">--}}
{{--                    <router-link :to="{ name: 'places.index' }">--}}
{{--                        <img src="{{asset("uploads/dashboard_resources/place.png")}}" class="h-35">--}}
{{--                        <span  class="icon-name">@lang('quickadmin.place.title')</span>--}}
{{--                    </router-link>--}}
{{--                </li>--}}
{{--            @endif--}}
{{--    @if(auth()->user()->id=='1')--}}
{{--        <li v-if="$can('place_access')">--}}
{{--            <router-link :to="{ name: 'categories.index' }">--}}
{{--                <img src="{{asset("uploads/dashboard_resources/place.png")}}" class="h-35">--}}
{{--                <span  class="icon-name">Place Categories</span>--}}
{{--            </router-link>--}}
{{--        </li>--}}
{{--    @endif--}}

            <li v-if="$can('accommodation_access')">
                <router-link :to="{ name: 'accommodations.index' }">
                    <img src="{{asset("uploads/dashboard_resources/accomadation.png")}}" class="h-35">
                    <span  class="icon-name">@lang('quickadmin.accommodation.title')</span>
                </router-link>
            </li>
            <li v-if="$can('exhibitor_access')">
                <router-link :to="{ name: 'exhibitors.index' }">
                    <img src="{{asset("uploads/dashboard_resources/exhibitor.png")}}" class="h-35">
                    <span  class="icon-name">@lang('quickadmin.exhibitors.title')</span>
                </router-link>
            </li>
            <li v-if="$can('field_operator_access')">
                <router-link :to="{ name: 'field_operators.index' }">
                    <img src="{{asset("uploads/dashboard_resources/fieldoperator.png")}}" class="h-35">
                    <span  class="icon-name">@lang('quickadmin.field-operator.title')</span>
                </router-link>
            </li>
            <li v-if="$can('room_access')">
                <router-link :to="{ name: 'rooms.index' }">
                    <img src="{{asset("uploads/dashboard_resources/rooms.png")}}" class="h-35">
                    <span  class="icon-name">@lang('quickadmin.rooms.title')</span>
                </router-link>
            </li>

@can('lead_mng_sys')
            <li class="treeview" v-if="$can('lead_access')">
                <a href="#">
                    <img src="{{asset("uploads/dashboard_resources/usermanager.png")}}" class="h-35">
                    <span style="margin-left: 20%; padding-top: 25%; height: 59px;z-index: 1;">Leads</span>

                </a>
                <ul class="treeview-menu" style="margin-left: 23%; padding-top: 25%;">
{{--                    @if(Auth::user()->role[0]->title!=='agency')--}}
                    <li v-if="$can('lead_access')">
                        <router-link :to="{ name: 'leads.create' }">
                            <img src="{{asset("uploads/dashboard_resources/Lead_Icon.png")}}" class="h-35">
                            <span>Create A Lead</span>
                        </router-link>
                    </li>
{{--                    @endif--}}
                    <li v-if="$can('lead_access')">
                        <router-link :to="{ name: 'leads.index' }">
                            <img src="{{asset("uploads/dashboard_resources/Lead_Icon.png")}}" class="h-35">
                            <span>My Leads</span>
                        </router-link>
                    </li>
                    <li v-if="$can('lead_access')">
                        <router-link :to="{ name: 'leads.newleads' }">
                            <img src="{{asset("uploads/dashboard_resources/Lead_Icon.png")}}" class="h-35">
                            <span>Common Leads</span>
                        </router-link>
                    </li>

                </ul>
            </li>
    @else
        <li>
            <a href="#" > <i style="text-align: left; font-size: 20px;padding: 8px;" class="fa fa-lock" title="Leads Locked" aria-hidden="true"></i>
                <span class="title icon-name">Leads Locked</span>
            </a>

        </li>
@endcan
    @can('quotation_gen')
            <li v-if="$can('query_access')">
                <a href="#">
                    <img src="{{asset("uploads/dashboard_resources/Query_Icon.png")}}" class="h-35">
                    <span style="margin-left: 20%; padding-top: 25%; height: 59px;z-index: 1;">Query</span>

                </a>
                <ul class="treeview-menu" style="margin-left: 23%; padding-top: 25%;">

                    @if(Auth::user()->role[0]->title!=='agency')
                    <li v-if="$can('query_access')">
                        <router-link :to="{ name: 'queries.create' }">
                            <img src="{{asset("uploads/dashboard_resources/Query_Icon.png")}}" class="h-35">
                            <span >Create Query</span>
                        </router-link>

                    </li>
@endif
                    <li v-if="$can('query_access')">
                        <router-link :to="{ name: 'queries.index' }">
                            <img src="{{asset("uploads/dashboard_resources/Query_Icon.png")}}" class="h-35">
                            <span >Query List</span>
                        </router-link>

                    </li>


                </ul>


            </li>
    @else
        <li>
            <a href="#" > <i style="text-align: left; font-size: 20px;padding: 8px;" class="fa fa-lock" title="Query Locked" aria-hidden="true"></i>
                <span class="title icon-name">Query Locked</span>
            </a>

        </li>
    @endcan
    @can('booking_accessL')
            <li v-if="$can('booking_access')">

                <a href="#">
                    <img src="{{asset("uploads/dashboard_resources/booking.png")}}" class="h-35">
                    <span style="margin-left: 20%; padding-top: 25%; height: 59px;z-index: 1;">Booking</span>

                </a>
                <ul class="treeview-menu" style="margin-left: 23%; padding-top: 25%;">
                    @if(Auth::user()->role[0]->title!=='agency')
                        @if (!Gate ::check('me_visa'))
                    <li v-if="$can('booking_access')">
                        <router-link :to="{ name: 'bookings.create' }">
                            <img src="{{asset("uploads/dashboard_resources/booking.png")}}" class="h-35">
                            <span >Create Booking</span>
                        </router-link>

@endif
                    </li>
@endif
                    <li v-if="$can('booking_access')">
                        <router-link :to="{ name: 'bookings.index' }">
                            <img src="{{asset("uploads/dashboard_resources/booking.png")}}" class="h-35">
                            <span >Booking List</span>
                        </router-link>


                    </li>


                </ul>

            </li>
    @else
        <li>
            <a href="#" > <i style="text-align: left; font-size: 20px;padding: 8px;" class="fa fa-lock" title="Query Locked" aria-hidden="true"></i>
                <span class="title icon-name">Booking Locked</span>
            </a>

        </li>
    @endcan
    @can('group_module')
                        <li v-if="$can('group_access')">

                            <a href="#">
                                <img src="{{asset("uploads/dashboard_resources/Group_Icon.png")}}" class="h-35">
                                <span  style="margin-left: 20%; padding-top: 25%; height: 59px;z-index: 1;">@lang('quickadmin.group.title')</span>

                            </a>
                            <ul class="treeview-menu" style="margin-left: 23%; padding-top: 25%;">
                                @if(Auth::user()->role[0]->title!=='agency')
                                    @if (!Gate ::check('me_visa'))
                                    <li v-if="$can('group_access')">
                                        <router-link :to="{ name: 'groups.create' }">
                                            <img src="{{asset("uploads/dashboard_resources/Group_Icon.png")}}" class="h-35">
                                            <span >Create Group</span>
                                        </router-link>


                                    </li>

                                    <li v-if="$can('group_access')">
                                        <router-link :to="{ name: 'groups.approve' }">
                                            <img src="{{asset("uploads/dashboard_resources/Group_Icon.png")}}" class="h-35">
                                            <span >Approve Members</span>
                                        </router-link>


                                    </li>
                                @endif
                                @endif
                                <li v-if="$can('group_access')">
                                    <router-link :to="{ name: 'groups.index' }">
                                        <img src="{{asset("uploads/dashboard_resources/Group_Icon.png")}}" class="h-35">
                                        <span >Group List</span>
                                    </router-link>


                                </li>
{{--                                    @if(Auth::user()->approval_level!=0)--}}
{{--                                    <li >--}}
{{--                                        <router-link :to="{ name: 'groups.wallet' }">--}}
{{--                                            <img src="{{asset("uploads/dashboard_resources/Group_Icon.png")}}" class="h-35">--}}
{{--                                            <span >Approve Wallet</span>--}}
{{--                                        </router-link>--}}


{{--                                    </li>--}}
{{--                                    @endif--}}


                            </ul>

                        </li>

        <li v-if="$can('group_access')">
            <router-link :to="{ name: 'hub' }">
                <img src="{{asset("uploads/dashboard_resources/accomadation.png")}}" class="h-35">
                <span class="title icon-name">Hub</span>
            </router-link>
        </li>


    @endcan

            @if(Auth::user()->role[0]->title=='agency')
                <li v-if="$can('user_access')">


                    <a  href="{{url('agency/'.auth()->user()->id.'/setting')}}">
                        <img src="{{asset("uploads/dashboard_resources/setting_Icon.png")}}" class="h-35">
                        <span  class="icon-name">Settings</span>
                    </a>

                </li>
            @endif
    @if (!Gate ::check('me_visa'))
            <li v-if="$can('group_access')">
                <router-link :to="{ name: 'feedback.index' }">
                    <img src="{{asset("uploads/dashboard_resources/querylistdown.png")}}" class="h-35">
                    <span class="title icon-name">Feedback</span>
                </router-link>
            </li>
            @endif
            @if(Auth::user()->role[0]->title=='lms_agent')
            <li >

                <router-link :to="{ name: 'poll.index' }">
                    <img src="{{asset("uploads/dashboard_resources/polling.png")}}" class="h-35">
                    <span class="title icon-name">Poll</span>
                </router-link>
            </li>
            @endif



            @if(auth()->user()->id=='1')
                <li v-if="$can('tour_access')">
                    <router-link :to="{ name: 'tours.index' }">
                        <img src="{{asset("uploads/dashboard_resources/tour.png")}}" class="h-35">
                        <span  class="icon-name">@lang('quickadmin.tour.title')</span>
                    </router-link>
                </li>
            @endif
    @can('cust_info_repo')
            <li v-if="$can('lead_access')">
                <router-link :to="{ name: 'travellers.index' }">
                    <img src="{{asset("uploads/dashboard_resources/travellers.png")}}" class="h-35">
                    <span class="icon-name">@lang('quickadmin.travellers.title')</span>
                </router-link>
            </li>
    @else
        <li>
            <a href="#" > <i style="text-align: left; font-size: 20px;padding: 8px;" class="fa fa-lock" title="Traveller Locked" aria-hidden="true"></i>
                <span class="title icon-name">Traveller Locked</span>
            </a>

        </li>
    @endcan


    @can('task_rem')
        @if(Auth::user()->role[0]->title!=='agency')
            @if (!Gate ::check('me_visa'))

            <li v-if="$can('task_access')">
                <router-link :to="{ name: 'tasks.index' }">
                    <img src="{{asset("uploads/dashboard_resources/supplieritinerarydown.png")}}" class="h-35">
                    <span  class="icon-name">@lang('quickadmin.task.title')</span>
                </router-link>
            </li>
            @endif @endif
    @else
        <li>
            <a href="#" > <i style="text-align: left; font-size: 20px;padding: 8px;" class="fa fa-lock" title="Task Locked" aria-hidden="true"></i>
                <span class="title icon-name">Task Locked</span>
            </a>

        </li>

    @endcan

            @if(Auth::user()->role[0]->title!=='agency' && Auth::user()->role[0]->title!=='Admin')
                <li v-if="$can('task_access')">
                    <router-link :to="{ name: 'task_history' }">
                        <img src="{{asset("uploads/dashboard_resources/taskhistory.png")}}" class="h-35">
                        <span  class="icon-name">Task History</span>
                    </router-link>
                </li>
            @endif

            @if(Auth::user()->role[0]->title!=='agency' && Auth::user()->role[0]->title!=='Admin')
            <li v-if="$can('task_access')">
                <router-link :to="{ name: 'passport_tracking' }">
                    <img src="{{asset("uploads/dashboard_resources/passport-tracker.png")}}" class="h-35">
                    <span  class="icon-name">Passport Tracking</span>
                </router-link>
            </li>
            @endif

            <li v-if="$can('driver_access')">
                <router-link :to="{ name: 'drivers.index' }">
                    <img src="{{asset("uploads/dashboard_resources/driver.png")}}" class="h-35">
                    <span  class="icon-name">Tour Manager</span>
                </router-link>
            </li>
            <li class="treeview" v-if="$can('field_roal_access')">
                <a href="#">
                    <img src="{{asset("uploads/dashboard_resources/fieldroles.png")}}" class="h-35">
                    <span style="margin-left: 20%; padding-top: 25%; height: 59px;z-index: 1;">@lang('quickadmin.field-roals.title')</span>
                    {{--                    <span class="pull-right-container" style="margin-top: -5%">--}}
                    {{--                       <i class="fa fa-angle-right" aria-hidden="true"></i>--}}
                    {{--                    </span>--}}
                </a>
                <ul class="treeview-menu" style="margin-left: 23%; padding-top: 25%;">
                    <li v-if="$can('tour_manager_access')">
                        <router-link :to="{ name: 'tour_managers.index' }">
                            <img src="{{asset("uploads/dashboard_resources/tourman.png")}}" style="height: 35px;border-radius:20px">
                            <span>@lang('quickadmin.tour-manager.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('guide_access')">
                        <router-link :to="{ name: 'guides.index' }">
                            <img src="{{asset("uploads/dashboard_resources/guideroles.png")}}" class="h-35">
                            <span>@lang('quickadmin.guide.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('activities_handler_access')">
                        <router-link :to="{ name: 'activities_handlers.index' }">
                            <img src="{{asset("uploads/dashboard_resources/supplieritinerarydown.png")}}" class="h-35">
                            <span>@lang('quickadmin.activities-handler.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('driver_role_access')">
                        <router-link :to="{ name: 'driver_roles.index' }">
                            <img src="{{asset("uploads/dashboard_resources/driverRoles.png")}}" class="h-35">
                            <span>@lang('quickadmin.driver-role.title')</span>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="treeview" v-if="$can('basic_crm_access')">
                <a href="#">
                    <img src="{{asset("uploads/dashboard_resources/basicCRM.png")}}" class="h-35">
                    <span style="margin-left: 20%; padding-top: 25%; height: 59px;z-index: 1;">@lang('quickadmin.basic-crm.title')</span>
                    {{--                    <span class="pull-right-container" style="margin-top: -5%">--}}
                    {{--                        <i class="fa fa-angle-right" aria-hidden="true"></i>--}}
                    {{--                    </span>--}}
                </a>
                <ul class="treeview-menu" style="margin-left: 23%; padding-top: 25%;">
                    <li v-if="$can('crm_status_access')">
                        <router-link :to="{ name: 'crm_statuses.index' }">
                            <img src="{{asset("uploads/dashboard_resources/status.png")}}" class="h-35">
                            <span>@lang('quickadmin.crm-statuses.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('crm_customer_access')">
                        <router-link :to="{ name: 'crm_customers.index' }">
                            <img src="{{asset("uploads/dashboard_resources/customer.png")}}" class="h-35">
                            <span>@lang('quickadmin.crm-customers.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('crm_note_access')">
                        <router-link :to="{ name: 'crm_notes.index' }">
                            <img src="{{asset("uploads/dashboard_resources/notes.png")}}" class="h-35">
                            <span>@lang('quickadmin.crm-notes.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('crm_document_access')">
                        <router-link :to="{ name: 'crm_documents.index' }">
                            <img src="{{asset("uploads/dashboard_resources/documents.png")}}" class="h-35">
                            <span>@lang('quickadmin.crm-documents.title')</span>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="treeview" v-if="$can('faq_management_access')">
                <a href="#">
                    <img src="{{asset("uploads/dashboard_resources/FAQmanagement.png")}}" class="h-35">
                    <span style="margin-left: 20%; padding-top: 25%; height: 59px;z-index: 1;">@lang('quickadmin.faq-management.title')</span>
                    {{--                    <span class="pull-right-container" style="margin-top: -5%">--}}
                    {{--                       <i class="fa fa-angle-right" aria-hidden="true"></i>--}}
                    {{--                    </span>--}}
                </a>
                <ul class="treeview-menu" style="margin-left: 23%; padding-top: 25%;">
                    <li v-if="$can('faq_category_access')">
                        <router-link :to="{ name: 'faq_categories.index' }">
                            <img src="{{asset("uploads/dashboard_resources/category.png")}}" class="h-35">
                            <span>@lang('quickadmin.faq-categories.title')</span>
                        </router-link>
                    </li>
                    <li v-if="$can('faq_question_access')">
                        <router-link :to="{ name: 'faq_questions.index' }">
                            <img src="{{asset("uploads/dashboard_resources/question.png")}}" class="h-35">
                            <span>@lang('quickadmin.faq-questions.title')</span>
                        </router-link>
                    </li>
                </ul>
            </li>
    @can('multi_broadcast')
            <li v-if="$can('broadcasting_access')">
                <router-link :to="{ name: 'broadcastings.index' }">
                    <img src="{{asset("uploads/dashboard_resources/broadcasting.png")}}" class="h-35">
                    <span class="icon-name">Broadcasting</span>
                </router-link>
            </li>

    @else
        <li>
            <a href="#" > <i style="text-align: left; font-size: 20px;padding: 8px;" class="fa fa-lock" title="Broadcasting Locked" aria-hidden="true"></i>
                <span class="title icon-name">Broadcasting Locked</span>
            </a>

        </li>
    @endcan
                {{--{{Gate ::check('me_visa')}}--}}

    @if (!Gate ::check('me_visa'))
            <li v-if="$can('form_access')">
                <router-link :to="{ name: 'forms.index' }">
                    <img src="{{asset("uploads/dashboard_resources/form.png")}}" class="h-35">
                    <span class="icon-name">Forms</span>
                </router-link>
            </li>
                        @endif @endif
                @if(Auth::user()->role[0]->title==='subscriber')
                    <li>
                        <router-link :to="{ name: 'dashboard.Indexhometraveller' }">
                            <img src="{{asset("uploads/dashboard_resources/user.png")}}" class="h-35">
                            <span class="title icon-name">Profile</span>
                        </router-link>
                    </li>
                @endif





            <li>
                <router-link :to="{ name: 'auth.change_password' }">
                    <img src="{{asset("uploads/dashboard_resources/changepassword.png")}}" class="h-35">
                    <span class="title icon-name">@lang('quickadmin.qa_change_password')</span>
                </router-link>
            </li>
        </ul>
    </section>
</aside>
@endif
