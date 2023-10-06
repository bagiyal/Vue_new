<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Broadcasting</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box">
                            <div class="box-header ">
                                <h3 class="box-title">Edit</h3>
                            </div>

                            <div class="box-body">
                                <back-buttton></back-buttton>
                            </div>

                            <bootstrap-alert />

                            <div class="box-body">
                                <div class="form-group">
                                    <label for="schedule_date">Schedule date</label>
                                    <date-picker
                                            :value="item.schedule_date"
                                            :config="$root.dpconfigDatetime"
                                            name="schedule_date"
                                            placeholder="Enter Schedule date"
                                            @dp-change="updateSchedule_date"
                                            >
                                    </date-picker>
                                </div>
                                <div class="form-group">
                                    <label for="agency_id">Agency id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="agency_id"
                                            placeholder="Enter Agency id"
                                            :value="item.agency_id"
                                            @input="updateAgency_id"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="agent_id">Agent id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="agent_id"
                                            placeholder="Enter Agent id"
                                            :value="item.agent_id"
                                            @input="updateAgent_id"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="traveller_id">Traveller id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="traveller_id"
                                            placeholder="Enter Traveller id"
                                            :value="item.traveller_id"
                                            @input="updateTraveller_id"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="status">Status</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="status"
                                            placeholder="Enter Status"
                                            :value="item.status"
                                            @input="updateStatus"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="message"
                                            placeholder="Enter Message"
                                            :value="item.message"
                                            @input="updateMessage"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="type">Type</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="type"
                                            placeholder="Enter Type"
                                            :value="item.type"
                                            @input="updateType"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="category">Category</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="category"
                                            placeholder="Enter Category"
                                            :value="item.category"
                                            @input="updateCategory"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="time_zone">Time zone</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="time_zone"
                                            placeholder="Enter Time zone"
                                            :value="item.time_zone"
                                            @input="updateTime_zone"
                                            >
                                </div>
                            </div>

                            <div class="box-footer">
                                <vue-button-spinner
                                        class="btn btn-primary btn-sm"
                                        :isLoading="loading"
                                        :disabled="loading"
                                        >
                                    Save
                                </vue-button-spinner>
                            </div>
                        </div>
                    </form>
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
    computed: {
        ...mapGetters('BroadcastingsSingle', ['item', 'loading']),
    },
    created() {
        this.fetchData(this.$route.params.id)
    },
    destroyed() {
        this.resetState()
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('BroadcastingsSingle', ['fetchData', 'updateData', 'resetState', 'setSchedule_date', 'setAgency_id', 'setAgent_id', 'setTraveller_id', 'setStatus', 'setMessage', 'setType', 'setCategory', 'setTime_zone']),
        updateSchedule_date(e) {
            this.setSchedule_date(e.target.value)
        },
        updateAgency_id(e) {
            this.setAgency_id(e.target.value)
        },
        updateAgent_id(e) {
            this.setAgent_id(e.target.value)
        },
        updateTraveller_id(e) {
            this.setTraveller_id(e.target.value)
        },
        updateStatus(e) {
            this.setStatus(e.target.value)
        },
        updateMessage(e) {
            this.setMessage(e.target.value)
        },
        updateType(e) {
            this.setType(e.target.value)
        },
        updateCategory(e) {
            this.setCategory(e.target.value)
        },
        updateTime_zone(e) {
            this.setTime_zone(e.target.value)
        },
        submitForm() {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'broadcastings.index' })
                    this.$eventHub.$emit('update-success')
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }
}
</script>


<style scoped>

</style>
