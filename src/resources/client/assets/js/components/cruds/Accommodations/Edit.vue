<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Accommodation</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box box_design">

                            <bootstrap-alert />

                            <div class="box-body row container-fluid">
                                <div class="form-group col-md-6">
                                    <label for="title">Title *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="title"
                                            placeholder="Enter Title *"
                                            :value="item.title"
                                            @input="updateTitle"
                                            >
                                </div>
                                <div class="form-group col-md-6">
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
                                <div class="form-group col-md-6">
                                    <label for="contact_no">Contact no</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="contact_no"
                                            placeholder="Enter Contact no"
                                            :value="item.contact_no"
                                            @input="updateContact_no"
                                            >
                                </div>

                                <div class="form-group col-md-3">
                                    <label for="featured_image">Featured image</label>
                                    <input
                                            type="file"
                                            class="form-control"
                                            @change="updateFeatured_image"
                                    >

                                </div>
                                <div class="form-group col-md-3">
                                    <ul v-if="item.featured_image" class="list-unstyled mt-5">
                                        <li class="text-bold">
                                            {{ item.featured_image.name || item.featured_image.file_name }}
                                            <button class="btn btn-xs btn-danger"
                                                    type="button"
                                                    @click="removeFeatured_image"
                                            >
                                                Remove file
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="website_address">Website address</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="website_address"
                                            placeholder="Enter Website address"
                                            :value="item.website_address"
                                            @input="updateWebsite_address"
                                            >
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="check_in_time">Check in time</label>
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="check_in_time"-->
<!--                                            placeholder="Enter Check in time"-->
<!--                                            :value="item.check_in_time"-->
<!--                                            @input="updateCheck_in_time"-->
<!--                                            >-->
                                    <date-picker
                                        class="form-control"
                                        name="check_in_time"
                                        placeholder="Enter Check in time"
                                        :config="$root.dpconfigTimeshort"
                                        style="padding-left: 20px"
                                        @input="updateCheck_in_time"
                                        v-model="item.check_in_time"
                                    >
                                    </date-picker>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="check_out_time">Check out time</label>
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="check_out_time"-->
<!--                                            placeholder="Enter Check out time"-->
<!--                                            :value="item.check_out_time"-->
<!--                                            @input="updateCheck_out_time"-->
<!--                                            >-->
                                    <date-picker
                                        class="form-control"
                                        name="check_out_time"
                                        placeholder="Enter Check in time"
                                        :config="$root.dpconfigTimeshort"
                                        style="padding-left: 20px"
                                        @input="updateCheck_out_time"
                                        v-model="item.check_out_time"
                                    >
                                    </date-picker>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="latitude">Latitude</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="latitude"
                                            placeholder="Enter Latitude"
                                            :value="item.latitude"
                                            @input="updateLatitude"
                                            >
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="longitude">Longitude</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="longitude"
                                            placeholder="Enter Longitude"
                                            :value="item.longitude"
                                            @input="updateLongitude"
                                            >
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="city">City</label>
                                    <v-select
                                        :clearable="false"
                                            name="city"
                                            label="title"
                                            @input="updateCity"
                                            :value="item.city"
                                            :options="citiesAll"
                                        style="background:#fff;"
                                            />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="accommodation_address">Accommodation address</label>
                                    <textarea
                                        rows="3"
                                        class="form-control"
                                        name="accommodation_address"
                                        placeholder="Enter Accommodation address"
                                        :value="item.accommodation_address"
                                        @input="updateAccommodation_address"
                                    >
                                    </textarea>
                                </div>
                            </div>

                            <div class="box-footer" style="text-align: right;background-color: transparent;">
                                <vue-button-spinner
                                    class="button-css"
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
        ...mapGetters('AccommodationsSingle', ['item', 'loading', 'citiesAll']),
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
        ...mapActions('AccommodationsSingle', ['fetchData', 'updateData', 'resetState', 'setTitle', 'setDescription', 'setContact_no', 'setAccommodation_address', 'setFeatured_image', 'setWebsite_address', 'setCheck_in_time', 'setCheck_out_time', 'setLatitude', 'setLongitude', 'setCity']),
        updateTitle(e) {
            this.setTitle(e.target.value)
        },
        updateDescription(e) {
            this.setDescription(e.target.value)
        },
        updateContact_no(e) {
            this.setContact_no(e.target.value)
        },
        updateAccommodation_address(e) {
            this.setAccommodation_address(e.target.value)
        },
        removeFeatured_image(e, id) {
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
                    this.setFeatured_image('');
                }
            })
        },
        updateFeatured_image(e) {
            this.setFeatured_image(e.target.files[0]);
            this.$forceUpdate();
        },
        updateWebsite_address(e) {
            this.setWebsite_address(e.target.value)
        },
        updateCheck_in_time(e) {
            this.setCheck_in_time(e.target.value)
        },
        updateCheck_out_time(e) {
            this.setCheck_out_time(e.target.value)
        },
        updateLatitude(e) {
            this.setLatitude(e.target.value)
        },
        updateLongitude(e) {
            this.setLongitude(e.target.value)
        },
        updateCity(value) {
            this.setCity(value)
        },
        submitForm() {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'accommodations.index' })
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
    input[type="file"] {
        display: block !important;
    }
    .button-css{
        position: unset !important;
    }
</style>
