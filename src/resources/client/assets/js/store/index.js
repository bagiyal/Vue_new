import Vue from 'vue'
import Vuex from 'vuex'
import Alert from './modules/alert'
import ChangePassword from './modules/change_password'
import Rules from './modules/rules'
import PermissionsIndex from './modules/Permissions'
import PermissionsSingle from './modules/Permissions/single'
import RolesIndex from './modules/Roles'
import RolesSingle from './modules/Roles/single'
import UsersIndex from './modules/Users'
import UserClient from './modules/Users/clients'
import UsersSingle from './modules/Users/single'
import UserActionsIndex from './modules/UserActions'
import TeamsIndex from './modules/Teams'
import TeamsSingle from './modules/Teams/single'
import CountriesIndex from './modules/Countries'
import CountriesSingle from './modules/Countries/single'
import StatesIndex from './modules/States'
import StatesSingle from './modules/States/single'
import CitiesIndex from './modules/Cities'
import CitiesSingle from './modules/Cities/single'
import PlacesIndex from './modules/Places'
import PlacesSingle from './modules/Places/single'
import AccommodationsIndex from './modules/Accommodations'
import AccommodationsSingle from './modules/Accommodations/single'
import ExhibitorsIndex from './modules/Exhibitors'
import ExhibitorsSingle from './modules/Exhibitors/single'
import FieldOperatorsIndex from './modules/FieldOperators'
import FieldOperatorsSingle from './modules/FieldOperators/single'
import RoomsIndex from './modules/Rooms'
import RoomsSingle from './modules/Rooms/single'
import QueriesIndex from './modules/Queries'
import QueriesSingle from './modules/Queries/single'
import LeadsIndex from './modules/Leads'
import LeadsSingle from './modules/Leads/single'
import LeadsIndex2 from './modules/Leads/index2'
import BookingsIndex from './modules/Bookings'
import BookingsSingle from './modules/Bookings/single'
import GroupsIndex from './modules/Groups'
import GroupsSingle from './modules/Groups/single'
import GroupsIndexMember from './modules/Groups/indexmember'
import GroupAllMember from './modules/Groups/AllGroupMembers'
import ToursIndex from './modules/Tours'
import ToursSingle from './modules/Tours/single'
import DriversIndex from './modules/Drivers'
import DriversSingle from './modules/Drivers/single'
import CrmStatusesIndex from './modules/CrmStatuses'
import CrmStatusesSingle from './modules/CrmStatuses/single'
import CrmCustomersIndex from './modules/CrmCustomers'
import CrmCustomersSingle from './modules/CrmCustomers/single'
import CrmNotesIndex from './modules/CrmNotes'
import CrmNotesSingle from './modules/CrmNotes/single'
import CrmDocumentsIndex from './modules/CrmDocuments'
import CrmDocumentsSingle from './modules/CrmDocuments/single'
import FaqCategoriesIndex from './modules/FaqCategories'
import FaqCategoriesSingle from './modules/FaqCategories/single'
import FaqQuestionsIndex from './modules/FaqQuestions'
import FaqQuestionsSingle from './modules/FaqQuestions/single'
import CustomersIndex from './modules/Customers'
import CustomersSingle from './modules/Customers/single'

import TravellersIndex from './modules/Travellers'
import TravellersSingle from './modules/Travellers/single'
import TasksIndex from './modules/Tasks'
import TasksSingle from './modules/Tasks/single'
import BroadcastingsIndex from './modules/Broadcastings'
import BroadcastingsSingle from './modules/Broadcastings/single'
import FormsIndex from './modules/Forms'
import FormsSingle from './modules/Forms/single'
import FeedbackIndex from './modules/Feedback'
import CategoriesIndex from './modules/Categories'
import PollIndex from './modules/Poll'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        Alert,
        ChangePassword,
        Rules,
        PermissionsIndex,
        PermissionsSingle,
        RolesIndex,
        RolesSingle,
        UsersIndex,
        UserClient,
        UsersSingle,
        UserActionsIndex,
        TeamsIndex,
        TeamsSingle,
        CountriesIndex,
        CountriesSingle,
        StatesIndex,
        StatesSingle,
        CitiesIndex,
        CitiesSingle,
        PlacesIndex,
        PlacesSingle,
        AccommodationsIndex,
        AccommodationsSingle,
        ExhibitorsIndex,
        ExhibitorsSingle,
        FieldOperatorsIndex,
        FieldOperatorsSingle,
        RoomsIndex,
        RoomsSingle,
        QueriesIndex,
        QueriesSingle,
        LeadsIndex,
        LeadsSingle,
        LeadsIndex2,
        BookingsIndex,
        BookingsSingle,
        GroupsIndex,
        GroupsIndexMember,
        GroupAllMember,
        GroupsSingle,
        ToursIndex,
        ToursSingle,
        DriversIndex,
        DriversSingle,
        CrmStatusesIndex,
        CrmStatusesSingle,
        CrmCustomersIndex,
        CrmCustomersSingle,
        CrmNotesIndex,
        CrmNotesSingle,
        CrmDocumentsIndex,
        CrmDocumentsSingle,
        FaqCategoriesIndex,
        FaqCategoriesSingle,
        FaqQuestionsIndex,
        FaqQuestionsSingle,
        CustomersIndex,
        CustomersSingle,
        FeedbackIndex,
        TravellersIndex,
        TravellersSingle,
        TasksIndex,
        TasksSingle,
        BroadcastingsIndex,
        BroadcastingsSingle,
        FormsIndex,
        FormsSingle,
        CategoriesIndex,
        PollIndex
    },
    strict: debug,
})
