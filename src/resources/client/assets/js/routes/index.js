import Vue from 'vue'
import VueRouter from 'vue-router'

import ChangePassword from '../components/ChangePassword.vue'
import PermissionsIndex from '../components/cruds/Permissions/Index.vue'
import PermissionsCreate from '../components/cruds/Permissions/Create.vue'
import PermissionsShow from '../components/cruds/Permissions/Show.vue'
import PermissionsEdit from '../components/cruds/Permissions/Edit.vue'
import RolesIndex from '../components/cruds/Roles/Index.vue'
import RolesCreate from '../components/cruds/Roles/Create.vue'
import RolesShow from '../components/cruds/Roles/Show.vue'
import RolesEdit from '../components/cruds/Roles/Edit.vue'
import UsersIndex from '../components/cruds/Users/Index.vue'
import UsersClient from '../components/cruds/Users/clients.vue'

import UsersCreate from '../components/cruds/Users/Create.vue'
import UsersShow from '../components/cruds/Users/Show.vue'
import UsersEdit from '../components/cruds/Users/Edit.vue'
import UserActionsIndex from '../components/cruds/UserActions/Index.vue'
import TeamsIndex from '../components/cruds/Teams/Index.vue'
import TeamsCreate from '../components/cruds/Teams/Create.vue'
import TeamsShow from '../components/cruds/Teams/Show.vue'
import TeamsEdit from '../components/cruds/Teams/Edit.vue'
import CountriesIndex from '../components/cruds/Countries/Index.vue'
import CountriesCreate from '../components/cruds/Countries/Create.vue'
import CountriesShow from '../components/cruds/Countries/Show.vue'
import CountriesEdit from '../components/cruds/Countries/Edit.vue'
import StatesIndex from '../components/cruds/States/Index.vue'
import StatesCreate from '../components/cruds/States/Create.vue'
import StatesShow from '../components/cruds/States/Show.vue'
import StatesEdit from '../components/cruds/States/Edit.vue'
import CitiesIndex from '../components/cruds/Cities/Index.vue'
import CitiesCreate from '../components/cruds/Cities/Create.vue'
import CitiesShow from '../components/cruds/Cities/Show.vue'
import CitiesEdit from '../components/cruds/Cities/Edit.vue'
import PlacesIndex from '../components/cruds/Places/Index.vue'
import PlacesCreate from '../components/cruds/Places/Create.vue'
import PlacesShow from '../components/cruds/Places/Show.vue'
import PlacesEdit from '../components/cruds/Places/Edit.vue'
import AccommodationsIndex from '../components/cruds/Accommodations/Index.vue'
import AccommodationsCreate from '../components/cruds/Accommodations/Create.vue'
import AccommodationsShow from '../components/cruds/Accommodations/Show.vue'
import AccommodationsEdit from '../components/cruds/Accommodations/Edit.vue'
import ExhibitorsIndex from '../components/cruds/Exhibitors/Index.vue'
import ExhibitorsCreate from '../components/cruds/Exhibitors/Create.vue'
import ExhibitorsShow from '../components/cruds/Exhibitors/Show.vue'
import ExhibitorsEdit from '../components/cruds/Exhibitors/Edit.vue'
import FieldOperatorsIndex from '../components/cruds/FieldOperators/Index.vue'
import FieldOperatorsCreate from '../components/cruds/FieldOperators/Create.vue'
import FieldOperatorsShow from '../components/cruds/FieldOperators/Show.vue'
import FieldOperatorsEdit from '../components/cruds/FieldOperators/Edit.vue'
import RoomsIndex from '../components/cruds/Rooms/Index.vue'
import RoomsCreate from '../components/cruds/Rooms/Create.vue'
import RoomsShow from '../components/cruds/Rooms/Show.vue'
import RoomsEdit from '../components/cruds/Rooms/Edit.vue'
import QueriesIndex from '../components/cruds/Queries/Index.vue'
import QueriesCreate from '../components/cruds/Queries/Create.vue'
import QueriesShow from '../components/cruds/Queries/Show.vue'
import QueriesEdit from '../components/cruds/Queries/Edit.vue'
import QueriesClone from '../components/cruds/Queries/Clone.vue'

