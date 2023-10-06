<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Customer</h1>
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
                                    <label for="email">Email *</label>
                                    <input
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            placeholder="Enter Email *"
                                            :value="item.email"
                                            @input="updateEmail"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="account_manager">Account manager</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="account_manager"
                                            placeholder="Enter Account manager"
                                            :value="item.account_manager"
                                            @input="updateAccount_manager"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="agree">Agree</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="agree"
                                            placeholder="Enter Agree"
                                            :value="item.agree"
                                            @input="updateAgree"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="address"
                                            placeholder="Enter Address"
                                            :value="item.address"
                                            @input="updateAddress"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <v-select
                                            name="city"
                                            label="title"
                                            @input="updateCity"
                                            :value="item.city"
                                            :options="citiesAll"
                                            />
                                </div>
                                <div class="form-group">
                                    <label for="state">State</label>
                                    <v-select
                                            name="state"
                                            label="title"
                                            @input="updateState"
                                            :value="item.state"
                                            :options="statesAll"
                                            />
                                </div>
                                <div class="form-group">
                                    <label for="country">Country</label>
                                    <v-select
                                            name="country"
                                            label="title"
                                            @input="updateCountry"
                                            :value="item.country"
                                            :options="countriesAll"
                                            />
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
                                    <label for="postcode">Postcode</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="postcode"
                                            placeholder="Enter Postcode"
                                            :value="item.postcode"
                                            @input="updatePostcode"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="device">Device</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="device"
                                            placeholder="Enter Device"
                                            :value="item.device"
                                            @input="updateDevice"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="locale">Locale</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="locale"
                                            placeholder="Enter Locale"
                                            :value="item.locale"
                                            @input="updateLocale"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="login">Login</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="login"
                                            placeholder="Enter Login"
                                            :value="item.login"
                                            @input="updateLogin"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="login_date_time">Login date time</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="login_date_time"
                                            placeholder="Enter Login date time"
                                            :value="item.login_date_time"
                                            @input="updateLogin_date_time"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="login_status">Login status</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="login_status"
                                            placeholder="Enter Login status"
                                            :value="item.login_status"
                                            @input="updateLogin_status"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="mycred_default">Mycred default</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="mycred_default"
                                            placeholder="Enter Mycred default"
                                            :value="item.mycred_default"
                                            @input="updateMycred_default"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="mycred_default_total">Mycred default total</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="mycred_default_total"
                                            placeholder="Enter Mycred default total"
                                            :value="item.mycred_default_total"
                                            @input="updateMycred_default_total"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="mycred_epp_mycred">Mycred epp mycred</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="mycred_epp_mycred"
                                            placeholder="Enter Mycred epp mycred"
                                            :value="item.mycred_epp_mycred"
                                            @input="updateMycred_epp_mycred"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="profile">Profile</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="profile"
                                            placeholder="Enter Profile"
                                            :value="item.profile"
                                            @input="updateProfile"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="facebook">Facebook</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="facebook"
                                            placeholder="Enter Facebook"
                                            :value="item.facebook"
                                            @input="updateFacebook"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="google">Google</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="google"
                                            placeholder="Enter Google"
                                            :value="item.google"
                                            @input="updateGoogle"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="otp">Otp</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="otp"
                                            placeholder="Enter Otp"
                                            :value="item.otp"
                                            @input="updateOtp"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="registered_thru">Registered thru</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="registered_thru"
                                            placeholder="Enter Registered thru"
                                            :value="item.registered_thru"
                                            @input="updateRegistered_thru"
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
        ...mapGetters('CustomersSingle', ['item', 'loading', 'citiesAll', 'statesAll', 'countriesAll'])
    },
    created() {
        this.fetchCitiesAll(),
        this.fetchStatesAll(),
        this.fetchCountriesAll()
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('CustomersSingle', ['storeData', 'resetState', 'setName', 'setEmail', 'setAccount_manager', 'setAgree', 'setAddress', 'setCity', 'setState', 'setCountry', 'setPhone', 'setPostcode', 'setDevice', 'setLocale', 'setLogin', 'setLogin_date_time', 'setLogin_status', 'setMycred_default', 'setMycred_default_total', 'setMycred_epp_mycred', 'setProfile', 'setFacebook', 'setGoogle', 'setOtp', 'setRegistered_thru', 'fetchCitiesAll', 'fetchStatesAll', 'fetchCountriesAll']),
        updateName(e) {
            this.setName(e.target.value)
        },
        updateEmail(e) {
            this.setEmail(e.target.value)
        },
        updateAccount_manager(e) {
            this.setAccount_manager(e.target.value)
        },
        updateAgree(e) {
            this.setAgree(e.target.value)
        },
        updateAddress(e) {
            this.setAddress(e.target.value)
        },
        updateCity(value) {
            this.setCity(value)
        },
        updateState(value) {
            this.setState(value)
        },
        updateCountry(value) {
            this.setCountry(value)
        },
        updatePhone(e) {
            this.setPhone(e.target.value)
        },
        updatePostcode(e) {
            this.setPostcode(e.target.value)
        },
        updateDevice(e) {
            this.setDevice(e.target.value)
        },
        updateLocale(e) {
            this.setLocale(e.target.value)
        },
        updateLogin(e) {
            this.setLogin(e.target.value)
        },
        updateLogin_date_time(e) {
            this.setLogin_date_time(e.target.value)
        },
        updateLogin_status(e) {
            this.setLogin_status(e.target.value)
        },
        updateMycred_default(e) {
            this.setMycred_default(e.target.value)
        },
        updateMycred_default_total(e) {
            this.setMycred_default_total(e.target.value)
        },
        updateMycred_epp_mycred(e) {
            this.setMycred_epp_mycred(e.target.value)
        },
        updateProfile(e) {
            this.setProfile(e.target.value)
        },
        updateFacebook(e) {
            this.setFacebook(e.target.value)
        },
        updateGoogle(e) {
            this.setGoogle(e.target.value)
        },
        updateOtp(e) {
            this.setOtp(e.target.value)
        },
        updateRegistered_thru(e) {
            this.setRegistered_thru(e.target.value)
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'customers.index' })
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
