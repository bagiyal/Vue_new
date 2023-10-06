<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Accommodation</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">View</h3>
                        </div>

                        <div class="box-body">
                            <back-buttton></back-buttton>
                        </div>

                        <div class="box-body">
                            <div class="row">
                                <div class="col-xs-6">
                                    <table class="table table-bordered table-striped">
                                        <tbody>
                                        <tr>
                                            <th>#</th>
                                            <td>{{ item.id }}</td>
                                        </tr>
                                        <tr>
                                            <th>Title</th>
                                            <td>{{ item.title }}</td>
                                            </tr>
                                        <tr>
                                            <th>Description</th>
                                            <td>{{ item.description }}</td>
                                            </tr>
                                        <tr>
                                            <th>Contact no</th>
                                            <td>{{ item.contact_no }}</td>
                                            </tr>
                                        <tr>
                                            <th>Accommodation address</th>
                                            <td>{{ item.accommodation_address }}</td>
                                            </tr>
                                        <tr>
                                            <th>Featured image</th>
                                            <td v-html="item.featured_image_link"></td>
                                            </tr>
                                        <tr>
                                            <th>Website address</th>
                                            <td>{{ item.website_address }}</td>
                                            </tr>
                                        <tr>
                                            <th>Check in time</th>
                                            <td>{{ item.check_in_time }}</td>
                                            </tr>
                                        <tr>
                                            <th>Check out time</th>
                                            <td>{{ item.check_out_time }}</td>
                                            </tr>
                                        <tr>
                                            <th>Latitude</th>
                                            <td>{{ item.latitude }}</td>
                                            </tr>
                                        <tr>
                                            <th>Longitude</th>
                                            <td>{{ item.longitude }}</td>
                                            </tr>
                                        <tr>
                                            <th>City</th>
                                            <td>
                                                <span class="label label-info" v-if="item.city !== null">
                                                    {{ item.city.title }}
                                                </span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
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
    created() {
        this.fetchData(this.$route.params.id)
    },
    destroyed() {
        this.resetState()
    },
    computed: {
        ...mapGetters('AccommodationsSingle', ['item'])
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('AccommodationsSingle', ['fetchData', 'resetState'])
    }
}
</script>


<style scoped>

</style>