import LeadsIndex from '../components/cruds/Leads/Index.vue'
import LeadsCreate from '../components/cruds/Leads/Create.vue'
import LeadsShow from '../components/cruds/Leads/Show.vue'
import LeadsEdit from '../components/cruds/Leads/Edit.vue'
import BookingsIndex from '../components/cruds/Bookings/Index.vue'
import BookingsCreate from '../components/cruds/Bookings/Create.vue'
import BookingsShow from '../components/cruds/Bookings/Show.vue'
import BookingsEdit from '../components/cruds/Bookings/Edit.vue'
import GroupsIndex from '../components/cruds/Groups/Index.vue'
import GroupsCreate from '../components/cruds/Groups/Create.vue'
import GroupsShow from '../components/cruds/Groups/Show.vue'
import GroupsEdit from '../components/cruds/Groups/Edit.vue'
import GroupsApprove from '../components/cruds/Groups/Approve.vue'
import ToursIndex from '../components/cruds/Tours/Index.vue'
import ToursCreate from '../components/cruds/Tours/Create.vue'
import ToursShow from '../components/cruds/Tours/Show.vue'
import ToursEdit from '../components/cruds/Tours/Edit.vue'
import DriversIndex from '../components/cruds/Drivers/Index.vue'
import DriversCreate from '../components/cruds/Drivers/Create.vue'
import DriversShow from '../components/cruds/Drivers/Show.vue'
import DriversEdit from '../components/cruds/Drivers/Edit.vue'
import TourManagersIndex from '../components/cruds/TourManagers/Index.vue'
import GuidesIndex from '../components/cruds/Guides/Index.vue'
import ActivitiesHandlersIndex from '../components/cruds/ActivitiesHandlers/Index.vue'
import DriverRolesIndex from '../components/cruds/DriverRoles/Index.vue'
import CrmStatusesIndex from '../components/cruds/CrmStatuses/Index.vue'
import CrmStatusesCreate from '../components/cruds/CrmStatuses/Create.vue'
import CrmStatusesShow from '../components/cruds/CrmStatuses/Show.vue'
import CrmStatusesEdit from '../components/cruds/CrmStatuses/Edit.vue'
import CrmCustomersIndex from '../components/cruds/CrmCustomers/Index.vue'
import CrmCustomersCreate from '../components/cruds/CrmCustomers/Create.vue'
import CrmCustomersShow from '../components/cruds/CrmCustomers/Show.vue'
import CrmCustomersEdit from '../components/cruds/CrmCustomers/Edit.vue'
import CrmNotesIndex from '../components/cruds/CrmNotes/Index.vue'
import CrmNotesCreate from '../components/cruds/CrmNotes/Create.vue'
import CrmNotesShow from '../components/cruds/CrmNotes/Show.vue'
import CrmNotesEdit from '../components/cruds/CrmNotes/Edit.vue'
import CrmDocumentsIndex from '../components/cruds/CrmDocuments/Index.vue'
import CrmDocumentsCreate from '../components/cruds/CrmDocuments/Create.vue'
import CrmDocumentsShow from '../components/cruds/CrmDocuments/Show.vue'
import CrmDocumentsEdit from '../components/cruds/CrmDocuments/Edit.vue'
import FaqCategoriesIndex from '../components/cruds/FaqCategories/Index.vue'
import FaqCategoriesCreate from '../components/cruds/FaqCategories/Create.vue'
import FaqCategoriesShow from '../components/cruds/FaqCategories/Show.vue'
import FaqCategoriesEdit from '../components/cruds/FaqCategories/Edit.vue'
import FaqQuestionsIndex from '../components/cruds/FaqQuestions/Index.vue'
import FaqQuestionsCreate from '../components/cruds/FaqQuestions/Create.vue'
import FaqQuestionsShow from '../components/cruds/FaqQuestions/Show.vue'
import FaqQuestionsEdit from '../components/cruds/FaqQuestions/Edit.vue'
import CustomersIndex from '../components/cruds/Customers/Index.vue'
import CustomersCreate from '../components/cruds/Customers/Create.vue'
import CustomersShow from '../components/cruds/Customers/Show.vue'
import CustomersEdit from '../components/cruds/Customers/Edit.vue'
import NewLeads from '../components/cruds/Leads/NewLeads.vue'
import GroupsMembers from '../components/cruds/Groups/Members.vue'
import AllGroupMembers from '../components/cruds/Groups/AllGroupMembers'
import Dashboard from '../components/cruds/Dashboard/Index.vue'
import DashboardHome from '../components/cruds/Dashboard/Indexhome.vue'
import DashboardHomeFail from '../components/cruds/Dashboard/IndexhomeFail.vue'
import DashboardHomeTraveller from '../components/cruds/Dashboard/Indexhometraveller.vue'
import TravellersIndex from '../components/cruds/Travellers/Index.vue'
import TravellersCreate from '../components/cruds/Travellers/Create.vue'
import TravellersShow from '../components/cruds/Travellers/Show.vue'
import TravellersEdit from '../components/cruds/Travellers/Edit.vue'
import TasksIndex from '../components/cruds/Tasks/Index.vue'
import TasksCreate from '../components/cruds/Tasks/Create.vue'
import TasksShow from '../components/cruds/Tasks/Show.vue'
import TasksEdit from '../components/cruds/Tasks/Edit.vue'
import BroadcastingsIndex from '../components/cruds/Broadcastings/Index.vue'
import BroadcastingsCreate from '../components/cruds/Broadcastings/Create.vue'
import BroadcastingsEdit from '../components/cruds/Broadcastings/Edit.vue'
import FormsIndex from '../components/cruds/Forms/Index.vue'
import FormsCreate from '../components/cruds/Forms/Create.vue'
import FormsShow from '../components/cruds/Forms/Show.vue'
import FormsEdit from '../components/cruds/Forms/Edit.vue'
import FormsClone from '../components/cruds/Forms/clone.vue'
import Agencysettings from '../components/cruds/Users/Agencysettings.vue'
import Hub from '../components/cruds/Hub.vue'
import CreateAgent from '../components/cruds/create_agent.vue'
import Rooming from "../components/cruds/Groups/Rooming";
import RoomingAll from "../components/cruds/Groups/RoomingAll";
import FeedbackIndex from "../components/cruds/Feedback/index.vue"
import FeedbackCreate from "../components/cruds/Feedback/Create.vue"
import CategoriesIndex from "../components/cruds/Categories/index.vue"
import PollIndex from "../components/cruds/Poll/index.vue"
import PollCreate from "../components/cruds/Poll/Create.vue"
import PollEdit from "../components/cruds/Poll/Edit.vue"
import passport_track from "../components/cruds/passport_track";
import Nomination from "../components/cruds/Groups/Nomination";
import task_history from "../components/cruds/task_history";
import WalletApprove from "../components/cruds/Groups/WalletApprove";
import SplitGroup from "../components/cruds/Groups/SplitGroup";
Vue.use(VueRouter)

