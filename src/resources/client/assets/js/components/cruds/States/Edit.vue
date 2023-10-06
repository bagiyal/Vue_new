<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>State</h1>
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
                                <div class="form-group">
                                    <label for="longitude">longitude</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="longitude"
                                            placeholder="Enter longitude"
                                            :value="item.longitude"
                                            @input="updateLongitude"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="featured_image">Featured image</label>
                                    <input
                                            type="file"
                                            class="form-control"
                                            @change="updateFeatured_image"
                                    >
                                    <ul v-if="item.featured_image" class="list-unstyled">
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
                                <div class="form-group">
                                    <label for="country">Country *</label>
                                    <v-select
                                            name="country"
                                            label="title"
                                            @input="updateCountry"
                                            :value="item.country"
                                            :options="countriesAll"
                                            />
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
        ...mapGetters('StatesSingle', ['item', 'loading', 'countriesAll']),
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
        ...mapActions('StatesSingle', ['fetchData', 'updateData', 'resetState', 'setTitle', 'setDescription', 'setLatitude', 'setLongitude', 'setFeatured_image', 'setCountry']),
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
        updateCountry(value) {
            this.setCountry(value)
        },
        submitForm() {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'states.index' })
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
</style>
