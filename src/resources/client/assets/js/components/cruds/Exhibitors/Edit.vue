<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Exhibitors</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Edit</h3>
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
                                    <label for="description">Description</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="description"
                                            placeholder="Enter Description"
                                            :value="item.description"
                                            @input="updateDescription"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="contact">Contact</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="contact"
                                            placeholder="Enter Contact"
                                            :value="item.contact"
                                            @input="updateContact"
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
                                    <label for="website">Website</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="website"
                                            placeholder="Enter Website"
                                            :value="item.website"
                                            @input="updateWebsite"
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
                                    <label for="logo">Logo</label>
                                    <input
                                            type="file"
                                            class="form-control"
                                            @change="updateLogo"
                                    >
                                    <ul v-if="item.logo" class="list-unstyled">
                                        <li>
                                            {{ item.logo.name || item.logo.file_name }}
                                            <button class="btn btn-xs btn-danger"
                                                    type="button"
                                                    @click="removeLogo"
                                            >
                                                Remove file
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="history">History</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="history"
                                            placeholder="Enter History"
                                            :value="item.history"
                                            @input="updateHistory"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="device_id">Device id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="device_id"
                                            placeholder="Enter Device id"
                                            :value="item.device_id"
                                            @input="updateDevice_id"
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
        ...mapGetters('ExhibitorsSingle', ['item', 'loading']),
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
        ...mapActions('ExhibitorsSingle', ['fetchData', 'updateData', 'resetState', 'setName', 'setDescription', 'setContact', 'setAddress', 'setWebsite', 'setCategory', 'setLogo', 'setHistory', 'setDevice_id']),
        updateName(e) {
            this.setName(e.target.value)
        },
        updateDescription(e) {
            this.setDescription(e.target.value)
        },
        updateContact(e) {
            this.setContact(e.target.value)
        },
        updateAddress(e) {
            this.setAddress(e.target.value)
        },
        updateWebsite(e) {
            this.setWebsite(e.target.value)
        },
        updateCategory(e) {
            this.setCategory(e.target.value)
        },
        removeLogo(e, id) {
            this.$swal({
                title: 'Are you sure?',
                text: "To fully delete the file submit the form.",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#dd4b39',
                focusCancel: true,
                reverseButtons: true
            }).then(result => {
                if (typeof result.dismiss === "undefined") {
                    this.setLogo('');
                }
            })
        },
        updateLogo(e) {
            this.setLogo(e.target.files[0]);
            this.$forceUpdate();
        },
        updateHistory(e) {
            this.setHistory(e.target.value)
        },
        updateDevice_id(e) {
            this.setDevice_id(e.target.value)
        },
        submitForm() {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'exhibitors.index' })
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