const routes = [
    { path: '/change-password', component: ChangePassword, name: 'auth.change_password' },
    { path: '/permissions', component: PermissionsIndex, name: 'permissions.index' },
    { path: '/permissions/create', component: PermissionsCreate, name: 'permissions.create' },
    { path: '/permissions/:id', component: PermissionsShow, name: 'permissions.show' },
    { path: '/permissions/:id/edit', component: PermissionsEdit, name: 'permissions.edit' },
    { path: '/roles', component: RolesIndex, name: 'roles.index' },
    { path: '/roles/create', component: RolesCreate, name: 'roles.create' },
    { path: '/roles/:id', component: RolesShow, name: 'roles.show' },
    { path: '/roles/:id/edit', component: RolesEdit, name: 'roles.edit' },
    { path: '/users', component: UsersIndex, name: 'users.index' },
    { path: '/users/client', component: UsersClient, name: 'users.client' },

    { path: '/users/create', component: UsersCreate, name: 'users.create' },
    { path: '/users/:id', component: UsersShow, name: 'users.show' },
    { path: '/users/:id/edit', component: UsersEdit, name: 'users.edit' },
    { path: '/agency/:id/setting', component: Agencysettings, name: 'users.agencysettings' },

    { path: '/user-actions', component: UserActionsIndex, name: 'user_actions.index' },
    { path: '/teams', component: TeamsIndex, name: 'teams.index' },
    { path: '/teams/create', component: TeamsCreate, name: 'teams.create' },
    { path: '/teams/:id', component: TeamsShow, name: 'teams.show' },
    { path: '/teams/:id/edit', component: TeamsEdit, name: 'teams.edit' },
    { path: '/countries', component: CountriesIndex, name: 'countries.index' },
    { path: '/countries/create', component: CountriesCreate, name: 'countries.create' },
    { path: '/countries/:id', component: CountriesShow, name: 'countries.show' },
    { path: '/countries/:id/edit', component: CountriesEdit, name: 'countries.edit' },
    { path: '/states', component: StatesIndex, name: 'states.index' },
    { path: '/states/create', component: StatesCreate, name: 'states.create' },
    { path: '/states/:id', component: StatesShow, name: 'states.show' },
    { path: '/states/:id/edit', component: StatesEdit, name: 'states.edit' },
    { path: '/cities', component: CitiesIndex, name: 'cities.index' },
    { path: '/cities/create', component: CitiesCreate, name: 'cities.create' },
    { path: '/cities/:id', component: CitiesShow, name: 'cities.show' },
    { path: '/cities/:id/edit', component: CitiesEdit, name: 'cities.edit' },
    { path: '/places', component: PlacesIndex, name: 'places.index' },
    { path: '/places/create', component: PlacesCreate, name: 'places.create' },
    { path: '/places/:id', component: PlacesShow, name: 'places.show' },
    { path: '/places/:id/edit', component: PlacesEdit, name: 'places.edit' },
    { path: '/accommodations', component: AccommodationsIndex, name: 'accommodations.index' },
    { path: '/accommodations/create', component: AccommodationsCreate, name: 'accommodations.create' },
    { path: '/accommodations/:id', component: AccommodationsShow, name: 'accommodations.show' },
    { path: '/accommodations/:id/edit', component: AccommodationsEdit, name: 'accommodations.edit' },
    { path: '/exhibitors', component: ExhibitorsIndex, name: 'exhibitors.index' },
    { path: '/exhibitors/create', component: ExhibitorsCreate, name: 'exhibitors.create' },
    { path: '/exhibitors/:id', component: ExhibitorsShow, name: 'exhibitors.show' },
    { path: '/exhibitors/:id/edit', component: ExhibitorsEdit, name: 'exhibitors.edit' },
    { path: '/field-operators', component: FieldOperatorsIndex, name: 'field_operators.index' },
    { path: '/field-operators/create', component: FieldOperatorsCreate, name: 'field_operators.create' },
    { path: '/field-operators/:id', component: FieldOperatorsShow, name: 'field_operators.show' },
    { path: '/field-operators/:id/edit', component: FieldOperatorsEdit, name: 'field_operators.edit' },
    { path: '/rooms', component: RoomsIndex, name: 'rooms.index' },
    { path: '/rooms/create', component: RoomsCreate, name: 'rooms.create' },
    { path: '/rooms/:id', component: RoomsShow, name: 'rooms.show' },
    { path: '/rooms/:id/edit', component: RoomsEdit, name: 'rooms.edit' },
    { path: '/queries', component: QueriesIndex, name: 'queries.index' },
    { path: '/queries/create', component: QueriesCreate, name: 'queries.create' },
    { path: '/queries/:id', component: QueriesShow, name: 'queries.show' },
    { path: '/queries/:id/edit', component: QueriesEdit, name: 'queries.edit' },
    { path: '/queries/clone', component: QueriesClone, name: 'queries.clone' },
    { path: '/leads', component: LeadsIndex, name: 'leads.index' },
    { path: '/leads/create', component: LeadsCreate, name: 'leads.create' },
    { path: '/leads/:id', component: LeadsShow, name: 'leads.show' },
    { path: '/leads/:id/edit', component: LeadsEdit, name: 'leads.edit' },
    { path: '/bookings', component: BookingsIndex, name: 'bookings.index' },
    { path: '/bookings/create', component: BookingsCreate, name: 'bookings.create' },
    { path: '/bookings/:id', component: BookingsShow, name: 'bookings.show' },
    { path: '/bookings/:id/edit', component: BookingsEdit, name: 'bookings.edit' },
    { path: '/groups', component: GroupsIndex, name: 'groups.index' },
    { path: '/groups/create', component: GroupsCreate, name: 'groups.create' },
    { path: '/groups/:id', component: GroupsShow, name: 'groups.show' },
    { path: '/groups/:id/edit', component: GroupsEdit, name: 'groups.edit' },
    { path: '/groups/:id/room', component: Rooming, name: 'groups.rooming' },
    { path: '/groups/:id/roomall', component: RoomingAll, name: 'groups.roomingall' },
    { path: '/groups/:id/nomination', component: Nomination, name: 'groups.nomination' },
    { path: '/approve', component: GroupsApprove, name: 'groups.approve' },
    { path: '/tours', component: ToursIndex, name: 'tours.index' },
    { path: '/tours/create', component: ToursCreate, name: 'tours.create' },
    { path: '/tours/:id', component: ToursShow, name: 'tours.show' },
    { path: '/tours/:id/edit', component: ToursEdit, name: 'tours.edit' },
    { path: '/drivers', component: DriversIndex, name: 'drivers.index' },
    { path: '/drivers/create', component: DriversCreate, name: 'drivers.create' },
    { path: '/drivers/:id', component: DriversShow, name: 'drivers.show' },
    { path: '/drivers/:id/edit', component: DriversEdit, name: 'drivers.edit' },
    { path: '/tour-managers', component: TourManagersIndex, name: 'tour_managers.index' },
    { path: '/guides', component: GuidesIndex, name: 'guides.index' },
    { path: '/activities-handlers', component: ActivitiesHandlersIndex, name: 'activities_handlers.index' },
    { path: '/driver-roles', component: DriverRolesIndex, name: 'driver_roles.index' },
    { path: '/crm-statuses', component: CrmStatusesIndex, name: 'crm_statuses.index' },
    { path: '/crm-statuses/create', component: CrmStatusesCreate, name: 'crm_statuses.create' },
    { path: '/crm-statuses/:id', component: CrmStatusesShow, name: 'crm_statuses.show' },
    { path: '/crm-statuses/:id/edit', component: CrmStatusesEdit, name: 'crm_statuses.edit' },
    { path: '/crm-customers', component: CrmCustomersIndex, name: 'crm_customers.index' },
    { path: '/crm-customers/create', component: CrmCustomersCreate, name: 'crm_customers.create' },
    { path: '/crm-customers/:id', component: CrmCustomersShow, name: 'crm_customers.show' },
    { path: '/crm-customers/:id/edit', component: CrmCustomersEdit, name: 'crm_customers.edit' },
    { path: '/crm-notes', component: CrmNotesIndex, name: 'crm_notes.index' },
    { path: '/crm-notes/create', component: CrmNotesCreate, name: 'crm_notes.create' },
    { path: '/crm-notes/:id', component: CrmNotesShow, name: 'crm_notes.show' },
    { path: '/crm-notes/:id/edit', component: CrmNotesEdit, name: 'crm_notes.edit' },
    { path: '/crm-documents', component: CrmDocumentsIndex, name: 'crm_documents.index' },
    { path: '/crm-documents/create', component: CrmDocumentsCreate, name: 'crm_documents.create' },
    { path: '/crm-documents/:id', component: CrmDocumentsShow, name: 'crm_documents.show' },
    { path: '/crm-documents/:id/edit', component: CrmDocumentsEdit, name: 'crm_documents.edit' },
    { path: '/faq-categories', component: FaqCategoriesIndex, name: 'faq_categories.index' },
    { path: '/faq-categories/create', component: FaqCategoriesCreate, name: 'faq_categories.create' },
    { path: '/faq-categories/:id', component: FaqCategoriesShow, name: 'faq_categories.show' },
    { path: '/faq-categories/:id/edit', component: FaqCategoriesEdit, name: 'faq_categories.edit' },
    { path: '/faq-questions', component: FaqQuestionsIndex, name: 'faq_questions.index' },
    { path: '/faq-questions/create', component: FaqQuestionsCreate, name: 'faq_questions.create' },
    { path: '/faq-questions/:id', component: FaqQuestionsShow, name: 'faq_questions.show' },
    { path: '/faq-questions/:id/edit', component: FaqQuestionsEdit, name: 'faq_questions.edit' },
    { path: '/customers', component: CustomersIndex, name: 'customers.index' },
    { path: '/customers/create', component: CustomersCreate, name: 'customers.create' },
    { path: '/customers/:id', component: CustomersShow, name: 'customers.show' },
    { path: '/customers/:id/edit', component: CustomersEdit, name: 'customers.edit' },
    { path: '/newlead', component: NewLeads, name: 'leads.newleads' },
    { path: '/members/:id', component: GroupsMembers, name: 'groups.members' },
    { path: '/allmembers/:id', component: AllGroupMembers, name: 'groups.allmembers' },

    { path: '/dashboard', component: Dashboard, name: 'dashboard.index' },
    { path: '/dashboardhome', component: DashboardHome, name: 'dashboard.indexhome' },
    { path: '/dashboardhomefail', component: DashboardHomeFail, name: 'dashboard.indexhomefail' },
    { path: '/dashboardhometraveller', component: DashboardHomeTraveller, name: 'dashboard.Indexhometraveller' },
    { path: '/travellers', component: TravellersIndex, name: 'travellers.index' },
    { path: '/travellers/create', component: TravellersCreate, name: 'travellers.create' },
    { path: '/travellers/:id', component: TravellersShow, name: 'travellers.show' },
    { path: '/travellers/:id/edit', component: TravellersEdit, name: 'travellers.edit' },
    { path: '/tasks', component: TasksIndex, name: 'tasks.index' },
    { path: '/tasks/create', component: TasksCreate, name: 'tasks.create' },
    { path: '/tasks/:id', component: TasksShow, name: 'tasks.show' },
    { path: '/tasks/:id/edit', component: TasksEdit, name: 'tasks.edit' },
    { path: '/broadcastings', component: BroadcastingsIndex, name: 'broadcastings.index' },
    { path: '/broadcastings/create', component: BroadcastingsCreate, name: 'broadcastings.create' },
    { path: '/broadcastings/:id/edit', component: BroadcastingsEdit, name: 'broadcastings.edit' },
    { path: '/forms', component: FormsIndex, name: 'forms.index' },
    { path: '/forms/create', component: FormsCreate, name: 'forms.create' },
    { path: '/forms/:id', component: FormsShow, name: 'forms.show' },
    { path: '/forms/clone', component: FormsClone, name: 'forms.clone' },
    { path: '/forms/:id/edit', component: FormsEdit, name: 'forms.edit' },
    { path: '/hub', component: Hub, name: 'hub' },
    { path: '/create_agent', component: CreateAgent, name: 'create_agent' },
    { path: '/feedback', component: FeedbackIndex, name: 'feedback.index' },
    { path: '/feedback/create', component: FeedbackCreate, name: 'feedback.create' },
    { path: '/categories', component: CategoriesIndex, name: 'categories.index' },
    { path: '/poll', component: PollIndex, name: 'poll.index' },
    { path: '/poll/create', component: PollCreate, name: 'poll.create' },
    { path: '/poll/:id/edit', component: PollEdit, name: 'poll.edit' },
    { path: '/passport_tracking', component: passport_track, name: 'passport_tracking' },
    { path: '/task_history', component: task_history, name: 'task_history' },
    { path: '/wallet_approval/:id/:grpid', component: WalletApprove, name: 'wallet' },
    { path: '/wallet_approval', component: WalletApprove, name: 'groups.wallet' },
    { path: '/group_inventory/:id', component: SplitGroup, name: 'groups.inventory' },

]

export default new VueRouter({
    mode: 'history',
//    base: '/admin',
    routes
})
