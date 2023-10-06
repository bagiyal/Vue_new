<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Field operator</h1>
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
                                    <label for="name">Name *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            placeholder="Enter Name *"
                                            :value="item.name"
                                            @input="updateName"
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
                                    <label for="rating">Rating</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="rating"
                                            placeholder="Enter Rating"
                                            :value="item.rating"
                                            @input="updateRating"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="date_of_birth">Date of birth</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="date_of_birth"
                                            placeholder="Enter Date of birth"
                                            :value="item.date_of_birth"
                                            @input="updateDate_of_birth"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="drivers_license_number">Drivers license number</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="drivers_license_number"
                                            placeholder="Enter Drivers license number"
                                            :value="item.drivers_license_number"
                                            @input="updateDrivers_license_number"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="drivers_license_state">Drivers license state</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="drivers_license_state"
                                            placeholder="Enter Drivers license state"
                                            :value="item.drivers_license_state"
                                            @input="updateDrivers_license_state"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="drivers_license_expiration_date">Drivers license expiration date</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="drivers_license_expiration_date"
                                            placeholder="Enter Drivers license expiration date"
                                            :value="item.drivers_license_expiration_date"
                                            @input="updateDrivers_license_expiration_date"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="relationdeviceid">Relationdeviceid</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="relationdeviceid"
                                            placeholder="Enter Relationdeviceid"
                                            :value="item.relationdeviceid"
                                            @input="updateRelationdeviceid"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="ref_role">Ref role</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="ref_role"
                                            placeholder="Enter Ref role"
                                            :value="item.ref_role"
                                            @input="updateRef_role"
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
        ...mapGetters('FieldOperatorsSingle', ['item', 'loading'])
    },
    created() {
        // Code ...
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('FieldOperatorsSingle', ['storeData', 'resetState', 'setName', 'setPhone', 'setRating', 'setDate_of_birth', 'setDrivers_license_number', 'setDrivers_license_state', 'setDrivers_license_expiration_date', 'setRelationdeviceid', 'setRef_role']),
        updateName(e) {
            this.setName(e.target.value)
        },
        updatePhone(e) {
            this.setPhone(e.target.value)
        },
        updateRating(e) {
            this.setRating(e.target.value)
        },
        updateDate_of_birth(e) {
            this.setDate_of_birth(e.target.value)
        },
        updateDrivers_license_number(e) {
            this.setDrivers_license_number(e.target.value)
        },
        updateDrivers_license_state(e) {
            this.setDrivers_license_state(e.target.value)
        },
        updateDrivers_license_expiration_date(e) {
            this.setDrivers_license_expiration_date(e.target.value)
        },
        updateRelationdeviceid(e) {
            this.setRelationdeviceid(e.target.value)
        },
        updateRef_role(e) {
            this.setRef_role(e.target.value)
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'field_operators.index' })
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
