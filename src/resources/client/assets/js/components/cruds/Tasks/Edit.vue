<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Task Edit</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box box_design">
                            <div class="box-header with-border">

                            </div>



                            <bootstrap-alert />

                            <div class="box-body container-fluid">
                                <div class="row">
                                    <div class="form-group col-md-3">
                                        <label for="assign_date">Assign date</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="assign_date"
                                            placeholder="Enter Assign date"
                                            :value="item.assign_date"
                                            @input="updateAssign_date"
                                            disabled
                                        >
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="due_date">Due date</label>
                                        <date-picker
                                            :value="item.due_date"
                                            :config="$root.dpconfigDatetime"

                                            @dp-change="updateDue_date"
                                            :disabled="item.status==='2'"
                                        >
                                        </date-picker>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="ref_id">Ref id</label>
                                        <input
                                            type="text"
                                            class="form-control"

                                            :value="JSON.parse(item.ref_id).booking_id"
                                            disabled
                                        >
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="reminder">Reminder</label><br>
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-3" > <p class="f-2">ON</p></div>
                                                <div class="col-md-3" >
                                                    <label class="switch">
                                                        <input type="checkbox" v-model="item.reminder">
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                                <div class="col-md-3" > <p class="f-2">OFF</p></div>
                                                <div class="col-md-3" ></div>
                                            </div>
                                        </div>
<!--                                        <p class="f-2">ON</p>-->

<!--                                        <p class="f-2">OFF</p>-->


                                    </div>

                                </div></div>
                            <div class="box-body container-fluid">




                                <div class="form-group">
                                    <label for="remark">Remark</label>
<!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="remark"-->
<!--                                            placeholder="Enter Remark"-->
<!--                                            :value="item.remark"-->
<!--                                            @input="updateRemark"-->
<!--                                            >-->
                                    <textarea rows="5" cols="100" class="form-control" name="remark" placeholder="Enter Remark" :value="item.remark" @input="updateRemark">

                                    </textarea>
                                </div>

                                <div class="form-group">
<!--                                    <label for="status">Mark as Finish</label>-->
                                    <button :disabled="item.status==='2'" class="button-css " style="margin-left: -155px;" @click="updateStatus(2)">Mark as Finish</button>
                                    <button :disabled="item.status==='2'" class="button-css">Save</button>

                                    <!--                                    <input-->
<!--                                            type="text"-->
<!--                                            class="form-control"-->
<!--                                            name="status"-->
<!--                                            placeholder="Enter Status"-->
<!--                                            :value="item.status"-->
<!--                                            @input="updateStatus"-->
<!--                                            >-->
                                </div>
                            </div>

<!--                            <div class="box-footer">-->
<!--                                <vue-button-spinner-->
<!--                                        class="btn btn-primary btn-sm"-->
<!--                                        :isLoading="loading"-->
<!--                                        :disabled="loading"-->
<!--                                        >-->
<!--                                    Save-->
<!--                                </vue-button-spinner>-->
<!--                            </div>-->
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
        ...mapGetters('TasksSingle', ['item', 'loading']),
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
        ...mapActions('TasksSingle', ['fetchData', 'updateData', 'resetState', 'setAgency_id', 'setAgent_id', 'setAgent_name', 'setAssign_date', 'setDue_date', 'setRef_id', 'setReminder', 'setReminder_time', 'setRemark', 'setStatus']),
        updateAgency_id(e) {
            this.setAgency_id(e.target.value)
        },
        updateAgent_id(e) {
            this.setAgent_id(e.target.value)
        },
        updateAgent_name(e) {
            this.setAgent_name(e.target.value)
        },
        updateAssign_date(e) {
            this.setAssign_date(e.target.value)
        },
        updateDue_date(e) {
            this.setDue_date(e.target.value)
        },
        updateRef_id(e) {
            this.setRef_id(e.target.value)
        },
        updateReminder(e) {
            this.setReminder(e.target.value)
        },
        updateReminder_time(e) {
            this.setReminder_time(e.target.value)
        },
        updateRemark(e) {
            this.setRemark(e.target.value)
        },
        updateStatus(e) {
            this.setStatus(e)
        },
        submitForm() {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'tasks.index' })
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
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #4a9999;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #17507d;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>
