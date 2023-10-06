<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Leads</h1>
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
                                            <th>Lead id</th>
                                            <td>{{ item.lead_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Lead status</th>
                                            <td>{{ item.lead_status }}</td>
                                            </tr>
                                        <tr>
                                            <th>Package type</th>
                                            <td>{{ item.package_type }}</td>
                                            </tr>
                                        <tr>
                                            <th>Date</th>
                                            <td>{{ item.date }}</td>
                                            </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{{ item.email }}</td>
                                            </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{{ item.phone }}</td>
                                            </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>{{ item.name }}</td>
                                            </tr>
                                        <tr>
                                            <th>Adult guest</th>
                                            <td>{{ item.adult_guest }}</td>
                                            </tr>
                                        <tr>
                                            <th>Score</th>
                                            <td>{{ item.score }}</td>
                                            </tr>
                                        <tr>
                                            <th>Kids guests</th>
                                            <td>{{ item.kids_guests }}</td>
                                            </tr>
                                        <tr>
                                            <th>Agent id</th>
                                            <td>{{ item.agent_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Agency id</th>
                                            <td>{{ item.agency_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Score new</th>
                                            <td>{{ item.score_new }}</td>
                                            </tr>
                                        <tr>
                                            <th>Lead feel</th>
                                            <td>{{ item.lead_feel }}</td>
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
                                        <tr>
                                            <th>Remark</th>
                                            <td>{{ item.remark }}</td>
                                            </tr>
                                        <tr>
                                            <th>Source</th>
                                            <td>{{ item.source }}</td>
                                            </tr>
                                        <tr>
                                            <th>Infant guest</th>
                                            <td>{{ item.infant_guest }}</td>
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
        ...mapGetters('LeadsSingle', ['item'])
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('LeadsSingle', ['fetchData', 'resetState'])
    }
}
</script>


<style scoped>

</style>
