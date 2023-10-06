<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Place</h1>
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
                                    <vue-ckeditor
                                            name="description"
                                            :id="'description'"
                                            :value="item.description"
                                            @input="updateDescription"
                                    />
                                </div>
                                <div class="form-group">
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
                                <div class="form-group">
                                    <label for="timing">Timing</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="timing"
                                            placeholder="Enter Timing"
                                            :value="item.timing"
                                            @input="updateTiming"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="closed_day">Closed day</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="closed_day"
                                            placeholder="Enter Closed day"
                                            :value="item.closed_day"
                                            @input="updateClosed_day"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="time_required_to_visit">Time required to visit</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="time_required_to_visit"
                                            placeholder="Enter Time required to visit"
                                            :value="item.time_required_to_visit"
                                            @input="updateTime_required_to_visit"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="categories">Categories</label>
                                    <v-select

                                        label="name"

                                        v-model="item.categories"
                                        index="id"
                                        :options="cat"
                                        multiple
                                    />
<!--                                    <select  class="form-control"-->
<!--                                             name="categories"-->
<!--                                             placeholder="Enter Categories"-->
<!--                                             :value="item.categories"-->
<!--                                             @input="updateCategories">-->
<!--                                        <option value="place">Place</option>-->
<!--                                        <option value="custom">Custom</option>-->
<!--                                        <option value="transfer">Transfer</option>-->
<!--                                    </select>-->
                                    <!--                                    <input-->
                                    <!--                                            type="text"-->
                                    <!--                                            class="form-control"-->
                                    <!--                                            name="categories"-->
                                    <!--                                            placeholder="Enter Categories"-->
                                    <!--                                            :value="item.categories"-->
                                    <!--                                            @input="updateCategories"-->
                                    <!--                                            >-->
                                </div>
<!--                                <div class="form-group">-->
<!--                                    <label for="categories">Categories</label>-->
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="categories"-->
<!--                                            placeholder="Enter Categories"-->
<!--                                            :value="item.categories"-->
<!--                                            @input="updateCategories"-->
<!--                                            >-->
<!--                                </div>-->
                                <div class="form-group">
                                    <label for="esb_visiblity">Esb visiblity</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="esb_visiblity"
                                            placeholder="Enter Esb visiblity"
                                            :value="item.esb_visiblity"
                                            @input="updateEsb_visiblity"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <textarea
                                            rows="3"
                                            class="form-control"
                                            name="address"
                                            placeholder="Enter Address"
                                            :value="item.address"
                                            @input="updateAddress"
                                            >
                                    </textarea>
                                </div>
                                <div class="form-group">
                                    <label for="place_longitude">Place longitude</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="place_longitude"
                                            placeholder="Enter Place longitude"
                                            :value="item.place_longitude"
                                            @input="updatePlace_longitude"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="place_latitude">Place latitude</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="place_latitude"
                                            placeholder="Enter Place latitude"
                                            :value="item.place_latitude"
                                            @input="updatePlace_latitude"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="city">City *</label>
                                    <v-select
                                            name="city"
                                            label="title"
                                            @input="updateCity"
                                            :value="item.city"
                                            :options="citiesAll"
                                            multiple
                                            />
                                </div>
                                <div class="form-group">
                                    <label for="featured_image">Featured image </label>
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
                                <div class="form-group" style="display: none">
                                    <label for="gallery">Gallery</label>
                                    <input
                                            type="file"
                                            class="form-control"
                                            @change="updateGallery"
                                            multiple="multiple"
                                    >
                                    <ul v-if="item.gallery || item.uploaded_gallery" class="list-unstyled">
                                        <li v-for="gallery in item.uploaded_gallery">
                                            {{ gallery.file_name }}
                                            <button class="btn btn-xs btn-danger"
                                                    type="button"
                                                    @click="removeUploadedGallery($event, gallery.id);"
                                            >
                                                Remove file
                                            </button>
                                        </li>
                                        <li v-for="(gallery, index) in item.gallery">
                                            {{ gallery.name }}
                                            <button class="btn btn-xs btn-danger"
                                                    type="button"
                                                    @click="removeGallery($event, index);"
                                            >
                                                Remove file
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="form-group">
                                    <label for="cuisine">Cuisine</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="cuisine"
                                            placeholder="Enter Cuisine"
                                            :value="item.cuisine"
                                            @input="updateCuisine"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="recommended">recommended</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="recommended"
                                            placeholder="Enter recommended"
                                            :value="item.recommended"
                                            @input="updateRecommended"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="partner">Partner</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="partner"
                                            placeholder="Enter Partner"
                                            :value="item.partner"
                                            @input="updatePartner"
                                            >
                                </div>
