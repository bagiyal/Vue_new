<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Field operator</h1>
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
                                            <th>Phone</th>
                                            <td>{{ item.phone }}</td>
                                            </tr>
                                        <tr>
                                            <th>Rating</th>
                                            <td>{{ item.rating }}</td>
                                            </tr>
                                        <tr>
                                            <th>Date of birth</th>
                                            <td>{{ item.date_of_birth }}</td>
                                            </tr>
                                        <tr>
                                            <th>Drivers license number</th>
                                            <td>{{ item.drivers_license_number }}</td>
                                            </tr>
                                        <tr>
                                            <th>Drivers license state</th>
                                            <td>{{ item.drivers_license_state }}</td>
                                            </tr>
                                        <tr>
                                            <th>Drivers license expiration date</th>
                                            <td>{{ item.drivers_license_expiration_date }}</td>
                                            </tr>
                                        <tr>
                                            <th>Relationdeviceid</th>
                                            <td>{{ item.relationdeviceid }}</td>
                                            </tr>
                                        <tr>
                                            <th>Ref role</th>
                                            <td>{{ item.ref_role }}</td>
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
        ...mapGetters('FieldOperatorsSingle', ['item'])
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('FieldOperatorsSingle', ['fetchData', 'resetState'])
    }
}
</script>


<style scoped>

</style>
