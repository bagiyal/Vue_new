<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Query</h1>
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
                                            <th>Driver pickup date time</th>
                                            <td>{{ item.driver_pickup_date_time }}</td>
                                            </tr>
                                        <tr>
                                            <th>Booking id</th>
                                            <td>{{ item.booking_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Budget</th>
                                            <td>{{ item.budget }}</td>
                                            </tr>
                                        <tr>
                                            <th>Traveler name</th>
                                            <td>{{ item.traveler_name }}</td>
                                            </tr>
                                        <tr>
                                            <th>Bill pay</th>
                                            <td>{{ item.bill_pay }}</td>
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
                                            <th>Note</th>
                                            <td>{{ item.note }}</td>
                                            </tr>
                                        <tr>
                                            <th>Status</th>
                                            <td>{{ item.status }}</td>
                                            </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{{ item.phone }}</td>
                                            </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{{ item.email }}</td>
                                            </tr>
                                        <tr>
                                            <th>Email second</th>
                                            <td>{{ item.email_second }}</td>
                                            </tr>
                                        <tr>
                                            <th>Traveller id</th>
                                            <td>{{ item.traveller_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Generated itinerary</th>
                                            <td>{{ item.generated_itinerary }}</td>
                                            </tr>
                                        <tr>
                                            <th>Itinerary places</th>
                                            <td>{{ item.itinerary_places }}</td>
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
                                            <th>Meals supplement</th>
                                            <td>{{ item.meals_supplement }}</td>
                                            </tr>
                                        <tr>
                                            <th>Messageidd</th>
                                            <td>{{ item.messageidd }}</td>
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
                                            <th>Pickup location</th>
                                            <td>{{ item.pickup_location }}</td>
                                            </tr>
                                        <tr>
                                            <th>Query feel</th>
                                            <td>{{ item.query_feel }}</td>
                                            </tr>
                                        <tr>
                                            <th>Remarks</th>
                                            <td>{{ item.remarks }}</td>
                                            </tr>
                                        <tr>
                                            <th>Score</th>
                                            <td>{{ item.score }}</td>
                                            </tr>
                                        <tr>
                                            <th>Score new</th>
                                            <td>{{ item.score_new }}</td>
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
                                            <th>Tour cost</th>
                                            <td>{{ item.tour_cost }}</td>
                                            </tr>
                                        <tr>
                                            <th>Tour cost tax</th>
                                            <td>{{ item.tour_cost_tax }}</td>
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
        ...mapGetters('QueriesSingle', ['item'])
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('QueriesSingle', ['fetchData', 'resetState'])
    }
}
</script>


<style scoped>

</style>
