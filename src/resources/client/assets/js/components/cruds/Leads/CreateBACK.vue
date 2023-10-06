<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Leads</h1>
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
                                    <label for="lead_id">Lead id *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="lead_id"
                                            placeholder="Enter Lead id *"
                                            :value="item.lead_id"
                                            @input="updateLead_id"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="lead_status">Lead status</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="lead_status"
                                            placeholder="Enter Lead status"
                                            :value="item.lead_status"
                                            @input="updateLead_status"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="package_type">Package type</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="package_type"
                                            placeholder="Enter Package type"
                                            :value="item.package_type"
                                            @input="updatePackage_type"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="date">Date</label>
                                    <date-picker
                                            :value="item.date"
                                            :config="$root.dpconfigDate"
                                            name="date"
                                            placeholder="Enter Date"
                                            @dp-change="updateDate"
                                            >
                                    </date-picker>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            placeholder="Enter Email"
                                            :value="item.email"
                                            @input="updateEmail"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="phone"
                                            placeholder="Enter Phone"
                                            :value="item.phone"
                                            @input="updatePhone"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            placeholder="Enter Name"
                                            :value="item.name"
                                            @input="updateName"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="adult_guest">Adult guest</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="adult_guest"
                                            placeholder="Enter Adult guest"
                                            :value="item.adult_guest"
                                            @input="updateAdult_guest"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="score">Score</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="score"
                                            placeholder="Enter Score"
                                            :value="item.score"
                                            @input="updateScore"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="kids_guests">Kids guests</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="kids_guests"
                                            placeholder="Enter Kids guests"
                                            :value="item.kids_guests"
                                            @input="updateKids_guests"
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
                                    <label for="score_new">Score new</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="score_new"
                                            placeholder="Enter Score new"
                                            :value="item.score_new"
                                            @input="updateScore_new"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="lead_feel">Lead feel</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="lead_feel"
                                            placeholder="Enter Lead feel"
                                            :value="item.lead_feel"
                                            @input="updateLead_feel"
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
                                    <label for="source">Source</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="source"
                                            placeholder="Enter Source"
                                            :value="item.source"
                                            @input="updateSource"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="infant_guest">Infant guest</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="infant_guest"
                                            placeholder="Enter Infant guest"
                                            :value="item.infant_guest"
                                            @input="updateInfant_guest"
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
        ...mapGetters('LeadsSingle', ['item', 'loading'])
    },
    created() {
        // Code ...
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('LeadsSingle', ['storeData', 'resetState', 'setLead_id', 'setLead_status', 'setPackage_type', 'setDate', 'setEmail', 'setPhone', 'setName', 'setAdult_guest', 'setScore', 'setKids_guests', 'setAgent_id', 'setAgency_id', 'setScore_new', 'setLead_feel' ,'meta_id','query_id','sl_score','dd_score','source','source_id','source_url','task','task_status','setRemark', 'setSource', 'setInfant_guest']),

        updatemeta_id(e) {
            this.setmeta_id(e.target.value)
        },
        updatequery_id(e) {
            this.setquery_id(e.target.value)
        },
        updatesl_score(e) {
            this.setsl_score(e.target.value)
        },
        updatedd_score(e) {
            this.setdd_score(e.target.value)
        },
        updatesource(e) {
            this.setsource(e.target.value)
        },
        updatesource_id(e) {
            this.setsource_id(e.target.value)
        },
        updatesource_url(e) {
            this.setsource_url(e.target.value)
        },
        updatetask(e) {
            this.settask(e.target.value)
        },
        updatetask_status(e) {
            this.settask_status(e.target.value)
        },

       updateLead_id(e) {
            this.setLead_id(e.target.value)
        },
        updateLead_status(e) {
            this.setLead_status(e.target.value)
        },
        updatePackage_type(e) {
            this.setPackage_type(e.target.value)
        },
        updateDate(e) {
            this.setDate(e.target.value)
        },
        updateEmail(e) {
            this.setEmail(e.target.value)
        },
        updatePhone(e) {
            this.setPhone(e.target.value)
        },
        updateName(e) {
            this.setName(e.target.value)
        },
        updateAdult_guest(e) {
            this.setAdult_guest(e.target.value)
        },
        updateScore(e) {
            this.setScore(e.target.value)
        },
        updateKids_guests(e) {
            this.setKids_guests(e.target.value)
        },
        updateAgent_id(e) {
            this.setAgent_id(e.target.value)
        },
        updateAgency_id(e) {
            this.setAgency_id(e.target.value)
        },
        updateScore_new(e) {
            this.setScore_new(e.target.value)
        },
        updateLead_feel(e) {
            this.setLead_feel(e.target.value)
        },
        updateRemark(e) {
            this.setRemark(e.target.value)
        },
        updateSource(e) {
            this.setSource(e.target.value)
        },
        updateInfant_guest(e) {
            this.setInfant_guest(e.target.value)
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'leads.index' })
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
