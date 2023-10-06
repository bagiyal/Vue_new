<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Customer</h1>
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
                                            <th>Name</th>
                                            <td>{{ item.name }}</td>
                                            </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{{ item.email }}</td>
                                            </tr>
                                        <tr>
                                            <th>Account manager</th>
                                            <td>{{ item.account_manager }}</td>
                                            </tr>
                                        <tr>
                                            <th>Agree</th>
                                            <td>{{ item.agree }}</td>
                                            </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>{{ item.address }}</td>
                                            </tr>
                                        <tr>
                                            <th>City</th>
                                            <td>
                                                <span class="label label-info" v-if="item.city !== null">
                                                    {{ item.city.title }}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>State</th>
                                            <td>
                                                <span class="label label-info" v-if="item.state !== null">
                                                    {{ item.state.title }}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Country</th>
                                            <td>
                                                <span class="label label-info" v-if="item.country !== null">
                                                    {{ item.country.title }}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{{ item.phone }}</td>
                                            </tr>
                                        <tr>
                                            <th>Postcode</th>
                                            <td>{{ item.postcode }}</td>
                                            </tr>
                                        <tr>
                                            <th>Device</th>
                                            <td>{{ item.device }}</td>
                                            </tr>
                                        <tr>
                                            <th>Locale</th>
                                            <td>{{ item.locale }}</td>
                                            </tr>
                                        <tr>
                                            <th>Login</th>
                                            <td>{{ item.login }}</td>
                                            </tr>
                                        <tr>
                                            <th>Login date time</th>
                                            <td>{{ item.login_date_time }}</td>
                                            </tr>
                                        <tr>
                                            <th>Login status</th>
                                            <td>{{ item.login_status }}</td>
                                            </tr>
                                        <tr>
                                            <th>Mycred default</th>
                                            <td>{{ item.mycred_default }}</td>
                                            </tr>
                                        <tr>
                                            <th>Mycred default total</th>
                                            <td>{{ item.mycred_default_total }}</td>
                                            </tr>
                                        <tr>
                                            <th>Mycred epp mycred</th>
                                            <td>{{ item.mycred_epp_mycred }}</td>
                                            </tr>
                                        <tr>
                                            <th>Profile</th>
                                            <td>{{ item.profile }}</td>
                                            </tr>
                                        <tr>
                                            <th>Facebook</th>
                                            <td>{{ item.facebook }}</td>
                                            </tr>
                                        <tr>
                                            <th>Google</th>
                                            <td>{{ item.google }}</td>
                                            </tr>
                                        <tr>
                                            <th>Otp</th>
                                            <td>{{ item.otp }}</td>
                                            </tr>
                                        <tr>
                                            <th>Registered thru</th>
                                            <td>{{ item.registered_thru }}</td>
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
        ...mapGetters('CustomersSingle', ['item'])
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('CustomersSingle', ['fetchData', 'resetState'])
    }
}
</script>


<style scoped>

</style>
