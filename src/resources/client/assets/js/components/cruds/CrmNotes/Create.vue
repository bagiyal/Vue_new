<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Notes</h1>
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
                                    <label for="note">Notes</label>
                                    <textarea
                                            rows="3"
                                            class="form-control"
                                            name="note"
                                            placeholder="Enter Notes"
                                            :value="item.note"
                                            @input="updateNote"
                                            >
                                    </textarea>
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
        ...mapGetters('CrmNotesSingle', ['item', 'loading', 'crmcustomersAll'])
    },
    created() {
        this.fetchCrmcustomersAll()
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('CrmNotesSingle', ['storeData', 'resetState', 'setCustomer', 'setNote', 'fetchCrmcustomersAll']),
        updateCustomer(value) {
            this.setCustomer(value)
        },
        updateNote(e) {
            this.setNote(e.target.value)
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'crm_notes.index' })
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
