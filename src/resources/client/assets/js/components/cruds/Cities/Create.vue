<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>City</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box box_design">



                            <bootstrap-alert />

                            <div class="box-body container-fluid row">
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
                                        <li>
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
                                    <label for="state">State</label>
                                    <v-select
                                            name="state"
                                            label="title"
                                            @input="updateState"
                                            :value="item.state"
                                            :options="statesAll"
                                            :clearable="false"
                                            style="background:#fff;"
                                            />
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
        ...mapGetters('CitiesSingle', ['item', 'loading', 'statesAll'])
    },
    created() {
        this.fetchStatesAll()
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('CitiesSingle', ['storeData', 'resetState', 'setTitle', 'setDescription', 'setLatitude', 'setLongitude', 'setFeatured_image', 'setState', 'fetchStatesAll']),
        updateTitle(e) {
            this.setTitle(e.target.value)
        },
        updateDescription(e) {
            this.setDescription(e.target.value)
        },
        updateLatitude(e) {
            this.setLatitude(e.target.value)
        },
        updateLongitude(e) {
            this.setLongitude(e.target.value)
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
        updateState(value) {
            this.setState(value)
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'cities.index' })
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
    input[type="file"] {
        display: block !important;
    }
    .button-css{
        position: unset !important;
    }
</style>
