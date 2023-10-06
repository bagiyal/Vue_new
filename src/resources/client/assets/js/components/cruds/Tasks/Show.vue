<template>
    <section class="content-wrapper" style="min-height: 960px;">
        <section class="content-header">
            <h1>Task</h1>
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
                                            <th>Agency id</th>
                                            <td>{{ item.agency_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Agent id</th>
                                            <td>{{ item.agent_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Agent name</th>
                                            <td>{{ item.agent_name }}</td>
                                            </tr>
                                        <tr>
                                            <th>Assign date</th>
                                            <td>{{ item.assign_date }}</td>
                                            </tr>
                                        <tr>
                                            <th>Due date</th>
                                            <td>{{ item.due_date }}</td>
                                            </tr>
                                        <tr>
                                            <th>Ref id</th>
                                            <td>{{ item.ref_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Reminder</th>
                                            <td>{{ item.reminder }}</td>
                                            </tr>
                                        <tr>
                                            <th>Reminder time</th>
                                            <td>{{ item.reminder_time }}</td>
                                            </tr>
                                        <tr>
                                            <th>Remark</th>
                                            <td>{{ item.remark }}</td>
                                            </tr>
                                        <tr>
                                            <th>Status</th>
                                            <td>{{ item.status }}</td>
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
        ...mapGetters('TasksSingle', ['item'])
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('TasksSingle', ['fetchData', 'resetState'])
    }
}
</script>


<style scoped>

</style>