<!--                                <div class="form-group">-->
<!--                                    <label for="place_tripadvisor_id">Place tripadvisor id</label>-->
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="place_tripadvisor_id"-->
<!--                                            placeholder="Enter Place tripadvisor id"-->
<!--                                            :value="item.place_tripadvisor_id"-->
<!--                                            @input="updatePlace_tripadvisor_id"-->
<!--                                            >-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="city_id">City id</label>-->
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="city_id"-->
<!--                                            placeholder="Enter City id"-->
<!--                                            :value="item.city_id"-->
<!--                                            @input="updateCity_id"-->
<!--                                            >-->
<!--                                </div>-->
                                <div class="form-group">
                                    <label for="created_by_team">Created by team</label>
                                    <v-select
                                            name="created_by_team"
                                            label="name"
                                            @input="updateCreated_by_team"
                                            :value="item.created_by_team"
                                            :options="teamsAll"
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
        ...mapGetters('PlacesSingle', ['item', 'loading', 'citiesAll', 'teamsAll','cat']),
    },
    created() {
        this.fetchData(this.$route.params.id),
            this.fetchcat()
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
        ...mapActions('PlacesSingle', ['fetchData', 'updateData', 'resetState', 'setTitle', 'setDescription', 'setContact_no', 'setTiming', 'setClosed_day', 'setTime_required_to_visit', 'setCategories', 'setEsb_visiblity', 'setAddress', 'setPlace_longitude', 'setPlace_latitude', 'setCity', 'setFeatured_image', 'setGallery', 'destroyGallery', 'destroyUploadedGallery', 'setCuisine', 'setRecommended', 'setPartner', 'setPlace_tripadvisor_id', 'setCity_id', 'setCreated_by_team','fetchcat']),
        updateTitle(e) {
            this.setTitle(e.target.value)
        },
        updateDescription(value) {
            this.setDescription(value)
        },
        updateContact_no(e) {
            this.setContact_no(e.target.value)
        },
        updateTiming(e) {
            this.setTiming(e.target.value)
        },
        updateClosed_day(e) {
            this.setClosed_day(e.target.value)
        },
        updateTime_required_to_visit(e) {
            this.setTime_required_to_visit(e.target.value)
        },
        updateCategories(e) {
            this.setCategories(e.target.value)
        },
        updateEsb_visiblity(e) {
            this.setEsb_visiblity(e.target.value)
        },
        updateAddress(e) {
            this.setAddress(e.target.value)
        },
        updatePlace_longitude(e) {
            this.setPlace_longitude(e.target.value)
        },
        updatePlace_latitude(e) {
            this.setPlace_latitude(e.target.value)
        },
        updateCity(value) {
            var cities=[];
            value.forEach((data)=>{
                cities.push(data.id)
            })

            this.item.city_id=_.cloneDeep(cities)
            this.setCity(value)


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
        removeGallery(e, id) {
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
                    this.destroyGallery(id);
                }
            })
        },
        updateGallery(e) {
            this.setGallery(e.target.files);
            this.$forceUpdate();
        },
        removeUploadedGallery (e, id) {
        this.$swal({
          title: 'Are you sure ? ',
          text: "To fully delete the file submit the form.",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Delete',
          confirmButtonColor: '#dd4b39',
          focusCancel: true,
          reverseButtons: true
        }).
        then(result => {
            if (typeof result.dismiss === "undefined") {
                this.destroyUploadedGallery(id);
            }
        })
        },
        updateCuisine(e) {
            this.setCuisine(e.target.value)
        },
        updateRecommended(e) {
            this.setRecommended(e.target.value)
        },
        updatePartner(e) {
            this.setPartner(e.target.value)
        },
        updatePlace_tripadvisor_id(e) {
            this.setPlace_tripadvisor_id(e.target.value)
        },
        updateCity_id(e) {
            this.setCity_id(e.target.value)
        },
        updateCreated_by_team(value) {
            this.setCreated_by_team(value)
        },
        submitForm() {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'places.index' })
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
