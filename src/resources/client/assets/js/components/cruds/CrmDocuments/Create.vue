<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Documents</h1>
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
                                    <label for="customer">Customer *</label>
                                    <v-select
                                            name="customer"
                                            label="first_name"
                                            @input="updateCustomer"
                                            :value="item.customer"
                                            :options="crmcustomersAll"
                                            />
                                </div>
                                <div class="form-group">
                                    <label for="name">Title</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            placeholder="Enter Title"
                                            :value="item.name"
                                            @input="updateName"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea
                                            rows="3"
                                            class="form-control"
                                            name="description"
                                            placeholder="Enter Description"
                                            :value="item.description"
                                            @input="updateDescription"
                                            >
                                    </textarea>
                                </div>
                                <div class="form-group">
                                    <label for="file">File *</label>
                                    <input
                                            type="file"
                                            class="form-control"
                                            @change="updateFile"
                                    >
                                    <ul v-if="item.file" class="list-unstyled">
                                        <li>
                                            {{ item.file.name || item.file.file_name }}
                                            <button class="btn btn-xs btn-danger"
                                                    type="button"
                                                    @click="removeFile"
                                            >
                                                Remove file
                                            </button>
                                        </li>
                                    </ul>
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
        ...mapGetters('CrmDocumentsSingle', ['item', 'loading', 'crmcustomersAll'])
    },
    created() {
        this.fetchCrmcustomersAll()
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('CrmDocumentsSingle', ['storeData', 'resetState', 'setCustomer', 'setName', 'setDescription', 'setFile', 'fetchCrmcustomersAll']),
        updateCustomer(value) {
            this.setCustomer(value)
        },
        updateName(e) {
            this.setName(e.target.value)
        },
        updateDescription(e) {
            this.setDescription(e.target.value)
        },
        removeFile(e, id) {
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
                    this.setFile('');
                }
            })
        },
        updateFile(e) {
            this.setFile(e.target.files[0]);
            this.$forceUpdate();
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'crm_documents.index' })
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
