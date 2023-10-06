<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Rooms</h1>
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
                                    <label for="room_type_and_size">Room type and size *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="room_type_and_size"
                                            placeholder="Enter Room type and size *"
                                            :value="item.room_type_and_size"
                                            @input="updateRoom_type_and_size"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="bed_size">Bed size</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="bed_size"
                                            placeholder="Enter Bed size"
                                            :value="item.bed_size"
                                            @input="updateBed_size"
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
                                    <label for="max_count">Max count</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="max_count"
                                            placeholder="Enter Max count"
                                            :value="item.max_count"
                                            @input="updateMax_count"
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
        ...mapGetters('RoomsSingle', ['item', 'loading'])
    },
    created() {
        // Code ...
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('RoomsSingle', ['storeData', 'resetState', 'setRoom_type_and_size', 'setBed_size', 'setFeatured_image', 'setMax_count']),
        updateRoom_type_and_size(e) {
            this.setRoom_type_and_size(e.target.value)
        },
        updateBed_size(e) {
            this.setBed_size(e.target.value)
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
        updateMax_count(e) {
            this.setMax_count(e.target.value)
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'rooms.index' })
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
