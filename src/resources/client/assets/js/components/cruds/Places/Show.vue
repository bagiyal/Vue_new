<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Place</h1>
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
                                            <td v-html="item.description"></td>
                                            </tr>
                                        <tr>
                                            <th>Contact no</th>
                                            <td>{{ item.contact_no }}</td>
                                            </tr>
                                        <tr>
                                            <th>Timing</th>
                                            <td>{{ item.timing }}</td>
                                            </tr>
                                        <tr>
                                            <th>Closed day</th>
                                            <td>{{ item.closed_day }}</td>
                                            </tr>
                                        <tr>
                                            <th>Time required to visit</th>
                                            <td>{{ item.time_required_to_visit }}</td>
                                            </tr>
                                        <tr>
                                            <th>Categories</th>
                                            <td>{{ item.categories }}</td>
                                            </tr>
                                        <tr>
                                            <th>Esb visiblity</th>
                                            <td>{{ item.esb_visiblity }}</td>
                                            </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>{{ item.address }}</td>
                                            </tr>
                                        <tr>
                                            <th>Place longitude</th>
                                            <td>{{ item.place_longitude }}</td>
                                            </tr>
                                        <tr>
                                            <th>Place latitude</th>
                                            <td>{{ item.place_latitude }}</td>
                                            </tr>
                                        <tr>
                                            <th>City</th>
                                            <td>
                                                <span class="label label-info" v-for="city in item.city">
                                                    {{ city.title }}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Featured image</th>
                                            <td v-html="item.featured_image_link"></td>
                                            </tr>
                                        <tr>
                                            <th>Gallery</th>
                                            <td v-html="item.gallery_link"></td>
                                            </tr>
                                        <tr>
                                            <th>Cuisine</th>
                                            <td>{{ item.cuisine }}</td>
                                            </tr>
                                        <tr>
                                            <th>recommended</th>
                                            <td>{{ item.recommended }}</td>
                                            </tr>
                                        <tr>
                                            <th>Partner</th>
                                            <td>{{ item.partner }}</td>
                                            </tr>
                                        <tr>
                                            <th>Place tripadvisor id</th>
                                            <td>{{ item.place_tripadvisor_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>City id</th>
                                            <td>{{ item.city_id }}</td>
                                            </tr>
                                        <tr>
                                            <th>Created by team</th>
                                            <td>
                                                <span class="label label-info" v-if="item.created_by_team !== null">
                                                    {{ item.created_by_team.name }}
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
        ...mapGetters('PlacesSingle', ['item'])
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('PlacesSingle', ['fetchData', 'resetState'])
    }
}
</script>


<style scoped>

</style>
