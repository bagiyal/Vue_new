<template>
    <section class="content-wrapper" style="min-height: 960px;">
        <section class="content-header">
            <h1>Task</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Create</h3>
                            </div>

                            <div class="box-body">
                                <back-buttton></back-buttton>
                            </div>

                            <bootstrap-alert />

                            <div class="box-body">
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
                                    <label for="agent_name">Agent name</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="agent_name"
                                            placeholder="Enter Agent name"
                                            :value="item.agent_name"
                                            @input="updateAgent_name"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="assign_date">Assign date</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="assign_date"
                                            placeholder="Enter Assign date"
                                            :value="item.assign_date"
                                            @input="updateAssign_date"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="due_date">Due date</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="due_date"
                                            placeholder="Enter Due date"
                                            :value="item.due_date"
                                            @input="updateDue_date"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="ref_id">Ref id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="ref_id"
                                            placeholder="Enter Ref id"
                                            :value="item.ref_id"
                                            @input="updateRef_id"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="reminder">Reminder</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="reminder"
                                            placeholder="Enter Reminder"
                                            :value="item.reminder"
                                            @input="updateReminder"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="reminder_time">Reminder time</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="reminder_time"
                                            placeholder="Enter Reminder time"
                                            :value="item.reminder_time"
                                            @input="updateReminder_time"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="remark">Remark</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="remark"
                                            placeholder="Enter Remark"
                                            :value="item.remark"
                                            @input="updateRemark"
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
        ...mapGetters('TasksSingle', ['item', 'loading'])
    },
    created() {
        // Code ...
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('TasksSingle', ['storeData', 'resetState', 'setAgency_id', 'setAgent_id', 'setAgent_name', 'setAssign_date', 'setDue_date', 'setRef_id', 'setReminder', 'setReminder_time', 'setRemark', 'setStatus']),
        updateAgency_id(e) {
            this.setAgency_id(e.target.value)
        },
        updateAgent_id(e) {
            this.setAgent_id(e.target.value)
        },
        updateAgent_name(e) {
            this.setAgent_name(e.target.value)
        },
        updateAssign_date(e) {
            this.setAssign_date(e.target.value)
        },
        updateDue_date(e) {
            this.setDue_date(e.target.value)
        },
        updateRef_id(e) {
            this.setRef_id(e.target.value)
        },
        updateReminder(e) {
            this.setReminder(e.target.value)
        },
        updateReminder_time(e) {
            this.setReminder_time(e.target.value)
        },
        updateRemark(e) {
            this.setRemark(e.target.value)
        },
        updateStatus(e) {
            this.setStatus(e.target.value)
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'tasks.index' })
                    this.$eventHub.$emit('create-success')
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
