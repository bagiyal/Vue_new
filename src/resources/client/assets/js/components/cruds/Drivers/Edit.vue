<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Tour Manager</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box box_design">
                            <div class="box-header ">

                            </div>

                            <bootstrap-alert />

                            <div class="box-body">

                                <div class="form-group col-md-12">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-4">
                                            <label for="name">Name *</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="name"
                                                placeholder="Enter Name"
                                                :value="item.name"
                                                @input="updateName"
                                            >
                                        </div>
                                        <div class="col-md-6 col-sm-4">
                                            <label for="phone">Phone *</label>
                                            <vue-tel-input  v-model="item.phone"  @input="updatePhone" v-bind="bindProps" name="phone" placeholder="Enter Phone No." class="form-control pl-5 pr-5 f-1-5 vue-tel-input fw-3"></vue-tel-input>
                                        </div>

                                        <div class="col-md-6 mt-2 col-sm-4">
                                            <label for="email">Email *</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="phone"
                                                placeholder="Enter Email"
                                                :value="item.email"
                                                @input="updateEmail"
                                            >
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div v-if="item.refId==null" class="box-footer" style="text-align: right;background-color: transparent;">
                                <vue-button-spinner
                                    class="button-css"
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
import { VueTelInput } from 'vue-tel-input'
export default {
    components: {VueTelInput},
    data() {
        return {
            bindProps: {
                mode: "international",
                defaultCountry: "INR",
                disabledFetchingCountry: false,
                disabled: false,
                disabledFormatting: false,
                placeholder: "Enter a phone number",
                required: false,
                enabledCountryCode: true,
                enabledFlags: true,
                preferredCountries: ["AU", "BR"],
                onlyCountries: [],
                ignoredCountries: [],
                autocomplete: "off",
                name: "telephone",
                maxLen: 25,
                wrapperClasses: "",
                inputClasses: "",
                dropdownOptions: {
                    disabledDialCode: false
                },
            },
        }
    },
    computed: {
        ...mapGetters('DriversSingle', ['item', 'loading']),
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
        ...mapActions('DriversSingle', ['fetchData', 'updateData', 'resetState', 'setName', 'setPhone', 'setemail', 'setRating', 'setDate_of_birth', 'setDrivers_license_number', 'setDrivers_license_state', 'setDrivers_license_expiration_date', 'setRelationdeviceid']),
        updateName(e) {
            this.setName(e.target.value)
        },
        updatePhone(e) {
            this.setPhone(e.target.value)
        },
        updateEmail(e) {
            this.setemail(e.target.value)
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
        submitForm() {
            if(this.item.phone!=null){
                var res = this.item.phone.replace(/\(/g, "");
                res = res.replace(/\)/g, "");
                res = res.replace(/-/g, "");
                res = res.replace(/ /g, "");
                this.setPhone(res);
            }
            if(this.item.phone!=null && this.item.email!=null && this.item.name!=null){
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'drivers.index' })
                    this.$eventHub.$emit('update-success')
                })
                .catch((error) => {
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: error,
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 5000

                    })
                    console.error(error)
                })
            }
            else{
                this.$swal.fire({
                    type: 'error',
                    icon: 'error',
                    title: 'Please Fill All Mandatory Fields',
                    showCloseButton:true,
                    showConfirmButton: true,
                    timer: 5000

                })
            }
        }
    }
}
</script>


<style scoped>
    .button-css{
        position: unset !important;
    }
</style>
