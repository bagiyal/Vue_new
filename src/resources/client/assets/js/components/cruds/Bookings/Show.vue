<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Booking</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">View</h3>
                        </div>

                        <div class="box-body">
                            <back-buttton></back-buttton>
                        </div>

                        <div class="box-body">
                            <div class="row">
                                <div class="col-xs-6">
                                    <table class="table table-bordered table-striped">
                                        <tbody>
                                        <tr>
                                            <th>#</th>
                                            <td>{{ item.id }}</td>
                                        </tr>
                                        <tr>
                                            <th>Booking id</th>
                                            <td>{{ item.booking_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Full name</th>
                                            <td>{{ item.full_name }}</td>
                                            </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{{ item.email }}</td>
                                            </tr>
                                        <tr>
                                            <th>Email2</th>
                                            <td>{{ item.email2 }}</td>
                                            </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{{ item.phone }}</td>
                                            </tr>
                                        <tr>
                                            <th>Activated</th>
                                            <td>{{ item.activated }}</td>
                                            </tr>
                                        <tr>
                                            <th>Score</th>
                                            <td>{{ item.score }}</td>
                                            </tr>
                                        <tr>
                                            <th>No of adults</th>
                                            <td>{{ item.no_of_adults }}</td>
                                            </tr>
                                        <tr>
                                            <th>No of children</th>
                                            <td>{{ item.no_of_children }}</td>
                                            </tr>
                                        <tr>
                                            <th>Agency id</th>
                                            <td>{{ item.agency_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Agent id</th>
                                            <td>{{ item.agent_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Meal day</th>
                                            <td>{{ item.meal_day }}</td>
                                            </tr>
                                        <tr>
                                            <th>Bill pay</th>
                                            <td>{{ item.bill_pay }}</td>
                                            </tr>
                                        <tr>
                                            <th>Budget</th>
                                            <td>{{ item.budget }}</td>
                                            </tr>
                                        <tr>
                                            <th>Driver pick up time</th>
                                            <td>{{ item.driver_pick_up_time }}</td>
                                            </tr>
                                        <tr>
                                            <th>Driver pick up time updated</th>
                                            <td>{{ item.driver_pick_up_time_updated }}</td>
                                            </tr>
                                        <tr>
                                            <th>Drop address</th>
                                            <td>{{ item.drop_address }}</td>
                                            </tr>
                                        <tr>
                                            <th>Handler name</th>
                                            <td>{{ item.handler_name }}</td>
                                            </tr>
                                        <tr>
                                            <th>Handler no</th>
                                            <td>{{ item.handler_no }}</td>
                                            </tr>
                                        <tr>
                                            <th>Meals supplement</th>
                                            <td>{{ item.meals_supplement }}</td>
                                            </tr>
                                        <tr>
                                            <th>Member of iti</th>
                                            <td>{{ item.member_of_iti }}</td>
                                            </tr>
                                        <tr>
                                            <th>Package category</th>
                                            <td>{{ item.package_category }}</td>
                                            </tr>
                                        <tr>
                                            <th>Pickup address</th>
                                            <td>{{ item.pickup_address }}</td>
                                            </tr>
                                        <tr>
                                            <th>Total price</th>
                                            <td>{{ item.total_price }}</td>
                                            </tr>
                                        <tr>
                                            <th>Pickup location</th>
                                            <td>{{ item.pickup_location }}</td>
                                            </tr>
                                        <tr>
                                            <th>Tour cost</th>
                                            <td>{{ item.tour_cost }}</td>
                                            </tr>
                                        <tr>
                                            <th>Selected car</th>
                                            <td>{{ item.selected_car }}</td>
                                            </tr>
                                        <tr>
                                            <th>Status</th>
                                            <td>{{ item.status }}</td>
                                            </tr>
                                        <tr>
                                            <th>Supplier id</th>
                                            <td>{{ item.supplier_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Total room</th>
                                            <td>{{ item.total_room }}</td>
                                            </tr>
                                        <tr>
                                            <th>Total tour days</th>
                                            <td>{{ item.total_tour_days }}</td>
                                            </tr>
                                        <tr>
                                            <th>Traveller id</th>
                                            <td>{{ item.traveller_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Itinerary places</th>
                                            <td>{{ item.itinerary_places }}</td>
                                            </tr>
                                        <tr>
                                            <th>Itinerary places time</th>
                                            <td>{{ item.itinerary_places_time }}</td>
                                            </tr>
                                        <tr>
                                            <th>Tour id</th>
                                            <td>{{ item.tour_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Tour name</th>
                                            <td>{{ item.tour_name }}</td>
                                            </tr>
                                        <tr>
                                            <th>Tour location</th>
                                            <td>{{ item.tour_location }}</td>
                                            </tr>
                                        <tr>
                                            <th>Created by</th>
                                            <td>
                                                <span class="label label-info" v-if="item.created_by !== null">
                                                    {{ item.created_by.name }}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Created by Team</th>
                                            <td>
                                                <span class="label label-info" v-if="item.created_by_team !== null">
                                                    {{ item.created_by_team.name }}
                                                </span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            // Code...
        }
    },
    created() {
        this.fetchData(this.$route.params.id)
    },
    destroyed() {
        this.resetState()
    },
    computed: {
        ...mapGetters('BookingsSingle', ['item'])
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('BookingsSingle', ['fetchData', 'resetState'])
    }
}
</script>


<style scoped>

</style>
